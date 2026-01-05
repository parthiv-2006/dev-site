import { useState, useEffect } from 'react';
import { now, type NowActivity } from '../content/data';

const CACHE_KEY = 'now-widget-data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const PRIVACY_KEY = 'now-widget-enabled';

interface CachedData {
  data: NowActivity;
  timestamp: number;
}

export default function useNowData() {
  const [activity, setActivity] = useState<NowActivity | null>(null);
  const [loading, setLoading] = useState(true);
  const [enabled, setEnabled] = useState(() => {
    const stored = localStorage.getItem(PRIVACY_KEY);
    return stored !== 'false'; // Enabled by default
  });

  const toggleEnabled = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    localStorage.setItem(PRIVACY_KEY, String(newValue));
    if (!newValue) {
      setActivity(null);
    }
  };

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    const fetchNowData = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp }: CachedData = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            console.log('Using cached data:', data);
            setActivity(data);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data
        console.log('Fetching fresh data from APIs...');
        const [githubData, spotifyData] = await Promise.all([
          fetchGitHubActivity(),
          fetchSpotifyActivity(),
        ]);

        console.log('GitHub data:', githubData);
        console.log('Spotify data:', spotifyData);

        const currentTime = new Date().toLocaleTimeString('en-US', {
          timeZone: now.location.timezone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });

        const newActivity: NowActivity = {
          github: githubData,
          spotify: spotifyData,
          location: {
            city: now.location.city,
            timezone: now.location.timezone,
            time: currentTime,
          },
        };

        setActivity(newActivity);

        // Cache the result
        const cacheData: CachedData = {
          data: newActivity,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      } catch (error) {
        console.error('Failed to fetch now data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowData();

    // Poll every 5 minutes
    const interval = setInterval(fetchNowData, CACHE_DURATION);

    return () => clearInterval(interval);
  }, [enabled]);

  // Update time every minute
  useEffect(() => {
    if (!enabled || !activity) return;

    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString('en-US', {
        timeZone: now.location.timezone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      setActivity((prev) =>
        prev
          ? {
              ...prev,
              location: { ...prev.location, time: currentTime },
            }
          : null
      );
    };

    const timeInterval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timeInterval);
  }, [enabled, activity]);

  return { activity, loading, enabled, toggleEnabled };
}

// Fetch GitHub activity
async function fetchGitHubActivity() {
  if (!now.github.enabled) return undefined;

  try {
    const response = await fetch(
      `https://api.github.com/users/${now.github.username}/events/public?per_page=10`
    );

    if (!response.ok) throw new Error('GitHub API failed');

    const events = await response.json();
    
    // Try to find any recent activity (push, PR, issue, etc.)
    const relevantEvent = events.find((e: any) => 
      ['PushEvent', 'PullRequestEvent', 'CreateEvent', 'IssuesEvent'].includes(e.type)
    );

    if (relevantEvent) {
      let message = 'Recent activity';
      
      if (relevantEvent.type === 'PushEvent') {
        const commit = relevantEvent.payload.commits?.[0];
        message = commit?.message || 'Pushed commits';
      } else if (relevantEvent.type === 'PullRequestEvent') {
        message = relevantEvent.payload.pull_request?.title || 'Pull request';
      } else if (relevantEvent.type === 'CreateEvent') {
        message = `Created ${relevantEvent.payload.ref_type}`;
      } else if (relevantEvent.type === 'IssuesEvent') {
        message = relevantEvent.payload.issue?.title || 'Issue activity';
      }
      
      return {
        repo: relevantEvent.repo.name,
        message: message,
        timestamp: relevantEvent.created_at,
      };
    }
  } catch (error) {
    console.error('GitHub fetch failed:', error);
  }

  return undefined;
}

// Fetch Spotify activity (mock for now - requires OAuth for real implementation)
async function fetchSpotifyActivity() {
  if (!now.spotify.enabled) return undefined;

  // Mock data for demo purposes
  // To integrate real Spotify: Set up OAuth flow and use /me/player/currently-playing endpoint
  const mockSongs = [
    { song: 'Weightless', artist: 'Marconi Union' },
    { song: 'Clair de Lune', artist: 'Claude Debussy' },
    { song: 'Strobe', artist: 'deadmau5' },
    { song: 'Avril 14th', artist: 'Aphex Twin' },
  ];

  const random = mockSongs[Math.floor(Math.random() * mockSongs.length)];
  const isPlaying = Math.random() > 0.5; // Random for demo

  return {
    ...random,
    isPlaying,
  };
}
