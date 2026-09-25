import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Beginners in India (September 2026)",
  description: "Your first credit card shapes your CIBIL score for the next decade. Don't pick wrong.",
  alternates: { canonical: "/best/best-credit-card-for-beginners-india" },
  openGraph: {
    title: "Best Credit Card for Beginners in India (September 2026)",
    description: "Your first credit card shapes your CIBIL score for the next decade. Don't pick wrong.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-beginners-india
// Updated: September 26, 2026

const COLOR = "#0891b2";
const UPDATED = "September 26, 2026";

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shield representing financial protection">
      <path d="M20 4L6 10v10c0 8.284 5.928 15.637 14 17 8.072-1.363 14-8.716 14-17V10L20 4z" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="2"/>
      <path d="M14 20l4 4 8-8" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CibilMeterIcon() {
  return (
    <svg width="80" height="44" viewBox="0 0 80 67" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CIBIL score meter from poor to excellent">
      <path d="M4 40 A36 36 0 0 1 76 40" stroke="var(--border)" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M4 40 A36 36 0 0 1 40 4" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M40 4 A36 36 0 0 1 63 13" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M63 13 A36 36 0 0 1 76 40" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <line x1="40" y1="40" x2="40" y2="10" stroke={COLOR} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="40" r="4" fill={COLOR}/>
      <text x="6" y="43" fontSize="9" fill="var(--text-muted)">300</text>
      <text x="56" y="43" fontSize="9" fill="var(--text-muted)">900</text>
    </svg>
  );
}

function CardTierIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Credit card tier progression">
      <rect x="2" y="10" width="30" height="20" rx="3" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <rect x="12" y="6" width="30" height="20" rx="3" fill={COLOR} fillOpacity="0.3" stroke={COLOR} strokeWidth="1.5"/>
      <circle cx="18" cy="16" r="3" fill={COLOR}/>
    </svg>
  );
}

function RupeeCircleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rupee symbol in circle representing cost">
      <circle cx="22" cy="22" r="20" fill={COLOR} fillOpacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="28" textAnchor="middle" fontSize="18" fill={COLOR} fontWeight="700">₹</text>
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Warning: common mistake">
      <path d="M10 2L18.66 17H1.34L10 2z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <line x1="10" y1="8" x2="10" y2="12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r="1" fill="#f59e0b"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Checkmark indicating correct action">
      <circle cx="10" cy="10" r="9" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
      <path d="M6 10l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UpgradeArrowIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 67" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Upward arrow showing card upgrade path">
      <rect x="6" y="28" width="32" height="10" rx="2" fill="var(--border)"/>
      <rect x="6" y="16" width="32" height="10" rx="2" fill={COLOR} fillOpacity="0.35"/>
      <rect x="6" y="4" width="32" height="10" rx="2" fill={COLOR}/>
      <path d="M22 30l4-4-4-4-4 4 4 4z" fill="white" opacity="0.6"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 63" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar showing 12 to 18 month CIBIL building period">
      <rect x="4" y="8" width="36" height="32" rx="3" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <line x1="4" y1="17" x2="40" y2="17" stroke="var(--border)" strokeWidth="1.5"/>
      <rect x="13" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <rect x="27" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <text x="22" y="34" textAnchor="middle" fontSize="11" fill={COLOR} fontWeight="700">12–18</text>
      <text x="22" y="43" textAnchor="middle" fontSize="9" fill="var(--text-muted)">months</text>
    </svg>
  );
}

