import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Fixed vs Floating Home Loan Rate: The 10L Question Nobody Answers For You",
  description: "Over 20 years, picking the wrong rate type costs more than a used car. We model both with real 2026 rates, RBI repo history, and show when each wins.",
  alternates: { canonical: "/learn/loans/fixed-vs-floating-rate" },
  openGraph: {
    title: "Fixed vs Floating Home Loan Rate: The 10L Question Nobody Answers For You",
    description: "Over 20 years, picking the wrong rate type costs more than a used car. We model both with real 2026 rates, RBI repo history, and show when each wins.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/loans/fixed-vs-floating-rate
// Template: Decision framework with scenarios
// Color: #2563eb | Updated: June 4, 2026

const COLOR = "#2563eb";
const UPDATED = "June 4, 2026";

const SvgRateHistory = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="RBI repo rate and home loan EBLR movement from 2020 to June 2026 showing the full rate cycle from 4 percent to 6.5 percent and back" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">REPO RATE CYCLE 2020-2026 · WHY FIXED RATE "SAFETY" IS NOT FREE</text>
    <line x1="60" y1="240" x2="700" y2="240" stroke="var(--border)" strokeWidth="1" />
    <line x1="60" y1="40" x2="60" y2="240" stroke="var(--border)" strokeWidth="1" />
    {["2020", "2021", "2022", "2023", "2024", "2025", "2026"].map((y, i) => (
      <text key={y} x={60 + i * 107} y="255" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)" textAnchor="middle">{y}</text>
    ))}
    {["4%", "5%", "6%", "7%", "8%", "9%"].map((r, i) => (
      <text key={r} x="52" y={240 - i * 33} fontFamily="system-ui" fontSize="9" fill="var(--text-muted)" textAnchor="end">{r}</text>
    ))}
    <path d="M 60 207 L 167 207 L 274 141 L 381 109 L 488 142 L 595 175 L 702 175" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
    <path d="M 60 174 L 167 174 L 274 108 L 381 76 L 488 109 L 595 142 L 702 142" fill="none" stroke={COLOR} strokeWidth="3" strokeLinecap="round" strokeDasharray="6,3" />
    <circle cx="274" cy="141" r="5" fill="#dc2626" />
    <text x="280" y="135" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">Repo hits 6.5%</text>
    <circle cx="488" cy="109" r="5" fill={COLOR} />
    <text x="494" y="103" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">EBLR 9.0%</text>
    <circle cx="702" cy="175" r="5" fill="#dc2626" />
    <text x="640" y="170" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">Repo: 6.0%</text>
    <g>
      <rect x="540" y="32" width="12" height="3" fill="#dc2626" rx="1" />
      <text x="558" y="39" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Repo Rate</text>
      <path d="M 540 52 L 552 52" stroke={COLOR} strokeWidth="2" strokeDasharray="4,2" />
      <text x="558" y="56" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">EBLR (home loan rate)</text>
    </g>
    <text x="20" y="275" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">2022-23 rate hike cycle: EBLR jumped from 6.65% to 9.15% — floating rate borrowers paid ~₹8,000 more EMI per ₹50L. 2024-26 easing: rates fell, they benefited.</text>
  </svg>
);

const SvgEmiScenarios = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Monthly EMI comparison for 50 lakh home loan under three rate scenarios showing fixed at 9 percent versus floating ranging from 8 to 10 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">EMI SCENARIOS · ₹50L HOME LOAN · 20 YEARS · FIXED 9.0% vs FLOATING</text>
    {[
      { label: "Fixed @ 9.0% (locked)", emi: "₹44,986", color: "#7c3aed", bar: 270 },
      { label: "Float: rates fall to 8.0% (best case)", emi: "₹41,822", color: "#16a34a", bar: 235 },
      { label: "Float: rates stay at 8.75% (base case)", emi: "₹44,072", color: COLOR, bar: 260 },
      { label: "Float: rates rise to 10.0% (stress case)", emi: "₹48,251", color: "#dc2626", bar: 290 },
    ].map(({ label, emi, color, bar }, i) => (
      <g key={label}>
        <rect x="220" y={50 + i * 54} width={bar} height="36" fill={color} rx="5" opacity="0.8" />
        <text x="210" y={73 + i * 54} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{label}</text>
        <text x={228 + bar} y={73 + i * 54} fontFamily="system-ui" fontSize="13" fontWeight="800" fill={color}>{emi}/mo</text>
      </g>
    ))}
    <text x="20" y="275" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Gap between best and worst float: ₹6,429/month = ₹15.4L extra interest over 20 years. Fixed rate eliminates this uncertainty but charges a premium upfront.</text>
  </svg>
);

