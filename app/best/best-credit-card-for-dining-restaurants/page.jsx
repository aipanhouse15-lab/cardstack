import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Dining and Restaurants in India (June 2026)",
  description: "There are two types of dining rewards in India: food delivery and actual restaurant dining. Most cards treat them very differently, and some popular cards gi...",
  alternates: { canonical: "/best/best-credit-card-for-dining-restaurants" },
  openGraph: {
    title: "Best Credit Card for Dining and Restaurants in India (June 2026)",
    description: "There are two types of dining rewards in India: food delivery and actual restaurant dining. Most cards treat them very differently, and some popular cards gi...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/best-credit-card-for-dining-restaurants
// Updated: June 4, 2026

const COLOR = "#f59e0b";
const UPDATED = "June 4, 2026";

// --- SVG Components ---

function DiningVsDeliveryExplainer() {
  return (
    <svg
      viewBox="0 0 680 200"
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
      <text x="165" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>HSBC Live+: 10%, BOB Eterna: 3.75%</text>
      <rect x="370" y="42" width="290" height="100" rx="10" fill="#6366f1" opacity="0.22" stroke="#6366f1" strokeWidth="1.5" />
      <text x="515" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6366f1">Food Delivery Apps</text>
      <text x="515" y="82" textAnchor="middle" fontSize="11" fill="var(--text)">MCC varies (Swiggy: often 5411/5812)</text>
      <text x="515" y="98" textAnchor="middle" fontSize="11" fill="var(--text)">You pay via app to aggregator</text>
      <text x="515" y="114" textAnchor="middle" fontSize="11" fill="var(--text)">Card may earn "online" or partner reward</text>
      <text x="515" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6366f1">HDFC Swiggy: 10%, Axis ACE: 4%</text>
      <text x="340" y="162" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ef4444">HDFC Swiggy BLCK does NOT give 10% at physical restaurants.</text>
      <text x="340" y="180" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Always check: is your card's dining rate for restaurants, delivery apps, or both?</text>
    </svg>
  );
}

function DiningRewardRateChart() {
  const cards = [
    { name: "HSBC Live+", rate: 10, cap: "₹1K/mo cap", type: "Restaurant" },
    { name: "Axis ACE", rate: 4, cap: "On Swiggy/Zomato", type: "Delivery" },
    { name: "BOB Eterna", rate: 3.75, cap: "No cap stated", type: "Restaurant" },
    { name: "HDFC Diners Black", rate: 3.33, cap: "No cap", type: "All dining" },
    { name: "SBI ELITE", rate: 2.5, cap: "Generous cap", type: "Restaurant" },
    { name: "SBI SimplySAVE", rate: 2.5, cap: "Weekend 5X", type: "Restaurant" },
  ];
  return (
    <svg
      viewBox="0 0 680 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bar chart comparing dining reward rates for major Indian credit cards at restaurants"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="280" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Effective Dining Reward Rate Comparison (June 2026)</text>
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
      viewBox="0 0 680 260"
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
        { card: "HSBC Live+", rate: "10%", cap: "₹1,000/mo", monthly: "₹1,000 (capped)", annual: "₹12,000", highlight: false },
        { card: "BOB Eterna", rate: "3.75%", cap: "None", monthly: "₹750", annual: "₹9,000", highlight: true },
        { card: "HDFC Diners Black", rate: "3.33%", cap: "None", monthly: "₹666", annual: "₹7,992", highlight: false },
        { card: "SBI ELITE", rate: "2.5%", cap: "None", monthly: "₹500", annual: "₹6,000", highlight: false },
        { card: "HDFC Swiggy BLCK", rate: "0%", cap: "N/A", monthly: "₹0 (restaurants excluded)", annual: "₹0", highlight: false },
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
      <text x="340" y="250" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">HSBC Live+ tops for most with its ₹12,000 cap — but BOB Eterna wins above ₹26,667/month restaurant spend (no cap).</text>
    </svg>
  );
}

function WeekendDiningBonusCalc() {
  return (
    <svg
      viewBox="0 0 680 190"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of SBI SimplySAVE weekend dining bonus and how it compares to weekday rates"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="190" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">SBI SimplySAVE: The Weekend Dining Bonus</text>
      <rect x="30" y="42" width="280" height="100" rx="10" fill="var(--border)" opacity="0.3" />
      <text x="170" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Weekday Dining (Mon-Thu)</text>
      <text x="170" y="84" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--text-muted)">2.5%</text>
      <text x="170" y="104" textAnchor="middle" fontSize="11" fill="var(--text-muted)">1 Reward Point per ₹100</text>
      <text x="170" y="120" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(post-category multiplier)</text>
      <text x="170" y="136" textAnchor="middle" fontSize="10" fill="var(--text-muted)">₹499 annual fee waivable at ₹1L</text>
      <rect x="370" y="42" width="280" height="100" rx="10" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" />
      <text x="510" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Weekend Dining (Fri-Sun)</text>
      <text x="510" y="84" textAnchor="middle" fontSize="22" fontWeight="800" fill={COLOR}>5X Points</text>
      <text x="510" y="104" textAnchor="middle" fontSize="11" fill="var(--text)">Effectively 2.5% on dining</text>
      <text x="510" y="120" textAnchor="middle" fontSize="11" fill="var(--text)">on qualifying weekend spends</text>
      <text x="510" y="136" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Popular with families dining out Sat/Sun</text>
      <text x="340" y="170" textAnchor="middle" fontSize="11" fill="var(--text-muted)">SimplySAVE suits occasional diners who mostly eat out on weekends and want a budget card.</text>
      <text x="340" y="184" textAnchor="middle" fontSize="10" fill="var(--text-muted)">For frequent restaurant-goers, HSBC Live+ or BOB Eterna outperform on annual return.</text>
    </svg>
  );
}

