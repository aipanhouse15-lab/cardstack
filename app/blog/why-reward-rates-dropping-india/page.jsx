import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Why Indian Credit Card Reward Rates Are Dropping — And What It Means for Your Card",
  description: "Why Indian Credit Card Reward Rates Are Dropping — And What It Means for Your Card",
  alternates: { canonical: "/blog/why-reward-rates-dropping-india" },
  openGraph: {
    title: "Why Indian Credit Card Reward Rates Are Dropping — And What It Means for Your Card",
    description: "Why Indian Credit Card Reward Rates Are Dropping — And What It Means for Your Card",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/why-reward-rates-dropping-india
// Template: investigative-article
// Color: #ea580c | Updated: June 4, 2026

const COLOR = "#ea580c";
const UPDATED = "June 4, 2026";

const SvgMdrEconomics = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="How MDR revenue is split between banks, card networks, and merchants in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Where the MDR Goes — Why Reward Rates Have a Ceiling</text>
    <text x="36" y="56" fontSize="12" fill="var(--text-muted)">On a ₹1,000 credit card transaction: MDR is approximately ₹15-20 (1.5-2%)</text>
    <rect x="36" y="74" width="148" height="80" rx="6" fill="#0891b2" opacity="0.15" />
    <text x="110" y="106" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0891b2">Card Network</text>
    <text x="110" y="124" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(Visa / Mastercard)</text>
    <text x="110" y="144" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0891b2">~₹2</text>
    <rect x="204" y="74" width="148" height="80" rx="6" fill="#7c3aed" opacity="0.15" />
    <text x="278" y="106" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">Acquiring Bank</text>
    <text x="278" y="124" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(merchant's bank)</text>
    <text x="278" y="144" textAnchor="middle" fontSize="18" fontWeight="800" fill="#7c3aed">~₹3</text>
    <rect x="372" y="74" width="148" height="80" rx="6" fill="var(--raise)" opacity="0.15" />
    <text x="446" y="106" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ea580c">Issuing Bank</text>
    <text x="446" y="124" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(your card's bank)</text>
    <text x="446" y="144" textAnchor="middle" fontSize="18" fontWeight="800" fill="#ea580c">~₹10</text>
    <rect x="540" y="74" width="144" height="80" rx="6" fill="#16a34a" opacity="0.15" />
    <text x="612" y="106" textAnchor="middle" fontSize="12" fontWeight="700" fill="#16a34a">Rewards Budget</text>
    <text x="612" y="124" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(from issuing bank)</text>
    <text x="612" y="144" textAnchor="middle" fontSize="18" fontWeight="800" fill="#16a34a">₹5-6</text>
    <text x="36" y="188" fontSize="13" fill="var(--text-muted)">The issuing bank gets ~₹10 of the MDR. From this it pays processing costs, fraud costs, and rewards. As MDR gets capped or compressed, rewards are the first line item cut.</text>
    <text x="36" y="208" fontSize="11" fill="var(--text-muted)">RBI has historically intervened in MDR for debit cards and UPI. Credit card MDR pressures may follow as digital payment policy evolves in 2026-27.</text>
  </svg>
);

const SvgAtlasDevaluation = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Axis Atlas credit card reward rate devaluation timeline April 2026" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Axis Atlas April 2026 Devaluation — The 50% Travel Reward Cut</text>
    <rect x="36" y="54" width="308" height="100" rx="6" fill="#16a34a" opacity="0.1" />
    <text x="190" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Before April 2026</text>
    <text x="190" y="104" textAnchor="middle" fontSize="13" fill="var(--text)">Transfer ratio: 2 EDGE Miles</text>
    <text x="190" y="122" textAnchor="middle" fontSize="13" fill="var(--text)">= 1 airline mile</text>
    <text x="190" y="144" textAnchor="middle" fontSize="15" fontWeight="700" fill="#16a34a">Effective rate: 5% on travel</text>
    <rect x="376" y="54" width="308" height="100" rx="6" fill="#dc2626" opacity="0.1" />
    <text x="530" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">After April 2026</text>
    <text x="530" y="104" textAnchor="middle" fontSize="13" fill="var(--text)">Transfer ratio: 4 EDGE Miles</text>
    <text x="530" y="122" textAnchor="middle" fontSize="13" fill="var(--text)">= 1 airline mile</text>
    <text x="530" y="144" textAnchor="middle" fontSize="15" fontWeight="700" fill="#dc2626">Effective rate: 2.5% on travel</text>
    <rect x="36" y="168" width="648" height="1" fill="var(--border)" />
    <text x="36" y="190" fontSize="14" fontWeight="700" fill="var(--text)">Effective devaluation:</text>
    <text x="280" y="190" fontSize="20" fontWeight="800" fill="#dc2626">50% cut</text>
    <text x="400" y="190" fontSize="13" fill="var(--text-muted)">in real travel reward value — no change in annual fee</text>
  </svg>
);

const SvgDevaluationTimeline = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Timeline of major Indian credit card reward devaluations 2024 to 2026" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Major Indian Card Devaluations — 24 Months of Cuts (2024-2026)</text>
    <line x1="60" y1="60" x2="60" y2="200" stroke="var(--border)" strokeWidth="2" />
    {[
      { date: "Aug 2024", card: "HDFC Infinia", cut: "Reward cap introduced on grocery / utilities", y: 70 },
      { date: "Nov 2024", card: "Scapia Federal", cut: "Travel rewards reduced from 10% to 6%", y: 100 },
      { date: "Feb 2026", card: "Scapia (again)", cut: "International spend rewards cut further", y: 130 },
      { date: "Apr 2026", card: "Axis Atlas, Airtel, Magnus", cut: "Transfer ratios doubled (50% devaluation)", y: 160 },
      { date: "May 2026", card: "HDFC Swiggy split", cut: "BLCK/ORNGE split dilutes reward structure", y: 190 },
    ].map(({ date, card, cut, y }) => (
      <g key={y}>
        <circle cx="60" cy={y} r="6" fill="#ea580c" />
        <text x="76" y={y - 6} fontSize="11" fontWeight="700" fill="#ea580c">{date}</text>
        <text x="76" y={y + 8} fontSize="12" fontWeight="600" fill="var(--text)">{card}</text>
        <text x="76" y={y + 22} fontSize="11" fill="var(--text-muted)">{cut}</text>
      </g>
    ))}
    <text x="36" y="222" fontSize="11" fill="var(--text-muted)">Source: Assure Fintech tracking of card MITC changes. This list is not exhaustive — smaller cuts were more frequent.</text>
  </svg>
);

