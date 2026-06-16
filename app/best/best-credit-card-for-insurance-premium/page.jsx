import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Insurance Premium Payment in India (June 2026)",
  description: "Paying your ₹50,000 annual insurance premium on the wrong card costs you ₹665 in lost rewards. Here's how to not leave it on the table.",
  alternates: { canonical: "/best/best-credit-card-for-insurance-premium" },
  openGraph: {
    title: "Best Credit Card for Insurance Premium Payment in India (June 2026)",
    description: "Paying your ₹50,000 annual insurance premium on the wrong card costs you ₹665 in lost rewards. Here's how to not leave it on the table.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-insurance-premium
// Updated: June 4, 2026

const COLOR = "#0891b2";
const UPDATED = "June 4, 2026";

function ShieldHeartIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shield with heart representing insurance premium payment">
      <path d="M22 4L6 10v10c0 8.284 5.928 15.637 14 17 8.072-1.363 14-8.716 14-17V10L22 4z" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M16 21c0-2.21 1.79-4 4-4 1.1 0 2.1.45 2.83 1.17.73-.72 1.73-1.17 2.83-1.17 2.21 0 4 1.79 4 4 0 4.41-6.83 7-7 7S16 25.41 16 21z" fill={COLOR} fillOpacity="0.5" stroke={COLOR} strokeWidth="1.2"/>
    </svg>
  );
}

function RupeeStackIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stack of rupee coins representing insurance premium amount">
      <ellipse cx="22" cy="36" rx="14" ry="5" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.2"/>
      <ellipse cx="22" cy="30" rx="14" ry="5" fill={COLOR} fillOpacity="0.25" stroke={COLOR} strokeWidth="1.2"/>
      <ellipse cx="22" cy="24" rx="14" ry="5" fill={COLOR} fillOpacity="0.4" stroke={COLOR} strokeWidth="1.2"/>
      <text x="22" y="27" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">₹50K</text>
    </svg>
  );
}

function ExcludedBadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Red X indicating insurance excluded from card rewards">
      <circle cx="12" cy="12" r="11" fill="var(--red-dim)" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="7" y1="7" x2="17" y2="17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="7" x2="7" y2="17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IncludedBadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Green checkmark indicating insurance earns rewards">
      <circle cx="12" cy="12" r="11" fill="var(--green-dim)" stroke="#22c55e" strokeWidth="1.5"/>
      <path d="M7 12l3.5 3.5L17 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function YearlyVsMonthlyIcon() {
  return (
    <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar showing annual vs monthly premium payment comparison">
      <rect x="2" y="2" width="22" height="40" rx="3" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <text x="13" y="18" textAnchor="middle" fontSize="7" fill={COLOR} fontWeight="700">Annual</text>
      <text x="13" y="28" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="800">1x</text>
      <text x="13" y="37" textAnchor="middle" fontSize="6" fill="var(--text-muted)">payment</text>
      <rect x="32" y="2" width="22" height="40" rx="3" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <text x="43" y="16" textAnchor="middle" fontSize="7" fill="var(--text-muted)">Monthly</text>
      <text x="43" y="26" textAnchor="middle" fontSize="9" fill="var(--text-muted)" fontWeight="800">12x</text>
      <text x="43" y="37" textAnchor="middle" fontSize="6" fill="var(--text-muted)">payments</text>
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="American Express card representing Amex MRCC insurance premium rewards">
      <rect x="2" y="10" width="40" height="24" rx="4" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="28" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="800">Amex</text>
      <text x="22" y="20" textAnchor="middle" fontSize="7" fill="var(--text-muted)">2% on insurance</text>
    </svg>
  );
}

function LostRewardMeter() {
  return (
    <svg width="100%" height="48" viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing reward earned vs lost on insurance premium by card type">
      <text x="0" y="12" fontSize="9" fill="var(--text-muted)">Reward on ₹50,000 annual premium</text>
      <rect x="0" y="18" width="200" height="12" rx="3" fill={COLOR} fillOpacity="0.7"/>
      <text x="204" y="28" fontSize="9" fill={COLOR} fontWeight="700">₹665 (HDFC Regalia)</text>
      <rect x="0" y="34" width="60" height="12" rx="3" fill="var(--border)"/>
      <text x="64" y="44" fontSize="9" fill="var(--text-muted)">₹0 (SBI Cashback, excluded)</text>
    </svg>
  );
}

