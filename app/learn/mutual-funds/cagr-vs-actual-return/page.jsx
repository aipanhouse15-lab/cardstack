import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "CAGR Is a Lie (Sort Of): Why Your Mutual Fund's 18% CAGR Doesn't Mean What You Think",
  description: "The fund brochure says 18% CAGR. Your portfolio shows 11% XIRR. Both are accurate but measure different things. The gap explained with real math.",
  alternates: { canonical: "/learn/mutual-funds/cagr-vs-actual-return" },
  openGraph: {
    title: "CAGR Is a Lie (Sort Of): Why Your Mutual Fund's 18% CAGR Doesn't Mean What You Think",
    description: "The fund brochure says 18% CAGR. Your portfolio shows 11% XIRR. Both are accurate but measure different things. The gap explained with real math.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/mutual-funds/cagr-vs-actual-return
// Template: Math walkthrough — demystifying a common misconception
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgCAGRvsXIRR = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="CAGR versus XIRR comparison showing that a fund with 18 percent CAGR can give only 11 percent XIRR to a SIP investor depending on when each installment was invested and how the market moved" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">CAGR vs XIRR: THE SAME FUND, TWO VERY DIFFERENT RETURNS · ₹10,000 SIP · 5 YEARS</text>
    <rect x="20" y="40" width="320" height="160" fill={COLOR} rx="8" opacity="0.08" stroke={COLOR} strokeWidth="1" />
    <text x="180" y="65" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>FUND BROCHURE SAYS: 18% CAGR</text>
    <text x="180" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Measured: ₹10,000 lump sum Jan 2020</text>
    <text x="180" y="106" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Value: ₹22,877 by Dec 2024</text>
    <text x="180" y="124" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">(10,000 × 1.18^5 = ₹22,878)</text>
    <text x="180" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="800" fill={COLOR}>18% CAGR ✓</text>
    <text x="180" y="168" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">This is mathematically correct.</text>
    <text x="180" y="184" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">But you didn't invest lump sum.</text>
    <rect x="380" y="40" width="320" height="160" fill="#dc2626" rx="8" opacity="0.08" stroke="#dc2626" strokeWidth="1" />
    <text x="540" y="65" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">YOUR ACCOUNT SHOWS: 11% XIRR</text>
    <text x="540" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">SIP: ₹10K/month for 60 months</text>
    <text x="540" y="106" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Total invested: ₹6,00,000</text>
    <text x="540" y="124" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Value in Dec 2024: ₹7,88,000</text>
    <text x="540" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="800" fill="#dc2626">11% XIRR (actual)</text>
    <text x="540" y="168" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Each SIP installment has different</text>
    <text x="540" y="184" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">time in market — avg is less than 5yr.</text>
    <text x="20" y="220" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">Why the gap? Fund CAGR measures point-to-point performance on a lump sum. Your SIP had later installments with less time to grow.</text>
    <text x="20" y="240" fontFamily="system-ui" fontSize="12" fill="var(--text-muted)">SIP installment in Month 1: 60 months to grow. SIP installment in Month 48: only 12 months to grow. Most of your invested corpus has much less than 5 years in market.</text>
    <text x="20" y="258" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Correct metric for SIP returns: XIRR (Extended Internal Rate of Return). This accounts for the timing of each cash flow. Always demand XIRR from your platform — not CAGR.</text>
  </svg>
);

