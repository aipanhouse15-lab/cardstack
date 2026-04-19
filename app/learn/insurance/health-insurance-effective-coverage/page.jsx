import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Health Insurance Effective Coverage: Why Your ₹10 Lakh Policy Pays Only ₹4.2 Lakh | Assure Fintech",
  description:
    "Sum-insured is a sticker price. The cheque your insurer actually writes is what matters. We peel away six layers of deductions — room rent caps, co-pay, sub-limits, proportionate clauses, consumables exclusions and CSR delays — to reveal the true value of popular Indian health plans.",
  alternates: { canonical: "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage" },
  openGraph: {
    title: "Health Insurance Effective Coverage",
    description: "Sticker vs settlement: the ₹10L that becomes ₹4.2L",
    type: "article",
    publishedTime: "2026-04-20",
    modifiedTime: "2026-04-20",
    authors: ["Ash K"],
    url: "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage",
  },
};

const PINK = "#DB2777";
const PINK_SOFT = "rgba(219,39,119,0.09)";
const GREEN = "#16A34A";
const RED = "#DC2626";
const AMBER = "#D97706";

// ------------------ SVG 1: Coverage waterfall ------------------
function SvgCoverageWaterfall() {
  const stages = [
    { lbl: "Sum insured (sticker)", val: 1000000, col: PINK, after: 1000000 },
    { lbl: "Room rent cap (2%) → proportional cut", val: -210000, col: AMBER, after: 790000 },
    { lbl: "Co-pay (20%) on all admissible amounts", val: -158000, col: AMBER, after: 632000 },
    { lbl: "Sub-limits (ICU, cataract, maternity)", val: -95000, col: AMBER, after: 537000 },
    { lbl: "Consumables / non-medical items", val: -72000, col: AMBER, after: 465000 },
    { lbl: "Pre & post-hospitalisation clause caps", val: -45000, col: AMBER, after: 420000 },
    { lbl: "Settlement (actual rupees received)", val: 420000, col: GREEN, after: 420000 },
  ];
  const max = 1000000;
  return (
    <svg viewBox="0 0 680 400" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-waterfall">
      <title id="svg-waterfall">Effective coverage waterfall: ₹10 lakh sum insured to ₹4.2 lakh settlement</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">From ₹10 lakh sticker to ₹4.2 lakh settlement, one deduction at a time</text>
      <text x="340" y="40" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Hypothetical ₹12 lakh hospitalisation on a typical mid-market indemnity policy</text>

      {stages.map((s, i) => {
        const y = 70 + i * 45;
        const w = (s.after / max) * 480;
        return (
          <g key={i}>
            <text x="15" y={y + 20} fontSize="10.5" fill="var(--text-muted)">{s.lbl}</text>
            <rect x="180" y={y + 6} width={w} height="28" fill={s.col} rx="3" opacity={i === 0 || i === stages.length - 1 ? 1 : 0.75} />
            <text x={185 + w} y={y + 24} fontSize="11.5" fontWeight="700" fill="var(--text)">₹{s.after.toLocaleString("en-IN")}</text>
            {i > 0 && i < stages.length - 1 && (
              <text x={185 + w + 100} y={y + 24} fontSize="10" fill={RED}>({(s.val / 1000).toFixed(0)}k)</text>
            )}
          </g>
        );
      })}
      <rect x="178" y="385" width="484" height="1" fill="var(--border)" />
      <text x="340" y="398" textAnchor="middle" fontSize="10" fontWeight="600" fill={RED}>Effective coverage ratio: 42% of sticker</text>
    </svg>
  );
}

