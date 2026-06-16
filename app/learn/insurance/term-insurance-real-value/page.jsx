import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Is 1 Crore Term Cover Actually Enough? The Inflation Math Your Agent Won't Show You",
  description: "After 30 years of inflation, 1 crore has the purchasing power of 17 lakh. We calculate how much term cover you actually need in 2026.",
  alternates: { canonical: "/learn/insurance/term-insurance-real-value" },
  openGraph: {
    title: "Is 1 Crore Term Cover Actually Enough? The Inflation Math Your Agent Won't Show You",
    description: "After 30 years of inflation, 1 crore has the purchasing power of 17 lakh. We calculate how much term cover you actually need in 2026.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/insurance/term-insurance-real-value
// Template: Math walkthrough + myth buster
// Color: #e11d48 | Updated: June 4, 2026

const COLOR = "#e11d48";
const UPDATED = "June 4, 2026";

const SvgInflationErosion = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Value of 1 crore rupees in future years after 6 percent inflation showing it becomes equivalent to only 17 lakh rupees in todays money after 30 years" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHAT ₹1 CRORE COVER IS REALLY WORTH · 6% ANNUAL INFLATION ASSUMPTION</text>
    <line x1="60" y1="220" x2="700" y2="220" stroke="var(--border)" />
    <line x1="60" y1="40" x2="60" y2="220" stroke="var(--border)" />
    {[{ yr: "Today", val: 100, x: 60 }, { yr: "5 yrs", val: 74.7, x: 190 }, { yr: "10 yrs", val: 55.8, x: 320 }, { yr: "15 yrs", val: 41.7, x: 450 }, { yr: "20 yrs", val: 31.2, x: 580 }, { yr: "30 yrs", val: 17.4, x: 700 }].map(({ yr, val, x }, i) => (
      <g key={yr}>
        <rect x={x - 20} y={220 - val * 1.6} width="40" height={val * 1.6} fill={val > 50 ? COLOR : "#dc2626"} rx="3" opacity={0.4 + i * 0.1} />
        <text x={x} y={213 - val * 1.6} textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>₹{val}L</text>
        <text x={x} y="235" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{yr}</text>
      </g>
    ))}
    <text x="20" y="252" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">₹1 Crore feels like a lot today. At 6% inflation, its purchasing power is ₹17.4L in 30 years. A 30-year-old buying ₹1Cr cover today is leaving their family with ₹17L equivalent at age 60. Not enough.</text>
  </svg>
);

const SvgCoverageFormula = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Life cover calculation formula showing income replacement method recommending 15 to 20 times annual income with worked example" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW MUCH COVER DO YOU ACTUALLY NEED? · INCOME REPLACEMENT METHOD</text>
    <rect x="20" y="38" width="680" height="60" fill="var(--surface, #fef2f2)" stroke={COLOR} strokeWidth="1.5" rx="8" />
    <text x="360" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill={COLOR}>Sum Assured = (Annual Income × 15-20) + All Outstanding Loans + Future Goals</text>
    <text x="360" y="86" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Minus: existing savings + existing insurance cover + spouse's income (if any)</text>
    <text x="20" y="118" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">Rahul's example: ₹18L annual income, ₹30L home loan, ₹10L goal (child education)</text>
    <text x="20" y="138" fontFamily="system-ui" fontSize="12" fill="var(--text)">Gross need: 18L × 17 = ₹3.06Cr + ₹30L + ₹10L = ₹3.46Cr</text>
    <text x="20" y="155" fontFamily="system-ui" fontSize="12" fill="var(--text)">Minus: ₹8L savings + ₹25L existing LIC policy = ₹3.13Cr net need</text>
    <rect x="20" y="165" width="680" height="28" fill={COLOR} rx="4" />
    <text x="360" y="183" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">Rahul should buy ₹3.13Cr term cover, NOT ₹1Cr. Most Indians are massively underinsured.</text>
  </svg>
);

