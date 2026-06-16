import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Your Personal Loan Is Not 10.5% — The Real APR Is Closer to 14%",
  description: "Banks advertise the interest rate. They bury the processing fee, GST, insurance add-on, and net disbursement gap. The honest APR calculation explained.",
  alternates: { canonical: "/learn/loans/personal-loan-actual-apr" },
  openGraph: {
    title: "Your Personal Loan Is Not 10.5% — The Real APR Is Closer to 14%",
    description: "Banks advertise the interest rate. They bury the processing fee, GST, insurance add-on, and net disbursement gap. The honest APR calculation explained.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/loans/personal-loan-actual-apr
// Template: Math walkthrough + trap article
// Color: #2563eb | Updated: June 4, 2026

const COLOR = "#2563eb";
const UPDATED = "June 4, 2026";

const SvgFlatVsReducing = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Flat rate versus reducing balance on a 5 lakh 3-year personal loan at 10.5 percent showing flat rate costs 1.57 lakh in interest while reducing balance costs only 87 thousand" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FLAT RATE vs REDUCING BALANCE · ₹5L LOAN · 3 YEARS · 10.5% STATED RATE</text>
    <line x1="40" y1="260" x2="680" y2="260" stroke="var(--border)" strokeWidth="1" />
    <rect x="80" y="90" width="140" height="170" fill="#dc2626" rx="6" opacity="0.85" />
    <text x="150" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#dc2626">FLAT RATE</text>
    <text x="150" y="130" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill="#fff">₹1,57,500</text>
    <text x="150" y="150" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fca5a5">total interest</text>
    <text x="150" y="275" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">EMI: ₹18,264/mo</text>
    <rect x="290" y="153" width="140" height="107" fill={COLOR} rx="6" opacity="0.85" />
    <text x="360" y="142" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>REDUCING BALANCE</text>
    <text x="360" y="195" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill="#fff">₹87,000</text>
    <text x="360" y="215" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#93c5fd">total interest</text>
    <text x="360" y="275" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">EMI: ₹16,247/mo</text>
    <rect x="500" y="195" width="140" height="65" fill="var(--raise)" rx="6" opacity="0.85" />
    <text x="570" y="184" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#f59e0b">YOU OVERPAY</text>
    <text x="570" y="225" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill="#fff">₹70,500</text>
    <text x="570" y="245" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fde68a">if quoted flat rate</text>
    <text x="570" y="275" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">over 3 years</text>
    <text x="20" y="295" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Flat rate 10.5% = Reducing balance APR of ~19.2%. Always ask which method the lender uses.</text>
  </svg>
);

const SvgHiddenCostStack = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Hidden cost breakdown on a 5 lakh HDFC personal loan showing processing fee GST insurance and total true cost versus advertised cost" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHAT ₹5L PERSONAL LOAN ACTUALLY COSTS YOU · HDFC BANK EXAMPLE</text>
    <rect x="40" y="40" width="200" height="36" fill={COLOR} rx="4" />
    <text x="50" y="63" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#fff">Advertised interest (10.5%)</text>
    <text x="350" y="63" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>₹87,000</text>
    <rect x="40" y="86" width="200" height="36" fill="var(--raise)" rx="4" />
    <text x="50" y="109" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#fff">Processing fee (2.5%)</text>
    <text x="350" y="109" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#f59e0b">+₹12,500</text>
    <rect x="40" y="132" width="200" height="36" fill="var(--raise)" rx="4" />
    <text x="50" y="155" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#fff">GST on processing fee (18%)</text>
    <text x="350" y="155" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#f97316">+₹2,250</text>
    <rect x="40" y="178" width="200" height="36" fill="#dc2626" rx="4" />
    <text x="50" y="201" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#fff">Loan insurance (pushed hard)</text>
    <text x="350" y="201" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">+₹5,000</text>
    <rect x="40" y="224" width="200" height="36" fill="#7c3aed" rx="4" />
    <text x="50" y="247" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#fff">Stamp duty / legal charges</text>
    <text x="350" y="247" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#7c3aed">+₹500</text>
    <line x1="340" y1="272" x2="480" y2="272" stroke="var(--border)" strokeWidth="1" />
    <text x="350" y="292" fontFamily="system-ui" fontSize="16" fontWeight="800" fill="#dc2626">TOTAL: ₹1,07,250</text>
    <text x="350" y="312" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">effective APR: ~14.2% (not 10.5%)</text>
    <text x="20" y="312" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Net disbursement: ₹4,80,250. Interest computed on ₹5L. That gap alone adds ~0.4% to true cost.</text>
  </svg>
);

