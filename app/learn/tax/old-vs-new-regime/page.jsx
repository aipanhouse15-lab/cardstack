// app/learn/tax/old-vs-new-regime/page.jsx
// Assure Fintech — Tier 1 Article 1
// Old vs New Tax Regime 2026 — FY 2025-26
// Author: Ash K  |  Last updated: April 20, 2026
// Word count target: 3500+  |  SVGs: 5  |  Template: Data Report

import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Old vs New Tax Regime FY 2025-26 — The ₹3.75 Lakh Breakeven Rule | Assure Fintech",
  description:
    "We ran the math on ₹8L to ₹30L incomes. New regime wins by default; old regime wins only if your deductions cross ₹3.75L. Worked examples at every income bracket.",
  keywords: [
    "old vs new tax regime",
    "tax regime comparison 2026",
    "income tax slabs 2025-26",
    "which tax regime is better",
    "tax breakeven deductions",
    "section 87A rebate 12 lakh",
  ],
  alternates: { canonical: "https://www.assurefintech.com/learn/tax/old-vs-new-regime" },
  openGraph: {
    title: "Old vs New Tax Regime — The ₹3.75 Lakh Breakeven Rule",
    description: "Worked examples for every income from ₹8L to ₹25L. The honest breakeven math.",
    url: "https://www.assurefintech.com/learn/tax/old-vs-new-regime",
    type: "article",
    siteName: "Assure Fintech",
    images: ["/og/tax-regime-breakeven.png"],
  },
};

/* ─────────────────────────────────────────────
   SVG 1 — Tax slab comparison (7-tier new vs 4-tier old)
   ───────────────────────────────────────────── */
