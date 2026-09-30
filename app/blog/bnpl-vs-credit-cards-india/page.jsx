import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "BNPL vs Credit Cards in India: Compare the Actual Cost",
  description: "Compare pay-later plans and credit cards by lender, total repayment, fees, bureau reporting and repayment risk—not a blanket APR claim.",
  alternates: { canonical: "/blog/bnpl-vs-credit-cards-india" },
  openGraph: {
    title: "BNPL vs Credit Cards in India: Compare the Actual Cost",
    description: "Compare pay-later plans and credit cards by lender, total repayment, fees, bureau reporting and repayment risk—not a blanket APR claim.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/bnpl-vs-credit-cards-india
// Template: Warning/trap article with real math and decision guide
// Color: #dc2626 | Updated: September 26, 2026

const COLOR = "#dc2626";
const UPDATED = "September 28, 2026";

const SvgBnplLandscape = () => (
  <svg viewBox="0 0 720 235" role="img" aria-label="Overview of major BNPL providers in India with their rates and key terms" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">India's Major BNPL Players: The Honest Numbers</text>
    {["Provider", "30-Day Free?", "APR After Free Period", "Late Fee", "Reports to CIBIL?"].map((h, i) => (
      <text key={i} x={[30, 160, 290, 460, 580][i]} y="50" fontSize="10.5" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["LazyPay", "Yes", "24-36% APR", "₹500-750", "No (mostly)"],
      ["Simpl", "Yes", "18-30% APR", "₹500", "No"],
      ["Amazon Pay Later", "Yes", "24% APR on EMI", "₹500", "Yes (NBFC)"],
      ["Flipkart Pay Later", "Yes", "24-36% APR", "₹750", "Partial"],
      ["ZestMoney (wound down)", "N/A", "24-42% APR was charged", "Varied", "Yes"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={56 + i * 24} width="680" height="22" rx="3" fill={i % 2 === 0 ? "transparent" : "var(--red-dim)"} />
        <text x="30" y={71 + i * 24} fontSize="11" fill="var(--text)">{row[0]}</text>
        <text x="160" y={71 + i * 24} fontSize="11" fill="#16a34a">{row[1]}</text>
        <text x="290" y={71 + i * 24} fontSize="11" fontWeight="600" fill={COLOR}>{row[2]}</text>
        <text x="460" y={71 + i * 24} fontSize="11" fill="#f97316">{row[3]}</text>
        <text x="580" y={71 + i * 24} fontSize="11" fill={row[4].startsWith("No") ? "#94a3b8" : row[4] === "Yes (NBFC)" ? "#16a34a" : "#f59e0b"}>{row[4]}</text>
      </g>
    ))}
  </svg>
);

const SvgBnplHowItWorks = () => (
  <svg viewBox="0 0 720 242" role="img" aria-label="How BNPL buy now pay later works in India: free period then high interest" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">How BNPL Actually Works: The Free Period Ends</text>
    <line x1="40" y1="90" x2="680" y2="90" stroke="var(--border)" strokeWidth="2" />
    {[
      { x: 40, label: "Purchase", sub: "Day 0", color: "#16a34a", desc: "Approved instantly" },
      { x: 200, label: "Free window", sub: "Day 1-30", color: "#16a34a", desc: "Zero interest" },
      { x: 360, label: "Pay in full?", sub: "Day 30", color: "#f59e0b", desc: "No cost if yes" },
      { x: 520, label: "Convert to EMI?", sub: "Day 31+", color: COLOR, desc: "18-42% APR kicks in" },
      { x: 680, label: "Miss payment?", sub: "Day 31+", color: COLOR, desc: "Late fee + APR" },
    ].map((d, i) => (
      <g key={i}>
        <circle cx={d.x} cy="90" r="8" fill={d.color} />
        <text x={d.x} y={i % 2 === 0 ? "64" : "120"} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={d.color}>{d.label}</text>
        <text x={d.x} y={i % 2 === 0 ? "78" : "110"} textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">{d.sub}</text>
        <text x={d.x} y={i % 2 === 0 ? "150" : "175"} textAnchor="middle" fontSize="9.5" fill={d.color}>{d.desc}</text>
      </g>
    ))}
    <rect x="40" y="86" width="160" height="8" rx="2" fill="#16a34a" opacity="0.4" />
    <rect x="360" y="86" width="320" height="8" rx="2" fill={COLOR} opacity="0.4" />
  </svg>
);

const SvgRealMathComparison = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Real cost comparison of a 10000 rupee purchase on BNPL vs credit card no-cost EMI over 3 months" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">₹10,000 Purchase: 3-Month EMI — BNPL vs Credit Card</text>
    <rect x="20" y="38" width="320" height="186" rx="8" fill="var(--raise)" />
    <rect x="380" y="38" width="320" height="186" rx="8" fill="#dcfce7" />
    <text x="180" y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>LazyPay BNPL (24% APR)</text>
    <text x="540" y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill="#14532d">Credit Card No-Cost EMI</text>
    <text x="36" y="84" fontSize="11" fill="var(--text)">Purchase amount: ₹10,000</text>
    <text x="36" y="102" fontSize="11" fill={COLOR}>Processing fee: ₹200 (2%)</text>
    <text x="36" y="120" fontSize="11" fill={COLOR}>Monthly EMI: ₹3,467</text>
    <text x="36" y="138" fontSize="11" fill={COLOR}>Month 1 interest: ₹200</text>
    <text x="36" y="156" fontSize="11" fill={COLOR}>Month 2 interest: ₹133</text>
    <text x="36" y="174" fontSize="11" fill={COLOR}>Month 3 interest: ₹67</text>
    <text x="36" y="196" fontSize="11" fontWeight="700" fill={COLOR}>Total paid: ₹10,600</text>
    <text x="36" y="214" fontSize="10" fill={COLOR}>Extra cost: ₹600 over 3 months</text>
    <text x="396" y="84" fontSize="11" fill="var(--text)">Purchase amount: ₹10,000</text>
    <text x="396" y="102" fontSize="11" fill="#16a34a">Processing fee: ₹0</text>
    <text x="396" y="120" fontSize="11" fill="#16a34a">Monthly EMI: ₹3,333</text>
    <text x="396" y="138" fontSize="11" fill="#16a34a">Month 1 interest: ₹0</text>
    <text x="396" y="156" fontSize="11" fill="#16a34a">Month 2 interest: ₹0</text>
    <text x="396" y="174" fontSize="11" fill="#16a34a">Month 3 interest: ₹0</text>
    <text x="396" y="196" fontSize="11" fontWeight="700" fill="#16a34a">Total paid: ₹10,000</text>
    <text x="396" y="214" fontSize="10" fill="#16a34a">Extra cost: ₹0. Savings: ₹600.</text>
  </svg>
);

const SvgHiddenCharges = () => (
  <svg viewBox="0 0 720 190" role="img" aria-label="Hidden charges in BNPL products in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The Hidden Charges BNPL Doesn't Advertise</text>
    {[
      { charge: "EMI processing fee", amount: "1-2% upfront", trap: "Applied at conversion. Feels like nothing, is ₹200 on ₹10,000." },
      { charge: "Late payment fee", amount: "₹500-1,000", trap: "Triggered even 1 day late. No grace period on most BNPL apps." },
      { charge: "Loan processing fee", amount: "₹0-500 flat", trap: "Charged on some platforms for activating the credit line itself." },
      { charge: "GST on all fees", amount: "18% on fees", trap: "The ₹500 late fee is actually ₹590 after GST." },
      { charge: "Penal interest after default", amount: "2-4% extra/month", trap: "Stacks on top of the EMI rate. Rarely disclosed upfront." },
    ].map((d, i) => (
      <g key={i}>
        <rect x="20" y={38 + i * 28} width="680" height="24" rx="4" fill={i % 2 === 0 ? "var(--red-dim)" : "var(--raise)"} />
        <text x="30" y={54 + i * 28} fontSize="11" fontWeight="700" fill={COLOR}>{d.charge}:</text>
        <text x="200" y={54 + i * 28} fontSize="11" fontWeight="600" fill="#7f1d1d">{d.amount}</text>
        <text x="310" y={54 + i * 28} fontSize="10.5" fill="var(--text-muted)">{d.trap}</text>
      </g>
    ))}
  </svg>
);

const SvgCibilImpact = () => (
  <svg viewBox="0 0 720 178" role="img" aria-label="Credit bureau reporting comparison between BNPL and credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="170" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">CIBIL Score Impact: Where BNPL Fails You Long-Term</text>
    <rect x="20" y="38" width="320" height="116" rx="8" fill="var(--raise)" />
    <rect x="380" y="38" width="320" height="116" rx="8" fill="#dcfce7" />
    <text x="180" y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>BNPL (LazyPay, Simpl)</text>
    <text x="540" y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill="#14532d">Credit Card</text>
    <text x="36" y="82" fontSize="11" fill="#7f1d1d">Most don't report to CIBIL</text>
    <text x="36" y="100" fontSize="11" fill="#7f1d1d">Default DOES get reported</text>
    <text x="36" y="118" fontSize="11" fill="#7f1d1d">You build no credit history</text>
    <text x="36" y="136" fontSize="11" fill="#7f1d1d">1 year of BNPL = CIBIL unchanged</text>
    <text x="36" y="154" fontSize="11" fontWeight="700" fill={COLOR}>Spend without growth</text>
    <text x="396" y="82" fontSize="11" fill="#14532d">Always reported to CIBIL, Experian</text>
    <text x="396" y="100" fontSize="11" fill="#14532d">Good repayment builds score</text>
    <text x="396" y="118" fontSize="11" fill="#14532d">Every month adds history</text>
    <text x="396" y="136" fontSize="11" fill="#14532d">1 year = +50 to +100 CIBIL points</text>
    <text x="396" y="154" fontSize="11" fontWeight="700" fill="#14532d">Spend + grow your credit profile</text>
  </svg>
);

const SvgWhenBnplWins = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Situations where BNPL is genuinely better than a credit card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The 3 Situations Where BNPL Actually Makes Sense</text>
    {[
      {
        title: "You don't have a credit card yet",
        detail: "BNPL has low eligibility thresholds. For someone with no credit history or a low CIBIL score, it can be a stepping stone. Use it for the 30-day free window only, always pay in full."
      },
      {
        title: "Small-ticket no-cost EMI not available on your credit card",
        detail: "Some platforms offer zero-cost BNPL on very small amounts (under ₹3,000) where credit card EMI conversion isn't available. Verify no hidden processing fee first."
      },
      {
        title: "Genuine emergency with full repayment planned",
        detail: "30-day free period with a clear repayment plan is fine. The danger is converting to EMI, where 24-42% APR is among the most expensive consumer debt in India."
      },
    ].map((d, i) => (
      <g key={i}>
        <rect x="20" y={38 + i * 38} width="680" height="32" rx="4" fill={i % 2 === 0 ? "var(--green-dim)" : "var(--raise)"} />
        <text x="30" y={57 + i * 38} fontSize="11" fontWeight="700" fill="#16a34a">{i + 1}. {d.title}</text>
        <text x="30" y={72 + i * 38} fontSize="10.5" fill="var(--text-muted)">{d.detail}</text>
      </g>
    ))}
  </svg>
);

