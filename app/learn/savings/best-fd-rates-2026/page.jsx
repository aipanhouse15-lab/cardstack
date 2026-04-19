// app/learn/savings/best-fd-rates-2026/page.jsx
// Assure Fintech — Tier 1 Article 2
// Best FD Rates in India (April 2026) — The post-tax real return edition
// Author: Ash K | Last updated: April 20, 2026
// Template: Data Report (numbered chapters)
// Word count target: 3500+ | SVGs: 5

import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best FD Rates India April 2026 — The Post-Tax Real Return Edition | Assure Fintech",
  description:
    "We list every major PSU, private and Small Finance Bank FD rate for April 2026 — then strip out TDS and inflation so you see your real return. Most FDs give 0.1% real. Some are negative.",
  keywords: [
    "best FD rates 2026",
    "fixed deposit interest rates April 2026",
    "highest FD rate India",
    "FD real return after tax",
    "small finance bank FD rates",
    "senior citizen FD rates 2026",
  ],
  alternates: { canonical: "https://www.assurefintech.com/learn/savings/best-fd-rates-2026" },
  openGraph: {
    title: "Best FD Rates India (April 2026) — The Real Return Honest Number",
    description:
      "21 banks ranked by advertised rate vs post-tax real return. The rankings flip when you do the math.",
    url: "https://www.assurefintech.com/learn/savings/best-fd-rates-2026",
    type: "article",
    siteName: "Assure Fintech",
    images: ["/og/fd-rates-real-return.png"],
  },
};

/* ─────────────────────────────────────────────
   SVG 1 — Rate landscape bar chart (13 banks)
   ───────────────────────────────────────────── */
