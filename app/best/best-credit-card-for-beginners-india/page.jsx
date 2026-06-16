import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Beginners in India (June 2026)",
  description: "Your first credit card shapes your CIBIL score for the next decade. Don't pick wrong.",
  alternates: { canonical: "/best/best-credit-card-for-beginners-india" },
  openGraph: {
    title: "Best Credit Card for Beginners in India (June 2026)",
    description: "Your first credit card shapes your CIBIL score for the next decade. Don't pick wrong.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-beginners-india
// Updated: June 4, 2026

const COLOR = "#0891b2";
const UPDATED = "June 4, 2026";

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
    <svg width="80" height="44" viewBox="0 0 80 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CIBIL score meter from poor to excellent">
      <path d="M4 40 A36 36 0 0 1 76 40" stroke="var(--border)" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M4 40 A36 36 0 0 1 40 4" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M40 4 A36 36 0 0 1 63 13" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M63 13 A36 36 0 0 1 76 40" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <line x1="40" y1="40" x2="40" y2="10" stroke={COLOR} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="40" r="4" fill={COLOR}/>
      <text x="6" y="43" fontSize="8" fill="var(--text-muted)">300</text>
      <text x="56" y="43" fontSize="8" fill="var(--text-muted)">900</text>
    </svg>
  );
}

function CardTierIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Credit card tier progression">
      <rect x="2" y="10" width="30" height="20" rx="3" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <rect x="12" y="6" width="30" height="20" rx="3" fill={COLOR} fillOpacity="0.3" stroke={COLOR} strokeWidth="1.5"/>
      <circle cx="18" cy="16" r="3" fill={COLOR}/>
    </svg>
  );
}

function RupeeCircleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rupee symbol in circle representing cost">
      <circle cx="22" cy="22" r="20" fill={COLOR} fillOpacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="28" textAnchor="middle" fontSize="18" fill={COLOR} fontWeight="700">₹</text>
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Warning: common mistake">
      <path d="M10 2L18.66 17H1.34L10 2z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <line x1="10" y1="8" x2="10" y2="12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r="1" fill="#f59e0b"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Checkmark indicating correct action">
      <circle cx="10" cy="10" r="9" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
      <path d="M6 10l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UpgradeArrowIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Upward arrow showing card upgrade path">
      <rect x="6" y="28" width="32" height="10" rx="2" fill="var(--border)"/>
      <rect x="6" y="16" width="32" height="10" rx="2" fill={COLOR} fillOpacity="0.35"/>
      <rect x="6" y="4" width="32" height="10" rx="2" fill={COLOR}/>
      <path d="M22 30l4-4-4-4-4 4 4 4z" fill="white" opacity="0.6"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar showing 12 to 18 month CIBIL building period">
      <rect x="4" y="8" width="36" height="32" rx="3" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <line x1="4" y1="17" x2="40" y2="17" stroke="var(--border)" strokeWidth="1.5"/>
      <rect x="13" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <rect x="27" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <text x="22" y="34" textAnchor="middle" fontSize="11" fill={COLOR} fontWeight="700">12–18</text>
      <text x="22" y="43" textAnchor="middle" fontSize="7" fill="var(--text-muted)">months</text>
    </svg>
  );
}

