import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Swiggy and Zomato (June 2026)",
  description: "You are probably using the wrong card for food delivery, and it is costing you ₹3,000-4,000 a year. Here is the honest breakdown of every card worth consider...",
  alternates: { canonical: "/best/credit-card-for-swiggy-zomato" },
  openGraph: {
    title: "Best Credit Card for Swiggy and Zomato (June 2026)",
    description: "You are probably using the wrong card for food delivery, and it is costing you ₹3,000-4,000 a year. Here is the honest breakdown of every card worth consider...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-swiggy-zomato
// Updated: June 4, 2026

const COLOR = "#f97316";
const UPDATED = "June 4, 2026";

function CapMathChart() {
  const data = [
    { label: "₹5,000/mo", hdfc: 500, millennia: 250, ace: 200 },
    { label: "₹10,000/mo", hdfc: 1000, millennia: 500, ace: 400 },
    { label: "₹15,000/mo", hdfc: 1500, millennia: 750, ace: 500 },
    { label: "₹20,000/mo", hdfc: 1500, millennia: 1000, ace: 500 },
  ];
  const maxVal = 1500;
  return (
    <svg
      viewBox="0 0 680 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monthly cashback earned on food delivery at different spend levels across three cards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)" }}
    >
      <text x="340" y="28" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Monthly Cashback: Cap Math Visualised</text>
      {data.map((d, i) => {
        const x = 60 + i * 155;
        const barW = 30;
        const h = (v) => Math.round((v / maxVal) * 200);
        const baseY = 260;
        return (
          <g key={d.label}>
            <text x={x + 45} y={baseY + 22} textAnchor="middle" fill="var(--text-muted)" fontSize="11">{d.label}</text>
            <rect x={x} y={baseY - h(d.hdfc)} width={barW} height={h(d.hdfc)} fill={COLOR} rx="3" />
            <text x={x + 15} y={baseY - h(d.hdfc) - 5} textAnchor="middle" fill={COLOR} fontSize="10">₹{d.hdfc}</text>
            <rect x={x + 35} y={baseY - h(d.millennia)} width={barW} height={h(d.millennia)} fill="#6366f1" rx="3" />
            <text x={x + 50} y={baseY - h(d.millennia) - 5} textAnchor="middle" fill="#6366f1" fontSize="10">₹{d.millennia}</text>
            <rect x={x + 70} y={baseY - h(d.ace)} width={barW} height={h(d.ace)} fill="#10b981" rx="3" />
            <text x={x + 85} y={baseY - h(d.ace) - 5} textAnchor="middle" fill="#10b981" fontSize="10">₹{d.ace}</text>
          </g>
        );
      })}
      <g>
        <rect x="100" y="292" width="12" height="10" fill={COLOR} rx="2" />
        <text x="116" y="301" fill="var(--text-muted)" fontSize="11">HDFC Swiggy (10%)</text>
        <rect x="270" y="292" width="12" height="10" fill="#6366f1" rx="2" />
        <text x="286" y="301" fill="var(--text-muted)" fontSize="11">HDFC Millennia (5%)</text>
        <rect x="450" y="292" width="12" height="10" fill="#10b981" rx="2" />
        <text x="466" y="301" fill="var(--text-muted)" fontSize="11">Axis ACE (4%)</text>
      </g>
      <line x1="40" y1="260" x2="640" y2="260" stroke="var(--border)" strokeWidth="1" />
    </svg>
  );
}

function StackPlayDiagram() {
  return (
    <svg
      viewBox="0 0 680 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision flowchart: HDFC Swiggy card for Swiggy orders, Axis ACE for Zomato overflow"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="28" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The Two-Card Stack Play</text>
      <rect x="20" y="50" width="200" height="60" fill={COLOR} rx="8" />
      <text x="120" y="75" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Swiggy Order?</text>
      <text x="120" y="93" textAnchor="middle" fill="#fff" fontSize="11">Use HDFC Swiggy Card</text>
      <text x="120" y="107" textAnchor="middle" fill="#fff" fontSize="10">10% cashback, cap ₹1,500/mo</text>
      <rect x="240" y="50" width="200" height="60" fill="#6366f1" rx="8" />
      <text x="340" y="75" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Zomato Order?</text>
      <text x="340" y="93" textAnchor="middle" fill="#fff" fontSize="11">Use HDFC Millennia</text>
      <text x="340" y="107" textAnchor="middle" fill="#fff" fontSize="10">5% on both apps, cap ₹1,000/mo</text>
      <rect x="460" y="50" width="200" height="60" fill="#10b981" rx="8" />
      <text x="560" y="75" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Both apps, low fee?</text>
      <text x="560" y="93" textAnchor="middle" fill="#fff" fontSize="11">Use Axis ACE</text>
      <text x="560" y="107" textAnchor="middle" fill="#fff" fontSize="10">4% via UPI apps, ₹499/yr</text>
      <rect x="130" y="148" width="420" height="50" fill="var(--border)" rx="8" />
      <text x="340" y="168" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Best Stack: HDFC Swiggy (Swiggy) + Axis ACE (Zomato)</text>
      <text x="340" y="185" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Combined cap: ₹2,000/mo. Works if split between apps.</text>
    </svg>
  );
}