function SvgRateLandscape() {
  const banks = [
    { name: "Unity SFB",         rate: 9.00, type: "SFB" },
    { name: "Utkarsh SFB",       rate: 8.50, type: "SFB" },
    { name: "AU SFB",            rate: 8.25, type: "SFB" },
    { name: "Bajaj Finance",     rate: 8.25, type: "NBFC" },
    { name: "Shriram Finance",   rate: 8.10, type: "NBFC" },
    { name: "Mahindra Finance",  rate: 8.00, type: "NBFC" },
    { name: "IndusInd",          rate: 7.75, type: "Private" },
    { name: "Axis",              rate: 7.10, type: "Private" },
    { name: "HDFC",              rate: 7.00, type: "Private" },
    { name: "ICICI",             rate: 7.00, type: "Private" },
    { name: "Kotak",             rate: 6.95, type: "Private" },
    { name: "SBI",               rate: 6.80, type: "PSU" },
    { name: "Bank of India",     rate: 6.75, type: "PSU" },
  ];
  const typeColor = { SFB: "#D97706", NBFC: "#b45309", Private: "#0891B2", PSU: "#475569" };
  return (
    <svg viewBox="0 0 780 420" role="img" aria-label="1-year FD rate landscape across 13 banks, April 2026"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="390" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        1-year FD rates — April 2026 snapshot
      </text>
      <text x="390" y="40" textAnchor="middle" fontSize="11" fill="var(--text-muted)">
        SFB &amp; NBFC clearly dominate the top — but not the real-return chart. Watch the flip on the next page.
      </text>
      {banks.map((b, i) => {
        const y = 60 + i * 26;
        const w = (b.rate / 9.5) * 520;
        return (
          <g key={b.name}>
            <text x="170" y={y + 17} textAnchor="end" fontSize="12" fontWeight="600" fill="var(--text)">{b.name}</text>
            <rect x="180" y={y + 4} width={w} height="18" fill={typeColor[b.type]} opacity="0.9" rx="3" />
            <text x={185 + w} y={y + 17} fontSize="11" fontWeight="700" fill="var(--text)">{b.rate.toFixed(2)}%</text>
            <text x="760" y={y + 17} textAnchor="end" fontSize="10" fill={typeColor[b.type]} fontWeight="700">{b.type}</text>
          </g>
        );
      })}
      <line x1="180" y1="400" x2="710" y2="400" stroke="var(--border)" />
      <text x="180" y="415" fontSize="10" fill="var(--text-muted)">Source: BankBazaar, individual bank websites, April 2026. RBI repo: 5.25% (Apr 2026 MPC).</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 2 — Tax impact across brackets (7.5% FD)
   ───────────────────────────────────────────── */
function SvgTaxImpact() {
  // For an FD advertised at 7.5%, show net return after TDS + tax at each bracket
  const brackets = [
    { label: "No tax (87A rebate)", grossRate: 7.5, taxRate: 0.00, inflation: 4.7 },
    { label: "5% bracket",          grossRate: 7.5, taxRate: 0.05, inflation: 4.7 },
    { label: "20% bracket",         grossRate: 7.5, taxRate: 0.20, inflation: 4.7 },
    { label: "30% bracket",         grossRate: 7.5, taxRate: 0.30, inflation: 4.7 },
  ];
  return (
    <svg viewBox="0 0 760 340" role="img" aria-label="How a 7.5% FD rate performs across tax brackets after inflation"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="380" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        Same FD, four tax brackets. What actually lands in your pocket.
      </text>
      <text x="380" y="40" textAnchor="middle" fontSize="11" fill="var(--text-muted)">
        Starting rate: 7.50% · CPI inflation assumption: 4.70% (RBI Apr 2026 forecast)
      </text>
      {brackets.map((b, i) => {
        const x = 80 + i * 165;
        const postTax = b.grossRate * (1 - b.taxRate);
        const real = postTax - b.inflation;
        const barH = (v) => Math.max(v, 0) * 16;
        return (
          <g key={b.label}>
            <text x={x + 65} y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">{b.label}</text>
            {/* Gross bar */}
            <rect x={x} y="90" width="130" height={barH(b.grossRate)} fill="#fbbf24" rx="3" />
            <text x={x + 65} y={90 + barH(b.grossRate) + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Gross {b.grossRate.toFixed(2)}%</text>
            {/* Post-tax bar */}
            <rect x={x} y={90 + barH(b.grossRate) + 24} width="130" height={barH(postTax)} fill="#0891B2" rx="3" />
            <text x={x + 65} y={90 + barH(b.grossRate) + 24 + barH(postTax) + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">After tax {postTax.toFixed(2)}%</text>
            {/* Real bar */}
            <rect x={x} y={90 + barH(b.grossRate) + 24 + barH(postTax) + 22}
                  width="130" height={Math.abs(real) * 16}
                  fill={real >= 0 ? "#16A34A" : "#ef4444"} rx="3" />
            <text x={x + 65} y={90 + barH(b.grossRate) + 24 + barH(postTax) + 22 + Math.abs(real) * 16 + 14} textAnchor="middle" fontSize="12" fontWeight="800" fill={real >= 0 ? "#16A34A" : "#ef4444"}>
              Real {real >= 0 ? "+" : ""}{real.toFixed(2)}%
            </text>
          </g>
        );
      })}
      <text x="380" y="322" textAnchor="middle" fontSize="11" fill="var(--text-muted)">
        Your 30%-bracket FD is losing you 0.45% of purchasing power every year. It looks like growth. It isn't.
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 3 — Real return comparison (5 banks at 30% bracket)
   ───────────────────────────────────────────── */
function SvgRealReturnCompare() {
  const rows = [
    { bank: "Unity SFB",   gross: 9.00, postTax: 6.30, real: 1.60, note: "DICGC-insured up to ₹5L" },
    { bank: "AU SFB",      gross: 8.25, postTax: 5.78, real: 1.08, note: "DICGC-insured up to ₹5L" },
    { bank: "IndusInd",    gross: 7.75, postTax: 5.43, real: 0.73, note: "Top-rated private" },
    { bank: "HDFC",        gross: 7.00, postTax: 4.90, real: 0.20, note: "AAA · branch access" },
    { bank: "SBI",         gross: 6.80, postTax: 4.76, real: 0.06, note: "Government-owned" },
  ];
  return (
    <svg viewBox="0 0 760 320" role="img" aria-label="Gross vs post-tax vs real return across 5 banks, 30% bracket"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="380" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        The rankings flip. Real returns in the 30% tax bracket.
      </text>
      <text x="180" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">Bank</text>
      <text x="320" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">Advertised</text>
      <text x="450" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">Post-tax</text>
      <text x="580" y="52" fontSize="11" fontWeight="700" fill="#16A34A">Real (post-inflation)</text>
      {rows.map((r, i) => {
        const y = 80 + i * 42;
        const w = r.real * 60;
        return (
          <g key={r.bank}>
            <text x="180" y={y + 17} fontSize="13" fontWeight="700" fill="var(--text)">{r.bank}</text>
            <text x="180" y={y + 33} fontSize="10" fill="var(--text-muted)">{r.note}</text>
            <text x="320" y={y + 22} fontSize="13" fontWeight="600" fill="var(--text)">{r.gross.toFixed(2)}%</text>
            <text x="450" y={y + 22} fontSize="13" fontWeight="600" fill="#0891B2">{r.postTax.toFixed(2)}%</text>
            <rect x="580" y={y + 10} width={w} height="20" fill="#16A34A" opacity="0.85" rx="3" />
            <text x={590 + w} y={y + 24} fontSize="12" fontWeight="800" fill="var(--text)">+{r.real.toFixed(2)}%</text>
          </g>
        );
      })}
      <text x="180" y="308" fontSize="10" fill="var(--text-muted)">
        Inflation: 4.70% (RBI April 2026). Post-tax assumes highest slab. Rebate or 80TTB treatment would change the picture.
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 4 — 5×5 decision matrix: SFB vs big bank
   ───────────────────────────────────────────── */
function SvgDecisionMatrix() {
  const criteria = ["Rate", "Safety (DICGC + parent)", "Branch access", "Loan against FD", "Digital UX"];
  const banks = ["SBI / HDFC / ICICI", "AU / Equitas SFB", "Unity / Utkarsh SFB", "Bajaj / Shriram NBFC", "Tax-saver FD"];
  //  ratings 1..5; 5 best
  const scores = [
    [2, 4, 5, 5, 3], // Rate
    [5, 4, 3, 2, 3], // Safety
    [5, 3, 2, 1, 4], // Branch
    [5, 4, 3, 1, 2], // Loan against
    [5, 4, 3, 3, 4], // Digital
  ];
  const totals = banks.map((_, i) => scores.reduce((a, row) => a + row[i], 0));
  const color = (s) => (s >= 4 ? "#16A34A" : s === 3 ? "#fbbf24" : "#ef4444");
  return (
    <svg viewBox="0 0 820 360" role="img" aria-label="5 by 5 decision matrix comparing SFB NBFC and big bank FDs"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="410" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        5 × 5 decision matrix — where each FD wins, and where it loses
      </text>
      {banks.map((b, i) => (
        <text key={b} x={260 + i * 110} y="60" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)">{b}</text>
      ))}
      {criteria.map((c, r) => (
        <g key={c}>
          <text x="20" y={110 + r * 46} fontSize="12" fontWeight="600" fill="var(--text)">{c}</text>
          {scores[r].map((s, i) => (
            <g key={i}>
              <rect x={210 + i * 110} y={92 + r * 46} width="100" height="34" rx="5" fill={color(s)} opacity="0.9" />
              <text x={260 + i * 110} y={114 + r * 46} textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">{s}/5</text>
            </g>
          ))}
        </g>
      ))}
      <line x1="10" y1="330" x2="810" y2="330" stroke="var(--border)" />
      <text x="20" y="352" fontSize="11" fontWeight="700" fill="var(--text)">Totals:</text>
      {totals.map((t, i) => (
        <text key={i} x={260 + i * 110} y="352" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--text)">{t}/25</text>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG 5 — FD vs alternatives
   ───────────────────────────────────────────── */
function SvgAlternatives() {
  const items = [
    { name: "1-yr FD (7% gross)",          real: 0.20, lock: "1 yr",  tax: "Slab",       liq: "Med" },
    { name: "Tax-saver FD (7.2%)",         real: 0.30, lock: "5 yr",  tax: "80C ₹1.5L",  liq: "Low" },
    { name: "PPF (7.10%)",                 real: 2.40, lock: "15 yr", tax: "EEE",        liq: "Low" },
    { name: "Debt MF / Target Maturity",   real: 2.10, lock: "Flex",  tax: "LTCG slab",  liq: "High" },
    { name: "Floating-rate sov bond",      real: 2.80, lock: "7 yr",  tax: "Slab",       liq: "Low" },
    { name: "Arbitrage MF (tax-efficient)",real: 1.90, lock: "Flex",  tax: "LTCG 12.5%", liq: "High" },
  ];
  const maxReal = 3;
  return (
    <svg viewBox="0 0 780 330" role="img" aria-label="FDs vs alternative debt instruments across real return, liquidity and tax"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="390" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        FD vs the alternatives — 5-year real return potential
      </text>
      <text x="390" y="40" textAnchor="middle" fontSize="11" fill="var(--text-muted)">
        Real return = nominal return − 4.70% inflation, at 30% bracket unless noted
      </text>
      {items.map((it, i) => {
        const y = 70 + i * 40;
        const w = (it.real / maxReal) * 460;
        return (
          <g key={it.name}>
            <text x="230" y={y + 18} textAnchor="end" fontSize="12" fontWeight="600" fill="var(--text)">{it.name}</text>
            <rect x="240" y={y + 4} width={w} height="28" fill="#D97706" opacity="0.85" rx="3" />
            <text x={245 + w} y={y + 23} fontSize="12" fontWeight="800" fill="var(--text)">+{it.real.toFixed(2)}%</text>
            <text x="720" y={y + 15} textAnchor="end" fontSize="10" fill="var(--text-muted)">Lock: {it.lock}</text>
            <text x="720" y={y + 28} textAnchor="end" fontSize="10" fill="var(--text-muted)">Tax: {it.tax} · Liq: {it.liq}</text>
          </g>
        );
      })}
      <line x1="30" y1="315" x2="750" y2="315" stroke="var(--border)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Callout components — DIFFERENT STYLE from Article 1 per Rule 5
   ───────────────────────────────────────────── */
function RateCard({ bank, rate, senior, note }) {
  return (
    <div style={{
      border: "1px solid var(--border)", borderLeft: "6px solid #D97706",
      background: "var(--bg-soft, rgba(217,119,6,0.04))", padding: "28px 30px",
      margin: "14px 0", borderRadius: "8px", display: "grid", gridTemplateColumns: "1fr auto",
      gap: "8px 14px", alignItems: "center",
    }}>
      <div>
        <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>{bank}</div>
        {note && <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{note}</div>}
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#D97706", lineHeight: 1 }}>{rate}</div>
        {senior && <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Senior: {senior}</div>}
      </div>
    </div>
  );
}
function SafetyCheck({ children }) {
  return (
    <div style={{
      borderTop: "3px solid #ef4444", borderBottom: "3px solid #ef4444",
      padding: "28px 30px", margin: "22px 0",
    }}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "1.2px", color: "#b91c1c", marginBottom: 14 }}>SAFETY CHECK</div>
      {children}
    </div>
  );
}
function InsightQuote({ children }) {
  return (
    <div style={{
      fontSize: "1.55rem", fontStyle: "italic", lineHeight: 1.4, fontWeight: 500,
      padding: "22px 0 22px 22px", margin: "36px 0",
      borderLeft: "5px solid #D97706",
    }}>
      {children}
    </div>
  );
}
function Persona({ title, verdict, color, body }) {
  return (
    <div style={{
      border: "1px solid var(--border)", borderRadius: 10, padding: "28px 30px", margin: "16px 0",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
        <strong style={{ fontSize: "1.1rem" }}>{title}</strong>
        <span style={{ fontSize: 12, fontWeight: 800, color, letterSpacing: "1px" }}>{verdict}</span>
      </div>
      <div style={{ fontSize: "15.5px", marginTop: 8, color: "var(--text-muted)" }}>{body}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
   ───────────────────────────────────────────── */
export default function BestFdRates2026Page() {
  const faqs = [
    { q: "Which bank offers the highest FD rate in April 2026?",
      a: "Unity Small Finance Bank at 9.00% for 1-year tenure, followed by Utkarsh SFB at 8.50% and AU SFB / Bajaj Finance tied at 8.25%. All SFB deposits are DICGC-insured up to ₹5 lakh per depositor per bank." },
    { q: "Are Small Finance Bank FDs safe?",
      a: "Up to ₹5 lakh per bank, yes — DICGC insurance covers every scheduled bank including SFBs. Above ₹5L, your principal depends on the bank's solvency. SFBs are regulated by RBI but are younger, smaller balance sheets than PSU or top private banks." },
    { q: "What is the real return on an FD after tax and inflation in 2026?",
      a: "For a 30% tax bracket investor, a 7% FD delivers roughly 0.2% real return (7% − 30% tax = 4.9%; minus 4.7% inflation = 0.2%). Senior citizens using 80TTB and earning 8%+ see real returns closer to 2%." },
    { q: "Should I use SBI or HDFC even though SFBs pay more?",
      a: "If you need branch access, a quick loan against FD, and the absolute safety of a too-big-to-fail balance sheet, yes. Spend the 1–1.5% rate gap as the premium for that certainty. Otherwise, split between an SFB (up to ₹5L) and a big bank for the rest." },
    { q: "Is the TDS of 10% the actual tax on FD interest?",
      a: "No. TDS is only deducted if interest exceeds ₹40,000 per year (₹50,000 for senior citizens) and it's a prepayment, not the final tax. You'll be taxed at your slab rate at filing time, which could be 0%, 5%, 20% or 30%. Submit Form 15G/15H if your total income is below taxable limit." },
    { q: "Is FD laddering worth the effort in 2026?",
      a: "Yes, for anyone parking more than ₹10L. Splitting into 1-, 2- and 3-year tranches lets you re-price if rates rise, maintains rolling liquidity every 12 months, and spreads reinvestment risk. The trade-off: 15–20 minutes of setup per year at filing time." },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best FD Rates in India (April 2026) — The Post-Tax Real Return Edition",
    description: "All major PSU, private and Small Finance Bank FD rates for April 2026, reranked by post-tax real return after 4.7% inflation.",
    author: { "@type": "Person", name: "Ash K", url: "https://www.assurefintech.com/about" },
    publisher: {
      "@type": "Organization",
      name: "Assure Fintech",
      logo: { "@type": "ImageObject", url: "https://www.assurefintech.com/logo.png" },
    },
    datePublished: "2026-04-01",
    dateModified: "2026-04-20",
    mainEntityOfPage: "https://www.assurefintech.com/learn/savings/best-fd-rates-2026",
    articleSection: "Savings & FDs",
    keywords: ["best FD rates 2026", "fixed deposit April 2026", "FD real return", "small finance bank FD"],
    wordCount: 3700,
    inLanguage: "en-IN",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.assurefintech.com/learn" },
      { "@type": "ListItem", position: 3, name: "Savings", item: "https://www.assurefintech.com/learn/savings" },
      { "@type": "ListItem", position: 4, name: "Best FD Rates 2026", item: "https://www.assurefintech.com/learn/savings/best-fd-rates-2026" },
    ],
  };
  // Dataset schema as supplementary (per blueprint optional Dataset)
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Indian Bank FD Rates — April 2026",
    description: "Monthly snapshot of 1-year fixed deposit rates across PSU banks, private banks, Small Finance Banks and NBFCs in India.",
    creator: { "@type": "Organization", name: "Assure Fintech" },
    datePublished: "2026-04-20",
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: ["FD rates", "fixed deposit", "India", "April 2026"],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #422006, #92400E, #422006)", padding: "48px 32px 52px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #FBBF2422, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FBBF24" }} /> Savings & FD Guide
          </div>
          <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 22 }}>
            Best FD Rates in India — April 2026
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 24 }}>
            Your 7.5% FD returns 0.15% after tax and inflation. I compared 25 banks.
          </p>
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>8.60%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Best SFB rate</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>6.50%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Avg big bank</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5.25%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>RBI repo rate</div></div>
          </div>
        </div>
      </div>
      <article style={{ maxWidth: 700, margin: "0 auto", padding: "0 0 100px", fontSize: "18px", lineHeight: 1.85, color: "var(--text)" }}>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="ld-dataset" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 22 }}>
        <Link href="/">Home</Link> / <Link href="/learn">Learn</Link> / <Link href="/learn/savings">Savings</Link> / Best FD Rates 2026
      </nav>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>
        By <Link href="/about"><strong>Ash K</strong></Link> · Last updated April 20, 2026 · Reviewed against BankBazaar and individual bank websites · 14 min read
      </div>

        <p style={{ margin: 0 }}>
          <strong>Bottom line before you scroll:</strong> a 7% FD in the 30% tax bracket loses you about 0.45% of purchasing power every year. The only way FDs win is (a) you're a senior citizen using 80TTB, (b) you're below the ₹12L Section 87A rebate line, or (c) you're using an SFB paying 9%+ and splitting within the ₹5 lakh DICGC cap. Otherwise, you're renting safety from the bank at a negative real yield.
        </p>
      </SafetyCheck>

      <p>
        This article does three things. First, it lists every major FD rate in India for April 2026 — public sector, private, SFB, and NBFC — 21 institutions in total. Second, it strips out TDS, slab tax and inflation so you see your real return, not the advertised one. Third, it tells you which FDs still make sense in 2026, and which you're better off swapping for PPF, debt mutual funds, or floating-rate bonds.
      </p>

      <h2>01 — The rate landscape, April 2026</h2>
      <p>
        The RBI held repo at 5.25% in its April 2026 MPC meeting, unchanged since the February cut. Deposit rates have drifted down ~10–20 bps from their March peak but the league table is stable. Below is the 1-year FD rate across 13 flagship names. Rates for retail deposits up to ₹2 crore; bulk/premium rates differ.
      </p>

      <SvgRateLandscape />

      <h3>Public sector banks (1-year retail FD)</h3>
      <RateCard bank="State Bank of India (SBI)" rate="6.80%" senior="8.30%" note="Largest deposit base in India. Loan against FD at 8%." />
      <RateCard bank="Bank of India" rate="6.75%" senior="8.25%" note="Competitive senior citizen premium." />
      <RateCard bank="Central Bank of India" rate="6.70%" senior="8.20%" note="Branch footprint across semi-urban belt." />
      <RateCard bank="Union Bank of India" rate="6.65%" senior="8.00%" note="Aggressive senior citizen pricing." />
      <RateCard bank="Punjab National Bank" rate="6.70%" senior="8.20%" note="Pan-India branch reach." />

      <p>
        <strong>Why PSUs pay less:</strong> they sit on an unbeatable CASA base — current account and savings account deposits costing them 0.5–3%. They don't need your FD money nearly as urgently as a newer bank does. You're paying a 1–1.5% rate penalty for the implicit government backstop.
      </p>

      <h3>Private sector banks (1-year retail FD)</h3>
      <RateCard bank="HDFC Bank" rate="7.00%" senior="7.25%" note="Lowest senior premium (+0.25%). Branded AAA." />
      <RateCard bank="ICICI Bank" rate="7.00%" senior="7.50%" note="Strong digital UX, fast FD booking." />
      <RateCard bank="Axis Bank" rate="7.10%" senior="7.35%" note="Competitive rate for 400–700 day tenures." />
      <RateCard bank="Kotak Mahindra" rate="6.95%" senior="7.45%" note="Underperforms peers at 1-year tenure." />
      <RateCard bank="IndusInd Bank" rate="7.75%" senior="8.25%" note="Highest among top-tier private banks. Under RBI Supervision lens in 2025 — monitor disclosures." />
      <RateCard bank="YES Bank" rate="7.50%" senior="8.00%" note="Post-reconstruction; aggressive pricing." />

      <h3>Small Finance Banks — the rate kings</h3>
      <RateCard bank="Unity Small Finance Bank" rate="9.00%" senior="9.50%" note="India's highest scheduled-bank FD rate. DICGC insured to ₹5L." />
      <RateCard bank="Utkarsh Small Finance Bank" rate="8.50%" senior="9.10%" note="Listed entity. Strong Q4 FY26 profitability." />
      <RateCard bank="AU Small Finance Bank" rate="8.25%" senior="8.75%" note="Transitioning to universal bank license application stage." />
      <RateCard bank="Equitas SFB" rate="8.10%" senior="8.60%" note="Chennai-HQ, strong South India branch network." />
      <RateCard bank="Suryoday SFB" rate="8.25%" senior="8.75%" note="Niche MFI-origin; smaller balance sheet." />
      <RateCard bank="Jana SFB" rate="8.15%" senior="8.65%" note="Recently listed; improving asset quality." />

      <h3>NBFC FDs (no DICGC — read this paragraph twice)</h3>
      <RateCard bank="Bajaj Finance" rate="8.25%" senior="8.50%" note="AAA-rated NBFC, but not DICGC-insured. Principal is at the company's solvency." />
      <RateCard bank="Shriram Finance" rate="8.10%" senior="8.60%" note="Large vehicle-finance NBFC. AA+ rated." />
      <RateCard bank="Mahindra & Mahindra Finance" rate="8.00%" senior="8.25%" note="AA+. Part of Mahindra group." />
      <RateCard bank="PNB Housing" rate="7.85%" senior="8.10%" note="AA rated. Corporate FDs only." />

      <SafetyCheck>
        <p style={{ margin: 0 }}>
          <strong>NBFC FDs are not bank FDs.</strong> There is no DICGC insurance. The only safety net is the company's credit rating and balance sheet strength. Bajaj Finance and Mahindra are AAA/AA+; they're safer than most banks on ratings alone. But do not confuse "corporate fixed deposit" with "bank fixed deposit." Different instrument. Different risk. Don't put retirement capital in them.
        </p>
      </SafetyCheck>

      <h2>02 — The honest number: post-tax real return</h2>
      <p>
        Here is where the glossy bar chart turns into a math problem. Your FD doesn't earn what the billboard says. It earns:
      </p>
      <p style={{
        fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "1.05rem", padding: "26px 28px",
        border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-soft, rgba(0,0,0,0.02))",
      }}>
        Real return = Advertised rate × (1 − tax rate) − inflation
      </p>
      <p>
        Plug in numbers. Advertised 7.00% FD. You're in the 30% slab. Inflation is 4.70% (RBI April 2026 forecast). Real return = 7.00 × 0.70 − 4.70 = <strong>0.20%</strong>. Your ₹10 lakh, after one year, has gained ₹20,000 of purchasing power. The advertised rate said ₹70,000. You paid ₹21,000 in tax and ₹47,000 in inflation erosion — ₹68,000 of invisible loss on a headline ₹70,000 gain.
      </p>

      <SvgTaxImpact />

      <p>
        The cruel part is that the 20% bracket is almost as bad. At 20% slab, that same 7% FD delivers a real return of 0.90% — not zero, but only just. You'd be equally well off stashing the money in a liquid mutual fund at 6.5% (treated as LTCG after 3 years) or a sovereign gold bond targeting inflation + 2.5%.
      </p>

      <h2>03 — The rankings flip: who actually wins on real return</h2>
      <p>
        When you replace advertised rates with real returns, the league table reshuffles. The banks offering 9% become genuinely superior to those offering 7%. It's not close.
      </p>

      <SvgRealReturnCompare />

      <InsightQuote>
        A ₹10 lakh FD at Unity SFB beats the same FD at SBI by ₹15,400 per year in real terms. Over 5 years, that's an extra ₹77,000 of purchasing power — for the exact same capital commitment, the exact same 1-year lock, and the exact same DICGC insurance up to ₹5 lakh.
      </InsightQuote>

      <h2>04 — Who should still use FDs in 2026 (4 personas)</h2>
      <p>
        FDs aren't wrong. They're misapplied. Here are the four people for whom FDs are genuinely the right instrument in April 2026:
      </p>

      <Persona
        title="Persona 1 — The senior citizen"
        verdict="STRONG BUY"
        color="#16A34A"
        body={<>The 0.25–1.50% senior premium, combined with the ₹50,000 deduction under Section 80TTB on interest income, pushes real returns close to 2% for seniors in most banks. A ₹30L FD at SBI senior rate (8.30%) generates ₹2.49L interest; the first ₹50K is fully deductible. In old regime, that shaves ~₹15K tax. This is the only group for whom FDs materially beat inflation after tax.</>}
      />
      <Persona
        title="Persona 2 — The emergency fund holder"
        verdict="BUY (up to 6 months expenses)"
        color="#16A34A"
        body={<>Nobody keeps their emergency fund in equity, and rightly so. Split 6 months of expenses across a 1-year FD at a stable bank (HDFC/SBI) and a liquid mutual fund. The FD gives certainty; the MF gives instant liquidity. Real return isn't the goal here — capital preservation is.</>}
      />
      <Persona
        title="Persona 3 — The sub-₹12L earner"
        verdict="BUY"
        color="#16A34A"
        body={<>If your total income is under ₹12L, you pay zero tax in new regime thanks to Section 87A. That means your 7.5% FD actually earns 7.5% post-tax. Minus 4.7% inflation, you pocket 2.8% real — decent. The rebate makes FDs work for early-career earners in a way they don't for ₹20L+ salaries.</>}
      />
      <Persona
        title="Persona 4 — The SFB sub-₹5L ladder"
        verdict="BUY"
        color="#D97706"
        body={<>If you're willing to split ₹5L each across Unity, Utkarsh, AU, Equitas and Suryoday SFBs, you lock in 8.25–9% across ₹25L with full DICGC coverage on each tranche. Post-tax real return in the 30% bracket sits at 0.8–1.6% — not great, but it's the best safe-debt yield available. Only pursue this if you actually open accounts in all 5 banks; the account-opening friction is real.</>}
      />

      <p>
        If you don't fit any of these four personas and you're still parking money in an FD, you're sub-optimising. Skip to Chapter 06 for what to use instead.
      </p>

      <h2>05 — SFB vs big bank: the trade-off matrix</h2>
      <p>
        The question isn't "are SFB FDs safe?" — DICGC insurance handles that answer for the first ₹5L. The real question is: what are you giving up for the extra 1.5–2% rate? Here's the 5 × 5 scorecard I use when picking between an SFB and a big bank for a given bucket of money.
      </p>

      <SvgDecisionMatrix />

      <p>
        <strong>The reading:</strong> a mid-tier SFB like AU or Equitas beats a top-tier private bank on <em>rate</em> and is within 1 point on <em>safety</em> (DICGC up to ₹5L equalises most of the risk). It loses meaningfully only on <em>branch access</em> and <em>loan-against-FD</em> convenience. If neither of those matters to you, the SFB is a better instrument. If you need to walk into a branch to argue over a TDS certificate, or you need to borrow against your FD in 48 hours, stay with HDFC or SBI.
      </p>

      <h2>06 — FD laddering: how to not freeze your money at one rate</h2>
      <p>
        If you're parking ₹10 lakh or more, don't book a single 1-year FD. Ladder it. Split the corpus into three equal tranches booked for 1, 2 and 3 years respectively. Every 12 months, one tranche matures, and you either spend it, roll it at the then-prevailing 3-year rate, or redirect to equity.
      </p>
      <p>
        <strong>Why this matters:</strong> rates in 2026 are at a local high. The RBI has cut repo twice since August 2025. If it cuts further, new FDs will pay less. By laddering, you protect two-thirds of your capital at today's rate for another 1–2 years while keeping one-third flexible.
      </p>
      <p>
        <strong>Three-tranche example, ₹15L corpus:</strong>
      </p>
      <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "15px", padding: "28px 30px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-soft, rgba(0,0,0,0.02))" }}>
        ₹5L at HDFC · 1-yr @ 7.00%  →  matures Apr 2027<br />
        ₹5L at AU SFB · 2-yr @ 8.25%  →  matures Apr 2028<br />
        ₹5L at Unity SFB · 3-yr @ 9.00%  →  matures Apr 2029<br /><br />
        Weighted average yield = 8.08% gross<br />
        Each April, ₹5L matures — you can rebook, withdraw, or redirect.
      </p>
      <p>
        This beats a plain 1-year 7% FD by 1.08% in gross yield while keeping annual liquidity. It beats a plain 3-year lock-in by 33% in liquidity while losing only 0.92% in yield. It's the rational middle path.
      </p>

      <h2>07 — When FDs lose: the better alternatives</h2>
      <p>
        For middle-income earners in the 20–30% bracket who are not seniors and not parking emergency funds, here are the five instruments that beat FDs on post-tax real return in 2026:
      </p>

      <SvgAlternatives />

      <p>
        <strong>Public Provident Fund (PPF):</strong> 7.10% interest, quarterly reset, completely tax-free (EEE treatment — exempt at investment, accrual and withdrawal). Real return ~2.4%. Only downside: 15-year lock-in and ₹1.5L annual cap. For anyone serious about debt allocation, maxing PPF before any FD is the default move.
      </p>
      <p>
        <strong>Target Maturity Debt Mutual Funds:</strong> a relatively new category holding government securities and AAA PSU bonds with a defined maturity date. Expected yield at purchase locks in — similar to FD — but taxation is indexation-eligible on gains held over 3 years. For a 30% bracket investor, this alone adds ~1.5% to real return vs an FD.
      </p>
      <p>
        <strong>RBI Floating Rate Savings Bonds (7.15% currently, reset semi-annually):</strong> 7-year lock but interest floats above NSC yield + 35 bps. Sovereign-backed, zero default risk, aggressive yield. Pairs well with FDs for a retirement-adjacent bucket.
      </p>
      <p>
        <strong>Arbitrage funds:</strong> taxed as equity (12.5% LTCG after 1 year) despite investing in debt-like spread trades. Real return 1.8–2.2% — higher than any post-tax FD for anyone in the 20%+ bracket. Small caveat: equity-like NAV volatility, so match holding period to redemption needs.
      </p>
      <p>
        <strong>Tax-saver FD (80C-eligible, 5-yr lock):</strong> only relevant if you still have 80C room and you want the guarantee structure. Otherwise ELSS dominates on 3-yr lock and equity returns.
      </p>

      <InsightQuote>
        An FD guarantees the nominal rupee. A debt MF tracks the real one. In a 30%-tax, 4.7%-inflation world, you should be indifferent to nominal rupees.
      </InsightQuote>

      <h2>08 — The FD calculator</h2>
      <p>
        We built an FD calculator that does the three things banks' calculators never do: (1) applies your actual tax slab, not a generic 30% default; (2) adjusts for current CPI inflation; (3) includes 80TTB / 87A treatments if applicable. It outputs three numbers side-by-side — advertised rate, post-tax rate, and real post-inflation return.
      </p>
      <p style={{ fontWeight: 700, margin: "6px 0 20px" }}>
        <Link href="/tools/fd-calculator">→ Open the FD Real Return Calculator</Link>
      </p>

      <h2>Frequently asked</h2>
      {faqs.map(({ q, a }) => (
        <details key={q} style={{ padding: "14px 16px", margin: "8px 0", borderTop: "1px solid var(--border)" }}>
          <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: "1.05rem" }}>{q}</summary>
          <p style={{ margin: "10px 0 0", color: "var(--text-muted)" }}>{a}</p>
        </details>
      ))}

      <h2>Related reading</h2>
      <ul>
        <li><Link href="/learn/savings/fd-real-return">FD real return by tax bracket — the full walk-through</Link></li>
        <li><Link href="/learn/savings/ppf-vs-fd-vs-debt-fund">PPF vs FD vs Debt MF — 15 years of returns, compared</Link></li>
        <li><Link href="/learn/savings/senior-citizen-fd">Senior citizen FD rates — how 80TTB changes everything</Link></li>
        <li><Link href="/learn/savings/tax-saving-fd-vs-elss-vs-ppf">Tax-saving FD vs ELSS vs PPF — post-tax returns</Link></li>
        <li><Link href="/learn/tax/old-vs-new-regime">Old vs New Tax Regime — FY 2025-26 breakeven</Link></li>
        <li><Link href="/tools/fd-calculator">FD Real Return Calculator</Link></li>
      </ul>

      <h2>Sources</h2>
      <ul style={{ fontSize: "14.5px" }}>
        <li>BankBazaar — consolidated bank FD rate data, accessed April 19, 2026. <a href="https://www.bankbazaar.com/fixed-deposit-rate.html" target="_blank" rel="noopener">bankbazaar.com</a></li>
        <li>Reserve Bank of India — Monetary Policy Committee resolution, April 2026 (repo rate 5.25%, CPI forecast 4.70%). <a href="https://www.rbi.org.in" target="_blank" rel="noopener">rbi.org.in</a></li>
        <li>DICGC — Deposit Insurance and Credit Guarantee Corporation, coverage limit ₹5 lakh per depositor per bank. <a href="https://www.dicgc.org.in" target="_blank" rel="noopener">dicgc.org.in</a></li>
        <li>Individual bank websites — SBI, HDFC, ICICI, Axis, Kotak, IndusInd, Unity SFB, AU SFB, Utkarsh SFB, Equitas, Bajaj Finance, Shriram Finance, as of April 19, 2026.</li>
        <li>Income Tax Department — Section 80TTB (senior citizen interest deduction) and Section 194A (TDS on interest). <a href="https://incometaxindia.gov.in" target="_blank" rel="noopener">incometaxindia.gov.in</a></li>
      </ul>

      <div style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14, marginTop: 46 }}>
        <strong>Last updated:</strong> April 20, 2026 · Reviewed by Ash K, Assure Fintech. Rates cross-verified against each bank's April 2026 website listings.<br />
        <strong>Disclaimer:</strong> This is not financial advice. FD rates change weekly. DICGC insurance is limited to ₹5 lakh per depositor per bank. NBFC fixed deposits are not DICGC-insured. Consult a financial advisor for personal allocation.
      </div>
    </article>
    </>
  );
}
