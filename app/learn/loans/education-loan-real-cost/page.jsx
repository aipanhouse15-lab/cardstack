import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Your 15L Education Loan Becomes 22L Before Your First Job: The Complete Cost Breakdown",
  description: "Banks explain the moratorium but not interest capitalization. Full math on how a 15L education loan grows to 22L, the 80E tax benefit, and which lenders actu...",
  alternates: { canonical: "/learn/loans/education-loan-real-cost" },
  openGraph: {
    title: "Your 15L Education Loan Becomes 22L Before Your First Job: The Complete Cost Breakdown",
    description: "Banks explain the moratorium but not interest capitalization. Full math on how a 15L education loan grows to 22L, the 80E tax benefit, and which lenders actu...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/loans/education-loan-real-cost
// Template: Case study with full cost math
// Color: #2563eb | Updated: June 4, 2026

const COLOR = "#2563eb";
const UPDATED = "June 4, 2026";

const SvgMoratoriumCost = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Education loan moratorium cost visualization showing how 15 lakh borrowed becomes 18.5 lakh outstanding before first EMI due to interest capitalization during course and moratorium periods" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW ₹15L BECOMES ₹22L BEFORE YOUR FIRST JOB · ANANYA'S MBA LOAN</text>
    <rect x="20" y="40" width="100" height="200" fill={COLOR} rx="6" opacity="0.8" />
    <text x="70" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">₹15L</text>
    <text x="70" y="152" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#bfdbfe">Borrowed</text>
    <path d="M 122 140 L 178 140" stroke="#f59e0b" strokeWidth="2" />
    <rect x="180" y="60" width="120" height="160" fill="var(--raise)" rx="6" opacity="0.8" />
    <text x="240" y="130" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">₹16.8L</text>
    <text x="240" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff">After Year 1</text>
    <text x="240" y="163" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fde68a">(11% × ₹15L)</text>
    <path d="M 302 140 L 358 140" stroke="#f97316" strokeWidth="2" />
    <rect x="360" y="40" width="120" height="200" fill="var(--raise)" rx="6" opacity="0.8" />
    <text x="420" y="130" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">₹18.7L</text>
    <text x="420" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff">After Year 2</text>
    <text x="420" y="163" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fed7aa">(study complete)</text>
    <path d="M 482 140 L 538 140" stroke="#dc2626" strokeWidth="2" />
    <rect x="540" y="20" width="140" height="240" fill="#dc2626" rx="6" opacity="0.85" />
    <text x="610" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="800" fill="#fff">₹20.8L</text>
    <text x="610" y="140" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff">After 6-month</text>
    <text x="610" y="155" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff">moratorium ends</text>
    <text x="610" y="175" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fca5a5">First EMI starts here</text>
    <text x="610" y="195" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fca5a5">₹5.8L added</text>
    <text x="610" y="212" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fca5a5">before earning</text>
    <text x="610" y="228" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fca5a5">a single rupee</text>
    <text x="20" y="285" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Interest during study period: simple (added to principal). After moratorium ends: EMI on ₹20.8L, not ₹15L. At 11% over 10 years, total repaid: ~₹34.4L on ₹15L borrowed.</text>
    <text x="20" y="298" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">If Ananya had paid interest during study (₹1,650/month): outstanding stays ₹15L. EMI on ₹15L over 10yr: ₹20,700. Total repaid: ₹28.4L. She saves ₹6L by paying ₹39,600 during study.</text>
  </svg>
);