const SvgSequenceOfReturns = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Sequence of returns risk showing two funds with identical 10 percent CAGR but different sequences producing very different actual wealth outcomes for SIP investors" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SAME CAGR, DIFFERENT ACTUAL WEALTH · THE SEQUENCE OF RETURNS PROBLEM</text>
    <text x="20" y="40" fontFamily="system-ui" fontSize="12" fill="var(--text)">Two imaginary funds. Both exactly 10% CAGR over 5 years. But you invested ₹10,000/month via SIP.</text>
    <rect x="20" y="54" width="320" height="160" fill="#16a34a" rx="8" opacity="0.08" stroke="#16a34a" strokeWidth="1" />
    <text x="180" y="78" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#16a34a">Fund A: Good early, bad later</text>
    {[["Yr 1", "+25%"], ["Yr 2", "+20%"], ["Yr 3", "+10%"], ["Yr 4", "-10%"], ["Yr 5", "-10%"]].map(([yr, ret], i) => (
      <text key={yr} x="30" y={98 + i * 22} fontFamily="system-ui" fontSize="11" fill="var(--text)">{yr}: {ret}</text>
    ))}
    <text x="30" y="210" fontFamily="system-ui" fontSize="11" fill={COLOR}>CAGR: ~10% | SIP Final Value: ₹8.2L</text>
    <rect x="380" y="54" width="320" height="160" fill="#dc2626" rx="8" opacity="0.08" stroke="#dc2626" strokeWidth="1" />
    <text x="540" y="78" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#dc2626">Fund B: Bad early, good later</text>
    {[["Yr 1", "-10%"], ["Yr 2", "-10%"], ["Yr 3", "+10%"], ["Yr 4", "+20%"], ["Yr 5", "+25%"]].map(([yr, ret], i) => (
      <text key={yr} x="390" y={98 + i * 22} fontFamily="system-ui" fontSize="11" fill="var(--text)">{yr}: {ret}</text>
    ))}
    <text x="390" y="210" fontFamily="system-ui" fontSize="11" fill="#dc2626">CAGR: ~10% | SIP Final Value: ₹7.1L</text>
    <rect x="180" y="230" width="360" height="24" fill={COLOR} rx="4" opacity="0.9" />
    <text x="360" y="246" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Identical CAGR. ₹1.1L difference in actual SIP corpus.</text>
    <text x="20" y="262" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Good early returns allow more units to accumulate at higher NAV before later dips. SIP investors actually benefit from early market weakness — they accumulate more units cheaply.</text>
  </svg>
);