const cardData = [
  {
    name: "HDFC MoneyBack+",
    issuer: "HDFC Bank",
    fee: "₹500/yr",
    feeWaiver: "Waived on ₹50,000 spend",
    reward: "2 points per ₹150 on online spends",
    eligibility: "₹20,000/month income",
    slug: "hdfc-moneyback-plus",
    bestFor: "First salaried professional card",
    highlight: true,
  },
  {
    name: "SBI SimplySAVE",
    issuer: "SBI Cards",
    fee: "₹499/yr",
    feeWaiver: "Waived on ₹1L spend",
    reward: "10X points on dining, movies, grocery",
    eligibility: "₹15,000/month income",
    slug: "sbi-simplysave",
    bestFor: "Low income threshold entry",
    highlight: false,
  },
  {
    name: "IDFC FIRST Millennia",
    issuer: "IDFC FIRST Bank",
    fee: "₹499/yr",
    feeWaiver: "Lifetime free if applied online",
    reward: "2% cashback (flat, all categories)",
    eligibility: "₹15,000/month income",
    slug: "idfc-first-millennia",
    bestFor: "Flat cashback, zero complexity",
    highlight: false,
  },
  {
    name: "Amazon Pay ICICI",
    issuer: "ICICI Bank",
    fee: "Lifetime free",
    feeWaiver: "N/A",
    reward: "5% on Amazon (Prime), 1% on others",
    eligibility: "Regular income, easier approval",
    slug: "amazon-pay-icici",
    bestFor: "Amazon-heavy spenders, first card",
    highlight: false,
  },
  {
    name: "Axis Neo",
    issuer: "Axis Bank",
    fee: "₹250/yr",
    feeWaiver: "Waived on ₹2,500/month spend",
    reward: "1% cashback, Swiggy/Myntra/Zomato offers",
    eligibility: "₹15,000/month income",
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
          text: "Most entry-level cards require ₹15,000 to ₹20,000 per month in income. SBI SimplySAVE and IDFC FIRST Millennia both have ₹15,000/month thresholds, making them accessible for freshers with their first job.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a credit card without any income proof as a student?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not easily. Banks require income proof or a Fixed Deposit as collateral. Students can get FD-backed secured cards (like SBI Student Plus) or be added as an add-on cardholder on a parent's card.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly does a credit card build my CIBIL score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your credit history typically takes 6 months to appear in CIBIL reports. Most beginners see a meaningful score (700+) after 12 to 18 months of on-time, full payments. Paying just the minimum amount due slows this significantly.",
        },
      },
      {
        "@type": "Question",
        name: "What credit utilisation percentage should I maintain as a beginner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keep utilisation below 30% of your credit limit. If your card limit is ₹60,000, try to keep outstanding balance below ₹18,000 at statement close. High utilisation signals financial stress to lenders.",
        },
      },
      {
        "@type": "Question",
        name: "Should I apply for multiple credit cards as a first-timer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Apply for one card, use it well for 12 to 18 months, then consider a second. Every new application triggers a hard inquiry that temporarily drops your CIBIL score by 5 to 15 points.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I miss a credit card payment in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The bank charges a late fee (₹500 to ₹1,200 typically), levies interest at 3 to 4% per month on the outstanding balance, and reports the missed payment to CIBIL. One missed payment can drop your score by 50 to 100 points.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Amazon Pay ICICI card good as a first credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, particularly if you already shop on Amazon and have a Prime subscription. The lifetime-free structure means no annual fee pressure, and the 5% cashback on Amazon purchases is genuinely useful.",
        },
      },
      {
        "@type": "Question",
        name: "When should I upgrade from my first credit card to a better one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upgrade after 12 to 18 months when your CIBIL score crosses 720, your income has grown, and you have a clear understanding of where you actually spend money. Upgrading too early risks rejection and wastes hard inquiries.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Beginners in India (June 2026)",
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
        name: "Best Credit Card for Beginners India",
        item: "https://assurefintech.com/best/credit-card-for-beginners-india",
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

      <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px" }}>
        Best Credit Card for Beginners in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Your first credit card shapes your CIBIL score for the next decade. Don't pick wrong.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>
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
          marginBottom: 36,
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
            { icon: <CheckCircleIcon />, title: "Easy eligibility", desc: "₹15,000/month income threshold or lower. Avoid cards that require ₹50,000+ CTC upfront." },
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
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Top picks for first-time cardholders (June 2026)</h2>
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
                    color: "white",
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
              CIBIL scores in India range from 300 to 900. Anything below 700 is considered poor by most lenders in 2026.
            </p>
            <p style={{ margin: "8px 0 0" }}>
              With a single credit card used correctly, you can reach 750+ within 18 months from a zero credit history baseline.
            </p>
          </div>
        </div>

        <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 22px", marginTop: 16 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>The one-card strategy (12 to 18 months)</div>
          {[
            "Use the card for all your regular monthly expenses — groceries, fuel, subscriptions, phone bill.",
            "Set up autopay for the full outstanding balance (not just minimum due).",
            "Keep your utilisation below 30% of your credit limit at statement close.",
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
                  color: "white",
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
                {["Monthly Income", "Best First Card", "Annual Fee", "Why"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹12,000 to ₹18,000", "Axis Neo", "₹250", "Lowest fee, easiest waiver threshold"],
                ["₹18,000 to ₹25,000", "IDFC FIRST Millennia", "₹499 (often free)", "Flat cashback, no category confusion"],
                ["₹25,000 to ₹40,000", "SBI SimplySAVE", "₹499", "10X on spend you're already doing"],
                ["₹40,000+", "HDFC MoneyBack+", "₹500", "Easy upgrade path to HDFC Regalia later"],
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
            { year: "Year 1-2", card: "Entry card (Axis Neo / IDFC Millennia)", score: "650 to 720", note: "Build history, pay in full every month" },
            { year: "Year 2-3", card: "Mid-tier (SBI SimplySAVE / Flipkart Axis)", score: "720 to 760", note: "Higher limit, more reward categories" },
            { year: "Year 3-5", card: "Premium (HDFC Regalia / Axis Magnus)", score: "760+", note: "Lounge access, travel miles, concierge" },
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
                  Target CIBIL: {tier.score} · {tier.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          The HDFC Bank internal upgrade system, for example, lets MoneyBack+ cardholders request an upgrade to Regalia after 24 months of good history. You don't apply fresh, you upgrade, which saves your credit score from a new hard inquiry.
        </p>
      </section>

      {/* Section: Common mistakes */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Common first-card mistakes that hurt you for years</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              mistake: "Paying only the minimum amount due",
              impact: "Interest at 3.5% per month (42% per year) starts accruing on the remaining balance. A ₹30,000 outstanding becomes ₹42,600 in one year.",
            },
            {
              mistake: "Closing your first credit card after getting a better one",
              impact: "Closing an old card reduces your average credit age and total available credit, both of which lower your CIBIL score.",
            },
            {
              mistake: "Using the card for cash advances",
              impact: "Most Indian banks charge 2.5% transaction fee plus 3.5% monthly interest from day one, with no grace period.",
            },
            {
              mistake: "Applying for 3 to 4 cards in the same month",
              impact: "Each application is a hard inquiry. Banks see multiple applications as a sign of credit hunger and often reject all of them.",
            },
            {
              mistake: "Treating credit limit as spending budget",
              impact: "A ₹1,00,000 credit limit is not ₹1,00,000 to spend. High utilisation kills your score and trains bad spending habits.",
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
  );
}