const SvgBankComparison = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Education loan comparison across SBI Vidya Lakshmi Axis Bank HDFC Credila and Bank of Baroda showing interest rates moratorium options and processing time for June 2026" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">EDUCATION LOAN COMPARISON · JUNE 2026 · PREMIER INSTITUTE (IIM/IIT/NIT) · ₹15L</text>
    {[{ h: "Bank" }, { h: "Rate" }, { h: "Moratorium" }, { h: "Collateral req." }, { h: "80E benefit" }, { h: "Processing" }].map(({ h }, i) => {
      const xs = [20, 130, 220, 320, 430, 540, 640];
      return (
        <g key={h}>
          <rect x={xs[i]} y="35" width={[100, 80, 90, 100, 100, 90, 80][i]} height="26" fill={COLOR} />
          <text x={xs[i] + [100, 80, 90, 100, 100, 90, 80][i] / 2} y="52" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{h}</text>
        </g>
      );
    })}
    {[
      ["SBI Scholar Loan", "8.15%*", "Course+6mo", "None (IIT/IIM)", "Full", "7-15 days"],
      ["Axis Bank", "11.00%", "Course+6mo", "None up to ₹40L", "Full", "5-7 days"],
      ["HDFC Credila", "11.50-13%", "Course+6mo", "Co-applicant", "Full", "3-5 days"],
      ["Bank of Baroda", "9.70%", "Course+12mo", "Above ₹7.5L", "Full", "10-20 days"],
      ["IDBI Bank", "9.50%", "Course+12mo", "Above ₹7.5L", "Full", "10-15 days"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={61 + ri * 36} width={700} height="36" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 130, 220, 320, 430, 540];
          const isLow = cell.startsWith("8.") || cell === "None (IIT/IIM)" || cell === "None up to ₹40L";
          const isHigh = cell.includes("13") || cell.includes("Co-applicant");
          return <text key={ci} x={xs[ci] + 5} y={83 + ri * 36} fontFamily="system-ui" fontSize="11" fill={isLow ? "#16a34a" : isHigh ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="265" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">*SBI Scholar Loan rate with repo-rate linkage for premier institutes. Rate for other colleges: 11.15%. HDFC Credila good for international programs — fastest processing, accepts wider college list.</text>
  </svg>
);

const SvgSection80E = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Section 80E tax benefit calculation showing how education loan interest deduction saves tax across 8 years for someone earning 12 lakh per year in 30 percent bracket" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SECTION 80E TAX SAVING · ₹20L OUTSTANDING · 11% INTEREST · 10-YEAR REPAYMENT</text>
    <text x="20" y="44" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">Year-by-year interest + tax saving (30% slab, new regime does NOT allow 80E — old regime only)</text>
    {[
      { yr: "Yr 1", interest: "₹2,15,000", taxSaved: "₹64,500", netCost: "₹1,50,500" },
      { yr: "Yr 2", interest: "₹1,98,000", taxSaved: "₹59,400", netCost: "₹1,38,600" },
      { yr: "Yr 3", interest: "₹1,79,000", taxSaved: "₹53,700", netCost: "₹1,25,300" },
      { yr: "Yr 4", interest: "₹1,58,000", taxSaved: "₹47,400", netCost: "₹1,10,600" },
      { yr: "Yr 5", interest: "₹1,35,000", taxSaved: "₹40,500", netCost: "₹94,500" },
      { yr: "Yr 6-10", interest: "₹3,80,000", taxSaved: "₹1,14,000", netCost: "₹2,66,000" },
    ].map(({ yr, interest, taxSaved, netCost }, i) => (
      <g key={yr}>
        <text x="20" y={78 + i * 28} fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{yr}</text>
        <text x="80" y={78 + i * 28} fontFamily="system-ui" fontSize="11" fill="var(--text)">{interest} interest paid</text>
        <text x="280" y={78 + i * 28} fontFamily="system-ui" fontSize="11" fill="#16a34a" fontWeight="600">{taxSaved} saved</text>
        <text x="440" y={78 + i * 28} fontFamily="system-ui" fontSize="11" fill={COLOR} fontWeight="600">Net cost: {netCost}</text>
      </g>
    ))}
    <rect x="20" y="246" width="680" height="1" fill="var(--border)" />
    <text x="20" y="258" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#16a34a">Total tax saved over 8 years: ~₹3,79,500. On 11% loan of ₹20L, effective after-tax interest rate = ~7.7%.</text>
  </svg>
);

const SvgRepaymentTimeline = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Education loan repayment timeline showing three scenarios of 7 year 10 year and 15 year tenures with total interest paid for each" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">REPAYMENT TIMELINE SCENARIOS · ₹20L OUTSTANDING AT START · 11% INTEREST</text>
    {[
      { tenure: "7 years", emi: "₹35,600/mo", totalInt: "₹9.9L", totalRepaid: "₹29.9L", color: "#16a34a", barW: 200 },
      { tenure: "10 years", emi: "₹27,600/mo", totalInt: "₹13.1L", totalRepaid: "₹33.1L", color: COLOR, barW: 300 },
      { tenure: "15 years", emi: "₹22,700/mo", totalInt: "₹20.9L", totalRepaid: "₹40.9L", color: "#dc2626", barW: 440 },
    ].map(({ tenure, emi, totalInt, totalRepaid, color, barW }, i) => (
      <g key={tenure}>
        <text x="100" y={80 + i * 70} textAnchor="end" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">{tenure}</text>
        <rect x="110" y={63 + i * 70} width={barW} height="34" fill={color} rx="4" opacity="0.8" />
        <text x="120" y={84 + i * 70} fontFamily="system-ui" fontSize="12" fill="#fff">EMI: {emi} · Interest: {totalInt}</text>
        <text x={120 + barW} y={84 + i * 70} fontFamily="system-ui" fontSize="13" fontWeight="700" fill={color}> Total: {totalRepaid}</text>
      </g>
    ))}
    <rect x="20" y="248" width="680" height="24" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" rx="4" />
    <text x="30" y="264" fontFamily="system-ui" fontSize="12" fill="#dc2626" fontWeight="600">The 15-year option feels easiest month-to-month. It costs ₹11L more in total interest than the 7-year option. If possible, choose 7-10 years and prepay aggressively.</text>
  </svg>
);

