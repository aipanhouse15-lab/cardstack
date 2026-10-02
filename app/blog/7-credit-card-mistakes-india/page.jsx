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
// Color: #dc2626 | Updated: September 26, 2026

const COLOR = "#dc2626";
const UPDATED = "October 2, 2026";

const SvgMinimumDueTrap = () => (
  <svg viewBox="0 0 720 264" role="img" aria-label="Compound interest trap: paying minimum due on ₹50,000 balance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
  <svg viewBox="0 0 720 204" role="img" aria-label="Credit age impact on CIBIL score when closing old card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
  <svg viewBox="0 0 720 282" role="img" aria-label="Forex markup fee comparison across Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
  <svg viewBox="0 0 720 217" role="img" aria-label="True cost breakdown of a ₹10,000 credit card cash advance" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
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
    <text x="36" y="150" fontSize="10" fill="var(--text-muted)" fontFamily="system-ui">No grace period. Interest starts from the ATM transaction second. No reward points earned on cash advances.</text>
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
  <svg viewBox="0 0 720 274" role="img" aria-label="Accelerated reward earn category caps on popular Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Category Spend Caps: the small print that limits your rewards</text>
    <text x="36" y="58" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Card</text>
    <text x="220" y="58" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Accelerated Category</text>
    <text x="460" y="58" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Reward Cap</text>
    {[
      { card: "HDFC Millennia", cat: "Named partner merchants", cap: "₹1,000/month cashback" },
      { card: "Axis ACE", cat: "GPay bills + listed partners", cap: "₹500/cycle combined" },
      { card: "SBI Cashback", cat: "Eligible online", cap: "₹2,000/cycle online" },
      { card: "ICICI Amazon Pay", cat: "Eligible Amazon Prime", cap: "No monthly cap (5%)" },
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
      { "@type": "Question", "name": "Why can paying only the minimum due become expensive?", "acceptedAnswer": { "@type": "Answer", "text": "The unpaid statement balance remains outstanding and can attract interest and charges under the card's MITC. RBI requires issuers to warn that minimum-only payments can stretch repayment over months or years with consequential interest. Pay the total due on time where possible; if you cannot, contact the issuer and review the APR and repayment options." } },
      { "@type": "Question", "name": "Does closing an old credit card hurt my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "There is no universal point change. Closing a card can change your available credit and the information lenders see; the effect depends on your overall report and scoring model. Compare the fee and account value, and ask the issuer about downgrade or closure terms rather than keeping an unsuitable product solely to protect a predicted score." } },
      { "@type": "Question", "name": "What is a safe credit utilisation ratio?", "acceptedAnswer": { "@type": "Answer", "text": "There is no single ratio that guarantees a score or approval. Lower balances relative to available limits can be viewed more favourably by lenders, but scoring models and underwriting differ. Pay on time, borrow only what you can repay and review your report for accuracy." } },
      { "@type": "Question", "name": "Do reward points expire on Indian credit cards?", "acceptedAnswer": { "@type": "Answer", "text": "Expiry varies by issuer, card and rewards programme. Check the current programme terms or account portal for expiry dates, redemption options, caps and transfer conditions; do not assume a point has a fixed cash value." } },
      { "@type": "Question", "name": "Can I use my credit card to withdraw cash at an ATM?", "acceptedAnswer": { "@type": "Answer", "text": "Usually cash advances carry a fee and interest from the transaction date, without the purchase interest-free period. The amount depends on the card's current MITC. Check the fee and rate before withdrawing, and compare alternatives." } },
      { "@type": "Question", "name": "How do I compare foreign-currency card costs?", "acceptedAnswer": { "@type": "Answer", "text": "Check the card's foreign-currency markup, network conversion, issuer fees, ATM or cash-advance charges and dynamic currency conversion at checkout. The combined cost—not just a zero-markup headline—determines the amount charged." } },
      { "@type": "Question", "name": "What happens if I miss a credit card payment?", "acceptedAnswer": { "@type": "Answer", "text": "Interest, charges and credit reporting follow the applicable RBI directions and your issuer's MITC. RBI directions say an account is reported as past due, or penal charges levied, only when it remains past due for more than three days; charges are based on the outstanding after the due date. Contact the issuer promptly if a payment is missed." } },
      { "@type": "Question", "name": "Are accelerated reward caps the same on every card?", "acceptedAnswer": { "@type": "Answer", "text": "No. Caps can differ by benefit, merchant, card variant and statement or calendar period. Read the current issuer terms and track eligible spend before estimating rewards." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "7 Credit Card Mistakes Indians Make (And How to Fix Each One)", author: { "@type": "Person", name: "Ash" }, datePublished: "2026-06-04", dateModified: "2026-10-02", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.assurefintech.com/blog/" },
    { "@type": "ListItem", position: 3, name: "7 Credit Card Mistakes Indians Make", item: "https://www.assurefintech.com/blog/7-credit-card-mistakes-india" },
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
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            You probably think you are using your credit card correctly. You are likely not. Here are the seven mistakes that quietly cost Indian cardholders thousands of rupees every year.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / 7 Credit Card Mistakes Indians Make</nav>
<section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #1: Paying Only the Minimum Due</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The minimum due is not a recommended repayment plan. The remaining statement balance can attract interest and fees under your card's current MITC, and interest-free purchase treatment may be suspended while a prior balance remains unpaid.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>RBI requires card issuers to explain that minimum-only payments can prolong repayment over months or years and increase interest. Use the APR, balance and repayment schedule in your own statement to understand the cost; rates and minimum-due formulas differ by issuer.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Where possible, pay the total amount due by the due date. If cash flow makes that impossible, contact the issuer and avoid new borrowing until you understand the cost and repayment plan.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #2: Closing Your Oldest Credit Card</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Closing an account can change your available credit and the account information lenders consider, but there is no reliable universal score drop or rule that every old card should stay open.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Compare the card's annual fee, benefits, security and your ability to manage it. Ask the issuer whether a fee-free downgrade is available, check any closure process and keep records of the final statement and closure confirmation.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Read more on how this affects your score in our <Link href="/blog/cibil-score-101-india" style={{ color: COLOR }}>CIBIL Score 101 guide</Link>.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #3: Piling All Spend on One Card</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Balances reported by lenders and your available limits can matter to a lender's assessment. The reporting date and scoring effect are not identical for every account or scoring model.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Do not spend more or juggle balances just to hit a universal percentage target. Pay on time, stay within a repayment amount you can afford, and review your credit report if the balance shown appears wrong. Our <Link href="/blog/credit-utilization-ratio-guide" style={{ color: COLOR }}>credit utilization guide</Link> explains the concepts and limits of simple ratios.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #4: Letting Reward Points Expire</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Expiry rules and redemption values vary by card and rewards programme. A point balance is not cash: check the issuer's current terms for expiry, redemption fees, transfer ratios, caps and eligible options.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Review your account before a planned redemption and compare the value you can actually use. Our <Link href="/blog/how-reward-points-work-india" style={{ color: COLOR }}>guide on reward points</Link> explains why a single rupee value cannot be applied across cards.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Our <Link href="/blog/how-reward-points-work-india" style={{ color: COLOR }}>guide on reward points</Link> breaks down expiry rules and the smartest redemption options across major Indian banks.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #5: Ignoring Forex Markup on International Spends</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Foreign-currency transactions can include issuer markup, network conversion and taxes; the total depends on the card and transaction route. Dynamic currency conversion at a merchant or ATM can add a separate conversion cost.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Check the current fee schedule for your exact card and compare the final currency conversion before travelling. A zero-markup claim does not automatically remove every other foreign-transaction or cash fee.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #6: Using Your Credit Card at an ATM</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>A card cash advance usually has a separate fee and interest treatment; the purchase grace period generally does not apply. The exact fee, rate and minimum amount are in the card's MITC.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Check the fee schedule before withdrawing and repay as soon as possible if you have already taken an advance. Do not rely on a generic rupee example in place of your issuer's charges.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Use a debit card for ATM withdrawals or explore a small personal loan via <Link href="/learn/loans" style={{ color: COLOR }}>our loans section</Link> if you are short on cash.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Mistake #7: Assuming Accelerated Rewards Have No Cap</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Bonus rewards may have caps, exclusions, minimum transaction values or merchant-category requirements. After a cap is reached, the earn rate can change—or a purchase may no longer qualify at all—depending on the terms.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Before estimating value, read the current card and offer rules for the exact category and period. Use our <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link> as an illustration, then compare with your issuer's terms.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Before choosing a card for a specific spend category, check the T&C for monthly caps. Use our <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link> to find which card gives you the best rate for your real spend pattern.</p>
      </section>
      <section style={{ background: "var(--raise)", border: `1px solid ${COLOR}`, borderRadius: 10, padding: "20px 24px", marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>What to Do Right Now</h2>
        <ol style={{ fontSize: 15, paddingLeft: 20, margin: 0, lineHeight: 2 }}>
          <li>Check your card's statement for the total due, payment date, APR and any outstanding balance.</li>
          <li>Review the current rewards terms before redeeming or counting a benefit.</li>
          <li>Compare annual fees and benefits before keeping, downgrading or closing a card.</li>
          <li>Set a payment reminder or suitable autopay instruction and verify that payments post correctly.</li>
          <li>Before travel, compare foreign-currency and cash transaction charges on the cards you already hold.</li>
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
        <strong>Sources and review:</strong> RBI <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300" target="_blank" rel="noopener noreferrer">Credit Card and Debit Card Directions</a> and <a href="https://www.cibil.com/blog/what-is-cibil-score" target="_blank" rel="noopener noreferrer">CIBIL's current credit-score guidance</a>. Product fees and rewards depend on the exact card and current issuer terms. Reviewed October 2, 2026. This educational article is not financial advice.
      </footer>
    </main>
    </>
  );
}
