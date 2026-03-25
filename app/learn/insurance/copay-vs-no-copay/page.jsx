import Link from "next/link";

export const metadata = {
  title: "Co-pay vs No Co-pay: Is the Premium Difference Worth It?",
  description: "A 20% co-pay saves ₹3K–₹5K/year in premium but costs ₹1.6L in one hospitalization. We run the expected value math.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/insurance" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Insurance</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>Analysis · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Co-pay vs No Co-pay: Is the Premium Difference Worth It?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>A 20% co-pay saves ₹3K–₹5K/year in premium but costs ₹1.6L in one hospitalization. We run the expected value math.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>20% co-pay: savings vs cost over 10 years</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Premium saved (₹4K/year × 10 years)","₹40,000 saved",false],
            ["One ₹8L hospitalization (20% co-pay)","-₹1,60,000 out of pocket",true],
            ["Two smaller ₹2L claims (20% each)","-₹80,000 out of pocket",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Net result after one major claim</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>-₹1,20,000</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>Co-pay costs you more</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The premium savings are real but small</h2>
          <p>A ₹10L policy without co-pay costs roughly ₹12,000–₹18,000/year (age 30–35). With 20% co-pay, the same policy costs ₹8,000–₹14,000/year. You save ₹3,000–₹5,000 annually. Over 10 years, that's ₹30,000–₹50,000 saved. Meaningful, but one hospitalization wipes it out.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The hospitalization math</h2>
          <p>Average planned surgery cost in a metro private hospital: ₹3–₹8L. At 20% co-pay, you pay ₹60K–₹1.6L from pocket. Emergency hospitalization (cardiac, accident): ₹5–₹15L. At 20%, you pay ₹1L–₹3L. The probability of one significant hospitalization in 10 years (age 30–40) is roughly 15–20%. For age 50+, it rises to 40–50%.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Expected value calculation</h2>
          <p>Premium saved over 10 years: ₹40K. Expected cost of co-pay (20% chance × avg ₹1.5L claim): ₹30K. Break-even point: the math is roughly neutral for healthy 30-year-olds. But for anyone above 40, with family history, or in a metro city with expensive hospitals — no co-pay wins decisively. The peace of mind of zero out-of-pocket is also worth something that math can't capture.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **If you're under 35 and healthy**, co-pay is a reasonable bet — you're unlikely to claim.\n\n2. **If you're 40+, have family history, or have dependents**, skip co-pay — the downside risk is too high.\n\n3. **For parents (60+), never take co-pay** — hospitalization probability is 40%+ in 10 years.\n\n4. **Check if co-pay applies to all claims or only above a threshold** — some policies have co-pay only above ₹2L, which is more reasonable.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More insurance guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/insurance/health-insurance-effective-coverage" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Full coverage breakdown →</Link>
          <Link href="/learn/insurance/room-rent-trap" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Room rent trap →</Link>
        </div>
      </div>
    </section>
  );
}