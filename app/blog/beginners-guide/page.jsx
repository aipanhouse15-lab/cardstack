import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Your First Credit Card in India: Everything You Actually Need to Know (2026)",
  description: "A practical first-credit-card guide: billing dates, full-balance payments, fees, issuer eligibility and how to review your credit report—without approval or score promises.",
  alternates: { canonical: "/blog/beginners-guide" },
  openGraph: {
    title: "Your First Credit Card in India: Everything You Actually Need to Know (2026)",
    description: "A practical first-credit-card guide: billing dates, full-balance payments, fees, issuer eligibility and how to review your credit report—without approval or score promises.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/first-credit-card-guide-india
// Template: complete beginner onboarding guide
// Color: #0891b2 | Updated: September 28, 2026

const COLOR = "#0891b2";
const UPDATED = "September 28, 2026";

const SvgCreditCardLifecycle = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Timeline showing how a credit card billing cycle works from purchase to due date" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">How One Month of Credit Card Billing Works</text>
    {/* Timeline line */}
    <line x1="60" y1="100" x2="660" y2="100" stroke="var(--border)" strokeWidth="3" />
    {[
      { x: 60, label: "Statement\nDate", sub: "Cycle", color: COLOR, note: "Issuer sets the cycle" },
      { x: 220, label: "You Buy\nSomething", sub: "Purchase", color: "#f59e0b", note: "Transaction posts" },
      { x: 380, label: "Next\nStatement", sub: "Statement", color: COLOR, note: "Eligible transactions billed" },
      { x: 540, label: "Due Date", sub: "Due", color: "#16a34a", note: "Pay the full amount due" },
      { x: 660, label: "If Balance\nUnpaid", sub: "Terms", color: "#ef4444", note: "Interest/fees per issuer terms" },
    ].map(({ x, label, sub, color, note }) => (
      <g key={x}>
        <circle cx={x} cy="100" r="14" fill={color} />
        <text x={x} y="75" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{label.split("\n")[0]}</text>
        <text x={x} y="87" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{label.split("\n")[1]}</text>
        <text x={x} y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{sub.split(" ")[0]}</text>
        <text x={x} y="128" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{note}</text>
      </g>
    ))}
    <rect x="40" y="155" width="640" height="28" rx="6" fill={COLOR} opacity="0.25" />
    <text x="360" y="174" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>The interest-free period varies by purchase date, issuer cycle and payment history.</text>
  </svg>
);

const SvgInterestVsInvestment = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Illustrative comparison of hypothetical credit card interest and fixed-deposit returns over 12 months; actual rates vary" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">₹10,000 for 12 Months: Credit Card Debt vs Fixed Deposit</text>
    {/* Credit card */}
    <rect x="50" y="50" width="270" height="180" rx="10" fill="var(--raise)" stroke="#ef4444" strokeWidth="2" />
    <rect x="50" y="50" width="270" height="42" rx="10" fill="var(--raise)" />
    <rect x="50" y="76" width="270" height="16" fill="var(--raise)" />
    <text x="185" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">₹10,000 Unpaid Balance</text>
    <text x="185" y="115" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Example rate: 3.5%/month</text>
    <text x="185" y="135" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Illustrative; issuer rates vary</text>
    <text x="185" y="165" textAnchor="middle" fontSize="28" fontWeight="800" fill="#ef4444">-₹5,100</text>
    <text x="185" y="188" textAnchor="middle" fontSize="12" fill="var(--text-muted)">interest paid in 12 months</text>
    <text x="185" y="210" textAnchor="middle" fontSize="11" fill="#ef4444" fontWeight="700">You still owe ₹10,000 + this</text>
    {/* vs */}
    <text x="360" y="148" textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--text-muted)">vs</text>
    {/* FD */}
    <rect x="400" y="50" width="270" height="180" rx="10" fill="var(--raise)" stroke="#16a34a" strokeWidth="2" />
    <rect x="400" y="50" width="270" height="42" rx="10" fill="#16a34a" />
    <rect x="400" y="76" width="270" height="16" fill="#16a34a" />
    <text x="535" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">₹10,000 in Fixed Deposit</text>
    <text x="535" y="115" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Hypothetical FD rate: 7%/year</text>
    <text x="535" y="135" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Before tax; actual rates vary</text>
    <text x="535" y="165" textAnchor="middle" fontSize="28" fontWeight="800" fill="#16a34a">+₹700</text>
    <text x="535" y="188" textAnchor="middle" fontSize="12" fill="var(--text-muted)">simple illustrative interest in 12 months</text>
    <text x="535" y="210" textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="700">Actual return depends on product and tax</text>
  </svg>
);

