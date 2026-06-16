import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Online Shopping in India (June 2026)",
  description: "Five percent online cashback exists on four different cards in India right now. But they work completely differently. Here is the precise breakdown of which ...",
  alternates: { canonical: "/best/credit-card-for-online-shopping" },
  openGraph: {
    title: "Best Credit Card for Online Shopping in India (June 2026)",
    description: "Five percent online cashback exists on four different cards in India right now. But they work completely differently. Here is the precise breakdown of which ...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-online-shopping
// Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

function PartnerVsAllOnlineMatrix() {
  const merchants = ["Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "Meesho", "BigBasket", "Blinkit", "Swiggy", "Zomato"];
  const millenniaCovered = [true, true, false, false, false, false, true, false, true, true];
  const sbiCovered = [true, true, true, true, true, true, true, true, true, true];
  return (
    <svg
      viewBox="0 0 680 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Coverage matrix comparing HDFC Millennia partner-only 5 percent versus SBI Cashback all-online 5 percent across 10 merchants"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)" }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Partner-Only vs All-Online: Where Your 5% Actually Works</text>
      <text x="200" y="44" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="700">HDFC Millennia (10 partners)</text>
      <text x="490" y="44" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">SBI Cashback (all online)</text>
      {merchants.map((m, i) => {
        const y = 56 + i * 19;
        return (
          <g key={m}>
            <text x="340" y={y + 4} textAnchor="middle" fill="var(--text)" fontSize="11">{m}</text>
            <rect x="100" y={y - 8} width="200" height="16" fill={millenniaCovered[i] ? "#ede9fe" : "var(--raise)"} rx="3" />
            <text x="200" y={y + 4} textAnchor="middle" fill={millenniaCovered[i] ? "#6366f1" : "var(--text-muted)"} fontSize="11" fontWeight={millenniaCovered[i] ? "700" : "400"}>
              {millenniaCovered[i] ? "5% covered" : "1% base only"}
            </text>
            <rect x="390" y={y - 8} width="200" height="16" fill="var(--raise)" rx="3" />
            <text x="490" y={y + 4} textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="700">5% covered</text>
          </g>
        );
      })}
      <text x="340" y="248" textAnchor="middle" fill="var(--text-muted)" fontSize="10">SBI Cashback covers all online merchants. Millennia only covers its 10 named partners at 5%.</text>
    </svg>
  );
}

function CapMathAtSpendLevels() {
  const cards = [
    { name: "SBI Cashback", color: COLOR, cap: 5000, rate: 0.05, fee: 999 },
    { name: "HDFC Millennia", color: "#6366f1", cap: 1000, rate: 0.05, fee: 1000 },
    { name: "Amazon Pay ICICI", color: "#ea580c", cap: 99999, rate: 0.05, fee: 0 },
    { name: "Axis Cashback", color: "#10b981", cap: 2000, rate: 0.07, fee: 1000 },
  ];
  const spends = [5000, 15000, 30000, 60000, 100000];
  return (
    <svg
      viewBox="0 0 680 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monthly cashback earned across four cards at five different online spend levels from 5000 to 100000 rupees"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Monthly Cashback at Different Spend Levels (Online)</text>
      {spends.map((spend, si) => {
        const x = 40 + si * 120;
        const baseY = 240;
        const maxH = 180;
        const maxVal = 5000;
        return (
          <g key={spend}>
            <text x={x + 50} y={baseY + 16} textAnchor="middle" fill="var(--text-muted)" fontSize="10">₹{spend >= 1000 ? spend / 1000 + "k" : spend}</text>
            {cards.map((card, ci) => {
              const earned = Math.min(spend * card.rate, card.cap);
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
    </svg>
  );
}

function MerchantCardMatchGrid() {
  const matches = [
    { merchant: "Amazon", bestCard: "Amazon Pay ICICI", rate: "5%, no cap, free", runner: "SBI Cashback" },
    { merchant: "Flipkart / Myntra", bestCard: "Axis Flipkart", rate: "5%, no explicit cap", runner: "SBI Cashback" },
    { merchant: "Nykaa / Ajio", bestCard: "SBI Cashback", rate: "5% all online", runner: "AU Xcite ACE (2%)" },
    { merchant: "Swiggy / Zomato", bestCard: "HDFC Millennia", rate: "5% both apps", runner: "Axis ACE (4%)" },
    { merchant: "BigBasket", bestCard: "HDFC Millennia", rate: "5% (partner)", runner: "SBI Cashback" },
    { merchant: "BookMyShow / travel", bestCard: "SBI Cashback", rate: "5% online", runner: "HDFC Millennia" },
  ];
  return (
    <svg
      viewBox="0 0 680 230"
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
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Zero annual fee card combination: Amazon Pay ICICI plus AU Xcite ACE covering all online shopping"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The Zero-Fee Online Stack</text>
      <rect x="20" y="38" width="290" height="120" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="10" />
      <text x="165" y="62" textAnchor="middle" fill={COLOR} fontSize="13" fontWeight="700">Amazon Pay ICICI (Free)</text>
      <text x="165" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">5% on Amazon (Prime)</text>
      <text x="165" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">2% on Amazon Pay partners</text>
      <text x="165" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">1% everywhere else</text>
      <text x="165" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Annual cost: ₹0</text>
      <text x="340" y="102" textAnchor="middle" fill="var(--text)" fontSize="18" fontWeight="900">+</text>
      <rect x="370" y="38" width="290" height="120" fill="var(--raise)" stroke="#10b981" strokeWidth="2" rx="10" />
      <text x="515" y="62" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="700">AU Xcite ACE (Free)</text>
      <text x="515" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">2% flat on ALL purchases</text>
      <text x="515" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">No category restrictions</text>
      <text x="515" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">No monthly cap</text>
      <text x="515" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Annual cost: ₹0</text>
      <text x="340" y="170" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Total annual fee: ₹0. Amazon at 5%, everything else at 2%.</text>
    </svg>
  );
}

function HighSpenderBreakeven() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Breakeven analysis showing at what monthly online spend each card becomes worth its annual fee"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Annual Fee Breakeven: When Each Card Pays for Itself</text>
      {[
        { card: "SBI Cashback", fee: 999, rate: "5%", breakeven: "₹20,000/yr online", color: COLOR },
        { card: "HDFC Millennia", fee: 1000, rate: "5%", breakeven: "₹20,000/yr (partners)", color: "#6366f1" },
        { card: "Axis Cashback", fee: 1000, rate: "7%", breakeven: "₹14,300/yr qualifying", color: "#10b981" },
        { card: "Amazon Pay ICICI", fee: 0, rate: "5%", breakeven: "Instant (free card)", color: "#ea580c" },
        { card: "AU Xcite ACE", fee: 0, rate: "2%", breakeven: "Instant (free card)", color: "#0891b2" },
      ].map((item, i) => (
        <g key={item.card}>
          <rect x="10" y={38 + i * 28} width="200" height="24" fill="var(--raise)" stroke="var(--border)" rx="3" />
          <text x="110" y={54 + i * 28} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="600">{item.card}</text>
          <rect x="218" y={38 + i * 28} width="80" height="24" fill={item.color + "22"} rx="3" />
          <text x="258" y={54 + i * 28} textAnchor="middle" fill={item.color} fontSize="11">₹{item.fee}/yr</text>
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
        acceptedAnswer: { "@type": "Answer", text: "SBI Cashback Credit Card gives 5% cashback on all online purchases, not just selected merchants, with a ₹5,000 monthly cap. For broad online spending across Amazon, Flipkart, Myntra, Nykaa, and other sites, it is the most versatile 5% card available in June 2026." }
      },
      {
        "@type": "Question",
        name: "What is the difference between HDFC Millennia 5% and SBI Cashback 5%?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia's 5% applies only to 10 named partner merchants like Amazon, Flipkart, Swiggy, and BigBasket. All other online merchants earn 1%. SBI Cashback's 5% applies to ALL online purchases regardless of merchant. If you shop on Nykaa, Ajio, or Meesho, SBI Cashback wins." }
      },
      {
        "@type": "Question",
        name: "Is there a free credit card that gives good cashback on online shopping?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Amazon Pay ICICI Credit Card is free and gives 5% on Amazon with no cap. AU Xcite ACE is also free and gives 2% flat on all purchases. Combining both gives you 5% on Amazon and 2% on everything else at zero annual cost." }
      },
      {
        "@type": "Question",
        name: "At what spend level does SBI Cashback's cap of Rs 5000 per month bind?",
        acceptedAnswer: { "@type": "Answer", text: "SBI Cashback's ₹5,000 monthly cap binds at ₹1,00,000 of online spend per month. For the vast majority of Indian households spending ₹20,000-60,000 per month online, the cap is never reached. This makes it effectively uncapped for typical spending patterns." }
      },
      {
        "@type": "Question",
        name: "Does the Axis Cashback card really give 7% on online shopping?",
        acceptedAnswer: { "@type": "Answer", text: "Axis Cashback Card offers up to 7% on certain qualifying online categories, but with a ₹2,000 monthly cap. The 7% applies to specific merchant categories, not all online spends. The cap binds at approximately ₹28,500 of qualifying spend per month. Above that level, SBI Cashback at 5% with a higher cap earns more." }
      },
      {
        "@type": "Question",
        name: "Does online cashback apply to EMI purchases?",
        acceptedAnswer: { "@type": "Answer", text: "This varies by card and bank. For SBI Cashback, cashback is generally not earned on EMI transactions or transactions converted to EMI post-purchase. Amazon Pay ICICI earns cashback on the monthly EMI instalment amount, not the full purchase value. Always check the card's specific terms before choosing EMI." }
      },
      {
        "@type": "Question",
        name: "What online shopping categories are typically excluded from cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Common exclusions include fuel purchases, gift card purchases, insurance premium payments, utility bill payments, and wallet top-ups. Even on cards with broad online cashback like SBI Cashback, these categories are excluded. Always verify the exclusion list in the card's most-current Most Important Terms document." }
      },
      {
        "@type": "Question",
        name: "I use only Amazon. Should I get SBI Cashback or Amazon Pay ICICI?",
        acceptedAnswer: { "@type": "Answer", text: "For Amazon-only spending, Amazon Pay ICICI is the better choice. It has no annual fee and no monthly cap on Amazon cashback. SBI Cashback has a ₹999 annual fee and a ₹5,000 monthly cap. For pure Amazon spend under ₹1 lakh per month, Amazon Pay ICICI nets more after fee deduction." }
      },
      {
        "@type": "Question",
        name: "Is a 2 percent flat cashback card worth holding for online shopping?",
        acceptedAnswer: { "@type": "Answer", text: "A free 2% flat card like AU Xcite ACE is worth holding as a catch-all for purchases that fall outside your primary cashback cards. When no other card earns more than 1% on a category, a free 2% card wins by default. It earns double the standard base rate at zero additional cost." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Online Shopping in India (June 2026)",
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
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best/" },
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Online Shopping", item: "https://assurefintech.com/best/credit-card-for-online-shopping" },
    ]
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Online Shopping
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · ONLINE SHOPPING
      </div>

      <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--text)", marginBottom: 12, lineHeight: 1.2 }}>
        Best Credit Card for Online Shopping in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        Five percent online cashback exists on four different cards in India right now. But they work completely differently. Here is the precise breakdown of which card is right for your actual spending mix.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 9 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Our Top Picks for Online Shopping</h2>

        {[
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "₹999/yr",
            rate: "5% ALL online spends",
            cap: "₹5,000/mo",
            badge: "Best All-Online",
            why: "The only card in India that gives 5% on literally all online merchant purchases. No partner list, no category restrictions. Shop on Nykaa, Ajio, Meesho, or any other platform and earn the same 5%. Cap binds only at ₹1 lakh monthly spend.",
            caveat: "0% on offline purchases. Cashback as direct bank credit takes up to 30 days post statement."
          },
          {
            name: "Amazon Pay ICICI Credit Card",
            slug: "amazon-pay-icici",
            fee: "Free (lifetime)",
            rate: "5% Amazon / 2% partners",
            cap: "No cap on Amazon",
            badge: "Best for Amazon",
            why: "Free card, 5% uncapped on Amazon, 2% on Amazon Pay partners. If Amazon accounts for 60%+ of your online spend, this card outperforms everything else at zero fee.",
            caveat: "Only 1% on non-Amazon, non-partner spends. Cashback is Amazon Pay balance, not bank credit."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000/yr",
            rate: "5% on 10 partner sites",
            cap: "₹1,000/mo shared",
            badge: "Best Multi-Partner",
            why: "Covers Amazon, Flipkart, BigBasket, Swiggy, Zomato, Myntra, and a few others at 5% in one card. If your spend is concentrated among these 10 partners and you want one card over multiple, Millennia delivers.",
            caveat: "₹1,000 shared cap across all partners combined. Low cap is the main limitation."
          },
          {
            name: "Axis Cashback Credit Card",
            slug: "axis-cashback",
            fee: "₹1,000/yr",
            rate: "7% on qualifying online",
            cap: "₹2,000/mo",
            badge: "Highest Rate, Tight Cap",
            why: "The 7% rate is the highest available on any online shopping card in June 2026. The ₹2,000 monthly cap limits total value to ₹24,000/year, but for moderate spenders, 7% on qualifying categories beats 5% on broader categories.",
            caveat: "7% applies to specific categories only. Cap binds at ₹28,500 monthly qualifying spend."
          },
          {
            name: "AU Xcite ACE Credit Card",
            slug: "au-xcite-ace",
            fee: "Free (lifetime)",
            rate: "2% flat all purchases",
            cap: "No cap",
            badge: "Zero-Fee Fallback",
            why: "Free, simple, 2% on everything. Best used as a catch-all card for purchases that fall outside your primary cards' high-reward categories. Earns more than the 1% base on any standard card.",
            caveat: "2% is lower than every category-specific card. Use as a fallback, not a primary card."
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
        <p>This is the most important concept to understand before picking an online shopping card. HDFC Millennia's 5% applies only to the 10 merchants on its published partner list. Shop at any other site and you earn 1%, not 5%.</p>
        <p>SBI Cashback's 5% applies to any merchant whose transaction comes through as an online payment. If you buy from a small D2C brand, a regional fashion platform, or an obscure electronics site, SBI Cashback still earns 5%. Millennia earns 1%.</p>
        <PartnerVsAllOnlineMatrix />
        <p style={{ marginTop: 12 }}>The matrix above shows the practical coverage gap. Indian consumers increasingly shop across many platforms: Meesho for budget fashion, Nykaa for beauty, Ajio for branded wear, and regional sites for specialty items. HDFC Millennia covers none of these non-partner sites at 5%.</p>
        <p>Understand the <Link href="/blog/cashback-rate-is-a-lie">real effective rate after partner restrictions</Link> before choosing a card based on headline numbers alone.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Cap Math at Different Spend Levels</h2>
        <p>All five of these cards cap their cashback at some level, whether that cap is a strict monthly ceiling or an uncapped structure that is uncapped only within a specific merchant. Understanding where your spend level intersects with each card's cap is the core decision variable.</p>
        <CapMathAtSpendLevels />
        <p style={{ marginTop: 12 }}>The chart makes the decision clearer: for spend below ₹20,000/month, the Axis Cashback card's 7% rate means it can earn more despite the lower cap. For ₹20,000-1,00,000 monthly online spend, SBI Cashback at 5% with a ₹5,000 cap earns the most on non-Amazon spend. Amazon Pay ICICI dominates on Amazon-specific spend regardless of amount.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Right Card for Each Online Merchant</h2>
        <p>Indian online spending is not homogeneous. A typical household might use Amazon for electronics, Flipkart for fashion, Nykaa for beauty, Swiggy for delivery, and a dozen other platforms throughout the month.</p>
        <MerchantCardMatchGrid />
        <p style={{ marginTop: 12 }}>The practical approach: hold Amazon Pay ICICI for Amazon purchases, Axis Flipkart for Flipkart, and SBI Cashback as the default for everything else. Total annual fee: under ₹1,500 for all three cards. See the <Link href="/stack-builder">Stack Builder tool</Link> to optimise this for your specific merchant mix.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Zero-Fee Option</h2>
        <p>Not everyone wants to manage multiple paid cards. If you prefer to avoid annual fees entirely, there is a two-card combination that provides solid online shopping coverage at zero cost.</p>
        <FreeCardComboDiagram />
        <p style={{ marginTop: 12 }}>Amazon Pay ICICI plus AU Xcite ACE costs ₹0 per year and covers: 5% on Amazon, 2% on Amazon Pay partners like Swiggy and BookMyShow, and 2% flat on everything else. That is meaningfully better than a single card earning 1% base rate across all spending.</p>
        <p>The trade-off is accepting 2% instead of 5% on non-Amazon spends. For a household spending ₹30,000/month across various online platforms, the free combo earns roughly ₹7,200/year. SBI Cashback earns ₹17,280 but costs ₹999, netting ₹16,281. For high spenders, the paid card wins clearly. For moderate spenders, the free combo is the rational choice.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>High-Spender Strategy: SBI Cashback Cap Reality</h2>
        <p>The SBI Cashback card's ₹5,000 monthly cap is often cited as a limitation. In practice, very few households reach it. The cap binds at ₹1 lakh monthly online spend, which is ₹12 lakh per year. That is genuinely high spend territory.</p>
        <HighSpenderBreakeven />
        <p style={{ marginTop: 12 }}>For the rare household spending ₹1 lakh or more online every month, SBI Cashback earns its maximum ₹5,000/month, or ₹60,000/year, against a ₹999 annual fee. The net ₹59,001 annual return is exceptional. No other card in this fee range comes close at that volume.</p>
        <p>If you are in this high-spend bracket, also consider holding both SBI Cashback and Amazon Pay ICICI: SBI Cashback for all non-Amazon online spend and ICICI for Amazon, since both have separate category tracking and the ICICI card is free. Use the <Link href="/smart-swipe">Smart Swipe guide</Link> to verify the stack math for your specific mix.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>List your top 5 online merchants by monthly spend. Check whether they appear on HDFC Millennia's partner list.</li>
          <li>If 3 or more of your top merchants are non-partners, SBI Cashback will earn you significantly more per month than Millennia.</li>
          <li>If you are primarily an Amazon shopper and do not have Amazon Pay ICICI, apply now. It is free and earns more than any paid card on Amazon.</li>
          <li>If you want the highest rate on qualifying spends below ₹28,500 per month, add Axis Cashback for its 7% on eligible categories.</li>
          <li>For all other online purchases that fall outside your primary cards, set AU Xcite ACE as the default. It earns 2% at zero fee.</li>
          <li>Read the <Link href="/blog/reward-points-vs-cashback">reward points vs cashback explainer</Link> before adding any points-earning card to your wallet for online shopping.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>SBI Cashback is the single best card for broad online shopping in India in June 2026. Its all-online coverage, high cap, and direct bank account cashback make it the most practical choice for households that shop across many platforms.</p>
        <p>Amazon Pay ICICI wins specifically for Amazon, and that is a meaningful carve-out given how central Amazon is to Indian e-commerce. Holding both at a combined fee of ₹999/year gives you the best of both worlds for the two largest online platforms.</p>
        <p>HDFC Millennia's partner-only limitation is its core weakness in 2026 when Indian consumers shop on dozens of platforms. Unless your spending is tightly concentrated among its 10 partners, SBI Cashback is the more rational choice despite the similar fee and headline rate.</p>
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

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Card terms including partner lists, caps, and rates are as of {UPDATED} and subject to change by issuers without notice. HDFC Millennia's partner list changes periodically. SBI Cashback exclusions apply to certain transaction types. Verify current terms before applying. This is not financial advice.
      </footer>
    </main>
  );
}
