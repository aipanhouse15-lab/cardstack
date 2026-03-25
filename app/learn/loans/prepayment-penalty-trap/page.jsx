import Link from "next/link";

export const metadata = {
  title: "Prepayment Penalty Trap: Why 'No Lock-in' Doesn't Mean Free",
  description: "Banks advertise zero prepayment penalty but charge 2-4% if you switch lenders or take a fixed rate. Here's how to spot and avoid the trap.",
};

export default function Article() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[740px] mx-auto">
      <Link href="/learn/loans" className="text-sm no-underline mb-4 inline-block" style={{ color: "var(--accent-text)" }}>← Back to Loans</Link>
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>Guide · 5 min read</div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>Prepayment Penalty Trap: Why 'No Lock-in' Doesn't Mean Free</h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Banks advertise zero prepayment penalty but charge 2-4% if you switch lenders or take a fixed rate. Here's how to spot and avoid the trap.</p>

      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Prepayment penalty reality check</h2>
        <div className="flex flex-col gap-2 text-sm">
          {[
            ["Floating rate (bank)","₹0 penalty (RBI mandated)",false],
            ["Fixed rate (bank)","2% of outstanding",true],
            ["Any rate (NBFC/HFC)","2–4% of outstanding",true],
            ["Switching lender (balance transfer)","₹2,000–₹5,000 admin fee",true],
          ].map(([l,v,neg],i)=>(
            <div key={i} className="flex justify-between items-center">
              <span style={{color:neg?"var(--text-muted)":"var(--text-secondary)"}}>{l}</span>
              <span style={{color:neg?"#DC2626":"var(--text)"}}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-2" style={{borderTop:"1px solid var(--border)"}}>
            <span className="font-extrabold" style={{color:"var(--text)"}}>On ₹30L outstanding, a 2% penalty =</span>
            <span className="text-2xl font-extrabold" style={{color:"#DC2626"}}>₹60,000</span>
          </div>
          <p className="text-xs mt-1" style={{color:"var(--text-faint)"}}>just for closing early</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>The RBI rule most people misunderstand</h2>
          <p>RBI mandated zero prepayment penalty on floating rate home loans from banks. This is great — but it only applies to scheduled commercial banks, only for floating rate, and only for individual borrowers. If your loan is fixed rate, from an NBFC, or a non-individual loan, the penalty still applies. Most borrowers don't check which category their loan falls into.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>How banks work around it</h2>
          <p>Banks can't charge prepayment penalty on floating loans — but they can (and do) impose lock-in periods of 6–12 months where you simply can't prepay at all. They also charge 'administrative fees' for balance transfers (₹2,000–₹5,000) and require you to go through the entire documentation process again. The friction is the penalty.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>NBFC trap: the worst offender</h2>
          <p>Housing Finance Companies (HFCs) and NBFCs like Bajaj Housing, Tata Capital, PNB Housing often charge 2–4% prepayment penalty regardless of whether the rate is fixed or floating. On a ₹40L outstanding balance, that's ₹80,000–₹1,60,000. This completely negates any interest rate savings from switching. Always check the foreclosure clause before signing with an NBFC.</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold mb-2" style={{color:"var(--text)"}}>What to do</h2>
          <p>1. **Always choose floating rate from a bank** — zero prepayment penalty guaranteed by RBI.\n\n2. **Avoid fixed rate unless necessary** — the penalty trap makes it expensive to exit.\n\n3. **Never take a home loan from an NBFC without checking foreclosure terms** — read the sanction letter clause on prepayment.\n\n4. **Negotiate the lock-in period** — some banks will reduce it from 12 months to 6 months if you ask.</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3" style={{background:"var(--bg-muted)",border:"1px solid var(--border)"}}>
        <div className="text-sm font-bold" style={{color:"var(--text)"}}>More loans guides</div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/learn/loans/home-loan-true-cost" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Home loan true cost →</Link>
          <Link href="/learn/loans/personal-loan-actual-apr" className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline" style={{background:"var(--blue-bg)",color:"var(--blue)"}}>Personal loan APR →</Link>
        </div>
      </div>
    </section>
  );
}