function DiningCardDecisionMatrix() {
  return (
    <svg
      viewBox="0 0 680 330"
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
        { spend: "Under ₹5,000", use: "Mostly delivery", card: "Axis ACE (₹499)", why: "4% on Swiggy/Zomato + utility 5%" },
        { spend: "₹5K-₹15K", use: "Mix of restaurants + delivery", card: "HSBC Live+ (₹1,999)", why: "10% on both, ₹1K cap rarely hit" },
        { spend: "₹15K-₹30K", use: "Frequent restaurant dining", card: "BOB Eterna (₹2,499)", why: "3.75% with no monthly cap" },
        { spend: "Above ₹30K", use: "Heavy restaurant dining", card: "HDFC Diners Black (₹10K)", why: "3.33% uncapped + airport lounge" },
        { spend: "Occasional, weekends", use: "Family weekend dining", card: "SBI SimplySAVE (₹499)", why: "Budget card, weekend bonus" },
        { spend: "SBI cardholder existing", use: "Regular restaurant use", card: "SBI Card ELITE (₹4,999)", why: "2.5% solid, works at all restaurants" },
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
          text: "HSBC Live+ gives the highest dining reward rate at 10% on dining and grocery, but has a ₹1,000 per month cashback cap. For uncapped dining rewards, BOB Eterna gives 3.75% with no monthly restriction. For very high restaurant spending (above ₹30,000/month), HDFC Diners Black at 3.33% uncapped may return more annually.",
        },
      },
      {
        "@type": "Question",
        name: "Does HDFC Swiggy BLCK give rewards at physical restaurants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. HDFC Swiggy BLCK's 10% reward applies specifically to orders on the Swiggy platform including food delivery, Swiggy Instamart, and Dineout (when booked via Swiggy). If you swipe this card directly at a restaurant that is not part of the Swiggy ecosystem, you earn the standard 1% base rate. The card is excellent for Swiggy app users but not for standalone restaurant visits.",
        },
      },
      {
        "@type": "Question",
        name: "What is MCC 5812 and why does it matter for dining rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MCC 5812 (Eating Places and Restaurants) is the merchant category code assigned to most restaurants when they register for card payment processing. When a card advertises 'dining rewards', it typically applies to transactions coded under MCC 5812. Food delivery apps may settle under different MCCs depending on how they have registered with payment networks.",
        },
      },
      {
        "@type": "Question",
        name: "How does HSBC Live+ dining cashback actually work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HSBC Live+ gives 10% cashback on dining and grocery combined, capped at ₹1,000 cashback per billing cycle. The cap means you effectively get maximum ₹12,000 in dining and grocery cashback annually. Cashback is credited to your statement. The ₹1,999 annual fee makes the card value-positive if you hit the cap for even 4-5 months per year.",
        },
      },
      {
        "@type": "Question",
        name: "Is BOB Eterna good for dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BOB Eterna (Bank of Baroda) gives 3.75% on dining, travel, and online spends. There is no monthly cap advertised on the dining category. For frequent restaurant-goers spending ₹15,000 to ₹30,000 per month on dining, Eterna often delivers better annual returns than HSBC Live+ because the cap never becomes a constraint. The ₹2,499 annual fee is waivable at ₹1.5 lakh annual spend.",
        },
      },
      {
        "@type": "Question",
        name: "Does SBI SimplySAVE give extra rewards on weekend dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI SimplySAVE gives 10X reward points on dining, movies, and groceries on weekends (Friday through Sunday). The base rate is 1 point per ₹100, so 10X is 10 points per ₹100, equivalent to roughly 2.5% cashback when redeemed at standard SBI points value. For families that primarily eat out on weekends, this is a decent benefit on a budget card with a ₹499 annual fee.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get dining rewards when booking via Dineout or EazyDiner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dineout bookings paid by card typically settle under MCC 5812 (Eating Places) and qualify for dining rewards on most cards. EazyDiner similarly settles under restaurant MCCs for table bookings. However, when Dineout is accessed through Swiggy, the MCC may vary. Check with your specific card issuer for the exact category classification.",
        },
      },
      {
        "@type": "Question",
        name: "Is HDFC Diners Black worth ₹10,000 per year for dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Diners Black is worth the ₹10,000 fee if you have high overall spend, not just dining. The card gives 3.33% on all categories including dining, unlimited lounge access, and premium travel benefits. For someone spending ₹3 lakh+ per month across all categories, the card pays back multiple times. For dining alone, BOB Eterna at ₹2,499 delivers comparable category returns at much lower cost.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best credit card for ordering from Swiggy and Zomato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Swiggy specifically, HDFC Swiggy BLCK gives 10% on all Swiggy app orders. For Zomato orders, Axis ACE gives 4% on food delivery apps. Amazon Pay ICICI gives 2% on Swiggy if Swiggy is linked as an Amazon Pay merchant. For someone who uses both Swiggy and Zomato, Axis ACE covers both platforms at 4% and remains useful for utilities.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Dining and Restaurants in India (June 2026): HSBC, BOB Eterna, Diners Black",
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
            Best Credit Card for Dining and Restaurants in India (June 2026)
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
        lineHeight: 1.65,
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
        There are two types of dining rewards in India: food delivery and actual restaurant dining. Most cards treat them very differently, and some popular cards give you zero at a sit-down restaurant.
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
          HDFC Swiggy BLCK is one of the most-searched dining cards in India in 2026. Many people assume that a card named "Swiggy" will reward them at restaurants. It does not, not in the traditional sense.
        </p>
        <p>
          HDFC Swiggy BLCK gives 10% on orders placed through the Swiggy app, including food delivery, Swiggy Instamart grocery delivery, and Swiggy Dineout restaurant bookings made through the app. If you walk into a restaurant and tap your Swiggy card on their POS machine, you earn the base rate of approximately 1%, not 10%. The card rewards the Swiggy platform, not the dining category.
        </p>
        <p>
          This is not a criticism of HDFC Swiggy BLCK. It is an excellent card for its stated purpose. But confusing it with a restaurant dining card is a genuine mistake that costs people money. Always read the reward category fine print, not the card's brand name.
        </p>
      </section>

      {/* Top picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Top Dining Cards Ranked</h2>

        {[
          {
            rank: "1",
            name: "HSBC Live+",
            tag: "Highest Dining Rate",
            fee: "₹1,999/yr",
            reward: "10% on dining + grocery (₹1,000/mo cap)",
            best: "Regular diners spending up to ₹10,000/month at restaurants",
            slug: "hsbc-live-plus",
          },
          {
            rank: "2",
            name: "BOB Eterna",
            tag: "Best for High-Spend Diners",
            fee: "₹2,499/yr",
            reward: "3.75% on dining, travel, online (no monthly cap)",
            best: "Frequent diners spending ₹15,000+ per month at restaurants",
            slug: "bob-eterna",
          },
          {
            rank: "3",
            name: "HDFC Diners Black",
            tag: "Best Premium All-Rounder",
            fee: "₹10,000/yr",
            reward: "3.33% on all categories including dining",
            best: "High-income diners who want lounge access + flat rewards",
            slug: "hdfc-diners-black",
          },
          {
            rank: "4",
            name: "SBI Card ELITE",
            tag: "Best for SBI Users",
            fee: "₹4,999/yr",
            reward: "2.5% on dining",
            best: "SBI account holders who dine regularly",
            slug: "sbi-card-elite",
          },
          {
            rank: "5",
            name: "SBI SimplySAVE",
            tag: "Best Budget Dining Card",
            fee: "₹499/yr (waivable at ₹1L)",
            reward: "10X points on weekend dining (approx 2.5%)",
            best: "Weekend family diners on a budget card",
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
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
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
          HSBC Live+ has the highest advertised dining reward rate of any major credit card in India: 10% on dining and grocery combined. The catch is the ₹1,000 per billing cycle cashback cap. Once you have spent ₹10,000 at qualifying restaurants and grocery stores in a month, the rate drops to the base.
        </p>
        <p>
          For most Indian households spending ₹5,000 to ₹8,000 per month on dining, the cap is rarely a binding constraint and the 10% is genuinely realized. At ₹1,999 per year, the card pays back its fee in less than 2 months of full cap utilization, and the annual maximum cashback of ₹12,000 against the ₹1,999 fee is a compelling proposition.
        </p>
        <p>
          The problem surfaces for frequent high-spend diners. If you are spending ₹20,000 per month at restaurants, you hit the ₹1,000 cap at ₹10,000 of spend and earn nothing on the remaining ₹10,000. In this scenario, BOB Eterna's uncapped 3.75% returns ₹750 per month versus HSBC Live+'s capped ₹1,000 — they are close, but Eterna becomes the better choice above approximately ₹27,000/month in dining spend.
        </p>
      </section>

      <HighSpendDinerMathTable />

      {/* Section 3: BOB Eterna */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          BOB Eterna: The Underrated All-Rounder
        </h2>
        <p>
          Bank of Baroda's Eterna card does not get enough attention in Indian personal finance discussions. It offers 3.75% on dining, travel bookings, and online shopping — three categories that together cover the bulk of urban discretionary spending. There is no meaningful monthly cap on the dining category.
        </p>
        <p>
          For someone spending ₹20,000 per month on restaurant dining, BOB Eterna returns ₹750 per month, or ₹9,000 annually, against a ₹2,499 annual fee that is waivable at ₹1.5 lakh annual spend. That is a 3.6x return on the fee. The card also covers travel well enough that a dedicated travel card may not be necessary for moderate travelers.
        </p>
        <p>
          BOB is not HDFC or Axis, which sometimes makes people hesitant. The card functions fine on Visa and Mastercard networks and is accepted wherever those networks operate. Do not let the issuer's ranking distract from the card's math.
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
          Not every restaurant transaction qualifies as "dining" for reward purposes. Restaurants that register as grocery stores, caterers (MCC 5812 vs 5812 sub-codes), or hotel restaurants billed through the hotel's main account can sometimes settle under different MCCs, earning only the base reward rate.
        </p>
        <p>
          High-end hotels in India frequently process restaurant bills through the hotel's property MCC rather than a separate restaurant MCC. If you dine at a restaurant inside an ITC, Oberoi, or Taj hotel and pay by card, the reward may apply at the hotel rate rather than the dining rate. This is worth knowing before assuming your premium dining experience is earning dining rewards.
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
            <strong>Under ₹10,000/month:</strong> HSBC Live+ at 10% is your card. The cap will not bind at this spend level.
          </li>
          <li>
            <strong>Between ₹15,000 and ₹30,000/month:</strong> BOB Eterna's 3.75% uncapped returns more than HSBC's capped 10%.
          </li>
          <li>
            <strong>Above ₹30,000/month:</strong> Evaluate HDFC Diners Black if you also want lounge access and premium benefits.
          </li>
          <li>
            <strong>If you primarily use Swiggy/Zomato</strong> rather than sit-down restaurants: Axis ACE at 4% on food delivery apps is the better pick, not HDFC Swiggy BLCK.
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
            <p style={{ marginTop: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
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

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial platform. We are not affiliated with any bank and do not hold a banking license. Reward rates and monthly caps on all cards mentioned are subject to change by the issuing bank without notice. Verify current terms before applying. Some links may generate referral commissions that do not affect our editorial independence.
      </footer>
    </main>
    </>
  );
}