const insuranceCardPicks = [
  {
    name: "HDFC Regalia Credit Card",
    issuer: "HDFC Bank",
    fee: "₹2,500/yr",
    feeWaiver: "Waived on ₹3L annual spend",
    insuranceRate: "4 points per ₹150 = ~1.33%",
    exclusions: "None on insurance premiums",
    slug: "hdfc-regalia",
    annualRewardOn50k: "₹665",
    note: "The most accessible card that earns full rewards on insurance. No exclusion clause on insurance category.",
    best: true,
  },
  {
    name: "Amex Membership Rewards Credit Card",
    issuer: "American Express",
    fee: "₹1,000/yr",
    feeWaiver: "Free for first year",
    insuranceRate: "1 MR point per ₹50 = ~2% if redeemed for travel",
    exclusions: "None on insurance",
    slug: "amex-mrcc",
    annualRewardOn50k: "₹1,000 (if well redeemed)",
    note: "Best rate if you actively use Amex Membership Rewards program. Amex acceptance is limited at insurance company portals.",
    best: false,
  },
  {
    name: "Axis Magnus Credit Card",
    issuer: "Axis Bank",
    fee: "₹12,500/yr",
    feeWaiver: "Waived on ₹15L annual spend",
    insuranceRate: "12 EDGE Miles per ₹200 = ~1.5 to 2%",
    exclusions: "Check for insurance MCC exclusions",
    slug: "axis-magnus",
    annualRewardOn50k: "₹750 to ₹1,000",
    note: "Only worth it if you're using Magnus for overall ₹15L+ annual spend. Don't get Magnus just for insurance.",
    best: false,
  },
];

const excludedCards = [
  {
    name: "SBI Cashback Card",
    headline: "5% cashback",
    insurance: "0% (explicitly excluded)",
    clause: "'Insurance premium payment' listed in exclusion clause",
  },
  {
    name: "HDFC Millennia",
    headline: "5% on partner merchants",
    insurance: "0% to 1% (not a partner category)",
    clause: "Insurance not in 5% partner category list",
  },
  {
    name: "Axis ACE",
    headline: "5% on Swiggy/Zomato/utility",
    insurance: "2% (not in 5% category)",
    clause: "Insurance not in utility/partner category",
  },
  {
    name: "Amazon Pay ICICI",
    headline: "5% on Amazon (Prime)",
    insurance: "1% flat",
    clause: "Insurance not an Amazon partner category",
  },
];

