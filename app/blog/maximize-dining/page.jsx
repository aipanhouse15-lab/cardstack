import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "How to Actually Maximize Dining Rewards in India (With Real Math)",
  description: "Your action plan Step 1: Check your last 3 months of dining spend on Swiggy and Zomato. If combined delivery is under ₹10,000/month, Axis Ace alone i...",
  alternates: { canonical: "/blog/maximize-dining" },
  openGraph: {
    title: "How to Actually Maximize Dining Rewards in India (With Real Math)",
    description: "Your action plan Step 1: Check your last 3 months of dining spend on Swiggy and Zomato. If combined delivery is under ₹10,000/month, Axis Ace alone i...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/maximize-dining-rewards-india
// Template: category-specific optimization guide with card tiers
// Color: #f59e0b | Updated: June 4, 2026

const COLOR = "#f59e0b";
const UPDATED = "June 4, 2026";

const SvgDiningRates = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Bar chart comparing dining reward rates across 5 credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="320" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Effective Dining Reward Rate (per ₹100 spent)</text>
    {/* Bars */}
    <rect x="60" y="80" width="80" height="140" fill={COLOR} rx="4" />
    <text x="100" y="73" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">5.0%</text>
    <text x="100" y="240" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Axis Ace</text>
    <text x="100" y="254" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(Swiggy/Zomato)</text>

    <rect x="180" y="40" width="80" height="180" fill="var(--raise)" rx="4" />
    <text x="220" y="33" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">10X pts</text>
    <text x="220" y="240" textAnchor="middle" fontSize="11" fill="var(--text-muted)">HDFC Diners</text>
    <text x="220" y="254" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Black (Swiggy)</text>

    <rect x="300" y="110" width="80" height="110" fill="#8b5cf6" rx="4" />
    <text x="340" y="103" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">3.5%</text>
    <text x="340" y="240" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Amex MRCC</text>
    <text x="340" y="254" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(Dining, capped)</text>

    <rect x="420" y="150" width="80" height="70" fill="#0891b2" rx="4" />
    <text x="460" y="143" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">2.0%</text>
    <text x="460" y="240" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Amazon Pay</text>
    <text x="460" y="254" textAnchor="middle" fontSize="10" fill="var(--text-muted)">ICICI (online)</text>

    <rect x="540" y="180" width="80" height="40" fill="#16a34a" rx="4" />
    <text x="580" y="173" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">1.0%</text>
    <text x="580" y="240" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Generic Card</text>
    <text x="580" y="254" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(dining category)</text>

    <line x1="40" y1="220" x2="680" y2="220" stroke="var(--border)" strokeWidth="1" />
    <text x="20" y="224" fontSize="10" fill="var(--text-muted)">0%</text>
    <text x="660" y="290" textAnchor="end" fontSize="10" fill="var(--text-muted)">*Effective rate after caps and point valuations as of June 2026</text>
  </svg>
);

const SvgMonthlyEarningsTable = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Table showing monthly dining earnings on ₹8000 spend across 5 cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="280" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">₹8,000/month dining spend: What you actually earn</text>
    {/* Header row */}
    <rect x="20" y="40" width="680" height="36" fill={COLOR} rx="4" />
    <text x="100" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Card</text>
    <text x="280" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Reward Rate</text>
    <text x="440" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Monthly Cap</text>
    <text x="610" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Actual Monthly Earn</text>
    {/* Rows */}
    {[
      ["Axis Ace", "5% on Swiggy/Zomato", "₹500/month", "₹400*"],
      ["HDFC Diners Black", "10X pts on Swiggy", "Uncapped", "~₹667 (6 pts=₹5)"],
      ["Amex MRCC", "5X pts on dining", "₹7,500/txn", "~₹280 (1pt=₹0.35)"],
      ["Amazon Pay ICICI", "2% on food apps", "No cap", "₹160"],
      ["Standard card", "1% dining", "Varies", "₹80"],
    ].map(([card, rate, cap, earn], i) => (
      <g key={i}>
        <rect x="20" y={80 + i * 36} width="680" height="36" fill={i % 2 === 0 ? "transparent" : "var(--raise)"} />
        <text x="100" y={103 + i * 36} textAnchor="middle" fontSize="11" fill="var(--text)">{card}</text>
        <text x="280" y={103 + i * 36} textAnchor="middle" fontSize="11" fill="var(--text)">{rate}</text>
        <text x="440" y={103 + i * 36} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{cap}</text>
        <text x="610" y={103 + i * 36} textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>{earn}</text>
      </g>
    ))}
    <text x="20" y="272" fontSize="10" fill="var(--text-muted)">*Axis Ace caps at ₹500/month across both Swiggy and Zomato combined</text>
  </svg>
);