const SvgFirstCardByIncome = () => (
  <svg viewBox="0 0 720 416" role="img" aria-label="Comparison checklist for choosing a first credit card; issuer approval is not guaranteed" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="280" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Choose a card by eligibility, costs and how you use it</text>
    <rect x="20" y="40" width="680" height="34" fill={COLOR} rx="4" />
    <text x="120" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Applicant</text>
    <text x="280" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">What to compare</text>
    <text x="460" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Check</text>
    <text x="630" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Fees</text>
    {[
      ["Regular income", "Compare issuer offers or criteria", "Eligibility varies by issuer and applicant", "Varies"],
      ["Student / no income proof", "Ask about secured or add-on cards", "Check deposit, lien and cardholder terms", "Varies"],
      ["New to credit", "Review fees or eligibility first", "No approval is guaranteed", "Varies"],
      ["Higher spending", "Compare net rewards with fees", "Check caps, exclusions and redemption", "Varies"],
    ].map(([income, card, why, fee], i) => (
      <g key={i}>
        <rect x="20" y={76 + i * 48} width="680" height="48" fill={i % 2 === 0 ? "var(--raise2)" : "var(--raise)"} />
        <text x="120" y={96 + i * 48} textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>{income}</text>
        <text x="280" y={92 + i * 48} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">{card.split(" or ")[0]}</text>
        <text x="280" y={108 + i * 48} textAnchor="middle" fontSize="10" fill="var(--text-muted)">or {card.split(" or ")[1]}</text>
        <text x="460" y={100 + i * 48} textAnchor="middle" fontSize="10" fill="var(--text-muted)">{why.substring(0, 28)}</text>
        <text x="630" y={100 + i * 48} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">{fee}</text>
      </g>
    ))}
  </svg>
);

const SvgGoldenRules = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Four golden rules for responsible credit card use as a beginner in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">The Four Golden Rules of Credit Cards (Non-Negotiable)</text>
    {[
      { x: 30, num: "1", rule: "Pay the full amount", detail: "Always pay the full statement balance, not just the minimum. The minimum due is a trap." },
      { x: 210, num: "2", rule: "Pay by due date", detail: "Charges depend on issuer terms. Reminders help; still review each statement." },
      { x: 390, num: "3", rule: "Keep balances manageable", detail: "High utilisation may matter, but no single threshold guarantees a score." },
      { x: 570, num: "4", rule: "Never use for cash withdrawal", detail: "ATM cash from credit card = 2.5% fee + interest from day one. Use a debit card instead." },
    ].map(({ x, num, rule, detail }) => (
      <g key={x}>
        <rect x={x} y="44" width="160" height="148" rx="8" fill="var(--raise)" stroke={COLOR} strokeWidth="1.5" />
        <circle cx={x + 80} cy="72" r="20" fill={COLOR} />
        <text x={x + 80} y="78" textAnchor="middle" fontSize="18" fontWeight="800" fill="white">{num}</text>
        <text x={x + 80} y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">{rule}</text>
        <text x={x + 80} y="132" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{detail.substring(0, 30)}</text>
        <text x={x + 80} y="145" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{detail.substring(30, 62)}</text>
        <text x={x + 80} y="158" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{detail.substring(62, 90)}</text>
        <text x={x + 80} y="171" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{detail.substring(90)}</text>
      </g>
    ))}
  </svg>
);

const SvgCibilImpact = () => (
  <svg viewBox="0 0 720 192" role="img" aria-label="Responsible card use can support credit history, but no CIBIL score or timeline is guaranteed" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Build a responsible credit record, not a promised score</text>
    {["Pay on time", "Keep balances manageable", "Apply thoughtfully", "Check your report"].map((label, i) => (
      <g key={label}>
        <circle cx={100 + i * 173} cy="92" r="18" fill={COLOR} />
        <text x={100 + i * 173} y="97" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">{i + 1}</text>
        <text x={100 + i * 173} y="128" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{label}</text>
      </g>
    ))}
    <text x="360" y="160" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Credit bureau outcomes and reporting times vary; no score increase is guaranteed.</text>
  </svg>
);

