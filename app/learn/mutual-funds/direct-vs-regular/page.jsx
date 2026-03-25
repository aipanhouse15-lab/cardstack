import Link from "next/link";

export const metadata = {
  title: "Direct vs Regular: The 1% That Costs You ₹12L Over 20 Years",
  description: "Regular plans pay distributors 0.5-1.5% annually from your returns. On a ₹10K SIP over 20 years, the difference is staggering.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/mutual-funds" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Mutual funds</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Analysis · 6 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Direct vs Regular: The 1% That Costs You ₹12L Over 20 Years</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Regular plans pay distributors 0.5-1.5% annually from your returns. On a ₹10K SIP over 20 years, the difference is staggering.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>₹10K monthly SIP for 20 years — direct vs regular</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Regular plan (12% CAGR after 1.5% expense)","₹91.2L corpus",false],
            ["Direct plan (13% CAGR after 0.5% expense)","₹1.03Cr corpus",false],
            ["Difference","₹11.8L",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>The 1% expense difference costs you</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹11.8L</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>over 20 years on just ₹10K/month SIP</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What regular plans pay distributors</h2>
          <p>When you buy a mutual fund through a bank, advisor, or distributor, they earn a commission — called 'trail commission' — of 0.5–1.5% annually on your invested amount. This comes from the expense ratio charged to you. A regular plan charges 1.5% expense while the direct plan charges 0.5%. The 1% difference is the distributor's cut, paid from your returns, every year, for as long as you hold.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Why distributors push regular plans</h2>
          <p>A ₹20L portfolio in regular plan pays the distributor ₹20,000–₹30,000/year in trail commission — for doing nothing after the initial sale. This is why banks, insurance agents, and 'wealth advisors' aggressively push regular plans. They have no incentive to recommend direct plans. Some distributors add value through portfolio construction and rebalancing — but most simply sell and collect trail.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The compounding damage</h2>
          <p>1% per year sounds small. But compounding turns it massive. On a ₹10K monthly SIP: after 10 years, the difference is ₹2.8L. After 20 years: ₹11.8L. After 30 years: ₹35L+. The longer you hold, the more devastating the regular plan tax becomes. And unlike other costs, this is permanent — the distributor earns trail every single year.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Switch all existing funds to direct plans** — you can do this online via the AMC website or Groww/Kuvera. No exit load on the switch if held >1 year.\n\n2. **Use Groww, Kuvera, or MF Central for direct plan purchases** — zero commission platforms.\n\n3. **If you want advice, pay a fee-only financial planner** (₹5,000–₹15,000/year) instead of the perpetual 1% trail commission.\n\n4. **Check your portfolio on MF Central** — it shows your exact expense ratio for each fund.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More mutual funds guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/mutual-funds/cagr-vs-actual-return" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>CAGR vs actual →</Link>
          <Link href="/learn/mutual-funds/sip-advertised-vs-actual" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>SIP real returns →</Link>
        </div>
      </div>
    </section>
  );
}