const SvgZomatoSwiggyTable = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Comparison table of which cards reward Zomato vs Swiggy vs both" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Zomato vs Swiggy: Which Card Covers Which App?</text>
    <rect x="20" y="40" width="680" height="36" fill="var(--raise2)" rx="4" />
    <text x="160" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Card</text>
    <text x="340" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Zomato</text>
    <text x="490" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Swiggy</text>
    <text x="630" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Offline Restaurant</text>
    {[
      ["Axis Ace", "5% (capped)", "5% (capped)", "1.5%"],
      ["HDFC Diners Black", "Standard dining", "10X pts", "10X pts"],
      ["Amex MRCC", "5X dining pts", "5X dining pts", "5X dining pts"],
      ["SBI SimplySAVE", "2X (dining)", "2X (dining)", "10X pts"],
    ].map(([card, zomato, swiggy, offline], i) => (
      <g key={i}>
        <rect x="20" y={80 + i * 38} width="680" height="38" fill={i % 2 === 0 ? "transparent" : "var(--raise)"} />
        <text x="160" y={104 + i * 38} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">{card}</text>
        <text x="340" y={104 + i * 38} textAnchor="middle" fontSize="11" fill="var(--text)">{zomato}</text>
        <text x="490" y={104 + i * 38} textAnchor="middle" fontSize="11" fill="var(--text)">{swiggy}</text>
        <text x="630" y={104 + i * 38} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{offline}</text>
      </g>
    ))}
  </svg>
);

const SvgDiningScenarioFlowchart = () => (
  <svg viewBox="0 0 720 380" role="img" aria-label="Flowchart to pick the right dining card based on scenario" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="380" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Which Card for Which Dining Scenario?</text>
    {/* Start node */}
    <rect x="280" y="45" width="160" height="40" rx="20" fill={COLOR} />
    <text x="360" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">Dining Spend</text>
    {/* Arrow down */}
    <line x1="360" y1="85" x2="360" y2="110" stroke="var(--border)" strokeWidth="2" markerEnd="url(#arrow1)" />
    {/* Diamond */}
    <polygon points="360,110 430,145 360,180 290,145" fill="var(--hair)" stroke="var(--border)" strokeWidth="1" />
    <text x="360" y="148" textAnchor="middle" fontSize="11" fill="var(--text)">Online delivery?</text>
    {/* Yes branch left */}
    <line x1="290" y1="145" x2="160" y2="145" stroke="var(--border)" strokeWidth="2" />
    <line x1="160" y1="145" x2="160" y2="200" stroke="var(--border)" strokeWidth="2" />
    <text x="220" y="138" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="700">Yes</text>
    <rect x="80" y="200" width="160" height="50" rx="8" fill="var(--raise)" stroke={COLOR} strokeWidth="1.5" />
    <text x="160" y="221" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Axis Ace (both apps)</text>
    <text x="160" y="238" textAnchor="middle" fontSize="10" fill="var(--text-muted)">or HDFC Diners Black</text>
    <text x="160" y="253" textAnchor="middle" fontSize="10" fill="var(--text-muted)">for Swiggy only</text>
    {/* No branch right */}
    <line x1="430" y1="145" x2="560" y2="145" stroke="var(--border)" strokeWidth="2" />
    <line x1="560" y1="145" x2="560" y2="200" stroke="var(--border)" strokeWidth="2" />
    <text x="490" y="138" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="700">No, offline</text>
    <rect x="480" y="200" width="160" height="50" rx="8" fill="var(--raise)" stroke="#16a34a" strokeWidth="1.5" />
    <text x="560" y="221" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Check UPI category</text>
    <text x="560" y="238" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Some cards classify</text>
    <text x="560" y="253" textAnchor="middle" fontSize="10" fill="var(--text-muted)">UPI pay as utility</text>
    {/* Bottom advice */}
    <rect x="120" y="290" width="480" height="56" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
    <text x="360" y="315" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Stack strategy: Axis Ace for delivery + Amex MRCC</text>
    <text x="360" y="332" textAnchor="middle" fontSize="11" fill="var(--text-muted)">for offline restaurants above ₹7,500 transactions</text>
    <text x="360" y="348" textAnchor="middle" fontSize="10" fill={COLOR}>Use /stack-builder to model your combination</text>
  </svg>
);

