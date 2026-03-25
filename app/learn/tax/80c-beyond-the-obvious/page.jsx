import Link from "next/link";

export const metadata = {
  title: "80C Beyond the Obvious: NPS, ELSS, Tuition Fees Ranked",
  description: "Everyone knows about PPF and ELSS. But NPS gives extra ₹50K under 80CCD. We rank every 80C option by real after-tax return.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/tax" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Tax</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>Analysis · 7 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>80C Beyond the Obvious: NPS, ELSS, Tuition Fees Ranked</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Everyone knows about PPF and ELSS. But NPS gives extra ₹50K under 80CCD. We rank every 80C option by real after-tax return.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-green)", border: "1px solid var(--border-section-green)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>80C options ranked by real post-tax return</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["ELSS (equity, 3yr lock)","~12% CAGR, LTCG 12.5% above ₹1.25L",false],
            ["PPF (debt, 15yr lock)","7.1% tax-free, real return ~2%",false],
            ["NPS (80CCD1B, extra ₹50K)","Market-linked, partial tax-free withdrawal",false],
            ["Tax-saving FD (5yr lock)","6.5–7%, fully taxed",true],
            ["Life insurance premium","2–5% return, worst option for investment",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Best for most people</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>ELSS + NPS combo</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>if you can handle market risk</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>ELSS: best return, shortest lock-in</h2>
          <p>Only 3-year lock-in vs 5 years (FD) or 15 years (PPF). Historical CAGR 12–15%. Top ELSS funds: Mirae Asset Tax Saver, Axis Long Term Equity, Canara Robeco ELSS. Post-LTCG-tax return: ~10–12%. Best for: anyone under 50 who can handle equity volatility.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>NPS: the hidden ₹50K bonus</h2>
          <p>Beyond the ₹1.5L 80C limit, Section 80CCD(1B) allows an additional ₹50K deduction for NPS contributions. At 30% tax bracket, this saves ₹15,600 in tax. NPS returns are market-linked (8–10% long-term). 60% is tax-free at withdrawal, 40% goes to annuity (taxable). Net: one of the best tax-saving tools if you don't need the money before 60.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Life insurance: the worst 80C option</h2>
          <p>Endowment and money-back policies give 4–5% returns while locking your money for 15–20 years. They're pushed by agents because commissions are 30–40% of first-year premium. A ₹1L/year endowment policy over 20 years gives you ~₹35L. The same in ELSS gives ~₹75L. Pure term insurance (₹500–₹1000/month) + ELSS is always better than endowment.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **₹1.5L in ELSS** (if comfortable with equity) or PPF (if conservative) — max out 80C.\n\n2. **₹50K in NPS** — claim the extra 80CCD(1B) deduction. That's ₹15,600 tax saved.\n\n3. **Never buy endowment/money-back for 80C** — the returns are terrible.\n\n4. **EPF counts toward 80C** — your mandatory PF contribution already uses part of the ₹1.5L limit. Check your Form 16 before over-investing.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More tax guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/tax/old-vs-new-regime" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>Old vs new regime →</Link>
          <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>Tax-saving FD vs ELSS →</Link>
        </div>
      </div>
    </section>
  );
}