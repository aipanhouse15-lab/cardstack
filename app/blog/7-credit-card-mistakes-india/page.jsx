import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "7 Credit Card Mistakes Indians Make (And How to Fix Each One)",
  description: "7 Credit Card Mistakes Indians Make (And How to Fix Each One)",
  alternates: { canonical: "/blog/7-credit-card-mistakes-india" },
  openGraph: {
    title: "7 Credit Card Mistakes Indians Make (And How to Fix Each One)",
    description: "7 Credit Card Mistakes Indians Make (And How to Fix Each One)",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/7-credit-card-mistakes-india
// Template: Numbered myth-buster / "you're probably doing this wrong"
// Color: #dc2626 | Updated: June 4, 2026

const COLOR = "#dc2626";
const UPDATED = "June 4, 2026";

const SvgMinimumDueTrap = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Compound interest trap: paying minimum due on ₹50,000 balance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Minimum Due Trap: ₹50,000 balance at 3.5%/month</text>
    {[
      { label: "Month 1", interest: 1750, y: 60 },
      { label: "Month 3", interest: 5460, y: 100 },
      { label: "Month 6", interest: 11200, y: 140 },
      { label: "Month 12", interest: 21000, y: 180 },
    ].map((d, i) => {
      const barW = Math.round((d.interest / 21000) * 380);
      return (
        <g key={i}>
          <text x="36" y={d.y + 14} fontSize="12" fill="var(--text-muted)" fontFamily="system-ui">{d.label}</text>
          <rect x="130" y={d.y} width={barW} height="22" fill={i === 3 ? COLOR : "#fca5a5"} rx="3" />
          <text x={130 + barW + 8} y={d.y + 15} fontSize="12" fontWeight="700" fill="var(--text)" fontFamily="system-ui">₹{d.interest.toLocaleString("en-IN")}</text>
        </g>
      );
    })}
    <text x="36" y="240" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">*Cumulative interest accrued. Actual amount varies by card issuer compounding method.</text>
  </svg>
);

const SvgCibilAgeImpact = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Credit age impact on CIBIL score when closing old card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Closing an old card: what actually happens to your CIBIL score</text>
    <rect x="36" y="60" width="200" height="50" fill="#d1fae5" rx="6" />
    <text x="136" y="80" fontSize="12" fontWeight="700" fill="#166534" textAnchor="middle" fontFamily="system-ui">Before closing</text>
    <text x="136" y="98" fontSize="18" fontWeight="800" fill="#166534" textAnchor="middle" fontFamily="system-ui">760</text>
    <text x="290" y="90" fontSize="22" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">to</text>
    <rect x="320" y="60" width="200" height="50" fill="var(--raise)" rx="6" />
    <text x="420" y="80" fontSize="12" fontWeight="700" fill={COLOR} textAnchor="middle" fontFamily="system-ui">After closing 7yr old card</text>
    <text x="420" y="98" fontSize="18" fontWeight="800" fill={COLOR} textAnchor="middle" fontFamily="system-ui">710-730</text>
    <text x="560" y="90" fontSize="13" fill="var(--text-muted)" fontFamily="system-ui">30-50 pt drop</text>
    <text x="36" y="160" fontSize="12" fill="var(--text-muted)" fontFamily="system-ui">Credit age = 15% of your CIBIL score. Closed card disappears from report in ~7 years.</text>
    <text x="36" y="180" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">Source: TransUnion CIBIL methodology, June 2026</text>
  </svg>
);