const SvgAprWarningChart = () => (
  <svg viewBox="0 0 720 230" role="img" aria-label="APR comparison chart showing BNPL rates against other consumer debt options in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">BNPL APR in Context: Where It Sits Among Indian Debt</text>
    {[
      { label: "Home loan (SBI)", rate: "8.5%", bar: 51, color: "#16a34a" },
      { label: "Car loan", rate: "9-11%", bar: 60, color: "#22c55e" },
      { label: "Credit card (pay in full)", rate: "0%", bar: 4, color: "#16a34a" },
      { label: "Personal loan (HDFC)", rate: "10-21%", bar: 90, color: "#f59e0b" },
      { label: "Credit card revolving", rate: "36-42% APR", bar: 200, color: "#f97316" },
      { label: "BNPL EMI (typical)", rate: "18-42% APR", bar: 180, color: COLOR },
    ].map((d, i) => (
      <g key={i}>
        <text x="230" y={54 + i * 26} textAnchor="end" fontSize="11" fill="var(--text-muted)">{d.label}</text>
        <rect x="238" y={40 + i * 26} width={d.bar} height="20" rx="3" fill={d.color} opacity="0.85" />
        <text x={245 + d.bar} y={54 + i * 26} fontSize="11" fontWeight={i >= 4 ? "700" : "400"} fill={d.color}>{d.rate}</text>
      </g>
    ))}
  </svg>
);

