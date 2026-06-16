import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Amazon Pay ICICI Card: The Complete Power User Guide",
  description: "Power user checklist
        1. In the Amazon app, set default payment to your Amazon Pay ICICI card, not Amazon Pay balance. This ensures every purchase ear...",
  alternates: { canonical: "/blog/amazon-hack" },
  openGraph: {
    title: "Amazon Pay ICICI Card: The Complete Power User Guide",
    description: "Power user checklist
        1. In the Amazon app, set default payment to your Amazon Pay ICICI card, not Amazon Pay balance. This ensures every purchase ear...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/amazon-pay-icici-card-power-guide
// Template: specific use-case deep dive / power user guide
// Color: #ea580c | Updated: June 4, 2026

const COLOR = "#ea580c";
const UPDATED = "June 4, 2026";

const SvgRewardTiersChart = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Tier chart showing Amazon Pay ICICI card reward rates by spend category" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--surface, #f8fafc)" rx="10" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Amazon Pay ICICI: Reward Rate by Spend Category</text>
    {[
      { label: "Amazon.in (Prime)", pct: 5, color: COLOR, x: 60, note: "Direct cashback" },
      { label: "Amazon.in (non-Prime)", pct: 3, color: "#f97316", x: 200, note: "Direct cashback" },
      { label: "Amazon Pay merchants", pct: 2, color: "#fb923c", x: 340, note: "Direct cashback" },
      { label: "All other online", pct: 1, color: "#94a3b8", x: 480, note: "Direct cashback" },
      { label: "Fuel surcharge", pct: 0, color: "#64748b", x: 620, note: "No waiver" },
    ].map(({ label, pct, color, x, note }) => {
      const barH = pct === 0 ? 4 : pct * 32;
      const barY = 200 - barH;
      return (
        <g key={x}>
          <rect x={x} y={barY} width="80" height={barH === 0 ? 4 : barH} fill={pct === 0 ? "var(--border)" : color} rx="4" />
          <text x={x + 40} y={barY - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill={pct === 0 ? "var(--text-muted)" : "var(--text)"}>{pct}%</text>
          <text x={x + 40} y="220" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{label.split(" ").slice(0, 2).join(" ")}</text>
          <text x={x + 40} y="233" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{label.split(" ").slice(2).join(" ")}</text>
          <text x={x + 40} y="248" textAnchor="middle" fontSize="9" fill={color} fontStyle="italic">{note}</text>
        </g>
      );
    })}
    <line x1="40" y1="200" x2="680" y2="200" stroke="var(--border)" strokeWidth="1" />
    <text x="20" y="204" fontSize="9" fill="var(--text-muted)">0%</text>
  </svg>
);

const SvgAnnualCashbackTable = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Table showing annual cashback earned on Amazon Pay ICICI at Rs 2 lakh yearly Amazon spend" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--surface, #f8fafc)" rx="10" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">₹2,00,000 Amazon Annual Spend: The Real Math</text>
    <rect x="20" y="38" width="680" height="32" fill={COLOR} rx="4" />
    <text x="120" y="59" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Spend Mix</text>
    <text x="280" y="59" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Amount</text>
    <text x="420" y="59" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Cashback Rate</text>
    <text x="570" y="59" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Cashback Earned</text>
    {[
      ["Amazon.in orders (Prime)", "₹1,40,000", "5%", "₹7,000"],
      ["Amazon Pay merchant", "₹40,000", "2%", "₹800"],
      ["Other online purchases", "₹20,000", "1%", "₹200"],
      ["Annual card fee", "", "", "₹0"],
      ["Total", "₹2,00,000", "", "₹8,000"],
    ].map(([type, amount, rate, cashback], i) => (
      <g key={i}>
        <rect x="20" y={72 + i * 28} width="680" height="28" fill={i === 4 ? "#fef3c7" : i % 2 === 0 ? "white" : "var(--surface, #f8fafc)"} />
        <text x="120" y={91 + i * 28} textAnchor="middle" fontSize={i === 4 ? "12" : "11"} fontWeight={i === 4 ? "800" : "400"} fill="var(--text)">{type}</text>
        <text x="280" y={91 + i * 28} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{amount}</text>
        <text x="420" y={91 + i * 28} textAnchor="middle" fontSize="11" fill="var(--text)">{rate}</text>
        <text x="570" y={91 + i * 28} textAnchor="middle" fontSize={i === 4 ? "14" : "12"} fontWeight={i === 4 ? "800" : "700"} fill={i === 4 ? COLOR : "var(--text)"}>{cashback}</text>
      </g>
    ))}
  </svg>
);

