import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Health Insurance for Parents Above 60: Real Prices, Real Waiting Periods, Real Traps (2026)",
  description: "Premium jumps 5x between age 35 and 60. Pre-existing disease waiting periods, room rent traps, and honest comparison of top plans.",
  alternates: { canonical: "/learn/insurance/health-insurance-for-parents" },
  openGraph: {
    title: "Health Insurance for Parents Above 60: Real Prices, Real Waiting Periods, Real Traps (2026)",
    description: "Premium jumps 5x between age 35 and 60. Pre-existing disease waiting periods, room rent traps, and honest comparison of top plans.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/insurance/health-insurance-for-parents
// Template: Buying guide for specific audience
// Color: #e11d48 | Updated: June 4, 2026

const COLOR = "#e11d48";
const UPDATED = "June 4, 2026";

const SvgPremiumVsAge = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Health insurance annual premium versus age showing how premium jumps significantly at age 55 60 and 65 for a 5 lakh sum insured policy" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ANNUAL PREMIUM vs AGE · ₹5L SUM INSURED · STAR HEALTH COMPREHENSIVE · NON-SMOKER</text>
    <line x1="60" y1="220" x2="700" y2="220" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="220" stroke="var(--border)" />
    {[{ age: "35", premium: 8500, x: 100 }, { age: "45", premium: 14200, x: 200 }, { age: "50", premium: 19800, x: 300 }, { age: "55", premium: 28500, x: 400 }, { age: "60", premium: 42000, x: 500 }, { age: "65", premium: 58000, x: 600 }, { age: "70", premium: 72000, x: 700 }].map(({ age, premium, x }, i) => (
      <g key={age}>
        <rect x={x - 18} y={220 - premium / 400} width="36" height={premium / 400} fill={premium > 40000 ? "#dc2626" : premium > 25000 ? "#f97316" : COLOR} rx="3" opacity="0.8" />
        <text x={x} y={213 - premium / 400} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={premium > 40000 ? "#dc2626" : COLOR}>₹{(premium / 1000).toFixed(0)}k</text>
        <text x={x} y="234" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Age {age}</text>
      </g>
    ))}
    <text x="20" y="252" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Premium at age 60 is 5x that at age 35 for same coverage. At 70, it's 8.5x. This is why buying health insurance for parents when they're in their 50s — before pre-existing conditions set in — is critical.</text>
  </svg>
);

