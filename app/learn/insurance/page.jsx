import Link from "next/link";

export const metadata = {
  title: "Insurance — Your ₹10L Policy Actually Covers ₹4.2L",
  description: "Co-pay clauses, room rent sub-limits, disease waiting periods, and claim settlement ratios — we break down what your health insurance policy actually pays.",
};

const GUIDES = [
  { title: "Your ₹10L health policy covers ₹4.2L — the full breakdown", desc: "Co-pay, room rent sub-limits, disease-specific caps, consumable exclusions, and pre-existing waiting periods. Every deduction explained with math.", time: "7 min", tag: "Health" },
  { title: "Claim settlement ratios 2026: which insurer actually pays?", desc: "We ranked every major health insurer by the percentage of claims they approve. Some 'cheap' policies reject 15% of claims.", time: "6 min", tag: "Rankings" },
  { title: "Term insurance: ₹1Cr cover is actually worth ₹92L", desc: "Claim settlement ratio × sum insured = what your family actually gets. We calculated it for every major term plan.", time: "5 min", tag: "Term life" , href: "/learn/insurance/term-insurance-real-value" },
  { title: "Room rent trap: how ₹8K sub-limit turns a ₹5L surgery into ₹3L", desc: "Room rent caps don't just limit room cost — they proportionally reduce every other charge. The math is worse than you think.", time: "5 min", tag: "Health" , href: "/learn/insurance/room-rent-trap" },
  { title: "Health insurance for parents: what to check before buying", desc: "Pre-existing waiting periods, co-pay clauses, and network hospitals matter more than the headline sum insured.", time: "6 min", tag: "Guide" },
  { title: "Co-pay vs no co-pay: is the premium difference worth it?", desc: "A 20% co-pay saves you ₹3K/year in premium but costs ₹1.6L if you make a claim. We run the expected value math.", time: "5 min", tag: "Analysis" },
];

export default function InsurancePage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[800px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>
        ❤️ Insurance
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
        Your ₹10L health insurance
        <br />actually covers <span style={{ color: "#DC2626" }}>₹4.2L</span>.
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
        PolicyBazaar compares premiums. We compare what your policy actually pays when you need it. Co-pay, sub-limits, waiting periods — the full truth.
      </p>

      {/* Coverage breakdown */}
      <div className="rounded-2xl p-6 mb-10" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Typical ₹10L health policy — what you actually get</h2>
        <p className="text-xs mb-4" style={{ color: "var(--text-faint)" }}>Based on average policy terms across top 5 insurers</p>

        {/* Coverage bar */}
        <div className="flex rounded-lg overflow-hidden mb-4" style={{ height: 28 }}>
          <div className="flex items-center justify-center text-[11px] font-bold" style={{ width: "42%", background: "rgba(22,163,74,0.15)", color: "var(--green)" }}>₹4.2L usable</div>
          <div className="flex items-center justify-center text-[11px] font-bold" style={{ width: "58%", background: "rgba(220,38,38,0.1)", color: "#DC2626" }}>₹5.8L lost to fine print</div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          {[
            ["20% co-pay on claims above ₹2L", "-₹1,60,000"],
            ["Room rent cap: ₹8,000/day (ICU ₹16K)", "-₹2,40,000"],
            ["Disease-specific sub-limits", "-₹80,000"],
            ["Consumables not covered", "-₹40,000"],
            ["Pre-existing: 3-year waiting period", "-₹60,000"],
          ].map(([label, val], i) => (
            <div key={i} className="flex justify-between items-center">
              <span style={{ color: "var(--text-muted)" }}>{label}</span>
              <span style={{ color: "#DC2626" }}>{val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="font-extrabold" style={{ color: "var(--text)" }}>Effective usable coverage (year 1)</span>
            <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>₹4,20,000</span>
          </div>
        </div>
      </div>

      {/* Guides */}
      <h2 className="text-xl font-extrabold tracking-tight mb-5" style={{ color: "var(--text)" }}>Insurance guides</h2>
      <div className="flex flex-col gap-3 mb-10">
        {GUIDES.map((g, i) => (
          <Link key={i} href={g.href || "#"} className="block no-underline" style={{ color: "inherit" }}>
          <div className="rounded-xl p-5 transition-all" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "var(--pink-bg)", color: "var(--pink)" }}>{g.tag}</span>
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
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>The honest number on credit cards, loans, and savings</div>
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
