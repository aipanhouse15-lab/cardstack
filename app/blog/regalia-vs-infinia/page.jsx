import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "HDFC Regalia vs Infinia: Current Terms for Existing Cardholders",
  description: "HDFC no longer sources Regalia and offers Infinia by invitation. Compare the current issuer terms and your own redemption value as an existing cardholder.",
  alternates: { canonical: "/blog/regalia-vs-infinia" },
  openGraph: {
    title: "HDFC Regalia vs Infinia: Current Terms for Existing Cardholders",
    description: "HDFC no longer sources Regalia and offers Infinia by invitation. Compare the current issuer terms and your own redemption value as an existing cardholder.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/regalia-vs-infinia
// Template: Feature-by-feature premium card breakdown with verdict
// Color: #7c3aed | Updated: September 26, 2026

const COLOR = "#7c3aed";
const UPDATED = "September 28, 2026";

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
        acceptedAnswer: { "@type": "Answer", text: "HDFC describes Infinia Metal Edition as available by invitation only and says the bank assesses each customer's eligibility. It does not publish a universal score, income threshold or guaranteed upgrade path. Ask HDFC about your own account; an invitation or upgrade is not assured." }
      },
      {
        "@type": "Question",
        name: "What is the annual fee for HDFC Regalia and Infinia?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC currently lists Regalia's joining/renewal fee as ₹2,500 plus applicable taxes and Infinia's as ₹12,500 plus applicable taxes. HDFC lists renewal-fee waiver conditions tied to ₹3 lakh anniversary-year spend for Regalia and ₹10 lakh in the preceding 12 months for Infinia. Check the current issuer terms and your own offer; Regalia sourcing is discontinued." }
      },
      {
        "@type": "Question",
        name: "What is the reward rate on HDFC Regalia vs Infinia?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC lists 4 Reward Points per ₹200 for Regalia and 5 per ₹150 for Infinia. A point's value depends on redemption route, caps and current terms; SmartBuy multipliers are conditional and should not be presented as a general cashback rate. Compare the redemption you would actually use." }
      },
      {
        "@type": "Question",
        name: "Does HDFC Regalia have unlimited airport lounge access?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC currently describes Regalia domestic lounge vouchers as subject to quarterly spend conditions and lists up to six complimentary international visits through Priority Pass. HDFC advertises unlimited complimentary global lounge access on Infinia. Check eligible lounges, visit rules, add-on treatment and the latest issuer terms before travel." }
      },
      {
        "@type": "Question",
        name: "Which card should I get at ₹5 lakh annual spend?",
        acceptedAnswer: { "@type": "Answer", text: "There is no universal winner at a given spend level. Account for the actual fee charged, fee-waiver eligibility, reward exclusions and the redemption value you personally realise. Regalia is not available for new sourcing, and Infinia requires an invitation." }
      },
      {
        "@type": "Question",
        name: "Can I upgrade from Regalia to Infinia?",
        acceptedAnswer: { "@type": "Answer", text: "You can ask HDFC about an upgrade offer, but the bank does not guarantee eligibility based on a universal spend or waiting period. HDFC assesses the customer and controls invitations and product changes." }
      },
      {
        "@type": "Question",
        name: "Is the forex markup the same on both cards?",
        acceptedAnswer: { "@type": "Answer", text: "Foreign-transaction costs can include issuer markup, network conversion and taxes. Check the current fee schedule for your card and consider dynamic currency conversion separately; do not assume the two cards or every transaction route have identical total costs." }
      },
      {
        "@type": "Question",
        name: "How does the HDFC SmartBuy 10X program work?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC advertises up to 10X Reward Points on eligible Infinia SmartBuy spends, subject to current portal, category and redemption terms. Regalia has its own eligible SmartBuy rates and caps. Verify the current offer and calculate point value using the redemption you intend to make." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HDFC Regalia vs Infinia: Current Terms for Existing Cardholders",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-28",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "HDFC Regalia vs Infinia", item: "https://www.assurefintech.com/blog/regalia-vs-infinia" },
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
            HDFC Regalia vs Infinia: Current Terms for Existing Cardholders
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            HDFC says Regalia sourcing has been discontinued and Infinia Metal Edition is offered by invitation. This comparison is for existing cardholders reviewing current terms—not a promise of availability, approval or an upgrade.
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
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>First, check whether the comparison applies to you</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC's Regalia page says new sourcing has been discontinued. HDFC's Infinia page labels the card invite-only and says the bank assesses each customer. Neither this article nor a spend threshold can establish that a reader can apply or upgrade.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For current holders, a useful comparison is still possible: compare the annual fee actually charged, the rewards you can redeem, the benefits you use and the conditions attached to those benefits.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Eligibility: Can You Even Get Infinia?</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC's current public Regalia page states that sourcing is discontinued. Its Infinia page says membership is by invitation only and that the bank will assess eligibility. HDFC does not publish a public approval threshold on that page.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you already hold either card, ask HDFC directly about product or upgrade options. Do not apply based on an unofficial salary, score or spending formula.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Annual Fee: The Number That Changes Everything</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC currently lists a ₹2,500 plus tax joining/renewal fee for Regalia and ₹12,500 plus applicable taxes for Infinia. HDFC lists a ₹3 lakh anniversary-year waiver condition for Regalia and a ₹10 lakh preceding-12-month spend condition for Infinia renewal. The account's actual fee and offer terms should be checked before calculating value.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Compare the fee actually charged with benefits you would otherwise pay for. Do not count a waiver or welcome benefit unless you meet the issuer's exact conditions.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Reward Rates: Infinia Wins, But By Less Than You Think</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC lists 4 Reward Points per ₹200 for Regalia and 5 points per ₹150 for Infinia. These are points, not cash-back percentages. HDFC's published redemption values differ by route; caps, exclusions and offer conditions affect what a cardholder actually realises.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For your own comparison, use eligible spend by category, the redemption route you actually use, any caps and expiry, and the fee after any waiver. SmartBuy advertises accelerated points on eligible transactions, not a universal rate on all travel spending.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Break-Even Analysis: Spend Level by Spend Level</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>There is no reliable break-even spend without assumptions about your purchase categories, eligibility, point-redemption route, lounge use, taxes and fee waiver. A spend threshold alone cannot tell you which card is better for you.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Estimate net value as usable rewards plus benefits you would otherwise pay for, minus the fee and transaction costs. Show each assumption separately and set any benefit you will not use to zero.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Airport Lounge Access: Infinia's Killer Feature</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC lists Regalia domestic lounge vouchers subject to quarterly spend and up to six complimentary international visits through Priority Pass. HDFC advertises unlimited complimentary global lounge access on Infinia. Airport, network and programme conditions apply.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>Do not value a lounge visit at its menu price unless you would otherwise pay that amount. Check eligible lounges, visit rules, guest charges and current spend conditions before travel.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Milestone Benefits and Other Perks</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>HDFC's live product pages list different welcome, renewal, milestone and lifestyle benefits. Their eligibility and real value depend on the cardholder's account, spend and ability to use the specific offer. Confirm current benefit terms directly with HDFC before assigning them a rupee value.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The Verdict: Use This Decision Tree</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>There is no universal winner here. The right card depends entirely on your spend level and lifestyle.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>For current cardholders: first confirm the annual fee and waiver status shown on your account; next calculate rewards at your real redemption value; then count only lounge, travel and lifestyle benefits you expect to use. If considering a different card, compare products currently open to applications—not a discontinued sourcing route.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>What to Do Right Now</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If you hold Regalia, use the issuer's current fee, reward and lounge terms to decide whether it still suits you. Regalia sourcing has been discontinued, so this article is not an application recommendation.</p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>If interested in Infinia, HDFC says membership is invitation-only. Contact the bank for your own options; no public spend threshold or timeline guarantees an invitation or upgrade.</p>
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
        <Link href="/blog/how-reward-points-work-india" style={{ color: COLOR }}>Reward Points vs Cashback</Link> ·{" "}
        <Link href="/learn/tax" style={{ color: COLOR }}>Tax Guide</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        <strong>Sources:</strong> HDFC Bank's <a href="https://www.hdfc.bank.in/credit-cards/regalia-credit-card" target="_blank" rel="noopener noreferrer">Regalia page</a> states sourcing is discontinued and lists current cardholder terms; its <a href="https://www.hdfc.bank.in/credit-cards/infinia-credit-card" target="_blank" rel="noopener noreferrer">Infinia page</a> states membership is by invitation and lists its terms. Reviewed September 28, 2026. This comparison is for existing cardholders; fees, availability and benefits can change. No approval or upgrade is promised.
      </footer>
    </main>
    </>
  );
}
