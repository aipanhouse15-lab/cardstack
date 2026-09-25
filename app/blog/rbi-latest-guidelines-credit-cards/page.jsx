import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "RBI Credit Card Guidelines: Key Rights and What to Check | Assure Fintech",
  description: "A source-linked guide to RBI credit-card rules on billing, EMI disclosures, card closure and complaints.",
  alternates: { canonical: "/blog/rbi-latest-guidelines-credit-cards" },
  openGraph: {
    title: "RBI Credit Card Guidelines: Key Rights and What to Check",
    description: "Understand key RBI credit-card rules and verify them against the official Master Direction.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/rbi-latest-guidelines-credit-cards
// Template: regulatory update / consumer rights
// Color: #dc2626 | Reviewed: September 26, 2026

const COLOR = "#dc2626";
const UPDATED = "September 26, 2026";

const SvgRegulatoryTimeline = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Timeline of major RBI credit card regulatory changes 2021 to 2026" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">RBI Credit Card Regulations: Key Milestones</text>
    <line x1="40" y1="60" x2="680" y2="60" stroke="var(--border)" strokeWidth="2" />
    {[
      { x: 60, year: "2021", label: "Tokenisation\nmandated" },
      { x: 180, year: "2022", label: "Card-not-present\nauth rules" },
      { x: 310, year: "2023", label: "Closure within\n7 working days" },
      { x: 450, year: "2024", label: "EMI cost\ndisclosure" },
      { x: 600, year: "2026", label: "Check current\nissuer terms" },
    ].map((e, i) => (
      <g key={i}>
        <circle cx={e.x} cy="60" r="7" fill={COLOR} opacity={0.4 + i * 0.12} />
        <text x={e.x} y="48" textAnchor="middle" fontSize="9" fontWeight="700" fill={COLOR}>{e.year}</text>
        {e.label.split("\n").map((line, j) => (
          <text key={j} x={e.x} y={82 + j * 14} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{line}</text>
        ))}
      </g>
    ))}
  </svg>
);

const SvgInterestFreePeriod = () => (
  <svg viewBox="0 0 720 182" role="img" aria-label="Credit card interest-free period depends on transaction and payment due date" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="170" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Interest-free period: check your statement due date</text>
    <rect x="24" y="42" width="120" height="100" rx="6" fill="var(--border)" opacity="0.3" />
    <text x="84" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">Statement</text>
    <text x="84" y="94" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Date</text>
    <rect x="174" y="42" width="200" height="100" rx="6" fill={COLOR} opacity="0.22" />
    <text x="274" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>Due date varies by issuer</text>
    <text x="274" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">RBI defines the period by</text>
    <text x="274" y="112" textAnchor="middle" fontSize="10" fill="var(--text-muted)">transaction date and due date</text>
    <rect x="402" y="42" width="294" height="100" rx="6" fill="var(--border)" opacity="0.2" />
    <text x="549" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">Pay full balance by the due date</text>
    <text x="549" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">to retain the interest-free period</text>
    <text x="549" y="112" textAnchor="middle" fontSize="10" fill="var(--text-muted)">subject to the card terms</text>
    <text x="24" y="158" fontSize="10" fill="var(--text-muted)">RBI does not prescribe a universal minimum number of days from statement to due date.</text>
  </svg>
);

const SvgCardClosureRule = () => (
  <svg viewBox="0 0 720 242" role="img" aria-label="RBI one click card closure rule requiring banks to close cards within 7 working days" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Card closure: seven working days after dues are cleared</text>
    {[
      { step: "1", label: "You request closure (app, phone, or branch)", highlight: false },
      { step: "2", label: "Bank must process within 7 working days", highlight: true },
      { step: "3", label: "Outstanding dues: you pay before or at closure", highlight: false },
      { step: "4", label: "Penalty may apply for delay under RBI terms", highlight: true },
    ].map((s, i) => (
      <g key={i}>
        <rect x="24" y={38 + i * 28} width="672" height="22" rx="4" fill={s.highlight ? COLOR : "var(--border)"} opacity={s.highlight ? 0.06 : 0.2} />
        <text x="40" y={54 + i * 28} fontSize="10" fontWeight="700" fill={s.highlight ? COLOR : "var(--text-muted)"}>Step {s.step}</text>
        <text x="100" y={54 + i * 28} fontSize="11" fill="var(--text)">{s.label}</text>
      </g>
    ))}
    <text x="24" y="152" fontSize="10" fill="var(--text-muted)">Source: RBI Master Direction on Credit Card and Debit Card - Issuance and Conduct (updated 2023)</text>
  </svg>
);

