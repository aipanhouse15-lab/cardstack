import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 2 Article 1 — Home Loan True Cost 2026
// URL: /learn/loans/home-loan-true-cost
// Category: Loans · Color: Blue #2563EB
// Author: Ash K · Reviewed: June 3, 2026
// Target: 2,500+ visible words · 4 info-SVGs · 6 FAQs
// Template archetype: Cost Waterfall
// ============================================================

const COLOR = "#2563EB";
const UPDATED = "June 3, 2026";

const SvgWaterfall = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Home loan true cost waterfall — headline EMI broken into processing fee stamp duty MOD insurance and lifetime interest layers" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">TRUE COST WATERFALL · ₹50L LOAN AT 8.75% OVER 20 YEARS</text>
    {[
      { label: "Headline EMI", val: "₹44,186/mo", desc: "What the calculator shows", h: 240, c: COLOR, x: 40 },
      { label: "+ Processing fee", val: "₹50,000", desc: "1% upfront · GST extra", h: 30, c: "#dc2626", x: 130 },
      { label: "+ Stamp duty", val: "₹3,00,000", desc: "6% in MH · state-dependent", h: 100, c: "#dc2626", x: 220 },
      { label: "+ MOD charges", val: "₹50,000", desc: "0.1-0.2% mortgage registration", h: 30, c: "#dc2626", x: 310 },
      { label: "+ Insurance bundle", val: "₹40,000", desc: "Decreasing term + property", h: 25, c: "#dc2626", x: 400 },
      { label: "+ Lifetime interest", val: "₹56,04,000", desc: "Over 240 EMIs", h: 240, c: "#dc2626", x: 490 },
      { label: "= TOTAL OUTFLOW", val: "₹1,06,04,000", desc: "On a ₹50L principal", h: 250, c: "#0f172a", x: 600 },
    ].map((b, i) => (
      <g key={i} transform={`translate(${b.x}, 60)`}>
        <rect x="0" y={250 - b.h} width="80" height={b.h} fill={b.c} opacity={i === 6 ? 1 : 0.7} />
        <text x="40" y={244 - b.h} textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={b.c}>{b.val}</text>
        <text x="40" y="270" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text)">{b.label}</text>
        <text x="40" y="284" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="var(--text-muted)">{b.desc}</text>
      </g>
    ))}
  </svg>
);

const SvgEmiSplit = () => (
  <svg viewBox="0 0 720 282" role="img" aria-label="Year by year EMI split between interest and principal showing how interest dominates first decade and principal dominates second decade" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">EMI SPLIT BY YEAR · ₹50L AT 8.75% · 20 YEAR TENURE</text>
    <line x1="40" y1="240" x2="700" y2="240" stroke="var(--border)" />
    {Array.from({ length: 20 }, (_, i) => i + 1).map(yr => {
      const intPct = Math.max(20, 80 - yr * 3);
      const x = 50 + (yr - 1) * 32;
      return (
        <g key={yr}>
          <rect x={x} y={240 - 180} width="26" height={180 * intPct / 100} fill={COLOR} opacity="0.85" />
          <rect x={x} y={240 - 180 + (180 * intPct / 100)} width="26" height={180 * (100 - intPct) / 100} fill={COLOR} opacity="0.35" />
          {(yr === 1 || yr === 5 || yr === 10 || yr === 15 || yr === 20) && (
            <text x={x + 13} y="258" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Yr {yr}</text>
          )}
        </g>
      );
    })}
    <g transform="translate(560, 60)">
      <rect x="0" y="0" width="14" height="14" fill={COLOR} opacity="0.85" />
      <text x="20" y="11" fontFamily="system-ui" fontSize="10" fill="var(--text)">Interest portion</text>
      <rect x="0" y="20" width="14" height="14" fill={COLOR} opacity="0.35" />
      <text x="20" y="31" fontFamily="system-ui" fontSize="10" fill="var(--text)">Principal portion</text>
    </g>
    <text x="20" y="60" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Year 1: ~80% interest</text>
    <text x="20" y="76" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Year 10: ~50/50</text>
    <text x="20" y="92" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Year 20: ~5% interest</text>
  </svg>
);

