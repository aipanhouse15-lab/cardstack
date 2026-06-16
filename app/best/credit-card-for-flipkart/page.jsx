import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Flipkart (June 2026)",
  description: "The best Flipkart card is not the Flipkart card. Here is the cap-by-cap breakdown of which card earns the most on Flipkart and why the naming of two very sim...",
  alternates: { canonical: "/best/credit-card-for-flipkart" },
  openGraph: {
    title: "Best Credit Card for Flipkart (June 2026)",
    description: "The best Flipkart card is not the Flipkart card. Here is the cap-by-cap breakdown of which card earns the most on Flipkart and why the naming of two very sim...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-flipkart
// Updated: June 4, 2026

const COLOR = "#2563eb";
const UPDATED = "June 4, 2026";

function NamingConfusionChart() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Side by side comparison of Axis Flipkart card versus Flipkart Axis SuperCoin card showing key structural differences"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)" }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Two Cards. One Confusing Name. Very Different Structures.</text>
      <rect x="20" y="38" width="300" height="148" fill="var(--raise)" stroke={COLOR} strokeWidth="2" rx="8" />
      <text x="170" y="58" textAnchor="middle" fill={COLOR} fontSize="13" fontWeight="700">Axis Bank Flipkart Credit Card</text>
      <text x="170" y="76" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Annual Fee: ₹500</text>
      <text x="170" y="93" textAnchor="middle" fill="var(--text)" fontSize="12">5% on Flipkart</text>
      <text x="170" y="108" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="700">No explicit cap on 5%</text>
      <text x="170" y="124" textAnchor="middle" fill="var(--text)" fontSize="12">4% on Swiggy + Dining</text>
      <text x="170" y="140" textAnchor="middle" fill="var(--text)" fontSize="12">1.5% base on all other spends</text>
      <text x="170" y="158" textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="700">Best overall structure</text>
      <text x="170" y="175" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Co-brand: Axis + Flipkart</text>
      <rect x="360" y="38" width="300" height="148" fill="var(--raise)" stroke="var(--hair2)" strokeWidth="1" rx="8" />
      <text x="510" y="58" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Flipkart Axis SuperCoin Card</text>
      <text x="510" y="76" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Annual Fee: ₹500</text>
      <text x="510" y="93" textAnchor="middle" fill="var(--text)" fontSize="12">5% on Flipkart</text>
      <text x="510" y="108" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="700">Cap ₹2,000/mo on 5%</text>
      <text x="510" y="124" textAnchor="middle" fill="var(--text)" fontSize="12">Earns SuperCoins, not cashback</text>
      <text x="510" y="140" textAnchor="middle" fill="var(--text)" fontSize="12">1.5% base on all other spends</text>
      <text x="510" y="158" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Rewards locked to Flipkart</text>
      <text x="510" y="175" textAnchor="middle" fill="var(--text-muted)" fontSize="10">SuperCoins = Flipkart-only currency</text>
    </svg>
  );
}

