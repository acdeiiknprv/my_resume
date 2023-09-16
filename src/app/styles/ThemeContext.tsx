// ThemeContext.js

import { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from './theme';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const defaultThemeState = {
    theme: darkTheme,
    toggleTheme: () => {}
  };

const ThemeContext = createContext(defaultThemeState);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    console.log("Toggling theme");
    setTheme(prevTheme => prevTheme.palette.mode === 'light' ? darkTheme : lightTheme);
  };  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => useContext(ThemeContext);