export default function BlogBnplVsCreditCardsIndia() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is every BNPL plan interest-free for 30 days?",
        acceptedAnswer: { "@type": "Answer", text: "No. Pay-later products have different structures and terms. Check whether the offer is a merchant payment arrangement, a loan or a credit line, and read the due date, APR, fees and default terms shown for your own account." }
      },
      {
        "@type": "Question",
        name: "Does BNPL affect my CIBIL score?",
        acceptedAnswer: { "@type": "Answer", text: "It depends on the product and lender. RBI's Digital Lending Directions require regulated entities to report lending through their digital lending apps, including structured deferred-payment digital lending. Check your loan documents to identify the lender and ask how the facility is reported." }
      },
      {
        "@type": "Question",
        name: "How do I compare BNPL costs with a credit card?",
        acceptedAnswer: { "@type": "Answer", text: "Compare the same purchase and repayment period. Add interest, processing fees, taxes and any lost discount or reward, then compare the total payable and each due date. For digital loans, review the lender's Key Fact Statement and APR." }
      },
      {
        "@type": "Question",
        name: "Does a credit card always earn rewards where BNPL does not?",
        acceptedAnswer: { "@type": "Answer", text: "No. Rewards depend on the exact card, merchant, transaction category and exclusions. A pay-later offer may also include a discount. Compare the written terms and do not assume either payment method is cheaper or earns rewards." }
      },
      {
        "@type": "Question",
        name: "What should I check before accepting a digital loan?",
        acceptedAnswer: { "@type": "Answer", text: "Identify the regulated lender, read the Key Fact Statement and loan agreement, and check APR, total repayment, instalment dates, penal charges, cooling-off terms, privacy permissions and grievance contacts. Do not proceed if the lender or total cost is unclear." }
      },
      {
        "@type": "Question",
        name: "Will a pay-later product help build my credit history?",
        acceptedAnswer: { "@type": "Answer", text: "Only if the facility is credit reported and the lender submits the account information. Ask the named lender how it reports the product; responsible repayment does not guarantee a score or a particular outcome." }
      },
      {
        "@type": "Question",
        name: "What happens if I miss a payment?",
        acceptedAnswer: { "@type": "Answer", text: "The lender may apply the disclosed charges, pursue collection and report the account as permitted by applicable rules. Check your agreement and contact the lender promptly if you expect difficulty; do not assume a grace period or a universal fee." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "BNPL vs Credit Cards in India: Read This Before You Sign Up",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-28",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "BNPL vs Credit Cards India", item: "https://www.assurefintech.com/blog/bnpl-vs-credit-cards-india" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1C0404, #460C0C, #1C0404)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #dc262622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Warning
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            BNPL vs Credit Cards in India: Read This Before You Sign Up
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            “Pay later” covers several different products. Compare who lends, what you repay, when it is due, and how the account is reported before choosing a payment plan.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav aria-label="Breadcrumb" style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / BNPL vs Credit Cards India
      </nav>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>“Pay later” is a label, not one standard product</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>At checkout, a deferred payment may be a merchant arrangement, a credit-card instalment, or a digital loan/credit facility provided by a bank or NBFC. Those structures have different costs, due dates, rights and reporting. Do not assume a free period, zero cost or bureau outcome from the BNPL label alone.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Start by finding the legal lender in the offer and agreement. For digital lending, RBI requires a Key Fact Statement and disclosures such as APR and repayment obligations. The <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12848&Mode=0" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>RBI Digital Lending Directions, 2025</a> also require regulated entities to report covered digital lending—including structured deferred-payment digital lending—to credit information companies.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Compare the complete cost, not the checkout label</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For the same item and tenure, write down the cash price, any discount that disappears, interest, processing or convenience fees, applicable taxes, each instalment and total amount payable. Check whether an advertised discount applies to your card and whether paying by another route changes it.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Example using hypothetical figures only: if a ₹10,000 purchase has a ₹300 processing charge and ₹54 tax on that charge, the plan costs at least ₹10,354 before interest or lost discounts. The calculation is arithmetic, not a quote from any provider. For a digital loan, compare its disclosed APR and Key Fact Statement with any card or merchant plan.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>What to check before accepting</h2>
        <ol style={{ paddingLeft: 22, fontSize: 16, lineHeight: 1.8 }}>
          <li>Who is the lender, and what product are you entering into?</li>
          <li>What is the APR, total repayment, due-date schedule and any processing fee or tax?</li>
          <li>What happens after a missed payment, and what penal charges are disclosed?</li>
          <li>Is there a Key Fact Statement, loan agreement, grievance contact and cooling-off option?</li>
          <li>Will the lender report the facility to credit information companies?</li>
          <li>Are you comfortable with the data permissions requested by the app?</li>
        </ol>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>RBI’s 2025 directions provide a cooling-off option for digital loans, subject to the regulated entity’s stated policy and at least a one-day period; a reasonable one-time processing fee may be retained if disclosed. Read the specific KFS and agreement rather than assuming every checkout plan follows identical terms.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>How credit-card interest differs</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>A credit card is not automatically cheap credit. If you pay the full statement balance by the due date, the interest-free period may apply to eligible purchases under the card’s terms. If you carry a balance, interest can apply from the transaction date and the grace period can be suspended. RBI requires issuers to disclose APRs for different situations and warn that minimum-only payments can stretch repayment over months or years.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>A card EMI offer is also not automatically free: compare principal, interest, any upfront merchant or issuer discount, fees, taxes, lost discounts and rewards. The exact issuer and checkout terms decide the real cost. Rewards should be treated as zero in your comparison unless the specific transaction qualifies and the value is usable for you.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Credit reporting and repayment</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Do not use a pay-later plan as a guaranteed way to build a score. RBI’s digital-lending rules cover reporting of lending through regulated entities’ apps and structured deferred-payment lending, but the product, legal lender and reporting record matter. Ask the lender how the account is reported and review your own credit report for accuracy. On-time payment does not promise a particular score or loan approval.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If a payment will be difficult, contact the lender before the due date, ask about available options, and avoid taking a new loan without comparing its total cost. If you already have arrears, prioritise the agreement’s due dates and charges rather than borrowing again based on a headline rate.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>A quick decision rule</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Choose the route with the clearest lender, affordable instalments and lowest complete cost for a purchase you already planned. If you cannot identify the lender, see the total repayment or meet instalments without relying on future borrowing, pause the purchase. A rewards card is not a reason to spend more, and a short-term checkout loan is not income.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        Related:{" "}
        <Link href="/blog/credit-card-vs-debit-card" style={{ color: COLOR }}>Credit Card vs Debit Card</Link> ·{" "}
        <Link href="/blog/beginners-guide" style={{ color: COLOR }}>Beginner's Guide to Credit Cards</Link> ·{" "}
        <Link href="/learn/loans" style={{ color: COLOR }}>Personal Loans Guide</Link> ·{" "}
        <Link href="/blog/read-credit-card-statement" style={{ color: COLOR }}>How to Read Your Credit Card Statement</Link> ·{" "}
        <Link href="/stack-builder" style={{ color: COLOR }}>Card Stack Builder</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        <strong>Sources and review:</strong> RBI, <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12848&Mode=0" target="_blank" rel="noopener noreferrer">Digital Lending Directions, 2025</a>, and <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300" target="_blank" rel="noopener noreferrer">Credit Card and Debit Card Directions</a>. Product structures and terms differ; this guide explains how to compare them, not the current terms of any named provider. Reviewed September 28, 2026. Educational information, not financial advice.
      </footer>
    </main>
    </>
  );
}
