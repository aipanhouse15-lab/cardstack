import Link from "next/link";

export const metadata = {
  title: "Room Rent Trap: How ₹8K Sub-limit Turns ₹5L Surgery Into ₹3L",
  description: "Room rent caps don't just limit room cost — they proportionally reduce every other charge including surgery, medicines, and doctor fees.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/insurance" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Insurance</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>Health · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Room Rent Trap: How ₹8K Sub-limit Turns ₹5L Surgery Into ₹3L</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Room rent caps don't just limit room cost — they proportionally reduce every other charge including surgery, medicines, and doctor fees.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹5L surgery in a ₹12K/day room (policy limit: ₹8K/day)</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Room charges (5 days × ₹12K)","₹60,000 → paid ₹40,000",true],
            ["Surgery charges","₹2,50,000 → paid ₹1,66,667",true],
            ["Doctor fees","₹80,000 → paid ₹53,333",true],
            ["Medicines & consumables","₹1,10,000 → paid ₹73,333",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Total bill ₹5L → Insurer pays only</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹3,33,333</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>You pay ₹1,66,667 from pocket</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>How proportional reduction works</h2>
          <p>When your room costs more than the policy limit, the insurer applies a ratio to ALL charges. Ratio = policy room limit ÷ actual room cost = ₹8K ÷ ₹12K = 66.67%. This 66.67% is applied to surgery, doctor fees, medicines — everything. A ₹2.5L surgery becomes ₹1.67L payable. The remaining ₹83K comes from your pocket. This single clause can cost you ₹1–2L in one hospitalization.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why hospitals charge more than your limit</h2>
          <p>In metro cities, a standard private room costs ₹8K–₹15K/day. Semi-private is ₹4K–₹8K. ICU is ₹15K–₹30K. If your policy has an ₹8K room limit, you'd need to choose a semi-private room to avoid proportional deduction. But many hospitals only offer private rooms for planned surgeries — you don't always get a choice.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Policies without room rent limit</h2>
          <p>Several policies now offer 'no room rent capping': HDFC Ergo Optima Restore, Care Supreme, Star Comprehensive, Niva Bupa Reassure 2.0. These cost 10–20% more in premium but eliminate the proportional reduction trap entirely. On a ₹10L policy, the extra premium is ₹2K–₹4K/year — worth it for the protection.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Choose policies with no room rent sub-limit** — the premium difference is small vs the risk.\n\n2. **If your policy has a limit, always choose a room within it** — even ₹1 over the limit triggers proportional reduction on everything.\n\n3. **In emergencies, request the hospital to adjust** — some hospitals will downgrade your room classification on paper.\n\n4. **Check your policy document** — look for 'single private AC room' or 'as per actuals' vs '1% of SI per day.'</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More insurance guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/insurance/health-insurance-effective-coverage" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Full coverage breakdown →</Link>
          <Link href="/learn/insurance/copay-vs-no-copay" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Co-pay analysis →</Link>
        </div>
      </div>
    </section>
  );
}