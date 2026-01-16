import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackExternalLink } from '../utils/analytics';

type SharePlatform = 'linkedin' | 'twitter' | 'facebook';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  // Get current page URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'Check out Parthiv Paul\'s portfolio';
  const shareDescription = description || 'CS Student & Full-Stack Developer';

  const handleShare = (platform: SharePlatform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedDescription = encodeURIComponent(shareDescription);

    let shareLink = '';

    switch (platform) {
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
    }

    if (shareLink) {
      trackExternalLink(shareLink);
      window.open(shareLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      trackExternalLink('copied_link');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          marginRight: '8px',
        }}
      >
        Share:
      </span>
      <button
        onClick={() => handleShare('linkedin')}
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          background: 'var(--glass-light)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
        className="button"
      >
        <span>LinkedIn</span>
      </button>
      <button
        onClick={() => handleShare('twitter')}
        aria-label="Share on Twitter"
        title="Share on Twitter"
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          background: 'var(--glass-light)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
        className="button"
      >
        <span>Twitter</span>
      </button>
      <button
        onClick={() => handleShare('facebook')}
        aria-label="Share on Facebook"
        title="Share on Facebook"
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          background: 'var(--glass-light)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
        className="button"
      >
        <span>Facebook</span>
      </button>
      <button
        onClick={handleCopyLink}
        aria-label={copied ? 'Link copied!' : 'Copy link'}
        title={copied ? 'Link copied!' : 'Copy link'}
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          background: copied ? 'var(--accent-green)' : 'var(--glass-light)',
          border: `1px solid ${copied ? 'var(--accent-green)' : 'var(--glass-border)'}`,
          color: copied ? '#ffffff' : 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
        className="button"
      >
        <span>{copied ? '✓ Copied' : 'Copy Link'}</span>
      </button>
    </div>
  );
}

export default SocialShare;
