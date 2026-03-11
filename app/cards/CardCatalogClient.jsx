"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

// ─── CATEGORY DEFINITIONS ───
const AWARD_CATEGORIES = [
  { id: "free", label: "Best Free Cards", icon: "🆓", desc: "No annual fee, no catches", color: "#16a34a" },
  { id: "cashback", label: "Best Cashback", icon: "💰", desc: "Highest effective cashback", color: "#d97706" },
  { id: "dining", label: "Best for Dining", icon: "🍽️", desc: "Restaurants, Swiggy, Zomato", color: "#ef4444" },
  { id: "online", label: "Best for Online", icon: "🛒", desc: "Amazon, Flipkart, Myntra", color: "#8b5cf6" },
  { id: "travel", label: "Best for Travel", icon: "✈️", desc: "Flights, hotels, miles", color: "#0891b2" },
  { id: "fuel", label: "Best for Fuel", icon: "⛽", desc: "Petrol pumps, surcharge", color: "#ea580c" },
  { id: "groceries", label: "Best for Groceries", icon: "🥦", desc: "BigBasket, Blinkit, stores", color: "#059669" },
  { id: "premium", label: "Best Premium", icon: "💎", desc: "High fee, high rewards", color: "#1e293b" },
];

// ─── MINI CARD COMPONENT ───
function CardRow({ card, highlight, highlightLabel }) {
  const maxRate = Math.max(...Object.entries(card.rewards).filter(([k]) => k !== "default").map(([, v]) => v));

  return (
    <Link href={`/cards/${card.id}`} className="no-underline" style={{ color: "inherit" }}>
      <div className="rounded-xl p-4 flex items-center gap-4 transition-all cursor-pointer" style={{
        background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)",
      }}>
        {/* Card icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{
          background: `${card.color}0a`, border: `1px solid ${card.color}18`,
        }}>{card.img}</div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>{card.name}</span>
            {card.verified && <span className="text-[10px] font-semibold rounded px-1.5 py-0.5" style={{ background: "var(--green-bg)", color: "var(--green)" }}>✅</span>}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
            {card.bank} · {card.fee === 0 ? "Free" : `₹${card.fee.toLocaleString()}/yr`} · {card.network}
          </div>
          {highlight && (
            <div className="text-xs mt-1 font-semibold" style={{ color: "var(--green)" }}>
              {highlightLabel}: {highlight}%
            </div>
          )}
        </div>

        {/* Best rate */}
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-extrabold" style={{ color: "var(--green)" }}>{maxRate}%</div>
          <div className="text-[10px]" style={{ color: "var(--text-faint)" }}>best rate</div>
        </div>
      </div>
    </Link>
  );
}