function CapComparisonBars() {
  const scenarios = [
    { label: "₹10,000/mo", axis: 500, superCoin: 500, sbi: 500 },
    { label: "₹20,000/mo", axis: 1000, superCoin: 1000, sbi: 1000 },
    { label: "₹30,000/mo", axis: 1500, superCoin: 1200, sbi: 1500 },
    { label: "₹50,000/mo", axis: 2500, superCoin: 1200, sbi: 2500 },
    { label: "₹1L/mo", axis: 5000, superCoin: 1200, sbi: 5000 },
  ];
  const maxVal = 5000;
  return (
    <svg
      viewBox="0 0 680 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monthly cashback earned on Flipkart at different spend levels comparing Axis Flipkart, SuperCoin card, and SBI Cashback"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Monthly Earnings: Cap Bites at ₹24,000 on SuperCoin Card</text>
      {scenarios.map((s, i) => {
        const x = 38 + i * 128;
        const barW = 28;
        const h = (v) => Math.round((v / maxVal) * 200);
        const baseY = 248;
        return (
          <g key={s.label}>
            <text x={x + 45} y={baseY + 16} textAnchor="middle" fill="var(--text-muted)" fontSize="10">{s.label}</text>
            <rect x={x} y={baseY - h(s.axis)} width={barW} height={h(s.axis)} fill={COLOR} rx="3" />
            <text x={x + 14} y={baseY - h(s.axis) - 5} textAnchor="middle" fill={COLOR} fontSize="9">₹{s.axis}</text>
            <rect x={x + 34} y={baseY - h(s.superCoin)} width={barW} height={h(s.superCoin)} fill="var(--raise)" rx="3" />
            <text x={x + 48} y={baseY - h(s.superCoin) - 5} textAnchor="middle" fill="#f59e0b" fontSize="9">₹{s.superCoin}</text>
            <rect x={x + 68} y={baseY - h(s.sbi)} width={barW} height={h(s.sbi)} fill="#10b981" rx="3" />
            <text x={x + 82} y={baseY - h(s.sbi) - 5} textAnchor="middle" fill="#10b981" fontSize="9">₹{s.sbi}</text>
          </g>
        );
      })}
      <line x1="30" y1="248" x2="650" y2="248" stroke="var(--border)" strokeWidth="1" />
      <g>
        <rect x="80" y="274" width="10" height="10" fill={COLOR} rx="2" />
        <text x="94" y="283" fill="var(--text-muted)" fontSize="11">Axis Flipkart (5%, no cap)</text>
        <rect x="280" y="274" width="10" height="10" fill="var(--raise)" rx="2" />
        <text x="294" y="283" fill="var(--text-muted)" fontSize="11">SuperCoin Card (5%, cap ₹2k)</text>
        <rect x="490" y="274" width="10" height="10" fill="#10b981" rx="2" />
        <text x="504" y="283" fill="var(--text-muted)" fontSize="11">SBI Cashback (5%, cap ₹5k)</text>
      </g>
    </svg>
  );
}

function BBDStrategyTimeline() {
  const events = [
    { month: "Sep", action: "Apply for card, get approved, activate", note: "2-3 weeks processing" },
    { month: "Oct", action: "Pre-register for ICICI/Axis bank offers on Flipkart", note: "Required before BBD" },
    { month: "Oct 1-7", action: "Big Billion Days: pay via Axis Flipkart card", note: "5% + bank offer stack" },
    { month: "Oct 8", action: "Check SuperCoin/cashback credit in wallet", note: "Usually credited same day" },
    { month: "Nov", action: "Use Flipkart wallet for next purchases", note: "Double dip: card + wallet" },
  ];
  return (
    <svg
      viewBox="0 0 680 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Big Billion Days preparation timeline showing steps to maximise Flipkart card rewards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Big Billion Days Strategy: The Timeline</text>
      <line x1="80" y1="50" x2="80" y2="195" stroke={COLOR} strokeWidth="2" />
      {events.map((e, i) => (
        <g key={i}>
          <circle cx="80" cy={55 + i * 36} r={6} fill={COLOR} />
          <text x="96" y={53 + i * 36} fill="var(--text)" fontSize="12" fontWeight="600">{e.month}</text>
          <text x="175" y={53 + i * 36} fill="var(--text)" fontSize="11">{e.action}</text>
          <text x="96" y={67 + i * 36} fill="var(--text-muted)" fontSize="10">{e.note}</text>
        </g>
      ))}
    </svg>
  );
}

