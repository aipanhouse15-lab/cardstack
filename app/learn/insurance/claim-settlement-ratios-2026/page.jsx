import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Claim Settlement Ratios 2026: The Only Insurer Metric That Actually Matters",
  description: "IRDAI 2025-26 CSR data ranked. Why CSR alone is misleading — complaint ratios, ICR for health, and rejection reasons tell the real story.",
  alternates: { canonical: "/learn/insurance/claim-settlement-ratios-2026" },
  openGraph: {
    title: "Claim Settlement Ratios 2026: The Only Insurer Metric That Actually Matters",
    description: "IRDAI 2025-26 CSR data ranked. Why CSR alone is misleading — complaint ratios, ICR for health, and rejection reasons tell the real story.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/insurance/claim-settlement-ratios-2026
// Template: Data ranking + what the numbers hide
// Color: #e11d48 | Updated: June 4, 2026

const COLOR = "#e11d48";
const UPDATED = "June 4, 2026";

const SvgLifeCSR = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Life insurance claim settlement ratios for top 10 insurers in India for 2025-26 showing HDFC Life at 99.5 percent and LIC at 98.7 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">LIFE INSURANCE CLAIM SETTLEMENT RATIO 2025-26 · IRDAI ANNUAL REPORT</text>
    {[
      { name: "Max Life", csr: 99.51, color: "#16a34a" },
      { name: "HDFC Life", csr: 99.50, color: "#16a34a" },
      { name: "Tata AIA", csr: 99.13, color: "#16a34a" },
      { name: "Bajaj Allianz", csr: 98.75, color: "#65a30d" },
      { name: "LIC", csr: 98.62, color: "#65a30d" },
      { name: "ICICI Pru", csr: 97.90, color: "#f59e0b" },
      { name: "SBI Life", csr: 97.05, color: "#f59e0b" },
      { name: "Kotak Life", csr: 96.80, color: "#f97316" },
      { name: "Canara HSBC", csr: 96.10, color: "#f97316" },
      { name: "Edelweiss", csr: 94.20, color: "#dc2626" },
    ].map(({ name, csr, color }, i) => (
      <g key={name}>
        <text x="115" y={52 + i * 24} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{name}</text>
        <rect x="120" y={38 + i * 24} width={(csr - 93) * 80} height="18" fill={color} rx="3" opacity="0.85" />
        <text x={128 + (csr - 93) * 80} y={52 + i * 24} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={color}>{csr}%</text>
      </g>
    ))}
    <text x="20" y="270" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">CSR = claims settled / (claims settled + claims repudiated + claims pending). Higher is better. But CSR above 96% is broadly safe — focus on complaint ratio next.</text>
  </svg>
);

const SvgHealthICR = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Health insurance incurred claims ratio for top 5 health insurers in India showing Star Health at 65 percent and New India at 110 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HEALTH INSURANCE INCURRED CLAIMS RATIO (ICR) 2025-26 · SWEET SPOT: 65-90%</text>
    {[
      { name: "Star Health", icr: 65, color: "#16a34a", note: "Profitable — healthy" },
      { name: "HDFC Ergo", icr: 72, color: "#16a34a", note: "Solid, well-managed" },
      { name: "Niva Bupa", icr: 78, color: "#65a30d", note: "Good balance" },
      { name: "Care Health", icr: 87, color: "#f59e0b", note: "Slightly stretched" },
      { name: "New India Assurance", icr: 112, color: "#dc2626", note: "Loss-making — may restrict" },
    ].map(({ name, icr, color, note }, i) => (
      <g key={name}>
        <text x="130" y={58 + i * 38} textAnchor="end" fontFamily="system-ui" fontSize="12" fill="var(--text)">{name}</text>
        <rect x="140" y={42 + i * 38} width={icr * 4} height="24" fill={color} rx="4" opacity="0.8" />
        <text x={148 + icr * 4} y={59 + i * 38} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{icr}% — {note}</text>
      </g>
    ))}
    <rect x="420" y="38" width="3" height="160" fill="#dc2626" strokeDasharray="4,4" />
    <text x="425" y="55" fontFamily="system-ui" fontSize="10" fill="#dc2626">100% = pays out = premiums collected</text>
    <text x="20" y="228" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">ICR above 100% means the insurer is paying more in claims than it collects in premiums — financially unsustainable. Expect premium hikes or coverage restrictions from high-ICR insurers.</text>
  </svg>
);

