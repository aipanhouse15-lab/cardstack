import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Groceries in India (June 2026)",
  description: "The April 2026 Axis Airtel devaluation killed the most popular grocery card. Here is what to use now, including one card most people have never heard of.",
  alternates: { canonical: "/best/credit-card-for-groceries" },
  openGraph: {
    title: "Best Credit Card for Groceries in India (June 2026)",
    description: "The April 2026 Axis Airtel devaluation killed the most popular grocery card. Here is what to use now, including one card most people have never heard of.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-groceries
// Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

function AirtelDevaluationTimeline() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Timeline of Axis Airtel card devaluation showing grocery reward removed in April 2026"
      style={{ width: "100%", borderRadius: 10, background: "var(--red-dim)", border: "1px solid #fca5a5" }}
    >
      <text x="340" y="24" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="700">Axis Airtel Card: The April 2026 Grocery Killer</text>
      <line x1="60" y1="100" x2="620" y2="100" stroke="#dc2626" strokeWidth="2" />
      {[
        { x: 80, label: "2022", note: "Launch: 10% on grocery incl BigBasket, Blinkit", color: "#16a34a" },
        { x: 220, label: "2023", note: "Grocery cap reduced from uncapped to ₹500/mo", color: "#f59e0b" },
        { x: 360, label: "2024", note: "Grocery still in 10% tier, cap maintained", color: "#f59e0b" },
        { x: 500, label: "Apr 2026", note: "Grocery removed from 10% tier entirely. Effective rate: 1%", color: "#dc2626" },
      ].map((e, i) => (
        <g key={e.x}>
          <circle cx={e.x} cy={100} r={8} fill={e.color} />
          <text x={e.x} y={i % 2 === 0 ? 82 : 118} textAnchor="middle" fill="var(--text)" fontSize="10" fontWeight="700">{e.label}</text>
          <text x={e.x} y={i % 2 === 0 ? 68 : 134} textAnchor="middle" fill={e.color} fontSize="9">{e.note.slice(0, 30)}</text>
          <text x={e.x} y={i % 2 === 0 ? 56 : 146} textAnchor="middle" fill={e.color} fontSize="9">{e.note.slice(30)}</text>
        </g>
      ))}
      <rect x="20" y="160" width="640" height="32" fill="var(--raise)" rx="6" />
      <text x="340" y="180" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="700">If Axis Airtel is your grocery card, it is now earning you 1%. Switch immediately.</text>
    </svg>
  );
}

function BigBasketProblemDiagram() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BigBasket coverage diagram showing which cards cover it at 5 percent versus 1 percent base rate"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The BigBasket Problem: Which Cards Actually Cover It?</text>
      {[
        { card: "HDFC Millennia", covers: true, rate: "5%", note: "BigBasket in partner list", color: COLOR },
        { card: "SBI Tata Neu Infinity", covers: true, rate: "5% NeuCoins", note: "Tata brand, BigBasket parent", color: COLOR },
        { card: "SBI Cashback", covers: true, rate: "5%", note: "All online incl BigBasket", color: COLOR },
        { card: "RBL ShopRite", covers: true, rate: "5%", note: "Online grocery covered", color: COLOR },
        { card: "Axis Airtel", covers: false, rate: "1%", note: "Removed from 10% Apr 2026", color: "#dc2626" },
        { card: "HDFC Swiggy BLCK", covers: false, rate: "5% Swiggy Instamart only", note: "Not BigBasket", color: "#f59e0b" },
      ].map((item, i) => {
        const y = 36 + i * 24;
        return (
          <g key={item.card}>
            <rect x="10" y={y} width="180" height="20" fill="var(--raise)" stroke="var(--border)" rx="3" />
            <text x="100" y={y + 14} textAnchor="middle" fill="var(--text)" fontSize="11">{item.card}</text>
            <rect x="200" y={y} width="60" height="20" fill={item.covers ? "var(--green-dim)" : "var(--red-dim)"} rx="3" />
            <text x="230" y={y + 14} textAnchor="middle" fill={item.color} fontSize="11" fontWeight="700">{item.rate}</text>
            <rect x="270" y={y} width="400" height="20" fill="var(--raise)" rx="3" />
            <text x="470" y={y + 14} textAnchor="middle" fill="var(--text-muted)" fontSize="10">{item.note}</text>
          </g>
        );
      })}
    </svg>
  );
}

