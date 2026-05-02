import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 1 Article 3 — RBI Credit Card Rules 2026
// URL: /blog/rbi-credit-card-rules-2026
// Category: Credit Cards · Color: Violet #7C3AED
// Author: Ash K · Reviewed: April 20, 2026
// Target: 3,500+ visible words · 4 info-SVGs · 7 FAQs
// Template archetype: Rule-by-Rule Walkthrough
// ============================================================

const COLOR = "#7C3AED";
const UPDATED = "April 20, 2026";

const SvgTimeline = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Timeline of major RBI credit card rule changes from 2022 master direction through 2025 amendments" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">RBI CREDIT CARD RULES · TIMELINE 2022 TO 2025</text>
    <line x1="40" y1="120" x2="700" y2="120" stroke="var(--border)" strokeWidth="2" />

    {[
      { x: 80, date: "Apr 2022", label: "Master Direction\non Credit Cards", color: COLOR },
      { x: 220, date: "Oct 2024", label: "Consent rule\nfor billing items", color: COLOR },
      { x: 360, date: "Oct 2024", label: "Months-to-clear\ndisclosure mandate", color: COLOR },
      { x: 500, date: "Jan 2025", label: "Closure within\n7 working days", color: COLOR },
      { x: 640, date: "Mar 2025", label: "Forex markup\nline-by-line", color: COLOR },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={p.x} cy="120" r="8" fill={p.color} />
        <line x1={p.x} y1="120" x2={p.x} y2="68" stroke={p.color} strokeWidth="1" strokeDasharray="3 3" />
        <text x={p.x} y="60" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={p.color}>{p.date}</text>
        <text x={p.x} y="148" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text)">{p.label.split('\n')[0]}</text>
        <text x={p.x} y="162" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text)">{p.label.split('\n')[1]}</text>
      </g>
    ))}
    <text x="20" y="200" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">All amendments together form the consolidated Master Direction on Credit Cards as in force April 2026</text>
  </svg>
);

const SvgGrievance = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="RBI grievance escalation flowchart from bank customer care through nodal officer to RBI Ombudsman" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">GRIEVANCE ESCALATION · TIMELINE FROM ISSUE RAISE TO RESOLUTION</text>

    <rect x="40" y="60" width="180" height="60" fill="#ede9fe" stroke={COLOR} />
    <text x="130" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>Step 1</text>
    <text x="130" y="105" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Bank customer care</text>
    <text x="130" y="138" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Raise complaint · 30-day window</text>

    <line x1="220" y1="90" x2="270" y2="90" stroke={COLOR} strokeWidth="2" markerEnd="url(#arr)" />

    <rect x="270" y="60" width="180" height="60" fill="#ede9fe" stroke={COLOR} />
    <text x="360" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>Step 2</text>
    <text x="360" y="105" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Bank nodal officer</text>
    <text x="360" y="138" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">If no resolution in 30 days</text>

    <line x1="450" y1="90" x2="500" y2="90" stroke={COLOR} strokeWidth="2" />

    <rect x="500" y="60" width="180" height="60" fill={COLOR} />
    <text x="590" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">Step 3</text>
    <text x="590" y="105" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fff">RBI Ombudsman</text>
    <text x="590" y="138" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">cms.rbi.org.in</text>

    <text x="40" y="200" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">Document trail to maintain at every step:</text>
    <text x="40" y="220" fontFamily="system-ui" fontSize="10" fill="var(--text)">· Reference number from each call to customer care · email transcripts of escalations</text>
    <text x="40" y="234" fontFamily="system-ui" fontSize="10" fill="var(--text)">· Screenshots of disputed transactions · the specific RBI rule cited (Section X.Y of Master Direction)</text>
    <text x="40" y="248" fontFamily="system-ui" fontSize="10" fill="var(--text)">· Timestamps of every interaction · outcome details requested</text>
  </svg>
);