const SvgBankRateComparison = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Personal loan advertised versus actual APR comparison across SBI HDFC ICICI Axis and Kotak Mahindra Bank as of June 2026" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ADVERTISED RATE vs TRUE APR · PERSONAL LOAN · JUNE 2026 · ₹5L · 3 YEARS · SALARIED 750+ CIBIL</text>
    {[
      { bank: "SBI", adv: "10.30%", apr: "12.8%", x: 60, advH: 120, aprH: 160 },
      { bank: "HDFC", adv: "10.50%", apr: "14.2%", x: 180, advH: 115, aprH: 175 },
      { bank: "ICICI", adv: "10.65%", apr: "13.9%", x: 300, advH: 110, aprH: 170 },
      { bank: "Axis", adv: "10.49%", apr: "13.5%", x: 420, advH: 116, aprH: 165 },
      { bank: "Kotak", adv: "10.99%", apr: "14.8%", x: 540, advH: 100, aprH: 180 },
    ].map(({ bank, adv, apr, x, advH, aprH }) => (
      <g key={bank}>
        <rect x={x} y={260 - advH} width="45" height={advH} fill={COLOR} rx="4" opacity="0.7" />
        <rect x={x + 50} y={260 - aprH} width="45" height={aprH} fill="#dc2626" rx="4" opacity="0.7" />
        <text x={x + 47} y={255 - advH} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>{adv}</text>
        <text x={x + 73} y={255 - aprH} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#dc2626">{apr}</text>
        <text x={x + 47} y="275" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{bank}</text>
      </g>
    ))}
    <g>
      <rect x="560" y="40" width="14" height="14" fill={COLOR} rx="2" opacity="0.7" />
      <text x="580" y="52" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Advertised</text>
      <rect x="560" y="62" width="14" height="14" fill="#dc2626" rx="2" opacity="0.7" />
      <text x="580" y="74" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">True APR</text>
    </g>
    <line x1="40" y1="260" x2="660" y2="260" stroke="var(--border)" strokeWidth="1" />
  </svg>
);

const SvgCibilVsRate = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="CIBIL score range versus personal loan interest rate showing that a score below 700 can mean paying 4 to 8 percent more than someone with 800 plus score" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">CIBIL SCORE vs PERSONAL LOAN RATE · HDFC / ICICI / AXIS · SALARIED APPLICANT</text>
    {[
      { label: "800+", rate: "10.50%", color: "#16a34a", x: 60, barW: 120 },
      { label: "775–799", rate: "11.25%", color: "#65a30d", x: 60, barW: 145 },
      { label: "750–774", rate: "12.50%", color: "#f59e0b", x: 60, barW: 175 },
      { label: "725–749", rate: "14.00%", color: "#f97316", x: 60, barW: 210 },
      { label: "700–724", rate: "16.50%", color: "#dc2626", x: 60, barW: 260 },
      { label: "Below 700", rate: "20–24%+", color: "#7f1d1d", x: 60, barW: 340 },
    ].map(({ label, rate, color, x, barW }, i) => (
      <g key={label}>
        <text x={x - 5} y={55 + i * 30} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">{label}</text>
        <rect x={x} y={40 + i * 30} width={barW} height="20" fill={color} rx="3" opacity="0.85" />
        <text x={x + barW + 6} y={55 + i * 30} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{rate}</text>
      </g>
    ))}
    <text x="20" y="230" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Gap between 800+ and below-700 borrower: ~10-14% on same loan. Check your score free at RBI-authorized bureaus before applying.</text>
  </svg>
);

