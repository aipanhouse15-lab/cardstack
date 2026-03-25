import Link from "next/link";

export const metadata = {
  title: "Term Insurance: ₹1Cr Cover Is Actually Worth ₹92L",
  description: "Claim settlement ratio × sum insured = what your family actually gets. We calculated the risk-adjusted value for every major term plan.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/insurance" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Insurance</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>Term life · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Term Insurance: ₹1Cr Cover Is Actually Worth ₹92L</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Claim settlement ratio × sum insured = what your family actually gets. We calculated the risk-adjusted value for every major term plan.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹1Cr term plan — risk-adjusted value</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Sum insured","₹1,00,00,000",false],
            ["Claim settlement ratio (industry avg)","92%",false],
            ["Expected payout (₹1Cr × 0.92)","₹92,00,000",true],
            ["If claim delayed 3+ months (common)","₹92L minus opportunity cost",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Risk-adjusted value of ₹1Cr cover</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>~₹92L</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>8% probability of rejection</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why 100% of term claims aren't paid</h2>
          <p>The 8% rejection rate comes from: non-disclosure of pre-existing conditions (biggest reason), death within waiting period, suicide within exclusion period (usually 1 year), and documentation gaps. If you disclose everything honestly and survive the first year, your effective settlement rate is closer to 97–98%.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The cheapest plan isn't always the best</h2>
          <p>A ₹1Cr plan at ₹600/month with 88% CSR gives you ₹88L expected value. A ₹1Cr plan at ₹750/month with 96% CSR gives you ₹96L expected value. The extra ₹150/month (₹1,800/year) buys your family ₹8L more in expected payout. That's a 4,444x return on the premium difference.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Riders: mostly not worth it</h2>
          <p>Accidental death rider, critical illness rider, waiver of premium — insurers push these hard because they're profitable. Most riders add 20–40% to your premium while covering low-probability events. A separate critical illness policy is usually cheaper than a rider. Accidental death benefit duplicates what your base term cover already provides.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Disclose everything** — non-disclosure is the #1 reason for claim rejection. Be honest about smoking, drinking, medical history.\n\n2. **Choose an insurer with CSR above 95%** — LIC (97%), HDFC Life (96%), ICICI Prudential (96%), Max Life (95%).\n\n3. **Skip riders** — buy a simple, high-cover term plan. Add critical illness separately if needed.\n\n4. **Buy early (age 25–30)** — premiums are 50–60% cheaper than at age 40.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More insurance guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/insurance/claim-settlement-ratios-2026" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Claim settlement rankings →</Link>
          <Link href="/learn/insurance/copay-vs-no-copay" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Co-pay analysis →</Link>
        </div>
      </div>
    </section>
  );
}