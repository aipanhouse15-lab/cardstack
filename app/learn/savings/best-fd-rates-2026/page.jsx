import Link from "next/link";

export const metadata = {
  title: "Best FD Rates 2026: Bank-wise Comparison with Honest Returns",
  description: "We list every major bank's FD rate, then calculate the real return after TDS and inflation. The rankings change completely.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/savings" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Savings</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>Rankings · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Best FD Rates 2026: Bank-wise Comparison with Honest Returns</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>We list every major bank's FD rate, then calculate the real return after TDS and inflation. The rankings change completely.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Top FD rates vs honest returns (1-year, 30% bracket)</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["SBI","6.80% → real return -0.34%",true],
            ["HDFC Bank","7.00% → real return -0.20%",true],
            ["ICICI Bank","7.00% → real return -0.20%",true],
            ["Axis Bank","7.10% → real return -0.13%",true],
            ["IndusInd Bank","7.75% → real return +0.33%",false],
            ["Bajaj Finance","8.25% → real return +0.68%",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Only small finance banks & NBFCs beat inflation</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>8%+ needed</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>for positive real return in 30% bracket</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why big banks have negative real returns</h2>
          <p>SBI, HDFC, ICICI offer 6.8–7.1% because they don't need deposits — they have large CASA (current/savings account) bases. After 30% tax (effective rate 4.76–4.97%) and 5.1% inflation, you lose 0.13–0.34% purchasing power annually. Your FD is literally making you poorer in real terms.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Small finance banks and NBFCs: higher rates, higher risk</h2>
          <p>Unity SFB (9.0%), Utkarsh SFB (8.5%), Bajaj Finance FD (8.25%) offer rates that actually beat inflation after tax. The trade-off: SFBs have limited branch networks, and NBFC FDs (Bajaj, Mahindra) don't have DICGC insurance. Your money is only as safe as the company's balance sheet.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The DICGC factor</h2>
          <p>DICGC insures up to ₹5L per depositor per bank. This covers both principal and interest. If a bank fails, you get back up to ₹5L. For SFBs, this is especially important — spread your FDs across multiple SFBs if going above ₹5L. NBFC FDs don't have this protection.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Don't park large amounts in big-bank FDs** if you're in the 30% bracket — real returns are negative.\n\n2. **Split across 2–3 small finance banks** — stay under ₹5L per bank for DICGC protection while earning 8–9%.\n\n3. **Bajaj Finance FD is reasonable** for amounts you're comfortable holding without DICGC insurance.\n\n4. **For tax-free returns, use PPF/SSY/tax-free bonds instead** — they beat every FD for long-term holding.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More savings guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/savings/fd-real-return" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>FD real return math →</Link>
          <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>PPF vs FD →</Link>
        </div>
      </div>
    </section>
  );
}