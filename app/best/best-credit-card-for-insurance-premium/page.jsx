import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Credit Cards for Insurance Premiums: Rewards, Exclusions and Fees (September 2026)",
  description: "Compare current issuer exclusions, insurance reward caps, payment charges and card fees before paying an insurance premium by credit card.",
  alternates: { canonical: "/best/best-credit-card-for-insurance-premium" },
  openGraph: {
    title: "Credit Cards for Insurance Premiums: Rewards, Exclusions and Fees (September 2026)",
    description: "Compare current issuer exclusions, insurance reward caps, payment charges and card fees before paying an insurance premium by credit card.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-insurance-premium
// Updated: September 26, 2026

const COLOR = "#0891b2";
const UPDATED = "September 26, 2026";

function ShieldHeartIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shield with heart representing insurance premium payment">
      <path d="M22 4L6 10v10c0 8.284 5.928 15.637 14 17 8.072-1.363 14-8.716 14-17V10L22 4z" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M16 21c0-2.21 1.79-4 4-4 1.1 0 2.1.45 2.83 1.17.73-.72 1.73-1.17 2.83-1.17 2.21 0 4 1.79 4 4 0 4.41-6.83 7-7 7S16 25.41 16 21z" fill={COLOR} fillOpacity="0.5" stroke={COLOR} strokeWidth="1.2"/>
    </svg>
  );
}

function RupeeStackIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stack of rupee coins representing insurance premium amount">
      <ellipse cx="22" cy="36" rx="14" ry="5" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.2"/>
      <ellipse cx="22" cy="30" rx="14" ry="5" fill={COLOR} fillOpacity="0.25" stroke={COLOR} strokeWidth="1.2"/>
      <ellipse cx="22" cy="24" rx="14" ry="5" fill={COLOR} fillOpacity="0.4" stroke={COLOR} strokeWidth="1.2"/>
      <text x="22" y="27" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">₹50K</text>
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
    <svg width="56" height="44" viewBox="0 0 56 61" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar showing annual vs monthly premium payment comparison">
      <rect x="2" y="2" width="22" height="40" rx="3" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <text x="13" y="18" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="700">Annual</text>
      <text x="13" y="28" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="800">1x</text>
      <text x="13" y="37" textAnchor="middle" fontSize="6" fill="var(--text-muted)">payment</text>
      <rect x="32" y="2" width="22" height="40" rx="3" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <text x="43" y="16" textAnchor="middle" fontSize="9" fill="var(--text-muted)">Monthly</text>
      <text x="43" y="26" textAnchor="middle" fontSize="9" fill="var(--text-muted)" fontWeight="800">12x</text>
      <text x="43" y="37" textAnchor="middle" fontSize="6" fill="var(--text-muted)">payments</text>
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="American Express card representing Amex MRCC insurance premium rewards">
      <rect x="2" y="10" width="40" height="24" rx="4" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="28" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="800">Amex</text>
      <text x="22" y="20" textAnchor="middle" fontSize="9" fill="var(--text-muted)">2% on insurance</text>
    </svg>
  );
}

function LostRewardMeter() {
  return (
    <svg width="100%" height="48" viewBox="0 0 320 68" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing reward earned vs lost on insurance premium by card type">
      <text x="0" y="12" fontSize="9" fill="var(--text-muted)">Reward on ₹50,000 annual premium</text>
      <rect x="0" y="18" width="200" height="12" rx="3" fill={COLOR} fillOpacity="0.7"/>
      <text x="204" y="28" fontSize="9" fill={COLOR} fontWeight="700">Issuer points vary by card</text>
      <rect x="0" y="34" width="60" height="12" rx="3" fill="var(--border)"/>
      <text x="64" y="44" fontSize="9" fill="var(--text-muted)">Insurance exclusions and caps vary</text>
    </svg>
  );
}

