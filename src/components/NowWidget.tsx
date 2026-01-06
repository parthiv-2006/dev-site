import useNowData from '../hooks/useNowData';
import '../styles/now-widget.css';

export default function NowWidget() {
  const { activity, loading, enabled, toggleEnabled } = useNowData();

  if (!enabled) {
    return (
      <div className="now-widget now-widget--disabled">
        <div className="now-widget__header">
          <span className="now-widget__title">Now</span>
          <button
            onClick={toggleEnabled}
            className="now-widget__toggle"
            aria-label="Enable now widget"
            title="Enable live activity"
          >
            👁️
          </button>
        </div>
        <p className="now-widget__disabled-text">Activity hidden</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="now-widget">
        <div className="now-widget__header">
          <span className="now-widget__title">Now</span>
          <button
            onClick={toggleEnabled}
            className="now-widget__toggle"
            aria-label="Disable now widget"
            title="Hide live activity"
          >
            👁️
          </button>
        </div>
        <div className="now-widget__loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="now-widget" aria-live="polite">
      <div className="now-widget__header">
        <span className="now-widget__title">Now</span>
        <button
          onClick={toggleEnabled}
          className="now-widget__toggle"
          aria-label="Disable now widget"
          title="Hide live activity"
        >
          👁️
        </button>
      </div>

      <div className="now-widget__items">
        {/* GitHub Activity */}
        {activity?.github && (
          <div className="now-widget__item">
            <span className="now-widget__icon" aria-hidden="true">
              💻
            </span>
            <div className="now-widget__content">
              <div className="now-widget__label">Coding</div>
              <div className="now-widget__value" title={activity.github.message}>
                {activity.github.repo.split('/')[1] || activity.github.repo}
              </div>
            </div>
            <span className="now-widget__pulse" aria-label="Live indicator"></span>
          </div>
        )}

        {/* Quote of the Day */}
        {activity?.quote && (
          <div className="now-widget__item">
            <span className="now-widget__icon" aria-hidden="true">
              ✍️
            </span>
            <div className="now-widget__content">
              <div className="now-widget__label">Quote</div>
              <div className="now-widget__value" title={activity.quote.text}>
                {activity.quote.text}
                {activity.quote.author ? ` — ${activity.quote.author}` : ''}
              </div>
            </div>
          </div>
        )}

        {/* Location & Time */}
        {activity?.location && (
          <div className="now-widget__item">
            <span className="now-widget__icon" aria-hidden="true">
              🌍
            </span>
            <div className="now-widget__content">
              <div className="now-widget__label">Local time</div>
              <div className="now-widget__value">
                {activity.location.city} · {activity.location.time}
              </div>
            </div>
          </div>
        )}

        {/* Fallback when no activity */}
        {!activity?.github && !activity?.quote && (
          <div className="now-widget__item now-widget__item--muted">
            <span className="now-widget__icon" aria-hidden="true">
              ✨
            </span>
            <div className="now-widget__content">
              <div className="now-widget__value">Offline mode</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
