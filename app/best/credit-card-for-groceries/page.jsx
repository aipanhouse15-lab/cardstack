import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Groceries in India (June 2026)",
  description: "Compare grocery cards by eligible merchant, online/offline use, point value, monthly caps and current issuer terms.",
  alternates: { canonical: "/best/credit-card-for-groceries" },
  openGraph: {
    title: "Best Credit Card for Groceries in India (June 2026)",
    description: "Compare grocery cards by eligible merchant, online/offline use, point value, monthly caps and current issuer terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-groceries
// Updated: September 26, 2026

const COLOR = "#16a34a";
const UPDATED = "September 26, 2026";

function AirtelDevaluationTimeline() {
  return (
    <svg
      viewBox="0 0 680 204"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Summary of current Airtel Axis benefits relevant to grocery merchants"
      style={{ width: "100%", borderRadius: 10, background: "var(--red-dim)", border: "1px solid #fca5a5" }}
    >
      <text x="340" y="24" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="700">Airtel Axis: Current Cashback Categories (Verify MCCs)</text>
      <line x1="60" y1="100" x2="620" y2="100" stroke="#dc2626" strokeWidth="2" />
      {[
        { x: 80, label: "Blinkit", note: "10% preferred merchant; terms apply", color: "#16a34a" },
        { x: 220, label: "Airtel bills", note: "25% via Thanks; cap tied to base", color: "#f59e0b" },
        { x: 360, label: "Utilities", note: "10% via Thanks; cap tied to base", color: "#f59e0b" },
        { x: 500, label: "Other spend", note: "1% base; MCC/eligibility matters", color: "#dc2626" },
      ].map((e, i) => (
        <g key={e.x}>
          <circle cx={e.x} cy={100} r={8} fill={e.color} />
          <text x={e.x} y={i % 2 === 0 ? 82 : 118} textAnchor="middle" fill="var(--text)" fontSize="10" fontWeight="700">{e.label}</text>
          <text x={e.x} y={i % 2 === 0 ? 68 : 134} textAnchor="middle" fill={e.color} fontSize="9">{e.note.slice(0, 30)}</text>
          <text x={e.x} y={i % 2 === 0 ? 56 : 146} textAnchor="middle" fill={e.color} fontSize="9">{e.note.slice(30)}</text>
        </g>
      ))}
      <rect x="20" y="160" width="640" height="32" fill="var(--raise)" rx="6" />
      <text x="340" y="180" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="700">Blinkit is listed as a 10% preferred merchant; other grocery transactions may earn the 1% base rate.</text>
    </svg>
  );
}

function BigBasketProblemDiagram() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative BigBasket and Instamart card terms, including category caps and eligibility"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The BigBasket Problem: Which Cards Actually Cover It?</text>
      {[
        { card: "HDFC Millennia", covers: false, rate: "Usually 1%", note: "BigBasket not in current 10-merchant 5% list", color: "#f59e0b" },
        { card: "SBI Tata Neu Infinity", covers: true, rate: "NeuCoins", note: "Partner earn; eligibility depends on Tata Neu route/MCC", color: COLOR },
        { card: "SBI Cashback", covers: true, rate: "5% online", note: "Eligible online; ₹2,000 online cap/statement cycle", color: COLOR },
        { card: "RBL ShopRite", covers: true, rate: "Points", note: "20/₹100 on eligible grocery MCCs; 1,000 points/cycle cap", color: COLOR },
        { card: "Axis Airtel", covers: false, rate: "Not BB", note: "10% preferred-merchant rate is for eligible Blinkit transactions", color: "#f59e0b" },
        { card: "HDFC Swiggy", covers: false, rate: "Not BB", note: "10% eligible Swiggy app rate includes Instamart; terms apply", color: "#f59e0b" },
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
      viewBox="0 0 680 232"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison of cashback rates on online grocery apps versus offline supermarkets across major credit cards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Online Grocery Apps vs Offline Supermarket: Very Different MCCs</text>
      <text x="200" y="40" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">Online Grocery (BigBasket, Blinkit, Instamart)</text>
      <text x="520" y="40" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="700">Offline Supermarket (DMart, Spencer, local)</text>
      {[
        { card: "RBL ShopRite", online: 5, offline: 5 },
        { card: "HDFC Millennia", online: 1, offline: 1 },
        { card: "SBI Cashback", online: 5, offline: 1 },
        { card: "Axis Airtel", online: 10, offline: 1 },
        { card: "HDFC Swiggy", online: 10, offline: 1 },
      ].map((c, i) => {
        const y = 52 + i * 30;
        const maxW = 220;
        return (
          <g key={c.card}>
            <text x="120" y={y + 14} textAnchor="end" fill="var(--text)" fontSize="11">{c.card}</text>
            <rect x="130" y={y + 2} width={c.online * (maxW / 10)} height={18} fill={COLOR} rx="3" />
            <text x={130 + c.online * (maxW / 10) + 5} y={y + 15} fill={COLOR} fontSize="11">{c.online}%</text>
            <rect x="410" y={y + 2} width={c.offline * (maxW / 10)} height={18} fill="#7c3aed" rx="3" />
            <text x={410 + c.offline * (maxW / 10) + 5} y={y + 15} fill="#7c3aed" fontSize="11">{c.offline}%</text>
          </g>
        );
      })}
      <text x="340" y="208" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Headline tiers shown; transaction eligibility and card-specific caps apply. RBL's 5% is point-value equivalent and capped.</text>
    </svg>
  );
}

function RBLShopRiteSpotlight() {
  return (
    <svg
      viewBox="0 0 680 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RBL ShopRite grocery reward points: 1000 accelerated points per billing cycle, worth up to 250 rupees subject to redemption terms"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: `1px solid ${COLOR}`, marginTop: 8 }}
    >
      <rect x="0" y="0" width="680" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fill={COLOR} fontSize="14" fontWeight="700">RBL ShopRite: Grocery Reward Points and Their Cap</text>
      <text x="340" y="50" textAnchor="middle" fill="var(--text)" fontSize="12">20 points/₹100 on eligible grocery MCCs; redeem at up to ₹0.25/point</text>
      <text x="340" y="68" textAnchor="middle" fill="var(--text)" fontSize="12">1,000 accelerated points per billing cycle (then 1 point/₹100)</text>
      <text x="340" y="88" textAnchor="middle" fill="var(--text)" fontSize="12">₹500 + tax annual fee; waiver at ₹1.5L eligible membership-year spend</text>
      <rect x="100" y="104" width="480" height="40" fill="var(--raise)" stroke={COLOR} rx="6" />
      <text x="340" y="120" textAnchor="middle" fill="var(--text)" fontSize="11">Max grocery value from accelerated points: up to ₹250/cycle before redemption terms.</text>
      <text x="340" y="136" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Points are not cash; MCC, point redemption and exclusions determine actual value.</text>
    </svg>
  );
}

