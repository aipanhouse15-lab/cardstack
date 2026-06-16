import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "PPF vs FD vs Debt Mutual Fund: Who Wins 10L Over 10 Years? (June 2026)",
  description: "Three safe products, very different post-tax outcomes over 10 years. For a 30% slab investor: PPF returns 19.7L, debt fund 16.8L, FD 15.2L.",
  alternates: { canonical: "/learn/savings/ppf-vs-fd-vs-debt-fund" },
  openGraph: {
    title: "PPF vs FD vs Debt Mutual Fund: Who Wins 10L Over 10 Years? (June 2026)",
    description: "Three safe products, very different post-tax outcomes over 10 years. For a 30% slab investor: PPF returns 19.7L, debt fund 16.8L, FD 15.2L.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/savings/ppf-vs-fd-vs-debt-fund
// Template: Three-way comparison with math
// Color: #ca8a04 | Updated: June 4, 2026

const COLOR = "#ca8a04";
const UPDATED = "June 4, 2026";

const SvgOutcome10yr = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="10 lakh invested for 10 years outcome comparison between PPF FD and debt mutual fund showing PPF wins at 16.1 lakh followed by debt fund at 14.9 lakh and FD at 13.6 lakh after tax" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">₹10L LUMP SUM · 10 YEARS · 30% TAX SLAB · POST-TAX MATURITY VALUE COMPARISON</text>
    {[
      { label: "PPF (7.1% EEE)", value: "₹19.7L", detail: "Zero tax. Govt-guaranteed. 15yr lock-in.", color: "#16a34a", barH: 200 },
      { label: "Debt Fund (LTCG)", value: "₹16.8L", detail: "LTCG 12.5% after 2yr. Inflation-indexed.", color: "#7c3aed", barH: 160 },
      { label: "FD (7% ETE)", value: "₹13.6L", detail: "30% slab tax annually. No indexation.", color: "#dc2626", barH: 110 },
    ].map(({ label, value, detail, color, barH }, i) => (
      <g key={label}>
        <rect x={100 + i * 200} y={240 - barH} width="120" height={barH} fill={color} rx="6" opacity="0.85" />
        <text x={160 + i * 200} y={232 - barH} textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="800" fill={color}>{value}</text>
        <text x={160 + i * 200} y={255} textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">{label}</text>
        <text x={160 + i * 200} y={270} textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{detail}</text>
      </g>
    ))}
    <line x1="60" y1="240" x2="660" y2="240" stroke="var(--border)" />
    <text x="20" y="275" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">PPF dominates for 30% slab investors with EEE (Exempt-Exempt-Exempt) tax treatment. Debt fund LTCG indexation helps significantly. FD's annual tax drag is the biggest handicap.</text>
  </svg>
);