const SvgRbiInterventionMap = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="RBI interventions affecting credit card reward economics in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">How RBI Policy Shapes Card Rewards — The Regulatory Pressure</text>
    <rect x="36" y="52" width="648" height="26" rx="4" fill="var(--border)" opacity="0.4" />
    <text x="50" y="70" fontSize="12" fontWeight="700" fill="var(--text)">RBI Action</text>
    <text x="320" y="70" fontSize="12" fontWeight="700" fill="var(--text)">Year</text>
    <text x="400" y="70" fontSize="12" fontWeight="700" fill="var(--text)">Impact on card rewards</text>
    {[
      ["Debit card MDR capped at 0%", "Jan 2020", "Shifted issuer focus to credit cards for fee income"],
      ["UPI mandated at zero MDR", "2020 onward", "UPI volume growth reduces credit card transaction share"],
      ["Credit Card Master Direction", "Apr 2022", "Transparency rules but no direct reward cap"],
      ["Digital payments push", "2024-26", "Forces competition from reward-free UPI instruments"],
      ["Interchange fee reviews (ongoing)", "2025-26", "Industry awaits possible caps on credit card MDR"],
    ].map(([action, year, impact], i) => (
      <g key={i}>
        <rect x="36" y={78 + i * 26} width="648" height="26" fill={i % 2 === 0 ? "transparent" : "var(--border)"} opacity="0.12" />
        <text x="50" y={96 + i * 26} fontSize="11" fill="var(--text)">{action}</text>
        <text x="320" y={96 + i * 26} fontSize="11" fill="var(--text-muted)">{year}</text>
        <text x="400" y={96 + i * 26} fontSize="11" fill="var(--text-muted)">{impact}</text>
      </g>
    ))}
    <text x="36" y="206" fontSize="11" fill="var(--text-muted)">If RBI introduces credit card MDR caps similar to debit, reward rates would fall sharply industry-wide within 12-18 months.</text>
  </svg>
);

