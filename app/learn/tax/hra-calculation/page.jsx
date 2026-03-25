import Link from "next/link";

export const metadata = {
  title: "HRA Calculation: What You Actually Save vs What You Think",
  description: "HRA exemption is the minimum of three formulas. Most people don't calculate all three. We walk through it with real numbers.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/tax" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Tax</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>Guide · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>HRA Calculation: What You Actually Save vs What You Think</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>HRA exemption is the minimum of three formulas. Most people don't calculate all three. We walk through it with real numbers.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-green)", border: "1px solid var(--border-section-green)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>HRA example: ₹15L salary, ₹25K/month rent, Mumbai</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Actual HRA received","₹3,00,000/year",false],
            ["Actual rent − 10% of salary","₹3,00,000 − ₹1,50,000 = ₹1,50,000",false],
            ["50% of salary (metro)","₹7,50,000",false],
            ["HRA exemption (minimum of three)","₹1,50,000",false],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Tax saved (30% bracket)</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹46,800/year</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>not the ₹93,600 many people expect</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The three-formula rule</h2>
          <p>HRA exemption is the MINIMUM of: (a) actual HRA received, (b) rent paid minus 10% of basic salary, (c) 50% of basic salary (metro) or 40% (non-metro). Most people only look at (a) — the HRA component on their payslip — and assume that's their exemption. But formula (b) often gives a much lower number, especially if your basic salary is high relative to rent.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why basic salary structure matters</h2>
          <p>If your CTC is ₹15L but basic is only ₹5L (common in many companies), your HRA exemption is capped by the low basic. Companies that offer higher basic give better HRA benefits but also higher PF contribution (which reduces take-home). There's a trade-off. Ask HR to restructure your salary if your rent is high — a higher HRA component helps.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Living with parents: the ₹0 trap</h2>
          <p>If you live with parents, you can pay them rent and claim HRA — but you need a rental agreement and rent receipts. Your parents must declare this rental income. Above ₹1L/year rent, you need the landlord's (parent's) PAN. Many people skip this and lose ₹30K–₹50K in tax savings annually.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Calculate all three formulas** — use the minimum, not just your HRA component.\n\n2. **If living with parents**, create a rental agreement and pay rent by bank transfer. Keep receipts.\n\n3. **Ask HR about salary restructuring** — higher basic = higher HRA exemption (but also higher PF).\n\n4. **For rent above ₹8,333/month (₹1L/year)**, you must provide landlord PAN to claim full exemption.\n\n5. **HRA is only available in old regime** — if you claim HRA, you must choose old regime for that financial year.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More tax guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/tax/old-vs-new-regime" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>Old vs new regime →</Link>
          <Link href="/learn/tax/80c-beyond-the-obvious" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>80C guide →</Link>
        </div>
      </div>
    </section>
  );
}