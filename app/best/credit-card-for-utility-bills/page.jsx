import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Cards for Utility Bills: Current Rewards Compared",
  description: "Compare utility-bill card rewards, payment-platform conditions, shared caps and transaction fees using issuer terms.",
  alternates: { canonical: "/best/credit-card-for-utility-bills" },
  openGraph: {
    title: "Best Credit Cards for Utility Bills: Current Rewards Compared",
    description: "Compare utility-bill card rewards, payment-platform conditions, shared caps and transaction fees using issuer terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-utility-bills
// Updated: September 26, 2026

const COLOR = "#16a34a";
const UPDATED = "September 26, 2026";
const SOURCES = {
  ace: "https://www.axis.bank.in/cards/credit-card/axis-bank-ace-credit-card",
  aceTerms: "https://www.axis.bank.in/docs/default-source/default-document-library/credit-cards/terms-and-conditions-axis-bank-ace-credit-card.pdf?sfvrsn=1109dfe1_2",
  amazon: "https://www.icicibank.com/personal-banking/cards/credit-card/amazon-pay-credit-card/amazon-pay-faq",
  millennia: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0",
  sbi: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/cashback-revised.pdf",
};

// --- SVG Components ---

function UtilityRewardRateComparison() {
  const cards = [
    { name: "Axis ACE", rate: 5, note: "Google Pay only; shared ₹500 cap" },
    { name: "Amazon Pay ICICI", rate: 2, note: "Eligible Amazon Pay billers" },
    { name: "HDFC Millennia", rate: 1, note: "Other eligible spend tier" },
    { name: "SBI Cashback", rate: 0, note: "Utility spends excluded" },
    { name: "Other cards", rate: 0, note: "Check each issuer's terms" },
  ];
  return (
    <svg
      viewBox="0 0 680 282"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bar chart comparing reward rates on utility bill payments across major Indian credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Selected headline utility reward terms (eligibility and caps apply)</text>
      {[0, 1, 2, 3, 4, 5].map((v) => (
        <g key={v}>
          <text x="42" y={215 - v * 32} fontSize="11" fill="var(--text-muted)" textAnchor="end">{v}%</text>
          <line x1="48" y1={215 - v * 32} x2="650" y2={215 - v * 32} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4,3" />
        </g>
      ))}
      {cards.map((c, i) => {
        const barH = c.rate * 32;
        const x = 68 + i * 114;
        return (
          <g key={c.name}>
            <rect x={x} y={215 - barH} width="68" height={Math.max(barH, 4)} rx="4" fill={c.rate >= 5 ? COLOR : c.rate >= 2 ? "rgba(62,224,143,.35)" : "var(--border)"} opacity="0.9" />
            {c.rate > 0 && (
              <text x={x + 34} y={210 - barH} textAnchor="middle" fontSize="11" fontWeight="700" fill={c.rate >= 5 ? COLOR : "var(--text-muted)"}>{c.rate}%</text>
            )}
            <text x={x + 34} y="230" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{c.name}</text>
            <text x={x + 34} y="244" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{c.note}</text>
          </g>
        );
      })}
      <text x="340" y="258" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">This is not a universal ranking; platform, merchant, cap, and exclusions determine eligible cashback.</text>
    </svg>
  );
}

function MDRExplainerDiagram() {
  return (
    <svg
      viewBox="0 0 680 211"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing how payment channel and issuer rules determine utility bill rewards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Why utility rewards need careful eligibility checks</text>
      <rect x="20" y="44" width="140" height="56" rx="8" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.2" />
      <text x="90" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>Utility bill</text>
      <text x="90" y="84" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Payment channel</text>
      <text x="90" y="97" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Biller / transaction details</text>
      <rect x="270" y="44" width="140" height="56" rx="8" fill="var(--raise)" opacity="0.25" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="340" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f59e0b">Issuer terms</text>
      <text x="340" y="84" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Eligible platform</text>
      <text x="340" y="97" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Merchant and cap rules</text>
      <rect x="520" y="44" width="140" height="56" rx="8" fill="var(--raise)" opacity="0.25" stroke="#ef4444" strokeWidth="1.2" />
      <text x="590" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ef4444">Reward outcome</text>
      <text x="590" y="84" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Rate and cap apply</text>
      <text x="590" y="97" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Only if transaction qualifies</text>
      <text x="340" y="128" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ef4444">The issuer's current card terms control</text>
      <text x="340" y="148" textAnchor="middle" fontSize="11" fill="var(--text-muted)">For Axis ACE, accelerated utility cashback is limited to Google Pay.</text>
      <text x="340" y="165" textAnchor="middle" fontSize="11" fill="var(--text-muted)">The eligible utility/recharge tier shares a ₹500 statement-cycle cap with 4% categories.</text>
      <rect x="60" y="175" width="560" height="18" rx="4" fill={COLOR} opacity="0.07" />
      <text x="340" y="187" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="600">Check current card terms, platform eligibility, caps, and fee thresholds before paying.</text>
    </svg>
  );
}

function BBPSVsDirectPaymentTable() {
  const rows = [
    { method: "Google Pay + Axis ACE", reward: "5% utility tier*", works: "Terms apply", note: "Shared ₹500 cap/cycle" },
    { method: "BBPS via another app/card", reward: "No ACE 5% assumed", works: "Check terms", note: "Google Pay required" },
    { method: "Direct on biller's website", reward: "No ACE 5% assumed", works: "Check terms", note: "Non-GPay utility excluded" },
    { method: "Amazon Pay bill payment", reward: "Up to 2%*", works: "Biller-specific", note: "Eligible partner only" },
    { method: "Auto-debit from savings account", reward: "0%", works: "N/A", note: "Not a credit card payment" },
  ];
  return (
    <svg
      viewBox="0 0 680 329"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table comparing reward earning methods for utility bill payment in India"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Payment Method vs Reward Eligibility</text>
      {["Payment Method", "Reward", "Works?", "Notes"].map((h, i) => (
        <text key={h} x={[20, 310, 400, 480][i]} y="48" fontSize="10.5" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="12" y1="54" x2="668" y2="54" stroke="var(--border)" strokeWidth="1" />
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="12" y={58 + i * 38} width="656" height="36" rx="3" fill={i === 0 ? COLOR : "transparent"} opacity={i === 0 ? "0.06" : "1"} />
          <text x="20" y={81 + i * 38} fontSize="10" fill="var(--text)">{r.method}</text>
          <text x="310" y={81 + i * 38} fontSize="10" fontWeight="600" fill={r.reward.startsWith("5") ? COLOR : r.reward.startsWith("2") ? "#f59e0b" : "var(--text-muted)"}>{r.reward}</text>
          <text x="400" y={81 + i * 38} fontSize="10" fill={r.works === "Yes, usually" || r.works === "Yes" ? COLOR : "#ef4444"}>{r.works}</text>
          <text x="480" y={81 + i * 38} fontSize="10" fill="var(--text-muted)">{r.note}</text>
        </g>
      ))}
      <text x="340" y="252" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">*Issuer terms, eligible billers, transaction classification, caps, and fees apply.</text>
    </svg>
  );
}

function MonthlyCapMathTable() {
  return (
    <svg
      viewBox="0 0 680 321"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table showing Axis ACE cashback earned at different monthly utility spending levels"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="220" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Illustrative ACE Utility Cashback Before Fees</text>
      {[
        { spend: "₹2,000/mo", cashback: "Up to ₹100/mo", annual: "Up to ₹1,200/yr", vsAnnualFee: "If cap is unused" },
        { spend: "₹5,000/mo", cashback: "Up to ₹250/mo", annual: "Up to ₹3,000/yr", vsAnnualFee: "If cap is unused" },
        { spend: "₹10,000/mo", cashback: "Up to ₹500/mo", annual: "Up to ₹6,000/yr", vsAnnualFee: "Uses full shared cap" },
        { spend: "₹20,000/mo", cashback: "₹500/mo max*", annual: "₹6,000/yr max*", vsAnnualFee: "Shared cap reached" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="16" y={50 + i * 38} width="648" height="36" rx="4" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.04" : "1"} />
          <text x="30" y={73 + i * 38} fontSize="12" fontWeight="600" fill="var(--text)">{r.spend}</text>
          <text x="190" y={73 + i * 38} fontSize="12" fill={COLOR} fontWeight="600">{r.cashback}</text>
          <text x="340" y={73 + i * 38} fontSize="12" fill={COLOR} fontWeight="700">{r.annual}</text>
          <text x="480" y={73 + i * 38} fontSize="11" fill="var(--text-muted)">{r.vsAnnualFee}</text>
        </g>
      ))}
      <text x="30" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Monthly Utility Spend</text>
      <text x="190" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Monthly Cashback</text>
      <text x="340" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Annual Cashback</text>
      <text x="480" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Assumption</text>
      <text x="340" y="212" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">*5% applies only to eligible Google Pay utility/recharge spend; ₹500/cycle shared with 4% categories. Before fees/surcharges.</text>
    </svg>
  );
}

function UtilityStackDiagram() {
  return (
    <svg
      viewBox="0 0 680 214"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing conditions and limits for two cards used for utility and online spending"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Two-Card Combination: Check Eligibility and Costs</text>
      <rect x="30" y="44" width="270" height="80" rx="10" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" />
      <text x="165" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Axis ACE (fee and waiver terms apply)</text>
      <text x="165" y="84" textAnchor="middle" fontSize="10.5" fill="var(--text)">Eligible utilities/recharges via Google Pay</text>
      <text x="165" y="100" textAnchor="middle" fontSize="10.5" fill="var(--text)">5% tier: ₹500/cycle shared cap</text>
      <text x="165" y="116" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={COLOR}>Utility fee threshold also applies</text>
      <rect x="380" y="44" width="270" height="80" rx="10" fill="#0891b2" opacity="0.25" stroke="#0891b2" strokeWidth="1.5" />
      <text x="515" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0891b2">Amazon Pay ICICI (no joining/annual fee)</text>
      <text x="515" y="84" textAnchor="middle" fontSize="10.5" fill="var(--text)">Amazon purchases and eligible merchants</text>
      <text x="515" y="100" textAnchor="middle" fontSize="10.5" fill="var(--text)">2% only at eligible Amazon Pay billers</text>
      <text x="515" y="116" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0891b2">Check eligible merchant list</text>
      <text x="340" y="156" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">There is no universal best stack or guaranteed annual return.</text>
      <text x="340" y="174" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>Compare eligible spend, shared caps, fees, and utility surcharges.</text>
      <text x="340" y="190" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Verify each issuer's current terms before payment.</text>
    </svg>
  );
}

export default function BestCreditCardForUtilityBills() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives best rewards on electricity and utility bills in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal best card for every utility bill. Axis ACE advertises 5% on eligible utility bills and recharges paid through Google Pay, subject to a shared ₹500 statement-cycle cap and applicable fees. Amazon Pay ICICI offers rewards only on eligible Amazon Pay merchants.",
        },
      },
      {
        "@type": "Question",
        name: "Does Axis ACE give 5% on all utility bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Axis ACE's accelerated utility/recharge offer is limited to eligible transactions through Google Pay; using PhonePe, another BBPS app, or a biller's website does not qualify for that 5% offer. A shared statement-cycle cap applies. See Axis's current product terms.",
        },
      },
      {
        "@type": "Question",
        name: "Why do most credit cards not give rewards on utility bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reward eligibility is set by each issuer's product terms and can depend on the payment channel, merchant eligibility, exclusions, and caps. We do not infer a bank's reward economics from a bill's payment category.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a cap on Axis ACE utility cashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE's 5% Google Pay utility/recharge tier shares a ₹500 cap per statement cycle with its 4% Swiggy, Zomato, and Ola categories. Other fees and eligibility rules can affect net value; consult the current Axis terms.",
        },
      },
      {
        "@type": "Question",
        name: "Is Axis ACE annual fee waivable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis lists a ₹499 joining fee and ₹499 annual fee from the second year, with a waiver when eligible spends in the preceding card year exceed ₹2 lakh. Check the current fee terms and qualifying-spend exclusions before applying.",
        },
      },
      {
        "@type": "Question",
        name: "What is BBPS and should I use it for utility bill payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BBPS is a bill-payment system, but using a BBPS-enabled app does not by itself make a payment eligible for Axis ACE's 5% offer. The ACE utility offer specifies Google Pay. Check both the card issuer's and payment app's current terms.",
        },
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI give cashback on electricity bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It offers 2% at eligible Amazon Pay partner merchants, not on every bill payment. Confirm that the specific biller and transaction appear in the issuer's eligible merchant terms; do not assume an unlisted bill earns 2%.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Axis ACE for LPG cylinder booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE's advertised accelerated utility/recharge offer requires payment through Google Pay and remains subject to transaction and issuer eligibility. The biller's name or an assumed merchant category alone does not guarantee 5% cashback; verify the current terms for your transaction.",
        },
      },
      {
        "@type": "Question",
        name: "Is the two-card strategy (Axis ACE + Amazon Pay ICICI) really the best approach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It may suit some households, but it is not automatically best. Compare your eligible Google Pay utility spend, ACE's shared ₹500 cap and fee threshold, plus Amazon Pay ICICI's eligible merchant rules against the cards you already hold.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Cards for Utility Bills: Current Rewards Compared",
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
        name: "Best Credit Card for Utility Bills",
        item: "https://assurefintech.com/best/credit-card-for-utility-bills",
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
            Best Credit Card for Utility Bills in India (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 7 min read</div>
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
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Utility Bills
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
        Utility Bills
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Utility-bill rewards depend on the card, payment platform, eligible biller, caps and fees. Axis ACE advertises 5% on eligible utility payments and recharges through Google Pay, subject to a shared cap and additional terms.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 7 min read
      </div>

      {/* Alert box */}
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
        <strong style={{ color: COLOR }}>Key finding:</strong> Axis ACE advertises 5% on eligible utility/recharge payments through Google Pay only. This tier shares a ₹500 statement-cycle cap with its 4% categories. Axis also lists a 1% fee when cumulative utility spends reach ₹25,000 or more in a statement cycle; check the current fee schedule and eligibility terms.
      </div>

      {/* Top Picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Cards Ranked for Utility Bill Rewards</h2>

        {[
          {
            rank: "1",
            name: "Axis ACE",
            tag: "For eligible GPay bills",
            fee: "₹499 joining; ₹499 from year 2; spend waiver applies",
            reward: "5% on eligible utilities/recharges via Google Pay",
            best: "Compare eligible spend against shared cap and fees",
            slug: "axis-ace",
          },
          {
            rank: "2",
            name: "Amazon Pay ICICI",
            tag: "Best Free Alternative",
            fee: "Free",
            reward: "2% at eligible Amazon Pay partner merchants",
            best: "If your utility biller is listed on Amazon Pay",
            slug: "amazon-pay-icici",
          },
          {
            rank: "3",
            name: "HDFC Millennia",
            tag: "Passable, Not Great",
            fee: "₹1,000/yr",
            reward: "Potentially 1% as other eligible spend; check terms",
            best: "If you already have this card and want to use one card",
            slug: "hdfc-millennia",
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

      <UtilityRewardRateComparison />

      {/* Section 1: Why utility rewards are rare */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Why Does Almost No Card Reward Utility Bills?
        </h2>
        <p>
          A card's advertised reward rate does not establish whether a particular bill payment qualifies. The issuer's current product terms specify eligible platforms, transaction types, exclusions, caps and fees.
        </p>
        <p>
          For Axis ACE, the Google Pay requirement, shared cashback cap and utility-fee threshold materially affect the result. Other cards and payment services have their own rules; we do not assume that a generic BBPS or merchant-category label qualifies.
        </p>
        <MDRExplainerDiagram />
        <p>
          Use the official issuer links below to confirm current terms before paying. Rates and eligibility may change, and a headline percentage is not a guaranteed net return.
        </p>
        <p>
          For example, SBI Card excludes utility spends from Cashback Card rewards, while other issuers may treat them under a base-spend tier. Review each product's exclusions rather than relying on broad card rankings.
        </p>
      </section>

      <BBPSVsDirectPaymentTable />

      {/* Section 2: How ACE actually works */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Axis ACE: How the 5% Utility Cashback Actually Works
        </h2>
        <p>
          Axis advertises 5% cashback on eligible utility bill payments, DTH and mobile recharges through Google Pay. The offer is channel-specific: using another app or a biller's website does not qualify for this accelerated ACE tier, even if the transaction appears to be a utility payment. Do not rely on MCC 4900 alone to predict cashback.
        </p>
        <p>
          The 5% utility/recharge tier shares a ₹500 cap per statement cycle with the card's 4% Swiggy, Zomato and Ola categories. Cashback may therefore be lower if those categories have already used part of the shared cap.
        </p>
        <p>
          Axis also lists a 1% fee when cumulative utility spends reach ₹25,000 or more in a statement cycle. Check the latest fee schedule and calculate the net benefit before routing large bills to the card.
        </p>
        <p>
          Consult the issuer's current product terms for reward crediting, eligibility and exclusions; do not assume a payment qualifies until the transaction is posted and assessed.
        </p>
      </section>

      <MonthlyCapMathTable />

      {/* Section 3: Stacking strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Utility Card Stack: ACE Plus One More
        </h2>
        <p>
          Axis ACE's advertised rates apply only when eligibility conditions are met: 5% on eligible Google Pay utility/recharge transactions and 4% on specified partners, with the accelerated categories sharing a cap. Compare those conditions with your actual spending.
        </p>
        <p>
          Amazon Pay ICICI has no joining or annual fee and provides rewards under its eligible Amazon and partner-merchant terms. Pairing it with ACE may make sense, but calculate net rewards after caps, fees and biller eligibility rather than assuming a fixed annual return.
        </p>
        <UtilityStackDiagram />
        <p>
          Use our <Link href="/stack-builder">Stack Builder</Link> to model your specific household spend pattern and see the exact annual return from different card combinations. Also see: <Link href="/best/best-cashback-credit-card-no-annual-fee">Best No Annual Fee Cards</Link> for alternative card 2 options.
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
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Action Plan for Utility-Heavy Households</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Estimate net value first.</strong> Calculate eligible Google Pay bills, how much of ACE's shared ₹500 cap remains after 4% categories, annual fee and any utility transaction fee.
          </li>
          <li>
            <strong>Use Google Pay for the ACE accelerated offer.</strong> A different BBPS app or biller website is not covered by the advertised 5% channel condition.
          </li>
          <li>
            <strong>Verify the posted reward</strong> against the issuer's current terms; do not assume a biller or MCC guarantees the advertised rate.
          </li>
          <li>
            <strong>Pair with Amazon Pay ICICI</strong> (free) for online shopping and Amazon Pay merchant transactions.
          </li>
          <li>
            <strong>Check the fee-waiver definition</strong> and exclusions in Axis's current terms before counting spending toward the ₹2 lakh threshold.
          </li>
          <li>
            <strong>Compare other cards on their own current terms;</strong> avoid assuming a headline rate applies to a particular merchant or payment type.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Run the numbers for your household: <Link href="/smart-swipe">Smart Swipe</Link> calculates your estimated annual return from ACE vs alternatives in under 90 seconds.
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
          <li><Link href="/cards/axis-ace">Axis ACE Card Full Review, Benefits, Apply</Link></li>
          <li><Link href="/best/best-credit-card-under-500-annual-fee">Best Credit Cards Under ₹500 Annual Fee</Link></li>
          <li><Link href="/best/best-cashback-credit-card-no-annual-fee">Best No Annual Fee Cashback Cards</Link></li>
          <li><Link href="/blog/bbps-credit-card-rewards-guide">BBPS and Credit Card Rewards: Complete Guide</Link></li>
          <li><Link href="/stack-builder">Build Your Card Stack</Link></li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <p>Issuer references: <a href={SOURCES.ace} target="_blank" rel="noreferrer">Axis ACE product page</a> · <a href={SOURCES.aceTerms} target="_blank" rel="noreferrer">Axis ACE terms</a> · <a href={SOURCES.amazon} target="_blank" rel="noreferrer">Amazon Pay ICICI FAQ</a> · <a href={SOURCES.millennia} target="_blank" rel="noreferrer">HDFC Millennia terms</a> · <a href={SOURCES.sbi} target="_blank" rel="noreferrer">SBI Cashback terms</a>.</p>
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial site with no banking license. Cashback rates, MCC eligibility, and monthly caps on Axis ACE change periodically. Always verify current terms on the Axis Bank website before relying on specific reward rates. Some links may earn a referral commission that does not influence our editorial positions.
      </footer>
    </main>
    </>
  );
}