const SvgTravelRewardCutReasons = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Why travel credit card rewards are being cut fastest in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Why Travel Rewards Are Being Cut Fastest</text>
    <text x="36" y="58" fontSize="13" fontWeight="600" fill="var(--text)">Airlines are squeezing banks out of the loyalty equation</text>
    <text x="36" y="80" fontSize="12" fill="var(--text-muted)">Airlines have learned that customers who book directly cost them less than those who book through points programs. IndiGo, Air India, and Vistara (Air India Express) have all shifted to direct booking incentives over the past 18 months, making transfer partnerships less economically attractive for both sides.</text>
    <text x="36" y="116" fontSize="13" fontWeight="600" fill="var(--text)">Banks earn less on international travel spend</text>
    <text x="36" y="138" fontSize="12" fill="var(--text-muted)">International transactions go through Visa/Mastercard networks at higher interchange fees — which sounds like more bank revenue. But cross-border compliance costs and hedging have compressed margins. Offering 5%+ rewards on international spend is often loss-making for issuers at current MDR levels.</text>
    <text x="36" y="174" fontSize="13" fontWeight="600" fill="var(--text)">Hotel chains are following the same playbook</text>
    <text x="36" y="196" fontSize="12" fill="var(--text-muted)">Marriott Bonvoy, Hyatt, and IHG all offer direct-booking discounts in India that exceed the points value from credit card rewards. The hotel-card partnership is under structural pressure that will continue devaluing hotel transfer rewards.</text>
  </svg>
);

const SvgWhatToDo = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Action steps for cardholders affected by reward rate devaluations" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">What Smart Cardholders Are Doing in Response</text>
    {[
      { action: "Redeem points before further devaluation", detail: "Points held are points at risk. Lock in redemptions now if you have 50,000+ points sitting idle.", color: "#ea580c" },
      { action: "Diversify across 2-3 cards with different reward structures", detail: "A cashback card + a travel card + a category-specific card hedges against any single issuer cutting rates.", color: "#7c3aed" },
      { action: "Subscribe to devaluation alert services", detail: "Several fintech blogs (including Assure Fintech) now track MITC changes. Set up alerts for your specific cards.", color: "#0891b2" },
      { action: "Evaluate annual fee vs current reward value annually", detail: "Run the numbers: actual reward value earned vs fee paid. If the ratio has dropped, escalate for waiver or downgrade.", color: "#16a34a" },
    ].map(({ action, detail, color }, i) => (
      <g key={i}>
        <rect x="36" y={52 + i * 40} width="8" height="28" rx="2" fill={color} />
        <text x="54" y={66 + i * 40} fontSize="13" fontWeight="700" fill="var(--text)">{action}</text>
        <text x="54" y={80 + i * 40} fontSize="11" fill="var(--text-muted)">{detail}</text>
      </g>
    ))}
    <text x="36" y="210" fontSize="11" fill="var(--text-muted)">The era of 5%+ flat cashback is structurally over in India. 2-3% with careful category matching is the realistic ceiling for 2026-27.</text>
  </svg>
);