const SvgTokenisation = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="How RBI card tokenisation works and what it means for credit card holders" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 3: Card Tokenisation (What Actually Changed)</text>
    <rect x="24" y="44" width="200" height="110" rx="8" fill="var(--border)" opacity="0.25" />
    <text x="124" y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Before Tokenisation</text>
    <text x="124" y="92" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Merchant stores your</text>
    <text x="124" y="108" textAnchor="middle" fontSize="10" fill="var(--text-muted)">actual 16-digit card number</text>
    <text x="124" y="124" textAnchor="middle" fontSize="10" fill="#ef4444">Risk: data breach = card fraud</text>
    <polygon points="234,99 254,90 254,108" fill={COLOR} opacity="0.6" />
    <rect x="264" y="44" width="200" height="110" rx="8" fill={COLOR} opacity="0.22" />
    <text x="364" y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>After Tokenisation</text>
    <text x="364" y="92" textAnchor="middle" fontSize="10" fill="var(--text)">Merchant stores a token</text>
    <text x="364" y="108" textAnchor="middle" fontSize="10" fill="var(--text)">(random string, useless alone)</text>
    <text x="364" y="124" textAnchor="middle" fontSize="10" fill="#22c55e">Breach at merchant: no card details stolen</text>
    <rect x="504" y="44" width="200" height="110" rx="8" fill="var(--border)" opacity="0.2" />
    <text x="604" y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">For You</text>
    <text x="604" y="90" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Add card to app once</text>
    <text x="604" y="106" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Token saved, not card number</text>
    <text x="604" y="122" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Re-enter card when token</text>
    <text x="604" y="138" textAnchor="middle" fontSize="10" fill="var(--text-muted)">expires or card is replaced</text>
  </svg>
);

const SvgEmiAprTrap = () => (
  <svg viewBox="0 0 720 202" role="img" aria-label="No cost EMI true interest rate revealed through processing fee RBI disclosure rules" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">EMI conversion: disclose principal, interest and upfront discount</text>
    <text x="24" y="50" fontSize="12" fill="var(--text-muted)">Example: &#8377;60,000 laptop on "0% EMI" for 12 months</text>
    <rect x="24" y="62" width="320" height="100" rx="6" fill="var(--border)" opacity="0.2" />
    <text x="184" y="84" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">What the ad says</text>
    <text x="184" y="104" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">&#8377;5,000/month x 12</text>
    <text x="184" y="122" textAnchor="middle" fontSize="11" fill="var(--text-muted)">0% interest, "no cost"</text>
    <text x="184" y="140" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Total paid: &#8377;60,000</text>
    <rect x="376" y="62" width="320" height="100" rx="6" fill={COLOR} opacity="0.07" />
    <text x="536" y="84" textAnchor="middle" fontSize="11" fontWeight="600" fill={COLOR}>What RBI now requires disclosed</text>
    <text x="536" y="104" textAnchor="middle" fontSize="11" fill="var(--text)">Processing fee: &#8377;1,800 (charged upfront)</text>
    <text x="536" y="122" textAnchor="middle" fontSize="11" fill="var(--text)">Check principal, interest, upfront discount</text>
    <text x="536" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>and statement entries before converting</text>
    <text x="24" y="178" fontSize="9" fill="var(--text-muted)">RBI requires transparent EMI conversion and bars disguising an interest-bearing EMI as no-cost; it does not set a universal checkout APR rule.</text>
  </svg>
);

const SvgMDRUpi = () => (
  <svg viewBox="0 0 720 176" role="img" aria-label="Rewards depend on current payment product terms" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rewards depend on payment-product terms</text>
    <rect x="24" y="42" width="310" height="96" rx="6" fill="var(--border)" opacity="0.25" />
    <text x="179" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">UPI</text>
    <text x="179" y="85" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Provider terms vary</text>
    <text x="179" y="103" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Check eligible transaction types</text>
    <text x="179" y="122" textAnchor="middle" fontSize="11" fill="#ef4444">Rewards are not guaranteed</text>
    <rect x="382" y="42" width="310" height="96" rx="6" fill={COLOR} opacity="0.07" />
    <text x="537" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Credit Card</text>
    <text x="537" y="85" textAnchor="middle" fontSize="11" fill="var(--text)">Issuer terms vary by card</text>
    <text x="537" y="103" textAnchor="middle" fontSize="11" fill="var(--text)">Check exclusions and caps</text>
    <text x="537" y="122" textAnchor="middle" fontSize="11" fill="#22c55e">Verify before spending</text>
    <text x="24" y="152" fontSize="9" fill="var(--text-muted)">Do not infer reward eligibility from payment method alone; check current provider terms.</text>
  </svg>
);

