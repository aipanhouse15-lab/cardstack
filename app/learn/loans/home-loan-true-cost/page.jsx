// app/learn/loans/home-loan-true-cost/page.jsx
// Assure Fintech — Tier 2 Article 1
// Home Loan True Cost — What Banks Hide on Your ₹50L Loan
// Author: Ash K | Last updated: April 20, 2026
// Template: Case-study / chapter-titled narrative
// Word count target: 3000+ | SVGs: 5 | Category: Loans (blue #2563EB)

import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Home Loan True Cost 2026 — What Banks Hide on Your ₹50L Loan | Assure Fintech",
  description:
    "Effective APR across SBI, HDFC, ICICI, Axis, Kotak. Processing fees, MODT, legal, insurance, prepayment — the ₹4-6 lakh of extras banks don't put on the EMI calculator.",
  keywords: [
    "home loan true cost 2026",
    "effective APR home loan India",
    "hidden home loan charges",
    "SBI HDFC ICICI home loan comparison",
    "home loan prepayment strategy",
    "home loan insurance required",
  ],
  alternates: { canonical: "https://www.assurefintech.com/learn/loans/home-loan-true-cost" },
  openGraph: {
    title: "Home Loan True Cost 2026 — The ₹4-6 lakh banks hide",
    description:
      "A ₹50L home loan at '8.5%' actually costs 9.2% effective APR. Here's the full breakdown.",
    url: "https://www.assurefintech.com/learn/loans/home-loan-true-cost",
    type: "article",
    siteName: "Assure Fintech",
    images: ["/og/home-loan-true-cost.png"],
  },
};

/* SVG 1 — Effective APR across 5 banks */
function SvgApr() {
  const rows = [
    { bank: "SBI MaxGain",      sticker: 8.50, effective: 9.15, extra: "Processing 0.35% · MODT 0.2% · Insurance bundled" },
    { bank: "HDFC Adjustable",  sticker: 8.60, effective: 9.25, extra: "Processing 0.50% · Legal ₹15K · Insurance optional" },
    { bank: "ICICI HL",         sticker: 8.65, effective: 9.42, extra: "Processing 0.75% · Valuation ₹3.5K · Insurance pushed" },
    { bank: "Axis ASHA",        sticker: 8.75, effective: 9.55, extra: "Processing 1.00% · Insurance bundled · CERSAI ₹100" },
    { bank: "Kotak Home",       sticker: 8.55, effective: 9.18, extra: "Processing 0.50% · Legal ₹12K · Insurance optional" },
  ];
  return (
    <svg viewBox="0 0 800 280" role="img" aria-label="Sticker rate vs effective APR across 5 major banks"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="400" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Sticker rate vs true effective APR (₹50L, 20-year tenure)</text>
      <text x="180" y="48" fontSize="11" fontWeight="700" fill="var(--text-muted)">Bank</text>
      <text x="410" y="48" fontSize="11" fontWeight="700" fill="var(--text-muted)">Sticker</text>
      <text x="530" y="48" fontSize="11" fontWeight="700" fill="#2563EB">Effective APR</text>
      {rows.map((r, i) => {
        const y = 70 + i * 38;
        const stickerW = (r.sticker / 10) * 60;
        const effectiveW = (r.effective / 10) * 60;
        return (
          <g key={r.bank}>
            <text x="40" y={y + 15} fontSize="12" fontWeight="700" fill="var(--text)">{r.bank}</text>
            <text x="40" y={y + 30} fontSize="10" fill="var(--text-muted)">{r.extra}</text>
            <rect x="360" y={y + 2} width={stickerW} height="14" fill="var(--border)" rx="2" />
            <text x={365 + stickerW} y={y + 13} fontSize="11" fontWeight="600" fill="var(--text)">{r.sticker.toFixed(2)}%</text>
            <rect x="360" y={y + 20} width={effectiveW} height="14" fill="#2563EB" rx="2" />
            <text x={365 + effectiveW} y={y + 31} fontSize="11" fontWeight="700" fill="#2563EB">{r.effective.toFixed(2)}%</text>
          </g>
        );
      })}
      <text x="40" y="268" fontSize="10" fill="var(--text-muted)">APR includes processing, legal, MODT stamp, and bundled insurance. Excludes optional riders. April 2026 rates.</text>
    </svg>
  );
}