function GroceryStackDiagram() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative grocery card selection: check merchant eligibility, category cap and redemption value before routing spend"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The Two-Card Grocery Stack</text>
      <rect x="20" y="38" width="290" height="120" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="10" />
      <text x="165" y="62" textAnchor="middle" fill={COLOR} fontSize="13" fontWeight="700">RBL ShopRite (₹500 + tax/yr)</text>
      <text x="165" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">20 points/₹100 on eligible grocery MCCs</text>
      <text x="165" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">1,000 accelerated points per billing cycle</text>
      <text x="165" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">Confirm the app/store transaction is coded grocery</text>
      <text x="165" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Value up to ₹250/cycle before redemption terms</text>
      <text x="340" y="100" textAnchor="middle" fill="var(--text)" fontSize="18" fontWeight="900">+</text>
      <rect x="370" y="38" width="290" height="120" fill="var(--raise)" stroke="#7c3aed" strokeWidth="2" rx="10" />
      <text x="515" y="62" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="700">Second card: verify before routing</text>
      <text x="515" y="80" textAnchor="middle" fill="var(--text)" fontSize="11">Check the card's eligible grocery MCCs</text>
      <text x="515" y="97" textAnchor="middle" fill="var(--text)" fontSize="11">Compare rate, cap and redemption value</text>
      <text x="515" y="114" textAnchor="middle" fill="var(--text)" fontSize="11">Do not assume general cashback applies</text>
      <text x="515" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="10">No universal online/offline card stack</text>
    </svg>
  );
}

