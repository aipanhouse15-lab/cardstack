import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "How Reward Points Actually Work in India: Earn Rates, Expiry, and Real Rupee Value",
  description: "How Reward Points Actually Work in India: Earn Rates, Expiry, and Real Rupee Value",
  alternates: { canonical: "/blog/how-reward-points-work-india" },
  openGraph: {
    title: "How Reward Points Actually Work in India: Earn Rates, Expiry, and Real Rupee Value",
    description: "How Reward Points Actually Work in India: Earn Rates, Expiry, and Real Rupee Value",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/how-reward-points-work-india
// Template: Educational explainer with real bank examples
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgEarnRateComparison = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Reward earn rates per ₹100 spent across major Indian credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="260" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Earn Rates: points or cashback per ₹100 spent (base rate, no bonus categories)</text>
    {[
      { card: "HDFC Infinia", rate: "5 pts / ₹150", val: "₹0.83-1.67/₹100", barW: 320 },
      { card: "Amex Platinum Travel", rate: "1 MR / ₹50", val: "₹0.50-2.00/₹100", barW: 300 },
      { card: "Axis Magnus", rate: "12 EDGE Pts / ₹200", val: "₹0.30-0.60/₹100", barW: 220 },
      { card: "HDFC Millennia", rate: "1 pt / ₹100", val: "₹0.25/₹100", barW: 160 },
      { card: "SBI SimplyCLICK", rate: "1 pt / ₹100", val: "₹0.25/₹100", barW: 160 },
      { card: "ICICI Amazon Pay", rate: "1.5% cashback", val: "₹1.50/₹100", barW: 260 },
    ].map((d, i) => (
      <g key={i}>
        <text x="36" y={68 + i * 32} fontSize="12" fill="var(--text)" fontFamily="system-ui">{d.card}</text>
        <rect x="220" y={54 + i * 32} width={d.barW} height="20" fill={COLOR} rx="3" opacity="0.75" />
        <text x="220" y={69 + i * 32} fontSize="11" fill="white" fontFamily="system-ui" dx="6">{d.rate}</text>
        <text x={220 + d.barW + 8} y={69 + i * 32} fontSize="11" fontWeight="700" fill="var(--text)" fontFamily="system-ui">{d.val}</text>
      </g>
    ))}
  </svg>
);

const SvgPointValue = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Rupee value of 1 reward point across HDFC, Axis, Amex, and SBI cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">What is 1 reward point actually worth? (June 2026)</text>
    <text x="36" y="56" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Bank / Program</text>
    <text x="260" y="56" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Statement Credit</text>
    <text x="420" y="56" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Vouchers / Portal</text>
    <text x="580" y="56" fontSize="12" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Miles Transfer</text>
    {[
      { prog: "HDFC Reward Points", stmt: "₹0.25", portal: "₹0.40-0.50", miles: "₹0.50-1.00+" },
      { prog: "Axis EDGE Points", stmt: "₹0.25", portal: "₹0.25", miles: "₹0.50-1.50+" },
      { prog: "Amex MR Points", stmt: "₹0.25", portal: "₹0.35", miles: "₹0.75-2.00+" },
      { prog: "SBI Reward Points", stmt: "₹0.25", portal: "₹0.25", miles: "N/A" },
      { prog: "Kotak PVR Points", stmt: "₹0.25", portal: "₹0.30", miles: "N/A" },
    ].map((d, i) => (
      <g key={i}>
        <rect x="24" y={64 + i * 26} width="672" height="24" fill={i % 2 === 0 ? "var(--raise)" : "white"} rx="2" />
        <text x="36" y={81 + i * 26} fontSize="12" fill="var(--text)" fontFamily="system-ui">{d.prog}</text>
        <text x="260" y={81 + i * 26} fontSize="12" fill="var(--text-muted)" fontFamily="system-ui">{d.stmt}</text>
        <text x="420" y={81 + i * 26} fontSize="12" fontWeight="600" fill={COLOR} fontFamily="system-ui">{d.portal}</text>
        <text x="580" y={81 + i * 26} fontSize="12" fontWeight="700" fill="#059669" fontFamily="system-ui">{d.miles}</text>
      </g>
    ))}
    <text x="36" y="205" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">Miles transfer value varies by program, route, and class. Statement credit is guaranteed; miles value is aspirational.</text>
  </svg>
);