const SvgRateRisk = () => (
  <svg viewBox="0 0 720 242" role="img" aria-label="Floating rate scenarios showing EMI variance under three repo rate paths over the loan tenure" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">FLOATING RATE EMI VARIANCE · BASE 8.75% · 3 SCENARIOS</text>
    <line x1="60" y1="200" x2="700" y2="200" stroke="var(--border)" />
    <line x1="60" y1="50" x2="60" y2="200" stroke="var(--border)" />
    <text x="60" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Yr 1</text>
    <text x="190" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Yr 5</text>
    <text x="320" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Yr 10</text>
    <text x="450" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Yr 15</text>
    <text x="580" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Yr 20</text>
    <path d="M 60 130 L 190 105 L 320 90 L 450 100 L 580 95 L 700 100" fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 3" />
    <text x="600" y="92" fontFamily="system-ui" fontSize="10" fill="#16a34a" fontWeight="700">Falling: -50bps · saves ₹4.2L</text>
    <path d="M 60 130 L 190 130 L 320 130 L 450 130 L 580 130 L 700 130" fill="none" stroke={COLOR} strokeWidth="3" />
    <text x="600" y="125" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">Steady: ₹56L total interest</text>
    <path d="M 60 130 L 190 155 L 320 165 L 450 160 L 580 170 L 700 165" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
    <text x="600" y="180" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">Rising: +75bps · costs ₹6.5L</text>
  </svg>
);

const SvgTaxShelter = () => (
  <svg viewBox="0 0 720 250" role="img" aria-label="Home loan tax shelter stack showing Section 24b interest deduction Section 80C principal Section 80EEA additional and combined annual saving" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">HOME LOAN TAX SHELTER · OLD REGIME · 30% SLAB</text>
    {[
      { label: "Section 24(b) — interest", cap: 200000, w: 380, c: COLOR, save: 62400 },
      { label: "Section 80C — principal", cap: 150000, w: 285, c: "#3b82f6", save: 46800 },
      { label: "Section 80EEA — first-time", cap: 150000, w: 285, c: "#60a5fa", save: 46800 },
    ].map((b, i) => (
      <g key={i} transform={`translate(20, ${50 + i * 50})`}>
        <text x="0" y="14" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="var(--text)">{b.label}</text>
        <rect x="220" y="2" width={b.w} height="20" fill={b.c} />
        <text x="230" y="17" fontFamily="system-ui" fontSize="11" fill="#fff" fontWeight="700">Cap ₹{(b.cap/100000).toFixed(1)}L</text>
        <text x="610" y="17" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={b.c}>Saves ₹{(b.save/1000).toFixed(0)}k/yr</text>
      </g>
    ))}
    <line x1="20" y1="210" x2="700" y2="210" stroke="var(--border)" />
    <text x="20" y="226" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>TOTAL ANNUAL SAVING ON FULL STACK ≈ ₹1,56,000 · OLD REGIME ONLY</text>
  </svg>
);

