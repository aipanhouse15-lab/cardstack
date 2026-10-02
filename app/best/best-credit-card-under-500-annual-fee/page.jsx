import GuideCardRules from '@/components/GuideCardRules';
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Cards with Annual Fees up to ₹500 in India (2026)",
  description: "Compare low-fee cards in India by eligible rewards, redemption value, caps and fee-waiver rules—including RBL ShopRite's current grocery terms.",
  alternates: { canonical: "/best/best-credit-card-under-500-annual-fee" },
  openGraph: {
    title: "Best Credit Cards with Annual Fees up to ₹500 in India (2026)",
    description: "Compare low-fee cards in India by eligible rewards, redemption value, caps and fee-waiver rules—including RBL ShopRite's current grocery terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/best-credit-card-under-500-annual-fee
// Updated: October 2, 2026

const COLOR = "#ea580c";
const UPDATED = "October 2, 2026";

// --- SVG Components ---

function AxisACEReturnCalculator() {
  return (
    <svg
      viewBox="0 0 680 326"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Chart showing annual return on Axis ACE credit card at different spending levels"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Illustrative Axis ACE Annual Cashback Before Fee</text>
      {/* Y-axis */}
      {[0, 5000, 10000, 15000, 20000].map((v, i) => (
        <g key={v}>
          <text x="50" y={218 - i * 40} fontSize="10" fill="var(--text-muted)" textAnchor="end">{v === 0 ? "₹0" : `₹${(v / 1000).toFixed(0)}K`}</text>
          <line x1="56" y1={218 - i * 40} x2="650" y2={218 - i * 40} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,4" />
        </g>
      ))}
      {/* Fee line */}
      <line x1="56" y1="214" x2="650" y2="214" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="655" y="217" fontSize="9" fill="#ef4444">renewal fee</text>
      {[
        { label: "₹5K/mo\nall spend", value: 900, x: 78 },
        { label: "₹10K/mo\n(₹3K utility\n+ ₹7K other)", value: 3060, x: 178 },
        { label: "₹15K/mo\n(₹5K utility\n+ ₹10K other)", value: 4800, x: 278 },
        { label: "₹20K/mo\n(₹7K utility\n+ ₹13K other)", value: 6540, x: 378 },
        { label: "₹30K/mo\n(₹10K utility\n+ ₹20K other)", value: 9600, x: 478 },
        { label: "₹50K/mo\n(₹15K utility\n+ ₹35K other)", value: 12300, x: 568 },
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
      viewBox="0 0 680 192"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram explaining Axis ACE fee waiver condition and monthly spend required"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="180" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The Axis ACE Fee Waiver: Easier Than You Think</text>
      <rect x="20" y="42" width="196" height="100" rx="10" fill={COLOR} opacity="0.22" stroke={COLOR} strokeWidth="1.5" />
      <text x="118" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Annual Fee</text>
      <text x="118" y="84" textAnchor="middle" fontSize="28" fontWeight="800" fill={COLOR}>₹499</text>
      <text x="118" y="104" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Charged every card year</text>
      <text x="118" y="120" textAnchor="middle" fontSize="11" fill="var(--text-muted)">unless waiver condition met</text>
      <text x="230" y="95" fontSize="22" fill="var(--text-muted)" textAnchor="middle">→</text>
      <rect x="245" y="42" width="196" height="100" rx="10" fill="var(--raise)" opacity="0.22" stroke="#f59e0b" strokeWidth="1.5" />
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
      <text x="340" y="168" textAnchor="middle" fontSize="10" fill="var(--text-muted)">₹16,667/month is achievable for most urban households combining utility bills, groceries, and online shopping.</text>
    </svg>
  );
}

function Under500CardsComparison() {
  const cards = [
    { name: "Amazon Pay ICICI", fee: "₹0", topRate: "5%", categories: "Amazon + Pay merchants", verdict: "Include always" },
    { name: "Axis ACE", fee: "₹499*", topRate: "5% utility", categories: "Utility, food delivery", verdict: "Best paid card here" },
    { name: "SBI SimplySAVE", fee: "₹499*", topRate: "10 pts/₹150", categories: "Dining, grocery, movies", verdict: "Capped reward points" },
    { name: "ICICI HPCL Coral", fee: "₹199*", topRate: "2.5% fuel", categories: "HPCL fuel (₹100 cap/mo)", verdict: "HPCL fuel users" },
    { name: "RBL ShopRite", fee: "₹500 + GST*", topRate: "20 points/₹100", categories: "Eligible grocery MCCs", verdict: "1,000 accelerated points/cycle" },
    { name: "HDFC MoneyBack+", fee: "₹500*", topRate: "Up to 2.5%", categories: "Selected merchants", verdict: "Check current terms" },
  ];
  return (
    <svg
      viewBox="0 0 680 329"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison table of all major Indian credit cards under Rs 500 annual fee"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="300" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Cards with annual fees up to ₹500</text>
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
      <text x="340" y="294" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">*Waiver/points rules differ by card; reward points are not cash. Verify current issuer terms.</text>
    </svg>
  );
}

function ACECategoriesBreakdown() {
  return (
    <svg
      viewBox="0 0 680 302"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Breakdown of Axis ACE cashback rates by spending category"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Axis ACE advertised cashback rates (₹500 monthly accelerated cap)</text>
      {[
        { label: "Eligible utility/recharges via Google Pay", rate: 5, color: COLOR },
        { label: "Swiggy, Zomato & Ola", rate: 4, color: "#fb923c" },
        { label: "Other eligible spends", rate: 1.5, color: "#fed7aa" },
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
      <text x="340" y="192" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">A combined ₹500/billing-cycle cap applies to 5% and 4% categories; base-rate cashback is separate. Check exclusions.</text>
    </svg>
  );
}

function RBLShopRiteGroceryMath() {
  return (
    <svg
      viewBox="0 0 680 230"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RBL ShopRite example: eligible grocery spending of 5,000 rupees earns 1,000 accelerated points worth up to 250 rupees; further grocery spend earns one point per 100 rupees"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="210" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="27" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">RBL ShopRite: grocery points are capped; fuel rewards are separate</text>
      {[
        ["Eligible grocery spend in one billing cycle", "Reward points", "Maximum stated value*"],
        ["₹5,000", "1,000 points", "Up to ₹250"],
        ["₹10,000", "1,050 points†", "Up to ₹262.50"],
      ].map((row, i) => (
        <g key={i}>
          <rect x="16" y={42 + i * 36} width="648" height="34" rx="4" fill={i === 0 ? COLOR : i % 2 ? "var(--raise2)" : "transparent"} opacity={i === 0 ? "0.95" : "1"} />
          <text x="34" y={64 + i * 36} fontSize="11" fontWeight={i === 0 ? "700" : "500"} fill={i === 0 ? "white" : "var(--text)"}>{row[0]}</text>
          <text x="360" y={64 + i * 36} fontSize="11" fontWeight={i === 0 ? "700" : "600"} fill={i === 0 ? "white" : COLOR}>{row[1]}</text>
          <text x="530" y={64 + i * 36} fontSize="11" fontWeight={i === 0 ? "700" : "600"} fill={i === 0 ? "white" : "var(--text)"}>{row[2]}</text>
        </g>
      ))}
      <text x="340" y="174" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">After 1,000 accelerated grocery points per billing cycle, eligible grocery spend earns 1 point/₹100.</text>
      <text x="340" y="191" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">*Up to ₹0.25/point; points are not cash. †Includes 50 base points after the accelerated cap.</text>
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
          text: "Axis ACE is one option at ₹499 annual fee (waived when eligible annual spend exceeds ₹2 lakh). Its listed rates apply only to eligible Google Pay utility/recharge and named food/ride transactions, with a shared ₹500 billing-cycle accelerated cap. RBL ShopRite charges ₹500 + GST, waivable at ₹1.5 lakh eligible membership-year spend; grocery earns 20 points/₹100 up to 1,000 accelerated points per billing cycle, then 1 point/₹100. Points redeem for up to ₹0.25 each; fuel earns no points, though a separate surcharge waiver may apply.",
        },
      },
      {
        "@type": "Question",
        name: "Can Axis ACE annual fee be waived?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis lists the ₹499 renewal fee as waived when annual eligible spend is greater than ₹2 lakh. Rent and wallet-load transactions do not count toward that waiver. Spend eligibility and timing should be checked in the current fee terms.",
        },
      },
      {
        "@type": "Question",
        name: "How does Axis ACE compare to Amazon Pay ICICI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Pay ICICI is a no-annual-fee card with Amazon-specific benefits; Axis ACE has a ₹499 annual fee and advertised cashback on eligible Google Pay utility/recharge transactions, Swiggy, Zomato and Ola, plus other eligible spends. Compare current caps, exclusions and your own spend before deciding whether to hold both.",
        },
      },
      {
        "@type": "Question",
        name: "What is SBI SimplySAVE and is it worth ₹499 per year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI SimplySAVE earns 10 Reward Points per ₹150 on dining, movies, departmental stores and grocery, and 1 point per ₹150 on other eligible spends. The accelerated earn is capped at 5,000 points per month; the catalogue value is ₹0.25 per point. Its ₹499 fee is waived at ₹1 lakh annual spend. These are reward points, not a flat 2.5% cashback or a weekend bonus.",
        },
      },
      {
        "@type": "Question",
        name: "Is HDFC MoneyBack+ worth getting in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MoneyBack+ advertises 10X CashPoints (up to 2.5% value back) at Amazon, Flipkart, Swiggy, Reliance Smart SuperStore and BigBasket; other spending earns 2 CashPoints per ₹200. Up to ₹0.25/point applies to catalogue or eligible flight/hotel redemption; statement cashback is ₹0.20/point. HDFC's September 2026 MITC caps total earning at 15,000 points per statement cycle and cashback redemption at 3,000 points per calendar month. Its public page does not establish the old 2,500-point accelerated-earning cap, so that cap is not asserted here. Merchant exclusions and transaction rules apply.",
        },
      },
      {
        "@type": "Question",
        name: "Which cards under ₹500 fee are good for fuel spending?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ICICI HPCL Coral lists a ₹199 annual fee, waived at ₹50,000 annual spend. It advertises 2.5% cashback on HPCL fuel, capped at ₹100 per month, plus a 1% surcharge waiver on eligible transactions. Check transaction eligibility and the cap; the cashback alone does not scale without limit.",
        },
      },
      {
        "@type": "Question",
        name: "What is RBL ShopRite and is it good for grocery shopping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ShopRite charges ₹500 + GST, with an annual-fee waiver at ₹1.5 lakh eligible purchases in a membership year. Eligible grocery transactions earn 20 points/₹100 up to 1,000 points per billing cycle, then 1 point/₹100. Each point is worth up to ₹0.25 at redemption, so the accelerated tier is worth at most ₹250 per cycle—not ₹250 cash. Fuel earns no points; its separate surcharge waiver covers eligible ₹500–₹4,000 purchases up to ₹100/calendar month. Merchant MCCs and exclusions apply.",
        },
      },
      {
        "@type": "Question",
        name: "Should I get Axis ACE even if I already have Amazon Pay ICICI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They may complement each other, but compare current merchant eligibility, caps, exclusions and fees first. Amazon Pay ICICI is relevant for its eligible Amazon ecosystem benefits; Axis ACE may suit eligible Google Pay utility payments and listed food/ride merchants. Holding both is not automatically worthwhile for every user.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I realistically earn from Axis ACE per year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A household spending ₹8,000/month on eligible utility/recharges, ₹6,000 on Swiggy/Zomato/Ola and ₹12,000 elsewhere would not earn the uncapped headline rates on all accelerated spend: those categories share a ₹500 monthly cap. Using the current 1.5% base rate on other eligible spend, the illustrative return is up to ₹680/month before exclusions and fee (₹500 accelerated + ₹180 base), not ₹820. Actual eligible transactions and billing-cycle cap use matter.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Cards with Annual Fees up to ₹500 in India",
    author: { "@type": "Person", name: "Ash" },
    datePublished: "2026-06-04",
    dateModified: "2026-10-02",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://www.assurefintech.com/best/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Credit Card Under ₹500 Annual Fee",
        item: "https://www.assurefintech.com/best/best-credit-card-under-500-annual-fee",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1E0B01, #4A1C03, #1E0B01)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #ea580c22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Cards with Annual Fees up to ₹500 in India (2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash · 8 min read</div>
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
      <script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Cards with Annual Fees up to ₹500
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

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Compare no-fee and low-fee cards by eligible rewards, caps, waiver rules and redemption value—not headline rates alone. Fees are before GST where indicated; individual issuer source dates vary.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Updated {UPDATED} · Individual issuer source dates vary · By Ash · 8 min read
      </div>

      {/* Key stat */}
      <div
        style={{
          background: COLOR + "12",
          border: `1px solid ${COLOR}35`,
          borderRadius: 8,
          padding: "14px 18px",
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        <strong style={{ color: COLOR }}>The honest number:</strong> Axis ACE's 5% and 4% categories share a ₹500 billing-cycle cashback cap; the 1.5% base rate applies separately to other eligible spends. Your actual return depends on category eligibility and exclusions.
      </div>

      {/* Top Picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Cards Ranked: Annual Fees up to ₹500 before applicable GST</h2>

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
            tag: "Dining, Grocery and Movie Rewards",
            fee: "₹499/yr (waivable at ₹1L spend)",
            reward: "10 points/₹150 on select categories (₹0.25 catalogue value per point; monthly cap)",
            best: "SBI account holders, weekend diners, movie-goers",
            slug: "sbi-simplysave",
          },
          {
            rank: "4",
            name: "RBL ShopRite",
            tag: "Best for Grocery Households",
            fee: "₹500 + GST; waiver at ₹1.5L eligible membership-year spend",
            reward: "20 points/₹100 on eligible grocery MCCs; 1,000-point accelerated cap/cycle, then base earn",
            best: "Eligible grocery spenders who value RBL points",
            slug: "rbl-shoprite",
          },
          {
            rank: "5",
            name: "ICICI HPCL Coral",
            tag: "Best for HPCL Fuel Users",
            fee: "₹199 joining; ₹199 renewal before GST",
            reward: "2.5% HPCL cashback (₹100/month cap) + eligible surcharge waiver",
            best: "HPCL purchases of ₹500+; surcharge waiver separately needs ₹400–₹4,000 on an ICICI Bank POS",
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

      <ACECategoriesBreakdown />

      {/* Section 1: Axis ACE full breakdown */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Axis ACE: The Best Paid-But-Cheap Card in India Right Now
        </h2>
        <p>
          Axis ACE advertises 5% on eligible utility bills/recharges through Google Pay, 4% on Swiggy, Zomato and Ola, and 1.5% on other eligible spends. The accelerated categories share a ₹500 billing-cycle cap, so the headline rates do not apply without limit. Check current exclusions and transaction eligibility before estimating returns.
        </p>
        <p>
          The 5% rate is limited to eligible utility bill payments and recharges via Google Pay. Do not assume every biller, BBPS route or transaction coding qualifies. ₹5,000 of eligible bills earns ₹250 before other use of the shared cap; ₹10,000 alone reaches ₹500. Listed food/ride transactions can consume the same billing-cycle bucket.
        </p>
        <p>
          The 4% advertised rate applies to listed merchants (Swiggy, Zomato and Ola) and shares the ₹500 billing-cycle cap with the 5% category. Realized returns depend on how quickly eligible accelerated transactions reach that cap and on the 1.5% base cashback for other eligible spends.
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
          Axis lists renewal-fee waiver when eligible annual spend exceeds ₹2 lakh. Rent and wallet-load transactions do not count. Treat the threshold as a fee term, not a reason to make unnecessary purchases; check the issuer's current definition of eligible spend.
        </p>
        <p>
          If the card otherwise fits your spending, prioritize eligible Google Pay bills/recharges and listed merchants, and track qualifying annual spend. Avoid relying on an estimated month when the waiver will be reached; excluded transaction types and refunds may affect the total.
        </p>
        <p>
          If you do not meet the waiver, compare the ₹499 fee against the cashback you actually earn after category caps, exclusions and payment behavior. A simple break-even based only on the 1.5% base rate would not account for those details and is not a guaranteed return.
        </p>
      </section>

      <Under500CardsComparison />

      {/* Section 3: Axis ACE vs free cards */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          What You Give Up vs a Free Card: Almost Nothing
        </h2>
        <p>
          Compared with a no-annual-fee card, Axis ACE's ₹499 renewal fee may be worthwhile for a user who can use its eligible Google Pay utility/recharge and listed merchant categories. The shared cap, exclusions and your actual redemption value matter more than comparing headline rates in isolation.
        </p>
        <p>
          A two-card setup can make sense when each card's eligible categories match your habits. Verify current Amazon Pay ICICI and Axis ACE terms independently, and remember that Axis ACE's accelerated rates share a monthly cap; neither card necessarily covers all spend at its headline rate.
        </p>
        <p>
          Use our <Link href="/stack-builder">Stack Builder</Link> to model your own eligible spending and current issuer terms. We avoid publishing a single annual-return estimate because merchant eligibility, caps, exclusions and product terms can change the result substantially.
        </p>
      </section>

      <RBLShopRiteGroceryMath />

      {/* Section 4: Niche specialists */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Niche Specialists Worth Knowing About
        </h2>
        <p>
          RBL ShopRite charges ₹500 + GST and earns 20 points/₹100 on eligible grocery MCCs, capped at 1,000 accelerated points per billing cycle; grocery spend above that cap earns one point/₹100. At RBL's maximum stated redemption value of ₹0.25/point, the accelerated cap represents up to ₹250 in redemption value, not cash. RBL's terms exclude fuel from rewards; a distinct surcharge waiver may apply to eligible ₹500–₹4,000 fuel transactions.
        </p>
        <p>
          The example above is a gross point-value illustration before redemption choices and the annual fee. Online grocery apps only earn the accelerated rate when the transaction posts with an eligible grocery MCC; fees, waiver eligibility, and excluded categories are listed in RBL's current terms.
        </p>
        <p>
          <a href="https://www.rbl.bank.in/personal-banking/cards/credit-cards/shoprite-credit-card" target="_blank" rel="noreferrer">RBL ShopRite product details</a>
          {" · "}
          <a href="https://webassets.rbl.bank.in/document/credit-cards/tnc-shoprite-credit-card.pdf" target="_blank" rel="noreferrer">RBL ShopRite terms and conditions</a>
        </p>
        <p>
          ICICI HPCL Coral is a narrow-use option: its ₹199 annual fee (waived at ₹50,000 annual spend) accompanies 2.5% HPCL cashback capped at ₹100/month and an eligible fuel-surcharge waiver. Compare the cap and transaction conditions against your actual fuel use.
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
            <strong>Consider Axis ACE if its eligible categories fit your spend.</strong> It costs ₹499 annually; eligible annual spend must exceed ₹2 lakh for the waiver, while accelerated cashback is capped at ₹500 per billing cycle.
          </li>
          <li>
            <strong>If you don't have Amazon Pay ICICI already, get it too.</strong> It is free and covers your Amazon spend at rates Axis ACE cannot match.
          </li>
          <li>
            <strong>Route only eligible transactions to Axis ACE:</strong> qualifying Google Pay utility/recharge payments, Swiggy, Zomato and Ola; confirm current exclusions and cap utilization.
          </li>
          <li>
            <strong>If you spend heavily on groceries,</strong> compare your eligible MCC-coded grocery spend against ShopRite's 1,000 accelerated-point billing-cycle cap and your preferred redemption value.
          </li>
          <li>
            <strong>Track eligible spend toward any fee waiver</strong> and avoid spending just to earn a waiver if it is uneconomic.
          </li>
          <li>
            <strong>Assess HDFC MoneyBack+ by actual redemption:</strong> named-merchant accelerated CashPoints and quarterly vouchers may change its value; review current terms and exclusions.
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
          <li><Link href="/cards/axis-ace">Axis ACE Card Full Review, Rewards, Apply</Link></li>
          <li><Link href="/best/best-cashback-credit-card-no-annual-fee">Best Free Cashback Credit Cards India 2026</Link></li>
          <li><Link href="/best/credit-card-for-utility-bills">Best Card for Utility Bills (Deep Dive)</Link></li>
          <li><Link href="/blog/axis-ace-vs-amazon-pay-icici-2026">Axis ACE vs Amazon Pay ICICI: Full Comparison</Link></li>
          <li><Link href="/stack-builder">Stack Builder: Model Your Card Return</Link></li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial platform and does not hold a banking license. Card terms, reward rates, annual fee waiver conditions, and category caps are subject to change by issuing banks. Always verify current terms on the bank's official website before applying. Referral links on this page may generate a commission that does not affect editorial rankings.
      </footer>
    <GuideCardRules slug="best-credit-card-under-500-annual-fee" />
    </main>
    </>
  );
}
