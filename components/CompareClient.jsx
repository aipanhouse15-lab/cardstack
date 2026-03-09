"use client";
import { useState } from "react";
import Link from "next/link";
import { CARDS, CATEGORIES } from "@/data/cards";
import { SectionHeader } from "./ui";

export default function CompareClient() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const c1 = CARDS.find(c => c.id === id1);
  const c2 = CARDS.find(c => c.id === id2);

  return (
    <section className="pt-24 pb-20 px-6 max-w-screen-lg mx-auto">
      <SectionHeader badge="⚖️ Compare" badgeBg="var(--blue-bg)" badgeBorder="var(--blue-border)" badgeColor="var(--blue)" title="Head-to-Head Comparison" subtitle="Compare any two cards across all categories, fees, and benefits." />

      <div className="grid grid-cols-2 gap-4 mb-8">
        {[{ v: id1, s: setId1, l: "Card 1" }, { v: id2, s: setId2, l: "Card 2" }].map((x, i) => (
          <div key={i}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-faint)" }}>{x.l}</div>
            <select value={x.v} onChange={e => x.s(e.target.value)} className="w-full rounded-lg py-3 px-3.5 text-sm cursor-pointer" style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)" }}>
              <option value="">Select a card...</option>
              {CARDS.map(c => <option key={c.id} value={c.id}>{c.name} ({c.bank})</option>)}
            </select>
          </div>
        ))}
      </div>

      {c1 && c2 && (
        <div className="animate-fadeUp">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[c1, c2].map((c, i) => (
              <Link key={i} href={`/cards/${c.id}`} className="rounded-xl p-5 text-center no-underline transition-all hover:-translate-y-0.5" style={{ background: `${c.color}18`, border: `1px solid ${c.color}25` }}>
                <span className="text-3xl">{c.img}</span>
                <div className="text-base font-bold mt-1.5" style={{ color: "var(--text)" }}>{c.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{c.bank} · {c.type}</div>
                <div className="flex justify-center gap-3 mt-2.5 text-xs">
                  <span><span style={{ color: "var(--text-faint)" }}>Fee </span><span className="font-bold" style={{ color: "var(--text)" }}>{c.fee === 0 ? "Free" : `₹${c.fee.toLocaleString()}`}</span></span>
                  <span><span style={{ color: "var(--text-faint)" }}>Lounge </span><span className="font-bold" style={{ color: "var(--text)" }}>{c.lounge}</span></span>
                </div>
                <div className="text-[10px] mt-1.5" style={{ color: "var(--text-faint)" }}>Tap for details</div>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="grid grid-cols-[1.2fr_1fr_1fr] p-3 px-4" style={{ background: "var(--bg-muted)", borderBottom: "1px solid var(--border)" }}>
              <span className="text-xs font-semibold" style={{ color: "var(--text-faint)" }}>Category</span>
              <span className="text-xs font-semibold text-center" style={{ color: c1.color }}>{c1.name}</span>
              <span className="text-xs font-semibold text-center" style={{ color: c2.color }}>{c2.name}</span>
            </div>
            {CATEGORIES.map((cat, i) => {
              const r1 = c1.rewards[cat.id] || c1.rewards.default;
              const r2 = c2.rewards[cat.id] || c2.rewards.default;
              const w = r1 > r2 ? 1 : r2 > r1 ? 2 : 0;
              return (
                <div key={cat.id} className="grid grid-cols-[1.2fr_1fr_1fr] p-3 px-4" style={{ borderBottom: i < CATEGORIES.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                  <div className="flex items-center gap-2"><span className="text-base">{cat.icon}</span><span className="text-sm" style={{ color: "var(--text-secondary)" }}>{cat.label}</span></div>
                  <div className="text-center text-base font-bold font-mono" style={{ color: w === 1 ? "var(--green)" : "var(--text-muted)" }}>{r1}%{w === 1 ? " ✓" : ""}</div>
                  <div className="text-center text-base font-bold font-mono" style={{ color: w === 2 ? "var(--green)" : "var(--text-muted)" }}>{r2}%{w === 2 ? " ✓" : ""}</div>
                </div>
              );
            })}
          </div>

          {(() => {
            let s1 = 0, s2 = 0;
            CATEGORIES.forEach(cat => { const r1 = c1.rewards[cat.id] || c1.rewards.default, r2 = c2.rewards[cat.id] || c2.rewards.default; if (r1 > r2) s1++; else if (r2 > r1) s2++; });
            return (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[[s1, c1.name, s1 >= s2], [s2, c2.name, s2 > s1]].map(([s, n, win], i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ background: win ? "var(--green-bg)" : "var(--bg-muted)", border: `1px solid ${win ? "var(--green-border)" : "var(--border)"}` }}>
                    <div className="text-2xl font-extrabold font-mono" style={{ color: win ? "var(--green)" : "var(--text-muted)" }}>{s}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>categories won</div>
                    <div className="text-sm font-semibold mt-1" style={{ color: win ? "var(--green)" : "var(--text-muted)" }}>{n}</div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}