// ------------------ SVG 2: Room-rent proportional reduction ------------------
function SvgRoomRentCut() {
  return (
    <svg viewBox="0 0 680 280" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-room">
      <title id="svg-room">How room rent caps cascade through the whole bill</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Exceed the room rent cap by 40%, lose 40% of everything</text>
      <text x="340" y="40" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Proportionate clause: 1% room rent cap on ₹10L = ₹10,000/day. Choose a ₹14,000 room and this fires.</text>

      {/* Bill breakdown */}
      <g transform="translate(25,65)">
        <text x="0" y="0" fontSize="12" fontWeight="700" fill="var(--text)">Itemised hospital bill (₹12 lakh, 5 days ICU + 2 days ward)</text>

        {[
          { lbl: "Room rent charges", bill: 98000, covered: 70000 },
          { lbl: "Surgeon &amp; anaesthetist fees", bill: 280000, covered: 200000 },
          { lbl: "ICU charges (consumables bundle)", bill: 320000, covered: 228571 },
          { lbl: "Medicines &amp; pharmacy", bill: 145000, covered: 103571 },
          { lbl: "Lab &amp; imaging", bill: 72000, covered: 51428 },
          { lbl: "OT charges &amp; implants", bill: 285000, covered: 203571 },
        ].map((row, i) => {
          const y = 25 + i * 30;
          const wFull = (row.bill / 320000) * 260;
          const wCov = (row.covered / 320000) * 260;
          return (
            <g key={i}>
              <text x="0" y={y + 14} fontSize="10.5" fill="var(--text-muted)" dangerouslySetInnerHTML={{ __html: row.lbl }} />
              <rect x="180" y={y + 2} width={wFull} height="20" fill="rgba(220,38,38,0.25)" stroke={RED} />
              <rect x="180" y={y + 2} width={wCov} height="20" fill={GREEN} opacity="0.6" />
              <text x={455} y={y + 14} fontSize="10" fill="var(--text-muted)">₹{row.bill.toLocaleString("en-IN")}</text>
              <text x={520} y={y + 14} fontSize="10" fontWeight="600" fill={GREEN}>→ ₹{row.covered.toLocaleString("en-IN")}</text>
            </g>
          );
        })}

        <text x="0" y="220" fontSize="11" fontWeight="600" fill={RED}>Total gap you pay out of pocket: ₹3.43 lakh — just because the room was ₹4,000/day too expensive.</text>
      </g>
    </svg>
  );
}

// ------------------ SVG 3: Co-pay impact ------------------
function SvgCoPayImpact() {
  const scenarios = [
    { age: "Age 35, no co-pay", base: 900000, copay: 0, net: 900000 },
    { age: "Age 45, 10% co-pay", base: 900000, copay: 90000, net: 810000 },
    { age: "Age 55, 20% co-pay", base: 900000, copay: 180000, net: 720000 },
    { age: "Age 65, 30% co-pay (senior)", base: 900000, copay: 270000, net: 630000 },
  ];
  return (
    <svg viewBox="0 0 680 260" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-copay">
      <title id="svg-copay">How age-linked co-pay erodes effective coverage</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Co-pay quietly adds up over decades</text>

      {scenarios.map((s, i) => {
        const y = 60 + i * 40;
        const wNet = (s.net / 900000) * 380;
        const wCopay = (s.copay / 900000) * 380;
        return (
          <g key={i}>
            <text x="15" y={y + 20} fontSize="11" fontWeight="600" fill="var(--text)">{s.age}</text>
            <rect x="200" y={y + 4} width={wNet} height="26" fill={GREEN} rx="3" />
            {s.copay > 0 && <rect x={200 + wNet} y={y + 4} width={wCopay} height="26" fill={RED} opacity="0.55" rx="3" />}
            <text x={215 + wNet + wCopay} y={y + 22} fontSize="11" fontWeight="700" fill="var(--text)">₹{s.net.toLocaleString("en-IN")} covered</text>
            {s.copay > 0 && <text x={215 + wNet + wCopay + 130} y={y + 22} fontSize="10" fill={RED}>(₹{s.copay.toLocaleString("en-IN")} out-of-pocket)</text>}
          </g>
        );
      })}
      <text x="340" y="245" textAnchor="middle" fontSize="10" fill="var(--text-muted)">On a ₹9 lakh admissible claim. Senior-citizen plans often mandate 20-30% co-pay post-60.</text>
    </svg>
  );
}

// ------------------ SVG 4: Claim Settlement Ratio ------------------
function SvgCsrChart() {
  const insurers = [
    { name: "Niva Bupa", csr: 91.6, ttl: "18 days" },
    { name: "Care (Religare)", csr: 88.4, ttl: "21 days" },
    { name: "Star Health", csr: 86.2, ttl: "26 days" },
    { name: "HDFC ERGO", csr: 93.1, ttl: "14 days" },
    { name: "ICICI Lombard", csr: 90.7, ttl: "19 days" },
    { name: "Aditya Birla", csr: 85.3, ttl: "24 days" },
  ];
  return (
    <svg viewBox="0 0 680 300" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-csr">
      <title id="svg-csr">Claim settlement ratio and average turnaround time (IRDAI FY25 data)</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Claim Settlement Ratio + settlement speed — the two you must always check</text>
      <text x="340" y="40" textAnchor="middle" fontSize="10" fill="var(--text-muted)">IRDAI Annual Report FY2024-25. Sorted by a composite score.</text>

      {insurers.map((n, i) => {
        const y = 65 + i * 34;
        const w = (n.csr / 100) * 380;
        const col = n.csr >= 90 ? GREEN : n.csr >= 87 ? AMBER : RED;
        return (
          <g key={i}>
            <text x="15" y={y + 20} fontSize="11" fontWeight="600" fill="var(--text)">{n.name}</text>
            <rect x="155" y={y + 4} width="380" height="26" fill="var(--bg-soft)" rx="3" />
            <rect x="155" y={y + 4} width={w} height="26" fill={col} rx="3" />
            <text x={165 + w} y={y + 22} fontSize="11" fontWeight="700" fill="var(--text)">{n.csr}%</text>
            <text x="560" y={y + 22} fontSize="10.5" fill="var(--text-muted)">TAT: {n.ttl}</text>
          </g>
        );
      })}
      <text x="340" y="285" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Anything below 87% is a red flag. Anything above 20 days of average settlement is a yellow one.</text>
    </svg>
  );
}

