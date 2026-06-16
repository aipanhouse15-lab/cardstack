import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Students in India (June 2026)",
  description: "Credit cards for students in India are either FD-backed or add-ons. Here's the honest guide to which route actually works.",
  alternates: { canonical: "/best/best-credit-card-for-students-india" },
  openGraph: {
    title: "Best Credit Card for Students in India (June 2026)",
    description: "Credit cards for students in India are either FD-backed or add-ons. Here's the honest guide to which route actually works.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-students-india
// Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

function GraduationCapIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graduation cap representing student finance">
      <polygon points="22,6 42,16 22,26 2,16" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M10 20v10a12 12 0 0 0 24 0V20" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <line x1="42" y1="16" x2="42" y2="26" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function FDLockIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lock icon representing Fixed Deposit secured credit card">
      <rect x="10" y="20" width="24" height="18" rx="3" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M15 20V15a7 7 0 0 1 14 0v5" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="22" cy="29" r="3" fill={COLOR}/>
      <line x1="22" y1="32" x2="22" y2="35" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function FamilyCardIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two connected cards representing add-on card from parent">
      <rect x="4" y="16" width="28" height="18" rx="3" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <rect x="12" y="10" width="28" height="18" rx="3" fill={COLOR} fillOpacity="0.2" stroke={COLOR} strokeWidth="1.5"/>
      <line x1="16" y1="21" x2="36" y2="21" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="25" r="2" fill={COLOR}/>
    </svg>
  );
}

function TimelineArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arrow indicating progression">
      <circle cx="10" cy="10" r="9" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.2"/>
      <path d="M7 10h6M11 7l3 3-3 3" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bank building representing issuing bank">
      <polygon points="22,4 40,16 4,16" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <rect x="8" y="16" width="5" height="18" fill={COLOR} fillOpacity="0.3"/>
      <rect x="17" y="16" width="5" height="18" fill={COLOR} fillOpacity="0.3"/>
      <rect x="26" y="16" width="5" height="18" fill={COLOR} fillOpacity="0.3"/>
      <rect x="35" y="16" width="5" height="18" fill={COLOR} fillOpacity="0.3"/>
      <rect x="4" y="34" width="36" height="4" rx="1" fill={COLOR} fillOpacity="0.5"/>
    </svg>
  );
}

function CostIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rupee coin representing cost calculation">
      <circle cx="20" cy="20" r="18" fill={COLOR} fillOpacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
      <text x="20" y="26" textAnchor="middle" fontSize="16" fill={COLOR} fontWeight="700">₹</text>
    </svg>
  );
}

function CampusIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Campus building representing student lifestyle spending">
      <rect x="6" y="22" width="32" height="18" rx="2" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <polygon points="22,6 38,22 6,22" fill={COLOR} fillOpacity="0.25" stroke={COLOR} strokeWidth="1.5"/>
      <rect x="17" y="30" width="10" height="10" rx="1" fill={COLOR} fillOpacity="0.4"/>
      <line x1="22" y1="12" x2="22" y2="14" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const studentCardData = [
  {
    name: "SBI Student Plus Advantage",
    issuer: "SBI Cards",
    type: "FD-Secured",
    fdRequired: "₹10,000 minimum FD",
    fee: "₹499/yr",
    limit: "80-85% of FD amount",
    slug: "sbi-student-plus",
    note: "Most accessible. SBI branches in every tier-2/3 city.",
    best: true,
  },
  {
    name: "ICICI Platinum Chip Card",
    issuer: "ICICI Bank",
    type: "Income-based (often waived for students with guarantor)",
    fdRequired: "N/A",
    fee: "₹299/yr (often waived)",
    limit: "Based on income/guarantor",
    slug: "icici-platinum-chip",
    note: "Good if your parents bank with ICICI. Easier internal approval.",
    best: false,
  },
  {
    name: "Axis Neo",
    issuer: "Axis Bank",
    type: "Income-based",
    fdRequired: "N/A",
    fee: "₹250/yr",
    limit: "₹25,000 to ₹60,000 for first-time",
    slug: "axis-neo",
    note: "Good for students with part-time income or stipend above ₹12,000/month.",
    best: false,
  },
  {
    name: "Federal Bank Visa Classic (FD-Backed)",
    issuer: "Federal Bank",
    type: "FD-Secured",
    fdRequired: "₹5,000 minimum FD",
    fee: "₹200/yr",
    limit: "90% of FD amount",
    slug: "federal-bank-fd-credit-card",
    note: "Lowest FD requirement. Good for students in Kerala/South India where Federal Bank has strong presence.",
    best: false,
  },
];

