import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Senior Citizen FD Rates June 2026: The 0.5% Extra Is Worth 1.8L on 20L Over 5 Years",
  description: "Senior citizens get 0.25-0.50% extra on FD rates. With Section 80TTB and Form 15H, many retired investors pay zero tax on 50K interest income.",
  alternates: { canonical: "/learn/savings/senior-citizen-fd" },
  openGraph: {
    title: "Senior Citizen FD Rates June 2026: The 0.5% Extra Is Worth 1.8L on 20L Over 5 Years",
    description: "Senior citizens get 0.25-0.50% extra on FD rates. With Section 80TTB and Form 15H, many retired investors pay zero tax on 50K interest income.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/savings/senior-citizen-fd
// Template: Guide for specific audience (senior citizens + their children)
// Color: #ca8a04 | Updated: June 4, 2026

const COLOR = "#ca8a04";
const UPDATED = "June 4, 2026";

const SvgRateComparison = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Senior citizen versus regular FD rates at top 8 banks as of June 2026 showing senior citizens earn 0.25 to 0.50 percent extra across all major banks" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SENIOR CITIZEN vs REGULAR FD RATES · 1-YEAR FD · JUNE 2026</text>
    {[
      { bank: "SBI", regular: 7.00, senior: 7.50, x: 60 },
      { bank: "HDFC", regular: 7.25, senior: 7.75, x: 155 },
      { bank: "ICICI", regular: 7.10, senior: 7.60, x: 250 },
      { bank: "Axis", regular: 7.10, senior: 7.60, x: 345 },
      { bank: "Kotak", regular: 7.40, senior: 7.90, x: 440 },
      { bank: "Unity SFB", regular: 9.00, senior: 9.50, x: 535 },
      { bank: "SCSS*", regular: "N/A", senior: 8.20, x: 630 },
    ].map(({ bank, regular, senior, x }) => (
      <g key={bank}>
        <rect x={x} y={260 - (typeof regular === "number" ? regular * 20 : 0)} width="35" height={typeof regular === "number" ? regular * 20 : 0} fill="var(--border)" rx="3" opacity="0.6" />
        <rect x={x + 38} y={260 - senior * 20} width="35" height={senior * 20} fill={COLOR} rx="3" opacity="0.85" />
        {typeof regular === "number" && <text x={x + 17} y={253 - regular * 20} textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">{regular}%</text>}
        <text x={x + 56} y={253 - senior * 20} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>{senior}%</text>
        <text x={x + 36} y="275" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text)">{bank}</text>
      </g>
    ))}
    <line x1="40" y1="260" x2="700" y2="260" stroke="var(--border)" />
    <g><rect x="500" y="20" width="12" height="12" fill="var(--border)" rx="2" /><text x="518" y="30" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Regular</text></g>
    <g><rect x="500" y="38" width="12" height="12" fill={COLOR} rx="2" opacity="0.85" /><text x="518" y="48" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Senior / SCSS</text></g>
    <text x="20" y="295" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">*SCSS (Senior Citizen Savings Scheme) is government-backed, 5-year tenor, max ₹30L, quarterly interest payout. Not technically an FD but the closest safe alternative for seniors.</text>
  </svg>
);

const SvgIncomeOnInvestment = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Annual interest income calculation for 20 lakh invested at different senior citizen FD rates and SCSS showing rupee income per year" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ANNUAL INTEREST INCOME · ₹20L INVESTED · SENIOR CITIZEN RATES · JUNE 2026</text>
    {[
      { product: "SCSS (8.20%)", income: 164000, color: "#16a34a" },
      { product: "Unity SFB Senior (9.50%)", income: 190000, color: "#16a34a" },
      { product: "Kotak Senior FD (7.90%)", income: 158000, color: COLOR },
      { product: "HDFC Senior FD (7.75%)", income: 155000, color: COLOR },
      { product: "SBI Senior FD (7.50%)", income: 150000, color: "#ca8a04" },
    ].map(({ product, income, color }, i) => (
      <g key={product}>
        <text x="250" y={52 + i * 38} textAnchor="end" fontFamily="system-ui" fontSize="12" fill="var(--text)">{product}</text>
        <rect x="260" y={38 + i * 38} width={income / 800} height="24" fill={color} rx="4" opacity="0.85" />
        <text x={268 + income / 800} y={55 + i * 38} fontFamily="system-ui" fontSize="13" fontWeight="700" fill={color}>₹{income.toLocaleString()}/yr</text>
        <text x={268 + income / 800 + 100} y={55 + i * 38} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">= ₹{Math.round(income / 12).toLocaleString()}/month</text>
      </g>
    ))}
    <text x="20" y="235" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">After 80TTB exemption (₹50,000 tax-free interest), the first ₹50K of above income is tax-free regardless of slab. Senior citizens in nil slab: entire income above may be tax-free if under basic exemption.</text>
  </svg>
);