// ------------------ SVG 5: Insurer feature grid ------------------
function SvgInsurerGrid() {
  const data = [
    { n: "Niva ReAssure 2.0", sl: "-", rc: "No cap", cp: "0% under 60", wp: "24 mo" },
    { n: "HDFC Optima Secure", sl: "-", rc: "No cap", cp: "0%", wp: "24 mo" },
    { n: "Care Supreme", sl: "✓", rc: "1% cap", cp: "20% 61+", wp: "36 mo" },
    { n: "Star Comprehensive", sl: "✓", rc: "1% cap", cp: "10%", wp: "36 mo" },
    { n: "ICICI Elevate", sl: "-", rc: "No cap", cp: "0%", wp: "24 mo" },
  ];
  return (
    <svg viewBox="0 0 680 280" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-grid">
      <title id="svg-grid">Popular ₹10L indemnity plans — key terms that drive effective coverage</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">The five rows of the policy table most holders never read</text>

      <g transform="translate(25,55)">
        <rect width="620" height="26" fill={PINK} rx="4" />
        <text x="10" y="17" fontSize="11" fontWeight="700" fill="white">Policy</text>
        <text x="240" y="17" fontSize="11" fontWeight="700" fill="white">Sub-limits</text>
        <text x="330" y="17" fontSize="11" fontWeight="700" fill="white">Room rent</text>
        <text x="430" y="17" fontSize="11" fontWeight="700" fill="white">Co-pay</text>
        <text x="530" y="17" fontSize="11" fontWeight="700" fill="white">Waiting period</text>

        {data.map((r, i) => {
          const y = 30 + i * 36;
          return (
            <g key={i}>
              <rect y={y} width="620" height="34" fill={i % 2 ? "var(--bg-soft)" : "transparent"} />
              <text x="10" y={y + 22} fontSize="11" fontWeight="600" fill="var(--text)">{r.n}</text>
              <text x="260" y={y + 22} fontSize="12" fill={r.sl === "-" ? GREEN : RED}>{r.sl}</text>
              <text x="340" y={y + 22} fontSize="11" fill={r.rc.includes("No") ? GREEN : AMBER}>{r.rc}</text>
              <text x="440" y={y + 22} fontSize="11" fill={r.cp === "0%" ? GREEN : AMBER}>{r.cp}</text>
              <text x="540" y={y + 22} fontSize="11" fill={r.wp === "24 mo" ? GREEN : AMBER}>{r.wp}</text>
            </g>
          );
        })}
      </g>
      <text x="340" y="265" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Green = consumer-friendly; amber = material caveat worth modelling before buying.</text>
    </svg>
  );
}

// ------------------ Inline components ------------------
const LayerReveal = ({ n, t, pct, body }) => (
  <div style={{
    display: "flex", gap: 16, alignItems: "stretch",
    border: `1.5px solid ${PINK}`, borderRadius: 12,
    margin: "22px 0", overflow: "hidden", background: "var(--bg-soft)",
  }}>
    <div style={{
      background: PINK, color: "white",
      padding: "18px 22px",
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
      minWidth: 92,
    }}>
      <div style={{ fontSize: 10, letterSpacing: 2, fontWeight: 600, opacity: 0.85 }}>LAYER</div>
      <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1 }}>{n}</div>
      {pct && <div style={{ fontSize: 11, marginTop: 6, opacity: 0.95 }}>-{pct}</div>}
    </div>
    <div style={{ padding: "16px 18px", flex: 1 }}>
      <h3 style={{ margin: 0, fontSize: 18, color: PINK, fontWeight: 700 }}>{t}</h3>
      <div style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.6, color: "var(--text)" }}>{body}</div>
    </div>
  </div>
);

