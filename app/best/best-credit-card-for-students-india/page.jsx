import GuideCardRules from '@/components/GuideCardRules';
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Student Credit Cards in India: Secured, Add-On and Unsecured Routes (September 2026)",
  description: "Compare secured, supplementary and unsecured card routes for students in India, with issuer-specific eligibility, costs and reporting caveats.",
  alternates: { canonical: "/best/best-credit-card-for-students-india" },
  openGraph: {
    title: "Student Credit Cards in India: Secured, Add-On and Unsecured Routes (September 2026)",
    description: "Compare secured, supplementary and unsecured card routes for students in India, with issuer-specific eligibility, costs and reporting caveats.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-students-india
// Updated: September 26, 2026

const COLOR = "#7c3aed";
const UPDATED = "September 26, 2026";

function GraduationCapIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 58" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graduation cap representing student finance">
      <polygon points="22,6 42,16 22,26 2,16" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M10 20v10a12 12 0 0 0 24 0V20" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <line x1="42" y1="16" x2="42" y2="26" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function FDLockIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lock icon representing Fixed Deposit secured credit card">
      <rect x="10" y="20" width="24" height="18" rx="3" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
      <path d="M15 20V15a7 7 0 0 1 14 0v5" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="22" cy="29" r="3" fill={COLOR}/>
      <line x1="22" y1="32" x2="22" y2="35" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function FamilyCardIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two connected cards representing add-on card from parent">
      <rect x="4" y="16" width="28" height="18" rx="3" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <rect x="12" y="10" width="28" height="18" rx="3" fill={COLOR} fillOpacity="0.2" stroke={COLOR} strokeWidth="1.5"/>
      <line x1="16" y1="21" x2="36" y2="21" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="25" r="2" fill={COLOR}/>
    </svg>
  );
}

function TimelineArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arrow indicating progression">
      <circle cx="10" cy="10" r="9" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.2"/>
      <path d="M7 10h6M11 7l3 3-3 3" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bank building representing issuing bank">
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
    <svg width="40" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rupee coin representing cost calculation">
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
    name: "IDFC FIRST WOW (example secured card)",
    issuer: "Compare current secured-card products from issuers",
    type: "FD-Secured",
    fdRequired: "Issuer minimum and lien terms vary",
    fee: "Check current MITC",
    limit: "Issuer sets the limit against the deposit",
    slug: "idfc-wow",
    note: "May suit someone who can set aside a deposit and wants a card in their own name; this is a route to compare, not a guaranteed approval.",
    best: false,
  },
  {
    name: "An add-on card from a parent or guardian",
    issuer: "Ask the primary cardholder's issuer about its add-on rules",
    type: "Supplementary card",
    fdRequired: "No separate FD in many products; issuer terms apply",
    fee: "Check current MITC",
    limit: "Issuer / primary cardholder controls limits",
    slug: null,
    note: "Convenient for shared or supervised spending. Do not assume its activity creates a separate credit history for the add-on holder.",
    best: false,
  },
  {
    name: "An unsecured card in your own name",
    issuer: "Apply only if an issuer's published criteria fit your circumstances",
    type: "Issuer-assessed",
    fdRequired: "Not applicable",
    fee: "Compare joining and annual fees",
    limit: "Set by the issuer after its assessment",
    slug: null,
    note: "Income, existing relationship and credit history may be considered; no stipend, score or relationship guarantees approval.",
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
          text: "A primary credit-card applicant must meet the issuer's minimum-age requirement and applicable rules. Some issuers allow a minor to use a supplementary card with an eligible primary cardholder; ask the issuer about age, consent, liability and limits.",
        },
      },
      {
        "@type": "Question",
        name: "What is an FD-backed credit card and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A secured card is supported by collateral such as a fixed deposit, subject to the issuer's product terms. The deposit may be lien-marked and may not be freely withdrawable while it secures the card. Deposit minimums, credit limits, interest and recovery rights vary by issuer; read the agreement before applying.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum FD amount needed for a student credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal minimum. Each issuer sets the eligible deposit, lock or lien conditions, card limit and fees for its current product. Check the issuer's official product page and terms before placing a deposit.",
        },
      },
      {
        "@type": "Question",
        name: "Is an add-on card from parents better than a student's own card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An add-on card is linked to the primary card account and has issuer-specific liability and limit rules. Do not assume it will create a separate credit file for the supplementary holder. If building an individual file matters, ask the issuer and bureau how that product is reported; a secured primary account may be another route to compare.",
        },
      },
      {
        "@type": "Question",
        name: "Does an FD-backed card build CIBIL score the same way as a regular card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A secured card may be reported to a credit bureau, but reporting depends on the issuer and account. Confirm that the issuer reports the product and check your report for accuracy. On-time repayment and manageable balances are sensible habits, not a promise of a score or approval.",
        },
      },
      {
        "@type": "Question",
        name: "What income proof is needed for a student credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Requirements depend on the product and issuer. A secured product may assess the deposit and account documents; an unsecured application may ask for income or employment documents. A stipend amount or document type does not guarantee eligibility or approval.",
        },
      },
      {
        "@type": "Question",
        name: "Should a student get a credit card or just use UPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They serve different payment needs. A credit card is optional and creates repayment obligations; it does not guarantee future loan eligibility or a better score. Choose one only if its costs and account controls fit your needs and you can repay it safely.",
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
    headline: "Student Credit Cards in India: Secured, Add-On and Unsecured Routes",
    author: { "@type": "Person", name: "Ash" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
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
        name: "Best Credit Card for Students India",
        item: "https://www.assurefintech.com/best/best-credit-card-for-students-india",
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
            Student Credit Cards in India: Secured, Add-On and Unsecured Routes
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
        Last updated {UPDATED} · By Ash · 8 min read
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
        <strong style={{ color: COLOR }}>Start with the route, not an approval promise:</strong> Students may compare a secured primary card, an issuer-approved supplementary card, or an unsecured product if they meet its criteria. Eligibility and bureau reporting vary by issuer; neither route guarantees a score or future loan approval.
      </div>

      {/* Why banks won't give cards to most students */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>What issuers may consider</h2>

        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <BankIcon />
          <div style={{ flex: 1 }}>
            <p>
              Issuers set their own checks for identity, age, income, repayment capacity and credit history. The requirements differ by product; a student without an independent income may have fewer unsecured options, but an individual issuer makes the decision.
            </p>
            <p>
              Before applying, ask the issuer which documents it accepts. Do not infer eligibility from a stipend amount, campus, family relationship or another applicant's experience.
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
            { label: "Unsecured-card criteria", value: "Set by each issuer" },
            { label: "Income-document rules", value: "Ask the issuer" },
            { label: "Secured-card requirements", value: "Deposit and lien terms vary" },
            { label: "Supplementary-card rules", value: "Age and consent vary" },
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
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Route 1: A secured card in your own name</h2>
        </div>

        <p>A secured card may let an eligible applicant open a primary card against a fixed deposit. The issuer sets the minimum deposit, lien, credit limit, fees and release conditions; these are not uniform across banks, and the money may not be available while pledged.</p>
        <p>Do not treat FD interest as a guaranteed offset to card costs: deposit rates, tax, card fees and the opportunity cost of locked funds all matter. Compare the current deposit receipt and card terms before committing money.</p>

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
            "Compare issuer product terms, including deposit minimum, lien, fees and early-closure conditions.",
            "Confirm whether the issuer requires an existing savings account and which identity documents it accepts.",
            "Understand how the limit is determined and whether the account is reported to credit bureaus.",
            "Apply through the issuer's official channel; processing and delivery times vary.",
            "Read the card agreement and statement, then set a payment reminder or suitable payment instruction.",
            "Spend only what you can repay and contact the issuer promptly about errors or repayment difficulty.",
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
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Route 2: An add-on card from a parent or guardian</h2>
        </div>

        <p>
          An add-on (or supplementary) card is linked to a primary cardholder's account. Who is liable, what limit applies and how transactions appear depend on the issuer's terms; agree spending controls with the primary holder first.
        </p>
        <p>
          It can help manage shared expenses, but ask the issuer and bureau how this account is reported for the supplementary holder. Do not assume it creates a separate credit history.
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
              "Separate bureau reporting is not assured",
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
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Student card routes to compare</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
          These are routes, not a ranking or approval promise. Check a product's current eligibility, costs, bureau reporting and terms directly with its issuer.
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
                {card.slug ? "Example product" : "Example route"}
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
              {card.slug && <Link href={`/cards/${card.slug}`} style={{ color: COLOR, fontSize: 13, fontWeight: 600, textDecoration: "none", borderBottom: `1px solid ${COLOR}40` }}>See the IDFC FIRST WOW card record and issuer source</Link>}
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
              action: "Ask the issuer whether it accepts an offer letter or requires salary and other documents. Approval and delivery timing are issuer-specific.",
              icon: <TimelineArrow />,
            },
            {
              trigger: "Your income or employment situation changes",
              action: "Review the issuer's current eligibility and document requirements; no single stipend amount guarantees acceptance.",
              icon: <TimelineArrow />,
            },
            {
              trigger: "You want to close or replace a secured card",
              action: "Ask the issuer about outstanding balances, lien release, closure steps and any effect on your credit file. A fixed tenure or score does not guarantee an upgrade.",
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
                {["Spending Category", "Your spend", "What to check", "Reward treatment"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Subscriptions", "Your actual bill", "Merchant and payment route", "Check eligible-spend rules"],
                ["Food and groceries", "Your actual spend", "App, channel and category cap", "May be excluded or capped"],
                ["Books and shopping", "Your actual spend", "Merchant-specific rate and caps", "Check current card terms"],
                ["Recharges and utilities", "Your actual bill", "Payment platform and biller", "Eligibility varies"],
                ["Travel", "Your actual trips", "Booking channel and redemption", "Points may not equal cash"],
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
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Costs to include for a secured card</h2>
        </div>

        <div
          style={{
            background: "var(--raise)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "18px 20px",
          }}
        >
          <p style={{ margin: "0 0 12px", fontWeight: 600 }}>Compare the full cost for the exact card and deposit product you are considering.</p>
          {[
            ["Deposit return", "Use the current deposit receipt rate; tax may apply"],
            ["Card fees and taxes", "Check the current MITC"],
            ["Funds tied up", "Review lien and early-release rules"],
            ["Credit reporting", "Confirm with issuer; no score outcome is promised"],
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
            Treat the deposit as collateral, not free credit. Compare the card's fees with the deposit's after-tax return and the cost of keeping those funds unavailable.
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
            "If considering a secured card, compare the deposit minimum, lien, fees, limit and release terms before placing funds.",
            "For an add-on card, agree a spending limit with the primary holder and understand who is liable for repayment.",
            "For an unsecured card, review the issuer's current eligibility and documentation requirements; do not rely on a stipend threshold or another person's approval.",
            "Once you hold a card, read statements, check transactions and pay according to the issuer's terms without spending beyond your means.",
            "Periodically check your bureau report for accurate account information. A card does not guarantee a score, upgrade or future loan.",
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
                {step}{i === 4 && <> Explore options with our{" "}<Link href="/stack-builder" style={{ color: COLOR }}>Stack Builder</Link>; verify each product's current eligibility and terms.</>}
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
        <strong>Sources and disclosure:</strong> Assure Fintech is an independent comparison platform. This guide compares general student card routes; only the specifically linked product has a product record on this page. Issuer eligibility, FD terms, fees and rewards can change. Check current official terms before applying. For credit-score factors and NA/NH files, see <a href="https://www.cibil.com/blog/all-you-need-to-know-about-cibil-score" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>CIBIL's official guide</a>. This is educational content, not financial advice. Assure Fintech may earn referral fees from some card issuers; compensation does not determine editorial coverage.
      </footer>
    <GuideCardRules slug="best-credit-card-for-students-india" />
    </main>
    </>
  );
}
