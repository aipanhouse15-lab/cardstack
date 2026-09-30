import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "How to Read Your Credit Card Statement: A Plain-English Walkthrough",
  description: "Understand the key parts of an Indian credit-card statement: billed balance, due date, minimum due, transactions, EMI and issuer-specific rewards.",
  alternates: { canonical: "/blog/read-credit-card-statement" },
  openGraph: {
    title: "How to Read Your Credit Card Statement: A Plain-English Walkthrough",
    description: "How to Read Your Credit Card Statement: A Plain-English Walkthrough",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/read-credit-card-statement
// Template: Step-by-step how-to walkthrough with annotated sections
// Color: #16a34a | Updated: September 26, 2026

const COLOR = "#16a34a";
const UPDATED = "September 26, 2026";

const SvgStatementAnatomy = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Annotated credit card statement showing key sections and their meaning" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="300" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Your Credit Card Statement: What Each Section Actually Means</text>
    <rect x="20" y="38" width="680" height="52" rx="6" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" />
    <text x="36" y="58" fontSize="12" fontWeight="700" fill={COLOR}>STATEMENT SUMMARY</text>
    <text x="36" y="76" fontSize="11" fill="var(--text-muted)">Example statement summary | Billing and due dates are set by your issuer</text>
    <rect x="20" y="100" width="220" height="70" rx="6" fill="var(--raise)" stroke="#ca8a04" strokeWidth="1" />
    <text x="30" y="120" fontSize="11" fontWeight="700" fill="#854d0e">Total Amount Due</text>
    <text x="30" y="138" fontSize="18" fontWeight="800" fill="#854d0e">₹42,380</text>
    <text x="30" y="156" fontSize="10" fill="#854d0e">Pay in full to avoid interest</text>
    <rect x="260" y="100" width="220" height="70" rx="6" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" />
    <text x="270" y="120" fontSize="11" fontWeight="700" fill="#991b1b">Minimum Amount Due</text>
    <text x="270" y="138" fontSize="18" fontWeight="800" fill="#991b1b">₹2,119</text>
    <text x="270" y="156" fontSize="10" fill="#991b1b">Not the same as paying the full balance</text>
    <rect x="500" y="100" width="200" height="70" rx="6" fill="#dcfce7" stroke={COLOR} strokeWidth="1" />
    <text x="510" y="120" fontSize="11" fontWeight="700" fill="#14532d">Available Credit</text>
    <text x="510" y="138" fontSize="18" fontWeight="800" fill="#14532d">₹1,07,620</text>
    <text x="510" y="156" fontSize="10" fill="#14532d">Limit minus balance</text>
    <rect x="20" y="184" width="680" height="44" rx="6" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
    <text x="36" y="203" fontSize="11" fontWeight="700" fill="var(--text)">Rewards summary (if shown)</text>
    <text x="36" y="220" fontSize="10" fill="var(--text-muted)">Check this card's current rules for eligible points, value and expiry.</text>
    <rect x="20" y="240" width="680" height="44" rx="6" fill="var(--raise)" stroke="#7c3aed" strokeWidth="1" />
    <text x="36" y="259" fontSize="11" fontWeight="700" fill="#7c3aed">Unbilled Transactions: ₹6,200</text>
    <text x="36" y="276" fontSize="10" fill="var(--text-muted)">Purchases made after statement date. Will appear on next month's statement. Not included in ₹42,380.</text>
  </svg>
);