const SvgApRFormula = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="APR calculation formula showing how to compute annual percentage rate from EMI principal and tenure to find your real cost of borrowing" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW TO CALCULATE YOUR REAL APR IN 3 STEPS</text>
    <rect x="20" y="35" width="200" height="60" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="8" />
    <text x="120" y="58" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>STEP 1</text>
    <text x="120" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Net disbursement</text>
    <text x="120" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">(Loan - all fees)</text>
    <path d="M 222 65 L 248 65" stroke={COLOR} strokeWidth="2" markerEnd="url(#arr)" />
    <rect x="250" y="35" width="200" height="60" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="8" />
    <text x="350" y="58" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>STEP 2</text>
    <text x="350" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Monthly EMI you pay</text>
    <text x="350" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">(from sanction letter)</text>
    <path d="M 452 65 L 478 65" stroke={COLOR} strokeWidth="2" />
    <rect x="480" y="35" width="220" height="60" fill={COLOR} rx="8" />
    <text x="590" y="58" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">STEP 3</text>
    <text x="590" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#bfdbfe">Solve: PV(EMIs) =</text>
    <text x="590" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#bfdbfe">Net disbursement → r = APR</text>
    <text x="20" y="120" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">Quick check: APR on ₹5L loan, ₹4,80,250 net disbursement, ₹16,247 EMI, 36 months</text>
    <rect x="20" y="132" width="680" height="36" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" rx="4" />
    <text x="36" y="148" fontFamily="system-ui" fontSize="12" fill="#dc2626" fontWeight="600">Solve: 4,80,250 = 16,247 × [1-(1+r)^-36] / r</text>
    <text x="36" y="163" fontFamily="system-ui" fontSize="12" fill="#dc2626">Result: r = 1.12%/month = 13.5% APR (not 10.5%). Use our EMI calculator at /tools/emi-calculator to back-derive.</text>
  </svg>
);

const SvgNegotiationLevels = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Personal loan negotiation leverage pyramid showing what to use to get better rates from banks including CIBIL score salary slip existing relationship and competing offers" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">NEGOTIATION LEVERAGE: WHAT ACTUALLY GETS YOUR RATE REDUCED</text>
    {[
      { label: "Competing offer (bank's biggest fear)", savings: "0.5–1.5%", color: "#16a34a", y: 40, w: 620 },
      { label: "Salary account + 3+ year relationship", savings: "0.25–0.75%", color: "#2563eb", y: 80, w: 500 },
      { label: "CIBIL 800+, clean repayment history", savings: "0.25–0.50%", color: "#7c3aed", y: 120, w: 380 },
      { label: "Processing fee waiver (always ask)", savings: "₹5,000–15,000", color: "#f59e0b", y: 160, w: 260 },
      { label: "Pre-approved offer (check app first)", savings: "0.10–0.30%", color: "#dc2626", y: 200, w: 140 },
    ].map(({ label, savings, color, y, w }) => (
      <g key={label}>
        <rect x={360 - w / 2} y={y} width={w} height="30" fill={color} rx="4" opacity="0.85" />
        <text x="360" y={y + 19} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#fff">{label} → saves {savings}</text>
      </g>
    ))}
  </svg>
);

const SvgTotalCost5yr = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Total cost of 5 lakh personal loan over 3 years at different effective APRs from 10.5 percent up to 24 percent showing rupee difference between best and worst case" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">TOTAL COST ON ₹5L PERSONAL LOAN AT VARIOUS EFFECTIVE APRs · 3-YEAR TENURE</text>
    {[
      { apr: "10.5%", total: "5,87,000", interest: "87,000", color: "#16a34a", barH: 60 },
      { apr: "12.0%", total: "5,99,816", interest: "99,816", color: "#65a30d", barH: 72 },
      { apr: "14.2%", total: "6,14,500", interest: "1,14,500", color: "#f59e0b", barH: 88 },
      { apr: "18.0%", total: "6,46,900", interest: "1,46,900", color: "#f97316", barH: 120 },
      { apr: "24.0%", total: "6,96,800", interest: "1,96,800", color: "#dc2626", barH: 170 },
    ].map(({ apr, total, interest, color, barH }, i) => (
      <g key={apr}>
        <rect x={60 + i * 130} y={230 - barH} width="80" height={barH} fill={color} rx="4" opacity="0.85" />
        <text x={100 + i * 130} y={225 - barH} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={color}>{interest}</text>
        <text x={100 + i * 130} y="245" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{apr}</text>
        <text x={100 + i * 130} y="258" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">total: ₹{total}</text>
      </g>
    ))}
    <line x1="40" y1="230" x2="700" y2="230" stroke="var(--border)" strokeWidth="1" />
    <text x="20" y="20" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Interest paid ↑</text>
  </svg>
);