const SvgRejectionReasons = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Reasons for health and life insurance claim rejection in India showing non-disclosure at 44 percent as the top reason followed by policy lapse and exclusion" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHY CLAIMS GET REJECTED · TOP REASONS · IRDAI 2025-26</text>
    {[
      { reason: "Non-disclosure of pre-existing condition", pct: 44, color: "#dc2626" },
      { reason: "Policy lapsed / premium unpaid", pct: 22, color: "#f97316" },
      { reason: "Claim during waiting period", pct: 15, color: "#f59e0b" },
      { reason: "Excluded condition / procedure", pct: 11, color: "#ca8a04" },
      { reason: "Fraudulent / inflated claim", pct: 5, color: "#7c3aed" },
      { reason: "Documentation incomplete", pct: 3, color: COLOR },
    ].map(({ reason, pct, color }, i) => (
      <g key={reason}>
        <text x="310" y={52 + i * 32} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{reason}</text>
        <rect x="318" y={38 + i * 32} width={pct * 6} height="20" fill={color} rx="3" opacity="0.85" />
        <text x={326 + pct * 6} y={53 + i * 32} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{pct}%</text>
      </g>
    ))}
    <text x="20" y="230" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Non-disclosure is #1. When buying, always declare everything — pre-existing conditions, smoking, family history. A rejected claim is worse than a higher premium.</text>
  </svg>
);

const SvgComplaintRatio = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Insurance complaint ratio comparison showing complaints per 10000 policies for top life insurers revealing that high CSR and high complaints can coexist" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">COMPLAINT RATIO vs CSR · THE METRIC THAT CATCHES THE FINE PRINT TRICKS</text>
    <text x="20" y="38" fontFamily="system-ui" fontSize="12" fill="var(--text-muted)">Complaints per 10,000 policies — lower is better. High CSR + high complaints = insurer settles but makes it painful.</text>
    {[
      { name: "Tata AIA", csr: "99.1%", complaints: 2.1, color: "#16a34a" },
      { name: "HDFC Life", csr: "99.5%", complaints: 3.4, color: "#16a34a" },
      { name: "Max Life", csr: "99.5%", complaints: 4.8, color: "#65a30d" },
      { name: "LIC", csr: "98.6%", complaints: 6.2, color: "#f59e0b" },
      { name: "ICICI Pru", csr: "97.9%", complaints: 9.1, color: "#f97316" },
      { name: "SBI Life", csr: "97.1%", complaints: 11.4, color: "#dc2626" },
    ].map(({ name, csr, complaints, color }, i) => (
      <g key={name}>
        <text x="85" y={68 + i * 26} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{name}</text>
        <rect x="90" y={55 + i * 26} width={complaints * 30} height="18" fill={color} rx="3" opacity="0.8" />
        <text x={98 + complaints * 30} y={68 + i * 26} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={color}>{complaints} per 10k</text>
        <text x={98 + complaints * 30 + 100} y={68 + i * 26} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">CSR: {csr}</text>
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Tata AIA: high CSR AND low complaints = best overall insurer for term. SBI Life: lower CSR and high complaints = avoid for term.</text>
  </svg>
);

const SvgClaimProcess = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Step by step life insurance claim process flowchart from death notification to final settlement with timeline at each step" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">LIFE INSURANCE CLAIM PROCESS · WHAT TO DO STEP BY STEP</text>
    {[
      { step: "1. Notify insurer", time: "Day 1-3", detail: "Phone + email. Get claim reference number." },
      { step: "2. Submit docs", time: "Day 3-15", detail: "Death certificate, policy bond, ID proof of nominee." },
      { step: "3. Investigation", time: "Day 15-30", detail: "Insurer may investigate for claims {'<'} 3 years old." },
      { step: "4. Claim decision", time: "Day 30-45", detail: "IRDAI mandates decision within 30 days of docs." },
      { step: "5. Settlement", time: "Day 45-60", detail: "Payment via NEFT. Interest paid if insurer is late." },
    ].map(({ step, time, detail }, i) => (
      <g key={step}>
        <rect x={20 + i * 140} y="45" width="130" height="90" fill={i === 4 ? "#16a34a" : COLOR} rx="8" opacity="0.15" stroke={i === 4 ? "#16a34a" : COLOR} strokeWidth="1.5" />
        <text x={85 + i * 140} y="68" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={i === 4 ? "#16a34a" : COLOR}>{step}</text>
        <text x={85 + i * 140} y="84" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="var(--text-muted)">{time}</text>
        <text x={85 + i * 140} y="100" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text)">{detail.slice(0, 28)}</text>
        <text x={85 + i * 140} y="114" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text)">{detail.slice(28)}</text>
        {i < 4 && <path d={`M ${150 + i * 140} 90 L ${160 + i * 140} 90`} stroke="var(--border)" strokeWidth="2" />}
      </g>
    ))}
    <text x="20" y="170" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">IRDAI regulation: if insurer doesn't settle or reject within 30 days of receiving all documents, they owe you interest at 2% above bank rate. File complaint at Bima Bharosa portal if they stall.</text>
  </svg>
);

