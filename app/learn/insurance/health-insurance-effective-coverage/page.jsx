import Link from "next/link";

export const metadata = {
  title: "Your ₹10L Health Policy Covers ₹4.2L — The Full Breakdown",
  description: "Co-pay, room rent sub-limits, disease-specific caps, consumable exclusions, and pre-existing waiting periods. Every deduction explained with math.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/insurance" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Insurance</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>Health · 7 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Your ₹10L Health Policy Covers ₹4.2L — The Full Breakdown</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Co-pay, room rent sub-limits, disease-specific caps, consumable exclusions, and pre-existing waiting periods. Every deduction explained with math.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹10L policy — what gets deducted in a real claim</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Sum insured (headline)","₹10,00,000",false],
            ["20% co-pay on claims above ₹2L","-₹1,60,000",true],
            ["Room rent cap ₹8K/day (proportional reduction)","-₹2,40,000",true],
            ["Disease-specific sub-limits","-₹80,000",true],
            ["Consumables not covered (gloves, PPE, etc.)","-₹40,000",true],
            ["Pre-existing disease: 3-year waiting","-₹60,000 (effective year 1)",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Effective usable coverage (year 1)</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹4,20,000</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>58% of your headline cover is gone</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Co-pay: you pay a share of every claim</h2>
          <p>A 20% co-pay means for every ₹1L claim, you pay ₹20K from your pocket. Policies with co-pay are cheaper (₹3,000–₹5,000/year less) but the math is brutal: one ₹8L surgery costs you ₹1.6L out of pocket. Co-pay saves you ₹15K in premium over 5 years but costs you ₹1.6L in one hospitalization. Expected value: co-pay loses unless you never get hospitalized.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Room rent: the proportional reduction trap</h2>
          <p>This is the most misunderstood clause. A ₹8,000/day room rent limit doesn't just cap your room cost — it proportionally reduces ALL charges. If you take a ₹12,000/day room, the insurer pays only 66% (8K/12K) of your surgery, medicines, doctor fees, and everything else. A ₹5L surgery in a ₹12K room results in only ₹3.3L being paid. The remaining ₹1.7L is yours to pay.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Pre-existing waiting: 3 years of false security</h2>
          <p>If you have diabetes, hypertension, or any condition that existed before the policy, claims related to it are rejected for 3–4 years. You pay premium for 3 years with zero coverage for your most likely health risk. Some insurers have reduced this to 2 years — check before buying.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Avoid co-pay if possible** — pay the extra ₹3K–₹5K premium. One hospitalization recovers it.\n\n2. **Choose 'no room rent limit' policies** — HDFC Ergo Optima, Care Supreme, Star Comprehensive offer this.\n\n3. **Declare all pre-existing conditions honestly** — non-disclosure leads to claim rejection.\n\n4. **Buy early (in your 20s)** — lower premium and the 3-year waiting period passes before you likely need it.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More insurance guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/insurance/room-rent-trap" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Room rent trap explained →</Link>
          <Link href="/learn/insurance/copay-vs-no-copay" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Co-pay vs no co-pay →</Link>
        </div>
      </div>
    </section>
  );
}