const SvgMissedPaymentCost = () => (
  <svg viewBox="0 0 720 264" role="img" aria-label="Table showing cost of missing or delaying credit card payment in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">What Happens When You Miss a Credit Card Payment</text>
    <rect x="20" y="38" width="680" height="30" fill="var(--raise2)" rx="4" />
    <text x="160" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">What happens</text>
    <text x="380" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">The actual cost</text>
    <text x="590" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Timing</text>
    {[
      ["Late payment charge", "Check the card's current fee schedule", "Issuer terms"],
      ["Interest", "Rate and calculation vary by card and balance", "Issuer terms"],
      ["Interest-free period", "May be affected when a balance is unpaid", "Check MITC"],
      ["Credit report", "Payment information may be reported", "Reporting varies"],
    ].map(([what, cost, timing], i) => (
      <g key={i}>
        <rect x="20" y={70 + i * 26} width="680" height="26" fill={i % 2 === 0 ? "var(--raise2)" : "var(--raise)"} />
        <text x="160" y={88 + i * 26} textAnchor="middle" fontSize="11" fill="var(--text)">{what}</text>
        <text x="380" y={88 + i * 26} textAnchor="middle" fontSize="11" fontWeight="700" fill="#ef4444">{cost}</text>
        <text x="590" y={88 + i * 26} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{timing}</text>
      </g>
    ))}
  </svg>
);

