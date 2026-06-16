import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Are Your Credit Card Reward Points Taxable? It Depends on One Thing Banks Never Tell You",
  description: "For most personal card users: no. But business card rewards, referral bonuses, and lucky draw prizes are taxable. The complete tax treatment explained.",
  alternates: { canonical: "/learn/tax/tax-on-credit-card-rewards" },
  openGraph: {
    title: "Are Your Credit Card Reward Points Taxable? It Depends on One Thing Banks Never Tell You",
    description: "For most personal card users: no. But business card rewards, referral bonuses, and lucky draw prizes are taxable. The complete tax treatment explained.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/tax/tax-on-credit-card-rewards
// Template: Unique niche explainer — "the answer is complicated"
// Color: #16a34a | Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

const SvgTaxabilityFlowchart = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Flowchart showing when credit card reward points are taxable including business cards cash rewards over 50000 and when they are not taxable including personal card points redeemed for merchandise" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ARE YOUR CREDIT CARD REWARDS TAXABLE? · DECISION FLOWCHART</text>
    <rect x="280" y="35" width="160" height="36" fill={COLOR} rx="8" />
    <text x="360" y="57" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">What type of card?</text>
    <path d="M 280 53 L 140 95" stroke="var(--border)" strokeWidth="2" />
    <path d="M 440 53 L 580 95" stroke="var(--border)" strokeWidth="2" />
    <text x="185" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Personal card</text>
    <text x="535" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Business card</text>
    <rect x="40" y="95" width="200" height="36" fill={COLOR} rx="8" opacity="0.85" />
    <text x="140" y="117" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Rewards type?</text>
    <rect x="480" y="95" width="200" height="36" fill="#dc2626" rx="8" opacity="0.85" />
    <text x="580" y="113" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">TAXABLE</text>
    <text x="580" y="125" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff">Expense deductibility rules apply</text>
    <path d="M 40 113 L 40 160" stroke="var(--border)" strokeWidth="2" />
    <path d="M 240 113 L 240 160" stroke="var(--border)" strokeWidth="2" />
    <text x="40" y="153" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Points / cashback on spend</text>
    <text x="160" y="153" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Cash reward / voucher as prize</text>
    <rect x="0" y="160" width="120" height="36" fill={COLOR} rx="8" opacity="0.85" />
    <text x="60" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">NOT TAXABLE</text>
    <rect x="140" y="160" width="180" height="36" fill="var(--raise)" rx="8" opacity="0.85" />
    <text x="230" y="178" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">ABOVE ₹50K?</text>
    <path d="M 140 178 L 80 220" stroke="var(--border)" strokeWidth="2" />
    <path d="M 320 178 L 380 220" stroke="var(--border)" strokeWidth="2" />
    <text x="100" y="213" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Under ₹50,000</text>
    <text x="350" y="213" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Above ₹50,000</text>
    <rect x="0" y="220" width="160" height="36" fill={COLOR} rx="8" opacity="0.85" />
    <text x="80" y="242" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">Generally safe</text>
    <rect x="320" y="220" width="160" height="36" fill="#dc2626" rx="8" opacity="0.85" />
    <text x="400" y="238" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">TDS + taxable</text>
    <text x="400" y="250" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff">as income from other sources</text>
    <text x="20" y="290" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">CBDT's position: rewards from spend are "discount/rebate" not income. Gifts/prizes are income. The ₹50K threshold is from Section 56(2)(x) — gifts above ₹50K from non-relatives are taxable.</text>
  </svg>
);

