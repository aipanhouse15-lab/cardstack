import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "No-Annual-Fee Credit Cards in India: Compare Current Features",
  description: "Compare lifetime-free credit cards by eligible rewards, fees, caps, exclusions and the spending categories you actually use.",
  alternates: { canonical: "/best/best-cashback-credit-card-no-annual-fee" },
  openGraph: {
    title: "No-Annual-Fee Credit Cards in India: Compare Current Features",
    description: "Compare lifetime-free credit cards by eligible rewards, fees, caps, exclusions and the spending categories you actually use.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/best-cashback-credit-card-no-annual-fee
// Updated: September 26, 2026

const COLOR = "#16a34a";
const UPDATED = "September 28, 2026";

// --- SVG Components ---

function FreeCardMythBuster() {
  return (
    <svg
      viewBox="0 0 680 304"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison showing free credit cards vs paid cards on annual cashback return"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="210" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Free vs Paid Cards: Compare Your Own Eligible Spend</text>
      {[
        { card: "Annual fee", detail: "Joining + renewal charges; check waiver rules", color: "#f59e0b" },
        { card: "Eligible spend", detail: "Merchant, channel, MCC and transaction exclusions", color: "#6366f1" },
        { card: "Reward value", detail: "Cashback vs points/vouchers; redemption conditions", color: COLOR },
        { card: "Your net value", detail: "Benefits you will actually use minus fees", color: "var(--border)" },
      ].map((item, i) => (
        <g key={i}>
          <text x="30" y={68 + i * 36} fontSize="11" fill="var(--text)">{item.card}</text>
          <rect x="280" y={54 + i * 36} width="24" height="20" rx="3" fill={item.color} opacity="0.8" />
          <text x="316" y={68 + i * 36} fontSize="10" fill="var(--text-muted)">{item.detail}</text>
        </g>
      ))}
      <text x="340" y="198" textAnchor="middle" fontSize="10" fill="var(--text-muted)">A card's net value varies by the cardholder's eligible transactions, fees, caps and redemption choices.</text>
    </svg>
  );
}

function AmazonPayICICIBreakdown() {
  return (
    <svg
      viewBox="0 0 680 376"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Detailed breakdown of cashback rates for Amazon Pay ICICI credit card"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="240" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Amazon Pay ICICI: Complete Cashback Rate Map</text>
      {[
        { category: "Amazon.in (Prime member)", rate: "5%", color: COLOR, note: "Eligible purchases; rewards credited as Amazon Pay balance." },
        { category: "Amazon.in (Non-Prime)", rate: "3%", color: "#4ade80", note: "Still strong for non-Prime users." },
        { category: "Amazon Pay merchant payments", rate: "2%", color: "rgba(62,224,143,.35)", note: "Thousands of apps and billers accept Amazon Pay." },
        { category: "Other eligible spends", rate: "1%", color: "var(--border)", note: "Exclusions apply, including fuel, rent, tax and EMI transactions." },
      ].map((r, i) => (
        <g key={i}>
          <rect x="16" y={42 + i * 46} width="648" height="42" rx="6" fill={r.color} opacity="0.22" stroke={r.color === "var(--border)" ? "var(--border)" : r.color} strokeWidth="1" strokeOpacity="0.4" />
          <text x="28" y={68 + i * 46} fontSize="12" fontWeight="700" fill="var(--text)">{r.category}</text>
          <text x="490" y={60 + i * 46} fontSize="22" fontWeight="800" fill={r.color === "var(--border)" ? "var(--text-muted)" : r.color}>{r.rate}</text>
          <text x="28" y={80 + i * 46} fontSize="10" fill="var(--text-muted)">{r.note}</text>
        </g>
      ))}
      <text x="340" y="232" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Rewards are credited as Amazon Pay balance; eligibility, posting and redemption terms apply.</text>
    </svg>
  );
}

function FreeCardStackDiagram() {
  return (
    <svg
      viewBox="0 0 680 426"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing a complete free-card stack covering all spending categories at zero annual fee"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="270" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">A Sample Stack of No-Annual-Fee Cards</text>
      {[
        { card: "Amazon Pay ICICI", categories: "Online Shopping, Amazon Pay billers", rate: "2-5%", color: "#f59e0b" },
        { card: "IDFC FIRST WOW", categories: "International transactions, forex-free spending", rate: "0% forex", color: "#7c3aed" },
        { card: "Scapia Federal", categories: "Eligible app bookings; foreign-currency transactions earn no coins", rate: "0% forex", color: "#0891b2" },
        { card: "AU LIT", categories: "2 custom categories of your choice", rate: "2-3%", color: COLOR },
      ].map((item, i) => (
        <g key={i}>
          <rect x="20" y={42 + i * 54} width="640" height="46" rx="8" fill={item.color} opacity="0.07" stroke={item.color} strokeWidth="1.2" />
          <rect x="28" y={50 + i * 54} width="6" height="30" rx="3" fill={item.color} />
          <text x="46" y={68 + i * 54} fontSize="12" fontWeight="700" fill="var(--text)">{item.card}</text>
          <text x="46" y={82 + i * 54} fontSize="10.5" fill="var(--text-muted)">{item.categories}</text>
          <rect x="550" y={52 + i * 54} width="98" height="26" rx="5" fill={item.color} opacity="0.15" />
          <text x="599" y={69 + i * 54} textAnchor="middle" fontSize="13" fontWeight="800" fill={item.color}>{item.rate}</text>
        </g>
      ))}
      <text x="340" y="256" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">Total annual fees: ₹0 for the listed lifetime-free cards; verify optional features and eligibility.</text>
    </svg>
  );
}

function WhenToUpgradeChart() {
  return (
    <svg
      viewBox="0 0 680 299"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Guide showing when upgrading from free credit cards to paid cards makes financial sense"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">When to Upgrade from Free Cards to Paid Cards</text>
      {[
        { trigger: "You fly 4+ times a year internationally", upgrade: "Axis Atlas (₹5,000) for miles", stay: "Keep Scapia + WOW for spending" },
        { trigger: "Monthly spend exceeds ₹1.5 lakh", upgrade: "Premium card (Axis Magnus, HDFC Infinia) for milestone bonuses", stay: "Keep free cards for base spend" },
        { trigger: "Lounge access needed every trip", upgrade: "HSBC TravelOne (₹4,999; waived above ₹8L annual spend) or Axis Atlas", stay: "Scapia airport privileges require ₹20K in the preceding billing cycle" },
        { trigger: "You spend ₹20K+ monthly on restaurants", upgrade: "HSBC Live+ (₹999; waived above ₹2L annual spend) for 10% on eligible categories", stay: "Free cards may suit lower eligible-category spend" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="12" y={42 + i * 36} width="656" height="34" rx="3" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.04" : "1"} />
          <text x="22" y={63 + i * 36} fontSize="10" fill="var(--text)" fontWeight="600">{r.trigger}</text>
          <text x="310" y={63 + i * 36} fontSize="10" fill={COLOR}>{r.upgrade}</text>
        </g>
      ))}
      <text x="340" y="190" fontSize="9" textAnchor="middle" fill="var(--text-muted)">No card stack suits everyone. Compare eligible spend, actual reward value, fees and terms before adding a card.</text>
    </svg>
  );
}

function ScapiaWOWComparison() {
  return (
    <svg
      viewBox="0 0 680 204"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Side by side comparison of Scapia Federal and IDFC FIRST WOW free credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Scapia Federal vs IDFC FIRST WOW: Free International Cards Compared</text>
      {/* Headers */}
      <text x="176" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0891b2">Scapia Federal</text>
      <text x="504" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">IDFC FIRST WOW</text>
      <line x1="340" y1="42" x2="340" y2="185" stroke="var(--border)" strokeWidth="1" />
      {[
        { label: "Annual Fee", s: "Free", w: "Free (secured)" },
        { label: "Forex Markup", s: "0%", w: "0%" },
        { label: "Travel Reward", s: "Eligible app bookings only", w: "None specific" },
        { label: "Airport Privileges", s: "Spend-gated after ₹20K preceding billing cycle", w: "None listed" },
        { label: "Reward Expiry", s: "Points expire in 2 yrs", w: "Never expire" },
        { label: "Credit Check", s: "Income-based", w: "FD-based (easier)" },
      ].map((r, i) => (
        <g key={i}>
          <text x="176" y={76 + i * 18} textAnchor="middle" fontSize="10.5" fill={r.s === "0%" ? COLOR : "var(--text)"}>{r.s}</text>
          <text x="340" y={76 + i * 18} textAnchor="middle" fontSize="10" fill="var(--text-muted)">{r.label}</text>
          <text x="504" y={76 + i * 18} textAnchor="middle" fontSize="10.5" fill={r.w === "0%" || r.w === "Never expire" ? "#7c3aed" : "var(--text)"}>{r.w}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BestCashbackCreditCardNoAnnualFee() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best free credit card in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Pay ICICI is a strong lifetime-free option for people who shop regularly on Amazon, with issuer-published rates that vary by Prime status and transaction type. It is not automatically best for every user: compare your actual eligible Amazon and Amazon Pay spend and check current caps/exclusions. IDFC FIRST WOW and Scapia Federal target different needs such as FD-backed access, foreign-currency markup, app-booking rewards and spend-conditioned airport privileges.",
        },
      },
      {
        "@type": "Question",
        name: "Is Amazon Pay ICICI really free with no hidden charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ICICI Bank lists no joining or annual fee. Reward eligibility, crediting, reversals for refunded transactions and redemption are governed by the bank's current terms; check the latest card FAQ and MITC before applying.",
        },
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI work if I am not an Amazon Prime member?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-Prime members earn 3% on eligible Amazon.in purchases, compared with 5% for Prime members. Eligible Amazon Pay partner transactions can earn 2%, and other eligible transactions 1%; digital products, gift cards and some merchant/category types have separate rates or exclusions. Do not assume a Prime subscription is worthwhile from the headline rate alone—compare your eligible spend and the current subscription price.",
        },
      },
      {
        "@type": "Question",
        name: "What is AU LIT credit card and why is it recommended?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AU LIT has a lifetime-free base card, while optional reward and cashback features have their own fees, minimum spends, caps and 90-day terms; the bank says features may auto-renew. Check the current in-app terms and renewal setting before activating a feature. Do not treat the base card as a free accelerated-reward product.",
        },
      },
      {
        "@type": "Question",
        name: "Should I get multiple free credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A small card stack can help when each card fills a real spending gap, but multiple applications add complexity and may affect credit enquiries. Amazon Pay ICICI targets Amazon and Amazon Pay spends; IDFC FIRST WOW is FD-backed with zero forex markup; Scapia rewards eligible app bookings and has spend-conditioned airport privileges. Compare the terms, exclusions and your actual use before applying.",
        },
      },
      {
        "@type": "Question",
        name: "Does building a free card stack hurt my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several card applications can result in credit enquiries, but the score impact varies by profile and scoring model. Multiple cards do not automatically improve a score. Apply when needed, pay in full and on time, and keep balances manageable relative to available limits.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best free credit cards for students in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A student's approval depends on the issuer's current eligibility checks and the applicant's circumstances. An FD-backed product may be one route to ask about, but it requires setting aside a deposit and still has fees, interest and repayment terms. Compare the issuer's current offer and do not assume approval based on age, student status or a generic income threshold.",
        },
      },
      {
        "@type": "Question",
        name: "How does AU Xcite ACE compare to Amazon Pay ICICI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AU Xcite ACE is not lifetime-free: the current card record lists a ₹749 annual fee, with a ₹2 lakh retail-spend waiver from year two. Its milestone cashback depends on qualifying monthly spend and is not a flat 2% on every purchase. Compare the current fee and milestone terms with Amazon Pay ICICI's category-based cashback before choosing.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a catch with lifetime-free credit cards in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A lifetime-free offer means no joining or annual membership fee under the current product terms, but other charges can still apply (for example, interest, late fees or transaction-specific charges). Issuers may change product benefits under their terms; check the latest MITC and fee schedule rather than relying on historical rates.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "No-Annual-Fee Credit Cards in India: Compare Current Features",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-28",
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
        name: "Best Cashback Credit Card No Annual Fee",
        item: "https://www.assurefintech.com/best/best-cashback-credit-card-no-annual-fee",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #021509, #073417, #021509)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #16a34a22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            No-Annual-Fee Credit Cards in India: Compare Current Features
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
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Cashback Credit Card No Annual Fee
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
        Free Cards
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Amazon Pay ICICI can suit shoppers who make eligible Amazon purchases, but no single card is best for everyone. Compare its applicable rate, reward form, exclusions and your own spending.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      {/* Key callout */}
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
        <strong style={{ color: COLOR }}>Compare net value:</strong> Calculate using your eligible purchases, Prime status, reward form, exclusions, caps and fee; a headline rate is not a guaranteed annual return.
      </div>

      {/* Section 1: The myth */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The "No Fee = No Reward" Myth: Busted Completely
        </h2>
        <p>
          A credit card can offer rewards without an annual fee, but a no-fee card is not automatically better value than a paid one. Compare eligible reward earning, caps, exclusions, redemption options and any fee you would actually pay after a waiver.
        </p>
        <p>
          Issuers and co-brand partners may use different commercial arrangements to support card products and benefits. Without product-specific disclosures, it is not possible to attribute a particular cashback rate to one funding source. For cardholders, the practical comparison is the current fee schedule and reward terms.
        </p>
        <p>
          Some paid cards may offer benefits that a no-annual-fee card does not, while free cards may be sufficient for other spending profiles. Estimate the value you can actually use and compare it with the fee; lounge access or points are not automatically worth a particular rupee amount.
        </p>
      </section>

      {/* Top picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Products to compare — not an ordered ranking</h2>
        <p>These examples serve different needs and are not ranked against one another. Fees and rewards below are starting points from the current product terms; eligibility, caps, exclusions and redemption rules can change what you receive.</p>

        {[
          {
            rank: "Compare",
            name: "Amazon Pay ICICI",
            tag: "Amazon-focused lifetime-free option",
            fee: "Free (lifetime)",
            reward: "5% Amazon Prime / 3% non-Prime / 2% Amazon Pay / 1% base",
            best: "Regular Amazon shoppers, Prime members",
            slug: "amazon-icici",
          },
          {
            rank: "Compare",
            name: "IDFC FIRST WOW",
            tag: "Best for International + Points that Don't Expire",
            fee: "Free (secured against FD)",
            reward: "FD-backed (minimum FD ₹20,000); 0% forex markup; points and fees apply",
            best: "International travelers, new-to-credit applicants",
            slug: "idfc-wow",
          },
          {
            rank: "Compare",
            name: "Scapia Federal Card",
            tag: "Best Free Travel Card",
            fee: "Free",
            reward: "4% effective on eligible Scapia app bookings; 2% eligible Visa spends; airport privileges after ₹20K preceding-cycle spend",
            best: "Domestic flyers who want lounge access",
            slug: "scapia",
          },
          {
            rank: "Compare",
            name: "AU LIT",
            tag: "Lifetime-free base card; optional features cost extra",
            fee: "Free",
            reward: "Optional reward/cashback features have separate fees, terms and caps",
            best: "People who want to choose a specific paid feature after checking its terms",
            slug: "au-lit",
          },
          {
            rank: "Paid option",
            name: "AU Xcite ACE",
            tag: "Fee-based alternative — not a no-annual-fee card",
            fee: "₹749/year; ₹2L retail-spend waiver from year 2",
            reward: "Milestone cashback up to 3%; qualifying spend conditions apply",
            best: "Readers comparing paid cashback cards; excluded from lifetime-free rankings",
            slug: "au-xcite-ace",
          },
        ].map((card) => (
          <div
            key={card.slug}
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
                {card.rank === "Paid option" ? "₹" : "↔"}
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


      {/* Section 2: Amazon Pay ICICI deep dive */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Amazon Pay ICICI: fee structure and eligible reward categories
        </h2>
        <p>
          Amazon Pay ICICI is listed as lifetime-free. Cashback rates and eligible categories can change, so confirm the issuer's current Prime/non-Prime rates, caps and exclusions before treating historical rates as guaranteed.
        </p>
        <p>
          Cashback is credited as Amazon Pay balance under the product's current terms. Eligible transaction types, Prime status and excluded purchases affect the realized return; verify the latest issuer terms rather than assuming every Amazon transaction qualifies.
        </p>
        <p>
          Amazon Pay transactions may earn a different rate from Amazon.in purchases, and bill-payment categories can have separate exclusions. Check the transaction type and current card terms before routing utilities, insurance or other payments through Amazon Pay for rewards.
        </p>
        <p>
          Read the full breakdown: <Link href="/cards/amazon-pay-icici">Amazon Pay ICICI Card Complete Review 2026</Link>.
        </p>
      </section>


      {/* Section 3: The stack */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Building the Full Free-Card Stack
        </h2>
        <p>
          No single free card covers every category, but holding several cards is optional. Consider another card only if its eligible benefits fill a real gap and outweigh any fee, deposit requirement and account-management effort.
        </p>
        <p>
          A possible no-annual-fee stack is Amazon Pay ICICI for eligible Amazon/Amazon Pay transactions, IDFC FIRST WOW for FD-backed access and zero-forex-markup transactions, and Scapia for eligible app bookings and airport privileges when its preceding-billing-cycle spend condition is met. AU LIT may cover selected categories, but review any paid add-on choices. The best combination depends on your actual spend and each card's exclusions.
        </p>
        <p>
          Managing several credit cards adds dates and statements to track. If you use autopay, choose the full statement balance where available and keep enough funds in the linked account; paying only the minimum can leave interest-bearing balances. Review statements and rewards regularly.
        </p>
        <p>
          Use our <Link href="/stack-builder">Stack Builder</Link> to model this combination against your actual spending and see the exact annual return calculation.
        </p>
      </section>


      {/* Section 4: When to upgrade */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          When Free Cards Are Not Enough Anymore
        </h2>
        <p>
          Whether a free card is enough depends on your spending and the benefits you value. Paid cards may be worth comparing for travel privileges, milestone rewards or stronger category returns, but calculate value after fees, caps and exclusions.
        </p>
        <p>
          The honest upgrade signal: if a paid card's eligible rewards on your actual spending exceed the annual fee after caps and exclusions, it may be worth considering. HSBC Live+ advertises 10% accelerated cashback up to ₹1,000/month on eligible dining, food delivery and grocery spend; check current fee and waiver terms too.
        </p>
        <p>
          Also see our <Link href="/best/best-credit-card-under-500-annual-fee">Best Credit Cards Under ₹500 Annual Fee</Link> guide — Axis ACE at ₹499 is the entry-point paid card worth considering before stepping up to ₹1,000+ fee cards.
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
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Your Free Card Action Plan</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Start with your actual spending.</strong> Check whether you regularly use the eligible categories and redemption options of a no-fee card before applying; no card is the default best choice for everyone.
          </li>
          <li>
            <strong>If you make foreign-currency purchases,</strong> compare the issuer's forex markup, network conversion and any other transaction charges. A 0% issuer markup does not mean every conversion route is cost-free.
          </li>
          <li>
            <strong>If you travel through airports,</strong> consider Scapia's airport privileges only if you can meet the ₹20,000 spend condition in the preceding billing cycle and the current in-app offer rules.
          </li>
          <li>
            <strong>Check each reward's conditions:</strong> eligible merchant/category, cap, exclusions, redemption, any required deposit, and whether an optional add-on has its own fee or auto-renewal.
          </li>
          <li>
            <strong>Avoid unnecessary or clustered applications.</strong> Each lender decides eligibility; there is no universal waiting period that guarantees approval or prevents a score change.
          </li>
          <li>
            <strong>Consider autopay for the full statement balance</strong> where available, and keep funds in the linked account. A minimum-only payment may leave an interest-bearing balance.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Wondering how much your free stack could earn? <Link href="/smart-swipe">Smart Swipe</Link> calculates estimated annual cashback based on your spending inputs in under 90 seconds.
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
          <li><Link href="/cards/amazon-icici">Amazon Pay ICICI Card Full Review</Link></li>
          <li><Link href="/best/best-credit-card-under-500-annual-fee">Best Credit Cards Under ₹500 Annual Fee</Link></li>
          <li><Link href="/best/credit-card-for-international-spending">Compare Cards for International Spending</Link></li>
          <li><Link href="/blog/build-3-card-stack-guide">How to build a card stack</Link></li>
          <li><Link href="/stack-builder">Stack Builder: Calculate Your Free Stack Return</Link></li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Editorial note:</strong> Assure Fintech is an independent editorial platform. Cashback rates and card terms can change; use each issuer's current terms before applying. Some links may earn a referral commission, which does not determine our product selection.
      </footer>
    </main>
    </>
  );
}