const SvgCherryPickedWindows = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="How mutual fund companies cherry-pick performance windows showing how a fund can show 25 percent 3-year return or 8 percent 5-year return for the same fund depending on start date" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW FUND HOUSES CHERRY-PICK PERFORMANCE WINDOWS · SAME FUND, DIFFERENT STORY</text>
    <rect x="20" y="38" width="680" height="160" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" rx="8" />
    <text x="30" y="60" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">Example: Mirae Asset Large Cap Fund (hypothetical)</text>
    <text x="30" y="80" fontFamily="system-ui" fontSize="12" fill="var(--text-muted)">NAV trend (simplified): Jan 2019 = 100 → Jan 2021 = 80 (COVID crash) → Jan 2024 = 200 → Jan 2026 = 215</text>
    {[
      { window: "3-year return (Jan 2021 to Jan 2024)", cagr: "35.7%", note: "Starts at COVID low — looks spectacular", color: "#16a34a" },
      { window: "5-year return (Jan 2019 to Jan 2024)", cagr: "14.9%", note: "More realistic, includes pre-COVID base", color: COLOR },
      { window: "7-year return (Jan 2019 to Jan 2026)", cagr: "11.5%", note: "Captures full cycle including post-rally plateau", color: "#f59e0b" },
      { window: "Recent 2-year (Jan 2024 to Jan 2026)", cagr: "3.6%", note: "Post-rally period — fund chose not to advertise this", color: "#dc2626" },
    ].map(({ window, cagr, note, color }, i) => (
      <g key={window}>
        <text x="30" y={102 + i * 24} fontFamily="system-ui" fontSize="10" fill="var(--text)">{window}</text>
        <rect x="310" y={88 + i * 24} width="80" height="18" fill={color} rx="3" />
        <text x="350" y={101 + i * 24} textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{cagr}</text>
        <text x="400" y={101 + i * 24} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{note}</text>
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Always look at 10-year and 15-year CAGR alongside 3-year. Also check rolling returns (average of all 3-year windows in the past decade) — a more honest picture of consistent performance.</text>
  </svg>
);

const SvgXIRRCalculation = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="How to calculate XIRR for your mutual fund SIP showing the three inputs needed and where to find them in your Zerodha or Groww account" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW TO CALCULATE YOUR ACTUAL XIRR IN 3 STEPS</text>
    {[
      { step: "1. Download your transaction statement", detail: "CAMS or KFintech (free). Covers all folios linked to your PAN. Download as Excel/CSV.", color: COLOR },
      { step: "2. List all cash flows with dates", detail: "Each SIP installment = negative cash flow (outgoing). Current portfolio value = positive (incoming, today's date).", color: "#f59e0b" },
      { step: "3. Use Excel XIRR formula", detail: "=XIRR(values, dates, 0.1). Values column: negative for each SIP, positive for current value. Dates: corresponding dates.", color: "#16a34a" },
    ].map(({ step, detail, color }, i) => (
      <g key={step}>
        <rect x="20" y={38 + i * 44} width="680" height="36" fill={color} rx="6" opacity="0.08" stroke={color} strokeWidth="1" />
        <text x="30" y={56 + i * 44} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{step}</text>
        <text x="30" y={70 + i * 44} fontFamily="system-ui" fontSize="11" fill="var(--text)">{detail}</text>
      </g>
    ))}
    <text x="20" y="175" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Most modern platforms (Zerodha Coin, Kuvera, Groww) show XIRR directly in your portfolio. Look for "returns" in your dashboard — if it shows "absolute" or "CAGR" without clarifying SIP timing, ask for XIRR explicitly.</text>
  </svg>
);

const SvgRollingReturns = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Rolling 3 year returns for Nifty 50 index showing that the average of all 3 year periods since 2005 is around 11 percent even though some periods gave negative returns" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">NIFTY 50: ROLLING 3-YEAR RETURNS 2005-2026 · THE HONEST PICTURE</text>
    <line x1="60" y1="160" x2="700" y2="160" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="160" stroke="var(--border)" />
    {[
      { yr: "2005-08", ret: 45, color: "#16a34a" },
      { yr: "2006-09", ret: -8, color: "#dc2626" },
      { yr: "2009-12", ret: 22, color: "#16a34a" },
      { yr: "2012-15", ret: 14, color: "#16a34a" },
      { yr: "2015-18", ret: 8, color: "#f59e0b" },
      { yr: "2018-21", ret: 12, color: "#16a34a" },
      { yr: "2020-23", ret: 28, color: "#16a34a" },
      { yr: "2021-24", ret: 16, color: "#16a34a" },
      { yr: "2023-26", ret: 11, color: "#16a34a" },
    ].map(({ yr, ret, color }, i) => {
      const h = Math.abs(ret) * 2;
      const y = ret >= 0 ? 160 - h : 160;
      return (
        <g key={yr}>
          <rect x={60 + i * 72} y={y} width="55" height={h} fill={color} rx="3" opacity="0.8" />
          <text x={87 + i * 72} y={ret >= 0 ? y - 4 : y + h + 12} textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill={color}>{ret}%</text>
          <text x={87 + i * 72} y="176" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="var(--text-muted)">{yr}</text>
        </g>
      );
    })}
    <path d="M 60 100 L 700 100" stroke={COLOR} strokeWidth="2" strokeDasharray="6,3" />
    <text x="660" y="96" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">avg ~11%</text>
    <text x="20" y="195" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">One 3-year window showed -8% (2006-09 financial crisis). Eight of nine windows showed positive returns. Long-term average is ~11% CAGR for Nifty 50. Cherry-picking any single window tells a different story.</text>
  </svg>
);

