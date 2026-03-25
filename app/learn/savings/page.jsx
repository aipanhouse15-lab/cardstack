import Link from "next/link";

export const metadata = {
  title: "Savings & FDs — Your 7.5% FD Returns 0.15% After Tax & Inflation",
  description: "Banks advertise 7.5% FD rates. After TDS and inflation, your real return is nearly zero. We show you the honest number on every savings product.",
};

const GUIDES = [
  { title: "FD at 7.5%? Your real return is 0.15% after tax and inflation", desc: "We break down a typical FD: 7.5% advertised → 5.25% after TDS (30% bracket) → 0.15% after 5.1% inflation. Your money barely keeps up.", time: "4 min", tag: "Guide" },
  { title: "PPF vs FD vs debt fund: real post-tax returns compared", desc: "PPF is tax-free but locked 15 years. FDs are taxed heavily. Debt funds have indexation. We compare actual take-home across all three.", time: "7 min", tag: "Compare" },
  { title: "Best FD rates 2026: bank-wise comparison with honest returns", desc: "We list every major bank's FD rate, then calculate the real return after TDS and inflation. The rankings change completely.", time: "6 min", tag: "Rankings" },
  { title: "Senior citizen FD: is the extra 0.5% worth locking in?", desc: "Seniors get 0.25-0.5% extra. After tax, that's ₹375/year extra on ₹5L. Worth the lock-in? We do the math.", time: "4 min", tag: "Analysis" },
  { title: "Tax-saving FD vs ELSS vs PPF: which actually wins after 5 years?", desc: "All three get 80C deduction. But returns after lock-in, tax, and inflation vary wildly. Side-by-side comparison.", time: "6 min", tag: "Compare" },
];

export default function SavingsPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[800px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>
        💰 Savings & FDs
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
        Your 7.5% FD returns
        <br /><span style={{ color: "#DC2626" }}>0.15%</span> after tax & inflation.
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
        Banks scream high FD rates. Nobody mentions TDS eats 30% and inflation eats the rest. We calculate what you actually take home.
      </p>

      {/* Honest number breakdown */}
      <div className="rounded-2xl p-6 mb-10" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Your "7.5%" FD — the honest return</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Advertised FD rate", "7.50%", false],
            ["- TDS (30% tax bracket)", "-2.25%", true],
            ["- Inflation (5.1% avg)", "-5.10%", true],
          ].map(([label, val, neg], i) => (
            <div key={i} className="flex justify-between items-center">
              <span style={{ color: neg ? "var(--text-muted)" : "var(--text-secondary)" }}>{label}</span>
              <span style={{ color: neg ? "#DC2626" : "var(--text)" }}>{val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="font-extrabold" style={{ color: "var(--text)" }}>Real return (purchasing power)</span>
            <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>0.15%</span>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--text-faint)" }}>
            On ₹10L invested for 1 year, you earn ₹75K gross → ₹52.5K after tax → ₹1,500 after inflation. Your ₹10L barely grows.
          </p>
        </div>
      </div>

      {/* Guides */}
      <h2 className="text-xl font-extrabold tracking-tight mb-5" style={{ color: "var(--text)" }}>Savings guides</h2>
      <div className="flex flex-col gap-3 mb-10">
        {GUIDES.map((g, i) => (
          <div key={i} className="rounded-xl p-5 transition-all" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>{g.tag}</span>
              <span className="text-xs" style={{ color: "var(--text-faint)" }}>{g.time} read</span>
            </div>
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text)" }}>{g.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</p>
          </div>
        ))}
      </div>

      {/* Cross-link */}
      <div className="rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <div>
          <div className="text-sm font-bold" style={{ color: "var(--text)" }}>Also explore</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>The honest number on credit cards, loans, and insurance</div>
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