const cardData = [
  {
    name: "HDFC MoneyBack+",
    issuer: "HDFC Bank",
    fee: "₹500/yr",
    feeWaiver: "Waived on ₹50,000 spend",
    reward: "20 CashPoints/₹150 at five named merchants (monthly cap applies); 2 CashPoints/₹150 on other eligible spends",
    eligibility: "Eligibility and income criteria depend on HDFC's current application assessment",
    slug: "hdfc-moneyback-plus",
    bestFor: "First salaried professional card",
    highlight: true,
  },
  {
    name: "SBI SimplySAVE",
    issuer: "SBI Cards",
    fee: "₹499/yr",
    feeWaiver: "Waived on ₹1L spend",
    reward: "10 Reward Points/₹150 on dining, movies, departmental stores and grocery; 1 point/₹150 other eligible spends (catalogue value varies)",
    eligibility: "Subject to SBI Card's current eligibility assessment",
    slug: "sbi-simplysave",
    bestFor: "Low income threshold entry",
    highlight: false,
  },
  {
    name: "IDFC FIRST Millennia",
    issuer: "IDFC FIRST Bank",
    fee: "Lifetime free",
    feeWaiver: "No joining or annual fee listed",
    reward: "3X points on online purchases up to ₹20,000/month and 10X on incremental online spend above that threshold; redemption value and exclusions apply",
    eligibility: "Check issuer's current eligibility and offer terms",
    slug: "idfc-first-millennia",
    bestFor: "Flat cashback, zero complexity",
    highlight: false,
  },
  {
    name: "Amazon Pay ICICI",
    issuer: "ICICI Bank",
    fee: "Lifetime free",
    feeWaiver: "N/A",
    reward: "5% on eligible Amazon.in purchases for Prime members, 3% for non-Prime; 2% at eligible Amazon Pay partners and 1% on other eligible spends",
    eligibility: "Subject to ICICI Bank's current application assessment",
    slug: "amazon-pay-icici",
    bestFor: "Amazon-heavy spenders, first card",
    highlight: false,
  },
  {
    name: "Axis Neo",
    issuer: "Axis Bank",
    fee: "₹250/yr; lifetime-free via selected channels",
    feeWaiver: "Lifetime-free offer depends on application channel; no ₹2,500/month waiver listed",
    reward: "0.5% base points; partner discounts may apply with their own caps and conditions",
    eligibility: "Check current Axis Bank application criteria and channel-specific offer",
    slug: "axis-neo",
    bestFor: "Lowest fee entry card",
    highlight: false,
  },
];