export default function PageCAGRvsActualReturn() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the difference between CAGR and XIRR in mutual funds?", "acceptedAnswer": { "@type": "Answer", "text": "CAGR (Compound Annual Growth Rate) measures how a single lump-sum investment has grown from point A to point B. It assumes one investment at the start. XIRR (Extended Internal Rate of Return) accounts for multiple investments at different times — which is how SIPs work. For SIP investors, CAGR of a fund is almost always higher than your actual XIRR, because each SIP installment has progressively less time in the market. Always use XIRR for SIP return evaluation." } },
      { "@type": "Question", "name": "Why is my actual mutual fund return lower than the fund's advertised CAGR?", "acceptedAnswer": { "@type": "Answer", "text": "Several reasons: (1) The fund's CAGR is point-to-point on a single investment — your SIP installments have different entry points and time horizons. (2) The advertised CAGR might use a cherry-picked start date (often a market low) that makes returns look exceptional. (3) Taxes on gains (LTCG/STCG) and exit loads reduce your actual take-home. (4) Expense ratio drag reduces NAV growth over time. Calculate XIRR using your actual investment dates and current portfolio value for an honest picture." } },
      { "@type": "Question", "name": "How do I calculate XIRR for my SIP?", "acceptedAnswer": { "@type": "Answer", "text": "Download your transaction statement from CAMS or KFintech (free with PAN). Open Excel. Create two columns: cash flows (negative for each SIP installment, positive for current portfolio value as of today) and dates (corresponding dates for each transaction). Use formula =XIRR(cash flow column, dates column, 0.1). The result is your annual XIRR. Most modern platforms (Zerodha Coin, Kuvera, MF Central) also display XIRR directly in the portfolio section — look for it there first." } },
      { "@type": "Question", "name": "What is a good XIRR for a mutual fund SIP?", "acceptedAnswer": { "@type": "Answer", "text": "For a Nifty 50 index fund SIP over 10+ years, XIRR in the range of 10-14% is realistic and good. Large cap active funds: 11-15% XIRR historically. Flexi cap and mid cap funds: 12-18% XIRR in good periods. XIRR below 8% on a 10-year SIP suggests either poor fund selection or you were unlucky with timing. Debt fund SIPs: 6-8% XIRR is typical. Compare your XIRR against the fund's category average and Nifty 50 benchmark XIRR over the same period." } },
      { "@type": "Question", "name": "What are rolling returns and why are they a better metric?", "acceptedAnswer": { "@type": "Answer", "text": "Rolling returns are the average of all CAGR periods of a specific length (say, all 3-year periods since 2000). This eliminates start-date bias. Instead of 'the fund returned 25% in the 3 years ending December 2023,' rolling returns say 'across all 3-year windows from 2003 to 2026, this fund's average 3-year return was 14%.' This is a more reliable predictor of future performance. Value Research Online and Advisor Khoj provide rolling return data for free." } },
      { "@type": "Question", "name": "What is the sequence of returns risk for SIP investors?", "acceptedAnswer": { "@type": "Answer", "text": "Sequence of returns risk means identical average returns produce different actual wealth depending on when good vs bad years occur. For SIP investors: early market drops are actually beneficial because you accumulate more units cheaply, which then grow in later bull runs. Late market drops (near withdrawal) are harmful because your accumulated corpus shrinks. This is why SIP investors often hear 'market crashes are a sale.' The real risk for SIP investors is needing to withdraw at the wrong time — build a timeline-appropriate portfolio as you approach your goal." } },
      { "@type": "Question", "name": "Should I compare mutual funds by CAGR or XIRR?", "acceptedAnswer": { "@type": "Answer", "text": "Use CAGR only for lump sum investments. Use XIRR for SIP investments — always. For fund comparison, look at 10-year CAGR (lump sum reference), rolling 3-year returns (consistency indicator), and benchmark comparison (does the fund beat Nifty 50 over 10 years?). For your personal portfolio, use XIRR with your actual investment amounts and dates — not fund house-reported CAGR numbers. They're measuring different things." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "CAGR vs Actual Return: Why Your Mutual Fund's 18% CAGR Doesn't Mean What You Think", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Mutual Funds", item: "https://assurefintech.com/learn/mutual-funds/" },
    { "@type": "ListItem", position: 4, name: "CAGR vs Actual Return", item: "https://assurefintech.com/learn/mutual-funds/cagr-vs-actual-return" },
  ]};

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/mutual-funds" style={{ color: "inherit" }}>Mutual Funds</Link> / CAGR vs Actual Return</nav>
      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>MUTUAL FUNDS · RETURNS · HOW TO MEASURE</div>
      <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>CAGR Is a Lie (Sort Of): Why Your Mutual Fund's 18% CAGR Doesn't Mean What You Think</h1>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>The fund brochure says 18% CAGR. Your portfolio shows 11% XIRR. Both numbers are accurate. They're measuring different things. Understanding the difference could change how you evaluate every investment.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>Last updated {UPDATED} · By Ash K · 11 min read</div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Fundamental Mismatch</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Compound Annual Growth Rate (CAGR) answers the question: if I had invested a lump sum on date X, what annual return would explain the NAV movement to date Y? It's a clean, simple metric for lump-sum performance evaluation.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>But you didn't invest a lump sum. You invested ₹10,000 every month for 60 months. Your first installment had 60 months in the market. Your last installment had 1 month. The CAGR of the fund measures a different investment pattern than yours. The fund CAGR is not your return.</p>
        <SvgCAGRvsXIRR />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>XIRR (Extended Internal Rate of Return) is the correct metric for SIP investors. It accounts for the timing and size of every cash flow. If you invested ₹10,000 in January 2020 and different amounts in subsequent months, XIRR gives you the single annualized return that makes all those cash flows add up correctly. This is your actual return.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Same CAGR, Different Money: The Sequence Problem</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Even more counterintuitive: two funds with identical 10-year CAGR can produce different actual wealth for SIP investors. The reason is the order in which returns occur — the sequence of returns.</p>
        <SvgSequenceOfReturns />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This has a positive implication: SIP investors benefit from early market weakness. When the market falls in Year 1 and Year 2, your ₹10,000/month buys more units at lower prices. Those units then grow substantially when the market recovers in Year 4 and Year 5. Dollar-cost averaging works because bad early years allow you to accumulate more units at cheaper prices.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The lesson: stop worrying about market timing for SIP investments. An immediate crash after you start a SIP is actually good news — you're buying more units at a discount.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How Fund Houses Cherry-Pick Windows</h2>
        <SvgCherryPickedWindows />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Every fund house's marketing team knows that choosing the right 3-year or 5-year window can make any fund look exceptional. Starting the measurement at a market low (like March 2020 COVID crash) and ending at a market high produces spectacular-looking CAGR numbers.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The better metrics: 10-year and 15-year CAGR (captures multiple market cycles), rolling returns (average of all N-year windows since inception), and benchmark comparison (does the fund beat Nifty 50 TRI over 10 years after expenses?). Rolling returns are particularly honest — they can't be cherry-picked because they average all periods.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How to Calculate Your Actual XIRR</h2>
        <SvgXIRRCalculation />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Most modern investment platforms make this easy. Zerodha Coin, Kuvera, and Groww all display XIRR prominently. Paytm Money and ET Money also show it. MF Central (the AMFI-run consolidator) shows XIRR across all your funds in one place — free, with your PAN.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If your platform shows XIRR significantly lower than the fund's advertised CAGR: that's expected and not a problem. The gap is the difference between how the fund grew and how your specific investment timing translated to returns. As long as your XIRR beats fixed deposits and inflation (comfortably for long-tenure equity SIPs), the investment is doing its job.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Rolling Returns Reality for Nifty 50</h2>
        <SvgRollingReturns />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Nifty 50's rolling 3-year CAGR has averaged approximately 11% over any randomly chosen 3-year window since 2005. Some windows showed -8% (2006-09). Most showed 10-25%. This distribution — one bad period, many good ones — is what long-term equity investing actually looks like.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The implication for SIP investors: if you stay invested through at least one full market cycle (typically 7-10 years), you capture the good windows and dilute the bad ones through continued investment. The math gets dramatically better with patience.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our related guides: <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>Direct vs Regular plans</Link> (don't let expense ratios eat your CAGR), <Link href="/learn/mutual-funds/sip-advertised-vs-actual" style={{ color: COLOR }}>SIP advertised vs actual returns</Link>, and the <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link>.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link> · <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>direct vs regular</Link> · <Link href="/learn/mutual-funds/sip-advertised-vs-actual" style={{ color: COLOR }}>SIP advertised vs actual</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: return data from AMFI, Value Research, and NSE India as of {UPDATED}. XIRR explanation based on standard financial mathematics. Past returns do not guarantee future performance. Not investment advice.</footer>
    </main>
  );
}