const insuranceCardPicks = [
  {
    name: "HDFC Regalia Credit Card",
    issuer: "HDFC Bank",
    fee: "Check current schedule",
    feeWaiver: "Verify current fee-waiver terms",
    insuranceRate: "Points subject to issuer terms and monthly insurance cap",
    exclusions: "Check exact card variant, MCC and payment route",
    slug: "hdfc-regalia",
    annualRewardOn50k: "Not estimated",
    note: "Do not assume a fixed rupee value; HDFC applies monthly caps to insurance points.",
    best: false,
  },
  {
    name: "Amex Membership Rewards Credit Card",
    issuer: "American Express",
    fee: "Check current schedule",
    feeWaiver: "Verify current fee terms and new-application availability",
    insuranceRate: "No Membership Rewards points on insurance",
    exclusions: "Insurance spend excluded under current Amex terms",
    slug: "amex-mrcc",
    annualRewardOn50k: "₹0 Membership Rewards points",
    note: "Current Amex terms exclude insurance; do not estimate airline value for this spend.",
    best: false,
  },
  {
    name: "Axis Magnus Credit Card",
    issuer: "Axis Bank",
    fee: "Check current schedule",
    feeWaiver: "Verify current fee-waiver terms",
    insuranceRate: "No EDGE Rewards on insurance",
    exclusions: "Insurance excluded under Axis terms",
    slug: "axis-magnus",
    annualRewardOn50k: "₹0 EDGE Rewards",
    note: "Do not choose Magnus for insurance rewards; the category is excluded.",
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
    insurance: "Check current insurance points cap",
    clause: "HDFC terms specify a monthly cap for insurance transactions; verify the precise card variant.",
  },
  {
    name: "Axis ACE",
    headline: "5% on Swiggy/Zomato/utility",
    insurance: "No cashback on insurance",
    clause: "Insurance is an excluded cashback category under Axis Cashback terms.",
  },
  {
    name: "Amazon Pay ICICI",
    headline: "5% on Amazon (Prime)",
    insurance: "Verify transaction eligibility",
    clause: "Do not assume general non-Amazon cashback applies to an insurance transaction.",
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
          text: "There is no universal best card. Current issuer terms exclude insurance rewards on Amex MRCC, Axis Magnus and SBI Cashback; HDFC applies monthly caps to insurance points on most cards. Compare the exact card variant, payment route, fees and usable redemption value before paying.",
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
          text: "Compare the insurer's total amount and payment charges for each option with your cash-flow needs. Reward eligibility and minimum earn thresholds depend on the card and payment route, so annual billing is not automatically cheaper or more rewarding.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay LIC premium with a credit card and earn rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check LIC's payment page for available methods and any current charge before paying. The final amount can depend on the payment channel and card; do not assume a fixed surcharge or that rewards will offset it.",
        },
      },
      {
        "@type": "Question",
        name: "Do credit card reward points expire on insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Point-expiry rules vary by issuer, card and account status. Check the current rewards-program terms; points are not earned on excluded transactions, including insurance spend on Amex MRCC.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay health, term, and car insurance all on the same card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Payment gateways and insurers can use different transaction classifications, and issuer exclusions apply. Confirm each payment route; Amex MRCC currently excludes insurance rewards.",
        },
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia give cashback on insurance premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do not assume partner cashback applies. HDFC terms impose a monthly reward-point cap on insurance transactions for most card variants. Confirm the current earn rate and cap for your Millennia card.",
        },
      },
      {
        "@type": "Question",
        name: "What is the MCC code for insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Merchant category is assigned by payment processing and can vary by insurer or gateway. Do not rely on one MCC or assume all insurers receive identical reward treatment; check the transaction and issuer terms.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Credit Cards for Insurance Premiums: Rewards, Exclusions and Fees (September 2026)",
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
            Credit Cards for Insurance Premiums: Rewards, Exclusions and Fees (September 2026)
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
        Compare issuer exclusions, monthly reward caps, payment charges and fees before paying an insurance premium by card.
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
              A fixed rupee return cannot be promised from the premium alone: eligibility, reward caps, redemption choices and payment charges all affect the result.
            </p>
          </div>
        </div>
      </div>

      {/* Cards that exclude insurance */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Examples of card-specific insurance exclusions</h2>

        <p>
          These examples illustrate why headline earn rates should not be applied to insurance automatically. Check the latest terms for your exact card variant and payment route.
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
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Issuer treatment of insurance transactions</h2>

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
          Payment frequency is a policy and cash-flow choice, not a guaranteed rewards optimisation. Compare the total amount due, any payment charges and the reward treatment for each option.
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
            <div style={{ fontWeight: 700, color: COLOR, marginBottom: 10 }}>Annual payment: check total cost</div>
            {[
              "Check whether the policy offers an annual-payment price",
              "Confirm any card reward eligibility and monthly cap",
              "Compare the single payment with your available cash flow",
              "Check whether the payment counts toward any current milestone",
            ].map((p) => (
              <div key={p} style={{ fontSize: 13, marginBottom: 6, display: "flex", gap: 8 }}>
                <span style={{ color: COLOR }}>+</span> {p}
              </div>
            ))}
          </div>
          <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "16px 18px" }}>
            <div style={{ fontWeight: 700, color: "var(--text-muted)", marginBottom: 10 }}>Monthly payment: check conditions</div>
            {[
              "Confirm the total instalment amount and any added charge",
              "Check reward rules for each instalment transaction",
              "Consider cash-flow needs and missed-payment risk",
              "Compare against the insurer's annual-payment option",
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
        Reward outcomes depend on exact card terms and transaction route. The illustration below avoids treating points as cash or estimating value for excluded categories.
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
                ["HDFC Regalia", "Check current schedule", "Points; monthly insurance cap", "Not estimated", "Verify exact variant"],
                ["Amex MRCC", "Check current schedule", "No points on insurance", "₹0 points", "Insurance excluded"],
                ["Axis Magnus", "Check current schedule", "No EDGE Rewards on insurance", "₹0 EDGE Rewards", "Insurance excluded"],
                ["HDFC Millennia", "Check current schedule", "Points; monthly insurance cap", "Not estimated", "Verify exact variant"],
                ["SBI Cashback", "Check current schedule", "No cashback on insurance", "₹0 cashback", "Insurance excluded"],
                ["Amazon Pay ICICI", "Check current schedule", "Verify transaction eligibility", "Not estimated", "Check issuer terms"],
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
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Check each policy payment route</h2>
        </div>

        <p>
          Different insurers and payment gateways may classify transactions differently. Verify each payment's eligibility, cap and charge with the issuer and insurer; do not assume all policy types earn at the same rate.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 16 }}>
          {[
            { type: "Term Insurance", typical: "Use a current insurer quote", note: "Compare payment frequency, charges and card eligibility." },
            { type: "Health/Mediclaim", typical: "Use a current insurer quote", note: "Premiums vary by age, cover, location and policy terms." },
            { type: "Car/Bike Insurance", typical: "Use a current insurer quote", note: "Check the renewal checkout amount and card eligibility." },
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
            Do not use Amex MRCC for insurance rewards: current terms exclude insurance. For HDFC cards, check the monthly insurance-points cap and current variant terms before paying.
          </li>
          <li>
            Compare annual and instalment payment totals, any charges, reward eligibility and cash-flow needs for each policy.
          </li>
          <li>
            Use the{" "}
            <Link href="/stack-builder" style={{ color: COLOR }}>
              Stack Builder tool
            </Link>{" "}
            to build a 2-card stack where one earns on insurance and one earns on your other top spend category.
          </li>
          <li>
            Check the final LIC portal amount and any current payment charge before confirming; don't rely on a historical surcharge estimate.
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