export default function BlogBeginnersGuide() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the free credit period on a credit card?",
        acceptedAnswer: { "@type": "Answer", text: "The interest-free period depends on the issuer's billing cycle, the purchase date and your payment history. The maximum advertised period does not apply to every transaction. Check your card's MITC and statement, and pay the full amount due by the due date to avoid purchase interest where the interest-free benefit applies." }
      },
      {
        "@type": "Question",
        name: "Should I use a credit card if I do not need to borrow money?",
        acceptedAnswer: { "@type": "Answer", text: "A card may be useful if you can manage it safely and its costs and features suit you. Rewards are subject to eligibility, exclusions and caps; credit history or purchase-dispute outcomes are not guaranteed. If a card could encourage spending or revolving debt, it may not be right for you." }
      },
      {
        "@type": "Question",
        name: "What credit limit should a beginner expect on their first card?",
        acceptedAnswer: { "@type": "Answer", text: "There is no standard first-card limit. The issuer decides based on its product and assessment. Limits do not automatically increase after a fixed period. Use only credit you can comfortably repay and check the issuer's terms." }
      },
      {
        "@type": "Question",
        name: "What does credit utilization ratio mean and why does it matter?",
        acceptedAnswer: { "@type": "Answer", text: "Utilisation compares reported revolving balances with available credit. CIBIL identifies high utilisation as a factor that may negatively affect a score, but does not publish one threshold that guarantees a particular score or approval. Keep balances manageable and avoid spending beyond your repayment capacity." }
      },
      {
        "@type": "Question",
        name: "What is the minimum amount due trap on credit cards?",
        acceptedAnswer: { "@type": "Answer", text: "The minimum due and treatment of unpaid balances depend on the issuer's terms. Paying only the minimum does not clear the full bill and can leave an interest-bearing balance; new purchases may also lose their interest-free period. Check your statement and MITC, and pay the full amount due when possible." }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a good CIBIL score with a credit card?",
        acceptedAnswer: { "@type": "Answer", text: "There is no guaranteed score or timeline. A bureau file depends on lender reporting and the full credit profile, while lenders apply their own criteria. On-time repayment and manageable balances are sensible habits, but they do not guarantee a particular score or loan approval." }
      },
      {
        "@type": "Question",
        name: "What happens to my CIBIL score if I miss one payment?",
        acceptedAnswer: { "@type": "Answer", text: "A missed payment may lead to issuer charges, interest and negative repayment information. Reporting and score effects depend on the account, lender reporting and your profile; there is no reliable fixed point deduction or universal retention period. Contact the issuer promptly and check your report for accuracy." }
      },
      {
        "@type": "Question",
        name: "Is it okay to have multiple credit cards as a beginner?",
        acceptedAnswer: { "@type": "Answer", text: "Start with a product you can manage and apply for additional credit only when it meets a genuine need. Applications may create lender enquiries, but their effect varies and there is no required waiting period. Compare fees, eligibility and your own spending before applying." }
      },
      {
        "@type": "Question",
        name: "What is the interest rate on credit cards in India?",
        acceptedAnswer: { "@type": "Answer", text: "Interest rates and calculation methods vary by card. Review the card's current MITC and fee schedule for the monthly rate, effective annual rate, taxes and how unpaid balances are handled. Compare the written cost with other borrowing options before using revolving credit." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Your First Credit Card in India: The Complete Beginner's Guide (2026)",
    author: { "@type": "Person", name: "Ash" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-28",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "First Credit Card Guide India", item: "https://www.assurefintech.com/blog/beginners-guide" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #011217, #022E38, #011217)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #0891b222, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Beginners
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your First Credit Card in India: Everything You Actually Need to Know (2026)
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            A credit card is one of the most useful financial tools in India when used correctly. It is also the most expensive debt you can carry. This guide covers both sides, so you start on the right foot.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash · 12 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / First Credit Card Guide India
      </nav>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What a credit card actually is</h2>
        <p>A credit card is a revolving credit facility from a bank. You spend on the card and repay the issuer under the card's terms. If you pay the full statement balance by the due date, the interest-free benefit may apply to eligible purchases; cash advances, fees and other transactions can be treated differently. When interest applies, the rate and calculation are specific to the card and are shown in its current Most Important Terms and Conditions (MITC).</p>
        <p>A card is safest when used for planned spending you can repay in full. The interest-free period varies with the billing cycle and purchase date, and rewards are subject to eligible categories, exclusions, caps and redemption rules. A card does not guarantee savings or a better credit outcome.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How the billing cycle works</h2>
        <p>Your issuer sets a statement date, which closes a billing cycle, and a payment due date for that statement. The number of days between them and the interest-free treatment are governed by the issuer's terms. The maximum period sometimes advertised is not available on every purchase or in every account situation.</p>
        <p>Check your statement and MITC to understand which transactions are included and when payment is due. Paying the full amount due on time is the key habit; if a previous balance is unpaid, interest-free treatment on new purchases may be affected under the card terms.</p>
      </section>
      <SvgCreditCardLifecycle />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why you should get a credit card (even if you do not need credit)</h2>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: COLOR }}>CIBIL score building</h3>
        <p>A credit report can be one input to a lender's assessment, but lenders set their own eligibility and underwriting criteria. A file marked NA/NH can mean there is too little or no recent credit history to generate a score; it is not itself a bad score, though an individual lender may have policies for applicants without a score. Responsible repayment can contribute to a credit history, but no card use promises a particular score or approval.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: COLOR }}>Rewards on spending you already do</h3>
        <p>Some cards reward eligible spending, but the effective value depends on the card, merchant, category, caps, exclusions, redemption rules and fees. As arithmetic only, ₹15,000 of qualifying monthly spend at a hypothetical 2% return would be ₹3,600 over a year before fees; actual card returns can be lower or zero for excluded transactions.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: COLOR }}>Purchase protection</h3>
        <p>For a disputed card transaction, contact the issuer promptly and follow its dispute process; any chargeback or resolution depends on the facts, scheme rules and issuer terms. UPI and bank-transfer complaints follow different processes. No payment method guarantees recovery, so keep receipts and report unauthorised or unresolved transactions quickly.</p>
      </section>
      <SvgGoldenRules />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The one rule that overrides everything else</h2>
        <p>Where the card's interest-free benefit applies, paying the full statement balance by the due date helps avoid purchase interest. Paying only the minimum leaves an unpaid balance and may lead to interest and fees under the MITC. Reward eligibility is separate: excluded transactions, caps and redemption terms still apply.</p>
        <p>Set up an auto-debit for the full statement amount on the due date. Check that your savings account will have enough funds two days before the due date. This removes human error from the equation entirely.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The real cost of carrying a balance</h2>
        <p>The graphic below is a mathematical illustration, not a current rate comparison: it assumes ₹10,000 remains unpaid for 12 months and a hypothetical 3.5% monthly rate is applied to a growing balance, with no payments or other charges. That produces about ₹5,100 in illustrative interest before fees and taxes. Separately, ₹10,000 earning a hypothetical simple 7% gross annual return produces ₹700 before tax. Real card calculations, deposit rates, fees and tax treatment differ by product and customer. Check current written terms before comparing costs.</p>
        <p>Revolving card debt can be costly. Compare the card's stated monthly and effective annual rates, fees and taxes with any alternative borrowing, and contact the issuer early if repayment becomes difficult. Avoid borrowing to chase rewards.</p>
      </section>
      <SvgInterestVsInvestment />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What happens when you miss a payment</h2>
        <p>A late or partial payment may result in fees, interest and changes to interest-free treatment, depending on the account, transaction and issuer terms. The applicable charges and calculation should be stated in your card's current MITC and statement. If you cannot pay on time, contact the issuer promptly and ask about the available options rather than relying on a generic estimate.</p>
        <p>Repayment information may be shared with credit bureaus under applicable requirements. The reporting, score effect and retention depend on the information and credit file; there is no reliable universal point deduction or timeline. Check your report and raise an accuracy dispute with the bureau and lender when needed.</p>
      </section>
      <SvgMissedPaymentCost />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How to choose your first card</h2>
        <p>Compare cards by eligibility criteria, annual and joining fees, spend patterns, reward caps and exclusions, repayment terms, and whether you can manage the account safely. Issuers make individual approval decisions; no checklist or income level guarantees approval.</p>
        <p>If you are new to credit, ask the issuer what options and documentation it accepts, including whether a secured or add-on product is available and what obligations come with it. Reassess a card when your needs change, but do not assume a limit increase or upgrade after a fixed period.</p>
      </section>
      <SvgFirstCardByIncome />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Building a credit history takes consistency</h2>
        <p>There is no dependable score timetable or score that qualifies everyone for a product. Bureau files depend on reported account data and scoring models; lenders then apply their own criteria. CIBIL identifies payment history, credit utilisation, credit mix and enquiries among the factors relevant to its score. Keep accounts accurate and affordable, pay on time and apply thoughtfully.</p>
        <p>Before closing a card, review its fees, benefits, outstanding balance and effect on your available credit. There is no universal rule that you must keep every first card open; make the decision based on its cost and your circumstances.</p>
      </section>
      <SvgCibilImpact />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The credit utilization ratio explained simply</h2>
        <p>Utilisation compares reported revolving balances with available credit. CIBIL identifies high utilisation as a score factor, but reporting dates and lender decisions vary, and no single percentage guarantees a score or approval. For example, ₹70,000 against a ₹1,00,000 limit is 70% utilisation if that balance is what is reported.</p>
        <p>Keep borrowing within what you can repay. If your limit no longer fits your needs, ask the issuer about its process and any consequences; an increase is not guaranteed and can affect your overall credit profile.</p>
      </section>
      <section style={{ marginBottom: 24, padding: "20px 24px", background: "#ecfeff", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 8px 8px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px" }}>Your first 3 months: what to do</h2>
        <p style={{ margin: "0 0 8px" }}>Before applying: compare issuer criteria, total fees and repayment terms. Borrow only for planned purchases you can afford to repay.</p>
        <p style={{ margin: "0 0 8px" }}>Each billing cycle: read the statement, check transactions and due date, and arrange payment you can comfortably fund. Auto-debit can help, but confirm the amount and linked account.</p>
        <p style={{ margin: "0 0 8px" }}>Periodically: review your credit report through the bureau's official channel, check that account data is accurate, and dispute errors with the lender and bureau.</p>
        <p style={{ margin: 0 }}>When your needs change, compare options again. <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe</Link> can help explore reward fit; verify eligibility, costs and terms with the issuer.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        Related:{" "}
        <Link href="/blog/cibil-score-101-india" style={{ color: COLOR }}>CIBIL score 101 for Indians</Link>{" "}
        ·{" "}
        <Link href="/blog/credit-utilization-ratio-guide" style={{ color: COLOR }}>Credit utilization ratio guide</Link>{" "}
        ·{" "}
        <Link href="/blog/7-credit-card-mistakes-india" style={{ color: COLOR }}>7 credit card mistakes Indians make</Link>{" "}
        ·{" "}
        <Link href="/learn/savings" style={{ color: COLOR }}>Learn: Savings basics</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent financial comparison site. This guide is educational: card terms, eligibility, rates and bureau outcomes vary by product and applicant. Reviewed September 28, 2026. For score factors and NA/NH files, see <a href="https://www.cibil.com/blog/all-you-need-to-know-about-cibil-score" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>CIBIL's score guide</a> and <a href="https://www.cibil.com/contact-us-faq" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>CIBIL's official FAQs</a>; for disputes, see <a href="https://www.cibil.com/faq/loan-rejections-disputes" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>CIBIL's dispute FAQ</a>. Review your issuer's current MITC and fee schedule before applying. Assure Fintech receives no payment from card issuers for editorial coverage.
      </footer>
    </main>
    </>
  );
}
