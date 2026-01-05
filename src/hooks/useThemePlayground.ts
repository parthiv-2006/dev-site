import { useState, useEffect } from 'react';

export interface ThemeConfig {
  accentColor: string;
  borderRadius: number;
  fontSize: number;
}

const DEFAULT_THEME: ThemeConfig = {
  accentColor: '#d97706',
  borderRadius: 12,
  fontSize: 16,
};

const STORAGE_KEY = 'theme-playground-config';

export default function useThemePlayground() {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    // Load from localStorage if available
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return DEFAULT_THEME;
        }
      }
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    // Apply theme variables to document root
    const root = document.documentElement;
    root.style.setProperty('--theme-accent', theme.accentColor);
    root.style.setProperty('--theme-accent-light', adjustBrightness(theme.accentColor, 20));
    root.style.setProperty('--theme-radius', `${theme.borderRadius}px`);
    root.style.setProperty('--theme-font-size-base', `${theme.fontSize}px`);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  }, [theme]);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  };

  const resetTheme = () => {
    setTheme(DEFAULT_THEME);
  };

  return { theme, updateTheme, resetTheme };
}

// Helper to adjust color brightness
function adjustBrightness(hex: string, percent: number): string {
  // Remove # if present
  const color = hex.replace('#', '');
  
  // Parse RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Adjust brightness
  const adjust = (value: number) => {
    const adjusted = value + (value * percent) / 100;
    return Math.min(255, Math.max(0, Math.round(adjusted)));
  };

  const newR = adjust(r);
  const newG = adjust(g);
  const newB = adjust(b);

  // Convert back to hex
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}
