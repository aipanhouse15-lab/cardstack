import Link from "next/link";

export const metadata = {
  title: "Tax-saving FD vs ELSS vs PPF: Which Actually Wins After 5 Years?",
  description: "All three get 80C deduction. But returns after lock-in, tax, and inflation vary wildly. Side-by-side honest comparison.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/savings" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Savings</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>Compare · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Tax-saving FD vs ELSS vs PPF: Which Actually Wins After 5 Years?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>All three get 80C deduction. But returns after lock-in, tax, and inflation vary wildly. Side-by-side honest comparison.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹1.5L/year invested for 5 years (80C limit)</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Tax-saving FD (6.5%, 5yr lock)","₹8.87L → post-tax ₹8.36L",true],
            ["ELSS (12% avg CAGR, 3yr lock)","₹10.56L → post-tax ₹10.07L (after LTCG)",false],
            ["PPF (7.1%, 15yr lock)","₹9.30L (at 5yr mark, partial only)",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Best post-tax return in 5 years</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>ELSS</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>but with market risk</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Tax-saving FD: safe but worst returns</h2>
          <p>5-year lock-in, guaranteed 6.5–7.0%. Interest taxed as per income slab annually. In the 30% bracket, effective return drops to 4.5–4.9%. After inflation, real return is near zero. The only advantage: zero risk. Choose this only if you absolutely cannot tolerate any market volatility.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>ELSS: best return, market risk</h2>
          <p>3-year lock-in (shortest among 80C options). Historical CAGR: 12–15%. LTCG taxed at 12.5% above ₹1.25L gains. Post-tax return: ~10–12%. The risk: in a bad 3-year period, ELSS can give negative returns. 2020–2022 saw some ELSS funds return -5% to +3%. But over any 5+ year period, ELSS has historically beaten FDs by 4–6%.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>PPF: middle ground, longest lock-in</h2>
          <p>7.1% completely tax-free. But 15-year lock-in is brutal. You can only withdraw partially after year 7. For 80C purposes, PPF is ideal if you don't need the money for 15 years. The annual limit of ₹1.5L also caps your exposure. Best for: conservative investors who can truly lock money for 15 years.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Young (25–35), can handle risk**: ELSS first (₹1.5L), then VPF/PPF for stability.\n\n2. **Middle-aged (35–50), moderate risk**: split 50% ELSS + 50% PPF.\n\n3. **Conservative/near retirement**: PPF or tax-saving FD. Avoid ELSS.\n\n4. **Don't choose based on tax saving alone** — choose based on when you need the money and how much risk you can stomach.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More savings guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>PPF vs FD vs debt fund →</Link>
          <Link href="/learn/savings/fd-real-return" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>FD real return →</Link>
        </div>
      </div>
    </section>
  );
}