// ─── FULL CARD (for "All Cards" grid) ───
function CardTile({ card }) {
  const maxCat = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0];

  return (
    <Link href={`/cards/${card.id}`} className="no-underline" style={{ color: "inherit" }}>
      <div className="rounded-xl overflow-hidden transition-all cursor-pointer h-full" style={{
        background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)",
      }}>
        <div style={{ height: 3, background: card.color }} />
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{
              background: `${card.color}0a`, border: `1px solid ${card.color}18`,
            }}>{card.img}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>{card.name}</div>
              <div className="text-[11px]" style={{ color: "var(--text-faint)" }}>{card.bank}</div>
            </div>
            {card.verified && <span className="text-[10px] font-semibold rounded px-1.5 py-0.5 flex-shrink-0" style={{ background: "var(--green-bg)", color: "var(--green)" }}>✅</span>}
          </div>

          <div className="flex gap-4 mb-3">
            <div>
              <div className="text-[10px] uppercase" style={{ color: "var(--text-faint)" }}>Fee</div>
              <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{card.fee === 0 ? "Free" : `₹${card.fee.toLocaleString()}`}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase" style={{ color: "var(--text-faint)" }}>Best rate</div>
              <div className="text-sm font-bold" style={{ color: "var(--green)" }}>{maxCat[1]}%</div>
            </div>
            <div>
              <div className="text-[10px] uppercase" style={{ color: "var(--text-faint)" }}>Lounge</div>
              <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{card.lounge}</div>
            </div>
          </div>

          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            Best for <span className="font-semibold" style={{ color: "var(--text)" }}>{maxCat[0]}</span> · {card.type}
          </div>

          {card.caps && (
            <div className="mt-2 text-[10px] font-semibold rounded px-2 py-1 inline-block" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>
              ⚡ Has cashback cap
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── MAIN ───
export default function CardCatalogClient({ winners, allCards, banks }) {
  const [search, setSearch] = useState("");
  const [bankFilter, setBankFilter] = useState("All");
  const [feeFilter, setFeeFilter] = useState("All");
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = useMemo(() => {
    return allCards.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.bank.toLowerCase().includes(search.toLowerCase())) return false;
      if (bankFilter !== "All" && c.bank !== bankFilter) return false;
      if (feeFilter === "Free" && c.fee !== 0) return false;
      if (feeFilter === "Under ₹1K" && (c.fee === 0 || c.fee > 1000)) return false;
      if (feeFilter === "₹1K-5K" && (c.fee <= 1000 || c.fee > 5000)) return false;
      if (feeFilter === "₹5K+" && c.fee <= 5000) return false;
      return true;
    });
  }, [allCards, search, bankFilter, feeFilter]);

  return (
    <section className="pt-24 pb-20 px-6" style={{ maxWidth: 1000, margin: "0 auto" }}>

      {/* ═══ HEADER ═══ */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>
          💳 Card Directory
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          Best Credit Cards in India 2026
        </h1>
        <p className="text-base" style={{ color: "var(--text-muted)", maxWidth: 560 }}>
          25 cards analyzed with real cashback math. Browse by category or search. Every rate verified from bank websites.
        </p>
      </div>

      {/* ═══ CATEGORY TABS ═══ */}
      <div className="mb-8">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className="rounded-lg px-3.5 py-2 text-xs font-semibold cursor-pointer border-none transition-all"
            style={{
              background: activeCategory === null ? "var(--accent)" : "var(--bg-muted)",
              color: activeCategory === null ? "#fff" : "var(--text-muted)",
              border: activeCategory === null ? "none" : "1px solid var(--border)",
            }}
          >All Cards</button>
          {AWARD_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className="rounded-lg px-3.5 py-2 text-xs font-semibold cursor-pointer border-none transition-all flex items-center gap-1.5"
              style={{
                background: activeCategory === cat.id ? `${cat.color}15` : "var(--bg-muted)",
                color: activeCategory === cat.id ? cat.color : "var(--text-muted)",
                border: activeCategory === cat.id ? `1.5px solid ${cat.color}30` : "1px solid var(--border)",
              }}
            >{cat.icon} {cat.label}</button>
          ))}
        </div>
      </div>

      {/* ═══ CATEGORY VIEW ═══ */}
      {activeCategory && (
        <div className="mb-12">
          {(() => {
            const cat = AWARD_CATEGORIES.find(c => c.id === activeCategory);
            const cards = winners[activeCategory] || [];
            const catId = ["dining", "travel", "online", "fuel", "groceries"].includes(activeCategory) ? activeCategory : null;
            return (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${cat.color}10`, border: `1px solid ${cat.color}20` }}>{cat.icon}</div>
                  <div>
                    <h2 className="text-xl font-extrabold" style={{ color: "var(--text)" }}>{cat.label}</h2>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{cat.desc}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  {cards.map((c, i) => (
                    <div key={c.id} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{
                        background: i === 0 ? cat.color : "var(--bg-muted)",
                        color: i === 0 ? "#fff" : "var(--text-faint)",
                      }}>#{i + 1}</div>
                      <div className="flex-1">
                        <CardRow
                          card={c}
                          highlight={catId ? c.rewards[catId] : null}
                          highlightLabel={catId ? cat.label : null}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {catId && (
                  <div className="mt-4 text-center">
                    <Link href={`/smart-swipe`} className="text-sm font-semibold no-underline" style={{ color: "var(--accent-text)" }}>
                      → Use Smart Swipe to find the best card for YOUR spending
                    </Link>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ═══ ALL CARDS (with filters) ═══ */}
      {!activeCategory && (
        <>
          {/* Filters */}
          <div className="flex gap-3 mb-6 flex-wrap items-center">
            <input
              type="text"
              placeholder="Search cards..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="rounded-lg px-3.5 py-2.5 text-sm border-none outline-none flex-1"
              style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)", minWidth: 180 }}
            />
            <select
              value={bankFilter}
              onChange={e => setBankFilter(e.target.value)}
              className="rounded-lg px-3 py-2.5 text-sm border-none outline-none cursor-pointer"
              style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              <option value="All">All Banks</option>
              {banks.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <select
              value={feeFilter}
              onChange={e => setFeeFilter(e.target.value)}
              className="rounded-lg px-3 py-2.5 text-sm border-none outline-none cursor-pointer"
              style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              <option value="All">Any Fee</option>
              <option value="Free">Free Only</option>
              <option value="Under ₹1K">Under ₹1,000</option>
              <option value="₹1K-5K">₹1,000 - ₹5,000</option>
              <option value="₹5K+">₹5,000+</option>
            </select>
            <div className="text-xs" style={{ color: "var(--text-faint)" }}>{filtered.length} cards</div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
            {filtered.map(c => <CardTile key={c.id} card={c} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 rounded-2xl" style={{ background: "var(--bg-muted)" }}>
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>No cards match your filters</div>
              <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Try adjusting your search or filters</div>
            </div>
          )}
        </>
      )}

      {/* ═══ BROWSE BY CATEGORY (when showing all cards) ═══ */}
      {!activeCategory && (
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>Browse by category</h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {AWARD_CATEGORIES.map(cat => {
              const cards = winners[cat.id] || [];
              const topCard = cards[0];
              return (
                <div
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="rounded-xl p-5 cursor-pointer transition-all"
                  style={{ background: `${cat.color}06`, border: `1px solid ${cat.color}15` }}
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <div className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>{cat.label}</div>
                  <div className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{cat.desc}</div>
                  {topCard && (
                    <div className="flex items-center gap-2 rounded-lg p-2" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                      <span className="text-lg">{topCard.img}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold truncate" style={{ color: "var(--text)" }}>{topCard.name}</div>
                        <div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{topCard.fee === 0 ? "Free" : `₹${topCard.fee.toLocaleString()}`}</div>
                      </div>
                      <div className="text-xs font-bold" style={{ color: "var(--green)" }}>🏆</div>
                    </div>
                  )}
                  <div className="text-xs mt-2 font-semibold" style={{ color: cat.color }}>{cards.length} cards →</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ CTA ═══ */}
      <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <h2 className="text-xl font-extrabold mb-2" style={{ color: "var(--text)" }}>Not sure which card is best for you?</h2>
        <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Use our Smart Swipe Guide — select your cards, enter your spending, get personalized recommendations with cap-aware math.</p>
        <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-xl px-8 py-3 text-sm font-bold">
          Try Smart Swipe →
        </Link>
      </div>
    </section>
  );
}