export default function PageClaimSettlementRatios() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is a good claim settlement ratio for life insurance in India?", "acceptedAnswer": { "@type": "Answer", "text": "Anything above 97% is considered good. Above 99% is excellent. However, CSR alone is not enough — also check the complaint ratio (per 10,000 policies). A company with 99% CSR but 12 complaints per 10,000 policies is essentially settling claims but making the process painful. Tata AIA and HDFC Life have the best combination of high CSR and low complaints as of 2025-26." } },
      { "@type": "Question", "name": "Is LIC's claim settlement ratio better than private insurers?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. LIC's 2025-26 CSR is 98.62%, which is good but not the best. Max Life (99.51%), HDFC Life (99.50%), and Tata AIA (99.13%) all have higher CSRs. LIC has the advantage of government backing and the widest branch network, which matters for offline claimants in tier-2 and tier-3 cities. For online term insurance buyers in metro cities, private insurers like Tata AIA often have faster claim processing." } },
      { "@type": "Question", "name": "What is ICR and why does it matter for health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "ICR (Incurred Claims Ratio) is the percentage of premium income paid out as claims. A healthy ICR is 65-90%. Below 65% may mean the insurer is being too aggressive in rejecting claims. Above 100% means the insurer is paying out more than it collects — financially unsustainable, which often leads to premium hikes or coverage restrictions at renewal. For health insurance, HDFC Ergo (72%) and Star Health (65%) have sustainable ICRs." } },
      { "@type": "Question", "name": "What is the most common reason for insurance claim rejection in India?", "acceptedAnswer": { "@type": "Answer", "text": "Non-disclosure of pre-existing conditions — 44% of all rejections. When you buy insurance, declare everything: existing illnesses, family health history, smoking or tobacco use, hazardous occupation. Even if declaring a condition raises your premium, it's far better than having a future claim rejected. Insurers use medical records, MER reports, and investigation for all claims under 3 years old." } },
      { "@type": "Question", "name": "What should I do if my insurance claim is rejected?", "acceptedAnswer": { "@type": "Answer", "text": "Step 1: Get the rejection reason in writing (insurers must provide this). Step 2: File an internal appeal with the insurer's grievance cell — IRDAI mandates a response within 15 days. Step 3: If unresolved, file a complaint at the Bima Bharosa portal (bimabharosa.irdai.gov.in) or the IRDAI Integrated Grievance Management System. Step 4: For disputes above ₹50L, approach the Insurance Ombudsman — free, and insurers take Ombudsman orders seriously." } },
      { "@type": "Question", "name": "How do I check claim settlement ratios and complaint data?", "acceptedAnswer": { "@type": "Answer", "text": "IRDAI publishes annual reports with CSR data for all insurers at irdai.gov.in. The data is typically one year behind — June 2026 data reflects FY 2025-26. Complaint ratios are also in IRDAI's annual report under 'Grievance Data'. Additionally, the Bima Bharosa portal shows active complaints and resolution statistics per insurer. This is free, authoritative data — always cross-check any comparison site's numbers against IRDAI directly." } },
      { "@type": "Question", "name": "Does a high CSR guarantee my claim will be settled?", "acceptedAnswer": { "@type": "Answer", "text": "No. CSR is a past statistic — it tells you how many claims were settled in the previous year as a percentage of total claims. Your specific claim can still be rejected for non-disclosure, fraud, exclusion clauses, or claims during waiting periods. CSR is a useful signal, not a guarantee. The best protection is: buy adequate cover, declare all pre-existing conditions honestly, pay premiums on time, and understand your policy's exclusions before you need to file." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Claim Settlement Ratios 2026: The Only Insurer Metric That Actually Matters", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
    { "@type": "ListItem", position: 4, name: "Claim Settlement Ratios 2026", item: "https://assurefintech.com/learn/insurance/claim-settlement-ratios-2026" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1D0309, #480917, #1D0309)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #e11d4822, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Insurance · Claim Settlement · Irdai Data
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Claim Settlement Ratios 2026: The Only Insurer Metric That Actually Matters
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Claim Settlement Ratios 2026</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Every insurer advertises a high CSR. But CSR alone hides a lot. The complaint ratio, the ICR for health insurance, and the rejection reasons tell a more complete story — and some insurers don't want you reading them together.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What CSR Actually Measures (And Its Blind Spots)</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Claim Settlement Ratio (CSR) is the percentage of claims settled by an insurer in a financial year out of total claims received. A CSR of 98.5% means 98.5 out of every 100 claims were paid. Sounds great. And it generally is — but with important caveats.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>CSR counts numbers of claims, not value of claims. An insurer can settle 1,000 small claims of ₹10,000 each (total ₹1 crore) and reject one large claim of ₹1 crore — and still report a 99.9% CSR. The single large rejected claim represents 50% of the payout value, but barely moves the CSR needle.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For life insurance specifically, IRDAI also publishes claim settlement by amount. This is the number you want — it captures whether the big-ticket claims are actually getting paid.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Life Insurance CSR: 2025-26 Rankings</h2>
        <SvgLifeCSR />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Max Life (99.51%) and HDFC Life (99.50%) lead the pack for 2025-26. Tata AIA (99.13%) comes third. All three have maintained high CSRs consistently over 5 years, which is more important than a single-year peak.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>LIC's 98.62% is solid for a company this large. When you process 20+ million policies and thousands of claims annually, maintaining 98%+ is operationally significant. LIC's brand trust is backed by this data, not just government ownership.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Edelweiss (94.20%) and Canara HSBC (96.10%) are at the lower end and have been inconsistent. For term insurance, which involves a claim only in the event of death, choosing an insurer with proven consistency above 98% is non-negotiable.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Health Insurance: ICR Is the Metric CSR Is Not</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For health insurance, CSR is less useful because most non-life claims don't get "rejected" — they get "modified" or "partially paid." An insurer can approve your claim and then apply room rent limits, co-payments, and sub-limits to pay you ₹1.8L on a ₹5L claim. The CSR says 100%. Your wallet says otherwise.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The more useful metric is ICR (Incurred Claims Ratio): total claims paid divided by total premium collected. This tells you the financial health of the insurer and, indirectly, how freely they pay.</p>
        <SvgHealthICR />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>New India Assurance's 112% ICR is a red flag — it's paying out more than it collects. Public sector general insurers have historically had high ICRs because they can't easily reject claims (political pressure) and have less sophisticated underwriting. Expect premium hikes at renewal or coverage modifications from New India if you're currently a policyholder.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Why Claims Get Rejected: The IRDAI Breakdown</h2>
        <SvgRejectionReasons />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Non-disclosure is the dominant rejection reason and it's entirely preventable. When you fill out a proposal form, answer every question with complete honesty. If you've had hypertension for 5 years, declare it. If you smoke occasionally, declare it. If your parent died of cancer below 60, declare it.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Insurers have the right to investigate claims under 3 years old. They will pull your hospital records, talk to your doctor, and look for discrepancies with what you declared. A ₹50,000 premium increase for a pre-existing condition is infinitely better than a ₹1 crore death claim being rejected.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Claims during waiting periods (15% of rejections) are another avoidable loss. Every health policy has a 30-day waiting period for new diseases, 1-4 years for pre-existing conditions, and sometimes disease-specific waiting periods (2 years for hernia, joints, etc.). Read these before buying, not after.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Complaint Ratio: The Signal CSR Misses</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Two insurers can have identical 99% CSRs but very different claim experiences. One settles in 7 days with minimal paperwork. The other settles in 45 days after multiple follow-ups, demands for re-submission, and partial pay-outs that require escalation to make whole. The CSR for both is 99%.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The complaint ratio captures this. IRDAI publishes complaints per 10,000 policies for every insurer. Lower is better.</p>
        <SvgComplaintRatio />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Tata AIA stands out here: 99.1% CSR AND only 2.1 complaints per 10,000 policies. This is the gold standard. SBI Life's combination of lower CSR and 11.4 complaints per 10,000 is the warning sign to watch — they settle eventually but make you work for it.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>When Your Claim Gets Delayed or Rejected: What to Do</h2>
        <SvgClaimProcess />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>IRDAI mandates that insurers acknowledge claims within 3 days, process them within 30 days of receiving all required documents, and pay interest (2% above prevailing bank rate) for delayed settlements. Most policyholders don't know about the interest penalty — insurers certainly don't advertise it.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For escalations, the Bima Bharosa portal (bimabharosa.irdai.gov.in) and the IRDAI Consumer Affairs department are your fastest paths. The Insurance Ombudsman handles disputes up to ₹50 lakh free of cost and has statutory authority to order settlements.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our related guides: <Link href="/learn/insurance/term-insurance-real-value" style={{ color: COLOR }}>term insurance real value</Link>, <Link href="/learn/insurance/health-insurance-for-parents" style={{ color: COLOR }}>health insurance for parents</Link>, and the broader <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link>.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link> · <Link href="/learn/insurance/term-insurance-real-value" style={{ color: COLOR }}>term insurance real value</Link> · <Link href="/learn/insurance/health-insurance-for-parents" style={{ color: COLOR }}>health insurance for parents</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: CSR and ICR data from IRDAI Annual Report 2025-26 (irdai.gov.in). Complaint ratios from IRDAI Integrated Grievance Management System. Not financial advice. Buy insurance from licensed intermediaries. Last verified {UPDATED}.</footer>
    </main>
    </>
  );
}
