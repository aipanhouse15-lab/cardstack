"use client";

import { useEffect, useState } from "react";

const preferenceKey = "assure-card-review-theme";

export default function CardReviewThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      setDark(localStorage.getItem(preferenceKey) === "dark");
    } catch {}
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem(preferenceKey, next ? "dark" : "light");
    } catch {}
  }

  return (
    <button className="card-review-theme" type="button" data-theme={dark ? "dark" : "light"}
      aria-label="Dark mode" aria-pressed={dark} title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}>
      {dark ? "☀" : "☾"}
    </button>
  );
}
