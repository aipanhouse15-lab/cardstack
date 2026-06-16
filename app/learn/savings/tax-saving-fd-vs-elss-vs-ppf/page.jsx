import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tax Saving FD vs ELSS vs PPF: Which 80C Option Wins Over 5 Years?",
  description: "All three qualify for 1.5L 80C deduction. Post-tax returns over 5 years differ by 3.4 lakh on identical investments. The complete comparison.",
  alternates: { canonical: "/learn/savings/tax-saving-fd-vs-elss-vs-ppf" },
  openGraph: {
    title: "Tax Saving FD vs ELSS vs PPF: Which 80C Option Wins Over 5 Years?",
    description: "All three qualify for 1.5L 80C deduction. Post-tax returns over 5 years differ by 3.4 lakh on identical investments. The complete comparison.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/savings/tax-saving-fd-vs-elss-vs-ppf
// Template: Comparison + decision framework
// Color: #ca8a04 | Updated: June 4, 2026

const COLOR = "#ca8a04";
const UPDATED = "June 4, 2026";

const SvgReturns5yr = () => (
  <svg viewBox="0 0 720 319" role="img" aria-label="Post-tax 5 year returns comparison between tax saving FD ELSS and PPF on 1.5 lakh annual investment showing ELSS at 11.2 lakh PPF at 8.9 lakh and tax FD at 7.8 lakh" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">₹1.5L INVESTED ANNUALLY FOR 5 YEARS · POST-TAX MATURITY VALUE · 30% SLAB</text>
    {[
      { prod: "ELSS (12% historical CAGR, LTCG 12.5%)", value: "₹11.2L", detail: "Best returns. Most risk.", color: "#7c3aed", barH: 220 },
      { prod: "PPF (7.1% EEE)", value: "₹8.9L", detail: "Tax-free. Govt-guaranteed. 15yr total.", color: "#16a34a", barH: 165 },
      { prod: "Tax Saving FD (6.5% post-tax at 30%)", value: "₹7.8L", detail: "Lowest returns. Safest.", color: "#dc2626", barH: 130 },
    ].map(({ prod, value, detail, color, barH }, i) => (
      <g key={prod}>
        <rect x={80 + i * 210} y={250 - barH} width="140" height={barH} fill={color} rx="6" opacity="0.85" />
        <text x={150 + i * 210} y={242 - barH} textAnchor="middle" fontFamily="system-ui" fontSize="18" fontWeight="800" fill={color}>{value}</text>
        <text x={150 + i * 210} y="264" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text)">{prod.split("(")[0].trim()}</text>
        <text x={150 + i * 210} y="276" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">{detail}</text>
      </g>
    ))}
    <line x1="40" y1="250" x2="680" y2="250" stroke="var(--border)" />
    <text x="20" y="295" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">ELSS can vary: in bad 5-year windows (2018-2023), returns were 6-8%. PPF is guaranteed. Tax FD has the guaranteed lowest post-tax return of the three for 30% slab investors.</text>
  </svg>
);

const SvgLockIn = () => (
  <svg viewBox="0 0 720 197" role="img" aria-label="Lock-in period comparison showing ELSS at 3 years tax saving FD at 5 years and PPF at 15 years with explanation of what happens after lock-in" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">LOCK-IN PERIOD COMPARISON · 80C INSTRUMENTS</text>
    <rect x="20" y="40" width={3 * 30} height="40" fill="#7c3aed" rx="4" opacity="0.85" />
    <text x="20" y="100" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#7c3aed">ELSS: 3 years</text>
    <text x="20" y="116" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Shortest lock-in in 80C. Each SIP installment locked 3yr from that date.</text>
    <rect x="280" y="40" width={5 * 30} height="40" fill={COLOR} rx="4" opacity="0.85" />
    <text x="280" y="100" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>Tax FD: 5 years</text>
    <text x="280" y="116" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Locked 5 years. Cannot break for any reason. TDS on interest every year.</text>
    <rect x="500" y="40" width={15 * 10} height="40" fill="#16a34a" rx="4" opacity="0.85" />
    <text x="500" y="100" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">PPF: 15 years</text>
    <text x="500" y="116" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Longest lock-in. Partial withdrawal Year 7+. Extendable in 5-year blocks.</text>
    <text x="20" y="160" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">ELSS wins on flexibility — 3-year lock-in makes it the most accessible 80C equity option. But it also carries the most risk. Short lock-in + market volatility can mean lower returns if your exit is timed badly.</text>
    <text x="20" y="173" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">After lock-in: ELSS and Tax FD proceeds are yours to redeploy. PPF can be extended 5 years at a time — you continue to earn EEE returns without depositing more (or continue depositing up to ₹1.5L/yr).</text>
  </svg>
);

const SvgRiskReturnPlot = () => (
  <svg viewBox="0 0 720 259" role="img" aria-label="Risk versus post-tax return plot for ELSS PPF and tax saving FD showing ELSS has highest risk and return PPF has no risk and moderate return and tax FD has no risk but lowest return" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">RISK vs RETURN · THREE 80C INSTRUMENTS</text>
    <line x1="60" y1="200" x2="700" y2="200" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="200" stroke="var(--border)" />
    <text x="380" y="220" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Market Risk →</text>
    <text x="20" y="120" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)" transform="rotate(-90 20 120)">Post-tax Return →</text>
    <circle cx="100" cy="160" r="22" fill={COLOR} opacity="0.9" />
    <text x="100" y="164" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">Tax FD</text>
    <text x="100" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill={COLOR}>4.5% (5yr)</text>
    <circle cx="180" cy="100" r="22" fill="#16a34a" opacity="0.9" />
    <text x="180" y="104" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">PPF</text>
    <text x="180" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#16a34a">7.1% EEE (15yr)</text>
    <circle cx="580" cy="55" r="30" fill="#7c3aed" opacity="0.9" />
    <text x="580" y="59" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">ELSS</text>
    <text x="580" y="43" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#7c3aed">12% hist. CAGR</text>
    <text x="580" y="95" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">(can be -15% in bad yr)</text>
    <text x="20" y="235" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Circle size = liquidity (PPF is mid, ELSS is most liquid after 3yr, Tax FD is illiquid for 5yr). Tax FD earns less than PPF with identical safety. Avoid Tax FD unless ELSS and PPF are already maxed.</text>
  </svg>
);

