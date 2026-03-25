import Link from "next/link";

export const metadata = {
  title: "Mutual Funds — Your 15% CAGR Fund Gives You 11.8% After Charges",
  description: "Expense ratios, exit loads, and LTCG tax silently eat your mutual fund returns. We show you the net investor return — the number fund houses don't advertise.",
};

const GUIDES = [
  { title: "Your 15% CAGR fund gives 11.8% after expense ratio + LTCG", desc: "A 1.5% expense ratio compounded over 10 years costs you ₹12L on a ₹50L portfolio. Add 12.5% LTCG tax and the real return drops further.", time: "5 min", tag: "Guide", href: "/learn/mutual-funds/cagr-vs-actual-return" },
  { title: "Direct vs regular: the 1% that costs you ₹12L over 20 years", desc: "Regular plans pay distributors 0.5-1.5% annually from your returns. On a ₹10K SIP over 20 years, that's ₹8-12L less in your pocket.", time: "6 min", tag: "Analysis", href: "/learn/mutual-funds/direct-vs-regular" },
  { title: "SIP returns: advertised vs actual after all charges", desc: "Fund houses show pre-expense, pre-tax CAGR. We show post-expense, post-tax XIRR — the number you actually earn.", time: "5 min", tag: "Guide", href: "/learn/mutual-funds/sip-advertised-vs-actual" },
];

export default function MutualFundsPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[800px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>
        📈 Mutual Funds
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
        Your 15% CAGR fund gives you
        <br /><span style={{ color: "#DC2626" }}>11.8%</span> after all charges.
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
        Fund houses show gross returns. You earn net returns — after expense ratio, exit load, and capital gains tax. The gap is bigger than you think.
      </p>

      {/* Honest number breakdown */}
      <div className="rounded-2xl p-6 mb-10" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Example: large-cap equity fund, ₹10K SIP, 10 years</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Advertised CAGR", "15.0%", false],
            ["- Expense ratio (1.5% regular plan)", "-1.5%", true],
            ["- LTCG tax (12.5% on gains above ₹1.25L)", "-1.2%", true],
            ["- Exit load (if redeemed within 1 year)", "-0.5%", true],
          ].map(([label, val, neg], i) => (
            <div key={i} className="flex justify-between items-center">
              <span style={{ color: neg ? "var(--text-muted)" : "var(--text-secondary)" }}>{label}</span>
              <span style={{ color: neg ? "#DC2626" : "var(--text)" }}>{val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="font-extrabold" style={{ color: "var(--text)" }}>Net investor return</span>
            <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>~11.8%</span>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--text-faint)" }}>
            On a ₹10K monthly SIP over 10 years: advertised corpus ₹27.9L → actual take-home ~₹23.5L. Difference: ₹4.4L.
          </p>
        </div>
      </div>

      {/* Coming soon notice */}
      <div className="rounded-2xl p-6 mb-10 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>More mutual fund content coming soon</h3>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>We're building detailed guides on fund selection, SIP optimization, and tax-efficient withdrawal strategies. Watch this space.</p>
      </div>

      {/* Guides */}
      <h2 className="text-xl font-extrabold tracking-tight mb-5" style={{ color: "var(--text)" }}>Mutual fund guides</h2>
      <div className="flex flex-col gap-3 mb-10">
        {GUIDES.map((g, i) => (
          <Link key={i} href={g.href || "#"} className="block no-underline" style={{ color: "inherit" }}>
          <div className="rounded-xl p-5 transition-all" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "var(--blue-bg)", color: "var(--blue)" }}>{g.tag}</span>
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
          <Link href="/learn/insurance" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--pink-bg)", color: "var(--pink)" }}>Insurance →</Link>
        </div>
      </div>
    </section>
  );
}