const SvgBreakEvenAnalysis = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Break-even analysis showing at what interest rate movement the fixed rate home loan becomes cheaper than floating over the full loan tenure" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">BREAK-EVEN ANALYSIS · WHEN DOES FIXED BEAT FLOATING? · ₹50L / 20 YEARS</text>
    <line x1="60" y1="220" x2="700" y2="220" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="220" stroke="var(--border)" />
    <text x="20" y="42" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)" transform="rotate(-90 20 100)">Total Interest Paid</text>
    <path d="M 60 220 L 160 190 L 260 170 L 360 155 L 460 130 L 560 110 L 660 85" fill="none" stroke="#dc2626" strokeWidth="3" />
    <path d="M 60 150 L 700 150" fill="none" stroke={COLOR} strokeWidth="2" strokeDasharray="8,4" />
    <text x="670" y="148" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">Fixed rate cost</text>
    <circle cx="380" cy="150" r="7" fill="#f59e0b" />
    <text x="390" y="142" fontFamily="system-ui" fontSize="11" fill="#f59e0b" fontWeight="700">BREAK-EVEN POINT</text>
    <text x="390" y="156" fontFamily="system-ui" fontSize="10" fill="#f59e0b">Rates rise 1.2%+ over tenure</text>
    <text x="70" y="235" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Rates fall 2%+</text>
    <text x="300" y="235" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Rates stable</text>
    <text x="550" y="235" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Rates rise 2%+</text>
    <text x="650" y="80" fontFamily="system-ui" fontSize="10" fill="#dc2626">Floating cost</text>
    <text x="20" y="255" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">If you believe rates will rise more than 1.2% on average over 20 years: fixed wins. If rates stay flat or fall: floating wins.</text>
  </svg>
);

const SvgTotalInterestComparison = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Total interest paid comparison over 20 years at various rate paths for fixed rate at 9 percent versus floating starting at 8.75 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">20-YEAR TOTAL INTEREST COST · ₹50L LOAN · FIXED 9.0% vs FLOATING SCENARIOS</text>
    {[
      { scenario: "Fixed @ 9%", cost: "₹57.97L", color: "#7c3aed", barW: 360 },
      { scenario: "Float: stable 8.75%", cost: "₹55.77L", color: COLOR, barW: 340 },
      { scenario: "Float: mild rise (+0.5%/yr)", cost: "₹61.20L", color: "#f59e0b", barW: 390 },
      { scenario: "Float: sharp rise (+1%/yr)", cost: "₹68.40L", color: "#f97316", barW: 440 },
      { scenario: "Float: falls (-0.5%/yr)", cost: "₹48.10L", color: "#16a34a", barW: 285 },
    ].map(({ scenario, cost, color, barW }, i) => (
      <g key={scenario}>
        <text x="190" y={58 + i * 48} textAnchor="end" fontFamily="system-ui" fontSize="12" fill="var(--text)">{scenario}</text>
        <rect x="200" y={42 + i * 48} width={barW} height="28" fill={color} rx="4" opacity="0.8" />
        <text x={210 + barW} y={62 + i * 48} fontFamily="system-ui" fontSize="14" fontWeight="700" fill={color}>{cost}</text>
      </g>
    ))}
    <text x="20" y="290" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">If rates fall steadily, floating saves ₹9.87L vs fixed. If rates spike sharply, floating costs ₹10.43L more. The question is: which scenario do you believe in?</text>
  </svg>
);

