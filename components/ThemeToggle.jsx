"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const light = mode === "light";

  return (
    <button className="site-theme-toggle" type="button" aria-label="Light mode"
      aria-pressed={light} title={light ? "Switch to dark mode" : "Switch to light mode"} onClick={toggle}>
      <span aria-hidden="true">{light ? "☾" : "☀"}</span>
    </button>
  );
}
