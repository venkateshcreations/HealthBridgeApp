import React, { createContext, useContext, useState, useEffect } from 'react';
import { DARK_COLORS, LIGHT_COLORS } from '../data/theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light', !isDark);
  }, [isDark]);

  const toggle = () => setIsDark(d => !d);
  const C = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <ThemeContext.Provider value={{ isDark, toggle, C }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
