"use client";
import Link from "next/link";
import { CATEGORIES } from "@/data/cards";

export default function CardDetailClient({ card, allCards }) {
  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const max = sorted[0][1];

  // Find similar cards (same bank or same type)
  const similar = allCards.filter(c => c.id !== card.id && (c.bank === card.bank || c.type === card.type)).slice(0, 4);

  return (
    <div className="pt-24 pb-20 px-6 max-w-screen-lg mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>{card.name}</span>
      </div>

      {/* Header */}
      <div className="rounded-2xl p-8 mb-8" style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}>
        <div className="flex items-center gap-4 flex-wrap mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${card.color}18`, border: `1px solid ${card.color}25` }}>{card.img}</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: "var(--text)" }}>{card.name}</h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{card.bank} · {card.type} · {card.net}</p>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {[["Annual Fee", card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}`], ["Lounge Access", card.lounge], ["Best Rate", `${max}%`]].map(([l, v], i) => (
            <div key={i}>
              <div className="text-xs" style={{ color: "var(--text-faint)" }}>{l}</div>
              <div className="text-xl font-bold font-mono" style={{ color: i === 2 ? "var(--green)" : "var(--text)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Rewards */}
          <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Reward Rates by Category</h2>
            {sorted.map(([catId, rate]) => {
              const cat = CATEGORIES.find(c => c.id === catId);
              return (
                <div key={catId} className="flex items-center gap-2.5 mb-2">
                  <span className="text-base w-6">{cat?.icon || "📋"}</span>
                  <span className="text-sm w-24" style={{ color: "var(--text-secondary)" }}>{cat?.label || catId}</span>
                  <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-muted)" }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(rate / max) * 100}%`, background: rate === max ? "var(--green)" : "var(--accent)" }} />
                  </div>
                  <span className="text-sm font-bold font-mono w-10 text-right" style={{ color: rate === max ? "var(--green)" : "var(--text)" }}>{rate}%</span>
                </div>
              );
            })}
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl p-5" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
              <div className="text-xs font-bold mb-3" style={{ color: "var(--green)" }}>PROS</div>
              {card.pros.map((p, i) => <div key={i} className="text-sm mb-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>✅ {p}</div>)}
            </div>
            <div className="rounded-xl p-5" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
              <div className="text-xs font-bold mb-3" style={{ color: "var(--orange)" }}>CONS</div>
              {card.cons.map((c, i) => <div key={i} className="text-sm mb-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>⚠️ {c}</div>)}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Key Benefits */}
          <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Key Benefits</h2>
            <div className="flex flex-wrap gap-1.5">
              {card.hl.map((h, i) => <span key={i} className="text-xs rounded-lg px-3 py-1.5" style={{ color: "var(--text-secondary)", background: "var(--bg-muted)" }}>{h}</span>)}
            </div>
          </div>

          {/* Apply */}
          <div className="rounded-2xl p-6 mb-6 text-center" style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}>
            <button className="w-full rounded-xl py-3.5 text-base font-semibold text-white cursor-pointer border-none" style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}cc)`, opacity: 0.85 }}>
              Check on bank website →
            </button>
            <p className="text-[11px] mt-2" style={{ color: "var(--text-faint)" }}>Affiliate links coming soon</p>
          </div>

          {/* Compare */}
          <Link href="/compare" className="block rounded-xl p-4 text-center no-underline transition-all hover:-translate-y-0.5" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--accent-text)" }}>⚖️ Compare with another card</div>
          </Link>
        </div>
      </div>

      {/* Similar Cards */}
      {similar.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Similar Cards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {similar.map(c => (
              <Link key={c.id} href={`/cards/${c.id}`} className="rounded-xl p-4 text-center no-underline transition-all hover:-translate-y-0.5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <div className="text-2xl mb-2">{c.img}</div>
                <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{c.name}</div>
                <div className="text-xs" style={{ color: "var(--text-faint)" }}>{c.fee === 0 ? "Free" : `₹${c.fee}/yr`}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