const SvgPremiumComparison = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Annual premium comparison for 1 crore term insurance for 30 year old non-smoker male across LIC HDFC Life ICICI Pru Max Life and Tata AIA" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ANNUAL PREMIUM · ₹1CR TERM COVER · 30-YEAR-OLD MALE NON-SMOKER · 30-YEAR TENURE · JUNE 2026</text>
    {[
      { insurer: "Tata AIA", premium: 9800, color: "#16a34a" },
      { insurer: "HDFC Life", premium: 10200, color: "#16a34a" },
      { insurer: "Max Life", premium: 10450, color: "#65a30d" },
      { insurer: "ICICI Pru", premium: 11300, color: "#f59e0b" },
      { insurer: "LIC", premium: 15800, color: "#f97316" },
    ].map(({ insurer, premium, color }, i) => (
      <g key={insurer}>
        <text x="110" y={62 + i * 42} textAnchor="end" fontFamily="system-ui" fontSize="12" fill="var(--text)">{insurer}</text>
        <rect x="120" y={46 + i * 42} width={premium / 50} height="26" fill={color} rx="4" opacity="0.85" />
        <text x={128 + premium / 50} y={63 + i * 42} fontFamily="system-ui" fontSize="13" fontWeight="700" fill={color}>₹{premium.toLocaleString()}/yr</text>
        {i === 4 && <text x={128 + premium / 50} y={79 + i * 42} fontFamily="system-ui" fontSize="10" fill="#f97316">₹6,000 more/yr than cheapest = ₹1.8L extra over 30 years</text>}
      </g>
    ))}
    <text x="20" y="255" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Online plans are 30-40% cheaper than offline. Always buy online directly from insurer website, not through agent, to save on commission loading. LIC premium via offline agent can be ₹18,000+.</text>
  </svg>
);

const SvgRiderMatrix = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Term insurance rider value matrix showing which riders are worth buying including waiver of premium and critical illness but not accidental death benefit" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">RIDERS: WORTH IT OR NOT? · HONEST ASSESSMENT</text>
    {[
      { rider: "Waiver of Premium (disability)", verdict: "WORTH IT", cost: "+₹300-600/yr", reason: "If disabled, future premiums waived. Policy stays active. Small cost, big protection.", color: "#16a34a" },
      { rider: "Critical Illness Rider", verdict: "CONDITIONAL", cost: "+₹2,000-4,000/yr", reason: "Worth it only if you don't have a separate standalone CI plan. Standalone CI is usually better value.", color: "#f59e0b" },
      { rider: "Accidental Death Benefit", verdict: "SKIP", cost: "+₹800-1,200/yr", reason: "Pays only if death is accidental. Your family needs the same money regardless of cause of death.", color: "#dc2626" },
      { rider: "Income Benefit Rider", verdict: "SKIP", cost: "+₹1,500-2,500/yr", reason: "Monthly payout instead of lump sum. But lump sum invested by family gives more flexibility and returns.", color: "#dc2626" },
    ].map(({ rider, verdict, cost, reason, color }, i) => (
      <g key={rider}>
        <rect x="20" y={40 + i * 44} width={700} height="36" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={62 + i * 44} fontFamily="system-ui" fontSize="11" fill="var(--text)">{rider}</text>
        <rect x="290" y={42 + i * 44} width="90" height="28" fill={color} rx="4" />
        <text x="335" y={61 + i * 44} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{verdict}</text>
        <text x="390" y={54 + i * 44} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{cost}</text>
        <text x="390" y={68 + i * 44} fontFamily="system-ui" fontSize="10" fill="var(--text)">{reason.slice(0, 55)}</text>
      </g>
    ))}
    <text x="20" y="213" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Keep riders simple. Waiver of premium is universally worth it. For everything else, a separate standalone policy usually gives better value than a bundled rider.</text>
  </svg>
);

