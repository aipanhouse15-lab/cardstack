import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "How to Read Your Credit Card Statement: A Plain-English Walkthrough",
  description: "How to Read Your Credit Card Statement: A Plain-English Walkthrough",
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
// Color: #16a34a | Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

const SvgStatementAnatomy = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Annotated credit card statement showing key sections and their meaning" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="300" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Your Credit Card Statement: What Each Section Actually Means</text>
    <rect x="20" y="38" width="680" height="52" rx="6" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" />
    <text x="36" y="58" fontSize="12" fontWeight="700" fill={COLOR}>STATEMENT SUMMARY</text>
    <text x="36" y="76" fontSize="11" fill="var(--text-muted)">Statement Date: 15 May 2026  |  Payment Due Date: 5 Jun 2026  |  Credit Limit: ₹1,50,000</text>
    <rect x="20" y="100" width="220" height="70" rx="6" fill="var(--raise)" stroke="#ca8a04" strokeWidth="1" />
    <text x="30" y="120" fontSize="11" fontWeight="700" fill="#854d0e">Total Amount Due</text>
    <text x="30" y="138" fontSize="18" fontWeight="800" fill="#854d0e">₹42,380</text>
    <text x="30" y="156" fontSize="10" fill="#854d0e">Pay in full to avoid interest</text>
    <rect x="260" y="100" width="220" height="70" rx="6" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" />
    <text x="270" y="120" fontSize="11" fontWeight="700" fill="#991b1b">Minimum Amount Due</text>
    <text x="270" y="138" fontSize="18" fontWeight="800" fill="#991b1b">₹2,119</text>
    <text x="270" y="156" fontSize="10" fill="#991b1b">TRAP: costs you thousands more</text>
    <rect x="500" y="100" width="200" height="70" rx="6" fill="#dcfce7" stroke={COLOR} strokeWidth="1" />
    <text x="510" y="120" fontSize="11" fontWeight="700" fill="#14532d">Available Credit</text>
    <text x="510" y="138" fontSize="18" fontWeight="800" fill="#14532d">₹1,07,620</text>
    <text x="510" y="156" fontSize="10" fill="#14532d">Limit minus balance</text>
    <rect x="20" y="184" width="680" height="44" rx="6" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
    <text x="36" y="203" fontSize="11" fontWeight="700" fill="var(--text)">Reward Points Balance: 8,420 pts  (expires Dec 2026)</text>
    <text x="36" y="220" fontSize="10" fill="var(--text-muted)">Redemption value approx ₹842 at 10p per point. Don't let these expire!</text>
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
  <svg viewBox="0 0 720 234" role="img" aria-label="Minimum amount due trap: total cost of only paying minimum on a 50000 rupee balance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
  <svg viewBox="0 0 720 190" role="img" aria-label="Reward points value decoder for major Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
  <svg viewBox="0 0 720 212" role="img" aria-label="Credit card EMI breakdown on statement showing principal, interest, and remaining balance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
  <svg viewBox="0 0 720 170" role="img" aria-label="Interest-free period calculator showing different purchase dates" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
        acceptedAnswer: { "@type": "Answer", text: "The statement date is when your bank closes the billing cycle and calculates your total dues. The payment due date is the deadline to pay that bill, typically 15 to 20 days after the statement date. Missing the due date triggers interest on your entire balance, not just the overdue amount." }
      },
      {
        "@type": "Question",
        name: "What happens if I pay only the minimum amount due?",
        acceptedAnswer: { "@type": "Answer", text: "You avoid a late payment penalty, but interest at 3 to 3.5 percent per month kicks in on your entire outstanding balance from the statement date. On a ₹50,000 balance, paying only the minimum each month means you could end up paying back over ₹90,000 in total by the time the debt is cleared." }
      },
      {
        "@type": "Question",
        name: "What are unbilled transactions on a credit card?",
        acceptedAnswer: { "@type": "Answer", text: "Unbilled transactions are purchases you made after the statement date. They reduce your available credit immediately but won't appear as a payable amount until your next statement. This is why your available credit can look lower than expected even right after paying your bill." }
      },
      {
        "@type": "Question",
        name: "When do credit card reward points expire in India?",
        acceptedAnswer: { "@type": "Answer", text: "It varies by card. HDFC Regalia points expire in 3 years. SBI credit card points expire in 2 years. Axis Magnus Edge Miles have a 3-year validity. HDFC Infinia points never expire. Always check your statement's reward balance section and set a calendar reminder 3 months before expiry." }
      },
      {
        "@type": "Question",
        name: "How is the interest-free period calculated?",
        acceptedAnswer: { "@type": "Answer", text: "The interest-free period runs from your transaction date to the payment due date of the billing cycle in which that transaction falls. If your billing cycle runs from the 1st to the 30th and your due date is the 20th of next month, a purchase on the 1st gets 50 days free, while a purchase on the 29th gets only 21 days free." }
      },
      {
        "@type": "Question",
        name: "Does converting a purchase to EMI affect my credit limit?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. When you convert a purchase to an EMI, the full amount is typically blocked from your credit limit immediately. Each monthly EMI repayment releases that portion of the limit. So a ₹30,000 EMI conversion reduces your available credit by ₹30,000 from day one, not by ₹5,000 per month." }
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
    dateModified: "2026-06-04",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "How to Read Your Credit Card Statement", item: "https://assurefintech.com/blog/read-credit-card-statement" },
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
            Your monthly statement is full of traps disguised as numbers. Here's how to decode every line before it costs you money.
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
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>A transaction made the day before your statement date gets only 20 days free (until the due date). A transaction made the day after your statement date gets up to 50 days free (full next cycle plus due date window). Knowing this lets you time large purchases to maximise your float.</p>
        <SvgDatesExplained />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 3: Never Pay Just the Minimum Amount Due</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The minimum amount due is usually 5 percent of your outstanding balance or ₹200, whichever is higher. Paying it keeps you safe from late fees (typically ₹500 to ₹1,300 depending on your balance bracket) but triggers interest on your full balance at 3 to 3.5 percent per month.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Here's the real math. You have ₹50,000 outstanding on your HDFC card at 3.5 percent monthly. You pay ₹2,500 minimum each month. By the time you clear the debt, you will have paid over ₹92,000 for something that originally cost ₹50,000. That's the minimum due trap.</p>
        <SvgMinDueTrap />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The rule is simple: always pay the total amount due, not the minimum. If you genuinely can't, pay as much as possible above the minimum to reduce the interest burden.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 4: Calculate Your Real Interest-Free Window</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The interest-free period isn't a fixed number. It depends entirely on when in the billing cycle you make your purchase. Banks advertise "up to 50 days" but most purchases land somewhere between 20 and 45 days free.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For big purchases, like a new phone or an appliance, time them for the day after your statement date. You get a full billing cycle (30 days) plus the grace period (15 to 20 days) before you need to pay a single rupee.</p>
        <SvgInterestFreeCalc />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 5: Decode Your Reward Points Balance</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Every statement shows your reward points balance and (usually) an expiry date. Most Indians let their points expire unused. That's free money walking out the door.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The value of a point varies dramatically by card. HDFC Regalia points are worth 40 paise each when redeemed on SmartBuy. SBI points are worth 25 paise. Axis Edge Miles can be worth over ₹1 when transferred to airline programs. Know your card's rate before assuming your balance is worth a lot or a little.</p>
        <SvgRewardPointsDecoder />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 6: Understand Unbilled Transactions</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you bought something two days after your statement date, it won't appear in this month's payable amount. But it has already reduced your available credit. This trips up a lot of people who think their available credit should be higher after paying the bill.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Look for the "unbilled transactions" section (sometimes called "transactions after statement date"). Add it to your mental tally of what you owe, even if it's not due yet.</p>
        <SvgUnbilledVsBilled />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 7: Read Your EMI Breakdowns Carefully</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you've converted any purchases to EMI, the statement will show a separate EMI section. The monthly installment is already included in your total amount due, so you don't pay it separately. What you need to watch is the outstanding EMI principal, because it blocks your credit limit.</p>
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
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Open your bank's app, go to the credit card section, and set up auto-debit for the full statement balance. This single action eliminates every interest risk and every late payment penalty permanently.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Then check your reward points balance. If you have points expiring in the next 6 months, redeem them today against your statement or for a flight. Banks don't remind you. Your statement does, but only if you read it.</p>
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
        Assure Fintech is an independent comparison platform. Interest rates and reward point values change without notice. Always verify current rates in your card's most-recent Most Important Terms and Conditions (MITC) document. Data accurate as of June 2026.
      </footer>
    </main>
    </>
  );
}
