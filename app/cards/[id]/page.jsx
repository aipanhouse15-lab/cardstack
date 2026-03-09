import { CARDS, CATEGORIES } from "@/data/cards";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return CARDS.map(card => ({ id: card.id }));
}

export async function generateMetadata({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) return { title: "Card Not Found" };
  return {
    title: `${card.name} Review — Rewards, Fees & Benefits`,
    description: `${card.name} by ${card.bank}: ${card.fee === 0 ? "Lifetime free" : `₹${card.fee}/year`}. Best for ${Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0][0]} at ${Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0][1]}%. Full review with pros, cons, and reward breakdown.`,
  };
}

export default function CardPage({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) notFound();

  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const maxRate = sorted[0][1];

  return (
    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <Link href="/compare" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Cards</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>{card.name}</span>
      </div>

      {/* Header */}
      <div className="rounded-2xl p-7 mb-8" style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}>
        <div className="flex items-center gap-4 flex-wrap mb-5">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl" style={{ background: `${card.color}18`, border: `1px solid ${card.color}25` }}>{card.img}</div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>{card.name}</h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{card.bank} · {card.type} · {card.network}</p>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {[["Annual Fee", card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}`],
            ["Lounge Access", card.lounge],
            ["Best Rate", `${maxRate}%`],
            ["Network", card.network],
          ].map(([label, value], i) => (
            <div key={i}>
              <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>{label}</div>
              <div className="text-lg font-bold font-mono" style={{ color: i === 2 ? "var(--green)" : "var(--text)" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reward Rates */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Reward Rates by Category</h2>
        <div className="flex flex-col gap-2">
          {sorted.map(([catId, rate]) => {
            const cat = CATEGORIES.find(c => c.id === catId);
            return (
              <div key={catId} className="flex items-center gap-3">
                <span className="text-base w-6">{cat?.icon || "📋"}</span>
                <span className="text-sm w-24" style={{ color: "var(--text-secondary)" }}>{cat?.label || catId}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-muted)" }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(rate / maxRate) * 100}%`, background: rate === maxRate ? "var(--green)" : "var(--accent)" }} />
                </div>
                <span className="text-sm font-bold font-mono w-10 text-right" style={{ color: rate === maxRate ? "var(--green)" : "var(--text)" }}>{rate}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Key Benefits</h2>
        <div className="flex flex-wrap gap-1.5">
          {card.highlights.map((h, i) => (
            <span key={i} className="text-xs rounded-lg px-3 py-1.5" style={{ color: "var(--text-secondary)", background: "var(--bg-muted)" }}>{h}</span>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="rounded-xl p-5" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
          <div className="text-xs font-bold mb-3" style={{ color: "var(--green)" }}>PROS</div>
          {card.pros.map((p, i) => <div key={i} className="text-sm mb-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>✅ {p}</div>)}
        </div>
        <div className="rounded-xl p-5" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
          <div className="text-xs font-bold mb-3" style={{ color: "var(--orange)" }}>CONS</div>
          {card.cons.map((c, i) => <div key={i} className="text-sm mb-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>⚠️ {c}</div>)}
        </div>
      </div>

      {/* CTA */}
      <button className="w-full rounded-xl py-3.5 text-base font-semibold text-white border-none cursor-pointer opacity-80"
        style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}cc)` }}>
        Check {card.name} on bank website →
      </button>
      <p className="text-[11px] text-center mt-2" style={{ color: "var(--text-faint)" }}>Affiliate links coming soon</p>

      {/* Compare CTA */}
      <div className="mt-8 rounded-xl p-5 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>Want to compare this card?</p>
        <Link href="/compare" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
          Go to Compare Tool →
        </Link>
      </div>
    </section>
  );
}