/* SVG 2 — Total cost waterfall */
function SvgTotalCost() {
  const parts = [
    { label: "Principal",         amt: 50,  color: "#2563EB" },
    { label: "Interest 20 yr",    amt: 54,  color: "#3b82f6" },
    { label: "Processing fee",    amt: 0.4, color: "#f59e0b" },
    { label: "Legal + valuation", amt: 0.2, color: "#f59e0b" },
    { label: "MODT stamp",        amt: 1.0, color: "#f59e0b" },
    { label: "Insurance premium", amt: 1.8, color: "#ef4444" },
    { label: "CERSAI/misc",       amt: 0.05,color: "#f59e0b" },
  ];
  const total = parts.reduce((a, p) => a + p.amt, 0);
  return (
    <svg viewBox="0 0 800 340" role="img" aria-label="₹50L loan: breakdown of the ₹1.07 crore you actually pay"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="400" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        ₹50L loan → total outflow over 20 years (₹ lakh)
      </text>
      {parts.map((p, i) => {
        const y = 60 + i * 34;
        const w = (p.amt / 55) * 560;
        return (
          <g key={p.label}>
            <text x="190" y={y + 18} textAnchor="end" fontSize="12" fontWeight="600" fill="var(--text)">{p.label}</text>
            <rect x="200" y={y + 4} width={w} height="24" fill={p.color} opacity="0.9" rx="3" />
            <text x={210 + w} y={y + 22} fontSize="12" fontWeight="700" fill="var(--text)">
              ₹{p.amt >= 1 ? p.amt.toFixed(1) + "L" : (p.amt * 100000).toLocaleString("en-IN")}
            </text>
          </g>
        );
      })}
      <line x1="40" y1="320" x2="760" y2="320" stroke="var(--border)" />
      <text x="40" y="336" fontSize="12" fontWeight="700" fill="var(--text)">Total outflow:</text>
      <text x="760" y="336" textAnchor="end" fontSize="13" fontWeight="800" fill="#2563EB">
        ₹{total.toFixed(2)}L · {((total / 50) * 100 - 100).toFixed(0)}% above borrowed amount
      </text>
    </svg>
  );
}

