import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored || 'dark';
  });
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    applyTheme(theme);
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
    } else {
      root.setAttribute('data-theme', selectedTheme);
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const root = document.documentElement;
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="theme-toggle"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        borderRadius: '12px',
        background: 'var(--glass-light)',
        border: '1px solid var(--glass-border)',
      }}
    >
      <button
        onClick={() => handleThemeChange('dark')}
        aria-label="Dark theme"
        title="Dark theme"
        style={{
          padding: '6px',
          background: theme === 'dark' ? 'var(--glass-medium)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          color: theme === 'dark' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        🌙
      </button>
      <button
        onClick={() => handleThemeChange('light')}
        aria-label="Light theme"
        title="Light theme"
        style={{
          padding: '6px',
          background: theme === 'light' ? 'var(--glass-medium)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          color: theme === 'light' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        ☀️
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        aria-label="System theme"
        title="System theme"
        style={{
          padding: '6px',
          background: theme === 'system' ? 'var(--glass-medium)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          color: theme === 'system' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        💻
      </button>
    </motion.div>
  );
}

export default ThemeToggle;