const SvgRewardTypeMatrix = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Matrix of different credit card reward types and their tax treatment including points for spend cashback welcome bonus referral rewards and milestone benefits" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">CREDIT CARD REWARD TYPE vs TAX TREATMENT · CBDT INTERPRETATION AS OF JUNE 2026</text>
    {[{ h: "Reward Type" }, { h: "Tax Status" }, { h: "Why" }, { h: "Risk Level" }].map(({ h }, i) => {
      const xs = [20, 210, 330, 600];
      return <rect key={h} x={xs[i]} y="35" width={[180, 110, 260, 120][i]} height="24" fill={COLOR}><text x={xs[i] + [180, 110, 260, 120][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Reward points earned on purchases", "NOT TAXABLE", "Considered discount/rebate on spend", "Low"],
      ["Cashback on transactions", "NOT TAXABLE", "Rebate on purchase price, not income", "Low"],
      ["Welcome bonus (points on first use)", "GREY AREA", "Not linked to spend — closer to a gift", "Moderate"],
      ["Referral bonus (points for referring)", "TAXABLE if >₹50K", "Income from activity, not linked to spend", "Moderate-High"],
      ["Milestone reward (spend ₹5L get gift)", "GREY AREA", "Linked to spend but given as 'gift'", "Moderate"],
      ["Annual fee refund as points", "NOT TAXABLE", "Rebate/waiver on fee charged", "Low"],
      ["High-value redemption (business class)", "GREY AREA", "Points as currency — complex treatment", "Moderate"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 24} width={700} height="22" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 210, 330, 600];
          const isGood = cell === "NOT TAXABLE" || cell === "Low";
          const isBad = cell.includes("TAXABLE") || cell === "Moderate-High" || cell === "High";
          const isGrey = cell.includes("GREY");
          return <text key={ci} x={xs[ci] + 5} y={74 + ri * 24} fontFamily="system-ui" fontSize="10" fill={isGood ? COLOR : isBad ? "#dc2626" : isGrey ? "#f59e0b" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="235" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">CBDT has not issued specific circulars on every scenario. The "discount vs income" distinction is the operative principle. When in doubt, consult a CA — especially for rewards above ₹50K annually.</text>
  </svg>
);

const SvgHighValueRedemption = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="High value credit card redemption risk zones showing scenarios where IT department might scrutinize large reward redemptions especially on business cards" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HIGH-VALUE REDEMPTION RISK ZONES · WHEN IT SCRUTINY BECOMES POSSIBLE</text>
    {[
      { scenario: "Redeeming ₹5L+ in flight miles on personal card", risk: "LOW", reason: "Points earned on personal spend, redeemed for travel. Discount on spend.", color: COLOR },
      { scenario: "Business card: ₹2L annual cashback on company expenses", risk: "HIGH", reason: "Business card rewards are company's, not employee's. Separate tax treatment.", color: "#dc2626" },
      { scenario: "Referral program earning ₹1L in points/cash", risk: "MODERATE", reason: "Income from activity unrelated to your personal spend. Closer to income.", color: "#f59e0b" },
      { scenario: "Credit card 'lucky draw' prize / contest reward", risk: "HIGH", reason: "Prize from contest = income. TDS at 30% by the card company if above ₹10K.", color: "#dc2626" },
      { scenario: "Reward points transferred/sold to another person", risk: "VERY HIGH", reason: "Points monetization = taxable income. Most card T&Cs prohibit this too.", color: "#7f1d1d" },
    ].map(({ scenario, risk, reason, color }, i) => (
      <g key={scenario}>
        <rect x="20" y={38 + i * 30} width={700} height="24" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={54 + i * 30} fontFamily="system-ui" fontSize="10" fill="var(--text)">{scenario}</text>
        <rect x="430" y={40 + i * 30} width="60" height="20" fill={color} rx="3" />
        <text x="460" y={54 + i * 30} textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#fff">{risk}</text>
        <text x="500" y={54 + i * 30} fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">{reason.slice(0, 55)}</text>
      </g>
    ))}
    <text x="20" y="195" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">The safest position: treat all credit card rewards as tax-free (current CBDT interpretation). The risky position: large referral earnings, business card cashback, or contest prizes — declare these as income from other sources.</text>
  </svg>
);

const SvgPracticalAdvice = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Practical tax advice for credit card reward holders showing what to declare what is safe to ignore and what needs CA consultation" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">PRACTICAL GUIDE: WHAT TO DECLARE VS WHAT IS SAFE TO IGNORE</text>
    <rect x="20" y="38" width="320" height="120" fill={COLOR} rx="8" opacity="0.08" stroke={COLOR} strokeWidth="1" />
    <text x="180" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>SAFE TO IGNORE (No Declaration)</text>
    {["Reward points on personal card spend", "Cashback on transactions (credit card statement)", "Annual fee waivers credited as points", "Welcome points on card activation"].map((t, i) => (
      <text key={t} x="30" y={80 + i * 18} fontFamily="system-ui" fontSize="10" fill="var(--text)">✓ {t}</text>
    ))}
    <rect x="380" y="38" width="320" height="120" fill="#dc2626" rx="8" opacity="0.08" stroke="#dc2626" strokeWidth="1" />
    <text x="540" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#dc2626">DECLARE AS INCOME</text>
    {["Referral cash rewards above ₹5,000 (cumulative)", "Contest/lucky draw prizes from card company", "Business card cashback (belongs to employer)", "Points sold or transferred for cash"].map((t, i) => (
      <text key={t} x="390" y={80 + i * 18} fontFamily="system-ui" fontSize="10" fill="var(--text)">✗ {t}</text>
    ))}
    <text x="20" y="175" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Middle ground: if your annual reward accumulation (all forms) exceeds ₹50K, get a CA to review. Below ₹50K from personal card spend: current practice is to not declare, aligned with CBDT's "discount" interpretation.</text>
  </svg>
);

const SvgBusinessCardTax = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Business credit card reward tax treatment showing that rewards on company expenses belong to the company not the employee and must be declared as business income or employee perquisite" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">BUSINESS CARD REWARDS: THE TAX TREATMENT MOST CORPORATES IGNORE</text>
    <rect x="20" y="38" width="680" height="120" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" rx="8" />
    <text x="30" y="60" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">Situation: Employee uses company credit card for business expenses, accumulates 2L reward points, redeems for personal travel.</text>
    <text x="30" y="82" fontFamily="system-ui" fontSize="12" fill="var(--text)">Tax position: Points accumulated on company spending are technically the company's assets. When an employee personally redeems them, it's a perquisite — taxable as salary.</text>
    <text x="30" y="100" fontFamily="system-ui" fontSize="12" fill="var(--text)">How it's actually handled: Almost no Indian company tracks this. Card companies don't issue Form 26AS or TDS certificates for reward redemptions.</text>
    <text x="30" y="118" fontFamily="system-ui" fontSize="12" fill="var(--text)">Safe approach: If your employer gives you a corporate card, clarify their policy on personal redemption of business card rewards. Some companies have explicit policies allowing or prohibiting this.</text>
    <text x="30" y="136" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#dc2626">Practical reality: This is a grey area. The risk of scrutiny is low for moderate amounts. For frequent flyer points worth ₹5L+ redeemed annually: consult a CA.</text>
    <text x="20" y="170" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Companies with formal expense reimbursement policies (travel cards with direct billing) don't create this issue — the card company invoices the company directly and employees don't accumulate personal points.</text>
  </svg>
);

export default function PageTaxOnCreditCardRewards() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Are credit card reward points taxable in India?", "acceptedAnswer": { "@type": "Answer", "text": "Generally no, for personal credit card reward points earned on everyday spending. The CBDT (Central Board of Direct Taxes) treats reward points as a discount or rebate on the purchase price, not as income. This means cashback, reward points, and airline miles earned on personal card spending are not taxable. The exception: rewards received as prizes (contests, lucky draws), referral bonuses above certain amounts, and rewards on business card spending that belongs to your employer." } },
      { "@type": "Question", "name": "Do I need to declare credit card cashback in my ITR?", "acceptedAnswer": { "@type": "Answer", "text": "For standard cashback on personal card spending (1-5% cashback on Swiggy, Amazon, fuel purchases), current CBDT interpretation classifies this as a purchase discount, not income. You don't need to declare it in your ITR. However, if you receive large referral bonuses (earning ₹20,000+ by referring friends), contest prizes, or cash rewards above ₹50,000 in a year from any single source, consult a CA about declaration under 'income from other sources'." } },
      { "@type": "Question", "name": "Is airport lounge access via credit card a taxable perquisite?", "acceptedAnswer": { "@type": "Answer", "text": "No, complimentary lounge access is generally not treated as a taxable perquisite for salaried employees. It's a card benefit tied to card membership — similar to free movie tickets or fuel surcharge waivers. The CBDT has not specifically ruled on this, but the prevailing practice is to not classify card membership benefits as taxable perquisites. The exception would be if your employer pays your credit card annual fee — that payment is a benefit-in-kind and potentially a perquisite." } },
      { "@type": "Question", "name": "What happens if I receive a prize of ₹1 lakh from a credit card lucky draw?", "acceptedAnswer": { "@type": "Answer", "text": "This is clearly taxable. Under Section 56(2)(vii), winnings from lotteries and similar games are taxable at 30% (plus surcharge and cess). Under Section 194B, TDS at 30% applies on winnings above ₹10,000 from lotteries, crossword puzzles, card games, and game shows. The credit card company should deduct TDS before paying you the prize. If they don't, you're still required to declare and pay tax on it in your ITR." } },
      { "@type": "Question", "name": "What is the ₹50,000 threshold for gift taxation?", "acceptedAnswer": { "@type": "Answer", "text": "Section 56(2)(x) of the Income Tax Act says that any sum of money received without consideration from a non-relative exceeding ₹50,000 in a financial year is taxable as income from other sources. Credit card companies are non-relatives. If the aggregate value of gifts/rewards received from credit card companies (excluding standard spend-based rewards) exceeds ₹50,000 in a year, it could technically be subject to this provision. For most personal credit card users, this threshold is never breached on reward-type (non-prize) income." } },
      { "@type": "Question", "name": "Are airline miles taxable in India?", "acceptedAnswer": { "@type": "Answer", "text": "Airline miles accumulated through personal credit card spending are treated similarly to reward points — as a discount or rebate — and are generally not taxable when redeemed for flights. The grey area: when miles are redeemed for business class tickets worth significantly more than economy (the 'upgrade benefit'), whether the value differential constitutes income is unclear. CBDT hasn't ruled specifically on miles. For high-frequency redeemers of premium travel, a CA consultation is worth the cost of certainty." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Are Credit Card Reward Points Taxable in India? The Answer Depends on One Thing", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Tax", item: "https://assurefintech.com/learn/tax/" },
    { "@type": "ListItem", position: 4, name: "Tax on Credit Card Rewards", item: "https://assurefintech.com/learn/tax/tax-on-credit-card-rewards" },
  ]};

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/tax" style={{ color: "inherit" }}>Tax</Link> / Tax on Credit Card Rewards</nav>
      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>TAX · CREDIT CARDS · REWARD POINTS</div>
      <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>Are Your Credit Card Reward Points Taxable? It Depends on One Thing Banks Never Tell You</h1>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>For most personal card users: no, rewards are not taxable. But business card rewards, referral bonuses, lucky draw prizes, and redemptions above ₹50,000 from non-spend sources are a different story.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>Last updated {UPDATED} · By Ash K · 8 min read</div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The CBDT Position: Rewards Are Discounts, Not Income</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The Central Board of Direct Taxes has never issued a comprehensive circular specifically on credit card rewards. This silence is itself the answer: the operating interpretation in practice (and accepted in most CA opinions) is that reward points earned on personal card spending are a form of rebate or discount on the purchase price — not income.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The logic: when you spend ₹100 and earn 5 reward points worth ₹5, you effectively paid ₹95 for the item. The ₹5 in rewards is not additional income — it's a reduction in your effective purchase cost. Airlines and hotels treat frequent flyer miles the same way: a discount on future purchases, not taxable income.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This interpretation has held up in the absence of contrary CBDT guidance. Until India's tax authority issues a specific circular saying otherwise, the "not taxable" position for personal card spend-based rewards is well-supported.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Decision Tree: When Do Rewards Become Taxable?</h2>
        <SvgTaxabilityFlowchart />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The key distinction is between rewards linked to your spending (discount/rebate treatment) versus rewards received as prizes, gifts, or compensation for an activity (income treatment). Spending rewards: not taxable. Non-spending rewards: potentially taxable.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Full Reward Type Matrix</h2>
        <SvgRewardTypeMatrix />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Referral rewards are the most overlooked risk. When HDFC Bank or Axis Bank gives you ₹2,000 for referring a friend who gets a card, that ₹2,000 is not linked to your spending — it's compensation for an activity (referral). Technically, this is income from other sources. Individual amounts are small, but heavy referrers accumulating ₹30,000-50,000/year in referral rewards are in grey territory.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Milestone bonuses (spend ₹5L in a year and get a free flight) are the other grey area. These are linked to spending but delivered as a separate gift rather than as accumulated points. Most tax practitioners treat them as spend-linked (not taxable) but the structure is different from regular reward points.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>High-Value Redemptions: Where Scrutiny Could Happen</h2>
        <SvgHighValueRedemption />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The IT department's focus area for credit card rewards is large-scale redemptions, not ₹500 cashback events. An individual redeeming ₹5L+ annually in flight miles or hotel stays via credit card points is unlikely to face scrutiny for personal card rewards — especially when those points were earned on documented credit card statements showing corresponding spend.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Contest winners and lucky draw recipients are different. Card companies are required to deduct TDS at 30% on contest winnings above ₹10,000 before payment. If you win a contest without TDS being deducted, you're responsible for declaring it. Check your Form 26AS — any TDS deducted by a card company will appear there.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Business Card: The Trap Most Corporate Employees Miss</h2>
        <SvgBusinessCardTax />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If you use a company credit card for business expenses and personally redeem the accumulated rewards: those rewards technically belong to your employer. The points were earned on the company's spending. When you personally redeem them, it's a perquisite — taxable as part of your salary under Section 17 of the Income Tax Act.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is widely ignored in practice, but it's the correct legal position. Some companies have written policies explicitly allowing personal redemption of corporate card rewards as a fringe benefit (in which case the company bears the perquisite tax). Many companies have no policy at all — employees redeem freely and no tax is paid.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Practical Guide: What to Declare</h2>
        <SvgPracticalAdvice />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For the vast majority of Indian credit card users earning standard reward points on groceries, travel, dining, and online shopping: you have nothing to declare. The "discount on purchase" interpretation is well-established and you're not at any meaningful tax risk.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For power users maximizing premium card rewards, earning referral income, or using corporate cards for personal redemptions: get a CA consultation once a year. The cost of a consultation (₹2,000-5,000) is trivial compared to the potential tax liability if you've been accumulating significant reward income without declaration.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link> for maximizing your credit card rewards legally and efficiently, and our <Link href="/learn/tax" style={{ color: COLOR }}>tax hub</Link> for related deductions and exemptions you might be missing.</p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/tax" style={{ color: COLOR }}>tax hub</Link> · <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C beyond the obvious</Link> · <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: tax interpretation based on Income Tax Act provisions and prevailing CA community practice as of {UPDATED}. CBDT has not issued specific guidance on credit card rewards. This is general information, not tax advice. Consult a CA for your specific situation.</footer>
    </main>
  );
}
