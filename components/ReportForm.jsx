"use client";

// Google Form with pre-fill
const FORM_BASE = "https://docs.google.com/forms/d/e/1FAIpQLSdxSR9PYvavFrELzWEunMv5Y5MmWeKxwij0BnzFDuzO4_a2Ew/viewform?usp=pp_url";

export default function ReportForm({ cardName }) {
  const url = `${FORM_BASE}&entry.278806340=${encodeURIComponent(cardName)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full mt-4 rounded-xl py-3 text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all no-underline"
      style={{
        background: "var(--bg-muted)",
        border: "1px solid var(--border)",
        color: "var(--text-muted)",
      }}
    >
      <span>🐛</span> See something wrong with {cardName}? Report an update
    </a>
  );
}
