import Link from "next/link";

export const metadata = {
  title: "Tax on Credit Card Rewards: Do You Need to Worry?",
  description: "Short answer: probably not. Long answer involves Section 56(2)(x) and gift tax provisions. We break down the actual legal position.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/tax" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Tax</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>Guide · 4 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Tax on Credit Card Rewards: Do You Need to Worry?</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Short answer: probably not. Long answer involves Section 56(2)(x) and gift tax provisions. We break down the actual legal position.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-green)", border: "1px solid var(--border-section-green)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Credit card rewards — taxable or not?</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Cashback on purchases","Not taxable (discount on purchase)",false],
            ["Reward points redeemed for vouchers","Grey area — generally not taxed",false],
            ["Welcome bonus / sign-up bonus","Technically taxable above ₹50K aggregate gifts",true],
            ["Referral rewards","Taxable as income from other sources",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>For most cardholders earning ₹5K–₹30K/year in rewards</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>Not taxable</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>but watch welcome bonuses</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Cashback: clear — not taxable</h2>
          <p>Cashback on spending is treated as a discount on the purchase price, not as income. If you buy something for ₹1,000 and get ₹50 cashback, you effectively paid ₹950. The ₹50 is not income — it's a reduced cost. RBI and IT department have consistently treated spend-linked cashback this way. No declarations needed.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Welcome bonuses: the grey area</h2>
          <p>When a bank gives you 10,000 points (worth ₹2,500) just for signing up, that's not linked to a purchase — it's a gift. Under Section 56(2)(x), gifts above ₹50,000 aggregate in a financial year are taxable. If your total 'gifts' (including welcome bonuses, referral rewards, etc.) stay below ₹50K, you're fine. Most individual cardholders never hit this threshold.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Reward points: practically untaxed</h2>
          <p>Reward points earned on purchases are discount equivalents — not taxable. When you redeem points for flights, hotels, or vouchers, the redemption itself isn't a taxable event. The IT department has never issued specific guidance taxing credit card reward points on purchases. In practice, no one reports them and no assessments have challenged this for normal cardholders.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Don't worry about cashback and purchase-linked rewards** — they're not taxable.\n\n2. **Track welcome bonuses and referral rewards** if you're churning multiple cards — keep aggregate below ₹50K/year.\n\n3. **If you're earning ₹1L+ in rewards/year** (extreme optimizer), consult a CA to be safe.\n\n4. **No TDS is deducted on credit card rewards** — this is between you and your tax return. Most CAs will tell you not to declare spend-linked rewards.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More tax guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/tax/old-vs-new-regime" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>Old vs new regime →</Link>
          <Link href="/cards" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--green-bg)",color:"var(--green)"}}>Credit card tools →</Link>
        </div>
      </div>
    </section>
  );
}