import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Your FD Is Not Giving You 7%: The Real Return After Tax and Inflation Is Often Near Zero",
  description: "A 7% FD at 30% tax slab gives 4.9% post-tax. After 5% inflation, real wealth gain is 0.4%. The honest math on fixed deposits in 2026.",
  alternates: { canonical: "/learn/savings/fd-real-return" },
  openGraph: {
    title: "Your FD Is Not Giving You 7%: The Real Return After Tax and Inflation Is Often Near Zero",
    description: "A 7% FD at 30% tax slab gives 4.9% post-tax. After 5% inflation, real wealth gain is 0.4%. The honest math on fixed deposits in 2026.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/savings/fd-real-return
// Template: Math walkthrough — nominal vs real vs post-tax
// Color: #ca8a04 | Updated: June 4, 2026

const COLOR = "#ca8a04";
const UPDATED = "June 4, 2026";

const SvgWaterfall = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Waterfall chart showing how 7 percent FD return reduces to 4.9 percent after 30 percent tax and further to 0.4 percent real return after 5 percent inflation" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">THE 7% FD REALITY CHECK · ₹10L INVESTED · 30% TAX SLAB · 5% INFLATION</text>
    {[
      { label: "Gross FD Return", val: 7.0, color: COLOR, y: 60, h: 140 },
      { label: "Tax @ 30% slab", val: -2.1, color: "#dc2626", y: 170, h: 42, note: "TDS 10% upfront, balance at filing" },
      { label: "Post-tax return", val: 4.9, color: "#f59e0b", y: 112, h: 98 },
      { label: "Inflation (CPI ~5%)", val: -4.5, color: "#7c3aed", y: 200, h: 90, note: "Jun 2026 CPI avg" },
      { label: "Real Return", val: 0.4, color: "#16a34a", y: 240, h: 8, note: "Barely positive" },
    ].filter((_, i) => [0, 1, 3].includes(i)).map(({ label, val, color, note }, i) => (
      <g key={label}>
        <rect x={[60, 260, 460][i]} y={[60, 170, 200][i]} width="140" height={[140, 42, 90][i]} fill={color} rx="6" opacity="0.85" />
        <text x={[130, 330, 530][i]} y={[95, 190, 238][i]} textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="800" fill="#fff">{val > 0 ? "+" : ""}{val}%</text>
        <text x={[130, 330, 530][i]} y={[115, 207, 255][i]} textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fff">{label}</text>
        {note && <text x={[130, 330, 530][i]} y={[132, 222][i] || 270} textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.7)">{note}</text>}
      </g>
    ))}
    <rect x="580" y="260" width="100" height="8" fill="#16a34a" rx="3" />
    <text x="630" y="256" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="800" fill="#16a34a">Real: +0.4%</text>
    <text x="20" y="272" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">For a 30% tax bracket investor, your FD's 7% becomes 4.9% after tax, then 0.4% after inflation. On ₹10L, you earn ₹40,000 real wealth per year — less than inflation erodes.</text>
  </svg>
);

const SvgPostTaxBySlab = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Post-tax FD return at different income tax slabs showing returns at 0 percent 5 percent 20 percent and 30 percent brackets on 7 percent gross FD rate" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">POST-TAX FD RETURNS BY INCOME SLAB · 7% GROSS FD · JUNE 2026</text>
    {[
      { slab: "Nil slab (up to ₹3L)", tax: "0%", postTax: "7.00%", real: "~2.0%", color: "#16a34a" },
      { slab: "5% slab (₹3-7L)", tax: "5%", postTax: "6.65%", real: "~1.65%", color: "#65a30d" },
      { slab: "20% slab (₹10-12L)", tax: "20%", postTax: "5.60%", real: "~0.60%", color: "#f59e0b" },
      { slab: "30% slab (above ₹15L)", tax: "30%", postTax: "4.90%", real: "~-0.10%", color: "#dc2626" },
    ].map(({ slab, tax, postTax, real, color }, i) => (
      <g key={slab}>
        <rect x="20" y={45 + i * 46} width={700} height="38" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={68 + i * 46} fontFamily="system-ui" fontSize="12" fill="var(--text)">{slab}</text>
        <text x="310" y={68 + i * 46} fontFamily="system-ui" fontSize="12" fill="var(--text-muted)">Tax: {tax}</text>
        <rect x="370" y={49 + i * 46} width={parseFloat(postTax) * 26} height="26" fill={color} rx="4" opacity="0.8" />
        <text x={378 + parseFloat(postTax) * 26} y={67 + i * 46} fontFamily="system-ui" fontSize="13" fontWeight="700" fill={color}>{postTax} post-tax</text>
        <text x={378 + parseFloat(postTax) * 26} y={80 + i * 46} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Real: {real} (after 5% inflation)</text>
      </g>
    ))}
    <text x="20" y="232" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">30% slab investors: your FD real return is essentially zero or marginally negative. The money grows in nominal terms but loses purchasing power at inflation. Not a "safe" choice — just a differently-risky one.</text>
  </svg>
);