const SvgGrievanceEscalation = () => (
  <svg viewBox="0 0 720 282" role="img" aria-label="RBI credit card grievance redressal escalation path from bank to ombudsman" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Complaint escalation: issuer first, RBI CMS when eligible</text>
    {[
      { step: "Step 1", label: "Lodge complaint with bank's credit card grievance team", days: "Day 1-15" },
      { step: "Step 2", label: "If unresolved, escalate to bank's Nodal Officer", days: "Day 15-30" },
      { step: "Step 3", label: "File with RBI Banking Ombudsman (cms.rbi.org.in)", days: "After 30 days" },
      { step: "Step 4", label: "RBI Integrated Ombudsman Scheme (if eligible)", days: "Check scheme" },
    ].map((s, i) => (
      <g key={i}>
        <rect x="24" y={40 + i * 34} width="672" height="26" rx="5" fill={COLOR} opacity={0.04 + i * 0.04} />
        <text x="38" y={58 + i * 34} fontSize="11" fontWeight="700" fill={COLOR}>{s.step}</text>
        <text x="110" y={58 + i * 34} fontSize="11" fill="var(--text)">{s.label}</text>
        <text x="670" y={58 + i * 34} textAnchor="end" fontSize="10" fill="var(--text-muted)">{s.days}</text>
      </g>
    ))}
        <text x="24" y="182" fontSize="9" fill="var(--text-muted)">RBI CMS may be available after rejection, an unsatisfactory response, or no response within 30 days, subject to eligibility.</text>
  </svg>
);

const SvgActivationRule = () => (
  <svg viewBox="0 0 720 156" role="img" aria-label="RBI consent process for credit cards that remain unactivated" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="140" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Unactivated cards: issuer must follow RBI consent process</text>
    <rect x="24" y="44" width="320" height="76" rx="6" fill="var(--raise)" opacity="0.07" />
    <text x="184" y="67" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ef4444">If card remains inactive</text>
    <text x="184" y="87" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Issuer seeks activation consent</text>
    <text x="184" y="105" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Within the period set by RBI</text>
    <rect x="376" y="44" width="320" height="76" rx="6" fill="#22c55e" opacity="0.07" />
    <text x="536" y="67" textAnchor="middle" fontSize="11" fontWeight="600" fill="#22c55e">If consent is not received</text>
    <text x="536" y="87" textAnchor="middle" fontSize="10" fill="var(--text)">Issuer closes card per the Direction</text>
    <text x="536" y="105" textAnchor="middle" fontSize="10" fill="var(--text)">Check account and fee terms</text>
    <text x="24" y="132" fontSize="9" fill="var(--text-muted)">Check RBI's current Direction and your issuer's activation notice for the exact process.</text>
  </svg>
);

