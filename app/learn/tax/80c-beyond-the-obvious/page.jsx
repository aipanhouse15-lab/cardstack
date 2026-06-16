import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "80C: 12 Deductions Beyond ELSS and LIC That Most Salaried Indians Miss",
  description: "Everyone knows PPF and ELSS for 80C. Fewer know tuition fees, home loan principal, and stamp duty also qualify. Complete list with limits and gotchas.",
  alternates: { canonical: "/learn/tax/80c-beyond-the-obvious" },
  openGraph: {
    title: "80C: 12 Deductions Beyond ELSS and LIC That Most Salaried Indians Miss",
    description: "Everyone knows PPF and ELSS for 80C. Fewer know tuition fees, home loan principal, and stamp duty also qualify. Complete list with limits and gotchas.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/tax/80c-beyond-the-obvious
// Template: Myth-buster / "things most people miss"
// Color: #16a34a | Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

const SvgDeductionsMap = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Complete map of all Section 80C eligible deductions including EPF PPF ELSS LIC tuition fees home loan principal stamp duty NSC SCSS and Sukanya Samriddhi with maximum amounts" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ALL 12 SECTION 80C ELIGIBLE ITEMS · ₹1.5L ANNUAL LIMIT (OLD REGIME)</text>
    {[
      { item: "Employee EPF contribution", max: "No cap (auto)", color: COLOR, group: "Auto" },
      { item: "PPF (Public Provident Fund)", max: "₹1.5L/yr", color: COLOR, group: "Invest" },
      { item: "ELSS mutual funds", max: "₹1.5L/yr", color: "#7c3aed", group: "Invest" },
      { item: "LIC / term insurance premium", max: "Premium paid", color: "#e11d48", group: "Insure" },
      { item: "Children's tuition fees (up to 2 kids)", max: "Actual amount", color: "#f59e0b", group: "Edu" },
      { item: "Home loan principal repayment", max: "Actual amount", color: "#2563eb", group: "Loan" },
      { item: "Sukanya Samriddhi (for daughters)", max: "₹1.5L/yr", color: COLOR, group: "Invest" },
      { item: "National Savings Certificate (NSC)", max: "No cap", color: "#ca8a04", group: "Invest" },
      { item: "5-year Tax Saving FD", max: "No cap", color: "#ca8a04", group: "Invest" },
      { item: "SCSS (Senior Citizen Savings Scheme)", max: "₹30L total", color: COLOR, group: "Invest" },
      { item: "Stamp duty & registration on property", max: "One-time", color: "#2563eb", group: "Loan" },
      { item: "NPS Tier-I (up to 80CCD(1))", max: "10% of salary", color: "#7c3aed", group: "Invest" },
    ].map(({ item, max, color }, i) => (
      <g key={item}>
        <rect x="20" y={38 + i * 23} width={700} height="20" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <rect x="20" y={38 + i * 23} width="8" height="20" fill={color} />
        <text x="35" y={53 + i * 23} fontFamily="system-ui" fontSize="11" fill="var(--text)">{item}</text>
        <text x="630" y={53 + i * 23} fontFamily="system-ui" fontSize="11" fontWeight="600" fill={color}>{max}</text>
      </g>
    ))}
    <text x="20" y="316" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">The ₹1.5L cap is on total 80C deduction claimed, not per item. EPF alone often fills ₹60-90K of this for salaried employees. Check your payslip before buying additional 80C products.</text>
  </svg>
);

