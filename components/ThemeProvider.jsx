"use client";

import { createContext, useContext, useEffect, useState } from "react";

const preferenceKey = "assurefintech-theme";
const ThemeContext = createContext({ mode: "dark", toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (document.documentElement.dataset.theme === "light") setMode("light");
  }, []);

  function toggle() {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setMode(next);
    try {
      localStorage.setItem(preferenceKey, next);
    } catch {}
  }

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}