const SvgSaleStackingGuide = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Guide showing when card rewards stack with Amazon sale offers and when they do not" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--surface, #f8fafc)" rx="10" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Amazon Sale + Card Rewards: When It Stacks, When It Does Not</text>
    {/* Stacks */}
    <rect x="30" y="44" width="300" height="170" rx="8" fill="white" stroke="#16a34a" strokeWidth="2" />
    <rect x="30" y="44" width="300" height="34" rx="8" fill="#16a34a" />
    <rect x="30" y="62" width="300" height="16" fill="#16a34a" />
    <text x="180" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">These Stack WITH Card Rewards</text>
    <text x="180" y="102" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Bank offer discounts</text>
    <text x="180" y="118" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(e.g., 10% off from ICICI separately)</text>
    <text x="180" y="145" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">No-cost EMI (separate)</text>
    <text x="180" y="161" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(interest hidden in price, but cashback still earned)</text>
    <text x="180" y="188" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Lightning deal discounts</text>
    <text x="180" y="204" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(price reduction, cashback on discounted price)</text>
    {/* Does not stack */}
    <rect x="390" y="44" width="300" height="170" rx="8" fill="white" stroke="#ef4444" strokeWidth="2" />
    <rect x="390" y="44" width="300" height="34" rx="8" fill="#ef4444" />
    <rect x="390" y="62" width="300" height="16" fill="#ef4444" />
    <text x="540" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">These DO NOT Stack With Rewards</text>
    <text x="540" y="102" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Amazon Pay promotional offers</text>
    <text x="540" y="118" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(coupon code offers may exclude cashback)</text>
    <text x="540" y="145" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Gift card purchases</text>
    <text x="540" y="161" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(buying Amazon gift cards earns 0 rewards)</text>
    <text x="540" y="188" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Amazon Pay balance top-up</text>
    <text x="540" y="204" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(loading wallet from card earns 0 cashback)</text>
  </svg>
);

const SvgEmiHiddenCostBreakdown = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Diagram showing how no-cost EMI on Amazon hides interest in the product price" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--surface, #f8fafc)" rx="10" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Amazon No-Cost EMI: How the Interest is Hidden in the Price</text>
    <rect x="30" y="48" width="200" height="120" rx="8" fill="white" stroke="var(--border)" strokeWidth="1.5" />
    <text x="130" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Listed price</text>
    <text x="130" y="100" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--text)">₹24,000</text>
    <text x="130" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">shown on product page</text>
    <text x="130" y="140" textAnchor="middle" fontSize="10" fill={COLOR}>You earn 5% = ₹1,200</text>
    <text x="250" y="113" textAnchor="middle" fontSize="22" fill="var(--text-muted)">vs</text>
    <rect x="280" y="48" width="200" height="120" rx="8" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
    <text x="380" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Pay full price</text>
    <text x="380" y="88" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--text)">₹24,000</text>
    <text x="380" y="108" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Same cashback</text>
    <text x="380" y="126" textAnchor="middle" fontSize="10" fill="var(--text-muted)">No EMI markup</text>
    <text x="380" y="144" textAnchor="middle" fontSize="10" fill={COLOR}>Pay full now, save ₹0 vs EMI</text>
    <rect x="500" y="48" width="200" height="120" rx="8" fill="white" stroke="#ef4444" strokeWidth="1.5" />
    <text x="600" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">No-cost EMI price</text>
    <text x="600" y="88" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--text)">₹24,720</text>
    <text x="600" y="108" textAnchor="middle" fontSize="10" fill="var(--text-muted)">+₹720 markup = 3% interest</text>
    <text x="600" y="126" textAnchor="middle" fontSize="10" fill="var(--text-muted)">spread across EMI amount</text>
    <text x="600" y="144" textAnchor="middle" fontSize="10" fill="#ef4444">Cashback on ₹24,720 = ₹1,236</text>
  </svg>
);