const SvgConsentFlow = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Visual showing how the new consent rule changed credit card billing — pre-2024 auto-enrolment compared to post-2024 explicit consent requirement" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">CONSENT RULE · BEFORE AND AFTER OCT 2024</text>

    <text x="40" y="60" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#94a3b8">PRE OCT 2024 — AUTO-ENROLMENT</text>
    {[
      "Card protection insurance · ₹999/yr added silently",
      "Reward redemption fee · ₹99 per redemption",
      "Online statement fee waiver opt-out · ₹100/mo",
      "Annual fee on second-card variant · auto-billed",
    ].map((item, i) => (
      <g key={i} transform={`translate(40, ${74 + i * 18})`}>
        <text x="0" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{item}</text>
        <text x="280" y="14" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">×</text>
      </g>
    ))}

    <text x="380" y="60" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>POST OCT 2024 — EXPLICIT CONSENT</text>
    {[
      "Each charge requires written / digital opt-in",
      "Pre-checked enrolment boxes prohibited",
      "Customer can revoke consent at any time",
      "30 days notice before any new charge category",
    ].map((item, i) => (
      <g key={i} transform={`translate(380, ${74 + i * 18})`}>
        <text x="0" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{item}</text>
        <text x="290" y="14" fontFamily="system-ui" fontSize="10" fill="#16a34a" fontWeight="700">✓</text>
      </g>
    ))}

    <line x1="40" y1="180" x2="680" y2="180" stroke="var(--border)" />
    <text x="40" y="200" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">Practical action: review your last 3 statements for charges you didn't actively consent to</text>
    <text x="40" y="220" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Insurance bundles, redemption fees, statement-mode fees — these are the most common silently-added items</text>
    <text x="40" y="234" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">File chargeback within 60 days of the disputed charge — resolution mandated within 30 days</text>
    <text x="40" y="248" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Refund to come back to your statement; the disputed charge is also reversed pending bank investigation</text>
  </svg>
);

const SvgRulesGrid = () => (
  <svg viewBox="0 0 720 360" role="img" aria-label="Grid of seven major RBI credit card rules with their effective dates and customer-impact summaries" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">SEVEN MAJOR RULES · EFFECTIVE DATES · CUSTOMER IMPACT</text>
    {[
      { rule: "1. Consent for billing items", date: "Oct 2024", impact: "No auto-enrolled charges; review last 3 statements" },
      { rule: "2. Min 15-day grace period", date: "Master Dir 2022", impact: "Bill date to due date must be ≥ 15 days; verify on your card" },
      { rule: "3. APR disclosure standardised", date: "Master Dir 2022", impact: "Effective annual rate visible on every statement; compare cards" },
      { rule: "4. Months-to-clear balance", date: "Oct 2024", impact: "Statement shows years to repay if you stick with min due" },
      { rule: "5. Closure in 7 working days", date: "Jan 2025", impact: "Banks can't delay or harass on closure requests" },
      { rule: "6. Forex markup transparency", date: "Mar 2025", impact: "Markup % shown per transaction; check international spend" },
      { rule: "7. Grievance window 30 days", date: "Master Dir 2022", impact: "Bank must resolve in 30 days or escalate to RBI Ombudsman" },
    ].map((r, i) => (
      <g key={i} transform={`translate(20, ${44 + i * 42})`}>
        <rect x="0" y="0" width="680" height="36" fill={i % 2 ? "var(--bg-soft)" : "var(--bg)"} stroke="var(--border)" />
        <text x="14" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>{r.rule}</text>
        <text x="280" y="22" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{r.date}</text>
        <text x="380" y="22" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.impact}</text>
      </g>
    ))}
  </svg>
);