const SvgSCSSvsfd = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="SCSS versus senior citizen FD comparison showing SCSS is better on rate and government backing but FD wins on flexibility and no maximum limit" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SCSS vs SENIOR CITIZEN FD · THE HONEST COMPARISON</text>
    {[{ h: "Feature" }, { h: "SCSS" }, { h: "Senior Citizen FD" }].map(({ h }, i) => {
      const xs = [20, 220, 480];
      return <rect key={h} x={xs[i]} y="35" width={[190, 250, 240][i]} height="24" fill={COLOR}><text x={xs[i] + [190, 250, 240][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Interest rate", "8.20% (govt-set quarterly)", "7.50-9.50% (bank-set)"],
      ["Maximum investment", "₹30 lakh", "No limit"],
      ["Tenor", "5 years (extendable 3yr)", "7 days to 10 years"],
      ["Interest payout", "Quarterly (mandatory)", "Monthly / Quarterly / Maturity"],
      ["Tax on interest", "Taxable at slab", "Taxable at slab"],
      ["80TTB exemption", "Eligible (₹50K)", "Eligible (₹50K)"],
      ["Safety", "Sovereign guarantee", "DICGC ₹5L per bank"],
      ["Premature closure", "Penalty 1-1.5%", "Penalty 0.5-1%"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 19} width={700} height="19" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 220, 480];
          const isGoodSCSS = ci === 1 && (cell.includes("govt") || cell.includes("Sovereign") || cell.includes("8.20"));
          const isGoodFD = ci === 2 && (cell.includes("No limit") || cell.includes("Monthly") || cell.includes("9.50"));
          return <text key={ci} x={xs[ci] + 5} y={72 + ri * 19} fontFamily="system-ui" fontSize="10" fill={isGoodSCSS ? "#16a34a" : isGoodFD ? "#16a34a" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="218" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Best strategy: use SCSS for the first ₹30L (sovereign guarantee + 8.20%). For remaining corpus, park in senior citizen FDs at Unity SFB or Kotak for higher rates.</text>
  </svg>
);

const SvgForm15H = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Form 15H guide showing how senior citizens can submit form 15H to bank to prevent TDS deduction on FD interest when total income is below taxable limit" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FORM 15H: HOW TO AVOID TDS ON FD INTEREST · SENIOR CITIZENS ONLY</text>
    <rect x="20" y="38" width="680" height="120" fill="var(--surface, #f0fdf4)" stroke="#16a34a" strokeWidth="1" rx="8" />
    <text x="36" y="62" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">Who can submit Form 15H?</text>
    <text x="36" y="82" fontFamily="system-ui" fontSize="12" fill="var(--text)">Senior citizens (age 60+) whose total income in the financial year does not exceed the basic exemption limit.</text>
    <text x="36" y="99" fontFamily="system-ui" fontSize="12" fill="var(--text)">Basic exemption for senior citizens: ₹3,00,000. For super senior citizens (age 80+): ₹5,00,000.</text>
    <text x="36" y="118" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">When to submit?</text>
    <text x="36" y="136" fontFamily="system-ui" fontSize="12" fill="var(--text)">At the start of every financial year (April) to ALL banks where FDs are held. Digital submission available on most bank apps. No notarization needed.</text>
    <text x="36" y="153" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>What it does:</text>
    <text x="120" y="153" fontFamily="system-ui" fontSize="12" fill="var(--text)">Prevents 10% TDS on FD interest. Saves the hassle of refund claims. Does NOT exempt you from tax — you still declare and pay at filing if liable.</text>
    <text x="20" y="173" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">TDS threshold for senior citizens: ₹50,000 interest per bank per year. Below ₹50K from one bank, no TDS regardless of Form 15H. Submit anyway if income is below exemption limit.</text>
  </svg>
);

const Svg80TTB = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Section 80TTB deduction calculation showing senior citizens can deduct up to 50000 rupees of interest income from savings FD and post office deposits" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SECTION 80TTB: ₹50,000 INTEREST DEDUCTION FOR SENIOR CITIZENS</text>
    <rect x="20" y="38" width="680" height="50" fill="var(--surface, #f0f9ff)" stroke={COLOR} strokeWidth="1.5" rx="8" />
    <text x="30" y="60" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>80TTB allows deduction of up to ₹50,000 on interest income from: savings account, FD, RD, and Post Office deposits.</text>
    <text x="30" y="80" fontFamily="system-ui" fontSize="12" fill="var(--text)">Available only in OLD tax regime. Not available for those who opt for new regime.</text>
    <text x="20" y="110" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">Example: Mr. Sharma (age 67), total FD interest = ₹72,000</text>
    <text x="20" y="130" fontFamily="system-ui" fontSize="12" fill="var(--text)">80TTB deduction: ₹50,000 | Taxable interest: ₹22,000</text>
    <text x="20" y="148" fontFamily="system-ui" fontSize="12" fill="var(--text)">If total income (after 80TTB) is under ₹3L exemption limit: zero tax. Rebate under 87A applies if income is under ₹5L.</text>
    <rect x="20" y="160" width="680" height="30" fill={COLOR} rx="4" opacity="0.15" />
    <text x="30" y="180" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>Senior citizens in nil/5% slab with FD income: 80TTB + basic exemption often makes entire FD interest tax-free. Plan FD allocation with this in mind.</text>
  </svg>
);

export default function PageSeniorCitizenFD() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the best FD rate for senior citizens in June 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Unity Small Finance Bank offers 9.50% for senior citizens (0.50% extra over regular rate of 9.00%). Among large private banks, Kotak Mahindra Bank leads at 7.90% for seniors. SBI offers 7.50% for senior citizens. For government-backed options, SCSS (Senior Citizen Savings Scheme) offers 8.20% with sovereign guarantee. For the safest high-yield option, SCSS for up to ₹30L and Kotak or HDFC FD for the remaining corpus is a common combination." } },
      { "@type": "Question", "name": "How much extra interest do senior citizens get on FDs?", "acceptedAnswer": { "@type": "Answer", "text": "Most banks offer 0.25-0.50% extra interest to senior citizens (age 60+) over their regular FD rates. Some banks offer an additional premium for super senior citizens (age 80+) — SBI offers an extra 0.25% for those above 80. The extra rate applies on all tenors from 7 days to 10 years. This premium is the bank's way of attracting stable, long-term deposits from retired individuals." } },
      { "@type": "Question", "name": "Should my parents choose SCSS or bank FD?", "acceptedAnswer": { "@type": "Answer", "text": "SCSS for the first ₹30L — 8.20% with sovereign guarantee is unbeatable at this risk level. For amounts above ₹30L, use senior citizen FDs at Kotak (7.90%) or HDFC (7.75%). The rationale: SCSS's government backing is the safest possible investment for the core retirement corpus, while the remaining can seek slightly higher rates from private banks (within DICGC limits). Split large amounts across 2-3 banks to stay within ₹5L DICGC coverage per bank." } },
      { "@type": "Question", "name": "Is FD interest taxable for senior citizens?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, FD interest is taxable at the applicable income tax slab rate for senior citizens too. However, Section 80TTB allows a deduction of up to ₹50,000 on total interest income from savings deposits (FD, RD, savings account, post office). Under old regime: senior citizens with total income under ₹3L basic exemption + ₹50K 80TTB = ₹3.5L effectively tax-free. Under new regime: 80TTB is not available. For most retired seniors living on FD interest, old regime is more beneficial." } },
      { "@type": "Question", "name": "What is Form 15H and who should submit it?", "acceptedAnswer": { "@type": "Answer", "text": "Form 15H is a self-declaration by senior citizens (60+) that their total income for the year will be below the taxable limit, requesting the bank not to deduct TDS on FD interest. Submit at the start of every financial year to all banks where you hold FDs. Banks deduct 10% TDS on FD interest above ₹50,000 per year unless Form 15H is submitted. If you don't submit and TDS is deducted, you can claim it back via ITR — but submitting Form 15H avoids the refund hassle." } },
      { "@type": "Question", "name": "What happens to FDs if the account holder dies?", "acceptedAnswer": { "@type": "Answer", "text": "FD proceeds are paid to the registered nominee upon producing the death certificate and claim form. If no nominee is registered, legal heirs need to follow the bank's succession claim process (requires succession certificate or letters of administration for larger amounts). Interest is paid up to the date of death, and the FD amount is credited to the nominee's account or settled through the legal process. This is why registering nominees on all FDs is critical — it simplifies the process immensely for the family." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Senior Citizen FD Rates June 2026: The 0.5% Extra That's Worth ₹1.8L on ₹20L", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Savings", item: "https://assurefintech.com/learn/savings/" },
    { "@type": "ListItem", position: 4, name: "Senior Citizen FD", item: "https://assurefintech.com/learn/savings/senior-citizen-fd" },
  ]};

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / Senior Citizen FD</nav>
      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>SAVINGS · FIXED DEPOSITS · SENIOR CITIZENS</div>
      <h1 style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>Senior Citizen FD Rates June 2026: The 0.5% Extra Is Worth ₹1.8L on ₹20L Over 5 Years</h1>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Senior citizens get 0.25-0.50% more than regular FD rates — and with Section 80TTB and Form 15H, many retired investors pay zero tax on ₹50,000 of interest income. Here's the full picture with June 2026 rates.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>Last updated {UPDATED} · By Ash K · 9 min read</div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Senior Citizen Rate Advantage</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Banks are required by RBI to offer senior citizens (age 60 and above) at least 0.25% extra interest on FDs compared to the general public rate. Most banks offer 0.50% extra for 1-3 year FDs, their most common senior citizen product.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>On ₹20 lakh invested at 7.5% (SBI senior rate) versus 7.0% (SBI regular rate): the extra 0.50% generates ₹10,000 per year more in interest. Over 5 years with reinvestment, that's approximately ₹1.8 lakh extra. Free money, purely for being above 60 years of age.</p>
        <SvgRateComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>SCSS (Senior Citizen Savings Scheme) from the post office offers 8.20% — significantly higher than even Kotak's 7.90% for seniors. SCSS is sovereign-guaranteed, pays quarterly, and allows up to ₹30 lakh. For any senior citizen's core retirement corpus: SCSS first, FD for the remaining amount.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How Much Income Can ₹20L Generate?</h2>
        <SvgIncomeOnInvestment />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>On ₹20 lakh in Unity SFB's 9.50% senior FD: ₹1,90,000/year = ₹15,833/month. That's a meaningful monthly income for many retired households — covering daily expenses with some buffer. Even SBI's 7.50%: ₹1,50,000/year = ₹12,500/month.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For tax planning: the 80TTB deduction of ₹50,000 means the first ₹50K of this income is deductible. For a senior citizen with no other income, effective taxable income from FDs is reduced by ₹50K. Combined with the ₹3L basic exemption for seniors, income up to ₹3.5L (under old regime) faces zero tax.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>SCSS vs Senior Citizen FD: Which Is Right?</h2>
        <SvgSCSSvsfd />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The recommendation for most retired senior citizens: put the first ₹30 lakh in SCSS (maximum allowed, government-backed, 8.20%). For amounts above ₹30L, spread across 2-3 bank FDs within the ₹5L DICGC limit per bank to stay fully insured.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>SCSS's quarterly interest payout is ideal for regular income needs — money comes in every March, June, September, and December. Bank FDs offer more flexibility: monthly payouts, cumulative options, flexible tenors from 7 days to 10 years.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Form 15H: How to Avoid TDS</h2>
        <SvgForm15H />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Every April, submit Form 15H at every bank where FDs are held. Most bank apps now allow digital submission — HDFC, ICICI, and SBI all have this in their net banking portal under "FD Services" or "Tax" sections. Submitting Form 15H doesn't mean you don't pay tax; it means the bank doesn't deduct TDS upfront. You declare and pay at ITR filing time if actually liable.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Section 80TTB: The ₹50,000 Tax Break</h2>
        <Svg80TTB />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>80TTB is available only under the old tax regime. If you or your retired parents have switched to the new regime (which has no such exemption), evaluate whether the new regime's lower slab rates save more than 80TTB's ₹50K deduction. For senior citizens with FD income as primary income source, the old regime almost always wins because of 80TTB plus the higher basic exemption of ₹3L.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Also see our broader <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link>, our guide to <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs Debt Fund</Link>, and our <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C deductions guide</Link> for how to structure the full retired income plan.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/savings" style={{ color: COLOR }}>savings hub</Link> · <Link href="/learn/savings/fd-real-return" style={{ color: COLOR }}>FD real return</Link> · <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs Debt Fund</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: FD rates from bank websites as of {UPDATED}. SCSS rate from Ministry of Finance Q1 FY 2026-27. 80TTB from Income Tax Act. DICGC from dicgc.rbi.org.in. Not financial advice.</footer>
    </main>
  );
}