const WardBox = ({ children }) => (
  <aside style={{
    background: "var(--bg-soft)", border: "1px dashed var(--border)",
    borderRadius: 10, padding: "24px 26px", margin: "18px 0",
    fontSize: 13.5, lineHeight: 1.55, color: "var(--text)",
  }}>
    <strong style={{ color: PINK }}>Ward-check: </strong>{children}
  </aside>
);

const CsrCallout = ({ children }) => (
  <div style={{
    border: `1.5px solid ${AMBER}`, background: "rgba(217,119,6,0.08)",
    borderRadius: 10, padding: "24px 26px", margin: "18px 0",
    fontSize: 14, lineHeight: 1.6, color: "var(--text)",
  }}>
    <span style={{
      display: "inline-block", padding: "3px 9px",
      background: AMBER, color: "white", fontSize: 10, fontWeight: 700,
      borderRadius: 4, letterSpacing: 1.5, marginRight: 10, verticalAlign: "middle",
    }}>CSR NOTE</span>
    {children}
  </div>
);

const InsurerTag = ({ name }) => (
  <span style={{
    display: "inline-block", padding: "3px 10px",
    background: PINK_SOFT, color: PINK, borderRadius: 4,
    fontSize: 12, fontWeight: 600, marginRight: 6,
  }}>{name}</span>
);