const SvgBankRates = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="FD interest rate comparison across large banks and small finance banks as of June 2026 showing SBI at 7 percent versus Unity Small Finance Bank at 9 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FD RATES COMPARISON · 1-YEAR FD · REGULAR CITIZEN · JUNE 2026</text>
    {[
      { bank: "Unity Small Finance Bank", rate: 9.00, color: "#16a34a", risk: "Moderate" },
      { bank: "Suryoday Small Finance Bank", rate: 8.75, color: "#16a34a", risk: "Moderate" },
      { bank: "ESAF Small Finance Bank", rate: 8.50, color: "#65a30d", risk: "Moderate" },
      { bank: "Kotak Mahindra Bank", rate: 7.40, color: COLOR, risk: "Low" },
      { bank: "HDFC Bank", rate: 7.25, color: COLOR, risk: "Low" },
      { bank: "ICICI Bank", rate: 7.10, color: COLOR, risk: "Low" },
      { bank: "Axis Bank", rate: 7.10, color: COLOR, risk: "Low" },
      { bank: "SBI (State Bank of India)", rate: 7.00, color: "#ca8a04", risk: "Very Low" },
    ].map(({ bank, rate, color, risk }, i) => (
      <g key={bank}>
        <text x="195" y={52 + i * 28} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{bank}</text>
        <rect x="200" y={38 + i * 28} width={rate * 40} height="20" fill={color} rx="3" opacity="0.8" />
        <text x={208 + rate * 40} y={52 + i * 28} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{rate}%</text>
        <text x={220 + rate * 40 + 30} y={52 + i * 28} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Risk: {risk}</text>
      </g>
    ))}
    <text x="20" y="252" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Small Finance Banks are regulated by RBI and covered by DICGC insurance up to ₹5L per depositor per bank. The 2% extra rate is real — but max ₹5L exposure per bank to stay fully insured. Split across 2-3 SFBs for higher amounts.</text>
  </svg>
);

const SvgFDvsInflation10yr = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="FD value versus purchasing power over 10 years showing nominal growth of FD at 7 percent versus inflation eroding value at 5 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">₹10L FD vs INFLATION · 10-YEAR HORIZON · 7% FD RATE · 30% TAX SLAB · 5% INFLATION</text>
    <line x1="60" y1="220" x2="700" y2="220" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="220" stroke="var(--border)" />
    {[0, 2, 4, 6, 8, 10].map((yr, i) => (
      <text key={yr} x={60 + i * 128} y="235" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)" textAnchor="middle">Year {yr}</text>
    ))}
    <path d="M 60 180 L 188 168 L 316 156 L 444 145 L 572 134 L 700 124" fill="none" stroke={COLOR} strokeWidth="3" />
    <path d="M 60 180 L 188 175 L 316 170 L 444 165 L 572 160 L 700 155" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="6,3" />
    <text x="650" y="120" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">FD value: ₹14.9L</text>
    <text x="650" y="152" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">Real value: ₹11.2L</text>
    <text x="20" y="255" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">₹10L FD grows to ₹14.9L nominally in 10 years at 7% (post-tax: ₹13.6L at 30% slab). But ₹10L in goods you could buy today costs ₹16.3L in 10 years at 5% inflation. You've lost purchasing power.</text>
  </svg>
);