const SvgUtilizationSpread = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Concentrating spend on one card vs spreading across two cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Same ₹40,000 spend. Very different utilization.</text>
    <rect x="36" y="56" width="290" height="130" fill="var(--raise)" rx="8" />
    <text x="181" y="80" fontSize="12" fontWeight="700" fill={COLOR} textAnchor="middle" fontFamily="system-ui">Bad: One card (₹50,000 limit)</text>
    <rect x="56" y="94" width="250" height="22" fill="var(--raise)" rx="4" />
    <rect x="56" y="94" width="200" height="22" fill={COLOR} rx="4" />
    <text x="181" y="132" fontSize="13" fontWeight="800" fill={COLOR} textAnchor="middle" fontFamily="system-ui">Utilization: 80%</text>
    <text x="181" y="152" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Expected CIBIL drop: 40-60 pts</text>
    <text x="181" y="170" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">₹40,000 on 1 card</text>
    <rect x="394" y="56" width="290" height="130" fill="#d1fae5" rx="8" />
    <text x="539" y="80" fontSize="12" fontWeight="700" fill="#166534" textAnchor="middle" fontFamily="system-ui">Good: Two cards (₹50K each = ₹1L total)</text>
    <rect x="414" y="94" width="250" height="22" fill="#d1fae5" rx="4" />
    <rect x="414" y="94" width="100" height="22" fill="#16a34a" rx="4" />
    <text x="539" y="132" fontSize="13" fontWeight="800" fill="#16a34a" textAnchor="middle" fontFamily="system-ui">Utilization: 40%</text>
    <text x="539" y="152" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Much lower CIBIL impact</text>
    <text x="539" y="170" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">₹20,000 on each card</text>
  </svg>
);

const SvgForexMarkup = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Forex markup fee comparison across Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Forex Markup Fees on a $1,000 international transaction (approx ₹83,500)</text>
    {[
      { bank: "HDFC Regalia / Infinia", markup: "2%", rupees: "1,670", barW: 100 },
      { bank: "ICICI Amazon Pay", markup: "3.5%", rupees: "2,922", barW: 175 },
      { bank: "Niyo Global / IDFC WOW", markup: "0%", rupees: "0", barW: 4 },
      { bank: "Axis Forex Online Card", markup: "0%", rupees: "0", barW: 4 },
    ].map((d, i) => (
      <g key={i}>
        <text x="36" y={70 + i * 32} fontSize="12" fill="var(--text)" fontFamily="system-ui">{d.bank}</text>
        <rect x="280" y={55 + i * 32} width={d.barW} height="18" fill={i < 2 ? COLOR : "rgba(62,224,143,.35)"} rx="3" />
        <text x="460" y={70 + i * 32} fontSize="12" fontWeight="700" fill="var(--text)" fontFamily="system-ui">{d.markup} markup = ₹{d.rupees} extra</text>
      </g>
    ))}
  </svg>
);

const SvgCashAdvanceCost = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="True cost breakdown of a ₹10,000 credit card cash advance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">True cost of a ₹10,000 credit card cash advance (repaid in 30 days)</text>
    <rect x="36" y="56" width="160" height="50" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" rx="6" />
    <text x="116" y="76" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Cash advance fee</text>
    <text x="116" y="94" fontSize="15" fontWeight="800" fill={COLOR} textAnchor="middle" fontFamily="system-ui">₹250-500</text>
    <rect x="216" y="56" width="160" height="50" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" rx="6" />
    <text x="296" y="76" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Interest (from day 1)</text>
    <text x="296" y="94" fontSize="15" fontWeight="800" fill={COLOR} textAnchor="middle" fontFamily="system-ui">₹350-420</text>
    <rect x="396" y="56" width="180" height="50" fill="var(--raise)" stroke={COLOR} strokeWidth="1.5" rx="6" />
    <text x="486" y="76" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Total effective cost</text>
    <text x="486" y="96" fontSize="16" fontWeight="800" fill={COLOR} textAnchor="middle" fontFamily="system-ui">₹600-920 on ₹10K</text>
    <text x="36" y="150" fontSize="12" fill="var(--text-muted)" fontFamily="system-ui">No grace period. Interest starts from the ATM transaction second. No reward points earned on cash advances.</text>
  </svg>
);

