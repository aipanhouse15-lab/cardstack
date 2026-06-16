import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Your First Credit Card in India: Everything You Actually Need to Know (2026)",
  description: "Your first 3 months: what to do Month 1: Apply for one card appropriate for your income. Activate it. Make 2-3 small purchases (groceries, a Blinkit ...",
  alternates: { canonical: "/blog/beginners-guide" },
  openGraph: {
    title: "Your First Credit Card in India: Everything You Actually Need to Know (2026)",
    description: "Your first 3 months: what to do Month 1: Apply for one card appropriate for your income. Activate it. Make 2-3 small purchases (groceries, a Blinkit ...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/first-credit-card-guide-india
// Template: complete beginner onboarding guide
// Color: #0891b2 | Updated: June 4, 2026

const COLOR = "#0891b2";
const UPDATED = "June 4, 2026";

const SvgCreditCardLifecycle = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Timeline showing how a credit card billing cycle works from purchase to due date" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">How One Month of Credit Card Billing Works</text>
    {/* Timeline line */}
    <line x1="60" y1="100" x2="660" y2="100" stroke="var(--border)" strokeWidth="3" />
    {[
      { x: 60, label: "Statement\nDate", sub: "Day 1", color: COLOR, note: "Your billing cycle starts" },
      { x: 220, label: "You Buy\nSomething", sub: "Day 10", color: "#f59e0b", note: "₹5,000 purchase" },
      { x: 380, label: "Next\nStatement", sub: "Day 31", color: COLOR, note: "Bill generated: ₹5,000" },
      { x: 540, label: "Due Date", sub: "Day 51", color: "#16a34a", note: "Pay ₹5,000 by today" },
      { x: 660, label: "Interest\nStarts", sub: "Day 52+", color: "#ef4444", note: "If not paid: 3.5%/month" },
    ].map(({ x, label, sub, color, note }) => (
      <g key={x}>
        <circle cx={x} cy="100" r="14" fill={color} />
        <text x={x} y="75" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{label.split("\n")[0]}</text>
        <text x={x} y="87" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{label.split("\n")[1]}</text>
        <text x={x} y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{sub.split(" ")[0]}</text>
        <text x={x} y="128" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{note}</text>
      </g>
    ))}
    <rect x="40" y="155" width="640" height="28" rx="6" fill={COLOR} opacity="0.1" />
    <text x="360" y="174" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Free credit window: up to 50 days (statement date to due date)</text>
  </svg>
);

const SvgInterestVsInvestment = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Comparison showing Rs 10000 credit card debt interest cost vs the same amount in a fixed deposit over 12 months" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">₹10,000 for 12 Months: Credit Card Debt vs Fixed Deposit</text>
    {/* Credit card */}
    <rect x="50" y="50" width="270" height="180" rx="10" fill="var(--raise)" stroke="#ef4444" strokeWidth="2" />
    <rect x="50" y="50" width="270" height="42" rx="10" fill="var(--raise)" />
    <rect x="50" y="76" width="270" height="16" fill="var(--raise)" />
    <text x="185" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">₹10,000 Unpaid Balance</text>
    <text x="185" y="115" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Interest rate: 3.5%/month</text>
    <text x="185" y="135" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Annual rate: 42%</text>
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
    <text x="535" y="115" textAnchor="middle" fontSize="11" fill="var(--text-muted)">FD rate: 7.0% per year</text>
    <text x="535" y="135" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(SBI 1-year FD, June 2026)</text>
    <text x="535" y="165" textAnchor="middle" fontSize="28" fontWeight="800" fill="#16a34a">+₹700</text>
    <text x="535" y="188" textAnchor="middle" fontSize="12" fill="var(--text-muted)">interest earned in 12 months</text>
    <text x="535" y="210" textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="700">Your ₹10,000 grows to ₹10,700</text>
  </svg>
);

