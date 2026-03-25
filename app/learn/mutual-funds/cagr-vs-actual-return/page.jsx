import Link from "next/link";

export const metadata = {
  title: "Your 15% CAGR Fund Gives You 11.8% After Expense Ratio + LTCG",
  description: "Expense ratios, exit loads, and LTCG tax silently eat your mutual fund returns. We calculate the net investor return.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/mutual-funds" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Mutual funds</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Guide · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Your 15% CAGR Fund Gives You 11.8% After Expense Ratio + LTCG</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Expense ratios, exit loads, and LTCG tax silently eat your mutual fund returns. We calculate the net investor return.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹10K SIP in a large-cap fund, 10 years</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Advertised CAGR","15.0%",false],
            ["After expense ratio (1.5% regular)","13.5%",true],
            ["After LTCG tax (12.5% on gains above ₹1.25L)","~12.1%",true],
            ["After exit load (if redeemed <1 year)","~11.5%",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Net investor return vs advertised</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>11.8% vs 15%</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>₹4.4L less on ₹12L invested</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Expense ratio: the daily deduction you never see</h2>
          <p>The expense ratio is deducted daily from your fund's NAV. A 1.5% expense ratio on a ₹10L portfolio costs ₹15,000/year — but you never get a bill. It's invisibly deducted from your returns. Over 10 years, compound effect of 1.5% expense ratio on ₹10K monthly SIP: ₹2.8L lost. Direct plans charge 0.5–1.0% less — that difference alone is worth ₹1.2–2L over 10 years.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>LTCG tax: the exit toll</h2>
          <p>Equity LTCG above ₹1.25L gains is taxed at 12.5% (no indexation). On a ₹12L investment that grows to ₹27.9L, gains are ₹15.9L. Tax: ₹1.83L. Effective post-tax return drops from 15% to ~12.5%. For SIPs, the calculation is more complex because each SIP installment has its own purchase date and holding period. Use XIRR, not CAGR, for accurate SIP return measurement.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Exit load: the early withdrawal penalty</h2>
          <p>Most equity funds charge 1% exit load for redemptions within 1 year. On ₹5L redeemed, that's ₹5,000. Some funds have graded exit loads (1% in 6 months, 0.5% in 12 months). ELSS has mandatory 3-year lock-in with zero exit load after. Liquid funds and overnight funds typically have zero exit load.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Always use direct plans** — save 0.5–1.5% in expense ratio annually. Use Groww, Kuvera, or AMC websites.\n\n2. **Hold for 1+ years** to avoid exit load.\n\n3. **Harvest LTCG annually** — redeem and reinvest up to ₹1.25L gains each year to use the tax-free limit.\n\n4. **Compare funds on post-expense return, not pre-expense** — check 'direct plan' returns on ValueResearch or Morningstar.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More mutual funds guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/mutual-funds/direct-vs-regular" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Direct vs regular →</Link>
          <Link href="/learn/mutual-funds/sip-advertised-vs-actual" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>SIP real returns →</Link>
        </div>
      </div>
    </section>
  );
}