const SvgWhenFDMakesSense = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="When fixed deposits make sense versus when they don't based on time horizon tax slab and financial goals" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHEN FD ACTUALLY MAKES SENSE · HONEST ASSESSMENT</text>
    <rect x="20" y="38" width="340" height="140" fill="#16a34a" rx="8" opacity="0.08" stroke="#16a34a" strokeWidth="1" />
    <text x="190" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">FD MAKES SENSE WHEN...</text>
    {["Horizon is under 2-3 years (short goal)", "Emergency fund: safety over returns", "Nil or 5% tax slab (low income earner)", "Senior citizens: 80TTB + higher rates", "Capital preservation is the only goal"].map((t, i) => (
      <text key={t} x="30" y={82 + i * 22} fontFamily="system-ui" fontSize="11" fill="var(--text)">✓ {t}</text>
    ))}
    <rect x="380" y="38" width="320" height="140" fill="#dc2626" rx="8" opacity="0.08" stroke="#dc2626" strokeWidth="1" />
    <text x="540" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">FD IS WRONG WHEN...</text>
    {["30% tax slab — real return near zero", "10+ year horizon — equity beats FD 3:1", "Goal is wealth creation, not preservation", "Inflation hedging is needed", "NRE FD is unavailable (or wrong tenure)"].map((t, i) => (
      <text key={t} x="390" y={82 + i * 22} fontFamily="system-ui" fontSize="11" fill="var(--text)">✗ {t}</text>
    ))}
    <text x="20" y="193" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">FD is not a bad product. It's the wrong product for long-term wealth creation at high tax slabs. Use it for what it's designed for: short-term capital preservation with guaranteed returns.</text>
  </svg>
);

const SvgDICGCCoverage = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="DICGC insurance coverage guide showing deposits up to 5 lakh per depositor per bank are insured and strategy for distributing large deposits across banks" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">DICGC INSURANCE: HOW TO PROTECT FDs ABOVE ₹5L</text>
    <rect x="20" y="38" width="680" height="50" fill="var(--surface, #f0fdf4)" stroke="#16a34a" strokeWidth="1" rx="4" />
    <text x="30" y="58" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">DICGC covers ₹5L per depositor per bank (including interest)</text>
    <text x="30" y="78" fontFamily="system-ui" fontSize="12" fill="var(--text)">This limit was raised from ₹1L to ₹5L in 2020. It covers savings + FD + RD across all branches of the same bank combined.</text>
    <text x="20" y="110" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">If you have ₹20L to park in FDs:</text>
    <text x="20" y="130" fontFamily="system-ui" fontSize="12" fill="var(--text)">Split across 4 banks (₹5L each) = fully insured. Or: ₹5L each at SBI, HDFC, Kotak + ICICI = 4x ₹5L = ₹20L fully covered.</text>
    <text x="20" y="150" fontFamily="system-ui" fontSize="12" fill="var(--text)">Include joint holder: Joint FD covers ₹5L per depositor per bank. A joint FD with spouse at same bank = ₹5L cover each = ₹10L total at one bank.</text>
    <text x="20" y="172" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Small Finance Banks: eligible for DICGC coverage same as scheduled commercial banks. For amounts above ₹5L at any single SFB, split across multiple SFBs.</text>
  </svg>
);

