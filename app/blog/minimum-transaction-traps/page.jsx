import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Read This Before You Swipe: The Minimum Transaction Traps Eating Your Rewards",
  description: "Read This Before You Swipe: The Minimum Transaction Traps Eating Your Rewards",
  alternates: { canonical: "/blog/minimum-transaction-traps" },
  openGraph: {
    title: "Read This Before You Swipe: The Minimum Transaction Traps Eating Your Rewards",
    description: "Read This Before You Swipe: The Minimum Transaction Traps Eating Your Rewards",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/minimum-transaction-traps
// Template: warning-article
// Color: #dc2626 | Updated: June 4, 2026

const COLOR = "#dc2626";
const UPDATED = "June 4, 2026";

const SvgCashAdvanceCost = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Cash advance cost breakdown: ₹10,000 for 30 days totals ₹768 in fees" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="14" fontWeight="700" fill="var(--text)">Cash Advance ₹10,000 — 30-Day Total Cost Breakdown</text>
    <rect x="36" y="56" width="160" height="36" rx="4" fill="#dc2626" opacity="0.15" />
    <text x="116" y="79" textAnchor="middle" fontSize="13" fontWeight="600" fill="#dc2626">Processing Fee</text>
    <rect x="216" y="56" width="160" height="36" rx="4" fill="#dc2626" opacity="0.28" />
    <text x="296" y="79" textAnchor="middle" fontSize="13" fontWeight="600" fill="#dc2626">Interest (30 days)</text>
    <rect x="396" y="56" width="160" height="36" rx="4" fill="#dc2626" opacity="0.45" />
    <text x="476" y="79" textAnchor="middle" fontSize="13" fontWeight="600" fill="#dc2626">GST on interest</text>
    <rect x="576" y="56" width="108" height="36" rx="4" fill="#dc2626" />
    <text x="630" y="79" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">Total</text>
    <text x="116" y="120" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--text)">₹295</text>
    <text x="296" y="120" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--text)">₹354</text>
    <text x="476" y="120" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--text)">₹64</text>
    <text x="630" y="120" textAnchor="middle" fontSize="22" fontWeight="800" fill="#dc2626">₹713+</text>
    <text x="116" y="144" textAnchor="middle" fontSize="11" fill="var(--text-muted)">2.5–3.5% of amount</text>
    <text x="296" y="144" textAnchor="middle" fontSize="11" fill="var(--text-muted)">~3.54%/mo on ₹10,000</text>
    <text x="476" y="144" textAnchor="middle" fontSize="11" fill="var(--text-muted)">18% GST on ₹354</text>
    <text x="630" y="144" textAnchor="middle" fontSize="11" fill="#dc2626">92% annualised</text>
    <rect x="36" y="168" width="648" height="1" fill="var(--border)" />
    <text x="36" y="192" fontSize="13" fill="var(--text-muted)">Interest starts from day ONE of withdrawal — no grace period applies to cash advances.</text>
    <text x="36" y="216" fontSize="13" fill="var(--text-muted)">Even if you repay within 2 days, the daily interest has already begun accumulating.</text>
    <text x="36" y="240" fontSize="11" fill="var(--text-muted)">Source: Assure Fintech analysis, June 2026. Rates vary by issuer.</text>
  </svg>
);