const SvgAnnualEarningsChart = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Bar chart of annual dining rewards earned across card choices at ₹96000 annual spend" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Annual Dining Rewards at ₹96,000/year spend</text>
    {[
      { label: "HDFC Diners Black", val: 8000, x: 60 },
      { label: "Axis Ace", val: 4800, x: 200 },
      { label: "Amex MRCC", val: 3360, x: 340 },
      { label: "Amazon Pay ICICI", val: 1920, x: 480 },
      { label: "No card rewards", val: 0, x: 620 },
    ].map(({ label, val, x }) => {
      const barH = val === 0 ? 4 : Math.round((val / 8000) * 160);
      const barY = 200 - barH;
      return (
        <g key={x}>
          <rect x={x} y={barY} width="80" height={barH} fill={val === 0 ? "var(--border)" : COLOR} rx="4" />
          <text x={x + 40} y={barY - 6} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">₹{val.toLocaleString()}</text>
          <text x={x + 40} y="218" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{label.split(" ").slice(0, 2).join(" ")}</text>
          <text x={x + 40} y="232" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{label.split(" ").slice(2).join(" ")}</text>
        </g>
      );
    })}
    <line x1="40" y1="200" x2="680" y2="200" stroke="var(--border)" strokeWidth="1" />
  </svg>
);

const SvgOfflineVsAppRewards = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Comparison of reward rates for the same restaurant paid via app vs physical card swipe" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Same Restaurant, Different Reward: App vs Card Swipe</text>
    <rect x="40" y="50" width="280" height="110" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5" />
    <text x="180" y="76" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Swipe Card at Restaurant</text>
    <text x="180" y="100" textAnchor="middle" fontSize="22" fontWeight="800" fill="#16a34a">2-10X points</text>
    <text x="180" y="122" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Classified: Dining / Restaurant</text>
    <text x="180" y="140" textAnchor="middle" fontSize="11" fill="var(--text-muted)">category (higher tier)</text>
    <rect x="400" y="50" width="280" height="110" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5" />
    <text x="540" y="76" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Pay via UPI / App at Desk</text>
    <text x="540" y="100" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ef4444">1X points</text>
    <text x="540" y="122" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Classified: Utility / Wallet</text>
    <text x="540" y="140" textAnchor="middle" fontSize="11" fill="var(--text-muted)">category (lower tier)</text>
    <text x="360" y="100" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--text-muted)">vs</text>
  </svg>
);

