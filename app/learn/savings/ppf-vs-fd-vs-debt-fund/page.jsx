import Link from "next/link";

export const metadata = {
  title: "PPF vs FD vs Debt Fund: Real Post-Tax Returns Compared",
  description: "PPF is tax-free but locked 15 years. FDs are taxed heavily. Debt funds have indexation. We compare actual take-home across all three.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/savings" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Savings</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>Compare · 7 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>PPF vs FD vs Debt Fund: Real Post-Tax Returns Compared</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>PPF is tax-free but locked 15 years. FDs are taxed heavily. Debt funds have indexation. We compare actual take-home across all three.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹10L invested for 5 years — real returns comparison</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["PPF (7.1% tax-free)","₹14.15L → real return ~2%/yr after inflation",false],
            ["FD (7.5%, 30% bracket)","₹13.07L → real return ~0.15%/yr",true],
            ["Debt fund (7%, LTCG with indexation)","₹13.78L → real return ~1.5%/yr",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Winner for 5+ year debt allocation</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>PPF</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>but only if you can lock for 15 years</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>PPF: the tax-free champion with a catch</h2>
          <p>PPF earns 7.1% (current rate, revised quarterly) completely tax-free. No TDS, no capital gains. The real return after 5% inflation is ~2%. The catch: 15-year lock-in with partial withdrawal only after year 7. If you need the money before 15 years, PPF is not an option. You can invest ₹500 to ₹1.5L per year.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>FD: the worst option for high-income earners</h2>
          <p>At 7.5% in the 30% bracket, your post-tax return is 5.25%. After inflation: 0.15%. FDs also require you to pay tax on accrued interest annually (for amounts above ₹40K interest/year). The only advantage: guaranteed returns and DICGC insurance up to ₹5L per bank. For amounts above ₹5L, even the guarantee has limits.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Debt funds: the tax-efficient middle ground</h2>
          <p>Debt mutual funds (now taxed as per income slab for purchases after April 2023) have lost their indexation benefit for new investments. But existing holdings before April 2023 still enjoy LTCG with indexation — effective tax rate of 5–8% vs 30% for FDs. For new investments, debt funds and FDs are taxed similarly, but debt funds offer better liquidity and no TDS.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Max out PPF first** (₹1.5L/year) — it's the only truly tax-free fixed income option.\n\n2. **Use debt funds for amounts above ₹1.5L** — better liquidity than FDs, similar tax treatment post-2023.\n\n3. **FDs only for emergency fund and senior citizens** — the tax hit is too heavy for wealth building.\n\n4. **Don't compare headline rates** — always compare post-tax, post-inflation returns. That's the honest number.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More savings guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/savings/fd-real-return" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>FD real return →</Link>
          <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>Tax-saving FD vs ELSS →</Link>
        </div>
      </div>
    </section>
  );
}