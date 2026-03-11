"use client";
import { useState } from "react";

const REPORT_TYPES = [
  { id: "wrong-rate", label: "Wrong reward rate", icon: "📊" },
  { id: "cap-changed", label: "Cap/limit changed", icon: "⚡" },
  { id: "fee-changed", label: "Fee changed", icon: "💰" },
  { id: "benefit-changed", label: "Benefit added/removed", icon: "🎁" },
  { id: "lounge-changed", label: "Lounge access changed", icon: "✈️" },
  { id: "other", label: "Other issue", icon: "📝" },
];

export default function ReportForm({ cardName, cardId }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [source, setSource] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!type || !details.trim()) return;

    const report = {
      card: cardName,
      cardId,
      reportType: type,
      details: details.trim(),
      source: source.trim() || "Not provided",
      timestamp: new Date().toISOString(),
    };

    // Download as JSON file
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cardstack-report-${cardId}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setType("");
      setDetails("");
      setSource("");
    }, 2500);
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 rounded-xl py-3 text-sm font-semibold border-none cursor-pointer flex items-center justify-center gap-2 transition-all"
        style={{
          background: "var(--bg-muted)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
        }}
      >
        <span>🐛</span> See something wrong? Report an update
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 16,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="rounded-2xl w-full max-w-md overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <div className="text-base font-bold" style={{ color: "var(--text)" }}>Report an Update</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>{cardName}</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-lg border-none cursor-pointer"
                style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}
              >×</button>
            </div>

            {submitted ? (
              /* Success state */
              <div className="p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <div className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>Thank you!</div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Report downloaded. We'll review and update the data.
                </div>
              </div>
            ) : (
              /* Form */
              <div className="p-5">
                {/* Report type */}
                <div className="mb-4">
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: "var(--text-faint)" }}>
                    What changed?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {REPORT_TYPES.map(rt => (
                      <button
                        key={rt.id}
                        onClick={() => setType(rt.id)}
                        className="text-left rounded-lg px-3 py-2.5 text-xs font-semibold border-none cursor-pointer transition-all flex items-center gap-2"
                        style={{
                          background: type === rt.id ? "var(--accent-light)" : "var(--bg-muted)",
                          border: type === rt.id ? "1.5px solid var(--accent-border)" : "1px solid var(--border)",
                          color: type === rt.id ? "var(--accent-text)" : "var(--text-secondary)",
                        }}
                      >
                        <span>{rt.icon}</span>{rt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="mb-4">
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: "var(--text-faint)" }}>
                    Details *
                  </label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="E.g., 'Cashback cap changed from ₹5000 to ₹4000 per cycle starting April 2026'"
                    rows={3}
                    className="w-full rounded-lg px-3 py-2.5 text-sm border-none outline-none resize-y"
                    style={{
                      background: "var(--bg-input)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>

                {/* Source */}
                <div className="mb-5">
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: "var(--text-faint)" }}>
                    Source (optional)
                  </label>
                  <input
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Bank website URL, email screenshot, app notification..."
                    className="w-full rounded-lg px-3 py-2.5 text-sm border-none outline-none"
                    style={{
                      background: "var(--bg-input)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!type || !details.trim()}
                  className="w-full rounded-xl py-3 text-sm font-bold border-none cursor-pointer transition-all"
                  style={{
                    background: (!type || !details.trim()) ? "var(--bg-muted)" : "var(--accent)",
                    color: (!type || !details.trim()) ? "var(--text-faint)" : "#fff",
                    opacity: (!type || !details.trim()) ? 0.6 : 1,
                  }}
                >
                  Submit Report →
                </button>
                <p className="text-[11px] text-center mt-2" style={{ color: "var(--text-faint)" }}>
                  Report downloads as a file. We review all submissions manually.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