export default function BestCreditCardForStudentsIndia() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can a student under 18 get a credit card in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. RBI regulations require all credit card applicants to be at least 18 years old. Students under 18 can be listed as authorised users on a parent's card in some banks, but cannot hold an independent card.",
        },
      },
      {
        "@type": "Question",
        name: "What is an FD-backed credit card and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An FD-backed (secured) credit card is issued against a Fixed Deposit you place with the bank as collateral. Your credit limit is typically 80 to 90% of the FD value. The FD earns interest normally. If you default, the bank uses the FD to recover dues.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum FD amount needed for a student credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Federal Bank requires as little as ₹5,000. SBI requires ₹10,000. HDFC and Axis typically start at ₹20,000 for their secured card variants. The card limit is proportional to your FD, so a ₹10,000 FD gets you roughly an ₹8,000 to ₹9,000 credit limit.",
        },
      },
      {
        "@type": "Question",
        name: "Is an add-on card from parents better than a student's own card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on what you want. An add-on card gives you access to the parent's credit limit but the credit history goes to the primary cardholder, not you. For building your own CIBIL score, an FD-backed card in your own name is better.",
        },
      },
      {
        "@type": "Question",
        name: "Does an FD-backed card build CIBIL score the same way as a regular card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Repayment behaviour on FD-backed cards is reported to CIBIL exactly like any other credit card. Pay on time, keep utilisation low, and you'll build the same positive credit history.",
        },
      },
      {
        "@type": "Question",
        name: "What income proof is needed for a student credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For FD-secured cards, income proof is usually not required. For income-based student cards, banks accept ITR, Form 16, or salary slip showing ₹15,000 to ₹25,000 monthly. Students with internship stipends above ₹15,000/month may qualify.",
        },
      },
      {
        "@type": "Question",
        name: "Should a student get a credit card or just use UPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both serve different purposes. UPI is great for daily payments. A credit card in your name starts building your credit history, which you'll need for a car loan, home loan, or even a rental agreement within the next 5 to 10 years. Starting early is a genuine advantage.",
        },
      },
      {
        "@type": "Question",
        name: "Can a student use a credit card at college canteens or small shops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most college canteens and small shops don't have card terminals. For day-to-day campus spending, UPI works better. The credit card is more useful for online purchases, subscriptions (Spotify, Hotstar), and larger purchases like textbooks or electronics.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Students in India (June 2026)",
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
        name: "Best Credit Card for Students India",
        item: "https://assurefintech.com/best/credit-card-for-students-india",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Students in India (June 2026)
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
        Best Credit Card for Students India
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
        <GraduationCapIcon />
        Student Guide
      </div>


      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Credit cards for students in India are either FD-backed or add-ons. Here's the honest guide to which route actually works.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </p>

      {/* Hard truth callout */}
      <div
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderLeft: `4px solid ${COLOR}`,
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 40,
        }}
      >
        <strong style={{ color: COLOR }}>The honest number on this page:</strong> Most Indian students cannot get an income-based credit card. Banks require ₹1.5 to ₹3 lakh annual income, and student stipends rarely qualify. Your real options are an FD-backed card or an add-on from your parents. Both work. But only one builds your own CIBIL score.
      </div>

      {/* Why banks won't give cards to most students */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why most students get rejected for credit cards</h2>

        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <BankIcon />
          <div style={{ flex: 1 }}>
            <p>
              Banks assess credit card applications on three things: income, credit history, and repayment capacity. Most undergraduate students in India fail all three.
            </p>
            <p>
              Without a payslip or ITR, income verification is nearly impossible for a bank's automated system, even if you receive a decent internship stipend in your bank account.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 14,
            marginTop: 20,
          }}
        >
          {[
            { label: "Minimum income required (most banks)", value: "₹1.5L to ₹3L/year" },
            { label: "Students typically earning (stipend)", value: "₹0 to ₹15,000/month" },
            { label: "Credit history needed", value: "None required if FD-backed" },
            { label: "Age minimum (RBI mandate)", value: "18 years" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "var(--raise)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "14px 16px",
              }}
            >
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>{stat.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: COLOR }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Route 1: FD-backed */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <FDLockIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Route 1: The FD-secured card (builds your own CIBIL)</h2>
        </div>

        <p>
          An FD-backed card is the cleanest way for a student to get a credit card in their own name. You place a Fixed Deposit with the bank, typically ₹10,000 to ₹25,000, and the bank issues a card with a limit of 80 to 90% of that amount.
        </p>
        <p>
          The FD continues earning interest (typically 6.5 to 7% per year at most banks in 2026), so your collateral is not idle money. You're essentially paying a very small opportunity cost for the credit building benefit.
        </p>

        <div
          style={{
            background: "var(--raise)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "18px 20px",
            marginTop: 16,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 12 }}>How to open an FD-backed card step by step</div>
          {[
            "Open a savings account at the bank you want the card from (SBI, ICICI, Federal Bank).",
            "Deposit the minimum FD amount (₹5,000 to ₹20,000 depending on bank) for a minimum 1-year term.",
            "Apply for the secured credit card product, linking your FD as collateral.",
            "Bank typically approves within 3 to 7 working days. Card dispatched in 7 to 14 days.",
            "Activate card and immediately set up full-balance autopay from your savings account.",
            "Use it for small, regular purchases. Pay zero interest by clearing the full balance.",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8, fontSize: 14, alignItems: "flex-start" }}>
              <div
                style={{
                  minWidth: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: COLOR,
                  color: "var(--raise)",
                  fontSize: 12,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}
              >
                {i + 1}
              </div>
              <div>{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Route 2: Add-on card */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <FamilyCardIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Route 2: Add-on card from parents (convenient but no CIBIL benefit)</h2>
        </div>

        <p>
          An add-on (or supplementary) card is issued under the primary cardholder's account, typically a parent's card. You get a physical or virtual card with a sub-limit, and transactions are billed to the parent's account.
        </p>
        <p>
          It's useful for managing campus expenses, but here's the critical difference: all credit activity is reported under the primary cardholder's CIBIL, not yours.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginTop: 16,
          }}
        >
          <div style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 8, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, color: "#166534", marginBottom: 8 }}>Pros of add-on card</div>
            {[
              "Instant access, no FD required",
              "Higher limit (tied to parent's card)",
              "Good for emergencies during college",
              "No income proof needed",
            ].map((p) => (
              <div key={p} style={{ fontSize: 13, marginBottom: 4, color: "#166534" }}>+ {p}</div>
            ))}
          </div>
          <div style={{ background: "var(--red-dim)", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, color: "#991b1b", marginBottom: 8 }}>Cons of add-on card</div>
            {[
              "No CIBIL history built for you",
              "Shared limit can cause conflicts",
              "Parent sees all your transactions",
              "Any primary default affects you indirectly",
            ].map((c) => (
              <div key={c} style={{ fontSize: 13, marginBottom: 4, color: "#991b1b" }}>- {c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Card picks */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Best student credit cards in India (June 2026)</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
          Ranked by accessibility, FD requirement, and how well they serve a student's actual spending patterns.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {studentCardData.map((card) => (
            <div
              key={card.slug}
              style={{
                border: card.best ? `2px solid ${COLOR}` : "1.5px solid var(--border)",
                borderRadius: 10,
                padding: "18px 20px",
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
                  Top Pick
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{card.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{card.issuer}</div>
                </div>
                <div
                  style={{
                    background: `${COLOR}15`,
                    color: COLOR,
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 20,
                    alignSelf: "flex-start",
                  }}
                >
                  {card.type}
                </div>
              </div>
              <div style={{ fontSize: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: 10 }}>
                <div><span style={{ color: "var(--text-muted)" }}>Annual fee: </span><strong>{card.fee}</strong></div>
                <div><span style={{ color: "var(--text-muted)" }}>FD required: </span>{card.fdRequired}</div>
                <div style={{ gridColumn: "1 / -1" }}><span style={{ color: "var(--text-muted)" }}>Credit limit: </span>{card.limit}</div>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 10, fontStyle: "italic" }}>{card.note}</div>
              <Link
                href={`/cards/${card.slug}`}
                style={{ color: COLOR, fontSize: 13, fontWeight: 600, textDecoration: "none", borderBottom: `1px solid ${COLOR}40` }}
              >
                Full review and eligibility details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section: When to get independent card */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>When to switch to an income-based card (first job vs student)</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              trigger: "You get your first full-time job offer letter",
              action: "Apply immediately, even before you join. Banks accept offer letters as income proof. Your card often arrives before your first salary.",
              icon: <TimelineArrow />,
            },
            {
              trigger: "Your internship stipend crosses ₹15,000/month",
              action: "Axis Neo and IDFC FIRST Millennia both accept ₹15,000/month income. Apply with your stipend credit bank statements showing 3 consistent months.",
              icon: <TimelineArrow />,
            },
            {
              trigger: "You've had your FD card for 12+ months with clean history",
              action: "Contact your bank to upgrade to a regular (non-secured) card. Most banks allow this if CIBIL is 700+. Your FD gets released.",
              icon: <TimelineArrow />,
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                padding: "16px 18px",
                background: "var(--raise)",
                border: "1px solid var(--border)",
                borderRadius: 8,
              }}
            >
              <div style={{ marginTop: 4 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.trigger}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{item.action}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus spending breakdown */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <CampusIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Where students in India actually spend money</h2>
        </div>

        <p>
          A typical college student in India spends on a very different mix compared to a salaried professional. Your card rewards should reflect this.
        </p>

        <div style={{ overflowX: "auto", marginTop: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Spending Category", "Monthly Amount", "Best Card for This", "Reward Rate"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Subscriptions (OTT, music)", "₹300 to ₹800", "Amazon Pay ICICI", "1% cashback"],
                ["Online food (Swiggy, Zomato)", "₹1,000 to ₹3,000", "Axis Neo", "Partner discounts"],
                ["Amazon/Flipkart (books, electronics)", "₹2,000 to ₹8,000", "Amazon Pay ICICI", "5% (Prime)"],
                ["Recharges and internet", "₹400 to ₹800", "Any card", "1%"],
                ["Travel (trains, buses)", "₹500 to ₹2,000", "IRCTC SBI card", "Points on railway"],
              ].map(([cat, amt, card, reward], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px" }}>{cat}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{amt}</td>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{card}</td>
                  <td style={{ padding: "10px 14px", color: COLOR }}>{reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost breakdown section */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <CostIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>The real cost of an FD-backed card (worked example)</h2>
        </div>

        <div
          style={{
            background: "var(--raise)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "18px 20px",
          }}
        >
          <p style={{ margin: "0 0 12px", fontWeight: 600 }}>Scenario: SBI Student Plus, ₹15,000 FD, 1 year</p>
          {[
            ["FD interest earned (7% p.a.)", "+₹1,050"],
            ["Annual card fee", "-₹499"],
            ["Net cost of credit access", "₹551 for the year"],
            ["CIBIL score benefit value", "Priceless for future loans"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
                fontSize: 14,
              }}
            >
              <span>{label}</span>
              <span style={{ fontWeight: 600, color: value.startsWith("+") ? "#16a34a" : value.startsWith("-") ? "#dc2626" : COLOR }}>
                {value}
              </span>
            </div>
          ))}
          <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--text-muted)" }}>
            For ₹551 in net cost, you get 12 months of credit history, a working credit card for online purchases, and a CIBIL profile that will help you get a loan or better card within 18 months.
          </p>
        </div>
      </section>

      {/* Action plan */}
      <section
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderRadius: 10,
          padding: "24px 26px",
          marginBottom: 44,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Your student credit card action plan</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "If you have ₹10,000 to spare: open an SBI or Federal Bank FD today and apply for their secured card.",
            "If your parents have a credit card: ask to be added as an add-on cardholder for immediate access while you prepare for your own card.",
            "If you have an internship paying ₹15,000+/month: apply for Axis Neo or IDFC FIRST Millennia with 3 months of bank statements.",
            "Once your card arrives: use it for subscriptions and online purchases only. Pay the full balance before due date.",
            "In 12 months: check your CIBIL and consider upgrading. See our " +
              "Stack Builder tool for the next card that fits your then-current income.",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, fontSize: 14 }}>
              <div
                style={{
                  minWidth: 22,
                  height: 22,
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
              <div>
                {i === 4 ? (
                  <>
                    In 12 months: check your CIBIL and consider upgrading. See our{" "}
                    <Link href="/stack-builder" style={{ color: COLOR }}>
                      Stack Builder tool
                    </Link>{" "}
                    for the next card that fits your income.
                  </>
                ) : (
                  step
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Read next</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/best/credit-card-for-beginners-india" style={{ color: COLOR, fontSize: 14 }}>
            Best credit card for beginners in India (first salaried card guide)
          </Link>
          <Link href="/blog/fd-secured-credit-card-india-2026" style={{ color: COLOR, fontSize: 14 }}>
            FD-backed credit cards in India 2026: complete guide
          </Link>
          <Link href="/blog/cibil-score-from-zero-india" style={{ color: COLOR, fontSize: 14 }}>
            How to build a CIBIL score from zero in India
          </Link>
          <Link href="/smart-swipe" style={{ color: COLOR, fontSize: 14 }}>
            Smart Swipe: figure out which card earns the most on your next purchase
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
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Card details, FD requirements, and reward structures are accurate as of {UPDATED} and subject to change by the issuing bank. This is not financial advice. Always check the latest terms on the bank's official website. Assure Fintech may earn referral fees from some card issuers. This does not affect editorial rankings.
      </footer>
    </main>
    </>
  );
}
