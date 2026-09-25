import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Bill Payments in India (September 2026)",
  description: "Compare credit-card bill rewards by eligible payment route, monthly caps, exclusions and actual issuer terms.",
  alternates: { canonical: "/best/best-credit-card-for-bill-payments" },
  openGraph: {
    title: "Best Credit Card for Bill Payments in India (September 2026)",
    description: "Compare credit-card bill rewards by eligible payment route, monthly caps, exclusions and actual issuer terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-bill-payments
// Updated: September 26, 2026

const COLOR = "#16a34a";
const UPDATED = "September 26, 2026";
const SOURCES = {
  ace: "https://www.axis.bank.in/cards/credit-card/axis-bank-ace-credit-card",
  aceTerms: "https://www.axis.bank.in/docs/default-source/default-document-library/credit-cards/terms-and-conditions-axis-bank-ace-credit-card.pdf?sfvrsn=1109dfe1_2",
  amazon: "https://www.icicibank.com/personal-banking/cards/credit-card/amazon-pay-credit-card/amazon-pay-faq",
  millennia: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0",
  sbi: "https://www.sbicard.com/cashback-revised",
};

function BoltIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lightning bolt representing electricity bill payments">
      <path d="M26 4L10 24h14L18 40l16-20H20L26 4z" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function AxisAceIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Axis ACE card advertises 5% cashback on eligible Google Pay utility transactions">
      <rect x="2" y="10" width="40" height="24" rx="4" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <circle cx="34" cy="18" r="4" fill={COLOR} fillOpacity="0.3"/>
      <circle cx="38" cy="18" r="4" fill={COLOR} fillOpacity="0.5"/>
      <text x="10" y="32" fontSize="9" fill={COLOR} fontWeight="700">AXIS ACE</text>
      <text x="10" y="22" fontSize="9" fill="var(--text-muted)">5% utility</text>
    </svg>
  );
}

function BbpsIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BBPS - Bharat Bill Payment System logo representation">
      <rect x="2" y="8" width="40" height="28" rx="4" fill={COLOR} fillOpacity="0.08" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="24" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="800">BBPS</text>
      <text x="22" y="33" textAnchor="middle" fontSize="6" fill="var(--text-muted)">Bharat Bill Pay</text>
    </svg>
  );
}

function AutopayIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autopay cycle icon showing automated bill payment">
      <path d="M8 22 A14 14 0 0 1 36 22" stroke={COLOR} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M36 22 A14 14 0 0 1 8 22" stroke={COLOR} strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 2"/>
      <path d="M32 15l4 7-7 1" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 29l-4-7 7-1" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function FivePercentBadge() {
  return (
    <svg width="64" height="36" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Axis ACE advertised 5% rate, subject to eligibility and cap">
      <rect width="64" height="36" rx="18" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <text x="32" y="24" textAnchor="middle" fontSize="16" fill={COLOR} fontWeight="800">5%</text>
    </svg>
  );
}

function CalendarCashIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar with cash symbol representing monthly bill payment schedule">
      <rect x="4" y="8" width="36" height="32" rx="3" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <line x1="4" y1="17" x2="40" y2="17" stroke="var(--border)" strokeWidth="1.5"/>
      <rect x="13" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <rect x="27" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <text x="22" y="32" textAnchor="middle" fontSize="12" fill={COLOR} fontWeight="700">₹₹₹</text>
    </svg>
  );
}

function GatewayIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Payment gateway showing different cashback rates by route">
      <rect x="4" y="16" width="14" height="22" rx="2" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.2"/>
      <rect x="26" y="16" width="14" height="22" rx="2" fill={COLOR} fillOpacity="0.3" stroke={COLOR} strokeWidth="1.2"/>
      <rect x="15" y="4" width="14" height="10" rx="2" fill={COLOR} fillOpacity="0.5" stroke={COLOR} strokeWidth="1.2"/>
      <line x1="22" y1="14" x2="11" y2="16" stroke={COLOR} strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="22" y1="14" x2="33" y2="16" stroke={COLOR} strokeWidth="1" strokeDasharray="2 2"/>
      <text x="22" y="11" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">Bill</text>
    </svg>
  );
}