export default function BestCreditCardForBeginnersIndia() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the minimum income needed to get a credit card as a beginner in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal minimum-income threshold across entry-level cards. Eligibility depends on the issuer, card, application channel, employment/income details, location and credit profile. Check the issuer's current application criteria; offers can vary by applicant.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a credit card without any income proof as a student?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, but options vary. An FD-backed secured card may rely on the deposit rather than salary, while an add-on card depends on a primary cardholder. Confirm the current product terms and responsibilities with the issuer before applying.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly does a credit card build my CIBIL score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no guaranteed timeline or score. Credit bureau files and scores depend on when lenders report and on your broader credit profile. Pay the full statement balance on time, and check your report for accuracy through the bureau.",
        },
      },
      {
        "@type": "Question",
        name: "What credit utilisation percentage should I maintain as a beginner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lower reported balances relative to available limits are generally preferable, but no single utilization threshold guarantees approval or a particular score. Avoid spending beyond what you can repay in full.",
        },
      },
      {
        "@type": "Question",
        name: "Should I apply for multiple credit cards as a first-timer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avoid applying for several cards at once without a reason. Applications can result in lender enquiries, but the impact varies by profile and scoring model; there is no fixed point reduction. Compare eligibility and space applications sensibly.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I miss a credit card payment in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The issuer may charge late fees and interest under its current schedule, and payment history may be reported to credit bureaus. The fee and any score impact depend on the issuer, reporting and your credit profile; there is no reliable fixed point-drop estimate. Pay at least the full amount due by the due date and contact the issuer promptly if you anticipate a problem.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Amazon Pay ICICI card good as a first credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can fit someone who shops on Amazon: the card is lifetime-free and its rates differ by Prime status and transaction type. Prime members get 5% on eligible Amazon.in purchases; non-Prime members get 3%, with separate rates for other eligible transactions. Check exclusions and invite/application availability with ICICI Bank.",
        },
      },
      {
        "@type": "Question",
        name: "When should I upgrade from my first credit card to a better one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal upgrade date or score threshold. Consider an upgrade when your repayment history is established, the new card's fee and benefits suit your spending, and the issuer confirms eligibility. Check whether the issuer treats it as an upgrade or a new application.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Beginners in India (September 2026)",
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
        name: "Best Credit Card for Beginners India",
        item: "https://assurefintech.com/best/credit-card-for-beginners-india",
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
            Best Credit Card for Beginners in India (September 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
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
        Best Credit Card for Beginners India
      </nav>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
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
        <ShieldIcon />
        Beginner Guide
      </div>


      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Your first credit card shapes your CIBIL score for the next decade. Don't pick wrong.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 9 min read
      </p>

      {/* Honest number callout */}
      <div
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderLeft: `4px solid ${COLOR}`,
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 28,
        }}
      >
        <strong style={{ color: COLOR }}>The honest number on this page:</strong> Most beginners apply for the card with the best ad they've seen. The right move is to apply for the card with the lowest barrier to approval and a fee structure you can waive. Rewards come second, always.
      </div>

      {/* Section: What to look for */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>What actually matters in your first card</h2>

        <p>
          The credit card industry spends millions on marketing reward rates. For a beginner, the reward rate is almost the last thing to optimise for.
        </p>
        <p>
          Here is the priority order: easy approval first, zero or low annual fee second, simple reward structure third, and good customer service fourth.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 24 }}>
          {[
            { icon: <CheckCircleIcon />, title: "Check eligibility", desc: "Income and approval criteria vary by issuer, card and application channel; verify current requirements before applying." },
            { icon: <CheckCircleIcon />, title: "Waivable annual fee", desc: "Cards with annual fees that get waived on ₹50,000 to ₹1L yearly spend are almost free." },
            { icon: <CheckCircleIcon />, title: "Flat, simple rewards", desc: "Cashback is better than points for beginners. You'll never misread your balance." },
            { icon: <CheckCircleIcon />, title: "Full autopay option", desc: "Banks that let you auto-debit the full balance monthly protect you from interest charges." },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--raise)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "14px 16px",
              }}
            >
              <div style={{ marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Card picks */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>First-card options to compare</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
          These cards are ranked by a beginner-specific score: approval ease, total cost of ownership, and reward simplicity.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cardData.map((card, i) => (
            <div
              key={card.slug}
              style={{
                border: card.highlight ? `2px solid ${COLOR}` : "1.5px solid var(--border)",
                borderRadius: 10,
                padding: "20px 22px",
                background: card.highlight ? `${COLOR}07` : "var(--raise)",
                position: "relative",
              }}
            >
              {card.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 20,
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
                  Editor's Pick
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{card.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{card.issuer}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, color: COLOR }}>{card.fee}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.feeWaiver}</div>
                </div>
              </div>
              <div style={{ margin: "12px 0", fontSize: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px" }}>
                <div><span style={{ color: "var(--text-muted)" }}>Rewards: </span>{card.reward}</div>
                <div><span style={{ color: "var(--text-muted)" }}>Eligibility: </span>{card.eligibility}</div>
                <div style={{ gridColumn: "1 / -1" }}><span style={{ color: "var(--text-muted)" }}>Best for: </span><strong>{card.bestFor}</strong></div>
              </div>
              <Link
                href={`/cards/${card.slug}`}
                style={{
                  display: "inline-block",
                  marginTop: 4,
                  fontSize: 13,
                  color: COLOR,
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: `1px solid ${COLOR}40`,
                }}
              >
                Full review + apply link
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section: CIBIL strategy */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>The CIBIL-building strategy that actually works</h2>

        <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <CibilMeterIcon />
          <div>
            <p style={{ margin: 0 }}>
              CIBIL scores range from 300 to 900; lenders set their own approval criteria and consider more than the score alone.
            </p>
            <p style={{ margin: "8px 0 0" }}>
              A particular score or timeline cannot be guaranteed; it depends on your full credit profile and bureau reporting.
            </p>
          </div>
        </div>

        <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 22px", marginTop: 16 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>The one-card strategy (12 to 18 months)</div>
          {[
            "Use the card for all your regular monthly expenses — groceries, fuel, subscriptions, phone bill.",
            "Set up autopay for the full outstanding balance (not just minimum due).",
            "Keep balances manageable relative to your limit; lower reported utilisation is generally preferable, but no single threshold guarantees a score.",
            "Never take a cash advance from the card. The fee is 2.5% and interest starts immediately.",
            "After 12 months of this, check your CIBIL score via the official CIBIL website or Paytm.",
          ].map((step, idx) => (
            <div key={idx} style={{ display: "flex", gap: 12, marginBottom: 8, fontSize: 14 }}>
              <div
                style={{
                  minWidth: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: COLOR,
                  color: "var(--raise)",
                  fontSize: 12,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {idx + 1}
              </div>
              <div>{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Income bracket matching */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Matching your income bracket to the right card</h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Starting profile", "Card to compare", "Annual Fee", "Why"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["New/thin credit file; can place an FD", "IDFC FIRST WOW", "Lifetime free; FD-backed", "Secured option; zero forex markup; rewards and redemption terms apply"],
                ["Amazon-heavy spending", "Amazon Pay ICICI", "Lifetime free", "Category-based Amazon/Amazon Pay cashback; check eligibility"],
                ["Dining, movies and grocery spend", "SBI SimplySAVE", "₹499; waiver at ₹1L annual spend", "Accelerated points on listed categories; point value is redemption-dependent"],
                ["Selected online merchants", "HDFC MoneyBack+", "₹500; ₹50K waiver", "Accelerated CashPoints at named merchants; current May 2026 changes apply"],
              ].map(([income, card, fee, why], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px" }}>{income}</td>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{card}</td>
                  <td style={{ padding: "10px 14px", color: COLOR }}>{fee}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Upgrade path */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The upgrade path (year 1 to year 5)</h2>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
          <UpgradeArrowIcon />
          <p style={{ margin: 0 }}>
            Your first card is a stepping stone, not a destination. Most people who plan the upgrade path end up with a premium card 3 to 4 years faster than those who don't.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { year: "When eligible", card: "Entry card (Axis Neo / IDFC Millennia)", score: "No fixed target", note: "Build history and pay the full amount due on time" },
            { year: "When your needs change", card: "Mid-tier (SBI SimplySAVE / Flipkart Axis)", score: "Issuer criteria vary", note: "Compare fees, benefits and approval criteria" },
            { year: "If benefits justify the cost", card: "Premium (HDFC Regalia / Axis Magnus)", score: "Issuer criteria vary", note: "Compare annual cost with benefits you will use" },
          ].map((tier, i) => (
            <div key={i} style={{ display: "flex", gap: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 16 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: COLOR, marginTop: 6 }} />
                {i < 2 && <div style={{ width: 2, background: `${COLOR}40`, flex: 1, minHeight: 40 }} />}
              </div>
              <div style={{ paddingBottom: 24, flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{tier.year}</div>
                <div style={{ fontWeight: 600 }}>{tier.card}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  {tier.score} · {tier.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          Upgrade offers and eligibility are issuer-specific. Confirm directly with the bank whether an offer is available and whether accepting it involves a new credit inquiry.
        </p>
      </section>

      {/* Section: Common mistakes */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Common first-card mistakes that hurt you for years</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              mistake: "Paying only the minimum amount due",
              impact: "The unpaid balance can attract interest and applicable charges under the issuer's terms. Paying only the minimum may prolong repayment and increase the total cost; check your statement and MITC.",
            },
            {
              mistake: "Closing your first credit card after getting a better one",
              impact: "Closing a card changes your available credit and account history; the score impact varies. Check for fees and practical reasons before deciding, and request closure formally if you proceed.",
            },
            {
              mistake: "Using the card for cash advances",
              impact: "Cash advances commonly carry a separate fee and interest from the transaction date; exact charges vary by issuer. Check the card's fee schedule before using this facility.",
            },
            {
              mistake: "Applying for 3 to 4 cards in the same month",
              impact: "Applications may create credit enquiries, and multiple recent applications can affect lender decisions. Approval outcomes vary; compare eligibility before applying.",
            },
            {
              mistake: "Treating credit limit as spending budget",
              impact: "A credit limit is borrowing capacity, not a spending target. Carrying balances or using more credit than you can repay can increase costs and affect your credit profile.",
            },
          ].map((item) => (
            <div
              key={item.mistake}
              style={{
                display: "flex",
                gap: 12,
                background: "rgba(212,168,83,.06)",
                border: "1px solid rgba(212,168,83,.25)",
                borderRadius: 8,
                padding: "14px 16px",
              }}
            >
              <div style={{ marginTop: 2 }}>
                <WarningIcon />
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.mistake}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{item.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Actionable ending */}
      <section
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderRadius: 10,
          padding: "24px 26px",
          marginBottom: 44,
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
          <CalendarIcon />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>Your action plan for this month</h2>
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>Pick one card from the table above based on your monthly income.</li>
              <li>Apply via the bank's official website or app, not third-party aggregator links.</li>
              <li>
                Once approved, set up full-balance autopay immediately. See our{" "}
                <Link href="/blog/autopay-credit-card-setup-india" style={{ color: COLOR }}>
                  autopay setup guide
                </Link>
                .
              </li>
              <li>Shift your grocery, fuel, and subscription spends to the new card.</li>
              <li>
                After 12 months, use our{" "}
                <Link href="/stack-builder" style={{ color: COLOR }}>
                  Stack Builder tool
                </Link>{" "}
                to see if a second card makes sense.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Read next</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/best/credit-card-for-students-india" style={{ color: COLOR, fontSize: 14 }}>
            Best credit card for students in India (FD-backed and add-on options)
          </Link>
          <Link href="/smart-swipe" style={{ color: COLOR, fontSize: 14 }}>
            Smart Swipe: know which card to use for each transaction
          </Link>
          <Link href="/blog/cibil-score-credit-card-india" style={{ color: COLOR, fontSize: 14 }}>
            How credit cards actually build your CIBIL score in India
          </Link>
          <Link href="/blog/first-credit-card-india-2026" style={{ color: COLOR, fontSize: 14 }}>
            First credit card in India 2026: complete application guide
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faq.mainEntity.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid var(--border)",
                padding: "16px 0",
              }}
            >
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
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Card details, fees, and reward rates are accurate as of {UPDATED} and subject to change by the respective issuers. This is not financial advice. Always verify current terms on the issuing bank's official website before applying. Assure Fintech may earn referral fees from some card issuers, which does not affect our editorial rankings.
      </footer>
    </main>
    </>
  );
}