const SvgInsurerSeniorComparison = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Health insurance comparison for 60 year old parents across Star Health Niva Bupa HDFC Ergo Care Health and New India showing premium waiting period and entry age limit" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SENIOR HEALTH INSURANCE COMPARISON · ₹5L COVER · BOTH PARENTS AGE 60-62 · JUNE 2026</text>
    {[{ h: "Insurer" }, { h: "Annual Premium" }, { h: "Max Entry Age" }, { h: "PED Waiting" }, { h: "Room Limit" }, { h: "Verdict" }].map(({ h }, i) => {
      const xs = [20, 160, 290, 390, 490, 590];
      return <rect key={h} x={xs[i]} y="35" width={[130, 120, 90, 90, 90, 130][i]} height="24" fill={COLOR}><text x={xs[i] + [130, 120, 90, 90, 90, 130][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Star Senior Citizen", "₹42,000/yr", "75 yrs", "2-4 years", "Single AC", "Best for 60-65 age band"],
      ["Niva Bupa Senior", "₹48,000/yr", "No limit", "3 years", "No limit", "Best room coverage, higher premium"],
      ["Care Senior", "₹38,000/yr", "No limit", "3-4 years", "No limit", "Good value, check network hospitals"],
      ["HDFC Ergo (Optima)", "₹51,000/yr", "No limit", "2 years", "No limit", "Best waiting period for PED"],
      ["New India (Varistha)", "₹28,000/yr", "80 yrs", "1 year (only)", "1% SI/day", "Cheapest but room rent trap risk"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 36} width={700} height="36" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 160, 290, 390, 490, 590];
          const isGood = cell.includes("No limit") || cell.includes("Best");
          const isBad = cell.includes("1%") || cell.includes("4 years");
          return <text key={ci} x={xs[ci] + 5} y={81 + ri * 36} fontFamily="system-ui" fontSize="10" fill={isGood ? "#16a34a" : isBad ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="255" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Premiums are approximate for a couple, age 60-62, non-smoking, ₹5L SI, no major PEDs. Actual premiums vary — always get quotes for your parents' specific age and health profile.</text>
  </svg>
);

const SvgWaitingPeriod = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Pre-existing disease waiting period comparison showing that diseases like diabetes hypertension and heart conditions have 2 to 4 year waiting periods before insurance pays for related claims" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">PRE-EXISTING DISEASE WAITING PERIOD · THE BIG TRAP FOR SENIOR CITIZEN POLICIES</text>
    {[
      { condition: "Diabetes (controlled)", wait: "2-3 years", impact: "No diabetes-related hospitalization claim for 2-3 years from policy start", color: "#f97316" },
      { condition: "Hypertension", wait: "2-3 years", impact: "No BP-related claims including cardiac events for 2-3 years", color: "#f97316" },
      { condition: "Heart disease / CAD", wait: "3-4 years", impact: "No cardiac surgery, stenting, or related treatment for 3-4 years", color: "#dc2626" },
      { condition: "Arthritis / Joint issues", wait: "2-4 years", impact: "Joint replacement surgeries excluded for 2-4 years", color: "#dc2626" },
      { condition: "Cancer (if disclosed)", wait: "4 years", impact: "Most insurers won't cover at all — or exclude permanently", color: "#7f1d1d" },
      { condition: "General illness / New disease", wait: "30 days", impact: "30-day general waiting period for non-accident claims", color: "#f59e0b" },
    ].map(({ condition, wait, impact, color }, i) => (
      <g key={condition}>
        <rect x="20" y={35 + i * 30} width={700} height="22" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={50 + i * 30} fontFamily="system-ui" fontSize="11" fill="var(--text)">{condition}</text>
        <rect x="240" y={37 + i * 30} width="70" height="18" fill={color} rx="3" />
        <text x="275" y={50 + i * 30} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{wait}</text>
        <text x="318" y={50 + i * 30} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{impact.slice(0, 60)}</text>
      </g>
    ))}
    <text x="20" y="215" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Buy before conditions are diagnosed. Once your parent has diabetes or hypertension documented, it's a PED and has a waiting period at every new insurer. Existing insurers retain the old waiting period on renewal.</text>
  </svg>
);

const SvgSuperTopUpMath = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Super top-up insurance math showing how a 5 lakh base policy plus 20 lakh super top-up gives 25 lakh coverage for much lower total premium than buying 25 lakh directly" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">SUPER TOP-UP: HOW TO GET ₹25L COVERAGE FOR THE PRICE OF ₹5L · SMART STRATEGY FOR PARENTS</text>
    <rect x="20" y="38" width="320" height="140" fill={COLOR} rx="8" opacity="0.25" stroke={COLOR} strokeWidth="1" />
    <text x="180" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>DIRECT ₹25L POLICY</text>
    <text x="180" y="84" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Sum Insured: ₹25 lakh</text>
    <text x="180" y="104" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Annual Premium (age 62):</text>
    <text x="180" y="124" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="800" fill={COLOR}>₹1,05,000/yr</text>
    <text x="180" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Large premium, whole amount</text>
    <text x="180" y="165" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">covers from ₹1 of claim</text>
    <rect x="380" y="38" width="320" height="140" fill="#16a34a" rx="8" opacity="0.25" stroke="#16a34a" strokeWidth="1" />
    <text x="540" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">₹5L BASE + ₹20L TOP-UP</text>
    <text x="540" y="84" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Base policy: ₹5L (₹42,000/yr)</text>
    <text x="540" y="104" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Super top-up: ₹20L above ₹5L threshold</text>
    <text x="540" y="124" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="800" fill="#16a34a">₹52,000/yr total</text>
    <text x="540" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Same ₹25L effective coverage</text>
    <text x="540" y="165" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Saves ₹53,000/year</text>
    <rect x="200" y="196" width="320" height="30" fill="#16a34a" rx="4" />
    <text x="360" y="216" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">Super top-up saves ₹53,000/year = ₹5.3L over 10 years for same coverage</text>
    <text x="20" y="235" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Super top-up kicks in only when a single hospitalization crosses the deductible (₹5L here). Perfect for catastrophic coverage. Base policy handles routine hospitalizations.</text>
  </svg>
);

const SvgFlaterVsIndividual = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Floater versus individual health insurance policy comparison for parents showing that individual policies are better for older parents with different health profiles" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">FLOATER vs INDIVIDUAL POLICY FOR PARENTS · WHICH ONE TO BUY?</text>
    <rect x="20" y="38" width="320" height="130" fill="var(--raise)" stroke={COLOR} strokeWidth="1" rx="8" />
    <text x="180" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>FLOATER (₹5L shared)</text>
    <text x="180" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Single policy covers both parents</text>
    <text x="180" y="98" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">If Dad uses all ₹5L: Mom has zero left</text>
    <text x="180" y="116" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#dc2626">Risk: double hospitalization in same year</text>
    <text x="180" y="134" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#16a34a">Benefit: slightly lower premium</text>
    <text x="180" y="155" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Annual restore feature helps — check for it</text>
    <rect x="380" y="38" width="320" height="130" fill="var(--surface, #f0fdf4)" stroke="#16a34a" strokeWidth="1" rx="8" />
    <text x="540" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">INDIVIDUAL (₹5L each)</text>
    <text x="540" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Separate ₹5L for each parent</text>
    <text x="540" y="98" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Dad's claims don't affect Mom's cover</text>
    <text x="540" y="116" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#16a34a">Better for parents with different health profiles</text>
    <text x="540" y="134" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#dc2626">Higher total premium by ~15-20%</text>
    <text x="540" y="155" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Recommended for parents above 65</text>
    <text x="20" y="195" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">For parents above 65 or with different existing conditions, individual policies are strongly recommended. The peace of mind from separate coverage outweighs the ~20% premium premium.</text>
  </svg>
);

export default function PageHealthInsuranceParents() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the best health insurance for parents above 60 in India?", "acceptedAnswer": { "@type": "Answer", "text": "For ages 60-65, Star Health Senior Citizen Red Carpet and HDFC Ergo Optima Restore are the top picks. Star is cheaper; HDFC Ergo has better room rent terms (no limit) and a 2-year PED waiting period (shorter than most). For ages 65+, Care Senior and Niva Bupa Senior offer no upper age limit for entry and lifetime renewability. Avoid low-premium traps like New India Varistha unless you understand its room rent limit implications." } },
      { "@type": "Question", "name": "Is it too late to buy health insurance for parents with diabetes or hypertension?", "acceptedAnswer": { "@type": "Answer", "text": "Not too late, but harder. Diabetes and hypertension are pre-existing diseases (PEDs) — any new insurer will have a 2-4 year waiting period before covering treatment for these conditions and their complications. During the waiting period, all non-related claims are still covered. Buy now, start the waiting period clock, and you'll have full coverage in 2-4 years. The mistake is waiting further — conditions worsen with age and insurers may load premiums or exclude conditions entirely." } },
      { "@type": "Question", "name": "Should I add parents to my family floater policy?", "acceptedAnswer": { "@type": "Answer", "text": "Generally no, especially if parents are above 60. Adding elderly parents to a family floater dramatically increases the premium for everyone and puts the entire family's coverage at risk if one parent has a large hospitalization. Parents above 60 should have their own separate individual policies with appropriate sum insured. You maintain cleaner coverage and typically lower total premium by separating your parents' health insurance from your family policy." } },
      { "@type": "Question", "name": "How much sum insured should I buy for parents?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum ₹5 lakh per parent for basic coverage; ₹10 lakh is ideal for urban India with private hospital costs. But the smartest approach: buy a ₹5L base policy (lower premium) and add a ₹15-20L super top-up policy. The super top-up kicks in for any hospitalization exceeding ₹5L — exactly the scenario for major surgeries, cancer treatment, or organ care where costs cross ₹5-20L. Total effective coverage: ₹20-25L at roughly half the premium of a direct ₹25L policy." } },
      { "@type": "Question", "name": "What is a super top-up and how does it work for parents?", "acceptedAnswer": { "@type": "Answer", "text": "A super top-up (also called aggregate deductible) policy kicks in when total hospitalization expenses in a policy year exceed a threshold amount (the deductible). For example, a ₹20L super top-up with ₹5L deductible: your base policy covers the first ₹5L of any claim, and the top-up covers everything from ₹5L to ₹25L. Super top-up premiums are significantly lower than a full ₹25L policy because the insurer's risk is only in the catastrophic range. Star Health, Niva Bupa, and HDFC Ergo all offer super top-up products." } },
      { "@type": "Question", "name": "What happens to parents' health insurance policy if they are not insurable anymore?", "acceptedAnswer": { "@type": "Answer", "text": "IRDAI mandates lifetime renewability for health insurance policies — insurers cannot cancel a policy once issued, even if the insured develops serious conditions during the policy tenure. This is why it's critical to get parents enrolled before serious conditions are diagnosed. Once enrolled, the policy is renewable for life as long as premiums are paid, and the insurer cannot refuse renewal or add new exclusions for conditions that develop after policy issuance." } },
      { "@type": "Question", "name": "Can I port my parents' health insurance to a better insurer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. IRDAI's portability guidelines allow switching insurers while retaining the waiting period credit from the old policy. If your parent's old policy is 3 years old, a new insurer must credit 3 years of waiting period completion. This means if the new insurer has a 4-year PED waiting period, your parents only have 1 more year to wait (not 4 years from scratch). Apply for portability at least 45 days before the renewal date — IRDAI mandates that the new insurer must accept portability requests." } },
      { "@type": "Question", "name": "What's the cheapest way to get comprehensive coverage for senior parents?", "acceptedAnswer": { "@type": "Answer", "text": "Three-layer approach: CGHS or ESIC if eligible (free for government/PSU employees' parents in some schemes). Base policy ₹3-5L (lower premium, covers routine hospitalization). Super top-up ₹15-20L with ₹5L deductible (covers catastrophic events at low additional cost). This gives effective ₹20-25L coverage for significantly less than a single large policy. If parents are corporate employees themselves or were, check if their employer covers post-retirement retiree healthcare — some PSUs and large private companies extend coverage." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Health Insurance for Parents Above 60: Real Options, Real Prices, Real Traps (June 2026)", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
    { "@type": "ListItem", position: 4, name: "Health Insurance for Parents", item: "https://assurefintech.com/learn/insurance/health-insurance-for-parents" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1D0309, #480917, #1D0309)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #e11d4822, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Insurance · Health · Senior Citizen Policies
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Health Insurance for Parents Above 60: Real Prices, Real Waiting Periods, Real Traps (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 12 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Health Insurance for Parents</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Premium jumps 5x between age 35 and 60. Pre-existing diseases mean your parents may not be covered for their most likely health events for 2-4 years. And the cheapest policies have room rent traps. Here's what to actually buy.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Why Parents' Health Insurance Is a Different Problem</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Buying health insurance for a 30-year-old is straightforward. Buy any decent plan, it's affordable, and the probability of a major claim in the next 10 years is low. Buying for parents above 60 is a completely different exercise.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The premium is 4-8x higher. Pre-existing conditions (diabetes, hypertension, heart issues — conditions extremely common in Indians above 60) trigger multi-year waiting periods. Insurers are stricter about what they'll cover. And the stakes are higher — the probability of hospitalization above 60 is significantly higher than at 35.</p>
        <SvgPremiumVsAge />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The key insight from the premium chart: buy before conditions are diagnosed. A 55-year-old with no declared pre-existing diseases gets a relatively manageable ₹28,500 premium. The same person one year later, after a diabetes diagnosis, will face a 2-3 year PED waiting period at any new insurer and potentially a loaded premium of ₹35,000-40,000. The gap between healthy-at-55 and diagnosed-at-56 can cost you years of full coverage.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Top Insurers for Senior Citizens: June 2026</h2>
        <SvgInsurerSeniorComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>HDFC Ergo Optima Restore is arguably the best overall for parents with pre-existing conditions: 2-year PED waiting period (shortest in the market), no room rent limit, and annual restoration of sum insured (if SI is exhausted in one claim, it's restored for the rest of the year). Premium is higher but the coverage quality is worth it for parents who are likely to actually use the policy.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Star Senior Citizen Red Carpet is the most popular senior citizen-specific product. It's designed for 60-75 year olds and accepts applicants without requiring extensive pre-policy health checkups. The trade-off: room rent is limited to single AC room (no proportionate deduction clause, just a direct limit on room type). Their hospital network in tier-2 cities is extensive — a meaningful advantage.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Avoid New India Assurance Varistha unless the lower premium is genuinely unaffordable. The 1% of SI room rent limit + proportionate deduction clause is a real risk for senior citizen policyholders who are more likely to require private rooms post-surgery for comfort and recovery.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Pre-Existing Disease Trap: The Real Coverage Gap</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is the single biggest source of claim rejection and disappointment for senior citizen policyholders. Almost every Indian above 60 has at least one pre-existing condition — and all of them have waiting periods.</p>
        <SvgWaitingPeriod />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most painful scenario: an elderly parent is diagnosed with diabetes in October, you buy health insurance in December, and they need bypass surgery in March. The bypass claim will be rejected because cardiac conditions are complications of diabetes, and the PED waiting period hasn't elapsed. You'll receive a claim for "unrelated" conditions, but nothing cardiac or vascular.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The solution is timing and honesty. When buying, declare all pre-existing conditions accurately — non-disclosure leads to rejected claims, which is worse than a higher premium. Once enrolled, the waiting period clock starts. Don't switch insurers during the waiting period — you'd restart the clock at the new insurer unless you use IRDAI's portability process correctly.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Floater vs Individual: Which for Parents?</h2>
        <SvgFlaterVsIndividual />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For parents above 65 or with different health conditions, individual policies are the clear recommendation. The risk with a floater: if your father has a major hospitalization that exhausts most of the ₹5L shared cover, your mother has minimal coverage left for the rest of that year. For a senior couple, this scenario is not hypothetical.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Annual restore feature partially mitigates this. Some policies (HDFC Ergo Optima Restore, Niva Bupa Health Companion) automatically restore the full SI if it's exhausted — even for the same person in the same year. If you're buying a floater, this feature is non-negotiable for senior citizen coverage.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Smart Move: Base Policy + Super Top-Up</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Most families buying health insurance for elderly parents face a dilemma: ₹5L feels too low (a major surgery in a private hospital easily costs ₹4-8L), but ₹20L+ policies have very high premiums for ages 60+.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The solution is a two-layer approach: a base ₹5L individual policy for each parent, plus a ₹20L super top-up policy with ₹5L deductible. The super top-up covers any single hospitalization from ₹5L to ₹25L — exactly the catastrophic event zone where regular senior coverage falls short.</p>
        <SvgSuperTopUpMath />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Star Health, Niva Bupa, and HDFC Ergo all offer super top-up products. Star's super top-up is particularly affordable. The total premium (base + top-up) for a 62-year-old is roughly ₹52,000/year versus ₹1,05,000/year for a direct ₹25L policy. The saving is ₹53,000/year — real money for most families managing multiple financial responsibilities.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>One important nuance: super top-up is aggregate-based (across all hospitalizations in a year) while regular top-up is per-hospitalization. Always buy super top-up, not regular top-up. See also our <Link href="/learn/insurance/copay-vs-no-copay" style={{ color: COLOR }}>copay guide</Link>, our <Link href="/learn/insurance/room-rent-trap" style={{ color: COLOR }}>room rent trap article</Link>, and the <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link>.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link> · <Link href="/learn/insurance/room-rent-trap" style={{ color: COLOR }}>room rent trap</Link> · <Link href="/learn/insurance/copay-vs-no-copay" style={{ color: COLOR }}>copay vs no copay</Link> · <Link href="/learn/insurance/claim-settlement-ratios-2026" style={{ color: COLOR }}>claim settlement ratios 2026</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: premiums approximate for age 60-62, non-smoking, ₹5L SI from insurer websites as of {UPDATED}. Policy terms from product wordings. IRDAI portability guidelines from irdai.gov.in. Not financial advice. Get personalized quotes before buying.</footer>
    </main>
    </>
  );
}
