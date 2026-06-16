"use client";
import { createContext, useContext } from "react";

const ThemeContext = createContext({ mode: "dark", toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ mode: "dark", toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
