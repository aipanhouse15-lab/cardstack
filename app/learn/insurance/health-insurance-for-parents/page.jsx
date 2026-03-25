import Link from "next/link";

export const metadata = {
  title: "Health Insurance for Parents: What to Check Before Buying",
  description: "Pre-existing waiting, co-pay, network hospitals, and room rent limits matter more than headline cover when buying insurance for parents above 55.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/insurance" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Insurance</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--pink-bg)", border: "1px solid var(--pink-border)", color: "var(--pink)" }}>Guide · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Health Insurance for Parents: What to Check Before Buying</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Pre-existing waiting, co-pay, network hospitals, and room rent limits matter more than headline cover when buying insurance for parents above 55.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Buying ₹10L cover for parents (age 60) — what to watch</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Premium (age 60, ₹10L cover)","₹30,000–₹55,000/year",false],
            ["Mandatory co-pay at 60+","10–20% on many policies",true],
            ["Pre-existing waiting period","2–4 years (diabetes, BP, thyroid)",true],
            ["Room rent sub-limit","₹6K–₹10K/day on budget plans",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>Effective coverage in year 1 for pre-existing</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹0</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>until waiting period ends</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The pre-existing trap for senior citizens</h2>
          <p>Parents above 55 almost certainly have pre-existing conditions — diabetes, hypertension, thyroid, arthritis. These are the conditions most likely to cause hospitalization. But every policy excludes them for 2–4 years. You pay ₹35K–₹50K/year in premium while the conditions most likely to need coverage are excluded. This is the biggest honest-number gap in senior insurance.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Co-pay at 60+: unavoidable in most plans</h2>
          <p>Many insurers mandate 10–20% co-pay for policyholders above 60. Some make it optional (with higher premium for no co-pay). At 20% co-pay, a ₹5L hospitalization costs your parents ₹1L from pocket. Star Senior Citizen Red Carpet and Care Senior have no mandatory co-pay — but premiums are 25–30% higher.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Network hospitals: the practical check</h2>
          <p>Your parents likely live in a specific city and prefer specific hospitals. Before buying any policy, check: are those hospitals in-network? Cashless claims at non-network hospitals are impossible. Reimbursement claims take 15–45 days. For seniors who may need emergency hospitalization, cashless at their local hospital is non-negotiable.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Buy early (when parents are 55–58)** — premiums jump 15–20% for every 5-year age bracket.\n\n2. **Prioritize no co-pay policies** even if premium is higher — one hospitalization recovers the difference.\n\n3. **Check network hospitals in your parents' city** before comparing premiums.\n\n4. **Top up with a super top-up** — buy a ₹5L base + ₹20L super top-up instead of ₹25L base. Saves 30–40% in premium.\n\n5. **Port from old policies** — if parents already have a policy, porting preserves the waiting period credit. Never let a policy lapse and buy new.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More insurance guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/insurance/claim-settlement-ratios-2026" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Claim settlement rankings →</Link>
          <Link href="/learn/insurance/room-rent-trap" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--pink-bg)",color:"var(--pink)"}}>Room rent trap →</Link>
        </div>
      </div>
    </section>
  );
}