export default function RbiCreditCardRules2026() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "RBI Credit Card Rules 2026 — Seven Changes Every Cardholder Should Know",
    description: "Detailed walkthrough of seven major RBI credit card rule changes through April 2026, with practical use-cases for each, the grievance escalation framework, and what to check on your next statement.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-04-20",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/blog/rbi-credit-card-rules-2026" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How do I dispute a charge that was added without my consent?", acceptedAnswer: { "@type": "Answer", text: "File a chargeback dispute via the bank's portal within 60 days of the disputed transaction. Provide a written statement explaining what was charged, the date, and why you believe it was unauthorised. Most banks have an online dispute form in net-banking under 'Cards / Disputes'. RBI's 2024 directive mandates resolution within 30 days. While the dispute is pending, the bank usually reverses the disputed amount as a temporary credit. If the bank rules against you, escalate to the bank nodal officer (every bank's website lists the nodal officer's email and phone). If still unresolved 30 days later, file with RBI's CMS portal at cms.rbi.org.in. Most clear cases of auto-enrolled insurance or fee additions resolve in customer's favour at the bank-nodal stage; the Ombudsman is rarely needed." } },
      { "@type": "Question", name: "Are these rules retroactive — do they apply to charges from before October 2024?", acceptedAnswer: { "@type": "Answer", text: "The consent requirement is forward-looking; charges incurred before October 2024 cannot be disputed solely on consent grounds because the rule didn't apply then. However, if the original sign-up itself was deceptive (pre-checked enrolment without proper disclosure, or auto-enrolment in an undisclosed bundle), you may still have grounds under the broader unfair-trade-practices framework. The 60-day chargeback window applies to each individual transaction, not to the underlying contract. So a recurring auto-enrolled insurance charge can be disputed for any of the last 60 days of charges, even if the original enrolment was earlier." } },
      { "@type": "Question", name: "What does the 'months to clear balance' disclosure actually show?", acceptedAnswer: { "@type": "Answer", text: "Every credit card statement issued post October 2024 must include a calculation of how long it would take to clear the outstanding balance if you continue paying only the minimum due. On a typical ₹1 lakh balance at 3 percent monthly interest with a 5 percent minimum due, the disclosure shows roughly 9 to 10 years to clear, with cumulative interest of ₹125,000 — exceeding the original principal. The intent is to deter the minimum-due trap by making the long-term cost of revolving credit inescapable on every statement. Pay attention to it. If your balance shows years rather than months to clear, you're paying more in interest than the rewards or convenience of the card can ever repay." } },
      { "@type": "Question", name: "How does the closure-in-7-days rule work in practice?", acceptedAnswer: { "@type": "Answer", text: "When you formally request closure (via net-banking, in writing at branch, or by recorded phone call), the bank must close the card within 7 working days from request receipt. The bank must then send a no-dues certificate (NDC) by email within an additional 7 working days. If the bank delays beyond these timelines, file a complaint with the bank nodal officer immediately citing the specific RBI rule. Common bank tactics that violate this: pushing 'retention call' rounds that delay the actual closure entry, claiming pending charges that aren't actually pending, requiring branch visits when net-banking closure is functionally available. None of these survive RBI scrutiny if you escalate." } },
      { "@type": "Question", name: "What is the maximum gap between bill date and due date?", acceptedAnswer: { "@type": "Answer", text: "RBI's 2022 Master Direction mandates a minimum 15-day gap between bill generation date and payment due date. Many banks default to 18 to 21 days. A few have tightened to 15-16 days for high-utilisation accounts as a risk-management measure. If your card shows a gap under 15 days, raise it with customer care; the bank is required to extend it. Some cards offer a 'flex due date' feature that lets you pick the due date, useful if you want to align it with salary credit. Note: the 15-day gap is from statement generation, not from the date a transaction was made. So a transaction on day 1 of a billing cycle effectively gets up to 45 days of free credit before the due date — the structural advantage of credit-card spend over debit-card spend if used responsibly." } },
      { "@type": "Question", name: "Why does the forex markup transparency rule matter?", acceptedAnswer: { "@type": "Answer", text: "Issuers have been quietly raising forex markup over the past 5 years — many cards moved from 2.0% to 3.5% on international transactions without prominent disclosure. The March 2025 transparency rule mandates that the markup percentage appear on every international transaction line in the statement, separately from the underlying foreign currency conversion. This makes the leakage visible to cardholders for the first time. Practical impact: on a ₹3 lakh international holiday at 3.5% markup, the leakage is ₹10,500 per trip versus a 2% markup card at ₹6,000. The transparency rule lets you spot the markup on your statement and switch to a lower-forex card. For frequent international travellers, the IDFC FIRST Wealth at zero forex or HDFC Diners Privilege at 2.0% saves real money over a 3.5% standard card." } },
      { "@type": "Question", name: "Can banks still raise the credit limit without my consent?", acceptedAnswer: { "@type": "Answer", text: "No. RBI's 2022 Master Direction specifically prohibits unilateral limit hikes. The bank can offer a higher limit and ask you to accept; you must affirmatively accept (via SMS reply, app confirmation, or phone consent). If you find your limit raised without explicit consent, that's a violation. File a complaint with the bank nodal officer citing Section 9.4 of the Master Direction. The reason this matters: an unwanted higher limit increases your CIBIL utilisation flexibility but also raises your risk exposure if the card is ever compromised. Decline auto-hike offers unless you specifically need the additional limit." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "RBI Credit Card Rules 2026", item: "https://assurefintech.com/blog/rbi-credit-card-rules-2026" }
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1E1042, #2A1557, #1E1042)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #A78BFA22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA" }} /> Credit Card Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            7 RBI Credit Card Rules Banks Hope You Never Read
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Your bank is probably violating at least 2 of these.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>7</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Rules covered</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>2026</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Updated</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹0</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>To file complaint</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "44px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.85 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / RBI Credit Card Rules 2026
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · TIER 1 GUIDE · MASTER DIRECTION + AMENDMENTS THROUGH 2025</div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Direct answer: between April 2022 and March 2025, RBI rewrote the rules for credit card billing transparency, customer consent, grievance handling, and closure procedures. The seven changes that matter most for everyday cardholders are summarised below — each one is enforceable, each one protects you against specific bank tactics, and most cardholders don't know about most of them. The article walks through what each rule says, what it means in practice, and exactly how to use it the next time your bank does something annoying.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed against RBI Master Direction on Credit Cards</span>
        <span>·</span>
        <span>About 13 min read</span>
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Why these rules came into force</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The Indian credit card market grew from roughly 50 million cards in 2018 to over 110 million by early 2026. Card outstandings in the system crossed ₹3 lakh crore in mid-2025. With that growth came a specific set of customer-protection problems — auto-enrolled insurance bundles, opaque APR calculations, retention-team obstacles to card closure, forex-markup creep, and grievance windows that stretched into months. RBI's response came in stages.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The Master Direction on Credit Cards (April 2022) consolidated previous fragmented circulars and introduced base disclosure standards. The October 2024 amendment added the consent rule and the months-to-clear disclosure. January 2025 brought the closure timeline. March 2025 brought forex-markup transparency at the transaction-line level. As of April 2026 these are all in force; the consolidated Master Direction reflects every amendment.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The cumulative effect: cardholders now have explicit, citable rights against most bank practices that used to be standard. The hard part is knowing the rules exist and knowing how to invoke them. This article exists to close that gap.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgTimeline />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The seven rules at a glance</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Before drilling into each rule, the summary table. Bookmark this; the seven rules cover roughly 90 percent of the friction situations a cardholder is likely to encounter with their issuer.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgRulesGrid />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 1 — explicit consent for billing items</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          From October 2024 onwards, banks cannot debit your account for fees, charges, or insurance premiums without explicit consent for each item. Pre-checked enrolment boxes for "card protection insurance" or "EMI conversion auto-trigger" are no longer permitted. The bank must obtain a written or digital opt-in for each charge category, and you can revoke consent at any time.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          What this changes in practice. Pull your last three statements. Look for line items you didn't actively sign up for: card protection insurance (typically ₹999/year), redemption convenience fees, statement-mode fees for paper statements you never asked for, second-card variant fees on cards you didn't activate. Each one is potentially refundable.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The dispute path. Identify the unauthorised charge. File a written dispute via the bank's chargeback portal within 60 days of the transaction. State that you did not consent to this charge and cite the October 2024 Master Direction amendment. Most banks reverse such charges within 7 to 14 days at the chargeback stage. If the bank refuses, escalate to the nodal officer; if still unresolved, RBI Ombudsman.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgConsentFlow />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 2 — minimum 15-day grace from bill date to due date</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The Master Direction mandates at least 15 days between the date your statement is generated and the date payment is due. Banks have historically defaulted to 18 to 21 days, which is good for cardholders. A few have tightened to 15 to 16 days for high-utilisation accounts as a risk-management measure.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          If your card shows a gap under 15 days — check the next statement date in your card app — that's a violation. Raise it with customer care, citing the Master Direction. The bank is required to extend it. There's no penalty to the bank for this; it's a structural rule.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          One useful side benefit: a transaction made on day 1 of your billing cycle effectively gets up to 45 days of free credit before payment is due (30-day cycle plus 15-day grace). Compared to debit-card spend (immediate cash out), this is meaningful working capital — provided you pay the full statement on time. Time large purchases (electronics, appliances) right after a statement-generation date to maximise the float.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 3 — APR disclosure standardised on every statement</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Indian credit cards advertise monthly interest rates of 3.0% to 3.5%, which sounds modest. The annualised effective rate (APR), accounting for daily compounding of finance charges, is 42% to 50%. The Master Direction mandates that banks disclose both the monthly rate and the effective APR prominently on every statement, plus on the welcome MITC document at issuance.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Why this matters. Card-shopping comparisons become fairer at the APR level. A 3.0% monthly card and a 3.49% monthly card sound nearly identical at the monthly rate, but their APRs are 42.6% and 51.0% respectively — an 8.4 percentage point gap that compounds badly on revolving balances. When picking a card, especially one you might revolve a balance on briefly, compare APR not monthly rate.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The behavioural takeaway. Even at the lowest 36% APR cards, revolving credit is hideously expensive. Pay the full statement balance every cycle. If you cannot for cash-flow reasons, balance-transfer to a 0%-promotional card or convert to a 12-month EMI at 12 to 14% APR. Both are dramatically cheaper than letting the card revolve at 42%-plus.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          One subtle point: the APR disclosure rule covers card finance charges but not all fees. Cash-advance fees (typically 2.5% on amount withdrawn), foreign markup, late-payment fees, and over-limit charges are disclosed separately. Always check the MITC for the full fee schedule, not just the headline APR.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 4 — the months-to-clear balance disclosure</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The October 2024 amendment introduced the most cardholder-friendly disclosure in the entire Master Direction. Every statement must show, prominently, how many months it would take to clear the outstanding balance if you continue paying only the minimum due. The number is calculated assuming no further spending — just the existing balance compounding at the card's monthly rate against the minimum-due payment.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a ₹50,000 balance at 3% monthly with a 5% minimum due, the disclosure typically reads something like "117 months" — almost 10 years. Total interest paid over those 117 months: roughly ₹62,000, more than the original principal.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The intent is to deter the minimum-due trap. RBI's data showed that a meaningful share of credit-card revolvers were paying minimum due indefinitely, accumulating interest charges that exceeded the original spend within 24 to 36 months. The disclosure makes the long-term cost of revolving credit inescapable on every statement.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          What to do with this number. If your statement shows years to clear, you're in a structural debt situation that won't fix itself. The fastest way out: balance-transfer the entire amount to a 0%-period card (ICICI Bank Balance Transfer, HDFC Balance Transfer on EMI both offer 90-day promotional 0% on transferred balances). Repay within the promo window. The transfer typically saves ₹30,000 to ₹50,000 of interest on a ₹1 lakh revolving balance, plus dramatically improves your CIBIL utilisation profile.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 5 — closure within 7 working days</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Effective January 2025, when you formally request to close a credit card, the bank must complete closure within 7 working days from receipt of the request. After closure, a no-dues certificate (NDC) must be sent by email within an additional 7 working days.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The rule was introduced after RBI received persistent complaints about banks dragging closure for weeks, sometimes months, often via "retention" calls offering small fee waivers in exchange for keeping the card open. Banks can still attempt retention; what they cannot do is delay the closure once you've affirmatively requested it.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The mechanics. Submit a closure request via net-banking or in writing at the branch. Get a complaint reference number. Pay any outstanding balance if applicable. After 7 working days, if the closure hasn't been processed, file a complaint with the bank's nodal officer citing Section X of the Master Direction. After 30 days of unresolved complaint, escalate to the RBI Ombudsman.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Common bank tactics that violate this rule. Repeated retention calls that delay the actual closure entry. Claims of pending charges that aren't actually pending (always demand a written breakdown). Requirements to visit a branch when net-banking closure is functionally available. If any of these happen, push back with the rule citation; banks usually resolve immediately when they realise you know the rule.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 6 — forex markup transparency on every transaction line</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The March 2025 amendment requires banks to display the forex markup percentage on every international transaction line in the statement, separately from the underlying foreign-currency-to-INR conversion. The rule was a direct response to issuers quietly raising forex markup over the past 5 years from 2.0% to 3.5% on most cards, often without prominent disclosure to existing cardholders.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          What the disclosure looks like. A transaction of $100 at the card-network exchange rate of ₹86.40/USD now appears as: "USD 100.00 × ₹86.40 = ₹8,640 + 3.5% markup ₹302 + 18% GST on markup ₹54 = ₹8,996 charged." Pre-2025 statements showed only the final ₹8,996 figure with no breakdown. The new line-by-line view exposes the markup leakage explicitly.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Practical impact. On a ₹3 lakh international holiday paid at 3.5% markup, the leakage is ₹10,500 per trip versus a 2.0% markup card at ₹6,000 — a ₹4,500 gap that's now visible on every trip. For frequent international travellers, the IDFC FIRST Wealth at zero forex markup or HDFC Diners Privilege at 2.0% saves real money over a 3.5% standard card.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          What to do. Review your last international-spend statements. If your card is at 3.5% markup, consider switching for travel-heavy spend. Niyo Global Visa, IDFC FIRST Wealth, RBL World Safari all offer near-zero forex markup. The TCS implications under LRS apply equally to all card spend, so the choice is purely about markup efficiency.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Rule 7 — single grievance window of 30 days</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The Master Direction sets a 30-day window from complaint registration to resolution. If unresolved at the bank level (customer care plus nodal officer), the cardholder can escalate to the RBI Ombudsman via cms.rbi.org.in. Resolution at the Ombudsman stage typically takes 60 to 90 days but the ruling is binding on the bank.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three things make this rule effective. First, the 30-day clock starts from the formal complaint submission, not from informal customer-care calls. So always demand a complaint reference number and ensure it's in writing or email. Second, escalation to the nodal officer is a legitimate step; banks cannot insist that you only deal with customer care. Third, the RBI Ombudsman ruling carries weight; banks usually settle voluntarily once a case is registered with the Ombudsman.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The escalation flowchart below shows the standard path with timelines. Document everything at every stage — call recordings (legal where you've informed the bank, which is usually noted at start of call), email transcripts, screenshots of disputed transactions, copies of MITC sections. The documentation matters more at Ombudsman stage than the underlying merit; banks regularly lose Ombudsman cases on procedural grounds when they cannot produce records.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgGrievance />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Bonus protections worth knowing about</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Beyond the seven big rules, three smaller protections tucked into the Master Direction help in specific situations.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Zero-liability on unauthorised transactions.</strong> If you report an unauthorised charge to the bank within 3 working days of the transaction, your liability is zero. Reporting between 4 and 7 working days, your liability is capped at ₹10,000 or the transaction amount, whichever is lower. Beyond 7 working days, you may be fully liable. The clock starts from the transaction date, not from when you noticed it. This is the most important reason to check your statements regularly — the protection is genuinely strong but only if you report fast.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Limit hike requires affirmative consent.</strong> The bank cannot raise your credit limit without your active acceptance. Banks frequently SMS offers like "Your limit can be raised to ₹X — reply YES to accept." Without your YES (or app-based confirmation), the limit stays at the previous level. Some users find unwanted limit hikes happening; that's a violation. File a complaint citing Section 9.4 of the Master Direction.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>OTP-confirmed standing instructions.</strong> Recurring auto-debits set up on credit cards (Netflix, Spotify, gym subscriptions, insurance premiums) now require OTP confirmation when set up and again at periodic re-authentication windows. The rule was originally for utility bills above ₹15,000 but has been extended to most subscription categories. Practical effect: if a service tries to auto-charge you above the OTP-authorised amount or after the authorisation period expires, the charge fails and the service notifies you. Useful for catching subscription creep.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What to do this week — a practical checklist</h2>
        <ol style={{ fontSize: 16, paddingLeft: 24, margin: "0 0 18px" }}>
          <li style={{ marginBottom: 10 }}>Pull your last 3 credit card statements. Look for any charges you didn't actively consent to — insurance bundles, redemption fees, statement-mode fees. Each is potentially refundable.</li>
          <li style={{ marginBottom: 10 }}>Check the gap between bill generation date and due date. Should be at least 15 days. If less, raise with customer care.</li>
          <li style={{ marginBottom: 10 }}>Look at the months-to-clear-balance disclosure on your latest statement. If it shows years, plan a balance transfer or a 12-month EMI conversion to escape the revolving rate.</li>
          <li style={{ marginBottom: 10 }}>Verify your card's APR. Compare against alternative cards if you've ever revolved a balance.</li>
          <li style={{ marginBottom: 10 }}>Check forex markup if you've made international transactions. Switch to a low-forex card for future travel if markup is 3% or higher.</li>
          <li style={{ marginBottom: 10 }}>Review any cards you don't actively use. If a card has annual fee and no waiver and you're not using its benefits, close it. The closure rule guarantees 7 working days.</li>
          <li>Bookmark cms.rbi.org.in. Hopefully you never need it. But if a bank issue drags beyond 30 days, that's the escalation path.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How major banks have implemented these rules</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The Master Direction is binding on all card issuers, but implementation quality varies materially across banks. Based on customer-complaint patterns and visible statement design through 2025, here's the rough scorecard.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>HDFC Bank.</strong> Strong on disclosure design — months-to-clear and APR are prominently displayed in their NetBanking and mobile-app statement views. Customer care is generally responsive on consent-rule disputes. Closure compliance is reasonable but their retention team is persistent; expect 2 to 3 retention calls before actual closure entry. Forex markup at 3.5% on most cards (Diners Privilege at 2.0% is the exception); the markup line item appears clearly post-March-2025.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>SBI Card.</strong> The largest issuer in the country. Consent-rule disputes resolve more slowly than at private banks (typical 3 to 4 weeks versus 1 to 2 at HDFC/ICICI). Statement design includes the months-to-clear disclosure but the placement is less prominent. Forex markup at 3.5% standard, 1.99% on select premium cards. Closure timeline compliance is mostly aligned with the 7-day rule; physical signature requirement at branch is sometimes invoked unnecessarily.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>ICICI Bank.</strong> Strong digital-first implementation. Closure can be initiated entirely through iMobile without branch visit. Consent-rule disputes resolve quickly via the in-app dispute flow. APR and forex markup disclosures are clear. ICICI's HDFC-equivalent retention pressure is lighter; they don't typically chase customers as aggressively.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Axis Bank.</strong> Disclosure quality is good. The Magnus and Burgundy programmes have specific premium-card retention practices that can take longer for closure (sometimes 10 to 14 working days versus the mandated 7); escalate to nodal officer if closure drags beyond 7 working days.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>American Express.</strong> Charge-card mechanics are different (no preset spend limit, full payment due monthly), but the underlying RBI rules apply. Amex's grievance handling is among the best in the industry; customer-care staff have escalation authority that's typically lacking at PSU banks. Consent-rule disputes resolve fast.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Smaller issuers (RBL, IDFC FIRST, YES, Federal, Standard Chartered).</strong> Implementation quality varies. RBL has had operational issues post the 2024 management transition; expect slower grievance resolution. IDFC FIRST is generally responsive. YES Bank has tightened compliance significantly post-2020. Standard Chartered's UK-influenced consumer-protection culture means stronger compliance with disclosure rules; closure timelines are usually on the dot.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The lesson: if you have a choice between issuers, all else equal, pick one with strong rule-implementation history. The 30-day grievance resolution rule is a floor; some banks consistently resolve in 7 to 10 days while others stretch to the full 30 and beyond.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>CIBIL implications of using these rules</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A common cardholder concern: will exercising these RBI-granted rights damage my CIBIL score? Specifically, will closing a card, disputing a charge, or filing a grievance hurt my creditworthiness? Mostly no, but the nuances matter.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Card closure.</strong> Closing your oldest credit card can drop your CIBIL score by 30 to 50 points temporarily, because credit-history-age is a factor in the score calculation. The drop typically recovers within 6 to 9 months if your remaining accounts stay clean. The bigger concern is utilisation — closing a high-limit card pushes utilisation up on your remaining cards. Before closure, ensure your remaining limit can absorb your spend at under 30 percent utilisation. Closing dormant secondary cards is usually score-neutral after a 30-day adjustment.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Dispute or chargeback.</strong> Filing a chargeback for an unauthorised charge has zero CIBIL impact. The disputed amount may temporarily flag as "in dispute" on bureau reports, but resolution removes the flag. Banks cannot retaliate against bureau reporting — that's a separate violation if it occurs.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Grievance or Ombudsman complaint.</strong> Zero CIBIL impact. The Ombudsman process is between you and the bank; it's not reported to credit bureaus. Even if a complaint goes against the bank, your credit record is unaffected.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Balance transfer.</strong> The hard pull at the new bank's application stage drops CIBIL by 5 to 10 points temporarily. The closure of the old loan plus opening of new loan with same balance is reported as a refinance, not as new debt. Net effect typically rebuilds within 3 months. Reducing the high-rate balance also improves your utilisation ratio if structured well.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The takeaway: don't avoid using your RBI-granted rights for fear of CIBIL impact. The actual damage scenarios are limited and recoverable. The damage from leaving an unfair charge unchallenged or staying with a bad card cycles into much worse CIBIL outcomes via prolonged high utilisation and accrued interest.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What RBI is likely to regulate next</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three areas are visibly in RBI's pipeline based on consultative papers and MPC commentary through April 2026.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Buy Now Pay Later (BNPL) regulation.</strong> The BNPL space — Simpl, LazyPay, Postpe, and bank-issued variants — has grown rapidly with limited consumer-protection oversight. RBI is expected to extend the credit-card framework to BNPL products, including disclosure of effective APR, mandatory grace periods, and consent-based opt-in. Expected effective date: late 2026 or early 2027.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Reward-points expiry transparency.</strong> Most cards have 2 to 3 year expiry on individual reward points; cards routinely "expire" points without proactive customer notification, leading to billions of rupees of unredeemed rewards being written off annually. RBI's consultative paper from late 2025 proposes mandatory 60-day-prior expiry notification and a minimum 3-year expiry window. Industry resistance is significant; expected effective date 2027.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>UPI-on-credit-card pricing.</strong> The current MDR framework caps merchant discount rate on credit-on-UPI at 1.1% from January 2024. RBI is reportedly considering tighter caps for high-volume essential-spend categories (utilities, fuel, education) to reduce merchant pushback. The customer-side impact would be more merchants accepting credit-on-UPI for previously-cash-only categories.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The cardholder takeaway: the regulatory direction continues to favour transparency and customer rights. Cards-as-instruments are increasingly treated by RBI as utility-like services with rights and disclosures, not as discretionary financial products. Expect the trend to continue.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Real dispute cases — patterns that keep recurring</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three patterns dominate the dispute traffic across Indian credit-card grievance forums and CMS portal data. Each has a clean resolution path under the rules above.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Case 1 — Auto-enrolled card protection insurance.</strong> A typical case: cardholder sees a ₹999 charge labelled "card protection plan" on the December statement. They never signed up. Bank claims it was offered during a customer-care call and the customer "agreed verbally." Resolution: file chargeback citing the October 2024 consent rule. Demand the bank produce written or recorded consent. If they cannot produce it (most cannot, especially for older signups), the charge is reversed plus any interest accrued on the disputed amount. Typical resolution time: 14 to 21 days at the chargeback stage.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Case 2 — Closure delays after retention pressure.</strong> Cardholder requests closure on a card with annual fee approaching. Bank's retention team calls 3 to 4 times offering fee waiver, milestone benefits, and rate reductions. Closure entry happens 14 days after request. Resolution: file complaint with bank nodal officer citing the 7-working-day rule from January 2025. Demand the closure date be backdated to original request date and any fees billed in the interim be reversed. Typical outcome: closure backdated, fees reversed, written apology from the bank.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Case 3 — Forex markup creep without notification.</strong> Cardholder books an international trip and notices the ₹3,500 forex markup line on the post-March-2025 statement. Comparing to a previous year's similar trip, the markup looks higher than expected. Bank's MITC was updated quietly to raise markup from 2.0% to 3.5% three months earlier. Resolution: bank is required to give 30 days' notice for any new charge category or rate change. If notification was inadequate, dispute the differential charge. Outcome varies; banks often refund the differential as a goodwill gesture even when not strictly required, to avoid Ombudsman escalation.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The common thread across these cases: the rules work when invoked specifically. Vague complaints get vague responses; specific rule citations get specific resolutions.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 18px" }}>Frequently asked questions</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 16, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 12, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <section style={{ marginBottom: 36, padding: "20px 22px", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-soft)" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>RELATED ON ASSURE FINTECH</h3>
        <ul style={{ fontSize: 15, paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><Link href="/learn/credit-cards/apr-vs-interest" style={{ color: COLOR }}>APR vs interest rate</Link>. The math your statement does not explicitly show.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/credit-cards/minimum-due-trap" style={{ color: COLOR }}>The minimum-due trap</Link>. How 5% of your statement turns into 50% of next year.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/credit-cards/forex-markup" style={{ color: COLOR }}>Forex markup explained</Link>. The silent leakage on every international transaction.</li>
          <li style={{ marginBottom: 8 }}><Link href="/best/balance-transfer-credit-card" style={{ color: COLOR }}>Best balance transfer cards</Link>. Escape the 42% revolving rate.</li>
          <li><Link href="/learn/credit-cards" style={{ color: COLOR }}>Credit cards knowledge hub</Link>. All our card guides in one place.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 36, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>RBI Master Direction on Credit Cards (April 2022) and subsequent amendments through March 2025</li>
          <li style={{ marginBottom: 6 }}>RBI Press Releases October 2024 — consent rule and months-to-clear disclosure</li>
          <li style={{ marginBottom: 6 }}>RBI Notification January 2025 — closure timeline mandate</li>
          <li style={{ marginBottom: 6 }}>RBI Notification March 2025 — forex markup transparency</li>
          <li style={{ marginBottom: 6 }}>RBI CMS Portal (cms.rbi.org.in) — Ombudsman complaint procedures</li>
          <li>RBI Annual Reports 2023-24 and 2024-25 — credit card market statistics</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> The rules described in this article reflect the consolidated RBI Master Direction on Credit Cards as in force on {UPDATED}. RBI amendments are issued periodically; verify the latest version of any cited rule via the RBI website (rbi.org.in) before relying on a specific provision in a dispute. Bank-side implementation of these rules occasionally lags the regulatory effective date by 1 to 3 months; if a rule appears not to be in force at your specific bank, raise it with the nodal officer citing the RBI notification. This article is informational and does not constitute legal advice. For complex disputes especially involving large sums or multi-bank issues, consult a consumer-rights advocate or chartered accountant.
        </p>
      </footer>
    </main>
    </>
  );
}
