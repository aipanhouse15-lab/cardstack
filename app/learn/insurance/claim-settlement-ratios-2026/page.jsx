import Link from "next/link";

export const metadata = {
  title: "Claim Settlement Ratios 2026: Which Insurer Actually Pays?",
  description: "We ranked every major health insurer by the percentage of claims they approve. Some 'cheap' policies reject 15% of claims.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/insurance" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Insurance</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>Rankings · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Claim Settlement Ratios 2026: Which Insurer Actually Pays?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>We ranked every major health insurer by the percentage of claims they approve. Some 'cheap' policies reject 15% of claims.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Top 10 health insurers by claim settlement ratio (IRDAI 2024-25)</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["New India Assurance","95.2% claims settled",false],
            ["Star Health","89.4% claims settled",false],
            ["HDFC Ergo","88.7% claims settled",false],
            ["Care Health (formerly Religare)","87.1% claims settled",false],
            ["Niva Bupa (Max Bupa)","85.3% claims settled",false],
            ["ICICI Lombard","84.6% claims settled",false],
            ["Aditya Birla Health","82.1% claims settled",true],
            ["Bajaj Allianz","81.5% claims settled",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Difference between best and worst</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>13.7%</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>— that's 1 in 7 claims rejected at the bottom</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What claim settlement ratio actually means</h2>
          <p>CSR = (number of claims settled) ÷ (total claims received) × 100. A 90% CSR means 9 out of 10 claims were paid. But this number includes simple claims too. For large claims (₹3L+), the settlement rate drops. And for pre-existing disease claims, it drops further. The headline CSR is an average — your actual experience depends on your claim type.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why cheap policies have lower CSR</h2>
          <p>Budget insurers offer low premiums by being aggressive on claim rejection. They have stricter sub-limits, more exclusions, and more reasons to deny. A ₹3,000/year policy that rejects 18% of claims is worse than a ₹5,000/year policy that settles 95%. The ₹2,000 premium difference is nothing compared to a rejected ₹3L claim.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Network hospitals matter as much as CSR</h2>
          <p>A high CSR insurer with 3,000 network hospitals is more useful than a slightly higher CSR insurer with 1,500 hospitals. Cashless claims (where the insurer pays the hospital directly) only work at network hospitals. Check if your preferred hospitals are in-network before buying.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Prioritize CSR above 88%** — New India, Star Health, HDFC Ergo, Care Health are consistently strong.\n\n2. **Don't chase the cheapest premium** — the ₹2K–₹3K you save annually costs ₹50K–₹3L in a rejected claim.\n\n3. **Check network hospitals in your city** — cashless {'>'} reimbursement always.\n\n4. **Read rejection reasons on consumer forums** — PolicyBazaar reviews and MouthShut.com show real rejection patterns.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More insurance guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/insurance/health-insurance-effective-coverage" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Effective coverage →</Link>
          <Link href="/learn/insurance/health-insurance-for-parents" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Insurance for parents →</Link>
        </div>
      </div>
    </section>
  );
}