const SvgRewardExclusionTable = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Reward exclusion categories by major Indian credit card issuers" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="320" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="14" fontWeight="700" fill="var(--text)">Reward Exclusion Categories — Common Indian Cards (June 2026)</text>
    <rect x="36" y="52" width="648" height="28" rx="4" fill="var(--border)" opacity="0.5" />
    <text x="50" y="71" fontSize="12" fontWeight="700" fill="var(--text)">Category</text>
    <text x="230" y="71" fontSize="12" fontWeight="700" fill="var(--text)">HDFC Regalia</text>
    <text x="360" y="71" fontSize="12" fontWeight="700" fill="var(--text)">Axis Magnus</text>
    <text x="490" y="71" fontSize="12" fontWeight="700" fill="var(--text)">SBI Simply</text>
    <text x="610" y="71" fontSize="12" fontWeight="700" fill="var(--text)">ICICI Amazon</text>
    {[
      ["Fuel transactions", "Excluded", "Excluded", "Excluded", "Excluded"],
      ["Railway / IRCTC", "Excluded", "Earns", "Excluded", "Excluded"],
      ["Wallet loads", "Excluded", "Excluded", "Excluded", "Excluded"],
      ["Govt / tax payments", "Excluded", "Excluded", "Excluded", "Excluded"],
      ["EMI conversions", "Excluded", "Reduced", "Excluded", "Excluded"],
      ["Utility bills (some)", "Earns", "Earns", "Earns", "Earns"],
    ].map(([cat, hdfc, axis, sbi, icici], i) => (
      <g key={i}>
        <rect x="36" y={88 + i * 32} width="648" height="32" fill={i % 2 === 0 ? "transparent" : "var(--border)"} opacity="0.2" />
        <text x="50" y={109 + i * 32} fontSize="12" fill="var(--text)">{cat}</text>
        <text x="230" y={109 + i * 32} fontSize="12" fill={hdfc === "Excluded" ? "#dc2626" : hdfc === "Earns" ? "#16a34a" : "#ea580c"} fontWeight="600">{hdfc}</text>
        <text x="360" y={109 + i * 32} fontSize="12" fill={axis === "Excluded" ? "#dc2626" : axis === "Earns" ? "#16a34a" : "#ea580c"} fontWeight="600">{axis}</text>
        <text x="490" y={109 + i * 32} fontSize="12" fill={sbi === "Excluded" ? "#dc2626" : sbi === "Earns" ? "#16a34a" : "#ea580c"} fontWeight="600">{sbi}</text>
        <text x="610" y={109 + i * 32} fontSize="12" fill={icici === "Excluded" ? "#dc2626" : icici === "Earns" ? "#16a34a" : "#ea580c"} fontWeight="600">{icici}</text>
      </g>
    ))}
    <text x="36" y="298" fontSize="11" fill="var(--text-muted)">Data compiled from issuer Most Important Terms (MIT) documents. Always verify with your card's current MITC.</text>
  </svg>
);

const SvgMinimumTransactionBar = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Minimum transaction thresholds for reward earning on Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Minimum Transaction to Earn Rewards (₹)</text>
    {[
      { label: "SBI SimplyCLICK", val: 100, max: 500 },
      { label: "Kotak 811", val: 100, max: 500 },
      { label: "Axis Ace", val: 200, max: 500 },
      { label: "HDFC Millennia", val: 100, max: 500 },
      { label: "ICICI Coral", val: 100, max: 500 },
    ].map(({ label, val, max }, i) => (
      <g key={i}>
        <text x="36" y={68 + i * 26} fontSize="12" fill="var(--text)">{label}</text>
        <rect x="220" y={54 + i * 26} width={Math.round((val / max) * 380)} height="18" rx="4" fill="#dc2626" opacity="0.7" />
        <text x={226 + Math.round((val / max) * 380)} y={67 + i * 26} fontSize="12" fontWeight="700" fill="var(--text)">₹{val}</text>
      </g>
    ))}
    <text x="36" y="188" fontSize="11" fill="var(--text-muted)">Transactions below the threshold earn zero points — even on eligible categories.</text>
  </svg>
);

