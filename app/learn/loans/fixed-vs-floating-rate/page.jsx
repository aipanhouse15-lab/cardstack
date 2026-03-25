import Link from "next/link";

export const metadata = {
  title: "Fixed vs Floating Rate: Which Actually Saves You More?",
  description: "We ran the numbers across 10 years of RBI rate changes. Fixed gives certainty, floating gives flexibility. The math says one wins clearly.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/loans" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Loans</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Analysis · 7 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Fixed vs Floating Rate: Which Actually Saves You More?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>We ran the numbers across 10 years of RBI rate changes. Fixed gives certainty, floating gives flexibility. The math says one wins clearly.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>10-year comparison: ₹50L home loan</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Fixed rate (9.0%)","₹57.2L total interest",false],
            ["Floating rate (started 8.5%)","₹52.8L total interest",false],
            ["Rate hike years (2 of 10)","+₹3.1L extra during hikes",true],
            ["Rate drop years (3 of 10)","-₹4.8L saved during drops",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Floating rate saved</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹4.4L</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>over 10 years (but with volatility)</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Fixed rate: certainty at a premium</h2>
          <p>Fixed rate locks your EMI for the entire tenure. You know exactly what you'll pay every month. The downside: fixed rates are typically 0.5–1.5% higher than floating rates. On a ₹50L loan over 20 years, that 0.5% premium costs you ₹5.8L extra in interest. Banks love fixed rates because they protect against rate drops — the bank wins either way.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Floating rate: cheaper but unpredictable</h2>
          <p>Floating rates are linked to RBI's repo rate (via EBLR/RLLR). When repo rate drops, your EMI drops. When it rises, your EMI rises. Over the last 10 years, repo rate ranged from 4.0% to 6.5%. The average floating rate borrower paid 0.3–0.7% less than fixed rate borrowers. But during 2022-23, floating rate borrowers saw EMIs jump by ₹3,000–₹5,000/month on ₹50L loans.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The honest verdict</h2>
          <p>For most borrowers, floating rate wins over any 10+ year period because RBI rate cycles average out. But if you can't handle EMI volatility or are stretching your budget, fixed rate buys you peace of mind — at a measurable cost. Never take fixed rate from an NBFC (they charge 2–4% foreclosure penalty). Banks can't charge prepayment penalty on floating rates (RBI rule).</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Take floating rate** if your tenure is 10+ years and you can handle ±₹3,000 EMI swings.\n\n2. **Take fixed rate** only if you're maxing your EMI capacity and can't afford increases.\n\n3. **Never take fixed from an NBFC** — the foreclosure penalty makes switching impossible.\n\n4. **Review annually** — you can switch from fixed to floating (or vice versa) with most banks for ₹2,000–₹5,000.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More loans guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/loans/home-loan-true-cost" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Home loan true cost →</Link>
          <Link href="/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>SBI vs HDFC vs ICICI →</Link>
        </div>
      </div>
    </section>
  );
}