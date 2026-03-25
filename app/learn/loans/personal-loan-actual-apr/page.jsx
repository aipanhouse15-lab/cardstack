import Link from "next/link";
export const metadata = { title: "Personal Loan: Advertised 10.5%, Actual 13.1%", description: "Origination fees, late payment charges, and foreclosure penalties turn a cheap personal loan expensive. We calculate the actual APR." };
export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/loans" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Loans</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Guide · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Personal loan: advertised 10.5%, actual 13.1%</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Banks and NBFCs advertise personal loan rates "starting from 10.5%." But the actual cost — after origination fees, late charges, and foreclosure penalties — is significantly higher. Here's the breakdown.</p>
      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>The honest number: ₹5L personal loan, 3 years</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[["Advertised interest rate","10.50%",false],["+ Origination/processing fee (2–3%)","₹10,000–₹15,000",true],["+ GST on processing fee (18%)","₹1,800–₹2,700",true],["+ Late payment charges (₹500–₹1000/instance)","₹2,000–₹6,000 over tenure",true],["+ Foreclosure penalty (2–5% of outstanding)","₹5,000–₹15,000 if you prepay",true]].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center"><span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span><span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span></div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}><span className="font-extrabold" style={{color:"var(--text)"}}>Effective APR</span><span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>~13.1%</span></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div><h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Origination fee: the hidden 2–3%</h2><p>Almost every personal loan charges 1–3% upfront as "processing" or "origination" fee. On a ₹5L loan, that's ₹5,000–₹15,000 deducted before disbursement. You borrow ₹5L but receive ₹4.85L — yet pay interest on the full ₹5L. This alone adds 0.8–1.5% to your effective rate.</p></div>
        <div><h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>Foreclosure penalty: paying to leave early</h2><p>Want to close your loan early? Most lenders charge 2–5% of outstanding principal as foreclosure penalty. On a ₹3L balance, that's ₹6,000–₹15,000 just for the privilege of repaying. Some NBFCs don't allow foreclosure at all in the first 6–12 months. RBI has removed prepayment penalties on floating-rate loans but most personal loans are fixed-rate, so the penalty applies.</p></div>
        <div><h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do about it</h2>
          <p>1. <strong style={{color:"var(--text)"}}>Compare the total cost, not just the rate.</strong> Ask for the total repayment amount including all fees before signing.</p>
          <p className="mt-2">2. <strong style={{color:"var(--text)"}}>Negotiate the processing fee.</strong> Many lenders will reduce it for existing customers or strong CIBIL scores (750+).</p>
          <p className="mt-2">3. <strong style={{color:"var(--text)"}}>Avoid NBFCs with high foreclosure penalties.</strong> If you might prepay, choose a lender with 0–2% penalty or none after 12 months.</p>
          <p className="mt-2">4. <strong style={{color:"var(--text)"}}>Check the APR disclosure.</strong> RBI mandates lenders show the Annual Percentage Rate — look for it in the Key Facts Statement.</p>
        </div>
      </div>
      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More loan guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/loans/home-loan-true-cost" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Home loan true cost →</Link>
          <Link href="/learn/loans/prepayment-penalty-trap" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Prepayment trap →</Link>
        </div>
      </div>
    </section>
  );
}