const SvgCashbackVsPoints = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Comparison of cashback and reward points stability in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise)" rx="10" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Cashback vs Reward Points — Devaluation Risk Compared</text>
    <rect x="36" y="52" width="308" height="110" rx="6" fill="#16a34a" opacity="0.08" />
    <text x="190" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="#16a34a">Cashback</text>
    <text x="190" y="100" textAnchor="middle" fontSize="12" fill="var(--text)">Value: Fixed at face value (₹1 = ₹1)</text>
    <text x="190" y="118" textAnchor="middle" fontSize="12" fill="var(--text)">Devaluation risk: Low (requires fee change)</text>
    <text x="190" y="136" textAnchor="middle" fontSize="12" fill="var(--text)">Expiry: Usually none or 12 months</text>
    <text x="190" y="154" textAnchor="middle" fontSize="12" fill="#16a34a" fontWeight="600">Best for: simplicity, safety</text>
    <rect x="376" y="52" width="308" height="110" rx="6" fill="var(--raise)" opacity="0.08" />
    <text x="530" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ea580c">Reward Points</text>
    <text x="530" y="100" textAnchor="middle" fontSize="12" fill="var(--text)">Value: Variable (bank decides redemption rate)</text>
    <text x="530" y="118" textAnchor="middle" fontSize="12" fill="var(--text)">Devaluation risk: High (can change without notice)</text>
    <text x="530" y="136" textAnchor="middle" fontSize="12" fill="var(--text)">Expiry: Typically 2-3 years, varies</text>
    <text x="530" y="154" textAnchor="middle" fontSize="12" fill="#ea580c" fontWeight="600">Best for: active users who redeem fast</text>
    <text x="36" y="186" fontSize="11" fill="var(--text-muted)">Banks can change points redemption rates at any time with 30-day notice. Cash-equivalent cashback cannot be devalued without explicitly changing the cashback percentage.</text>
  </svg>
);

