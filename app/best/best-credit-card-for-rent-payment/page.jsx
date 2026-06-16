import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Rent Payment in India (June 2026)",
  description: "Paying rent on a credit card sounds smart. The math usually says otherwise. Here's when it works and when it quietly costs you money.",
  alternates: { canonical: "/best/best-credit-card-for-rent-payment" },
  openGraph: {
    title: "Best Credit Card for Rent Payment in India (June 2026)",
    description: "Paying rent on a credit card sounds smart. The math usually says otherwise. Here's when it works and when it quietly costs you money.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-rent-payment
// Updated: June 4, 2026

const COLOR = "#dc2626";
const UPDATED = "June 4, 2026";

function HomeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="House representing rent payment category">
      <path d="M4 22L22 6l18 16" stroke={COLOR} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <rect x="8" y="22" width="28" height="18" rx="2" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <rect x="17" y="28" width="10" height="12" rx="1" fill={COLOR} fillOpacity="0.4"/>
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calculator representing break-even math for rent payment processing fees">
      <rect x="8" y="4" width="28" height="36" rx="4" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <rect x="12" y="8" width="20" height="8" rx="2" fill={COLOR} fillOpacity="0.15"/>
      <text x="22" y="15" textAnchor="middle" fontSize="7" fill={COLOR} fontWeight="700">₹ break-even</text>
      {[
        [12, 22], [19, 22], [26, 22], [33, 22],
        [12, 28], [19, 28], [26, 28], [33, 28],
        [12, 34], [19, 34], [26, 34], [33, 34],
      ].map(([x, y], i) => (
        <rect key={i} x={x - 2} y={y - 2} width="4" height="4" rx="1" fill={COLOR} fillOpacity="0.3"/>
      ))}
    </svg>
  );
}

function ProcessingFeeWarning() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Warning flag for processing fee on rent payment platforms">
      <circle cx="22" cy="22" r="20" fill="var(--red-dim)" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="20" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="700">1.49%</text>
      <text x="22" y="30" textAnchor="middle" fontSize="7" fill={COLOR}>processing fee</text>
    </svg>
  );
}

function NobrokerIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NoBroker app icon representing rent payment platform">
      <rect x="4" y="4" width="36" height="36" rx="8" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="28" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="800">NoBroker</text>
    </svg>
  );
}

function MilesCardIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Travel miles credit card representing premium cards that earn on rent">
      <rect x="2" y="12" width="40" height="20" rx="4" fill={COLOR} fillOpacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M12 22 L18 16 L24 20 L32 14" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="32" cy="14" r="3" fill={COLOR} fillOpacity="0.5"/>
    </svg>
  );
}

function SpendMilestoneIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Milestone flag representing annual spend target for fee waiver">
      <line x1="10" y1="6" x2="10" y2="38" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 6 L34 14 L10 22" fill={COLOR} fillOpacity="0.2" stroke={COLOR} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function TruthTable({ data }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
            {data.headers.map((h) => (
              <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "10px 14px",
                    fontWeight: j === 0 ? 600 : 400,
                    color: cell === "Yes" ? "#16a34a" : cell === "No" ? "#dc2626" : cell === "Partial" ? "#f59e0b" : "inherit",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BestCreditCardForRentPayment() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I pay rent with a credit card in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, via platforms like NoBroker Rent, Magicbricks Pay, and Housing.com. However, these platforms charge a processing fee of 1 to 2.5% on credit card payments. Your card also needs to earn more than the processing fee rate to profit.",
        },
      },
      {
        "@type": "Question",
        name: "What is the processing fee for paying rent on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NoBroker Rent charges 1.49% on credit card payments. Magicbricks Pay charges approximately 1.5 to 2%. Some platforms offer lower rates for specific cards or card types. Always confirm the current fee before initiating a large rent payment.",
        },
      },
      {
        "@type": "Question",
        name: "Is paying rent on a credit card worth it for HDFC Regalia users?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Regalia earns 4 reward points per ₹150 on most categories including rent (approximately 1.33% value if redeemed well). At NoBroker's 1.49% fee, a Regalia user is net negative on rent payment. It is only worth it if you're close to an annual spend milestone and need the spend to push across.",
        },
      },
      {
        "@type": "Question",
        name: "Which credit card earns on rent payments in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Regalia, Axis Magnus, and some premium travel cards earn reward points or miles on rent MCC transactions. However, SBI Cashback explicitly excludes rent payment from its 5% category. Always check the exclusion list of your specific card.",
        },
      },
      {
        "@type": "Question",
        name: "What MCC code is assigned to rent payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rent payments through NoBroker or similar platforms typically get assigned MCC 6513 (Real Estate Agents and Managers) or MCC 7349 (Services). The actual MCC affects whether your card earns full, reduced, or zero rewards. Some cards explicitly exclude MCC 6513 from reward categories.",
        },
      },
      {
        "@type": "Question",
        name: "Can paying rent on a credit card help me hit the annual spend milestone for fee waiver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If you're ₹10,000 to ₹15,000 away from a fee waiver milestone at the end of the year, pushing one month's rent through the card can close the gap. The processing fee on one month is likely less than the annual card fee you'd save. Do the math each year.",
        },
      },
      {
        "@type": "Question",
        name: "Does paying rent on a credit card build CIBIL score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rent payment itself does not appear on CIBIL. But the credit card transaction does count as part of your credit utilisation and payment history. Paying rent via card and then paying your card bill in full on time builds your credit profile, though no more effectively than any other card usage.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Rent Payment in India (June 2026)",
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
        name: "Best Credit Card for Rent Payment",
        item: "https://assurefintech.com/best/credit-card-for-rent-payment",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1C0404, #460C0C, #1C0404)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #dc262622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Rent Payment in India (June 2026)
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
        Best Credit Card for Rent Payment
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
        <HomeIcon />
        Rent Payments
      </div>


      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Paying rent on a credit card sounds smart. The math usually says otherwise. Here's when it works and when it quietly costs you money.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </p>

      {/* The big honest callout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 16,
          background: "var(--red-dim)",
          border: `2px solid ${COLOR}60`,
          borderRadius: 10,
          padding: "20px 22px",
          marginBottom: 40,
          alignItems: "center",
        }}
      >
        <ProcessingFeeWarning />
        <div>
          <div style={{ fontWeight: 800, color: COLOR, marginBottom: 6 }}>The honest number on this page</div>
          <p style={{ margin: 0, fontSize: 14 }}>
            NoBroker charges 1.49% to process a credit card rent payment. On ₹20,000 rent, that's ₹298 in fee. Your card needs to earn more than ₹298 on that same ₹20,000 to profit. Most cards don't. Very few do.
          </p>
        </div>
      </div>

      {/* Section 1: Processing fee reality */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The processing fee reality: what you actually pay</h2>

        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <NobrokerIcon />
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0 }}>
              Every platform that lets you pay rent with a credit card in India charges a processing fee. This fee is non-negotiable and non-refundable. It exists because card networks charge MDR on real estate MCCs, and platforms pass this cost to you.
            </p>
            <p style={{ margin: "8px 0 0" }}>
              The platforms most Indians use for credit card rent payment in 2026 are NoBroker Rent, Magicbricks Pay, and Housing.com Pay. Here's what each charges.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 20, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Platform", "Credit Card Processing Fee", "Fee on ₹15,000 Rent", "Fee on ₹25,000 Rent"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["NoBroker Rent", "1.49%", "₹224", "₹373"],
                ["Magicbricks Pay", "~1.5 to 2%", "₹225 to ₹300", "₹375 to ₹500"],
                ["Housing.com Pay", "~1.5%", "₹225", "₹375"],
                ["RedGiraffe / Others", "1.5 to 2.5%", "₹225 to ₹375", "₹375 to ₹625"],
              ].map(([platform, fee, on15k, on25k], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{platform}</td>
                  <td style={{ padding: "10px 14px", color: COLOR, fontWeight: 600 }}>{fee}</td>
                  <td style={{ padding: "10px 14px" }}>{on15k}</td>
                  <td style={{ padding: "10px 14px" }}>{on25k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Cards that earn on rent */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <MilesCardIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Cards that actually earn on rent MCC (and those that don't)</h2>
        </div>

        <p>
          The card industry does not uniformly treat rent payment. Some cards earn full rewards on the real estate MCC. Others silently exclude it from high-reward categories. Some explicitly list rent payment in their exclusion clause.
        </p>

        <TruthTable
          data={{
            headers: ["Credit Card", "Earns on Rent?", "Effective Rate", "Annual Fee"],
            rows: [
              ["HDFC Regalia", "Yes", "~1.33% (4 pts/₹150)", "₹2,500"],
              ["Axis Magnus", "Yes (EDGE Miles)", "~1.5 to 2%*", "₹12,500"],
              ["Amex MRCC", "Yes", "~2% if well redeemed", "₹1,000"],
              ["HDFC Millennia", "No (excluded)", "0% on rent", "₹1,000"],
              ["SBI Cashback", "No (explicitly excluded)", "0% on rent", "₹999"],
              ["Axis ACE", "Partial", "2% (not 5%)", "₹499"],
              ["ICICI Amazon Pay", "No clear category", "1%", "Free"],
            ],
          }}
        />
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>
          *Axis Magnus rate depends on redemption method. Miles redeemed for business class flights can yield 2%+ effective value.
        </p>
      </section>

      {/* Section 3: The break-even calculation */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <CalculatorIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>The break-even calculation: does rent payment make sense for you?</h2>
        </div>

        <p>
          The only question that matters is: does your card's reward rate on rent exceed the platform's processing fee? Let's work it out for common scenarios.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
          {[
            {
              scenario: "Rent ₹20,000, NoBroker (1.49% fee), SBI Cashback card",
              fee: "₹298",
              reward: "₹0 (rent excluded)",
              net: "-₹298/month",
              verdict: "Never do this.",
              color: COLOR,
            },
            {
              scenario: "Rent ₹20,000, NoBroker (1.49% fee), HDFC Regalia",
              fee: "₹298",
              reward: "₹266 (1.33% rate)",
              net: "-₹32/month",
              verdict: "Still negative. Only use if chasing a spend milestone.",
              color: "#f59e0b",
            },
            {
              scenario: "Rent ₹20,000, NoBroker (1.49% fee), Amex MRCC",
              fee: "₹298",
              reward: "₹400 (2% if redeemed for Amex travel)",
              net: "+₹102/month",
              verdict: "Positive only with optimal Amex redemption. Narrow margin.",
              color: "#16a34a",
            },
            {
              scenario: "Rent ₹20,000, NoBroker (1.49% fee), Axis Magnus",
              fee: "₹298",
              reward: "₹300 to ₹400 (miles basis)",
              net: "+₹2 to +₹102",
              verdict: "Positive only if you're an active miles redeemer. Very thin margin.",
              color: "#16a34a",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--raise)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "14px 16px",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 10, fontSize: 14 }}>{item.scenario}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, fontSize: 13 }}>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: 11, marginBottom: 2 }}>Processing fee</div>
                  <div style={{ color: COLOR, fontWeight: 700 }}>{item.fee}</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: 11, marginBottom: 2 }}>Reward earned</div>
                  <div style={{ color: "#16a34a", fontWeight: 700 }}>{item.reward}</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: 11, marginBottom: 2 }}>Net result</div>
                  <div style={{ color: item.net.startsWith("+") ? "#16a34a" : COLOR, fontWeight: 700 }}>{item.net}</div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 8,
                  padding: "6px 10px",
                  background: `${item.color}10`,
                  borderRadius: 4,
                  fontSize: 12,
                  color: item.color,
                  fontWeight: 600,
                }}
              >
                Verdict: {item.verdict}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: When it does make sense */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>When rent payment on credit card genuinely makes sense</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              title: "You're chasing an annual spend milestone for fee waiver",
              detail: "If your card waives ₹10,000 annual fee on ₹3L spend and you're at ₹2.9L in December, pushing 1 month's rent through costs ₹224 in processing fee but saves ₹10,000 in card fee. The math is clearly positive.",
              go: true,
            },
            {
              title: "You have an Amex MRCC and redeem points for travel",
              detail: "At 2% effective value on Amex points redeemed for travel, you beat the 1.49% processing fee by ₹100 to ₹150 per month on ₹20,000 rent. It's not dramatic but it's positive.",
              go: true,
            },
            {
              title: "You have a high-end miles card (Axis Magnus, HDFC Infinia) and are an active miles redeemer",
              detail: "HDFC Infinia earns 3.33% effective on rent if you transfer miles to airline partners and book business class. The processing fee is a rounding error at this level.",
              go: true,
            },
            {
              title: "You want to smooth out cash flow during a tight month",
              detail: "Credit card gives you 30 to 50 days of float. If paying rent on the 1st and your salary hits on the 5th, the float has a genuine cash flow value beyond rewards.",
              go: false,
            },
            {
              title: "You have a basic card like SBI SimplySAVE, SBI Cashback, or HDFC Millennia",
              detail: "Rent is explicitly excluded from top reward categories on these cards. You pay the processing fee and earn 0 to 1%. Stick to NEFT/IMPS rent payment.",
              go: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${item.go ? "rgba(62,224,143,.35)" : "#fca5a5"}`,
                borderLeft: `4px solid ${item.go ? "#22c55e" : COLOR}`,
                borderRadius: 8,
                padding: "14px 16px",
                background: item.go ? "var(--green-dim)" : "var(--red-dim)",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div
                  style={{
                    minWidth: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: item.go ? "#22c55e" : COLOR,
                    color: "var(--raise)",
                    fontSize: 12,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  {item.go ? "✓" : "✗"}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{item.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Spend milestone strategy */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <SpendMilestoneIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>The spend milestone strategy: the only time rent always makes sense</h2>
        </div>

        <p>
          Almost every premium Indian credit card has a spend-based annual fee waiver. HDFC Regalia waives ₹2,500 on ₹3L spend. Axis Magnus waives ₹12,500 on ₹15L spend. The calculus changes entirely near year-end.
        </p>

        <div
          style={{
            background: "var(--raise)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "18px 20px",
            marginTop: 12,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Example: HDFC Regalia, ₹20,000 rent, December</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
            {[
              ["Current spend (Jan to Nov)", "₹2,82,000"],
              ["Spend needed to hit ₹3L milestone", "₹18,000"],
              ["Processing fee for 1 month rent payment", "₹298"],
              ["Annual fee you'd save", "₹2,500"],
              ["Net benefit of this one transaction", "+₹2,202"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                <span>{label}</span>
                <span style={{ fontWeight: 600, color: value.startsWith("+") ? "#16a34a" : "inherit" }}>{value}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: "10px 0 0", fontSize: 13, color: "var(--text-muted)" }}>
            Use our{" "}
            <Link href="/stack-builder" style={{ color: COLOR }}>
              Stack Builder tool
            </Link>{" "}
            to track your annual spend vs milestones across all your cards.
          </p>
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
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Decision framework: rent payment on credit card</h2>
        <div style={{ fontSize: 14, lineHeight: 2 }}>
          <div>
            <strong>Step 1:</strong> Check your card's exclusion list. Does your card earn rewards on rent (MCC 6513)?
          </div>
          <div>
            <strong>Step 2:</strong> Calculate your effective reward rate on rent (not your card's headline rate, the actual rate for this MCC).
          </div>
          <div>
            <strong>Step 3:</strong> Compare reward rate to the platform's processing fee. If reward rate is higher: proceed. If not: use NEFT.
          </div>
          <div>
            <strong>Step 4:</strong> Every November/December, check if you're near a spend milestone. If close: one or two months of rent payment on card is worth it.
          </div>
          <div>
            <strong>Step 5:</strong> If you're on SBI Cashback or HDFC Millennia: never pay rent on card. The exclusions are explicitly written in the T&amp;C.
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Related guides</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/cards/hdfc-regalia" style={{ color: COLOR, fontSize: 14 }}>
            HDFC Regalia full review: the best all-rounder for salaried professionals
          </Link>
          <Link href="/cards/axis-magnus" style={{ color: COLOR, fontSize: 14 }}>
            Axis Magnus full review: worth ₹12,500 fee for heavy spenders
          </Link>
          <Link href="/blog/nobroker-rent-credit-card-fee-india" style={{ color: COLOR, fontSize: 14 }}>
            NoBroker rent payment via credit card: fee breakdown and which cards work
          </Link>
          <Link href="/smart-swipe" style={{ color: COLOR, fontSize: 14 }}>
            Smart Swipe: figure out your card's actual reward on any category
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
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Processing fees and reward structures are based on platform and issuer terms as of {UPDATED} and are subject to change. Always verify current fees on the payment platform and reward rates on the card issuer's website before making rent payment decisions. This is not financial advice. Assure Fintech may earn referral fees from some card issuers.
      </footer>
    </main>
    </>
  );
}