const SvgStackingTimeline = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Timeline showing how to stack dining card offers for maximum monthly rewards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Smart Stacking: Monthly Dining Optimization</text>
    {[
      { x: 60, label: "Week 1-2", action: "Axis Ace", detail: "Swiggy/Zomato orders hit ₹500 cap threshold" },
      { x: 240, label: "Week 2+", action: "Switch App", detail: "Once cap hit, move delivery to HDFC Diners Black" },
      { x: 420, label: "Offline dining", action: "Amex MRCC", detail: "Use at restaurants for 5X Membership Rewards" },
      { x: 600, label: "Month end", action: "Check balance", detail: "Redeem Amex pts at 0.5x to 1x via Marriott/airlines" },
    ].map(({ x, label, action, detail }) => (
      <g key={x}>
        <circle cx={x + 30} cy="80" r="20" fill={COLOR} />
        <text x={x + 30} y="76" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{label.split(" ")[0]}</text>
        <text x={x + 30} y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{label.split(" ")[1] || ""}</text>
        <text x={x + 30} y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">{action}</text>
        <text x={x + 30} y="133" textAnchor="middle" fontSize="9" fill="var(--text-muted)" style={{ maxWidth: 100 }}>{detail.substring(0, 30)}</text>
        <text x={x + 30} y="147" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{detail.substring(30)}</text>
      </g>
    ))}
    <line x1="90" y1="80" x2="270" y2="80" stroke="var(--border)" strokeWidth="2" strokeDasharray="4,3" />
    <line x1="450" y1="80" x2="270" y2="80" stroke="var(--border)" strokeWidth="2" strokeDasharray="4,3" />
    <line x1="450" y1="80" x2="630" y2="80" stroke="var(--border)" strokeWidth="2" strokeDasharray="4,3" />
  </svg>
);

