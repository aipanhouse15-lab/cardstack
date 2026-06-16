import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "HRA Calculation: The Exact Formula With Real Numbers for Mumbai, Delhi, and Bangalore",
  description: "HRA is one of the largest tax exemptions for salaried employees. Most people miscalculate it. City-wise examples with the exact 3-step formula.",
  alternates: { canonical: "/learn/tax/hra-calculation" },
  openGraph: {
    title: "HRA Calculation: The Exact Formula With Real Numbers for Mumbai, Delhi, and Bangalore",
    description: "HRA is one of the largest tax exemptions for salaried employees. Most people miscalculate it. City-wise examples with the exact 3-step formula.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/tax/hra-calculation
// Template: Step-by-step how-to with real city examples
// Color: #16a34a | Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

const SvgHRAFormula = () => (
  <svg viewBox="0 0 720 247" role="img" aria-label="HRA exemption formula showing it is minimum of three values: actual HRA received, 50 percent of basic plus DA for metro or 40 percent for non-metro, and actual rent paid minus 10 percent of basic plus DA" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HRA EXEMPTION = MINIMUM OF THESE 3 VALUES (Old Regime Only)</text>
    {[
      { label: "A) Actual HRA received from employer", formula: "From your salary slip", color: COLOR },
      { label: "B) 50% of (Basic + DA) — Metro | 40% — Non-Metro", formula: "Metro: Mumbai/Delhi/Kolkata/Chennai | Non-Metro: all other cities", color: "#f59e0b" },
      { label: "C) Rent paid minus 10% of (Basic + DA)", formula: "Annual rent paid — 10% × (Basic + DA) annual", color: "#7c3aed" },
    ].map(({ label, formula, color }, i) => (
      <g key={label}>
        <rect x="20" y={45 + i * 54} width="680" height="42" fill={color} rx="6" opacity="0.25" stroke={color} strokeWidth="1" />
        <text x="30" y={64 + i * 54} fontFamily="system-ui" fontSize="13" fontWeight="700" fill={color}>{label}</text>
        <text x="30" y={80 + i * 54} fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">{formula}</text>
      </g>
    ))}
    <rect x="220" y="205" width="280" height="28" fill={COLOR} rx="4" opacity="0.9" />
    <text x="360" y="223" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">Exempt HRA = Min (A, B, C)</text>
  </svg>
);

const SvgCityExamples = () => (
  <svg viewBox="0 0 720 299" role="img" aria-label="HRA calculation examples for Rahul in Mumbai Priya in Hyderabad and Amit in Pune showing step by step calculation with different basic salaries and rent amounts" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WORKED EXAMPLES · THREE CITIES · FY 2025-26</text>
    {[
      {
        name: "Rahul, Mumbai (Metro)",
        basic: "₹60,000/mo", hra: "₹30,000/mo", rent: "₹28,000/mo",
        a: "₹3,60,000", b: "₹3,60,000 (50%)", c: "₹2,64,000",
        exempt: "₹2,64,000", tax30: "₹79,200",
        color: COLOR
      },
      {
        name: "Priya, Hyderabad (Non-Metro)",
        basic: "₹50,000/mo", hra: "₹20,000/mo", rent: "₹18,000/mo",
        a: "₹2,40,000", b: "₹2,40,000 (40%)", c: "₹1,56,000",
        exempt: "₹1,56,000", tax30: "₹46,800",
        color: "#f59e0b"
      },
      {
        name: "Amit, Pune (Non-Metro)",
        basic: "₹40,000/mo", hra: "₹16,000/mo", rent: "₹15,000/mo",
        a: "₹1,92,000", b: "₹1,92,000 (40%)", c: "₹1,32,000",
        exempt: "₹1,32,000", tax30: "₹39,600",
        color: "#7c3aed"
      },
    ].map(({ name, basic, hra, rent, a, b, c, exempt, tax30, color }, i) => (
      <g key={name}>
        <rect x="20" y={38 + i * 78} width="680" height="70" fill={color} rx="6" opacity={i % 2 === 0 ? 0.2 : 0.15} stroke={color} strokeWidth="1" />
        <text x="30" y={55 + i * 78} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{name}</text>
        <text x="30" y={70 + i * 78} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Basic: {basic} · HRA from employer: {hra} · Rent paid: {rent}</text>
        <text x="30" y={84 + i * 78} fontFamily="system-ui" fontSize="10" fill="var(--text)">A: {a} · B: {b} · C: {c}</text>
        <text x="30" y={98 + i * 78} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={color}>Exempt: {exempt} · Tax saved (30%): {tax30}</text>
      </g>
    ))}
    <text x="20" y="275" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Rahul and Priya's exempt HRA is limited by component C (rent - 10% of basic). This is why paying more rent (within reason) increases HRA exemption. But only if rent receipts are documented.</text>
  </svg>
);

const SvgDocumentation = () => (
  <svg viewBox="0 0 720 218" role="img" aria-label="HRA documentation requirements showing rent receipts PAN of landlord if rent above 1 lakh and rental agreement required to claim HRA exemption" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">DOCUMENTATION REQUIRED FOR HRA CLAIM · WHAT YOUR EMPLOYER NEEDS</text>
    {[
      { doc: "Rent receipts", req: "Monthly (or quarterly). Landlord signature, date, amount, property address. Revenue stamp if cash.", status: "REQUIRED", color: COLOR },
      { doc: "Rental agreement", req: "Registered or notarized, with rent amount and property address matching receipts.", status: "REQUIRED", color: COLOR },
      { doc: "Landlord's PAN", req: "Mandatory if annual rent exceeds ₹1,00,000 (₹8,333/month). Submit to employer.", status: "REQUIRED >₹1L", color: "#f59e0b" },
      { doc: "Payment proof", req: "Bank transfer receipts preferred. Cash payments are riskier in IT assessment. Use UPI/NEFT.", status: "RECOMMENDED", color: "#65a30d" },
      { doc: "Employer declaration", req: "HRA declaration to HR typically required in April and at year-end (December/January).", status: "EMPLOYER ASKS", color: "#ca8a04" },
    ].map(({ doc, req, status, color }, i) => (
      <g key={doc}>
        <rect x="20" y={35 + i * 32} width={700} height="26" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={52 + i * 32} fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{doc}</text>
        <rect x="200" y={37 + i * 32} width="120" height="22" fill={color} rx="3" opacity="0.85" />
        <text x="260" y={52 + i * 32} textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#fff">{status}</text>
        <text x="330" y={52 + i * 32} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{req.slice(0, 70)}</text>
      </g>
    ))}
    <text x="20" y="194" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Always pay rent via bank transfer (NEFT/UPI). Cash payments are harder to prove in an IT assessment. Keep 3 years of rent receipts and rental agreement even after changing residence.</text>
  </svg>
);

const SvgHRAvsHomeLoan = () => (
  <svg viewBox="0 0 720 214" role="img" aria-label="Comparison of claiming HRA exemption versus home loan deductions showing that both can be claimed simultaneously if you rent in one city and own property in another" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">CAN YOU CLAIM BOTH HRA AND HOME LOAN DEDUCTIONS?</text>
    <rect x="20" y="38" width="680" height="50" fill="var(--surface, #f0fdf4)" stroke={COLOR} strokeWidth="1.5" rx="8" />
    <text x="30" y="58" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>YES — if you rent in the city you work and own property in a different city.</text>
    <text x="30" y="78" fontFamily="system-ui" fontSize="7" fill="var(--text)">Example: Neha owns a flat in Nagpur (rented out, no self-occupation) but lives and works in Pune on rent. She can claim HRA on Pune rent AND Section 24(b) on home loan interest of her Nagpur property.</text>
    <rect x="20" y="100" width="680" height="50" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" rx="8" />
    <text x="30" y="120" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">NOT ALLOWED — if you own property in the SAME city you're claiming HRA for.</text>
    <text x="30" y="140" fontFamily="system-ui" fontSize="7" fill="var(--text)">Example: Owning a flat in Bangalore but renting nearby to avoid commute. The IT department can question the need for renting — you'll need to show genuine reason (under construction, occupied by parents, etc.).</text>
    <text x="20" y="190" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Always consult a CA for the same-city situation. The IT department scrutinizes HRA + home loan combinations in the same city closely. Genuine scenarios (parental occupation, under-construction flat) are generally accepted.</text>
  </svg>
);

const SvgTaxSavedByCity = () => (
  <svg viewBox="0 0 720 217" role="img" aria-label="Annual tax saved from HRA exemption by city for different salary and rent levels showing Mumbai saving most due to metro 50 percent formula" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ANNUAL TAX SAVING FROM HRA · 30% SLAB · BY CITY AND SALARY</text>
    {[
      { city: "Mumbai (₹60K basic, ₹28K rent)", saved: 79200, color: COLOR },
      { city: "Delhi (₹55K basic, ₹25K rent)", saved: 68400, color: COLOR },
      { city: "Bangalore (₹50K basic, ₹22K rent, non-metro)", saved: 48600, color: "#f59e0b" },
      { city: "Hyderabad (₹50K basic, ₹18K rent, non-metro)", saved: 46800, color: "#f59e0b" },
      { city: "Pune (₹40K basic, ₹15K rent, non-metro)", saved: 39600, color: "#ca8a04" },
    ].map(({ city, saved, color }, i) => (
      <g key={city}>
        <text x="290" y={52 + i * 32} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{city}</text>
        <rect x="300" y={38 + i * 32} width={saved / 400} height="22" fill={color} rx="4" opacity="0.85" />
        <text x={308 + saved / 400} y={53 + i * 32} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>₹{saved.toLocaleString()}/yr</text>
      </g>
    ))}
    <text x="20" y="193" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Metro city workers save significantly more from HRA due to the 50% formula vs 40%. This makes HRA one of the largest deductions for salaried employees in metro cities — don't leave it unclaimed.</text>
  </svg>
);

const SvgRentFamilyTrap = () => (
  <svg viewBox="0 0 720 176" role="img" aria-label="Paying rent to parents to claim HRA showing rules and requirements including that parents must declare rental income and PAN is required if rent exceeds 1 lakh annually" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">PAYING RENT TO PARENTS: CAN YOU CLAIM HRA? · THE RULES</text>
    <rect x="20" y="38" width="680" height="100" fill="var(--surface, #f0fdf4)" stroke={COLOR} strokeWidth="1.5" rx="8" />
    <text x="30" y="58" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>YES — paying rent to parents to claim HRA is legal and accepted by IT department.</text>
    <text x="30" y="76" fontFamily="system-ui" fontSize="7" fill="var(--text)">Conditions: (1) Property must be in parent's name, not yours. (2) Genuine rental agreement signed. (3) Rent paid via bank transfer (not cash). (4) Parents must declare rental income in their ITR.</text>
    <text x="30" y="94" fontFamily="system-ui" fontSize="7" fill="var(--text)">Parent's income from rent: taxable. But if parents are in nil or 5% slab, their tax on rental income is minimal or zero. The family saves net tax overall.</text>
    <text x="30" y="112" fontFamily="system-ui" fontSize="7" fill="var(--text)">Landlord PAN required: if annual rent exceeds ₹1L. Since parents own property, they provide their PAN to you (their child tenant). This is perfectly legal — it's a bonafide landlord-tenant arrangement.</text>
    <text x="20" y="152" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Common mistake: stopping monthly bank transfers and submitting cash receipts. Always maintain a consistent monthly payment trail. Irregular or year-end bulk payments are questioned in assessments.</text>
  </svg>
);

export default function PageHRACalculation() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "How is HRA exemption calculated?", "acceptedAnswer": { "@type": "Answer", "text": "HRA exemption is the minimum of: (A) Actual HRA received from employer, (B) 50% of Basic + DA for metro cities (Mumbai, Delhi, Chennai, Kolkata) or 40% for non-metro cities, and (C) Rent paid minus 10% of Basic + DA. Whichever is lowest among A, B, and C is your exempt HRA. The balance above this minimum is added to your taxable income. Calculate all three values, find the minimum, and that's what escapes tax." } },
      { "@type": "Question", "name": "Which cities are considered 'metro' for HRA calculation?", "acceptedAnswer": { "@type": "Answer", "text": "For HRA purposes, only four cities are classified as metro: Mumbai (including Thane and Navi Mumbai), Delhi (including Gurgaon, Noida, Faridabad, Ghaziabad under certain interpretations), Chennai, and Kolkata. Bangalore, Hyderabad, Pune, Ahmedabad, and all other cities are non-metro (40% formula). This matters significantly — a Mumbai employee with ₹60,000 basic gets ₹30,000 in formula B, while a Bangalore employee with the same basic gets ₹24,000." } },
      { "@type": "Question", "name": "Can I claim HRA if I live with my parents rent-free?", "acceptedAnswer": { "@type": "Answer", "text": "No. HRA exemption requires actual rent payment with proper documentation. However, you can pay rent to your parents if the property is in their name, make regular bank transfers, have a signed rental agreement, and ensure parents declare this as rental income in their ITR. This is a common and legal arrangement that benefits families where parents are in a lower tax slab." } },
      { "@type": "Question", "name": "What happens if I don't have rent receipts for the full year?", "acceptedAnswer": { "@type": "Answer", "text": "You can claim HRA only for months with proper documentation. If you moved mid-year or don't have receipts for some months, claim only for the documented period. The IT department may ask for proof during assessment — always maintain monthly rent receipts signed by the landlord. Digital receipts (WhatsApp, email) are accepted if they have the required details (amount, date, landlord signature). A missing month's receipt = that month's HRA taxable." } },
      { "@type": "Question", "name": "Is HRA available under the new tax regime?", "acceptedAnswer": { "@type": "Answer", "text": "No. HRA exemption is available only under the old tax regime. Under the new tax regime (default from FY 2023-24 onwards), you cannot claim HRA, home loan interest (Section 24b), 80C deductions, or most other deductions. Only the standard deduction of ₹75,000 is available. Before switching regimes, calculate whether HRA + 80C + 24b + 80D combined savings in old regime exceed the lower slab rate benefit of the new regime. For people with high rent and home loan interest, the old regime often saves more." } },
      { "@type": "Question", "name": "What if my landlord refuses to give PAN for HRA claim?", "acceptedAnswer": { "@type": "Answer", "text": "If annual rent exceeds ₹1 lakh (₹8,333/month), providing the landlord's PAN is mandatory for HRA claims. If your landlord refuses: first, explain that without PAN the IT department may disallow the claim and they could face scrutiny for undeclared rental income. If they still refuse, you may have to forego the claim for that portion or find an alternative arrangement. Some tenants approach the IT department's helpline for guidance in genuine non-cooperation cases." } },
      { "@type": "Question", "name": "How do I declare HRA to my employer for TDS purposes?", "acceptedAnswer": { "@type": "Answer", "text": "Most employers collect HRA declarations in April (start of financial year) and again in December/January (for final TDS calculation). Submit: signed declaration form mentioning monthly rent and landlord details, landlord's PAN if rent exceeds ₹8,333/month, rent receipts (employer may ask for sample or all). Your employer then excludes the exempt HRA from taxable salary for TDS deduction. Even if your employer doesn't collect this, you can claim the exemption directly in your ITR." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "HRA Calculation: The Exact Formula With Real Numbers for Mumbai, Delhi, Bangalore", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Tax", item: "https://assurefintech.com/learn/tax/" },
    { "@type": "ListItem", position: 4, name: "HRA Calculation", item: "https://assurefintech.com/learn/tax/hra-calculation" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #021509, #073417, #021509)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #16a34a22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Tax · Hra · Exemption Calculator
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            HRA Calculation: The Exact Formula, With Your Real Numbers for Mumbai, Delhi, and Bangalore
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/tax" style={{ color: "inherit" }}>Tax</Link> / HRA Calculation</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>HRA is one of the largest tax exemptions available to salaried employees. Most people know it exists but miscalculate it, miss documentation, or don't claim it at all. Here's the full formula with worked examples.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What HRA Is (And What It's Not)</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>House Rent Allowance (HRA) is a salary component your employer pays to cover your housing costs. It's not a deduction you claim — it's money your employer already gives you. The HRA exemption under Section 10(13A) is what keeps part of that HRA out of your taxable income.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For salaried employees in metro cities paying high rents, this exemption can save ₹60,000-1,00,000+ per year in income tax. It's one of the few genuine benefits of being salaried versus self-employed (who cannot claim HRA, only a deduction against rental income).</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Critical caveat: HRA exemption is only available under the old tax regime. If you've opted for the new regime, you cannot claim this. Compare both regimes before deciding — the HRA saving can be very significant.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Formula: Minimum of Three Values</h2>
        <SvgHRAFormula />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The formula has three components and you take the minimum. This is where many people go wrong — they assume the full HRA from the salary slip is exempt, when it's actually limited by whichever of the three is lowest.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Component C (rent minus 10% of basic) is the most commonly binding constraint. If your rent is ₹20,000/month and your basic is ₹50,000/month, Component C = (₹2,40,000 - ₹60,000) = ₹1,80,000. If your employer gives ₹20,000 HRA (component A = ₹2,40,000), component C at ₹1,80,000 limits your exemption. The extra ₹60,000 HRA above component C is fully taxable.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Worked Examples: Three Cities</h2>
        <SvgCityExamples />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The Mumbai calculation shows an interesting result: components A and B are both ₹3,60,000, but component C is only ₹2,64,000. The rent paid (₹28,000/month = ₹3,36,000/year) minus 10% of basic (₹72,000) = ₹2,64,000 limits the exemption. Rahul can't claim the full ₹30,000/month HRA from his employer — only ₹22,000 equivalent per month is tax-exempt.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Practical implication: if Rahul moved to a ₹30,000/month flat, component C would rise to ₹2,88,000 and he'd save an extra ₹7,200 in tax (the ₹24,000 difference × 30%). Sometimes paying slightly more rent net saves money after tax benefits.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Tax Saved by City</h2>
        <SvgTaxSavedByCity />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Metro city employees saving ₹70,000-80,000 in tax purely from HRA is not unusual for mid-senior employees. This is why people in Mumbai and Delhi who pay high rents and are on the 30% slab strongly prefer the old tax regime — the HRA exemption alone often justifies it.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Documentation: What You Actually Need</h2>
        <SvgDocumentation />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most common mistake: paying rent via UPI but not getting a signed rent receipt from the landlord. Bank transfer alone doesn't constitute a "rent receipt" for HRA purposes. Get physical or digital receipts signed by the landlord monthly or quarterly. A good template: "Received from [your name], rent of ₹[amount] for the month of [month] for property at [address]. Signed: [landlord name]. Date: [date]."</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For monthly rents above ₹8,333 (annual rent above ₹1L): the landlord's PAN is mandatory. Most landlords are cooperative — explain that it's a legal requirement and doesn't affect their taxes if they're already declaring rental income. For landlords who genuinely don't have a PAN (rare but possible with elderly landowners), the IT department has provisions for submission of a declaration.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Paying Rent to Parents: Completely Legal</h2>
        <SvgRentFamilyTrap />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This arrangement works particularly well when parents are retired or have lower income (nil or 5% slab). The family as a unit saves tax: you get HRA exemption (saving 30% of rent amount), parents declare rental income (paying 0-5% tax on it). Net family saving on ₹15,000/month rent: roughly ₹54,000/year for a 30% slab earner with parents in nil slab.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The arrangement needs to be genuine: monthly bank transfers, signed rental agreement, proper receipts. Lump-sum transfers at year-end or cash payments invite scrutiny. The IT department has accepted such arrangements in numerous cases — but only when they're conducted with the same formality as a third-party rental.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>HRA and Home Loan: Can You Claim Both?</h2>
        <SvgHRAvsHomeLoan />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is the most common question from people buying their first home. The answer is yes, in most cases — if you're genuinely renting where you work and the home loan property is in another city or is genuinely unavailable for self-occupation (under construction, occupied by parents, rented out).</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our broader <Link href="/learn/tax" style={{ color: COLOR }}>tax hub</Link> and our <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C beyond the obvious guide</Link> to see how HRA fits into your overall tax planning picture. Also see <Link href="/learn/tax/tax-on-credit-card-rewards" style={{ color: COLOR }}>our credit card rewards tax guide</Link> for another often-misunderstood area.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/tax" style={{ color: COLOR }}>tax hub</Link> · <Link href="/learn/tax/80c-beyond-the-obvious" style={{ color: COLOR }}>80C beyond the obvious</Link> · <Link href="/learn/loans" style={{ color: COLOR }}>home loan guides</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: HRA rules from Income Tax Act Section 10(13A) and Rule 2A. Tax examples for FY 2025-26. Metro city classification per IT department guidelines. Not tax advice — consult a CA for your specific situation. Last verified {UPDATED}.</footer>
    </main>
    </>
  );
}