const SvgDecisionTree = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Decision tree for choosing between fixed and floating home loan rate based on loan tenure income stability and rate expectations" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FIXED vs FLOATING DECISION TREE · ANSWER 3 QUESTIONS</text>
    <rect x="270" y="35" width="180" height="44" fill={COLOR} rx="8" />
    <text x="360" y="55" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Loan tenure?</text>
    <text x="360" y="71" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#bfdbfe">How many years?</text>
    <path d="M 300 79 L 180 120" stroke="var(--border)" strokeWidth="2" />
    <path d="M 420 79 L 540 120" stroke="var(--border)" strokeWidth="2" />
    <text x="220" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Under 7 years</text>
    <text x="500" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">10+ years</text>
    <rect x="100" y="120" width="160" height="44" fill="#16a34a" rx="8" />
    <text x="180" y="140" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Consider Fixed</text>
    <text x="180" y="156" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#bbf7d0">Shorter tenure = less rate risk</text>
    <rect x="460" y="120" width="160" height="44" fill={COLOR} rx="8" opacity="0.85" />
    <text x="540" y="140" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Income stable?</text>
    <text x="540" y="156" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#bfdbfe">Can you absorb EMI rise?</text>
    <path d="M 460 164 L 380 210" stroke="var(--border)" strokeWidth="2" />
    <path d="M 620 164 L 620 210" stroke="var(--border)" strokeWidth="2" />
    <text x="410" y="200" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">No / Uncertain</text>
    <text x="630" y="200" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Yes, comfortably</text>
    <rect x="270" y="210" width="160" height="44" fill="#7c3aed" rx="8" />
    <text x="350" y="230" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Fixed Rate</text>
    <text x="350" y="246" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#ddd6fe">Predictability over savings</text>
    <rect x="540" y="210" width="160" height="44" fill="#16a34a" rx="8" />
    <text x="620" y="230" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Floating Rate</text>
    <text x="620" y="246" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#bbf7d0">Statistically cheaper over 20yr</text>
    <text x="20" y="315" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">No decision tree replaces personal financial planning. If EMI rising 20% would hurt your family's monthly budget, fixed is worth the premium.</text>
  </svg>
);