const SvgDecisionFramework = () => (
  <svg viewBox="0 0 720 216" role="img" aria-label="Decision framework for 80C investment showing which instrument to pick based on risk tolerance income level and time horizon" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">80C ALLOCATION STRATEGY · HOW TO SPLIT ₹1.5L FOR MAXIMUM BENEFIT</text>
    <rect x="20" y="38" width="680" height="140" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" rx="8" />
    {[
      { profile: "30-40 yrs, steady income, can take risk", alloc: "80% ELSS + 20% PPF", reason: "Maximize returns. Use PPF for guaranteed 80C + long-term tax-free corpus.", color: "#7c3aed" },
      { profile: "40-50 yrs, moderate risk tolerance", alloc: "50% ELSS + 50% PPF", reason: "Balance growth with stability. PPF corpus useful from age 55 onwards.", color: "#16a34a" },
      { profile: "50-60 yrs, low risk, nearing retirement", alloc: "100% PPF or mix with SCSS", reason: "Equity volatility risk rises near retirement. Lock in guaranteed returns.", color: COLOR },
      { profile: "Any age, need it back in 5 years", alloc: "ELSS only (3yr lock-in)", reason: "Tax FD locks 5 years. ELSS frees in 3. If timeline is 5yr, ELSS gives access earliest.", color: "#7c3aed" },
    ].map(({ profile, alloc, reason, color }, i) => (
      <g key={profile}>
        <text x="30" y={60 + i * 30} fontFamily="system-ui" fontSize="11" fill="var(--text)">{profile}</text>
        <rect x="330" y={44 + i * 30} width="160" height="22" fill={color} rx="4" opacity="0.8" />
        <text x="410" y={59 + i * 30} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{alloc}</text>
        <text x="500" y={59 + i * 30} fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">{reason.slice(0, 50)}</text>
      </g>
    ))}
    <text x="20" y="192" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Tax FD earns less than PPF with the same lock-in safety. The only reason to pick Tax FD: EPF/insurance already fills your 80C bucket and you want a guaranteed, capital-safe overflow option.</text>
  </svg>
);

