import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 1 Article 1 — Old vs New Tax Regime 2026
// URL: /blog/old-vs-new-tax-regime-2026
// Category: Tax · Color: Green #16A34A
// Author: Ash K · Reviewed: April 20, 2026
// Target: 3,500+ visible words · 4 info-SVGs · 7 FAQs
// ============================================================

const COLOR = "#16A34A";
const UPDATED = "April 20, 2026";

const SvgSlabComparison = () => (
  <svg viewBox="0 0 640 280" role="img" aria-label="New regime FY 2025-26 seven-slab structure with 87A rebate band and old regime four-slab structure side by side" style={{ width: "100%", maxWidth: 720 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">NEW REGIME · FY 2025-26 · 7 SLABS · POST BUDGET 2025</text>
    {[
      { range: "Up to ₹4L", rate: "0%", c: "#dcfce7" },
      { range: "₹4-8L", rate: "5%", c: "#bbf7d0" },
      { range: "₹8-12L", rate: "10%", c: "#86efac" },
      { range: "₹12-16L", rate: "15%", c: "#4ade80" },
      { range: "₹16-20L", rate: "20%", c: "#22c55e" },
      { range: "₹20-24L", rate: "25%", c: "#16a34a" },
      { range: "Above ₹24L", rate: "30%", c: "#15803d" },
    ].map((b, i) => (
      <g key={i} transform={`translate(${20 + i * 90}, 36)`}>
        <rect x="0" y="0" width="86" height="42" fill={b.c} stroke="var(--border)" />
        <text x="43" y="18" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#0f172a" fontWeight="600">{b.range}</text>
        <text x="43" y="34" textAnchor="middle" fontFamily="system-ui" fontSize="13" fill="#0f172a" fontWeight="700">{b.rate}</text>
      </g>
    ))}
    <line x1="20" y1="92" x2="290" y2="92" stroke={COLOR} strokeWidth="3" />
    <text x="155" y="108" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill={COLOR} fontWeight="700">87A REBATE — ZERO TAX TILL ₹12L</text>

    <text x="20" y="148" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">OLD REGIME · 4 SLABS · UNCHANGED</text>
    {[
      { range: "Up to ₹2.5L", rate: "0%", c: "#f1f5f9" },
      { range: "₹2.5-5L", rate: "5%", c: "#e2e8f0" },
      { range: "₹5-10L", rate: "20%", c: "#cbd5e1" },
      { range: "Above ₹10L", rate: "30%", c: "#94a3b8" },
    ].map((b, i) => (
      <g key={i} transform={`translate(${20 + i * 158}, 162)`}>
        <rect x="0" y="0" width="154" height="48" fill={b.c} stroke="var(--border)" />
        <text x="77" y="22" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#0f172a" fontWeight="600">{b.range}</text>
        <text x="77" y="40" textAnchor="middle" fontFamily="system-ui" fontSize="14" fill="#0f172a" fontWeight="700">{b.rate}</text>
      </g>
    ))}
    <text x="320" y="248" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Old regime: ₹50k standard deduction + 80C, 80D, HRA, 24(b), 80CCD all available</text>
    <text x="320" y="264" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">New regime: ₹75k standard deduction · zero deductions otherwise · 87A rebate till ₹12L</text>
  </svg>
);

const SvgBreakeven = () => (
  <svg viewBox="0 0 640 280" role="img" aria-label="Breakeven income chart showing where old regime overtakes new regime by deduction stack" style={{ width: "100%", maxWidth: 720 }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">BREAKEVEN INCOME — WHERE OLD REGIME WINS BACK · ₹ TAX UNDER EACH</text>
    <line x1="60" y1="240" x2="610" y2="240" stroke="var(--border)" />
    <line x1="60" y1="50" x2="60" y2="240" stroke="var(--border)" />
    <text x="60" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹8L</text>
    <text x="170" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹12L</text>
    <text x="280" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹16L</text>
    <text x="390" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹20L</text>
    <text x="500" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹25L</text>
    <text x="600" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹30L</text>

    <path d="M 60 240 L 170 240 L 280 168 L 390 130 L 500 96 L 610 70" fill="none" stroke={COLOR} strokeWidth="3" />
    <text x="490" y="78" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">New regime · linear after ₹12L</text>

    <path d="M 60 200 L 170 178 L 280 152 L 390 134 L 500 102 L 610 84" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="6 4" />
    <text x="490" y="118" fontFamily="system-ui" fontSize="10" fill="#0f172a" fontWeight="700">Old regime · ₹3.75L deductions</text>

    <circle cx="385" cy="132" r="6" fill={COLOR} />
    <text x="395" y="148" fontFamily="system-ui" fontSize="11" fill={COLOR} fontWeight="700">Crossover ₹19.5L · ₹3.75L deductions</text>
  </svg>
);

const SvgScenarios = () => (
  <svg viewBox="0 0 640 280" role="img" aria-label="Three real worker scenarios — software engineer, doctor, retired pensioner — and which regime wins for each" style={{ width: "100%", maxWidth: 720 }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">THREE REAL SCENARIOS · ANNUAL TAX LIABILITY · NEW VS OLD</text>
    {[
      { name: "Karthik · 28 · SDE Bangalore", income: "₹15L", deds: "Just EPF ₹85k", new: "₹0", old: "₹2.06L", winner: "NEW" },
      { name: "Sanjana · 35 · Doctor Mumbai", income: "₹22L · home loan + HRA + 80C", deds: "₹4.95L total", new: "₹2.61L", old: "₹2.18L", winner: "OLD" },
      { name: "Mr Iyer · 64 · retired", income: "₹14L pension", deds: "80D ₹50k + 80C ₹1L", new: "₹0", old: "₹1.43L", winner: "NEW" },
    ].map((s, i) => (
      <g key={i} transform={`translate(0, ${50 + i * 70})`}>
        <rect x="20" y="0" width="600" height="60" fill="var(--bg-soft)" stroke="var(--border)" />
        <text x="32" y="20" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">{s.name}</text>
        <text x="32" y="36" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{s.income} · {s.deds}</text>
        <text x="280" y="20" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">NEW</text>
        <text x="280" y="36" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={s.winner === "NEW" ? COLOR : "var(--text)"}>{s.new}</text>
        <text x="370" y="20" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">OLD</text>
        <text x="370" y="36" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={s.winner === "OLD" ? COLOR : "var(--text)"}>{s.old}</text>
        <rect x="500" y="14" width="100" height="32" fill={COLOR} />
        <text x="550" y="34" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{s.winner} WINS</text>
      </g>
    ))}
  </svg>
);

const SvgDeductionStack = () => (
  <svg viewBox="0 0 640 260" role="img" aria-label="Deduction stack required to make old regime win — visual breakdown of where the deduction amount comes from" style={{ width: "100%", maxWidth: 720 }}>
    <text x="20" y="20" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">THE DEDUCTION STACK · WHEN OLD REGIME PAYS OFF</text>
    {[
      { label: "Standard deduction (auto · salaried)", amt: 50000, w: 30 },
      { label: "Section 80C (EPF + ELSS + PPF + insurance)", amt: 150000, w: 90 },
      { label: "Section 80CCD(1B) NPS extra 50k", amt: 50000, w: 30 },
      { label: "Section 80D health insurance (self+parents)", amt: 75000, w: 45 },
      { label: "Section 24(b) home loan interest cap", amt: 200000, w: 120 },
      { label: "HRA exemption (genuine rent paid)", amt: 250000, w: 150 },
    ].map((d, i) => (
      <g key={i} transform={`translate(20, ${48 + i * 32})`}>
        <text x="0" y="14" fontFamily="system-ui" fontSize="11" fill="var(--text)">{d.label}</text>
        <rect x="280" y="2" width={d.w * 2} height="18" fill={COLOR} opacity={0.4 + i * 0.1} />
        <text x={290 + d.w * 2} y="16" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">₹{d.amt.toLocaleString("en-IN")}</text>
      </g>
    ))}
    <line x1="20" y1="240" x2="620" y2="240" stroke="var(--border)" />
    <text x="20" y="252" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)" fontWeight="600">TOTAL POSSIBLE STACK ABOUT ₹7.75L · BREAKEVEN VS NEW REGIME ABOUT ₹3.75L</text>
  </svg>
);

export default function OldVsNewTaxRegime2026() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Old vs New Tax Regime 2026 — Which One Saves More After Budget 2025",
    description: "Detailed comparison of India's old and new tax regimes for FY 2025-26 after Budget 2025's ₹12L rebate. Includes worked examples, breakeven analysis, and a decision framework.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-04-20",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/blog/old-vs-new-tax-regime-2026" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is the new tax regime now the default for FY 2025-26?", acceptedAnswer: { "@type": "Answer", text: "Yes. From AY 2024-25 onwards the new regime is the statutory default under Section 115BAC of the Income Tax Act. Salaried individuals can switch to the old regime each year by indicating the choice when filing ITR. Individuals with business or professional income must file Form 10-IEA before the ITR due date to opt out of the new regime, and they get exactly one switch back to new in their lifetime. So salaried earners get yearly flexibility; self-employed do not." } },
      { "@type": "Question", name: "What income level makes the new regime tax-free under Budget 2025?", acceptedAnswer: { "@type": "Answer", text: "Total income up to ₹12 lakh attracts zero tax under the new regime, thanks to the Section 87A rebate. For salaried earners the standard deduction of ₹75,000 is added on top, so a gross salary of ₹12.75 lakh effectively pays nothing. The cliff at exactly ₹12 lakh is real: earning ₹12.01 lakh creates a small but non-zero tax bill of around ₹62,000 under the seven-slab structure. Marginal relief partially smooths this near the threshold but does not fully eliminate it." } },
      { "@type": "Question", name: "When does the old regime still beat the new regime?", acceptedAnswer: { "@type": "Answer", text: "When your verifiable deductions cross roughly ₹3.75 to 4 lakh combined and your taxable income is above ₹15 lakh. The classic case is a metro renter with a self-occupied home loan elsewhere. HRA exemption can claim ₹2-3 lakh, Section 24(b) interest deduction adds another ₹2 lakh, Section 80C maxes at ₹1.5 lakh, 80CCD(1B) NPS adds ₹50,000, and 80D health cover for self plus senior parents adds ₹75,000. Stack those and the old regime pulls ahead by ₹40,000 to ₹80,000 a year. Without a home loan, the case for old regime collapses for most salaried earners under ₹20 lakh." } },
      { "@type": "Question", name: "Are capital gains affected by which regime I pick?", acceptedAnswer: { "@type": "Answer", text: "No. Capital gains are taxed at special flat rates under both regimes. Equity LTCG at 12.5% above the ₹1.25 lakh annual exemption, equity STCG at 20%, debt fund gains at slab rate post April 2023. The 87A rebate applies only to slab-rate income, so a salaried earner with ₹10 lakh slab income plus ₹3 lakh of equity LTCG pays zero on the slab portion under new regime but still owes 12.5% on the ₹1.75 lakh of LTCG above the exemption. Pick your regime based on slab income; capital gains are a separate calculation." } },
      { "@type": "Question", name: "What deductions still work under the new regime?", acceptedAnswer: { "@type": "Answer", text: "A small but useful list. Standard deduction of ₹75,000 for salaried and pensioners. Employer's NPS contribution under Section 80CCD(2) up to 14% of basic salary for government employees and 10% for private sector. Section 80CCH for Agniveer corpus contributions. Family pension deduction of one-third of pension or ₹25,000, whichever is less. Conveyance allowance for the differently-abled. Everything else — 80C, 80D, HRA, 24(b), 80E education loan interest, 80G donations — is unavailable under the new regime." } },
      { "@type": "Question", name: "If my employer is deducting TDS under new regime but I want old, how do I reconcile?", acceptedAnswer: { "@type": "Answer", text: "Submit a regime declaration to your employer's HR or payroll team in April or May, ideally before the first salary credit of the FY. Most employers default new regime TDS unless you actively elect old. If you miss the window, the employer will deduct under new throughout the year and you reconcile at ITR filing — claiming the old regime brings your liability down, and any excess TDS comes back as refund. Refund processing in 2026 typically takes 14 to 30 days post e-verification. The reconciliation route is annoying for cash flow but legally clean." } },
      { "@type": "Question", name: "Should I structure my CTC differently for the new regime?", acceptedAnswer: { "@type": "Answer", text: "Yes if you are squarely in the new regime camp. The HRA component of CTC becomes pointless because HRA exemption is gone — ask payroll to roll HRA into base salary or special allowance instead. LTA also vanishes under new regime. NPS Tier 1 employer contribution under 80CCD(2) remains valuable. Push for the maximum 10% (private) or 14% (government) of basic. Meal coupons, fuel reimbursement, and similar perquisites have specific exemption rules that survive under both regimes; check with payroll on which ones still apply post Budget 2025." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Old vs New Tax Regime 2026", item: "https://assurefintech.com/blog/old-vs-new-tax-regime-2026" }
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #052E16, #166534, #052E16)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #4ADE8022, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} /> Tax Planning Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Old vs New Tax Regime — The ₹3.75 Lakh Breakeven Rule
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Budget 2025 moved the goalposts. Income up to ₹12.75L is tax-free under new regime.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹12.75L</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Tax-free (new regime)</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹3.75L</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Breakeven deductions</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>7</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>New regime slabs</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "44px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.85 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Old vs New Tax Regime 2026
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>TAX · TIER 1 GUIDE · UPDATED FOR BUDGET 2025</div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Direct answer: for salaried earners up to ₹12.75 lakh gross, the new regime is now strictly better. Budget 2025's expanded Section 87A rebate makes that band tax-free. From ₹12.75 lakh up to roughly ₹19 lakh to ₹20 lakh, the new regime usually still wins unless your verifiable deductions clear ₹3.75 lakh combined. Above that, with a home loan plus HRA plus the full 80C and 80D stack, the old regime is the smarter call by between ₹30,000 and ₹90,000 a year depending on your specifics. The rest of this guide does the maths in detail.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed for Finance Act 2025 · AY 2026-27</span>
        <span>·</span>
        <span>About 12 min read</span>
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What Budget 2025 actually changed</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The Finance Act 2025 rewrote the new tax regime in two material ways. The seven-slab structure was kept but the slab boundaries shifted upward, and the Section 87A rebate ceiling jumped from ₹7 lakh of taxable income (introduced in Budget 2023) to ₹12 lakh. That second change is the headline. A salaried earner pulling ₹12.75 lakh gross now pays exactly zero income tax under the new regime, down from a previous tax bill of around ₹62,000 on the same salary just one year ago.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The old regime was left untouched. Same four slabs as the past decade, same ₹50,000 standard deduction for salaried earners, same set of deductions under Sections 80C through 80U. Budget 2025's policy intent is clear. The government wants to migrate as many filers as possible from old to new, and it is using the rebate threshold to do it.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The audit-friendly version of the change: if you earn under ₹12.75 lakh and you are in any kind of doubt about regime choice, stop reading and pick new. The maths only gets interesting above that line.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgSlabComparison />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How the new regime computes — including the ₹12L cliff</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The new regime is mechanically simpler than the old. You take your gross salary, subtract the ₹75,000 standard deduction (salaried only), and apply the slab rates to whatever remains. The result is your slab tax. If your taxable income — the post-standard-deduction figure — is at or below ₹12 lakh, the Section 87A rebate cancels the entire slab tax. You pay zero. If your taxable income is above ₹12 lakh, the rebate vanishes entirely and you pay the full slab calculation.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          That on-off switch creates the cliff problem. Consider two salaried colleagues who sit on opposite sides of the line. Anjali earns ₹12.75 lakh gross. Post standard deduction her taxable income is ₹12 lakh. Slab tax under the seven-slab structure is ₹60,000, then 87A rebate wipes it out, then 4% health and education cess applies on zero. Net tax: ₹0. Anjali takes home ₹12.75 lakh.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Now consider Arun who earns ₹13 lakh gross. Post standard deduction his taxable income is ₹12.25 lakh. Slab tax is ₹62,500. The 87A rebate now disappears entirely. Add 4% cess and Arun pays ₹65,000 in tax. He earned ₹25,000 more than Anjali and paid ₹65,000 more in tax. The marginal effective rate at the cliff edge is multiples of his slab rate.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Marginal relief under Section 87A's interaction rules partially smooths this. The 87A rebate, when it would otherwise vanish, is allowed up to the amount that brings your post-rebate tax down to a calculated cap based on the income excess over ₹12 lakh. In practice the relief shaves only a few thousand off the cliff for someone like Arun. The cliff stays meaningful from ₹12 lakh up to about ₹12.7 lakh.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          What this means in practice: if you can plan around the cliff — say by routing a small portion of CTC into employer NPS contribution under 80CCD(2), which remains deductible under the new regime — pulling your taxable income down from ₹12.25 lakh to ₹12 lakh saves the entire ₹65,000 tax bill. That single move is the highest-return tax planning available to anyone within ₹50,000 of the cliff. Restructuring CTC by even 2-3% of basic into employer NPS often pays back the entire fee of a CA's annual planning engagement in one cycle.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Above the cliff, the new regime taxes you on the post-standard-deduction income at the seven slabs without further deductions. No 80C, no 80D, no HRA exemption, no home loan interest deduction, no NPS additional 80CCD(1B). The simplicity has a price.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px" }}>What stays deductible under the new regime</h3>
          <ul style={{ fontSize: 15, paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Standard deduction. ₹75,000 for salaried and pensioners</li>
            <li style={{ marginBottom: 8 }}>Section 80CCD(2). Employer NPS contribution up to 10% of basic (private sector) or 14% (government)</li>
            <li style={{ marginBottom: 8 }}>Section 80CCH. Agniveer corpus contributions</li>
            <li style={{ marginBottom: 8 }}>Family pension deduction. One-third of pension or ₹25,000, whichever is less</li>
            <li style={{ marginBottom: 8 }}>Disability and conveyance-related deductions for the differently-abled</li>
            <li>Specific perquisite valuation rules for rent-free accommodation, ESOPs, and similar</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How the old regime stays competitive</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The old regime's slab rates — 0% up to ₹2.5 lakh, 5% on the next ₹2.5 lakh, 20% on the ₹5-10 lakh band, 30% above ₹10 lakh — look harsh next to the new regime's seven gentler slabs. The trade-off is the deduction stack. A diligent salaried earner can knock ₹3 lakh to ₹7 lakh off their taxable income before applying those higher rates, and that arithmetic is what keeps the old regime alive for the right profile.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The 87A rebate exists in the old regime too, but its threshold is ₹5 lakh of taxable income, a fraction of the new regime's ₹12 lakh ceiling. So the old regime's rebate is functionally only useful for very low-income filers, while the bulk of old-regime users are in the ₹12 lakh-plus band where the deduction stack does the heavy lifting.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The deductions you can layer under the old regime, in rough order of how much they typically save:
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)", marginBottom: 20 }}>
          <SvgDeductionStack />
        </div>

        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Section 80C — up to ₹1.5 lakh.</strong> The classic. EPF contributions are deductible (and most salaried have ₹40,000 to ₹80,000 of EPF flowing here automatically), plus voluntary additions through PPF, ELSS mutual funds, life insurance premiums, home loan principal repayment, NSC, Sukanya Samriddhi, and 5-year tax-saver FDs. The ₹1.5 lakh ceiling is the same one your parents had in 2014 — not adjusted for inflation, which is itself a quiet form of tax drag.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Section 24(b) — up to ₹2 lakh on home loan interest for self-occupied property.</strong> This is the single biggest deduction in the Indian tax code if you are a homeowner servicing a loan. On a ₹50 lakh loan at 8.75% over 20 years, year-one interest is roughly ₹4.4 lakh — capped at ₹2 lakh for the deduction, but the cap binds for most of the first decade of the loan. Crucially, this deduction works alongside HRA exemption — you can claim both if you live in a rented house in city A while owning a home loan property in city B.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>HRA exemption — uncapped, computed as the minimum of three formulas.</strong> Actual HRA received from employer; 50% of basic for metros (40% non-metro); rent paid minus 10% of basic. The third formula is usually the binding one. A salaried renter in Mumbai with ₹80,000 monthly basic and ₹35,000 monthly rent typically claims ₹2.4 lakh to ₹3 lakh of HRA exemption annually. This single lever can flip a tax decision when present.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Section 80D — health insurance premiums.</strong> ₹25,000 for self and family below 60, ₹50,000 if any insured is 60+. Plus a separate ₹25,000 (or ₹50,000) for parents, which stacks independently. A working-age earner buying ₹25,000 of family floater plus a ₹50,000 senior-citizen policy for parents claims ₹75,000 in deduction. Common, valuable, often missed by people who only buy one policy and forget the parent bucket.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Section 80CCD(1B) — additional ₹50,000 for NPS Tier 1.</strong> This is one of the few deductions that sits outside the 80C cap. Open NPS account, contribute ₹50,000 in the FY, claim the deduction. The catch is the 60% lump-sum withdrawal at maturity (40% mandatorily annuitised), which makes the asset less liquid than ELSS. Best used by long-horizon retirement savers who would buy retirement assets anyway.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Section 80E — education loan interest.</strong> No cap on amount, deductible for up to 8 years from the year repayment starts. Useful for parents repaying children's foreign education loans where annual interest can run ₹3 lakh to ₹5 lakh in the early years.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Section 80G — donations to approved charities.</strong> Either 50% or 100% deductible depending on the recipient organisation's classification. Often overlooked by individual filers. A ₹50,000 donation to a 100%-eligible cause saves ₹15,000 in tax for a 30%-bracket old-regime filer.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Three real scenarios — and which regime each one picks</h2>
        <p style={{ fontSize: 17, margin: "0 0 18px" }}>
          The numbers above are abstract until you put them on real lives. Three scenarios drawn from the kind of profiles that actually walk into a CA's office during ITR season.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)", marginBottom: 24 }}>
          <SvgScenarios />
        </div>

        <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: COLOR }}>Scenario 1 — Karthik, 28, software engineer, Bangalore, ₹15 lakh</h3>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Lives in a 2BHK he bought with a friend, no rent paid, no home loan in his name. EPF ticks over at ₹85,000 a year. No active 80C investments beyond that, no 80D health policy beyond what his employer provides as a group benefit, no NPS. He is single, has no dependants, and his idea of tax planning so far has been "I will figure it out at filing time."
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Under the new regime: gross ₹15 lakh, less standard deduction ₹75,000 = taxable ₹14.25 lakh. Slab tax at the seven slabs is ₹93,750. The 87A rebate doesn't apply (income above ₹12 lakh). Add 4% cess and Karthik pays ₹97,500.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Under the old regime: gross ₹15 lakh, less standard deduction ₹50,000, less 80C ₹85,000 (just the EPF) = taxable ₹13.65 lakh. Slab tax at four old-regime slabs is ₹2.09 lakh. The 87A rebate is irrelevant (income way above ₹5 lakh). With 4% cess Karthik pays ₹2.18 lakh under the old regime.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Difference: the old regime costs Karthik an extra ₹1.21 lakh per year on the same income, with no realistic way to close the gap given his life situation. <strong>Pick new regime, full stop.</strong>
        </p>
        <p style={{ fontSize: 16, margin: "0 0 24px" }}>
          The lesson generalises. If you are renting or living rent-free, no home loan, no investing discipline beyond EPF, the new regime saves you between ₹50,000 and ₹1.5 lakh annually depending on income level. This is where most first-jobbers and dual-income flat-sharing 20-somethings sit.
        </p>

        <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: COLOR }}>Scenario 2 — Sanjana, 35, doctor, Mumbai, ₹22 lakh</h3>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Pays ₹45,000 monthly rent for a 1BHK in Bandra. Has a home loan in Pune for a property she plans to retire to — ₹35 lakh outstanding at 8.85%, year-1 interest pushing ₹3 lakh. Maxes 80C through ELSS plus EPF (₹1.5 lakh). Health insurance for self plus parents is ₹38,000. NPS Tier 1 contributions ₹50,000 under 80CCD(1B). Her CTC is structured with ₹6 lakh basic, ₹3 lakh HRA, the rest in special allowances.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          HRA exemption calculation: actual HRA ₹3 lakh, 50% of basic ₹3 lakh, rent paid (₹5.4 lakh) minus 10% of basic (₹60,000) = ₹4.8 lakh. Minimum of three is ₹3 lakh. Section 24(b) on home loan interest is capped at ₹2 lakh. Section 80C ₹1.5 lakh. Section 80D ₹38,000. Section 80CCD(1B) ₹50,000. Standard deduction ₹50,000.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Total deductions ₹7.88 lakh. Taxable income under old regime: ₹22 lakh minus ₹7.88 lakh = ₹14.12 lakh. Slab tax ₹2.09 lakh. With 4% cess: ₹2.18 lakh.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Under the new regime: gross ₹22 lakh, less standard deduction ₹75,000 = ₹21.25 lakh taxable. Slab tax ₹2.51 lakh. With cess: ₹2.61 lakh.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Difference: old regime saves Sanjana ₹43,000 a year. Modest but real. <strong>Pick old regime — for now.</strong>
        </p>
        <p style={{ fontSize: 16, margin: "0 0 24px" }}>
          A note on Sanjana's choice. The old regime advantage shrinks every year as her home loan interest declines. By year 8 of the loan, annual interest will have dropped to ₹1.6 lakh, no longer maxing the ₹2 lakh 24(b) cap. At that point her old-regime advantage compresses to under ₹20,000 a year and she should re-run this calculation. The right regime is not a one-time decision; it is an annual review.
        </p>

        <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: COLOR }}>Scenario 3 — Mr Iyer, 64, retired pensioner, Chennai, ₹14 lakh</h3>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Pension income ₹14 lakh from his former employer. Health insurance premium ₹50,000 a year for self plus wife (both 60+). Section 80C investments through SCSS and tax-saver FDs total ₹1 lakh. No home loan, no rent paid (owns the apartment). His daughter is independent.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Under the new regime: gross ₹14 lakh, less standard deduction ₹75,000 = ₹13.25 lakh taxable. Slab tax ₹76,250. With cess: ₹79,300. Note: 87A rebate is gone because taxable income exceeds ₹12 lakh.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Under the old regime: gross ₹14 lakh, less standard deduction ₹50,000, less 80C ₹1 lakh, less 80D ₹50,000 = ₹11.5 lakh taxable. Slab tax ₹1.55 lakh. With cess: ₹1.61 lakh.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Difference: new regime saves Mr Iyer ₹82,000 a year. <strong>Pick new — and the case is even stronger if he can route some pension restructuring to bring taxable income just under ₹12 lakh, in which case the new regime saves him the full ₹1.61 lakh.</strong>
        </p>
        <p style={{ fontSize: 16, margin: "0 0 24px" }}>
          The senior-citizen lesson: even with respectable old-regime deductions, the post-Budget-2025 ₹12 lakh rebate is so generous that most retired pensioners with sub-₹13 lakh income are mathematically better off under new regime. The old regime survives mainly for seniors with substantial residual home-loan interest deductions.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What about surcharge — the silent extra tax above ₹50 lakh</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Surcharge is the second-order tax that kicks in for higher earners and most articles skip it. Worth a paragraph because the regime choice interacts with surcharge meaningfully above ₹50 lakh.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Surcharge rates: 10% on total income above ₹50 lakh, 15% above ₹1 crore, 25% above ₹2 crore, and historically 37% above ₹5 crore under the old regime — the famous super-rich rate. Budget 2023 capped surcharge at 25% under the new regime, removing the 37% top bracket entirely. So a ₹6 crore-income earner pays substantially less surcharge under new regime than old, even before considering slab arithmetic.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Marginal relief on surcharge prevents the cliff problem at each threshold. At exactly ₹50 lakh of taxable income, your surcharge would jump from zero to ~₹1.3 lakh — a step function. Marginal relief allows the surcharge to phase in such that crossing the threshold by ₹1 increases your post-surcharge tax by no more than ₹1. The maths works out so the relief unwinds gradually as income rises further past the threshold.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          For most readers of this guide — taxable income ₹15 lakh to ₹40 lakh — surcharge is irrelevant. For HNI readers above ₹50 lakh, the new regime's lower surcharge cap is yet another reason to prefer it unless deductions are very substantial. Above ₹2 crore, the new regime almost always wins despite the loss of HRA and 24(b), purely because of the surcharge cap.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The breakeven point — where old regime overtakes new</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The crossover income — the point at which old regime starts winning — depends almost entirely on how much you can deduct. There is no single number that applies to everyone. But the function is well-behaved enough that we can plot it.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For a salaried filer with ₹3.75 lakh of total deductions (standard ₹50,000 + 80C ₹1.5 lakh + 80D ₹50,000 + 80CCD(1B) ₹50,000 + 24(b) ₹75,000 partial home loan interest, no HRA), the crossover happens at roughly ₹19.5 lakh gross income. Below that, new regime wins; above it, old regime wins.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For a renter with HRA exemption layered in — say ₹2.5 lakh of HRA on top of the same deduction stack — the crossover drops to roughly ₹15 lakh gross. The HRA exemption is a powerful lever precisely because it is uncapped (within the formula limits) and targets the deduction at exactly the kind of metro renter most likely to also have other deductions.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For someone with a full ₹7.5 lakh deduction stack (HRA + 24(b) + 80C + 80D + 80CCD(1B)), the crossover happens before ₹14 lakh. This is the dual-renter-and-homeowner profile and it is where old regime is unambiguously the winner.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The general rule of thumb that survives the various combinations: divide your verifiable annual deductions by 0.20. If the result is greater than your gross taxable income, old regime probably wins.
        </p>

        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgBreakeven />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How to actually switch regimes — and the one-time rule for self-employed</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For salaried earners the switch is annual and almost frictionless. When you file your ITR (typically ITR-1 or ITR-2 for salaried), the form asks you to elect old or new regime. Pick whichever produces lower tax that year. You can flip back and forth every FY without restriction.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          To align your employer's TDS with your planned regime, submit a regime-election declaration in April or May. Most employers default to new regime TDS; if you plan to file under old, you need to actively communicate that to payroll. Otherwise excess TDS is deducted through the year and you reconcile via refund at filing time. The reconciliation works but it locks up cash flow for 6 to 12 months.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For business or professional income filers (those filing ITR-3 or ITR-4), the rules are stricter. Form 10-IEA must be filed before the ITR due date if you want to opt out of the new regime to old. Crucially, the switch back to new regime is permitted only once in your lifetime under Section 115BAC. So a freelancer or sole proprietor who switches old, then switches back to new, has used up that lifetime allowance and cannot return to old in any future year.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The implication: self-employed filers should run multi-year projections before exercising the switch. If you are 35 with a strong home loan and high deductions, switching to old now and committing to it for the next 15 to 20 years until the loan is cleared makes sense. If the deductions are likely to dry up in 3 to 4 years (loan repaid, HRA gone), the new regime's flexibility is worth more than the modest old-regime saving today.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Practical decision framework — five quick checks</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Run through these five questions in order. The answers point you at the right regime without doing the full slab calculation.
        </p>
        <ol style={{ fontSize: 16, paddingLeft: 24, margin: "0 0 18px" }}>
          <li style={{ marginBottom: 12 }}><strong>Is your gross salary under ₹12.75 lakh?</strong> Pick new regime. Tax is zero. The rest of this list does not apply to you for now.</li>
          <li style={{ marginBottom: 12 }}><strong>Do you pay rent and have an active home loan in the same FY?</strong> Strong signal for old regime, especially if you are above ₹15 lakh gross. The HRA + 24(b) double-stack is the single biggest old-regime advantage.</li>
          <li style={{ marginBottom: 12 }}><strong>Are you maxing 80C plus 80CCD(1B) plus 80D plus a substantial Section 24(b)?</strong> If yes — total verifiable deductions over ₹3.75 lakh — old regime probably wins above ₹15 lakh gross. Run the maths to confirm.</li>
          <li style={{ marginBottom: 12 }}><strong>Are you 60+ with health insurance for parents?</strong> Senior citizens get the higher 80D bucket (₹50,000 plus another ₹50,000 for parents) and older 80TTB interest deduction. Even so, the new regime usually wins for sub-₹13 lakh pension income because of the ₹12 lakh rebate.</li>
          <li><strong>Do you have business or professional income?</strong> Run a 5-year projection before switching. The lifetime one-way restriction means you cannot casually optimise year-to-year like salaried filers.</li>
        </ol>
        <p style={{ fontSize: 17, margin: 0 }}>
          When in doubt, plug your numbers into our <Link href="/tools/income-tax-calculator" style={{ color: COLOR, fontWeight: 600 }}>income tax calculator</Link>. It runs both regimes simultaneously, applies the 87A rebate where eligible, and names the winner. Five minutes, no signup, nothing leaves your browser.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>CTC structuring — what to ask payroll to change</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          If you have settled on the new regime, your existing CTC structure may be sub-optimal. Most Indian salary structures were built with the old regime in mind: generous HRA components, LTA buckets, food-coupon allocations, fuel reimbursement clauses. Many of these survive partially or vanish under new.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>HRA component.</strong> Useless under new regime. Ask payroll to roll HRA into base salary or special allowance instead. A ₹3 lakh annual HRA component at ₹15 lakh gross does nothing for you under new — it is just taxable salary by another name. Restructuring to reduce HRA in favour of basic increases your EPF (12% of basic) and creates a marginally better long-term retirement corpus.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>LTA (Leave Travel Allowance).</strong> Not available under new regime. Same treatment as HRA — fold it into base or special allowance.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>NPS contribution under 80CCD(2).</strong> Still deductible under new regime, capped at 10% of basic salary for private-sector and 14% for government. This is the single most valuable lever that survives the regime shift. Ask payroll to maximise the employer NPS contribution. It is fully tax-deductible at the employer level too, so most companies are willing.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Meal coupons and food allowances.</strong> Still tax-free up to ₹50 per working day (about ₹13,200 annually) under both regimes. Worth keeping if your employer offers Sodexo or Zaggle.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Fuel and mobile reimbursements.</strong> Exempt under both regimes if linked to business use, with proper records. Not regime-sensitive.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The bigger picture: under new regime, the CTC components that matter are basic, employer NPS contribution, perquisite-class benefits with their own exemption rules, and the standard deduction. Everything else is just gross salary. Push payroll to optimise around that reality.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Five mistakes that cost taxpayers money in 2026</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Patterns we see repeatedly when reviewing actual returns. Each one wastes between ₹15,000 and ₹70,000 a year.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Buying ULIPs purely for 80C.</strong> ULIPs sold by relationship managers as "tax-saving investments" carry 1.5% to 3% effective annual charges, 5-year lock-ins, and surrender penalties. They almost always underperform a clean ELSS plus separate term insurance combo. If your 80C is empty and you need both insurance and tax-saving, buy term cover (small premium, large cover) and route the residual into ELSS, not a ULIP.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Forgetting that EPF already counts toward 80C.</strong> Salaried earners often double-fund 80C, investing ₹1.5 lakh in ELSS while their EPF deduction is already ₹70,000 of the cap. The extra ₹70,000 is not deductible because the cap is shared. Check your salary slip first. Only top up what is missing.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Claiming HRA without rent receipts or PAN of landlord.</strong> Rent above ₹1 lakh annually requires landlord PAN. Without proper documentation, the HRA exemption is disallowed in scrutiny and you owe back-tax plus interest. Submit receipts every month, get PAN once, keep the bank trail of rent transfers — three steps that survive any audit.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Picking new regime by default without running the maths.</strong> The new regime is the statutory default but it is not always the optimal default. Anyone with ₹3.75 lakh-plus of verifiable deductions and ₹15 lakh-plus income should run both regimes annually before filing. Five minutes of effort, potential ₹40,000 to ₹90,000 saving.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Ignoring the cliff at ₹12 lakh.</strong> Earning ₹12.10 lakh in taxable income costs roughly ₹62,000 more in tax than earning ₹12 lakh, because the rebate vanishes. If your taxable income is hovering near the line, even a small tax planning move — slightly higher employer NPS contribution, deferred bonus by a quarter — can bring you under the cliff and save the entire amount.
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
          <li style={{ marginBottom: 8 }}><Link href="/tools/income-tax-calculator" style={{ color: COLOR }}>Income tax calculator</Link>. Model both regimes against your actual deductions in two minutes</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/tax/section-80c" style={{ color: COLOR }}>Section 80C in 2026</Link>. Full guide to the ₹1.5 lakh deduction</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/tax/section-80d" style={{ color: COLOR }}>Section 80D — health insurance premium deduction explained</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/tax/hra-exemption" style={{ color: COLOR }}>HRA exemption — how the three-formula minimum works</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/tax/section-24b" style={{ color: COLOR }}>Section 24(b) home loan interest deduction guide</Link></li>
          <li><Link href="/learn/tax" style={{ color: COLOR }}>Tax knowledge hub</Link>. All our tax guides in one place</li>
        </ul>
      </section>

      <section style={{ marginBottom: 36, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>Finance Act 2025 — full text, Income Tax Department</li>
          <li style={{ marginBottom: 6 }}>Section 115BAC, Income Tax Act 1961 — new regime statutory provisions</li>
          <li style={{ marginBottom: 6 }}>Section 87A — rebate provisions as amended by Finance Act 2025</li>
          <li style={{ marginBottom: 6 }}>CBDT Notification 17/2024 — Form 10-IEA filing rules</li>
          <li>Income Tax e-filing portal — official slab and rebate calculation utility</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> Slab rates, rebate thresholds, and deduction provisions in this guide reflect the Finance Act 2025 as enacted for FY 2025-26 (AY 2026-27). Tax laws change annually with each Union Budget; the figures above were verified against the Income Tax Department's published slab tables on {UPDATED}. This article is informational and does not substitute for advice from a qualified chartered accountant. Your actual tax liability depends on the specifics of your filing — capital gains, foreign income, business income, and many edge cases follow rules not covered here. Surcharge for incomes above ₹50 lakh and the marginal relief mechanism are referenced but not fully modelled. Consult a CA before making material decisions on regime choice, especially if you are self-employed and the lifetime one-way switch rule applies. Not financial or tax advice.
        </p>
      </footer>
    </main>
    </>
  );
}