function GrocerySpendScenarios() {
  return (
    <svg
      viewBox="0 0 680 254"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Annual cashback scenarios for grocery spend at different levels comparing three card options"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Annual Grocery Cashback: What You Actually Earn</text>
      {[
        ["Card", "Current grocery tier", "Cap / eligibility", "Reward type"],
        ["RBL ShopRite", "20 points/₹100", "1,000 accelerated points/cycle", "Points; up to ₹0.25 each"],
        ["SBI Cashback", "5% online; 1% offline", "₹2,000 per tier/statement cycle", "Cashback; exclusions apply"],
        ["HDFC Swiggy", "10% Swiggy app incl. Instamart", "₹1,500/cycle; ₹249 minimum", "Cashback; eligible app spends"],
        ["Axis Airtel", "10% on listed Blinkit preferred merchant", "Merchant/app rules and caps apply", "Cashback; check transaction terms"],
        ["HDFC Millennia", "5% on 10 named online merchants", "BigBasket not in current named list", "CashPoints; monthly caps apply"],
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
        acceptedAnswer: { "@type": "Answer", text: "There is no universal best card because merchant coding and caps differ. RBL ShopRite earns 20 points per ₹100 on eligible grocery MCCs, capped at 1,000 accelerated points per billing cycle; each point redeems for up to ₹0.25. That is up to ₹250 value, not cash, and online apps may not use an eligible MCC. Check the issuer's current terms and fee before applying." }
      },
      {
        "@type": "Question",
        name: "Does the Axis Airtel card give cashback on grocery purchases?",
        acceptedAnswer: { "@type": "Answer", text: "Axis currently lists eligible Blinkit transactions in its preferred-merchant offer. This should not be generalized to BigBasket, other grocery apps or physical supermarkets; check the live merchant definitions, caps and transaction eligibility before paying." }
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia give cashback on BigBasket?",
        acceptedAnswer: { "@type": "Answer", text: "BigBasket is not included in the current named list of HDFC Millennia's accelerated 5% merchants reviewed for this guide. A transaction may receive the base rate if otherwise eligible. Verify the issuer's current merchant list and caps." }
      },
      {
        "@type": "Question",
        name: "Do credit cards give cashback on offline grocery purchases at DMart or Spencer?",
        acceptedAnswer: { "@type": "Answer", text: "It depends on merchant coding and card terms. RBL ShopRite gives accelerated points on eligible grocery MCCs, up to 1,000 points per billing cycle. SBI Cashback lists 1% on eligible offline transactions, subject to exclusions. Axis ACE lists 1.5% on other eligible spends, not a universal 2% grocery rate. Check current issuer terms." }
      },
      {
        "@type": "Question",
        name: "What is the MCC code for grocery and does it affect cashback?",
        acceptedAnswer: { "@type": "Answer", text: "A merchant category code helps identify a transaction type. RBL ShopRite lists grocery MCCs including 5411, 5422, 5441, 5451 and 5499. An online app can be processed under a different code, so the app name alone does not guarantee category rewards. Review your statement and the issuer's current terms." }
      },
      {
        "@type": "Question",
        name: "Is Swiggy Instamart covered by the HDFC Swiggy card?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC lists 10% cashback on eligible Swiggy app transactions, including Instamart, subject to a ₹1,500 billing-cycle cap and a ₹249 minimum transaction under current terms. Swiggy Money Wallet, Liquor and Minis are excluded. This does not make BigBasket or Blinkit eligible for that offer." }
      },
      {
        "@type": "Question",
        name: "Does SBI Tata Neu Infinity card work for BigBasket?",
        acceptedAnswer: { "@type": "Answer", text: "Tata Neu-linked rewards may be available, but eligibility and earn rate depend on the current card terms, merchant and purchase route. NeuCoins are loyalty currency, not statement cashback. Confirm the rate and redemption conditions in the issuer and Tata Neu terms before estimating value." }
      },
      {
        "@type": "Question",
        name: "What is the best credit card for both grocery and food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "Match each card to an eligible merchant and category rather than assuming one card covers all food and grocery spend. HDFC Millennia's accelerated rate applies only to its current named merchants, while HDFC Swiggy's app offer and RBL ShopRite's grocery-MCC points have separate eligibility rules and caps. Compare annual fees and redemption value as well." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Groceries in India (June 2026)",
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
        Grocery rewards vary by merchant, transaction coding and reward caps. Compare current issuer terms before choosing a card for online apps or in-store shopping.
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
            fee: "₹500 + tax (waived at ₹1.5L eligible annual spend)",
            rate: "20 reward points/₹100 on eligible grocery MCCs",
            cap: "1,000 accelerated points/billing cycle; up to ₹250 value",
            badge: "Grocery MCC specialist",
            why: "RBL lists 20 points per ₹100 on grocery transactions, capped at 1,000 points per billing cycle; each point redeems for up to ₹0.25. This is up to 5% value on the first ₹5,000 eligible grocery spend, not unlimited cashback.",
            caveat: "Merchant MCC must qualify; after the cap, grocery earns 1 point/₹100. Points are redeemable rewards, not statement cashback."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000/yr",
            rate: "5% on 10 named online merchants; 1% other eligible spends",
            cap: "Separate ₹1,000/month caps; BigBasket not in current 5% list",
            badge: "Check merchant list",
            why: "HDFC's current Millennia list names Amazon, Flipkart, Myntra, Swiggy and other selected merchants, but not BigBasket. A grocery transaction only receives the accelerated rate if it qualifies under the issuer's current named list and terms.",
            caveat: "BigBasket should not be presented as a 5% partner based on the current list; monthly caps apply."
          },
          {
            name: "HDFC Swiggy BLCK Credit Card",
            slug: "hdfc-swiggy-blck",
            fee: "₹1,000/yr (waived at ₹2L eligible annual spend)",
            rate: "10% on eligible Swiggy app spend, including Instamart",
            cap: "₹1,500 per billing cycle; ₹249 transaction minimum",
            badge: "Instamart Specialist",
            why: "HDFC lists 10% cashback on eligible Swiggy app transactions, including Instamart, with a billing-cycle cap. It can suit users who already spend through Swiggy and meet the transaction minimum.",
            caveat: "Swiggy Money Wallet, Liquor and Minis are excluded; other eligibility terms apply. It does not make BigBasket or Blinkit eligible for the Swiggy rate."
          },
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "₹999/yr",
            rate: "5% eligible online; 1% eligible offline",
            cap: "₹2,000 cashback each for online and offline per statement cycle",
            badge: "All-Online Backup",
            why: "SBI advertises 5% eligible online cashback and 1% eligible offline cashback. An online grocery purchase may qualify, subject to merchant coding and the current exclusions.",
            caveat: "Online cashback is capped at ₹2,000 per statement cycle; utilities, fuel and other listed categories are excluded. Offline grocery is not 0% by default."
          },
          {
            name: "Axis Airtel Credit Card",
            slug: "axis-airtel",
            fee: "₹500/yr",
            rate: "10% on listed Blinkit preferred-merchant transactions",
            cap: "Issuer merchant/app definitions and current terms apply",
            badge: "Blinkit-specific",
            why: "Axis currently lists Blinkit among preferred merchants for value back. This does not make all grocery purchases—including physical supermarket transactions—eligible for 10%.",
            caveat: "Confirm the order and transaction meet the live Axis preferred-merchant terms; general other spend is listed at 1%."
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
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#dc2626" }}>Axis Airtel: Blinkit Is Not All Grocery Spend</h2>
        <p>Axis currently lists Blinkit among preferred merchants with 10% value back. Separately, eligible Airtel Thanks bill payments and utility payments have their own accelerated rates and caps; other eligible purchases generally earn the 1% base rate.</p>
        <p>That means a qualifying Blinkit order may earn the preferred-merchant rate, while BigBasket, another grocery app or a physical supermarket should not be assumed to qualify. Confirm Axis's current merchant definitions and transaction terms before routing spend.</p>
        <AirtelDevaluationTimeline />
        <p style={{ marginTop: 12 }}>Do not switch or estimate lost cashback based on a broad “grocery” label alone. The online platform, merchant coding, minimum transaction and monthly caps can change the actual reward.</p>
        <p>Understand why banks make these changes by reading our explainer on <Link href="/blog/cashback-rate-is-a-lie">why cashback rates are never permanent</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The BigBasket Problem</h2>
        <p>BigBasket transactions can be evaluated differently by each issuer. Tata Neu partner rewards depend on current merchant and route eligibility; HDFC Millennia's current named 5% list does not include BigBasket. An online-cashback product may cover an eligible transaction, subject to its MCC rules, exclusions and cap.</p>
        <BigBasketProblemDiagram />
        <p style={{ marginTop: 12 }}>SBI Cashback advertises 5% on eligible online transactions, but do not assume every bill or app transaction qualifies. SBI's revised terms include a ₹2,000 online cap per statement cycle and category exclusions.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Online Grocery vs Offline Supermarket: Different MCCs</h2>
        <p>Online grocery apps and physical supermarket terminals can be coded differently. RBL ShopRite's terms list eligible grocery MCCs (including 5411, 5422, 5441, 5451 and 5499); a delivery app is not automatically guaranteed to post under one of those codes.</p>
        <p>Other issuers use their own eligible-online lists, preferred merchants or broad online/offline cashback buckets. SBI Cashback currently lists 5% online and 1% offline but excludes several categories; Axis ACE lists fuel excluded and 1.5% on other eligible spends, not a universal 2% grocery rate.</p>
        <OnlineVsOfflineGroceryChart />
        <p style={{ marginTop: 12 }}>The practical implication: review the transaction MCC and issuer terms for both app orders and physical stores. ShopRite's grocery points apply to eligible grocery MCCs across channels, but the accelerated points cap is just 1,000 per billing cycle.</p>
        <p>Do not assume an online-only card earns nothing offline: SBI Cashback lists a 1% eligible offline tier. Conversely, an “online” purchase is not guaranteed to qualify for every card's accelerated rate.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The RBL ShopRite Case</h2>
        <RBLShopRiteSpotlight />
        <p style={{ marginTop: 12 }}>RBL lists 20 Reward Points per ₹100 on eligible grocery transactions, up to 1,000 points per billing cycle. Each point may be redeemed for up to ₹0.25; this is a maximum-value equivalent, not cash. The fee is ₹500 plus tax, with a waiver at ₹1.5 lakh eligible membership-year spend.</p>
        <p>The accelerated tier reaches its cap at ₹5,000 eligible grocery spend per billing cycle. Grocery spend beyond that earns 1 point per ₹100. MCC definitions matter for online platforms and physical stores.</p>
        <p>There is a separate fuel surcharge waiver (up to ₹100 per month on eligible ₹500–₹4,000 transactions), but fuel purchases do not earn reward points under current ShopRite terms. Do not count the waiver as grocery rewards.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Annual Return at Different Grocery Spend Levels</h2>
        <GrocerySpendScenarios />
        <p style={{ marginTop: 12 }}>This is a feature comparison, not an earnings forecast. ShopRite's 1,000-point cap is about ₹250 at RBL's maximum stated ₹0.25-per-point redemption value; Millennia's 5% offer only applies to its current named merchants, not every grocery app.</p>
        <p>For each card, verify the merchant/MCC and remaining cycle cap before estimating value. See our <Link href="/blog/cashback-rate-is-a-lie">cap structure explainer</Link> for more on shared vs category-specific caps.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Stack for Maximum Grocery Earning</h2>
        <p>No single card covers every grocery merchant at the same rate. A second card may help only if its current online/offline category, merchant coding, caps and redemption terms fit your actual purchases.</p>
        <GroceryStackDiagram />
        <p style={{ marginTop: 12 }}>We do not publish a single blended-return estimate because the merchant MCC, eligible order minimums and remaining statement-cycle cap are user-specific. ShopRite's grocery tier can provide at most 1,000 accelerated points per billing cycle (up to ₹250 at the issuer's stated maximum point value).</p>
        <p>SBI Cashback has separate ₹2,000 online and offline cashback caps per statement cycle, with exclusions. Use the <Link href="/stack-builder">Stack Builder tool</Link> for a broad comparison, then confirm grocery eligibility in each issuer's terms.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>Check whether your card's merchant terms cover the grocery app/store you actually use; Blinkit has an Axis Airtel preferred-merchant offer, but BigBasket and in-store spend differ.</li>
          <li>Evaluate ShopRite only if eligible grocery MCC spend and its 1,000-point cycle cap suit you; account for redemption value, annual fee plus tax, and the ₹1.5 lakh waiver threshold.</li>
          <li>Do not count HDFC Millennia's 5% merchant tier for BigBasket; it is not on the current named list.</li>
          <li>For offline supermarkets, compare issuer MCC/category terms; SBI Cashback lists 1% eligible offline cashback, while exclusions still apply.</li>
          <li>For Swiggy Instamart, HDFC Swiggy's 10% app cashback has a ₹1,500 billing-cycle cap and a ₹249 transaction minimum.</li>
          <li>Read the <Link href="/smart-swipe">Smart Swipe guide</Link> to see which card to swipe at each specific grocery channel.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>There is no universal best grocery card: the right option depends on the exact merchant, transaction coding, point redemption, cycle caps and fees. RBL ShopRite's 20 points/₹100 grocery earn is capped at 1,000 accelerated points per billing cycle and then drops to 1 point/₹100.</p>
        <p>Axis Airtel currently lists Blinkit as a preferred merchant, while HDFC Swiggy lists eligible Swiggy app transactions including Instamart at 10% with a cycle cap. Neither benefit covers every grocery app or supermarket.</p>
        <p>Compare the issuer's current categories and statement-cycle caps before switching a default card; treat points and cashback as different reward types.</p>
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
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Card terms including grocery category inclusions, caps, and partner lists were reviewed as of {UPDATED} and may change. Always verify current benefit terms with the issuing bank before applying. This is not financial advice.
      </footer>
    </main>
    </>
  );
}