const SvgTaxTreatment = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Tax treatment comparison for PPF FD and debt mutual fund showing EEE versus ETE versus LTCG treatment at each stage of investment maturity and withdrawal" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">TAX TREATMENT AT 3 STAGES · PPF vs FD vs DEBT FUND</text>
    {[{ h: "Stage" }, { h: "PPF" }, { h: "FD" }, { h: "Debt Mutual Fund" }].map(({ h }, i) => {
      const xs = [20, 160, 340, 530];
      return <rect key={h} x={xs[i]} y="35" width={[130, 170, 180, 190][i]} height="24" fill={COLOR}><text x={xs[i] + [130, 170, 180, 190][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Investment", "80C deduction (up to ₹1.5L)", "No deduction", "No deduction (unless ELSS)"],
      ["Annual interest/growth", "Tax FREE", "Taxed at slab rate annually", "No tax until redemption"],
      ["Maturity / withdrawal", "100% tax FREE", "No tax (already paid annually)", "LTCG 12.5% after 2 years"],
      ["Tax label", "EEE (Exempt × 3)", "ETE (Exempt-Taxable-Exempt)", "ETE with indexation (older) / 12.5% LTCG"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 36} width={700} height="36" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 160, 340, 530];
          const isGood = cell.includes("FREE") || cell.includes("EEE");
          const isBad = cell.includes("slab rate annually");
          return <text key={ci} x={xs[ci] + 5} y={81 + ri * 36} fontFamily="system-ui" fontSize="10" fill={isGood ? "#16a34a" : isBad ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">PPF's EEE status means zero tax at every stage. FD's annual taxation is the most damaging for long-tenure investors — the tax on interest eats into compounding every year.</text>
  </svg>
);

const SvgLiquidityComparison = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Liquidity comparison showing PPF has 15 year lock-in with partial withdrawal after year 7 while FD can be broken anytime and debt funds can be redeemed in 1 to 3 business days" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">LIQUIDITY COMPARISON · CAN YOU ACCESS YOUR MONEY WHEN YOU NEED IT?</text>
    {[
      { prod: "PPF", access: "Low", detail: "15-year lock-in. Partial withdrawal from Year 7. Loan against PPF from Year 3.", color: "#dc2626", score: 2 },
      { prod: "FD", access: "High", detail: "Break anytime. Penalty: 0.5-1% on contracted rate. 90-day FD = very liquid.", color: "#16a34a", score: 8 },
      { prod: "Debt Fund", access: "Very High", detail: "Redemption in 1-3 business days. Exit load only in first 30 days (0.25%).", color: "#16a34a", score: 9 },
    ].map(({ prod, access, detail, color, score }, i) => (
      <g key={prod}>
        <text x="80" y={62 + i * 46} textAnchor="end" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">{prod}</text>
        <rect x="90" y={48 + i * 46} width={score * 40} height="26" fill={color} rx="4" opacity="0.8" />
        <text x={98} y={65 + i * 46} fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#fff">{access} liquidity</text>
        <text x={98 + score * 40} y={65 + i * 46} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)"> · {detail}</text>
      </g>
    ))}
    <text x="20" y="193" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">If you might need the money in under 5 years: FD or debt fund. PPF is genuinely locked. The partial withdrawal from Year 7 is 50% of balance at end of Year 4 — useful but not full access.</text>
  </svg>
);

const SvgRiskReturnMatrix = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Risk return matrix for PPF FD and debt mutual fund showing PPF has low risk and moderate returns while debt funds have low to moderate risk and better post-tax returns" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">RISK-RETURN MATRIX · WHERE EACH PRODUCT SITS</text>
    <line x1="60" y1="200" x2="700" y2="200" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="200" stroke="var(--border)" />
    <text x="380" y="220" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Risk (Capital loss potential) →</text>
    <text x="20" y="120" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)" transform="rotate(-90 20 120)">Return (post-tax, real) →</text>
    <circle cx="120" cy="120" r="20" fill="#16a34a" opacity="0.8" />
    <text x="120" y="124" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">PPF</text>
    <text x="120" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#16a34a">2% real, zero risk</text>
    <circle cx="180" cy="155" r="18" fill="#dc2626" opacity="0.8" />
    <text x="180" y="159" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">FD</text>
    <text x="180" y="140" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#dc2626">0% real, minimal risk</text>
    <circle cx="300" cy="95" r="22" fill="#7c3aed" opacity="0.8" />
    <text x="300" y="99" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">Debt Fund</text>
    <text x="300" y="76" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#7c3aed">1-2% real, low-mod risk</text>
    <circle cx="550" cy="65" r="25" fill={COLOR} opacity="0.8" />
    <text x="550" y="69" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">Equity</text>
    <text x="550" y="48" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill={COLOR}>6-9% real, high risk</text>
    <text x="20" y="235" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">For 30% slab, 5+ year horizon: Debt Fund sits in the sweet spot of risk and post-tax return. PPF wins on absolute safety if 15yr lock-in is acceptable. FD loses at this horizon due to tax drag.</text>
  </svg>
);

const SvgWhoPicksWhat = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Decision guide for choosing between PPF FD and debt fund based on investment horizon tax slab and liquidity needs" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHO SHOULD PICK WHAT</text>
    {[
      { who: "30% slab, 15yr+ horizon, no liquidity need", pick: "PPF", reason: "EEE tax + govt guarantee + 80C benefit = unbeatable for this profile", color: "#16a34a" },
      { who: "30% slab, 3-10yr horizon, need some flexibility", pick: "Debt Fund", reason: "LTCG at 12.5% with no annual tax drag beats FD significantly", color: "#7c3aed" },
      { who: "Any slab, under 2yr, capital preservation critical", pick: "FD", reason: "Guaranteed return, no NAV risk, DICGC-insured. Right tool for short horizon.", color: COLOR },
      { who: "Senior citizen, all income from interest", pick: "FD + SCSS", reason: "80TTB exemption + SCSS 8.2% = best risk-adjusted for seniors", color: "#16a34a" },
    ].map(({ who, pick, reason, color }, i) => (
      <g key={who}>
        <rect x="20" y={38 + i * 34} width={700} height="26" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={55 + i * 34} fontFamily="system-ui" fontSize="11" fill="var(--text)">{who}</text>
        <rect x="360" y={40 + i * 34} width="70" height="22" fill={color} rx="4" />
        <text x="395" y={55 + i * 34} textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{pick}</text>
        <text x="440" y={55 + i * 34} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{reason.slice(0, 60)}</text>
      </g>
    ))}
    <text x="20" y="175" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">No single product wins for everyone. The right mix depends on time horizon, tax slab, and liquidity requirements. Most families benefit from all three products in some combination.</text>
  </svg>
);