export default function PageFDRealReturn() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the real return on a 7% FD after tax and inflation?", "acceptedAnswer": { "@type": "Answer", "text": "For a 30% tax bracket investor: 7% gross minus 2.1% tax (30% of interest) = 4.9% post-tax. Minus 5% inflation = approximately -0.1% to +0.4% real return, depending on the year's actual CPI. Your money grows in rupees but loses purchasing power. For a 5% slab investor: 7% minus 0.35% tax = 6.65% post-tax, minus 5% inflation = 1.65% real return — marginally positive but not wealth-creating." } },
      { "@type": "Question", "name": "How is FD interest taxed in India?", "acceptedAnswer": { "@type": "Answer", "text": "FD interest is added to your total income and taxed at your marginal slab rate. If annual FD interest exceeds ₹40,000 (₹50,000 for senior citizens), the bank deducts TDS at 10% upfront. You then pay any remaining tax at your actual slab rate when filing ITR. If your slab is 30%, you pay an additional 20% at filing. Submit Form 15G (non-senior) or Form 15H (senior citizen) if total income is below the basic exemption limit to avoid TDS." } },
      { "@type": "Question", "name": "Which bank gives the highest FD rate in India in June 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Small Finance Banks offer the highest rates: Unity SFB at 9.00%, Suryoday SFB at 8.75%, ESAF SFB at 8.50% for 1-year FD. Among large scheduled commercial banks, Kotak (7.40%), HDFC (7.25%), ICICI and Axis (7.10%), and SBI (7.00%) offer lower but safer rates. SFBs are RBI-regulated and DICGC-insured up to ₹5L, making them safe for deposits within that limit." } },
      { "@type": "Question", "name": "Is FD better than savings account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for parked money you won't need immediately. Savings accounts offer 3-4% interest (Kotak, IDFC First offer 4-6% on higher balances), while FDs offer 7-9%. For emergency funds, a liquid FD (90-day) or Flexi FD (auto-linked savings account) gives FD rates with savings-account liquidity. The trade-off: FD locks money for the term; breaking an FD early typically incurs 0.5-1% penalty on the contracted rate." } },
      { "@type": "Question", "name": "Should I put long-term savings in FD or mutual funds?", "acceptedAnswer": { "@type": "Answer", "text": "For horizons above 5 years, equity mutual funds have historically returned 12-15% CAGR versus FD's 7%. After tax (LTCG at 12.5% above ₹1.25L gains) and inflation, equity mutual funds produce 6-9% real returns versus FD's 0-1.5%. The trade-off is volatility — equity can fall 30-50% in bad years. For conservative investors, a split (50% FD + 50% debt fund) provides better average returns than 100% FD with moderate risk." } },
      { "@type": "Question", "name": "What is a Flexi FD and should I use it?", "acceptedAnswer": { "@type": "Answer", "text": "A Flexi FD (also called sweep FD or auto-sweep) links your savings account to an FD. When your savings account balance exceeds a threshold (say ₹25,000), the excess is auto-invested in an FD at FD rates. When you need money, the FD is broken in minimum units (₹1,000 or ₹5,000) to fund your withdrawal. You earn FD rates on parked money without losing liquidity. HDFC InstaFD, ICICI Flexi FD, and Kotak AcceleFD are popular products. Excellent for emergency funds and salary overhang." } },
      { "@type": "Question", "name": "How much FD interest is tax-free for senior citizens?", "acceptedAnswer": { "@type": "Answer", "text": "Under Section 80TTB, senior citizens (age 60+) get a deduction of up to ₹50,000 per year on interest income from banks, post offices, and cooperative banks. This is in addition to the basic exemption limit. So a senior citizen in the nil slab who earns ₹50,000 in FD interest pays zero tax on it. For FD planning, this makes senior citizen FDs particularly efficient — 8.00-8.50% gross with zero tax is a remarkable risk-free rate." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "FD Real Return: Your 7% FD Is Sometimes Giving You Close to Zero After Tax and Inflation", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Savings", item: "https://assurefintech.com/learn/savings/" },
    { "@type": "ListItem", position: 4, name: "FD Real Return", item: "https://assurefintech.com/learn/savings/fd-real-return" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1A1100, #402C01, #1A1100)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #ca8a0422, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Savings · Fixed Deposits · Real Returns
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your FD Is Not Giving You 7%: The Real Return (After Tax and Inflation) Is Often Near Zero
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / FD Real Return</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>A 7% FD looks safe and reliable. But at 30% tax slab, the post-tax return is 4.9%. After 5% inflation, the real wealth gain is 0.4% — and in some years negative. Here's the full picture your bank branch doesn't show you.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The 7% That Isn't 7%</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>India's largest banks offer FD rates between 7.00% and 7.40% for regular citizens as of June 2026. The advertising emphasizes these rates prominently. What's rarely discussed is what actually reaches your pocket after the government takes its cut and after you account for rising prices.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The honest accounting has three steps: gross FD rate, minus your income tax rate applied to the interest, minus the year's consumer price inflation. What remains is your real return — the actual increase in your purchasing power.</p>
        <SvgWaterfall />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For a salaried professional earning above ₹15L annually (30% tax slab): 7% gross becomes 4.9% post-tax. India's average CPI inflation for FY 2025-26 was approximately 4.5-5.0%. Real return: 0-0.4%. This is not a great outcome for your long-term wealth. It's a wealth preservation choice, at best.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Tax Slab Is the Biggest Variable</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>FD interest is taxed at your marginal income tax rate — not at a flat rate. This creates wildly different outcomes for different investors holding identical FDs.</p>
        <SvgPostTaxBySlab />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>A retired senior citizen with no other income, investing in an FD under the 80TTB exemption of ₹50,000, pays zero tax on the first ₹50,000 of FD interest. Their real return is 7% minus 5% inflation = 2% — actually reasonable. The same 7% FD for someone in the 30% slab yields a near-zero real return. Same product, same bank, radically different outcomes based purely on the investor's tax situation.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is why FD recommendations need to be personal. A blanket "FDs are safe and reliable" statement is misleading. Safe: yes, in nominal terms. Reliable: yes, the rate doesn't fluctuate. Wealth-building: only for specific investor profiles.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Where to Get the Best FD Rates Right Now</h2>
        <SvgBankRates />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Small Finance Banks (SFBs) like Unity, Suryoday, and ESAF offer 8.5-9.0% FD rates — 150-200 basis points above large banks. They're RBI-regulated and DICGC-insured. The DICGC cover of ₹5 lakh per depositor per bank means up to ₹5L is as safe at an SFB as at SBI.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The risk with SFBs: their balance sheets are smaller, lending portfolios have higher NPA potential, and they're newer institutions with shorter track records. None have failed post-DICGC enhancement, but it's a different risk profile from parking money at HDFC Bank. For amounts within ₹5L: SFBs are worth serious consideration. Above ₹5L: split across multiple banks.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Among large banks, Kotak Mahindra Bank (7.40%) beats HDFC (7.25%) and SBI (7.00%). The rate difference between Kotak and SBI is 0.40%. On ₹10L over 1 year, that's ₹4,000 extra — meaningful if you're parking large amounts.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>10 Years of FD vs Inflation: The Purchasing Power Story</h2>
        <SvgFDvsInflation10yr />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This chart shows the fundamental problem with FDs for long-term wealth: the nominal value of your money grows, but so does the price of everything you want to buy. At the end of 10 years, you have more rupees but roughly the same purchasing power — sometimes less.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is why financial advisors recommend FDs for short-term goals (under 3 years) and equity instruments for long-term goals (above 7 years). The compounding math of equity over long periods overwhelms the tax efficiency advantage FDs have over short periods.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>DICGC Insurance: How to Stay Safe Above ₹5L</h2>
        <SvgDICGCCoverage />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The DICGC limit was raised from ₹1L to ₹5L in February 2020 — a significant improvement. But many people don't know that "₹5L per depositor per bank" means all deposits across all branches of the same bank combined. Spreading deposits across branches of SBI is not the same as spreading across different banks for insurance purposes.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>When FD Is the Right Choice</h2>
        <SvgWhenFDMakesSense />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>FD absolutely makes sense for: emergency funds (park 6 months' expenses in a Flexi FD linked to savings account), goals within 1-3 years (vacation fund, car down payment, marriage costs), and investors in nil or 5% tax slabs for whom the post-tax return is reasonable.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For long-term investing by 30% slab investors, look at PPF (EEE tax status), debt mutual funds with LTCG benefits, or balanced equity-debt portfolios. Our comparisons at <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs Debt Fund</Link> and <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" style={{ color: COLOR }}>Tax Saving FD vs ELSS vs PPF</Link> walk through the numbers.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link> · <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs Debt Fund</Link> · <Link href="/learn/savings/senior-citizen-fd" style={{ color: COLOR }}>senior citizen FD</Link> · <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" style={{ color: COLOR }}>tax saving FD vs ELSS vs PPF</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: FD rates from SBI, HDFC Bank, ICICI Bank, Kotak, Unity SFB, Suryoday SFB websites as of {UPDATED}. Tax slabs from Income Tax Act (Finance Act 2025). CPI from MOSPI data. Not financial advice.</footer>
    </main>
    </>
  );
}
