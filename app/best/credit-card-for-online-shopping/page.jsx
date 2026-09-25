import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Cards for Online Shopping: Rates, Caps and Exclusions",
  description: "Compare online-shopping credit card rates, statement-cycle caps and exclusions using current issuer terms.",
  alternates: { canonical: "/best/credit-card-for-online-shopping" },
  openGraph: {
    title: "Best Credit Cards for Online Shopping: Rates, Caps and Exclusions",
    description: "Compare online-shopping credit card rates, statement-cycle caps and exclusions using current issuer terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-online-shopping
// Reviewed against issuer sources: September 26, 2026

const COLOR = "#7c3aed";
const UPDATED = "September 26, 2026";
const SOURCES = {
  sbi: "https://www.sbicard.com/en/faq/cashback-sbi-card-faq.page",
  sbiTerms: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/cashback-revised.pdf",
  amazon: "https://www.icicibank.com/personal-banking/cards/credit-card/amazon-pay-credit-card/amazon-pay-faq",
  millennia: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0",
  axis: "https://www.axis.bank.in/cards/credit-card/cashback-credit-card",
};

function PartnerVsAllOnlineMatrix() {
  const merchants = ["Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "Meesho", "BigBasket", "Blinkit", "Swiggy", "Zomato"];
  const millenniaCovered = [true, true, true, false, false, false, false, false, true, true];
  const sbiCovered = ["Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms", "Check eligible online terms"];
  return (
    <svg
      viewBox="0 0 680 272"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Merchant coverage caveat comparing HDFC Millennia named partner tier with SBI eligible online transaction terms"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)" }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Partner-Only vs All-Online: Where Your 5% Actually Works</text>
      <text x="200" y="44" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="700">HDFC Millennia (10 partners)</text>
      <text x="490" y="44" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">SBI Cashback (eligible online only)</text>
      {merchants.map((m, i) => {
        const y = 56 + i * 19;
        return (
          <g key={m}>
            <text x="340" y={y + 4} textAnchor="middle" fill="var(--text)" fontSize="11">{m}</text>
            <rect x="100" y={y - 8} width="200" height="16" fill={millenniaCovered[i] ? "#ede9fe" : "var(--raise)"} rx="3" />
            <text x="200" y={y + 4} textAnchor="middle" fill={millenniaCovered[i] ? "#6366f1" : "var(--text-muted)"} fontSize="11" fontWeight={millenniaCovered[i] ? "700" : "400"}>
              {millenniaCovered[i] ? "5% named partner" : "Not in partner tier"}
            </text>
            <rect x="390" y={y - 8} width="200" height="16" fill="var(--raise)" rx="3" />
            <text x="490" y={y + 4} textAnchor="middle" fill={COLOR} fontSize="9" fontWeight="700">Check eligibility / exclusions</text>
          </g>
        );
      })}
      <text x="340" y="248" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Online payment alone does not guarantee eligibility; issuer exclusions and category rules apply.</text>
    </svg>
  );
}

function CapMathAtSpendLevels() {
  const cards = [
    { name: "SBI Cashback*", color: COLOR, cap: 2000, rate: 0.05, fee: 0 },
    { name: "Millennia partners*", color: "#6366f1", cap: 1000, rate: 0.05, fee: 0 },
    { name: "Amazon Pay ICICI**", color: "#ea580c", cap: 99999, rate: 0.05, fee: 0 },
    { name: "Axis Cashback tiers*", color: "#10b981", cap: 4000, rate: 0, fee: 0 },
  ];
  const spends = [5000, 15000, 30000, 60000, 100000];
  return (
    <svg
      viewBox="0 0 680 291"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative cashback calculation by spend level, assuming qualifying transactions and card-specific conditions"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Illustrative Cashback by Spend (if transactions qualify)</text>
      {spends.map((spend, si) => {
        const x = 40 + si * 120;
        const baseY = 240;
        const maxH = 180;
        const maxVal = 5000;
        return (
          <g key={spend}>
            <text x={x + 50} y={baseY + 16} textAnchor="middle" fill="var(--text-muted)" fontSize="10">₹{spend >= 1000 ? spend / 1000 + "k" : spend}</text>
            {cards.map((card, ci) => {
              const earned = card.name.startsWith("Axis")
                ? Math.min(4000, Math.min(spend, 5000) * 0.02 + Math.min(Math.max(spend - 5000, 0), 35000) * 0.05 + Math.max(spend - 40000, 0) * 0.07)
                : Math.min(spend * card.rate, card.cap);
              const h = Math.round((earned / maxVal) * maxH);
              const barX = x + ci * 22;
              return (
                <g key={card.name}>
                  <rect x={barX} y={baseY - h} width={18} height={h} fill={card.color} rx="2" />
                  {si === 4 && (
                    <text x={barX + 9} y={baseY - h - 4} textAnchor="middle" fill={card.color} fontSize="8">₹{Math.round(earned)}</text>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}
      <line x1="30" y1="240" x2="650" y2="240" stroke="var(--border)" strokeWidth="1" />
      <g>
        {cards.map((card, i) => (
          <g key={card.name}>
            <rect x={30 + i * 160} y="258" width="10" height="10" fill={card.color} rx="2" />
            <text x={44 + i * 160} y="267" fill="var(--text-muted)" fontSize="10">{card.name}</text>
          </g>
        ))}
      </g>
      <text x="340" y="285" textAnchor="middle" fill="var(--text-muted)" fontSize="9">*Per statement cycle; Axis tiered net online spend. **Amazon purchases for Prime members only.</text>
    </svg>
  );
}

function MerchantCardMatchGrid() {
  const matches = [
    { merchant: "Amazon", bestCard: "Amazon Pay ICICI", rate: "5% Prime / 3% non-Prime*", runner: "Check eligible alternatives" },
    { merchant: "Flipkart / Myntra", bestCard: "Compare current terms", rate: "Axis and SBI conditions differ", runner: "Check caps / exclusions" },
    { merchant: "Nykaa / Ajio", bestCard: "Check eligible online rules", rate: "SBI exclusions apply", runner: "Check partner lists" },
    { merchant: "Swiggy / Zomato", bestCard: "Compare card terms", rate: "Dedicated app tiers may apply", runner: "Check shared caps" },
    { merchant: "BigBasket", bestCard: "Check eligible merchant rules", rate: "Do not assume partner tier", runner: "Review issuer T&Cs" },
    { merchant: "Other online", bestCard: "Check transaction eligibility", rate: "Online channel alone is not enough", runner: "Review exclusions" },
  ];
  return (
    <svg
      viewBox="0 0 680 239"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Merchant to card matching table showing the best card for each major Indian online shopping platform"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Right Card for Each Online Platform</text>
      {[["Platform", "Best Card", "Rate / Structure", "Runner-Up"], ...matches.map(m => [m.merchant, m.bestCard, m.rate, m.runner])].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={10 + ci * 165} y={34 + ri * 28} width={163} height={26} fill={ri === 0 ? COLOR : ri % 2 === 0 ? "#fff" : "var(--raise)"} rx="2" />
              <text x={91 + ci * 165} y={51 + ri * 28} textAnchor="middle" fill={ri === 0 ? "#fff" : ci === 1 ? COLOR : "var(--text)"} fontSize="10" fontWeight={ri === 0 ? "700" : ci < 2 ? "600" : "400"}>{cell}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function FreeCardComboDiagram() {
  return (
    <svg
      viewBox="0 0 680 194"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Amazon Pay ICICI no-annual-fee card plus reminder to verify terms for other online spend cards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">A no-annual-fee Amazon option (verify other card terms)</text>
      <rect x="20" y="38" width="290" height="120" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="10" />
      <text x="165" y="62" textAnchor="middle" fill={COLOR} fontSize="13" fontWeight="700">Amazon Pay ICICI (Free)</text>
      <text x="165" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">5% on Amazon (Prime)</text>
      <text x="165" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">2% on Amazon Pay partners</text>
      <text x="165" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">1% everywhere else</text>
      <text x="165" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Annual cost: ₹0</text>
      <text x="340" y="102" textAnchor="middle" fill="var(--text)" fontSize="18" fontWeight="900">+</text>
      <rect x="370" y="38" width="290" height="120" fill="var(--raise)" stroke="#10b981" strokeWidth="2" rx="10" />
      <text x="515" y="62" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="700">Other online spend</text>
      <text x="515" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">Compare current issuer rates</text>
      <text x="515" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">Check eligible categories</text>
      <text x="515" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">Check caps and annual fee</text>
      <text x="515" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">No blanket rate assumed</text>
      <text x="340" y="170" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Amazon Pay ICICI's rewards are Amazon Pay balance, not bank cash.</text>
    </svg>
  );
}

function HighSpenderBreakeven() {
  return (
    <svg
      viewBox="0 0 680 242"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Breakeven analysis showing at what monthly online spend each card becomes worth its annual fee"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Cap context (fees and eligibility must be checked separately)</text>
      {[
        { card: "SBI Cashback", fee: "Check issuer", rate: "5%", breakeven: "₹40,000 eligible online spend reaches ₹2,000 online cap", color: COLOR },
        { card: "HDFC Millennia", fee: "Check issuer", rate: "5%", breakeven: "₹20,000 / partner tier per cycle hits cap", color: "#6366f1" },
        { card: "Axis Cashback", fee: "Check issuer", rate: "2 / 5 / 7%", breakeven: "Tiered; ₹4,000 max accelerated per month", color: "#10b981" },
        { card: "Amazon Pay ICICI", fee: "No annual fee", rate: "Prime Amazon 5%", breakeven: "No issuer earnings cap listed", color: "#ea580c" },
        { card: "AU Xcite ACE", fee: "Check issuer", rate: "Verify", breakeven: "Verify current variant terms", color: "#0891b2" },
      ].map((item, i) => (
        <g key={item.card}>
          <rect x="10" y={38 + i * 28} width="200" height="24" fill="var(--raise)" stroke="var(--border)" rx="3" />
          <text x="110" y={54 + i * 28} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="600">{item.card}</text>
          <rect x="218" y={38 + i * 28} width="80" height="24" fill={item.color + "22"} rx="3" />
          <text x="258" y={54 + i * 28} textAnchor="middle" fill={item.color} fontSize="9">{item.fee}</text>
          <rect x="306" y={38 + i * 28} width="60" height="24" fill="var(--raise)" rx="3" />
          <text x="336" y={54 + i * 28} textAnchor="middle" fill="var(--text)" fontSize="11">{item.rate}</text>
          <rect x="374" y={38 + i * 28} width="296" height="24" fill={item.fee === 0 ? "var(--green-dim)" : "var(--raise)"} rx="3" />
          <text x="522" y={54 + i * 28} textAnchor="middle" fill={item.fee === 0 ? "#16a34a" : "var(--text)"} fontSize="11">{item.breakeven}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BestCreditCardForOnlineShopping() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives the best cashback on all online shopping in India?",
        acceptedAnswer: { "@type": "Answer", text: "SBI Card's FAQ states 5% on eligible online transactions with a ₹2,000 online cashback limit per statement cycle. Its revised terms effective 1 April 2026 also set a separate ₹2,000 offline limit and a ₹4,000 combined statement-cycle maximum. Exclusions apply." }
      },
      {
        "@type": "Question",
        name: "What is the difference between HDFC Millennia 5% and SBI Cashback 5%?",
        acceptedAnswer: { "@type": "Answer", text: "Millennia's 5% applies to ten named online merchants, with a ₹1,000 cap per statement cycle across that tier; eligible other spends have a separate 1% tier and cap. SBI's 5% is for eligible online transactions, capped at ₹2,000 online per statement cycle under its revised terms. Neither headline rate guarantees every transaction qualifies." }
      },
      {
        "@type": "Question",
        name: "Is there a free credit card that gives good cashback on online shopping?",
        acceptedAnswer: { "@type": "Answer", text: "ICICI states that Amazon Pay ICICI has no joining or annual fee. Prime members earn 5% on eligible Amazon India purchases, non-Prime members 3%; Amazon Pay partner sites may earn 2%. Rewards are credited as Amazon Pay balance. Check exclusions and current terms. Do not assume another card is fee-free without checking its current schedule." }
      },
      {
        "@type": "Question",
        name: "What cashback cap applies to SBI Cashback?",
        acceptedAnswer: { "@type": "Answer", text: "SBI Card's FAQ states a ₹2,000 online cashback limit per statement cycle. Revised terms effective 1 April 2026 set a separate ₹2,000 offline cashback limit and a ₹4,000 combined maximum per statement cycle. Eligible-spend exclusions still apply." }
      },
      {
        "@type": "Question",
        name: "Does the Axis Cashback card really give 7% on online shopping?",
        acceptedAnswer: { "@type": "Answer", text: "Axis Bank currently describes a tiered online cashback structure: 2% up to ₹5,000 net online spend, 5% on the next tier through ₹40,000, then 7% above ₹40,000, with a ₹4,000 accelerated cashback cap per statement month. Qualifying online-spend rules and exclusions apply; check the current Axis terms." }
      },
      {
        "@type": "Question",
        name: "Does online cashback apply to EMI purchases?",
        acceptedAnswer: { "@type": "Answer", text: "EMI treatment varies by card and transaction. HDFC Millennia's 5% named-merchant cashback is for non-EMI transactions; several issuer cashback programs exclude EMI or transactions later converted to EMI. Check the exact card terms before selecting EMI." }
      },
      {
        "@type": "Question",
        name: "What online shopping categories are typically excluded from cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Exclusions are card-specific. SBI's revised Cashback terms exclude multiple categories and transaction types, such as EMI, utilities, insurance, fuel, rent, wallet and government-related spends. Online channel alone does not make a transaction eligible; review the issuer's current terms." }
      },
      {
        "@type": "Question",
        name: "I use only Amazon. Should I get SBI Cashback or Amazon Pay ICICI?",
        acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI has no joining or annual fee according to ICICI and no earnings limit listed in its FAQ. Prime members earn 5% on eligible Amazon India purchases (3% for non-Prime). SBI Cashback earns 5% on eligible online spend, capped at ₹2,000 online per statement cycle under its revised terms. Compare reward form and eligibility, not just the rates." }
      },
      {
        "@type": "Question",
        name: "Is a 2 percent flat cashback card worth holding for online shopping?",
        acceptedAnswer: { "@type": "Answer", text: "It depends on the exact card's current fee, reward rate and exclusions. Recheck the issuer's live fee schedule and terms; older articles may describe benefits or pricing that have since changed." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Online Shopping in India: Rates, Caps and Exclusions",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best/" },
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Online Shopping", item: "https://assurefintech.com/best/credit-card-for-online-shopping" },
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Online Shopping in India
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Online Shopping
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · ONLINE SHOPPING
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        Online-shopping rewards differ in eligibility, billing-cycle caps and reward currency. Compare your actual eligible transactions—not only the advertised percentage—before choosing a card.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 9 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Our Top Picks for Online Shopping</h2>

        <p role="note" style={{ padding: "14px 16px", border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-muted)", background: "var(--raise)" }}>
          <strong style={{ color: "var(--text)" }}>SBI Cashback cap:</strong> revised terms effective 1 April 2026 set a ₹2,000 online cap and a separate ₹2,000 offline cap, with a ₹4,000 combined maximum per statement cycle. Eligible-category exclusions apply.
        </p>

        {[
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "Check latest fee schedule",
            rate: "5% on eligible online spends",
            cap: "₹2,000 online / ₹2,000 offline per cycle",
            badge: "Broad online option (eligibility applies)",
            why: "May suit eligible online transactions across merchants. Its revised terms cap online cashback at ₹2,000 per statement cycle; an additional ₹2,000 cap applies to offline cashback.",
            caveat: "The combined cashback maximum is ₹4,000 per statement cycle. Exclusions apply; check SBI Card's latest terms before applying."
          },
          {
            name: "Amazon Pay ICICI Credit Card",
            slug: "amazon-pay-icici",
            fee: "Free (lifetime)",
            rate: "5% Amazon for Prime / 3% non-Prime; 2% Amazon Pay partners",
            cap: "Issuer FAQ says no earnings limit",
            badge: "Best for Amazon",
            why: "ICICI states no joining or annual fee; Prime members earn 5% on eligible Amazon India purchases, non-Prime members 3%, and 2% on eligible Amazon Pay partner sites.",
            caveat: "Only 1% on non-Amazon, non-partner spends. Cashback is Amazon Pay balance, not bank credit."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "Check latest fee schedule",
            rate: "5% on 10 partner sites",
            cap: "₹1,000 per cycle on 5% partner tier",
            badge: "Best Multi-Partner",
            why: "The issuer's terms list ten named merchants, including Amazon, Flipkart, Myntra, Swiggy and Zomato, in its 5% CashPoints tier.",
            caveat: "₹1,000 cap per statement cycle across that tier; 5% tier is for eligible non-EMI spends. Other eligible spends have a separate cap."
          },
          {
            name: "Axis Cashback Credit Card",
            slug: "axis-cashback",
            fee: "Check latest fee schedule",
            rate: "Tiered 2% / 5% / 7% on qualifying online net spend",
            cap: "₹4,000 accelerated per statement month",
            badge: "Highest Rate, Tight Cap",
            why: "Axis now uses spend tiers on qualifying online net spend: 2% up to ₹5,000, 5% from ₹5,001 to ₹40,000, and 7% above ₹40,000, subject to a ₹4,000 statement-month cap.",
            caveat: "Travel MCCs and other exclusions do not qualify for the online tier. Check current Axis terms and fee schedule."
          },
          {
            name: "AU Xcite ACE Credit Card",
            slug: "au-xcite-ace",
            fee: "Check current issuer fee",
            rate: "Confirm current rewards",
            cap: "Confirm current terms",
            badge: "Verify current product terms",
            why: "Product terms and fee offers can vary; consult AU Small Finance Bank's current page for this exact variant before relying on a reward rate.",
            caveat: "Older published comparisons describe it as free and flat-rate; those claims are not relied on here."
          },
        ].map(card => (
          <div key={card.slug} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: "20px 22px", marginBottom: 16, background: "var(--raise)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <span style={{ background: COLOR + "22", color: COLOR, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, marginRight: 8 }}>{card.badge}</span>
                <Link href={`/cards/${card.slug}`} style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", textDecoration: "none" }}>{card.name}</Link>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Fee: {card.fee}</div>
            </div>
            <div style={{ display: "flex", gap: 24, margin: "10px 0", flexWrap: "wrap" }}>
              <div><span style={{ fontSize: 12, color: "var(--text-muted)" }}>Rate</span><br /><strong style={{ color: COLOR }}>{card.rate}</strong></div>
              <div><span style={{ fontSize: 12, color: "var(--text-muted)" }}>Cap</span><br /><strong>{card.cap}</strong></div>
            </div>
            <p style={{ fontSize: 14, color: "var(--text)", margin: "8px 0 4px" }}>{card.why}</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>Watch out: {card.caveat}</p>
          </div>
        ))}
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Partner-Only vs All-Online Distinction</h2>
        <p>HDFC Millennia's 5% is for ten named online merchants. SBI Cashback advertises 5% on eligible online transactions, but its revised terms exclude categories and transaction types. “Online” alone is not enough to determine eligibility.</p>
        <p>Millennia's 5% partner tier is capped at ₹1,000 per statement cycle, with a separate cap for other eligible spends. SBI Cashback's revised terms set a ₹2,000 online cap and ₹2,000 offline cap per cycle; its total cashback maximum is ₹4,000.</p>
        <PartnerVsAllOnlineMatrix />
        <p style={{ marginTop: 12 }}>The matrix is a prompt to check merchant eligibility, not a guarantee that a transaction earns cashback. Use the named HDFC partner list and SBI's current exclusions to check each purchase.</p>
        <p>Understand the <Link href="/blog/cashback-rate-is-a-lie">real effective rate after partner restrictions</Link> before choosing a card based on headline numbers alone.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Cap Math at Different Spend Levels</h2>
        <p>Caps may be monthly, per statement cycle, tiered or merchant-specific. The illustration assumes all spending qualifies and uses SBI Cashback's ₹2,000 online cap from its revised terms. It does not account for fees, other category spend, EMI, or exclusions.</p>
        <CapMathAtSpendLevels />
        <p style={{ marginTop: 12 }}>Axis Cashback uses progressive spend tiers on qualifying online net spend, while the other rates apply to specified merchants or eligible transactions. The bars are not a ranking and are not a forecast of actual credited cashback.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Right Card for Each Online Merchant</h2>
        <p>Indian online spending is not homogeneous. A typical household might use Amazon for electronics, Flipkart for fashion, Nykaa for beauty, Swiggy for delivery, and a dozen other platforms throughout the month.</p>
        <MerchantCardMatchGrid />
        <p style={{ marginTop: 12 }}>Treat the match table as a checklist, not a recommendation: verify the exact eligible merchant, reward rate and remaining cap. Adding several cards can add fees and complexity. See the <Link href="/stack-builder">Stack Builder tool</Link> after checking current issuer terms.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Zero-Fee Option</h2>
        <p>Amazon Pay ICICI has no joining or annual fee according to ICICI. That does not mean every card in a proposed “free” combination is fee-free; confirm each card's current charges.</p>
        <FreeCardComboDiagram />
        <p style={{ marginTop: 12 }}>ICICI's card earns Amazon Pay balance: 5% on eligible Amazon India purchases for Prime members, 3% for non-Prime members, 2% at eligible Amazon Pay partner sites and 1% on other eligible payments. Exclusions apply. No blanket fallback rate is assumed here for another card.</p>
        <p>The right comparison depends on the reward currency you value, eligible spend and any fee on other cards you might add.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>High-Spender Strategy: SBI Cashback Cap Reality</h2>
        <p>SBI Cashback's revised terms cap eligible online cashback at ₹2,000 per statement cycle; at a 5% eligible rate that online cap is reached after ₹40,000 of eligible online spend. A separate ₹2,000 offline cap applies, and combined cashback cannot exceed ₹4,000 per cycle.</p>
        <HighSpenderBreakeven />
        <p style={{ marginTop: 12 }}>The online-only ceiling would be ₹24,000 if all twelve statement cycles reached the online cap. This is a ceiling illustration, not expected earnings; exclusions, reversals, fees and billing dates affect realized value.</p>
        <p>If you are in this high-spend bracket, also consider holding both SBI Cashback and Amazon Pay ICICI: SBI Cashback for all non-Amazon online spend and ICICI for Amazon, since both have separate category tracking and the ICICI card is free. Use the <Link href="/smart-swipe">Smart Swipe guide</Link> to verify the stack math for your specific mix.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>List your major online merchants and identify which are named Millennia partners.</li>
          <li>Estimate eligible spend per statement cycle and account for shared caps.</li>
          <li>Check SBI's revised exclusion list; do not infer eligibility from the online checkout alone.</li>
          <li>For Amazon Pay ICICI, consider whether Amazon Pay balance and the Prime/non-Prime rate fit your use.</li>
          <li>Compare current fees and exclusions before applying for any card.</li>
          <li>Read the <Link href="/blog/reward-points-vs-cashback">reward points vs cashback explainer</Link> before valuing non-cash rewards.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>SBI Cashback may suit eligible online spending across merchants, with a ₹2,000 online cap per statement cycle. HDFC Millennia can suit shoppers whose spend is concentrated among its named partners and within its ₹1,000 partner-tier cap. Amazon Pay ICICI offers a separate Amazon-focused reward balance.</p>
        <p>There is no universal winner. Your eligible purchases, billing periods, fees, exclusions and reward preferences determine which card—or no additional card—makes sense.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faq.mainEntity.map((item, i) => (
            <details key={i} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "14px 18px" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--text)", fontSize: 15 }}>{item.name}</summary>
              <p style={{ marginTop: 10, color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>{item.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>
        Related:{" "}
        <Link href="/cards/sbi-cashback">SBI Cashback Card Full Review</Link> ·{" "}
        <Link href="/cards/amazon-pay-icici">Amazon Pay ICICI Review</Link> ·{" "}
        <Link href="/best/credit-card-for-amazon">Best Cards for Amazon</Link> ·{" "}
        <Link href="/best/credit-card-for-flipkart">Best Cards for Flipkart</Link> ·{" "}
        <Link href="/blog/cashback-rate-is-a-lie">Cashback Rate Is a Lie</Link> ·{" "}
        <Link href="/stack-builder">Stack Builder</Link>
      </p>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Rates, fees and caps may change; verify issuer terms before applying. Sources: <a href={SOURCES.sbi} target="_blank" rel="noreferrer">SBI Card FAQ</a> · <a href={SOURCES.sbiTerms} target="_blank" rel="noreferrer">SBI revised cashback terms</a> · <a href={SOURCES.amazon} target="_blank" rel="noreferrer">ICICI Amazon Pay FAQ</a> · <a href={SOURCES.millennia} target="_blank" rel="noreferrer">HDFC Millennia terms</a> · <a href={SOURCES.axis} target="_blank" rel="noreferrer">Axis Cashback product page</a>. This is not financial advice.
      </footer>
    </main>
    </>
  );
}
