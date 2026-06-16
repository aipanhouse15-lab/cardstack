import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for International Spending in India (June 2026)",
  description: "That 3.5% forex markup is costing you ₹3,500 for every ₹1 lakh you spend abroad. Here is how to stop paying it.",
  alternates: { canonical: "/best/credit-card-for-international-spending" },
  openGraph: {
    title: "Best Credit Card for International Spending in India (June 2026)",
    description: "That 3.5% forex markup is costing you ₹3,500 for every ₹1 lakh you spend abroad. Here is how to stop paying it.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-international-spending
// Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

// --- SVG Components ---

function ForexMarkupExplainer() {
  return (
    <svg
      viewBox="0 0 680 318"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing how forex markup cost adds up on ₹1 lakh of international spending"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="230" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">What 3.5% Forex Markup Actually Costs You</text>
      {[
        { label: "₹50,000 abroad", at35: "₹1,750", atZero: "₹0", saved: "₹1,750" },
        { label: "₹1,00,000 abroad", at35: "₹3,500", atZero: "₹0", saved: "₹3,500" },
        { label: "₹3,00,000 abroad", at35: "₹10,500", atZero: "₹0", saved: "₹10,500" },
        { label: "₹5,00,000 abroad", at35: "₹17,500", atZero: "₹0", saved: "₹17,500" },
      ].map((r, i) => (
        <g key={i}>
          <text x="30" y={70 + i * 38} fontSize="12" fontWeight="600" fill="var(--text)">{r.label}</text>
          <rect x="210" y={54 + i * 38} width="120" height="22" rx="4" fill="var(--raise)" opacity="0.15" />
          <text x="270" y={70 + i * 38} textAnchor="middle" fontSize="12" fill="#ef4444" fontWeight="700">{r.at35}</text>
          <rect x="350" y={54 + i * 38} width="120" height="22" rx="4" fill="#22c55e" opacity="0.15" />
          <text x="410" y={70 + i * 38} textAnchor="middle" fontSize="12" fill="#22c55e" fontWeight="700">{r.atZero}</text>
          <text x="520" y={70 + i * 38} fontSize="12" fill={COLOR} fontWeight="700">Save {r.saved}</text>
        </g>
      ))}
      <text x="270" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">Normal Card (3.5%)</text>
      <text x="410" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="#22c55e">Zero Forex Card</text>
      <text x="340" y="220" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Forex markup is not a government tax. It is a bank fee. Zero-forex cards simply waive it.</text>
    </svg>
  );
}

function CardSegmentTable() {
  const segments = [
    { segment: "Budget (under ₹50K trip)", card: "IDFC FIRST WOW", forex: "0%", fee: "Free", why: "Zero forex, free card, keeps costs minimal" },
    { segment: "Mid-range (₹50K-2L trip)", card: "Scapia Federal", forex: "0%", fee: "Free", why: "Zero forex + 4% on travel bookings" },
    { segment: "Premium (₹2L+ trip)", card: "ICICI Emeralde", forex: "0%", fee: "₹12,000", why: "Zero forex + unlimited lounge + 2% intl rewards" },
    { segment: "Business Traveler", card: "Axis Magnus", forex: "3.5%", fee: "₹12,500 (invite)", why: "Unlimited PP lounge, accept the forex as cost" },
  ];
  return (
    <svg
      viewBox="0 0 680 368"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table recommending best international credit cards by travel budget segment"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="250" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Best Card by Travel Budget Segment</text>
      {["Traveler Type", "Card", "Forex", "Fee", "Why"].map((h, i) => (
        <text key={h} x={[20, 175, 335, 400, 480][i]} y="48" fontSize="10.5" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="12" y1="54" x2="668" y2="54" stroke="var(--border)" strokeWidth="1" />
      {segments.map((r, i) => (
        <g key={i}>
          <rect x="12" y={58 + i * 44} width="656" height="42" rx="3" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.04" : "1"} />
          <text x="20" y={84 + i * 44} fontSize="10.5" fill="var(--text)">{r.segment}</text>
          <text x="175" y={84 + i * 44} fontSize="10.5" fontWeight="600" fill={COLOR}>{r.card}</text>
          <text x="335" y={84 + i * 44} fontSize="10.5" fill={r.forex === "0%" ? "#22c55e" : "#ef4444"} fontWeight="700">{r.forex}</text>
          <text x="400" y={84 + i * 44} fontSize="10.5" fill="var(--text-muted)">{r.fee}</text>
          <text x="480" y={84 + i * 44} fontSize="9.5" fill="var(--text-muted)">{r.why}</text>
        </g>
      ))}
    </svg>
  );
}

function DCCWarningDiagram() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram explaining Dynamic Currency Conversion trap and how to avoid it abroad"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The DCC Trap: Always Pay in Local Currency</text>
      {/* DCC path */}
      <rect x="20" y="50" width="150" height="50" rx="8" fill="var(--raise)" opacity="0.12" stroke="#ef4444" strokeWidth="1.2" />
      <text x="95" y="71" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ef4444">Pay in INR</text>
      <text x="95" y="87" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(DCC chosen)</text>
      <text x="198" y="79" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="215" y="50" width="170" height="50" rx="8" fill="var(--raise)" opacity="0.22" />
      <text x="300" y="71" textAnchor="middle" fontSize="10.5" fill="var(--text)">Merchant converts at</text>
      <text x="300" y="85" textAnchor="middle" fontSize="10.5" fill="#ef4444" fontWeight="700">their rate (1-3% markup)</text>
      <text x="402" y="79" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="420" y="50" width="240" height="50" rx="8" fill="var(--raise)" opacity="0.12" stroke="#ef4444" strokeWidth="1.2" />
      <text x="540" y="71" textAnchor="middle" fontSize="10.5" fill="#ef4444" fontWeight="700">You pay INR + DCC fee</text>
      <text x="540" y="85" textAnchor="middle" fontSize="10" fill="var(--text-muted)">PLUS your bank's forex markup</text>
      {/* Good path */}
      <rect x="20" y="130" width="150" height="50" rx="8" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.2" />
      <text x="95" y="151" textAnchor="middle" fontSize="11" fontWeight="700" fill="#22c55e">Pay in local currency</text>
      <text x="95" y="167" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(correct choice)</text>
      <text x="198" y="159" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="215" y="130" width="170" height="50" rx="8" fill="#22c55e" opacity="0.22" />
      <text x="300" y="151" textAnchor="middle" fontSize="10.5" fill="var(--text)">Your bank converts at</text>
      <text x="300" y="165" textAnchor="middle" fontSize="10.5" fill="#22c55e" fontWeight="700">interbank + your markup</text>
      <text x="402" y="159" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="420" y="130" width="240" height="50" rx="8" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.2" />
      <text x="540" y="151" textAnchor="middle" fontSize="10.5" fill="#22c55e" fontWeight="700">Only your card's markup</text>
      <text x="540" y="165" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(0% on zero-forex cards)</text>
    </svg>
  );
}

function ZeroForexComparisonChart() {
  return (
    <svg
      viewBox="0 0 680 242"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison chart of forex markup rates across major Indian credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="220" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Forex Markup Rate by Card (June 2026)</text>
      {[
        { card: "IDFC FIRST WOW", markup: 0, label: "0%" },
        { card: "Scapia Federal", markup: 0, label: "0%" },
        { card: "ICICI Emeralde", markup: 0, label: "0%" },
        { card: "OneCard Metal", markup: 1, label: "1%" },
        { card: "Axis Atlas", markup: 3.5, label: "3.5%" },
        { card: "Most HDFC Cards", markup: 3.5, label: "3.5%" },
      ].map((item, i) => {
        const barWidth = item.markup === 0 ? 4 : (item.markup / 3.5) * 300;
        const barColor = item.markup === 0 ? "#22c55e" : item.markup <= 1 ? "#f59e0b" : "#ef4444";
        return (
          <g key={i}>
            <text x="170" y={66 + i * 26} fontSize="11" textAnchor="end" fill="var(--text)">{item.card}</text>
            <rect x="178" y={52 + i * 26} width={barWidth || 6} height="18" rx="3" fill={barColor} opacity="0.85" />
            <text x={184 + barWidth} y={66 + i * 26} fontSize="11" fontWeight="700" fill={barColor}>{item.label}</text>
          </g>
        );
      })}
      <text x="340" y="208" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Zero forex markup = zero bank fee on international transactions. The exchange rate is still market rate.</text>
    </svg>
  );
}

function ATMVsCardChart() {
  return (
    <svg
      viewBox="0 0 680 262"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cost comparison of withdrawing cash at ATM abroad vs paying directly with card"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="180" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">ATM Abroad vs Card: What Actually Costs More?</text>
      {[
        { method: "ATM (normal card)", cost: "3.5% forex + ₹150-400 withdrawal fee + ATM fee", verdict: "Most expensive" },
        { method: "ATM (zero-forex card)", cost: "0% forex + ₹150-300 withdrawal fee", verdict: "Medium cost" },
        { method: "Card payment (normal)", cost: "3.5% forex markup only", verdict: "Cheaper than ATM" },
        { method: "Card payment (zero-forex)", cost: "No fees at all", verdict: "Cheapest option" },
      ].map((r, i) => (
        <g key={i}>
          <text x="20" y={62 + i * 30} fontSize="11" fontWeight="600" fill="var(--text)">{r.method}</text>
          <text x="210" y={62 + i * 30} fontSize="10.5" fill="var(--text-muted)">{r.cost}</text>
          <rect x="595" y={48 + i * 30} width="72" height="20" rx="4" fill={i >= 2 ? "#22c55e" : "#ef4444"} opacity="0.15" />
          <text x="631" y={62 + i * 30} textAnchor="middle" fontSize="10" fontWeight="700" fill={i >= 2 ? "#22c55e" : "#ef4444"}>{r.verdict}</text>
        </g>
      ))}
      <text x="340" y="170" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Always prefer card payment abroad over ATM cash withdrawal when possible.</text>
    </svg>
  );
}

export default function BestCreditCardForInternationalSpending() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card has zero forex markup in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of June 2026, three cards offer zero forex markup: IDFC FIRST WOW (completely free card), Scapia Federal Card (free), and ICICI Emeralde (₹12,000/year). OneCard Metal has a low 1% forex markup. Most other Indian credit cards charge 3-3.5% forex markup on international transactions.",
        },
      },
      {
        "@type": "Question",
        name: "What is forex markup on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Forex markup is a bank-imposed fee charged when you make a transaction in a foreign currency. It is typically 3-3.5% of the transaction amount in India. This is not a government tax or RBI-mandated fee. It is purely a bank revenue mechanism. Zero-forex cards simply choose not to charge this fee.",
        },
      },
      {
        "@type": "Question",
        name: "Is IDFC FIRST WOW really free with zero forex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. IDFC FIRST WOW is a lifetime-free credit card with zero forex markup on international transactions. It also has the unique feature of reward points that never expire. The trade-off is that reward rates on non-international categories are modest.",
        },
      },
      {
        "@type": "Question",
        name: "What is DCC or Dynamic Currency Conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dynamic Currency Conversion (DCC) is when a foreign merchant or ATM offers to convert your payment into Indian rupees at the point of sale. This is almost always a trap. The merchant's conversion rate is typically worse than your bank's rate, and you still pay your bank's forex markup on top. Always choose to pay in the local currency abroad.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use my Indian credit card at ATMs abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but it is expensive. Most banks charge 3.5% forex markup plus a cash advance fee of ₹150-400 per withdrawal, plus the ATM operator's fee. Even with a zero-forex card, you still pay the cash advance fee. Card payments are almost always cheaper than ATM withdrawals abroad.",
        },
      },
      {
        "@type": "Question",
        name: "Does Scapia Federal Card work in all countries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scapia Federal Card is a Visa card and works in all countries where Visa is accepted, which includes virtually all international destinations. The zero forex markup applies in all foreign currencies. The Scapia app's 4% travel discount applies to bookings made through the Scapia app before your trip.",
        },
      },
      {
        "@type": "Question",
        name: "Is ICICI Emeralde worth ₹12,000 per year for international travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ICICI Emeralde makes financial sense for travelers who take multiple international trips per year and spend over ₹5 lakh internationally. The zero forex markup alone saves ₹17,500 on ₹5 lakh of international spend, which more than covers the ₹12,000 annual fee. You also get unlimited lounge access and 2% on international transactions.",
        },
      },
      {
        "@type": "Question",
        name: "What if I lose my card abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always carry two cards when traveling internationally. An emergency card replacement can take 3-7 business days even for premium cards. Keep one card in your wallet and one secured separately. Notify your bank before traveling internationally to avoid fraud blocks on legitimate transactions.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for International Spending in India (June 2026): Zero Forex, No Hidden Fees",
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
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Credit Card for International Spending",
        item: "https://assurefintech.com/best/credit-card-for-international-spending",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for International Spending in India (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "32px 22px 48px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "var(--text)",
        lineHeight: 1.6,
      }}
    >
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for International Spending
      </nav>

      <div
        style={{
          display: "inline-block",
          background: COLOR,
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.07em",
          padding: "3px 10px",
          borderRadius: 4,
          marginBottom: 14,
          textTransform: "uppercase",
        }}
      >
        International Cards
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        That 3.5% forex markup is costing you ₹3,500 for every ₹1 lakh you spend abroad. Here is how to stop paying it.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <ForexMarkupExplainer />

      {/* Section 1: What is forex markup */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          What Is Forex Markup and Why Do Banks Charge It?
        </h2>
        <p>
          When you swipe your card in Thailand or London, your bank converts the local currency to Indian rupees. The conversion uses the interbank exchange rate, but your bank adds a markup on top of that rate. This markup, typically 3 to 3.5% in India, is pure bank revenue with no regulatory requirement behind it.
        </p>
        <p>
          This is not a GST. It is not an RBI-mandated fee. It is not a government levy. It is a fee that Indian banks charge because they can, and because most customers do not notice it buried in their statement. On ₹1 lakh of international spending, you silently pay ₹3,500 to your bank for the privilege of using your own money abroad.
        </p>
        <p>
          Zero-forex cards are simply banks that have decided to waive this fee, either to attract a specific customer segment or as part of a broader card proposition. IDFC FIRST Bank and Scapia have built their international card positioning entirely on this waiver. It is a genuine differentiator, not a marketing trick.
        </p>
      </section>

      <ZeroForexComparisonChart />

      {/* Top picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Top Cards for International Spending</h2>

        {[
          {
            rank: "1",
            name: "IDFC FIRST WOW",
            tag: "Best Zero-Forex Free Card",
            fee: "Free (lifetime)",
            forex: "0%",
            reward: "Rewards never expire",
            best: "Anyone wanting zero-cost international card",
            slug: "idfc-first-wow",
          },
          {
            rank: "2",
            name: "Scapia Federal Card",
            tag: "Best Free Card for Travelers",
            fee: "Free",
            forex: "0%",
            reward: "4% on Scapia travel bookings",
            best: "Budget to mid-range international travelers",
            slug: "scapia-federal",
          },
          {
            rank: "3",
            name: "ICICI Emeralde",
            tag: "Best Premium International Card",
            fee: "₹12,000/yr",
            forex: "0%",
            reward: "2% on international spends, unlimited lounge",
            best: "Heavy international travelers (5L+ annual intl spend)",
            slug: "icici-emeralde",
          },
          {
            rank: "4",
            name: "OneCard Metal",
            tag: "Best Low-Forex Card",
            fee: "Free",
            forex: "1%",
            reward: "5X on top 2 categories",
            best: "Those who want a premium metal card with low forex",
            slug: "onecard-metal",
          },
        ].map((card) => (
          <div
            key={card.rank}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "18px 22px",
              marginBottom: 14,
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              background: "var(--raise)",
            }}
          >
            <div
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: "50%",
                background: COLOR,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 15,
                flexShrink: 0,
              }}
            >
              {card.rank}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                <Link href={`/cards/${card.slug}`} style={{ fontWeight: 700, fontSize: 16, color: COLOR }}>
                  {card.name}
                </Link>
                <span
                  style={{
                    background: COLOR + "18",
                    color: COLOR,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  {card.tag}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Fee:</span> {card.fee} |{" "}
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Forex:</span>{" "}
                <span style={{ color: card.forex === "0%" ? "#22c55e" : card.forex === "1%" ? "#f59e0b" : "#ef4444", fontWeight: 700 }}>
                  {card.forex}
                </span>{" "}
                | <span style={{ fontWeight: 600, color: "var(--text)" }}>Reward:</span> {card.reward}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Best for:</span> {card.best}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CardSegmentTable />

      {/* Section 2: IDFC WOW deep dive */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          IDFC FIRST WOW: The Quiet Hero of International Cards
        </h2>
        <p>
          IDFC FIRST Bank launched WOW as a secured card (against a fixed deposit) but it behaves like a premium product in the category that matters most to international travelers: zero forex markup and no expiry on reward points. For a card that is completely free and does not even require an income check, this is remarkable.
        </p>
        <p>
          The reward rates on WOW are not extraordinary for domestic spending, and that is fine. This card earns its place in your wallet specifically for international use, where it saves you ₹3,500 per ₹1 lakh automatically. Pair it with a strong domestic rewards card for daily spending in India, and you have covered both use cases without paying a single rupee in annual fees.
        </p>
        <p>
          One detail worth knowing: IDFC FIRST WOW reward points never expire. Most Indian credit card reward points expire in 2-3 years. If you travel infrequently and accumulate points slowly, WOW is forgiving in a way most cards are not.
        </p>
      </section>

      {/* Section 3: DCC trap */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The DCC Trap: A Fee That Catches Even Experienced Travelers
        </h2>
        <p>
          Dynamic Currency Conversion (DCC) is the practice where a foreign merchant, hotel, or ATM offers to convert your bill into Indian rupees at the checkout. It sounds convenient. It is actually one of the most reliably bad financial decisions a traveler can make.
        </p>
        <p>
          When you accept DCC, the merchant applies their own (poor) exchange rate. You then also pay your bank's forex markup on top of the already-inflated INR amount. You get hit twice. The combined cost can reach 4-7% above the actual mid-market rate. Even on a zero-forex card, accepting DCC removes most of your advantage because the merchant rate is usually 3-5% worse than the interbank rate.
        </p>
        <DCCWarningDiagram />
        <p>
          The rule is simple: when asked "Pay in INR or local currency?", always choose local currency. If a terminal defaults to INR and does not ask, look for a "change currency" or "decline DCC" option. Some terminals in tourist-heavy areas in Thailand, UAE, and Europe are configured to default to DCC precisely because most tourists do not notice.
        </p>
      </section>

      {/* Section 4: ATM abroad */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          ATM Abroad: When to Use It, When to Avoid It
        </h2>
        <p>
          Cash is sometimes unavoidable when traveling internationally, especially in markets like Japan, Vietnam, and parts of Eastern Europe where cards are less universally accepted. But the cost of withdrawing cash abroad with a standard Indian credit card is significant.
        </p>
        <p>
          Most Indian banks charge a cash advance fee of ₹150 to ₹400 per ATM withdrawal, on top of the 3.5% forex markup, plus the local ATM operator's own fee. On a ₹5,000 equivalent withdrawal, you might effectively pay ₹700 to ₹1,000 in total fees. That is a 14-20% cost of access.
        </p>
        <ATMVsCardChart />
        <p>
          With a zero-forex card, you eliminate the forex markup but still pay the cash advance fee. The practical recommendation: minimize cash withdrawals abroad, use card payment wherever accepted, and when you must withdraw cash, do it in larger amounts to minimize per-transaction fees. Withdraw ₹15,000 equivalent once rather than ₹5,000 three times.
        </p>
      </section>

      {/* Section 5: The two-card strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Two-Card International Strategy
        </h2>
        <p>
          The optimal approach to international travel does not require one perfect card. It requires two focused cards: a miles card for pre-trip bookings (flights, hotels) and a zero-forex card for in-country daily spending. This covers both value generation and cost minimization without compromise.
        </p>
        <p>
          A practical example: use Axis Atlas to book your flights to Singapore (earning 5 EDGE Miles per ₹100 on the ticket purchase). Then use Scapia Federal or IDFC FIRST WOW for every transaction in Singapore, paying zero forex on hotel check-ins, restaurants, Grab rides, and shopping. You capture miles on the big purchase and pay zero overhead on everything else.
        </p>
        <p>
          Use our <Link href="/stack-builder">Stack Builder</Link> to model this combination against your actual travel budget and spending pattern. The tool calculates net annual return including fees paid and rewards earned.
        </p>
        <p>
          Also read: <Link href="/blog/international-spending-card-strategy-india">Complete International Card Strategy for Indian Travelers</Link> and <Link href="/best/credit-card-for-travel">Best Travel Credit Cards India 2026</Link> for the miles card side of this equation.
        </p>
      </section>

      {/* What to do */}
      <section
        style={{
          background: COLOR + "0e",
          border: `1px solid ${COLOR}28`,
          borderRadius: 10,
          padding: "22px 24px",
          marginBottom: 40,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>What to Do Before Your Next International Trip</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Get IDFC FIRST WOW or Scapia Federal now</strong> if you do not already have a zero-forex card. Both are free with online applications.
          </li>
          <li>
            <strong>Activate international transactions</strong> on your card via the bank's mobile app before departing. Most banks disable international use by default.
          </li>
          <li>
            <strong>Always decline DCC</strong> at every terminal abroad. Pay in local currency every single time.
          </li>
          <li>
            <strong>Avoid cash advances</strong> unless absolutely necessary. When you must withdraw, withdraw larger amounts to minimize per-transaction fees.
          </li>
          <li>
            <strong>Carry two cards on every trip.</strong> One zero-forex card for spending and one backup in a separate bag or hotel safe.
          </li>
          <li>
            <strong>If you spend over ₹5L internationally per year,</strong> evaluate ICICI Emeralde. The zero forex plus lounge access plus 2% reward will pay back the ₹12,000 fee multiple times over.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Use <Link href="/smart-swipe">Smart Swipe</Link> to enter your international spend estimate and get a personalized card recommendation in under 2 minutes.
        </p>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Frequently Asked Questions</h2>
        {faq.mainEntity.map((item, i) => (
          <details
            key={i}
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: 16,
              marginBottom: 16,
            }}
          >
            <summary style={{ fontWeight: 600, fontSize: 15, cursor: "pointer", paddingTop: 4, color: "var(--text)" }}>
              {item.name}
            </summary>
            <p style={{ marginTop: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </p>
          </details>
        ))}
      </section>

      {/* Related */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Related Reading</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            <Link href="/best/credit-card-for-travel">Best Travel Credit Cards India 2026</Link>
          </li>
          <li>
            <Link href="/cards/idfc-first-wow">IDFC FIRST WOW Card Full Review</Link>
          </li>
          <li>
            <Link href="/cards/scapia-federal">Scapia Federal Card Full Review</Link>
          </li>
          <li>
            <Link href="/blog/forex-markup-india-guide">Forex Markup Guide: How Indian Banks Make Money on Your Trips</Link>
          </li>
          <li>
            <Link href="/stack-builder">Build Your International Travel Card Stack</Link>
          </li>
        </ul>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          fontSize: 12,
          color: "var(--text-muted)",
          lineHeight: 1.6,
        }}
      >
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial platform and does not hold a banking license. Nothing on this page constitutes financial advice regulated under SEBI or RBI. Forex markup rates, reward structures, and card terms change frequently. Always verify current terms with the issuing bank before applying or traveling. Some links may earn us a referral commission that does not affect our editorial stance.
      </footer>
    </main>
    </>
  );
}