export default function BlogMaximizeDining() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Axis Ace give 5% on both Swiggy and Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, Axis Ace gives 5% cashback on both Swiggy and Zomato, but the cap is ₹500 per month across both apps combined. So if you spend ₹5,000 on Swiggy and ₹5,000 on Zomato, you still earn only ₹500 total, not ₹1,000." }
      },
      {
        "@type": "Question",
        name: "Is HDFC Diners Black worth it just for the Swiggy reward?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Diners Black gives 10X reward points on Swiggy with no monthly cap on the category. At a value of roughly ₹5 per 6 points, that works out to about 8.3% effective return. The card's annual fee is ₹10,000, so you need significant total spend across categories to justify it, not just Swiggy alone." }
      },
      {
        "@type": "Question",
        name: "Why does paying by UPI at a restaurant sometimes give fewer points than swiping?",
        acceptedAnswer: { "@type": "Answer", text: "When you swipe your card at a restaurant, the transaction is categorized under 'Dining' by the merchant category code (MCC). When you scan a QR code or use UPI linked to your card, the transaction may be routed under 'Utility', 'Wallet', or 'QR Payment' categories, which often earn lower reward rates. Always check your card's MCC reward table." }
      },
      {
        "@type": "Question",
        name: "Can I stack multiple dining cards in the same month?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, and this is actually the recommended approach. Use Axis Ace until you hit the ₹500 cashback cap for the month (at ₹10,000 Swiggy/Zomato spend), then switch to another card like HDFC Diners Black for remaining orders. For offline restaurants, use Amex MRCC separately." }
      },
      {
        "@type": "Question",
        name: "Does Amex MRCC reward work at all restaurants in India?",
        acceptedAnswer: { "@type": "Answer", text: "Amex MRCC gives 5X Membership Rewards points on all dining spend, including food delivery, with no specific platform restriction. However, acceptance is lower than Visa/Mastercard, particularly at smaller restaurants and dhabas. Stick to branded restaurant chains or use it on food delivery apps where Amex is accepted." }
      },
      {
        "@type": "Question",
        name: "What is the actual rupee value of 1 Amex Membership Reward point?",
        acceptedAnswer: { "@type": "Answer", text: "Amex Membership Rewards points have a base value of around ₹0.25-0.50 per point when redeemed for statement credit or vouchers. If you transfer to airline partners like IndiGo BluChip or hotel partners, you can sometimes extract ₹0.80-1.20 per point. Never redeem at Amazon or Flipkart, where the value drops to ₹0.15-0.25 per point." }
      },
      {
        "@type": "Question",
        name: "Which app gives better dining deals: Swiggy or Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "This varies by city and restaurant. In June 2026, Zomato Gold members get flat discounts at partner restaurants, while Swiggy One gives free delivery and some platform discounts. Credit card rewards work on top of platform-level discounts in most cases, so use whichever app has the better deal and then choose your card accordingly." }
      },
      {
        "@type": "Question",
        name: "Does ordering from a restaurant's own app or website earn dining rewards?",
        acceptedAnswer: { "@type": "Answer", text: "Usually yes, as long as you pay by card directly. The transaction is typically categorized under 'Dining' or 'Restaurants'. Some premium pizza or burger chains have their own checkout — those usually work fine with dining card rewards. Payment via aggregators like PayU on those sites also generally works." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Actually Maximize Dining Rewards in India (With Real Math)",
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
      { "@type": "ListItem", position: 3, name: "Maximize Dining Rewards India", item: "https://assurefintech.com/blog/maximize-dining-rewards-india" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1F1500, #4D3300, #1F1500)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #f59e0b22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Dining Rewards
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            How to Actually Maximize Dining Rewards in India (With Real Math)
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 28 }}>
            You're spending ₹8,000 a month on Swiggy, Zomato, and restaurants. The right card combination earns you ₹800+ back. The wrong one earns you ₹80.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹800+</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Monthly savings (right combo)</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Cards compared</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹10K</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Cap threshold</div></div>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 20 }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Maximize Dining Rewards
      </nav>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The honest version of dining rewards</h2>
        <p>Most articles list reward rates without mentioning caps, and that omission costs you real money. An "Axis Ace gives 5% on Swiggy" headline sounds great until you realize the monthly cashback cap is ₹500, meaning anything above ₹10,000 in delivery orders earns exactly zero extra.</p>
        <p>This guide covers what each card actually pays after you account for caps, point valuations, and the weird category-coding quirks that can halve your rewards without warning.</p>
      </section>
      <SvgDiningRates />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Tier 1: Cards built for dining</h2>

        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "20px 0 8px", color: COLOR }}>Axis Ace: The delivery card for most people</h3>
        <p>Axis Ace gives 5% cashback on Swiggy and Zomato combined, capped at ₹500 per month. At ₹8,000 monthly dining spend split across both apps, you will hit ₹400 in cashback (since ₹8,000 x 5% = ₹400, under the ₹500 cap).</p>
        <p>The card has an annual fee of ₹499, which is waivable at ₹2 lakh annual spend. For pure delivery users under the cap, this remains the cleanest cashback card in the dining category.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "20px 0 8px", color: "#ef4444" }}>HDFC Diners Black: High spend, uncapped Swiggy</h3>
        <p>Diners Black gives 10X reward points on Swiggy, with no monthly cap on that category. At a point value of ₹5 per 6 points (roughly ₹0.83 per point), 10X translates to about 8.3% effective return on Swiggy spends.</p>
        <p>The catch is the ₹10,000 annual fee and the fact that HDFC Diners cards are not universally accepted at smaller restaurants. Use this card for Swiggy and hold a Visa/Mastercard for offline.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "20px 0 8px", color: "#8b5cf6" }}>Amex MRCC: Offline dining specialist</h3>
        <p>Amex Membership Rewards Credit Card gives 5X points on all dining, including delivery apps, with a cap per transaction of ₹7,500, not per month. If you regularly do large group orders or upscale restaurant meals, this structure works well.</p>
        <p>The actual rupee value depends heavily on how you redeem. Via statement credit the value is around ₹0.25-0.35 per point. Via airline transfer it can reach ₹0.80-1.20 per point. The 5X rate on dining means 5 points per ₹100, which at mid-range redemption nets about 1.75% to 2.5% effective return.</p>
      </section>
      <SvgMonthlyEarningsTable />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Zomato vs Swiggy split problem</h2>
        <p>Some cards are explicitly coded only for one platform. HDFC Diners Black's 10X rewards are confirmed for Swiggy in their June 2026 rewards schedule, but Zomato transactions on the same card earn standard dining category points, which is much lower.</p>
        <p>Before you pick a card for delivery, check whether the bank specifies both apps or just one. Axis Ace is one of the few cards that explicitly covers both in the same category.</p>
      </section>
      <SvgZomatoSwiggyTable />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The offline restaurant trick most people miss</h2>
        <p>When you pay for a restaurant meal by swiping your credit card, the MCC (Merchant Category Code) is typically 5812 (Eating Places and Restaurants) or 5814 (Fast Food), which cards classify as "Dining" for higher rewards. When you pay the same bill via UPI QR or a payment app at the table, the transaction can be coded as a utility payment or wallet transfer instead.</p>
        <p>This means physically swiping or tapping your card at a restaurant often earns better rewards than scanning the UPI code, even though you are paying the same restaurant. Test your own card by checking the category shown in the rewards app for each transaction type.</p>
      </section>
      <SvgOfflineVsAppRewards />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Real math: ₹8,000/month dining spend</h2>
        <p>Say you spend ₹5,000 on Swiggy/Zomato and ₹3,000 at restaurants each month. On Axis Ace alone, you earn ₹250 from delivery (5% of ₹5,000) plus about ₹45 from restaurants (1.5% flat), totaling ₹295/month or ₹3,540/year.</p>
        <p>Stack Axis Ace for delivery and Amex MRCC for restaurants (at 5X points, mid-value redemption = ~2% effective), and you get roughly ₹250 + ₹60 = ₹310/month, or ₹3,720/year. The gain from stacking is modest unless you push restaurant spend higher or redeem Amex points at airline valuations.</p>
      </section>
      <SvgAnnualEarningsChart />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How to stack dining cards correctly</h2>
        <p>The most practical stack for most people is: Axis Ace as the primary delivery card (covers both apps, cashback is automatic, no redemption friction) and one dining-category card for offline spend. You do not need three cards for dining.</p>
        <p>If your Swiggy spend alone regularly crosses ₹10,000/month, look at HDFC Diners Black seriously, because the uncapped 10X is the strongest single-app reward available. For everyone else, Axis Ace with a general rewards card as backup is sufficient.</p>
      </section>
      <SvgStackingTimeline />
      <section style={{ marginBottom: 24, padding: "20px 24px", background: "var(--raise)", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 8px 8px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Your action plan</h2>
        <p style={{ margin: "0 0 8px" }}>Step 1: Check your last 3 months of dining spend on Swiggy and Zomato. If combined delivery is under ₹10,000/month, Axis Ace alone is optimal.</p>
        <p style={{ margin: "0 0 8px" }}>Step 2: Check your offline restaurant spend. If it regularly crosses ₹5,000/month, adding a dedicated dining card for those transactions adds real money.</p>
        <p style={{ margin: "0" }}>Step 3: Use <Link href="/stack-builder" style={{ color: COLOR }}>our stack builder</Link> to model your specific combo and see the annual rupee return before you apply for anything.</p>
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
        <Link href="/blog/cashback-rate-is-a-lie" style={{ color: COLOR }}>Why cashback rates are a lie</Link>{" "}
        ·{" "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe card picker</Link>{" "}
        ·{" "}
        <Link href="/stack-builder" style={{ color: COLOR }}>Card stack builder</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison site. Reward rates and caps listed reflect publicly available bank terms as of June 2026 and may change. Always verify current terms at your bank's website before applying. We do not receive commission from card issuers for editorial coverage.
      </footer>
    </main>
    </>
  );
}
