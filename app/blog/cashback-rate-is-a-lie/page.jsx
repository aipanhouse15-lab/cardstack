import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "The Cashback Rate Is a Lie: Your 5% Card Is Probably Earning You 1.5-2%",
  description: "The Cashback Rate Is a Lie: Your 5% Card Is Probably Earning You 1.5-2%",
  alternates: { canonical: "/blog/cashback-rate-is-a-lie" },
  openGraph: {
    title: "The Cashback Rate Is a Lie: Your 5% Card Is Probably Earning You 1.5-2%",
    description: "The Cashback Rate Is a Lie: Your 5% Card Is Probably Earning You 1.5-2%",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/cashback-rate-is-a-lie
// Template: Math walkthrough + myth buster
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgCapBinding = () => (
  <svg viewBox="0 0 720 279" role="img" aria-label="How a 5 percent cashback rate becomes 1.5 percent when monthly cap of 500 rupees binds at 33000 rupees monthly spend" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">5% CASHBACK → 1.5% EFFECTIVE RATE · HOW THE CAP KILLS YOUR RETURN</text>
    <line x1="60" y1="220" x2="700" y2="220" stroke="var(--border)" />
    {[{ spend: "₹5K", eff: "5.0%", x: 80, h: 180, col: "#16a34a" }, { spend: "₹10K", eff: "5.0%", x: 200, h: 180, col: "#16a34a" }, { spend: "₹20K", eff: "2.5%", x: 320, h: 100, col: "#f59e0b" }, { spend: "₹33K", eff: "1.5%", x: 440, h: 55, col: "#dc2626" }, { spend: "₹50K", eff: "1.0%", x: 560, h: 36, col: "#7f1d1d" }].map(({ spend, eff, x, h, col }) => (
      <g key={spend}>
        <rect x={x} y={220 - h} width="80" height={h} fill={col} rx="4" opacity="0.85" />
        <text x={x + 40} y={215 - h} textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="800" fill={col}>{eff}</text>
        <text x={x + 40} y="237" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{spend}/mo</text>
      </g>
    ))}
    <line x1="380" y1="40" x2="380" y2="220" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" />
    <text x="383" y="52" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">Cap binds here</text>
    <text x="383" y="65" fontFamily="system-ui" fontSize="10" fill="#dc2626">(₹500 cap ÷ 5% = ₹10K max)</text>
    <text x="20" y="255" fontFamily="system-ui" fontSize="8" fill="var(--text-muted)">Axis Ace: 5% on Swiggy/Zomato/Ola/Uber. Cap: ₹500/month per category. At ₹33K spend, effective rate = 1.5%. The billboard says 5%.</text>
  </svg>
);

const SvgBankCapTable = () => (
  <svg viewBox="0 0 720 239" role="img" aria-label="Monthly cashback cap comparison for top 5 cashback credit cards in India showing Axis Ace HDFC Millennia SBI Cashback Amazon Pay ICICI and Flipkart Axis with their advertised rates and effective rates at different spend levels" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">CASHBACK CAP REALITY CHECK · JUNE 2026</text>
    {[{ h: "Card" }, { h: "Headline Rate" }, { h: "Monthly Cap" }, { h: "Cap-binding Spend" }, { h: "Eff. rate at ₹50K/mo" }].map(({ h }, i) => {
      const xs = [20, 170, 290, 400, 530];
      return <rect key={h} x={xs[i]} y="30" width={[140, 110, 100, 120, 190][i]} height="22" fill={COLOR}><text x={xs[i] + [140, 110, 100, 120, 190][i] / 2} y="45" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Axis Ace", "5% on UPI apps", "₹500/mo", "₹10,000", "1.0%"],
      ["HDFC Millennia", "5% on 10 brands", "₹1,000/qtr", "₹20,000", "0.7%"],
      ["SBI Cashback", "5% online spends", "₹5,000/mo", "₹1,00,000", "4.5%*"],
      ["Amazon Pay ICICI", "5% on Amazon", "No cap!", "No cap", "5.0%"],
      ["Flipkart Axis", "5% on Flipkart", "₹2,000/mo", "₹40,000", "1.5%"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={52 + ri * 28} width={700} height="26" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 170, 290, 400, 530];
          const isGood = cell === "No cap!" || cell === "No cap" || cell === "5.0%" || cell.includes("4.5");
          const isBad = cell === "0.7%" || cell === "1.0%";
          return <text key={ci} x={xs[ci] + 5} y={69 + ri * 28} fontFamily="system-ui" fontSize="10" fill={isGood ? "#16a34a" : isBad ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">*SBI Cashback has the highest cap (₹5,000/month) making it genuinely the best cashback card at high spend levels. Amazon Pay ICICI has no cap on Amazon — the only truly uncapped card for a specific ecosystem.</text>
  </svg>
);

const SvgGSTOnCashback = () => (
  <svg viewBox="0 0 720 192" role="img" aria-label="GST on credit card annual fee affecting net cashback earned showing that at high annual fees the GST adds to effective cost reducing net return" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">THE FEE + GST DRAG · WHAT ANNUAL FEE REALLY COSTS YOUR CASHBACK MATH</text>
    <rect x="20" y="35" width="680" height="120" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" rx="8" />
    <text x="30" y="56" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">Example: Card with ₹1,000 annual fee earning 2% cashback</text>
    <text x="30" y="76" fontFamily="system-ui" fontSize="12" fill="var(--text)">Annual fee + 18% GST = ₹1,180 total fee cost</text>
    <text x="30" y="94" fontFamily="system-ui" fontSize="12" fill="var(--text)">Break-even spend for just covering the fee: ₹1,180 / 2% = ₹59,000/year = ₹4,916/month</text>
    <text x="30" y="112" fontFamily="system-ui" fontSize="10" fill="var(--text)">At ₹20,000/month spend (₹2,40,000/year): cashback = ₹4,800 — less than fee of ₹1,180 ONLY at 0.49% effective</text>
    <text x="30" y="130" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#dc2626">Wait: ₹4,800 cashback minus ₹1,180 fee = ₹3,620 net benefit. Still positive — but NOT 2%.</text>
    <text x="30" y="148" fontFamily="system-ui" fontSize="12" fill="var(--text)">True effective cashback rate after fee: ₹3,620 / ₹2,40,000 = 1.51%. Every fee card does this.</text>
    <text x="20" y="168" fontFamily="system-ui" fontSize="8" fill="var(--text-muted)">Always calculate: (annual cashback earned - annual fee - GST on fee) / total annual spend = TRUE cashback rate. Not the headline.</text>
  </svg>
);

const SvgPartnerSpendOnly = () => (
  <svg viewBox="0 0 720 216" role="img" aria-label="Credit card cashback only on partner merchants showing that most of your spending may not qualify for the advertised high cashback rate" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHAT YOUR ACTUAL MONTHLY SPEND EARNS · HDFC MILLENNIA EXAMPLE</text>
    {[
      { cat: "Amazon / Flipkart (5%)", spend: 8000, earn: 400, pct: "5.0%", col: "#16a34a" },
      { cat: "Swiggy / Zomato (5%)", spend: 4000, earn: 200, pct: "5.0%", col: "#16a34a" },
      { cat: "Other online (1%)", spend: 10000, earn: 100, pct: "1.0%", col: "#f59e0b" },
      { cat: "Offline / non-partner (1%)", spend: 18000, earn: 180, pct: "1.0%", col: "#f59e0b" },
      { cat: "Fuel (surcharge — no reward)", spend: 5000, earn: 0, pct: "0.0%", col: "#dc2626" },
    ].map(({ cat, spend, earn, pct, col }, i) => (
      <g key={cat}>
        <text x="220" y={50 + i * 30} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{cat}</text>
        <rect x="228" y={37 + i * 30} width={spend / 100} height="20" fill={col} rx="3" opacity="0.7" />
        <text x={236 + spend / 100} y={51 + i * 30} fontFamily="system-ui" fontSize="11" fill="var(--text)">₹{spend.toLocaleString()} → ₹{earn} ({pct})</text>
      </g>
    ))}
    <text x="20" y="192" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Total ₹45,000 spend → ₹880 earned → effective rate: 1.96%. The card advertises "5% on partner merchants." Your real portfolio earns under 2%.</text>
  </svg>
);

const SvgTrueRateComparison = () => (
  <svg viewBox="0 0 720 217" role="img" aria-label="True effective cashback rate comparison across 5 popular credit cards after accounting for caps fees partner-only restrictions and GST" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HEADLINE RATE vs TRUE RATE ON ₹40K/MONTH MIXED SPEND · JUNE 2026</text>
    {[
      { card: "Amazon Pay ICICI (Amazon spend)", headline: "5%", true: "4.8%", col: "#16a34a" },
      { card: "SBI Cashback (online spend)", headline: "5%", true: "4.3%", col: "#16a34a" },
      { card: "Axis Ace (mixed spend)", headline: "5%", true: "1.9%", col: "#dc2626" },
      { card: "HDFC Millennia (mixed spend)", headline: "5%", true: "2.1%", col: "#f97316" },
      { card: "Flipkart Axis (mixed spend)", headline: "5%", true: "1.7%", col: "#dc2626" },
    ].map(({ card, headline, true: tr, col }, i) => (
      <g key={card}>
        <text x="280" y={44 + i * 32} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{card}</text>
        <rect x="288" y={30 + i * 32} width={parseFloat(headline) * 20} height="20" fill="var(--border)" rx="3" opacity="0.5" />
        <rect x="288" y={30 + i * 32} width={parseFloat(tr) * 20} height="20" fill={col} rx="3" opacity="0.85" />
        <text x={296 + parseFloat(headline) * 20} y={44 + i * 32} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">adv: {headline}</text>
        <text x={296 + parseFloat(headline) * 20 + 60} y={44 + i * 32} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={col}>real: {tr}</text>
      </g>
    ))}
    <text x="20" y="193" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Amazon Pay ICICI and SBI Cashback hold up best in real-world mixed spend. Axis Ace and Flipkart Axis lose their headline rate fast when you buy outside their partner ecosystem.</text>
  </svg>
);

const SvgHowToFind = () => (
  <svg viewBox="0 0 720 177" role="img" aria-label="Step by step guide to finding the true cashback rate for any credit card by reading the MITC document" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW TO FIND THE REAL NUMBER IN 4 STEPS</text>
    {[
      { step: "1. Download the card MITC", detail: "Most Important Terms and Conditions — every card must publish it. Find on bank website under card details." },
      { step: "2. Find: monthly cashback cap", detail: "Usually a table showing: category, rate, monthly/quarterly/annual cap. This is the number that caps your return." },
      { step: "3. Calculate cap-binding spend", detail: "Cap ÷ Rate = the spend at which cap binds. Above this, effective rate falls below advertised." },
      { step: "4. Map against your actual spend", detail: "Use 3 months of statements. Calculate what % of your spend is in partner vs non-partner categories." },
    ].map(({ step, detail }, i) => (
      <g key={step}>
        <text x="20" y={40 + i * 28} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>{step}</text>
        <text x="20" y={54 + i * 28} fontFamily="system-ui" fontSize="11" fill="var(--text)">{detail}</text>
      </g>
    ))}
    <text x="20" y="153" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Use our <a href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</a> — it calculates cap-adjusted cashback automatically from your spend profile. No manual MITC reading needed.</text>
  </svg>
);

export default function BlogCashbackRateIsALie() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Why is my actual cashback much less than the 5% the card advertises?", "acceptedAnswer": { "@type": "Answer", "text": "Three reasons: monthly caps, partner-only rates, and annual fee drag. The 5% typically applies only to specific partner merchants (Swiggy, Amazon, etc.) up to a monthly cap (₹500-2,000). Spend above the cap earns nothing extra. Spend outside partner categories earns 1% or less. And the annual fee (plus 18% GST) reduces net cashback further. The advertised rate is the ceiling for a specific category, not the effective rate across your total spend." } },
      { "@type": "Question", "name": "Which cashback credit card has the highest real-world effective rate?", "acceptedAnswer": { "@type": "Answer", "text": "For Amazon-heavy spenders: Amazon Pay ICICI (5% unlimited on Amazon, no cap, no annual fee) gives the highest true rate. For high-volume general online spend: SBI Cashback (5% on all online spend, ₹5,000 monthly cap — binds at ₹1L/month). For overall mixed spend: a combination of Amazon Pay ICICI for Amazon and SBI Cashback for other online purchases gives the best real-world portfolio return." } },
      { "@type": "Question", "name": "Is SBI Cashback card genuinely 5% on all online spends?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with caveats. SBI Cashback gives 5% on all online transactions — not just specific merchants. The monthly cap is ₹5,000, which binds at ₹1L/month of online spend. For most households spending ₹20,000-50,000 online per month, the cap doesn't bind. Below ₹1L/month, SBI Cashback genuinely earns close to 5% on online spend, making it one of the best true-cashback cards in India." } },
      { "@type": "Question", "name": "Does annual fee affect cashback card value?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Annual fee + 18% GST must be subtracted from your earned cashback to find net benefit. A ₹1,000-fee card earning 2% on ₹30,000/month spend: earns ₹7,200/year cashback, costs ₹1,180 in fee, nets ₹6,020 — effective rate of 1.67% not 2%. Cards with ₹500+ spends monthly often qualify for fee waiver — always check the fee waiver condition before paying the annual fee." } },
      { "@type": "Question", "name": "How do I calculate my true cashback rate?", "acceptedAnswer": { "@type": "Answer", "text": "Formula: (Total cashback earned in a year - Annual fee - 18% GST on annual fee) / Total annual spend × 100. Pull 12 months of your card statements, add up all cashback credits, subtract the net annual fee cost, divide by total spend. This is your true effective cashback rate. Use our Smart Swipe tool to model this automatically based on your spend categories and preferred cards." } },
      { "@type": "Question", "name": "What is a cashback cap and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "A cashback cap is a maximum cashback amount per month, quarter, or year. If a card has a 5% rate with ₹500 monthly cap, the maximum cashback in any month is ₹500 regardless of how much you spend. Once you've earned ₹500 (at 5%, that's ₹10,000 of eligible spend), all additional eligible spend earns 0% for that month. Caps are disclosed in the MITC document — always check before applying for a cashback card." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "The Cashback Rate Is a Lie: What Your Card Actually Earns on Real Spending", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
    { "@type": "ListItem", position: 3, name: "The Cashback Rate Is a Lie", item: "https://assurefintech.com/blog/cashback-rate-is-a-lie" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Cashback · Math Check
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            The Cashback Rate Is a Lie: Your 5% Card Is Probably Earning You 1.5-2%
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            Monthly caps. Partner-only rates. Annual fee drag. By the time you add it all up, that flashy 5% cashback card is giving most households about 1.5-2% on their actual spending. Here's the honest math.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / The Cashback Rate Is a Lie</nav>
<section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Monthly Cap Problem</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Every popular cashback card in India has a monthly cap — a maximum amount of cashback you can earn in a calendar month. The Axis Ace card, India's most talked-about cashback card, advertises 5% on Swiggy, Zomato, Ola, Uber, and other UPI-linked apps. That's real. The cap: ₹500 per month across all these categories combined.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>₹500 cap at 5% means the cap binds once you've spent ₹10,000 in those categories. If you order Swiggy ₹6,000, Ola ₹3,000, and Zomato ₹5,000 per month (₹14,000 total), the extra ₹4,000 earns exactly zero additional cashback. Your effective rate just dropped to 3.57%. At ₹20,000 monthly in those categories: 2.5%. At ₹33,000: 1.5%.</p>
        <SvgCapBinding />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>This isn't unique to Axis Ace. Almost every cashback card in India uses this structure. The high headline rate attracts attention; the low cap limits actual outgo for the bank. Your job is to calculate whether your actual spend in the qualifying category stays below the cap threshold.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Partner-Only Rate Problem</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The advertised rate almost always applies to partner merchants only — not your total spend. Look at your last 3 months of credit card statements. What percentage goes to Swiggy, Amazon, Flipkart, and the card's specific partners? For most urban Indian households, that's 15-35% of total spending. The other 65-85% earns 1% or less.</p>
        <SvgPartnerSpendOnly />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>This math is why SBI Cashback stands out. Its 5% applies to all online transactions — not a partner list, not specific apps, but any website or app payment. The monthly cap is ₹5,000, which binds only at ₹1L/month of online spend. For most households, SBI Cashback delivers close to its advertised rate in practice.</p>
        <SvgBankCapTable />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Annual Fee Drag</h2>
        <SvgGSTOnCashback />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Every fee-bearing cashback card has a fee waiver condition — usually ₹1-2L annual spend. If you qualify, the net fee cost is zero. But if you're spending ₹15,000-20,000 per month (below the waiver threshold), you're paying the fee and reducing your net cashback. Always check if your spend qualifies for fee waiver before paying the annual fee.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The True Effective Rate: Card by Card</h2>
        <SvgTrueRateComparison />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Amazon Pay ICICI is the only card that consistently delivers close to its advertised rate — because it has no monthly cap on Amazon spend, no annual fee, and Amazon purchases make up a large slice of urban household spending. If you buy significantly on Amazon each month, this card is genuinely as good as advertised.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For mixed spending households, the gap between advertised and actual is largest for the partner-heavy cards (Axis Ace, Flipkart Axis) and smallest for the broad-category cards (SBI Cashback, Amazon Pay ICICI within its ecosystem).</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>How to Find Your Card's Real Rate</h2>
        <SvgHowToFind />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The fastest way: use our <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link>. Enter your monthly spending by category and it calculates cap-adjusted cashback for every card in its database. No manual MITC reading, no spreadsheet math. The tool surfaces the "honest number" across your actual spend pattern — not the headline number that only applies to a fraction of your spending.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Also see our <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>reward points vs cashback comparison</Link> for when points cards actually beat cashback despite the complexity, and our <Link href="/blog/build-3-card-stack-guide" style={{ color: COLOR }}>3-card stack guide</Link> for how to combine cards to cover your full spend at the best rate.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Related: <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe tool</Link> · <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>reward points vs cashback</Link> · <Link href="/blog/build-3-card-stack-guide" style={{ color: COLOR }}>build a 3-card stack</Link> · <Link href="/blog/best-free-cards" style={{ color: COLOR }}>best free cards</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>Card terms verified against MITC documents as of {UPDATED}. Effective rates are estimates based on typical spend distributions. Not financial advice.</footer>
    </main>
    </>
  );
}
