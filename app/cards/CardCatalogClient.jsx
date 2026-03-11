"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

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

const BADGE_MAP = {
  "free": "BEST FREE CARD",
  "cashback": "BEST CASHBACK",
  "dining": "BEST FOR DINING",
  "online": "BEST FOR ONLINE",
  "travel": "BEST FOR TRAVEL",
  "fuel": "BEST FOR FUEL",
  "groceries": "BEST FOR GROCERIES",
  "premium": "BEST PREMIUM",
};

// ─── STYLE A: Editorial Card (for category view) ───
function EditorialCard({ card, rank, badgeLabel, badgeColor }) {
  return (
    <Link href={`/cards/${card.id}`} className="no-underline block mb-5" style={{ color: "inherit" }}>
      <div className="rounded-2xl overflow-hidden transition-all cursor-pointer" style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
        onMouseOver={e => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"}
        onMouseOut={e => e.currentTarget.style.boxShadow = "var(--shadow)"}>
        {/* Badge header */}
        <div style={{ background: `linear-gradient(135deg, ${badgeColor}, ${badgeColor}cc)`, padding: "11px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-extrabold" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>#{rank}</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em" }}>🏆 {badgeLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            {card.verified && <span style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>✅ Verified</span>}
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>View details →</span>
          </div>
        </div>
        {/* Body */}
        <div className="p-5" style={{ background: "var(--bg-card)" }}>
          <div className="flex gap-5 flex-wrap">
            <div className="flex-shrink-0 rounded-xl flex items-center justify-center text-4xl" style={{ width: 80, height: 52, background: `${card.color}08`, border: `1.5px solid ${card.color}15` }}>{card.img}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-extrabold" style={{ color: "var(--text)" }}>{card.name}</h3>
              <p className="text-sm mt-0.5 mb-3" style={{ color: "var(--text-muted)" }}>{card.bank} · {card.network} · {card.type}</p>
              {/* Stats */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 py-3 mb-3" style={{ borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
                {[["Fee", card.fee === 0 ? "Free" : `₹${card.fee.toLocaleString()}`, card.feeWaiver, false],
                  ["Best rate", `${Math.max(...Object.values(card.rewards))}%`, null, true],
                  ["Base", `${card.rewards.default || 0}%`, null, false],
                  ["Lounge", card.lounge, null, false],
                  ["Cap", card.caps ? "Has cap" : "None", null, false],
                ].map(([label, val, sub, isGreen], j) => (
                  <div key={j}>
                    <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>{label}</div>
                    <div className="text-[15px] font-extrabold mt-0.5" style={{ color: isGreen ? "var(--green)" : (label === "Cap" && val !== "None" ? "var(--orange)" : "var(--text)") }}>{val}</div>
                    {sub && <div className="text-[10px] mt-0.5" style={{ color: "var(--text-faint)" }}>{sub}</div>}
                  </div>
                ))}
              </div>
              {/* Verdict */}
              <div className="rounded-lg p-3.5 mb-3" style={{ background: "var(--bg-muted)" }}>
                <div className="text-[10px] font-extrabold uppercase tracking-wider mb-1" style={{ color: badgeColor }}>OUR TAKE</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {card.pros.join(". ")}. {card.cons.length > 0 ? `Watch out: ${card.cons[0].toLowerCase()}.` : ""}
                </p>
              </div>
              {/* Pros/Cons inline */}
              <div className="grid grid-cols-2 gap-3">
                <div>{card.pros.map((p, j) => <div key={j} className="text-xs mb-1 flex gap-1.5" style={{ color: "var(--text-secondary)" }}><span style={{ color: "var(--green)" }}>✓</span>{p}</div>)}</div>
                <div>{card.cons.map((c, j) => <div key={j} className="text-xs mb-1 flex gap-1.5" style={{ color: "var(--text-muted)" }}><span style={{ color: "var(--orange)" }}>✕</span>{c}</div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── STYLE B: Compact Tile (for all cards grid) ───
function CardTile({ card }) {
  const maxEntry = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0];

  return (
    <Link href={`/cards/${card.id}`} className="no-underline" style={{ color: "inherit" }}>
      <div className="rounded-xl overflow-hidden transition-all cursor-pointer h-full" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
        onMouseOver={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${card.color}12`; }}
        onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow)"; }}>
        <div style={{ height: 3, background: card.color }} />
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${card.color}08`, border: `1px solid ${card.color}15` }}>{card.img}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>{card.name}</div>
              <div className="text-[11px]" style={{ color: "var(--text-faint)" }}>{card.bank} · {card.fee === 0 ? "Free" : `₹${card.fee.toLocaleString()}/yr`}</div>
            </div>
            {card.verified && <span className="text-[10px] font-semibold rounded px-1.5 py-0.5 flex-shrink-0" style={{ background: "var(--green-bg)", color: "var(--green)" }}>✅</span>}
          </div>
          {/* Stats */}
          <div className="flex gap-4 mb-3 pb-3" style={{ borderBottom: "1px solid var(--border-light)" }}>
            <div><div className="text-[10px] uppercase" style={{ color: "var(--text-faint)" }}>Best</div><div className="text-lg font-extrabold" style={{ color: "var(--green)" }}>{maxEntry[1]}%</div><div className="text-[10px]" style={{ color: "var(--green)" }}>{maxEntry[0]}</div></div>
            <div><div className="text-[10px] uppercase" style={{ color: "var(--text-faint)" }}>Base</div><div className="text-lg font-extrabold" style={{ color: "var(--text)" }}>{card.rewards.default || 0}%</div></div>
            <div><div className="text-[10px] uppercase" style={{ color: "var(--text-faint)" }}>Lounge</div><div className="text-sm font-bold" style={{ color: "var(--text)" }}>{card.lounge}</div></div>
          </div>
          {/* Type + Cap */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-semibold rounded px-2 py-0.5" style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}>{card.type}</span>
            <span className="text-[10px] font-semibold rounded px-2 py-0.5" style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}>{card.network}</span>
            {card.caps && <span className="text-[10px] font-bold rounded px-2 py-0.5" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>⚡ Has cap</span>}
          </div>
          {/* Pros as pills */}
          <div className="flex flex-wrap gap-1 mt-3">
            {card.pros.slice(0, 2).map((p, j) => (
              <span key={j} className="text-[10px] font-semibold rounded-md px-2 py-0.5" style={{ color: "var(--green)", background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>{p}</span>
            ))}
          </div>
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
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>💳 Card Directory</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>Best Credit Cards in India 2026</h1>
        <p className="text-base" style={{ color: "var(--text-muted)", maxWidth: 560 }}>25 cards with real cashback math. Browse by category or search. Click any card for full details.</p>
      </div>

      {/* Category tabs */}
      <div className="mb-8 flex gap-2 flex-wrap">
        <button onClick={() => setActiveCategory(null)} className="rounded-lg px-3.5 py-2 text-xs font-semibold cursor-pointer border-none transition-all"
          style={{ background: activeCategory === null ? "var(--accent)" : "var(--bg-muted)", color: activeCategory === null ? "#fff" : "var(--text-muted)", border: activeCategory === null ? "none" : "1px solid var(--border)" }}>
          All Cards ({allCards.length})
        </button>
        {AWARD_CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className="rounded-lg px-3.5 py-2 text-xs font-semibold cursor-pointer border-none transition-all flex items-center gap-1.5"
            style={{ background: activeCategory === cat.id ? `${cat.color}12` : "var(--bg-muted)", color: activeCategory === cat.id ? cat.color : "var(--text-muted)", border: activeCategory === cat.id ? `1.5px solid ${cat.color}30` : "1px solid var(--border)" }}>
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* ═══ CATEGORY VIEW (Style A: Editorial) ═══ */}
      {activeCategory && (() => {
        const cat = AWARD_CATEGORIES.find(c => c.id === activeCategory);
        const cards = winners[activeCategory] || [];
        return (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${cat.color}10`, border: `1px solid ${cat.color}20` }}>{cat.icon}</div>
              <div>
                <h2 className="text-xl font-extrabold" style={{ color: "var(--text)" }}>{cat.label}</h2>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{cat.desc} · {cards.length} cards ranked</p>
              </div>
            </div>
            <p className="text-sm mb-6" style={{ color: "var(--text-faint)" }}>Ranked by effective cashback rate. Click any card for full breakdown, caps, and partner rates.</p>

            {cards.map((c, i) => (
              <EditorialCard key={c.id} card={c} rank={i + 1} badgeLabel={i === 0 ? BADGE_MAP[activeCategory] || "TOP PICK" : `#${i + 1} ${cat.label.toUpperCase()}`} badgeColor={cat.color} />
            ))}

            <div className="mt-6 text-center">
              <Link href="/smart-swipe" className="text-sm font-semibold no-underline" style={{ color: "var(--accent-text)" }}>
                → Not sure? Use Smart Swipe to find the best card for YOUR spending
              </Link>
            </div>
          </div>
        );
      })()}

      {/* ═══ ALL CARDS VIEW (Style B: Compact Tiles) ═══ */}
      {!activeCategory && (
        <>
          {/* Filters */}
          <div className="flex gap-3 mb-6 flex-wrap items-center">
            <input type="text" placeholder="Search cards..." value={search} onChange={e => setSearch(e.target.value)}
              className="rounded-lg px-3.5 py-2.5 text-sm border-none outline-none flex-1"
              style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)", minWidth: 180 }} />
            <select value={bankFilter} onChange={e => setBankFilter(e.target.value)}
              className="rounded-lg px-3 py-2.5 text-sm border-none outline-none cursor-pointer"
              style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)" }}>
              <option value="All">All Banks</option>
              {banks.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <select value={feeFilter} onChange={e => setFeeFilter(e.target.value)}
              className="rounded-lg px-3 py-2.5 text-sm border-none outline-none cursor-pointer"
              style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text)" }}>
              <option value="All">Any Fee</option>
              <option value="Free">Free Only</option>
              <option value="Under ₹1K">Under ₹1,000</option>
              <option value="₹1K-5K">₹1,000 - ₹5,000</option>
              <option value="₹5K+">₹5,000+</option>
            </select>
            <div className="text-xs font-semibold" style={{ color: "var(--text-faint)" }}>{filtered.length} cards</div>
          </div>

          {/* Card tiles grid */}
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {filtered.map(c => <CardTile key={c.id} card={c} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 rounded-2xl" style={{ background: "var(--bg-muted)" }}>
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>No cards match</div>
              <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Try different filters</div>
            </div>
          )}

          {/* Browse by category */}
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>Browse by category</h2>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
              {AWARD_CATEGORIES.map(cat => {
                const cards = winners[cat.id] || [];
                const top = cards[0];
                return (
                  <div key={cat.id} onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="rounded-xl p-5 cursor-pointer transition-all"
                    style={{ background: `${cat.color}06`, border: `1px solid ${cat.color}15` }}>
                    <div className="text-2xl mb-2">{cat.icon}</div>
                    <div className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>{cat.label}</div>
                    <div className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{cat.desc}</div>
                    {top && (
                      <div className="flex items-center gap-2 rounded-lg p-2" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                        <span className="text-lg">{top.img}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold truncate" style={{ color: "var(--text)" }}>{top.name}</div>
                          <div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{top.fee === 0 ? "Free" : `₹${top.fee.toLocaleString()}`}</div>
                        </div>
                        <span className="text-xs font-bold" style={{ color: "var(--green)" }}>🏆</span>
                      </div>
                    )}
                    <div className="text-xs mt-2 font-semibold" style={{ color: cat.color }}>{cards.length} cards →</div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* CTA */}
      <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <h2 className="text-xl font-extrabold mb-2" style={{ color: "var(--text)" }}>Not sure which card is best for you?</h2>
        <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Smart Swipe Guide calculates your real savings with cap-aware math.</p>
        <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-xl px-8 py-3 text-sm font-bold">Try Smart Swipe →</Link>
      </div>
    </section>
  );
}
