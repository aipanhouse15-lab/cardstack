import Link from "next/link";

export const metadata = {
  title: "SBI vs HDFC vs ICICI Home Loan — Honest Comparison 2026",
  description: "Not just rates — processing fees, insurance costs, prepayment terms, and effective APR compared side by side for India's three biggest lenders.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/loans" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Loans</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Compare · 8 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>SBI vs HDFC vs ICICI Home Loan — Honest Comparison 2026</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Not just rates — processing fees, insurance costs, prepayment terms, and effective APR compared side by side for India's three biggest lenders.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹50L home loan, 20 years — all three banks</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["SBI: advertised 8.50%","Effective ~9.20%",false],
            ["HDFC Bank: advertised 8.75%","Effective ~9.45%",false],
            ["ICICI Bank: advertised 8.65%","Effective ~9.35%",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Cheapest after all fees</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>SBI</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>by ~₹1.2L over 20 years</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>SBI: lowest rate, slowest processing</h2>
          <p>SBI consistently offers the lowest home loan rates in India because it's government-backed and has the lowest cost of funds. Current rate: 8.50% (EBLR-linked). Processing fee: 0.35% (max ₹10,000 for some schemes). No prepayment penalty on floating rate. The catch: SBI's processing is slower (15–25 days vs 7–10 for private banks), documentation requirements are stricter, and branch experience varies wildly. But on pure math, SBI wins.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>HDFC Bank: premium rate, premium service</h2>
          <p>HDFC Bank charges a premium (8.75% typical) but offers faster processing (7–10 days), dedicated relationship managers, and the smoothest digital experience. Processing fee: 0.50% (up to ₹25,000). They're also the most aggressive at bundling insurance — expect heavy pushback if you refuse their policy. Effective cost after all fees: highest of the three.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>ICICI Bank: middle ground</h2>
          <p>ICICI sits between SBI and HDFC on both rate and service. Current rate: 8.65% typical. Processing fee: 0.50% (often negotiable to 0.25% for existing customers). They offer a digital-first application process that's nearly as smooth as HDFC. Pre-approved offers for existing ICICI account holders can get rates 0.1–0.15% lower.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Apply to all three** — getting a sanction letter doesn't cost much and doesn't affect CIBIL (it's a soft pull for pre-approved customers).\n\n2. **Use SBI's offer as leverage** — show their rate to HDFC/ICICI and negotiate.\n\n3. **Factor in total cost, not just rate** — SBI's lower rate plus lower processing fee saves ₹1.2L over 20 years vs HDFC.\n\n4. **If speed matters** (builder payment deadlines), go HDFC/ICICI and negotiate the rate down.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More loans guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/loans/fixed-vs-floating-rate" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Fixed vs floating →</Link>
          <Link href="/learn/loans/prepayment-penalty-trap" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Prepayment trap →</Link>
        </div>
      </div>
    </section>
  );
}