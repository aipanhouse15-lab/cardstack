"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { CARDS, CATEGORIES, defaultSpending, calcReward } from "@/data/cards";
import SpendingInput from "@/components/SpendingInput";
import SectionHeader from "@/components/SectionHeader";

// Generate all combos of size k from array
function combinations(arr, k) {
  if (k === 1) return arr.map(x => [x]);
  const result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    const head = arr[i];
    const tailCombos = combinations(arr.slice(i + 1), k - 1);
    for (const tail of tailCombos) {
      result.push([head, ...tail]);
    }
  }
  return result;
}

// Calculate total cashback for a combo of cards given spending
function calcComboSavings(cardIds, spending) {
  const cards = cardIds.map(id => CARDS.find(c => c.id === id)).filter(Boolean);
  let totalCashback = 0;
  const assignments = {};

  CATEGORIES.forEach(cat => {
    const spend = spending[cat.id] || 0;
    if (spend === 0) {
      assignments[cat.id] = { card: null, cashback: 0, rate: 0, capped: false };
      return;
    }

    let bestCard = null;
    let bestResult = { cashback: 0, effectiveRate: 0, capped: false, capNote: null };

    cards.forEach(card => {
      const result = calcReward(card, cat.id, spend);
      if (result.cashback > bestResult.cashback) {
        bestCard = card;
        bestResult = result;
      }
    });

    totalCashback += bestResult.cashback;
    assignments[cat.id] = {
      card: bestCard,
      cashback: bestResult.cashback,
      rate: bestResult.effectiveRate,
      capped: bestResult.capped,
      capNote: bestResult.capNote,
    };
  });

  return { totalCashback, assignments };
}

