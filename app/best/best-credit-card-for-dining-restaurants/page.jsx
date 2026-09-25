import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Dining and Restaurants in India (September 2026)",
  description: "There are two types of dining rewards in India: food delivery and actual restaurant dining. Most cards treat them very differently, and some popular cards gi...",
  alternates: { canonical: "/best/best-credit-card-for-dining-restaurants" },
  openGraph: {
    title: "Best Credit Card for Dining and Restaurants in India (September 2026)",
    description: "There are two types of dining rewards in India: food delivery and actual restaurant dining. Most cards treat them very differently, and some popular cards gi...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/best-credit-card-for-dining-restaurants
// Updated: September 26, 2026

const COLOR = "#f59e0b";
const UPDATED = "September 26, 2026";
const SOURCES = {
  hsbc: "https://www.hsbc.co.in/credit-cards/how-does-cashback-work/",
  bob: "https://bankofbaroda.bank.in/digital-products/cards/credit-cards/eterna",
  bobcard: "https://www.bobcard.co.in/credit-card-types/eterna",
  swiggy: "https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=%2FPersonal%2FPay%2FCards%2FCredit+Card%2FCredit+Cards%2FSwiggy+HDFC+Bank+Credit+Card%2FT-and-C-Swiggy-HDFC-Bank-Credit-Card.pdf",
  sbi: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/ekit-tncs/simplysave-upi-digi-tnc.pdf",
};

// --- SVG Components ---

function DiningVsDeliveryExplainer() {
  return (
    <svg
      viewBox="0 0 680 204"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram explaining the difference between restaurant dining and food delivery for credit card rewards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Dining vs Delivery: Different MCCs, Different Rewards</text>
      <rect x="20" y="42" width="290" height="100" rx="10" fill={COLOR} opacity="0.22" stroke={COLOR} strokeWidth="1.5" />
      <text x="165" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill={COLOR}>Restaurant Dining</text>
      <text x="165" y="82" textAnchor="middle" fontSize="11" fill="var(--text)">MCC 5812 (Eating Places)</text>
      <text x="165" y="98" textAnchor="middle" fontSize="11" fill="var(--text)">You swipe at the restaurant table</text>
      <text x="165" y="114" textAnchor="middle" fontSize="11" fill="var(--text)">Card earns "dining" category reward</text>
      <text x="165" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>HSBC Live+: 10% (eligible dining)</text>
      <rect x="370" y="42" width="290" height="100" rx="10" fill="#6366f1" opacity="0.22" stroke="#6366f1" strokeWidth="1.5" />
      <text x="515" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6366f1">Food Delivery Apps</text>
      <text x="515" y="82" textAnchor="middle" fontSize="11" fill="var(--text)">Platform and transaction rules apply</text>
      <text x="515" y="98" textAnchor="middle" fontSize="11" fill="var(--text)">You pay via app to aggregator</text>
      <text x="515" y="114" textAnchor="middle" fontSize="11" fill="var(--text)">Card may earn "online" or partner reward</text>
      <text x="515" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6366f1">Swiggy HDFC: 10% on eligible Swiggy app spends</text>
      <text x="340" y="162" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ef4444">Swiggy HDFC's 10% is for eligible Swiggy app transactions, including Dineout via Swiggy.</text>
      <text x="340" y="180" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Always check: is your card's dining rate for restaurants, delivery apps, or both?</text>
    </svg>
  );
}

function DiningRewardRateChart() {
  const cards = [
    { name: "HSBC Live+", rate: 10, cap: "₹1,000/mo shared cap", type: "Restaurant" },
    { name: "Axis ACE", rate: 4, cap: "Swiggy/Zomato/Ola", type: "Delivery" },
    { name: "BOB Eterna", rate: 3.75, cap: "Check points cap", type: "Restaurant" },
    { name: "SBI SimplySAVE", rate: 1.67, cap: "5,000 bonus-points cap/mo", type: "Restaurant" },
  ];
  return (
    <svg
      viewBox="0 0 680 298"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bar chart comparing dining reward rates for major Indian credit cards at restaurants"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="280" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Illustrative dining reward rates (eligibility and caps apply)</text>
      {[0, 2, 4, 6, 8, 10].map((v) => (
        <g key={v}>
          <text x="44" y={228 - v * 18} fontSize="10" fill="var(--text-muted)" textAnchor="end">{v}%</text>
          <line x1="50" y1={228 - v * 18} x2="650" y2={228 - v * 18} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,4" />
        </g>
      ))}
      {cards.map((c, i) => {
        const x = 60 + i * 96;
        const barH = (c.rate / 10) * 180;
        const barColor = c.rate >= 10 ? COLOR : c.rate >= 3.5 ? "#fbbf24" : "#d97706";
        return (
          <g key={c.name}>
            <rect x={x} y={228 - barH} width="66" height={barH} rx="4" fill={barColor} opacity="0.85" />
            <text x={x + 33} y={224 - barH} textAnchor="middle" fontSize="10" fontWeight="700" fill={barColor}>{c.rate}%</text>
            <text x={x + 33} y="245" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">{c.name.split(" ").join("\n")}</text>
            <text x={x + 33} y="258" textAnchor="middle" fontSize="8.5" fill="var(--text-muted)">{c.cap}</text>
            <rect x={x} y="264" width="66" height="12" rx="3" fill={c.type === "Restaurant" ? COLOR : "#6366f1"} opacity="0.2" />
            <text x={x + 33} y="274" textAnchor="middle" fontSize="8" fill={c.type === "Restaurant" ? COLOR : "#6366f1"} fontWeight="600">{c.type}</text>
          </g>
        );
      })}
    </svg>
  );
}

function HighSpendDinerMathTable() {
  return (
    <svg
      viewBox="0 0 680 329"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table comparing annual cashback earned by high-spend restaurant diners across different credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">High-Spend Diner Math: ₹20,000/month at Restaurants</text>
      {["Card", "Rate", "Cap", "Actual Monthly Earn", "Annual Benefit"].map((h, i) => (
        <text key={h} x={[20, 170, 250, 360, 510][i]} y="48" fontSize="10.5" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="12" y1="54" x2="668" y2="54" stroke="var(--border)" strokeWidth="1" />
      {[
        { card: "HSBC Live+", rate: "10%", cap: "₹1,000/mo shared", monthly: "₹1,000 max", annual: "₹12,000 max", highlight: false },
        { card: "BOB Eterna", rate: "3.75%*", cap: "Check current points cap", monthly: "₹750*", annual: "₹9,000*", highlight: true },
        { card: "SBI SimplySAVE", rate: "Up to 1.67%*", cap: "5,000-point monthly cap", monthly: "Up to ₹333*", annual: "Up to ₹4,000*", highlight: false },
        { card: "Swiggy HDFC", rate: "10%**", cap: "₹1,500/cycle", monthly: "₹1,500 max", annual: "₹18,000 max", highlight: false },
      ].map((r, i) => (
        <g key={i}>
          <rect x="12" y={58 + i * 38} width="656" height="36" rx="3" fill={r.highlight ? COLOR : "transparent"} opacity={r.highlight ? "0.06" : "1"} />
          <text x="20" y={81 + i * 38} fontSize="10.5" fontWeight={r.highlight ? "700" : "400"} fill="var(--text)">{r.card}</text>
          <text x="170" y={81 + i * 38} fontSize="10.5" fill={COLOR} fontWeight="600">{r.rate}</text>
          <text x="250" y={81 + i * 38} fontSize="10.5" fill="var(--text-muted)">{r.cap}</text>
          <text x="360" y={81 + i * 38} fontSize="10.5" fill="var(--text-muted)">{r.monthly}</text>
          <text x="510" y={81 + i * 38} fontSize="10.5" fontWeight="700" fill={r.annual === "₹0" ? "#ef4444" : COLOR}>{r.annual}</text>
        </g>
      ))}
      <text x="340" y="250" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">*Point values/caps and eligible dining classification apply. **Swiggy HDFC rate is limited to eligible Swiggy app transactions.</text>
    </svg>
  );
}

function WeekendDiningBonusCalc() {
  return (
    <svg
      viewBox="0 0 680 208"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of SBI SimplySAVE reward points for eligible dining spend"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="190" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">SBI SimplySAVE: Points on Eligible Dining Spend</text>
      <rect x="30" y="42" width="280" height="100" rx="10" fill="var(--border)" opacity="0.3" />
      <text x="170" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Eligible dining spend</text>
      <text x="170" y="84" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--text-muted)">10 points</text>
      <text x="170" y="104" textAnchor="middle" fontSize="11" fill="var(--text-muted)">per ₹150 spent</text>
      <text x="170" y="120" textAnchor="middle" fontSize="11" fill="var(--text-muted)">4 points = ₹1 at SBI redemption value</text>
      <text x="170" y="136" textAnchor="middle" fontSize="10" fill="var(--text-muted)">5,000 accelerated points/month cap</text>
      <rect x="370" y="42" width="280" height="100" rx="10" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" />
      <text x="510" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Other eligible spends</text>
      <text x="510" y="84" textAnchor="middle" fontSize="22" fontWeight="800" fill={COLOR}>1 point</text>
      <text x="510" y="104" textAnchor="middle" fontSize="11" fill="var(--text)">per ₹150 spent</text>
      <text x="510" y="120" textAnchor="middle" fontSize="11" fill="var(--text)">Category and exclusions apply</text>
      <text x="510" y="136" textAnchor="middle" fontSize="10" fill="var(--text-muted)">₹499 fee; waiver terms apply</text>
      <text x="340" y="170" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Dining reward points are category-based, not an extra weekend multiplier.</text>
      <text x="340" y="184" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Check eligible merchant category, redemption value and the latest card terms.</text>
    </svg>
  );
}

function DiningCardDecisionMatrix() {
  return (
    <svg
      viewBox="0 0 680 351"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision matrix for choosing the best dining credit card based on spending level and usage pattern"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="330" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Which Dining Card Is Right for You?</text>
      {/* Column headers */}
      <rect x="12" y="36" width="656" height="28" rx="4" fill={COLOR} opacity="0.12" />
      {["Dining Spend/Month", "Primary Use", "Best Card", "Why"].map((h, i) => (
        <text key={h} x={[24, 160, 310, 450][i]} y="55" fontSize="11" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      {[
        { spend: "Any spend", use: "Dining/delivery/grocery", card: "HSBC Live+", why: "10% eligible; ₹1,000 shared monthly cap" },
        { spend: "Swiggy app user", use: "Delivery or Dineout via Swiggy", card: "Swiggy HDFC", why: "10% eligible app spend; ₹1,500/cycle cap" },
        { spend: "Eligible partner spend", use: "Swiggy/Zomato/Ola", card: "Axis ACE", why: "4%; ₹500 shared cap with utility tier" },
        { spend: "Points preferred", use: "Dining at eligible merchants", card: "BOB Eterna / SBI SimplySAVE", why: "Compare point value, caps, fee and eligibility" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="12" y={68 + i * 40} width="656" height="38" rx="3" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.04" : "1"} />
          <text x="24" y={91 + i * 40} fontSize="11" fill="var(--text)" fontWeight="500">{r.spend}</text>
          <text x="160" y={91 + i * 40} fontSize="10.5" fill="var(--text-muted)">{r.use}</text>
          <text x="310" y={91 + i * 40} fontSize="10.5" fontWeight="700" fill={COLOR}>{r.card}</text>
          <text x="450" y={91 + i * 40} fontSize="10" fill="var(--text-muted)">{r.why}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BestCreditCardForDiningRestaurants() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives best rewards on restaurant dining in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HSBC Live+ advertises 10% accelerated cashback on eligible dining, food delivery and grocery, up to ₹1,000 a month, plus 1.5% on most other eligible spends. Its fee is ₹999 and the renewal fee is waived when annual spends exceed ₹2 lakh. Verify the current terms and your eligible spend mix.",
        },
      },
      {
        "@type": "Question",
        name: "Does HDFC Swiggy BLCK give rewards at physical restaurants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 10% tier applies to eligible Swiggy app transactions, including food delivery, Instamart, Genie and Dineout, subject to a ₹1,500 billing-cycle cap and exclusions. A direct physical-restaurant transaction is not a Swiggy-app spend; it falls under the applicable other-category terms.",
        },
      },
      {
        "@type": "Question",
        name: "What is MCC 5812 and why does it matter for dining rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MCCs are merchant-category codes assigned during merchant onboarding. A card issuer may use transaction category or merchant-specific terms to determine rewards, so do not assume every restaurant or aggregator transaction receives the dining rate. Check the issuer's exclusions and posted rewards.",
        },
      },
      {
        "@type": "Question",
        name: "How does HSBC Live+ dining cashback actually work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HSBC says Live+ earns 10% accelerated cashback, up to ₹1,000 a month, on dining, food delivery and grocery, plus 1.5% unlimited cashback on most other eligible spends. The ₹999 annual fee is waived when annual spends exceed ₹2 lakh. Exclusions apply, so read the current terms.",
        },
      },
      {
        "@type": "Question",
        name: "Is BOB Eterna good for dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BOBCARD Eterna advertises accelerated dining rewards; its product information lists 15 reward points per ₹100 for dining and values each point at ₹0.25 (3.75% arithmetic before eligibility, caps and fees). The issuer lists ₹2,499 first-year and annual fees. Check current reward caps and fee terms before comparing net value.",
        },
      },
      {
        "@type": "Question",
        name: "Does SBI SimplySAVE give extra rewards on weekend dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI SimplySAVE earns 10 reward points per ₹150 on eligible dining, movies, departmental stores and groceries (not a weekend-only bonus); other eligible spends earn 1 point per ₹150. At SBI's 4 points = ₹1 redemption value, the accelerated tier is about 1.67% before exclusions and the 5,000 accelerated-point monthly cap. Fees and waiver terms apply.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get dining rewards when booking via Dineout or EazyDiner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility depends on the card's terms and the transaction route. Swiggy HDFC's terms include eligible Dineout spends made through the Swiggy app in the 10% category, subject to its cap and exclusions. Other cards may classify aggregator/table-booking charges differently; check with the issuer.",
        },
      },
      {
        "@type": "Question",
        name: "Is HDFC Diners Black worth ₹10,000 per year for dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That depends on the card variant, annual fee/waiver, how you redeem points and your overall eligible spend. HDFC's terms cap or exclude some categories, so a flat 3.33% on all dining should not be assumed. Compare current issuer terms and benefits you will actually use.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best credit card for ordering from Swiggy and Zomato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Swiggy HDFC advertises 10% on eligible Swiggy app transactions, including delivery and Dineout, subject to a ₹1,500 billing-cycle cap and exclusions. Axis ACE advertises 4% on eligible Swiggy, Zomato and Ola spends. Compare the route-specific terms and caps; do not assume an Amazon Pay merchant rate applies to Swiggy.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dining Credit Cards: Compare Restaurant and Delivery Rewards",
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
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Credit Card for Dining and Restaurants",
        item: "https://assurefintech.com/best/best-credit-card-for-dining-restaurants",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1F1401, #4E3203, #1F1401)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #f59e0b22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Dining and Restaurants in India (September 2026)
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
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Dining and Restaurants
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
        Dining Cards
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Restaurant payments and food-delivery/platform transactions can earn differently. Compare eligible channels, merchant terms, monthly caps and card fees before picking a dining card.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <DiningVsDeliveryExplainer />

      {/* The key distinction */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Swiggy Card Problem: A Common Misunderstanding
        </h2>
        <p>
          Swiggy HDFC's accelerated rate is tied to eligible Swiggy app transactions, not every restaurant payment.
        </p>
        <p>
          Its current terms list 10% on eligible Swiggy app transactions (food delivery, Instamart, Genie and Dineout) up to ₹1,500 per billing cycle. A card payment made directly at a restaurant is not an app transaction and instead follows the other-category rate/cap. Check exclusions and transaction posting.
        </p>
        <p>
          The distinction is the payment channel, not just whether the purchase involved a meal. Check the card's current terms rather than inferring eligibility from the card name or merchant alone.
        </p>
      </section>

      {/* Top picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Selected Cards by Dining Use Case</h2>

        {[
          {
            rank: "1",
            name: "HSBC Live+",
            tag: "High rate; shared cap",
            fee: "₹999 joining/annual; renewal waiver above ₹2L spend",
            reward: "10% dining/delivery/grocery; ₹1,000/month accelerated cap",
            best: "Eligible dining spend before the shared cap is used",
            slug: "hsbc-live-plus",
          },
          {
            rank: "2",
            name: "BOB Eterna",
            tag: "Points-based dining rate",
            fee: "₹2,499 joining and annual fee per issuer page",
            reward: "15 reward points/₹100 on dining; point value and caps apply",
            best: "Compare current points cap and redemption value first",
            slug: "bob-eterna",
          },
          {
            rank: "3",
            name: "HDFC Diners Black",
            tag: "Premium; terms vary by variant",
            fee: "₹10,000 joining; ₹5,000 renewal (waiver terms apply)",
            reward: "Reward points; value varies by redemption, exclusions and caps",
            best: "Review current card variant terms and fee waiver",
            slug: "hdfc-diners-black",
          },
          {
            rank: "4",
            name: "SBI Card ELITE",
            tag: "Check current rewards terms",
            fee: "₹4,999/yr",
            reward: "Points-based; category and redemption rules apply",
            best: "Compare eligible reward value against the annual fee",
            slug: "sbi-card-elite",
          },
          {
            rank: "5",
            name: "SBI SimplySAVE",
            tag: "Eligible dining category",
            fee: "₹499/yr (waivable at ₹1L)",
            reward: "10 points/₹150 on eligible dining; 5,000-point monthly accelerated cap",
            best: "Occasional diners; category and point-value rules apply",
            slug: "sbi-simplysave",
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
                background: card.rank === "1" ? COLOR : card.rank === "2" ? COLOR + "cc" : "var(--border)",
                color: parseInt(card.rank) <= 2 ? "#fff" : "var(--text)",
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
                <span style={{ background: COLOR + "18", color: COLOR, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4 }}>
                  {card.tag}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Fee:</span> {card.fee} |{" "}
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Reward:</span> {card.reward}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Best for:</span> {card.best}
              </div>
            </div>
          </div>
        ))}
      </section>

      <DiningRewardRateChart />

      {/* Section 2: HSBC Live+ deep dive */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          HSBC Live+: The 10% Card That Fills Up Fast
        </h2>
        <p>
          HSBC currently describes 10% accelerated cashback on eligible dining, food delivery and grocery spends, up to ₹1,000 per month, plus 1.5% cashback on most other eligible spends. The issuer lists a ₹999 annual fee, waived when annual spends exceed ₹2 lakh. Check eligibility and exclusions in current terms.
        </p>
        <p>
          The ₹1,000 accelerated cap is shared across dining, food delivery and grocery. Shopping or utilities should not be counted toward that accelerated pool based on the current product information. Compare your eligible spend—not the headline percentage alone.
        </p>
        <p>
          For frequent diners, the cap can be shared with eligible food delivery and grocery spend, leaving less than ₹1,000 for restaurant dining. Compare alternatives only after accounting for their points redemption value, caps and annual fees.
        </p>
      </section>

      <HighSpendDinerMathTable />

      {/* Section 3: BOB Eterna */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          BOB Eterna: The Underrated All-Rounder
        </h2>
        <p>
          BOBCARD Eterna's product material advertises 15 reward points per ₹100 on dining and states a value of ₹0.25 per point, or 3.75% arithmetic before eligibility, caps, fees and redemption conditions. The issuer page lists a ₹2,499 first-year and annual fee; confirm any current offer and reward cap before applying.
        </p>
        <p>
          At ₹20,000/month, 3.75% would be ₹750/month only if all transactions qualify and the reward cap is not reached. This gross illustration excludes fees and other restrictions; it is not a guaranteed net return.
        </p>
        <p>
          Always check the network variant and issuer terms for your own card. A headline point rate alone is not enough to compare value.
        </p>
      </section>

      <WeekendDiningBonusCalc />
      <DiningCardDecisionMatrix />

      {/* Section 4: Where cards don't work */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          When Dining Rewards Don't Trigger: Edge Cases to Know
        </h2>
        <p>
          Not every restaurant transaction necessarily receives a dining reward. Eligibility depends on issuer terms and how the merchant/transaction is classified; an aggregator or hotel transaction may be treated differently from a direct restaurant purchase.
        </p>
        <p>
          For restaurant concessions inside hotels or malls, check the posted transaction and issuer rules rather than assuming the outlet name determines its category.
        </p>
        <p>
          The practical workaround is to monitor your reward credits for the first 2-3 transactions at a new dining venue and confirm the category credited. Banks like HDFC and Axis show the category on the Rewards portal. If you see hotel or services rather than dining, the merchant has registered under a different MCC.
        </p>
        <p>
          See our detailed explainer: <Link href="/blog/credit-card-mcc-dining-restaurants-india">MCC Codes for Restaurants in India: What Triggers Dining Rewards</Link>.
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
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Your Dining Card Action Plan</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Estimate your actual monthly restaurant spend</strong> (excluding food delivery apps). This single number determines your best card.
          </li>
          <li>
            <strong>For eligible dining under the HSBC cap:</strong> Live+ advertises 10% on dining, delivery and groceries, up to ₹1,000/month combined across those categories; grocery or delivery spend may use part of the cap.
          </li>
          <li>
            <strong>For higher restaurant spend:</strong> compare HSBC's remaining accelerated cap with a points card such as Eterna, after verifying its points cap, redemption value and annual fee.
          </li>
          <li>
            <strong>For premium cards:</strong> compare the current card variant's reward value, point caps, lounge terms and annual fee; do not assume a flat reward rate across categories.
          </li>
          <li>
            <strong>If you primarily use food apps:</strong> compare Swiggy HDFC's eligible 10% Swiggy-app rate (₹1,500 cycle cap) with Axis ACE's 4% eligible Swiggy/Zomato/Ola rate and their respective exclusions.
          </li>
          <li>
            <strong>Test your first few transactions</strong> at new restaurants and verify the reward category triggered in your bank's rewards portal.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Compare dining cards side-by-side: <Link href="/smart-swipe">Smart Swipe</Link> lets you input your restaurant spend and returns the best card for your profile.
        </p>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Frequently Asked Questions</h2>
        {faq.mainEntity.map((item, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: 16, marginBottom: 16 }}>
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
          <li><Link href="/cards/hsbc-live-plus">HSBC Live+ Full Review and Benefits</Link></li>
          <li><Link href="/cards/bob-eterna">BOB Eterna Card Review 2026</Link></li>
          <li><Link href="/best/credit-card-for-utility-bills">Best Credit Card for Utility Bills (Axis ACE)</Link></li>
          <li><Link href="/blog/swiggy-zomato-cashback-best-cards">Best Cards for Swiggy and Zomato in India 2026</Link></li>
          <li><Link href="/stack-builder">Build Your Card Stack</Link></li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <p>Issuer references: <a href={SOURCES.hsbc} target="_blank" rel="noreferrer">HSBC Live+ cashback details</a> · <a href={SOURCES.bob} target="_blank" rel="noreferrer">Bank of Baroda Eterna details</a> · <a href={SOURCES.bobcard} target="_blank" rel="noreferrer">BOBCARD Eterna rewards/fees</a> · <a href={SOURCES.swiggy} target="_blank" rel="noreferrer">Swiggy HDFC terms</a> · <a href={SOURCES.sbi} target="_blank" rel="noreferrer">SBI SimplySAVE UPI/rewards terms</a>.</p>
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial platform. We are not affiliated with any bank and do not hold a banking license. Reward rates and monthly caps on all cards mentioned are subject to change by the issuing bank without notice. Verify current terms before applying. Some links may generate referral commissions that do not affect our editorial independence.
      </footer>
    </main>
    </>
  );
}