function OnlineVsOfflineGroceryChart() {
  return (
    <svg
      viewBox="0 0 680 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison of cashback rates on online grocery apps versus offline supermarkets across major credit cards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Online Grocery Apps vs Offline Supermarket: Very Different MCCs</text>
      <text x="200" y="40" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">Online Grocery (BigBasket, Blinkit, Instamart)</text>
      <text x="520" y="40" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="700">Offline Supermarket (DMart, Spencer, local)</text>
      {[
        { card: "RBL ShopRite", online: 5, offline: 2 },
        { card: "HDFC Millennia", online: 5, offline: 1 },
        { card: "SBI Cashback", online: 5, offline: 0 },
        { card: "Axis ACE", online: 2, offline: 2 },
        { card: "HDFC Swiggy BLCK", online: 5, offline: 1 },
      ].map((c, i) => {
        const y = 52 + i * 30;
        const maxW = 250;
        return (
          <g key={c.card}>
            <text x="120" y={y + 14} textAnchor="end" fill="var(--text)" fontSize="11">{c.card}</text>
            <rect x="130" y={y + 2} width={c.online * (maxW / 5)} height={18} fill={COLOR} rx="3" />
            <text x={130 + c.online * (maxW / 5) + 5} y={y + 15} fill={COLOR} fontSize="11">{c.online}%</text>
            <rect x="410" y={y + 2} width={c.offline * (maxW / 5)} height={18} fill="#7c3aed" rx="3" />
            <text x={410 + c.offline * (maxW / 5) + 5} y={y + 15} fill="#7c3aed" fontSize="11">{c.offline}%</text>
          </g>
        );
      })}
      <text x="340" y="208" textAnchor="middle" fill="var(--text-muted)" fontSize="10">SBI Cashback earns 0% at offline grocery: it covers online purchases only.</text>
    </svg>
  );
}

function RBLShopRiteSpotlight() {
  return (
    <svg
      viewBox="0 0 680 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RBL ShopRite card spotlight showing 5 percent grocery cashback with 1000 rupee monthly cap"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: `1px solid ${COLOR}`, marginTop: 8 }}
    >
      <rect x="0" y="0" width="680" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fill={COLOR} fontSize="14" fontWeight="700">RBL ShopRite: India's Best Pure Grocery Card (That Nobody Knows)</text>
      <text x="340" y="50" textAnchor="middle" fill="var(--text)" fontSize="12">5% on grocery: BigBasket, Blinkit, Spencer, and more</text>
      <text x="340" y="68" textAnchor="middle" fill="var(--text)" fontSize="12">Annual Fee: ₹500 · Monthly Cap: ₹1,000 (binds at ₹20,000 grocery spend)</text>
      <text x="340" y="88" textAnchor="middle" fill="var(--text)" fontSize="12">2% on utility payments · 1% base on all else</text>
      <rect x="100" y="104" width="480" height="40" fill="var(--raise)" stroke={COLOR} rx="6" />
      <text x="340" y="120" textAnchor="middle" fill="var(--text)" fontSize="11">At ₹10,000/month grocery spend: earns ₹500 cashback. Annual net: ₹5,500 after ₹500 fee.</text>
      <text x="340" y="136" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Most Indian credit card users have never heard of this card. That is a mistake.</text>
    </svg>
  );
}