export default function BlogWhyRewardRatesDropping() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why are Indian credit card reward rates being cut in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The root cause is margin compression on the Merchant Discount Rate — the fee banks earn from merchants on each transaction. Banks earn 1.5-2% MDR on credit card transactions, of which roughly 0.5-0.6% is available for rewards. As digital payment costs and compliance costs rise, and as RBI policy favors zero-MDR UPI, the reward budget gets squeezed. Airline and hotel partners are also reducing points-program economics, making travel rewards especially vulnerable."
        }
      },
      {
        "@type": "Question",
        name: "What happened to the Axis Atlas credit card in April 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis Bank doubled the EDGE Miles required for airline mile transfers in April 2026 — from 2:1 to 4:1. This effectively halved the value of all existing Atlas rewards for travel redemptions. Cardholders who had accumulated EDGE Miles expecting to transfer at the old ratio saw their points' value cut in half overnight. Axis Magnus and Airtel Axis card also saw simultaneous changes."
        }
      },
      {
        "@type": "Question",
        name: "Are credit card reward rates in India ever going to recover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is unlikely in the near term. The structural forces driving cuts — MDR compression, UPI competition, airline direct-booking push — are all ongoing and not reversing. Issuers may occasionally launch competitive new cards with high introductory rates, but sustained 5%+ flat reward rates are essentially a relic of 2022-2024. The realistic expectation for 2026-27 is 2-3% on best-matched categories."
        }
      },
      {
        "@type": "Question",
        name: "What is MDR and how does it affect credit card rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MDR (Merchant Discount Rate) is the fee a merchant pays to accept card payments — typically 1.5-2% on credit cards. It is split between the card network (Visa/Mastercard), the merchant's bank, and the card-issuing bank. The issuing bank's share (roughly 1%) must cover processing costs, fraud losses, customer service, and rewards. When MDR gets capped or compressed by regulation or competition, rewards are the most flexible line item to cut."
        }
      },
      {
        "@type": "Question",
        name: "What should I do with existing reward points given devaluation risk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Redeem them as soon as you have a reasonable use case — do not hoard points waiting for the perfect redemption. Points sitting idle are points at risk of devaluation. Prioritize using points for the redemption categories that still offer good value (typically flights over merchandise or statement credit), and try to redeem before any upcoming MITC change announcements."
        }
      },
      {
        "@type": "Question",
        name: "Is cashback better than reward points for Indian credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most cardholders, yes. Cashback's value is fixed — ₹1 of cashback is always ₹1. Reward points' value fluctuates based on the redemption catalogue, and banks can change the ratio with 30 days notice. Cashback cards like Axis Ace and Amazon Pay ICICI also tend to be simpler to manage and have no annual fee, making the net value calculation more transparent."
        }
      },
      {
        "@type": "Question",
        name: "Did HDFC Bank change its Swiggy card in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. HDFC and Swiggy restructured the Swiggy HDFC credit card into two variants — BLCK and ORNGE — in 2026. The split diluted the unified reward structure, with different benefits and reward rates on each variant. Users who held the original card reported a reduction in effective food delivery cashback compared to the pre-split product."
        }
      },
      {
        "@type": "Question",
        name: "How do I get notified when my card's reward terms change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Banks are required by RBI to notify cardholders 30 days before MITC changes via SMS, email, or registered address. However, these notices are often buried in generic update emails. The practical solution is to follow credit card tracking sites like Assure Fintech and subscribe to their card-specific change alerts, or periodically re-read your card's MITC every 6 months."
        }
      },
      {
        "@type": "Question",
        name: "Why are travel credit card rewards being cut more than cashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Airlines and hotel chains are aggressively promoting direct booking over points-based booking. IndiGo, Air India, and major hotel chains now offer their own discounts and loyalty perks for direct customers that compete with or exceed credit card reward values. This reduces the economic incentive for banks to maintain premium travel reward rates, since fewer cardholders are actually redeeming for travel."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Indian Credit Card Reward Rates Are Dropping — The Honest Economics Behind the Cuts",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Why Reward Rates Are Dropping in India", item: "https://assurefintech.com/blog/why-reward-rates-dropping-india" },
    ]
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Why Reward Rates Are Dropping in India
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · INVESTIGATIVE</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 14px" }}>
        Why Indian Credit Card Reward Rates Are Dropping — And What It Means for Your Card
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 16px" }}>
        Axis Atlas just cut travel rewards by 50%. Scapia slashed its international rate twice. HDFC split its Swiggy card. This is not a coincidence — there is a structural economic story here, and understanding it changes how you should manage your cards.
      </p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated {UPDATED} · By Ash K · 10 min read</div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Headline: What Has Actually Been Cut</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          In the 18 months between January 2025 and June 2026, nearly every premium Indian credit card has seen a meaningful reduction in its headline reward rate. Some cuts were announced with fanfare — "restructuring for better value." Most were buried in MITC updates that 95% of cardholders never read.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The most dramatic single cut was Axis Atlas in April 2026, where the airline mile transfer ratio doubled from 2:1 to 4:1 — effectively halving the value of every EDGE Mile held for travel redemption.
        </p>
        <SvgDevaluationTimeline />
        <SvgAtlasDevaluation />
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Root Cause: MDR Economics Are Getting Tighter</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          To understand why rewards are being cut, you need to understand where the money comes from in the first place. When you swipe your credit card for ₹1,000, the merchant does not receive ₹1,000. They receive approximately ₹980-985. The ₹15-20 difference is the Merchant Discount Rate — the fee that funds the entire credit card ecosystem, including your rewards.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          That ₹15-20 gets split between the card network, the merchant's bank, and your card's issuing bank. After covering processing costs, fraud losses, and customer service, the issuing bank has about ₹5-6 available for rewards on a ₹1,000 transaction — which is why a 0.5% reward rate is common and 2%+ is considered generous.
        </p>
        <SvgMdrEconomics />
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How RBI Policy Is Compressing the Reward Budget</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          RBI mandated zero MDR on debit card transactions in January 2020. UPI was also designated zero-MDR. These decisions were framed as digital payment inclusion policy — and they worked, driving massive UPI adoption.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The side effect: banks lost significant debit card fee income and UPI fee income simultaneously. This accelerated their push into credit cards as the remaining fee-generating product. But now with record credit card volumes, the next regulatory move — potential MDR caps on credit cards — would immediately compress the reward budget that banks can afford to offer.
        </p>
        <SvgRbiInterventionMap />
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why Travel Rewards Are Being Cut Fastest</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Travel cards have historically offered 3-5% effective rates because airlines and hotels subsidised the reward program — they were willing to sell miles and nights to banks at a discount because it drove bookings.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          That relationship has fundamentally changed. Airlines have discovered that customers who book directly convert better, complain less, and cost less to service. IndiGo, Air India, and Vistara's successors all now offer direct-booking incentives that compete directly with points-based rewards.
        </p>
        <SvgTravelRewardCutReasons />
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Cashback vs Points: Which Survives Devaluation Better</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          There is a structural difference in devaluation risk between cashback and reward points that most cardholders have not fully processed.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Cashback is legally a discount or rebate — its value is set at the rate printed in the terms, and changing it requires an explicit MITC update that cardholders can react to. Reward points live in a bank-controlled redemption catalogue, and the effective value can change at any time by adjusting redemption ratios without ever touching the "earn rate" that is advertised.
        </p>
        <SvgCashbackVsPoints />
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What Smart Cardholders Are Doing Right Now</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Hoarding points made sense when programs were stable. In the current environment, sitting on 1,00,000+ points is sitting on an asset that could lose 20-50% of its value in a single MITC update announcement.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The best defensive strategy is a combination of diversification across card structures and faster redemption cycles — not chasing the highest earn rate on a single card that could be cut next quarter.
        </p>
        <SvgWhatToDo />
      </section>

      <section style={{ background: "rgba(212,168,83,.06)", border: "1px solid rgba(212,168,83,.25)", borderRadius: 8, padding: "20px 24px", marginBottom: 36 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>Your Devaluation Action Checklist</h2>
        <ol style={{ fontSize: 14, color: "var(--text)", lineHeight: 2.1, paddingLeft: 20 }}>
          <li>Log in and check your current reward point balance on every card today.</li>
          <li>Calculate the current cash value: points times the best available redemption rate.</li>
          <li>If you have more than 50,000 points on any single card: redeem or transfer within 60 days.</li>
          <li>Set a recurring 6-month calendar reminder to re-read your card's MITC document.</li>
          <li>Run the annual fee vs earned rewards calculation annually — if the gap has closed, escalate for a waiver or downgrade.</li>
          <li>For your next card evaluation, weigh the cashback rate versus the points earn rate with equal scepticism about longevity.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 32 }}>
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
        <Link href="/blog/cashback-rate-is-a-lie" style={{ color: COLOR }}>The Cashback Rate Is a Lie</Link>{" "}
        ·{" "}
        <Link href="/blog/reward-points-vs-cashback" style={{ color: COLOR }}>Reward Points vs Cashback — Which Wins in India?</Link>{" "}
        ·{" "}
        <Link href="/blog/regalia-vs-infinia" style={{ color: COLOR }}>Regalia vs Infinia — HDFC's Two Premium Cards Compared</Link>{" "}
        ·{" "}
        <Link href="/blog/get-annual-fee-waived-scripts" style={{ color: COLOR }}>How to Get Your Annual Fee Waived</Link>{" "}
        ·{" "}
        <Link href="/stack-builder" style={{ color: COLOR }}>Card Stack Builder</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison site. Devaluation dates and rate changes are based on publicly available MITC documents and cardholder reports tracked by Assure Fintech as of June 2026. The Axis Atlas, Scapia, and HDFC Swiggy data reflects changes communicated via MITC updates. Always verify current terms with your issuer. This article is not financial advice.
      </footer>
    </main>
  );
}
