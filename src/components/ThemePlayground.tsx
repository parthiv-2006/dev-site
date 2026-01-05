import { useState } from 'react';
import useThemePlayground from '../hooks/useThemePlayground';
import '../styles/theme-playground.css';

export default function ThemePlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, updateTheme, resetTheme } = useThemePlayground();

  return (
    <>
      {/* Toggle Button */}
      <button
        className="playground-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="theme-playground"
        title="Toggle Theme Playground"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2-4.2 4.2m0 6 4.2 4.2M1 12h6m6 0h6m-13.2 5.2 4.2-4.2m0-6-4.2-4.2" />
        </svg>
      </button>

      {/* Playground Panel */}
      <div
        id="theme-playground"
        className={`playground-panel ${isOpen ? 'playground-panel--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="playground-header">
          <h3 className="playground-title">Design Systems Flex</h3>
          <p className="playground-subtitle">Live token controls</p>
          <button
            className="playground-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close playground"
          >
            ×
          </button>
        </div>

        <div className="playground-controls">
          {/* Accent Color Control */}
          <div className="control-group">
            <label htmlFor="accent-color" className="control-label">
              Accent Color
            </label>
            <div className="control-input-group">
              <input
                id="accent-color"
                type="color"
                value={theme.accentColor}
                onChange={(e) => updateTheme({ accentColor: e.target.value })}
                className="control-color"
              />
              <input
                type="text"
                value={theme.accentColor}
                onChange={(e) => updateTheme({ accentColor: e.target.value })}
                className="control-text"
                placeholder="#d97706"
              />
            </div>
          </div>

          {/* Border Radius Control */}
          <div className="control-group">
            <label htmlFor="border-radius" className="control-label">
              Border Radius
              <span className="control-value">{theme.borderRadius}px</span>
            </label>
            <input
              id="border-radius"
              type="range"
              min="0"
              max="32"
              step="1"
              value={theme.borderRadius}
              onChange={(e) => updateTheme({ borderRadius: Number(e.target.value) })}
              className="control-slider"
            />
          </div>

          {/* Font Size Control */}
          <div className="control-group">
            <label htmlFor="font-size" className="control-label">
              Base Font Size
              <span className="control-value">{theme.fontSize}px</span>
            </label>
            <input
              id="font-size"
              type="range"
              min="12"
              max="20"
              step="1"
              value={theme.fontSize}
              onChange={(e) => updateTheme({ fontSize: Number(e.target.value) })}
              className="control-slider"
            />
          </div>
        </div>

        <div className="playground-footer">
          <button onClick={resetTheme} className="playground-reset">
            Reset to defaults
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="playground-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