const SvgPayLaterVsCard = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Comparison between Amazon Pay Later and Amazon Pay ICICI credit card for purchases on Amazon" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--surface, #f8fafc)" rx="10" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Amazon Pay Later vs Amazon Pay ICICI Card: Which Wins?</text>
    <rect x="30" y="42" width="310" height="112" rx="8" fill="white" stroke={COLOR} strokeWidth="2" />
    <text x="185" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--text)">Amazon Pay ICICI Card</text>
    <text x="50" y="92" fontSize="11" fill={COLOR}>✓</text>
    <text x="64" y="92" fontSize="11" fill="var(--text)">5% cashback on Amazon (Prime)</text>
    <text x="50" y="110" fontSize="11" fill={COLOR}>✓</text>
    <text x="64" y="110" fontSize="11" fill="var(--text)">No annual fee, no credit cost</text>
    <text x="50" y="128" fontSize="11" fill={COLOR}>✓</text>
    <text x="64" y="128" fontSize="11" fill="var(--text)">30-50 day free credit window</text>
    <text x="50" y="146" fontSize="11" fill="#ef4444">✗</text>
    <text x="64" y="146" fontSize="11" fill="var(--text-muted)">Requires credit card eligibility</text>
    <rect x="380" y="42" width="310" height="112" rx="8" fill="white" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="535" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--text)">Amazon Pay Later</text>
    <text x="400" y="92" fontSize="11" fill="#16a34a}>✓</text>
    <text x="414" y="92" fontSize="11" fill="var(--text)">Easy KYC, instant credit line</text>
    <text x="400" y="110" fontSize="11" fill="#16a34a">✓</text>
    <text x="414" y="110" fontSize="11" fill="var(--text)">Good for thin credit profile users</text>
    <text x="400" y="128" fontSize="11" fill="#ef4444">✗</text>
    <text x="414" y="128" fontSize="11" fill="var(--text-muted)">0% cashback earned on purchases</text>
    <text x="400" y="146" fontSize="11" fill="#ef4444">✗</text>
    <text x="414" y="146" fontSize="11" fill="var(--text-muted)">Interest if not paid in full monthly</text>
  </svg>
);

const SvgGiftCardTrap = () => (
  <svg viewBox="0 0 720 160" role="img" aria-label="Warning diagram showing gift card purchases on credit cards earn zero reward points" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--surface, #f8fafc)" rx="10" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">The Gift Card Trap: Zero Rewards on Amazon Gift Cards</text>
    <rect x="40" y="44" width="300" height="96" rx="8" fill="white" stroke="#ef4444" strokeWidth="2" />
    <text x="190" y="72" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Buy ₹10,000 Amazon Gift Card</text>
    <text x="190" y="95" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ef4444">₹0 cashback</text>
    <text x="190" y="118" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Gift card purchases excluded from rewards</text>
    <text x="190" y="133" textAnchor="middle" fontSize="11" fill="var(--text-muted)">by all major banks including ICICI</text>
    <rect x="380" y="44" width="300" height="96" rx="8" fill="white" stroke="#16a34a" strokeWidth="2" />
    <text x="530" y="72" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Buy ₹10,000 Product on Amazon</text>
    <text x="530" y="95" textAnchor="middle" fontSize="22" fontWeight="800" fill={COLOR}>₹500 cashback</text>
    <text x="530" y="118" textAnchor="middle" fontSize="11" fill="var(--text-muted)">5% on direct Amazon.in purchase</text>
    <text x="530" y="133" textAnchor="middle" fontSize="11" fill="var(--text-muted)">credited to Amazon Pay balance</text>
  </svg>
);

