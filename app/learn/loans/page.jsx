import Link from "next/link";

export const metadata = {
  title: "Loans — The True Cost Banks Don't Show You",
  description: "Your 8.5% home loan actually costs 9.4% after processing fees, mandatory insurance, and prepayment lock-in. We calculate the honest number on every loan.",
};

const GUIDES = [
  { title: "Home loan true cost: what banks hide from you", desc: "Processing fees, mandatory insurance bundling, prepayment penalties, and documentation charges — calculated into your real effective APR.", time: "6 min", tag: "Guide", href: "/learn/loans/home-loan-true-cost" },
  { title: "Personal loan: advertised 10.5%, actual 13.1%", desc: "Origination fees, late payment charges, and foreclosure penalties turn a cheap personal loan expensive.", time: "5 min", tag: "Guide", href: "/learn/loans/personal-loan-actual-apr" },
  { title: "Fixed vs floating rate: which actually saves more?", desc: "We ran the numbers across 10 years of RBI rate changes. The answer isn't what banks tell you.", time: "7 min", tag: "Analysis", href: "/learn/loans/fixed-vs-floating-rate" },
  { title: "SBI vs HDFC vs ICICI home loan — honest comparison 2026", desc: "Not just rates. Processing fees, insurance costs, prepayment terms, and effective APR compared side by side.", time: "8 min", tag: "Compare", href: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
  { title: "Prepayment penalty trap: why no lock-in does not mean free", desc: "Banks advertise zero prepayment penalty but charge 2-4% if you switch lenders. Here is how to spot the trap.", time: "5 min", tag: "Guide", href: "/learn/loans/prepayment-penalty-trap" },
  { title: "Education loan: real cost after moratorium interest", desc: "Interest piling during the moratorium period adds 15-25% to your total repayment. We break down the math.", time: "6 min", tag: "Guide", href: "/learn/loans/education-loan-real-cost" },
];

export default function LoansPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[800px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>
        🏠 Loans
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
        Your home loan isn't 8.5%.
        <br />It's probably <span style={{ color: "#DC2626" }}>9.4%</span>.
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
        Banks advertise the base interest rate. They don't show you processing fees, mandatory insurance, prepayment lock-in, or switching costs. We do the math they won't.
      </p>

      {/* Honest number breakdown */}
      <div className="rounded-2xl p-6 mb-10" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Example: ₹50L home loan, 20 years</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Advertised interest rate", "8.50%", false],
            ["+ Processing fee (₹15,000)", "+0.15%", true],
            ["+ Mandatory insurance (₹42,000)", "+0.42%", true],
            ["+ Prepayment lock-in (12 months)", "+0.18%", true],
            ["+ Documentation & legal charges", "+0.10%", true],
          ].map(([label, val, dim], i) => (
            <div key={i} className="flex justify-between items-center">
              <span style={{ color: dim ? "var(--text-muted)" : "var(--text-secondary)" }}>{label}</span>
              <span style={{ color: dim ? "var(--text-muted)" : "var(--text)" }}>{val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="font-extrabold" style={{ color: "var(--text)" }}>Your honest rate</span>
            <div className="text-right">
              <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>9.35%</span>
              <div className="text-xs" style={{ color: "var(--text-faint)" }}>Extra cost over 20 years: ₹4,72,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool CTA */}
      <div className="rounded-2xl p-6 mb-10 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Loan truth calculator</h3>
        <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Input your loan details. Get your honest rate back — with the exact extra cost over your loan tenure.</p>
        <div className="inline-block rounded-lg px-5 py-2.5 text-sm font-bold" style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}>Launching April 2026</div>
      </div>

      {/* Guides */}
      <h2 className="text-xl font-extrabold tracking-tight mb-5" style={{ color: "var(--text)" }}>Loan guides</h2>
      <div className="flex flex-col gap-3 mb-10">
        {GUIDES.map((g, i) => (
          <Link key={i} href={g.href || "/learn/loans"} className="block no-underline" style={{ color: "inherit" }}>
          <div className="rounded-xl p-5 transition-all" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "var(--blue-bg)", color: "var(--blue)" }}>{g.tag}</span>
                  <span className="text-xs" style={{ color: "var(--text-faint)" }}>{g.time} read</span>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text)" }}>{g.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Cross-link */}
      <div className="rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <div>
          <div className="text-sm font-bold" style={{ color: "var(--text)" }}>Also explore</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>The honest number on credit cards, insurance, and savings</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/cards" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--accent-light)", color: "var(--accent-text)" }}>Credit cards →</Link>
          <Link href="/learn/insurance" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--pink-bg)", color: "var(--pink)" }}>Insurance →</Link>
          <Link href="/learn/savings" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>Savings →</Link>
        </div>
      </div>
    </section>
  );
}