export default function StackBuilderClient() {
  const [spend, setSpend] = useState(defaultSpending());
  const [showSpend, setShowSpend] = useState(false);
  const [comboSize, setComboSize] = useState(2);
  const [calculated, setCalculated] = useState(false);
  const [feeFilter, setFeeFilter] = useState("all"); // all, free, under5k

  // Filter cards based on fee preference
  const eligibleCards = useMemo(() => {
    return CARDS.filter(c => {
      if (feeFilter === "free") return c.fee === 0;
      if (feeFilter === "under5k") return c.fee <= 5000;
      return true;
    });
  }, [feeFilter]);

  // Calculate all combos and rank
  const results = useMemo(() => {
    if (!calculated) return [];

    const cardIds = eligibleCards.map(c => c.id);
    if (cardIds.length < comboSize) return [];

    const allCombos = combinations(cardIds, comboSize);

    const scored = allCombos.map(combo => {
      const { totalCashback, assignments } = calcComboSavings(combo, spend);
      const cards = combo.map(id => CARDS.find(c => c.id === id));
      const totalFee = cards.reduce((s, c) => s + (c?.fee || 0), 0);
      const netSavings = (totalCashback * 12) - totalFee;
      const anyCapped = Object.values(assignments).some(a => a.capped);
      return { combo, cards, totalCashback, totalFee, netSavings, assignments, anyCapped };
    });

    scored.sort((a, b) => b.netSavings - a.netSavings);
    return scored.slice(0, 5);
  }, [calculated, eligibleCards, comboSize, spend]);

  // Baseline: single best card
  const baseline = useMemo(() => {
    const totalSpend = Object.values(spend).reduce((s, v) => s + v, 0);
    return Math.round(totalSpend * 0.01 * 12); // 1% flat card annual
  }, [spend]);

  return (
    <section className="pt-24 pb-20 px-6 max-w-[1000px] mx-auto">
      <SectionHeader
        badge="🏗️ Tool #5"
        badgeBg="var(--accent-light)" badgeBorder="var(--accent-border)" badgeColor="var(--accent-text)"
        title="Stack Builder"
        subtitle="Find the optimal 2 or 3 card combination that maximizes your total cashback. We test every possible combo from 25 cards."
      />

      {/* Config */}
      <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
        {/* Combo size */}
        <div className="mb-5">
          <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: "var(--text-faint)" }}>How many cards do you want?</label>
          <div className="flex gap-2">
            {[2, 3].map(n => (
              <button key={n} onClick={() => { setComboSize(n); setCalculated(false); }}
                className="rounded-lg px-5 py-2.5 text-sm font-bold cursor-pointer border-none transition-all"
                style={{
                  background: comboSize === n ? "var(--accent)" : "var(--bg-muted)",
                  color: comboSize === n ? "#fff" : "var(--text-muted)",
                  border: comboSize === n ? "none" : "1px solid var(--border)",
                }}>
                {n} Cards
              </button>
            ))}
          </div>
        </div>

        {/* Fee filter */}
        <div className="mb-5">
          <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: "var(--text-faint)" }}>Card fee preference</label>
          <div className="flex gap-2 flex-wrap">
            {[["all", "Any fee"], ["free", "Free cards only"], ["under5k", "Under ₹5,000/yr"]].map(([val, label]) => (
              <button key={val} onClick={() => { setFeeFilter(val); setCalculated(false); }}
                className="rounded-lg px-4 py-2 text-xs font-semibold cursor-pointer border-none transition-all"
                style={{
                  background: feeFilter === val ? "var(--green-bg)" : "var(--bg-muted)",
                  color: feeFilter === val ? "var(--green)" : "var(--text-muted)",
                  border: feeFilter === val ? "1px solid var(--green-border)" : "1px solid var(--border)",
                }}>
                {label} ({CARDS.filter(c => val === "all" ? true : val === "free" ? c.fee === 0 : c.fee <= 5000).length} cards)
              </button>
            ))}
          </div>
        </div>

        {/* Spending */}
        <div className="mb-5">
          <button onClick={() => setShowSpend(!showSpend)} className="rounded-lg px-4 py-2.5 text-sm font-semibold cursor-pointer"
            style={{ background: "var(--bg-muted)", border: "1px solid var(--border)", color: "var(--accent-text)" }}>
            {showSpend ? "▾" : "▸"} Customize monthly spending
          </button>
          <span className="text-xs ml-3" style={{ color: "var(--text-faint)" }}>
            Total: ₹{Object.values(spend).reduce((s, v) => s + v, 0).toLocaleString()}/mo
          </span>
        </div>
        {showSpend && <SpendingInput spending={spend} setSpending={setSpend} />}

        {/* Calculate */}
        <button onClick={() => setCalculated(true)}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-xl py-4 text-base font-semibold cursor-pointer shadow-lg">
          Find Best {comboSize}-Card Combo →
        </button>
        <p className="text-[11px] text-center mt-2" style={{ color: "var(--text-faint)" }}>
          Testing {combinations(eligibleCards.map(c => c.id), comboSize).length.toLocaleString()} combinations · Cap-aware math
        </p>
      </div>

      {/* Results */}
      {calculated && results.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
            Top {comboSize}-card combinations
          </h3>

          {results.map((r, rank) => (
            <div key={rank} className="rounded-2xl mb-4 overflow-hidden" style={{ border: rank === 0 ? "2px solid var(--green-border)" : "1px solid var(--border)", boxShadow: rank === 0 ? "0 4px 24px rgba(22,163,74,0.08)" : "var(--shadow)" }}>
              {/* Combo header */}
              <div className="px-5 py-3 flex items-center justify-between flex-wrap gap-2" style={{ background: rank === 0 ? "var(--green-bg)" : "var(--bg-muted)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold" style={{
                    background: rank === 0 ? "var(--green)" : "var(--bg-card)",
                    color: rank === 0 ? "#fff" : "var(--text-faint)",
                    border: rank === 0 ? "none" : "1px solid var(--border)",
                  }}>#{rank + 1}</span>
                  <span className="text-sm font-bold" style={{ color: "var(--text)" }}>
                    {r.cards.map(c => c.name).join(" + ")}
                  </span>
                  {rank === 0 && <span className="text-xs font-bold rounded-full px-2.5 py-0.5" style={{ background: "var(--green)", color: "#fff" }}>Best combo</span>}
                </div>
                {r.anyCapped && (
                  <span className="text-[10px] font-semibold rounded-full px-2 py-0.5" style={{ background: "var(--orange-bg)", color: "var(--orange)", border: "1px solid var(--orange-border)" }}>
                    ⚡ Cap warnings below
                  </span>
                )}
              </div>

              <div className="p-5" style={{ background: "var(--bg-card)" }}>
                {/* Cards in combo */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {r.cards.map(c => (
                    <Link key={c.id} href={`/cards/${c.id}`} className="flex items-center gap-2 rounded-lg px-3 py-2 no-underline text-xs font-semibold"
                      style={{ background: `${c.color}10`, border: `1px solid ${c.color}20`, color: "var(--text)" }}>
                      {c.img} {c.name}
                      <span className="text-[10px] font-normal" style={{ color: "var(--text-faint)" }}>
                        {c.fee === 0 ? "Free" : `₹${c.fee.toLocaleString()}`}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Category breakdown */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {CATEGORIES.map(cat => {
                    const a = r.assignments[cat.id];
                    if (!a?.card) return null;
                    return (
                      <div key={cat.id} className="rounded-lg px-3 py-2.5 flex items-center justify-between flex-wrap gap-2"
                        style={{ background: a.capped ? "var(--orange-bg)" : "var(--bg-muted)", border: a.capped ? "1px solid var(--orange-border)" : "1px solid var(--border-light)" }}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{cat.icon}</span>
                          <div>
                            <span className="text-xs font-semibold" style={{ color: "var(--text)" }}>{cat.label}</span>
                            <span className="text-[10px] ml-2" style={{ color: "var(--text-faint)" }}>→ {a.card.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold font-mono" style={{ color: a.capped ? "var(--orange)" : "var(--green)" }}>
                            {a.rate}%
                          </span>
                          <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>
                            ₹{a.cashback}/mo
                          </span>
                        </div>
                        {a.capped && (
                          <div className="w-full text-[10px] mt-1" style={{ color: "var(--orange)" }}>
                            ⚡ {a.capNote}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Savings summary */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg p-3" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
                    <div className="text-[10px] uppercase" style={{ color: "var(--green)" }}>Annual cashback</div>
                    <div className="text-xl font-extrabold" style={{ color: "var(--green)" }}>₹{(r.totalCashback * 12).toLocaleString()}</div>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
                    <div className="text-[10px] uppercase" style={{ color: "var(--orange)" }}>Total card fees</div>
                    <div className="text-xl font-extrabold" style={{ color: r.totalFee === 0 ? "var(--green)" : "var(--orange)" }}>
                      {r.totalFee === 0 ? "₹0" : `₹${r.totalFee.toLocaleString()}`}
                    </div>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
                    <div className="text-[10px] uppercase" style={{ color: "var(--accent-text)" }}>Net savings/yr</div>
                    <div className="text-xl font-extrabold" style={{ color: "var(--accent-text)" }}>₹{r.netSavings.toLocaleString()}</div>
                  </div>
                </div>

                {/* Share this stack */}
                <button
                  onClick={() => {
                    const url = `${window.location.origin}/stack/${r.combo.join("-and-")}`;
                    if (navigator.share) {
                      navigator.share({ title: `My ${r.combo.length}-Card Stack — ₹${r.netSavings.toLocaleString()}/yr savings`, url });
                    } else {
                      navigator.clipboard.writeText(url);
                      alert("Stack link copied! Share it with friends.");
                    }
                  }}
                  className="w-full mt-3 rounded-lg py-2.5 text-xs font-semibold cursor-pointer"
                  style={{ background: "var(--bg-muted)", border: "1px solid var(--border)", color: "var(--accent-text)" }}>
                  📤 Share this stack
                </button>
              </div>
            </div>
          ))}

          {/* vs baseline */}
          <div className="rounded-xl p-5 text-center mt-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              A basic 1% card would earn <strong style={{ color: "var(--text)" }}>₹{baseline.toLocaleString()}/year</strong>.
              {results[0] && (
                <span> The best {comboSize}-card combo saves you <strong style={{ color: "var(--green)" }}>₹{(results[0].netSavings - baseline).toLocaleString()} more</strong> per year — that's <strong style={{ color: "var(--green)" }}>{Math.round((results[0].netSavings / baseline - 1) * 100)}% more</strong> cashback.</span>
              )}
            </div>
          </div>

          {/* Already have cards? */}
          <div className="rounded-xl p-5 text-center mt-4" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>Already have cards? See how they perform</p>
            <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
              Try Smart Swipe →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