const SvgSmartBuyComparison = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Value of 1 lakh HDFC points on statement credit vs SmartBuy portal" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">1,00,000 HDFC Reward Points: where you redeem matters enormously</text>
    <rect x="36" y="56" width="240" height="100" fill="var(--raise)" rx="8" />
    <text x="156" y="82" fontSize="12" fontWeight="700" fill={COLOR} textAnchor="middle" fontFamily="system-ui">Statement Credit</text>
    <text x="156" y="110" fontSize="28" fontWeight="800" fill={COLOR} textAnchor="middle" fontFamily="system-ui">₹25,000</text>
    <text x="156" y="132" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Guaranteed. Instant. No hassle.</text>
    <text x="300" y="110" fontSize="24" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">vs</text>
    <rect x="340" y="56" width="240" height="100" fill="#d1fae5" rx="8" />
    <text x="460" y="82" fontSize="12" fontWeight="700" fill="#059669" textAnchor="middle" fontFamily="system-ui">HDFC SmartBuy Portal</text>
    <text x="460" y="110" fontSize="28" fontWeight="800" fill="#059669" textAnchor="middle" fontFamily="system-ui">₹40,000+</text>
    <text x="460" y="132" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Amazon/Flipkart vouchers during offers</text>
    <text x="610" y="110" fontSize="13" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">60% more value</text>
    <text x="36" y="178" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">SmartBuy offer rates are not permanent. Voucher availability varies. Always check before redeeming large batches.</text>
  </svg>
);

const SvgExpiryTimeline = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Timeline showing when reward points expire across major Indian banks" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Reward Point Expiry Timelines (check your card agreement for exact terms)</text>
    <line x1="60" y1="100" x2="660" y2="100" stroke="var(--border)" strokeWidth="2" />
    {[0, 1, 2, 3].map(yr => (
      <g key={yr}>
        <line x1={60 + yr * 200} y1="94" x2={60 + yr * 200} y2="106" stroke="var(--border)" strokeWidth="2" />
        <text x={60 + yr * 200} y="120" fontSize="11" fill="var(--text-muted)" textAnchor="middle" fontFamily="system-ui">Year {yr}</text>
      </g>
    ))}
    {[
      { bank: "SBI Cards", expYr: 2, color: "#f59e0b" },
      { bank: "HDFC Bank", expYr: 2.5, color: COLOR },
      { bank: "Axis / ICICI", expYr: 3, color: "#0ea5e9" },
      { bank: "Amex MR", expYr: 3.8, color: "#059669" },
    ].map((d, i) => {
      const xPos = 60 + d.expYr * 200;
      return (
        <g key={i}>
          <text x="36" y={68 + i * 14} fontSize="10" fill="var(--text-muted)" textAnchor="start" fontFamily="system-ui">{d.bank}</text>
          {i < 3
            ? <circle cx={xPos} cy="100" r="7" fill={d.color} />
            : <text x={xPos} y="104" fontSize="18" fill={d.color} textAnchor="middle" fontFamily="system-ui">∞</text>
          }
        </g>
      );
    })}
    <text x="36" y="160" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">Amex MR points do not expire as long as your card remains active and in good standing.</text>
  </svg>
);

const SvgRedemptionValueGap = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Value gap between different reward point redemption options" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">10,000 HDFC points: how much you get depends entirely on how you redeem</text>
    {[
      { method: "Against statement balance", value: 2500, label: "₹2,500", color: "var(--dim)" },
      { method: "Product catalogue redemption", value: 1800, label: "₹1,800 (often poor value)", color: "#ef4444" },
      { method: "Amazon/Flipkart vouchers (SmartBuy)", value: 3500, label: "₹3,500", color: COLOR },
      { method: "Airline miles (IndiGo, Air India)", value: 4500, label: "₹4,500+ (if you actually fly)", color: "#059669" },
    ].map((d, i) => {
      const barW = Math.round((d.value / 4500) * 380);
      return (
        <g key={i}>
          <text x="36" y={68 + i * 42} fontSize="12" fill="var(--text)" fontFamily="system-ui">{d.method}</text>
          <rect x="36" y={74 + i * 42} width={barW} height="20" fill={d.color} rx="3" />
          <text x={36 + barW + 8} y={89 + i * 42} fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">{d.label}</text>
        </g>
      );
    })}
    <text x="36" y="208" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">Miles value assumes economy redemption. Premium cabin redemptions can reach ₹10,000+ per 10,000 points.</text>
  </svg>
);

