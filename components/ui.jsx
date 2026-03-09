"use client";
import { useState, useMemo } from "react";
import { CARDS, BANKS, CATEGORIES } from "@/data/cards";

// ─── SECTION HEADER ───
export function SectionHeader({ badge, badgeBg, badgeBorder, badgeColor, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {badge && (
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-medium"
          style={{
            background: badgeBg || "var(--accent-light)",
            border: `1px solid ${badgeBorder || "var(--accent-border)"}`,
            color: badgeColor || "var(--accent-text)",
          }}
        >
          {badge}
        </div>
      )}
      <h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── CARD SELECTOR ───
export function CardSelector({ selectedCards, toggleCard }) {
  const [search, setSearch] = useState("");
  const [bankFilter, setBankFilter] = useState("All");

  const filtered = useMemo(
    () =>
      CARDS.filter((c) => {
        const matchSearch =
          !search ||
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.bank.toLowerCase().includes(search.toLowerCase());
        const matchBank = bankFilter === "All" || c.bank === bankFilter;
        return matchSearch && matchBank;
      }),
    [search, bankFilter]
  );

  return (
    <div>
      <div className="flex gap-2.5 mb-4 flex-wrap">
        <div className="flex-1 min-w-[180px] relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base opacity-50">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cards..."
            className="w-full py-2.5 pl-10 pr-3 rounded-lg text-sm outline-none"
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-input)",
              color: "var(--text)",
            }}
          />
        </div>
        <select
          value={bankFilter}
          onChange={(e) => setBankFilter(e.target.value)}
          className="py-2.5 px-3.5 rounded-lg text-sm cursor-pointer min-w-[120px]"
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-input)",
            color: "var(--text)",
          }}
        >
          <option value="All">All Banks</option>
          {BANKS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        {selectedCards.length > 0 && (
          <div
            className="flex items-center px-3.5 rounded-lg text-xs font-semibold"
            style={{
              background: "var(--accent-light)",
              border: "1px solid var(--accent-border)",
              color: "var(--accent-text)",
            }}
          >
            {selectedCards.length} selected
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((card) => {
          const sel = selectedCards.includes(card.id);
          return (
            <button
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className="flex items-center gap-2.5 p-3 rounded-xl text-left transition-all cursor-pointer"
              style={{
                background: sel ? `${card.color}${sel ? "15" : ""}` : "var(--bg-card)",
                border: sel
                  ? `2px solid ${card.color}66`
                  : "1px solid var(--border)",
                boxShadow: sel ? "none" : "var(--shadow)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
                style={{ background: `${card.color}18` }}
              >
                {card.img}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-semibold truncate"
                  style={{ color: "var(--text)" }}
                >
                  {card.name}
                </div>
                <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                  {card.bank} · {card.fee === 0 ? "Free" : `₹${card.fee}/yr`}
                </div>
              </div>
              {sel && (
                <div
                  className="w-5 h-5 rounded flex items-center justify-center text-xs text-white shrink-0"
                  style={{ background: card.color }}
                >
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-8 text-sm" style={{ color: "var(--text-faint)" }}>
          No cards found
        </div>
      )}
    </div>
  );
}

// ─── SPENDING INPUT ───
export function SpendingInput({ spending, setSpending }) {
  const total = Object.values(spending).reduce((a, b) => a + b, 0);

  return (
    <div className="mb-6 animate-fadeUp">
      <div className="flex justify-between items-center mb-3.5">
        <h3
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          Monthly spending (₹)
        </h3>
        <div
          className="text-sm font-bold font-mono"
          style={{ color: "var(--accent-text)" }}
        >
          Total: ₹{total.toLocaleString()}/mo
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center gap-2.5 p-2 px-3 rounded-lg"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <span className="text-xl">{cat.icon}</span>
            <div className="flex-1">
              <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                {cat.label}
              </div>
              <input
                type="number"
                min="0"
                step="500"
                value={spending[cat.id]}
                onChange={(e) =>
                  setSpending((p) => ({
                    ...p,
                    [cat.id]: Math.max(0, parseInt(e.target.value) || 0),
                  }))
                }
                className="w-full bg-transparent border-none text-base font-bold font-mono outline-none py-0.5"
                style={{ color: "var(--accent-text)" }}
              />
            </div>
            <span className="text-xs" style={{ color: "var(--text-faint)" }}>₹/mo</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── EMPTY STATE ───
export function EmptyState({ icon = "👆", title, subtitle }) {
  return (
    <div
      className="text-center py-10 rounded-2xl"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-base font-semibold mb-1.5" style={{ color: "var(--text)" }}>
        {title}
      </div>
      <div className="text-sm" style={{ color: "var(--text-muted)" }}>
        {subtitle}
      </div>
    </div>
  );
}
