import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Paying Health Insurance Premiums by Credit Card: Terms and Rewards (September 2026)",
  description: "Check insurer payment charges, card-specific insurance exclusions and reward caps before paying a health insurance premium by credit card.",
  alternates: { canonical: "/best/best-credit-card-for-health-insurance-payment" },
  openGraph: {
    title: "Paying Health Insurance Premiums by Credit Card: Terms and Rewards (September 2026)",
    description: "Check insurer payment charges, card-specific insurance exclusions and reward caps before paying a health insurance premium by credit card.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-health-insurance-payment
// Updated: September 26, 2026

const COLOR = "#16a34a";
const UPDATED = "September 26, 2026";

const IconShield = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Health insurance shield icon">
    <path d="M24 5L42 12V26C42 35 34 42 24 45C14 42 6 35 6 26V12L24 5Z" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="2"/>
    <path d="M18 24H30M24 18V30" stroke={COLOR} strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const IconRupee = () => (
  <svg width="28" height="28" viewBox="0 0 28 43" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Premium amount indicator">
    <circle cx="14" cy="14" r="12" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5"/>
    <text x="9" y="19" fontSize="13" fill={COLOR} fontWeight="700">₹</text>
  </svg>
);

const IconCalendar = () => (
  <svg width="28" height="28" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annual payment timing calendar">
    <rect x="3" y="5" width="22" height="20" rx="3" fill="var(--raise)" stroke={COLOR} strokeWidth="1.8"/>
    <rect x="3" y="10" width="22" height="3" fill={COLOR} opacity="0.2"/>
    <rect x="8" y="3" width="2" height="5" rx="1" fill={COLOR}/>
    <rect x="18" y="3" width="2" height="5" rx="1" fill={COLOR}/>
    <circle cx="10" cy="18" r="2" fill={COLOR} opacity="0.4"/>
    <circle cx="18" cy="18" r="2" fill={COLOR} opacity="0.8"/>
  </svg>
);

const IconWarn = () => (
  <svg width="24" height="24" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exclusion warning">
    <path d="M12 3L22 20H2L12 3Z" fill="#fff7ed" stroke="#f97316" strokeWidth="1.8"/>
    <rect x="11" y="9" width="2" height="6" rx="1" fill="var(--raise)"/>
    <rect x="11" y="17" width="2" height="2" rx="1" fill="var(--raise)"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Earns reward points">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.12"/>
    <path d="M5 9.5L8 12L13 6" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCross = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Does not earn reward points">
    <circle cx="9" cy="9" r="8" fill="#fee2e2" opacity="0.6"/>
    <path d="M6 6L12 12M12 6L6 12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconFamily = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indian family health insurance">
    <circle cx="8" cy="9" r="3" fill={COLOR} opacity="0.5"/>
    <circle cx="20" cy="9" r="3" fill={COLOR} opacity="0.5"/>
    <circle cx="14" cy="7" r="3.5" fill={COLOR} opacity="0.8"/>
    <path d="M4 22C4 18 6 16 8 16C10 16 11 17 14 17C17 17 18 16 20 16C22 16 24 18 24 22" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top recommended card">
    <polygon points="9,1.5 11,7 17,7 12,11 14,17 9,13.5 4,17 6,11 1,7 7,7" fill={COLOR}/>
  </svg>
);

export default function BestCreditCardForHealthInsurancePayment() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do credit cards earn reward points on health insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the card and payment route. SBI Cashback excludes insurance cashback; Amex Membership Rewards excludes insurance points; and Axis Magnus excludes insurance from EDGE Rewards. HDFC applies a monthly cap to points from insurance transactions. Check your card variant's latest terms and the insurer's payment charges before paying."
        }
      },
      {
        "@type": "Question",
        name: "Should I pay health insurance premium annually or monthly by credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal answer. Compare the insurer's total price and payment charges for each instalment option with your cash-flow needs. A credit-card reward is not guaranteed: the card may exclude insurance, cap points, or classify the transaction differently."
        }
      },
      {
        "@type": "Question",
        name: "What is the reward earned on a ₹30,000 annual health insurance premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no reliable single figure without the exact card variant, payment route, monthly cap and redemption option. In particular, Amex MRCC, SBI Cashback and Axis Magnus currently exclude insurance rewards; HDFC insurance points are capped monthly. Check the issuer's current terms before estimating value."
        }
      },
      {
        "@type": "Question",
        name: "Can I pay car insurance and term insurance by credit card for points?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Different insurers and payment gateways can classify transactions differently, and issuer rules vary by card and route. Check the actual transaction's eligibility rather than assuming health, term and motor insurance payments receive identical treatment."
        }
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia card earn cashback on insurance payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do not assume the 5% partner rate applies. HDFC's terms impose a monthly reward-point cap on insurance transactions for most card variants; the exact earn rate and eligible payment route depend on your card. Verify your current product terms and statement."
        }
      },
      {
        "@type": "Question",
        name: "Is Amex MRCC good for health insurance premium payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No Membership Rewards points are earned on insurance spend under Amex's current published Membership Rewards terms. Do not use an airline-transfer assumption to value insurance payments on MRCC."
        }
      },
      {
        "@type": "Question",
        name: "Which insurer portals accept credit card payment most smoothly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment methods and convenience charges can vary by insurer, policy, card network and payment provider. Confirm the available methods and final amount on the insurer's own checkout screen before submitting payment."
        }
      },
      {
        "@type": "Question",
        name: "Does paying insurance by credit card affect my policy or claim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The payment mode has no bearing on the insurance policy, its coverage, or claim settlement. Your premium receipt from the insurer is the same whether you paid by credit card, UPI, or cheque. IRDAI regulations ensure policyholders are not disadvantaged based on payment method."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Paying Health Insurance Premiums by Credit Card: Terms and Rewards (September 2026)",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best/" },
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Health Insurance Payment", item: "https://assurefintech.com/best/credit-card-for-health-insurance-payment" }
    ]
  };

  const comparisonData = [
    { card: "HDFC Regalia Gold", fee: "Check current schedule", rate: "Variant-specific", earnsOnInsurance: true, noteType: "HDFC terms cap monthly points from insurance; verify current variant and route", annual30k: "Not estimated", annual60k: "Not estimated" },
    { card: "Amex MRCC", fee: "Check current schedule", rate: "No points on insurance", earnsOnInsurance: false, noteType: "Insurance is excluded under current Amex terms", annual30k: "₹0 points", annual60k: "₹0 points" },
    { card: "Axis Magnus", fee: "Check current schedule", rate: "No EDGE Rewards on insurance", earnsOnInsurance: false, noteType: "Axis lists insurance among excluded categories", annual30k: "₹0 EDGE Rewards", annual60k: "₹0 EDGE Rewards" },
    { card: "HDFC Millennia", fee: "Check current schedule", rate: "Variant-specific", earnsOnInsurance: true, noteType: "Monthly insurance-point cap applies; verify card-specific terms", annual30k: "Not estimated", annual60k: "Not estimated" },
    { card: "SBI Cashback Card", fee: "Check current schedule", rate: "No cashback on insurance", earnsOnInsurance: false, noteType: "Insurance excluded; other cashback caps and terms also apply", annual30k: "₹0 cashback", annual60k: "₹0 cashback" },
    { card: "Amazon Pay ICICI", fee: "Check current schedule", rate: "Verify transaction eligibility", earnsOnInsurance: false, noteType: "Do not assume general non-Amazon cashback applies to insurance", annual30k: "Not estimated", annual60k: "Not estimated" }
  ];

  const premiumBreakdown = [
    { type: "Family Floater (₹10L sum insured, 4 members)", annual: "₹18,000 - ₹28,000" },
    { type: "Individual Health Plan (₹5L cover, age 30-35)", annual: "₹7,000 - ₹12,000" },
    { type: "Top-up / Super Top-up (₹25L deductible ₹5L)", annual: "₹4,000 - ₹8,000" },
    { type: "Term Insurance (₹1Cr cover, age 30)", annual: "₹10,000 - ₹15,000" },
    { type: "Private Car Insurance (mid-range car)", annual: "₹12,000 - ₹22,000" }
  ];

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
            Paying Health Insurance Premiums by Credit Card: Terms and Rewards (September 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED}</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 24 }}>
        <Link href="/">Home</Link>{" / "}<Link href="/best/">Best Cards</Link>{" / "}
        <span>Best Credit Card for Health Insurance Payment</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <IconShield />
        <span style={{ background: COLOR, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, letterSpacing: 0.4 }}>INSURANCE + REWARDS</span>
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted,#475569)", marginBottom: 10, fontWeight: 500 }}>
        Before paying a health premium by card, check the insurer's payment charges and your card's insurance exclusions, reward caps and eligible payment routes.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>By Ash K</span><span>10 min read</span>
      </div>

      {/* Honest number callout */}
      <div style={{ background: `${COLOR}08`, border: `1.5px solid ${COLOR}30`, borderRadius: 12, padding: "18px 22px", marginBottom: 28, display: "flex", gap: 12 }}>
        <IconRupee />
        <div>
          <strong style={{ color: COLOR, fontSize: 14, display: "block", marginBottom: 4 }}>The Honest Number on Insurance Rewards</strong>
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted,#475569)" }}>
            There is no standard household premium total or guaranteed card return. Insurance rewards depend on issuer exclusions, monthly caps, transaction route and point redemption value; fees or payment charges can outweigh rewards.
          </p>
        </div>
      </div>

      {/* Why insurance is tricky */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Why Health Insurance Payments Are Tricky on Credit Cards</h2>

      <p style={{ marginBottom: 12 }}>
        Issuers classify insurance transactions differently. A card can exclude the category, cap points, or treat it as ordinary eligible spend; the merchant category and payment route may also matter.
      </p>

      <p style={{ marginBottom: 16 }}>
        SBI Cashback explicitly excludes insurance from cashback. HDFC's current terms set a monthly reward-point cap for insurance transactions on most card variants; that is not a blanket exclusion. Check the card-specific MITC.
      </p>

      <div style={{ background: "rgba(212,168,83,.06)", border: "1.5px solid #fdba74", borderRadius: 10, padding: "14px 18px", marginBottom: 28, display: "flex", gap: 10 }}>
        <IconWarn />
        <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted,#475569)" }}>
          SBI Cashback excludes insurance cashback. HDFC insurance transactions are subject to monthly reward-point caps for most card variants. Neither headline partner rates nor historical terms establish the points for your particular policy payment.
        </p>
      </div>

      {/* Indian family premium landscape */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What an Indian Family Pays in Premiums: 2026 Snapshot</h2>

      <p style={{ marginBottom: 16 }}>
        Before picking the card, understand how large the opportunity is. For a typical salaried household in a metro, here's the annual insurance outflow.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        {premiumBreakdown.map(({ type, annual }, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: i % 2 === 0 ? "var(--raise)" : "transparent", borderRadius: 8, border: "1px solid var(--border,var(--hair))", flexWrap: "wrap", gap: 6 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <IconFamily />
              <span style={{ fontSize: 14 }}>{type}</span>
            </div>
            <strong style={{ color: COLOR, fontSize: 14 }}>{annual}</strong>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 12, fontSize: 13, color: "var(--text-muted,#64748b)" }}>
        Premium amounts vary by age, location, plan design, medical history and insurer. Obtain a current quote for the specific policy rather than relying on a general estimate.
      </p>

      <p style={{ marginBottom: 12 }}>
        Estimate any return only after checking the exact card terms. Amex MRCC excludes insurance from Membership Rewards points, and Axis Magnus excludes insurance from EDGE Rewards.
      </p>

      <p style={{ marginBottom: 24 }}>
        For more on choosing the right health policy before you worry about which card to pay it on, see <Link href="/learn/insurance" style={{ color: COLOR }}>Assure's insurance learning centre</Link>.
      </p>

      {/* Annual vs monthly */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Annual vs Monthly Payment: Which Earns More?</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ background: `${COLOR}08`, border: `1px solid ${COLOR}30`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <IconCalendar />
              <strong style={{ color: COLOR, fontSize: 14 }}>Annual Payment</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.8 }}>
              <li>One large transaction: all points at once</li>
              <li>Insurers don't surcharge annual mode</li>
              <li>Better for hitting card milestone bonuses</li>
              <li>Recommended for most cardholders</li>
            </ul>
          </div>
          <div style={{ background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <IconCalendar />
              <strong style={{ color: "var(--text-muted,#475569)", fontSize: 14 }}>Monthly Payment</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.8 }}>
              <li>Points earned per instalment (lower per txn)</li>
          <li>Check any insurer or payment-provider charge for each payment frequency</li>
              <li>Useful if annual payment strains cash flow</li>
              <li>Not recommended if surcharge applies</li>
            </ul>
          </div>
        </div>
        <div style={{ background: "rgba(94,177,255,.08)", border: "1px solid #93c5fd", borderRadius: 8, padding: "12px 16px", fontSize: 13, color: "#1e40af" }}>
          <strong>Compare total cost:</strong> Check instalment surcharges, processing charges, reward eligibility and cash-flow impact for the exact policy. Do not assume annual or monthly billing earns rewards or avoids fees.
        </div>
      </div>

      {/* Card comparison table */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Card-by-Card Comparison: Insurance Premium Rewards</h2>
      <p style={{ color: "var(--text-muted,#64748b)", fontSize: 14, marginBottom: 16 }}>All figures based on paying ₹30,000 and ₹60,000 annual insurance premium.</p>

      <div style={{ overflowX: "auto", marginBottom: 28 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: `${COLOR}12` }}>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Card</th>
              <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Earns?</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Effective Rate</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>On ₹30K</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>On ₹60K</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Note</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 12px", fontWeight: 600 }}>{row.card}</td>
                <td style={{ padding: "10px 12px", textAlign: "center" }}>
                  {row.earnsOnInsurance ? <IconCheck /> : <IconCross />}
                </td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: row.earnsOnInsurance ? COLOR : "#dc2626", fontWeight: 700 }}>{row.rate}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>{row.annual30k}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", fontWeight: 600 }}>{row.annual60k}</td>
                <td style={{ padding: "10px 12px", fontSize: 12, color: "var(--text-muted,#64748b)" }}>{row.noteType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Picks section */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Selected issuer examples: check card-specific terms</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
        {[
          {
            rank: 1,
            name: "American Express Membership Rewards Credit Card",
            tagline: "Not suitable for earning Membership Rewards on insurance",
            details: [
              "Amex's current terms exclude insurance transactions from Membership Rewards points",
              "Do not count airline transfers or bonus points for excluded premium payments",
              "Check whether the insurer accepts Amex and any processing charge before paying"
            ]
          },
          {
            rank: 2,
            name: "HDFC Regalia Gold",
            tagline: "Check monthly insurance caps before assuming points accrue",
            details: [
              "HDFC terms cap reward points on insurance transactions monthly for most card variants",
              "The exact card variant, payment gateway and reward redemption route determine value",
              "Check HDFC's latest MITC and the insurer's final checkout amount"
            ]
          },
          {
            rank: 3,
            name: "Axis Magnus",
            tagline: "Insurance spend does not earn Axis EDGE Rewards",
            details: [
              "Axis lists insurance as an excluded category for EDGE Rewards",
              "Do not choose or retain this card for insurance rewards",
              "Check the current terms for other eligible spend and card fees"
            ]
          }
        ].map(({ rank, name, tagline, details }) => (
          <div key={rank} style={{ border: `2px solid ${rank === 1 ? COLOR : "var(--hair)"}`, borderRadius: 14, padding: "20px 22px", background: rank === 1 ? `${COLOR}05` : "transparent" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              {rank === 1 && <IconStar />}
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>#{rank} {name}</h3>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: 14, color: COLOR, fontWeight: 600 }}>{tagline}</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.8 }}>
              {details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Timing strategy */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Renewal Timing Strategy</h2>

      <p style={{ marginBottom: 12 }}>
        If your current card has a spend-based milestone, check whether insurance transactions count toward it and whether the premium posts before the milestone deadline. Do not assume excluded or capped spend qualifies.
      </p>

      <p style={{ marginBottom: 24 }}>
        The reverse also applies: if you're far from a milestone, paying insurance early in the year gives you more time to build toward it. Use the <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe calculator</Link> to model exactly when your milestone triggers.
      </p>

      {/* Actionable CTA */}
      <div style={{ background: `${COLOR}08`, border: `2px solid ${COLOR}`, borderRadius: 16, padding: "24px 26px", marginBottom: 44 }}>
        <h3 style={{ margin: "0 0 14px", fontSize: 18, fontWeight: 700, color: COLOR }}>3 Actions to Maximise Your Insurance Premium Reward</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Look up your current card's MITC exclusion list. Search for 'insurance' in the PDF. Confirm whether you earn full, reduced, or zero rewards on premium payments.",
            "Compare payment frequency, any insurer charge, reward eligibility and cash flow for each policy before choosing annual or monthly payment.",
            "Do not use Amex MRCC or Axis Magnus expecting insurance rewards; check HDFC monthly caps and every card's latest terms."
          ].map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ background: COLOR, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: "var(--text-muted,#475569)" }}>{tip}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/learn/insurance" style={{ display: "inline-block", padding: "10px 18px", background: COLOR, color: "#fff", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Insurance Learning Centre</Link>
          <Link href="/stack-builder" style={{ display: "inline-block", padding: "10px 18px", background: "var(--raise)", color: COLOR, border: `1px solid ${COLOR}`, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Build Your Card Stack</Link>
        </div>
      </div>

      {/* FAQs */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
        {faq.mainEntity.map((item, i) => (
          <details key={i} style={{ border: "1px solid var(--border,var(--hair))", borderRadius: 10 }}>
            <summary style={{ padding: "14px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {item.name}
              <span style={{ color: COLOR, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
            </summary>
            <div style={{ padding: "0 18px 16px", fontSize: 14, color: "var(--text-muted,#475569)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </div>
          </details>
        ))}
      </div>

      <footer style={{ borderTop: "1px solid var(--border,var(--hair))", paddingTop: 20, fontSize: 12, color: "var(--text-muted,#94a3b8)", lineHeight: 1.6 }}>
        <p style={{ margin: "0 0 6px" }}>
          <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Reward rates, exclusions, and fee waivers are subject to change. Verify MITC details with your card issuer before making premium payments. This page does not recommend specific insurance products.
        </p>
        <p style={{ margin: 0 }}>
          Data from official bank MITCs and insurer portals as of {UPDATED}. See also: <Link href="/learn/insurance" style={{ color: COLOR }}>Insurance Learning Centre</Link> and <Link href="/best/credit-card-for-emi-purchases" style={{ color: COLOR }}>EMI Purchases Guide</Link>.
        </p>
      </footer>
    </main>
    </>
  );
}
