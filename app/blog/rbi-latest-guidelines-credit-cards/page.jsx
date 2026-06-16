import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "RBI Credit Card Guidelines 2026: What Changed and What It Means for You",
  description: "RBI Credit Card Guidelines 2026: What Changed and What It Means for You",
  alternates: { canonical: "/blog/rbi-latest-guidelines-credit-cards" },
  openGraph: {
    title: "RBI Credit Card Guidelines 2026: What Changed and What It Means for You",
    description: "RBI Credit Card Guidelines 2026: What Changed and What It Means for You",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/rbi-latest-guidelines-credit-cards
// Template: regulatory update / consumer rights
// Color: #dc2626 | Updated: June 4, 2026

const COLOR = "#dc2626";
const UPDATED = "June 4, 2026";

const SvgRegulatoryTimeline = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Timeline of major RBI credit card regulatory changes 2021 to 2026" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">RBI Credit Card Regulations: Key Milestones</text>
    <line x1="40" y1="60" x2="680" y2="60" stroke="var(--border)" strokeWidth="2" />
    {[
      { x: 60, year: "2021", label: "Tokenisation\nmandated" },
      { x: 180, year: "2022", label: "Card-not-present\nauth rules" },
      { x: 310, year: "2023", label: "Closure within\n7 working days" },
      { x: 450, year: "2024", label: "No-cost EMI\nAPR disclosure" },
      { x: 600, year: "2026", label: "Interest-free\nperiod minimum" },
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
  <svg viewBox="0 0 720 170" role="img" aria-label="RBI mandated minimum 14 day interest free period from credit card statement date" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="170" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 1: Minimum 14-Day Interest-Free Period</text>
    <rect x="24" y="42" width="120" height="100" rx="6" fill="var(--border)" opacity="0.3" />
    <text x="84" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">Statement</text>
    <text x="84" y="94" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Date</text>
    <rect x="174" y="42" width="200" height="100" rx="6" fill={COLOR} opacity="0.08" />
    <text x="274" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>14 days minimum</text>
    <text x="274" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">RBI mandated interest-free</text>
    <text x="274" y="112" textAnchor="middle" fontSize="10" fill="var(--text-muted)">window from statement date</text>
    <rect x="402" y="42" width="294" height="100" rx="6" fill="var(--border)" opacity="0.2" />
    <text x="549" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">Due date (varies by bank)</text>
    <text x="549" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Banks may offer more than 14 days</text>
    <text x="549" y="112" textAnchor="middle" fontSize="10" fill="var(--text-muted)">but cannot offer less per RBI rules</text>
    <text x="24" y="158" fontSize="10" fill="var(--text-muted)">Previously: banks could set 10-day due dates. Now: minimum 14-day window from statement is mandatory.</text>
  </svg>
);

const SvgCardClosureRule = () => (
  <svg viewBox="0 0 720 160" role="img" aria-label="RBI one click card closure rule requiring banks to close cards within 7 working days" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 2: Card Closure Within 7 Working Days</text>
    {[
      { step: "1", label: "You request closure (app, phone, or branch)", highlight: false },
      { step: "2", label: "Bank must process within 7 working days", highlight: true },
      { step: "3", label: "Outstanding dues: you pay before or at closure", highlight: false },
      { step: "4", label: "Bank cannot delay citing retention offers", highlight: true },
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
    <rect width="720" height="180" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 3: Card Tokenisation (What Actually Changed)</text>
    <rect x="24" y="44" width="200" height="110" rx="8" fill="var(--border)" opacity="0.25" />
    <text x="124" y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Before Tokenisation</text>
    <text x="124" y="92" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Merchant stores your</text>
    <text x="124" y="108" textAnchor="middle" fontSize="10" fill="var(--text-muted)">actual 16-digit card number</text>
    <text x="124" y="124" textAnchor="middle" fontSize="10" fill="#ef4444">Risk: data breach = card fraud</text>
    <polygon points="234,99 254,90 254,108" fill={COLOR} opacity="0.6" />
    <rect x="264" y="44" width="200" height="110" rx="8" fill={COLOR} opacity="0.08" />
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
  <svg viewBox="0 0 720 190" role="img" aria-label="No cost EMI true interest rate revealed through processing fee RBI disclosure rules" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 6: No-Cost EMI Effective APR Disclosure</text>
    <text x="24" y="50" fontSize="12" fill="var(--text-muted)">Example: &#8377;60,000 laptop on "0% EMI" for 12 months</text>
    <rect x="24" y="62" width="320" height="100" rx="6" fill="var(--border)" opacity="0.2" />
    <text x="184" y="84" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">What the ad says</text>
    <text x="184" y="104" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">&#8377;5,000/month x 12</text>
    <text x="184" y="122" textAnchor="middle" fontSize="11" fill="var(--text-muted)">0% interest, "no cost"</text>
    <text x="184" y="140" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Total paid: &#8377;60,000</text>
    <rect x="376" y="62" width="320" height="100" rx="6" fill={COLOR} opacity="0.07" />
    <text x="536" y="84" textAnchor="middle" fontSize="11" fontWeight="600" fill={COLOR}>What RBI now requires disclosed</text>
    <text x="536" y="104" textAnchor="middle" fontSize="11" fill="var(--text)">Processing fee: &#8377;1,800 (charged upfront)</text>
    <text x="536" y="122" textAnchor="middle" fontSize="11" fill="var(--text)">Effective APR: ~6.8%</text>
    <text x="536" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>This must now be shown before you confirm</text>
    <text x="24" y="178" fontSize="10" fill="var(--text-muted)">Banks must display effective APR (not just 0%) on all no-cost EMI offers per RBI's updated merchant EMI guidelines.</text>
  </svg>
);

const SvgMDRUpi = () => (
  <svg viewBox="0 0 720 160" role="img" aria-label="Why UPI has no rewards but credit cards do - MDR cap impact on reward economics" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 4: MDR Cap and Why Credit Card Rewards Exist</text>
    <rect x="24" y="42" width="310" height="96" rx="6" fill="var(--border)" opacity="0.25" />
    <text x="179" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">UPI</text>
    <text x="179" y="85" textAnchor="middle" fontSize="11" fill="var(--text-muted)">MDR = 0% (RBI mandated)</text>
    <text x="179" y="103" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Banks earn nothing per transaction</text>
    <text x="179" y="122" textAnchor="middle" fontSize="11" fill="#ef4444">No budget for rewards</text>
    <rect x="382" y="42" width="310" height="96" rx="6" fill={COLOR} opacity="0.07" />
    <text x="537" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Credit Card</text>
    <text x="537" y="85" textAnchor="middle" fontSize="11" fill="var(--text)">MDR: 1-2% (merchant pays)</text>
    <text x="537" y="103" textAnchor="middle" fontSize="11" fill="var(--text)">Bank earns interchange per swipe</text>
    <text x="537" y="122" textAnchor="middle" fontSize="11" fill="#22c55e">Funds reward programs</text>
    <text x="24" y="152" fontSize="10" fill="var(--text-muted)">This structural difference is why credit card rewards exist and UPI cashback does not. RuPay credit on UPI may change this.</text>
  </svg>
);

const SvgGrievanceEscalation = () => (
  <svg viewBox="0 0 720 190" role="img" aria-label="RBI credit card grievance redressal escalation path from bank to ombudsman" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 7: Grievance Escalation Path (Know This)</text>
    {[
      { step: "Step 1", label: "Lodge complaint with bank's credit card grievance team", days: "Day 1-15" },
      { step: "Step 2", label: "If unresolved, escalate to bank's Nodal Officer", days: "Day 15-30" },
      { step: "Step 3", label: "File with RBI Banking Ombudsman (cms.rbi.org.in)", days: "After 30 days" },
      { step: "Step 4", label: "RBI Ombudsman: binding resolution, no fee to file", days: "30-60 days" },
    ].map((s, i) => (
      <g key={i}>
        <rect x="24" y={40 + i * 34} width="672" height="26" rx="5" fill={COLOR} opacity={0.04 + i * 0.04} />
        <text x="38" y={58 + i * 34} fontSize="11" fontWeight="700" fill={COLOR}>{s.step}</text>
        <text x="110" y={58 + i * 34} fontSize="11" fill="var(--text)">{s.label}</text>
        <text x="670" y={58 + i * 34} textAnchor="end" fontSize="10" fill="var(--text-muted)">{s.days}</text>
      </g>
    ))}
    <text x="24" y="182" fontSize="10" fill="var(--text-muted)">Key: bank must respond within 30 days per RBI mandate. After 30 days of no resolution, Ombudsman jurisdiction triggers automatically.</text>
  </svg>
);

const SvgActivationRule = () => (
  <svg viewBox="0 0 720 140" role="img" aria-label="RBI rule that credit cards cannot be auto-activated and must require customer action" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="140" fill="var(--raise)" rx="10" />
    <text x="24" y="28" fontSize="13" fontWeight="700" fill="var(--text)">Rule 5: No Auto-Activation of Credit Cards</text>
    <rect x="24" y="44" width="320" height="76" rx="6" fill="var(--raise)" opacity="0.07" />
    <text x="184" y="67" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ef4444">Old Practice (Pre-RBI Circular)</text>
    <text x="184" y="87" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Card delivered, auto-activated</text>
    <text x="184" y="105" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Annual fee charged on arrival date</text>
    <rect x="376" y="44" width="320" height="76" rx="6" fill="#22c55e" opacity="0.07" />
    <text x="536" y="67" textAnchor="middle" fontSize="11" fontWeight="600" fill="#22c55e">Current Requirement (RBI Mandated)</text>
    <text x="536" y="87" textAnchor="middle" fontSize="10" fill="var(--text)">Card dormant until you explicitly activate</text>
    <text x="536" y="105" textAnchor="middle" fontSize="10" fill="var(--text)">Annual fee clock starts at activation, not delivery</text>
    <text x="24" y="132" fontSize="10" fill="var(--text-muted)">Practical use: if you applied for a card you no longer want, it can be closed before activation with no fee impact.</text>
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
        acceptedAnswer: { "@type": "Answer", text: "Per RBI's Master Direction on Credit Card and Debit Card Issuance and Conduct, banks must close a credit card within 7 working days of receiving a closure request, provided all outstanding dues are cleared. Banks cannot delay closure to make retention offers or wait for a convenient time. If a bank delays beyond 7 working days without a valid reason, you can escalate to the RBI Banking Ombudsman." }
      },
      {
        "@type": "Question",
        name: "What does RBI's 14-day interest-free period rule mean for me?",
        acceptedAnswer: { "@type": "Answer", text: "From your credit card statement date, you must have at least 14 days to pay before interest is charged. Previously some banks set 10-day due dates, giving very little time between statement generation and the due date. Now the minimum is 14 calendar days from statement date. Most banks offer 18 to 25 days, but none can offer fewer than 14. Check your statement date and due date to confirm your bank is complying." }
      },
      {
        "@type": "Question",
        name: "What is card tokenisation and does it affect how I use my card?",
        acceptedAnswer: { "@type": "Answer", text: "Tokenisation replaces your actual 16-digit card number with a random token stored by merchants and apps. When you pay at an online merchant, they use the token, not your real card number. This means a data breach at a merchant exposes the token (useless without the issuing bank's key) rather than your actual card details. For you, the change is mostly invisible: you add your card to an app once, and the token is stored. You may need to re-add the card when it expires or is replaced." }
      },
      {
        "@type": "Question",
        name: "What is the true cost of no-cost EMI on a credit card and what does RBI require banks to disclose?",
        acceptedAnswer: { "@type": "Answer", text: "No-cost EMI typically involves a processing fee charged upfront by the bank or merchant, which effectively creates an interest cost. For example, a ₹1,800 processing fee on a ₹60,000 purchase over 12 months represents approximately 6.8% effective APR, not 0%. RBI now requires banks to disclose the effective APR on all EMI conversions before the customer confirms, so you can see the real cost rather than just the no interest headline." }
      },
      {
        "@type": "Question",
        name: "How do I file a complaint with the RBI Banking Ombudsman about a credit card issue?",
        acceptedAnswer: { "@type": "Answer", text: "Go to cms.rbi.org.in and file a complaint online. You must have first registered a complaint with the bank and either received a rejection or waited 30 days without resolution. The Ombudsman scheme is free to use and covers complaints about wrongful charges, delayed closures, unauthorised transactions, and most credit card disputes. Decisions are binding on the bank." }
      },
      {
        "@type": "Question",
        name: "Why do credit cards offer rewards but UPI does not?",
        acceptedAnswer: { "@type": "Answer", text: "Credit card transactions carry a Merchant Discount Rate (MDR) of approximately 1-2%, paid by merchants to the card network and issuing bank. Part of this interchange funds reward programs. UPI's MDR was set to 0% by RBI in 2020 to encourage digital payment adoption. Without MDR income, banks cannot fund cashback or reward programs on UPI transactions. This is why UPI has no rewards and credit card rewards persist despite UPI's dominance in transaction volume." }
      },
      {
        "@type": "Question",
        name: "Can a bank charge me an annual fee if I never activated a card they sent me?",
        acceptedAnswer: { "@type": "Answer", text: "No. Per RBI's updated guidelines, credit cards cannot be auto-activated and annual fee billing cannot begin until the customer actively activates the card. If a card was delivered and never activated, you can request closure without any fee liability. If a bank charged you a fee on an unactivated card, that is a violation of RBI guidelines and grounds for a complaint." }
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
    headline: "RBI Credit Card Guidelines 2026: What Changed and What It Means for You",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
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
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / RBI Credit Card Guidelines 2026
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · REGULATION</div>

      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 14px" }}>
        RBI Credit Card Guidelines 2026: What Changed and What It Means for You
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 16px" }}>
        Seven regulations that give Indian credit card holders concrete rights. Most people do not know these exist, which is exactly why banks sometimes ignore them.
      </p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 11 min read
      </div>

      <SvgRegulatoryTimeline />

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why These Rules Matter Now</h2>
        <p>RBI's credit card regulations have accumulated significantly since 2021, but consumer awareness of these rights remains low. Banks operate within these rules when customers push back. When customers do not push back, the rules often exist only on paper.</p>
        <p>This piece covers seven specific regulations that affect your money, your rights on closure and disputes, and how banks must now disclose costs they previously buried. Every rule here is enforceable. Knowing them changes what you can demand.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 1: Minimum 14-Day Interest-Free Period</h2>
        <SvgInterestFreePeriod />
        <p>RBI's Master Direction on Credit Card Issuance requires that cardholders receive a minimum 14-day interest-free window from their statement date to the payment due date. Before this rule was enforced clearly, some banks set due dates as close as 10 days after statement generation, particularly for mid-cycle statements. A 10-day window in a busy month is easy to miss.</p>
        <p>In practice, most banks now offer 18 to 25 days. But if you receive a statement with a due date of 12 or 13 days out, that is a violation. Contact the bank's credit card team and cite the RBI Master Direction. Our <Link href="/learn/loans" style={{ color: COLOR }}>loan and credit explainer</Link> has more on how billing cycles work.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 2: Card Closure Within 7 Working Days</h2>
        <SvgCardClosureRule />
        <p>This is one of the most practically useful rules and one of the most frequently violated by banks. RBI's updated guidelines state that once a cardholder requests closure, the bank must process it within 7 working days, provided all outstanding dues are cleared. The request can be made through the app, by phone, or in writing.</p>
        <p>Banks routinely try to delay by making retention offers, asking you to "think about it," or routing you through multiple departments. You do not need to engage with any of this. A firm written request via email (so you have a timestamp) starts the 7-day clock. Also see our script for <Link href="/blog/get-annual-fee-waived-scripts" style={{ color: COLOR }}>getting annual fees waived or cards closed</Link> without the runaround.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 3: Card-on-File Tokenisation</h2>
        <SvgTokenisation />
        <p>From October 2022, RBI mandated that merchants and payment aggregators cannot store actual card numbers. All saved card credentials must be replaced by tokens issued by the card network (Visa, Mastercard, or RuPay) or the issuing bank. This mandate covers all domestic card-on-file scenarios, from Swiggy to Amazon to your electricity bill auto-debit.</p>
        <p>The consumer impact is largely invisible and positive. If Swiggy's database is breached, the attacker gets a token that is cryptographically tied to that merchant and useless anywhere else. The practical annoyance is that changing your card (due to expiry or replacement) now requires re-adding it to each merchant app, since the token generated for the old card does not carry over.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 4: Why UPI Has No Rewards and Cards Do</h2>
        <SvgMDRUpi />
        <p>RBI's decision to set UPI's Merchant Discount Rate at zero has a direct consequence for credit card users: it is the structural reason credit card rewards exist. When you pay via credit card, the merchant pays roughly 1 to 2% as MDR. This interchange revenue flows to the issuing bank, part of which funds cashback and reward points. No MDR means no reward budget.</p>
        <p>This is not academic. If you are wondering why your credit card gives 2% back and your UPI app gives nothing, this is the answer. It also explains why banks have been cutting reward rates as more spend migrates to UPI: fewer card swipes means less interchange income means less money to fund rewards. The UPI-reward economics question becomes more complex if RuPay credit cards on UPI gain traction, which we cover in our <Link href="/blog/future-credit-card-rewards-india" style={{ color: COLOR }}>future of rewards piece</Link>.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 5: No Auto-Activation of Credit Cards</h2>
        <SvgActivationRule />
        <p>Before RBI tightened this rule, it was common for banks to auto-activate cards on delivery and immediately charge the annual fee. Cardholders who applied in a moment of enthusiasm and then changed their mind had to close a card they had never used while fighting for a fee refund. The updated guidelines prohibit this.</p>
        <p>If a card arrives at your home unactivated, the annual fee clock does not start. You can let it sit, decide you do not want it, and request closure without ever owing a fee. Read our piece on <Link href="/blog/minimum-transaction-traps" style={{ color: COLOR }}>minimum spend traps</Link> for related tactics banks use on new card onboarding.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 6: Effective APR Disclosure on No-Cost EMI</h2>
        <SvgEmiAprTrap />
        <p>The "no-cost EMI" product has been one of the most misleading constructs in Indian consumer lending. The cost was real but hidden: a processing fee charged by the bank or merchant creates an effective interest rate that can run from 5% to 14% APR.</p>
        <p>RBI's updated EMI conversion guidelines require banks to disclose the effective APR to customers before they confirm an EMI conversion, either at the point of purchase or when converting an outstanding balance. If you see a no-cost EMI offer and the effective APR is not disclosed at the checkout or confirmation screen, that is non-compliant. You now have a right to know the actual cost before you say yes.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Rule 7: Grievance Redressal and the Ombudsman Path</h2>
        <SvgGrievanceEscalation />
        <p>RBI mandates that banks must resolve credit card complaints within 30 days. This seems generous, but few credit card disputes actually get resolved in 30 days through standard customer service channels. The important lever is the RBI Banking Ombudsman, which most consumers have not used but should know about.</p>
        <p>After 30 days of no resolution, or after a formal rejection of your complaint by the bank, you can file at cms.rbi.org.in. The process is free. Cases are investigated and the Ombudsman's decision is binding on the bank. Knowing this escalation path and mentioning it to a bank's grievance team often accelerates resolution on its own.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Your Action List</h2>
        <p>Three things worth doing this week based on these rules. First: check your statement date and due date and confirm you have at least 14 days between them. If not, contact your bank. Second: if you have a card you have been meaning to close, send a written email request today and note the date. If it is not closed in 7 working days, escalate in writing to the Nodal Officer. Third: review any recent "no-cost EMI" you have taken and check whether the effective APR was disclosed.</p>
        <p>These are not aggressive actions. They are the minimum you are entitled to as a regulated credit card holder in India. Banks comply more consistently with customers who know the rules.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
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
        This article is based on RBI's Master Direction on Credit Card and Debit Card Issuance and Conduct and associated circulars current as of June 2026. Regulatory guidelines are subject to revision. Verify the current position of any rule at rbi.org.in before taking action. Assure Fintech is not a legal or financial advisory firm. This content is for informational purposes only. Last verified June 4, 2026.
      </footer>
    </main>
  );
}
