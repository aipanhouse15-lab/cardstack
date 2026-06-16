import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card Under ₹500 Annual Fee in India (June 2026)",
  description: "The best credit card in India that charges a fee costs ₹499 per year. And that fee can be waived entirely at ₹2 lakh annual spend.",
  alternates: { canonical: "/best/best-credit-card-under-500-annual-fee" },
  openGraph: {
    title: "Best Credit Card Under ₹500 Annual Fee in India (June 2026)",
    description: "The best credit card in India that charges a fee costs ₹499 per year. And that fee can be waived entirely at ₹2 lakh annual spend.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/best-credit-card-under-500-annual-fee
// Updated: June 4, 2026

const COLOR = "#ea580c";
const UPDATED = "June 4, 2026";

// --- SVG Components ---

function AxisACEReturnCalculator() {
  return (
    <svg
      viewBox="0 0 680 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Chart showing annual return on Axis ACE credit card at different spending levels"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Axis ACE Annual Net Return vs ₹499 Annual Fee</text>
      {/* Y-axis */}
      {[0, 5000, 10000, 15000, 20000].map((v, i) => (
        <g key={v}>
          <text x="50" y={218 - i * 40} fontSize="10" fill="var(--text-muted)" textAnchor="end">{v === 0 ? "₹0" : `₹${(v / 1000).toFixed(0)}K`}</text>
          <line x1="56" y1={218 - i * 40} x2="650" y2={218 - i * 40} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,4" />
        </g>
      ))}
      {/* Fee line */}
      <line x1="56" y1="214" x2="650" y2="214" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="655" y="217" fontSize="9" fill="#ef4444">₹499 fee</text>
      {[
        { label: "₹5K/mo\nall spend", value: 900, x: 78 },
        { label: "₹10K/mo\n(₹3K util\n+ ₹7K other)", value: 2820, x: 178 },
        { label: "₹15K/mo\n(₹5K util\n+ ₹10K)", value: 4500, x: 278 },
        { label: "₹20K/mo\n(₹7K util\n+ ₹13K)", value: 6150, x: 378 },
        { label: "₹30K/mo\n(₹10K util\n+ ₹20K)", value: 9000, x: 478 },
        { label: "₹50K/mo\n(₹15K util\n+ ₹35K)", value: 14400, x: 568 },
      ].map((item) => {
        const barH = (item.value / 20000) * 160;
        return (
          <g key={item.label}>
            <rect x={item.x} y={218 - barH} width="64" height={barH} rx="4" fill={COLOR} opacity="0.82" />
            <text x={item.x + 32} y={213 - barH} textAnchor="middle" fontSize="10" fontWeight="700" fill={COLOR}>₹{item.value >= 1000 ? (item.value / 1000).toFixed(1) + "K" : item.value}</text>
            {item.label.split("\n").map((line, idx) => (
              <text key={idx} x={item.x + 32} y={228 + idx * 13} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function FeeWaiverMathDiagram() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram explaining Axis ACE fee waiver condition and monthly spend required"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="180" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The Axis ACE Fee Waiver: Easier Than You Think</text>
      <rect x="20" y="42" width="196" height="100" rx="10" fill={COLOR} opacity="0.08" stroke={COLOR} strokeWidth="1.5" />
      <text x="118" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Annual Fee</text>
      <text x="118" y="84" textAnchor="middle" fontSize="28" fontWeight="800" fill={COLOR}>₹499</text>
      <text x="118" y="104" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Charged every card year</text>
      <text x="118" y="120" textAnchor="middle" fontSize="11" fill="var(--text-muted)">unless waiver condition met</text>
      <text x="230" y="95" fontSize="22" fill="var(--text-muted)" textAnchor="middle">→</text>
      <rect x="245" y="42" width="196" height="100" rx="10" fill="var(--raise)" opacity="0.08" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="343" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f59e0b">Waiver Condition</text>
      <text x="343" y="84" textAnchor="middle" fontSize="20" fontWeight="800" fill="#f59e0b">₹2,00,000</text>
      <text x="343" y="104" textAnchor="middle" fontSize="11" fill="var(--text-muted)">annual spend on the card</text>
      <text x="343" y="120" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(= ₹16,667/month)</text>
      <text x="458" y="95" fontSize="22" fill="var(--text-muted)" textAnchor="middle">→</text>
      <rect x="470" y="42" width="190" height="100" rx="10" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="1.5" />
      <text x="565" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Result</text>
      <text x="565" y="84" textAnchor="middle" fontSize="20" fontWeight="800" fill={COLOR}>₹0</text>
      <text x="565" y="104" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Annual fee waived</text>
      <text x="565" y="120" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Truly free at this spend</text>
      <text x="340" y="168" textAnchor="middle" fontSize="11" fill="var(--text-muted)">₹16,667/month is achievable for most urban households combining utility bills, groceries, and online shopping.</text>
    </svg>
  );
}

function Under500CardsComparison() {
  const cards = [
    { name: "Amazon Pay ICICI", fee: "₹0", topRate: "5%", categories: "Amazon + Pay merchants", verdict: "Include always" },
    { name: "Axis ACE", fee: "₹499*", topRate: "5% utility", categories: "Utility, food delivery", verdict: "Best paid card here" },
    { name: "SBI SimplySAVE", fee: "₹499*", topRate: "2.5% dining", categories: "Dining, grocery, movies", verdict: "Weekend dining users" },
    { name: "ICICI HPCL Coral", fee: "₹500", topRate: "2% fuel", categories: "HPCL fuel only", verdict: "HPCL fuel-heavy users" },
    { name: "RBL ShopRite", fee: "₹500", topRate: "5% grocery", categories: "Grocery, supermarket", verdict: "Grocery-heavy families" },
    { name: "HDFC MoneyBack+", fee: "₹500", topRate: "0.5%", categories: "General spend", verdict: "Avoid in 2026" },
  ];
  return (
    <svg
      viewBox="0 0 680 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison table of all major Indian credit cards under Rs 500 annual fee"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="300" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">All Cards Under ₹500 Annual Fee (June 2026)</text>
      {["Card", "Fee", "Top Rate", "Best Category", "Verdict"].map((h, i) => (
        <text key={h} x={[20, 175, 235, 315, 510][i]} y="48" fontSize="10.5" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="12" y1="54" x2="668" y2="54" stroke="var(--border)" strokeWidth="1" />
      {cards.map((r, i) => (
        <g key={i}>
          <rect x="12" y={58 + i * 38} width="656" height="36" rx="3" fill={i === 1 ? COLOR : "transparent"} opacity={i === 1 ? "0.05" : "1"} />
          <text x="20" y={81 + i * 38} fontSize="10.5" fontWeight={i === 1 ? "700" : "400"} fill="var(--text)">{r.name}</text>
          <text x="175" y={81 + i * 38} fontSize="10.5" fill="var(--text-muted)">{r.fee}</text>
          <text x="235" y={81 + i * 38} fontSize="10.5" fontWeight="600" fill={i === 0 || i === 1 || i === 4 ? COLOR : i === 5 ? "#ef4444" : "#f59e0b"}>{r.topRate}</text>
          <text x="315" y={81 + i * 38} fontSize="10.5" fill="var(--text-muted)">{r.categories}</text>
          <text x="510" y={81 + i * 38} fontSize="10" fontWeight={i === 5 ? "700" : "400"} fill={i === 5 ? "#ef4444" : i === 0 || i === 1 ? COLOR : "var(--text-muted)"}>{r.verdict}</text>
        </g>
      ))}
      <text x="340" y="294" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">*Axis ACE and SBI SimplySAVE fees waivable on meeting annual spend thresholds. Amazon Pay ICICI is completely free.</text>
    </svg>
  );
}

function ACECategoriesBreakdown() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Breakdown of Axis ACE cashback rates by spending category"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Axis ACE Cashback Rates by Category (June 2026)</text>
      {[
        { label: "Utility Bills (via Google Pay/BBPS)", rate: 5, color: COLOR },
        { label: "Food Delivery (Swiggy, Zomato)", rate: 4, color: "#fb923c" },
        { label: "Online Recharges, DTH", rate: 4, color: "#fb923c" },
        { label: "All Other Spends", rate: 1.5, color: "#fed7aa" },
      ].map((item, i) => {
        const barW = (item.rate / 5) * 340;
        return (
          <g key={i}>
            <text x="22" y={66 + i * 36} fontSize="11" fill="var(--text)">{item.label}</text>
            <rect x="320" y={50 + i * 36} width={barW} height="22" rx="4" fill={item.color} opacity="0.85" />
            <text x={320 + barW + 8} y={66 + i * 36} fontSize="12" fontWeight="700" fill={item.color}>{item.rate}%</text>
          </g>
        );
      })}
      <text x="340" y="192" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Cashback credited as statement credit. Category caps apply per billing cycle. Verify current limits with Axis Bank.</text>
    </svg>
  );
}

function RBLShopRiteGroceryMath() {
  return (
    <svg
      viewBox="0 0 680 170"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Annual cashback calculation for RBL ShopRite card based on grocery spending"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="170" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">RBL ShopRite: 5% Grocery Math (₹500/yr fee)</text>
      {[
        { spend: "₹5,000/mo grocery", cashback: "₹250/mo", annual: "₹3,000/yr", net: "₹2,500 (after ₹500 fee)" },
        { spend: "₹10,000/mo grocery", cashback: "₹500/mo", annual: "₹6,000/yr", net: "₹5,500 net" },
        { spend: "₹15,000/mo grocery", cashback: "₹750/mo", annual: "₹9,000/yr", net: "₹8,500 net" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="12" y={42 + i * 38} width="656" height="36" rx="4" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.05" : "1"} />
          <text x="22" y={65 + i * 38} fontSize="11" fontWeight="600" fill="var(--text)">{r.spend}</text>
          <text x="200" y={65 + i * 38} fontSize="11" fill={COLOR} fontWeight="600">{r.cashback}</text>
          <text x="340" y={65 + i * 38} fontSize="11" fill={COLOR} fontWeight="700">{r.annual}</text>
          <text x="490" y={65 + i * 38} fontSize="11" fill="var(--text-muted)">{r.net}</text>
        </g>
      ))}
      <text x="22" y="42" fontSize="10.5" fontWeight="700" fill="var(--text)">Monthly Grocery Spend</text>
      <text x="200" y="42" fontSize="10.5" fontWeight="700" fill="var(--text)">Monthly Cashback</text>
      <text x="340" y="42" fontSize="10.5" fontWeight="700" fill="var(--text)">Annual Cashback</text>
      <text x="490" y="42" fontSize="10.5" fontWeight="700" fill="var(--text)">Net After Fee</text>
      <text x="340" y="160" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">RBL ShopRite is niche but excellent for grocery-heavy families. The ₹500 fee pays back at ₹833/month grocery spend.</text>
    </svg>
  );
}

export default function BestCreditCardUnder500AnnualFee() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best credit card under ₹500 annual fee in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE at ₹499 per year (waivable at ₹2 lakh annual spend) is the best credit card under ₹500 annual fee in India as of June 2026. It gives 5% cashback on utility bills via Google Pay and BBPS, 4% on food delivery apps, and 1.5% on all other spends. For grocery-heavy households, RBL ShopRite at ₹500 per year with 5% on grocery is a strong specialist option.",
        },
      },
      {
        "@type": "Question",
        name: "Can Axis ACE annual fee be waived?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Axis ACE's ₹499 annual fee is waived if you spend ₹2 lakh or more in the card year (12 months from card issue/renewal date). This works out to approximately ₹16,667 per month across all categories. For most urban Indian households using the card for utilities, food delivery, and daily expenses, this threshold is comfortably achievable.",
        },
      },
      {
        "@type": "Question",
        name: "How does Axis ACE compare to Amazon Pay ICICI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Pay ICICI is free and gives 5% on Amazon.in (Prime), 2% on Amazon Pay merchants, 1% elsewhere. Axis ACE costs ₹499 (waivable) and gives 5% on utility bills, 4% on food delivery, 1.5% everywhere. If you have significant utility and food delivery spend, Axis ACE returns more. If you primarily shop on Amazon, Amazon Pay ICICI is better. Most users benefit from holding both.",
        },
      },
      {
        "@type": "Question",
        name: "What is SBI SimplySAVE and is it worth ₹499 per year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI SimplySAVE gives 2.5% rewards on dining, grocery, movies, and international transactions. It also has weekend bonuses on these categories. The ₹499 fee is waivable at ₹1 lakh annual spend. For SBI account holders who dine out regularly on weekends or shop at grocery stores, it is a reasonable card. For most other profiles, Axis ACE or Amazon Pay ICICI delivers better returns.",
        },
      },
      {
        "@type": "Question",
        name: "Is HDFC MoneyBack+ worth getting in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. HDFC MoneyBack+ gives approximately 0.5% effective cashback in 2026, which is below what most free cards return. The ₹500 annual fee makes the value proposition clearly negative when better free and sub-₹500 alternatives exist. The only reason to consider it is if you specifically need an HDFC card for HDFC ecosystem benefits.",
        },
      },
      {
        "@type": "Question",
        name: "Which cards under ₹500 fee are good for fuel spending?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ICICI HPCL Coral at ₹500 per year gives 2% rewards on fuel at HPCL petrol stations and a fuel surcharge waiver. If you fill up exclusively at HPCL, this card pays back the fee quickly. Most Indian credit cards exclude fuel surcharge waivers or give 0-1% on fuel. HPCL Coral is the best sub-₹500 fuel card if HPCL is your station.",
        },
      },
      {
        "@type": "Question",
        name: "What is RBL ShopRite and is it good for grocery shopping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RBL ShopRite is a credit card from RBL Bank that gives 5% cashback on grocery and supermarket transactions (MCC 5411, 5912). At ₹500 per year, the fee pays back at roughly ₹10,000 per month in grocery spend. For families spending ₹10,000 to ₹20,000 monthly on groceries, ShopRite is one of the best-value grocery cards in India.",
        },
      },
      {
        "@type": "Question",
        name: "Should I get Axis ACE even if I already have Amazon Pay ICICI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they complement each other well. Amazon Pay ICICI covers online shopping and Amazon Pay merchants at high rates. Axis ACE covers utility bills and food delivery, which Amazon Pay ICICI handles at only 1-2%. Using both cards for their respective best categories, with the Axis ACE fee waived at ₹2 lakh spend, gives you a highly efficient two-card stack for under ₹500 in net annual cost.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I realistically earn from Axis ACE per year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A household spending ₹8,000 per month on utility bills (5%), ₹6,000 on food delivery (4%), and ₹12,000 on everything else (1.5%) would earn approximately ₹400 + ₹240 + ₹180 = ₹820 per month, or ₹9,840 per year in cashback. Against a ₹499 annual fee (waived if spend is over ₹2L), this is roughly 20x return on the fee. Numbers scale linearly with spend.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card Under ₹500 Annual Fee in India (June 2026): Axis ACE, RBL ShopRite Compared",
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
        name: "Best Credit Card Under ₹500 Annual Fee",
        item: "https://assurefintech.com/best/best-credit-card-under-500-annual-fee",
      },
    ],
  };

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "44px 22px 88px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "var(--text)",
        lineHeight: 1.65,
      }}
    >
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card Under ₹500 Annual Fee
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
        Budget Cards
      </div>

      <h1 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14, color: "var(--text)" }}>
        Best Credit Card Under ₹500 Annual Fee in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        The best credit card in India that charges a fee costs ₹499 per year. And that fee can be waived entirely at ₹2 lakh annual spend.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 32 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      {/* Key stat */}
      <div
        style={{
          background: COLOR + "12",
          border: `1px solid ${COLOR}35`,
          borderRadius: 8,
          padding: "14px 18px",
          marginBottom: 32,
          fontSize: 14,
        }}
      >
        <strong style={{ color: COLOR }}>The honest number:</strong> Axis ACE at ₹499/year delivers ₹9,000-15,000 in annual cashback for a typical Indian household. That is a 20-30x return on the annual fee before the waiver kicks in.
      </div>

      {/* Top Picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Cards Ranked: Under ₹500 Annual Fee</h2>

        {[
          {
            rank: "1",
            name: "Axis ACE",
            tag: "Best Card Under ₹500 in India",
            fee: "₹499/yr (waivable at ₹2L spend)",
            reward: "5% utility, 4% food delivery, 1.5% all else",
            best: "Every household with utility bills + food delivery spend",
            slug: "axis-ace",
          },
          {
            rank: "2",
            name: "Amazon Pay ICICI",
            tag: "Best Free Card (Include Always)",
            fee: "Free",
            reward: "5% Amazon Prime, 2% Amazon Pay merchants",
            best: "Amazon shoppers. Complement to Axis ACE, not a substitute.",
            slug: "amazon-pay-icici",
          },
          {
            rank: "3",
            name: "SBI SimplySAVE",
            tag: "Best Weekend Dining Budget Card",
            fee: "₹499/yr (waivable at ₹1L spend)",
            reward: "2.5% dining, grocery, movies. Weekend bonus.",
            best: "SBI account holders, weekend diners, movie-goers",
            slug: "sbi-simplysave",
          },
          {
            rank: "4",
            name: "RBL ShopRite",
            tag: "Best for Grocery Households",
            fee: "₹500/yr",
            reward: "5% grocery and supermarket",
            best: "Families spending ₹10,000+ per month on groceries",
            slug: "rbl-shoprite",
          },
          {
            rank: "5",
            name: "ICICI HPCL Coral",
            tag: "Best for HPCL Fuel Users",
            fee: "₹500/yr",
            reward: "2% rewards at HPCL, fuel surcharge waiver",
            best: "High fuel spenders who fill exclusively at HPCL",
            slug: "icici-hpcl-coral",
          },
        ].map((card) => (
          <div
            key={card.rank}
            style={{
              border: card.rank === "1" ? `1.5px solid ${COLOR}` : "1px solid var(--border)",
              borderRadius: 10,
              padding: "18px 22px",
              marginBottom: 14,
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              background: card.rank === "1" ? COLOR + "06" : "var(--raise)",
            }}
          >
            <div
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: "50%",
                background: card.rank === "1" ? COLOR : "var(--border)",
                color: card.rank === "1" ? "#fff" : "var(--text)",
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

      <ACECategoriesBreakdown />

      {/* Section 1: Axis ACE full breakdown */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Axis ACE: The Best Paid-But-Cheap Card in India Right Now
        </h2>
        <p>
          Axis ACE has three reward rates: 5% on utility bills and Google Pay transactions, 4% on food delivery apps (Swiggy, Zomato), and 1.5% on all other spends. For a card costing ₹499 per year, this is an extraordinary return structure. No other sub-₹500 card offers a comparable combination of a high rate on a recurring spend category and a meaningfully elevated base rate.
        </p>
        <p>
          The 5% on utilities is the card's headline feature and the reason it belongs in most Indian households. Electricity, water, broadband, mobile postpaid, LPG cylinder booking — all of these can route through MCC 4900 via BBPS and Google Pay, triggering the 5% cashback. For a household with ₹5,000 in monthly utility bills alone, the annual cashback on utilities is ₹3,000, which covers the ₹499 fee 6 times over.
        </p>
        <p>
          The 4% on food delivery is the second anchor. Swiggy and Zomato are now central to urban Indian household spending. At 4% on combined food delivery spend of ₹4,000 per month, you earn ₹1,920 annually from food delivery alone. Add utilities and general spend, and the total annual return for a typical household is ₹7,000 to ₹12,000 on a card that costs ₹499.
        </p>
        <p>
          Read the complete review: <Link href="/cards/axis-ace">Axis ACE Full Card Review, Benefits, Apply</Link>. Also see our <Link href="/blog/axis-ace-review-2026">detailed breakdown of Axis ACE in 2026</Link> including the MCC eligibility guide.
        </p>
      </section>

      <FeeWaiverMathDiagram />
      <AxisACEReturnCalculator />

      {/* Section 2: Fee waiver strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Fee Waiver Math: Why ₹2 Lakh Is Not a Difficult Target
        </h2>
        <p>
          Axis ACE's annual fee waiver requires ₹2 lakh of spend in the card year. Divided over 12 months, this is ₹16,667 per month — not the total monthly budget, just the portion that flows through the Axis ACE card. For context, ₹5,000 in utility bills, ₹4,000 in food delivery, and ₹8,000 in general online and in-store purchases adds up to ₹17,000.
        </p>
        <p>
          The strategy: designate Axis ACE as your primary card for utilities and food delivery, and let general daily spend (groceries, petrol, subscriptions) also flow through it to pad toward the waiver threshold. You do not need to route everything through ACE, but if you use it as a primary daily card alongside a specialized card for Amazon purchases, the ₹2 lakh threshold is typically reached by Month 10 of the card year.
        </p>
        <p>
          If you do not hit ₹2 lakh: pay the ₹499 fee. On ₹1,00,000 of annual card spend, your cashback (even at the 1.5% base rate alone) is ₹1,500. Net of the ₹499 fee, you still profit ₹1,001. This card has a negative floor on net return only if you spend less than ₹33,267 annually on it, which at ₹2,772/month is unlikely for any active user.
        </p>
      </section>

      <Under500CardsComparison />

      {/* Section 3: Axis ACE vs free cards */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          What You Give Up vs a Free Card: Almost Nothing
        </h2>
        <p>
          Compared to Amazon Pay ICICI (free), Axis ACE costs ₹499 but covers utility bills at 5% where Amazon Pay ICICI gives only 1-2%. It covers food delivery at 4% where Amazon Pay ICICI gives 1%. And its 1.5% base rate beats Amazon Pay ICICI's 1% base rate on everything that isn't Amazon.
        </p>
        <p>
          The rational approach is to hold both: Amazon Pay ICICI for Amazon.in purchases and Amazon Pay merchant billers (where it earns 5% and 2% respectively), and Axis ACE for utilities and food delivery. This two-card combination for ₹0 to ₹499 per year covers most Indian household spending at 2-5% effectively, with no category left at 1% or lower if you route correctly.
        </p>
        <p>
          Using our <Link href="/stack-builder">Stack Builder</Link> with a typical ₹50,000/month spend split, the Axis ACE + Amazon Pay ICICI combination returns approximately ₹14,000 to ₹18,000 per year in cashback, against a net annual fee of ₹0 to ₹499. That is effectively a 4-5% blended return across household spend. Few cards at any fee level beat this.
        </p>
      </section>

      <RBLShopRiteGroceryMath />

      {/* Section 4: Niche specialists */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Niche Specialists Worth Knowing About
        </h2>
        <p>
          RBL ShopRite at ₹500 per year deserves attention for grocery-heavy households. It gives 5% on grocery and supermarket transactions (MCC 5411), which is the same rate as Amazon Pay ICICI on Amazon.in and Axis ACE on utilities. For a family spending ₹12,000 per month on groceries across Big Bazaar, DMart, Reliance Fresh, or BigBasket, ShopRite returns ₹7,200 annually against a ₹500 annual fee.
        </p>
        <p>
          RBL ShopRite is not widely marketed, which is probably why it does not appear on most comparison lists. The issuer is RBL Bank, which is a scheduled commercial bank regulated by RBI, so the product is legitimate and not a fintech NBFC workaround. Check current reward structure and caps on RBL Bank's website, as grocery reward programs have historically been targets for reductions.
        </p>
        <p>
          ICICI HPCL Coral is worth mentioning for one narrow use case: if you drive a high-mileage vehicle and fill exclusively at HPCL petrol stations, the 2% reward plus fuel surcharge waiver is the best deal available on a sub-₹500 card for fuel. It is a single-purpose card and should be held alongside a broader card like Axis ACE.
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
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Your Action Plan</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Apply for Axis ACE.</strong> ₹499 per year, waivable at ₹2 lakh. This is the best-value paid card in India for most households.
          </li>
          <li>
            <strong>If you don't have Amazon Pay ICICI already, get it too.</strong> It is free and covers your Amazon spend at rates Axis ACE cannot match.
          </li>
          <li>
            <strong>Set Axis ACE as your bill payment card</strong> — all utility bills, food delivery, and daily general spend should route through it.
          </li>
          <li>
            <strong>If you spend ₹10,000+ per month on groceries,</strong> evaluate RBL ShopRite as a third card for grocery transactions at 5%.
          </li>
          <li>
            <strong>Track your spend in month 10</strong> to see if you are on track for the ₹2L waiver. A quick burst of prepaid utility payments or online purchases in the final 2 months can close the gap.
          </li>
          <li>
            <strong>Avoid HDFC MoneyBack+ in 2026.</strong> At 0.5% effective return on a ₹500 annual fee card, it is one of the worst value propositions in this segment.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Model your exact return: <Link href="/smart-swipe">Smart Swipe</Link> compares Axis ACE against your spending pattern in under 90 seconds and shows you the annual cashback estimate.
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
          <li><Link href="/cards/axis-ace">Axis ACE Card Full Review, Rewards, Apply</Link></li>
          <li><Link href="/best/best-cashback-credit-card-no-annual-fee">Best Free Cashback Credit Cards India 2026</Link></li>
          <li><Link href="/best/credit-card-for-utility-bills">Best Card for Utility Bills (Deep Dive)</Link></li>
          <li><Link href="/blog/axis-ace-vs-amazon-pay-icici-2026">Axis ACE vs Amazon Pay ICICI: Full Comparison</Link></li>
          <li><Link href="/stack-builder">Stack Builder: Model Your Card Return</Link></li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial platform and does not hold a banking license. Card terms, reward rates, annual fee waiver conditions, and category caps are subject to change by issuing banks. Always verify current terms on the bank's official website before applying. Referral links on this page may generate a commission that does not affect editorial rankings.
      </footer>
    </main>
  );
}
