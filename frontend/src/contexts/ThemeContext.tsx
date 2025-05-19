import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";

interface ThemeContextType {
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
