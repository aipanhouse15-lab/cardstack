import { CARDS, CATEGORIES, calcReward } from "@/data/cards";
import { notFound } from "next/navigation";
import Link from "next/link";
import BankLogo from "@/components/BankLogo";

export async function generateMetadata({ params }) {
  const cardIds = params.cards.split("-and-").map(id => id.trim()).filter(Boolean);
  const cards = cardIds.map(id => CARDS.find(c => c.id === id)).filter(Boolean);
  if (cards.length === 0) return { title: "Stack Not Found" };
  const names = cards.map(c => c.name).join(" + ");
  return {
    title: `${names} — Card Stack | Assure Fintech`,
    description: `See how ${names} perform together across 8 spending categories with cap-aware cashback calculations. Built with Assure Fintech Stack Builder.`,
  };
}

function calcComboSavings(cards, spending) {
  let totalCashback = 0;
  const assignments = {};
  CATEGORIES.forEach(cat => {
    const spend = spending[cat.id] || 0;
    if (spend === 0) { assignments[cat.id] = { card: null, cashback: 0, rate: 0, capped: false }; return; }
    let bestCard = null;
    let bestResult = { cashback: 0, effectiveRate: 0, capped: false, capNote: null };
    cards.forEach(card => {
      const result = calcReward(card, cat.id, spend);
      if (result.cashback > bestResult.cashback) { bestCard = card; bestResult = result; }
    });
    totalCashback += bestResult.cashback;
    assignments[cat.id] = { card: bestCard, cashback: bestResult.cashback, rate: bestResult.effectiveRate, capped: bestResult.capped, capNote: bestResult.capNote };
  });
  return { totalCashback, assignments };
}

export default function SharedStackPage({ params }) {
  const cardIds = params.cards.split("-and-").map(id => id.trim()).filter(Boolean);
  const cards = cardIds.map(id => CARDS.find(c => c.id === id)).filter(Boolean);
  if (cards.length === 0) notFound();

  // Use default spending for the shared view
  const defaultSpend = { dining: 5000, travel: 4000, online: 8000, groceries: 6000, fuel: 5000, utilities: 4000, entertainment: 2000, shopping: 5000 };
  const { totalCashback, assignments } = calcComboSavings(cards, defaultSpend);
  const totalSpend = Object.values(defaultSpend).reduce((s, v) => s + v, 0);
  const totalFee = cards.reduce((s, c) => s + c.fee, 0);
  const netSavings = (totalCashback * 12) - totalFee;
  const baseline = Math.round(totalSpend * 0.01 * 12);
  const names = cards.map(c => c.name).join(" + ");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "Stack Builder", item: "https://www.assurefintech.com/stack-builder" },
      { "@type": "ListItem", position: 3, name: names, item: `https://www.assurefintech.com/stack/${params.cards}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <section className="pt-24 pb-20 px-4 sm:px-6 max-w-[700px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <Link href="/stack-builder" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Stack Builder</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>Shared Stack</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>
          🏗️ {cards.length}-Card Stack
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          {names}
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Cap-aware cashback calculated at ₹{totalSpend.toLocaleString()}/month total spend · Data verified March 2026
        </p>
      </div>

      {/* Cards in stack */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        {cards.map(c => (
          <Link key={c.id} href={`/cards/${c.id}`} className="flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 no-underline"
            style={{ background: `${c.color}10`, border: `1px solid ${c.color}20` }}>
            <BankLogo bank={c.bank} cardId={c.id} size={32} rounded={8} fontSize={10} />
            <div>
              <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{c.name}</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                {c.fee === 0 ? "Free" : `₹${c.fee.toLocaleString()}/yr`}
                {c.feeWaiver !== "None" && c.fee > 0 ? ` · Waiver: ${c.feeWaiver}` : ""}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Savings summary */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        <div className="rounded-xl p-3 sm:p-4 text-center" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
          <div className="text-[9px] sm:text-[10px] uppercase tracking-wider" style={{ color: "var(--green)" }}>Annual cashback</div>
          <div className="text-lg sm:text-2xl font-extrabold font-mono" style={{ color: "var(--green)" }}>₹{(totalCashback * 12).toLocaleString()}</div>
        </div>
        <div className="rounded-xl p-3 sm:p-4 text-center" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
          <div className="text-[9px] sm:text-[10px] uppercase tracking-wider" style={{ color: "var(--orange)" }}>Card fees</div>
          <div className="text-lg sm:text-2xl font-extrabold font-mono" style={{ color: totalFee === 0 ? "var(--green)" : "var(--orange)" }}>
            {totalFee === 0 ? "₹0" : `₹${totalFee.toLocaleString()}`}
          </div>
        </div>
        <div className="rounded-xl p-3 sm:p-4 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <div className="text-[9px] sm:text-[10px] uppercase tracking-wider" style={{ color: "var(--accent-text)" }}>Net savings/yr</div>
          <div className="text-lg sm:text-2xl font-extrabold font-mono" style={{ color: "var(--accent-text)" }}>₹{netSavings.toLocaleString()}</div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Best card per category</h2>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map(cat => {
            const a = assignments[cat.id];
            if (!a?.card) return null;
            return (
              <div key={cat.id} className="rounded-xl px-4 py-3 flex items-center justify-between flex-wrap gap-2"
                style={{ background: a.capped ? "var(--orange-bg)" : "var(--bg-muted)", border: a.capped ? "1px solid var(--orange-border)" : "1px solid var(--border)" }}>
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <div>
                    <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{cat.label}</span>
                    <span className="text-xs ml-2" style={{ color: "var(--text-faint)" }}>→ {a.card.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold font-mono" style={{ color: a.capped ? "var(--orange)" : "var(--green)" }}>
                    {a.rate}%
                  </span>
                  <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                    ₹{a.cashback.toLocaleString()}/mo
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
      </div>

      {/* vs baseline */}
      <div className="rounded-xl p-4 text-center mb-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          A basic 1% card would earn <strong style={{ color: "var(--text)" }}>₹{baseline.toLocaleString()}/year</strong>.
          This stack saves <strong style={{ color: "var(--green)" }}>₹{(netSavings - baseline).toLocaleString()} more</strong> — that's <strong style={{ color: "var(--green)" }}>{Math.round((netSavings / Math.max(baseline, 1) - 1) * 100)}% more</strong> cashback.
        </p>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <Link href="/stack-builder" className="rounded-xl p-4 text-center no-underline" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>Build your own stack</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>Customize spending and find your perfect combo</p>
        </Link>
        <Link href="/smart-swipe" className="rounded-xl p-4 text-center no-underline" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>Already have cards?</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>See which card to swipe for each purchase</p>
        </Link>
      </div>

      {/* Share hint */}
      <div className="text-center">
        <p className="text-xs" style={{ color: "var(--text-faint)" }}>
          This stack was generated by <Link href="/" className="no-underline" style={{ color: "var(--accent-text)" }}>Assure Fintech</Link> — India's smartest credit card tool. Free, no sign-up, zero tracking.
        </p>
      </div>
    </section>
    </>
  );
}