const SvgRewardExpiry = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Reward point expiry timelines across major Indian banks" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Reward Point Expiry: How long before your points vanish?</text>
    {[
      { bank: "HDFC Bank", expiry: "2-3 years from earn date" },
      { bank: "Axis Bank", expiry: "3 years from earn date" },
      { bank: "SBI Cards", expiry: "2 years from earn date" },
      { bank: "Amex", expiry: "No expiry (if card active)" },
      { bank: "ICICI Bank", expiry: "3 years from earn date" },
    ].map((d, i) => (
      <g key={i}>
        <text x="36" y={65 + i * 22} fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">{d.bank}</text>
        <text x="200" y={65 + i * 22} fontSize="12" fill="var(--text-muted)" fontFamily="system-ui">{d.expiry}</text>
        {d.expiry.includes("No expiry") && (
          <rect x="188" y={52 + i * 22} width="240" height="18" fill="#d1fae5" rx="3" opacity="0.5" />
        )}
      </g>
    ))}
  </svg>
);

const SvgSpendCap = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Accelerated reward earn category caps on popular Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Category Spend Caps: the small print that limits your rewards</text>
    <text x="36" y="58" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Card</text>
    <text x="220" y="58" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Accelerated Category</text>
    <text x="460" y="58" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Cap Per Month</text>
    {[
      { card: "HDFC Millennia", cat: "Amazon, Flipkart, Swiggy", cap: "₹10,000 spend max" },
      { card: "Axis ACE", cat: "Bill pay via GPay", cap: "₹5,000 spend max" },
      { card: "SBI Cashback", cat: "Online spends", cap: "₹10,000 spend max" },
      { card: "ICICI Amazon Pay", cat: "Amazon purchases", cap: "No cap (1.5% base)" },
    ].map((d, i) => (
      <g key={i}>
        <rect x="24" y={68 + i * 28} width="672" height="26" fill={i % 2 === 0 ? "transparent" : "var(--raise)"} rx="2" />
        <text x="36" y={86 + i * 28} fontSize="12" fill="var(--text)" fontFamily="system-ui">{d.card}</text>
        <text x="220" y={86 + i * 28} fontSize="12" fill="var(--text-muted)" fontFamily="system-ui">{d.cat}</text>
        <text x="460" y={86 + i * 28} fontSize="12" fontWeight="600" fill={COLOR} fontFamily="system-ui">{d.cap}</text>
      </g>
    ))}
  </svg>
);

