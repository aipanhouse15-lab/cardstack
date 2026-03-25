import Link from "next/link";

export const metadata = {
  title: "Education Loan: Real Cost After Moratorium Interest Piling",
  description: "Interest accrues during your study period and moratorium — adding 15-25% to your total repayment. The math most students never see.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/loans" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Loans</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Guide · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Education Loan: Real Cost After Moratorium Interest Piling</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Interest accrues during your study period and moratorium — adding 15-25% to your total repayment. The math most students never see.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹20L education loan, 2-year course + 1-year moratorium</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Advertised rate","9.0%",false],
            ["Interest during study (2 years)","+₹3,60,000 accrued",true],
            ["Interest during moratorium (1 year)","+₹2,12,400 accrued",true],
            ["Total principal after moratorium","₹25,72,400 (not ₹20L)",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>You repay interest on</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹25.7L</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>not the ₹20L you borrowed</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>How moratorium interest compounds against you</h2>
          <p>During your study period (2–4 years) and the moratorium (6–12 months after), you don't pay EMIs. But interest doesn't stop — it accrues monthly and gets added to your principal. This is called capitalization. A ₹20L loan at 9% accumulates ₹1.5L interest per year. After 2 years of study + 1 year moratorium, your outstanding is ₹25.7L. You now pay 9% interest on ₹25.7L — not ₹20L.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The 80E tax benefit: partial relief</h2>
          <p>Section 80E lets you deduct the entire interest paid on education loans (no cap, unlike 80C). This helps — but only after you start working and paying taxes. During the moratorium, you get no benefit because you're not paying anything. And the deduction is only available for 8 years from when you start repaying. If your repayment tenure is 10+ years, you lose the benefit for the last 2+ years.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Simple vs partial payment during study</h2>
          <p>Some banks offer the option to pay only interest during the study period (no principal). This costs ₹15,000/month on a ₹20L loan at 9% — tough for a student, but it prevents the interest from capitalizing. If you can get family support for these interest-only payments, your total loan cost drops by 15–20%. Even paying ₹5,000–₹10,000/month during study helps significantly.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Pay at least the interest during study** if possible — even partial payments reduce capitalization.\n\n2. **Start EMIs immediately after graduation** — don't wait for the full moratorium period unless you have no income.\n\n3. **Claim 80E deduction from year one** of repayment — it's unlimited and available for 8 years.\n\n4. **Compare total repayment, not just rate** — a 9% loan with 3-year moratorium costs more than a 10% loan with 1-year moratorium.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More loans guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/loans/personal-loan-actual-apr" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Personal loan APR →</Link>
          <Link href="/learn/loans/home-loan-true-cost" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Home loan true cost →</Link>
        </div>
      </div>
    </section>
  );
}