const SvgULIPvsTerm = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="ULIP versus pure term insurance total cost comparison over 20 years showing that buying term plus investing separately creates significantly more wealth" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ULIP vs TERM + INVEST · ₹1CR COVER · 30-YEAR-OLD · 20-YEAR HORIZON</text>
    <rect x="20" y="38" width="320" height="140" fill="#dc2626" rx="8" opacity="0.25" stroke="#dc2626" strokeWidth="1" />
    <text x="180" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">ULIP (₹1CR cover)</text>
    <text x="180" y="84" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Annual premium: ₹80,000</text>
    <text x="180" y="102" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Total paid over 20 yrs: ₹16L</text>
    <text x="180" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Charges/mortality: ₹4-5L</text>
    <text x="180" y="138" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Net invested in fund: ~₹11L</text>
    <text x="180" y="158" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#dc2626">Approx fund value: ₹35-45L</text>
    <rect x="380" y="38" width="320" height="140" fill="#16a34a" rx="8" opacity="0.25" stroke="#16a34a" strokeWidth="1" />
    <text x="540" y="62" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#16a34a">TERM + ELSS SIP</text>
    <text x="540" y="84" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Term premium: ₹10,200/yr</text>
    <text x="540" y="102" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">ELSS SIP: ₹69,800/yr (balance)</text>
    <text x="540" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Total paid: ₹80,000/yr (same)</text>
    <text x="540" y="138" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="var(--text)">Net invested in fund: ~₹13.96L</text>
    <text x="540" y="158" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#16a34a">Approx fund value: ₹65-80L</text>
    <rect x="180" y="198" width="360" height="30" fill={COLOR} rx="4" />
    <text x="360" y="218" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Term + Invest creates ₹25-35L more wealth for same outgo. Always separate insurance from investment.</text>
  </svg>
);

const SvgLifeStageCoverage = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Life stage coverage needs guide showing how much term insurance you need at different ages from 25 to 55 based on income dependents and loans" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">COVERAGE BY LIFE STAGE · ROUGH GUIDE FOR SALARIED INDIANS</text>
    {[
      { age: "25-30", cover: "15-20× income", note: "No dependents yet? Still buy — cheapest premiums of your life. Lock in now.", color: "#16a34a" },
      { age: "30-40", cover: "20-25× income", note: "Home loan, kids, parents dependent — this is peak need. Don't underinsure.", color: COLOR },
      { age: "40-50", cover: "15-20× income", note: "Kids older, loans reducing. Can start tapering if savings are substantial.", color: "#f59e0b" },
      { age: "50-60", cover: "10× income or less", note: "Near retirement, assets built. Need may reduce. Evaluate vs existing cover.", color: "#ca8a04" },
    ].map(({ age, cover, note, color }, i) => (
      <g key={age}>
        <rect x="20" y={40 + i * 38} width={700} height="30" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <rect x="20" y={40 + i * 38} width="80" height="30" fill={color} rx="0" opacity="0.85" />
        <text x="60" y={60 + i * 38} textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{age}</text>
        <rect x="110" y={44 + i * 38} width="150" height="22" fill={color} rx="4" opacity="0.2" />
        <text x="185" y={59 + i * 38} textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{cover}</text>
        <text x="272" y={59 + i * 38} fontFamily="system-ui" fontSize="11" fill="var(--text)">{note}</text>
      </g>
    ))}
    <text x="20" y="195" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Income here = in-hand annual salary. If self-employed, use 5× net profit as proxy. Include spouse's income in family need calculation.</text>
  </svg>
);