export default function PagePersonalLoanAPR() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the difference between flat rate and reducing balance rate on a personal loan?", "acceptedAnswer": { "@type": "Answer", "text": "Flat rate means interest is calculated on the original loan amount throughout the tenure, even as you repay principal. Reducing balance means interest is calculated only on the outstanding principal, which shrinks every month. A flat rate of 10.5% is equivalent to roughly 19.2% on reducing balance — nearly double. Most banks now quote reducing balance, but NBFCs and car finance companies still use flat rates. Always confirm which method the lender is using." } },
      { "@type": "Question", "name": "Why does HDFC Bank's 10.5% personal loan end up costing me 14% or more?", "acceptedAnswer": { "@type": "Answer", "text": "The gap is processing fee (2.5% = ₹12,500 on ₹5L), GST on that fee (18% = ₹2,250), and sometimes a loan insurance add-on (₹3,000–8,000). You receive less money than you borrowed (net disbursement is ~₹4,80,250) but pay interest on the full ₹5L. This mismatch alone adds roughly 1.5–2% to your effective APR. Add mandatory insurance and the true cost crosses 14%." } },
      { "@type": "Question", "name": "How do I calculate the actual APR on my personal loan?", "acceptedAnswer": { "@type": "Answer", "text": "Take your net disbursement (loan amount minus all fees deducted upfront), your monthly EMI, and your tenure in months. Solve for the monthly rate r in: Net disbursement = EMI × [1-(1+r)^-n] / r. Multiply r by 12 to get annual APR. Our EMI calculator at /tools/emi-calculator does this automatically. Just enter actual disbursed amount, EMI, and tenure." } },
      { "@type": "Question", "name": "Can I negotiate the interest rate on a personal loan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and it is more effective than most people think. A competing offer from another bank (even printed from their website) is your strongest card. Banks hate losing customers to each other. A CIBIL score above 800 plus a salary account relationship can get 0.5–1% knocked off. Processing fee waivers are easier to get and save ₹5,000–15,000 upfront. Always negotiate before signing — never after." } },
      { "@type": "Question", "name": "Is a personal loan from SBI cheaper than HDFC or ICICI?", "acceptedAnswer": { "@type": "Answer", "text": "SBI's advertised starting rate (10.30%) is the lowest of the three. But SBI's processing time is 15–25 days versus 2–3 days at HDFC and ICICI. For salaried applicants with 750+ CIBIL, ICICI and Axis often match SBI rates through pre-approved offers. Get quotes from all three on the same day and compare the total outgo, not just the headline rate." } },
      { "@type": "Question", "name": "What happens if I take a personal loan for an EMI conversion on my credit card?", "acceptedAnswer": { "@type": "Answer", "text": "Credit card EMI conversions charge 12–18% APR at most banks, which is actually cheaper than a fresh personal loan (10.5–24% APR depending on CIBIL). If your credit card is from the same bank, ask for an EMI conversion before applying for a separate personal loan. No processing fee, faster approval, and often a better rate for existing cardholders." } },
      { "@type": "Question", "name": "Does prepaying a personal loan save money?", "acceptedAnswer": { "@type": "Answer", "text": "For floating rate personal loans, RBI mandates zero prepayment penalty. For fixed rate loans (which most personal loans are), banks can charge 2–5% of the outstanding principal as a prepayment charge. On ₹3L outstanding, that is ₹6,000–15,000. Do the math: if your interest saving over the remaining tenure exceeds the penalty, prepay. Most banks require at least 6–12 EMIs before you can prepay." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Personal Loan APR: Why Your 10.5% Offer Is Actually 14%+", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
    { "@type": "ListItem", position: 4, name: "Personal Loan Actual APR", item: "https://assurefintech.com/learn/loans/personal-loan-actual-apr" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #040C1E, #0B1F4B, #040C1E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #2563eb22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Loans · Personal Loans · Apr Explained
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your Personal Loan Is Not 10.5% — The Real APR Is Closer to 14%
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Personal Loan APR
      </nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Banks advertise the interest rate. They bury the processing fee, GST, insurance add-on, and net disbursement gap. Add it all up and the honest number is 3–5% higher than what the billboard says.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Loan That Didn't Quite Make Sense</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Rohan is a 28-year-old software engineer in Bangalore with a ₹85,000 monthly salary and a CIBIL score of 762. He needed ₹5 lakh for a home renovation, applied to HDFC Bank, and got an offer at "10.5% interest."</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>He accepted. When the money hit his account, he noticed ₹4,80,250 instead of ₹5,00,000. His EMI was ₹16,247 for 36 months. He ran the math. Total repaid: ₹5,84,892. Plus the ₹19,750 already deducted upfront. Total outgo: ₹6,04,642.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>That means he paid ₹1,04,642 for the use of ₹4,80,250 over 3 years. The true APR? 13.8%. Not 10.5%. Nobody lied to him — they just never added it up for him.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This guide does exactly that.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Trap 1: Flat Rate vs Reducing Balance</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Before we even get to the fees, there's a more fundamental deception some lenders use. Two types of interest calculation exist in India and they are not equivalent.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>With a <strong>flat rate</strong>, interest is calculated on the original loan amount every month, even as you repay the principal. On ₹5L at 10.5% flat over 3 years: interest = 5,00,000 × 10.5% × 3 = ₹1,57,500. Your EMI is ₹18,264. The effective (reducing balance equivalent) APR is ~19.2%.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>With a <strong>reducing balance rate</strong>, interest is charged only on what you still owe. As you pay down the principal, your interest cost drops each month. On ₹5L at 10.5% reducing over 3 years: total interest is ₹87,000. EMI is ₹16,247. This is what scheduled banks (SBI, HDFC, ICICI, Axis, Kotak) legally must quote.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The ₹70,500 difference on the same ₹5L loan. Same "10.5%" stated rate. Completely different actual cost.</p>
        <SvgFlatVsReducing />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The rule: always ask if the quoted rate is flat or reducing balance. NBFCs, car dealership finance desks, and some digital lenders still quote flat rates. If they say "monthly rate of 0.8%," convert it. That is 9.6% annual flat, which equals roughly 17.5% reducing balance APR.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Trap 2: The Fee Stack Nobody Totals for You</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Even assuming reducing balance rate (which the big banks use), the 10.5% is still not what you pay. Here is what gets added on top.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Processing fee is standard at 1–2.5% of the loan amount. HDFC charges up to 2.5% (₹12,500 on a ₹5L loan). ICICI charges 2.25% (₹11,250). Axis charges 1.5–2% (₹7,500–10,000). SBI charges 0.5–1% (₹2,500–5,000) — the lowest of the bunch.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>GST hits that processing fee at 18%. So that ₹12,500 fee becomes ₹14,750 out of pocket. This is not avoidable — GST is a government tax, not a bank charge. But banks almost never show you the GST-inclusive number on their website.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Loan insurance is described as "optional" and "for your protection." In practice, bank relationship managers push hard for it and some make it difficult to decline without escalating. The premium is ₹3,000–8,000 on a ₹5L loan and it is usually a single premium upfront, meaning even if you prepay the loan early, you don't get the premium back.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Stamp duty and documentation charges are small (₹300–700) but they exist and nobody warns you. Some lenders also charge a CIBIL pull fee (₹50–100) though many have waived this for digital applications.</p>
        <SvgHiddenCostStack />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The subtler trap: you receive the loan amount minus all these upfront deductions, but interest is charged on the full sanctioned amount. Rohan borrowed ₹5L but received ₹4,80,250. Every month's interest calculation uses ₹5,00,000 as the base. That's a gap of ₹19,750 that costs him extra interest for 3 years.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How to Calculate Your True APR in 3 Steps</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>You don't need to be a financial mathematician. The concept is simple: find the interest rate that makes your actual cash flows add up correctly.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Step 1: Note your net disbursement. This is the amount actually credited to your account after all deductions. Get this from your sanction letter or bank statement.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Step 2: Note your EMI, your tenure in months, and any upfront fees paid outside the loan (like GST paid directly).</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Step 3: Plug these into a present value formula. Our EMI calculator at <Link href="/tools/emi-calculator" style={{ color: COLOR }}>assurefintech.com/tools/emi-calculator</Link> has an "APR back-calculator" mode — enter what you actually received and what you actually pay, and it computes your real APR.</p>
        <SvgApRFormula />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For Rohan's loan: he received ₹4,80,250, pays ₹16,247/month for 36 months. Solving that equation gives a monthly rate of about 1.12%, which annualises to 13.5% APR. Add the upfront GST he paid out of pocket (₹2,250) and the effective cost is closer to 13.8%.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What the Five Big Banks Actually Charge (June 2026)</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>We ran the numbers for a ₹5L, 3-year personal loan for a salaried applicant with 750+ CIBIL score, salary account at the same bank. Here's the honest comparison.</p>
        <SvgBankRateComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>SBI wins on stated rate (10.30%) and the lowest processing fee in the industry (0.5–1%). The trade-off: SBI's processing takes 15–25 business days. If you need money in 48 hours, SBI is not your option.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>HDFC Bank and ICICI Bank process in 24–72 hours for salaried applicants but their processing fees are 2–2.5%. Axis Bank is often competitive for existing credit card holders — their pre-approved personal loan offers through mobile banking routinely come in at 10.49% with zero processing fee.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Kotak Mahindra Bank has the highest stated rate (starts at 10.99%) but offers aggressive pre-approved rates to existing customers. Always check the Kotak 811 app before applying elsewhere — pre-approved offers there can be significantly cheaper than branch-applied rates.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Your CIBIL Score Is Worth More Than You Think</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Banks price personal loans based on credit risk. Your CIBIL score is the primary risk signal. The difference between 750 and 800 can mean 1–1.5% lower interest rate. On ₹5L over 3 years, 1.5% less interest saves about ₹13,500. That's real money for checking your score, clearing any errors, and paying down credit card utilization before you apply.</p>
        <SvgCibilVsRate />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If your score is between 700 and 750, don't apply cold to a major bank. You'll get rejected or offered a punitive rate (18–22%). Instead: check for pre-approved offers in your existing bank's app (these use internal scoring that can be more favorable than bureau scores), or apply to your salary account bank where they have income visibility. Also check NBFC options like Bajaj Finserv or Tata Capital — they are more accommodating to sub-750 profiles but charge 16–24% APR.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>One underused tactic: get your free CIBIL report from CIBIL's RBI-mandated free annual report, dispute any incorrect entries, and wait 30–60 days before applying. Hard enquiries from loan applications further lower your score by 5–15 points each — so don't apply to 5 banks in the same week hoping for the best offer.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How to Negotiate Your Personal Loan Rate</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Most people accept the first offer. That's a mistake. Banks have 2–4% flexibility on personal loan rates and they use every bit of it to maximize margin — unless you push back.</p>
        <SvgNegotiationLevels />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most powerful move: walk into your bank with a printed competing offer. Tell them: "ICICI offered me 10.85% with zero processing fee. Can you beat it?" The branch manager almost always has authority to match competitor rates for existing salary account customers. This single tactic saves more than any other.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Always negotiate the processing fee separately from the interest rate. Banks treat these as different buckets — the rate manager and the fee authority are sometimes different people. You might get a rate concession but not a fee waiver unless you ask specifically for the fee too.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For the insurance add-on: know that IRDAI guidelines give you the right to decline any bundled insurance. Say clearly: "I don't need the insurance add-on, I have a term plan." A branch RM who insists it's "mandatory" is wrong. Escalate if needed — this is regulated territory.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Full Picture: What 14% vs 10.5% Costs You Over 3 Years</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Here's the stark summary of what your effective APR does to total cost on a ₹5L personal loan.</p>
        <SvgTotalCost5yr />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The difference between the best case (10.5% reducing with zero fees) and the common case (14.2% all-in) is about ₹27,500 over 3 years. That's almost 2 months of EMIs you're paying extra — purely because of fees and structuring, not because you negotiated poorly on the rate.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If your CIBIL is below 700, the worst case (24% NBFC APR) costs ₹1,09,800 more than the best case on the same ₹5L. That's like paying for a second personal loan on top of your first.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What to Do Before You Apply</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Check your CIBIL score first — free once a year at cibil.com (RBI mandate). If it's below 750, spend 1–3 months fixing it: pay down credit card balances, ensure no missed EMIs, dispute errors if any.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Check pre-approved offers in your existing bank's mobile app. These are almost always better than walk-in rates and often come with zero processing fee.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Use the <Link href="/tools/emi-calculator" style={{ color: COLOR }}>Assure Fintech EMI calculator</Link> to compute your true APR once you have a sanction letter. Enter the net disbursement, not the loan amount. Compare 3 banks before signing anything.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Read the sanction letter carefully for prepayment clauses. Most banks allow prepayment after 12 EMIs with a 2–5% penalty on outstanding principal. If you plan to repay early, negotiate a lower prepayment penalty upfront — yes, this is negotiable too. More on that at <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>our prepayment guide</Link>.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Also check if a balance transfer from an existing high-interest loan or credit card makes more sense than a fresh personal loan. Banks like HDFC and ICICI run 0% balance transfer offers periodically. Our <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> tracks these.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment penalty trap</Link> · <Link href="/learn/loans/fixed-vs-floating-rate" style={{ color: COLOR }}>fixed vs floating rate</Link> · <Link href="/tools/emi-calculator" style={{ color: COLOR }}>EMI calculator</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>
        Editorial disclaimer: rates and fees verified against SBI, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank public disclosures as of {UPDATED}. RBI guidelines referenced from Master Directions on Interest Rate on Advances (2016, updated 2024). Not financial advice. Rates change — verify with lender before applying.
      </footer>
    </main>
    </>
  );
}