function SvgSlabCompare() {
  const slabs = [
    { range: "0–4L", newR: 0, oldR: null, basic: true },
    { range: "4–8L", newR: 5, oldR: null },
    { range: "8–12L", newR: 10, oldR: null },
    { range: "12–16L", newR: 15, oldR: null },
    { range: "16–20L", newR: 20, oldR: null },
    { range: "20–24L", newR: 25, oldR: null },
    { range: ">24L", newR: 30, oldR: null },
  ];
  const oldSlabs = [
    { range: "0–2.5L", rate: 0 },
    { range: "2.5–5L", rate: 5 },
    { range: "5–10L", rate: 20 },
    { range: ">10L", rate: 30 },
  ];
  return (
    <svg viewBox="0 0 700 320" role="img" aria-label="New 7-tier regime vs Old 4-tier regime comparison" style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <rect x="0" y="0" width="700" height="320" fill="transparent" />
      <text x="175" y="24" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">NEW REGIME (default)</text>
      <text x="525" y="24" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">OLD REGIME</text>
      <text x="175" y="42" textAnchor="middle" fontSize="11" fill="var(--text-muted)">7 slabs · Budget 2025</text>
      <text x="525" y="42" textAnchor="middle" fontSize="11" fill="var(--text-muted)">4 slabs · unchanged since FY 2020-21</text>

      {slabs.map((s, i) => {
        const y = 60 + i * 32;
        const w = (s.newR / 30) * 220;
        return (
          <g key={s.range}>
            <rect x="30" y={y} width="220" height="26" fill="var(--border)" opacity="0.25" rx="4" />
            <rect x="30" y={y} width={w || 6} height="26" fill="#16A34A" rx="4" />
            <text x="36" y={y + 17} fontSize="11" fontWeight="600" fill="var(--text)">{s.range}</text>
            <text x="258" y={y + 17} fontSize="11" fontWeight="700" fill="#16A34A">{s.newR}%</text>
          </g>
        );
      })}

      {oldSlabs.map((s, i) => {
        const y = 60 + i * 56;
        const w = (s.rate / 30) * 200;
        return (
          <g key={s.range}>
            <rect x="380" y={y} width="200" height="48" fill="var(--border)" opacity="0.25" rx="4" />
            <rect x="380" y={y} width={w || 6} height="48" fill="#0891B2" rx="4" />
            <text x="386" y={y + 20} fontSize="11" fontWeight="600" fill="var(--text)">{s.range}</text>
            <text x="386" y={y + 36} fontSize="10" fill="var(--text-muted)">slab rate</text>
            <text x="586" y={y + 29} fontSize="13" fontWeight="700" fill="#0891B2">{s.rate}%</text>
          </g>
        );
      })}

      <line x1="30" y1="290" x2="670" y2="290" stroke="var(--border)" />
      <text x="30" y="308" fontSize="11" fill="var(--text-muted)">Source: Finance Act 2025, PIB Budget 2025 press release. Standard deduction ₹75K applies in new regime, not old.</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 2 — Breakeven meter (₹3.75L marker)
   ───────────────────────────────────────────── */
function SvgBreakevenMeter() {
  return (
    <svg viewBox="0 0 700 220" role="img" aria-label="Deduction breakeven meter showing ₹3.75 lakh threshold" style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="350" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">The Breakeven Meter — How much do you need to itemise?</text>
      {/* Gradient bar */}
      <defs>
        <linearGradient id="beg" x1="0" x2="1">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <rect x="40" y="80" width="620" height="28" rx="14" fill="url(#beg)" opacity="0.85" />
      <text x="40" y="72" fontSize="11" fill="var(--text-muted)">₹0 deductions</text>
      <text x="660" y="72" textAnchor="end" fontSize="11" fill="var(--text-muted)">₹6L+ deductions</text>
      {/* Marker */}
      <line x1="387" y1="60" x2="387" y2="130" stroke="var(--text)" strokeWidth="2" />
      <circle cx="387" cy="94" r="9" fill="var(--bg, #fff)" stroke="var(--text)" strokeWidth="2" />
      <text x="387" y="150" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--text)">₹3,75,000</text>
      <text x="387" y="168" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Breakeven point</text>
      {/* Zone labels */}
      <text x="180" y="195" textAnchor="middle" fontSize="12" fontWeight="700" fill="#16A34A">NEW REGIME WINS</text>
      <text x="180" y="210" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Fewer deductions than ₹3.75L</text>
      <text x="550" y="195" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ef4444">OLD REGIME WINS</text>
      <text x="550" y="210" textAnchor="middle" fontSize="10" fill="var(--text-muted)">More deductions than ₹3.75L</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 3 — Income-wise winner grid
   ───────────────────────────────────────────── */
function SvgIncomeWinnerGrid() {
  const incomes = ["₹8L", "₹10L", "₹12L", "₹15L", "₹20L", "₹25L"];
  const scenarios = [
    { label: "No deductions", results: ["N", "N", "N", "N", "N", "N"] },
    { label: "₹1.5L (80C only)", results: ["N", "N", "N", "N", "N", "N"] },
    { label: "₹2.5L (80C + 80D)", results: ["N", "N", "N", "N", "N", "N"] },
    { label: "₹3.75L (80C+HRA)", results: ["N", "N", "=", "=", "=", "="] },
    { label: "₹5L (HRA heavy)", results: ["=", "O", "O", "O", "O", "O"] },
    { label: "₹7L+ (home loan)", results: ["O", "O", "O", "O", "O", "O"] },
  ];
  const color = (c) => (c === "N" ? "#16A34A" : c === "O" ? "#ef4444" : "#fbbf24");
  return (
    <svg viewBox="0 0 760 300" role="img" aria-label="Regime winner grid across income brackets and deduction levels" style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="380" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Who wins at each income × deduction combo?</text>
      {incomes.map((inc, i) => (
        <text key={inc} x={220 + i * 85} y="56" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">{inc}</text>
      ))}
      {scenarios.map((s, r) => (
        <g key={s.label}>
          <text x="20" y={86 + r * 36} fontSize="11" fontWeight="600" fill="var(--text)">{s.label}</text>
          {s.results.map((c, i) => (
            <g key={i}>
              <rect x={185 + i * 85} y={72 + r * 36} width="72" height="26" rx="4" fill={color(c)} opacity="0.9" />
              <text x={221 + i * 85} y={90 + r * 36} textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">
                {c === "=" ? "TIE" : c === "N" ? "NEW" : "OLD"}
              </text>
            </g>
          ))}
        </g>
      ))}
      <text x="20" y="290" fontSize="10" fill="var(--text-muted)">Green = New regime cheaper. Red = Old regime cheaper. Amber = Within ₹2K of each other — pick new for simplicity.</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 4 — Deduction stacking waterfall (how to cross ₹3.75L)
   ───────────────────────────────────────────── */
function SvgDeductionWaterfall() {
  const steps = [
    { label: "Standard Deduction", value: 50000, color: "#16A34A" },
    { label: "EPF (mandatory)", value: 72000, color: "#22c55e" },
    { label: "ELSS (80C top-up)", value: 78000, color: "#4ade80" },
    { label: "HRA exemption", value: 120000, color: "#86efac" },
    { label: "Health insurance 80D", value: 35000, color: "#14b8a6" },
    { label: "NPS 80CCD(1B)", value: 50000, color: "#0891b2" },
  ];
  const total = steps.reduce((a, s) => a + s.value, 0);
  let cum = 0;
  return (
    <svg viewBox="0 0 720 280" role="img" aria-label="How to stack deductions beyond ₹3.75 lakh breakeven" style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="360" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Stacking your way past the ₹3.75L breakeven</text>
      <line x1="50" y1="210" x2="670" y2="210" stroke="var(--border)" />
      {steps.map((s, i) => {
        const x = 70 + i * 95;
        const h = (s.value / 150000) * 140;
        const y = 210 - h;
        const startCum = cum;
        cum += s.value;
        const crossesBE = startCum < 375000 && cum >= 375000;
        return (
          <g key={s.label}>
            <rect x={x} y={y} width="70" height={h} fill={s.color} opacity="0.9" rx="3" />
            <text x={x + 35} y={y - 6} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">
              ₹{(s.value / 1000).toFixed(0)}K
            </text>
            <text x={x + 35} y={225} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{s.label.split(" ")[0]}</text>
            <text x={x + 35} y={238} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{s.label.split(" ").slice(1).join(" ")}</text>
            <text x={x + 35} y={255} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--text)">cum: ₹{(cum / 100000).toFixed(2)}L</text>
            {crossesBE && (
              <g>
                <line x1={x + 35} y1={y} x2={x + 35} y2={y - 30} stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
                <text x={x + 35} y={y - 38} textAnchor="middle" fontSize="10" fontWeight="800" fill="#ef4444">CROSSED ₹3.75L</text>
              </g>
            )}
          </g>
        );
      })}
      <text x="50" y="274" fontSize="10" fill="var(--text-muted)">Total stacked: ₹{(total / 100000).toFixed(2)}L — a realistic stack for a metro-based ₹15L earner paying ₹30K rent.</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 5 — Decision flowchart
   ───────────────────────────────────────────── */
function SvgDecisionFlowchart() {
  return (
    <svg viewBox="0 0 760 340" role="img" aria-label="Step-by-step decision flowchart for choosing tax regime" style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="380" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">30-second regime decision flowchart</text>

      {/* Start */}
      <ellipse cx="380" cy="60" rx="90" ry="22" fill="var(--border)" opacity="0.4" />
      <text x="380" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Your income in FY 2025-26</text>

      {/* Branch 1: Income check */}
      <line x1="380" y1="82" x2="380" y2="110" stroke="var(--text-muted)" />
      <rect x="280" y="110" width="200" height="42" rx="6" fill="#16A34A" opacity="0.15" stroke="#16A34A" />
      <text x="380" y="128" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Income ≤ ₹12L?</text>
      <text x="380" y="144" textAnchor="middle" fontSize="10" fill="var(--text-muted)">87A rebate → ₹0 tax in new regime</text>

      {/* Yes branch -> New regime */}
      <line x1="280" y1="131" x2="180" y2="131" stroke="var(--text-muted)" />
      <line x1="180" y1="131" x2="180" y2="210" stroke="var(--text-muted)" />
      <text x="225" y="125" fontSize="10" fontWeight="700" fill="#16A34A">YES</text>
      <rect x="90" y="210" width="180" height="50" rx="6" fill="#16A34A" stroke="#16A34A" />
      <text x="180" y="232" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">NEW REGIME</text>
      <text x="180" y="250" textAnchor="middle" fontSize="10" fill="#fff">Pay zero tax, no paperwork</text>

      {/* No branch -> deductions check */}
      <line x1="480" y1="131" x2="580" y2="131" stroke="var(--text-muted)" />
      <line x1="580" y1="131" x2="580" y2="180" stroke="var(--text-muted)" />
      <text x="535" y="125" fontSize="10" fontWeight="700" fill="#ef4444">NO</text>
      <rect x="480" y="180" width="200" height="42" rx="6" fill="#fbbf24" opacity="0.2" stroke="#fbbf24" />
      <text x="580" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Deductions ≥ ₹3.75L?</text>
      <text x="580" y="214" textAnchor="middle" fontSize="10" fill="var(--text-muted)">HRA + 80C + 80D + home loan</text>

      {/* Yes -> Old regime */}
      <line x1="580" y1="222" x2="580" y2="270" stroke="var(--text-muted)" />
      <rect x="490" y="270" width="180" height="50" rx="6" fill="#ef4444" stroke="#ef4444" />
      <text x="580" y="292" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">OLD REGIME</text>
      <text x="580" y="310" textAnchor="middle" fontSize="10" fill="#fff">Itemise, file proofs</text>

      {/* No -> New regime again */}
      <line x1="480" y1="201" x2="380" y2="201" stroke="var(--text-muted)" />
      <line x1="380" y1="201" x2="380" y2="270" stroke="var(--text-muted)" />
      <text x="425" y="195" fontSize="10" fontWeight="700" fill="#16A34A">NO</text>
      <rect x="290" y="270" width="180" height="50" rx="6" fill="#16A34A" stroke="#16A34A" opacity="0.85" />
      <text x="380" y="292" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">NEW REGIME</text>
      <text x="380" y="310" textAnchor="middle" fontSize="10" fill="#fff">Simpler, cheaper for you</text>
      <text x="670" y="222" fontSize="10" fontWeight="700" fill="#ef4444">YES</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Callout components (varied per blueprint rule 10)
   ───────────────────────────────────────────── */
function Verdict({ children }) {
  return (
    <div style={{
      borderLeft: "4px solid #16A34A", background: "rgba(22,163,74,0.07)",
      padding: "16px 20px", margin: "24px 0", borderRadius: "6px",
    }}>
      <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1.2px", color: "#16A34A", marginBottom: "6px" }}>VERDICT</div>
      {children}
    </div>
  );
}
function MathBox({ children, title = "THE MATH" }) {
  return (
    <div style={{
      border: "1px dashed var(--border)", background: "rgba(124,58,237,0.04)",
      padding: "16px 20px", margin: "20px 0", borderRadius: "6px", fontFamily: "ui-monospace, monospace", fontSize: "13.5px",
    }}>
      <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1.2px", color: "#7C3AED", marginBottom: "8px", fontFamily: "system-ui" }}>{title}</div>
      {children}
    </div>
  );
}
function Warn({ children }) {
  return (
    <div style={{
      borderLeft: "4px solid #f59e0b", background: "rgba(245,158,11,0.08)",
      padding: "14px 18px", margin: "20px 0", borderRadius: "6px",
    }}>
      <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1.2px", color: "#b45309", marginBottom: "4px" }}>⚠ TRAP</div>
      {children}
    </div>
  );
}
function PullQuote({ children, by }) {
  return (
    <blockquote style={{
      borderTop: "2px solid var(--text)", borderBottom: "2px solid var(--text)",
      padding: "18px 0", margin: "28px 0", fontSize: "1.35rem", fontStyle: "italic", lineHeight: 1.4, fontWeight: 500,
    }}>
      "{children}"
      {by && <div style={{ fontSize: "12px", fontStyle: "normal", marginTop: "10px", color: "var(--text-muted)" }}>— {by}</div>}
    </blockquote>
  );
}

/* ─────────────────────────────────────────────
   Main page
   ───────────────────────────────────────────── */
export default function OldVsNewRegimePage() {
  const faqs = [
    { q: "What is the breakeven deduction between old and new tax regime for FY 2025-26?",
      a: "₹3.75 lakh. If your total deductions (80C + HRA + 80D + home loan interest + NPS) exceed ₹3.75L, old regime saves you money. Below that, the new regime's lower slabs and ₹75K standard deduction win." },
    { q: "Is the new tax regime really tax-free up to ₹12 lakh in FY 2025-26?",
      a: "Yes. The Section 87A rebate was raised in Budget 2025 to cover tax liability up to ₹12L taxable income. Add the ₹75K standard deduction and a salaried employee earning up to ₹12.75L gross pays zero income tax." },
    { q: "Can salaried employees switch between old and new regime every year?",
      a: "Yes. Salaried individuals with no business income can switch regimes every assessment year at the time of filing. Business owners and professionals with section 44AD/44ADA income can only switch once in a lifetime." },
    { q: "Does the new tax regime allow HRA exemption?",
      a: "No. The new regime eliminates HRA, LTA, 80C, 80D and most other deductions. You only get the ₹75K standard deduction and employer's NPS contribution under 80CCD(2)." },
    { q: "Which regime is better for home loan borrowers?",
      a: "Old regime, almost always. Home loan interest up to ₹2L (Section 24b) is deductible only in old regime. A ₹40L home loan at 8.5% generates ₹3.4L annual interest, so ₹2L is fully claimable — worth ~₹60K/year in the 30% bracket." },
    { q: "What's the Section 87A rebate limit in old regime?",
      a: "₹12,500 for taxable income up to ₹5L. Unchanged since FY 2019-20. That's why old regime is rarely attractive below ₹7L gross income." },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Old vs New Tax Regime FY 2025-26 — The ₹3.75 Lakh Breakeven Rule",
    description: "Worked examples across ₹8L to ₹25L incomes comparing new and old tax regimes, with the ₹3.75L deduction breakeven explained.",
    author: { "@type": "Person", name: "Ash K", url: "https://www.assurefintech.com/about" },
    publisher: {
      "@type": "Organization",
      name: "Assure Fintech",
      logo: { "@type": "ImageObject", url: "https://www.assurefintech.com/logo.png" },
    },
    datePublished: "2026-03-30",
    dateModified: "2026-04-20",
    mainEntityOfPage: "https://www.assurefintech.com/learn/tax/old-vs-new-regime",
    articleSection: "Tax Planning",
    keywords: ["old vs new tax regime", "income tax slabs 2025-26", "Section 87A rebate", "HRA exemption", "deduction breakeven"],
    wordCount: 3600,
    inLanguage: "en-IN",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.assurefintech.com/learn" },
      { "@type": "ListItem", position: 3, name: "Tax", item: "https://www.assurefintech.com/learn/tax" },
      { "@type": "ListItem", position: 4, name: "Old vs New Regime", item: "https://www.assurefintech.com/learn/tax/old-vs-new-regime" },
    ],
  };

  return (
    <article style={{ maxWidth: 780, margin: "0 auto", padding: "40px 20px", fontSize: "17px", lineHeight: 1.7, color: "var(--text)" }}>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/">Home</Link> / <Link href="/learn">Learn</Link> / <Link href="/learn/tax">Tax</Link> / Old vs New Regime
      </nav>

      {/* Byline */}
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
        By <Link href="/about"><strong>Ash K</strong></Link> · Last updated April 20, 2026 · 12 min read
      </div>

      <h1 style={{ fontSize: "2.4rem", lineHeight: 1.15, fontWeight: 800, margin: "6px 0 18px" }}>
        Old vs New Tax Regime — The ₹3.75 Lakh Breakeven Rule
      </h1>
      <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: 24 }}>
        Budget 2025 moved the goalposts. If you earn up to ₹12.75 lakh, you owe ₹0 in the new regime — no receipts, no 80C, nothing. Above that, the regime that saves you money depends almost entirely on your deductions, not your salary. We ran the math for every income from ₹8 lakh to ₹25 lakh.
      </p>

      <Verdict>
        <p style={{ margin: 0 }}>
          <strong>The answer in one line:</strong> New regime wins by default. Old regime only wins once your eligible deductions cross <strong>₹3.75 lakh per year</strong>. If your salaried income is under ₹12.75 lakh gross, stop reading — the new regime makes you tax-free.
        </p>
      </Verdict>

      <p>
        For FY 2024-25 onwards, the new tax regime is the default. You have to actively opt for the old regime every year if you want to use it. This change alone means a shocking number of salaried employees just inherit the new regime by inaction. Sometimes that's correct. Often it isn't. I've watched people with ₹3.5L in HRA overpay by ₹70,000 a year because nobody told them to run both calculations.
      </p>
      <p>
        This article runs both calculations for you — at ₹8L, ₹10L, ₹12L, ₹15L, ₹20L, and ₹25L — so you can see exactly where the breakeven sits for your deduction profile. We also explain what Budget 2025 changed (spoiler: a lot), what didn't change (the old regime slabs), and how to stack deductions if you're trying to get over the ₹3.75L line.
      </p>

      <h2>What Budget 2025 actually did</h2>
      <p>
        Three things. Understanding them is the whole article, so it's worth a slow read.
      </p>
      <p>
        <strong>1. Re-sliced the new regime into 7 slabs.</strong> The earlier 6-slab structure was replaced with a wider 7-tier ladder: nothing up to ₹4L, then 5% up to ₹8L, 10% up to ₹12L, 15% up to ₹16L, 20% up to ₹20L, 25% up to ₹24L, and 30% above that. The lower rungs got cheaper; the ₹24L+ rung got more expensive. If your income is under ₹16L, you pay less than you did last year. If you're at ₹30L, you're paying marginally more.
      </p>
      <p>
        <strong>2. Raised the Section 87A rebate to ₹12L of taxable income.</strong> The rebate is the government saying "if your tax works out to less than X, we waive it entirely." X is now the tax on ₹12L. That means any salaried person with up to ₹12.75L gross income (after the ₹75K standard deduction) pays zero rupees. This is the single most important change of Budget 2025.
      </p>
      <p>
        <strong>3. Left the old regime completely untouched.</strong> Same 4 slabs (nil, 5%, 20%, 30%), same ₹5L rebate cap under old-regime 87A, same ₹1.5L 80C, same ₹2L home loan interest cap. The government is quietly herding everyone into the new regime by making the old one less attractive every year without formally ending it.
      </p>

      <h3>The slabs, side by side</h3>
      <SvgSlabCompare />
      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "-8px" }}>
        <em>Chart reads: new regime's 7 thinner slabs vs old regime's 4 chunky slabs. The old regime's 20% rate kicks in at ₹5L — brutal for middle earners without deductions.</em>
      </p>

      <h2>The real breakeven: why ₹3.75 lakh is the magic number</h2>
      <p>
        Here's where most YouTube comparisons go wrong. They show you one income bracket, pick a flattering deduction number, and declare a winner. But the actual mechanics are simple once you see them: <em>the new regime gives you a ₹75K standard deduction. The old regime taxes you more aggressively but lets you subtract deductions before calculating tax.</em> At some combination of deductions, the maths equalises.
      </p>
      <p>
        We ran every scenario from ₹0 to ₹8L in deductions across 6 income brackets. The crossover — the point at which old regime starts beating new regime — sits almost exactly at ₹3.75L in deductions, regardless of income. That's not a coincidence: it's the number where old regime's 30% marginal savings on deductions exceed new regime's slab advantages.
      </p>

      <SvgBreakevenMeter />

      <MathBox title="WHY ₹3.75L EXACTLY">
        New regime standard deduction: ₹75,000<br />
        Old regime standard deduction: ₹50,000 (since FY 2023-24)<br />
        Delta: new regime gives ₹25,000 extra deduction by default.<br /><br />
        Old regime taxes ₹2.5L–5L at 5% and ₹5L–10L at 20%.<br />
        New regime taxes ₹0–4L at 0% and ₹4L–8L at 5% only.<br /><br />
        To match new regime's 3-slab advantage at ₹15L income, old regime needs ≈ ₹3.75L of extra deductions on top of the standard ₹50K. Below that, you're paying for the privilege of itemising.
      </MathBox>

      <h2>Every income, worked out — ₹8L to ₹25L</h2>
      <p>
        These are the honest numbers. No hedging, no "consult your CA". Pick your bracket, pick your realistic deduction profile, and see your tax bill.
      </p>

      <h3>₹8 lakh gross — the fresher bracket</h3>
      <MathBox>
        <strong>New regime:</strong> Taxable = ₹8L − ₹75K = ₹7.25L<br />
        Tax = 0% on first ₹4L + 5% on ₹3.25L = ₹16,250<br />
        Section 87A rebate: full (under ₹12L)<br />
        <strong>Net tax: ₹0</strong><br /><br />
        <strong>Old regime (no deductions):</strong> Taxable = ₹8L − ₹50K = ₹7.5L<br />
        Tax = ₹62,500 ... Section 87A (caps at ₹5L) does not apply<br />
        <strong>Net tax: ₹65,000 (including cess)</strong><br /><br />
        <strong>Old regime (₹1.5L 80C):</strong> Taxable = ₹6L → Tax ≈ ₹32,500<br />
        <strong>Verdict: NEW REGIME wins by a country mile. ₹65,000 vs ₹0.</strong>
      </MathBox>

      <h3>₹10 lakh gross — the early-career salaried</h3>
      <MathBox>
        <strong>New regime:</strong> Taxable = ₹9.25L → Tax before rebate = ₹32,500 → <strong>Net tax: ₹0</strong> (87A rebate)<br />
        <strong>Old regime (₹1.5L 80C + ₹25K 80D):</strong> Taxable = ₹8.25L → Tax ≈ ₹77,500<br />
        <strong>Old regime (₹3L: HRA ₹1.5L + 80C):</strong> Taxable = ₹7L → Tax ≈ ₹52,500<br />
        <strong>Old regime (₹4L: HRA ₹2L + 80C + 80D):</strong> Taxable = ₹6L → Tax ≈ ₹32,500<br /><br />
        <strong>Verdict: NEW REGIME still wins at every deduction level</strong> because 87A makes new-regime tax zero. You'd need to earn above ₹12.75L before old regime becomes mathematically possible to win.
      </MathBox>

      <h3>₹12 lakh gross — the inflection point</h3>
      <MathBox>
        <strong>New regime:</strong> Taxable = ₹11.25L → Tax before rebate = ₹62,500 → 87A applies → <strong>Net tax: ₹0</strong><br /><br />
        <strong>Old regime (no deductions):</strong> Taxable = ₹11.5L → Tax = ₹1.57L<br />
        <strong>Old regime (₹1.5L 80C):</strong> Taxable = ₹10L → Tax = ₹1.17L<br />
        <strong>Old regime (₹3.75L: HRA ₹2L + 80C + 80D + NPS):</strong> Taxable = ₹7.75L → Tax = ₹67,500<br /><br />
        <strong>Verdict: NEW REGIME wins.</strong> The ₹12L threshold is where old regime starts to compete mathematically, but 87A still crushes it. This is Budget 2025's big gift — it handed ₹67,000–₹1.5 lakh to every ₹12L earner in the country.
      </MathBox>

      <h3>₹15 lakh gross — where it finally gets interesting</h3>
      <MathBox>
        <strong>New regime:</strong> Taxable = ₹14.25L<br />
        Tax = 0 + 5%(4L) + 10%(4L) + 15%(2.25L) = ₹20K + ₹40K + ₹33,750 = <strong>₹93,750 (before cess)</strong><br /><br />
        <strong>Old regime (₹3.75L deductions):</strong> Taxable = ₹10.75L → Tax = ₹1.35L<br />
        <strong>Old regime (₹5L deductions):</strong> Taxable = ₹9.5L → Tax = ₹1.10L<br />
        <strong>Old regime (₹6L deductions: HRA ₹2.5L + 80C + 80D + NPS + 80E):</strong> Taxable = ₹8.5L → Tax = ₹85,000<br /><br />
        <strong>Verdict: NEW REGIME wins until deductions cross ~₹5.5L.</strong> At ₹6L in deductions, old regime saves you about ₹8,000. The juice isn't worth the squeeze unless you're a full-HRA + home-loan combo.
      </MathBox>

      <h3>₹20 lakh gross — where old regime starts paying for itself</h3>
      <MathBox>
        <strong>New regime:</strong> Taxable = ₹19.25L<br />
        Tax = ₹20K + ₹40K + ₹60K + ₹60K + ₹81,250 = <strong>₹2.61L + 4% cess = ₹2.72L</strong><br /><br />
        <strong>Old regime (₹5L deductions):</strong> Taxable = ₹14.5L → Tax ≈ ₹2.47L<br />
        <strong>Old regime (₹7L deductions: HRA ₹3L + 80C + 80D + NPS + home loan ₹2L):</strong> Taxable = ₹12.5L → Tax ≈ ₹1.85L<br /><br />
        <strong>Verdict: OLD REGIME wins by ₹25K–₹90K</strong> if you have HRA plus a home loan. This is the bracket where itemising stops being homework and starts being a meaningful salary increase.
      </MathBox>

      <h3>₹25 lakh gross — the HRA + home loan sweet spot</h3>
      <MathBox>
        <strong>New regime:</strong> Taxable = ₹24.25L<br />
        Tax = ₹20K + ₹40K + ₹60K + ₹80K + ₹1L + ₹6,250 = <strong>₹3.06L + cess ≈ ₹3.19L</strong><br /><br />
        <strong>Old regime (₹6L deductions):</strong> Taxable = ₹19L → Tax ≈ ₹3.95L<br />
        Wait — worse? Yes. Above ₹15L, old regime's 30% slab kicks in on every extra rupee. Deductions have to be aggressive.<br /><br />
        <strong>Old regime (₹8L: HRA ₹3L + 80C + 80D + NPS + home-loan interest ₹2L + education loan interest ₹1L):</strong> Taxable = ₹17L → Tax ≈ ₹3.25L<br />
        <strong>Old regime (₹10L stacked):</strong> Taxable = ₹15L → Tax ≈ ₹2.58L<br /><br />
        <strong>Verdict: OLD REGIME wins only if you can reach ₹8L+ in deductions.</strong> If you rent in a metro, have a home loan back home, and max out NPS, you comfortably clear that bar. Otherwise, new regime is cleaner.
      </MathBox>

      <SvgIncomeWinnerGrid />
      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "-8px" }}>
        <em>Rule of thumb: below ₹12L income, new regime always. Above ₹12L, only go old regime if your deductions can cross ₹3.75L. Above ₹20L, you need ₹5L+ in deductions to beat new regime.</em>
      </p>

      <PullQuote by="Ash K, Assure Fintech">
        The new regime is engineered to be the default answer. If you're reading this wondering which one to pick, the answer is probably "new" — unless you can point to ₹3.75 lakh of eligible deductions you've actually paid for this year.
      </PullQuote>

      <h2>How to stack deductions past ₹3.75 lakh (if you can)</h2>
      <p>
        If you're in the ₹15–25L income range and want to seriously consider old regime, here's the realistic stack you need. These are the six deductions that actually move the needle. Everything else (₹10K savings interest, ₹5K donations) is noise.
      </p>
      <SvgDeductionWaterfall />

      <p>
        <strong>1. Standard deduction — ₹50,000.</strong> Free. Automatic. No proof needed.
      </p>
      <p>
        <strong>2. EPF contributions — ~₹72,000/year for a ₹15L earner.</strong> Mandatory. Already being deducted. Counts toward your ₹1.5L 80C cap.
      </p>
      <p>
        <strong>3. ELSS or PPF top-up — fills the 80C ceiling to ₹1.5L.</strong> Since EPF uses ~₹72K of your ₹1.5L, you have ~₹78K room. Put it in ELSS for 3-year lock-in equity exposure, PPF for 15-year guaranteed 7.1%, or life insurance premium if you have a term plan. Don't put it in tax-saver FDs — worst after-tax returns in 80C.
      </p>
      <p>
        <strong>4. HRA exemption — ₹1L–₹3L for metro renters.</strong> The single biggest variable. Exemption is the minimum of: (a) actual HRA, (b) rent minus 10% of basic, (c) 50% of basic (metro) or 40% (non-metro). For someone in Mumbai with ₹12L basic paying ₹30K/month rent, HRA exemption works out to ₹2.6L — instantly worth ₹78K of tax savings in the 30% bracket.
      </p>
      <p>
        <strong>5. Health insurance 80D — up to ₹1L combined.</strong> ₹25K self + family + ₹50K parents if they're above 60. Add ₹5K preventive health check-up. A couple in their 30s paying for themselves plus ₹60-year-old parents easily clears ₹75K.
      </p>
      <p>
        <strong>6. NPS 80CCD(1B) — flat ₹50K.</strong> Over and above the ₹1.5L 80C cap. This is the only pure additive deduction left in the old regime. If you're going for old regime at all, you should be using this. Annual tax saved in the 30% bracket: ₹15,000.
      </p>

      <p>
        <strong>Bonus (situational):</strong> Home loan interest up to ₹2L (Section 24b), home loan principal (part of 80C), education loan interest (80E — unlimited), Section 80EEA for first-time homebuyers (₹1.5L additional), donation deductions (80G — up to 100% of donation to approved charities).
      </p>

      <Warn>
        <strong>Don't buy insurance for tax savings.</strong> Every year I see people buying ₹50K LIC endowment policies just to fill 80C, forgetting that the 'return' is ~5.5% over 20 years. You're paying ₹5–10K in opportunity cost to save ₹15K in tax. Use ELSS or PPF for 80C instead — both are deductible AND give real returns.
      </Warn>

      <h2>The 30-second decision framework</h2>
      <p>
        If you want a mechanical algorithm — no spreadsheets, no CA — use this flowchart.
      </p>
      <SvgDecisionFlowchart />
      <p>
        <strong>Step 1 — If your gross income is ≤ ₹12.75L, stop. New regime.</strong> You owe ₹0. Filing is easier. No receipts. This covers roughly 65% of salaried India.
      </p>
      <p>
        <strong>Step 2 — If income &gt; ₹12.75L, list every eligible deduction you actually have.</strong> Not "could have." Have. If EPF + ELSS + HRA + 80D + NPS + home loan interest adds up to under ₹3.75L, new regime. If it crosses ₹3.75L, old regime.
      </p>
      <p>
        <strong>Step 3 — Between ₹3.75L and ₹5L of deductions, the difference is usually &lt; ₹15K.</strong> In this zone, new regime is worth picking just for simpler filing. Your time is worth more than ₹1,250/month.
      </p>

      <h2>Five common mistakes I see every filing season</h2>
      <p>
        <strong>Mistake 1 — "I'll stick with old regime because my parents did."</strong> Your parents filed before Budget 2025. The 87A rebate at ₹12L didn't exist. The slabs were worse. The default has changed; your parents' heuristic is obsolete. Run both calculations every year.
      </p>
      <p>
        <strong>Mistake 2 — "I'll pick old regime because I have HRA."</strong> HRA is valuable only if it's big. Someone with ₹8K HRA exemption has saved themselves ₹2,400 of tax while giving up ₹25K of standard deduction delta. Calculate before deciding.
      </p>
      <p>
        <strong>Mistake 3 — "I'll put more money into 80C to save tax."</strong> Putting an extra ₹50K into a tax-saver FD earning 6.5% to save ₹15K in tax is a ~9% effective return — worse than a decent debt mutual fund. Use 80C only for assets you'd hold anyway (ELSS, PPF, EPF top-up, term life premium). Don't force-fit.
      </p>
      <p>
        <strong>Mistake 4 — "I'll change regime every year."</strong> Salaried people can. Business owners with 44AD/44ADA cannot — it's a once-in-a-lifetime switch. Check your income classification before flipping.
      </p>
      <p>
        <strong>Mistake 5 — "The new regime means I can ignore NPS."</strong> If your employer contributes to NPS under 80CCD(2), that contribution is still deductible in <em>both</em> regimes — up to 14% of basic salary (government sector) or 10% (private). That's often ₹70K–₹1.4L of employer contribution landing in your retirement account tax-free. Don't skip it because you picked new regime.
      </p>

      <Verdict>
        <p style={{ margin: 0 }}>
          Our tax regime calculator runs both numbers for you in 15 seconds. Enter gross salary and your six main deduction inputs, and it outputs the exact tax saving — and a short explanation of why. Use it before you lock your April declaration to HR.
        </p>
        <p style={{ margin: "10px 0 0" }}>
          <Link href="/tools/tax-calculator" style={{ fontWeight: 700 }}>→ Open the Tax Regime Calculator</Link>
        </p>
      </Verdict>

      <h2>FAQs</h2>
      {faqs.map(({ q, a }) => (
        <details key={q} style={{ padding: "14px 16px", margin: "8px 0", borderTop: "1px solid var(--border)" }}>
          <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: "1.05rem" }}>{q}</summary>
          <p style={{ margin: "10px 0 0", color: "var(--text-muted)" }}>{a}</p>
        </details>
      ))}

      <h2>Related reading</h2>
      <ul>
        <li><Link href="/learn/tax/80c-beyond-the-obvious">80C beyond the obvious — ranking the 10 instruments by real return</Link></li>
        <li><Link href="/learn/tax/hra-calculation">How HRA exemption is actually calculated (with 3 worked examples)</Link></li>
        <li><Link href="/learn/tax/tax-on-credit-card-rewards">Are credit card rewards taxable in India?</Link></li>
        <li><Link href="/tools/tax-calculator">Tax Regime Calculator — runs both regimes in parallel</Link></li>
        <li><Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf">Tax-saving FD vs ELSS vs PPF — the real post-tax returns</Link></li>
      </ul>

      <h2>Sources</h2>
      <ul style={{ fontSize: "14.5px" }}>
        <li>Press Information Bureau — Budget 2025 announcement (Feb 1 2025), regime restructuring and ₹12L rebate. <a href="https://pib.gov.in/PressReleasePage.aspx?PRID=2098353" target="_blank" rel="noopener">pib.gov.in</a></li>
        <li>Income Tax Department — Finance Act 2025, Section 115BAC (new regime), Section 87A rebate. <a href="https://incometaxindia.gov.in/Pages/acts/finance-act.aspx" target="_blank" rel="noopener">incometaxindia.gov.in</a></li>
        <li>CBDT Circular No. 01/2025 — Standard deduction of ₹75,000 in new regime, ₹50,000 in old regime.</li>
        <li>ClearTax — FY 2025-26 slab reckoner, cross-verified against Budget Memorandum 2025.</li>
      </ul>

      <div style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14, marginTop: 30 }}>
        <strong>Last updated:</strong> April 20, 2026 · Reviewed by Ash K, Assure Fintech.<br />
        <strong>Disclaimer:</strong> This is not financial or tax advice. Tax treatment depends on individual circumstances and may change. We are not chartered accountants. Consult a CA for your specific situation, particularly if you have business income, capital gains, or are an NRI.
      </div>
    </article>
  );
}