const SvgAcceleratedEarn = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Accelerated reward earn rates by spend category across popular Indian cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Accelerated Earn Rates: where each card gives you extra points</text>
    <text x="36" y="56" fontSize="11" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Card</text>
    <text x="200" y="56" fontSize="11" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Best Category</text>
    <text x="400" y="56" fontSize="11" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Accelerated Rate</text>
    <text x="580" y="56" fontSize="11" fontWeight="600" fill="var(--text)" fontFamily="system-ui">Spend Cap</text>
    {[
      { card: "HDFC Millennia", cat: "Amazon/Swiggy/Zomato", rate: "5% cashback", cap: "₹10,000/mo" },
      { card: "Axis ACE", cat: "Bill pay via Google Pay", rate: "5% cashback", cap: "₹5,000/mo" },
      { card: "SBI SimplyCLICK", cat: "Online shopping", rate: "10x points", cap: "₹1L/yr" },
      { card: "HDFC Regalia", cat: "Dining", rate: "5x points", cap: "None" },
      { card: "Amex MRCC", cat: "All spend (4x monthly)", rate: "1,000 bonus MR", cap: "₹6K spend trigger" },
      { card: "ICICI Amazon Pay", cat: "Amazon Prime", rate: "5% cashback", cap: "None" },
    ].map((d, i) => (
      <g key={i}>
        <rect x="24" y={62 + i * 28} width="672" height="26" fill={i % 2 === 0 ? "var(--raise)" : "white"} rx="2" />
        <text x="36" y={80 + i * 28} fontSize="11" fill="var(--text)" fontFamily="system-ui">{d.card}</text>
        <text x="200" y={80 + i * 28} fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">{d.cat}</text>
        <text x="400" y={80 + i * 28} fontSize="11" fontWeight="700" fill={COLOR} fontFamily="system-ui">{d.rate}</text>
        <text x="580" y={80 + i * 28} fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">{d.cap}</text>
      </g>
    ))}
  </svg>
);

const SvgTransferPartners = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Airline and hotel transfer partners for major Indian credit card reward programs" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise)" rx="10" />
    <text x="36" y="36" fontSize="13" fontWeight="700" fill="var(--text)" fontFamily="system-ui">Transfer Partners: which programs can you convert your points to?</text>
    <text x="36" y="62" fontSize="12" fontWeight="700" fill={COLOR} fontFamily="system-ui">HDFC SmartBuy</text>
    <text x="36" y="80" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">IndiGo 6E Rewards, Air India Flying Returns, InterMiles, Vistara Club Vistara (limited)</text>
    <text x="36" y="106" fontSize="12" fontWeight="700" fill={COLOR} fontFamily="system-ui">Axis EDGE Miles</text>
    <text x="36" y="124" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">IndiGo 6E, Air India, Marriott Bonvoy (1:1 for select cards), InterMiles</text>
    <text x="36" y="150" fontSize="12" fontWeight="700" fill={COLOR} fontFamily="system-ui">Amex Membership Rewards</text>
    <text x="36" y="168" fontSize="11" fill="var(--text-muted)" fontFamily="system-ui">British Airways Avios, Singapore KrisFlyer, Air India, Marriott Bonvoy — widest partner network in India</text>
  </svg>
);

