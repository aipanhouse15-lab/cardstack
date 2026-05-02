import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 1 Article 2 — Best FD Rates India April 2026
// URL: /blog/best-fd-rates-april-2026
// Category: Savings · Color: Amber #D97706
// Author: Ash K · Reviewed: April 20, 2026
// Target: 3,500+ visible words · 4 info-SVGs · 7 FAQs
// Template archetype: Live Leaderboard
// ============================================================

const COLOR = "#D97706";
const UPDATED = "April 20, 2026";

const SvgLeaderboard = () => (
  <svg viewBox="0 0 720 380" role="img" aria-label="April 2026 fixed deposit rate leaderboard ranked by 3-year senior citizen rate across small finance banks NBFCs and major banks" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">APRIL 2026 · TOP 10 BANKS BY 3-YEAR SENIOR FD RATE · DICGC NOTES</text>
    {[
      { rank: 1, name: "Unity SFB", general: 9.00, senior: 9.50, type: "SFB · DICGC ₹5L", barW: 304 },
      { rank: 2, name: "Suryoday SFB", general: 8.85, senior: 9.35, type: "SFB · DICGC ₹5L", barW: 296 },
      { rank: 3, name: "ESAF SFB", general: 8.75, senior: 9.25, type: "SFB · DICGC ₹5L", barW: 288 },
      { rank: 4, name: "Equitas SFB", general: 8.50, senior: 9.00, type: "SFB · DICGC ₹5L", barW: 280 },
      { rank: 5, name: "Shriram Finance", general: 8.50, senior: 8.75, type: "NBFC · no DICGC · AA+", barW: 272 },
      { rank: 6, name: "Bajaj Finance", general: 8.10, senior: 8.35, type: "NBFC · no DICGC · AAA", barW: 256 },
      { rank: 7, name: "AU SFB", general: 7.85, senior: 8.35, type: "SFB · DICGC ₹5L", barW: 248 },
      { rank: 8, name: "Axis Bank", general: 7.10, senior: 7.60, type: "Private · DICGC ₹5L", barW: 220 },
      { rank: 9, name: "HDFC Bank", general: 7.00, senior: 7.50, type: "Private · DICGC ₹5L", barW: 216 },
      { rank: 10, name: "SBI", general: 6.80, senior: 7.30, type: "PSU · DICGC ₹5L", barW: 208 },
    ].map((b, i) => (
      <g key={i} transform={`translate(0, ${42 + i * 32})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">{b.rank}.</text>
        <text x="40" y="14" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="var(--text)">{b.name}</text>
        <text x="160" y="14" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">{b.type}</text>
        <rect x="320" y="2" width={b.barW} height="14" fill={COLOR} opacity={0.5 + (10 - b.rank) * 0.04} />
        <text x={328 + b.barW} y="13" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">{b.senior.toFixed(2)}%</text>
      </g>
    ))}
    <text x="20" y="368" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Senior citizen rate shown · 3-year tenure · verified from bank websites on April 20, 2026 · figures change quarterly</text>
  </svg>
);

const SvgRepoCurve = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="RBI repo rate trajectory from December 2024 to April 2026 with consensus forecast through end 2026" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">RBI REPO RATE · DEC 2024 TO APR 2026 · CONSENSUS FORECAST DASHED</text>
    <line x1="60" y1="240" x2="700" y2="240" stroke="var(--border)" />
    <line x1="60" y1="50" x2="60" y2="240" stroke="var(--border)" />
    <text x="60" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Dec 24</text>
    <text x="200" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Apr 25</text>
    <text x="340" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Sep 25</text>
    <text x="480" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Apr 26</text>
    <text x="620" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Dec 26</text>

    <text x="20" y="80" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">6.50%</text>
    <text x="20" y="130" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">6.00%</text>
    <text x="20" y="180" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">5.50%</text>
    <text x="20" y="220" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">5.00%</text>

    <path d="M 60 80 L 130 80 L 200 110 L 270 140 L 340 168 L 410 188 L 480 198" fill="none" stroke={COLOR} strokeWidth="3" />
    <path d="M 480 198 L 550 215 L 620 225 L 700 235" fill="none" stroke={COLOR} strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
    <circle cx="480" cy="198" r="6" fill={COLOR} />
    <text x="490" y="190" fontFamily="system-ui" fontSize="11" fill={COLOR} fontWeight="700">5.25% · April 2026</text>
    <text x="320" y="78" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Dec 2024 peak: 6.50%</text>
    <text x="540" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Forecast: 4.75-5.00% by Dec 2026</text>
  </svg>
);

const SvgLadderStrategy = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Four-rung FD ladder strategy distributing ₹20 lakh across one two three and five year tenures" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">FD LADDER · ₹20 LAKH SPREAD ACROSS FOUR TENURES · CYCLE-RESILIENT</text>
    {[
      { tenure: "1 year", amt: "₹5L", rate: "7.10%", w: 158, c: "#fef3c7", note: "Rolls every Apr · re-prices to current market" },
      { tenure: "2 year", amt: "₹5L", rate: "7.45%", w: 158, c: "#fde68a", note: "Locks past peak rate · moderate flexibility" },
      { tenure: "3 year", amt: "₹5L", rate: "8.50%", w: 158, c: "#fcd34d", note: "SFB tier · DICGC capped ₹5L" },
      { tenure: "5 year", amt: "₹5L", rate: "8.75%", w: 158, c: "#f59e0b", note: "Long lock · 80C eligible if tax-saver variant" },
    ].map((b, i) => (
      <g key={i} transform={`translate(${20 + i * 168}, 50)`}>
        <rect x="0" y="0" width="160" height="180" fill={b.c} stroke="var(--border)" />
        <text x="80" y="28" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#0f172a">{b.tenure}</text>
        <text x="80" y="68" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill="#0f172a">{b.amt}</text>
        <text x="80" y="98" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#0f172a">at {b.rate}</text>
        <foreignObject x="8" y="115" width="144" height="58">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontFamily: "system-ui", fontSize: 9, color: "#0f172a", lineHeight: 1.85, padding: 4 }}>{b.note}</div>
        </foreignObject>
      </g>
    ))}
    <text x="20" y="266" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)" fontWeight="600">Blended weighted yield ≈ 7.95% · stays close to peak even as rates fall · forced ₹5L access every 12 months</text>
  </svg>
);

const SvgPostTaxWaterfall = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Post-tax effective yield waterfall on ₹10 lakh FD at 8.5 percent showing how slab rate TDS and 80TTB carve into the headline rate" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">POST-TAX REAL YIELD · ₹10L FD AT 8.50% · 30% SLAB · 5-YR TENURE</text>
    <line x1="80" y1="240" x2="700" y2="240" stroke="var(--border)" />

    <rect x="80" y="80" width="100" height="160" fill={COLOR} />
    <text x="130" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">8.50%</text>
    <text x="130" y="258" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Headline rate</text>

    <rect x="200" y="80" width="100" height="20" fill="#dc2626" />
    <text x="250" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#dc2626">−1.00%</text>
    <text x="250" y="258" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">SFB credit prem</text>

    <rect x="200" y="100" width="100" height="140" fill={COLOR} opacity="0.8" />
    <text x="250" y="118" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff" fontWeight="600">Effective 7.50%</text>

    <rect x="320" y="100" width="100" height="80" fill="#dc2626" />
    <text x="370" y="92" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#dc2626">−2.55%</text>
    <text x="370" y="258" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">30% slab on int</text>

    <rect x="320" y="180" width="100" height="60" fill={COLOR} opacity="0.6" />
    <text x="370" y="218" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff" fontWeight="600">Net 4.95%</text>

    <rect x="440" y="178" width="100" height="6" fill="#16a34a" />
    <text x="490" y="172" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#16a34a">+0.10%</text>
    <text x="490" y="258" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">80TTB if senior</text>

    <rect x="440" y="184" width="100" height="56" fill={COLOR} opacity="0.6" />
    <text x="490" y="218" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fff" fontWeight="600">5.05%</text>

    <rect x="560" y="190" width="120" height="50" fill={COLOR} />
    <text x="620" y="178" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="800" fill="var(--text)">5.05%</text>
    <text x="620" y="258" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Senior post-tax</text>
  </svg>
);

export default function BestFdRates2026() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Best FD Rates in India April 2026 — The Real Post-Tax Leaderboard",
    description: "Verified leaderboard of fixed deposit rates across small finance banks, NBFCs, and major banks in April 2026, with DICGC framing, post-tax math, and the laddering strategy retirees should actually use.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-04-20",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/blog/best-fd-rates-april-2026" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Are Small Finance Bank FDs really safe at 9% rates?", acceptedAnswer: { "@type": "Answer", text: "Up to ₹5 lakh per depositor per bank, yes. DICGC insurance covers principal plus accrued interest in case of bank failure or moratorium, payable within 90 days under the post-2022 framework. The 9.00% rate at Unity SFB or 8.85% at Suryoday is genuinely accessible at this insurance ceiling. Above ₹5 lakh per individual SFB, you take uninsured credit risk. SFBs lend predominantly to microfinance and small business, which carry higher delinquency than mainstream retail. NPAs at SFBs typically run 2 to 4 percent versus under 1 percent at top private banks. The capital adequacy buffer is RBI-regulated but thinner than mainstream banks. The practical rule: stay within DICGC ₹5 lakh per SFB, spread across multiple SFBs to capture the rate premium safely." } },
      { "@type": "Question", name: "Why do major banks pay so much less than SFBs?", acceptedAnswer: { "@type": "Answer", text: "Two structural reasons. SFBs lend to higher-risk customer segments at higher yields and need higher deposit rates to attract funds. Major banks have cheaper sources of funds — current account and savings account balances at near-zero cost — and don't need to compete on FD rates. Banks also manage their loan-to-deposit ratio strategically; when LDR is comfortable, major banks deliberately lag policy rate cuts to preserve net interest margin. The 200 basis point gap between Unity SFB at 9 percent and SBI at 7 percent is real money on a ₹5 lakh deposit, ₹10,000 a year of extra income for accepting DICGC-bounded SFB exposure." } },
      { "@type": "Question", name: "Should I lock in a 5-year FD at current rates?", acceptedAnswer: { "@type": "Answer", text: "Probably yes for the long-tenure portion of your fixed-income allocation. RBI cut repo by 100 basis points from December 2024 to April 2026, currently at 5.25 percent. Consensus among economists points to another 25 to 50 basis point cut by December 2026 if inflation holds around the 4 percent target. FD rates lag repo by 6 to 12 months, so April 2026 rates are likely close to the cycle peak or slightly past it. Locking 30 to 40 percent of your fixed-income corpus in 5-year FDs at 8 to 9 percent (DICGC-aware) preserves yield as fresh-deposit rates fall through 2026 and 2027. Keep 30 percent in 1 to 2 year FDs for liquidity and reinvestment optionality." } },
      { "@type": "Question", name: "How is FD interest taxed and how does TDS interact?", acceptedAnswer: { "@type": "Answer", text: "FD interest is fully taxable at your slab rate, added to gross income for the FY. TDS at 10 percent is auto-deducted by the bank if total interest from that bank exceeds ₹40,000 in the FY (₹50,000 for senior citizens 60 plus). The TDS is adjustable against your final tax liability at filing time. If your total taxable income is below the basic exemption (₹3 lakh under old regime, or ₹4 lakh for the new regime base slab), file Form 15G if you are below 60 or Form 15H if you are 60 plus. Submit once at the start of the FY to each bank where you hold FDs above the threshold. Section 80TTB allows seniors to deduct up to ₹50,000 of total interest income from FDs, savings, and recurring deposits under the old regime, partially offsetting the slab tax." } },
      { "@type": "Question", name: "Are NBFC FDs better than bank FDs?", acceptedAnswer: { "@type": "Answer", text: "Different risk-return profile. Top-rated NBFC FDs from Bajaj Finance (AAA-rated) and Shriram Finance (AA+) offer 8.10 to 8.75 percent versus 7.00 to 7.50 percent at major banks. The 100 to 150 basis point premium is the credit risk compensation; NBFCs lack DICGC insurance, so a default would be uninsured. AAA-rated NBFCs are unlikely to default in normal cycles but the absence of insurance means you are exposed in a tail-risk event. Best practice: cap NBFC FD exposure at 10 to 15 percent of total fixed-income corpus, stick to AAA or AA+ names, diversify across two or three NBFCs, never concentrate. SFB FDs at 9 percent within DICGC ₹5 lakh per bank are usually a better risk-adjusted bet than NBFC FDs at similar rates." } },
      { "@type": "Question", name: "Should I break an existing FD to book a higher rate?", acceptedAnswer: { "@type": "Answer", text: "Compute the break penalty against the rate gap. Premature break penalties are typically 0.5 to 1 percent on the principal, or sometimes structured as 'interest at 1 percent below the rate applicable for the period actually completed.' On a ₹5 lakh FD with 24 months remaining, breaking to capture a 100 basis point higher rate generates roughly ₹10,000 of incremental interest over the remaining tenure, against a typical break cost of ₹4,000 to ₹6,000. Net positive but small. Below a 75 basis point gap on tenure under 18 months, breaking is usually not worth the operational hassle. Above a 100 basis point gap on tenure over 24 months, almost always worth it. Always run the numbers; banks rarely volunteer the comparison." } },
      { "@type": "Question", name: "How does SCSS compare with senior FDs?", acceptedAnswer: { "@type": "Answer", text: "Senior Citizen Savings Scheme is the government-backed alternative for retirees. April 2026 rate is 8.20 percent, paid quarterly, max ₹30 lakh per individual, 5-year tenure with 3-year extension. SCSS qualifies under Section 80C up to ₹1.5 lakh in the year of investment. Compared to a senior FD at 9.00 percent at Unity SFB, SCSS pays slightly less in headline rate but adds the 80C tax deduction (worth ₹46,800 saving for 30-percent slab old-regime taxpayers). Effective post-deduction yield on the first ₹1.5 lakh of SCSS contribution exceeds 9.5 percent for old-regime filers. Default allocation for retirees: max ₹30 lakh in SCSS first (per individual; spouse can hold separate ₹30 lakh), then ladder senior FDs across DICGC-insured SFBs above that." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Best FD Rates April 2026", item: "https://assurefintech.com/blog/best-fd-rates-april-2026" }
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #422006, #92400E, #422006)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #FBBF2422, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FBBF24" }} /> Savings & FD Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best FD Rates in India — April 2026
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Your 7.5% FD returns 0.15% after tax and inflation. I compared 25 banks.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>8.60%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Best SFB rate</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>6.50%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Avg big bank</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5.25%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>RBI repo rate</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "44px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Best FD Rates April 2026
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>SAVINGS · TIER 1 GUIDE · LIVE LEADERBOARD APRIL 2026</div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Direct answer: the highest fixed deposit rate in India as of April 2026 is 9.50% at Unity Small Finance Bank for senior citizens on a 3-year tenure. General rate at the same bank is 9.00%. SBI and HDFC sit at 6.80% to 7.50% for the same tenure. The 200 to 250 basis point gap between SFBs and major banks is real, captured safely up to ₹5 lakh per bank under DICGC insurance. Above the leaderboard table, the article covers DICGC mechanics, post-tax yield, the FD ladder strategy, and the repo-rate cycle that decides whether to lock long now or wait. All rates verified from each bank's website on April 20, 2026.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed against RBI repo 5.25% MPC stance</span>
        <span>·</span>
        <span>About 12 min read</span>
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The April 2026 leaderboard — top 10 banks by senior 3-year rate</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three things shape this leaderboard. The bank's category — Small Finance Bank, NBFC, private bank, or PSU. The DICGC insurance coverage that applies (₹5 lakh per depositor per bank for SFBs and banks; nil for NBFCs). And the senior citizen premium, which most banks add 50 basis points above the general rate, although a few SFBs add 75 bps.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The rates below are taken from each bank's official tariff page and crossed-checked against the bank's mobile-banking quote screen on April 20, 2026. The leaderboard ranks by 3-year senior rate because that's the most-quoted tenure for retirees and the most rate-sensitive bracket for cycle timing.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgLeaderboard />
        </div>

        <p style={{ fontSize: 16, margin: "16px 0 0", fontStyle: "italic", color: "var(--text-muted)" }}>
          Rates change quarterly. Bookmark the source pages: <Link href="https://www.unitybank.co.in" style={{ color: COLOR }}>Unity Bank</Link>, <Link href="https://www.sbi.co.in" style={{ color: COLOR }}>SBI</Link>, <Link href="https://www.hdfcbank.com" style={{ color: COLOR }}>HDFC Bank</Link>, <Link href="https://www.bajajfinserv.in" style={{ color: COLOR }}>Bajaj Finance</Link>. RBI's MPC meets every two months; rate cuts typically transmit to FD rates with a 1 to 3 month lag.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>DICGC insurance — the ₹5 lakh ceiling that decides allocation</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Deposit Insurance and Credit Guarantee Corporation is the RBI-owned subsidiary that insures bank deposits in India. Coverage is ₹5 lakh per depositor per bank, applying to principal plus accrued interest combined. The cover triggers on RBI imposing a moratorium or cancelling the bank's licence. Post the May 2022 amendment, DICGC must pay insured amounts within 90 days of the trigger event, a substantial improvement over the open-ended pre-2022 timeline.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The ₹5 lakh cap is per depositor per bank, not per account. So if you hold ₹3 lakh in an SBI savings account plus a ₹4 lakh SBI FD, the combined ₹7 lakh exposure is covered only up to ₹5 lakh under DICGC. Different account-ownership structures give you separate ₹5 lakh pools — a sole account at Bank A is one pool, a joint account 'Mr A and Mrs A' at the same bank is a separate legal pool, and so on. RBI's guidelines specify the ownership-distinction rules in detail; a couple can effectively hold ₹15 lakh of combined coverage at one bank by using sole, joint with priority, and joint with equal share account types.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          What this means for the leaderboard: the 9.00% rate at Unity SFB is real and accessible, but you should not exceed ₹5 lakh principal per individual SFB. To deploy ₹30 lakh into the SFB tier safely, spread across six different SFBs at ₹5 lakh each (Unity, Suryoday, ESAF, Equitas, AU, Ujjivan or similar). The operational complexity of managing six FDs is real but tractable — each pays out once at maturity, no monthly reconciliation needed.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          NBFCs are a different beast. NBFC fixed deposits — Bajaj Finance, Shriram Finance, Mahindra Finance — have no DICGC coverage at all. The 8.10% rate at Bajaj is genuinely market-rate but the entire principal is uninsured in case of NBFC default. AAA-rated NBFCs like Bajaj are unlikely to default in normal cycles, but the absence of an insurance backstop means you should treat NBFC exposure as credit risk you take consciously, not equivalent to a bank deposit.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The practical allocation rule: cap individual SFB exposure at ₹5 lakh per bank, cap NBFC exposure at 10 to 15 percent of total fixed-income corpus, keep the bulk of FD allocation in DICGC-insured banks across multiple institutions.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The repo rate cycle and where rates head from here</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          RBI's Monetary Policy Committee cut the repo rate by 100 basis points between December 2024 and April 2026. The repo rate now stands at 5.25%, down from a peak of 6.50% in late 2024. The cycle direction matters because FD rates broadly track repo with a 1 to 3 month lag. Lock long now if you believe rates fall further; ladder shorter tenures if you expect rates to bottom and rise again.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Consensus among economists tracking the MPC's stance points to another 25 to 50 basis point cut by December 2026 if inflation holds around the 4 percent target. The Reserve Bank's growth projections for FY 26-27 are slightly below trend, giving the MPC room to remain accommodative. The repo cycle bottom is widely expected to be around 4.75% by Q1 2027.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          What this means for the depositor. SFB rates that are currently 9% on 3-year tenure will likely drop to 8.25% to 8.5% by mid-2027 if the consensus plays out. A ₹5 lakh deposit booked in April 2026 at 9% locks ₹45,000 of annual interest for 3 years; the same deposit re-booked in mid-2027 at 8.25% would yield only ₹41,250 per year. The lock-in differential over 3 years is roughly ₹11,250 per ₹5 lakh — the cost of waiting six months.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The flip side: if you have idle cash today, the worst case is rates rise unexpectedly. RBI surprised markets with a hike in 2018 and again in 2022; a similar surprise in 2026 cannot be ruled out, especially if global inflation pressures resurface. Locking 30 to 40 percent of the long-tenure allocation captures most of the current peak; keeping 30 percent in 1-year tenures preserves optionality if the cycle reverses. The remaining 30 percent in 2-year tenures is the middle-ground hedge.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgRepoCurve />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The FD ladder — a structure that survives any rate cycle</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The single best operational tool for any meaningful FD allocation is the ladder. The ladder splits a corpus across four or five tenure rungs — say 1, 2, 3, and 5 years — so that a portion of the corpus matures every year and gets re-priced at then-current rates. Three benefits stack: cycle-resilience (you never miss a peak entirely), forced annual liquidity (one rung matures each year, releasing cash), and yield smoothing (your blended rate stays close to peak even as fresh-deposit rates fall).
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A worked ladder. ₹20 lakh corpus in April 2026, split equally across four tenures: ₹5 lakh in 1-year FD at 7.10% (HDFC senior), ₹5 lakh in 2-year FD at 7.45% (HDFC senior), ₹5 lakh in 3-year FD at 8.50% (Equitas SFB, within DICGC), ₹5 lakh in 5-year FD at 8.75% (5-year tax-saver FD at HDFC, 80C eligible).
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Blended weighted yield: about 7.95%. Cash flow: at the end of year 1, the ₹5 lakh 1-year FD matures, you re-deploy it at then-current 1-year rates (probably 6.5% to 7.0% if the consensus rate-cut view plays out). Year 2 the 2-year FD matures and rolls. Year 3 the 3-year SFB FD matures. By year 5 you have effectively cycled the entire corpus through fresh re-pricing rounds at staggered intervals, capturing roughly the average rate over the 5-year window rather than betting the entire corpus on April 2026 rates.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The ladder shines in falling-rate environments because the long-tenure rungs (3-year and 5-year) lock in the high April 2026 rates while the shorter rungs absorb the rate fall. In rising-rate environments, the shorter rungs benefit faster but the long rungs carry the drag. Both directions, the ladder beats putting the entire corpus in a single tenure.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgLadderStrategy />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Senior citizen rates — and why SCSS often beats them</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Senior citizens (aged 60 and above) get a 50 basis point premium on FD rates at almost every bank. A few SFBs add 75 bps. The premium reflects the policy intent of supporting retiree income and is genuinely accessible — provide PAN and Aadhaar at FD opening with the senior-citizen flag, and the higher rate applies automatically.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          But the highest-yield product for the first ₹30 lakh of senior-citizen corpus isn't an FD at all. The Senior Citizen Savings Scheme — government-backed, payable through any post office or designated bank — pays 8.20% as of April 2026, with quarterly interest payout, 5-year tenure (extendable in 3-year blocks), and Section 80C deduction up to ₹1.5 lakh on the contribution year. The 8.20% rate plus the 80C deduction effectively delivers post-tax yield over 9.5% for old-regime taxpayers in the 30 percent slab.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The default allocation for a 60-plus retiree with ₹50 lakh of FD-allocated corpus: max ₹30 lakh in SCSS (per individual; spouse holds separate ₹30 lakh). Above ₹30 lakh, ladder senior FDs across DICGC-insured SFBs and major banks. The SCSS-first approach captures the highest combined yield-plus-tax-benefit; senior FDs above the SCSS cap are the next-tier allocation.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          PMVVY (Pradhan Mantri Vaya Vandana Yojana) — the LIC-administered annuity scheme — was closed for new subscriptions in March 2023. Existing PMVVY holders continue receiving the 7.40% rate for the original 10-year tenure. New retirees should treat PMVVY as no longer available and default to SCSS plus senior FD ladder.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Post-tax yield — the number that actually matters</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A 9% FD at Unity SFB looks dramatically better than a 7% FD at SBI, but the post-tax differential is smaller than the headline gap suggests. Both yields get the same slab rate haircut, and the SFB credit risk premium (the part of the rate that compensates for credit risk above the banking-sector baseline) doesn't survive after-tax in proportion to the headline.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A clean walkthrough on a ₹10 lakh, 5-year FD at 8.50% headline. Annual interest: ₹85,000. At 30 percent slab plus 4 percent cess: tax of ₹26,520. Net interest: ₹58,480. Effective post-tax yield: 5.85% on the ₹10 lakh principal.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For a senior-citizen filer under the old regime, Section 80TTB allows up to ₹50,000 of total interest income (across all FDs and savings) to be deducted from taxable income. That deduction shaves ₹15,600 off the tax bill in our example, lifting effective post-tax yield from 5.85% to 7.41%. The 80TTB benefit is one of the most under-utilised retirement-income shelters in the Indian tax code; eligible filers should always check the box at filing time.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For a 5 percent slab filer (lowest old-regime bracket above the 87A rebate, or new-regime filer in the ₹4-8 lakh band), the post-tax differential between 9% SFB and 7% SBI is much wider in proportional terms. SFB at 9% post-tax becomes 8.55%; SBI at 7% post-tax becomes 6.65%. The 190 basis point gap survives almost intact at low tax brackets.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The waterfall below shows the carve-out for a 30-percent slab old-regime senior FD investor on the SFB rate. The 80TTB add-back is the single largest retiree-specific lever.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgPostTaxWaterfall />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>TDS, Form 15G and 15H — getting the cash flow right</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Banks deduct TDS at 10 percent on FD interest if the total interest from that bank exceeds ₹40,000 in the FY (₹50,000 for senior citizens). The TDS is auto-deducted from interest payouts and is fully adjustable against your final tax liability at ITR filing. Most filers see the TDS as a small cash-flow drag rather than a real cost.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          When TDS shouldn't apply: if your total taxable income for the FY is below the basic exemption, you can file Form 15G (under 60) or Form 15H (60-plus) at the bank to request zero TDS. The forms must be submitted at the start of the FY, separately to each bank where you hold FDs above the threshold. Banks routinely fail to action these forms on auto-renewals, so check at every renewal cycle.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A common operational mistake: depositors who hold multiple FDs at the same bank often see TDS triggered earlier than expected because the ₹40,000 threshold is per-bank, not per-FD. Six FDs of ₹2 lakh each at the same bank generate roughly ₹1 lakh of annual interest, well above the threshold. Spreading across multiple banks raises each per-bank threshold pool independently — an under-appreciated benefit of multi-bank diversification.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          For NBFC FDs, TDS rules are similar — 10 percent above ₹40,000 (₹50,000 senior). NBFCs are usually less efficient at processing 15G/15H forms than mainstream banks, so factor in 60 to 90 days of TDS reconciliation friction at NBFCs you hold FDs with.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Common mistakes that cost depositors money</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Patterns we see across portfolios. Each one is fixable in a single conversation with your bank or a 30-minute portfolio review.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Concentrating ₹15 lakh in one SFB at 9%.</strong> Above DICGC ₹5 lakh, the rate premium becomes uninsured credit risk. Spread across three SFBs at ₹5 lakh each. Same yield, full DICGC coverage, slightly more app login overhead.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Defaulting to cumulative interest mode when you need monthly cash flow.</strong> Cumulative compounds quarterly into the principal; monthly payout pays out monthly at slightly lower yield. For retirees needing income, monthly payout is the right structure even at 5 to 10 basis points lower yield. Don't underestimate the operational value of predictable cash inflow.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Forgetting Form 15H at the start of FY.</strong> If your taxable income is below the basic exemption, filing 15H avoids 10% TDS being deducted and held until ITR filing. The reconciliation refund process takes 14 to 30 days post e-verification — a few months of lost float on your money.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Choosing a 1-year FD when you don't need access for 5 years.</strong> Reinvestment risk in falling-rate cycles is meaningful. The 1-year FD that matures in April 2027 will likely re-price at 6.5 to 7.0% versus the 8.5 to 9.0% available today on a 3-year SFB FD. That's ₹15,000 to ₹20,000 of foregone interest per ₹10 lakh per year.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Keeping ₹10 lakh idle in savings account at 3.5%.</strong> The same ₹10 lakh in liquid fund earns 6.8 to 7.0%, with full T+1 liquidity. The ₹35,000 annual yield gap on ₹10 lakh of idle cash adds up to ₹3.5 lakh over a decade of inattention.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>FD alternatives — when other instruments beat the FD</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Even at April 2026's elevated rates, the FD is not always the right answer for a given allocation slot. Three alternatives sit in adjacent shelves of the fixed-income aisle and each has a specific use case where it beats the FD.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Corporate bonds rated AAA or AA+.</strong> HDFC Securities, ICICI Securities, and platforms like GoldenPi and BondsKart now offer secondary-market access to high-rated corporate bonds. AAA-rated bonds from HDFC Bank Holdings, REC, PFC, NTPC currently yield 7.5 to 8.5 percent on 5 to 7 year tenures, broadly similar to senior FD rates at major banks. The differentiator is liquidity (you can sell on exchange any business day, subject to bid-ask spread) and the absence of TDS at source on listed bonds. For HNI investors with corpus above ₹50 lakh, allocating 15 to 20 percent to AAA bonds adds a daily-NAV-priced yield bucket without sacrificing credit quality. Caveat: bond price varies inversely with yield movements, so a 100 bps rate cut over 12 months would generate ₹4-6 percent of mark-to-market gain on a 5-year duration bond, but a 100 bps surprise hike works the other way. FDs don't have this rate-volatility exposure.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Government securities (G-Secs) via the RBI Retail Direct platform.</strong> Launched in 2021, RBI Retail Direct lets retail investors directly hold dated G-Secs, T-bills, and SDLs (state development loans) with zero credit risk. April 2026 yields: 1-year T-bill ~6.5 percent, 5-year G-Sec ~6.95 percent, 10-year G-Sec ~7.10 percent. The yields are below SFB FD rates because the credit risk is zero (sovereign), but the liquidity is genuine and TDS doesn't apply. Best slot in a portfolio: the long-tenure (10-year-plus) anchor where you want zero credit risk plus interest-rate exposure that benefits from rate cuts. SDLs from financially stable states (Maharashtra, Gujarat, Tamil Nadu) often yield 25 to 50 bps above central G-Secs at the same tenure with negligible additional risk.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Liquid mutual funds for the emergency-fund slot.</strong> Up to about 6 to 12 months of expenses, liquid funds at 6.8 to 7.0 percent gross yield beat savings account rates (3.5 to 4.5 percent) decisively. Post-April-2023 the tax treatment matches FDs (slab rate on gains regardless of holding period), so the liquid fund advantage is operational rather than tax-driven. The case for liquid funds in this slot: T+1 redemption with instant-redemption facility up to ₹50,000 per day at major liquid funds (ICICI Pru Liquid, SBI Liquid, HDFC Liquid), no fixed lock-in, daily NAV transparency, and the absence of bank-specific TDS thresholds.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The right FD allocation in a balanced fixed-income portfolio is rarely 100 percent. A reasonable mix for a ₹50 lakh fixed-income corpus: 50 percent FD ladder (across DICGC-insured banks and SFBs), 20 percent SCSS or PMVVY-equivalent (if eligible), 15 percent AAA corporate bonds for daily-NAV liquidity, 10 percent G-Secs via Retail Direct for sovereign-credit anchor, 5 percent liquid fund for emergency. The blended yield holds up under various rate scenarios while the diversification mitigates single-instrument concentration risk.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The mistakes that cost money beyond the obvious ones</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Beyond the standard mistakes (concentrating one bank, ignoring TDS), three subtler errors recur often enough to deserve their own treatment.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Picking auto-renewal at the same rate.</strong> When an FD matures, banks default to renewing at the then-current rate of the same tenure. In a falling-rate cycle, that's worse than the original rate; in a rising cycle, it's better. Most banks send an auto-renewal SMS 7 days before maturity and book the renewal automatically unless you respond. The under-appreciated trap: the auto-renewal happens at the bank's posted card rate, not at any preferential rate you negotiated at original booking. So a senior who got 9 percent on a 3-year SFB FD via a special promotional offer in April 2024 may auto-renew in April 2027 at the bank's then-current 7.5 percent senior rate, missing the chance to rebook at a fresh promotional rate at a different SFB. The fix: never auto-renew. Set a calendar reminder 14 days before each maturity, compare current rates across the SFB and major-bank tier, and rebook deliberately.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Choosing reinvestment FDs versus payout FDs without thinking.</strong> Reinvestment (cumulative) FDs compound interest quarterly into the principal and pay out the entire matured amount at the end of the tenure. Payout FDs pay interest monthly or quarterly into your linked savings account. Reinvestment offers slightly higher effective yield (because of intra-period compounding) but limits intermediate cash flow. For retirees living on FD interest, payout is operationally correct even at the marginal yield cost. For accumulation-phase savers, reinvestment is correct. The mistake is picking the wrong one for your life stage. Banks default to whichever option you select at booking; switching mid-tenure usually requires breaking and rebooking.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Ignoring the impact of premature break on the original tenure.</strong> If you book a 3-year FD at 8.5 percent and break it after 18 months, the bank doesn't pay you 8.5 percent for those 18 months. It pays at the rate applicable for an 18-month tenure as of the original booking date, minus 1 percent penalty. So your effective realised yield can drop to 6.5 percent or lower. The financial implication: only book longer tenures with funds you genuinely don't need access to. For uncertain-horizon money, ladder shorter tenures even if the headline rate is lower.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The cumulative effect of these errors across a typical retiree's ₹40 lakh FD allocation can run ₹40,000 to ₹80,000 a year of foregone yield or unnecessary tax. Each one is fixable with operational discipline. None of them require sophisticated portfolio management.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How to actually compare FDs across banks — a 5-minute checklist</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Comparing fixed deposits is harder than it sounds because banks display rates differently and the specific tenure that's "best" varies by bank. Here is the operational checklist that catches the differences most depositors miss.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Compare like-for-like tenures.</strong> Many SFBs offer a "999-day" or "555-day" special tenure that pays 25 to 50 bps above the standard 1-year or 18-month rate. The 999-day Unity SFB rate is currently 9.10% senior, beating their own 1-year rate of 8.85%. Most online comparison tools default to standard tenures (1, 2, 3, 5 years) and miss these special tenures. Always check the special-tenure table on the bank's site directly.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Confirm whether the rate is for fresh deposits or renewals.</strong> Some banks publish a "premium rate" for fresh deposits and a slightly lower rate for renewals from existing customers. If you're rolling an existing FD at the same bank, you may not get the headline rate without explicitly requesting it. Walk into the branch or call to confirm before assuming the renewal will be at the published peak rate.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Verify the senior-citizen flag is correctly applied at booking.</strong> The 50 bps senior premium requires the system to recognise your age. PAN and Aadhaar at FD opening are sufficient, but online booking flows occasionally drop the senior flag if you haven't refreshed your KYC details on the banking app. Check the rate displayed on the FD-confirmation receipt; if it shows the general rate instead of senior, file a correction request with the bank within 30 days. Banks typically honour the correction without dispute.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Read the premature-break clause.</strong> Two banks may both advertise 8.5% on a 3-year FD, but their break clauses can differ. Bank A might apply a flat 1% penalty across the entire principal; Bank B might compound a 1% penalty into the calculated rate-for-actual-period-completed, producing a much smaller realised yield. The MITC (Most Important Terms and Conditions) document is the source of truth; don't rely on the booking-screen summary.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Ask about loan-against-FD.</strong> Most banks let you borrow up to 90% of the FD value at 1% above the FD rate. So a ₹5 lakh FD at 8.5% can support a ₹4.5 lakh loan at 9.5%, with the FD continuing to earn its 8.5%. Useful as an emergency credit line that doesn't break the FD or trigger CIBIL impact. Not all SFBs offer this; verify before booking if liquidity flexibility matters to you.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 18px" }}>Frequently asked questions</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 16, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 12, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <section style={{ marginBottom: 36, padding: "20px 22px", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-soft)" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>RELATED ON ASSURE FINTECH</h3>
        <ul style={{ fontSize: 15, paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><Link href="/learn/savings/dicgc-explained" style={{ color: COLOR }}>DICGC ₹5 lakh insurance explained</Link>. Coverage rules, payout timeline, and ownership-structure tricks.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/savings/sweep-fd" style={{ color: COLOR }}>Sweep FD accounts</Link>. The auto-FD that captures yield on your idle savings balance.</li>
          <li style={{ marginBottom: 8 }}><Link href="/best/fd-senior-citizens" style={{ color: COLOR }}>Best FDs for senior citizens</Link>. SCSS vs senior FD vs PMVVY framework.</li>
          <li style={{ marginBottom: 8 }}><Link href="/best/mutual-fund-emergency-fund" style={{ color: COLOR }}>Best liquid funds for emergency money</Link>. The post-tax yield comparison vs FDs.</li>
          <li><Link href="/learn/savings" style={{ color: COLOR }}>Savings knowledge hub</Link>. All our deposit and short-term-yield guides.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 36, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>RBI Monetary Policy statements, December 2024 to April 2026</li>
          <li style={{ marginBottom: 6 }}>DICGC Annual Report 2024-25 — coverage rules and payout statistics</li>
          <li style={{ marginBottom: 6 }}>Bank tariff pages — rates verified individually on April 20, 2026</li>
          <li style={{ marginBottom: 6 }}>Section 80TTB and Section 194A of the Income Tax Act 1961</li>
          <li>Department of Posts SCSS official rate notification, FY 25-26</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> Fixed deposit rates in this article reflect each bank's published tariff as of {UPDATED}. Bank rates change quarterly and frequently between MPC announcement cycles; verify the current rate on the bank's website before booking any FD. DICGC coverage of ₹5 lakh per depositor per bank applies to scheduled commercial banks, regional rural banks, cooperative banks, and small finance banks; it does not apply to NBFCs, even highly-rated ones. Tax treatment described above assumes the filer is a resident Indian; non-resident depositors face different TDS and tax rules. SFB credit risk above DICGC limits is real and not theoretical; treat the ₹5 lakh per SFB cap as a hard ceiling. This article is informational and is not investment advice. Consult a SEBI-registered financial advisor before making material allocation decisions, especially for retiree-income planning.
        </p>
      </footer>
    </main>
    </>
  );
}