const SvgInterestVsMoratorium = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Comparison between taking full moratorium versus paying simple interest during study period on education loan showing total savings of 4 to 6 lakh by paying during study" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FULL MORATORIUM vs PAY INTEREST DURING STUDY · ₹15L LOAN · 11% · 2-YEAR COURSE + 6-MONTH MORATORIUM</text>
    <rect x="20" y="40" width="320" height="120" fill="#dc2626" rx="8" opacity="0.8" />
    <text x="180" y="70" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#fff">Full Moratorium (do nothing)</text>
    <text x="180" y="92" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#fca5a5">Outstanding at EMI start: ₹20.8L</text>
    <text x="180" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#fca5a5">Monthly EMI (10yr): ₹28,700</text>
    <text x="180" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#fca5a5">Total repaid: ₹34.4L</text>
    <text x="180" y="146" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fca5a5">You paid nothing during study.</text>
    <rect x="380" y="40" width="320" height="120" fill="#16a34a" rx="8" opacity="0.8" />
    <text x="540" y="70" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#fff">Pay simple interest during study</text>
    <text x="540" y="92" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#bbf7d0">Monthly during study: ₹1,375–1,650</text>
    <text x="540" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#bbf7d0">Outstanding at EMI start: ₹15L</text>
    <text x="540" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#bbf7d0">Monthly EMI (10yr): ₹20,700</text>
    <text x="540" y="146" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#bbf7d0">Total repaid: ₹28.4L</text>
    <rect x="180" y="180" width="360" height="44" fill="var(--raise)" rx="8" />
    <text x="360" y="200" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#fff">You save ₹6L by paying ₹39,600 during study</text>
    <text x="360" y="218" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fff">That's a 15:1 return on study-period payments. If parents can help during study: this is the move.</text>
  </svg>
);

const SvgSalaryVsEMI = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Salary to EMI ratio across career paths showing what percentage of salary education loan EMI consumes for different jobs after MBA from tier 1 college" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">EMI AS % OF FIRST SALARY · ₹20L OUTSTANDING · 10-YEAR REPAYMENT · EMI ₹27,600/MONTH</text>
    {[
      { role: "IIM-A grad, consulting (₹28-35L CTC)", monthly: "₹1,90,000", pct: "14%", color: "#16a34a" },
      { role: "IIM-B/C, BFSI (₹22-28L CTC)", monthly: "₹1,40,000", pct: "20%", color: "#65a30d" },
      { role: "IIT grad, product (₹20-25L CTC)", monthly: "₹1,25,000", pct: "22%", color: "#f59e0b" },
      { role: "Mid-tier MBA, corporate (₹10-15L CTC)", monthly: "₹65,000", pct: "42%", color: "#f97316" },
      { role: "Tier-3 college, regional role (₹5-8L CTC)", monthly: "₹38,000", pct: "72%", color: "#dc2626" },
    ].map(({ role, monthly, pct, color }, i) => (
      <g key={role}>
        <text x="20" y={55 + i * 40} fontFamily="system-ui" fontSize="11" fill="var(--text)">{role}</text>
        <text x="20" y={70 + i * 40} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Take-home: {monthly}/mo</text>
        <rect x="420" y={52 + i * 40} width={parseInt(pct) * 2.8} height="20" fill={color} rx="4" opacity="0.85" />
        <text x={428 + parseInt(pct) * 2.8} y={66 + i * 40} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{pct} of salary</text>
      </g>
    ))}
    <text x="20" y="248" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">The 20-40% EMI-to-income ratio is manageable. Above 50% is severe stress. The college tier matters enormously — a ₹15L loan for a college with ₹5L average placement is a financial trap.</text>
  </svg>
);