const SvgELSSFundPicks = () => (
  <svg viewBox="0 0 720 197" role="img" aria-label="Top ELSS mutual fund picks for 80C investment showing 5 year returns for Mirae Asset Tax Saver Axis Long Term Equity and Canara Robeco ELSS Tax Saver" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">TOP ELSS FUNDS FOR 80C · 5-YEAR RETURN · JUNE 2026 · DIRECT PLAN</text>
    {[
      { fund: "Mirae Asset ELSS Tax Saver", ret5yr: "16.8%", aum: "₹24,000Cr", color: "#16a34a" },
      { fund: "Canara Robeco ELSS Tax Saver", ret5yr: "15.4%", aum: "₹8,200Cr", color: "#16a34a" },
      { fund: "Axis Long Term Equity (ELSS)", ret5yr: "11.2%", aum: "₹31,000Cr", color: "#f59e0b" },
      { fund: "SBI Long Term Equity", ret5yr: "14.6%", aum: "₹28,000Cr", color: "#16a34a" },
      { fund: "DSP Tax Saver Fund", ret5yr: "14.1%", aum: "₹14,000Cr", color: "#16a34a" },
    ].map(({ fund, ret5yr, aum, color }, i) => (
      <g key={fund}>
        <text x="250" y={52 + i * 26} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{fund}</text>
        <rect x="258" y={38 + i * 26} width={parseFloat(ret5yr) * 14} height="18" fill={color} rx="3" opacity="0.8" />
        <text x={266 + parseFloat(ret5yr) * 14} y={51 + i * 26} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{ret5yr} (5yr)</text>
        <text x={266 + parseFloat(ret5yr) * 14 + 80} y={51 + i * 26} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">AUM: {aum}</text>
      </g>
    ))}
    <text x="20" y="173" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Past performance isn't guaranteed. Prefer direct plans (Zerodha Coin, Kuvera, MF Central) over regular for same fund. 5-year windows can be misleading — check 10yr and 15yr data too.</text>
  </svg>
);

