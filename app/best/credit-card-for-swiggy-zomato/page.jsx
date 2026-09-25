import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Cards for Swiggy and Zomato: Current Rewards Compared",
  description: "Compare current Swiggy and Zomato card rewards, statement-cycle caps, exclusions and shared cashback limits from issuer terms.",
  alternates: { canonical: "/best/credit-card-for-swiggy-zomato" },
  openGraph: {
    title: "Best Credit Cards for Swiggy and Zomato: Current Rewards Compared",
    description: "Compare current Swiggy and Zomato card rewards, statement-cycle caps, exclusions and shared cashback limits from issuer terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-swiggy-zomato
// Reviewed against issuer sources: September 26, 2026

const COLOR = "#f97316";
const UPDATED = "September 26, 2026";
const SOURCES = {
  swiggy: "https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=%2FPersonal%2FPay%2FCards%2FCredit+Card%2FCredit+Card+Landing+Page%2FCredit+Cards%2FSwiggy+HDFC+Bank+Credit+Card%2FT-and-C-Swiggy-HDFC-Bank-Credit-Card.pdf",
  millennia: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0",
  ace: "https://www.axisbank.com/docs/default-source/default-document-library/axis-bank-ace-credit-card-tncs.pdf",
  airtel: "https://www.axis.bank.in/docs/default-source/default-document-library/credit-cards/terms-and-conditions-for-cashback-for-airtel-axis-bank-credit-card.pdf?sfvrsn=3192829c_5",
  hsbc: "https://www.hsbc.co.in/credit-cards/how-does-cashback-work/",
};

function CapMathChart() {
  const data = [
    { label: "₹5,000/cycle", hdfc: 500, millennia: 250, ace: 200 },
    { label: "₹10,000/cycle", hdfc: 1000, millennia: 500, ace: 400 },
    { label: "₹15,000/cycle", hdfc: 1500, millennia: 750, ace: 500 },
    { label: "₹20,000/cycle", hdfc: 1500, millennia: 1000, ace: 500 },
  ];
  const maxVal = 1500;
  return (
    <svg
      viewBox="0 0 680 325"
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
        <text x="116" y="301" fill="var(--text-muted)" fontSize="11">Swiggy HDFC (10%)</text>
        <rect x="270" y="292" width="12" height="10" fill="#6366f1" rx="2" />
        <text x="286" y="301" fill="var(--text-muted)" fontSize="11">Millennia (5%)</text>
        <rect x="450" y="292" width="12" height="10" fill="#10b981" rx="2" />
        <text x="466" y="301" fill="var(--text-muted)" fontSize="11">ACE (4%, ₹500 shared accelerated cap)</text>
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
      <text x="120" y="107" textAnchor="middle" fill="#fff" fontSize="10">10%, cap ₹1,500 per billing cycle</text>
      <rect x="240" y="50" width="200" height="60" fill="#6366f1" rx="8" />
      <text x="340" y="75" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Zomato Order?</text>
      <text x="340" y="93" textAnchor="middle" fill="#fff" fontSize="11">Use HDFC Millennia</text>
      <text x="340" y="107" textAnchor="middle" fill="#fff" fontSize="10">5% partner tier, ₹1,000 per cycle</text>
      <rect x="460" y="50" width="200" height="60" fill="#10b981" rx="8" />
      <text x="560" y="75" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Both apps, low fee?</text>
      <text x="560" y="93" textAnchor="middle" fill="#fff" fontSize="11">Use Axis ACE</text>
      <text x="560" y="107" textAnchor="middle" fill="#fff" fontSize="10">4%; accelerated categories share ₹500 cap</text>
      <rect x="130" y="148" width="420" height="50" fill="var(--border)" rx="8" />
      <text x="340" y="168" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Compare per-card cap and fees before stacking</text>
      <text x="340" y="185" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Caps use different billing periods and may share other categories.</text>
    </svg>
  );
}

function EffectiveRateGrid() {
  return (
    <svg
      viewBox="0 0 680 294"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Effective annual return comparison table for food delivery cards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="26" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Illustrative maximum cashback caps (not net returns)</text>
      {[
        ["Card", "Annual Fee", "Max Reward/Yr*", "Fee-adjusted", "Limit type"],
        ["Swiggy HDFC", "Check issuer", "₹18,000*", "Not estimated", "Billing-cycle cap"],
        ["HDFC Millennia", "Check issuer", "₹12,000*", "Not estimated", "Partner-tier cap"],
        ["Axis ACE", "Check issuer", "₹6,000*", "Not estimated", "Shared statement cap"],
        ["HSBC Live+", "Check issuer", "₹12,000*", "Not estimated", "Shared monthly cap"],
        ["Airtel Axis", "Check issuer", "₹2,400/partner*", "Not estimated", "Partner-wallet value-back"],
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
      aria-label="Illustration of a payment transaction being checked against issuer eligibility rules"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="26" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">How issuer eligibility affects your reward</text>
      <rect x="20" y="44" width="190" height="110" fill="var(--raise)" stroke="var(--border)" rx="8" />
      <text x="115" y="65" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">You make an app purchase</text>
      <text x="115" y="83" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Issuer receives transaction data</text>
      <text x="115" y="101" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Merchant / payment route</text>
      <text x="115" y="119" textAnchor="middle" fill="var(--text-muted)" fontSize="11">and category may matter</text>
      <text x="115" y="137" textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="600">Check that card's terms</text>
      <rect x="250" y="44" width="190" height="110" fill="var(--raise)" stroke="var(--border)" rx="8" />
      <text x="345" y="65" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Card reward conditions</text>
      <text x="345" y="83" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Eligible transaction category</text>
      <text x="345" y="101" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Exclusions and cap available</text>
      <text x="345" y="119" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">Determine eligible spend</text>
      <text x="345" y="137" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Terms can be revised</text>
      <rect x="480" y="44" width="190" height="110" fill="var(--raise)" stroke="var(--border)" rx="8" />
      <text x="575" y="65" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">After purchase posts</text>
      <text x="575" y="83" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Review statement rewards</text>
      <text x="575" y="101" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Compare with issuer terms</text>
      <text x="575" y="119" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">Query unexplained mismatch</text>
      <text x="575" y="137" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Don't guess the transaction code</text>
    </svg>
  );
}

function AirtelDevaluationAlert() {
  return (
    <svg
      viewBox="0 0 680 130"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Airtel Axis Zomato and Blinkit wallet value-back offer; the old Swiggy cashback has ended"
      style={{ width: "100%", borderRadius: 10, background: "var(--red-dim)", border: "1px solid #fca5a5", marginTop: 8 }}
    >
      <rect x="0" y="0" width="680" height="120" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="700">Airtel Axis: the old food-app cashback changed</text>
      <text x="340" y="52" textAnchor="middle" fill="#991b1b" fontSize="12">From 12 April 2026, 10% Swiggy cashback was removed</text>
      <text x="340" y="70" textAnchor="middle" fill="#991b1b" fontSize="12">10% value-back now applies to Zomato, Blinkit and District Movies</text>
      <text x="340" y="88" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="600">₹200 per partner/month; credit goes to that partner wallet.</text>
      <text x="340" y="106" textAnchor="middle" fill="#991b1b" fontSize="11">This is not Swiggy cashback or statement cashback.</text>
    </svg>
  );
}

function SpendScenarioGrid() {
  return (
    <svg
      viewBox="0 0 680 254"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Spend scenario grid: which card wins at different food delivery budget levels"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Which Card Wins at Your Spend Level?</text>
      {[
        ["Monthly Food Spend", "Best Card", "Annual Return", "Why"],
        ["Your billing cycle", "Compare", "Reward cap", "Remember"],
        ["Swiggy-eligible", "Swiggy HDFC", "₹1,500", "10% on eligible Swiggy app"],
        ["Both apps", "Millennia", "₹1,000", "5% named partner cap"],
        ["Zomato", "Airtel Axis", "₹200", "10% wallet value-back"],
        ["Dining + grocery", "HSBC Live+", "₹1,000/month", "10%, shared category cap"],
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
        acceptedAnswer: { "@type": "Answer", text: "The Swiggy HDFC Bank Credit Card currently lists 10% cashback on eligible Swiggy app transactions, capped at ₹1,500 per billing cycle. Terms exclude some transaction types and may be updated; check the current issuer PDF before applying." }
      },
      {
        "@type": "Question",
        name: "Does any credit card give cashback on both Swiggy and Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia lists Swiggy and Zomato among its 5% CashPoints merchants, with a ₹1,000 cap per statement cycle across that merchant tier. Axis ACE lists 4% on Swiggy and Zomato; its 4% and 5% accelerated categories share a ₹500 statement-cycle cashback cap. ACE does not require paying via UPI apps for those listed merchants." }
      },
      {
        "@type": "Question",
        name: "Is the HDFC Swiggy card worth it for someone who also orders from Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "The 10% accelerated tier is for eligible Swiggy app transactions. Other transactions may fall under the card's online or other-spend categories, subject to eligibility and caps; check the current HDFC terms. Millennia lists both Swiggy and Zomato in its 5% partner tier." }
      },
      {
        "@type": "Question",
        name: "Does Airtel Axis still earn cashback on Swiggy and Zomato?",
        acceptedAnswer: { "@type": "Answer", text: "No. Axis revised Airtel card terms effective 12 April 2026: the former 10% Swiggy, Zomato and BigBasket cashback was replaced by 10% value-back on Zomato, Blinkit and District Movies, capped at ₹200 per partner per month and credited to each partner wallet. It is not Swiggy cashback or statement cashback." }
      },
      {
        "@type": "Question",
        name: "What is the best two-card combination for food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "There is no universally best stack. Compare eligible spend, billing-cycle caps and fees. Swiggy HDFC's 10% Swiggy cap is ₹1,500 per billing cycle; Axis ACE's 4% Swiggy/Zomato and 5% utility/recharge categories share a ₹500 cap. Airtel Axis's current Zomato value-back is partner-wallet credit, not cashback, and should be evaluated separately." }
      },
      {
        "@type": "Question",
        name: "Does the HDFC Millennia 5% cashback apply to Swiggy Instamart grocery orders?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia's published terms list Swiggy among ten 5% online merchants, capped at ₹1,000 CashPoints per cycle across that tier; the 5% offer is for non-EMI spends. Do not assume every Swiggy service is eligible—check merchant classification and current terms." }
      },
      {
        "@type": "Question",
        name: "Is the HSBC Live+ card worth its annual fee for food delivery?",
        acceptedAnswer: { "@type": "Answer", text: "HSBC describes 10% accelerated cashback up to ₹1,000 a month across dining, food delivery and grocery spends. Check current Live+ fee, exclusions and offer conditions on HSBC's official page; the cap is shared rather than a separate cap for each app." }
      },
      {
        "@type": "Question",
        name: "Why does the same Swiggy order earn different cashback on different cards?",
        acceptedAnswer: { "@type": "Answer", text: "Issuer rewards depend on the transaction being identified as eligible under that card's current terms. Merchant, payment route and transaction category can matter; the issuer's statement and terms determine the credited reward. Contact the issuer about a discrepancy rather than assuming an MCC explanation." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Cards for Swiggy and Zomato in India: Rewards and Caps",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Swiggy and Zomato", item: "https://assurefintech.com/best/credit-card-for-swiggy-zomato" },
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #200E02, #4F2407, #200E02)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #f9731622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Cards for Swiggy and Zomato
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Swiggy and Zomato
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · FOOD DELIVERY
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        Compare food-delivery rewards by eligible transaction, shared cap and billing period. A high headline rate does not guarantee the best net value for your mix of Swiggy and Zomato orders.
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
            fee: "Check current issuer fee",
            rate: "10% on Swiggy",
            cap: "₹1,500 per billing cycle",
            badge: "Best for Swiggy",
            why: "The card's issuer terms list 10% cashback on eligible Swiggy app spends, including food delivery, Instamart, Genie and Dineout, subject to exclusions and a billing-cycle cap.",
            caveat: "Swiggy Money Wallet, Liquor and Minis are excluded; check updated terms and eligible spend."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "Check current issuer fee",
            rate: "5% on Swiggy + Zomato",
            cap: "₹1,000 per cycle across 5% partner tier",
            badge: "Best Both Apps",
            why: "Its terms list both Swiggy and Zomato in a ten-merchant 5% CashPoints tier. The cap is shared across those named online merchants.",
            caveat: "5% applies to non-EMI spends; separate 1% other-spend tier has its own cap."
          },
          {
            name: "Axis ACE Credit Card",
            slug: "axis-ace",
            fee: "Check current issuer fee",
            rate: "4% on Swiggy, Zomato and Ola",
            cap: "4% + eligible 5% categories share ₹500 per statement",
            badge: "Budget Pick",
            why: "Axis lists 4% on Swiggy and Zomato; the current terms also list Ola and a 5% Google Pay utility/recharge tier.",
            caveat: "The 4% and 5% accelerated categories share a ₹500 statement-cycle cap."
          },
          {
            name: "HSBC Live+ Credit Card",
            slug: "hsbc-live-plus",
            fee: "Check current issuer fee",
            rate: "10% on eligible dining, delivery and groceries",
            cap: "₹1,000 per month shared",
            badge: "Best Dining Spender",
            why: "HSBC describes 10% accelerated cashback across dining, food delivery and grocery spends, which can include more than app orders.",
            caveat: "The accelerated cap is shared across categories; verify current fee and exclusions with HSBC."
          },
          {
            name: "Airtel Axis Bank Credit Card",
            slug: "airtel-axis",
            fee: "Check current issuer fee",
            rate: "10% value-back on Zomato, Blinkit and District Movies",
            cap: "₹200/month per partner; wallet credit",
            badge: "Zomato wallet offer",
            why: "Axis replaced the former 10% cashback on Swiggy, Zomato and BigBasket with partner-wallet value-back on Zomato, Blinkit and District Movies, effective 12 April 2026.",
            caveat: "This is not cashback and does not apply to Swiggy; minimum order value and app/website payment conditions apply."
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
        <p>The Swiggy HDFC card's published terms cap its 10% Swiggy-app cashback at ₹1,500 per billing cycle. Millennia's 5% named-partner tier is capped at ₹1,000 per cycle. Axis ACE's 4% Swiggy/Zomato tier shares a ₹500 cap with its eligible 5% utility tier. These are different caps and periods.</p>
        <p>For illustration, ₹10,000 of eligible Swiggy-app spend in one billing cycle would imply ₹1,000 at the headline rate before exclusions; ₹20,000 would hit the ₹1,500 cap. Actual posting depends on eligible transactions and the issuer's billing cycle.</p>
        <CapMathChart />
        <p style={{ marginTop: 12 }}>The chart is arithmetic only. It assumes all listed spend qualifies, applies each card's stated cap to the relevant eligible spend, and does not compare fees or other shared-category spend. Higher spend can exhaust the cap, not automatically make another card better.</p>
        <p>Run the numbers for your household: multiply your actual monthly spend by the effective rate (not the headline rate) and subtract the annual fee divided by 12. That is your true monthly return. See our detailed <Link href="/blog/cashback-rate-is-a-lie">breakdown of why the cashback rate is a lie</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Swiggy vs Zomato Split Problem</h2>
        <p>The Swiggy HDFC card's accelerated 10% category is eligible spend on the Swiggy app. It separately lists 5% cashback on eligible online-shopping categories; refer to current issuer terms for the exact treatment of transactions that are not in the Swiggy tier. Millennia lists both apps among its 5% partner merchants.</p>
        <p>Airtel Axis no longer earns cashback on Swiggy under its revised terms. Its current 10% Zomato, Blinkit and District Movies benefit is value-back credited to the corresponding partner wallet, capped at ₹200 per partner monthly. Axis ACE lists 4% on eligible Swiggy and Zomato spends with a shared ₹500 accelerated-category cap.</p>
        <StackPlayDiagram />
        <p style={{ marginTop: 12 }}>There is no fixed spend threshold where a two-card stack always wins. Any benefit depends on each billing period, eligible merchant category, remaining shared cap, fees, and whether you would hold the cards anyway.</p>
        <p>For a complete guide to building a card stack that maximises every rupee, visit our <Link href="/stack-builder">Stack Builder tool</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How MCC Codes Affect Your Earning</h2>
        <p>Issuers use transaction information and their own eligibility rules to determine rewards. A merchant's app brand alone does not guarantee that every service, payment method or transaction type qualifies.</p>
        <MCCInfoDiagram />
        <p style={{ marginTop: 12 }}>For a mismatch, check the transaction description, reward statement and issuer terms, then ask the bank to explain the classification. We do not infer the merchant category code from the app name. Read more about <Link href="/blog/reward-points-vs-cashback">reward points vs cashback</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Airtel Axis: April 2026 Food-App Benefit Change</h2>
        <AirtelDevaluationAlert />
        <p style={{ marginTop: 12 }}>Axis's revision effective 12 April 2026 removed the 10% cashback on Swiggy, Zomato and BigBasket. It replaced that reward with 10% value-back on Zomato, Blinkit and District Movies, capped at ₹200 per partner each month and credited to the partner wallet. Do not count it as statement cashback or a Swiggy benefit.</p>
        <p>Check the latest Axis terms and partner checkout rules before relying on this offer.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Effective Returns at a Glance</h2>
        <EffectiveRateGrid />
        <SpendScenarioGrid />
        <p style={{ marginTop: 12 }}>*Annualized cap is the monthly or per-billing-cycle cap multiplied by 12; billing cycles vary and these figures are not typical earnings or guaranteed value. Fee-adjusted value is not estimated because it depends on actual eligible spend, fee waivers and usage. Verify all terms before applying.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>Check your posted spending and rewards for each app over a few billing cycles.</li>
          <li>Compare eligible spend against each card's cap and cap period.</li>
          <li>Include shared caps from other merchants or categories.</li>
          <li>Check the card fee and exclusions against issuer terms before applying or changing payment methods.</li>
          <li>Use the <Link href="/smart-swipe">Smart Swipe guide</Link> to model your specific spend mix.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>For eligible Swiggy-app purchases, Swiggy HDFC offers a 10% tier up to ₹1,500 per billing cycle. Millennia lists Swiggy and Zomato at 5% within a ₹1,000 partner-tier cycle cap. Axis ACE may suit other eligible spend patterns; Airtel Axis now has wallet value-back on Zomato/Blinkit/District Movies, not Swiggy cashback.</p>
        <p>Compare your own eligible purchases, cap availability, fees and rewards actually posted. Temporary offers and issuer rules may change. No one card is best for every food-delivery user.</p>
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

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Reward rates and caps can change; confirm current terms with the issuer before applying. This is not financial advice. Sources: <a href={SOURCES.swiggy} target="_blank" rel="noreferrer">Swiggy HDFC terms</a> · <a href={SOURCES.millennia} target="_blank" rel="noreferrer">HDFC Millennia terms</a> · <a href={SOURCES.ace} target="_blank" rel="noreferrer">Axis ACE terms</a> · <a href={SOURCES.airtel} target="_blank" rel="noreferrer">Airtel Axis revised April 2026 terms</a> · <a href={SOURCES.hsbc} target="_blank" rel="noreferrer">HSBC cashback information</a>.
      </footer>
    </main>
    </>
  );
}
