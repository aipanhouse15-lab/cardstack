import Link from "next/link";

export const metadata = {
  title: "Senior Citizen FD: Is the Extra 0.5% Worth Locking In?",
  description: "Seniors get 0.25-0.5% extra on FDs. After tax, that's ₹375/year extra on ₹5L. Worth the lock-in? We do the math.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/savings" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Savings</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>Analysis · 4 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Senior Citizen FD: Is the Extra 0.5% Worth Locking In?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Seniors get 0.25-0.5% extra on FDs. After tax, that's ₹375/year extra on ₹5L. Worth the lock-in? We do the math.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Senior citizen FD advantage: real numbers</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Regular FD rate","7.50%",false],
            ["Senior citizen rate","8.00% (+0.50%)",false],
            ["Extra interest on ₹10L (1 year)","₹5,000",false],
            ["After tax (old regime, ₹0-5L bracket)","₹4,750 extra",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Real extra earning</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹4,750/year</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>on ₹10L — modest but guaranteed</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The extra rate is small but stacks up</h2>
          <p>Most banks offer 0.25–0.50% extra for senior citizens (60+). Super senior citizens (80+) sometimes get an additional 0.25%. On ₹10L, the 0.50% extra yields ₹5,000/year. After tax in the lower brackets (0–5%), most of it is retained. Over 5 years on ₹20L, the extra could be ₹40,000–₹50,000 — meaningful for retirees on fixed income.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Section 80TTB: the real benefit</h2>
          <p>Senior citizens get ₹50,000 deduction on interest income under Section 80TTB (old regime). This means the first ₹50K of FD + savings account interest is tax-free. For a ₹7L FD at 8%, interest is ₹56,000 — only ₹6,000 is taxable. Effective tax rate on FD interest drops to near-zero. This is why FDs make much more sense for seniors than for working professionals.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Special senior citizen FD schemes</h2>
          <p>SBI Wecare (discontinued but watch for revival), Post Office SCSS (8.2%, 5-year lock, ₹30L max), Pradhan Mantri Vaya Vandana Yojana (7.4%, ₹15L max). SCSS is often the best option for seniors — 8.2% guaranteed by government, ₹30L limit, interest paid quarterly. Combined with 80TTB deduction, the effective return is excellent.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Max out SCSS (₹30L) first** — highest guaranteed rate for seniors.\n\n2. **Use 80TTB deduction fully** — plan FD amounts so total interest stays near ₹50K for near-zero tax.\n\n3. **Split across banks** — stay under ₹5L per bank for DICGC insurance.\n\n4. **Consider SFB FDs** — Unity SFB, Utkarsh SFB offer 9%+ for seniors with DICGC protection.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More savings guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/savings/fd-real-return" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>FD real return →</Link>
          <Link href="/learn/savings/best-fd-rates-2026" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--orange-bg)",color:"var(--orange)"}}>Best FD rates 2026 →</Link>
        </div>
      </div>
    </section>
  );
}