const SvgMostMissed = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Most commonly missed 80C deductions showing children tuition fees home loan principal and stamp duty that most salaried Indians do not claim" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">THE MOST MISSED 80C DEDUCTIONS · WHAT MOST SALARIED INDIANS FORGET TO CLAIM</text>
    {[
      { item: "Children's tuition fees", detail: "School / college fees for up to 2 children. Full-time courses only. Claimable even for private school fees.", savings30pct: "₹45,000", missed: "Very High" },
      { item: "Home loan principal repayment", detail: "The principal component of your EMI qualifies for 80C. Check your loan statement — it's usually ₹60-120K/year.", savings30pct: "₹27,000-36,000", missed: "High" },
      { item: "Stamp duty & registration (year of purchase)", detail: "Paid once when you register a property. Eligible for 80C in the year of payment only.", savings30pct: "Up to ₹45,000", missed: "Very High" },
      { item: "Sukanya Samriddhi (daughters below 10)", detail: "8.2% interest, EEE tax, sovereign backed. Better than PPF for girl child savings.", savings30pct: "₹45,000 on ₹1.5L", missed: "Moderate" },
    ].map(({ item, detail, savings30pct, missed }, i) => (
      <g key={item}>
        <rect x="20" y={38 + i * 44} width={700} height="36" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} rx="2" />
        <text x="26" y={55 + i * 44} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>{item}</text>
        <text x="26" y={70 + i * 44} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{detail.slice(0, 80)}</text>
        <text x="580" y={55 + i * 44} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>Saves: {savings30pct}</text>
        <text x="580" y={70 + i * 44} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Miss rate: {missed}</text>
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Children's tuition fees and home loan principal together can contribute ₹80,000-1,50,000 to 80C — potentially filling the entire limit without any additional investment.</text>
  </svg>
);

const SvgNPSExtra = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="NPS 80CCD 1B additional deduction of 50000 rupees over and above 80C limit showing total tax saving potential of 2 lakh rupees for 30 percent slab investor" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">NPS 80CCD(1B): ₹50,000 EXTRA DEDUCTION BEYOND THE ₹1.5L 80C LIMIT</text>
    <rect x="20" y="40" width="280" height="120" fill={COLOR} rx="8" opacity="0.12" stroke={COLOR} strokeWidth="1" />
    <text x="160" y="68" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>Section 80C</text>
    <text x="160" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill={COLOR}>₹1,50,000</text>
    <text x="160" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">EPF + PPF + ELSS +</text>
    <text x="160" y="126" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">tuition + home loan etc.</text>
    <text x="160" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill={COLOR}>Tax saved (30%): ₹45,000</text>
    <text x="310" y="102" textAnchor="middle" fontFamily="system-ui" fontSize="20" fontWeight="800" fill="var(--text)">+</text>
    <rect x="340" y="40" width="220" height="120" fill="#7c3aed" rx="8" opacity="0.12" stroke="#7c3aed" strokeWidth="1" />
    <text x="450" y="68" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#7c3aed">80CCD(1B) — NPS</text>
    <text x="450" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill="#7c3aed">₹50,000</text>
    <text x="450" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Additional NPS Tier-I</text>
    <text x="450" y="126" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">contribution above 80C</text>
    <text x="450" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#7c3aed">Extra saved (30%): ₹15,000</text>
    <rect x="580" y="60" width="120" height="80" fill="#16a34a" rx="8" opacity="0.9" />
    <text x="640" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">TOTAL TAX</text>
    <text x="640" y="106" textAnchor="middle" fontFamily="system-ui" fontSize="18" fontWeight="800" fill="#fff">₹60,000</text>
    <text x="640" y="124" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#bbf7d0">saved/yr (30%)</text>
    <text x="20" y="190" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">NPS 80CCD(1B) is over and above 80C — it doesn't compete with PPF/ELSS. This ₹50,000 extra deduction saves ₹15,000/year in tax for 30% slab. NPS has retirement lock-in — 60% lump sum at 60, 40% annuity.</text>
  </svg>
);