export default function PageEducationLoanRealCost() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Why is my education loan amount higher than what I borrowed when repayment starts?", "acceptedAnswer": { "@type": "Answer", "text": "During the study period and moratorium, interest accrues on the original loan amount. Banks typically add this interest to the principal (capitalization). On a ₹15L loan at 11% with a 2-year course plus 6-month moratorium, approximately ₹5.8L of interest gets capitalized. Your first EMI is calculated on ₹20.8L, not ₹15L. This is legal but rarely explained clearly at the time of taking the loan. The fix: pay simple interest monthly during study if you have any means to do so." } },
      { "@type": "Question", "name": "Is Section 80E available under the new tax regime?", "acceptedAnswer": { "@type": "Answer", "text": "No. Section 80E deduction for education loan interest is available only under the old tax regime. If you've opted for the new regime, you cannot claim this deduction. Given that 80E can save ₹3-5L in taxes over 8 years of repayment for someone in the 30% bracket, it's worth considering whether switching to old regime (or staying in it) makes sense. Consult a CA — the optimal choice depends on your total deductions versus the new regime's lower rates." } },
      { "@type": "Question", "name": "Which bank gives the best education loan for IIT/IIM students?", "acceptedAnswer": { "@type": "Answer", "text": "SBI's Scholar Loan scheme for premier institute students (IITs, IIMs, IISc, and the specific list at SBI's website) offers the lowest rate — currently around 8.15% linked to repo rate, versus 11-13% from private banks. No collateral required for IIT/IIM-listed institutes. The catch: SBI processing can take 15+ days. HDFC Credila is the best option if speed matters or if your college isn't on SBI's premier list — they accept a wider range of institutions and process in 3-5 days." } },
      { "@type": "Question", "name": "Should I take the longest moratorium available on my education loan?", "acceptedAnswer": { "@type": "Answer", "text": "Mathematically, no. A longer moratorium means more interest capitalization. If you can pay even simple interest (interest-only payments) during study, you save significantly on the total loan cost. A 12-month moratorium versus a 6-month moratorium on ₹15L at 11% adds about ₹1.65L to your outstanding principal. That ₹1.65L then attracts 10 more years of compound interest. Take the shortest moratorium you can manage, or switch to EMI immediately after getting a job." } },
      { "@type": "Question", "name": "Can I prepay an education loan early and save on interest?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most public sector banks (SBI, Bank of Baroda, IDBI) do not charge prepayment penalties on education loans. Private banks and NBFCs like HDFC Credila may charge 2-4% for prepayment during lock-in. Check your sanction letter. Annual performance bonuses are the best source for education loan prepayment — a ₹3L bonus directed to the loan in Year 2-3 can save ₹4-5L in total interest and cut 2-3 years off the tenure. The 80E benefit phases out naturally as the interest portion of EMI decreases anyway." } },
      { "@type": "Question", "name": "What happens to my education loan if I don't get a job right after graduation?", "acceptedAnswer": { "@type": "Answer", "text": "The moratorium typically covers the course period plus 6-12 months. If you're still unemployed when the moratorium ends, contact your bank immediately — don't wait for EMIs to start bouncing. Most public sector banks have restructuring provisions for education loans during genuine unemployment. SBI specifically has an 'education loan interest subsidy scheme' for economically weaker section borrowers. The worst outcome is default, which damages your CIBIL score and can trigger legal action after 90 days of non-payment." } },
      { "@type": "Question", "name": "Is an education loan for a tier-3 college worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Run the salary-to-EMI math first. If the college's average placement is ₹5-6L CTC (take-home ~₹35,000-40,000/month), and your EMI on ₹15L at 11% over 10 years is ₹20,700, you're paying 50-60% of income in EMI. This is financially unsustainable. For tier-3 colleges, consider alternatives: state government scholarships, employer-funded education, smaller loan amounts for shorter courses, or working for 2 years, saving, and upgrading to a better institution. An education loan is only a good bet when the salary premium of the degree comfortably services the loan." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Education Loan Real Cost: Your ₹15L Loan Becomes ₹22L Before Your First EMI", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
    { "@type": "ListItem", position: 4, name: "Education Loan Real Cost", item: "https://assurefintech.com/learn/loans/education-loan-real-cost" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #040C1E, #0B1F4B, #040C1E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #2563eb22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Loans · Education Loans · The Full Math
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your ₹15L Education Loan Becomes ₹22L Before Your First Job: The Complete Cost Breakdown
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 12 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Education Loan Real Cost
      </nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Banks explain the moratorium. They rarely explain what happens to your loan amount during it. Here's the full math on interest capitalization, the 80E benefit, and how to minimise total repayment.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Ananya's Loan: The Number That Kept Growing</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Ananya was 22 when she got into a two-year MBA program at a reputed private business school. Tuition, hostel, and living expenses came to ₹15 lakh over two years. She applied to Axis Bank's education loan product, got approved at 11% interest, and signed without reading the fine print carefully.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The RM explained: "Your loan has a moratorium. You don't pay anything during your studies and for 6 months after graduation. You start EMI when you get a job." This sounded generous. Ananya agreed.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>What the RM did not explain: interest runs during the moratorium. All of it. And it gets added to the principal. When Ananya's moratorium ended, her outstanding balance was ₹20.8 lakh — ₹5.8 lakh more than she borrowed. Her first EMI of ₹28,700 was calculated on ₹20.8L, not ₹15L.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Over 10 years, she'll repay ₹34.4 lakh on a ₹15 lakh loan. That's ₹19.4 lakh in interest. The bank called it a "moratorium." Ananya calls it something else entirely.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How Interest Capitalization Actually Works</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Education loans in India accrue interest from the date of disbursement. The first disbursement typically happens in the first semester. By the time the course ends, 2-4 years of interest has accumulated.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The critical term is capitalization. At the end of each year (or when the moratorium ends, depending on the bank), the accrued interest is added to the outstanding principal. This new, higher principal then attracts interest in the next period. It compounds.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For Ananya's ₹15L at 11% over a 2.5-year total moratorium (2 years study + 6 months job search): interest in Year 1 = ₹1.65L (added to principal), Year 2 = ₹1.82L, 6-month moratorium = ₹1.03L. Total capitalized: ₹4.5L. Outstanding: ₹19.5L. Some banks compound quarterly, making it higher.</p>
        <SvgMoratoriumCost />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The numbers look worse when you factor in that Ananya received disbursements in installments (semester-wise), not a lump sum. But for simplicity, even on full lump-sum disbursement, the capitalization is brutal.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The One Move That Saves ₹6 Lakh</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If Ananya's parents could pay the monthly simple interest during her 2.5-year moratorium, the entire capitalization is avoided. At 11% on ₹15L, the monthly interest-only payment is ₹1,375 in Year 1, rising slightly as the nominal principal stays the same.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Total payments during study period: approximately ₹39,600 over 30 months. This keeps the outstanding principal at ₹15L. Her first EMI becomes ₹20,700 instead of ₹28,700. Total repaid: ₹28.4L instead of ₹34.4L.</p>
        <SvgInterestVsMoratorium />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The math: spend ₹39,600 during study, save ₹6L in total repayment. That's a 15:1 return on investment. If family support is even partially available, making interest-only payments during study is the single most powerful move in education loan management.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Even paying interest for just one of the two study years changes the math significantly. Partial interest payments are allowed by all banks — it doesn't have to be all-or-nothing. Even ₹500–1,000/month during study reduces capitalization meaningfully.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Which Bank Should You Actually Pick?</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The rate gap between SBI Scholar Loan (8.15% for premier institutes) and HDFC Credila (11.5-13%) is enormous. On ₹15L over 10 years, the total interest difference is roughly ₹10-13 lakh. This gap is so large that choosing a bank on processing speed alone is financially irrational.</p>
        <SvgBankComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If your college is on SBI's premier institute list (check this first — it's on the SBI website under Education Loans), take SBI. Period. The 15-day processing inconvenience is worth ₹10L+ in savings.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For international programs (US, UK, Canada), HDFC Credila processes the widest range of foreign universities and handles GRE/GMAT-based underwriting. SBI's international education loan product is available but less comprehensive. HDFC Credila's higher rate (11.5-13%) is the cost of that flexibility and international expertise.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Bank of Baroda's Baroda Education Loan scheme (around 9.70%) with a 12-month moratorium is worth considering for mid-tier colleges that don't qualify for SBI Scholar Loan. It's not the cheapest but offers a longer moratorium that allows more time to establish income before EMI starts.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Section 80E: The Tax Benefit Nobody Explains Clearly</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Section 80E of the Income Tax Act allows full deduction of education loan interest paid during a financial year, with no upper limit. This benefit applies for 8 assessment years starting from the year you begin repayment.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The deduction is only available under the old tax regime. If you've opted for the new regime, you forgo this benefit. For many education loan borrowers, the 80E saving can be large enough to justify staying in the old regime.</p>
        <SvgSection80E />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Important nuance: the 80E benefit diminishes over time as the interest portion of your EMI falls. In Year 1, most of your EMI is interest. By Year 8, most of it is principal. The tax saving front-loads — which is another reason not to extend tenure unnecessarily. Collect the maximum 80E benefit early and prepay aggressively in years 5-8.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Also note: 80E is for the borrower, not the parent co-applicant. If the student is the primary borrower, they claim 80E when they start repaying. If a parent took the loan in their name for the child, the parent claims 80E. This matters for tax planning within the family.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Tenure: The Decision That Controls Everything</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Banks give you flexibility on tenure (typically 5-15 years). The temptation is always to take the longest tenure — lower EMI, less monthly pain. The math says the opposite.</p>
        <SvgRepaymentTimeline />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The 15-year EMI feels manageable. But you pay ₹11L more in total interest than the 7-year option. If your starting salary can afford the 7-year EMI (₹35,600/month), take it. You'll be debt-free by your early 30s instead of mid-30s, and you'll have ₹11L more in net worth.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>A middle path: take a 10-year tenure but aggressively prepay any annual bonus or salary increment windfall. This gives you EMI flexibility (₹27,600/month) while still cutting the tenure short. Most public sector banks allow partial prepayment without penalty on education loans.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The College Tier Question: Does the Loan Make Financial Sense?</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is the question nobody asks. The loan amount and repayment term should be calibrated against the expected salary from the degree. A ₹15L loan for an IIM-A MBA is financially trivial — the starting CTC is 10-20x the annual EMI. The same ₹15L for a tier-3 MBA with ₹5L average placement is a 10-15 year financial burden.</p>
        <SvgSalaryVsEMI />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The rule of thumb: education loan EMI should not exceed 20-25% of your expected take-home salary. Above 40%: the debt is financially stressful. Above 60%: consider if the degree is worth the loan at all.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Before signing any education loan, look up the college's actual placement reports (not marketing brochures), find the median salary (not average or highest package), and calculate your EMI-to-income ratio using our <Link href="/tools/emi-calculator" style={{ color: COLOR }}>EMI calculator</Link>. If the ratio is above 30%, explore scholarships, partial self-funding, or shorter programs first.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Checklist: What to Do Before and After Taking the Loan</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Before taking the loan: verify your college is on SBI's premier institute list (save ₹3L+ in interest). Calculate the EMI-to-expected-salary ratio. Confirm with the bank whether they add simple or compound interest during moratorium — this changes your outstanding by ₹30,000-1,00,000.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>During the study period: pay at least the simple interest every month if your family can manage it. Even ₹500-1,000/month reduces future capitalization. Ask the bank for a statement showing your accrued interest every semester — this keeps you aware of the growing number.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>After getting a job: file for old tax regime (or evaluate it) to claim 80E. Start EMI immediately upon moratorium end. Direct all bonuses and incremental salary toward the loan in the first 3-5 years while 80E benefit is largest.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our broader <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> and our <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>tax deductions guide</Link> for how education loan interest fits into your overall tax planning alongside 80C, HRA, and home loan interest.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/learn/loans/personal-loan-actual-apr" style={{ color: COLOR }}>personal loan APR</Link> · <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C deductions</Link> · <Link href="/tools/emi-calculator" style={{ color: COLOR }}>EMI calculator</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>
        Editorial disclaimer: loan rates verified against SBI, Axis Bank, HDFC Credila, Bank of Baroda, and IDBI Bank public disclosures as of {UPDATED}. Section 80E reference from Income Tax Act, 1961 (updated through Finance Act 2025). SBI Scholar Loan eligible institute list from SBI.co.in. Not financial advice. Rates change — verify with lender before applying.
      </footer>
    </main>
    </>
  );
}