export default function BlogAmazonHack() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI give 5% cashback on all Amazon purchases?",
        acceptedAnswer: { "@type": "Answer", text: "Prime members get 5% cashback on Amazon.in purchases. Non-Prime members get 3%. The cashback applies to eligible product purchases only. Gift card purchases, Amazon Pay balance top-ups, wallet loads, and certain service payments are excluded. The 5% is genuinely uncapped, meaning there is no monthly or annual cashback limit." }
      },
      {
        "@type": "Question",
        name: "Does the Amazon Pay ICICI card earn rewards during the Great Indian Festival or Prime Day?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, the 5% cashback continues to apply during sale events since it is a card-level reward, not an Amazon-funded promotion. However, if Amazon runs a separate 'extra 10% cashback with ICICI card' bank offer during a sale, read the terms carefully as some offer-based cashbacks may be separate from and in addition to the regular 5%, while others replace the base cashback for that transaction." }
      },
      {
        "@type": "Question",
        name: "What happens if I use Amazon Pay balance to pay for my order instead of the credit card directly?",
        acceptedAnswer: { "@type": "Answer", text: "If you top up your Amazon Pay balance using the Amazon Pay ICICI credit card and then use that balance to pay, you earn zero cashback. The cashback is triggered only when the card is used directly as the payment method at checkout. Loading a wallet using the card is a different transaction type and earns nothing." }
      },
      {
        "@type": "Question",
        name: "Is no-cost EMI on Amazon actually free?",
        acceptedAnswer: { "@type": "Answer", text: "Not exactly. The merchant pays a fee to the bank and card network for no-cost EMI, and they typically recoup this by slightly inflating the EMI price versus the cash price. If you check a product carefully, the 'EMI price' is sometimes 1-3% higher than the 'pay now' price. The cashback you earn on the EMI purchase is calculated on the higher EMI amount. You are still earning cashback, but on an inflated base." }
      },
      {
        "@type": "Question",
        name: "Is Amazon Pay Later better than Amazon Pay ICICI card?",
        acceptedAnswer: { "@type": "Answer", text: "They serve different users. Amazon Pay Later is a quick credit line for people without a credit card or with a thin credit profile. It requires minimal documentation and gives a small credit limit. The downside is zero cashback earned. The Amazon Pay ICICI card gives 5% cashback, builds your CIBIL score, and has no annual fee, but requires credit card eligibility (income proof, CIBIL check). If you qualify for both, the card wins every time." }
      },
      {
        "@type": "Question",
        name: "Can I use the Amazon Pay ICICI card at stores that accept Amazon Pay QR codes?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, and this earns 2% cashback (the Amazon Pay merchant rate). As Amazon Pay expands its QR network to more offline merchants in India, including some grocery stores and restaurants, this 2% becomes increasingly useful. This is separate from the 5% on Amazon.in and applies when you pay at an Amazon Pay-enabled physical terminal." }
      },
      {
        "@type": "Question",
        name: "Why do gift card purchases on Amazon not earn cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Banks and card networks globally exclude gift card purchases from rewards programs because gift cards can be used to abuse reward systems (e.g., repeatedly buying and reselling gift cards to accumulate cashback). Amazon gift card purchases on the Amazon Pay ICICI card are specifically excluded, and this is stated in the card's MITC document. Always buy the product directly, not via a gift card bought on credit." }
      },
      {
        "@type": "Question",
        name: "How is cashback credited on the Amazon Pay ICICI card?",
        acceptedAnswer: { "@type": "Answer", text: "Cashback is credited directly to your Amazon Pay balance, typically within 2 business days of the transaction. It does not appear as a statement credit reducing your bill. You use it for future Amazon purchases. This means the cashback is sticky to the Amazon ecosystem, which is fine if you buy regularly, but less useful if you want actual cash or universal redemption." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Amazon Pay ICICI Card: The Complete Power User Guide for Heavy Amazon Shoppers",
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
      { "@type": "ListItem", position: 3, name: "Amazon Pay ICICI Card Power Guide", item: "https://assurefintech.com/blog/amazon-pay-icici-card-power-guide" },
    ],
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Amazon Pay ICICI Card Guide
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · AMAZON</div>

      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 14px" }}>
        Amazon Pay ICICI Card: The Complete Power User Guide
      </h1>

      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 16px" }}>
        At ₹2,00,000 in Amazon spend per year, this free card puts ₹10,000 back in your Amazon Pay wallet automatically. But there are traps that can cut your earnings to zero. Here is every one of them.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 9 min read</div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why this card deserves its own guide</h2>
        <p>The Amazon Pay ICICI Bank Credit Card is one of only two genuinely free, genuinely rewarding credit cards in India, the other being IDFC FIRST Classic. No joining fee, no annual fee, no spend condition, and a 5% cashback rate on Amazon.in that is uncapped. For anyone spending ₹8,000 or more per month on Amazon, this card is a non-negotiable addition to their wallet.</p>
        <p>But the details matter. There are specific traps, including the gift card exclusion, wallet top-up zero-earn, and EMI price markup, that quietly cut into what looks like a clean 5% deal. This guide covers all of them.</p>
      </section>

      <SvgRewardTiersChart />

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The card mechanics: what actually earns cashback</h2>
        <p>The tiered cashback structure is straightforward on paper. Prime members earn 5% on Amazon.in, 2% on Amazon Pay merchant transactions, and 1% on all other purchases. Non-Prime members earn 3% on Amazon.in and the same 2% and 1% on the other categories. Cashback is credited to your Amazon Pay balance within 2 business days, no redemption step required.</p>
        <p>The cashback is truly uncapped. Whether you buy a ₹500 book or a ₹1,50,000 laptop on Amazon.in, the 5% applies to the full amount. No monthly ceiling, no annual ceiling, no minimum transaction size.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "20px 0 8px" }}>What the 2% Amazon Pay merchant rate covers</h3>
        <p>Amazon has been expanding its offline merchant network since 2023. By June 2026, Amazon Pay QR code acceptance is present at thousands of local retailers, some pharmacies, and select grocery chains in major Indian cities. When you scan the Amazon Pay QR and pay from your Amazon Pay ICICI card (not from your Amazon Pay balance), you earn 2%.</p>
        <p>This is a meaningful benefit that most cardholders ignore. Set the default payment in the Amazon app to your Amazon Pay ICICI card, not your Amazon Pay balance, to ensure you earn on these offline transactions.</p>
      </section>

      <SvgAnnualCashbackTable />

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Sale events: when rewards stack and when they do not</h2>
        <p>The Amazon Great Indian Festival (usually October) and Prime Day (July) bring additional bank-level offers that are separate from the card's regular 5% cashback. The distinction matters: if Amazon is running a "10% off with ICICI card" bank offer, this applies on top of your 5% cashback in most cases, because it is funded by a different budget. But if the offer says "5% cashback with ICICI card," check whether this is your regular card cashback or an incremental offer.</p>
        <p>During major sales, always check the offer terms on the Amazon app under "Your ICICI Bank Offers" before completing a large purchase. Occasionally, a promotional offer replaces rather than adds to the base reward.</p>
      </section>

      <SvgSaleStackingGuide />

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The no-cost EMI truth</h2>
        <p>Amazon's no-cost EMI is a popular feature, and using your Amazon Pay ICICI card for it is fine. The cashback still applies on the EMI purchase amount. But "no-cost" has a hidden meaning: the merchant inflates the price by approximately 1-3% to cover the bank's EMI processing fee, and this markup is embedded in the EMI price you see.</p>
        <p>The practical implication: for large purchases where you can pay upfront, check whether the "pay now" price is lower than the listed EMI price. If there is a ₹500 gap on a ₹25,000 product, paying cash is better even if your cashback amount increases slightly on the higher EMI-inflated price.</p>
      </section>

      <SvgEmiHiddenCostBreakdown />

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Amazon Pay Later vs the credit card</h2>
        <p>Amazon Pay Later is a buy-now-pay-later product offered by a non-banking financial company. It requires minimal documentation and gives a small credit line for Amazon purchases. The big downside: it earns zero cashback. Using Amazon Pay Later instead of the Amazon Pay ICICI card on a ₹50,000 annual Amazon spend costs you ₹2,500 in foregone cashback.</p>
        <p>Amazon Pay Later makes sense only if you cannot get the credit card due to income constraints or credit history gaps. If you have both available, always use the card for purchases.</p>
      </section>

      <SvgPayLaterVsCard />

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The three traps that kill your cashback</h2>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: "#ef4444" }}>Trap 1: Buying Amazon gift cards</h3>
        <p>This is the single most common way Amazon Pay ICICI cardholders lose cashback. Purchasing an Amazon gift card using the credit card earns zero cashback. Always buy the product directly, not via a gift card as an intermediate step.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: "#ef4444" }}>Trap 2: Loading your Amazon Pay wallet with the card</h3>
        <p>If you top up your Amazon Pay balance using the credit card and then pay with that balance, you earn zero cashback on the purchases. The card must be selected directly as the payment method at checkout for cashback to apply.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: "#ef4444" }}>Trap 3: Using the card at ATMs or for cash transfers</h3>
        <p>Any cash advance using the credit card attracts a 2.5% fee plus 3.5%/month interest from the day of withdrawal. This is standard across all credit cards. Never use the Amazon Pay ICICI card for cash withdrawals.</p>
      </section>

      <SvgGiftCardTrap />

      <section style={{ marginBottom: 32, padding: "20px 24px", background: "#fff7ed", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 8px 8px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px" }}>Power user checklist</h2>
        <p style={{ margin: "0 0 8px" }}>1. In the Amazon app, set default payment to your Amazon Pay ICICI card, not Amazon Pay balance. This ensures every purchase earns cashback automatically.</p>
        <p style={{ margin: "0 0 8px" }}>2. During sale events, screenshot the bank offer terms before checkout so you know exactly what you will earn on large purchases.</p>
        <p style={{ margin: "0 0 8px" }}>3. For purchases above ₹10,000, compare the "pay now" price vs the EMI price. If there is a gap, factor that into your EMI decision.</p>
        <p style={{ margin: "0 0 8px" }}>4. Never buy Amazon gift cards with this card. Never load Amazon Pay balance using this card.</p>
        <p style={{ margin: 0 }}>5. If you spend significantly outside Amazon too, pair this card with a general rewards card. Check <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe</Link> to find the right complement card for your non-Amazon spend.</p>
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
        <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>Reward points vs cashback: which is actually better</Link>{" "}
        ·{" "}
        <Link href="/blog/cashback-rate-is-a-lie" style={{ color: COLOR }}>Why cashback rates are a lie</Link>{" "}
        ·{" "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe card picker</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison site. All cashback rates, EMI terms, and product details are based on publicly available documentation from Amazon and ICICI Bank as of June 2026. Card terms change and Amazon adjusts Prime membership benefits periodically. Verify current cashback rates at icicibank.com before applying. Assure Fintech has no affiliate relationship with Amazon or ICICI Bank.
      </footer>
    </main>
  );
}