// ------------------ Page ------------------
export default function HealthInsuranceEffectivePage() {
  const published = "2026-04-20";
  const modified = "2026-04-20";

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Health Insurance Effective Coverage: Why Your ₹10 Lakh Policy Pays Only ₹4.2 Lakh",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/about" },
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage",
    description:
      "We peel away six layers of deductions — room rent caps, co-pay, sub-limits, proportionate clauses, consumables exclusions, CSR — to show the real value of popular Indian health plans.",
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is effective coverage in health insurance?", acceptedAnswer: { "@type": "Answer", text: "Effective coverage is the actual rupee amount your insurer will pay out on a realistic large claim, after all policy clauses — room rent caps, co-pay, sub-limits, consumable exclusions and proportionate clauses — are applied. On a typical ₹10 lakh indemnity plan, effective coverage often lands between 40 and 60 percent of the sticker sum insured." } },
      { "@type": "Question", name: "How does a proportionate clause work?", acceptedAnswer: { "@type": "Answer", text: "If your chosen hospital room exceeds the policy's room-rent cap, the insurer applies the ratio of eligible to actual room rent to every other head of the bill. A 40 percent over-cap room produces a 40 percent haircut on the surgeon's fee, pharmacy, lab tests and OT charges. It is the single biggest silent deduction in Indian health insurance." } },
      { "@type": "Question", name: "Which policies have no sub-limits and no room rent cap?", acceptedAnswer: { "@type": "Answer", text: "As of April 2026, HDFC ERGO Optima Secure, Niva Bupa ReAssure 2.0 and ICICI Lombard Elevate are the main ₹10 lakh indemnity plans sold without sub-limits or room-rent caps. Premiums are 15-25 percent higher than capped equivalents but the effective coverage jump more than justifies the difference." } },
      { "@type": "Question", name: "What is a claim settlement ratio and why does it matter?", acceptedAnswer: { "@type": "Answer", text: "Claim Settlement Ratio (CSR) is the percentage of claims the insurer settled out of the total received in a financial year, published annually by IRDAI. A policy with a sub-87 percent CSR is statistically more likely to reject or delay your claim than a peer with a 91 percent CSR — even with identical policy wording." } },
      { "@type": "Question", name: "Do top-up plans fix effective coverage gaps?", acceptedAnswer: { "@type": "Answer", text: "Only partly. A super top-up sits above a deductible threshold and pays from there. It solves the sum-insured shortfall but inherits the same room-rent, co-pay and sub-limit clauses from the base plan, so the effective coverage ratio on the top-up layer is usually similar to the base." } },
      { "@type": "Question", name: "Is cashless hospitalisation always better than reimbursement?", acceptedAnswer: { "@type": "Answer", text: "In most cases, yes — cashless means the insurer settles directly with the hospital under the pre-agreed empanelment rates, which reduces the scope for sub-limit arguments. However, reimbursement is your right under the IRDAI Health Insurance Regulations 2016 and cannot be denied if pre-authorisation is obtained." } },
      { "@type": "Question", name: "How often should I review my health insurance policy?", acceptedAnswer: { "@type": "Answer", text: "Annually at renewal, and immediately on three life events: marriage, birth of a child, or diagnosis of a chronic condition. The Indian IRDAI also permits portability between insurers within 45 days of policy expiry with no loss of waiting-period credit — use this window to switch if your effective coverage is weak." } },
    ],
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn" },
      { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance" },
      { "@type": "ListItem", position: 4, name: "Effective Coverage", item: "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #4A1942, #831843, #4A1942)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #F472B622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F472B6" }} /> Insurance Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your ₹10L Health Insurance Actually Covers ₹4.2L
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Room rent caps, co-pay, sub-limits. We calculated what your policy really pays.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹10L</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Sum insured</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹4.2L</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Effective coverage</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>58%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Lost to fine print</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "32px 20px 80px", color: "var(--text)", lineHeight: 1.7, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Script id="jsonld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="jsonld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> ›{" "}
        <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> ›{" "}
        <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> › <span>Effective Coverage</span>
      </nav>

      <span style={{
        display: "inline-block", padding: "4px 10px", background: PINK_SOFT,
        color: PINK, fontSize: 11, letterSpacing: 2, fontWeight: 700, borderRadius: 4,
      }}>
        HEALTH INSURANCE — DEEP DIVE
      </span>

      <p style={{ fontSize: 19, color: "var(--text-muted)", marginBottom: 22 }}>
        Sum insured is a sticker. What the insurer actually cuts you a cheque for on the day of a real
        hospital bill is a different number — almost always smaller. Often by half. This piece peels away
        the six layers between the two, shows exactly which policies keep them thin, and tells you how to
        pick one that pays closer to what the banner says.
      </p>

      <div style={{ display: "flex", gap: 14, fontSize: 13, color: "var(--text-muted)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "10px 0", marginBottom: 28 }}>
        <span>By <strong>Ash K</strong></span>
        <span>•</span>
        <span>Last updated April 20, 2026</span>
        <span>•</span>
        <span>13 min read</span>
      </div>

      <figure style={{ margin: "20px 0 30px" }}>
        <SvgCoverageWaterfall />
      </figure>

      <p>
        The waterfall above is the spine of this article. Start at the top with ₹10 lakh of nominal sum
        insured and walk down: each layer is a clause buried in your policy that shaves the number a little
        smaller. By the time you reach settlement, 58 percent of the sum insured has been lost — not because
        the insurer behaved badly, but because every deduction was legitimate and documented in the policy
        wording you didn't read.
      </p>

      <p>
        This matters because effective coverage — the rupees the insurer actually pays — is what protects
        you. Sticker coverage only protects the brochure. The rest of the article takes each layer in turn,
        quantifies it on a real hospital bill, and shows which products keep each specific layer as thin as
        possible.
      </p>

      <LayerReveal
        n="1"
        t="Room rent cap: the proportionate penalty"
        pct="21%"
        body={<>
          The single most expensive clause in Indian health insurance is the room-rent cap, usually set at
          1-2 percent of sum insured per day. On a ₹10 lakh policy that is ₹10,000-20,000 per day. If your
          hospital room costs more, the insurer doesn't just trim the room rent — it applies the gap as a
          proportional penalty on <strong>every other line</strong> of the bill. Surgeon, OT, ICU, pharmacy,
          lab. Everything.
        </>}
      />

      <figure style={{ margin: "18px 0" }}>
        <SvgRoomRentCut />
      </figure>

      <p>
        On a ₹12 lakh admission with a 1 percent room rent cap, choosing a ₹14,000/day room over the
        policy's ₹10,000/day ceiling doesn't cost you ₹4,000 a day. It costs 28.6 percent of the entire
        bill — roughly ₹3.43 lakh. Hospital room upgrades are the single most common reason Indian
        claimants end up paying six-figure sums out of their own pocket despite carrying "comprehensive"
        cover.
      </p>

      <WardBox>
        Before you buy any policy, ask one question: does it have a room rent cap? If yes, walk. The
        premium premium for an uncapped product — <InsurerTag name="HDFC Optima Secure" /><InsurerTag name="Niva ReAssure 2.0" /><InsurerTag name="ICICI Elevate" /> — is 15-25 percent higher on a ₹10L plan,
        and it pays itself back on a single claim. A 1% cap on sum insured is the quietest way a policy
        becomes useless when it matters most.
      </WardBox>

      <LayerReveal
        n="2"
        t="Co-pay: the silent haircut that grows with age"
        pct="15-30%"
        body={<>
          Co-pay means the insurer pays a percentage, and you pay the rest. Most modern plans have zero
          co-pay up to age 60. After that, senior-citizen plans often mandate 20 or 30 percent co-pay
          regardless of the hospital, the surgery or the amount. On a ₹9 lakh admissible bill at age 65,
          a 30 percent co-pay sends ₹2.7 lakh back to you to pay yourself.
        </>}
      />

      <figure style={{ margin: "18px 0" }}>
        <SvgCoPayImpact />
      </figure>

      <p>
        Co-pay is particularly insidious because it grows invisibly — you buy the policy at 35, never pay
        a rupee of co-pay for the first 20 years, and then at renewal after age 60 the clause silently
        activates. This is why a policy's co-pay ladder matters more than its zero-co-pay opening line.
        Policies from <InsurerTag name="Star Senior Red Carpet" /> have 30% co-pay post-61. Policies like <InsurerTag name="Niva Senior First" /> have 20%. A 10-percentage-point gap, repeated over a
        25-year senior phase, is lakhs of rupees in difference on any hospitalisation.
      </p>

      <LayerReveal
        n="3"
        t="Sub-limits on specific procedures"
        pct="8-12%"
        body={<>
          Cataract surgery, maternity, knee replacement, cyberknife, even ICU — each can have its own
          ceiling. Care Supreme caps cataract at ₹40,000 per eye; a typical urban cataract bill is
          ₹65,000-85,000. Star Comprehensive caps knee replacement at ₹2 lakh when the typical cost is
          ₹3-4 lakh. These limits don't scale with sum insured — a ₹40,000 cap on cataract is the same
          on a ₹5L plan as on a ₹25L plan.
        </>}
      />

      <p>
        The moment you have a specific procedure in mind — and most families do, eventually — the
        sub-limit becomes the binding constraint. A ₹25 lakh policy with a ₹40,000 cataract sub-limit is
        effectively a ₹40,000 cataract policy the day you need that surgery. <InsurerTag name="HDFC Optima Secure" /> and <InsurerTag name="Niva ReAssure 2.0" /> are among the few plans that drop
        sub-limits entirely. This is worth more than most lay shoppers realise.
      </p>

      <LayerReveal
        n="4"
        t="Consumables and non-medical items"
        pct="5-8%"
        body={<>
          Until 2020, hospital bills routinely showed 10-15 percent of the total as "consumables" —
          gloves, syringes, diapers, administration charges — all non-payable under standard policies.
          IRDAI's October 2020 master circular mandated that these be paid on policies adding a
          "consumables cover" rider. Without the rider, this layer still bites.
        </>}
      />

      <p>
        If your policy is a legacy contract from 2015-2019, it almost certainly excludes consumables by
        default and does not allow a rider add-on. A port to a post-2020 product at renewal recovers this
        layer entirely. <InsurerTag name="Aditya Birla Activ" /> and <InsurerTag name="Manipal Cigna" />{" "}
        include consumables in their base wording now. Always check the rider section of your policy
        document for the phrase "non-medical expenses" to see what's in and what's out.
      </p>

      <LayerReveal
        n="5"
        t="Pre and post-hospitalisation clause caps"
        pct="4-6%"
        body={<>
          Diagnostics before admission and follow-up visits after are usually covered — but typically for a
          fixed window (30 and 60 days is standard; 90 and 180 is better) and often capped at 5-10 percent
          of the sum insured. The capped version of this rider is why chemotherapy and dialysis patients so
          often find themselves under-covered even on large plans.
        </>}
      />

      <p>
        A cancer patient on a 60-day post-hospitalisation window with a ₹1 lakh cap can exhaust the cover
        in three cycles of chemotherapy, even though the base plan shows ₹10 lakh still "available". The
        fix is straightforward: pick a product with uncapped pre-and-post, typically lasting 60 and 180
        days respectively. <InsurerTag name="HDFC Optima Secure" /> and <InsurerTag name="Niva ReAssure 2.0" /> score well here as well.
      </p>

      <LayerReveal
        n="6"
        t="Claim delays and the CSR question"
        pct="Settlement velocity"
        body={<>
          Even a generous policy that will eventually pay every rupee of its effective coverage can still
          hurt you if the cheque arrives six months after the hospital. Reimbursement claims in India take
          an average of 21 days to settle, but the spread between the best and worst insurers is enormous —
          and you find out only after you need it.
        </>}
      />

      <figure style={{ margin: "18px 0" }}>
        <SvgCsrChart />
      </figure>

      <CsrCallout>
        IRDAI data for FY25 shows a CSR range of 85.3-93.1 percent across the top 15 insurers. The gap
        translates to one rejected claim in every 13 for the bottom of the range, against one in every 16
        for the top. Over a 30-year policy lifetime and 2-3 major claims, that is the difference between
        smooth and catastrophic.
      </CsrCallout>

      <h2 style={{ fontSize: 28, marginTop: 42, marginBottom: 16, fontWeight: 700 }}>Putting it all together: the plans that actually keep effective coverage close to sticker</h2>

      <figure style={{ margin: "18px 0" }}>
        <SvgInsurerGrid />
      </figure>

      <p>
        Three products stand out in April 2026 as genuinely delivering effective coverage close to sticker:
        <InsurerTag name="HDFC Optima Secure" />, <InsurerTag name="Niva ReAssure 2.0" /> and <InsurerTag name="ICICI Lombard Elevate" />. All three eliminate room rent caps, drop sub-limits, keep
        co-pay at zero below age 60, and pair with a strong settlement ratio. Premium is 15-25 percent
        higher than the capped competitors. That premium spread is recovered on a single large claim.
      </p>

      <p>
        The mid-tier products — <InsurerTag name="Care Supreme" />, <InsurerTag name="Star Comprehensive" />, <InsurerTag name="Aditya Birla Activ Fit" /> — retain some clauses but add strong restoration
        and no-claim-bonus mechanics. These are fine for applicants who prioritise premium savings and
        expect only smaller claims. The moment a big surgery or ICU admission is realistic (family history
        of cardiac events, diabetes, cancer), you are under-covered despite the sticker.
      </p>

      <h2 style={{ fontSize: 28, marginTop: 42, marginBottom: 16, fontWeight: 700 }}>How to read your own policy in 15 minutes</h2>

      <p>
        Open the Policy Wording PDF that arrived with your renewal. Every Indian indemnity policy has
        standardised section headers now under IRDAI's 2020 standardisation rule. Check, in order:
      </p>

      <p>
        <strong>Section 2 — "Coverage Limits".</strong> Look for the words "room rent" and "ICU".
        Anything less than "actual / no cap" fires the proportionate clause we examined in Layer 1.
      </p>

      <p>
        <strong>Section 3 — "Sub-limits and caps".</strong> Scroll to the procedure-specific sub-limits
        table. If cataract, maternity or knee replacement has a rupee cap, that's a binding constraint.
      </p>

      <p>
        <strong>Section 4 — "Co-pay".</strong> Look for any percentage. Most modern plans will say
        "Nil" up to age 60 and then something — usually 20 percent — above that. The "after 60" portion
        is what you are buying for your future self, so matter more than the current zero.
      </p>

      <p>
        <strong>Section 5 — "Waiting periods".</strong> Specific-disease waiting periods of 24 months
        are standard. A 36-month waiting period on hypertension, diabetes or cardiac ailments is worth
        avoiding. Portability to a 24-month product at your next renewal is allowed under IRDAI rules
        and your accumulated waiting credits carry over.
      </p>

      <p>
        <strong>Section 6 — "Non-medical expenses / consumables".</strong> Confirm consumables are in
        the base coverage. If they're a paid rider that isn't active on your policy, your effective
        coverage is automatically 5-8 percent lower than stated.
      </p>

      <p>
        These five sections, in fifteen minutes, will tell you 80 percent of what you need to know about
        your real protection. Pair that with a quick look at the insurer's current-year CSR on the{" "}
        <a href="https://irdai.gov.in/annual-reports" target="_blank" rel="noopener noreferrer" style={{ color: PINK }}>IRDAI Annual Report</a> and you have a comprehensive picture of how the policy
        will actually perform when your family needs it.
      </p>

      <h2 style={{ fontSize: 28, marginTop: 42, marginBottom: 16, fontWeight: 700 }}>When to top up vs when to upgrade</h2>

      <p>
        Plenty of holders with a ₹5 lakh base plan ask whether they should add a ₹20 lakh super top-up or
        upgrade to a ₹20 lakh base. The math usually favours the super top-up on premium alone — a ₹20L
        super top-up over a ₹5L deductible can cost ₹4,000-5,000/year, while a clean ₹20L base is
        ₹15,000-20,000. But if your ₹5L base has weak terms (room rent cap, sub-limits, 30 percent
        co-pay for seniors), the super top-up inherits most of those weaknesses on the layer above the
        deductible. The cheap route becomes expensive in a real claim.
      </p>

      <p>
        The honest answer: if your base plan is already from the Optima Secure / ReAssure / Elevate tier,
        a super top-up on top is the right financial move. If your base is capped, an outright upgrade
        with portability (carrying over your waiting periods) beats stacking a top-up that mirrors the
        weakness. <Link href="/learn/insurance/super-top-up-vs-upgrade" style={{ color: PINK, fontWeight: 600 }}>We've modelled both paths in detail here</Link>.
      </p>

      <h2 style={{ fontSize: 28, marginTop: 42, marginBottom: 16, fontWeight: 700 }}>Questions we get most</h2>

      <div>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Is a corporate group policy enough?</h3>
        <p>Rarely. Corporate policies average ₹3-5 lakh and typically carry a 10-20 percent co-pay plus
          capped room rent. Effective coverage on a group policy is often 40-50 percent of sticker.
          Treat it as supplementary, not your primary cover.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Does a cashless facility change effective coverage?</h3>
        <p>Yes, positively. Under pre-agreed rates, the hospital cannot inflate the bill under consumables
          or administration heads, and the insurer can't contest the sub-limit interpretation after the
          fact. Effective coverage on a cashless claim is typically 5-8 percent higher than on the same
          claim via reimbursement.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>What is the minimum sensible sum insured for a family of four?</h3>
        <p>₹15 lakh base plus ₹25-50 lakh super top-up, in April 2026. Urban surgical and cardiac procedure
          costs routinely cross ₹10 lakh. A ₹5 lakh base with a big top-up only works if the base has
          strong wording and a low enough deductible for the top-up to meaningfully kick in.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>How do restoration benefits affect effective coverage?</h3>
        <p>Restoration replenishes the sum insured within a policy year once exhausted, but never covers
          the same illness twice in the same year. So a family that has two unrelated hospitalisations
          benefits; a single catastrophic illness that breaches the limit does not. Useful but not a
          sub-limit substitute.</p>
      </div>

      <div style={{
        marginTop: 48, padding: "24px 22px", background: "var(--bg-soft)",
        borderRadius: 12, borderLeft: `4px solid ${PINK}`,
      }}>
        <h3 style={{ marginTop: 0, fontSize: 20, fontWeight: 700 }}>Find your policy's effective coverage ratio</h3>
        <p style={{ marginBottom: 12 }}>
          Paste your policy clauses into our free effective-coverage calculator and we'll model a
          real ₹12 lakh admission against your specific wording. The result is usually 20-40 percent
          lower than sticker. Fix what's fixable, or port to a better product at renewal.
        </p>
        <Link href="/tools/health-coverage-calculator" style={{
          display: "inline-block", padding: "10px 18px", background: PINK,
          color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 600,
        }}>
          Calculate effective coverage →
        </Link>
      </div>

      <div style={{ marginTop: 30, padding: "16px 18px", background: "var(--bg-soft)", borderRadius: 10, fontSize: 13, color: "var(--text-muted)" }}>
        <strong>Data &amp; methodology:</strong> Claim Settlement Ratios sourced from IRDAI Annual
        Report FY2024-25 (published December 2025). Policy clauses reviewed against the insurer's
        publicly available Policy Wording documents current to 1 April 2026. Waterfall calculation uses
        a representative ₹12 lakh hospital bill with 5 days ICU, surgical procedure, and 2 days ward
        modelled on average private-hospital rates in Mumbai, Delhi and Bengaluru.
      </div>

      <div style={{ marginTop: 18, fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>
        This article is editorial, not financial or insurance advice. Policy terms and pricing change;
        always read the current Policy Wording document before purchase or renewal. Assure Fintech has no
        commercial affiliation with any insurer listed; our rankings reflect publicly available IRDAI
        data and policy wording analysis only.
      </div>

      <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)", fontSize: 13, color: "var(--text-muted)" }}>
        Reviewed by the Assure Fintech insurance research desk. Originally published April 20, 2026. Next
        review scheduled for December 2026, aligned to the IRDAI FY26 CSR publication window.
      </div>

      <div style={{ marginTop: 40, paddingTop: 22, borderTop: "1px solid var(--border)" }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Read next</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.9 }}>
          <li>→ <Link href="/learn/insurance/super-top-up-vs-upgrade" style={{ color: PINK }}>Super top-up vs upgrade: the math, finally</Link></li>
          <li>→ <Link href="/learn/insurance/family-floater-vs-individual" style={{ color: PINK }}>Family floater vs individual: the under-discussed trade-offs</Link></li>
          <li>→ <Link href="/learn/insurance/critical-illness-explained" style={{ color: PINK }}>Critical illness plans: where they fit and where they don't</Link></li>
          <li>→ <Link href="/blog/irdai-2026-health-rule-changes" style={{ color: PINK }}>IRDAI 2026: what changed for policyholders</Link></li>
        </ul>
      </div>
    </main>
    </>
  );
}
