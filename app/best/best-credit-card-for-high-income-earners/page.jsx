import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for High Income Earners in India (June 2026)",
  description: "Compare premium credit cards by current eligibility, annual fees, eligible rewards, redemption terms and benefits you will actually use.",
  alternates: { canonical: "/best/best-credit-card-for-high-income-earners" },
  openGraph: {
    title: "Best Credit Card for High Income Earners in India (June 2026)",
    description: "Compare premium credit cards by current eligibility, annual fees, eligible rewards, redemption terms and benefits you will actually use.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-high-income-earners
// Updated: September 26, 2026

const COLOR = "#374151";
const ACCENT = "var(--raise2)";
const GOLD = "#b45309";
const UPDATED = "September 26, 2026";

const IconPremium = () => (
  <svg width="48" height="48" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Premium credit card for high income earners">
    <rect x="4" y="10" width="40" height="28" rx="6" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="2"/>
    <rect x="4" y="18" width="40" height="7" fill={GOLD} opacity="0.15"/>
    <circle cx="36" cy="30" r="4" fill={GOLD} opacity="0.4"/>
    <circle cx="40" cy="30" r="4" fill={GOLD} opacity="0.7"/>
    <rect x="8" y="24" width="16" height="2" rx="1" fill={COLOR} opacity="0.4"/>
    <rect x="8" y="28" width="10" height="2" rx="1" fill={COLOR} opacity="0.3"/>
  </svg>
);

const IconChart = () => (
  <svg width="28" height="28" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ROI chart for premium cards">
    <rect x="3" y="20" width="5" height="6" rx="1" fill={COLOR} opacity="0.4"/>
    <rect x="11" y="14" width="5" height="12" rx="1" fill={COLOR} opacity="0.6"/>
    <rect x="19" y="8" width="5" height="18" rx="1" fill={GOLD} opacity="0.8"/>
    <path d="M3 20L11 14L19 8L25 5" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
  </svg>
);

const IconKey = () => (
  <svg width="28" height="28" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Invite-only access key">
    <circle cx="10" cy="13" r="7" fill="none" stroke={GOLD} strokeWidth="2"/>
    <circle cx="10" cy="13" r="3" fill={GOLD} opacity="0.3"/>
    <path d="M17 13H26L26 16L23 16L23 13" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="22" y="16" width="2" height="3" rx="0.5" fill={GOLD}/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit included">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.25"/>
    <path d="M5 9.5L8 12L13 6" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top ranked premium card">
    <polygon points="9,1.5 11,7 17,7 12,11 14,17 9,13.5 4,17 6,11 1,7 7,7" fill={GOLD}/>
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Verified premium tier benefit">
    <path d="M11 3L20 7V13C20 17 16 20 11 22C6 20 2 17 2 13V7L11 3Z" fill={GOLD} opacity="0.15" stroke={GOLD} strokeWidth="1.5"/>
    <path d="M7 11L10 14L15 9" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconConcierge = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concierge service icon">
    <circle cx="14" cy="9" r="4" fill={COLOR} opacity="0.3"/>
    <path d="M6 24C6 20 9.6 17 14 17C18.4 17 22 20 22 24" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.8"/>
    <path d="M8 24H20" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function BestCreditCardForHighIncomeEarners() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What income is required for HDFC Infinia credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC describes Infinia Metal Edition membership as invitation-only. The bank's current public page does not establish a universal income threshold or guaranteed upgrade pathway; confirm eligibility and the offer made to you directly with HDFC."
        }
      },
      {
        "@type": "Question",
        name: "What income is required for Axis Magnus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis publishes Magnus product and fee terms, but eligibility can depend on the application channel and bank assessment. Do not rely on a single income figure or assume an existing Axis account guarantees approval. Check the current fee and any card-specific offer before applying."
        }
      },
      {
        "@type": "Question",
        name: "Is the Amex Platinum Charge Card worth its annual fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "American Express currently lists an annual fee of ₹66,000 plus taxes for the Platinum Charge Card. Whether its benefits justify that fee depends on the value you personally realize; do not assign a fixed rupee value to lounge visits or memberships unless you would otherwise pay for them. American Express currently says it is temporarily pausing new card applications in India; check its official site for availability before acting."
        }
      },
      {
        "@type": "Question",
        name: "What is the reward rate on HDFC Infinia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC currently lists 5 Reward Points per ₹150 on eligible spends and up to 10X on SmartBuy spends. Point value depends on redemption route, while category exclusions, caps and offer terms apply; do not assume a flat 3.33% cash return on every transaction."
        }
      },
      {
        "@type": "Question",
        name: "How much extra do I earn annually switching from a mid-tier card to Infinia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal spend break-even. Estimate rewards on eligible transactions using the card's current earn and redemption terms, subtract the fee you will actually pay after any waiver, and value only benefits you would otherwise purchase. Compare against the card you already hold."
        }
      },
      {
        "@type": "Question",
        name: "What concierge benefits do premium cards offer in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Concierge services and availability vary by issuer and card variant. Review the current service terms and consider whether you would use the service; do not assign a fixed monetary value to it without an actual alternative cost."
        }
      },
      {
        "@type": "Question",
        name: "Can high-income earners hold both HDFC Infinia and Axis Magnus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some cardholders may use both, but a two-card stack is not automatically worthwhile. Compare each card's current fee, eligible rewards, excluded spend, foreign-currency costs, transfer terms and benefits you will use. Axis Magnus's renewal-fee waiver currently requires ₹25 lakh of eligible spend in the preceding card-anniversary year; exclusions apply."
        }
      },
      {
        "@type": "Question",
        name: "What is HDFC Diners Black and how does it compare to Infinia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC currently lists ₹10,000 joining/renewal membership fees for Diners Club Black Metal and 5 reward points per ₹150 on eligible spends. Compare its current redemption, milestone and lounge conditions with Infinia; network acceptance can differ by merchant and destination. Verify the exact variant and fee-waiver terms."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for High Income Earners in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for High Income Earners", item: "https://assurefintech.com/best/credit-card-for-high-income-earners" }
    ]
  };

  const premiumCards = [
    {
      rank: 1,
      name: "HDFC Infinia",
      fee: "₹12,500 + taxes; renewal waiver terms apply",
      income: "Invitation-only; confirm eligibility with HDFC",
      rewardRate: "5 points/₹150 on eligible spends; SmartBuy multipliers and redemption rules apply",
      lounge: "HDFC advertises complimentary global access; visit and guest terms apply",
      standout: "Compare eligible spend, redemption route, fee waiver, caps and current lounge terms.",
      roi10L: "Net value depends on eligible spend, redemption and fee waiver."
    },
    {
      rank: 2,
      name: "Axis Magnus",
      fee: "₹12,500 + taxes; waiver requires ₹25L eligible preceding-year spend",
      income: "Eligibility depends on current bank assessment and offer",
      rewardRate: "EDGE Rewards; earn and transfer value depend on eligible spend and current partner terms",
      lounge: "Check current domestic/international visit, guest and spend conditions",
      standout: "Compare eligible reward routes, annual fee and current travel benefits against your own use.",
      roi10L: "Net value depends on eligible spend, redemption and fee waiver."
    },
    {
      rank: 3,
      name: "HDFC Diners Black",
      fee: "₹10,000 + taxes; variant/waiver terms apply",
      income: "Check current HDFC eligibility",
      rewardRate: "5 points/₹150 on eligible spends; redemption terms apply",
      lounge: "Check current access, guest and network conditions",
      standout: "Compare the Diners Club network, current benefits and fee against alternatives.",
      roi10L: "Net value depends on eligible spend, redemption and fee waiver."
    },
    {
      rank: 4,
      name: "ICICI Emeralde",
      fee: "Check current ICICI fee and variant terms",
      income: "Check current ICICI eligibility",
      rewardRate: "Rewards and redemption depend on the Emeralde variant and eligible transaction",
      lounge: "Check current visit caps, spend conditions and guest terms",
      standout: "Compare the exact Emeralde variant's current forex, fee and lounge conditions.",
      roi10L: "Net value depends on eligible spend, redemption and fee waiver."
    },
    {
      rank: 5,
      name: "Amex Platinum Charge",
      fee: "₹66,000 + taxes; confirm current availability",
      income: "Check current American Express eligibility",
      rewardRate: "Membership Rewards + luxury benefits",
      lounge: "Global Lounge Collection access; lounge and guest terms apply",
      standout: "American Express currently says new applications in India are temporarily paused. Recheck availability and current terms.",
      roi10L: "Net value depends on benefits you would otherwise pay for."
    }
  ];

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #07080A, #111419, #07080A)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #37415122, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for High Income Earners in India (June 2026)
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
        <span>Best Credit Card for High Income Earners</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <IconPremium />
        <span style={{ background: ACCENT, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, letterSpacing: 0.4 }}>PREMIUM GUIDE</span>
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted,#475569)", marginBottom: 10, fontWeight: 500 }}>
          Premium-card eligibility and value depend on issuer criteria and your actual spending—not income alone. Compare current fees, reward eligibility, redemption rules and benefits you will use.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>By Ash K</span><span>11 min read</span>
      </div>

      {/* Honest number box */}
      <div style={{ background: `${GOLD}10`, border: `1.5px solid ${GOLD}40`, borderRadius: 12, padding: "18px 22px", marginBottom: 28, display: "flex", gap: 12 }}>
        <IconChart />
        <div>
          <strong style={{ color: GOLD, fontSize: 14, display: "block", marginBottom: 4 }}>The honest comparison</strong>
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted,#475569)" }}>
            A reliable net-value comparison needs your card variant, eligible transaction mix, redemption route, fee-waiver eligibility and any benefits you would otherwise buy. A single spend figure cannot guarantee a premium card's return.
          </p>
        </div>
      </div>

      {/* Why the math changes */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: ACCENT }}>Why the Math Changes at ₹15L+ Income</h2>

      <p style={{ marginBottom: 24 }}>
        Higher income does not automatically qualify someone for a premium card or make its fee worthwhile. Eligibility, invitation rules, reward exclusions and benefits vary by issuer and product. Assess your real eligible spend and the fee you would actually pay rather than assuming a particular income unlocks a card.
      </p>

      {/* Invite thresholds */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: ACCENT }}>The Invite Threshold: How Banks Decide</h2>

      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "16px 18px", background: `${GOLD}08`, border: `1px solid ${GOLD}30`, borderRadius: 10, marginBottom: 20 }}>
        <IconKey />
        <div>
          <strong style={{ color: GOLD, fontSize: 14, display: "block", marginBottom: 4 }}>How Invite-Only Cards Actually Work</strong>
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted,#475569)" }}>
            Each issuer sets its own eligibility and approval criteria, which may change and may not be fully disclosed publicly. Do not rely on a specific credit-score threshold, income amount or relationship path as a guarantee; confirm current eligibility directly with the issuer.
          </p>
        </div>
      </div>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: `${COLOR}08` }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Card</th>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Income Threshold</th>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Access Mode</th>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Typical Pathway</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["HDFC Infinia", "Issuer assessment", "Invitation-only", "Confirm current eligibility and offer with HDFC"],
              ["Axis Magnus", "Issuer assessment", "Check current application route", "Confirm current eligibility and offer with Axis"],
              ["HDFC Diners Club Black Metal", "Issuer assessment", "Check current application route", "Confirm the exact variant and current terms"],
              ["ICICI Emeralde", "Issuer assessment", "Check current application route", "Confirm the exact variant and current terms"],
              ["Amex Platinum Charge", "Issuer assessment", "Applications temporarily paused (check status)", "Check American Express for current availability"]
            ].map(([card, income, mode, path], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 14px", fontWeight: 600 }}>{card}</td>
                <td style={{ padding: "10px 14px", color: GOLD, fontWeight: 600 }}>{income}</td>
                <td style={{ padding: "10px 14px" }}>{mode}</td>
                <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--text-muted,#64748b)" }}>{path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card picks */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, color: ACCENT }}>Premium Cards to Compare</h2>
      <p style={{ color: "var(--text-muted,#64748b)", fontSize: 14, marginBottom: 20 }}>These products are not ranked by a universal ROI. Compare the exact current variant and terms against your own needs.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
        {premiumCards.map((card) => (
          <div key={card.rank} style={{ border: "1px solid var(--hair)", borderRadius: 14, padding: "20px 22px", background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: ACCENT }}>{card.name}</h3>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ background: `${GOLD}15`, color: GOLD, borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>{card.fee}</span>
                <span style={{ background: "var(--raise)", color: "var(--text-muted,#64748b)", borderRadius: 20, padding: "3px 10px", fontSize: 12, border: "1px solid var(--border,var(--hair))" }}>{card.income}</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 13, color: "var(--text-muted,#475569)", marginBottom: 12 }}>
              <div><span style={{ fontWeight: 600 }}>Reward Rate:</span> {card.rewardRate}</div>
              <div><span style={{ fontWeight: 600 }}>Lounge Access:</span> {card.lounge}</div>
              <div style={{ gridColumn: "1/-1" }}><span style={{ fontWeight: 600 }}>On ₹10L spend:</span> <span style={{ color: GOLD, fontWeight: 700 }}>{card.roi10L}</span></div>
            </div>
            <div style={{ background: `${COLOR}08`, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 600, color: ACCENT }}>
              {card.standout}
            </div>
          </div>
        ))}
      </div>

      {/* Personal value comparison */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: ACCENT }}>How to compare premium-card value</h2>

      <p style={{ marginBottom: 16 }}>
        There is no reliable universal ROI table: reward categories, card variants, fee waivers and redemption choices differ. Check these factors for your own profile:
      </p>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: `${COLOR}08` }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Factor</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Check with issuer</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40`, color: GOLD }}>Check against your use</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${GOLD}40` }}>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Annual fee", "Joining and renewal fee; eligible spend waiver", "Fee you expect to pay", "Waivers depend on eligible transactions and card year"],
              ["Reward earn", "Rates, caps, excluded categories", "Your eligible transaction mix", "A headline rate may not apply to all spend"],
              ["Redemption", "Point value, portal, transfer partners and caps", "Realistic redemption you will use", "Points are not automatically cash at face value"],
              ["Travel benefits", "Visits, spend triggers, guest and lounge rules", "Trips and benefits you would otherwise buy", "Access can be conditional or space-limited"],
              ["Net value", "Current card-specific terms", "Eligible rewards + used benefits − fee", "Use your own profile; no guaranteed break-even" ]
            ].map(([spend, regalia, infinia, delta], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 14px", fontWeight: 600 }}>{spend}</td>
                <td style={{ padding: "10px 12px" }}>{regalia}</td>
                <td style={{ padding: "10px 12px", color: GOLD, fontWeight: 700 }}>{infinia}</td>
                <td style={{ padding: "10px 12px", fontWeight: 600, color: "var(--text-muted,#64748b)" }}>{delta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginBottom: 24, fontSize: 13, color: "var(--text-muted,#64748b)" }}>
        Reward values vary by eligible transaction, reward cap, redemption route and current fee-waiver terms. This guide does not claim a fixed net return or break-even spend.
      </p>

      {/* Amex Platinum question */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: ACCENT }}>The Amex Platinum Charge Card: compare current cost and benefits</h2>

      <p style={{ marginBottom: 12 }}>
        American Express currently lists an annual fee of ₹66,000 plus taxes for the Platinum Charge Card and says new card applications in India are temporarily paused. Check official availability and current terms. Benefits are primarily travel and lifestyle related; value depends on what you would actually use.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Lounge access", value: "Check included networks, visit and guest terms", good: true },
          { label: "Hotel benefits", value: "Check current participating properties and conditions", good: true },
          { label: "Renewal benefit", value: "Review spend threshold and eligible voucher terms", good: true },
          { label: "Concierge and dining", value: "Value only services you would otherwise use", good: true },
          { label: "Annual fee", value: "₹66,000 plus applicable taxes", good: false },
          { label: "Availability", value: "New applications currently paused; recheck issuer site", good: false }
        ].map(({ label, value, good }, i) => (
          <div key={i} style={{ background: good ? `${GOLD}08` : "var(--raise)", border: `1px solid ${good ? GOLD + "30" : "var(--hair)"}`, borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
              {good ? <IconShield /> : <IconCheck />}
              <span style={{ fontSize: 13, fontWeight: 600, color: good ? GOLD : "var(--text-muted,#64748b)" }}>{label}</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted,#475569)" }}>{value}</div>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 24 }}>
        Consider the card only if it is available to you and the benefits you will actually use justify the fee. Other premium cards have different rewards, costs and eligibility; no one option guarantees better net value for every cardholder.
      </p>

      {/* Optimal premium stack */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: ACCENT }}>Building the Optimal Premium Stack</h2>

      <p style={{ marginBottom: 16 }}>
        A two-card stack is a possible choice, not a universal recommendation. Check the current product terms and your own eligible spending before combining premium cards.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
        <div style={{ background: `${GOLD}08`, border: `1.5px solid ${GOLD}50`, borderRadius: 12, padding: "18px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
            <IconStar />
            <strong style={{ color: GOLD, fontSize: 15 }}>Domestic Spends</strong>
          </div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>HDFC Infinia</div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.8 }}>
            <li>5 Reward Points per ₹150 on eligible spends; exclusions apply</li>
            <li>SmartBuy multipliers and redemption terms apply</li>
            <li>Check current lounge access, guest and network rules</li>
            <li>₹12,500 + taxes; HDFC lists a renewal waiver at ₹10 lakh eligible spend in the preceding 12 months</li>
          </ul>
        </div>
        <div style={{ background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 12, padding: "18px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
            <IconConcierge />
            <strong style={{ color: "var(--text-muted,#64748b)", fontSize: 15 }}>International Spends</strong>
          </div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Axis Magnus</div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.8 }}>
            <li>EDGE Miles on intl transactions</li>
            <li>Check current lounge access, visit and guest terms</li>
            <li>EDGE Rewards transfer partners, ratios, caps and exclusions apply</li>
            <li>₹12,500 + taxes; eligible-spend waiver threshold and exclusions apply</li>
          </ul>
        </div>
      </div>

      {/* Actionable CTA */}
      <div style={{ background: ACCENT, borderRadius: 16, padding: "24px 26px", marginBottom: 44, color: "var(--raise)" }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: "var(--raise)" }}>Your Path to the Invite-Only Tier</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
          {[
            "Review the issuer's published eligibility criteria and contact the bank about any invitation or upgrade route; no account relationship guarantees an offer.",
            "Keep your account in good standing and compare fees, eligible spend requirements and product benefits before accepting an upgrade.",
            "Review your credit report for accuracy and repay on time. No score threshold guarantees a premium-card invitation or approval."
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ background: GOLD, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: "var(--hair2)" }}>{step}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/cards/hdfc-infinia" style={{ display: "inline-block", padding: "10px 18px", background: GOLD, color: "#fff", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>HDFC Infinia Full Review</Link>
          <Link href="/stack-builder" style={{ display: "inline-block", padding: "10px 18px", background: "transparent", color: "var(--raise)", border: "1px solid #4b5563", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Premium Stack Builder</Link>
          <Link href="/blog/invite-only-cards-india-guide" style={{ display: "inline-block", padding: "10px 18px", background: "transparent", color: "var(--raise)", border: "1px solid #4b5563", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>How Invites Work</Link>
        </div>
      </div>

      {/* FAQs */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
        {faq.mainEntity.map((item, i) => (
          <details key={i} style={{ border: "1px solid var(--border,var(--hair))", borderRadius: 10 }}>
            <summary style={{ padding: "14px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {item.name}
              <span style={{ color: GOLD, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
            </summary>
            <div style={{ padding: "0 18px 16px", fontSize: 14, color: "var(--text-muted,#475569)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </div>
          </details>
        ))}
      </div>

      <footer style={{ borderTop: "1px solid var(--border,var(--hair))", paddingTop: 20, fontSize: 12, color: "var(--text-muted,#94a3b8)", lineHeight: 1.6 }}>
        <p style={{ margin: "0 0 6px" }}>
          <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Premium card invites are at the sole discretion of the issuing bank. Income thresholds are indicative based on publicly available information and may change. Reward calculations assume full SmartBuy redemption and may differ based on actual redemption method.
        </p>
        <p style={{ margin: 0 }}>
          Data sourced from official HDFC, Axis, ICICI, and Amex India websites as of {UPDATED}. See also: <Link href="/best/credit-card-for-lounge-access" style={{ color: GOLD }}>Lounge Access Guide</Link> and <Link href="/best/credit-card-with-no-forex-markup" style={{ color: GOLD }}>Zero Forex Cards</Link>.
        </p>
      </footer>
    </main>
    </>
  );
}
