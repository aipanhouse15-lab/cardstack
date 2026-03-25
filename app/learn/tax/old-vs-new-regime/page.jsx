import Link from "next/link";

export const metadata = {
  title: "Old vs New Tax Regime: Which Saves You More?",
  description: "We calculated the breakeven for salaried individuals across ₹8L to ₹25L income. The answer depends on deductions, not salary.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/tax" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Tax</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>Guide · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Old vs New Tax Regime: Which Saves You More?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>We calculated the breakeven for salaried individuals across ₹8L to ₹25L income. The answer depends on deductions, not salary.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-green)", border: "1px solid var(--border-section-green)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Tax comparison at ₹15L CTC</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Old regime (with ₹3.5L deductions)","Tax: ₹1,56,000",false],
            ["New regime (standard deduction ₹75K only)","Tax: ₹1,45,600",false],
            ["Old regime (with ₹5L+ deductions)","Tax: ₹1,17,000",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Breakeven point</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>~₹3.75L in deductions</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>— below this, new regime wins</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>New regime: simpler, lower slabs</h2>
          <p>The new regime (default from FY 2024-25) offers lower tax slabs with a standard deduction of ₹75,000. No 80C, no HRA, no 80D, no home loan interest. It's straightforward: income minus standard deduction = taxable income. For someone with few investments or no HRA, this is clearly cheaper. The rebate under Section 87A makes income up to ₹12L tax-free under new regime.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Old regime: more deductions, more work</h2>
          <p>Old regime lets you claim 80C (₹1.5L), 80D (₹25K–₹75K), HRA, home loan interest (₹2L), NPS (₹50K under 80CCD1B), and more. If your total deductions exceed ~₹3.75L, old regime saves more tax. But you need proof for every deduction — rent receipts, insurance premium receipts, home loan certificates. More paperwork, more planning.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Salary-wise breakeven</h2>
          <p>₹8–10L CTC: new regime almost always wins (not enough deductions to matter). ₹12–15L CTC: depends — if HRA + 80C + 80D {'>'} ₹3.75L, old regime wins. ₹18–25L CTC: old regime usually wins if you have HRA + home loan + NPS + insurance. ₹25L+ CTC: old regime wins decisively with full deductions.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Calculate both regimes** for your specific salary and deductions. Don't assume.\n\n2. **If you have a home loan + HRA**, old regime almost certainly wins.\n\n3. **If you're a fresher with no investments**, new regime is simpler and cheaper.\n\n4. **You can switch every year** (salaried individuals) — pick the better regime at filing time.\n\n5. **Max out NPS (80CCD1B, ₹50K)** — this deduction is available in both regimes for employer contribution, and only old regime for self-contribution.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More tax guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/tax/80c-beyond-the-obvious" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>80C guide →</Link>
          <Link href="/learn/tax/hra-calculation" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>HRA calculation →</Link>
        </div>
      </div>
    </section>
  );
}