export default function BlogCreditCardMistakesIndia() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Is paying the minimum due on a credit card really that bad?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Indian banks charge 3-3.75% per month on the outstanding balance after the due date. On a ₹50,000 balance, that is ₹1,750 in interest in the first month alone. If you keep paying only the minimum, you will end up paying more than the original amount in interest within a year. Always pay the full statement balance if you can." } },
      { "@type": "Question", "name": "Does closing an old credit card hurt my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, especially if it is one of your oldest cards. Credit age makes up 15% of your CIBIL score. Closing a 7-year-old card can drop your score by 30-50 points depending on how many other cards you have. If the card has no annual fee, keep it open and use it occasionally." } },
      { "@type": "Question", "name": "What is the safe credit utilization ratio for a good CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "Keep it under 30% overall and under 30% per individual card. Ideally aim for 10-20% for the best CIBIL impact. On a ₹1 lakh total credit limit, keep your total outstanding below ₹30,000 at any point in the billing cycle." } },
      { "@type": "Question", "name": "Do reward points expire on Indian credit cards?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most do. HDFC points expire in 2-3 years, SBI in 2 years, Axis in 3 years. Amex Membership Rewards points do not expire as long as your card is active. Set a calendar reminder every 6 months to check your point balance and redeem before they lapse." } },
      { "@type": "Question", "name": "Can I use my credit card to withdraw cash at an ATM?", "acceptedAnswer": { "@type": "Answer", "text": "You can, but it is almost always a bad idea. Banks charge a cash advance fee of 2.5-3.5% of the amount (minimum ₹300-500), plus interest starts accruing from day one at 3-3.75% per month. There is no grace period. On ₹10,000 withdrawn and repaid in 30 days, your effective cost is ₹600-920." } },
      { "@type": "Question", "name": "Which Indian credit cards have zero forex markup fees?", "acceptedAnswer": { "@type": "Answer", "text": "Niyo Global, IDFC FIRST WOW, and Axis Forex Online cards offer zero markup. Several premium cards like HDFC Infinia also offer lower markup (1-2%). For frequent international travelers, using a zero-markup card on all foreign currency transactions can save ₹2,500-3,000 per $1,000 spent compared to a standard card." } },
      { "@type": "Question", "name": "What happens if I miss a credit card payment completely?", "acceptedAnswer": { "@type": "Answer", "text": "Missing even one payment gets reported to CIBIL and can drop your score by 50-100 points. Late payments stay on your CIBIL report for up to 3 years. Banks also charge a late payment fee of ₹500-1,300 depending on the outstanding amount. Pay at least the minimum due on time, always." } },
      { "@type": "Question", "name": "Are category spend caps mentioned upfront by banks?", "acceptedAnswer": { "@type": "Answer", "text": "Often not clearly. Banks typically bury caps in the Most Important Terms and Conditions document or the product page footnotes. Always check the card T&C before assuming you will earn accelerated rewards on unlimited spend. Many cards cap the bonus earn at ₹5,000-10,000 spend per month." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "7 Credit Card Mistakes Indians Make (And How to Fix Each One)", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
    { "@type": "ListItem", position: 3, name: "7 Credit Card Mistakes Indians Make", item: "https://assurefintech.com/blog/7-credit-card-mistakes-india" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1C0404, #460C0C, #1C0404)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #dc262622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Common Mistakes
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            7 Credit Card Mistakes Indians Make (And How to Fix Each One)
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 20 }}>
            You probably think you are using your credit card correctly. You are likely not. Here are the seven mistakes that quietly cost Indian cardholders thousands of rupees every year.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / 7 Credit Card Mistakes Indians Make</nav>
<section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #1: Paying Only the Minimum Due</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Banks love this one. The minimum due looks reasonable at around 5% of outstanding, so you pay it and feel like you have done the right thing.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>What actually happens: the remaining 95% balance starts attracting interest at 3-3.75% per month from the day after your due date. On a ₹50,000 balance, that is roughly ₹1,750 in month one alone, and it compounds.</p>
        <SvgMinimumDueTrap />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>By month 12, if you have only ever paid the minimum, you have paid over ₹21,000 in interest while still owing close to the original amount. The math is brutal.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The fix is simple but requires discipline: pay the full statement balance every single month. If you cannot, treat it as a personal loan at 42% annual interest and prioritize clearing it before anything else.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #2: Closing Your Oldest Credit Card</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>You upgraded to a premium card, so you close the old basic one. Feels logical. CIBIL disagrees.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Credit age makes up 15% of your CIBIL score. When you close a card you have had for 7 years, that history does not disappear immediately but will eventually drop off your report. Your average credit age shrinks, and so does your score.</p>
        <SvgCibilAgeImpact />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If the old card has no annual fee, the better move is to keep it open. Use it once every 2-3 months for a small Swiggy order or a utility bill to keep it active and avoid the bank closing it due to inactivity.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Read more on how this affects your score in our <Link href="/blog/cibil-score-101-india" style={{ color: COLOR }}>CIBIL Score 101 guide</Link>.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #3: Piling All Spend on One Card</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you have two cards and charge everything to one, you are hurting your utilization ratio even if you clear it in full every month.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>CIBIL looks at your balance relative to your credit limit at the time your bank reports it, which is usually your statement date, not your payment date. A ₹40,000 charge on a ₹50,000 limit card is 80% utilization, which can drop your score by 40-60 points.</p>
        <SvgUtilizationSpread />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Spread your spend across cards to keep each card utilization below 30%. Our <Link href="/blog/credit-utilization-ratio-guide" style={{ color: COLOR }}>credit utilization guide</Link> covers the exact math and how to fix this fast.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #4: Letting Reward Points Expire</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Reward points feel like free money until they silently expire. Most Indian banks do not send a clear warning before points lapse.</p>
        <SvgRewardExpiry />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>1 lakh HDFC points equals roughly ₹25,000 in value. If you forget to redeem, that is real money gone. Log into your card portal every 6 months, check your points balance, and either redeem or transfer to a partner program.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Our <Link href="/blog/how-reward-points-work-india" style={{ color: COLOR }}>guide on reward points</Link> breaks down expiry rules and the smartest redemption options across major Indian banks.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #5: Ignoring Forex Markup on International Spends</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Using your regular HDFC or ICICI card internationally? You are paying an invisible tax called forex markup, usually 3-3.5% on every transaction, on top of the exchange rate.</p>
        <SvgForexMarkup />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>On a ₹83,500 ($1,000) purchase, that is up to ₹2,922 in extra fees for nothing. Zero-markup cards like Niyo Global or IDFC FIRST WOW cost you nothing extra on the same transaction.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you travel internationally even once a year, a zero-markup card pays for itself on day one.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #6: Using Your Credit Card at an ATM</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Cash advance from a credit card is one of the most expensive financial products available to retail customers in India. It combines a flat fee with immediate interest at the highest possible rate.</p>
        <SvgCashAdvanceCost />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>There is no 30-day grace period. Interest starts from the moment you pull the cash out. On ₹10,000 repaid within 30 days, your total cost is ₹600-920. Annualized, that is over 72% per year.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Use a debit card for ATM withdrawals or explore a small personal loan via <Link href="/learn/loans" style={{ color: COLOR }}>our loans section</Link> if you are short on cash.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #7: Assuming Accelerated Rewards Have No Cap</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>That 5% cashback on Swiggy, the 4x points on fuel, the 10x on grocery apps — they almost always come with a monthly spend cap buried in the fine print.</p>
        <SvgSpendCap />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Once you hit the cap, the card quietly reverts to its base earn rate, often 1%. You might assume you are earning 5% on ₹30,000 of online spend but actually earn 5% on the first ₹10,000 and 1% on the rest.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Before choosing a card for a specific spend category, check the T&C for monthly caps. Use our <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link> to find which card gives you the best rate for your real spend pattern.</p>
      </section>

      <section style={{ background: "var(--raise)", border: `1px solid ${COLOR}`, borderRadius: 10, padding: "20px 24px", marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>What to Do Right Now</h2>
        <ol style={{ fontSize: 15, paddingLeft: 20, margin: 0, lineHeight: 2 }}>
          <li>Log into your card portal and check if you have any points expiring in the next 6 months.</li>
          <li>Pull up your last statement and check your utilization ratio per card: balance divided by credit limit.</li>
          <li>If you have an old basic card with no annual fee, do not close it. Use it once this month for anything small.</li>
          <li>Check if you have auto-pay set to minimum due. Switch it to full amount immediately.</li>
          <li>If you travel abroad, apply for one zero-forex-markup card before your next trip.</li>
        </ol>
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
        Related: <Link href="/blog/cibil-score-101-india" style={{ color: COLOR }}>CIBIL Score 101</Link> · <Link href="/blog/credit-utilization-ratio-guide" style={{ color: COLOR }}>Credit Utilization Ratio Guide</Link> · <Link href="/blog/how-reward-points-work-india" style={{ color: COLOR }}>How Reward Points Work</Link> · <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe Card Finder</Link>
      </p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Editorial note: Assure Fintech does not accept payment for favorable coverage. Interest rates, fees, and reward rates cited are sourced from bank websites and MITC documents as of June 2026 and may change. Verify current terms with your card issuer before making financial decisions. This article is for informational purposes only and does not constitute financial advice.
      </footer>
    </main>
    </>
  );
}
