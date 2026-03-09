"use client";
import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { CARDS, CATEGORIES, defaultSpending, getBestCardForCategory } from "@/data/cards";
import { SectionHeader, CardSelector, SpendingInput, EmptyState } from "./ui";

export default function SmartSwipeClient() {
  const [sel, setSel] = useState([]);
  const [show, setShow] = useState(false);
  const [spend, setSpend] = useState(defaultSpending());
  const [showS, setShowS] = useState(false);
  const toggle = (id) => { setSel(p => p.includes(id) ? p.filter(c => c !== id) : [...p, id]); setShow(false); };

  const savings = useMemo(() => {
    if (!show || !sel.length) return 0;
    let opt = 0;
    CATEGORIES.forEach(cat => {
      const m = spend[cat.id] || 0;
      const r = getBestCardForCategory(sel, cat.id);
      opt += m * 12 * ((r?.reward || 0) - 1) / 100;
    });
    return Math.round(opt);
  }, [show, sel, spend]);

  return (
    <section className="pt-24 pb-20 px-6 max-w-screen-lg mx-auto">
      <SectionHeader badge="🎯 Tool #1" badgeBg="var(--green-bg)" badgeBorder="var(--green-border)" badgeColor="var(--green)" title="Smart Swipe Guide" subtitle="Select your cards, enter your spending, and see which card to swipe for every purchase." />

      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Step 1: Select your cards</h3>
        <CardSelector selectedCards={sel} toggleCard={toggle} />
      </div>

      {sel.length === 0 && <EmptyState title="Select at least one card to get started" subtitle="Pick the cards you use from the grid above" />}

      {sel.length > 0 && <>
        <button onClick={() => setShowS(!showS)} className="rounded-lg px-4 py-2.5 text-sm font-semibold cursor-pointer mb-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--accent-text)", boxShadow: "var(--shadow)" }}>
          {showS ? "▾" : "▸"} Step 2: Customize monthly spending (optional)
        </button>
        {showS && <SpendingInput spending={spend} setSpending={setSpend} />}

        <button onClick={() => setShow(true)} className="w-full bg-gradient-to-r from-brand-500 to-purple-600 text-white border-none rounded-xl py-4 text-base font-semibold cursor-pointer mb-10 shadow-lg shadow-brand-500/25">
          Show My Best Cards →
        </button>
      </>}

      {show && sel.length > 0 && (
        <div className="animate-fadeUp">
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Your optimal card for each category</h3>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((cat, i) => {
              const r = getBestCardForCategory(sel, cat.id);
              if (!r?.card) return null;
              const mo = Math.round(spend[cat.id] * r.reward / 100);
              return (
                <div key={cat.id} className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)", animationDelay: `${i * 0.04}s` }}>
                  <div className="flex items-center gap-3 min-w-[160px]">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{cat.label}</div>
                      <div className="text-xs" style={{ color: "var(--text-faint)" }}>{cat.desc}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link href={`/cards/${r.card.id}`} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold no-underline" style={{ background: `${r.card.color}18`, border: `1px solid ${r.card.color}25`, color: "var(--text)" }}>
                      {r.card.img} {r.card.name}
                    </Link>
                    <div className="rounded-md px-2 py-0.5 text-sm font-bold font-mono" style={{ background: "var(--green-bg)", color: "var(--green)" }}>{r.reward}%</div>
                    <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>≈ ₹{mo}/mo</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl p-7 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Extra rewards vs a basic 1% card</div>
            <div className="text-4xl font-extrabold" style={{ color: "var(--green)" }}>₹{savings.toLocaleString()}<span className="text-lg" style={{ color: "var(--text-muted)" }}>/year</span></div>
            <div className="text-sm mt-2" style={{ color: "var(--text-faint)" }}>Monthly spend: ₹{Object.values(spend).reduce((a,b) => a+b, 0).toLocaleString()} · {sel.length} card{sel.length > 1 ? "s" : ""}</div>
          </div>
        </div>
      )}
    </section>
  );
}