export default function PageTermInsuranceRealValue() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Is ₹1 crore term insurance enough in India?", "acceptedAnswer": { "@type": "Answer", "text": "For most salaried Indians earning ₹15-25L annually, ₹1 crore is inadequate. The standard recommendation is 15-20x annual income. At ₹18L income, you need ₹2.7-3.6Cr just for income replacement, plus outstanding loans and future goals. ₹1Cr cover also loses purchasing power to inflation — it's equivalent to just ₹17-18L in today's money after 30 years at 6% inflation. Buy what your family actually needs, not the round-number everyone advertises." } },
      { "@type": "Question", "name": "Which term insurance is best in India in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Tata AIA and HDFC Life offer the best combination: lowest premiums (₹9,800-10,200/yr for ₹1Cr cover for 30-year-old non-smoker), highest CSR (99%+), and lowest complaint ratios. Max Life is third. For offline buyers or those in smaller cities, LIC remains the most trusted brand despite higher premiums, due to its government backing and largest branch network. Always buy online for 30-40% lower premiums." } },
      { "@type": "Question", "name": "Should I buy term insurance or ULIP?", "acceptedAnswer": { "@type": "Answer", "text": "Always separate insurance from investment. Buy pure term insurance for life cover. Invest separately in ELSS, index funds, or PPF. On identical premium outgo over 20 years, term + ELSS SIP typically creates ₹25-35L more wealth than a ULIP providing the same cover. ULIPs have high mortality charges, allocation charges, and fund management charges that erode returns. The insurance regulator IRDAI has been reducing ULIP charges, but the fundamental math still favours separation." } },
      { "@type": "Question", "name": "What happens to term insurance if I stop paying premiums?", "acceptedAnswer": { "@type": "Answer", "text": "Unlike endowment policies, pure term insurance has zero surrender value. If you miss a premium, you get a 30-day grace period. If you don't pay within grace, the policy lapses. A lapsed policy can be revived within 5 years by paying all unpaid premiums plus penalty. After 5 years, it cannot be revived and you'd need to buy a fresh policy (at a higher premium due to age). Set up auto-pay via NACH mandate — never miss a term premium." } },
      { "@type": "Question", "name": "Should I buy term insurance online or through an agent?", "acceptedAnswer": { "@type": "Answer", "text": "Online, always. Online term plans are 30-40% cheaper because there's no agent commission loaded into the premium. A ₹1Cr policy costs ₹9,800 online from Tata AIA versus ₹14,000+ through an offline agent for the same product. The claim process is identical regardless of purchase channel — it's the insurer, not the intermediary, that handles claims. Buy directly from the insurer's website or through Policybazaar/Ditto (read their reviews first) to compare premiums." } },
      { "@type": "Question", "name": "Does term insurance cover death due to COVID or pandemic?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Standard term insurance covers death due to any cause, including disease, pandemics, and illness (except suicide in the first year). COVID deaths were settled by all major insurers during the pandemic. The only exclusions in standard term plans are suicide in the first year and war. No insurer can add COVID or 'pandemic' as a retroactive exclusion once your policy is issued." } },
      { "@type": "Question", "name": "Can I have multiple term insurance policies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Having term policies from 2-3 different insurers is actually a smart strategy. It diversifies insurer risk, and you can stagger policy terms to match decreasing needs (e.g., 35-year policy when young, add another 20-year policy at age 40, and let the longer one continue while the shorter one covers the loan repayment years). When you die, all policies pay independently — insurers cannot limit total death benefit across policies for life insurance in India." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Is ₹1 Crore Term Insurance Enough? The Inflation Math Your Agent Won't Show", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
    { "@type": "ListItem", position: 4, name: "Term Insurance Real Value", item: "https://assurefintech.com/learn/insurance/term-insurance-real-value" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1D0309, #480917, #1D0309)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #e11d4822, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Insurance · Term Life · Coverage Math
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Is ₹1 Crore Term Cover Actually Enough? The Inflation Math Your Agent Won't Show You
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 11 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Term Insurance Real Value</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Everyone sells you ₹1 crore term cover. After 30 years of inflation, that ₹1 crore has the purchasing power of ₹17 lakh. Meanwhile, your family's actual financial need is 2-4× more than the round number being advertised.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The ₹1 Crore Illusion</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Walk into any insurance comparison website in India and the default recommendation is ₹1 crore term cover. It's a clean, easy-to-remember number. It's also frequently wrong for most salaried Indians.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The problem is twofold. First, ₹1 crore sounds like a lot but may be insufficient for your family's actual needs — especially if you have a home loan, kids with 10+ years of education ahead, and aging parents who depend on you. Second, ₹1 crore in 2026 is not ₹1 crore in 2046 or 2056.</p>
        <SvgInflationErosion />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>At 6% average annual inflation (India's historical average is closer to 6-7%), ₹1 crore today is worth ₹55.8 lakh in purchasing power 10 years from now, ₹31.2 lakh in 20 years, and ₹17.4 lakh in 30 years. A 30-year-old who takes ₹1 crore cover and dies at 60 is leaving their family ₹17 lakh equivalent in real terms. For most urban Indian families with a home loan and dependent kids, that's not remotely adequate.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How Much Cover Do You Actually Need?</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The right framework is income replacement, not a round number. Your family needs to maintain their current lifestyle if you're gone. The standard approach: cover enough to generate your current annual income in investment returns, plus cover all outstanding debts and future financial goals.</p>
        <SvgCoverageFormula />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The 15-20x multiplier on annual income accounts for investment return on the lump sum. If your family invests ₹3 crore in a mix of FDs and debt funds at 6-7% annual return, they'd generate ₹18-21 lakh per year — roughly matching your current income. This is the income replacement logic.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Add your home loan outstanding, car loan, personal loans, and any credit card debt — these become the family's liability and need to be covered. Add future goals like children's education and marriage (estimate at today's cost, then add some buffer for inflation). Subtract existing savings and any other insurance cover you have. The resulting number is your actual coverage need.</p>
        <SvgLifeStageCoverage />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Premium Comparison: What Your Cover Actually Costs</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The good news about buying adequate cover: term insurance is exceptionally cheap for young, healthy, non-smoking Indians. The difference between ₹1 crore and ₹3 crore in annual premium is often only ₹20,000-25,000 per year.</p>
        <SvgPremiumComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Tata AIA consistently offers the most competitive online premiums. For a 30-year-old non-smoking male, ₹1 crore over 30 years costs just ₹9,800/year — that's ₹817/month. Less than your Netflix, Spotify, and Swiggy subscription combined. Scaling to ₹3 crore is approximately ₹29,000/year — around ₹2,400/month.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>LIC premiums are significantly higher (₹15,800/year for the same ₹1Cr cover) because LIC includes a government-backing implied premium and has higher operational costs. LIC's term product (LIC Tech Term) is available online at lower rates than offline, but still 50% more than Tata AIA. The trade-off is LIC's unmatched brand trust for offline claimants — worth considering if your nominee may face challenges managing the claim process.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Riders: Which Ones Are Actually Worth Adding</h2>
        <SvgRiderMatrix />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The waiver of premium rider is the one universally worth having. At ₹300-600/year additional, it keeps your policy active if you become permanently disabled and can no longer pay premiums. Without this rider, a disability that stops your income also stops your life cover — at exactly the moment your family needs it most.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The accidental death benefit rider is the most commonly sold and, paradoxically, the least valuable. Your family needs the same financial support whether you die in a car accident or from cancer. Having a rider that doubles the payout only for accidental death is an emotional purchase, not a rational one. Buy more base cover instead.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>ULIP vs Term + Invest: The Math That Settles the Debate</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Insurance agents often pitch ULIPs (Unit Linked Insurance Plans) as "insurance with investment" — implying you get double benefit. The math says otherwise.</p>
        <SvgULIPvsTerm />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>On identical premium outgo (₹80,000/year), term + ELSS SIP creates ₹65-80 lakh over 20 years while a comparable ULIP creates ₹35-45 lakh. The gap is the multiple layers of ULIP charges: mortality charges (the insurance cost embedded in ULIP, typically higher than pure term), fund management charges, administration charges, and premium allocation charges. Together these erode 3-5% of your investment annual return.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>IRDAI has capped ULIP charges significantly since 2010. But capped still means charged. Pure term + direct plan mutual fund SIP is universally the superior structure. Separate your insurance need from your investment need, buy the cheapest of each, and you win on both.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>What to Buy, From Whom, and How</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Calculate your coverage need using the income replacement formula above. A target range for most 30-35 year old salaried Indians with home loans and young families: ₹2-4 crore total term cover.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Split your cover across two insurers if possible. Eg: ₹2 crore from Tata AIA (cheapest premium, best CSR + complaint ratio) and ₹1 crore from HDFC Life or LIC (for backup and nominee comfort). Multiple policies pay independently — all insurers must settle your claim regardless of other policies.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Buy online, directly on the insurer's website. Declare everything honestly on the proposal form. Pay annually (not monthly — monthly loading adds 3-5% to total premium). Set up NACH auto-debit and keep the term policy active for the full planned period.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Also see our <Link href="/learn/insurance/claim-settlement-ratios-2026" style={{ color: COLOR }}>claim settlement ratios guide</Link> for the 2025-26 insurer rankings, and our <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link> for health insurance coverage you need alongside your term plan.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link> · <Link href="/learn/insurance/claim-settlement-ratios-2026" style={{ color: COLOR }}>claim settlement ratios 2026</Link> · <Link href="/learn/insurance/health-insurance-for-parents" style={{ color: COLOR }}>health insurance for parents</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: premiums from Tata AIA, HDFC Life, Max Life, ICICI Pru, LIC online portals as of {UPDATED}. IRDAI CSR from Annual Report 2025-26. Inflation projections are illustrative. Not financial advice.</footer>
    </main>
    </>
  );
}