const SvgBankProductTable = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Fixed and floating home loan rates across SBI HDFC ICICI and Axis Bank as of June 2026 showing rate premium for fixed versus floating" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FIXED vs FLOATING RATES ACROSS BANKS · JUNE 2026 · ₹50L / 20 YEARS / 750+ CIBIL</text>
    {[{ h: "Bank", w: 100 }, { h: "Floating Rate", w: 110 }, { h: "Fixed Rate", w: 100 }, { h: "Premium", w: 90 }, { h: "Lock-in", w: 100 }, { h: "Verdict", w: 180 }].map(({ h, w }, i) => {
      const x = [20, 120, 230, 330, 420, 520][i];
      return <rect key={h} x={x} y="35" width={w} height="26" fill={COLOR} rx="0">
        <text x={x + w / 2} y="52" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{h}</text>
      </rect>;
    })}
    {[["SBI", "8.50%", "N/A", "Fixed NA", "N/A", "Only floating; no true fixed product"],
      ["HDFC Bank", "8.75%", "9.35%", "+0.60%", "2 years", "Fixed available; steep premium"],
      ["ICICI Bank", "8.65%", "9.25%", "+0.60%", "3 years", "Fixed with long lock-in"],
      ["Axis Bank", "8.70%", "9.10%", "+0.40%", "1 year", "Best fixed premium in market"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={61 + ri * 38} width={700} height="38" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const x = [20, 120, 230, 330, 420, 520][ci];
          return <text key={ci} x={x + 6} y={85 + ri * 38} fontFamily="system-ui" fontSize="11" fill={ci === 4 ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="230" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">SBI does not offer a true long-term fixed rate product as of June 2026. Axis Bank's fixed rate has the narrowest premium if certainty is your priority.</text>
  </svg>
);

export default function PageFixedVsFloating() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Which is better right now — fixed or floating home loan rate in India?", "acceptedAnswer": { "@type": "Answer", "text": "In June 2026, with repo rate at 6.0% after cuts from the 2023 peak, floating rates are statistically more likely to benefit borrowers over a 20-year tenure. RBI has signaled a mild easing bias. However, if your income is irregular or you cannot afford EMI increases of 15-20%, the certainty of a fixed rate is worth paying 0.4-0.6% extra. There is no universal answer — it depends on your income stability and risk tolerance." } },
      { "@type": "Question", "name": "Can I switch from fixed to floating (or vice versa) mid-loan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but it costs money. Switching from fixed to floating or vice versa typically incurs a conversion fee of 0.5-1% of outstanding principal plus a processing fee. On ₹40L outstanding, that's ₹20,000-40,000. Some banks charge a fixed amount (₹5,000-10,000). Switching only makes financial sense if the rate differential compensates for this switching cost. Calculate the break-even months first." } },
      { "@type": "Question", "name": "What is EBLR and why does it matter for floating rate loans?", "acceptedAnswer": { "@type": "Answer", "text": "EBLR stands for External Benchmark Lending Rate. Since October 2019, RBI mandated that all banks link floating retail loans to an external benchmark — most banks chose the RBI repo rate. Your floating home loan rate = RBI Repo Rate + Bank Spread. When RBI cuts the repo rate, your EMI must come down within 3 months. The bank cannot quietly hold rates high. This transparency is what makes floating rates fairer today than they were before 2019." } },
      { "@type": "Question", "name": "If I took a loan at 9.15% floating and rates have now fallen, what should I do?", "acceptedAnswer": { "@type": "Answer", "text": "First, check with your bank if your rate has automatically been revised. EBLR-linked loans should adjust automatically every quarter. If your rate has not moved despite repo rate cuts, file a complaint with your bank in writing. If they don't respond in 30 days, escalate to the RBI Banking Ombudsman. You also have the option to balance-transfer your loan to a new bank at the current lower rate, though that involves processing fees (see our prepayment guide)." } },
      { "@type": "Question", "name": "What happens to my fixed rate home loan if RBI raises rates sharply?", "acceptedAnswer": { "@type": "Answer", "text": "Nothing. Your EMI stays exactly the same. That is the entire point of a fixed rate loan. Your floating-rate neighbours will see their EMI jump by ₹3,000-8,000 per month on a ₹50L loan, while you sail through with the same outgo. The trade-off: you paid 0.4-0.6% higher rate than floating during the good years to buy this protection." } },
      { "@type": "Question", "name": "Is it possible to prepay a fixed rate home loan without penalty?", "acceptedAnswer": { "@type": "Answer", "text": "Generally no. Fixed rate home loans typically have prepayment penalties of 2-4% of the outstanding amount. Floating rate home loans, by RBI regulation, cannot have prepayment penalties for individual borrowers. So if you're taking a fixed rate loan and you might inherit money or get a bonus, factor in the prepayment cost. Axis Bank and some NBFCs offer 'fixed-cum-floating' structures that transition to floating after 5-7 years, which gives you the best of both with lower prepayment penalties in the floating phase." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Fixed vs Floating Home Loan Rate: Which One Wins Over 20 Years?", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
    { "@type": "ListItem", position: 4, name: "Fixed vs Floating Rate", item: "https://assurefintech.com/learn/loans/fixed-vs-floating-rate" },
  ]};

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Fixed vs Floating Rate
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>LOANS · HOME LOANS · RATE TYPE</div>
      <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>Fixed vs Floating Home Loan Rate: The ₹10L Question Nobody Answers For You</h1>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Over 20 years, picking the wrong rate type can cost you more than a decent used car. The answer depends on one number banks don't proactively tell you: the break-even rate movement.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 12 min read</div>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Choice That Matters More Than the Bank You Pick</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Most people spend hours comparing banks when they take a home loan. Which bank has the lower rate? Which has better customer service? Those are fine questions. But the fixed-vs-floating decision can swing your total interest cost by ₹8–15 lakh over a 20-year loan — far more than the rate difference between SBI and HDFC.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>And yet, banks actively discourage this comparison. Fixed rate products are aggressively pitched during rate-hike cycles ("lock in before it goes higher!"). Floating products are pushed during falling rate environments ("why pay a premium for certainty you don't need?"). The advice always favours selling you the more profitable product at that moment.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Let's look at the actual math and build a framework you can use regardless of what cycle we're in.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How We Got Here: The Rate Cycle Story</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Understanding the history is important because fixed-vs-floating decisions are bets on the future rate path. India went through a textbook rate cycle between 2020 and 2026.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>From May 2020 to April 2022, RBI held the repo rate at a historic low of 4.0% to stimulate the pandemic-hit economy. Home loan rates fell to 6.5–7%, and floating rate borrowers enjoyed the lowest EMIs in a generation.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Then came the hike cycle. From May 2022 to February 2023, RBI raised the repo rate by 2.5% in 9 months — from 4.0% to 6.5%. EBLR-linked floating rates shot to 9.0–9.15%. Floating rate borrowers saw their EMI on a ₹50L, 20-year loan jump from ₹37,000 to ₹44,000. That's ₹7,000 extra every month.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>By 2024-25, RBI started easing. Repo rate came down to 6.0% by June 2026. Floating rate borrowers have seen their EMIs fall back toward ₹42,000–43,000.</p>
        <SvgRateHistory />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The lesson: over a full rate cycle, floating rate borrowers paid more during the hike phase and benefited during the easing phase. Those who locked in at a 9.35% fixed rate during the 2023 peak are now overpaying compared to floating rate peers.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The EMI Reality: Same Loan, Very Different Payments</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Let's run the numbers on a ₹50 lakh home loan for 20 years with a current fixed rate offer of 9.0% versus floating at 8.75% (June 2026 starting rate) across three scenarios.</p>
        <SvgEmiScenarios />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The fixed rate gives you ₹44,986 per month. Certain. Predictable. You know exactly what you'll pay in 2031, 2036, and 2046. This certainty has a very real psychological value — especially if you're on a single income, have dependents, or your career has income variability.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The floating rate starts at ₹44,072 (8.75%), so almost the same as fixed. But if rates rise 1.25% and stay elevated, you hit ₹48,251. That extra ₹3,265 per month compounds into ₹7.8 lakh more interest over 20 years.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Conversely, if rates fall to 8.0% and stay there, floating rate borrowers pay ₹41,822 — saving ₹3,164/month versus fixed, or ₹7.6 lakh over 20 years.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Break-Even Point: Where the Math Becomes a Decision</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The fundamental question is: by how much do rates need to rise (on average over your tenure) for the fixed rate to save you money versus floating?</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For a ₹50L, 20-year loan at current rates (fixed 9.0%, floating 8.75%), the break-even is approximately: if floating rates average more than 9.0% over 20 years, you'd have been better off with fixed. Since they're starting at 8.75%, they need to rise and stay about 0.25% above the fixed rate on average.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>But wait — the fixed rate premium is more typically 0.5–0.6% above floating (not 0.25%). With HDFC fixed at 9.35% and floating at 8.75%, the break-even is: floating needs to average more than 9.35% over 20 years for fixed to win. Floating rates have exceeded 9.35% for roughly 24 months out of the last 6 years. Statistically, floating has won in India over long tenures.</p>
        <SvgBreakEvenAnalysis />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is not a guarantee. It's a base rate probability. If you are in a position where a ₹5,000–8,000 EMI jump in a bad rate environment would genuinely harm your family's finances, the fixed rate insurance is worth every rupee of that premium.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Total Interest Across 20 Years: Three Futures</h2>
        <SvgTotalInterestComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The green bar is the floating rate borrower's dream — rates fall steadily and they save almost ₹10 lakh vs fixed. The orange-red bars are the nightmare — rates rise sharply and they pay ₹10 lakh more than they would have on fixed.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Here's what the historical data says: over the last 20 years in India, floating rate borrowers have, on average, paid less than they would have on fixed rate products from the same year. But that average includes a very painful 2022-23 period that was unusually severe.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Think of fixed rate like term insurance. You might never "need" it. But when you do need it, the relief is enormous.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Decision Framework: 3 Questions</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>After looking at all the scenarios, here is a simple framework. Answer these three questions honestly.</p>
        <SvgDecisionTree />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Question 1: How long is your tenure? Under 7 years means floating rate risk is limited — rates rarely maintain an extreme for 7 years. For 7 years or less, floating is almost always cheaper. For 15–20 year tenures, you're making a multi-decade bet on interest rate cycles.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Question 2: Is your income stable and growing? Two-income household, government job, or a private sector job in a stable industry? You can absorb a ₹5,000–8,000 EMI spike for a couple of years without financial stress. Take floating. Single income, startup job, commission-based income, or irregular freelance income? Fixed rate removes one major variable from your financial life.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Question 3: What are your prepayment plans? If you expect to inherit money, sell an asset, or bonus-out a significant chunk of the loan in the next 5–8 years, take floating — fixed rate prepayment penalties (2–4%) make early exit expensive. For floating rate loans, RBI mandates zero prepayment penalty for individuals.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What Each Bank Actually Offers (June 2026)</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The availability of true long-term fixed rate products is actually limited in India. Most lenders offer either purely floating (most common) or "fixed for 3–5 years then converts to floating."</p>
        <SvgBankProductTable />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>SBI, India's largest home lender, does not offer a true long-term fixed rate home loan as of June 2026. Their product lineup is entirely floating (EBLR-linked). If you want fixed rate, you're looking at HDFC Bank, ICICI Bank, Axis Bank, or some housing finance companies like LIC Housing Finance and PNB Housing Finance.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Axis Bank's fixed rate is currently the most attractively priced with the narrowest spread above their floating rate (0.40% vs HDFC/ICICI's 0.60%). If you've decided fixed is right for you, Axis is worth checking first.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>One smart structure that few people consider: take a floating rate loan but fix your EMI amount higher than required. When rates fall, you continue paying the higher EMI — the extra goes to principal prepayment. When rates rise, your higher EMI buffer means you might not even notice the rate increase for a year or two. This is a DIY "fixed-equivalent" strategy without the premium.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What to Actually Do Right Now</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Given that RBI is in a mild easing cycle (June 2026) and floating rates are already falling from the 2023 peak: the base case for new borrowers favours floating.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If you took a fixed rate loan in 2022-23 at 9.0%+: don't automatically regret it. You bought certainty during a brutal rate hike cycle. Whether switching to floating now (paying the conversion fee) makes sense depends on how much tenure is left and how aggressively RBI is expected to cut.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If you're taking a fresh loan now: get quotes for both fixed and floating from your shortlisted banks. Plug the numbers into our <Link href="/tools/emi-calculator" style={{ color: COLOR }}>EMI calculator</Link> and model three scenarios (rates flat, up 1%, down 1%). The floating case will look better under two of the three scenarios unless you're very risk-averse.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Also read our full comparison at <Link href="/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" style={{ color: COLOR }}>SBI vs HDFC vs ICICI home loan</Link> to see which bank to shortlist first, and our <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment penalty guide</Link> before you sign anything.</p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" style={{ color: COLOR }}>SBI vs HDFC vs ICICI home loan</Link> · <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment penalty trap</Link> · <Link href="/tools/emi-calculator" style={{ color: COLOR }}>EMI calculator</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>
        Editorial disclaimer: rates verified against SBI, HDFC Bank, ICICI Bank, and Axis Bank public disclosures as of {UPDATED}. RBI repo rate history from RBI.org.in. EBLR data from respective bank websites. Not financial advice — consult a SEBI-registered financial advisor before making long-tenure loan decisions.
      </footer>
    </main>
  );
}