/* SVG 3 — Prepayment impact */
function SvgPrepay() {
  const scenarios = [
    { label: "No prepayment",            years: 20, interest: 54 },
    { label: "+₹10K/month step-up",      years: 14, interest: 33 },
    { label: "1 extra EMI/year",         years: 17, interest: 42 },
    { label: "₹5L lumpsum year 3",       years: 17, interest: 41 },
    { label: "₹10K step-up + ₹5L yr3",   years: 12, interest: 28 },
  ];
  return (
    <svg viewBox="0 0 800 320" role="img" aria-label="Prepayment strategies: how each shortens tenure and cuts interest"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="400" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        Prepayment impact — ₹50L loan @ 8.75% starting tenure 20yr
      </text>
      <text x="240" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">Strategy</text>
      <text x="460" y="52" fontSize="11" fontWeight="700" fill="#2563EB">Tenure</text>
      <text x="620" y="52" fontSize="11" fontWeight="700" fill="#ef4444">Interest (₹L)</text>
      <text x="760" y="52" textAnchor="end" fontSize="11" fontWeight="700" fill="#16A34A">Saved</text>
      {scenarios.map((s, i) => {
        const y = 70 + i * 44;
        const yearsW = (s.years / 25) * 120;
        const intW = (s.interest / 60) * 140;
        const saved = 54 - s.interest;
        return (
          <g key={s.label}>
            <text x="40" y={y + 22} fontSize="12" fontWeight="600" fill="var(--text)">{s.label}</text>
            <rect x="420" y={y + 8} width={yearsW} height="22" fill="#2563EB" rx="3" />
            <text x={430 + yearsW} y={y + 24} fontSize="12" fontWeight="700" fill="var(--text)">{s.years}yr</text>
            <rect x="580" y={y + 8} width={intW} height="22" fill="#ef4444" opacity="0.85" rx="3" />
            <text x={590 + intW} y={y + 24} fontSize="12" fontWeight="700" fill="var(--text)">{s.interest}L</text>
            <text x="760" y={y + 24} textAnchor="end" fontSize="12" fontWeight="800" fill="#16A34A">
              {saved > 0 ? "-₹" + saved + "L" : "—"}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* SVG 4 — Hidden cost breakdown */
function SvgHiddenCosts() {
  const costs = [
    { name: "Processing fee",         pct: 0.35, rupee: 17500, freq: "One-time" },
    { name: "Legal/valuation",        pct: null, rupee: 15000, freq: "One-time" },
    { name: "MODT stamp duty",        pct: 0.20, rupee: 10000, freq: "One-time" },
    { name: "CERSAI registration",    pct: null, rupee: 100,   freq: "One-time" },
    { name: "Home loan insurance",    pct: 3.60, rupee: 180000,freq: "Year 1" },
    { name: "Life cover rider",       pct: 1.50, rupee: 75000, freq: "Year 1" },
    { name: "Late payment charges",   pct: 2.00, rupee: 800,   freq: "Per miss" },
    { name: "Prepayment (fixed)",     pct: 2.00, rupee: 100000,freq: "If fixed" },
    { name: "Prepayment (floating)",  pct: 0,    rupee: 0,     freq: "RBI: zero" },
  ];
  return (
    <svg viewBox="0 0 820 400" role="img" aria-label="All hidden home loan charges and when they hit"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <text x="410" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
        The hidden cost stack on a ₹50L loan
      </text>
      <text x="40" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">Charge</text>
      <text x="340" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">% / basis</text>
      <text x="540" y="52" fontSize="11" fontWeight="700" fill="var(--text-muted)">Rupees (₹50L loan)</text>
      <text x="780" y="52" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--text-muted)">When</text>
      {costs.map((c, i) => {
        const y = 72 + i * 34;
        return (
          <g key={c.name}>
            <rect x="30" y={y - 2} width="770" height="30" fill={i % 2 ? "var(--border)" : "transparent"} opacity="0.15" rx="3" />
            <text x="40" y={y + 18} fontSize="12" fontWeight="600" fill="var(--text)">{c.name}</text>
            <text x="340" y={y + 18} fontSize="12" fontWeight="600" fill="var(--text)">{c.pct == null ? "Flat" : c.pct + "%"}</text>
            <text x="540" y={y + 18} fontSize="12" fontWeight="700" fill="#ef4444">
              {c.rupee === 0 ? "—" : "₹" + c.rupee.toLocaleString("en-IN")}
            </text>
            <text x="780" y={y + 18} textAnchor="end" fontSize="11" fill="var(--text-muted)">{c.freq}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* SVG 5 — Calculator call-to-action visual */
function SvgCalcCta() {
  return (
    <svg viewBox="0 0 800 200" role="img" aria-label="Home loan true cost calculator preview"
         style={{ width: "100%", height: "auto", fontFamily: "system-ui" }}>
      <rect x="0" y="0" width="800" height="200" fill="#2563EB" rx="12" />
      <text x="40" y="50" fontSize="16" fontWeight="800" fill="#fff">Home Loan True Cost Calculator</text>
      <text x="40" y="78" fontSize="12" fill="#cfe0ff">Enter loan amount, tenure, sticker rate → see effective APR after all charges</text>
      <rect x="40" y="100" width="200" height="50" fill="#fff" rx="6" />
      <text x="140" y="120" textAnchor="middle" fontSize="11" fill="#2563EB">SBI MaxGain</text>
      <text x="140" y="140" textAnchor="middle" fontSize="16" fontWeight="800" fill="#2563EB">9.15%</text>
      <rect x="260" y="100" width="200" height="50" fill="#fff" rx="6" />
      <text x="360" y="120" textAnchor="middle" fontSize="11" fill="#2563EB">HDFC</text>
      <text x="360" y="140" textAnchor="middle" fontSize="16" fontWeight="800" fill="#2563EB">9.25%</text>
      <rect x="480" y="100" width="200" height="50" fill="#fff" rx="6" />
      <text x="580" y="120" textAnchor="middle" fontSize="11" fill="#2563EB">Kotak</text>
      <text x="580" y="140" textAnchor="middle" fontSize="16" fontWeight="800" fill="#2563EB">9.18%</text>
      <text x="40" y="180" fontSize="11" fill="#cfe0ff">Toggle insurance on/off, add step-up EMI, test prepayment scenarios.</text>
    </svg>
  );
}

/* Callouts — unique set for this article */
function Chapter({ n, children }) {
  return (
    <div style={{ marginTop: 32, marginBottom: 14, borderTop: "1px solid var(--border)", paddingTop: 20 }}>
      <div style={{ fontSize: 11, letterSpacing: "2px", color: "#2563EB", fontWeight: 800 }}>CHAPTER {n}</div>
      <h2 style={{ margin: "6px 0 0", fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.2 }}>{children}</h2>
    </div>
  );
}
function TrueCost({ children }) {
  return (
    <div style={{
      background: "#2563EB", color: "#fff", borderRadius: 10, padding: "18px 22px", margin: "22px 0",
      fontSize: "1.05rem",
    }}>
      <div style={{ fontSize: 11, letterSpacing: 1.5, fontWeight: 800, opacity: 0.9, marginBottom: 6 }}>THE HONEST NUMBER</div>
      {children}
    </div>
  );
}
function BankPick({ bank, verdict, tone = "good", children }) {
  const color = tone === "good" ? "#16A34A" : tone === "warn" ? "#f59e0b" : "#ef4444";
  return (
    <div style={{ border: `1px solid ${color}`, borderRadius: 8, padding: "12px 18px", margin: "14px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <strong style={{ fontSize: "1.05rem" }}>{bank}</strong>
        <span style={{ color, fontSize: 11, fontWeight: 800, letterSpacing: "1px" }}>{verdict}</span>
      </div>
      <div style={{ marginTop: 8, fontSize: 15 }}>{children}</div>
    </div>
  );
}

export default function HomeLoanTrueCostPage() {
  const faqs = [
    { q: "What is the true effective APR on an Indian home loan in 2026?",
      a: "Roughly 60-80 bps above the sticker rate once you include processing fees (0.35-1%), legal charges, MODT stamp duty, CERSAI, and bundled insurance. An 8.6% sticker rate typically works out to 9.2% effective APR." },
    { q: "Do banks charge prepayment penalty on home loans?",
      a: "Not on floating-rate home loans. RBI prohibited prepayment penalties on floating-rate retail home loans in 2012. Fixed-rate loans still attract 2% prepayment charge in most banks. Switch to floating for prepayment flexibility." },
    { q: "Is home loan insurance mandatory?",
      a: "No. It's optional despite how aggressively it's pushed. Banks bundle it into the loan disbursement to make it look mandatory. Buy a pure term plan separately for 70-80% less premium and better coverage." },
    { q: "How much can I save by prepaying my home loan early?",
      a: "On a ₹50L loan at 8.75% for 20 years, adding ₹10,000 step-up to your EMI cuts tenure to 14 years and saves about ₹21 lakh in interest. Even one extra EMI per year saves ₹12 lakh." },
    { q: "What is MODT stamp duty on a home loan?",
      a: "Memorandum of Deposit of Title Deed — a state-level stamp duty paid when the bank takes custody of your property title as security. Typically 0.1-0.5% of loan amount depending on state. Non-refundable." },
    { q: "Is SBI home loan cheaper than HDFC?",
      a: "On sticker rate, marginally (8.50% vs 8.60%). But HDFC's lower processing fee and optional insurance can make the effective APR similar. Compare on effective APR, not sticker. Use our calculator." },
  ];
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Home Loan True Cost 2026 — What Banks Hide on Your ₹50L Loan",
    description: "Effective APR, hidden charges, prepayment math and bank-by-bank comparison for Indian home loans in April 2026.",
    author: { "@type": "Person", name: "Ash K", url: "https://www.assurefintech.com/about" },
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://www.assurefintech.com/logo.png" } },
    datePublished: "2026-04-01", dateModified: "2026-04-20",
    mainEntityOfPage: "https://www.assurefintech.com/learn/loans/home-loan-true-cost",
    articleSection: "Loans", wordCount: 3200, inLanguage: "en-IN",
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.assurefintech.com/learn" },
      { "@type": "ListItem", position: 3, name: "Loans", item: "https://www.assurefintech.com/learn/loans" },
      { "@type": "ListItem", position: 4, name: "Home Loan True Cost", item: "https://www.assurefintech.com/learn/loans/home-loan-true-cost" },
    ] };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #172554, #1E3A8A, #172554)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #60A5FA22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA" }} /> Loans Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your Home Loan Is Not 8.5%. It Is Probably 9.35%.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Banks advertise the base rate. We calculate the true cost after hidden fees.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>9.35%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>True effective rate</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>3-5L</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Hidden over 20 years</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Banks compared</div></div>
          </div>
        </div>
      </div>
      <article style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 100px", fontSize: "18px", lineHeight: 1.85, color: "var(--text)" }}>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/">Home</Link> / <Link href="/learn">Learn</Link> / <Link href="/learn/loans">Loans</Link> / Home Loan True Cost
      </nav>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
        By <Link href="/about"><strong>Ash K</strong></Link> · Last updated April 20, 2026 · 13 min read
      </div>
      <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: 24 }}>
        Every bank's EMI calculator tells you a beautiful story. A ₹50L loan at "8.50%" costs ₹43,391 a month. Pay that for 240 months and you're done. Reality: you'll pay ₹1.07 crore, not ₹1.04 crore. The extra ₹3 lakh is the part nobody puts on the glossy brochure.
      </p>
      <TrueCost>
        <strong>On a 20-year ₹50 lakh loan at an 8.50% sticker rate:</strong><br />
        Interest paid: ₹54 lakh · Processing + legal + MODT: ₹42,500 · Bundled insurance: ₹1.8 lakh · Optional rider: ₹75K · Total outflow: ₹1.07 crore. Your effective APR is not 8.50% — it's 9.15%.
      </TrueCost>

      <Chapter n="01">The sticker rate is only half the story</Chapter>
      <p>
        Banks compete on the sticker rate because that's what you see on the billboard. But the sticker rate doesn't include the processing fee, the legal/valuation charges, the MODT stamp duty, or the home loan insurance the relationship manager will "forget to mention is optional." Those four additions push your effective APR up by 50 to 100 basis points on the first year of the loan.
      </p>
      <p>
        Here's how sticker vs effective APR actually plays out across the five major home loan banks in April 2026. All examples use a ₹50 lakh, 20-year loan — the most common Indian home loan profile. Figures are drawn from each bank's April 2026 schedule of charges.
      </p>
      <SvgApr />
      <p>
        Notice Axis ASHA: a 8.75% sticker rate turns into 9.55% effective because of a 1% processing fee, bundled insurance, and the CERSAI registration charge. Kotak is the stealth winner on processing cost — 0.50% fee and optional insurance — despite the slightly higher sticker than SBI.
      </p>

      <Chapter n="02">Where your ₹1.07 crore actually goes</Chapter>
      <p>
        The shocking part of a 20-year home loan isn't the interest — it's how invisible the rest of the cost is. Here's the full outflow on a ₹50L loan, broken down to the rupee.
      </p>
      <SvgTotalCost />
      <p>
        Interest is ₹54 lakh — more than the principal itself. That's the raw cost of borrowing at 8.75% for two decades. Everything else is the ₹3–4 lakh of frictional overhead: processing, stamp duty, insurance premium, legal. Most of it is one-time and charged upfront, reducing your usable disbursement.
      </p>

      <Chapter n="03">Bank-by-bank: which to pick, and why</Chapter>
      <BankPick bank="SBI MaxGain" verdict="BEST FOR LIQUIDITY" tone="good">
        Overdraft-style home loan. Park surplus in the linked account, reduce effective interest instantly. Processing 0.35% + ₹10K MODT. Bundled insurance pushable. Best for self-employed and HNIs who want flexibility.
      </BankPick>
      <BankPick bank="HDFC Adjustable" verdict="BEST FOR SPEED" tone="good">
        Fast sanction, transparent charges, optional insurance. Processing 0.50% + ₹15K legal. Effective APR ~9.25%. Best for first-time borrowers and salaried buyers.
      </BankPick>
      <BankPick bank="ICICI Home Loan" verdict="AGGRESSIVE PROCESSING" tone="warn">
        Sticker 8.65% looks competitive, but 0.75% processing (₹37,500) + harder insurance push makes effective APR cross 9.42%. Negotiate processing down to 0.35% before signing.
      </BankPick>
      <BankPick bank="Axis ASHA" verdict="WOMEN-ONLY BONUS" tone="warn">
        Female primary borrower gets a 5 bps rate concession. But full 1% processing fee and mandatory insurance bundle push effective APR to 9.55% — the highest of the five majors. Take only if the 5 bps concession outweighs the processing premium.
      </BankPick>
      <BankPick bank="Kotak Home" verdict="HIDDEN GEM" tone="good">
        0.50% processing, optional insurance, aggressive balance-transfer rates. Effective APR 9.18% on a ₹50L loan — same league as SBI MaxGain without the OD complexity. Underrated.
      </BankPick>

      <Chapter n="04">Prepayment — the math you're probably getting wrong</Chapter>
      <p>
        Every rupee you prepay in the first 8 years of a home loan saves you ~₹3 in interest over the life of the loan. That's the compounding effect working in reverse. The catch: most borrowers believe prepayment requires a lump sum. It doesn't. The single most effective strategy is a monthly <strong>step-up EMI</strong> — an extra ₹5,000–₹15,000 added to your standard EMI starting now.
      </p>
      <SvgPrepay />
      <p>
        The top row is the default scenario. The bottom row is an aggressive strategy — a ₹10,000/month step-up combined with a ₹5 lakh lumpsum from your year-3 bonus. It cuts the loan by 8 years and saves ₹26 lakh in interest. That's a 52% reduction in total interest paid for roughly ₹7 lakh of extra outflow in years 1-3.
      </p>
      <p>
        RBI prohibited prepayment penalties on floating-rate retail home loans in 2012. If your loan is floating, prepay freely. If you picked a fixed-rate product to hedge rate risk, you'll face a 2% prepayment charge — so calculate whether the locked-in rate advantage outweighs the prepayment drag before you make extra payments.
      </p>

      <Chapter n="05">The hidden cost stack, decoded</Chapter>
      <p>
        Every line item below is a charge your bank is entitled to levy, and most of them have RBI-mandated caps or disclosure requirements. Knowing the ceilings gives you leverage to negotiate.
      </p>
      <SvgHiddenCosts />
      <p>
        <strong>Processing fee:</strong> negotiable. Any bank will waive 50-100% of it for a loan over ₹75L, or for a relationship customer. Ask. If they say no, walk. There's always a competitor.
      </p>
      <p>
        <strong>Home loan insurance:</strong> optional despite the aggressive push. Banks bundle a single-premium cover (~3.6% of loan) into the loan disbursement so it "disappears" into your EMI. A comparable pure term plan from an insurer costs 70-80% less for the same cover. Buy separately.
      </p>
      <p>
        <strong>MODT stamp duty:</strong> state-level, fixed by state government, non-negotiable. Budget for ₹10K–₹25K depending on state. Maharashtra is 0.2%, Karnataka 0.5%, Delhi 0.1%.
      </p>
      <p>
        <strong>Late payment charges:</strong> 2% on the EMI amount, per miss. Quiet compounder — miss 6 EMIs in 20 years and you've paid ₹5K in late fees plus credit-score damage.
      </p>

      <Chapter n="06">Fixed vs floating — the decision framework</Chapter>
      <p>
        RBI repo rate sits at 5.25% in April 2026, having been cut twice from the 2024 peak. Home loan rates tied to the external benchmark (EBLR) have responded — most floating-rate loans reset within 90 days of a repo change. Fixed-rate products stay locked, typically at a 50-100 bps premium to floating.
      </p>
      <p>
        <strong>Go floating if:</strong> you expect rates to stay flat or fall, you want prepayment flexibility, you're early in the tenure and benefit from compounding savings.
      </p>
      <p>
        <strong>Go fixed if:</strong> you expect another rate-hike cycle within 2-3 years, you value predictability over flexibility, you are close to retirement and cannot afford rate volatility.
      </p>
      <p>
        For 90% of Indian borrowers in 2026, floating is the right choice. The only exception is someone genuinely rate-stress-sensitive — for example, a retiree with a fixed pension income.
      </p>

      <Chapter n="07">Use the calculator, not the brochure</Chapter>
      <p>
        The bank's EMI calculator gives you the principal+interest number. Our calculator adds processing, legal, MODT, insurance (toggle-able), and lets you test prepayment scenarios. It outputs the effective APR — the number the bank's sales sheet won't.
      </p>
      <SvgCalcCta />
      <p style={{ fontWeight: 700, margin: "6px 0 20px" }}>
        <Link href="/tools/loan-calculator">→ Open the Home Loan True Cost Calculator</Link>
      </p>

      <h2>Frequently asked</h2>
      {faqs.map(({ q, a }) => (
        <details key={q} style={{ padding: "14px 16px", margin: "8px 0", borderTop: "1px solid var(--border)" }}>
          <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: "1.05rem" }}>{q}</summary>
          <p style={{ margin: "10px 0 0", color: "var(--text-muted)" }}>{a}</p>
        </details>
      ))}

      <h2 style={{ marginTop: 56, marginBottom: 22 }}>Related reading</h2>
      <div style={{ display: "grid", gap: 10, marginBottom: 44 }}>
        <Link href="/learn/loans/fixed-vs-floating-rate" style={{ display: "block", padding: "26px 28px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-card, #fff)", textDecoration: "none", color: "var(--text)", fontSize: 15, fontWeight: 500, lineHeight: 1.5 }}>Fixed vs floating home loan — 10-year decision history <span style={{ color: "var(--accent-text, #7C3AED)", marginLeft: 6 }}>→</span></Link>
        <Link href="/learn/loans/prepayment-penalty-trap" style={{ display: "block", padding: "26px 28px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-card, #fff)", textDecoration: "none", color: "var(--text)", fontSize: 15, fontWeight: 500, lineHeight: 1.5 }}>Prepayment penalty trap — when banks can still charge you <span style={{ color: "var(--accent-text, #7C3AED)", marginLeft: 6 }}>→</span></Link>
        <Link href="/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" style={{ display: "block", padding: "26px 28px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-card, #fff)", textDecoration: "none", color: "var(--text)", fontSize: 15, fontWeight: 500, lineHeight: 1.5 }}>SBI vs HDFC vs ICICI home loan — 3-bank head-to-head <span style={{ color: "var(--accent-text, #7C3AED)", marginLeft: 6 }}>→</span></Link>
        <Link href="/learn/insurance/term-insurance-real-value" style={{ display: "block", padding: "26px 28px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-card, #fff)", textDecoration: "none", color: "var(--text)", fontSize: 15, fontWeight: 500, lineHeight: 1.5 }}>Why term insurance beats bundled home loan cover <span style={{ color: "var(--accent-text, #7C3AED)", marginLeft: 6 }}>→</span></Link>
        <Link href="/tools/loan-calculator" style={{ display: "block", padding: "26px 28px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-card, #fff)", textDecoration: "none", color: "var(--text)", fontSize: 15, fontWeight: 500, lineHeight: 1.5 }}>Home Loan True Cost Calculator <span style={{ color: "var(--accent-text, #7C3AED)", marginLeft: 6 }}>→</span></Link>
      </div><h2 style={{ marginTop: 56, marginBottom: 22 }}>Sources</h2>
      <div style={{ borderRadius: 12, background: "var(--bg-muted, rgba(0,0,0,0.02))", padding: "8px 24px", marginBottom: 36 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ padding: "10px 0", borderBottom: "1px solid var(--border-light, rgba(0,0,0,0.06))", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>Bank schedules of charges — SBI, HDFC, ICICI, Axis, Kotak, cross-referenced April 19, 2026.</li>
        <li style={{ padding: "10px 0", borderBottom: "1px solid var(--border-light, rgba(0,0,0,0.06))", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>RBI circular on prepayment charges on floating-rate retail loans — June 5, 2012. <a href="https://www.rbi.org.in" target="_blank" rel="noopener">rbi.org.in</a></li>
        <li style={{ padding: "10px 0", borderBottom: "1px solid var(--border-light, rgba(0,0,0,0.06))", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>BankBazaar processing-fee tracker, April 2026. <a href="https://www.bankbazaar.com" target="_blank" rel="noopener">bankbazaar.com</a></li>
        <li style={{ padding: "10px 0", borderBottom: "1px solid var(--border-light, rgba(0,0,0,0.06))", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>State stamp duty schedules — Maharashtra, Karnataka, Delhi revenue departments (MODT).</li>
        <li style={{ padding: "10px 0", borderBottom: "1px solid var(--border-light, rgba(0,0,0,0.06))", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>IRDAI data on credit life insurance vs term insurance premium differentials, 2025.</li>
        </ul>
      </div><div style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14, marginTop: 30 }}>
        <strong>Last updated:</strong> April 20, 2026 · Reviewed by Ash K, Assure Fintech.<br />
        <strong>Disclaimer:</strong> This is general financial information, not investment or legal advice. Loan terms vary by applicant profile, credit score, and negotiation. Charges quoted are standard — your bank may offer concessions. Insurance recommendations are general; evaluate based on personal health and dependents.
      </div>
    </article>
    </>
  );
}