export default function BestCreditCardForBillPayments() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives the most cashback on electricity bill payment in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE advertises 5% cashback on eligible utility bill payments and recharges through Google Pay, subject to exclusions and a combined ₹500 billing-cycle cap with its 4% Swiggy, Zomato and Ola category. It should not be treated as a universal rate for every biller or payment route.",
        },
      },
      {
        "@type": "Question",
        name: "What is BBPS and does my credit card work on it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BBPS is a bill-payment system; whether a specific credit card payment is accepted and earns rewards depends on the issuer, biller, transaction route, coding and current exclusions. Do not infer the reward rate from the fact that a payment uses BBPS—check the issuer's terms and statement for your transaction.",
        },
      },
      {
        "@type": "Question",
        name: "Does Axis ACE give 5% on all utility bills or only specific ones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis advertises 5% on eligible utility bill payments, DTH and mobile recharges through Google Pay. The offer is platform-specific and subject to exclusions; check the current issuer terms for your bill and transaction.",
        },
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI give cashback on bill payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ICICI states that bill payments and mobile/DTH recharges earn 2% back, subject to its exclusions; tax-related payments are among the listed no-reward transactions. See the current issuer FAQ for the full terms.",
        },
      },
      {
        "@type": "Question",
        name: "Should I set up autopay for bills on my credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Autopay can reduce missed-payment risk, but it does not guarantee rewards or approval of a bill transaction. Check the mandate amount and due date, keep funds available, and continue monitoring statements so declined or incorrectly charged payments are caught promptly.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay my mobile postpaid bill and earn 5% cashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligible mobile recharges through Google Pay are within Axis ACE's advertised utility/recharge offer, but a postpaid bill may be treated differently depending on the biller and transaction. Verify the specific transaction against Axis's current terms; accelerated cashback shares a ₹500 billing-cycle cap with listed food/ride merchants.",
        },
      },
      {
        "@type": "Question",
        name: "What is the annual cashback I can realistically earn on household bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If ₹3,000/month of bills all qualify for Axis ACE's Google Pay offer and no other accelerated-category spend uses the shared cap, the arithmetic is ₹150/month or ₹1,800/year before exclusions, fees, and the ₹499 joining fee (or annual fee from year two). This is an illustration, not a guaranteed return.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Bill Payments in India: Eligibility and Rewards Compared",
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
        name: "Best Credit Card for Bill Payments",
        item: "https://assurefintech.com/best/credit-card-for-bill-payments",
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
            Best Credit Card for Bill Payments in India (September 2026)
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

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/best/">Best Cards</Link>
        {" / "}
        Best Credit Card for Bill Payments
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
        <BoltIcon />
        Utility Bills
      </div>


      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Compare bill-payment cards by eligible payment route, monthly caps, exclusions and actual issuer terms—not headline rates alone.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 7 min read
      </p>

      {/* Honest opener */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderLeft: `4px solid ${COLOR}`,
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        <FivePercentBadge />
        <div>
          <strong style={{ color: COLOR }}>The honest number on this page:</strong>{" "}
          If ₹3,000/month of bills qualify for Axis ACE's advertised 5% Google Pay category, the illustrative gross return is ₹1,800/year before fees. Eligibility, exclusions and the shared accelerated-cashback cap still apply.
        </div>
      </div>

      {/* Winner section */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <AxisAceIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>A conditional option: Axis ACE Credit Card</h2>
        </div>

        <p>
          Axis ACE advertises 5% cashback on eligible utility bill payments, DTH and mobile recharges through Google Pay. Whether it is useful depends on your eligible billers, shared cap, fees and payment channel.
        </p>
        <p>
          The advertised 5% applies to eligible Google Pay utility bill payments and recharges. Verify your biller and posted transaction; do not assume all BBPS routes or household bills qualify.
        </p>

        <div
          style={{
            background: "var(--raise)",
            border: `1.5px solid ${COLOR}`,
            borderRadius: 10,
            padding: "20px 22px",
            marginTop: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17 }}>Axis ACE Credit Card</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13 }}>Axis Bank · Visa</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 700, color: COLOR }}>₹499 joining; ₹499 from year 2</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Annual fee waiver on eligible annual spend over ₹2L; exclusions apply</div>
            </div>
          </div>
          <div style={{ fontSize: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
            <div><span style={{ color: "var(--text-muted)" }}>Eligible utilities/recharges via Google Pay: </span><strong style={{ color: COLOR }}>5% cashback</strong></div>
            <div><span style={{ color: "var(--text-muted)" }}>Swiggy/Zomato/Ola: </span>4% (eligible spends)</div>
            <div><span style={{ color: "var(--text-muted)" }}>Other eligible spends: </span>1.5%</div>
            <div><span style={{ color: "var(--text-muted)" }}>Accelerated cashback: </span>₹500/statement-cycle shared cap*</div>
            <div><span style={{ color: "var(--text-muted)" }}>Utility fee: </span>1% at cumulative utility spend ₹25,000+ per statement cycle</div>
          </div>
          <Link
            href="/cards/axis-ace"
            style={{
              display: "inline-block",
              marginTop: 14,
              fontSize: 13,
              color: COLOR,
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: `1px solid ${COLOR}40`,
            }}
          >
            Full Axis ACE review + apply
          </Link>
        </div>
      </section>

      {/* BBPS mechanics */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <BbpsIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>How BBPS works and why payment route matters</h2>
        </div>

        <p>
          BBPS (Bharat Bill Payment System) supports bill payments through participating providers. A bill's route and transaction classification can vary; using a BBPS-enabled app alone does not establish that a credit-card reward applies.
        </p>
        <p>
          For Axis ACE, the published accelerated utility offer specifies Google Pay. Another app, bank service or biller website should not be assumed to earn the ACE 5% rate. Follow the issuer's eligibility rules rather than inferring rewards from BBPS or MCC alone.
        </p>

        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginTop: 20, flexWrap: "wrap" }}>
          <GatewayIcon />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>How the payment route affects reward eligibility</div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${COLOR}40` }}>
                    {["Payment Route", "MCC Assigned", "Axis ACE Rate"].map((h) => (
                      <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--text-muted)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Eligible Google Pay bill payment/recharge", "Issuer/biller coding varies", "5% advertised; exclusions/cap apply"],
                    ["Other app or BBPS route", "Varies by biller/route", "Check issuer terms; do not assume a rate"],
                    ["Direct on provider website", "Varies by provider", "Check issuer terms and posted rewards"],
                    ["Bank's own bill-payment service", "Varies by service", "Check issuer terms and posted rewards"],
                  ].map(([route, mcc, rate], i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i === 0 ? `${COLOR}07` : "transparent" }}>
                      <td style={{ padding: "8px 12px", fontWeight: i === 0 ? 600 : 400 }}>{route}</td>
                      <td style={{ padding: "8px 12px", color: "var(--text-muted)" }}>{mcc}</td>
                      <td style={{ padding: "8px 12px", color: i === 0 ? COLOR : "var(--text)", fontWeight: i === 0 ? 700 : 400 }}>{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Other cards compared */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>How selected cards handle utility bills</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              name: "Amazon Pay ICICI",
              fee: "Lifetime free",
              utilityRate: "2% on eligible Amazon Pay bill payments; usually 1% other eligible spend",
              exclusions: "Transaction and category exclusions apply; confirm biller eligibility",
              verdict: "Potential secondary option for eligible Amazon Pay bill transactions.",
              tag: "Good backup",
              tagColor: COLOR,
            },
            {
              name: "HDFC Millennia",
              fee: "₹1,000/yr",
              utilityRate: "1% on other eligible spends",
              exclusions: "5% applies only to ten named partner merchants; monthly caps apply",
              verdict: "Do not assume a utility payment qualifies for the 5% partner rate.",
              tag: "Not optimal",
              tagColor: "#f59e0b",
            },
            {
              name: "SBI Cashback",
              fee: "₹999/yr",
              utilityRate: "Utilities excluded in current card record",
              exclusions: "Issuer exclusions apply; 5% online cashback is not a utility-bill promise",
              verdict: "Check the current SBI exclusions before paying a bill.",
              tag: "Utilities excluded",
              tagColor: "#ef4444",
            },
            {
              name: "Axis MyZone",
              fee: "₹500/yr",
              utilityRate: "Not confirmed here",
              exclusions: "Current terms vary by product and transaction",
              verdict: "Compare the issuer's current product terms rather than assuming a flat rate.",
              tag: "Upgrade to ACE",
              tagColor: "var(--text-muted)",
            },
          ].map((card) => (
            <div
              key={card.name}
              style={{
                border: "1.5px solid var(--border)",
                borderRadius: 8,
                padding: "16px 18px",
                background: "var(--raise)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                <div style={{ fontWeight: 700 }}>{card.name}</div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.fee}</span>
                  <span
                    style={{
                      background: `${card.tagColor}18`,
                      color: card.tagColor,
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: 12,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
              <div style={{ fontSize: 13, marginBottom: 4 }}>
                <span style={{ color: "var(--text-muted)" }}>Utility bill rate: </span>
                <strong>{card.utilityRate}</strong>
              </div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>
                <span style={{ color: "var(--text-muted)" }}>Exclusions: </span>
                {card.exclusions}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", fontStyle: "italic" }}>{card.verdict}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cashback calculation */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Illustrative bill-reward arithmetic (eligibility assumed)</h2>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>This example assumes every listed bill qualifies at the shown rate. ACE's ₹3,200 monthly example is below the ₹500 shared statement-cycle cap, but utility payments must use an eligible Google Pay route; fees, exclusions and biller eligibility can change the result. HDFC's other-spend tier and Amazon Pay eligibility are also subject to issuer terms.</p>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Bill Category", "Monthly Spend", "Axis ACE (5%)", "HDFC Millennia (1%)", "Amazon Pay ICICI (2%)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Electricity", "₹1,500", "₹75", "₹15", "₹30"],
                ["Mobile postpaid x2", "₹700", "₹35", "₹7", "₹14"],
                ["Broadband", "₹600", "₹30", "₹6", "₹12"],
                ["Gas/PNG", "₹400", "₹20", "₹4", "₹8"],
              ].map(([cat, spend, ace, millennia, amzn], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px" }}>{cat}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{spend}</td>
                  <td style={{ padding: "10px 14px", color: COLOR, fontWeight: 600 }}>{ace}</td>
                  <td style={{ padding: "10px 14px" }}>{millennia}</td>
                  <td style={{ padding: "10px 14px" }}>{amzn}</td>
                </tr>
              ))}
              <tr style={{ background: `${COLOR}0d`, borderTop: `2px solid ${COLOR}40` }}>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>Monthly total</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹3,200</td>
                <td style={{ padding: "10px 14px", fontWeight: 800, color: COLOR }}>₹160</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹32</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹64</td>
              </tr>
              <tr style={{ background: `${COLOR}07` }}>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>Annual total</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹38,400</td>
                <td style={{ padding: "10px 14px", fontWeight: 800, color: COLOR }}>₹1,920</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹384</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹768</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 10 }}>
          Under these assumptions, ACE gross cashback is ₹1,920/year; less its ₹499 joining fee, first-year cashback net of that fee would be ₹1,421 (before any transaction fee). HDFC arithmetic is ₹384/year before its fee. These are not product recommendations or guaranteed savings.
        </p>
      </section>

      {/* Autopay setup */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <AutopayIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Setting up autopay for maximum reward and zero missed payments</h2>
        </div>

        <p>
          Autopay may help avoid missed payments, but does not guarantee reward eligibility. Confirm each biller/route qualifies, check the mandate and available limit, and review every statement.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {[
            "Open Google Pay and go to Bill Payments section.",
            "Add only billers supported by the service; check whether each payment method accepts your card.",
            "Use Axis ACE only where the specific bill/recharge qualifies under current issuer terms.",
            "Monitor the payment and statement each month, and pay the full amount due by the due date.",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, fontSize: 14 }}>
              <div
                style={{
                  minWidth: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: COLOR,
                  color: "var(--raise)",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </div>
              <div style={{ paddingTop: 3 }}>{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly bill calendar */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <CalendarCashIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Monthly bill payment calendar for maximum reward</h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Bill Due Date", "Bill Type", "Pay via", "Card to Use", "Expected Cashback"].map((h) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Check biller date", "Electricity", "Eligible Google Pay route only", "Axis ACE if eligible", "Up to 5%; cap/exclusions apply"],
                ["Check biller date", "Mobile / recharge", "Confirm route and product", "Axis ACE if eligible", "Up to 5%; cap/exclusions apply"],
                ["Check biller date", "Broadband", "Confirm biller and route", "Axis ACE if eligible", "Check issuer terms"],
                ["Check biller date", "Gas / LPG", "Confirm biller and route", "Axis ACE if eligible", "Check issuer terms"],
                ["Any", "Eligible Amazon Pay bill payment/recharge", "Amazon Pay", "Amazon Pay ICICI", "2% where eligible"],
              ].map(([date, bill, route, card, reward], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--text-muted)" }}>{date}</td>
                  <td style={{ padding: "8px 12px" }}>{bill}</td>
                  <td style={{ padding: "8px 12px", color: "var(--text-muted)" }}>{route}</td>
                  <td style={{ padding: "8px 12px", fontWeight: 600 }}>{card}</td>
                  <td style={{ padding: "8px 12px", color: COLOR, fontWeight: 700 }}>{reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Three things to do this week</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            Consider the{" "}
            <Link href="/cards/axis-ace" style={{ color: COLOR }}>
              Axis ACE credit card
            </Link>{" "}
            if eligible bill routes and your spend make the capped cashback worthwhile.
          </li>
          <li>
            Verify each Google Pay biller/route's eligibility before assigning a card.
          </li>
          <li>
            Use our{" "}
            <Link href="/smart-swipe" style={{ color: COLOR }}>
              Smart Swipe tool
            </Link>{" "}
            to confirm your other spend categories are optimised too.
          </li>
        </ol>
      </section>

      {/* Related */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Related guides</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/best/credit-card-for-upi-payments" style={{ color: COLOR, fontSize: 14 }}>
            Best credit card for UPI payments (why most cards earn zero)
          </Link>
          <Link href="/blog/axis-ace-vs-amazon-pay-icici" style={{ color: COLOR, fontSize: 14 }}>
            Axis ACE vs Amazon Pay ICICI: which card wins overall?
          </Link>
          <Link href="/blog/bbps-credit-card-rewards-india" style={{ color: COLOR, fontSize: 14 }}>
            BBPS and credit cards: how the merchant category codes affect your rewards
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
        <p>Issuer references: <a href={SOURCES.ace} target="_blank" rel="noreferrer">Axis ACE product page</a> · <a href={SOURCES.aceTerms} target="_blank" rel="noreferrer">Axis ACE terms</a> · <a href={SOURCES.amazon} target="_blank" rel="noreferrer">Amazon Pay ICICI FAQ</a> · <a href={SOURCES.millennia} target="_blank" rel="noreferrer">HDFC Millennia terms</a> · <a href={SOURCES.sbi} target="_blank" rel="noreferrer">SBI Cashback terms</a>.</p>
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Reward rates and exclusions are based on issuer terms as of {UPDATED}. BBPS routing and MCC classifications can vary. Always confirm the applicable reward rate on your specific bill payment with the card issuer before relying on this guide for financial planning. Assure Fintech may earn referral fees from some card issuers.
      </footer>
    </main>
    </>
  );
}