function GroceryStackDiagram() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Grocery spending stack: RBL ShopRite for online grocery, Axis ACE for offline supermarket purchases"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The Two-Card Grocery Stack</text>
      <rect x="20" y="38" width="290" height="120" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="10" />
      <text x="165" y="62" textAnchor="middle" fill={COLOR} fontSize="13" fontWeight="700">RBL ShopRite (₹500/yr)</text>
      <text x="165" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">5% on online grocery: BigBasket, Blinkit</text>
      <text x="165" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">Cap: ₹1,000/mo</text>
      <text x="165" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">Use for all app-based grocery orders</text>
      <text x="165" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Primary grocery card for online orders</text>
      <text x="340" y="100" textAnchor="middle" fill="var(--text)" fontSize="18" fontWeight="900">+</text>
      <rect x="370" y="38" width="290" height="120" fill="var(--raise)" stroke="#7c3aed" strokeWidth="2" rx="10" />
      <text x="515" y="62" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="700">Axis ACE (₹499/yr)</text>
      <text x="515" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">2% on all categories offline too</text>
      <text x="515" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">Use at DMart, Spencer, local market</text>
      <text x="515" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">No MCC restriction for groceries</text>
      <text x="515" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Fallback for offline grocery spend</text>
    </svg>
  );
}