const SvgMilestoneTrap = () => (
  <svg viewBox="0 0 720 230" role="img" aria-label="Milestone bonus spend thresholds versus average cardholder monthly spend" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="230" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Milestone Bonus Threshold vs. Avg Monthly Spend (India, 2026)</text>
    <text x="36" y="58" fontSize="12" fill="var(--text-muted)">Most cardholders never reach the milestone that unlocks the "headline" bonus.</text>
    <rect x="36" y="80" width="210" height="90" rx="6" fill="var(--border)" opacity="0.3" />
    <text x="141" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Avg Indian cardholder</text>
    <text x="141" y="130" textAnchor="middle" fontSize="26" fontWeight="800" fill="#16a34a">₹18,500</text>
    <text x="141" y="152" textAnchor="middle" fontSize="11" fill="var(--text-muted)">monthly card spend</text>
    <rect x="270" y="80" width="210" height="90" rx="6" fill="#dc2626" opacity="0.12" />
    <text x="375" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Typical milestone threshold</text>
    <text x="375" y="130" textAnchor="middle" fontSize="26" fontWeight="800" fill="#dc2626">₹75,000</text>
    <text x="375" y="152" textAnchor="middle" fontSize="11" fill="var(--text-muted)">per quarter (advertised bonus)</text>
    <rect x="504" y="80" width="210" height="90" rx="6" fill="#dc2626" opacity="0.06" />
    <text x="609" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Gap to bridge</text>
    <text x="609" y="130" textAnchor="middle" fontSize="26" fontWeight="800" fill="#dc2626">4x</text>
    <text x="609" y="152" textAnchor="middle" fontSize="11" fill="var(--text-muted)">more than most people spend</text>
    <text x="36" y="200" fontSize="12" fill="var(--text-muted)">Source: RBI Payment System Report 2025, Assure Fintech estimates. Milestone thresholds: HDFC Regalia Gold, Axis Magnus, ICICI Sapphiro.</text>
  </svg>
);

const SvgRewardReversalFlow = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="How reward reversal works when you return a purchase" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">The Reward Reversal Trap — Step by Step</text>
    {[
      { x: 36, label: "1. You buy ₹5,000 item", sub: "500 points credited" },
      { x: 196, label: "2. You return item", sub: "Merchant refunds ₹5,000" },
      { x: 356, label: "3. Points reversed", sub: "500 points deducted" },
      { x: 516, label: "4. Processing fee?", sub: "Sometimes NOT refunded" },
    ].map(({ x, label, sub }, i) => (
      <g key={i}>
        <rect x={x} y="52" width="148" height="72" rx="6" fill={i === 3 ? "#dc2626" : "var(--border)"} opacity={i === 3 ? 0.15 : 0.35} />
        <text x={x + 74} y="84" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">{label}</text>
        <text x={x + 74} y="104" textAnchor="middle" fontSize="11" fill={i === 3 ? "#dc2626" : "var(--text-muted)"}>{sub}</text>
        {i < 3 && <text x={x + 158} y="92" fontSize="18" fill="var(--text-muted)">→</text>}
      </g>
    ))}
    <text x="36" y="160" fontSize="12" fill="var(--text-muted)">The refund and reversal happen but any foreign currency conversion fee or processing charge may stay. Always confirm in writing.</text>
  </svg>
);

const SvgGSTOnInterest = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="How GST compounds on top of credit card interest in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">GST Stacks on Top of Interest — Most People Miss This</text>
    <text x="36" y="58" fontSize="13" fill="var(--text-muted)">Outstanding balance: ₹50,000 | 30 days revolving</text>
    <rect x="36" y="74" width="200" height="52" rx="6" fill="var(--border)" opacity="0.4" />
    <text x="136" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Interest charge</text>
    <text x="136" y="118" textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--text)">₹1,750</text>
    <text x="252" y="106" fontSize="20" fill="var(--text-muted)">+</text>
    <rect x="272" y="74" width="200" height="52" rx="6" fill="var(--raise)" opacity="0.15" />
    <text x="372" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">18% GST on interest</text>
    <text x="372" y="118" textAnchor="middle" fontSize="18" fontWeight="800" fill="#ea580c">₹315</text>
    <text x="488" y="106" fontSize="20" fill="var(--text-muted)">=</text>
    <rect x="508" y="74" width="196" height="52" rx="6" fill="#dc2626" opacity="0.15" />
    <text x="606" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Total charge</text>
    <text x="606" y="118" textAnchor="middle" fontSize="18" fontWeight="800" fill="#dc2626">₹2,065</text>
    <text x="36" y="164" fontSize="12" fill="var(--text-muted)">Your statement shows interest separately from GST — banks are required to itemize both, but the combined hit is 41.3% annualised on a revolving balance.</text>
    <text x="36" y="184" fontSize="11" fill="var(--text-muted)">RBI Master Direction on Credit Cards, 2022 requires GST to be disclosed separately on each statement.</text>
  </svg>
);