function BaseRateAdvantageChart() {
  const categories = [
    { label: "Groceries", axis: 1.5, sbi: 0, millennia: 1 },
    { label: "Fuel", axis: 1.5, sbi: 0, millennia: 1 },
    { label: "Dining (non-Swiggy)", axis: 4.0, sbi: 0, millennia: 1 },
    { label: "Travel", axis: 1.5, sbi: 0, millennia: 1 },
    { label: "Utility Bills", axis: 1.5, sbi: 0, millennia: 1 },
  ];
  return (
    <svg
      viewBox="0 0 680 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Base rate comparison on non-Flipkart categories showing Axis Flipkart 1.5 percent advantage over zero base on SBI Cashback"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The 1.5% Base Rate: Where Axis Flipkart Quietly Wins</text>
      {categories.map((c, i) => {
        const y = 44 + i * 36;
        return (
          <g key={c.label}>
            <text x="110" y={y + 14} textAnchor="end" fill="var(--text)" fontSize="11">{c.label}</text>
            <rect x="120" y={y + 2} width={c.axis * 60} height={18} fill={COLOR} rx="3" />
            <text x={120 + c.axis * 60 + 4} y={y + 15} fill={COLOR} fontSize="11" fontWeight="700">{c.axis}%</text>
            <rect x="120" y={y + 22} width={Math.max(c.sbi * 60, 2)} height={8} fill="#10b981" rx="2" />
            <text x={120 + Math.max(c.sbi * 60, 4) + 4} y={y + 30} fill="#10b981" fontSize="9">{c.sbi === 0 ? "0% (offline)" : c.sbi + "%"}</text>
          </g>
        );
      })}
      <text x="340" y="226" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Blue bars: Axis Flipkart. Green: SBI Cashback (0% offline, 5% online only). Dining earns 4% on Axis.</text>
    </svg>
  );
}

function FlipkartDecisionFlow() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision flowchart: which Flipkart card to pick based on monthly spend and other category needs"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="22" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Which Card Is Right for You?</text>
      <rect x="240" y="34" width="200" height="36" fill={COLOR} rx="8" />
      <text x="340" y="56" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">Monthly Flipkart Spend?</text>
      <line x1="160" y1="70" x2="160" y2="88" stroke="var(--border)" strokeWidth="1.5" />
      <line x1="340" y1="70" x2="340" y2="88" stroke="var(--border)" strokeWidth="1.5" />
      <line x1="520" y1="70" x2="520" y2="88" stroke="var(--border)" strokeWidth="1.5" />
      <line x1="160" y1="70" x2="520" y2="70" stroke="var(--border)" strokeWidth="1.5" />
      <text x="160" y="82" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Under ₹20,000</text>
      <text x="340" y="82" textAnchor="middle" fill="var(--text-muted)" fontSize="10">₹20,000-50,000</text>
      <text x="520" y="82" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Over ₹50,000</text>
      <rect x="60" y="92" width="200" height="50" fill="var(--raise)" stroke={COLOR} rx="8" />
      <text x="160" y="113" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">Axis Flipkart</text>
      <text x="160" y="130" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Best overall: no cap, 4% dining, 1.5% base</text>
      <rect x="240" y="92" width="200" height="50" fill="var(--raise)" stroke={COLOR} rx="8" />
      <text x="340" y="113" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">Axis Flipkart</text>
      <text x="340" y="130" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Still wins: cap advantage kicks in here</text>
      <rect x="420" y="92" width="200" height="50" fill="var(--raise)" stroke="#16a34a" rx="8" />
      <text x="520" y="113" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="700">SBI Cashback</text>
      <text x="520" y="130" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Cap ₹5,000/mo covers more spend</text>
    </svg>
  );
}