export default function HomeLoanTrueCost() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Home Loan True Cost 2026 — What You Pay Beyond the EMI",
    description: "Detailed breakdown of all costs in an Indian home loan beyond the headline EMI — processing fees, stamp duty, MOD charges, insurance bundling, pre-EMI interest, and the lifetime interest math.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-06-03",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/learn/loans/home-loan-true-cost" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is the actual cost of a ₹50 lakh home loan over 20 years?", acceptedAnswer: { "@type": "Answer", text: "On a ₹50 lakh principal at 8.75% over 20 years, the headline EMI is ₹44,186 per month. Total EMI outflow over 240 months equals ₹1,06,04,640 — meaning ₹56,04,640 of interest on the original ₹50 lakh. Add upfront costs: processing fee at 1 percent (₹50,000 plus GST), stamp duty and registration in Maharashtra at roughly 6 percent (₹3,00,000 on a ₹50 lakh property), MOD charges (₹50,000), bundled property and decreasing-term insurance (₹40,000 in year 1, paid annually thereafter). The full first-year cash outflow is roughly ₹4,40,000 plus 12 EMIs of ₹44,186 — about ₹9.7 lakh out of pocket in year one alone for a property where you've borrowed ₹50 lakh." } },
      { "@type": "Question", name: "Are home loan processing fees negotiable?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially during festive periods (Diwali, Republic Day) when banks aggressively chase home-loan disbursals. Standard processing fees range from 0.25 percent to 2 percent of sanctioned amount; SBI typically charges 0.35 percent, HDFC 0.5 to 1 percent, ICICI 0.5 to 1 percent. During promotional windows, banks often waive 50 to 100 percent of the fee. Always negotiate before signing the sanction letter — once signed, fee waivers are far harder. If you have a strong CIBIL profile (above 760) or an existing salary account with the lender, processing fees are routinely waived to retain the relationship." } },
      { "@type": "Question", name: "Should I choose floating or fixed rate for my home loan?", acceptedAnswer: { "@type": "Answer", text: "For most borrowers, floating rate wins on long horizons. Floating-rate home loans are linked to the External Benchmark Lending Rate (typically RBI repo plus a fixed spread), which has averaged below fixed-rate offerings over the past two decades. Fixed-rate loans currently carry a 100 to 150 basis point premium over floating. The key advantage of floating: RBI prohibits prepayment penalties on individual floating-rate home loans, giving you complete prepayment flexibility. Fixed-rate loans typically charge 2 to 4 percent foreclosure penalty, which can add ₹50,000 to ₹2 lakh on a partial prepayment of ₹25 lakh. Pick floating unless you have a specific certainty about rate-rise scenarios, which is rare." } },
      { "@type": "Question", name: "What does the bundled insurance actually cover?", acceptedAnswer: { "@type": "Answer", text: "Two policies typically get bundled at sanction. Decreasing-term life insurance covers the outstanding loan balance in case of borrower death — premium ranges from ₹15,000 to ₹50,000 in year one for a ₹50 lakh loan, declining as principal drops. Property insurance covers fire, earthquake, and natural disaster damage to the home — typical annual premium ₹3,000 to ₹8,000. Banks often pitch these as mandatory; legally only the property insurance is mandated by some state laws on registered mortgages. The decreasing-term cover is optional and frequently more expensive than buying equivalent term insurance separately. Run the numbers; you can usually save ₹15,000 to ₹25,000 per year by buying term cover from a low-cost insurer like Aegon or Max Life directly." } },
      { "@type": "Question", name: "How does pre-EMI interest work during construction?", acceptedAnswer: { "@type": "Answer", text: "When you take a home loan for an under-construction property, the bank disburses funds to the builder in tranches linked to construction milestones. Until the loan is fully disbursed and EMI begins, you pay only interest on the disbursed portion — this is called pre-EMI interest. On a ₹50 lakh loan with 60 percent disbursed at month 12, you'd pay roughly ₹22,000 per month in pre-EMI interest. The pre-EMI period is dead money in cash-flow terms — you're paying interest without principal reduction. Two options to manage it: pay simple interest during construction (recommended; preserves your loan tenure) or capitalise the pre-EMI interest into principal at handover (increases your eventual EMI by 8 to 15 percent). Most borrowers benefit from servicing pre-EMI rather than capitalising." } },
      { "@type": "Question", name: "What's the maximum tax saving possible from a home loan?", acceptedAnswer: { "@type": "Answer", text: "Under the old tax regime, three deductions stack on a home loan. Section 24(b) allows up to ₹2 lakh of interest deduction on self-occupied property. Section 80C allows up to ₹1.5 lakh of principal repayment (shared with other 80C items). Section 80EEA, available on loans sanctioned between April 2019 and March 2022 for first-time buyers of homes valued under ₹45 lakh, gives an additional ₹1.5 lakh interest deduction. For a 30 percent slab old-regime taxpayer with all three active, total annual tax saving exceeds ₹1.5 lakh. Under the new tax regime, none of these deductions apply — home loan EMI gets no tax benefit. For most borrowers with active home loans, the old regime's deduction stack is the single biggest reason to stay in old regime." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
      { "@type": "ListItem", position: 4, name: "Home Loan True Cost", item: "https://assurefintech.com/learn/loans/home-loan-true-cost" }
    ]
  };

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
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 28 }}>
            Banks advertise the base rate. We calculate the true cost after hidden fees.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>9.35%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>True effective rate</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹3-5L</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Hidden over 20 years</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Banks compared</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 100px", fontSize: "18px", lineHeight: 1.6, fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)" }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Home Loan True Cost
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>LOANS · TIER 2 GUIDE · COST WATERFALL</div>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed against RBI EBLR framework + Master Direction 2024</span>
        <span>·</span>
        <span>About 10 min read</span>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The cost waterfall — every layer below the EMI</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The EMI calculator on every bank's website shows ₹44,186 per month for a ₹50 lakh loan at 8.75% over 240 months. That number is true and useful, and also incomplete. The lifetime cost has six layers stacked beneath it; only one (the EMI) is visible upfront.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The waterfall below shows them all. Read it as a physical accumulation: the headline EMI is the visible peak; the dark-red blocks are everything else you pay before, during, and through the life of the loan. The combined outflow on a single ₹50 lakh borrowing is more than ₹1.06 crore.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgWaterfall />
        </div>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 1 — processing fee and GST</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Banks charge a processing fee at sanction, typically 0.25 percent to 2 percent of the loan amount. SBI runs at 0.35 percent (capped at ₹10,000 for many products). HDFC and ICICI run 0.5 percent to 1 percent. LIC Housing Finance often goes higher at 0.5 percent to 1.5 percent. Smaller HFCs and NBFCs sometimes hit 2 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a ₹50 lakh loan, that's ₹12,500 to ₹1 lakh upfront. GST at 18 percent applies on top — ₹2,250 to ₹18,000 additional. The fee is generally non-refundable even if you reject the sanction letter after some processing has already happened, though a partial refund is sometimes negotiable.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The negotiation window is real. During festive periods (Diwali, Republic Day, Independence Day) banks routinely waive 50 to 100 percent of the processing fee on home loans to chase disbursal targets. Walk in with a CIBIL above 760 and a competing sanction letter from another bank, and the fee drops to zero in most negotiations. The trick is to negotiate before signing — once signed, waivers become far harder to extract.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 2 — stamp duty and registration (the largest single hit)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Stamp duty is paid to the state government on the property purchase agreement, computed as a percentage of the property value or circle rate (whichever is higher). Registration is paid for recording the transfer at the sub-registrar. Together, these vary dramatically by state.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Maharashtra: 5 percent stamp + 1 percent registration = 6 percent of property value, with surcharges in metro cities pushing effective rate to 6.5 percent. Karnataka: 5 percent stamp + 1 percent registration. Delhi: 4 percent stamp + 1 percent registration for women buyers (6 percent + 1 percent for men). Tamil Nadu: 7 percent stamp + 4 percent registration combined. Telangana: 4 percent + 0.5 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a ₹70 lakh apartment in Mumbai (assuming ₹50 lakh loan plus ₹20 lakh own contribution), stamp + registration is roughly ₹4.5 lakh — paid in cash at registration, not financeable through the home loan. This is the single largest upfront hit and the reason most homebuyers underestimate their down-payment requirement.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Several states offer reduced rates for women buyers (Delhi, Haryana, Punjab) or first-time buyers (Maharashtra had the 1 percent concession during the 2020-22 COVID-relief window, since restored). Verify the state-specific rate at your sub-registrar's office or through the property lawyer; circle-rate methodology can also vary, sometimes using a per-square-foot rate rather than transaction value as the base.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 3 — MOD charges and legal fees</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          MOD stands for Memorandum of Deposit of Title Deeds — the legal instrument that creates the equitable mortgage in favour of the bank. Registration of the MOD costs roughly 0.1 percent to 0.2 percent of the loan amount in most states, payable to the sub-registrar.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a ₹50 lakh loan, MOD charges run ₹5,000 to ₹10,000. Some states (Maharashtra, Karnataka) have additional registration cesses pushing it slightly higher. Bank lawyer fees for title verification add another ₹5,000 to ₹15,000. Property valuer fees, paid to the bank-empanelled valuer for the mandatory site inspection, range from ₹2,500 to ₹5,000.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Add it all up and the legal-and-MOD layer typically costs ₹25,000 to ₹50,000. Negotiable to a small extent — banks sometimes absorb the MOD if you're a high-value or relationship customer — but generally not zero. Always ask for a written breakdown before disbursal so there are no surprises at signing.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 4 — the insurance bundle (often optional, often mis-sold)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Banks routinely bundle two insurance products at sanction. Decreasing-term life insurance covers the outstanding loan balance — premium ranges from ₹15,000 to ₹50,000 in year one for a ₹50 lakh loan. Property insurance covers fire, flood, earthquake — typical annual premium ₹3,000 to ₹8,000.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The decreasing-term cover is often pitched as mandatory by relationship managers. Legally, it is not. Property insurance is sometimes mandated by state laws on registered mortgages but the cover can be sourced from any insurer of your choice. The bank-pitched insurance is usually 30 to 50 percent more expensive than equivalent cover from a standalone insurer.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A practical example. The bank-pitched decreasing-term cover for ₹50 lakh sum assured costs ₹35,000 in year 1. Equivalent term insurance from Max Life or Aegon Life on the same sum assured costs ₹14,000 to ₹18,000 per year for a healthy 35-year-old non-smoker. Over 20 years, the bank's bundled cover costs roughly ₹4 lakh more than the open-market alternative.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The right approach: politely decline the bundled cover, buy term insurance separately for sum assured equal to your loan balance plus other dependant needs, and source property insurance from any IRDAI-registered insurer. The bank cannot legally refuse loan disbursement on this ground; they can express disappointment, but the loan goes through.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 5 — pre-EMI interest during construction</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For under-construction properties, the bank disburses funds to the builder in tranches linked to construction milestones. Until your loan is fully disbursed and full EMI begins, you pay only interest on the disbursed portion. This is pre-EMI interest, and it can run for 18 to 36 months on typical metro projects.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The arithmetic. On a ₹50 lakh loan with 60 percent disbursed at the 12-month mark, the disbursed balance is ₹30 lakh. At 8.75% interest, monthly pre-EMI interest is roughly ₹22,000. Over 24 months of construction averaging 50 percent disbursement, you'd pay roughly ₹5.3 lakh in pre-EMI interest before full EMI even starts.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Two ways to handle pre-EMI. First option: pay it monthly as it accrues (recommended). This preserves your loan tenure and prevents capitalisation. Second option: capitalise the pre-EMI into principal at handover. The capitalised amount adds to your ₹50 lakh starting principal, increasing your eventual EMI by 8 to 15 percent. Most borrowers benefit from servicing pre-EMI as cash flow allows.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Pre-EMI interest is also tax-deductible under Section 24(b), but the deduction is claimable only after possession is taken. The accumulated pre-EMI interest is split into 5 equal annual deductions starting the year of completion, subject to the overall ₹2 lakh cap. So a ₹5.3 lakh accumulated pre-EMI translates to ₹1.06 lakh of additional 24(b) deduction per year for 5 years — meaningful tax shelter for old-regime filers.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Layer 6 — lifetime interest (the biggest line in the waterfall)</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a ₹50 lakh loan at 8.75% over 240 months, total interest paid is ₹56,04,640 — more than the original principal. This is the largest single component of the true cost. It accumulates slowly in early years (when most of the EMI is interest) and accelerates as the loan ages.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The split: in year 1, roughly 80 percent of each EMI is interest and only 20 percent reduces principal. By year 10, the split is closer to 50-50. By year 18, 80 percent of the EMI is principal reduction and only 20 percent is interest. The pattern is structural to reducing-balance EMI math, not to any specific bank's loan.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Implication: a prepayment in year 1 saves the most absolute interest because each rupee of principal reduction in year 1 carries 19 more years of interest accrual ahead of it. The same prepayment in year 15 saves much less. If you have a windfall (bonus, RSU vesting, inheritance), apply it during years 1 to 7 of the loan tenure for maximum interest savings.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgEmiSplit />
        </div>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Floating rate volatility — the hidden cost or saving</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          From October 2019 onwards, RBI mandated External Benchmark Lending Rate (EBLR) for all new retail floating-rate loans. Most home loans are now linked to RBI repo plus a fixed spread. When repo moves, your rate moves within 3 months. This creates real EMI volatility.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A 50 basis point hike on a ₹50 lakh loan at 20-year tenure adds about ₹1,650 to the monthly EMI. A 50 basis point cut reduces it by roughly ₹1,580. Banks usually keep the EMI constant on small rate changes and adjust the tenure; over the life of the loan, this can extend or shorten the tenure by 12 to 30 months.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The chart below shows three rate scenarios over the 20-year tenure on the same ₹50 lakh loan. The cumulative savings or cost of being right or wrong on the rate trajectory is meaningful — ₹4 to ₹6 lakh of total interest variance.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgRateRisk />
        </div>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The tax shelter side — the part most articles skip</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The cost waterfall is real, but so is the tax shelter. Under the old regime, three deductions stack on a home loan and together can save ₹1.5 lakh of annual tax for a 30 percent slab filer.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Section 24(b) deducts up to ₹2 lakh of interest paid on self-occupied property per year. Section 80C deducts up to ₹1.5 lakh of principal repayment, shared with other 80C items. Section 80EEA, available on loans sanctioned between April 2019 and March 2022 for first-time buyers of homes valued under ₹45 lakh, gives an additional ₹1.5 lakh interest deduction outside the 24(b) cap.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          For a 30 percent slab old-regime taxpayer with all three deductions active, the total annual tax saving is roughly ₹1,55,000 — recovering ₹31 lakh of the lifetime interest cost over the 20-year loan tenure. This effectively brings the post-tax interest cost from ₹56 lakh down to ₹25 lakh, dramatically improving the home loan economics.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          New regime forfeits all three. Under the new regime, no portion of home loan EMI gets tax benefit. For most active home loan borrowers earning over ₹15 lakh, the old regime continues to win precisely because of the home loan deduction stack. Run the comparison in our <Link href="/tools/income-tax-calculator" style={{ color: COLOR }}>income tax calculator</Link>.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgTaxShelter />
        </div>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How to negotiate the true cost down</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The headline rate is set by the bank's published EBLR plus spread. The other layers are surprisingly negotiable. Five levers that consistently work.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Get competing sanction letters.</strong> Apply at two or three banks simultaneously. The cost of multiple applications is small (some processing fee at each, sometimes refundable) but the bargaining position you create at the final negotiation is substantial. Banks routinely match or beat a competing offer once they see it in writing.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Time the application during festive offer windows.</strong> Diwali (Oct-Nov), New Year, and Republic Day periods routinely see processing fee waivers, rate discounts of 5 to 15 basis points, and free property insurance bundles. Avoid applying in the financial-year-end (March) crunch when banks are processing volume and have less negotiation flexibility.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Decline bundled insurance, source separately.</strong> As discussed above, ₹15,000 to ₹25,000 of annual savings on insurance alone, compounding over the loan tenure to ₹3 to 5 lakh.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Request rate review every 24 to 36 months.</strong> Banks segment their loan book by vintage; older loans often carry higher spreads. After 2 to 3 years of clean repayment, request a rate match against the bank's current new-customer rate. The bank either matches (costs them nothing) or you balance-transfer to a competitor (which costs them the entire loan). They almost always match.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Make targeted prepayments in years 1-7.</strong> A ₹2 lakh prepayment in year 2 of a 20-year ₹50 lakh loan saves roughly ₹4.5 lakh of total interest. Same prepayment in year 14 saves ₹50,000. The interest-saving multiplier is highest in the first third of the loan; structure your prepayment plan around that. Some banks attempt to default the prepayment treatment to "reduce EMI, keep tenure" rather than "reduce tenure, keep EMI." The latter saves roughly three times more total interest. Always specify the treatment in writing at the time of the prepayment instruction; if the bank applies it the wrong way, raise it as a service request.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The under-construction trap and how to avoid it</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Buying an under-construction property looks cheaper on paper than a ready-to-move-in flat — typically 10 to 20 percent lower per square foot. The cost gap usually closes when you account for pre-EMI interest, construction-period rent (since you're paying rent on your current home while waiting for delivery), and project-delay risk that has plagued metro real estate since 2014.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Pre-EMI math we covered above. Construction-period rent is the bigger silent cost. A buyer in Bangalore renting at ₹35,000 per month while their flat is built over 30 months pays ₹10.5 lakh in rent during construction — money that doesn't reduce the eventual loan principal or build any equity. Combined with pre-EMI of ₹6 lakh, the effective extra cost of the under-construction route is ₹16 lakh on top of the headline price gap.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The decision becomes meaningful only when the per-square-foot price gap exceeds 20 percent and the developer has a strong delivery track record (post-RERA, this is verifiable via the project's RERA registration page). For under-construction in tier-1 cities with a developer of mixed track record, the ready-to-move-in option usually wins on total cost-of-purchase plus risk-adjusted basis. RERA also gives you a documented escalation path if the project is delayed; complaints to the state RERA authority resolve faster than civil court routes and have produced compensation rulings against several large developers since 2018.
        </p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What this looks like as a homeowner profile</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Take Rohan and Priya, 32 and 30, dual-income couple in Pune. Combined gross ₹35 lakh per year. Looking at a ₹85 lakh apartment, planning ₹65 lakh as home loan over 20 years, ₹20 lakh as own contribution.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Their visible costs at signing: ₹65,000 processing fee at HDFC, ₹4,25,000 stamp duty (Maharashtra), ₹65,000 MOD and legal, ₹50,000 first-year insurance bundle. Cash needed at sanction: ₹6,05,000 over and above the ₹20 lakh down payment. Total cash out at signing: ₹26.05 lakh — substantially more than the headline ₹20 lakh down payment.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Their first-year EMI on ₹65 lakh at 8.75% is ₹57,442 per month. Annual EMI outflow ₹6,89,304. Tax saving under old regime: roughly ₹1,55,000 (full 24(b) + 80C + 80EEA stack). Net first-year cost of housing: roughly ₹5,34,000. As a percentage of their ₹35 lakh gross, that's 15 percent of income — within the 30 to 40 percent debt-to-income comfort zone.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Lifetime cost on the ₹65 lakh loan: ₹72,86,000 of interest, ₹1,37,86,000 total outflow on the ₹65 lakh principal. Tax shelter recovers roughly ₹40 lakh of that over 20 years. Net post-tax interest cost: ₹33 lakh. Add upfront costs and the ₹85 lakh property eventually costs them around ₹1.45 crore including all interest, fees, taxes — net of tax shelter, around ₹1.05 crore. The 23 percent gap between headline price and true cost is the structural reality of debt-financed home ownership.
        </p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 18px" }}>Frequently asked questions</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 16, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 12, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>
      <section style={{ marginBottom: 28, padding: "20px 22px", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-soft)" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>RELATED ON ASSURE FINTECH</h3>
        <ul style={{ fontSize: 15, paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><Link href="/tools/emi-calculator" style={{ color: COLOR }}>EMI calculator</Link>. Run your own loan numbers in 30 seconds.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/loans/home-loan-eligibility" style={{ color: COLOR }}>Home loan eligibility</Link>. The income, CIBIL, and LTV math.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/loans/prepayment-strategy" style={{ color: COLOR }}>Prepayment strategy</Link>. When prepaying beats investing.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/loans/balance-transfer" style={{ color: COLOR }}>Balance transfer</Link>. The rate-arbitrage move that saves lakhs.</li>
          <li><Link href="/learn/tax/section-24b" style={{ color: COLOR }}>Section 24(b) interest deduction</Link>. The ₹2 lakh tax shelter that anchors the maths.</li>
        </ul>
      </section>
      <section style={{ marginBottom: 28, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>RBI EBLR framework circular, October 2019 — external benchmark linking</li>
          <li style={{ marginBottom: 6 }}>RBI Master Direction on Floating Rate Loans, 2024 amendments</li>
          <li style={{ marginBottom: 6 }}>State stamp duty schedules — Maharashtra, Karnataka, Delhi (verified June 2026)</li>
          <li style={{ marginBottom: 6 }}>Section 24(b), 80C, 80EEA — Income Tax Act 1961 provisions</li>
          <li>Bank tariff pages — processing fee schedules verified individually on June 3, 2026</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> All figures in this article are illustrative based on a ₹50 lakh principal at 8.75% over 240 months, verified against the RBI EBLR framework as of {UPDATED}. Actual loan offers depend on your CIBIL, income, employment, property valuation, and lender-specific underwriting. Stamp duty and registration rates vary by state and are subject to change at the state government's discretion. Section 24(b), 80C, and 80EEA tax benefits apply only under the old tax regime. This article is informational and does not constitute financial or tax advice. Consult a SEBI-registered advisor or chartered accountant for personalised guidance, especially for material decisions on rate, tenure, or regime.
        </p>
            <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 4 }}>Source: <a href="https://sbi.co.in/web/interest-rates/interest-rates/loan-schemes-interest-rates" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>sbi.co.in</a></p>
      </footer>
    </main>
    </>
  );
}
