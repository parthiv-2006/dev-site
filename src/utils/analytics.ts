// Privacy-focused analytics utility
// Supports multiple analytics providers with opt-in consent

type AnalyticsEvent = {
  name: string;
  properties?: Record<string, any>;
};

class Analytics {
  private enabled: boolean = false;
  private provider: 'plausible' | 'ga4' | 'none' = 'none';

  constructor() {
    // Check if analytics is enabled (can be controlled via environment or user consent)
    // Default to disabled - enable via environment variables if needed
    try {
      const metaEnv = (import.meta as any).env;
      this.enabled = metaEnv?.VITE_ANALYTICS_ENABLED === 'true';
      this.provider = (metaEnv?.VITE_ANALYTICS_PROVIDER || 'none') as 'plausible' | 'ga4' | 'none';
    } catch {
      this.enabled = false;
      this.provider = 'none';
    }
    
    // Check localStorage for user consent
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('analytics-consent');
      if (consent === 'false') {
        this.enabled = false;
      }
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.enabled) return;

    switch (this.provider) {
      case 'plausible':
        this.trackPlausible(event);
        break;
      case 'ga4':
        this.trackGA4(event);
        break;
      default:
        // No-op for development or disabled analytics
        try {
          const metaEnv = (import.meta as any).env;
          if (metaEnv?.DEV) {
            console.log('[Analytics]', event);
          }
        } catch {
          // Silently fail if env is not available
        }
    }
  }

  trackPageView(path: string) {
    if (!this.enabled) return;

    switch (this.provider) {
      case 'plausible':
        if (typeof window !== 'undefined' && (window as any).plausible) {
          (window as any).plausible('pageview', { u: path });
        }
        break;
      case 'ga4':
        if (typeof window !== 'undefined' && (window as any).gtag) {
          try {
            const metaEnv = (import.meta as any).env;
            const measurementId = metaEnv?.VITE_GA4_MEASUREMENT_ID || '';
            if (measurementId) {
              (window as any).gtag('config', measurementId, {
                page_path: path,
              });
            }
          } catch {
            // Silently fail if env is not available
          }
        }
        break;
    }
  }

  private trackPlausible(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible(event.name, { props: event.properties });
    }
  }

  private trackGA4(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.name, event.properties);
    }
  }

  setConsent(consent: boolean) {
    this.enabled = consent;
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics-consent', String(consent));
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Helper functions
export const trackEvent = (name: string, properties?: Record<string, any>) => {
  analytics.track({ name, properties });
};

export const trackPageView = (path: string) => {
  analytics.trackPageView(path);
};

export const trackDownload = (filename: string) => {
  trackEvent('download', { file: filename });
};

export const trackExternalLink = (url: string) => {
  trackEvent('external_link', { url });
};

export const trackContactForm = (success: boolean) => {
  trackEvent('contact_form', { success });
};