const SvgAnnualisedCostComparison = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Annualised cost comparison of cash advance versus other borrowing options in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">True Annualised Cost — Cash Advance vs Other Credit Options</text>
    {[
      { label: "Credit card cash advance", pct: 92, color: "#dc2626" },
      { label: "Credit card revolving interest", pct: 42, color: "#ea580c" },
      { label: "Personal loan (NBFC)", pct: 24, color: "#f59e0b" },
      { label: "Personal loan (bank)", pct: 14, color: "#16a34a" },
      { label: "Home loan", pct: 9, color: "#0891b2" },
    ].map(({ label, pct, color }, i) => (
      <g key={i}>
        <text x="36" y={68 + i * 34} fontSize="12" fill="var(--text)">{label}</text>
        <rect x="280" y={54 + i * 34} width={Math.round(pct * 3.8)} height="20" rx="4" fill={color} opacity="0.8" />
        <text x={286 + Math.round(pct * 3.8)} y={68 + i * 34} fontSize="12" fontWeight="700" fill="var(--text)">{pct}% p.a.</text>
      </g>
    ))}
    <text x="36" y="218" fontSize="11" fill="var(--text-muted)">Annualised rates include all applicable fees and GST. Personal loan rates are indicative for June 2026.</text>
  </svg>
);

const SvgSpendCategories = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Which card spend categories typically earn no rewards in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Categories That Often Earn Zero Rewards (Read Your MITC)</text>
    {[
      ["Fuel surcharge transactions", "#dc2626"],
      ["Railway bookings via IRCTC (most cards)", "#dc2626"],
      ["Wallet top-ups (Paytm, PhonePe, etc.)", "#dc2626"],
      ["Government fee payments", "#dc2626"],
      ["Tax payments (advance, self-assessment)", "#dc2626"],
      ["EMI converted transactions", "#ea580c"],
      ["Rent payments via aggregators", "#ea580c"],
    ].map(([label, color], i) => (
      <g key={i}>
        <circle cx="50" cy={57 + i * 20} r="5" fill={color} opacity="0.8" />
        <text x="66" y={62 + i * 20} fontSize="12" fill="var(--text)">{label}</text>
      </g>
    ))}
    <text x="36" y="186" fontSize="11" fill="var(--text-muted)">Orange = card-dependent. Some premium cards allow rent or EMI rewards — check the current MITC before assuming.</text>
  </svg>
);

