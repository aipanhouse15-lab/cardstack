import Link from "next/link";

export const metadata = {
  title: "FD at 7.5%? Your Real Return Is 0.15% After Tax & Inflation",
  description: "Banks scream high FD rates. After TDS eats 30% and inflation eats the rest, your money barely grows. Here's the exact math.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/savings" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Savings</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>Guide · 4 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>FD at 7.5%? Your Real Return Is 0.15% After Tax & Inflation</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Banks scream high FD rates. After TDS eats 30% and inflation eats the rest, your money barely grows. Here's the exact math.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹10L FD at 7.5% for 1 year (30% tax bracket)</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Gross interest","₹75,000",false],
            ["TDS (30% bracket)","−₹22,500",true],
            ["Net interest after tax","₹52,500",false],
            ["Inflation erosion (5.1% on ₹10L)","−₹51,000",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Real purchasing power gain</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹1,500</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>or 0.15% real return</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>TDS: the automatic haircut</h2>
          <p>If your total income exceeds ₹2.5L (basic exemption), the bank deducts TDS at 10% and you pay the rest at filing. In the 30% bracket, ₹75K interest becomes ₹52.5K. In the 20% bracket, it becomes ₹60K. Only in the 5% bracket or below do FDs offer reasonable post-tax returns. The 30% bracket is where most urban professionals fall — and where FDs hurt the most.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Inflation: the invisible thief</h2>
          <p>Inflation in India has averaged 5–6% over the last decade. If your FD earns 7.5% and inflation is 5.1%, your real return is 2.4% pre-tax. After 30% tax, it drops to 0.15%. Your ₹10L has ₹10.52L nominal value after a year — but buys only ₹10.015L worth of goods. You've barely broken even. In high-inflation years (7%+), FDs in the 30% bracket actually lose purchasing power.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Who FDs still make sense for</h2>
          <p>Senior citizens in the 0–5% tax bracket get the best deal: 8% rate, minimal tax, real return of 2–3%. People parking emergency funds (3–6 months expenses) should use FDs — liquidity matters more than return. And anyone above the DICGC insurance limit (₹5L per bank) should spread across banks.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Don't rely on FDs for wealth building** in the 20–30% tax bracket — real returns are near zero.\n\n2. **Use debt mutual funds for better tax efficiency** — indexation benefit reduces capital gains tax significantly for 3+ year holdings.\n\n3. **Senior citizens: maximize FD** — the extra 0.5% rate + lower tax bracket makes FDs genuinely useful.\n\n4. **Emergency fund: yes, use FDs** — the guaranteed return and DICGC insurance make them ideal for money you can't afford to lose.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More savings guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>PPF vs FD vs debt fund →</Link>
          <Link href="/learn/savings/best-fd-rates-2026" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>Best FD rates 2026 →</Link>
        </div>
      </div>
    </section>
  );
}