export default function BlogRbiLatestGuidelinesCreditCards() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the RBI rule on credit card closure?",
        acceptedAnswer: { "@type": "Answer", text: "RBI's Master Direction requires the issuer to close the card within seven working days after receiving the request once dues are cleared. It provides for a penalty of ₹500 per calendar day of delay, subject to the conditions in the Direction. Keep the request reference and first raise any delay with the issuer; the RBI Ombudsman is available where the complaint meets the scheme's eligibility requirements." }
      },
      {
        "@type": "Question",
        name: "How is the interest-free period on a credit card determined?",
        acceptedAnswer: { "@type": "Answer", text: "RBI defines the interest-free credit period as the period from the transaction date to the payment due date, subject to paying the entire outstanding by that due date. The length therefore depends on the transaction and billing cycle; the Master Direction does not prescribe a universal minimum number of days from statement date to due date. Check your statement and issuer terms. If an earlier balance remains unpaid, the interest-free period may be suspended." }
      },
      {
        "@type": "Question",
        name: "What is card tokenisation and does it affect how I use my card?",
        acceptedAnswer: { "@type": "Answer", text: "Tokenisation replaces card details with a token for supported card-on-file transactions. The token is used instead of exposing the card number to the merchant, subject to the tokenisation system's controls. You may need to update or re-tokenise a card when it is replaced or expires. Check with the merchant or issuer if a saved card stops working." }
      },
      {
        "@type": "Question",
        name: "What must a card issuer disclose for an EMI conversion?",
        acceptedAnswer: { "@type": "Answer", text: "RBI requires card issuers to clearly show the principal, interest and any upfront discount provided by the merchant or issuer before converting a card transaction to EMI, and to show these separately in the card statement. Interest-bearing EMI must not be disguised as zero-interest or no-cost EMI. Check the complete offer, fees and issuer terms before accepting; do not assume a single effective APR disclosure format applies to every merchant offer." }
      },
      {
        "@type": "Question",
        name: "How do I file a complaint with the RBI Banking Ombudsman about a credit card issue?",
        acceptedAnswer: { "@type": "Answer", text: "Go to cms.rbi.org.in and file a complaint online. You must have first registered a complaint with the bank and either received a rejection or waited 30 days without resolution. The Ombudsman scheme is free to use and covers complaints about wrongful charges, delayed closures, unauthorised transactions, and most credit card disputes. Decisions are binding on the bank." }
      },
      {
        "@type": "Question",
        name: "Why do credit cards offer rewards but UPI does not?",
        acceptedAnswer: { "@type": "Answer", text: "Card and UPI reward policies are set by issuers and payment providers and can vary by product, transaction and current terms. Merchant charges and interchange economics are one factor in payment pricing, but they do not by themselves determine whether a provider offers rewards. Check the applicable product terms rather than assuming all UPI transactions earn no rewards or all card transactions do." }
      },
      {
        "@type": "Question",
        name: "Can a bank charge me an annual fee if I never activated a card they sent me?",
        acceptedAnswer: { "@type": "Answer", text: "RBI sets a consent and closure process for cards that remain unactivated, but the fee outcome depends on the issuer's terms and the account facts. Check the activation notice, fee schedule and RBI Master Direction. If you believe a fee was wrongly charged, first ask the issuer for the basis and raise a complaint through its grievance process." }
      },
      {
        "@type": "Question",
        name: "What should I do if a bank refuses to close my credit card?",
        acceptedAnswer: { "@type": "Answer", text: "First, send a written closure request via registered email to the bank's credit card grievance email ID and retain the acknowledgement. If the bank does not act within 7 working days, escalate to the bank's Nodal Officer. If still unresolved after 30 days, file a complaint at cms.rbi.org.in. Include your written request, the bank's response (or lack of one), and the dates. The Ombudsman takes these cases seriously and banks face consequences for non-compliance." }
      },
      {
        "@type": "Question",
        name: "Are these RBI guidelines different for RuPay vs Visa vs Mastercard credit cards?",
        acceptedAnswer: { "@type": "Answer", text: "The RBI guidelines on interest-free periods, closure timelines, auto-activation, and grievance redressal apply to all credit cards issued in India regardless of network. Whether your card is RuPay, Visa, or Mastercard, the issuing bank (which is always a RBI-regulated entity) must comply. Network-specific rules like MDR structures may differ, but consumer protection rules are uniform." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RBI Credit Card Guidelines: Key Rights and What to Check",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "RBI Latest Guidelines Credit Cards", item: "https://assurefintech.com/blog/rbi-latest-guidelines-credit-cards" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1C0404, #460C0C, #1C0404)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #dc262622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Regulation
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            RBI Credit Card Guidelines: Key Rights and What to Check
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            Seven regulations that give Indian credit card holders concrete rights. Most people do not know these exist, which is exactly why banks sometimes ignore them.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 11 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / RBI Credit Card Guidelines
      </nav>
<div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 11 min read
      </div>

      <SvgRegulatoryTimeline />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why These Rules Matter Now</h2>
        <p>RBI's credit card regulations have accumulated significantly since 2021, but consumer awareness of these rights remains low. Banks operate within these rules when customers push back. When customers do not push back, the rules often exist only on paper.</p>
        <p>This piece covers seven specific regulations that affect your money, your rights on closure and disputes, and how banks must now disclose costs they previously buried. Every rule here is enforceable. Knowing them changes what you can demand.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Interest-free period: understand your statement and due date</h2>
        <SvgInterestFreePeriod />
        <p>RBI defines the interest-free credit period as the time from a transaction to its payment due date, provided the cardholder pays the entire outstanding by that due date. The length of the period can vary with the transaction date and billing cycle. The current Master Direction does not establish a universal 14- or 15-day minimum between statement generation and the due date.</p>
        <p>Check the due date printed on your statement and the issuer's terms. If you carry an unpaid balance, the interest-free period may be suspended. Our <Link href="/learn/loans" style={{ color: COLOR }}>loan and credit explainer</Link> has more on how billing cycles work.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 2: Card Closure Within 7 Working Days</h2>
        <SvgCardClosureRule />
        <p>This is one of the most practically useful rules and one of the most frequently violated by banks. RBI's updated guidelines state that once a cardholder requests closure, the bank must process it within 7 working days, provided all outstanding dues are cleared. The request can be made through the app, by phone, or in writing.</p>
        <p>Banks routinely try to delay by making retention offers, asking you to "think about it," or routing you through multiple departments. You do not need to engage with any of this. A firm written request via email (so you have a timestamp) starts the 7-day clock. Also see our script for <Link href="/blog/get-annual-fee-waived-scripts" style={{ color: COLOR }}>getting annual fees waived or cards closed</Link> without the runaround.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 3: Card-on-File Tokenisation</h2>
        <SvgTokenisation />
        <p>RBI's card-on-file tokenisation framework restricts storage of actual card-on-file credentials by merchants and payment aggregators, with defined arrangements for token creation and use. A token is used in place of card details in supported transactions; do not assume every merchant, recurring payment or transaction follows an identical flow.</p>
        <p>If a saved card stops working after expiry or replacement, check with the issuer or merchant whether the card needs to be updated or tokenised again. Tokenisation reduces exposure of card credentials in supported flows but is not a guarantee against every type of payment fraud.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How reward eligibility depends on payment terms</h2>
        <SvgMDRUpi />
        <p>Payment-method economics can influence product pricing, but they do not establish a universal rewards rule. Reward eligibility depends on the issuer or provider, account type, transaction category, exclusions, caps and current program terms.</p>
        <p>Before choosing a payment method for rewards, check the current terms for that specific transaction. A payment may earn no reward, a reduced reward or a different benefit depending on the program. See our <Link href="/blog/future-credit-card-rewards-india" style={{ color: COLOR }}>future of rewards piece</Link> for broader context.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 5: No Auto-Activation of Credit Cards</h2>
        <SvgActivationRule />
        <p>RBI restricts unsolicited card issuance and upgrades. For an issued card that remains unactivated, the Master Direction sets out a process for obtaining the cardholder's consent and closing the account if consent is not received within the prescribed period.</p>
        <p>Do not assume delivery alone activates a card or starts an annual fee. Check the activation notice, applicable fee terms and the <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>RBI Master Direction</a>. Read our piece on <Link href="/blog/minimum-transaction-traps" style={{ color: COLOR }}>minimum spend traps</Link> for related new-card checks.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 6: Transparent cost disclosure for EMI conversion</h2>
        <SvgEmiAprTrap />
        <p>“No-cost EMI” offers can still involve an upfront fee, a merchant discount, or other conditions, so compare the total payable with the cash price. RBI requires card issuers to clearly disclose the principal, interest and upfront discount before converting a card transaction to EMI, and to show these separately on the card statement. An EMI with an interest component must not be disguised as zero-interest or no-cost EMI.</p>
        <p>The RBI direction does not state the blanket checkout effective-APR requirement described in older versions of this guide. Review the issuer's conversion terms and the merchant's offer before accepting; ask for a written breakdown if the total cost is unclear.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 7: Grievance Redressal and the Ombudsman Path</h2>
        <SvgGrievanceEscalation />
        <p>First use the issuer's grievance channels and keep the complaint reference. Under the RBI Integrated Ombudsman Scheme, you may be eligible to file through the Complaint Management System if the regulated entity rejects the complaint, gives an unsatisfactory reply, or does not respond within 30 days.</p>
        <p>Check the scheme's current eligibility, exclusions and process at <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>RBI's Complaint Management System</a>. The Ombudsman route is not an automatic appeal for every dispute.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Your Action List</h2>
        <p>Three practical checks: read your statement's due date and the issuer's interest-free-period terms; if you want to close a card, keep a dated record of your request and follow up if it is not closed within the applicable RBI timeline; and before accepting an EMI conversion, check the principal, interest, upfront discount, fees and total amount payable.</p>
        <p>These are not aggressive actions. They are the minimum you are entitled to as a regulated credit card holder in India. Banks comply more consistently with customers who know the rules.</p>
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
        <Link href="/blog/minimum-transaction-traps" style={{ color: COLOR }}>Minimum transaction traps banks use on new cards</Link> ·{" "}
        <Link href="/blog/get-annual-fee-waived-scripts" style={{ color: COLOR }}>Scripts to get annual fees waived or cards closed</Link> ·{" "}
        <Link href="/learn/loans" style={{ color: COLOR }}>Credit and loan fundamentals</Link> ·{" "}
        <Link href="/blog/future-credit-card-rewards-india" style={{ color: COLOR }}>Future of credit card rewards in India</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Reviewed against RBI's Master Direction on Credit Card and Debit Card Issuance and Conduct (updated March 7, 2024) on September 26, 2026. Check RBI's current text and your issuer's terms before relying on a rule. This content is informational and is not legal or financial advice.
      </footer>
    </main>
    </>
  );
}
