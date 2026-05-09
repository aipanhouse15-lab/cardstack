import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 2 Article 4 — Health Insurance Effective Coverage
// URL: /learn/insurance/health-insurance-effective-coverage
// Category: Insurance · Color: Pink #DB2777
// Author: Ash K · Reviewed: April 20, 2026
// Target: 2,500+ visible words · 4 info-SVGs · 6 FAQs
// Template archetype: Layer Reveal (peel-the-onion)
// ============================================================

const COLOR = "#DB2777";
const UPDATED = "April 20, 2026";

const SvgWaterfall = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Health insurance effective coverage waterfall — ten lakh sum insured peeled back through six deduction layers to four lakh net realised cover" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">EFFECTIVE COVER WATERFALL · ₹10L SUM INSURED REVEALED</text>
    {[
      { label: "Sum insured", val: "₹10L", h: 240, c: COLOR, x: 40 },
      { label: "− Room rent cap", val: "−₹50k", h: 25, c: "#dc2626", x: 130 },
      { label: "− Co-pay 20%", val: "−₹1.9L", h: 75, c: "#dc2626", x: 220 },
      { label: "− Disease sub-limit", val: "−₹1.5L", h: 60, c: "#dc2626", x: 310 },
      { label: "− Consumables", val: "−₹50k", h: 25, c: "#dc2626", x: 400 },
      { label: "− Pre/post miss", val: "−₹40k", h: 20, c: "#dc2626", x: 490 },
      { label: "= Realised", val: "₹4.2L", h: 100, c: "#0f172a", x: 580 },
    ].map((b, i) => (
      <g key={i} transform={`translate(${b.x}, 60)`}>
        <rect x="0" y={250 - b.h} width="80" height={b.h} fill={b.c} opacity={i === 6 ? 1 : 0.7} />
        <text x="40" y={244 - b.h} textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={b.c}>{b.val}</text>
        <text x="40" y="270" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text)">{b.label}</text>
      </g>
    ))}
  </svg>
);

const SvgRoomRent = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Room rent cap proportional reduction example — ₹15000 actual room rent on a ₹5000 cap reduces all bill components by the same proportion" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">ROOM RENT CAP · PROPORTIONAL REDUCTION RULE</text>
    {[
      { item: "Room rent (₹15k actual)", actual: 15000, paid: 5000 },
      { item: "Surgeon fees (₹50k bill)", actual: 50000, paid: 16667 },
      { item: "Anaesthetist (₹15k bill)", actual: 15000, paid: 5000 },
      { item: "Operation theatre (₹40k)", actual: 40000, paid: 13333 },
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${50 + i * 36})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{r.item}</text>
        <rect x="280" y="2" width={r.actual / 100} height="14" fill="#94a3b8" />
        <text x={285 + r.actual / 100} y="13" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">₹{r.actual.toLocaleString("en-IN")} bill</text>
        <rect x="280" y="18" width={r.paid / 100} height="14" fill={COLOR} />
        <text x={285 + r.paid / 100} y="29" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>₹{r.paid.toLocaleString("en-IN")} paid</text>
      </g>
    ))}
    <text x="20" y="218" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)" fontWeight="600">If actual room rent is 3x the policy cap, every bill line gets reimbursed at 1/3 — even surgeon fees and OT costs.</text>
  </svg>
);

const SvgCsrTable = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="FY25 IRDAI claim settlement ratio for top six health insurers showing percentage of claims settled against percentage by amount" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">FY25 IRDAI CSR · CLAIM SETTLEMENT RATIO BY INSURER</text>
    {[
      { name: "HDFC ERGO", count: 93.1, amount: 89.4 },
      { name: "Niva Bupa", count: 91.6, amount: 87.2 },
      { name: "Care Health", count: 92.0, amount: 88.0 },
      { name: "Star Health", count: 87.4, amount: 84.1 },
      { name: "ICICI Lombard", count: 91.8, amount: 88.5 },
      { name: "Aditya Birla", count: 92.6, amount: 89.0 },
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${50 + i * 34})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">{r.name}</text>
        <text x="180" y="8" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">By count</text>
        <rect x="180" y="10" width={r.count * 4} height="9" fill={COLOR} opacity="0.7" />
        <text x={186 + r.count * 4} y="18" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="var(--text)">{r.count}%</text>
        <text x="180" y="29" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">By amount</text>
        <rect x="180" y="31" width={r.amount * 4} height="9" fill={COLOR} />
        <text x={186 + r.amount * 4} y="39" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="var(--text)">{r.amount}%</text>
      </g>
    ))}
    <text x="20" y="262" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">By count = % of claims paid · By amount = % of claimed amount actually paid · gap is sub-limit and exclusion erosion</text>
  </svg>
);

