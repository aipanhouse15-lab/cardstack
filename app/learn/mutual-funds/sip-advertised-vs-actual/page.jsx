import Link from "next/link";

export const metadata = {
  title: "SIP Returns: Advertised vs Actual After All Charges",
  description: "Fund houses show pre-expense, pre-tax CAGR. We show post-expense, post-tax XIRR — the number you actually earn.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/mutual-funds" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Mutual funds</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Guide · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>SIP Returns: Advertised vs Actual After All Charges</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Fund houses show pre-expense, pre-tax CAGR. We show post-expense, post-tax XIRR — the number you actually earn.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹10K SIP in Nifty 50 index fund — advertised vs actual</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Nifty 50 CAGR (10 years)","~13.5%",false],
            ["After expense ratio (0.2% direct index)","~13.3%",false],
            ["After LTCG (12.5% on gains above ₹1.25L)","~11.8%",true],
            ["XIRR (not CAGR) for SIP","~11.2%",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Your actual SIP return</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>~11.2% XIRR</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>vs the 13.5% CAGR shown everywhere</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>CAGR vs XIRR: why SIP returns are lower</h2>
          <p>CAGR measures lump-sum return — put ₹10L in, see what it becomes. SIP investors put money in monthly. Early SIPs have been invested longer and earned more; recent SIPs have barely grown. XIRR accounts for this time-weighting. A fund showing 13.5% CAGR will show ~11–12% XIRR for a SIP investor. This isn't a flaw — it's just how SIP math works. But fund houses always show CAGR because it's higher.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why fund comparison gets misleading</h2>
          <p>When two funds show 15% and 13% CAGR, the actual SIP return difference might be only 1% (instead of 2%). XIRR compresses the gap because recent poor performance affects the calculation more for SIP investors. Always compare SIP XIRR, not CAGR, when evaluating your actual returns.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The honest way to track your returns</h2>
          <p>Use the XIRR function in Excel/Google Sheets or apps like Groww, Kuvera that show your portfolio XIRR automatically. Input: dates and amounts of each SIP + current portfolio value. This gives your true return accounting for timing. If your portfolio shows 12% XIRR over 5 years, that's genuinely good — don't compare it to a fund's 15% CAGR and feel bad.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Track returns using XIRR, not CAGR** — this is your honest number.\n\n2. **Don't panic if your SIP return seems lower than the fund's return** — SIP math works differently.\n\n3. **Continue SIPs in market downturns** — lower NAV means more units purchased, which boosts long-term XIRR.\n\n4. **Use index funds for core allocation** — 0.1–0.2% expense ratio vs 1.5% for active funds. Over 20 years, index beats 80% of active funds after expenses.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More mutual funds guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/mutual-funds/cagr-vs-actual-return" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>CAGR vs actual →</Link>
          <Link href="/learn/mutual-funds/direct-vs-regular" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Direct vs regular →</Link>
        </div>
      </div>
    </section>
  );
}