export default function BlogMinimumTransactionTraps() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the minimum transaction amount to earn credit card rewards in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Indian credit cards require a minimum transaction of ₹100 to ₹200 to earn any reward points. Transactions below this threshold earn exactly zero points — the purchase goes through normally, but no points are credited. Always check your card's Most Important Terms and Conditions (MITC) document for the exact threshold."
        }
      },
      {
        "@type": "Question",
        name: "How much does a credit card cash advance actually cost in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ₹10,000 cash advance held for 30 days costs approximately ₹713 or more — made up of a processing fee of ₹250-350, daily interest from day one (roughly ₹354 at 3.54%/month), and 18% GST on the interest. Annualised, this works out to around 92% per year, making it one of the most expensive forms of credit available in India."
        }
      },
      {
        "@type": "Question",
        name: "Do I earn rewards if I return a purchase made on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The reward points get reversed when a refund is processed. However, any payment processing fee or foreign currency conversion fee charged at the time of purchase may not be refunded. So you could end up with no points and a fee — for a transaction you returned."
        }
      },
      {
        "@type": "Question",
        name: "Does GST apply to credit card interest charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An 18% GST is charged on top of the finance charge (interest). If your monthly interest is ₹1,750, you'll additionally pay ₹315 in GST — bringing your total finance cost to ₹2,065. Banks are required by RBI Master Direction to disclose GST separately on your statement, so look for both line items."
        }
      },
      {
        "@type": "Question",
        name: "Which categories are excluded from credit card rewards in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common exclusions across most Indian cards include fuel transactions (though you may earn fuel surcharge waiver), railway bookings, wallet top-ups (Paytm, PhonePe, etc.), government fee payments, tax payments, and EMI-converted transactions. Each card has a different exclusion list — always read the MITC before expecting to earn on a specific category."
        }
      },
      {
        "@type": "Question",
        name: "What is a milestone bonus trap on credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Milestone bonuses are reward boosts that only unlock after you spend ₹50,000-₹1,00,000 in a quarter. The average Indian credit cardholder spends roughly ₹18,500 per month on their card — meaning most never reach the quarterly milestone. Banks promote the milestone reward rate in ads, but the base rate (what you actually earn) is much lower."
        }
      },
      {
        "@type": "Question",
        name: "Can I use a credit card at an ATM for cash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technically yes, but you should almost never do this. Unlike debit card ATM withdrawals, credit card cash advances have no interest-free period — interest starts from the very moment of withdrawal. Combined with a processing fee of 2.5-3.5% and 18% GST on that fee, it becomes extremely expensive."
        }
      },
      {
        "@type": "Question",
        name: "Is fuel surcharge waiver the same as earning fuel rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, they are different. Fuel surcharge waiver means the 1% surcharge added at petrol pumps gets waived (saving you roughly ₹10-15 on a ₹1,000 fill). Most cards that waive the surcharge do not additionally earn reward points on fuel. A small number of premium cards do both — check your specific card's terms."
        }
      },
      {
        "@type": "Question",
        name: "What happens to rewards if I pay late but eventually pay in full?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rewards already credited are usually not reversed purely because of a late payment. However, the late payment fee (₹500-1,200 typically) plus interest charges will almost certainly wipe out the monetary value of those rewards. A single missed payment on a ₹50,000 balance can cost ₹2,500+ — far more than a typical month's reward value."
        }
      },
      {
        "@type": "Question",
        name: "How do I check which categories my card excludes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Download the Most Important Terms and Conditions (MITC) document from your bank's website — it is a mandatory RBI disclosure. Search for 'reward exclusions' or 'categories not eligible'. If you cannot find it, call the customer care number and ask them to read out the exclusion list for your specific card variant."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Credit Card Minimum Transaction Traps That Cost Indians Thousands Every Year",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Minimum Transaction Traps", item: "https://assurefintech.com/blog/minimum-transaction-traps" },
    ]
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Minimum Transaction Traps
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · WARNING</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 14px" }}>
        Read This Before You Swipe: The Minimum Transaction Traps Eating Your Rewards
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 16px" }}>
        From the ₹100 floor that silently kills small-purchase rewards to a cash advance that costs 92% annualised — here is the fine print your card company hoped you would not read.
      </p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 9 min read</div>

      <div style={{ background: "var(--red-dim)", border: "1px solid rgba(255,90,72,.3)", borderRadius: 8, padding: "16px 20px", marginBottom: 32 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: COLOR, margin: "0 0 6px" }}>Before you spend another rupee on rewards</p>
        <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
          This article documents traps that exist in the terms and conditions of cards issued by HDFC, Axis, SBI, ICICI, and Kotak — all legal, all disclosed, and almost never explained at point of sale. Knowing these will save you real money.
        </p>
      </div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Trap 1: The ₹100 Minimum Transaction Floor</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Your neighbourhood grocery run for ₹85 does not earn a single reward point on most cards. The transaction goes through, the amount is billed, but the reward ledger does not move.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Most issuers set this minimum between ₹100 and ₹200 per transaction. If you buy a ₹50 item, a ₹90 coffee, and a ₹150 snack separately, you earn rewards only on the last one — even if your total day's spend was ₹290.
        </p>
        <SvgMinimumTransactionBar />
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The fix is mechanical: whenever possible, consolidate small purchases into one transaction and stay above the threshold. For everyday coffee or auto rides, a UPI-linked card with no floor (some neo-bank offerings) beats a points card.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Trap 2: Milestone Bonuses That Almost Nobody Reaches</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Bank advertisements love to lead with the milestone bonus rate — "earn 10X on travel above ₹75,000 quarterly spend." The word "above" is doing enormous work in that sentence.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The average Indian credit cardholder spends roughly ₹18,500 per month on their card, per RBI Payment System data. That works out to ₹55,500 per quarter — just below most premium milestone thresholds.
        </p>
        <SvgMilestoneTrap />
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          When evaluating a card, always calculate your rewards at the base rate — the milestone rate is a bonus for the small percentage of power spenders who actually cross it.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Trap 3: The Reward Exclusion List Nobody Shows You at Sign-Up</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Fuel, railway, government payments, wallet loads, and EMI-converted transactions: these categories cover a surprisingly large portion of real household spending in India. Most cards exclude all of them.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The exclusion list is buried in the Most Important Terms and Conditions document — an RBI-mandated disclosure that banks provide, but never exactly front and centre in marketing materials.
        </p>
        <SvgRewardExclusionTable />
        <SvgSpendCategories />
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Before you pick a card for a specific purpose (say, railway travel or fuel), look up that exact category in the MITC. There is a card for every spend pattern — but only if you match deliberately.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Trap 4: GST on Top of Interest — The Hidden 18%</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          When you revolve a balance, you pay interest — most Indian cards charge 3.5% per month (42% per year). What most cardholders do not realise is that 18% GST is then charged on top of that interest amount.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          On a ₹50,000 revolving balance for 30 days, your interest is ₹1,750. GST adds another ₹315. You are billed ₹2,065 in finance charges alone, which is an effective annualised rate of 49.5% — not the 42% the headline rate suggests.
        </p>
        <SvgGSTOnInterest />
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Trap 5: The Reward Reversal — You Return, They Take Points Back</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          You buy a ₹5,000 item online during a sale, your card credits 500 bonus points, and you feel good about the deal. Then the item arrives damaged and you return it.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The refund hits your statement — but so does a points reversal of 500 points. Where it gets worse: any one-time processing fee or handling charge that the merchant or bank levied may not come back with the refund.
        </p>
        <SvgRewardReversalFlow />
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Always confirm the reversal terms before a large purchase if you even remotely expect to return it. This is especially relevant for online shopping during sale seasons.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Trap 6: Cash Advance — The Most Expensive Credit in India</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          A credit card cash advance is not just "using your credit limit at an ATM." It is a distinct, far more expensive product that most cardholders discover only after seeing the bill.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Three charges hit simultaneously: a one-time fee of 2.5-3.5% of the amount, daily interest from the very moment of withdrawal (no grace period), and 18% GST on the fee and interest. For ₹10,000 over 30 days, the total damage is roughly ₹713-768 — an annualised rate of about 92%.
        </p>
        <SvgCashAdvanceCost />
        <SvgAnnualisedCostComparison />
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          By comparison, a personal loan from a bank runs 12-18% per year and even a high-rate NBFC personal loan is rarely above 28%. If you genuinely need emergency cash, a personal loan application takes 4-24 hours today. Cash advance should be a last resort — literally.
        </p>
      </section>

      <section style={{ background: "var(--red-dim)", border: "1px solid rgba(255,90,72,.3)", borderRadius: 8, padding: "20px 24px", marginBottom: 36 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>Before Your Next Transaction: A 30-Second Checklist</h2>
        <ol style={{ fontSize: 14, color: "var(--text)", lineHeight: 2, paddingLeft: 20 }}>
          <li>Is this transaction above my card's minimum (₹100/₹200)? If not, consider combining purchases.</li>
          <li>Is this category on the exclusion list? Fuel, wallets, govt, railway — check before assuming rewards.</li>
          <li>Am I close to a milestone threshold or far from it? Calculate at the base rate if far.</li>
          <li>Will I pay this in full before the due date? If no, the interest + GST will cost far more than any reward earned.</li>
          <li>Do I actually need cash from my credit card? If yes, explore a personal loan first — it costs 3-6x less.</li>
        </ol>
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
        <Link href="/blog/7-credit-card-mistakes-india" style={{ color: COLOR }}>7 Credit Card Mistakes Indians Make</Link>{" "}
        ·{" "}
        <Link href="/blog/read-credit-card-statement" style={{ color: COLOR }}>How to Read Your Credit Card Statement</Link>{" "}
        ·{" "}
        <Link href="/blog/right-way-pay-credit-card-bill" style={{ color: COLOR }}>The Right Way to Pay Your Credit Card Bill</Link>{" "}
        ·{" "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe Tool</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison site. Rates, fees, and terms cited are for informational purposes and may change. Always verify current terms with your card issuer before making financial decisions. This article is not financial advice. Last reviewed June 4, 2026.
      </footer>
    </main>
  );
}
