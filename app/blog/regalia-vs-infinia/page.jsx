import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "HDFC Regalia vs Infinia: The Definitive 2026 Comparison",
  description: "HDFC Regalia vs Infinia: The Definitive 2026 Comparison",
  alternates: { canonical: "/blog/regalia-vs-infinia" },
  openGraph: {
    title: "HDFC Regalia vs Infinia: The Definitive 2026 Comparison",
    description: "HDFC Regalia vs Infinia: The Definitive 2026 Comparison",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/regalia-vs-infinia
// Template: Feature-by-feature premium card breakdown with verdict
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgFeeVsValue = () => (
  <svg viewBox="0 0 720 236" role="img" aria-label="HDFC Regalia vs Infinia: annual fee compared to potential reward value at different spend levels" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="210" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Annual Fee vs Reward Value: The Honest Break-Even</text>
    {["Annual Spend", "Regalia Net Gain", "Infinia Net Gain", "Better Pick"].map((h, i) => (
      <text key={i} x={[30, 200, 390, 570][i]} y="50" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      { spend: "₹3,00,000 / year", regaliaNet: "+₹588", infiniaNet: "-₹7,562", better: "Regalia", bColor: COLOR },
      { spend: "₹5,00,000 / year", regaliaNet: "+₹2,780", infiniaNet: "-₹4,295", better: "Regalia", bColor: COLOR },
      { spend: "₹8,00,000 / year", regaliaNet: "+₹6,008", infiniaNet: "+₹1,630", better: "Regalia", bColor: COLOR },
      { spend: "₹10,00,000 / year", regaliaNet: "+₹8,120", infiniaNet: "+₹5,080", better: "Regalia*", bColor: "#f59e0b" },
      { spend: "₹15,00,000 / year", regaliaNet: "+₹13,435", infiniaNet: "+₹13,275", better: "Infinia", bColor: "#16a34a" },
      { spend: "₹20,00,000 / year", regaliaNet: "+₹18,750", infiniaNet: "+₹21,250", better: "Infinia", bColor: "#16a34a" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={56 + i * 24} width="680" height="22" rx="3" fill={i % 2 === 0 ? "transparent" : "var(--raise)"} />
        <text x="30" y={71 + i * 24} fontSize="11" fill="var(--text)">{row.spend}</text>
        <text x="200" y={71 + i * 24} fontSize="11" fill={row.regaliaNet.startsWith("+") ? COLOR : "#dc2626"}>{row.regaliaNet}</text>
        <text x="390" y={71 + i * 24} fontSize="11" fill={row.infiniaNet.startsWith("+") ? COLOR : "#dc2626"}>{row.infiniaNet}</text>
        <text x="570" y={71 + i * 24} fontSize="11" fontWeight="700" fill={row.bColor}>{row.better}</text>
      </g>
    ))}
        <text x="36" y="202" fontSize="9" fill="var(--text-muted)">*At ₹10L spend, Regalia still wins on net but Infinia lounge + golf benefits may justify the gap for frequent flyers. All</text>
    <text x="36" y="216" fontSize="9" fill="var(--text-muted)">figures include GST on fees.</text>
  </svg>
);

const SvgLoungeAccess = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Lounge access comparison between HDFC Regalia and HDFC Infinia credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Airport Lounge Access: Regalia vs Infinia</text>
    <rect x="20" y="40" width="320" height="124" rx="8" fill={COLOR} opacity="0.22" />
    <rect x="380" y="40" width="320" height="124" rx="8" fill="var(--raise)" />
    <text x="180" y="62" textAnchor="middle" fontSize="13" fontWeight="700" fill={COLOR}>HDFC Regalia</text>
    <text x="540" y="62" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6d28d9">HDFC Infinia</text>
    <text x="36" y="84" fontSize="11" fill="var(--text)">12 domestic lounges/year (Dreamfolks)</text>
    <text x="36" y="102" fontSize="11" fill="var(--text)">6 international via Priority Pass/year</text>
    <text x="36" y="120" fontSize="11" fill="var(--text)">Guest charges after free visits</text>
    <text x="36" y="138" fontSize="11" fill="var(--text)">Good for 1-2 trips per month</text>
    <text x="36" y="156" fontSize="11" fill="#dc2626">Capped. Runs out by Oct if you fly often.</text>
    <text x="396" y="84" fontSize="11" fill="var(--text)">Unlimited domestic lounges</text>
    <text x="396" y="102" fontSize="11" fill="var(--text)">Unlimited international via Priority Pass</text>
    <text x="396" y="120" fontSize="11" fill="var(--text)">Complimentary guest access</text>
    <text x="396" y="138" fontSize="11" fill="var(--text)">Ideal for frequent flyers (6+ trips/year)</text>
    <text x="396" y="156" fontSize="11" fill="#16a34a">Unlimited. The single biggest Infinia perk.</text>
  </svg>
);

const SvgEligibilityGate = () => (
  <svg viewBox="0 0 720 222" role="img" aria-label="Eligibility requirements for HDFC Regalia and HDFC Infinia credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Can You Even Get These Cards? The Eligibility Gate</text>
    {["Criteria", "HDFC Regalia", "HDFC Infinia"].map((h, i) => (
      <text key={i} x={[30, 290, 510][i]} y="50" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["Annual income", "₹6,00,000+", "₹10,00,000+ (typically)"],
      ["Existing HDFC relationship", "Preferred but not required", "Usually required"],
      ["Availability", "Apply directly online", "Invite-only (some exceptions)"],
      ["Annual fee", "₹2,500 + GST (₹2,950)", "₹12,500 + GST (₹14,750)"],
      ["Fee waiver", "₹3L annual spend", "₹10L annual spend"],
      ["CIBIL score needed", "700+", "750+ typically"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={56 + i * 22} width="680" height="20" rx="3" fill={i % 2 === 0 ? "transparent" : "#faf5ff"} />
        <text x="30" y={70 + i * 22} fontSize="11" fill="var(--text-muted)">{row[0]}</text>
        <text x="290" y={70 + i * 22} fontSize="11" fill="var(--text)">{row[1]}</text>
        <text x="510" y={70 + i * 22} fontSize="11" fill="var(--text)">{row[2]}</text>
      </g>
    ))}
  </svg>
);

const SvgRewardMechanism = () => (
  <svg viewBox="0 0 720 222" role="img" aria-label="How reward points accumulate on HDFC Regalia vs Infinia across spending categories" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Reward Rate by Spend Category (Effective Cashback Equivalent)</text>
    {["Category", "Regalia", "Infinia (base)", "Infinia (SmartBuy 10X)"].map((h, i) => (
      <text key={i} x={[30, 240, 380, 520][i]} y="50" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["Regular spend", "1.06%", "1.65%", "N/A"],
      ["Dining", "1.06%", "1.65%", "N/A"],
      ["SmartBuy travel", "2.12%", "3.3%", "16.5%"],
      ["Govt txns (utility etc)", "0%", "0%", "0%"],
      ["Fuel (surcharge waiver)", "1% waiver", "1% waiver", "N/A"],
      ["International spend", "1.06% pts", "1.65% pts", "N/A"],
      ["Milestone (SmartBuy)", "+2,500 pts/q", "+5,000 pts/q", "N/A"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={56 + i * 22} width="680" height="20" rx="3" fill={i % 2 === 0 ? "transparent" : "#faf5ff"} />
        <text x="30" y={70 + i * 22} fontSize="11" fill="var(--text-muted)">{row[0]}</text>
        <text x="240" y={70 + i * 22} fontSize="11" fill={COLOR}>{row[1]}</text>
        <text x="380" y={70 + i * 22} fontSize="11" fill="#6d28d9">{row[2]}</text>
        <text x="520" y={70 + i * 22} fontSize="11" fontWeight={row[3] !== "N/A" ? "700" : "400"} fill={row[3] !== "N/A" ? "#16a34a" : "var(--text-muted)"}>{row[3]}</text>
      </g>
    ))}
  </svg>
);

const SvgMilestoneComparison = () => (
  <svg viewBox="0 0 720 174" role="img" aria-label="Milestone and annual spend benefits for HDFC Regalia and Infinia" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="170" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Milestone Benefits: Regalia vs Infinia</text>
    <rect x="20" y="38" width="320" height="116" rx="8" fill={COLOR} opacity="0.2" />
    <rect x="380" y="38" width="320" height="116" rx="8" fill="var(--raise)" />
    <text x="180" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Regalia Milestones</text>
    <text x="540" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="#6d28d9">Infinia Milestones</text>
    <text x="36" y="78" fontSize="11" fill="var(--text)">Spend ₹75K in Q1: +2,500 pts (₹1,000 val)</text>
    <text x="36" y="96" fontSize="11" fill="var(--text)">Annual ₹5L: ₹2,500 flight voucher</text>
    <text x="36" y="114" fontSize="11" fill="var(--text)">Annual ₹7.5L: ₹5,000 flight voucher</text>
    <text x="36" y="132" fontSize="11" fill="var(--text)">Fee waiver at ₹3L annual spend</text>
    <text x="396" y="78" fontSize="11" fill="var(--text)">Spend ₹1.5L in Q1: +5,000 pts (₹2,500 val)</text>
    <text x="396" y="96" fontSize="11" fill="var(--text)">Annual ₹5L: ₹5,000 travel voucher</text>
    <text x="396" y="114" fontSize="11" fill="var(--text)">Annual ₹10L: ₹10,000 travel voucher</text>
    <text x="396" y="132" fontSize="11" fill="var(--text)">Fee waiver at ₹10L annual spend</text>
    <text x="396" y="150" fontSize="11" fill={COLOR} fontWeight="700">Infinia milestone value is 2x Regalia's.</text>
  </svg>
);

const SvgSpendDecisionTree = () => (
  <svg viewBox="0 0 720 219" role="img" aria-label="Decision tree to choose between HDFC Regalia and Infinia based on annual spend" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Which Card Should You Pick? (Spend-Based Decision)</text>
    <rect x="270" y="38" width="180" height="34" rx="8" fill={COLOR} opacity="0.15" />
    <text x="360" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Annual spend?</text>
    <line x1="220" y1="72" x2="140" y2="100" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="500" y1="72" x2="580" y2="100" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="360" y1="72" x2="360" y2="100" stroke="var(--border)" strokeWidth="1.5" />
    <text x="140" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Below ₹5L</text>
    <text x="360" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">₹5L - ₹12L</text>
    <text x="580" y="96" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Above ₹12L</text>
    <rect x="50" y="106" width="180" height="50" rx="8" fill="#dcfce7" />
    <text x="140" y="128" textAnchor="middle" fontSize="11" fontWeight="700" fill="#14532d">Regalia</text>
    <text x="140" y="146" textAnchor="middle" fontSize="10" fill="#14532d">Fee waiver easy. Net positive.</text>
    <rect x="270" y="106" width="180" height="50" rx="8" fill={COLOR} opacity="0.15" />
    <text x="360" y="128" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>Regalia</text>
    <text x="360" y="146" textAnchor="middle" fontSize="10" fill={COLOR}>Unless flying 6+ times/year</text>
    <rect x="490" y="106" width="180" height="50" rx="8" fill="var(--raise)" />
    <text x="580" y="128" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6d28d9">Infinia</text>
    <text x="580" y="146" textAnchor="middle" fontSize="10" fill="#6d28d9">Rewards + unlimited lounge</text>
        <text x="360" y="185" fontSize="9" textAnchor="middle" fill="var(--text-muted)">Also consider: do you fly internationally? Infinia's unlimited Priority Pass becomes the biggest differentiator above 6</text>
    <text x="360" y="199" fontSize="9" textAnchor="middle" fill="var(--text-muted)">trips/year.</text>
  </svg>
);

const SvgGolfAndConcierge = () => (
  <svg viewBox="0 0 720 209" role="img" aria-label="Golf and concierge benefits comparison between HDFC Regalia and Infinia" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Lifestyle Benefits: The Perks Beyond Points</text>
    {["Benefit", "Regalia", "Infinia"].map((h, i) => (
      <text key={i} x={[30, 280, 500][i]} y="50" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      ["Golf rounds", "6 complimentary/year", "12 complimentary/year"],
      ["Concierge service", "Basic (call center)", "24x7 dedicated concierge"],
      ["Forex markup", "2% + GST", "2% + GST (same)"],
      ["Insurance cover", "Travel: $2,50,000", "Travel: $5,00,000"],
      ["Personal accident", "₹1 crore", "₹3 crore"],
    ].map((row, i) => (
      <g key={i}>
        <rect x="20" y={56 + i * 20} width="680" height="18" rx="3" fill={i % 2 === 0 ? "transparent" : "#faf5ff"} />
        <text x="30" y={69 + i * 20} fontSize="11" fill="var(--text-muted)">{row[0]}</text>
        <text x="280" y={69 + i * 20} fontSize="11" fill={COLOR}>{row[1]}</text>
        <text x="500" y={69 + i * 20} fontSize="11" fill="#6d28d9">{row[2]}</text>
      </g>
    ))}
  </svg>
);

export default function BlogRegaliaVsInfinia() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is HDFC Infinia invite-only or can anyone apply?",
        acceptedAnswer: { "@type": "Answer", text: "Infinia is technically invite-only, but HDFC does issue it to existing customers with a strong banking relationship, high credit score (750+), and annual income above ₹10 lakh. You can request an upgrade from Regalia once you've spent ₹10 lakh or more in a year on that card. Some applicants also get it by calling the premium banking helpline." }
      },
      {
        "@type": "Question",
        name: "What is the annual fee for HDFC Regalia and Infinia?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Regalia costs ₹2,500 plus GST, which works out to ₹2,950 per year. HDFC Infinia costs ₹12,500 plus GST, totalling ₹14,750 per year. Regalia's fee is waived if you spend ₹3 lakh or more annually. Infinia's fee is waived only at ₹10 lakh or more in annual spend." }
      },
      {
        "@type": "Question",
        name: "What is the reward rate on HDFC Regalia vs Infinia?",
        acceptedAnswer: { "@type": "Answer", text: "Regalia earns 4 reward points per ₹150 spent. Each point is worth approximately ₹0.40 on HDFC SmartBuy, giving an effective rate of about 1.06 percent. Infinia earns 5 points per ₹150, worth ₹0.50 each, giving 1.65 percent base rate. On HDFC SmartBuy with 10X points, Infinia can deliver up to 16.5 percent on select travel bookings." }
      },
      {
        "@type": "Question",
        name: "Does HDFC Regalia have unlimited airport lounge access?",
        acceptedAnswer: { "@type": "Answer", text: "No. Regalia gives 12 complimentary domestic lounge visits per year via Dreamfolks and 6 complimentary international lounge visits via Priority Pass per year. Infinia gives unlimited lounge access domestically and internationally via Priority Pass, which is one of the biggest practical differences between the two cards." }
      },
      {
        "@type": "Question",
        name: "Which card should I get at ₹5 lakh annual spend?",
        acceptedAnswer: { "@type": "Answer", text: "Regalia is clearly better at ₹5 lakh annual spend. Your net reward value after the Regalia fee is approximately ₹2,780 positive. With Infinia at the same spend, you're ₹4,295 in the negative even after rewards because the ₹14,750 fee is too high to justify at that spend level." }
      },
      {
        "@type": "Question",
        name: "Can I upgrade from Regalia to Infinia?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. The typical path is to spend heavily on Regalia (₹8 to 10 lakh per year), maintain a good repayment record, and then request an upgrade by calling HDFC's premium helpline (1800 202 6161). You can also walk into an HDFC bank branch and speak to a relationship manager if you have a salary account there." }
      },
      {
        "@type": "Question",
        name: "Is the forex markup the same on both cards?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, both Regalia and Infinia charge 2 percent plus GST on foreign currency transactions, working out to approximately 2.36 percent total. If you travel internationally frequently, consider adding a zero-forex card like IDFC FIRST Wealth or Niyo Global for overseas purchases to avoid this markup." }
      },
      {
        "@type": "Question",
        name: "How does the HDFC SmartBuy 10X program work?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC SmartBuy is HDFC's in-house travel and shopping portal. When you book flights, hotels, or select products through SmartBuy using your Infinia or Regalia card, you earn 10X reward points instead of the base rate. For Infinia users, this can translate to over 16 percent effective cashback on travel bookings, though there are monthly point caps and category restrictions." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HDFC Regalia vs Infinia: The Definitive 2026 Comparison",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "HDFC Regalia vs Infinia", item: "https://assurefintech.com/blog/regalia-vs-infinia" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Premium Comparison
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            HDFC Regalia vs Infinia: The Definitive 2026 Comparison
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            One is the country's most popular premium card. The other is its richer, harder-to-get sibling. Here's the honest numbers-first breakdown of which one actually makes sense for you.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / HDFC Regalia vs Infinia
      </nav>
<section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Setup: Two Different Markets</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC Regalia and Infinia are not actually competing for the same customer. Regalia targets professionals spending ₹3 to 8 lakh a year who want a premium card without a premium headache. Infinia targets high-networth individuals spending ₹10 lakh or more who fly internationally and value unlimited lounge access above all else.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The problem is that everyone in between, the ₹8 to 12 lakh spender, gets misled by the brand aspirationality of Infinia without doing the actual math. Let's fix that.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Eligibility: Can You Even Get Infinia?</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Regalia is open to any salaried or self-employed individual with a declared annual income of ₹6 lakh or more and a CIBIL score above 700. You can apply directly on HDFC's website.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Infinia is invite-only in practice, though "invite-only" has loosened since 2024. HDFC now issues it to existing relationship customers with a strong banking profile. If you've had Regalia for 2 or more years with clean repayment and high spend, request an upgrade. Don't assume you're locked out.</p>
        <SvgEligibilityGate />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Annual Fee: The Number That Changes Everything</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Regalia's fee is ₹2,950 including GST, waived at ₹3 lakh annual spend. Most Regalia users hit the waiver threshold by their third or fourth month. The card is effectively free for almost everyone who holds it.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Infinia's fee is ₹14,750 including GST, waived only at ₹10 lakh annual spend. That's a substantial commitment. If you spend ₹8 lakh on the card, you're paying the full fee. That fee alone is what makes Infinia a losing proposition for anyone spending under ₹12 to 15 lakh per year.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Reward Rates: Infinia Wins, But By Less Than You Think</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Regalia earns 4 points per ₹150 (effective 1.06 percent). Infinia earns 5 points per ₹150 (effective 1.65 percent on SmartBuy). The difference is 0.59 percentage points on base spend.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>On ₹10 lakh spend, that difference is roughly ₹5,900 in extra rewards for Infinia. But subtract the fee difference (₹14,750 minus ₹2,950 = ₹11,800), and Regalia is still ahead by about ₹5,900. The 10X SmartBuy multiplier is where Infinia can finally pull ahead, but only if you actively use it for travel bookings.</p>
        <SvgRewardMechanism />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Break-Even Analysis: Spend Level by Spend Level</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>We ran the numbers across six spend levels, accounting for reward value, milestone benefits, and total fees. The results are clear.</p>
        <SvgFeeVsValue />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>The crossover point is around ₹15 lakh annual spend, and even then only if you're actively using SmartBuy for travel and hitting quarterly milestones. Below ₹12 lakh, Regalia wins on net value in almost every scenario.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Airport Lounge Access: Infinia's Killer Feature</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>This is the single biggest practical differentiator. Regalia gives you 12 domestic and 6 international lounge visits per year. If you fly more than that (which frequent business travellers absolutely do), you pay out of pocket for every additional visit.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Infinia gives you unlimited Priority Pass access globally. For someone flying internationally once a month, that's roughly 24 lounge visits worth around ₹600 to ₹1,500 each, adding ₹14,400 to ₹36,000 in annual value from lounges alone. That changes the math significantly for frequent flyers.</p>
        <SvgLoungeAccess />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Milestone Benefits and Other Perks</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Both cards have milestone benefits tied to quarterly and annual spend. Infinia's milestones are roughly double the value of Regalia's at comparable spend thresholds.</p>
        <SvgMilestoneComparison />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Golf, concierge, and insurance coverage all scale up with Infinia, but are these actually worth ₹12,000 extra in fees? For most users, no. For someone who golfs regularly and travels internationally on business, perhaps.</p>
        <SvgGolfAndConcierge />
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Verdict: Use This Decision Tree</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>There is no universal winner here. The right card depends entirely on your spend level and lifestyle.</p>
        <SvgSpendDecisionTree />
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>One more honest note: if you're not yet hitting ₹3 lakh annual card spend, neither card is the right starting point. Start with a lifetime-free card, build the habit, then graduate to Regalia. Most people who jump to Infinia too early simply pay a premium fee for benefits they never use.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>What to Do Right Now</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you're on Regalia: calculate your last 12 months of card spend. If you're consistently above ₹12 lakh and fly internationally more than 6 times a year, request an Infinia upgrade from your relationship manager. Otherwise, stay on Regalia and optimise your SmartBuy usage.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you're considering Infinia without a Regalia history: start with Regalia, spend actively, and request an upgrade in 12 to 18 months. HDFC responds well to demonstrated spend history. Trying to jump straight to Infinia without that track record usually results in rejection.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        Related:{" "}
        <Link href="/blog/annual-fee-when-worth-paying" style={{ color: COLOR }}>When Is an Annual Fee Worth Paying?</Link> ·{" "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe Optimiser</Link> ·{" "}
        <Link href="/stack-builder" style={{ color: COLOR }}>Card Stack Builder</Link> ·{" "}
        <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>Reward Points vs Cashback</Link> ·{" "}
        <Link href="/learn/tax" style={{ color: COLOR }}>Tax Guide</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison platform. Reward rates, fees, and benefit structures change periodically. The analysis above uses HDFC's published terms as of June 2026. Verify current terms on HDFC's website before applying. We may earn a referral fee on approved applications.
      </footer>
    </main>
    </>
  );
}