const SvgFirstCardByIncome = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Table recommending first credit cards for different income brackets in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="280" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Your First Card by Income Bracket (June 2026)</text>
    <rect x="20" y="40" width="680" height="34" fill={COLOR} rx="4" />
    <text x="120" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Monthly Income</text>
    <text x="280" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Recommended Card</text>
    <text x="460" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Why</text>
    <text x="630" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Annual Fee</text>
    {[
      ["Under ₹25,000", "SBI SimplySAVE or IDFC FIRST Classic", "Easy approval, low income requirement, decent rewards", "₹0-₹499"],
      ["₹25,000 - ₹50,000", "Amazon Pay ICICI Bank", "Truly free, 5% on Amazon, easy ICICI approval", "₹0 forever"],
      ["₹50,000 - ₹1L", "HDFC Regalia or Axis Ace", "Higher limits, travel benefits, better reward rates", "₹2,500-₹499"],
      ["Above ₹1L/month", "HDFC Diners Black or Amex Platinum", "Premium lounges, concierge, high reward rates", "₹10,000+"],
    ].map(([income, card, why, fee], i) => (
      <g key={i}>
        <rect x="20" y={76 + i * 48} width="680" height="48" fill={i % 2 === 0 ? "var(--raise2)" : "var(--raise)"} />
        <text x="120" y={96 + i * 48} textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>{income}</text>
        <text x="280" y={92 + i * 48} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">{card.split(" or ")[0]}</text>
        <text x="280" y={108 + i * 48} textAnchor="middle" fontSize="10" fill="var(--text-muted)">or {card.split(" or ")[1]}</text>
        <text x="460" y={100 + i * 48} textAnchor="middle" fontSize="10" fill="var(--text-muted)">{why.substring(0, 35)}</text>
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
      { x: 210, num: "2", rule: "Pay before due date", detail: "Even one day late = ₹500-1,000 late fee + interest. Set an auto-pay on the due date." },
      { x: 390, num: "3", rule: "Keep utilization under 30%", detail: "If your limit is ₹1 lakh, never charge more than ₹30,000. High utilization kills CIBIL." },
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
  <svg viewBox="0 0 720 180" role="img" aria-label="Chart showing how responsible credit card use improves CIBIL score over 12 months" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">CIBIL Score Growth: Responsible Card Use Over 12 Months</text>
    {/* Score line */}
    {[
      [60, 140, "Start: No credit history\n(~0 or N/A)"],
      [160, 125, "Month 3: ~650"],
      [280, 108, "Month 6: ~700"],
      [400, 90, "Month 9: ~730"],
      [520, 72, "Month 12: ~750"],
      [640, 55, "Month 18: ~780+"],
    ].map(([x, y, label], i, arr) => {
      const next = arr[i + 1];
      return (
        <g key={x}>
          {next && <line x1={x} y1={y} x2={next[0]} y2={next[1]} stroke={COLOR} strokeWidth="3" />}
          <circle cx={x} cy={y} r="7" fill={COLOR} />
          <text x={x} y={y + 20} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{label.split(":")[0]}:</text>
          <text x={x} y={y + 30} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{label.split(": ")[1]}</text>
        </g>
      );
    })}
    <text x="360" y="168" textAnchor="middle" fontSize="10" fill="var(--text-muted)">*Assumes full payment each month, under 30% utilization, no missed payments</text>
  </svg>
);

const SvgMissedPaymentCost = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Table showing cost of missing or delaying credit card payment in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">What Happens When You Miss a Credit Card Payment</text>
    <rect x="20" y="38" width="680" height="30" fill="var(--raise2)" rx="4" />
    <text x="160" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">What happens</text>
    <text x="380" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">The actual cost</text>
    <text x="590" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Timing</text>
    {[
      ["Late payment fee", "₹500 to ₹1,000 (varies by bank)", "Same statement"],
      ["Interest on full balance", "3-3.5%/month (36-42%/year)", "From transaction date"],
      ["Grace period loss", "No interest-free days next month", "Immediate"],
      ["CIBIL score hit", "-50 to -100 points on 30-day delay", "Within 45 days"],
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
        acceptedAnswer: { "@type": "Answer", text: "The free credit period is the time between when you make a purchase and when you must pay your bill, with zero interest charged. In India, this is typically 20 to 50 days depending on when in the billing cycle you make the purchase. A purchase made on statement date day 1 gets the full 50-day window. A purchase made on day 30 of the cycle gets only about 20 days. If you pay the full statement balance by the due date, you pay absolutely zero interest." }
      },
      {
        "@type": "Question",
        name: "Should I use a credit card if I do not need to borrow money?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, absolutely. A credit card is best used as a debit card replacement, not a borrowing tool. You spend on the card, earn rewards, and pay the full amount before the due date. You never pay interest and you gain reward points or cashback on every purchase. The additional benefits include CIBIL score building, purchase protection, and the 20-50 day float on your money." }
      },
      {
        "@type": "Question",
        name: "What credit limit should a beginner expect on their first card?",
        acceptedAnswer: { "@type": "Answer", text: "First-time credit card holders in India typically get a limit between ₹20,000 and ₹75,000, depending on income and the issuing bank. Salaried individuals with documented income get higher starting limits than self-employed applicants. The limit increases automatically after 6-12 months of responsible use. Never request a high limit just to have it available, it encourages overspending." }
      },
      {
        "@type": "Question",
        name: "What does credit utilization ratio mean and why does it matter?",
        acceptedAnswer: { "@type": "Answer", text: "Credit utilization is the percentage of your credit limit that you are currently using. If your limit is ₹1 lakh and you have ₹40,000 charged on the card, your utilization is 40%. CIBIL and other bureaus treat high utilization as a sign of credit stress. Keeping utilization under 30% (₹30,000 on a ₹1 lakh limit) is the recommended practice for maintaining a good CIBIL score." }
      },
      {
        "@type": "Question",
        name: "What is the minimum amount due trap on credit cards?",
        acceptedAnswer: { "@type": "Answer", text: "The minimum amount due is typically 5% of the outstanding balance. Banks require only this minimum to keep the account in good standing. But if you pay only the minimum, you still pay 3-3.5% monthly interest on the remaining 95% of the balance from the original transaction date. Paying only the minimum on a ₹50,000 bill for 6 months can result in over ₹8,000 in interest charges." }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a good CIBIL score with a credit card?",
        acceptedAnswer: { "@type": "Answer", text: "Starting from no credit history, responsible credit card use typically builds a CIBIL score of 700+ within 6-9 months. By 12-18 months of consistent full payments and under-30% utilization, you can expect a score of 750-780+. A score of 750 or higher qualifies you for most home loans and personal loans at competitive interest rates." }
      },
      {
        "@type": "Question",
        name: "What happens to my CIBIL score if I miss one payment?",
        acceptedAnswer: { "@type": "Answer", text: "A single missed payment reported to the credit bureau (which happens after 30 days of non-payment) can drop your CIBIL score by 50 to 100 points. The effect persists on your credit report for 7 years, though its impact reduces over time as you build a positive payment history. One missed payment is serious, especially early in your credit history." }
      },
      {
        "@type": "Question",
        name: "Is it okay to have multiple credit cards as a beginner?",
        acceptedAnswer: { "@type": "Answer", text: "Start with one card for the first 6-12 months. Learn to track statements, due dates, and spending before adding complexity. Each new card application creates a hard inquiry on your credit report, temporarily lowering your CIBIL score. After 12 months of responsible single-card use, adding a second card for specific rewards optimization (like a fuel card or dining card) makes sense." }
      },
      {
        "@type": "Question",
        name: "What is the interest rate on credit cards in India?",
        acceptedAnswer: { "@type": "Answer", text: "Most Indian credit cards charge between 3% to 3.5% per month on revolving balances, which equals 36% to 42% annually. Some cards go as high as 3.75% per month (45% per year). This is the most expensive form of borrowing available to retail consumers in India, higher than personal loans, gold loans, and home loans. Never carry a credit card balance unless it is a genuine emergency." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Your First Credit Card in India: The Complete Beginner's Guide (2026)",
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
      { "@type": "ListItem", position: 3, name: "First Credit Card Guide India", item: "https://assurefintech.com/blog/first-credit-card-guide-india" },
    ],
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / First Credit Card Guide India
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · BEGINNERS</div>

      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 14px" }}>
        Your First Credit Card in India: Everything You Actually Need to Know (2026)
      </h1>

      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 16px" }}>
        A credit card is one of the most useful financial tools in India when used correctly. It is also the most expensive debt you can carry. This guide covers both sides, so you start on the right foot.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 12 min read</div>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What a credit card actually is</h2>
        <p>A credit card is a short-term loan facility from a bank. You spend on the card, the bank pays the merchant on your behalf, and you repay the bank by the due date. If you repay the full amount, you pay zero interest. If you carry any balance past the due date, you pay 3% to 3.5% monthly interest, which is 36% to 42% per year.</p>
        <p>The reason to get a credit card is not to borrow money. It is to use the 20-50 day free credit window while earning rewards on spending you were going to do anyway. Think of it as a tool that pays you to buy groceries and Zomato orders, as long as you pay the full bill every month without fail.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How the billing cycle works</h2>
        <p>Every credit card has a statement date (when the billing cycle closes and your bill is generated) and a due date (when you must pay). The gap between the statement date and due date is typically 18-21 days. The full free credit period extends from the start of the billing cycle to the due date, which can be up to 50 days.</p>
        <p>Here is the key insight: a purchase made right after your statement date gets almost 50 days interest-free. A purchase made the day before your statement date gets only about 18-20 days free. This does not change your behavior, just helps you understand why your statement date matters.</p>
      </section>

      <SvgCreditCardLifecycle />

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why you should get a credit card (even if you do not need credit)</h2>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: COLOR }}>CIBIL score building</h3>
        <p>India's lending system runs on CIBIL scores. Home loans, car loans, personal loans, even renting premium apartments now involve a CIBIL check. With no credit history, you score zero or "N/A," and that makes lenders nervous. A credit card used responsibly for 12-18 months builds a CIBIL score of 750+ without any borrowing.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: COLOR }}>Rewards on spending you already do</h3>
        <p>You pay for groceries, fuel, Swiggy orders, and Amazon purchases regardless. A credit card converts 1% to 5% of that spending into cashback or reward points. At ₹15,000/month spend, even a 2% average return is ₹3,600/year back in your pocket for zero extra effort.</p>

        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "16px 0 8px", color: COLOR }}>Purchase protection</h3>
        <p>Most credit cards include a dispute resolution mechanism: if a merchant fails to deliver, you can raise a chargeback with the bank. This protection does not exist with UPI or debit card payments, where your money is gone the moment you approve the transaction.</p>
      </section>

      <SvgGoldenRules />

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The one rule that overrides everything else</h2>
        <p>Pay the full statement balance before the due date, every single month. Not the minimum due. Not "most of it." The full amount. This one habit means you pay zero interest and earn all the rewards. This is the entire point of the card.</p>
        <p>Set up an auto-debit for the full statement amount on the due date. Check that your savings account will have enough funds two days before the due date. This removes human error from the equation entirely.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The real cost of carrying a balance</h2>
        <p>Carrying ₹10,000 unpaid on a credit card for 12 months at 3.5%/month costs ₹5,100 in interest. The same ₹10,000 in a 1-year FD at SBI (7% per year) earns ₹700. The gap between the best saving and the worst borrowing, both using ₹10,000, is ₹5,800 in a single year.</p>
        <p>Credit card debt is the most expensive legal form of borrowing available to individuals in India. It is more expensive than personal loans (11-18%), gold loans (7-10%), and home loans (8.5-9.5%). If you ever find yourself unable to pay the full amount, treat that as a financial emergency and address the root spending problem first.</p>
      </section>

      <SvgInterestVsInvestment />

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What happens when you miss a payment</h2>
        <p>Missing your due date triggers an immediate late payment fee of ₹500 to ₹1,000 depending on the bank. Interest starts accruing on the full outstanding amount from the date of each original purchase, not from the due date. Your grace period is also lost for the next billing cycle, meaning all new purchases start accruing interest from the transaction date.</p>
        <p>If the payment delay crosses 30 days, the bank reports it to the credit bureau and your CIBIL score drops significantly. A single 30-day delinquency can knock 50-100 points off your score and stays on record for 7 years.</p>
      </section>

      <SvgMissedPaymentCost />

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How to choose your first card</h2>
        <p>Your first credit card choice should be based on: your monthly income (for approval), your primary spending category (for reward optimization), and your tolerance for annual fees. At the start, prioritize approval probability and zero or low fee over maximum rewards.</p>
        <p>A good first card is one that gets approved, costs you nothing or very little in fees, and gives modest rewards. Once you have 12 months of credit history, you can upgrade to a card that is better optimized for your specific spending pattern.</p>
      </section>

      <SvgFirstCardByIncome />

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The CIBIL score building timeline</h2>
        <p>Starting from zero credit history, using your first card responsibly produces measurable results within 3 months. Most bureaus require at least 6 months of credit history to generate a score. By month 12, responsible users consistently reach 720-750, which qualifies them for most consumer lending products.</p>
        <p>The two factors that matter most in the early months: payment history (no missed payments) and credit utilization (never above 30%). The age of credit accounts matters too, which is why you should not cancel your first card even after upgrading to a better one later.</p>
      </section>

      <SvgCibilImpact />

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The credit utilization ratio explained simply</h2>
        <p>If your card limit is ₹1,00,000 and you spend ₹70,000 this month, your utilization is 70%. That looks alarming to lenders even if you pay the full ₹70,000 on time. CIBIL records your utilization at the statement closing date, so what matters is what is on the card when the statement is generated, not just whether you pay it off.</p>
        <p>Keep spend below 30% of your limit on each statement. If you regularly spend ₹30,000 and your limit is only ₹60,000 (50% utilization), call the bank and request a limit increase after 6-12 months of good history, rather than asking for a new card.</p>
      </section>

      <section style={{ marginBottom: 24, padding: "20px 24px", background: "#ecfeff", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 8px 8px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px" }}>Your first 3 months: what to do</h2>
        <p style={{ margin: "0 0 8px" }}>Month 1: Apply for one card appropriate for your income. Activate it. Make 2-3 small purchases (groceries, a Blinkit order). Pay the full statement amount on due date.</p>
        <p style={{ margin: "0 0 8px" }}>Month 2: Set up auto-debit for the full statement amount. Check that your bank account is linked. Continue using the card for regular purchases only. Do not use it for anything you would not buy with cash.</p>
        <p style={{ margin: "0 0 8px" }}>Month 3: Check your credit report for free at CIBIL.com (one free report per year per bureau). Confirm your card activity is being reported correctly. Keep utilization below 30%.</p>
        <p style={{ margin: 0 }}>After 12 months: revisit your card. If your spending has grown or shifted (more Amazon, more dining, more travel), use <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe</Link> to find a more optimized second card to add.</p>
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
        Assure Fintech is an independent financial comparison site. This guide is for educational purposes only and does not constitute financial advice. CIBIL score impacts, interest rates, and card recommendations are based on publicly available data as of June 2026. Actual card terms, approval criteria, and interest rates vary by bank and applicant profile. Consult the issuing bank's MITC document before applying. Assure Fintech receives no payment from card issuers for editorial coverage.
      </footer>
    </main>
  );
}
