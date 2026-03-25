import Link from "next/link";

export const metadata = {
  title: "Home Loan True Cost: What Banks Hide From You",
  description: "Your 8.5% home loan actually costs 9.35% after processing fees, mandatory insurance, prepayment lock-in, and documentation charges. Full breakdown inside.",
};

export default function Article() {
  const data = [
    { label: "Advertised interest rate", value: "8.50%", note: "What the bank shows you" },
    { label: "Processing fee (0.25–0.50% of loan)", value: "+₹15,000–₹25,000", note: "Charged upfront, adds ~0.15% to effective rate" },
    { label: "Mandatory life insurance", value: "+₹30,000–₹50,000", note: "Banks bundle insurance, often overpriced vs market rates" },
    { label: "Documentation & legal charges", value: "+₹5,000–₹15,000", note: "Valuation, legal verification, stamp duty assistance" },
    { label: "Prepayment lock-in (6–12 months)", value: "+0.10–0.20%", note: "Can't refinance even if rates drop" },
    { label: "Switching/foreclosure fee (floating)", value: "Nil by RBI rule", note: "For floating rate — but fixed rate can charge 2–4%" },
  ];

  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/loans" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Loans</Link>

      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>
        Guide · 6 min read
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>
        Home loan true cost: what banks hide from you
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
        Banks advertise "8.5% interest rate" in big bold letters. What they don't show you: the processing fee, mandatory insurance, documentation charges, and prepayment lock-in that push your real cost to 9.35% or higher. Here's the full math.
      </p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>The honest number: ₹50L loan, 20 years</h2>
        <div className="flex flex-col gap-3">
          {data.map((d, i) => (
            <div key={i} className="rounded-lg p-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{d.label}</span>
                <span className="text-sm font-bold flex-shrink-0 ml-4" style={{ color: i === 0 ? "var(--text)" : "#DC2626" }}>{d.value}</span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-faint)" }}>{d.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 flex justify-between items-baseline" style={{ borderTop: "2px solid var(--border)" }}>
          <span className="text-base font-extrabold" style={{ color: "var(--text)" }}>Effective cost of borrowing</span>
          <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>~9.35%</span>
        </div>
        <p className="text-xs mt-2" style={{ color: "var(--text-faint)" }}>That's ₹4.7L extra over the loan tenure compared to the advertised rate.</p>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Processing fee: the upfront hit</h2>
          <p>Most banks charge 0.25–0.50% of the loan amount as processing fee. On a ₹50L loan, that's ₹12,500–₹25,000 paid before you even get the money. Some banks offer "zero processing fee" during promotions — but read the fine print. They often recover it through higher interest rates or mandatory insurance.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Mandatory insurance: the silent add-on</h2>
          <p>Banks push life insurance and property insurance as "mandatory" during loan disbursal. The insurance they sell is almost always 30–50% more expensive than what you'd get from a standalone insurer. You have the right to buy insurance from any provider (IRDAI guidelines), but most borrowers don't know this and accept the bank's overpriced policy.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Prepayment lock-in: the refinancing trap</h2>
          <p>Many banks impose a 6–12 month lock-in where you can't prepay or switch lenders. If interest rates drop during this period, you're stuck paying the higher rate. For floating rate loans, RBI has mandated zero prepayment penalty — but the lock-in period itself is still a hidden cost because you lose the option to refinance early.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>What to do about it</h2>
          <p>1. <strong style={{ color: "var(--text)" }}>Negotiate the processing fee.</strong> Most banks will reduce or waive it if you ask, especially if you have a good CIBIL score or an existing relationship.</p>
          <p className="mt-2">2. <strong style={{ color: "var(--text)" }}>Buy insurance separately.</strong> Get term insurance from LIC, HDFC Life, or ICICI Prudential directly. It's 30–50% cheaper than the bank's bundled policy.</p>
          <p className="mt-2">3. <strong style={{ color: "var(--text)" }}>Ask about the lock-in period</strong> before signing. Choose a lender with no lock-in or the shortest lock-in.</p>
          <p className="mt-2">4. <strong style={{ color: "var(--text)" }}>Calculate the effective rate yourself</strong> using our Loan Truth Calculator (launching April 2026).</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <div className="text-sm font-bold" style={{ color: "var(--text)" }}>More loan guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/loans/personal-loan-actual-apr" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--blue-bg)", color: "var(--blue)" }}>Personal loan APR →</Link>
          <Link href="/learn/loans/fixed-vs-floating-rate" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{ background: "var(--blue-bg)", color: "var(--blue)" }}>Fixed vs floating →</Link>
        </div>
      </div>
    </section>
  );
}