export default function PagePPFvsFDvsDebtFund() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Which is better: PPF, FD, or debt mutual fund?", "acceptedAnswer": { "@type": "Answer", "text": "For a 30% tax slab investor with a 10+ year horizon, PPF wins clearly: EEE tax treatment, government guarantee, and 80C deduction. For a 3-7 year horizon, debt mutual funds win due to LTCG at 12.5% (versus annual slab-rate taxation on FDs). For under 2-3 year horizons, FD wins: guaranteed return, no NAV risk, and DICGC insurance. The right answer depends on your time horizon, tax bracket, and liquidity needs." } },
      { "@type": "Question", "name": "What is the current PPF interest rate?", "acceptedAnswer": { "@type": "Answer", "text": "The PPF rate for Q1 FY 2026-27 (April-June 2026) is 7.1% per annum, unchanged since April 2020. The government reviews PPF rates quarterly but has kept them stable. PPF interest is compounded annually and credited on March 31 each year. The 7.1% is completely tax-free, making it equivalent to approximately 10.1% pre-tax return for a 30% slab investor — a remarkable after-tax rate for a government-guaranteed product." } },
      { "@type": "Question", "name": "How is debt mutual fund interest taxed after the 2023 budget change?", "acceptedAnswer": { "@type": "Answer", "text": "Since April 1, 2023, debt mutual funds held under 2 years are taxed at slab rate (same as FD). Debt funds held above 2 years are still eligible for Long Term Capital Gains (LTCG) at 12.5% without indexation. This is a significant change — prior to 2023, debt funds held above 3 years got indexation, making them more tax efficient. The 2+ year, 12.5% LTCG is still better than annual slab taxation on FD interest for 20-30% slab investors." } },
      { "@type": "Question", "name": "Can I break a PPF before 15 years?", "acceptedAnswer": { "@type": "Answer", "text": "Full closure before 15 years is only allowed in exceptional circumstances: life-threatening illness of account holder or dependent family member, higher education of account holder or dependent children, and change in residential status (NRI). Partial withdrawal is allowed from Year 7 onwards — up to 50% of the balance at end of Year 4. Loans against PPF balance are available from Year 3 to 6 at 1% above PPF interest rate. The 15-year lock-in is real — plan accordingly." } },
      { "@type": "Question", "name": "Is SCSS (Senior Citizen Savings Scheme) better than FD for retired people?", "acceptedAnswer": { "@type": "Answer", "text": "For most senior citizens: yes. SCSS currently offers 8.2% quarterly interest for 5-year tenure with government backing. This beats most large-bank FD rates (7-7.5%) significantly. The maximum investment is ₹30L. Combined with 80TTB (₹50K interest exemption), senior citizens can earn significant tax-efficient interest income from SCSS. The main disadvantage is the ₹30L limit — for larger corpuses, combination of SCSS + FD is the standard approach." } },
      { "@type": "Question", "name": "How do I choose between liquid funds and FD for short-term parking?", "acceptedAnswer": { "@type": "Answer", "text": "Liquid mutual funds invest in money market instruments and government securities with residual maturity under 91 days. Historical returns: 6-7% annualized. Taxation: held under 2 years = slab rate (same as FD). Advantage over FD: no lock-in, redemption in T+1 day, returns tend to track rising interest rates faster than FD rates. For amounts above ₹5L for under 90 days, liquid funds often beat FD after accounting for the absence of break penalty. For amounts under ₹5L or for guaranteed returns: FD is simpler." } },
      { "@type": "Question", "name": "What is the maximum PPF investment per year?", "acceptedAnswer": { "@type": "Answer", "text": "The minimum annual investment in PPF is ₹500 and the maximum is ₹1,50,000 (₹1.5 lakh) per financial year. This ₹1.5L limit is per PPF account — you cannot open multiple PPF accounts to invest more. However, you can invest in a PPF account for a minor child (up to ₹1.5L combined between your account and the minor's account). The ₹1.5L aligns with Section 80C limit — PPF investment is one of the 80C-qualifying instruments." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "PPF vs FD vs Debt Mutual Fund: Who Wins ₹10L Over 10 Years?", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Savings", item: "https://assurefintech.com/learn/savings/" },
    { "@type": "ListItem", position: 4, name: "PPF vs FD vs Debt Fund", item: "https://assurefintech.com/learn/savings/ppf-vs-fd-vs-debt-fund" },
  ]};

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / PPF vs FD vs Debt Fund</nav>
      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>SAVINGS · COMPARISON · TAX-EFFICIENT INSTRUMENTS</div>
      <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>PPF vs FD vs Debt Mutual Fund: Who Wins ₹10L Over 10 Years? (June 2026)</h1>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Three products. All "safe." Very different post-tax outcomes over 10 years. For a 30% slab investor, PPF returns ₹19.7L, debt fund ₹16.8L, and FD ₹13.6L on the same ₹10L. The difference is almost entirely tax treatment.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 11 min read</div>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The 10-Year Math Fight</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>All three products are commonly described as "safe" — and they are, in the sense that capital loss is minimal to zero. But safety in nominal terms doesn't mean identical outcomes. Over 10 years, the gap between best and worst case is ₹6.1 lakh on a ₹10L investment. That's 61% of the original principal as the difference between choosing wisely and choosing lazily.</p>
        <SvgOutcome10yr />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The ₹6.1L difference is almost entirely explained by tax treatment, not returns. PPF at 7.1% and FD at 7.0% have near-identical gross returns. The difference is that PPF interest is never taxed, while FD interest is taxed at 30% every single year. That annual tax drag compounds into a ₹6.1L difference over 10 years.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Tax Mechanics: EEE vs ETE</h2>
        <SvgTaxTreatment />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>PPF's EEE (Exempt-Exempt-Exempt) status is the gold standard in Indian personal finance. Your investment qualifies for 80C deduction (saves 30% of the invested amount in tax immediately). The interest earned is tax-free every year. The maturity amount is completely tax-free. At no point does the government take a rupee from PPF returns — a rare privilege.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>FD is ETE (Exempt-Taxable-Exempt) in practice: the principal is not taxed (it's your post-tax money), the interest is fully taxable at your slab rate every year, and there's no maturity tax. But that annual taxation is where the damage occurs — compounding is interrupted every year as tax payments reduce the investable base.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Debt mutual funds: since April 2023, gains are taxed at 12.5% LTCG for holding beyond 2 years (without indexation). This is a post-Budget 2024 structure. For investments held 2-10 years, the 12.5% one-time tax at exit significantly beats the annual 30% slab taxation of FDs.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Liquidity: The PPF Trade-Off</h2>
        <SvgLiquidityComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>PPF's 15-year lock-in is the reason many people avoid it even when it would otherwise be their best option. This is sometimes a mistake. If you're 30 years old today, you'll be 45 when the 15-year account matures — a perfectly reasonable age to access a large tax-free corpus. The lock-in horizon becomes less daunting when you map it to your life stage.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Partial withdrawals from Year 7 provide some flexibility. Loans against PPF from Year 3 to 6 at 1% above PPF rate are available for emergencies. These mechanisms aren't as liquid as FD or debt funds, but they're not as rigid as people fear.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Risk vs Return: Where Each Sits</h2>
        <SvgRiskReturnMatrix />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Debt mutual funds carry NAV risk: if interest rates rise, bond prices fall, and the fund's NAV dips. This doesn't mean you lose money if you hold for 2+ years, but you can see negative short-term returns. For someone who panics at any NAV drop, this psychological discomfort is real even if the financial impact is minimal at long horizons.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>FD and PPF carry zero NAV risk — the return is predetermined and guaranteed. PPF carries sovereign credit risk (if the government were to default), which is effectively zero. FD carries bank credit risk above the DICGC ₹5L limit.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Who Should Pick What</h2>
        <SvgWhoPicksWhat />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The smart approach for most salaried families: use all three products for different purposes. PPF for long-term wealth accumulation (take advantage of EEE + 80C). Debt fund for medium-term goals (down payment in 5 years, education fund in 7 years). FD for emergency fund and very short-term capital parking.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Explore our related guides: <Link href="/learn/savings/fd-real-return" style={{ color: COLOR }}>FD real return</Link> for the tax math in detail, <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" style={{ color: COLOR }}>Tax Saving FD vs ELSS vs PPF</Link> for the 80C angle, and the <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link>.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link> · <Link href="/learn/savings/fd-real-return" style={{ color: COLOR }}>FD real return</Link> · <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" style={{ color: COLOR }}>tax saving FD vs ELSS vs PPF</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: PPF rate from Ministry of Finance Q1 FY 2026-27. FD rates from bank websites as of {UPDATED}. Tax treatment from Income Tax Act (Finance Act 2025). Not financial advice.</footer>
    </main>
  );
}