export default function BestCreditCardForInsurancePremium() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card is best for paying insurance premiums in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Regalia is the most accessible card that earns full reward points on insurance premium payments with no exclusion clause. Amex MRCC earns 2% effective value if you redeem points well. SBI Cashback explicitly excludes insurance, making it one of the worst choices despite its headline 5% rate.",
        },
      },
      {
        "@type": "Question",
        name: "Does SBI Cashback card give 5% on insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Insurance premium payments are explicitly listed in SBI Cashback's exclusion list. You earn 0% on insurance paid with this card, despite the 5% headline rate. This is one of the most common misconceptions about this card.",
        },
      },
      {
        "@type": "Question",
        name: "Is it better to pay insurance premium annually or monthly on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Annual payment is almost always better for credit card rewards. A single ₹50,000 transaction earns reward points in one cycle. Monthly payments of ₹4,166 may fall below minimum reward thresholds on some cards, and you earn the same total but with 12 transactions and 12 billing cycle considerations.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay LIC premium with a credit card and earn rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, LIC accepts credit card payments. However, LIC online portal may impose a surcharge (typically 0.9 to 1%) on credit card payments. Factor this into your reward calculation. HDFC Regalia earning 1.33% on a 0.9% surcharge still leaves a positive 0.43% net.",
        },
      },
      {
        "@type": "Question",
        name: "Do credit card reward points expire on insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reward points expiry depends on the issuer, not the transaction type. HDFC Regalia points expire 2 years from earning. Amex MR points don't expire as long as the account is active. Always redeem before expiry dates regardless of how the points were earned.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay health, term, and car insurance all on the same card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If your card earns on insurance MCCs, it will earn on health, term, and car insurance equally. Consolidating all three to one card like HDFC Regalia or Amex MRCC maximises your reward per year and keeps your insurance spend in one trackable place.",
        },
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia give cashback on insurance premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Millennia's 5% cashback applies to partner merchants only. Insurance portals are not in this partner list. Insurance payments with Millennia earn approximately 1% cashback, not 5%. HDFC Regalia is the better HDFC card for insurance premium payments.",
        },
      },
      {
        "@type": "Question",
        name: "What is the MCC code for insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Insurance companies are typically assigned MCC 6300 (Insurance Sales and Underwriting) or MCC 6311 (Life Insurance). When your card has exclusions based on MCC codes, these two are most commonly listed. HDFC Regalia has no listed exclusion on these MCCs.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Insurance Premium Payment in India (June 2026)",
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
        name: "Best Credit Card for Insurance Premium",
        item: "https://assurefintech.com/best/credit-card-for-insurance-premium",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #011217, #022E38, #011217)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #0891b222, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Insurance Premium Payment in India (June 2026)
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

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/best/">Best Cards</Link>
        {" / "}
        Best Credit Card for Insurance Premium
      </nav>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: `${COLOR}18`,
          color: COLOR,
          fontSize: 12,
          fontWeight: 600,
          padding: "4px 12px",
          borderRadius: 20,
          marginBottom: 16,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        <ShieldHeartIcon />
        Insurance Premiums
      </div>


      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Paying your ₹50,000 annual insurance premium on the wrong card costs you ₹665 in lost rewards. Here's how to not leave it on the table.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </p>

      {/* Lead visual comparison */}
      <div
        style={{
          background: `${COLOR}08`,
          border: `1.5px solid ${COLOR}30`,
          borderRadius: 10,
          padding: "22px 24px",
          marginBottom: 40,
        }}
      >
        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <RupeeStackIcon />
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>The honest number on this page</div>
            <p style={{ margin: 0, fontSize: 14 }}>
              On a ₹50,000 annual insurance premium portfolio, HDFC Regalia earns ₹665 in reward points. SBI Cashback earns ₹0. The same payment, two different outcomes, based purely on which card you use.
            </p>
          </div>
        </div>
        <LostRewardMeter />
      </div>

      {/* Cards that exclude insurance */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The cards that quietly give you nothing on insurance</h2>

        <p>
          The most popular cashback cards in India all have explicit or effective exclusions for insurance premium payments. Knowing this before you pay is the entire point of this guide.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
          {excludedCards.map((card) => (
            <div
              key={card.name}
              style={{
                display: "flex",
                gap: 14,
                padding: "14px 16px",
                background: "var(--red-dim)",
                border: "1px solid #fca5a5",
                borderRadius: 8,
              }}
            >
              <div style={{ marginTop: 2 }}>
                <ExcludedBadgeIcon />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <div style={{ fontWeight: 700 }}>{card.name}</div>
                  <div style={{ fontSize: 12, background: "var(--red-dim)", border: "1px solid #fca5a5", borderRadius: 12, padding: "2px 8px", color: "#dc2626" }}>
                    Headline: {card.headline}
                  </div>
                </div>
                <div style={{ fontSize: 13, marginBottom: 4 }}>
                  <strong style={{ color: "#dc2626" }}>Insurance rate: {card.insurance}</strong>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.clause}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cards that earn on insurance */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Cards that actually earn on insurance premium payments</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {insuranceCardPicks.map((card) => (
            <div
              key={card.slug}
              style={{
                border: card.best ? `2px solid ${COLOR}` : "1.5px solid var(--border)",
                borderRadius: 10,
                padding: "20px 22px",
                background: card.best ? `${COLOR}07` : "var(--raise)",
                position: "relative",
              }}
            >
              {card.best && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 18,
                    background: COLOR,
                    color: "var(--raise)",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Best for Insurance
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{card.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{card.issuer}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, color: COLOR }}>{card.fee}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.feeWaiver}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", fontSize: 14, marginBottom: 10 }}>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>Insurance reward rate: </span>
                  <strong style={{ color: "#16a34a" }}>{card.insuranceRate}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>Exclusions: </span>
                  {card.exclusions}
                </div>
                <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--text-muted)" }}>Reward on ₹50,000 premium: </span>
                  <span
                    style={{
                      background: `${COLOR}15`,
                      color: COLOR,
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: 12,
                      fontSize: 14,
                    }}
                  >
                    {card.annualRewardOn50k}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <IncludedBadgeIcon />
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{card.note}</div>
              </div>
              <Link
                href={`/cards/${card.slug}`}
                style={{ color: COLOR, fontSize: 13, fontWeight: 600, textDecoration: "none", borderBottom: `1px solid ${COLOR}40` }}
              >
                Full review and apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Annual vs monthly strategy */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
          <YearlyVsMonthlyIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Annual vs monthly premium: which is better for rewards?</h2>
        </div>

        <p>
          Almost every insurance company offers you a choice between annual and monthly premium payment. For credit card rewards, annual payment is almost always better.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginTop: 16,
          }}
        >
          <div style={{ background: `${COLOR}08`, border: `1.5px solid ${COLOR}40`, borderRadius: 8, padding: "16px 18px" }}>
            <div style={{ fontWeight: 700, color: COLOR, marginBottom: 10 }}>Annual payment: better for rewards</div>
            {[
              "Single ₹50,000 transaction = one large reward credit",
              "Avoids minimum transaction reward thresholds",
              "Simpler: one payment, one billing cycle, one reward posting",
              "Many cards give bonus points on high-value single transactions",
            ].map((p) => (
              <div key={p} style={{ fontSize: 13, marginBottom: 6, display: "flex", gap: 8 }}>
                <span style={{ color: COLOR }}>+</span> {p}
              </div>
            ))}
          </div>
          <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "16px 18px" }}>
            <div style={{ fontWeight: 700, color: "var(--text-muted)", marginBottom: 10 }}>Monthly payment: often weaker</div>
            {[
              "12 x ₹4,166 = same total but scattered across cycles",
              "Some cards have per-transaction minimum reward calculations",
              "Cash flow advantage is real but reward value is identical",
              "More chances for a missed autopay to cause issues",
            ].map((p) => (
              <div key={p} style={{ fontSize: 13, marginBottom: 6, display: "flex", gap: 8 }}>
                <span style={{ color: "var(--text-muted)" }}>-</span> {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full premium portfolio */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The ₹50,000 annual premium portfolio: card-by-card comparison</h2>

        <p>
          A typical middle-class Indian family in 2026 pays ₹40,000 to ₹80,000 per year across term, health, and car insurance. Here's exactly how much you'd earn on a ₹50,000 portfolio with each card.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Card", "Annual Fee", "Insurance Rate", "Reward on ₹50K", "Net (after fee)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["HDFC Regalia", "₹2,500", "1.33%", "₹665", "-₹1,835 (from fee alone)"],
                ["Amex MRCC", "₹1,000", "2%", "₹1,000", "₹0 (net neutral)"],
                ["Axis Magnus", "₹12,500", "1.5 to 2%", "₹750 to ₹1,000", "Needs full spend base"],
                ["HDFC Millennia", "₹1,000", "1%", "₹500", "-₹500 (net negative)"],
                ["SBI Cashback", "₹999", "0%", "₹0", "-₹999 (fee wasted)"],
                ["Amazon Pay ICICI", "Free", "1%", "₹500", "+₹500 (net positive)"],
              ].map(([card, fee, rate, reward, net], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{card}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{fee}</td>
                  <td style={{ padding: "10px 14px" }}>{rate}</td>
                  <td style={{ padding: "10px 14px", color: "#16a34a", fontWeight: 600 }}>{reward}</td>
                  <td
                    style={{
                      padding: "10px 14px",
                      fontWeight: 600,
                      color: net.startsWith("+") ? "#16a34a" : net.startsWith("-") ? "#dc2626" : "inherit",
                      fontSize: 12,
                    }}
                  >
                    {net}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 10 }}>
          Note: Regalia's net negative from fee alone doesn't mean it's a bad card. Regalia earns across all your other spend too. The table shows insurance-only economics. Overall card value is much higher.
        </p>
      </section>

      {/* Insurance breakdown */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <AmexIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Term, health, and car insurance: which to prioritise on the best card</h2>
        </div>

        <p>
          If you have a card like Regalia that earns on insurance, stack all three types on it. The MCC is the same (life/non-life insurance) and you'll earn the same rate across all.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 16 }}>
          {[
            { type: "Term Insurance", typical: "₹15,000 to ₹25,000/yr", note: "Largest single premium. Always pay annual, not monthly." },
            { type: "Health/Mediclaim", typical: "₹10,000 to ₹25,000/yr", note: "Family floater premiums can be high. Annual payment preferred." },
            { type: "Car/Bike Insurance", typical: "₹5,000 to ₹15,000/yr", note: "Renewal timing varies. Set a reminder 7 days before to use the right card." },
          ].map((item) => (
            <div
              key={item.type}
              style={{
                background: "var(--raise)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "14px 16px",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.type}</div>
              <div style={{ fontSize: 13, color: COLOR, marginBottom: 4 }}>{item.typical}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{item.note}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 16,
            padding: "14px 16px",
            background: `${COLOR}08`,
            border: `1px solid ${COLOR}30`,
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          For policy-level decisions on whether to buy term vs ULIP, or how much health cover you need, see our{" "}
          <Link href="/learn/insurance" style={{ color: COLOR }}>
            insurance guide
          </Link>
          . This page is only about which card to use when paying your premium.
        </div>
      </section>

      {/* Actionable ending */}
      <section
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderRadius: 10,
          padding: "24px 26px",
          marginBottom: 44,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Your action plan for insurance premium payments</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            Pull up the T&amp;C of every credit card you own. Search for "insurance" in the exclusion list. Mark the ones that exclude it.
          </li>
          <li>
            If you have HDFC Regalia or Amex MRCC: use it for all your insurance renewals this year. Set a reminder at renewal time.
          </li>
          <li>
            Switch to annual premium payment for all policies if you're currently paying monthly. Same cost, better reward mechanics.
          </li>
          <li>
            Use the{" "}
            <Link href="/stack-builder" style={{ color: COLOR }}>
              Stack Builder tool
            </Link>{" "}
            to build a 2-card stack where one earns on insurance and one earns on your other top spend category.
          </li>
          <li>
            Check for LIC portal surcharge before paying large LIC premiums on card. Factor it into your reward calculation.
          </li>
        </ol>
      </section>

      {/* Related */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Read next</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/cards/hdfc-regalia" style={{ color: COLOR, fontSize: 14 }}>
            HDFC Regalia full review: the best all-round card for salaried professionals in 2026
          </Link>
          <Link href="/cards/amex-mrcc" style={{ color: COLOR, fontSize: 14 }}>
            Amex MRCC review: is the Membership Rewards program worth it in India?
          </Link>
          <Link href="/best/credit-card-for-rent-payment" style={{ color: COLOR, fontSize: 14 }}>
            Best credit card for rent payment: the break-even math you need to see
          </Link>
          <Link href="/learn/insurance" style={{ color: COLOR, fontSize: 14 }}>
            Insurance guide: how much cover you actually need in India
          </Link>
          <Link href="/blog/credit-card-insurance-premium-exclusions-india" style={{ color: COLOR, fontSize: 14 }}>
            Full list: Indian credit cards that exclude insurance from rewards (2026)
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faq.mainEntity.map((item, i) => (
            <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
              <summary
                style={{
                  fontWeight: 600,
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.name}
                <span style={{ color: COLOR, fontSize: 18, fontWeight: 300, marginLeft: 12 }}>+</span>
              </summary>
              <p style={{ margin: "10px 0 0", color: "var(--text-muted)", fontSize: 14 }}>
                {item.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          lineHeight: 1.8,
        }}
      >
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Reward structures, exclusion lists, and insurance premium policies are based on issuer terms as of {UPDATED}. Reward values listed are estimates based on standard redemption rates and may vary. This is not insurance advice or financial advice. Verify current card T&amp;C with the issuing bank and insurance terms with your insurer. Assure Fintech may earn referral fees from some card issuers.
      </footer>
    </main>
    </>
  );
}