export default function BestCreditCardForFlipkart() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best credit card for Flipkart shopping in India?",
        acceptedAnswer: { "@type": "Answer", text: "The Axis Bank Flipkart Credit Card is the best card for Flipkart shopping in June 2026. It earns 5% on Flipkart with no explicit monthly cap, plus 4% on Swiggy and dining, and 1.5% base rate on all other spends. This combination beats the dedicated SuperCoin card which caps at ₹2,000 per month." }
      },
      {
        "@type": "Question",
        name: "What is the difference between Axis Flipkart card and Flipkart Axis SuperCoin card?",
        acceptedAnswer: { "@type": "Answer", text: "The Axis Bank Flipkart Credit Card earns cashback with no explicit 5% cap on Flipkart. The Flipkart Axis Bank SuperCoin Card earns SuperCoins (Flipkart's own currency) and caps the 5% earning at ₹2,000 per month, which binds at ₹40,000 Flipkart spend. Both have ₹500 annual fee. For regular shoppers, the Axis Flipkart card is structurally better." }
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia give 5% on Flipkart?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, HDFC Millennia gives 5% on Flipkart as one of its partner merchants. However, the ₹1,000 monthly cap is shared across all categories, including Amazon, Swiggy, and BigBasket. If you use Millennia for multiple partner sites, your Flipkart portion of the cap gets used up quickly." }
      },
      {
        "@type": "Question",
        name: "When does SBI Cashback beat Axis Flipkart for Flipkart purchases?",
        acceptedAnswer: { "@type": "Answer", text: "SBI Cashback (₹999/yr, 5% all online, cap ₹5,000/mo) beats Axis Flipkart if your Flipkart spend exceeds ₹40,000 per month and you also shop heavily on other online platforms. At ₹50,000/month Flipkart spend, SBI Cashback earns ₹2,500 vs Axis Flipkart which should also earn ₹2,500 since Axis has no explicit cap. The real advantage of SBI Cashback is covering all other online sites too." }
      },
      {
        "@type": "Question",
        name: "Is Big Billion Days cashback extra on top of the card cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Bank offers during Big Billion Days are typically additional to your regular card cashback, provided you pre-register your card on Flipkart's offer page before the sale begins. The total effective return can reach 10-15% during BBD when combining 5% card cashback with a 5-10% bank discount offer." }
      },
      {
        "@type": "Question",
        name: "Do SuperCoins from the Flipkart Axis card expire?",
        acceptedAnswer: { "@type": "Answer", text: "SuperCoins earned on the Flipkart Axis SuperCoin card are valid for a limited period and can only be redeemed within the Flipkart ecosystem. They are not transferable, not withdrawable as cash, and expire if unused. This is a significant disadvantage compared to direct cashback cards." }
      },
      {
        "@type": "Question",
        name: "Which card is better for Myntra purchases?",
        acceptedAnswer: { "@type": "Answer", text: "Axis Flipkart card earns 1.5% base rate on Myntra. SBI Cashback earns 5% on Myntra as it is an online merchant. For dedicated Myntra shoppers, SBI Cashback is significantly better since Myntra is not a Flipkart-specific merchant deal on any card." }
      },
      {
        "@type": "Question",
        name: "What happens if I return a Flipkart order? Do I lose the cashback?",
        acceptedAnswer: { "@type": "Answer", text: "If you return a Flipkart order, the cashback earned on that transaction is typically reversed. For Axis Flipkart card, cashback is credited after the statement cycle and reversed if a return is processed. Partial returns result in partial cashback reversal. Always check your statement after a return to confirm the adjustment." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Flipkart Shopping in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Flipkart", item: "https://assurefintech.com/best/credit-card-for-flipkart" },
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #040C1E, #0B1F4B, #040C1E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #2563eb22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Flipkart (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Flipkart
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · FLIPKART SHOPPING
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        The best Flipkart card is not the Flipkart card. Here is the cap-by-cap breakdown of which card earns the most on Flipkart and why the naming of two very similar cards trips everyone up.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Our Top Picks for Flipkart Shopping</h2>

        {[
          {
            name: "Axis Bank Flipkart Credit Card",
            slug: "axis-flipkart",
            fee: "₹500/yr",
            rate: "5% on Flipkart + 4% dining",
            cap: "No explicit cap on 5%",
            badge: "Best Pick",
            why: "5% on Flipkart with no stated monthly cap, 4% on Swiggy and dining, and 1.5% base rate on every other purchase. The combination is unusually strong for a ₹500/year card. This is the better of the two Flipkart co-brand cards by structure.",
            caveat: "Axis Bank terms can change. Verify current cap structure before applying."
          },
          {
            name: "Flipkart Axis Bank SuperCoin Card",
            slug: "flipkart-axis-supercoin",
            fee: "₹500/yr",
            rate: "5% on Flipkart in SuperCoins",
            cap: "₹2,000/mo (binds at ₹40,000)",
            badge: "Avoid vs Axis",
            why: "Same annual fee as the Axis Flipkart card but earns SuperCoins instead of cashback, has a ₹2,000/mo cap, and the SuperCoins are redeemable only within Flipkart. If you are choosing between these two, always pick the Axis Flipkart card.",
            caveat: "SuperCoins expire. They cannot be withdrawn as cash or used outside the Flipkart ecosystem."
          },
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "₹999/yr",
            rate: "5% all online spends",
            cap: "₹5,000/mo",
            badge: "High-Volume Pick",
            why: "If your online spend is spread across Flipkart, Myntra, Nykaa, and other sites, SBI Cashback covers all of them at 5% with a ₹5,000 monthly cap. This is the card to hold alongside Axis Flipkart for purchases that fall outside Flipkart's platform.",
            caveat: "0% on offline purchases. Cashback credited to bank account."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000/yr",
            rate: "5% on Flipkart",
            cap: "₹1,000/mo shared",
            badge: "Versatile but Capped",
            why: "Covers Flipkart at 5% but the shared ₹1,000/month cap means you cannot separate Flipkart earnings from Amazon or Swiggy. Better as a multi-platform versatility card than a dedicated Flipkart card.",
            caveat: "Shared cap is the main limitation. If you already have Axis Flipkart, Millennia adds little."
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
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Naming Confusion Problem</h2>
        <p>Flipkart and Axis Bank have issued two co-branded cards that sound nearly identical, and the worse one has "Flipkart" first in its name, which makes people think it is the "official" Flipkart card. Both are co-brand products with Axis Bank. They are structurally very different.</p>
        <NamingConfusionChart />
        <p style={{ marginTop: 12 }}>The key structural differences are the cap and the reward currency. The Axis Flipkart card earns cashback directly credited to your statement. The Flipkart Axis SuperCoin card earns SuperCoins, which are Flipkart's proprietary loyalty currency. SuperCoins cannot be used outside Flipkart, do not carry over indefinitely, and have no cash redemption value.</p>
        <p>When someone on a forum says "I got the Flipkart card," ask them: which one? The answer changes whether their ₹40,000 monthly Flipkart spend earns ₹2,000 or hits a ceiling at ₹2,000 cap and then earns nothing extra.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Cap Math: Where Each Card Breaks</h2>
        <p>The Axis Flipkart card has no explicitly stated monthly cap on the 5% Flipkart earning. Axis Bank's current terms for this card do not specify a hard rupee ceiling on the 5% merchant category, unlike the SuperCoin card's explicit ₹2,000/month cap.</p>
        <p>This matters enormously during Big Billion Days and festive sales when a single household might spend ₹50,000-1,00,000 on Flipkart in one week. The difference in earning at these high spend levels is dramatic.</p>
        <CapComparisonBars />
        <p style={{ marginTop: 12 }}>At ₹50,000 monthly Flipkart spend, the SuperCoin card earns the equivalent of ₹1,200 in coins (cap binding at ₹24,000 spend) while Axis Flipkart should earn ₹2,500. That is ₹1,300 difference in a single month. Also see our explainer on <Link href="/blog/cashback-rate-is-a-lie">why the advertised cashback rate is a lie</Link>.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Big Billion Days: The High-Value Window</h2>
        <p>Big Billion Days, typically held in October, is Flipkart's equivalent of Amazon Prime Day but often larger in scale. The 5-7 day sale window represents months of normal Flipkart earning compressed into a week.</p>
        <BBDStrategyTimeline />
        <p style={{ marginTop: 12 }}>The critical step that most people miss is pre-registration. Axis Bank and SBI routinely offer additional instant discounts of ₹1,500-3,000 on Flipkart during BBD, but these require pre-registering your card on Flipkart's offer page before the sale opens. The window for registration closes when the sale goes live.</p>
        <p>At a ₹40,000 BBD spend with a 5% card cashback plus a ₹2,000 bank offer, your total saving is ₹4,000 in a single week. On the SuperCoin card you earn ₹1,200 + ₹2,000 = ₹3,200. The difference is real and compounds over multiple sale seasons. Use our <Link href="/stack-builder">Stack Builder</Link> to model your personal scenario.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The 1.5% Base Rate: Why It Matters</h2>
        <p>Most dedicated merchant cards earn zero or 1% on purchases outside their primary merchant. Axis Flipkart earns 1.5% on all other spends. This seems minor but adds meaningful value across categories like fuel, groceries, and travel.</p>
        <BaseRateAdvantageChart />
        <p style={{ marginTop: 12 }}>If you spend ₹30,000/month outside Flipkart on general categories, the 1.5% base rate earns ₹450/month or ₹5,400/year. At a ₹500 annual fee, the non-Flipkart base earning alone can justify holding the card even in months when you do not shop on Flipkart.</p>
        <p>The 4% dining rate deserves a separate mention. Swiggy, Zomato, and restaurants all fall under the dining category on Axis Flipkart card. If you spend ₹5,000/month on dining combined, that is ₹200/month or ₹2,400/year from dining alone. Use the <Link href="/smart-swipe">Smart Swipe guide</Link> to calculate your combined category return.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>When SBI Cashback Beats Dedicated Flipkart Cards</h2>
        <p>SBI Cashback gives 5% on all online purchases, not just Flipkart. It has a ₹5,000 monthly cap that only binds at ₹1 lakh monthly online spend. For most Indian households, this cap is never reached.</p>
        <FlipkartDecisionFlow />
        <p style={{ marginTop: 12 }}>If your online spending is concentrated heavily on Flipkart and dining, Axis Flipkart is the better card. If your spend is spread across Flipkart, Myntra (owned by Flipkart Group), Nykaa, Ajio, and other platforms, SBI Cashback's universal 5% on all online spends is the better tool.</p>
        <p>The two cards are not mutually exclusive. Holding Axis Flipkart for Flipkart and dining, and SBI Cashback for all other online purchases, is a valid two-card stack at a combined fee of ₹1,499/year.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>If you currently hold the Flipkart Axis SuperCoin card, calculate how often you hit the ₹2,000/month cap. If you regularly do, switching to Axis Flipkart saves you money at identical annual fee.</li>
          <li>Apply for the Axis Bank Flipkart Credit Card, not the SuperCoin variant. Search for "Axis Flipkart" specifically and confirm the card name on the application page.</li>
          <li>Set Axis Flipkart as your default payment on both Flipkart and Myntra.</li>
          <li>In September-October, pre-register your card for BBD bank offers on Flipkart's offer page before the sale starts.</li>
          <li>Use Axis Flipkart for all Swiggy and Zomato orders too — you earn 4%, which is better than most dining cards in this fee range.</li>
          <li>Read our <Link href="/blog/reward-points-vs-cashback">Reward Points vs Cashback analysis</Link> to understand why cashback cards always beat SuperCoin-style programs for most consumers.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>Axis Bank Flipkart Credit Card is the right card for Flipkart. The naming confusion with the SuperCoin card causes a lot of people to end up with the inferior product at the same ₹500 annual fee. The cap difference alone makes Axis Flipkart the structurally superior choice.</p>
        <p>For very high Flipkart spenders exceeding ₹50,000 per month, or for households that spread online spend across many platforms, SBI Cashback becomes competitive. It does not have the dining benefit but the all-online 5% with a higher ₹5,000 cap covers more ground.</p>
        <p>The SuperCoin card's existence is primarily a loyalty play by Flipkart to keep reward currency locked inside their ecosystem. For consumers who prioritize earning flexibility, the cashback-based Axis Flipkart card is the more rational choice.</p>
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
        <Link href="/cards/axis-flipkart">Axis Flipkart Card Full Review</Link> ·{" "}
        <Link href="/cards/sbi-cashback">SBI Cashback Card Review</Link> ·{" "}
        <Link href="/best/credit-card-for-amazon">Best Cards for Amazon</Link> ·{" "}
        <Link href="/best/credit-card-for-online-shopping">Best Cards for Online Shopping</Link> ·{" "}
        <Link href="/blog/cashback-rate-is-a-lie">Why the Cashback Rate Is a Lie</Link> ·{" "}
        <Link href="/stack-builder">Stack Builder Tool</Link>
      </p>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Card terms including caps and rates verified as of {UPDATED}. Axis Bank and Flipkart can change reward structures without notice. SuperCoins redemption terms are set by Flipkart and subject to change. Always verify current terms before applying. This is not financial advice.
      </footer>
    </main>
    </>
  );
}