function GrocerySpendScenarios() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Annual cashback scenarios for grocery spend at different levels comparing three card options"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Annual Grocery Cashback: What You Actually Earn</text>
      {[
        ["Monthly Grocery", "RBL ShopRite (net)", "HDFC Millennia (net)", "SBI Cashback (net)"],
        ["₹5,000/mo", "₹2,500 (₹500 fee)", "₹2,000 (₹1k fee)", "₹2,001 (₹999 fee)"],
        ["₹10,000/mo", "₹5,500 (₹500 fee)", "₹11,000 (capped)", "₹5,001 (₹999 fee)"],
        ["₹15,000/mo", "₹11,500 (capped at ₹12k)", "₹11,000 (capped)", "₹8,001 (₹999 fee)"],
        ["₹25,000/mo", "₹11,500 (capped)", "₹11,000 (capped)", "₹14,001 (₹999 fee)"],
      ].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={10 + ci * 165} y={36 + ri * 30} width={163} height={28} fill={ri === 0 ? COLOR : ri % 2 === 0 ? "#fff" : "var(--raise)"} rx="2" />
              <text x={91 + ci * 165} y={54 + ri * 30} textAnchor="middle" fill={ri === 0 ? "#fff" : ci > 0 ? (ri > 2 && ci === 3 ? "#7c3aed" : "var(--text)") : "var(--text)"} fontSize="10" fontWeight={ri === 0 || ci === 0 ? "700" : "400"}>{cell}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function BestCreditCardForGroceries() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives the best cashback on grocery shopping in India?",
        acceptedAnswer: { "@type": "Answer", text: "As of June 2026, RBL ShopRite Credit Card is the best dedicated grocery card with 5% cashback on grocery purchases including BigBasket and Blinkit, capped at ₹1,000 per month. The ₹500 annual fee is low for the category benefit provided." }
      },
      {
        "@type": "Question",
        name: "Does Axis Airtel card still give cashback on groceries after April 2026?",
        acceptedAnswer: { "@type": "Answer", text: "No. Axis Airtel credit card's grocery category was removed from the 10% reward tier in April 2026. Grocery purchases now earn around 1% on the Axis Airtel card. If you are still using Axis Airtel for BigBasket, Blinkit, or supermarket purchases, you need to switch cards immediately." }
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia give cashback on BigBasket?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, BigBasket is on HDFC Millennia's partner list and earns 5% cashback. However, this is subject to the shared ₹1,000 monthly cap across all categories on the card. Heavy use of Millennia for Amazon and Swiggy can reduce what is available for BigBasket in a given month." }
      },
      {
        "@type": "Question",
        name: "Do credit cards give cashback on offline grocery purchases at DMart or Spencer?",
        acceptedAnswer: { "@type": "Answer", text: "It depends on the card. RBL ShopRite covers both online and offline grocery. Axis ACE gives 2% flat on all purchases including offline. SBI Cashback gives 0% on offline grocery since it only covers online transactions. Always match your card to your shopping channel." }
      },
      {
        "@type": "Question",
        name: "What is the MCC code for grocery and does it affect cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Grocery stores typically use MCC 5411 (Grocery Stores) or 5412 (Convenience Stores). Online grocery apps like Blinkit or BigBasket may use a delivery or marketplace MCC instead of a grocery MCC. Cards with merchant-ID based rewards (like those with specific app partnerships) are more reliable than MCC-based category rewards for online grocery." }
      },
      {
        "@type": "Question",
        name: "Is Swiggy Instamart covered by HDFC Swiggy BLCK card as grocery?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Swiggy BLCK card gives 5% on Swiggy platform purchases including Swiggy Instamart. However, this is specific to the Instamart tab within Swiggy. Purchases from BigBasket or Blinkit on the same card earn only the base rate. The card is best for Swiggy-ecosystem grocery, not grocery broadly." }
      },
      {
        "@type": "Question",
        name: "Does SBI Tata Neu Infinity card work for BigBasket?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, SBI Tata Neu Infinity card earns NeuCoins on BigBasket purchases since BigBasket is a Tata-owned platform. NeuCoins can be redeemed across the Tata ecosystem. The effective return is around 5% in NeuCoins, but these are loyalty points redeemable only within Tata brands, not direct cashback." }
      },
      {
        "@type": "Question",
        name: "What is the best credit card for both grocery and food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia covers both food delivery (Swiggy/Zomato) and grocery (BigBasket) at 5%, but with a shared ₹1,000 monthly cap. For larger combined spends, holding RBL ShopRite for grocery and HDFC Swiggy Card for food delivery is a more efficient stack." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Groceries in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Groceries", item: "https://assurefintech.com/best/credit-card-for-groceries" },
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #021509, #073417, #021509)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #16a34a22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Groceries in India (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Groceries
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · GROCERIES
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        The April 2026 Axis Airtel devaluation killed the most popular grocery card. Here is what to use now, including one card most people have never heard of.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Our Top Picks for Grocery Shopping</h2>

        {[
          {
            name: "RBL Bank ShopRite Credit Card",
            slug: "rbl-shoprite",
            fee: "₹500/yr",
            rate: "5% on groceries",
            cap: "₹1,000/mo",
            badge: "Best Grocery Card",
            why: "The best dedicated grocery card in India as of June 2026. Covers BigBasket, Blinkit, offline grocery stores, and supermarkets at 5%. Most people have never heard of this card, which is their loss. The ₹500 annual fee is among the lowest in the category.",
            caveat: "Cap binds at ₹20,000 monthly grocery spend. Check current partner list with RBL Bank."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000/yr",
            rate: "5% on BigBasket",
            cap: "₹1,000/mo shared",
            badge: "Multi-Category",
            why: "BigBasket is on the Millennia partner list at 5%. If you already use Millennia for Swiggy and Amazon, grocery benefit comes included. The shared cap is the limitation: heavy multi-category use reduces effective grocery earning.",
            caveat: "Shared cap across all partner categories. Not a standalone grocery card."
          },
          {
            name: "HDFC Swiggy BLCK Credit Card",
            slug: "hdfc-swiggy-blck",
            fee: "₹1,499/yr",
            rate: "5% on Swiggy Instamart",
            cap: "Swiggy ecosystem only",
            badge: "Instamart Specialist",
            why: "If you buy groceries primarily through Swiggy Instamart, this card earns 5% on those purchases as part of the broad Swiggy 5% category. Useful if Instamart is your primary quick-commerce grocery app.",
            caveat: "Does not cover BigBasket or Blinkit. Higher fee. Swiggy-only grocery coverage."
          },
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "₹999/yr",
            rate: "5% on online grocery apps",
            cap: "₹5,000/mo",
            badge: "All-Online Backup",
            why: "Covers BigBasket, Blinkit, and Swiggy Instamart at 5% since all are online merchants. Useful as a high-cap backup when RBL ShopRite cap is hit. Zero offline grocery benefit.",
            caveat: "Online only. 0% at physical grocery stores and supermarkets."
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
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#dc2626" }}>What Changed with Axis Airtel in April 2026</h2>
        <p>For years, the Axis Airtel Credit Card was on every "best grocery card" list in India. The 10% grocery earning, which covered BigBasket, Blinkit, and even offline stores under certain MCCs, made it genuinely one of the best category cards available.</p>
        <p>That changed in April 2026. The revision removed grocery and dining from the 10% accelerated reward tier. The category still exists on the card but now earns the base reward rate of approximately 1%.</p>
        <AirtelDevaluationTimeline />
        <p style={{ marginTop: 12 }}>If you have not updated your default payment card on BigBasket or Blinkit since April 2026, you are earning 1% instead of 5-10%. That gap, on a household spending ₹8,000/month on groceries, is roughly ₹3,840 per year in lost cashback.</p>
        <p>Understand why banks make these changes by reading our explainer on <Link href="/blog/cashback-rate-is-a-lie">why cashback rates are never permanent</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The BigBasket Problem</h2>
        <p>BigBasket is India's largest online grocery platform and also one of the trickiest to navigate from a card reward perspective. It is a Tata-owned company, which means it is on the partner list of Tata-affiliated cards like SBI Tata Neu Infinity. It is also on HDFC Millennia's partner list as a standalone merchant.</p>
        <p>What catches people out is assuming that any "grocery card" or any "cashback card" will automatically earn the premium rate on BigBasket. Many do not. The reward depends entirely on whether BigBasket is specifically listed or if the card has a broad online-grocery MCC rule.</p>
        <BigBasketProblemDiagram />
        <p style={{ marginTop: 12 }}>A key nuance: SBI Cashback earns 5% on BigBasket because BigBasket transacts as an online merchant, and SBI Cashback covers all online purchases at 5%. The card does not have a specific BigBasket partnership. This is a structural difference worth understanding.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Online Grocery vs Offline Supermarket: Different MCCs</h2>
        <p>When you buy groceries on BigBasket or Blinkit, the transaction runs through an online payment gateway and is tagged with an e-commerce or marketplace MCC. When you swipe your card at DMart, the POS terminal sends a physical retail grocery MCC (5411 or 5412).</p>
        <p>These are different transaction types and different cards handle them differently. SBI Cashback earns 5% on the online transaction but 0% at the DMart counter. RBL ShopRite earns 5% on both. Axis ACE earns 2% on both since it uses a flat cashback structure that ignores MCC.</p>
        <OnlineVsOfflineGroceryChart />
        <p style={{ marginTop: 12 }}>The practical implication: if your family does a mix of weekly BigBasket orders and monthly bulk purchases at DMart or a local supermarket, you need either RBL ShopRite as a single card covering both channels or a two-card approach with an online-focused card plus Axis ACE for offline.</p>
        <p>Track your offline vs online grocery ratio. Most urban Indian households have shifted 60-70% of grocery spend online. But if you still shop at physical stores regularly, the online-only coverage of SBI Cashback leaves real money on the table.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The RBL ShopRite Case</h2>
        <RBLShopRiteSpotlight />
        <p style={{ marginTop: 12 }}>RBL Bank's ShopRite Credit Card does not get coverage proportional to its actual quality. It consistently earns 5% on grocery purchases across both online (BigBasket, Blinkit) and offline channels, with a ₹500 annual fee that is lower than every comparable grocery card from HDFC, SBI, or Axis.</p>
        <p>The cap of ₹1,000 per month binds at ₹20,000 monthly grocery spend. For a household spending ₹8,000-15,000 on groceries monthly, the cap is not hit and every rupee earns the full 5%.</p>
        <p>The main reason most people do not know this card exists: RBL Bank has less marketing visibility than HDFC or SBI. The card is available on RBL Bank's website and through major card aggregator sites. Application and servicing quality is generally reported as fine, though RBL is a smaller bank than the big four.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Annual Return at Different Grocery Spend Levels</h2>
        <GrocerySpendScenarios />
        <p style={{ marginTop: 12 }}>The scenarios above show a key finding: at ₹10,000/month grocery spend, HDFC Millennia caps at ₹1,000/month but that cap is shared across all categories. If Millennia is also being used for Swiggy and Amazon, the effective grocery allocation from the cap may be lower than ₹500/month.</p>
        <p>RBL ShopRite's ₹1,000/month cap is grocery-specific, not shared with other categories. That is the structural reason it wins for dedicated grocery spend. See our <Link href="/blog/cashback-rate-is-a-lie">cap structure explainer</Link> for more on shared vs category-specific caps.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Stack for Maximum Grocery Earning</h2>
        <p>No single card covers all grocery scenarios optimally. The two-card stack that covers both online app orders and offline supermarket purchases at a combined annual cost under ₹1,000 is practical and effective.</p>
        <GroceryStackDiagram />
        <p style={{ marginTop: 12 }}>This stack costs ₹999 per year combined. At ₹12,000 monthly grocery spend split roughly 70/30 between online and offline, you earn approximately ₹4,200 in online 5% cashback (before cap) plus ₹720 in offline 2% cashback, totalling ₹4,920 per year before deducting the ₹999 fee. Net: approximately ₹3,921.</p>
        <p>For a household with higher online grocery spend, adding SBI Cashback as a third card at ₹999/yr provides a ₹5,000 monthly cap safety net for months when your online grocery pushes past ₹20,000. Use the <Link href="/stack-builder">Stack Builder tool</Link> to model your specific scenario.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>Open BigBasket, Blinkit, and Swiggy Instamart and check your default payment card. If it is Axis Airtel, change it today.</li>
          <li>Apply for RBL ShopRite if your monthly grocery spend is consistently above ₹5,000. The ₹500 fee pays for itself at ₹10,000 grocery spend in under 2 months of 5% earning.</li>
          <li>Check if BigBasket is still on HDFC Millennia's partner list before relying on Millennia for grocery cashback. Partner lists change.</li>
          <li>If you shop at physical grocery stores like DMart regularly, ensure your card earns on offline MCC 5411 transactions. SBI Cashback does not. RBL ShopRite does.</li>
          <li>For households with children or large families spending ₹20,000+ on grocery monthly, combine RBL ShopRite (first ₹20,000) with SBI Cashback (overflow).</li>
          <li>Read the <Link href="/smart-swipe">Smart Swipe guide</Link> to see which card to swipe at each specific grocery channel.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>RBL ShopRite is the best grocery credit card in India right now. The Axis Airtel situation should remind everyone that card rewards are not permanent: what earned 10% on grocery in 2023 earns 1% in 2026. Reviewing your default cards every 6 months is essential.</p>
        <p>HDFC Millennia is a reasonable grocery card for people who already hold it for other categories. But its shared cap means it is not the right tool if grocery is a significant standalone spend category for your household.</p>
        <p>The online vs offline split remains the biggest structural challenge in grocery card selection. No single card is perfect for both channels at a low fee. RBL ShopRite comes closest at ₹500/year for combined online and offline grocery coverage at 5%.</p>
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
        <Link href="/cards/rbl-shoprite">RBL ShopRite Card Review</Link> ·{" "}
        <Link href="/cards/hdfc-millennia">HDFC Millennia Review</Link> ·{" "}
        <Link href="/best/credit-card-for-swiggy-zomato">Best Cards for Food Delivery</Link> ·{" "}
        <Link href="/best/credit-card-for-online-shopping">Best Cards for Online Shopping</Link> ·{" "}
        <Link href="/blog/cashback-rate-is-a-lie">Cashback Rate Is a Lie</Link> ·{" "}
        <Link href="/stack-builder">Stack Builder</Link>
      </p>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Card terms including grocery category inclusions, caps, and partner lists verified as of {UPDATED}. The Axis Airtel card devaluation details are based on the April 2026 revised terms. RBL ShopRite terms subject to change. Always verify current benefit terms with the issuing bank before applying. This is not financial advice.
      </footer>
    </main>
    </>
  );
}