const SvgDatesExplained = () => (
  <svg viewBox="0 0 720 194" role="img" aria-label="Credit card date timeline: statement date, payment due date, and interest-free period" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The Confusing Date Trinity, Explained on One Timeline</text>
    <line x1="40" y1="90" x2="680" y2="90" stroke="var(--border)" strokeWidth="2" />
    {[
      { x: 40, label: "Billing cycle\nstarts", sub: "1 Apr", color: "var(--mut)" },
      { x: 260, label: "Statement\nDate", sub: "30 Apr", color: "#ca8a04" },
      { x: 480, label: "Payment\nDue Date", sub: "20 May", color: "#dc2626" },
      { x: 680, label: "Next\nStatement", sub: "30 May", color: "var(--mut)" },
    ].map((d, i) => (
      <g key={i}>
        <circle cx={d.x} cy="90" r="8" fill={d.color} />
        <text x={d.x} y={i % 2 === 0 ? "56" : "126"} textAnchor="middle" fontSize="11" fontWeight="700" fill={d.color}>{d.label.split("\n")[0]}</text>
        {d.label.includes("\n") && <text x={d.x} y={i % 2 === 0 ? "70" : "140"} textAnchor="middle" fontSize="11" fontWeight="700" fill={d.color}>{d.label.split("\n")[1]}</text>}
        <text x={d.x} y={i % 2 === 0 ? "84" : "110"} textAnchor="middle" fontSize="10" fill="var(--text-muted)">{d.sub}</text>
      </g>
    ))}
    <rect x="40" y="100" width="440" height="10" rx="2" fill={COLOR} opacity="0.3" />
    <text x="260" y="155" textAnchor="middle" fontSize="11" fill={COLOR} fontWeight="600">Interest-free period: up to 50 days from transaction to due date</text>
    <text x="360" y="170" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Buy on Apr 1, pay by May 20 = 50 days free. Buy on Apr 29, pay by May 20 = 21 days free.</text>
  </svg>
);

const SvgMinDueTrap = () => (
  <svg viewBox="0 0 720 307" role="img" aria-label="Minimum amount due trap: total cost of only paying minimum on a 50000 rupee balance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The Minimum Due Trap: ₹50,000 Balance at 3.5%/Month</text>
    <text x="360" y="44" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Paying only ₹2,500 minimum each month (5% of balance)</text>
    {[
      { label: "Original balance", value: "₹50,000", bar: 200, color: COLOR },
      { label: "Interest after 6 months", value: "₹11,048", bar: 88, color: "#f59e0b" },
      { label: "Interest after 12 months", value: "₹24,000+", bar: 192, color: "#f97316" },
      { label: "Total paid by clearance", value: "₹92,000+", bar: 368, color: "#dc2626" },
    ].map((d, i) => (
      <g key={i}>
        <text x="230" y={70 + i * 36} textAnchor="end" fontSize="12" fill="var(--text-muted)">{d.label}</text>
        <rect x="238" y={56 + i * 36} width={d.bar} height="22" rx="4" fill={d.color} opacity="0.85" />
        <text x={246 + d.bar} y={71 + i * 36} fontSize="12" fontWeight="700" fill={d.color}>{d.value}</text>
      </g>
    ))}
    <text x="360" y="210" textAnchor="middle" fontSize="11" fontWeight="700" fill="#dc2626">Pay ₹50,000, eventually pay back ₹92,000. Always pay the full statement balance.</text>
  </svg>
);