export default function BlogHowRewardPointsWorkIndia() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "How many reward points do I earn per ₹100 on a typical Indian credit card?", "acceptedAnswer": { "@type": "Answer", "text": "It varies widely. Entry-level cards usually give 1 point per ₹100 or ₹150 spent. Premium cards like HDFC Infinia give 5 points per ₹150. But the earn rate only matters when you know the rupee value of each point. Most standard points are worth ₹0.25 each on statement credit, so 1 point per ₹100 equals 0.25% effective return." } },
      { "@type": "Question", "name": "Are HDFC reward points the same as cashback?", "acceptedAnswer": { "@type": "Answer", "text": "No. HDFC reward points are points in a loyalty program that you need to actively redeem. They do not automatically reduce your bill. You need to log in and redeem them either against your statement balance (₹0.25/point), through the SmartBuy portal (up to ₹0.50/point for vouchers), or by transferring to airline miles programs for potentially higher value." } },
      { "@type": "Question", "name": "Do Amex Membership Rewards points expire?", "acceptedAnswer": { "@type": "Answer", "text": "No, Amex MR points do not expire as long as your card account is active and in good standing. This makes Amex cards particularly good for accumulating points over several years for a large redemption like a flight upgrade. All other major Indian bank reward points (HDFC, Axis, SBI, ICICI) do expire, typically within 2-3 years." } },
      { "@type": "Question", "name": "What is the best way to redeem HDFC reward points for maximum value?", "acceptedAnswer": { "@type": "Answer", "text": "The SmartBuy portal consistently offers better value than statement credit, often ₹0.40-0.50 per point vs ₹0.25 on statement credit. For the highest value, transfer to airline miles programs during promotional periods when transfer rates are boosted. Only do this if you genuinely intend to use the miles soon." } },
      { "@type": "Question", "name": "Why do reward points have a per-category spend cap?", "acceptedAnswer": { "@type": "Answer", "text": "Banks set caps to limit their liability. If they offered 5% cashback on unlimited spend, a heavy spender could earn more than the bank makes from interchange fees. Caps are written into the Most Important Terms and Conditions document. Always read the MITC before assuming you will earn accelerated rates on large monthly spends." } },
      { "@type": "Question", "name": "Can I transfer my credit card points to someone else's account?", "acceptedAnswer": { "@type": "Answer", "text": "Generally no. Most Indian bank reward programs only allow redemption by the primary cardholder. Amex allows transfers to airline programs that can then be used by anyone, but the transfer has to be to your own airline loyalty account first. Points pooling across family members is not common in India." } },
      { "@type": "Question", "name": "What happens to my reward points if I close my credit card?", "acceptedAnswer": { "@type": "Answer", "text": "They typically expire immediately or within 30 days of account closure. Always redeem all points before initiating a credit card closure. HDFC, SBI, and Axis all forfeit unredeemed points upon account closure. Amex typically gives you 30 days to redeem before closure." } },
      { "@type": "Question", "name": "Is it worth getting a credit card just for rewards?", "acceptedAnswer": { "@type": "Answer", "text": "Only if you pay your balance in full every month. If you ever carry a balance, the 3-3.75% monthly interest completely wipes out any reward benefit. At 42% annual interest vs 1-5% reward rate, the math is clear. Rewards only make sense if the card costs you nothing in interest." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "How Reward Points Actually Work in India: Earn Rates, Expiry, and Real Rupee Value", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
    { "@type": "ListItem", position: 3, name: "How Reward Points Work in India", item: "https://assurefintech.com/blog/how-reward-points-work-india" },
  ]};

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / How Reward Points Work in India</nav>
      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · REWARDS EXPLAINED</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 14px" }}>How Reward Points Actually Work in India: Earn Rates, Expiry, and Real Rupee Value</h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 16px" }}>Your card says "5x reward points." What does that actually mean in rupees? Less than the bank wants you to think, and more than you are probably getting right now.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 9 min read</div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 1: Understanding How Points Are Earned</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Every Indian credit card earns points based on your spend, but the units and thresholds vary by bank. HDFC Reward Points are earned per ₹150 spent. Amex Membership Rewards are earned per ₹50 spent. SBI and Kotak cards typically use ₹100 as the base unit.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>This matters because if you spend ₹149 on HDFC Millennia, you earn zero points for that transaction. Amounts that do not hit the earn threshold are essentially free money for the bank.</p>
        <SvgEarnRateComparison />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Most cards also have exclusions: fuel, rent payments, EMIs, and government payments often earn zero points or reduced rates. Check the exclusion list in your card's Most Important Terms and Conditions before assuming a big spend will earn full rewards.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Step 2: What Is 1 Reward Point Worth in Rupees?</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>This is where Indian banks are deliberately vague. The brochure shows "5x points" without telling you what 1 point is actually worth. Here is the honest number.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For most Indian bank reward programs, 1 point = ₹0.25 when redeemed against your statement balance. That is the floor. The ceiling depends entirely on how you redeem.</p>
        <SvgPointValue />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Amex Membership Rewards stand out because they can be worth ₹1-2+ per point when transferred to certain airline programs at the right time. That is a 4-8x difference versus statement credit. The catch: you need to actually fly on partner airlines.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The SmartBuy Factor: Why Redemption Channel Matters</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC SmartBuy is the portal where HDFC cardholders can redeem points against Amazon and Flipkart purchases, flight and hotel bookings, and gift vouchers. The values are meaningfully better than statement credit.</p>
        <SvgSmartBuyComparison />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>1 lakh HDFC points = ₹25,000 on statement credit vs ₹40,000+ via SmartBuy portal during offer periods. That is a ₹15,000 difference on the same 1 lakh points. The honest number on SmartBuy: it is genuinely better, but offer availability and portal uptime are real issues that heavy redeemers complain about.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Compare this approach to cashback cards in our <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>rewards vs cashback guide</Link> to decide which suits your habits better.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Expiry Rules: The Silent Point Killer</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Most Indian cardholders do not think about expiry until they try to redeem and find their balance is zero. Banks are legally required to tell you about expiry, but they are not required to remind you loudly before it happens.</p>
        <SvgExpiryTimeline />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Set a calendar reminder every 6 months. When it fires, log into your card's reward portal, check the expiry date on your oldest points batch, and redeem if you are within 3-4 months of expiry. Do not wait for the bank to remind you.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Redemption Value Gap: Not All Options Are Equal</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Product catalogue redemptions are almost always the worst value. Banks offer discounted merchandise through reward catalogues priced in points, but the effective point value drops to ₹0.15-0.18 per point because the products are marked up.</p>
        <SvgRedemptionValueGap />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The hierarchy for most Indian bank programs: miles transfer (highest, if you fly), then partner vouchers via SmartBuy, then statement credit, then product catalogue (avoid). Use the catalogue only if you are about to let points expire and everything else is unavailable.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Accelerated Earn Categories: Where Points Stack Up Fast</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Bonus earn categories are where reward cards earn their keep. If your primary spend is on Swiggy, Amazon, or utility bill payments, the right card can give you 5-10x the base earn rate on those specific categories.</p>
        <SvgAcceleratedEarn />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The catch, as always, is the monthly spend cap. Check the <Link href="/blog/7-credit-card-mistakes-india" style={{ color: COLOR }}>7 credit card mistakes article</Link> for how spend caps silently reduce your effective reward rate.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Transfer Partners: The Path to Maximum Value</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you are willing to learn how airline and hotel loyalty programs work, transferring credit card points to miles is almost always the highest-value redemption path available in India.</p>
        <SvgTransferPartners />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Amex has the widest transfer partner network of any card program available in India, including British Airways Avios (useful for short-haul redemptions within India) and Singapore Airlines KrisFlyer (excellent for Southeast Asia and business class to Europe). The caveat: award seats need to be available, which takes some planning.</p>
      </section>

      <section style={{ background: "var(--raise)", border: `1px solid ${COLOR}`, borderRadius: 10, padding: "20px 24px", marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>What to Do Right Now</h2>
        <ol style={{ fontSize: 15, paddingLeft: 20, margin: 0, lineHeight: 2 }}>
          <li>Log into your card's reward portal and check your current balance and the oldest expiry date.</li>
          <li>Calculate your effective reward rate: points earned last month times ₹0.25 divided by total spend. Is it above 1%?</li>
          <li>If your primary spend is groceries, food delivery, or online shopping, use our <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link> to find a card with accelerated earn in that category.</li>
          <li>If you have a large point balance, compare statement credit vs SmartBuy voucher value before redeeming.</li>
          <li>Set a 6-month recurring calendar reminder titled "Check reward point expiry."</li>
        </ol>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        Related: <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>Reward Points vs Cashback</Link> · <Link href="/blog/7-credit-card-mistakes-india" style={{ color: COLOR }}>7 Credit Card Mistakes to Avoid</Link> · <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe Card Finder</Link> · <Link href="/learn/savings" style={{ color: COLOR }}>Savings Strategies</Link>
      </p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Editorial note: Assure Fintech does not accept payment for favorable coverage. Reward point values cited are based on bank redemption portals as of June 2026. Portal values and transfer partners change frequently. Verify current redemption rates before making large redemption decisions. This article is for informational purposes and does not constitute financial advice.
      </footer>
    </main>
  );
}