function EffectiveRateGrid() {
  return (
    <svg
      viewBox="0 0 680 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Effective annual return comparison table for food delivery cards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="26" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Effective Annual Return (After Fees and Caps)</text>
      {[
        ["Card", "Annual Fee", "Max Reward/Yr", "Net Return", "Verdict"],
        ["HDFC Swiggy", "₹500", "₹18,000", "₹17,500", "Best Swiggy-only"],
        ["HDFC Millennia", "₹1,000", "₹12,000 (shared)", "₹11,000", "Best both apps"],
        ["Axis ACE", "₹499", "₹6,000", "₹5,501", "Budget pick"],
        ["HSBC Live+", "₹1,999", "₹12,000", "₹10,001", "Worth if dining too"],
        ["Axis Flipkart", "₹500", "~₹7,200", "₹6,700", "No explicit cap"],
      ].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={10 + ci * 132} y={38 + ri * 36} width={130} height={34} fill={ri === 0 ? COLOR : ri % 2 === 0 ? "var(--raise)" : "#fff"} rx="2" />
              <text
                x={75 + ci * 132}
                y={58 + ri * 36}
                textAnchor="middle"
                fill={ri === 0 ? "#fff" : ci === 4 ? (row[4] === "Best Swiggy-only" ? COLOR : "var(--text-muted)") : "var(--text)"}
                fontSize={ri === 0 ? "11" : "11"}
                fontWeight={ri === 0 ? "700" : ci === 0 ? "600" : "400"}
              >
                {cell}
              </text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function MCCInfoDiagram() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MCC code illustration showing how banks categorise Swiggy and Zomato transactions"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="26" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">How MCC Codes Affect Your Reward</text>
      <rect x="20" y="44" width="190" height="110" fill="var(--raise)" stroke="var(--border)" rx="8" />
      <text x="115" y="65" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">You pay ₹500 on Swiggy</text>
      <text x="115" y="83" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Payment goes to bank</text>
      <text x="115" y="101" textAnchor="middle" fill="var(--text-muted)" fontSize="11">MCC: 5812 (Restaurants)</text>
      <text x="115" y="119" textAnchor="middle" fill="var(--text-muted)" fontSize="11">or 7372 (Software)</text>
      <text x="115" y="137" textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="600">Card rule fires on MCC</text>
      <rect x="250" y="44" width="190" height="110" fill="var(--raise)" stroke="var(--border)" rx="8" />
      <text x="345" y="65" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">HDFC Swiggy Card</text>
      <text x="345" y="83" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Has Swiggy merchant deal</text>
      <text x="345" y="101" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Recognises Swiggy MID</text>
      <text x="345" y="119" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">10% fires correctly</text>
      <text x="345" y="137" textAnchor="middle" fill="var(--text-muted)" fontSize="10">MCC alone not enough</text>
      <rect x="480" y="44" width="190" height="110" fill="var(--raise)" stroke="var(--border)" rx="8" />
      <text x="575" y="65" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Axis ACE via UPI App</text>
      <text x="575" y="83" textAnchor="middle" fill="var(--text-muted)" fontSize="11">UPI transaction routed</text>
      <text x="575" y="101" textAnchor="middle" fill="var(--text-muted)" fontSize="11">via GPAY/PhonePe</text>
      <text x="575" y="119" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">4% fires on UPI merchant</text>
      <text x="575" y="137" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Works Swiggy and Zomato</text>
    </svg>
  );
}

function AirtelDevaluationAlert() {
  return (
    <svg
      viewBox="0 0 680 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Alert: Axis Airtel card devalued in April 2026, dining and grocery removed from 10 percent category"
      style={{ width: "100%", borderRadius: 10, background: "var(--red-dim)", border: "1px solid #fca5a5", marginTop: 8 }}
    >
      <rect x="0" y="0" width="680" height="120" fill="var(--raise)" rx="10" />
      <text x="340" y="28" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="700">Axis Airtel Card: April 2026 Devaluation Alert</text>
      <text x="340" y="52" textAnchor="middle" fill="#991b1b" fontSize="12">Previously: 10% on dining including Swiggy, Zomato</text>
      <text x="340" y="70" textAnchor="middle" fill="#991b1b" fontSize="12">After April 2026: Dining and grocery removed from 10% tier</text>
      <text x="340" y="88" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="600">Do NOT use Axis Airtel for food delivery anymore.</text>
      <text x="340" y="106" textAnchor="middle" fill="#991b1b" fontSize="11">Effective rate on food delivery now 1%. Switch your default card.</text>
    </svg>
  );
}

function SpendScenarioGrid() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Spend scenario grid: which card wins at different food delivery budget levels"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Which Card Wins at Your Spend Level?</text>
      {[
        ["Monthly Food Spend", "Best Card", "Annual Return", "Why"],
        ["Under ₹5,000", "Axis ACE", "~₹2,000", "Low fee, no worry about cap"],
        ["₹5,000-₹10,000 (Swiggy only)", "HDFC Swiggy", "₹5,500-₹10,500", "10% rate, cap not hit"],
        ["₹10,000-₹15,000 (both apps)", "HDFC Millennia", "₹5,000-₹7,500", "Covers Zomato too"],
        ["₹15,000+ mixed dining", "HSBC Live+", "₹10,000+", "10% on all dining"],
      ].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <rect key={ci + "bg"} x={10 + ci * 165} y={36 + ri * 30} width={163} height={28} fill={ri === 0 ? COLOR : ri % 2 === 0 ? "#fff" : "var(--raise)"} rx="2" />
          ))}
          {row.map((cell, ci) => (
            <text key={ci} x={91 + ci * 165} y={54 + ri * 30} textAnchor="middle" fill={ri === 0 ? "#fff" : "var(--text)"} fontSize="10" fontWeight={ri === 0 || ci === 0 ? "700" : "400"}>{cell}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function BestCreditCardForSwiggyZomato() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives the highest cashback on Swiggy?",
        acceptedAnswer: { "@type": "Answer", text: "The HDFC Swiggy Credit Card gives 10% cashback on Swiggy orders, capped at ₹1,500 per month. At a monthly Swiggy spend of ₹10,000-15,000, this maxes out, making it the best dedicated Swiggy card available in June 2026." }
      },
      {
        "@type": "Question",
        name: "Does any credit card give cashback on both Swiggy and Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. HDFC Millennia gives 5% on both Swiggy and Zomato, with a shared cap of ₹1,000 per month. Axis ACE gives 4% on both apps when you pay via UPI-linked apps, capped at ₹500 per month." }
      },
      {
        "@type": "Question",
        name: "Is the HDFC Swiggy card worth it for someone who also orders from Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "The HDFC Swiggy card only earns 10% on Swiggy, not Zomato. For Zomato orders it earns 1% base rate. If you split spend between both apps, HDFC Millennia at 5% on both is more practical." }
      },
      {
        "@type": "Question",
        name: "What happened to the Axis Airtel card for food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "Axis Airtel devalued in April 2026. Dining, including Swiggy and Zomato, was removed from the 10% reward category. The effective rate on food delivery now is around 1%. You should switch your default card for food delivery immediately." }
      },
      {
        "@type": "Question",
        name: "What is the best two-card combination for food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "The best stack is HDFC Swiggy Card for all Swiggy orders (10%, cap ₹1,500/mo) combined with Axis ACE for Zomato orders (4%, cap ₹500/mo). Total annual fee is under ₹1,000 and total cap is ₹2,000 per month." }
      },
      {
        "@type": "Question",
        name: "Does the HDFC Millennia 5% cashback apply to Swiggy Instamart grocery orders?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia covers Swiggy as a partner merchant, and Swiggy Instamart orders placed through the Swiggy app typically qualify. However, the ₹1,000 monthly cap is shared across all cashback categories on the card, so heavy grocery use can eat into your food delivery return." }
      },
      {
        "@type": "Question",
        name: "Is the HSBC Live+ card worth the ₹1,999 annual fee for food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "Only if you spend consistently on dining and delivery. HSBC Live+ gives 10% on dining including Swiggy and Zomato, capped at ₹1,000 per month. The max return is ₹12,000 per year. After the ₹1,999 fee you net ₹10,001, which is great if you hit the cap regularly." }
      },
      {
        "@type": "Question",
        name: "Why does the same Swiggy order earn different cashback on different cards?",
        acceptedAnswer: { "@type": "Answer", text: "Credit card rewards are triggered by MCC codes and merchant IDs, not just where you spend. The HDFC Swiggy card has a direct merchant arrangement with Swiggy, so it fires 10% specifically. A generic card relying only on dining MCC may not recognise Swiggy's MCC correctly and defaults to 1%." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Swiggy and Zomato in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Swiggy and Zomato", item: "https://assurefintech.com/best/credit-card-for-swiggy-zomato" },
    ]
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Swiggy and Zomato
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · FOOD DELIVERY
      </div>

      <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--text)", marginBottom: 12, lineHeight: 1.2 }}>
        Best Credit Card for Swiggy and Zomato (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        You are probably using the wrong card for food delivery, and it is costing you ₹3,000-4,000 a year. Here is the honest breakdown of every card worth considering.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 9 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Our Top Picks for Food Delivery</h2>

        {[
          {
            name: "HDFC Swiggy Credit Card",
            slug: "hdfc-swiggy",
            fee: "₹500/yr",
            rate: "10% on Swiggy",
            cap: "₹1,500/mo",
            badge: "Best for Swiggy",
            why: "The only card with a direct Swiggy merchant deal. If you spend ₹8,000-15,000 on Swiggy monthly, nothing comes close. The 10% fires reliably because of the partnership, not just MCC matching.",
            caveat: "Earns 1% on Zomato. Worthless at Swiggy-free pumps."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000/yr",
            rate: "5% on Swiggy + Zomato",
            cap: "₹1,000/mo shared",
            badge: "Best Both Apps",
            why: "Covers both apps at 5%, plus a long list of other partner merchants including Amazon, Flipkart, BigBasket. The shared ₹1,000/mo cap is the constraint.",
            caveat: "Shared cap means heavy food delivery spend competes with other categories."
          },
          {
            name: "Axis ACE Credit Card",
            slug: "axis-ace",
            fee: "₹499/yr",
            rate: "4% on Swiggy/Zomato via UPI",
            cap: "₹500/mo",
            badge: "Budget Pick",
            why: "Low fee, 4% on both apps when you pay via UPI-linked payment apps. Great for moderate food delivery spenders who do not want to manage multiple cards.",
            caveat: "Must pay via UPI app, not direct card swipe. Cap is low at ₹500/mo."
          },
          {
            name: "HSBC Live+ Credit Card",
            slug: "hsbc-live-plus",
            fee: "₹1,999/yr",
            rate: "10% on all dining including Swiggy/Zomato",
            cap: "₹1,000/mo",
            badge: "Best Dining Spender",
            why: "Covers restaurants, cafes, Swiggy, and Zomato all under one 10% umbrella. Good if your total dining spend (app plus restaurant) regularly hits ₹10,000+.",
            caveat: "Higher fee. Only worth it if dining spend is consistently high."
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
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Cap Math: What You Actually Earn</h2>
        <p>A 10% cashback rate sounds extraordinary until you understand the cap. The HDFC Swiggy Card caps your cashback at ₹1,500 per month, which means once you spend ₹15,000 on Swiggy in a month, every extra rupee earns zero food delivery reward.</p>
        <p>At ₹10,000 monthly Swiggy spend, you earn ₹1,000 cashback. That is excellent. At ₹20,000, you still earn ₹1,500, which is only a 7.5% effective rate.</p>
        <CapMathChart />
        <p style={{ marginTop: 12 }}>The chart above makes clear that the cap bites hardest at high spend levels. For heavy delivery households spending ₹20,000+ monthly on food apps combined, the Axis ACE or HSBC Live+ become more attractive because their category scope is wider even if their headline rate is lower.</p>
        <p>Run the numbers for your household: multiply your actual monthly spend by the effective rate (not the headline rate) and subtract the annual fee divided by 12. That is your true monthly return. See our detailed <Link href="/blog/cashback-rate-is-a-lie">breakdown of why the cashback rate is a lie</Link>.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Swiggy vs Zomato Split Problem</h2>
        <p>The HDFC Swiggy Card is clear about this in its terms: the 10% applies only to Swiggy. Zomato orders earn the base 1% reward rate on the same card. This is a merchant ID restriction, not an MCC restriction.</p>
        <p>If you split your orders between both apps, as most Indian households do, you have two options. First, HDFC Millennia at 5% on both but with the ₹1,000 shared cap. Second, a two-card stack that lets you earn 10% on Swiggy and 4% on Zomato simultaneously.</p>
        <StackPlayDiagram />
        <p style={{ marginTop: 12 }}>The two-card stack is the smart play if your combined monthly food delivery spend is between ₹15,000 and ₹25,000. You hold the HDFC Swiggy Card for all Swiggy orders and the Axis ACE for Zomato orders, giving you a combined earning cap of ₹2,000 per month at a combined annual fee of under ₹1,000.</p>
        <p>For a complete guide to building a card stack that maximises every rupee, visit our <Link href="/stack-builder">Stack Builder tool</Link>.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How MCC Codes Affect Your Earning</h2>
        <p>Every time you pay by card, the merchant terminal sends a four-digit Merchant Category Code to your bank along with the transaction. Your bank uses this code to decide which reward tier fires. The problem is that Swiggy and Zomato sometimes use the restaurant MCC (5812) and sometimes use a software or marketplace code (7372 or 5965).</p>
        <MCCInfoDiagram />
        <p style={{ marginTop: 12 }}>Cards with direct merchant partnerships like HDFC Swiggy bypass this problem because they match on the merchant ID itself, not the MCC. But cards that rely purely on category-based reward rules may miss Swiggy or Zomato orders if the MCC comes through as a non-dining code.</p>
        <p>This is why anecdotal reports sometimes show "Swiggy order earned only 1% on HDFC Millennia" — the transaction came through under a non-partner MCC in that particular batch. Read more about <Link href="/blog/reward-points-vs-cashback">reward points vs cashback</Link> to understand which mechanism is more reliable.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#dc2626" }}>April 2026 Axis Airtel Devaluation: Stop Using It</h2>
        <AirtelDevaluationAlert />
        <p style={{ marginTop: 12 }}>The Axis Airtel Credit Card was, until March 2026, one of the best dining cards in India with 10% on food delivery. The April 2026 revision quietly moved dining and grocery out of the accelerated earning tier. The current effective rate on Swiggy and Zomato on this card is around 1%.</p>
        <p>If Axis Airtel is still set as your default payment card in either app, change it today. The opportunity cost is real: at ₹10,000 monthly food delivery spend, you are leaving approximately ₹4,800 per year on the table by using Axis Airtel over HDFC Millennia.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Effective Returns at a Glance</h2>
        <EffectiveRateGrid />
        <SpendScenarioGrid />
        <p style={{ marginTop: 12 }}>The grids above cover the most common spend scenarios. "Net return" in the table assumes you consistently hit 80% of the monthly cap across 12 months, minus the annual fee. Your actual return depends on consistency of spend and whether the merchant MCC matches correctly.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>Open your Swiggy and Zomato apps and check which card is set as default payment.</li>
          <li>If it is Axis Airtel, switch it immediately to HDFC Millennia or HDFC Swiggy.</li>
          <li>Calculate your average monthly spend on each app separately over the last 3 months.</li>
          <li>If you spend more than ₹10,000/month on Swiggy alone, get the HDFC Swiggy Card.</li>
          <li>If you split spend roughly equally across both apps, HDFC Millennia is the single-card answer.</li>
          <li>If you want zero complexity, pick Axis ACE: low fee, 4% on both, set and forget.</li>
          <li>Use the <Link href="/smart-swipe">Smart Swipe guide</Link> to verify which card is best for your specific spend mix.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>If you order only from Swiggy and spend ₹8,000-15,000 a month, the HDFC Swiggy Card earns the most cashback of any card available. Full stop. The 10% rate with a ₹1,500 monthly cap is genuinely one of the best category rewards in Indian credit cards right now.</p>
        <p>If you use both apps or want one card to cover food delivery plus other online spending, HDFC Millennia is the most practical choice. The 5% on both Swiggy and Zomato, combined with coverage for Amazon, Flipkart, and BigBasket, makes it an extremely versatile ₹1,000/year card.</p>
        <p>The Axis Airtel card is no longer relevant for food delivery following the April 2026 changes. Stop using it. And remember: the advertised rate is not the rate you will consistently earn. The effective rate after caps and after MCC misfires is always lower.</p>
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
        <Link href="/cards/hdfc-swiggy">HDFC Swiggy Card Review</Link> ·{" "}
        <Link href="/cards/hdfc-millennia">HDFC Millennia Review</Link> ·{" "}
        <Link href="/cards/axis-ace">Axis ACE Review</Link> ·{" "}
        <Link href="/best/credit-card-for-groceries">Best Cards for Groceries</Link> ·{" "}
        <Link href="/blog/cashback-rate-is-a-lie">Why the Cashback Rate Is a Lie</Link> ·{" "}
        <Link href="/smart-swipe">Smart Swipe Guide</Link>
      </p>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. All card terms, rates, and caps are based on bank terms as of {UPDATED}. Reward rates can change without notice. Always verify current terms directly with the issuing bank before applying. This is not financial advice. RBI guidelines govern all credit card operations in India.
      </footer>
    </main>
  );
}