const SvgRewardPointsDecoder = () => (
  <svg viewBox="0 0 720 237" role="img" aria-label="Reward points value decoder for major Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">What Are Your Reward Points Actually Worth?</text>
    {["Card", "Points per ₹150", "Value per Point", "Effective Rate", "Expiry"].map((h, i) => (
      <text key={i} x={[30, 180, 310, 440, 600][i]} y="50" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["HDFC Regalia", "4 pts", "₹0.40 (SmartBuy)", "1.06%", "3 years"],
      ["HDFC Infinia", "5 pts", "₹0.50 (SmartBuy)", "1.65%", "No expiry"],
      ["Axis Magnus", "12 pts (Edge)", "₹0.20", "1.6%", "3 years"],
      ["ICICI Amazon Pay", "₹5 cashback/₹100", "Direct cash", "5% Amazon", "None"],
      ["SBI SimplySAVE", "1 pt/₹100", "₹0.25", "0.25%", "2 years"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={58 + i * 24} width="680" height="22" rx="3" fill={i % 2 === 0 ? "transparent" : "var(--raise)"} />
        {row.map((cell, j) => (
          <text key={j} x={[30, 180, 310, 440, 600][j]} y={73 + i * 24} fontSize="11" fill={j === 3 ? COLOR : "var(--text)"}>{cell}</text>
        ))}
      </g>
    ))}
  </svg>
);

const SvgEmiBreakdown = () => (
  <svg viewBox="0 0 720 266" role="img" aria-label="Credit card EMI breakdown on statement showing principal, interest, and remaining balance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">How an EMI Conversion Appears on Your Statement</text>
    <text x="360" y="44" textAnchor="middle" fontSize="11" fill="var(--text-muted)">₹30,000 converted to 6-month EMI at 13% p.a. (no-cost EMI: 0%)</text>
    {["Month", "EMI Amount", "Principal", "Interest (13% p.a.)", "Outstanding"].map((h, i) => (
      <text key={i} x={[30, 150, 270, 390, 560][i]} y="68" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["Month 1", "₹5,000", "₹4,675", "₹325", "₹25,325"],
      ["Month 2", "₹5,000", "₹4,725", "₹275", "₹20,600"],
      ["Month 3", "₹5,000", "₹4,777", "₹223", "₹15,823"],
      ["Month 6", "₹5,000", "₹4,946", "₹54", "₹0"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={74 + i * 26} width="680" height="24" rx="3" fill={i % 2 === 0 ? "transparent" : "var(--green-dim)"} />
        {row.map((cell, j) => (
          <text key={j} x={[30, 150, 270, 390, 560][j]} y={90 + i * 26} fontSize="11" fill={j === 3 ? "#dc2626" : "var(--text)"}>{cell}</text>
        ))}
      </g>
    ))}
    <text x="36" y="188" fontSize="11" fill="var(--text-muted)">No-cost EMI: merchant bears the interest. You see ₹0 in the interest column. Read the fine print.</text>
  </svg>
);

const SvgUnbilledVsBilled = () => (
  <svg viewBox="0 0 720 160" role="img" aria-label="Difference between billed and unbilled transactions on a credit card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Billed vs Unbilled: Where Your Money Hides</text>
    <rect x="20" y="40" width="320" height="104" rx="8" fill="#dcfce7" />
    <rect x="380" y="40" width="320" height="104" rx="8" fill="var(--raise)" />
    <text x="180" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#14532d">Billed Transactions</text>
    <text x="540" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#854d0e">Unbilled Transactions</text>
    <text x="36" y="82" fontSize="11" fill="#14532d">Appear on current statement</text>
    <text x="36" y="100" fontSize="11" fill="#14532d">Must pay by due date</text>
    <text x="36" y="118" fontSize="11" fill="#14532d">Part of Minimum Amount Due</text>
    <text x="36" y="136" fontSize="11" fill="#14532d">Affects available credit now</text>
    <text x="396" y="82" fontSize="11" fill="#854d0e">Purchases after statement date</text>
    <text x="396" y="100" fontSize="11" fill="#854d0e">Will appear NEXT month</text>
    <text x="396" y="118" fontSize="11" fill="#854d0e">Not in this month's due amount</text>
    <text x="396" y="136" fontSize="11" fill="#854d0e">Still reduces available credit</text>
  </svg>
);

const SvgInterestFreeCalc = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Interest-free period calculator showing different purchase dates" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="170" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Interest-Free Days Depend on When You Buy</text>
    <text x="360" y="44" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Statement date: 15th of every month. Due date: 5th of next month.</text>
    {["Purchase Date", "Days to Due Date", "Interest-Free Days", "Smart Move?"].map((h, i) => (
      <text key={i} x={[30, 220, 380, 540][i]} y="68" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["16th of month", "20 days to statement + 20 days", "~40 days", "Average"],
      ["1st of month", "15 days to statement + 20 days", "~35 days", "Decent"],
      ["16th (next cycle)", "30 days to statement + 20 days", "~50 days", "Best"],
      ["14th of month", "1 day to statement + 20 days", "~21 days", "Worst timing"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={74 + i * 22} width="680" height="20" rx="3" fill={i % 2 === 0 ? "transparent" : "var(--green-dim)"} />
        {row.map((cell, j) => (
          <text key={j} x={[30, 220, 380, 540][j]} y={88 + i * 22} fontSize="11" fill={j === 3 ? (cell === "Best" ? COLOR : cell === "Worst timing" ? "#dc2626" : "var(--text)") : "var(--text)"}>{cell}</text>
        ))}
      </g>
    ))}
  </svg>
);

export default function BlogReadCreditCardStatement() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between statement date and payment due date?",
        acceptedAnswer: { "@type": "Answer", text: "The statement date closes a billing cycle and the due date is the payment deadline shown by the issuer. The gap and the effect of a missed or partial payment depend on the card terms and applicable rules. Check your statement and issuer's MITC." }
      },
      {
        "@type": "Question",
        name: "What happens if I pay only the minimum amount due?",
        acceptedAnswer: { "@type": "Answer", text: "Paying only the minimum can stretch repayment over months or years and lead to substantial interest. If the total amount due is not cleared, the interest-free period may be lost and interest may be levied on the outstanding amount from transaction dates, as set out in the card terms and RBI directions. Paying the full amount due by the deadline generally avoids revolving interest on eligible purchases." }
      },
      {
        "@type": "Question",
        name: "What are unbilled transactions on a credit card?",
        acceptedAnswer: { "@type": "Answer", text: "Unbilled transactions generally refer to transactions not yet included in a generated statement. Check your issuer's app or statement for how pending, reversed and unbilled amounts affect available credit and the next bill." }
      },
      {
        "@type": "Question",
        name: "When do credit card reward points expire in India?",
        acceptedAnswer: { "@type": "Answer", text: "Expiry depends on the exact card and rewards program. Check the issuer's current reward terms and account portal for your balance and any expiry dates. See our general guide to valuing and checking reward points." }
      },
      {
        "@type": "Question",
        name: "How is the interest-free period calculated?",
        acceptedAnswer: { "@type": "Answer", text: "The statement and due dates determine the potential interest-free period for eligible transactions, so the exact period varies with purchase date and billing cycle. It may not apply when a prior balance remains unpaid. Check your issuer's terms and statement illustration." }
      },
      {
        "@type": "Question",
        name: "Does converting a purchase to EMI affect my credit limit?",
        acceptedAnswer: { "@type": "Answer", text: "An EMI conversion can affect available credit, but the treatment and release of the outstanding amount depend on the issuer and product terms. Check the conversion confirmation and statement for the principal, interest, fees and limit impact." }
      },
      {
        "@type": "Question",
        name: "Why is my 'Total Amount Due' different from what I spent this month?",
        acceptedAnswer: { "@type": "Answer", text: "Your total amount due includes your current month's purchases plus any balance carried over from the previous month plus any interest charged on that carried balance plus EMI installments due this month. If you see an unexpected amount, check the previous statement balance line first." }
      },
      {
        "@type": "Question",
        name: "How do I read the EMI section on my credit card statement?",
        acceptedAnswer: { "@type": "Answer", text: "Your statement will show a separate EMI section listing each active EMI plan with the product or transaction name, the monthly installment amount, the number of installments remaining, and the interest rate. The EMI amount is already included in your total amount due, so don't pay it separately." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Read Your Credit Card Statement: A Plain-English Walkthrough",
    author: { "@type": "Person", name: "Ash K" },
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
      { "@type": "ListItem", position: 3, name: "How to Read Your Credit Card Statement", item: "https://www.assurefintech.com/blog/read-credit-card-statement" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #021509, #073417, #021509)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #16a34a22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · How-to
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            How to Read Your Credit Card Statement: A Plain-English Walkthrough
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            Your statement shows what was billed, when payment is due, and how transactions and charges are recorded. Here is a practical guide to the sections worth checking.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / How to Read Your Credit Card Statement
      </nav>
<section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 1: Understand the Overall Structure</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Open your latest statement (PDF or the app version) and look for the summary box at the top. That single page holds five numbers that determine everything: your total amount due, minimum amount due, credit limit, available credit, and reward points balance.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Most people only look at the minimum amount due. That's the most expensive number on the page. Here's what each section actually means.</p>
        <SvgStatementAnatomy />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 2: Crack the Date Trinity</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>There are three dates on every statement and they confuse even experienced card users. The statement date is when your billing cycle ended. The payment due date is your deadline to pay. And somewhere in between is the interest-free cutoff.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The available period depends on the purchase date, billing cycle and due date shown by your issuer. The interest-free period may not apply if you carry an unpaid balance. Do not use a generic day count in place of the issuer's statement or card terms.</p>
        <SvgDatesExplained />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 3: Never Pay Just the Minimum Amount Due</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The minimum due is calculated under your issuer's terms; it is not a payoff plan. Paying only this amount can keep the remaining balance outstanding and lead to significant interest. RBI requires statements to warn cardholders that minimum-only repayment can stretch over months or years with compounded interest. If possible, pay the full amount due by the displayed deadline. If you cannot, pay as much as you can and contact your issuer to understand the cost and options.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 4: Calculate Your Real Interest-Free Window</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The interest-free period isn't a fixed number. It depends entirely on when in the billing cycle you make your purchase. Banks advertise "up to 50 days" but most purchases land somewhere between 20 and 45 days free.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For big purchases, like a new phone or an appliance, time them for the day after your statement date. You get a full billing cycle (30 days) plus the grace period (15 to 20 days) before you need to pay a single rupee.</p>
        <SvgInterestFreeCalc />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 5: Decode Your Reward Points Balance</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Some statements or apps show a reward balance or expiry details; the layout varies by issuer. Reward value and expiry are specific to the card and redemption route. Check current program terms and your account balance rather than applying a generic point value.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Before a product change or closure, check whether points can be redeemed or transferred, and whether any deadline applies. Our <Link href="/blog/how-reward-points-work-india" style={{ color: COLOR }}>reward-points guide</Link> explains a simple way to compare redemption value.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 6: Understand Unbilled Transactions</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you bought something two days after your statement date, it won't appear in this month's payable amount. But it has already reduced your available credit. This trips up a lot of people who think their available credit should be higher after paying the bill.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Look for the "unbilled transactions" section (sometimes called "transactions after statement date"). Add it to your mental tally of what you owe, even if it's not due yet.</p>
        <SvgUnbilledVsBilled />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 7: Read Your EMI Breakdowns Carefully</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you have converted a purchase to EMI, check the statement and conversion confirmation for the installment, outstanding principal, interest, fees and any effect on available credit. Presentation and limit treatment can differ by issuer.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Also check whether your EMI is genuinely no-cost or simply deferred interest. Some merchants advertise "no-cost EMI" but add a subvention fee or processing charge of 1 to 2 percent upfront. That fee appears as a debit on your statement in month 1.</p>
        <SvgEmiBreakdown />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Your 5-Minute Statement Checklist</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Every month when your statement arrives, run through these five checks before closing the PDF.</p>
        <ol style={{ fontSize: 16, paddingLeft: 22, lineHeight: 2 }}>
          <li>Verify the total amount due matches your expected spend. Flag any transaction you don't recognise immediately.</li>
          <li>Set a calendar reminder for the payment due date if auto-debit isn't active.</li>
          <li>Check reward points balance and compare the expiry date to your calendar.</li>
          <li>Look at the unbilled transactions section to understand your real balance.</li>
          <li>Review any active EMIs for outstanding principal and check the interest rate column for surprise charges.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>What to Do Right Now</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you enable auto-debit, check that it is set for the full amount due, the linked account has sufficient funds, and the debit succeeds by the due date. Continue to review statements and payment confirmations; auto-debit is not a substitute for checking the account.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Check whether your reward balance has an expiry date under your card's current program terms and choose a redemption only after comparing its actual value and costs.</p>
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
        <Link href="/blog/7-credit-card-mistakes-india" style={{ color: COLOR }}>7 Credit Card Mistakes Indians Make</Link> ·{" "}
        <Link href="/blog/right-way-pay-credit-card-bill" style={{ color: COLOR }}>The Right Way to Pay Your Credit Card Bill</Link> ·{" "}
        <Link href="/blog/credit-card-vs-debit-card" style={{ color: COLOR }}>Credit Card vs Debit Card</Link> ·{" "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe Tool</Link> ·{" "}
        <Link href="/learn/savings" style={{ color: COLOR }}>Savings Guide</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison platform. Statement labels and card terms vary by issuer. This guide was reviewed September 28, 2026 against the RBI's <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>credit-card directions</a>; check your issuer's latest MITC and statement for account-specific details.
      </footer>
    </main>
    </>
  );
}
