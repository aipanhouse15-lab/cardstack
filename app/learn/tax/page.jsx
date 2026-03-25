import Link from "next/link";

export const metadata = {
  title: "Tax Planning — Old vs New Regime, 80C, and the Honest Math",
  description: "Which tax regime actually saves you more? Is 80C worth maxing out? We calculate the real numbers behind every tax-saving option in India.",
};

const GUIDES = [
  { title: "Old regime vs new regime: which saves you more?", desc: "We calculated the breakeven for salaried individuals across ₹8L to ₹25L income. The answer depends on your deductions, not your salary.", time: "6 min", tag: "Guide" },
  { title: "80C beyond the obvious: NPS, ELSS, tuition fees ranked", desc: "Everyone knows about PPF and ELSS. But NPS gives extra ₹50K under 80CCD. We rank every 80C option by real after-tax return.", time: "7 min", tag: "Analysis" },
  { title: "HRA calculation: what you actually save vs what you think", desc: "HRA exemption is the minimum of three formulas. Most people don't calculate all three. We walk through it with real numbers.", time: "5 min", tag: "Guide" },
  { title: "Tax on credit card rewards: do you need to worry?", desc: "Short answer: probably not. Long answer involves Section 56(2)(x) and gift tax provisions. We break down the actual legal position.", time: "4 min", tag: "Guide" },
];

export default function TaxPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[800px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>
        💸 Tax Planning
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
        Which tax regime actually
        <br />saves you <span style={{ color: "var(--green)" }}>more</span>?
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
        Old regime vs new regime isn't a simple answer. It depends on your HRA, 80C, NPS, and insurance deductions. We calculate the exact breakeven for your salary range.
      </p>

      {/* Quick comparison */}
      <div className="rounded-2xl overflow-hidden mb-10" style={{ border: "1px solid var(--border)" }}>
        <div className="grid grid-cols-2">
          <div className="p-5" style={{ background: "var(--bg-section-green)", borderRight: "1px solid var(--border)" }}>
            <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--green)" }}>Old regime</h3>
            <div className="flex flex-col gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              <span>✓ 80C deduction up to ₹1.5L</span>
              <span>✓ HRA exemption</span>
              <span>✓ 80D health insurance</span>
              <span>✓ NPS extra ₹50K</span>
              <span>✓ Home loan interest ₹2L</span>
              <span style={{ color: "var(--orange)" }}>✕ Higher tax slabs</span>
            </div>
          </div>
          <div className="p-5" style={{ background: "var(--bg-section-blue)" }}>
            <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--blue)" }}>New regime</h3>
            <div className="flex flex-col gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              <span>✓ Lower tax slabs</span>
              <span>✓ Standard deduction ₹75K</span>
              <span>✓ Simpler, no paperwork</span>
              <span>✓ NPS employer contribution</span>
              <span style={{ color: "var(--orange)" }}>✕ No 80C, HRA, 80D</span>
              <span style={{ color: "var(--orange)" }}>✕ No home loan interest</span>
            </div>
          </div>
        </div>
        <div className="p-4 text-center" style={{ background: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>Rule of thumb:</strong> If your deductions exceed ~₹3.75L (income ₹12-15L), old regime saves more. Below that, new regime wins. But calculate for your exact numbers.
          </p>
        </div>
      </div>

      {/* Guides */}
      <h2 className="text-xl font-extrabold tracking-tight mb-5" style={{ color: "var(--text)" }}>Tax guides</h2>
      <div className="flex flex-col gap-3 mb-10">
        {GUIDES.map((g, i) => (
          <Link key={i} href={g.href || "#"} className="block no-underline" style={{ color: "inherit" }}>
          <div className="rounded-xl p-5 transition-all" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "var(--green-bg)", color: "var(--green)" }}>{g.tag}</span>
              <span className="text-xs" style={{ color: "var(--text-faint)" }}>{g.time} read</span>
            </div>
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text)" }}>{g.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</p>
          </div>
          </Link>
        ))}
      </div>

      {/* Cross-link */}
      <div className="rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <div>
          <div className="text-sm font-bold" style={{ color: "var(--text)" }}>Also explore</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>The honest number across all financial products</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/cards" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--accent-light)", color: "var(--accent-text)" }}>Credit cards →</Link>
          <Link href="/learn/loans" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--blue-bg)", color: "var(--blue)" }}>Loans →</Link>
          <Link href="/learn/savings" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>Savings →</Link>
        </div>
      </div>
    </section>
  );
}