const SvgTaxSavedByAmount = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Tax saved at different income tax slabs for 1.5 lakh 80C deduction showing savings of 7500 at 5 percent slab to 45000 at 30 percent slab" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW MUCH TAX DOES ₹1.5L 80C ACTUALLY SAVE? BY INCOME SLAB</text>
    {[
      { slab: "5% (₹3L-7L income)", saved: 7500, color: "#65a30d", note: "₹7,500/yr — still worth claiming" },
      { slab: "20% (₹10L-12L income)", saved: 30000, color: COLOR, note: "₹30,000/yr — meaningful" },
      { slab: "30% (above ₹15L income)", saved: 45000, color: "#16a34a", note: "₹45,000/yr — significant. Max every rupee." },
    ].map(({ slab, saved, color, note }, i) => (
      <g key={slab}>
        <text x="200" y={68 + i * 54} textAnchor="end" fontFamily="system-ui" fontSize="12" fill="var(--text)">{slab}</text>
        <rect x="210" y={50 + i * 54} width={saved / 150} height="30" fill={color} rx="5" opacity="0.85" />
        <text x={218 + saved / 150} y={70 + i * 54} fontFamily="system-ui" fontSize="16" fontWeight="800" fill={color}>₹{saved.toLocaleString()}/yr</text>
        <text x={218 + saved / 150} y={84 + i * 54} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{note}</text>
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Plus 4% cess on above: actual savings are ₹7,800 / ₹31,200 / ₹46,800 respectively. NPS 80CCD(1B) adds another ₹2,600 / ₹10,400 / ₹15,600 on top.</text>
  </svg>
);

const SvgSukanyaSamriddhi = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Sukanya Samriddhi Yojana features showing 8.2 percent interest rate EEE tax treatment minimum 250 rupees deposit and 21 year maturity making it best instrument for girl child savings" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SUKANYA SAMRIDDHI YOJANA: BEST 80C INSTRUMENT FOR PARENTS OF DAUGHTERS</text>
    <rect x="20" y="38" width="680" height="120" fill="var(--surface, #f0fdf4)" stroke={COLOR} strokeWidth="1.5" rx="8" />
    {[
      { label: "Interest rate", value: "8.20% (Q1 FY 2026-27, govt-set quarterly)" },
      { label: "Tax treatment", value: "EEE — investment, interest, and maturity all exempt" },
      { label: "Who can open", value: "Parents/guardians of girl children below 10 years old" },
      { label: "Minimum deposit", value: "₹250/year (maximum ₹1.5L/year)" },
      { label: "Maturity", value: "21 years from account opening. Partial withdrawal at age 18 for education." },
    ].map(({ label, value }, i) => (
      <g key={label}>
        <text x="36" y={58 + i * 20} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>{label}:</text>
        <text x="175" y={58 + i * 20} fontFamily="system-ui" fontSize="11" fill="var(--text)">{value}</text>
      </g>
    ))}
    <text x="20" y="172" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">SSY at 8.20% beats PPF (7.1%) and FD by a meaningful margin with EEE tax — the best government-backed return available. If you have a daughter below 10, open this account immediately at any post office or SBI branch.</text>
  </svg>
);

export default function Page80CBeyondObvious() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What are the least-known 80C deductions in India?", "acceptedAnswer": { "@type": "Answer", "text": "The most commonly missed 80C deductions are: children's school/college tuition fees (up to 2 children, all full-time course fees qualify, no cap per child), home loan principal repayment (the principal portion of your EMI qualifies every year automatically), and stamp duty and registration charges paid when buying a property (claimable in the year of payment only). Many salaried homeowners miss the home loan principal deduction simply because their tax-saving investment already fills the ₹1.5L cap via EPF." } },
      { "@type": "Question", "name": "Does EPF contribution count toward the 80C limit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your employee contribution to EPF (12% of basic salary) qualifies for 80C deduction and is counted toward the ₹1.5L limit. For employees with ₹8L+ annual basic salary, EPF contribution alone fills ₹48,000-72,000 of the limit. Combined with employer-matched NPS contribution (if applicable), many salaried employees have ₹80,000-1,40,000 of 80C already claimed without any additional action. Check your Form 16 Part B under '80C deductions' before buying any new investment." } },
      { "@type": "Question", "name": "What is the extra 80CCD(1B) deduction for NPS?", "acceptedAnswer": { "@type": "Answer", "text": "Section 80CCD(1B) allows an additional ₹50,000 deduction for contributions to NPS Tier-I, over and above the ₹1.5L Section 80C limit. This is NOT counted within the 80C bucket — it's separate. For a 30% slab investor, this saves an additional ₹15,600 in tax per year (₹50,000 × 30% × 1.04 cess). The trade-off: NPS has a retirement lock-in — 60% lump sum at age 60, 40% mandatory annuity. Suitable if you're building retirement corpus anyway." } },
      { "@type": "Question", "name": "Can I claim both home loan interest (Section 24b) and principal (80C)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. These are completely separate deductions from different sections. Under Section 24(b), interest paid on home loan is deductible up to ₹2L/year (self-occupied property). Under Section 80C, the principal repayment qualifies for up to ₹1.5L per year combined with other 80C investments. A typical homeowner with ₹8L interest and ₹3L principal in a year can claim ₹2L under 24b and up to ₹1.5L under 80C (principal capped at ₹1.5L combined 80C). Both are available in old regime only." } },
      { "@type": "Question", "name": "Is Sukanya Samriddhi better than PPF for a girl child?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a girl child below 10 years: Sukanya Samriddhi Yojana (SSY) is better than PPF in almost every way. SSY offers 8.20% versus PPF's 7.1%, has the same EEE tax treatment, and is government-backed. The only restrictions: SSY matures at 21 years from account opening (versus PPF's 15 years), and the account must be opened before the girl turns 10. Partial withdrawal for education is allowed at 18. If you have a daughter below 10, SSY should be your first savings vehicle before PPF." } },
      { "@type": "Question", "name": "Can I claim 80C for tuition fees paid at a foreign university?", "acceptedAnswer": { "@type": "Answer", "text": "No. Section 80C deduction for tuition fees is available only for full-time courses at schools, colleges, and universities in India recognized by the UGC, AICTE, or equivalent bodies. Fees paid to foreign institutions — even for online Indian programs from foreign universities — do not qualify. Tuition fees exclude: hostel charges, mess charges, transportation, and any development fees or capitation fees. Only the actual tuition/course fee component qualifies." } },
      { "@type": "Question", "name": "How do I check if my 80C is already full from EPF?", "acceptedAnswer": { "@type": "Answer", "text": "Look at your salary slip under 'Employee PF Contribution.' This amount multiplied by 12 is your approximate EPF 80C contribution for the year. Alternatively, your Form 16 Part B (provided by your employer) will show the breakdown of 80C deductions already factored into your TDS calculation. Your payroll software may have already submitted these deductions to IT. If EPF fills ₹90,000 of your ₹1.5L limit, you only need ₹60,000 more from PPF, ELSS, or other sources." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "80C: 12 Deductions Beyond ELSS and LIC That Most Salaried Indians Miss", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Tax", item: "https://assurefintech.com/learn/tax/" },
    { "@type": "ListItem", position: 4, name: "80C Beyond the Obvious", item: "https://assurefintech.com/learn/tax/80c-beyond-the-obvious" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #021509, #073417, #021509)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #16a34a22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Tax · Section 80c · Deductions
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            80C: 12 Deductions Beyond ELSS and LIC That Most Salaried Indians Miss
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/tax" style={{ color: "inherit" }}>Tax</Link> / 80C Beyond the Obvious</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Everyone knows about PPF and ELSS for 80C. Fewer know that children's tuition fees, home loan principal repayment, and stamp duty also qualify — and for many families, these alone fill most of the ₹1.5L limit without any additional investment.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The 80C Panic: Why It Happens Every March</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Every February-March, the "80C deadline" causes a rush to buy LIC policies, ELSS funds, or Tax Saving FDs. This panic is partly unnecessary. For many salaried employees, the ₹1.5L 80C limit is already partially or fully filled through EPF contributions they're making automatically every month.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The second source of panic: not realizing that money you've already spent on school fees, home loan EMIs, or property registration also qualifies for deduction. These don't require additional investment — they're deductions on spending you'd do anyway.</p>
        <SvgDeductionsMap />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The ₹1.5L limit is a combined cap across all 12 qualifying items. Your job: first tally what you're already contributing (EPF + existing insurance + tuition fees + home loan principal), then invest the gap in the highest-returning available option (usually ELSS or PPF).</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Three Deductions Most People Forget</h2>
        <SvgMostMissed />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Children's tuition fees: this is the single most underutilized 80C deduction. If you have one or two kids in school or college, their full tuition fee (not hostel, not mess, not transport — just tuition/course fees) qualifies. A private school at ₹1.5L/year per child fills your entire 80C limit for that year, requiring zero separate investment.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Home loan principal: every month, your EMI pays some interest and some principal. The principal portion qualifies for 80C. In the first few years of a home loan, the principal portion is smaller (around ₹40,000-80,000/year on a ₹50L loan at 9%). As the loan matures, principal grows. Check your lender's amortization schedule — your bank app usually shows year-wise principal and interest split.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Stamp duty and registration: when you buy property, you pay stamp duty (5-7% of property value) and registration charges. In the year you pay these (not every year, just the year of purchase), this amount qualifies for 80C deduction. On a ₹60L property at 5% stamp duty, that's ₹3L in registration charges — ₹1.5L of which can be claimed under 80C.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The NPS Bonus: ₹50,000 Over and Above 80C</h2>
        <SvgNPSExtra />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Section 80CCD(1B) is the most underused tax-saving provision for salaried people with stable incomes. It lets you claim an additional ₹50,000 deduction on NPS Tier-I contributions, completely separate from the ₹1.5L 80C bucket. For a 30% slab investor, this saves ₹15,600 per year in tax.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>NPS Tier-I is a retirement account — you can't withdraw freely until age 60. At maturity: 60% as lump sum (tax-free), 40% as annuity (taxable). For most employed people who already have EPF as retirement savings, ₹50,000 in NPS is a targeted tax-saving instrument rather than a primary retirement vehicle.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How Much Does 80C Actually Save?</h2>
        <SvgTaxSavedByAmount />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The higher your income, the more valuable every rupee of 80C deduction is. At 30% slab, the ₹1.5L 80C + ₹50K NPS 80CCD(1B) + Section 24(b) home loan interest (₹2L) can collectively save up to ₹1.09L in tax per year — a very significant number that most people don't actively plan for.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The One Instrument Most People Don't Even Know About</h2>
        <SvgSukanyaSamriddhi />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Sukanya Samriddhi Yojana (SSY) is available at post offices and major bank branches. Opening takes 30 minutes and ₹250. If you have a daughter below age 10, this should be your first 80C investment before anything else — it offers 8.20% (currently better than PPF's 7.1%) with full EEE tax treatment and government guarantee.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our full guides: <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" style={{ color: COLOR }}>Tax Saving FD vs ELSS vs PPF</Link> for investment comparison, <Link href="/learn/tax/hra-calculation" style={{ color: COLOR }}>HRA calculation guide</Link> for another major deduction, and the <Link href="/learn/tax" style={{ color: COLOR }}>tax hub</Link> for the full picture.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/tax" style={{ color: COLOR }}>tax hub</Link> · <Link href="/learn/tax/hra-calculation" style={{ color: COLOR }}>HRA calculation</Link> · <Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf" style={{ color: COLOR }}>Tax Saving FD vs ELSS vs PPF</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: 80C rules from Income Tax Act Section 80C (Finance Act 2025). SSY rate from Ministry of Finance Q1 FY 2026-27. NPS rules from PFRDA. Not financial or tax advice — consult a chartered accountant for personalized tax planning.</footer>
    </main>
    </>
  );
}