export default function PageTaxSavingFDvsELSSvsPPF() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Which is better for 80C: Tax Saving FD, ELSS, or PPF?", "acceptedAnswer": { "@type": "Answer", "text": "For most working-age Indians in 30% tax slab: ELSS first (highest post-tax returns, shortest 3-year lock-in), then PPF (guaranteed EEE returns, 80C + long-term tax-free corpus building), and tax saving FD as a last resort. Tax saving FD earns 6.5% post-tax at 30% slab, worse than PPF's 7.1% tax-free rate, with a longer 5-year lock-in and less liquidity than ELSS." } },
      { "@type": "Question", "name": "What is the lock-in period for ELSS, Tax Saving FD, and PPF?", "acceptedAnswer": { "@type": "Answer", "text": "ELSS: 3 years from each investment date (shortest in 80C category). Tax Saving FD: 5 years, fixed, cannot be broken for any reason including emergencies. PPF: 15-year tenure, but partial withdrawal is allowed from Year 7 and loans from Year 3. ELSS wins on flexibility significantly — if you need the money back in under 5 years, ELSS is the only 80C option that frees capital within that window." } },
      { "@type": "Question", "name": "Is Tax Saving FD better than regular FD?", "acceptedAnswer": { "@type": "Answer", "text": "Tax Saving FD offers the same interest rate as regular 5-year FD (7.00-7.40% at major banks) but provides Section 80C deduction on the principal. However, the interest earned on Tax Saving FD is fully taxable at your slab rate. For a 30% slab investor, the effective post-tax return is 4.5-5.0%. This is lower than PPF (7.1% tax-free) and equity funds (12%+ historical CAGR). Tax Saving FD is best used only when ELSS and PPF slots are already filled." } },
      { "@type": "Question", "name": "Can I get 80C deduction on both ELSS and PPF in the same year?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The ₹1.5L Section 80C limit can be filled by any combination of eligible instruments — ELSS, PPF, Tax Saving FD, life insurance premiums, EPF contribution, children's tuition fees, home loan principal repayment, and others. You can invest ₹75,000 in ELSS and ₹75,000 in PPF and claim the full ₹1.5L deduction. The limit is on the total 80C deduction claimed, not on any individual instrument." } },
      { "@type": "Question", "name": "How is ELSS gain taxed after 3 years?", "acceptedAnswer": { "@type": "Answer", "text": "ELSS gains after the 3-year lock-in are classified as Long Term Capital Gains (LTCG) from equity. The tax: 12.5% on total gains above ₹1.25 lakh per year (this exemption is per taxpayer per year across all equity investments, not per fund). Gains below ₹1.25L/year are completely tax-free. For moderate ELSS investors, the effective tax on ELSS gains is often lower than 12.5% because of this exemption — sometimes zero." } },
      { "@type": "Question", "name": "What happens to my ELSS investment if the market crashes after 3 years?", "acceptedAnswer": { "@type": "Answer", "text": "You're free to exit after 3 years but not obligated to. If the market has crashed and your ELSS NAV is down, wait it out — ELSS doesn't auto-expire at 3 years. The 3-year lock-in is a minimum, not a maximum. Historical data shows that Nifty 50 has never delivered negative returns over any 7-year period. If you've exited ELSS into profit, you've lost the tax shelter on that corpus — it's now regular taxable wealth." } },
      { "@type": "Question", "name": "Is EPF contribution counted in the ₹1.5L 80C limit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your employee EPF contribution (12% of basic salary, up to certain limits) qualifies for 80C deduction. For many salaried employees with above ₹12L basic salary, EPF contribution alone fills most or all of the ₹1.5L 80C limit. Check your salary slip for 'Employee PF Contribution' — this amount is deductible under 80C without any separate action. This is why many well-paid employees don't need to actively invest in PPF, ELSS, or Tax FD for 80C — EPF already handles it." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Tax Saving FD vs ELSS vs PPF: Which 80C Option Wins Over 5 Years?", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Savings", item: "https://assurefintech.com/learn/savings/" },
    { "@type": "ListItem", position: 4, name: "Tax Saving FD vs ELSS vs PPF", item: "https://assurefintech.com/learn/savings/tax-saving-fd-vs-elss-vs-ppf" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1A1100, #402C01, #1A1100)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #ca8a0422, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Savings · Tax Planning · 80c Instruments
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Tax Saving FD vs ELSS vs PPF: Which 80C Option Wins Over 5 Years?
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / Tax Saving FD vs ELSS vs PPF</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>All three qualify for the same ₹1.5L 80C deduction. But their post-tax returns over 5 years differ by ₹3.4 lakh on identical investments. The difference is lock-in, tax treatment, and risk — not the deduction amount.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The 80C Trap: Same Deduction, Very Different Outcomes</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Every year, crores of salaried Indians rush to "save tax under 80C" before March 31. Most reach for the familiar: LIC premium, Tax Saving FD, or PPF. ELSS gets overlooked because it feels riskier. But the post-tax returns over 5 years tell a very different story.</p>
        <SvgReturns5yr />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The ₹3.4L difference between ELSS (₹11.2L) and Tax FD (₹7.8L) is on identical investment — ₹1.5L per year for 5 years. Tax FD earns the least because: the interest is taxed annually at 30% (unlike ELSS where gains are taxed only at exit) and the rates are lower than what equity has historically delivered.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>PPF sits in the middle at ₹8.9L — guaranteed and tax-free, but capped at 7.1% and requiring a 15-year tenure for full benefits. For a 5-year comparison, we're measuring the PPF balance at Year 5, which is ₹8.9L — the full maturity at 15 years would be significantly larger.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Lock-In: The Factor That Changes Everything</h2>
        <SvgLockIn />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>ELSS is the only 80C product where your capital is accessible within 3 years. This matters when life doesn't follow a plan. A medical emergency, a sudden opportunity, or a job change can make you need that money before PPF's Year 7 partial withdrawal window or Tax FD's 5-year exit.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The 3-year lock-in per ELSS installment means SIP-based investing is smart: start an SIP of ₹12,500/month in ELSS, and from Year 4 onwards, each installment matures and becomes accessible. You maintain continuous 80C coverage while gradually increasing liquidity.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Risk vs Return: Where Each Sits</h2>
        <SvgRiskReturnPlot />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>ELSS can deliver negative returns in bad years — 2020 and 2022 were rough for equity. If your investment horizon is genuinely 3-5 years and you need the money at a fixed date, ELSS carry timing risk. PPF eliminates this entirely: the rate is set by government and guaranteed.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For most working professionals with 10-15+ years before retirement: equity (ELSS) dominates over long periods. But for money you'll definitely need back in 5 years: PPF or ELSS (accepted with the understanding that the market may be down when you exit).</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Optimal 80C Strategy</h2>
        <SvgDecisionFramework />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most common mistake: filling 80C with LIC policies or Tax FDs out of habit, when EPF contribution (already happening) plus PPF SIP would give better outcomes with zero extra effort.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Check your EPF contribution first — many salaried employees at ₹8L+ CTC have 70-100% of their ₹1.5L 80C already covered by EPF. If that's you, you don't need to buy Tax FD or ELSS separately. Any additional 80C investment is optional and should go where it earns the most for your risk tolerance.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Best ELSS Funds to Consider</h2>
        <SvgELSSFundPicks />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Always invest in direct plans — available on Zerodha Coin, Kuvera, MF Central, or Groww. Regular plans through agents charge 1-1.5% commission which significantly reduces returns over 5-10 years. Our <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>Direct vs Regular guide</Link> walks through the math in detail.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For more context, see our <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs Debt Fund comparison</Link>, our broader <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C deductions guide</Link>, and the <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link>.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link> · <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs Debt Fund</Link> · <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C beyond the obvious</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: ELSS returns from AMFI/Value Research as of {UPDATED}. PPF rate from Finance Ministry. Tax rules from Income Tax Act (Finance Act 2025). Not financial advice. Past ELSS performance is not indicative of future returns.</footer>
    </main>
    </>
  );
}