const SvgRealisticPolicy = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Comparison of three health insurance plans showing nominal versus effective coverage on a typical 5 lakh hospitalisation scenario" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">EFFECTIVE COVER ON A ₹5L HOSPITALISATION · 3 POLICY DESIGNS</text>
    {[
      { plan: "₹5L basic · 20% co-pay · ₹4k room", nominal: 500000, eff: 280000, w: 224 },
      { plan: "₹10L Optima Secure · no caps", nominal: 1000000, eff: 480000, w: 384 },
      { plan: "₹10L base + ₹40L super top-up", nominal: 5000000, eff: 470000, w: 376 },
    ].map((p, i) => (
      <g key={i} transform={`translate(0, ${50 + i * 50})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text)">{p.plan}</text>
        <text x="20" y="32" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Nominal SI ₹{(p.nominal/100000).toFixed(0)}L · effective on ₹5L claim ₹{(p.eff/100000).toFixed(2)}L</text>
        <rect x="380" y="6" width={p.w} height="22" fill={COLOR} opacity={0.5 + i * 0.2} />
        <text x={388 + p.w} y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">₹{(p.eff/100000).toFixed(2)}L net</text>
      </g>
    ))}
    <text x="20" y="220" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Sum insured matters less than policy structure · super top-up barely changes effective if base policy has caps</text>
  </svg>
);

export default function HealthInsuranceEffectiveCoverage() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Health Insurance Effective Coverage 2026 — Why Your ₹10L Policy Pays Out ₹4L",
    description: "Six deduction layers — room rent cap, co-pay, disease sub-limits, consumables, pre/post miss, claim settlement gap — that reduce a ₹10 lakh nominal sum insured to ₹4 lakh of effective coverage on a typical hospitalisation.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-04-20",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why does my ₹10 lakh health insurance only pay out ₹4 lakh on a ₹6 lakh hospitalisation?", acceptedAnswer: { "@type": "Answer", text: "Six deduction layers stack between the nominal sum insured and the actual reimbursement. Room rent cap (if your policy has a ₹5,000 cap and you take a ₹15,000 room, all bill components scale down proportionally). Co-pay (typically 10 to 30 percent for senior citizens, deducted from each claim). Disease-wise sub-limits (cataract capped ₹40k per eye, knee replacement at 50 percent of SI). Non-medical consumables exclusion (gloves, masks, syringes — cumulatively ₹30k to ₹60k on major hospitalisations). Pre/post hospitalisation expense miss (only specific tests within the defined window qualify). Claim settlement deductions (insurer's medical reviewer may reduce specific line items as not medically necessary). The cumulative effect on a typical ₹10L policy is roughly 35 to 50 percent reduction from nominal to realised coverage." } },
      { "@type": "Question", name: "What is the room rent cap and how badly does it hurt?", acceptedAnswer: { "@type": "Answer", text: "Room rent cap is the maximum daily room charge your policy will cover, typically ₹3,000 to ₹5,000 on a ₹10 lakh policy. The catch is the proportional reduction rule. If your actual room rent is ₹15,000 per day (private deluxe in a tier-1 metro hospital) but your cap is ₹5,000, the policy treats every bill component as scaled to one-third. So surgeon's fees of ₹2 lakh become ₹66,667 reimbursed. Anaesthetist fees of ₹50,000 become ₹16,667. Operation theatre charges of ₹1.5 lakh become ₹50,000. The room-rent cap is not just about room rent; it scales the entire claim. Higher-tier policies (HDFC Optima Secure, Niva Bupa Reassure) explicitly remove room rent caps as their flagship feature precisely because of this multiplier effect." } },
      { "@type": "Question", name: "How do I find out my policy's actual sub-limits?", acceptedAnswer: { "@type": "Answer", text: "Pull the policy wording document, sometimes called the Policy Schedule or Terms & Conditions. Look for sections titled Sub-limits, Room Rent Limits, Disease-wise Caps, or Procedure-wise Limits. The sub-limit table is typically a 1 to 3 page section showing each procedure category (cataract, knee replacement, hip replacement, cardiac procedures, oncology) with the maximum reimbursement cap. Check it before any planned procedure. For unplanned admissions, the cap binds at the same level — surgeons sometimes recommend procedures that exceed the cap by 30 to 50 percent without warning the patient. Most insurer portals now show sub-limits in the customer dashboard; if not, request the wording document from customer care." } },
      { "@type": "Question", name: "What's the difference between top-up and super top-up?", acceptedAnswer: { "@type": "Answer", text: "Both add high-sum-insured coverage above a deductible threshold. Regular top-up: deductible applies per claim — so a ₹3 lakh deductible top-up triggers only on individual claims exceeding ₹3 lakh, not on multiple smaller claims aggregated. Super top-up: deductible applies per policy year (aggregate). All claims during the year are summed; once total exceeds the deductible, super top-up pays. Two ₹2 lakh claims in the same year aggregate to ₹4 lakh, exceeding a ₹3 lakh super top-up deductible — super top-up pays the ₹1 lakh excess. For households with chronic conditions or multiple insured members, super top-up is dramatically more useful than regular top-up. Pricing is similar; the structural difference is the deductible mechanics." } },
      { "@type": "Question", name: "Should I worry about non-medical consumables being excluded?", acceptedAnswer: { "@type": "Answer", text: "Yes, materially. IRDAI's standardised exclusion list (List I) covers items like gloves, masks, sanitisers, syringes, oxygen masks, ICU disposables — collectively about 12 to 15 percent of a typical ₹3 to 5 lakh hospitalisation bill. On a ₹4 lakh hospitalisation, consumables run ₹50,000 to ₹70,000 that the policy doesn't cover. Some premium plans (HDFC Optima Secure, Niva Bupa Reassure 2.0) explicitly include consumables coverage, eliminating this gap at a 6 to 8 percent premium uplift. For households with ageing parents likely to face long ICU stays, consumables coverage is genuinely valuable. For young healthy insureds, it's a smaller concern." } },
      { "@type": "Question", name: "How does claim settlement ratio (CSR) actually work in practice?", acceptedAnswer: { "@type": "Answer", text: "IRDAI's annual report publishes two CSR figures per insurer. By count: percentage of claims paid out of claims registered. By amount: percentage of claimed amount actually paid. The two often diverge by 3 to 5 percentage points. By count is closer to 90 to 93 percent for most major insurers; by amount is 84 to 89 percent. The gap is the sub-limit and exclusion erosion — claims are notionally paid but at amounts lower than what was claimed. Pay attention to both numbers when comparing insurers; the by-amount figure is more meaningful for what you actually receive on a major claim. HDFC ERGO, Aditya Birla, and ICICI Lombard tend to score consistently above 89 percent by amount; Star Health below 85 percent reflects its specific senior-citizen-heavy book." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
      { "@type": "ListItem", position: 4, name: "Effective Coverage", item: "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage" }
    ]
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
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 100px", fontSize: "18px", lineHeight: 1.85, fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)" }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Effective Coverage
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>INSURANCE · TIER 2 GUIDE · LAYER REVEAL</div>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed against IRDAI FY25 Annual Report</span>
        <span>·</span>
        <span>About 11 min read</span>
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The effective coverage waterfall</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Most health insurance brochures show a sum insured number — ₹5 lakh, ₹10 lakh, ₹25 lakh — as the headline benefit. The number is real, in the sense that it's the upper limit on what the insurer will pay in any policy year. The number is also misleading, because the insurer's actual payout on any specific hospitalisation is constrained by six successive deduction layers that are rarely highlighted at sale.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The waterfall below shows the layers stacked on a typical ₹10 lakh policy. Read it as a sequential reveal: each layer carves a portion off the nominal coverage. The realised amount at the end is what actually hits your bank account — or, more commonly, gets paid directly to the hospital under cashless.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgWaterfall />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 1 — room rent cap (the proportional reduction trap)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Most basic health policies cap the daily room rent at 1 percent of sum insured — so ₹5,000 per day on a ₹5 lakh policy, ₹10,000 per day on a ₹10 lakh policy. Some economy plans cap at fixed amounts like ₹2,000 or ₹3,000.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The trap is the proportional reduction rule. If your actual room rent exceeds the cap, the policy treats every other bill component as scaled to the same proportion. So if you take a ₹15,000 daily private deluxe room on a policy that caps at ₹5,000, the policy reimburses room rent at ₹5,000 (one-third of actual). And surgeon fees, anaesthetist fees, operation theatre charges, ICU charges, all the other bill components get reimbursed at one-third too — even though those have no inherent connection to room rent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          On a ₹3 lakh hospitalisation that should have been fully covered under a ₹5 lakh sum insured, the proportional reduction can leave you paying ₹2 lakh out of pocket because of one room-rent line item. This is the single biggest gap between nominal and effective coverage on basic policies. Premium policies (HDFC ERGO Optima Secure, Niva Bupa Reassure 2.0, Care Supreme) explicitly remove room rent caps — that single change recovers the largest piece of effective coverage.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgRoomRent />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 2 — co-payment (the percentage you always pay)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Co-payment is the share of every claim that the insured pays out of pocket regardless of sum insured. Standard adult policies typically have 0 percent co-pay; senior citizen plans typically carry 10 to 30 percent mandatory co-pay; some plans offer optional co-pay in exchange for premium discount.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a ₹4 lakh hospitalisation with 20 percent co-pay, the patient pays ₹80,000 directly; the insurer pays ₹3.2 lakh. On a ₹10 lakh hospitalisation with the same co-pay, patient pays ₹2 lakh; insurer pays ₹8 lakh. The co-pay is mathematically inescapable; it's the contractual cost-sharing structure of the policy.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The trade-off when buying. Lower co-pay (0 to 10 percent) means higher premium but smaller out-of-pocket exposure on any major claim. Higher co-pay (20 to 30 percent) means lower premium but you're meaningfully exposed on claims above ₹2 to 3 lakh. For senior citizens specifically, mandatory co-pay is hard to avoid; the trade-off is between policies with 10 percent co-pay (Care Plus) and 20 percent co-pay (Star Senior Citizens Red Carpet) at different premium points.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 3 — disease-wise sub-limits (the silent caps)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Most policies maintain a sub-limit table that caps reimbursement on specific procedures regardless of overall sum insured. Cataract surgery is typically capped at ₹40,000 per eye. Knee replacement at 50 percent of sum insured (₹5 lakh on a ₹10 lakh policy). Hip replacement at 50 percent. Cardiac procedures (PTCA / angioplasty) at 50 to 75 percent. Cancer surgery at 75 percent on most policies, fully covered on premium tiers.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The trap is the disconnect between sub-limit and actual cost. A modern bilateral knee replacement at a tier-1 metro hospital costs ₹6 to 8 lakh. A ₹5 lakh sub-limit on a ₹10 lakh policy means ₹1 to 3 lakh of out-of-pocket exposure even with a high nominal sum insured. Cataract surgery at a premium hospital can cost ₹70,000 to ₹1 lakh per eye against a ₹40,000 cap.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          What to check at policy purchase. Pull the sub-limit table and compare to typical procedure costs at hospitals you'd actually use. For older insureds (50-plus) likely to face orthopaedic and ophthalmic procedures, the sub-limit table matters more than the headline sum insured. Premium plans like Care Supreme have notably looser sub-limits — knee replacement at 75 percent of SI, cataract at ₹60k per eye — making them genuinely better-value for the 50-plus cohort despite slightly higher premium.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 4 — non-medical consumables (the IRDAI exclusion list)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          IRDAI's standardised exclusion list (List I, last updated 2020) covers items that hospitals charge but health insurance does not pay. The list includes gloves, masks, sanitisers, syringes, IV sets, ICU disposables, gowns, oxygen masks, dietary supplements, and similar consumables. Cumulatively these run 12 to 15 percent of a typical ₹3 to 5 lakh hospitalisation bill.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A typical ₹5 lakh hospitalisation has roughly ₹50,000 to ₹70,000 of IRDAI-List-I consumables that get rejected. A 10-day ICU admission can have ₹1.5 to 2 lakh of consumable line items. The exclusion is structural, not negotiable.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          What you can do. Two paths. First, premium policies (HDFC ERGO Optima Secure, Niva Bupa Reassure 2.0) explicitly include consumables coverage as a flagship feature, at roughly 6 to 8 percent premium uplift over basic policies. Second, the standardised IRDAI consumable rider (introduced 2020) is now offered as an optional add-on by most insurers at ₹500 to ₹1,500 per year. The rider explicitly covers items on List I. Both are worth considering for households with ageing parents likely to face extended hospitalisations.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 5 — pre and post hospitalisation expenses</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Most policies cover pre-hospitalisation expenses (consultations, diagnostics, medications related to the eventual admission) for 30 to 60 days before admission. Post-hospitalisation expenses (follow-up consultations, medications, rehabilitation) are covered for 60 to 180 days after discharge.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The miss happens because of documentation. Patients often pay for consultations and diagnostics in cash before being admitted, and then can't produce hospital-attested medical reports linking those expenses to the eventual admission. Insurers reject these without proper documentation.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          What to do at admission. Tell the hospital admission desk that you have insurance and request that all pre-admission consultations and diagnostics in the prior 30 days be linked to the current admission case file. Provide all receipts at the cashless desk. The admin overhead is small but recovers ₹15,000 to ₹40,000 of expenses that would otherwise be silently missed.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 6 — the claim settlement reality (CSR by amount)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          IRDAI's annual report publishes two CSR figures per insurer. By count: percentage of claims paid out of total claims registered. By amount: percentage of claimed amount actually paid out of total claimed amount. The two figures diverge by 3 to 5 percentage points because of sub-limit and exclusion-driven reductions on individual claims.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The by-count figure is what most insurers advertise — it's higher and looks better. The by-amount figure is what you actually receive on a major claim. The chart below shows both metrics for the top six health insurers in FY25.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The pattern. HDFC ERGO, Aditya Birla, and ICICI Lombard cluster around 89 percent by amount — the strongest in the industry. Niva Bupa and Care Health at 87 to 88 percent. Star Health at 84 percent reflects its senior-citizen-heavy book where sub-limits bind more often. The 5 percentage point gap between best and worst translates to ₹25,000 of additional out-of-pocket on a ₹5 lakh hospitalisation — meaningful enough to factor into purchase decisions when other parameters are similar.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgCsrTable />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Comparing policies on effective coverage, not nominal</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The standard advice — buy a high sum insured because medical costs are rising — is right but incomplete. The right framing is to buy a policy structure that delivers high effective coverage, which is a different optimisation than maximising nominal sum insured.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three policy designs on the same ₹5 lakh hospitalisation. A basic ₹5 lakh policy with 20 percent co-pay and ₹4,000 room rent cap delivers about ₹2.8 lakh effective coverage on a ₹5 lakh hospitalisation in a tier-1 metro. A ₹10 lakh HDFC ERGO Optima Secure with no sub-limits, no co-pay, and consumables covered delivers about ₹4.8 lakh on the same hospitalisation — recovering nearly the full ₹5 lakh because the layers don't compound. A ₹10 lakh base plus ₹40 lakh super top-up delivers roughly the same effective coverage as Optima Secure on a ₹5 lakh claim because the super top-up has its own sub-limits that mirror the base.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Implication. Switching from a ₹5 lakh basic plan to a ₹10 lakh premium plan (Optima Secure or Reassure 2.0) at 30 to 50 percent higher premium recovers roughly ₹2 lakh of additional effective coverage on a typical claim. The marginal premium is well-spent. Adding a ₹40 lakh super top-up on top of a basic plan adds far less effective coverage than upgrading to a premium base plan — a counter-intuitive result that catches most buyers off-guard.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgRealisticPolicy />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Three high-effective-coverage policies in 2026</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three policies stand out for genuinely high effective-to-nominal coverage ratio. Each removes multiple deduction layers that basic policies stack up.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>HDFC ERGO Optima Secure.</strong> ₹5L to ₹2Cr sum insured options. No room rent cap. No disease-wise sub-limits. Consumables covered in base. 2x sum-insured boost from year 1 (a ₹10L policy effectively starts as ₹20L coverage). FY25 CSR 93.1 percent by count. Premium for healthy 30-year-old male non-smoker on ₹10L policy: roughly ₹14,500 per year.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Niva Bupa Reassure 2.0.</strong> ₹3L to ₹1Cr SI. No room rent cap. No co-pay (mandatory option). Unlimited annual restoration of sum insured. Reduce-PED rider available bringing pre-existing waiting from 3 years to 2 years. FY25 CSR 91.6 percent by count. Premium ₹13,200 per year for similar profile.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Care Supreme.</strong> ₹3L to ₹2Cr SI. No room rent cap. Higher disease-wise sub-limits than industry baseline (knee replacement 75 percent of SI versus standard 50 percent). 50-percent-per-claim-free-year cumulative bonus stacking up to 200 percent. FY25 CSR 92 percent by count. Senior-citizen entry up to 75 years. Premium ₹13,800 per year.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The 30 to 40 percent premium uplift over basic policies (where ₹10L SI sells for ₹9,500 to ₹11,000 per year) is real money but recovers ₹2 lakh of additional effective coverage on a typical claim. Pay the uplift unless your budget is genuinely tight; the value-for-money math heavily favours premium plans.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The cashless reality and what to expect at the hospital</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          IRDAI's 2024-25 "Cashless Everywhere" framework requires insurers to honour cashless claims at any approved hospital, not just network hospitals. The mandate has improved real-world cashless availability, but execution quality varies by insurer and hospital.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          What to expect at admission. Present your insurance card and request cashless. The hospital sends a pre-authorisation request to the insurer within 1 hour. The insurer responds within 6 hours (mandated TAT). If approved, hospital bills the insurer directly. If denied, hospital may proceed on cashless-treatment basis with the bill as your liability initially, claimable as reimbursement later.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Common operational gaps. Smaller hospitals lack IT integration for fast pre-authorisation. Pre-existing condition disputes can pause cashless approval. Some procedures (cosmetic-adjacent, optional, OPD-equivalent) are excluded from cashless even at major hospitals. Memorise your insurer's 24x7 cashless desk number — fastest escalation path during admission.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Working through a real claim — what actually happens</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The mechanics of a real cashless claim help solidify how the deduction layers compound. Take a worked scenario: 58-year-old male, ₹10 lakh sum insured policy with 10 percent voluntary co-pay, knee replacement surgery at a tier-1 metro hospital.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Bill at admission. Knee implant ₹2.8 lakh. Surgeon fees ₹85,000. Anaesthetist ₹35,000. Operation theatre ₹45,000. Room rent (private semi-deluxe) ₹6,500/day × 5 days = ₹32,500. ICU 1 day at ₹12,000. Investigations ₹38,000. Pharmacy and consumables ₹62,000. Total bill ₹5,17,500.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Insurer's deductions. Knee replacement disease sub-limit at 50 percent of SI = ₹5 lakh cap, doesn't bind here. Room rent cap ₹5,000/day; actual ₹6,500/day (130 percent of cap), so all bill components scaled to 76.9 percent (5000/6500). Bill after room cap proportional: ₹5,17,500 × 0.769 = ₹3,98,000. Then non-medical consumables ₹62,000 carved out at 100 percent rejection — final eligible after exclusion: ₹3,36,000. Then 10 percent voluntary co-pay deducted: ₹33,600. Insurer pays ₹3,02,400; patient pays ₹2,15,100 from total bill of ₹5,17,500.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The take-away. On a ₹5 lakh hospitalisation against a ₹10 lakh sum insured, the patient still paid ₹2.15 lakh out of pocket — 41 percent of the bill. The room-rent cap was the largest single deduction lever. Switching to an Optima Secure-style policy with no room-rent cap and consumables included would have eliminated roughly ₹1.8 lakh of those out-of-pocket costs, at premium uplift of about ₹4,000 per year. The trade-off heavily favours premium policy structure.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What to do this week — a practical checklist</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Steps to reduce your effective-coverage gap without spending more, and the points where spending more is actually worth it.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Pull your existing policy wording.</strong> Find the sub-limit table, the room rent cap, and the co-pay clauses. Note them in writing. If you can't easily find these (some insurer portals bury them), email customer care and request the consolidated policy schedule. Most insurers respond within 2 to 3 business days. Save the document — you'll need it at admission and again at renewal-comparison time.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Check your hospital's typical room rent.</strong> Call the top-2 hospitals you'd actually use in an emergency and ask their private semi-deluxe room rate. Compare to your policy's cap. If the gap is 50 percent or more, you have a major proportional-reduction exposure.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Add a consumables rider if available.</strong> ₹500 to ₹1,500 per year for ₹50k to ₹70k of recovered coverage on a typical hospitalisation. Almost universally positive expected value. The rider is sold under different names by different insurers — Niva Bupa calls it the Consumable Cover, HDFC ERGO calls it the Wellness Rider, but the underlying coverage is similar — IRDAI List I items including ICU disposables, gloves, masks, syringes.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Consider switching to a premium-structure policy at next renewal.</strong> The portability rules let you carry no-claim bonus and waiting-period credits across insurers. File the portability request 45 to 60 days before your current policy renewal date. The premium uplift of ₹3,000 to ₹6,000 per year recovers ₹1.5 to 2 lakh of effective coverage on a major claim.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Buy a super top-up only after the base is right.</strong> Adding ₹40 lakh super top-up on a basic policy with poor structure barely changes your effective coverage. Fix the base first; super top-up second. The right stack for most metro households is ₹10 lakh premium-structure base plus ₹40 to ₹50 lakh super top-up with ₹5 lakh deductible — combined annual premium around ₹20,000 to ₹25,000 for a healthy 35-year-old, delivering effective coverage of around ₹40 lakh on a major hospitalisation event.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Layer term life insurance separately.</strong> Health insurance does not cover income loss during recovery. A term life policy at 15 to 20 times annual income covers the family in the worst case. Combined health plus term cover gives the structural protection that single-product approaches miss.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Review every two years.</strong> Insurance is not set-and-forget. Sub-limits, exclusions, and CSR figures shift every few years. Renewal time is the moment to reconsider whether your current policy still has the best effective-coverage profile or whether a competitor has launched a better-structured plan.
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
          <li style={{ marginBottom: 8 }}><Link href="/learn/insurance/super-top-up" style={{ color: COLOR }}>Super top-up explained</Link>. The cheap second-tier coverage.</li>
          <li style={{ marginBottom: 8 }}><Link href="/compare/hdfc-optima-secure-vs-niva-bupa-reassure" style={{ color: COLOR }}>Optima Secure vs Reassure 2.0</Link>. Two of the policies modelled in this article.</li>
          <li style={{ marginBottom: 8 }}><Link href="/best/health-insurance-parents" style={{ color: COLOR }}>Best health insurance for parents</Link>. Senior-citizen-specific picks.</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/irdai-2025-cashless-network" style={{ color: COLOR }}>IRDAI cashless network expansion</Link>. What changed in 2024-25.</li>
          <li><Link href="/learn/insurance" style={{ color: COLOR }}>Insurance knowledge hub</Link>. All our insurance guides.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 36, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>IRDAI Annual Report FY 2024-25 — claim settlement ratios by insurer</li>
          <li style={{ marginBottom: 6 }}>IRDAI Standardised Exclusion List I (2020) — non-payable items</li>
          <li style={{ marginBottom: 6 }}>IRDAI "Cashless Everywhere" framework circular, 2024-25</li>
          <li style={{ marginBottom: 6 }}>Policy wordings — HDFC Optima Secure, Niva Bupa Reassure 2.0, Care Supreme, Star Comprehensive</li>
          <li>IRDAI Health Insurance Regulations, 2024 amendments</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> Sub-limits, exclusion lists, and claim settlement ratios above reflect each insurer's policy wording and IRDAI's published FY25 figures, verified on {UPDATED}. Premium illustrations are indicative for a healthy 30-year-old male non-smoker on a ₹10 lakh policy; your actual premium depends on age, gender, location, medical history, and underwriting outcomes. The cashless framework is regulated but execution at individual hospitals can vary; verify network status with both insurer and hospital before relying on cashless availability. This article is informational and does not constitute insurance advice; consult a licensed insurance advisor for personalised guidance.
        </p>
            <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 4 }}>Source: <a href="https://www.irdai.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>www.irdai.gov.in</a></p>
      </footer>
    </main>
    </>
  );
}
