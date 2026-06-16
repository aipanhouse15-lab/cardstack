import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Utility Bills in India (June 2026)",
  description: "Axis ACE is the only major credit card that rewards your electricity bill at 5%. Here is why every competitor gave up, and why that makes ACE indispensable f...",
  alternates: { canonical: "/best/credit-card-for-utility-bills" },
  openGraph: {
    title: "Best Credit Card for Utility Bills in India (June 2026)",
    description: "Axis ACE is the only major credit card that rewards your electricity bill at 5%. Here is why every competitor gave up, and why that makes ACE indispensable f...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-utility-bills
// Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

// --- SVG Components ---

function UtilityRewardRateComparison() {
  const cards = [
    { name: "Axis ACE", rate: 5, note: "Utility via Google Pay" },
    { name: "Amazon Pay ICICI", rate: 2, note: "Amazon Pay billers only" },
    { name: "HDFC Millennia", rate: 1, note: "Not all utilities qualify" },
    { name: "SBI SimplySAVE", rate: 0, note: "Utilities excluded" },
    { name: "Standard Bank Card", rate: 0.3, note: "Base reward on all spend" },
  ];
  return (
    <svg
      viewBox="0 0 680 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bar chart comparing reward rates on utility bill payments across major Indian credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Reward Rate on Utility Bills by Card (June 2026)</text>
      {[0, 1, 2, 3, 4, 5].map((v) => (
        <g key={v}>
          <text x="42" y={215 - v * 32} fontSize="11" fill="var(--text-muted)" textAnchor="end">{v}%</text>
          <line x1="48" y1={215 - v * 32} x2="650" y2={215 - v * 32} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4,3" />
        </g>
      ))}
      {cards.map((c, i) => {
        const barH = c.rate * 32;
        const x = 68 + i * 114;
        return (
          <g key={c.name}>
            <rect x={x} y={215 - barH} width="68" height={Math.max(barH, 4)} rx="4" fill={c.rate >= 5 ? COLOR : c.rate >= 2 ? "rgba(62,224,143,.35)" : "var(--border)"} opacity="0.9" />
            {c.rate > 0 && (
              <text x={x + 34} y={210 - barH} textAnchor="middle" fontSize="11" fontWeight="700" fill={c.rate >= 5 ? COLOR : "var(--text-muted)"}>{c.rate}%</text>
            )}
            <text x={x + 34} y="230" textAnchor="middle" fontSize="10" fill="var(--text-muted)">{c.name}</text>
            <text x={x + 34} y="244" textAnchor="middle" fontSize="9" fill="var(--text-muted)">{c.note}</text>
          </g>
        );
      })}
      <text x="340" y="258" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Axis ACE's 5% on utilities is the highest rate in India. All other major cards give 0-2% on utility payments.</text>
    </svg>
  );
}

function MDRExplainerDiagram() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram explaining why MDR economics make utility bill rewards rare in India"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Why Utility Rewards Are Rare: The MDR Problem</text>
      <rect x="20" y="44" width="140" height="56" rx="8" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.2" />
      <text x="90" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR}>Normal Purchase</text>
      <text x="90" y="84" textAnchor="middle" fontSize="10" fill="var(--text-muted)">MDR: 1.5-2.5%</text>
      <text x="90" y="97" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Bank earns ₹25 per ₹1,000</text>
      <rect x="270" y="44" width="140" height="56" rx="8" fill="var(--raise)" opacity="0.25" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="340" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f59e0b">Utility via BBPS</text>
      <text x="340" y="84" textAnchor="middle" fontSize="10" fill="var(--text-muted)">MDR: 0-0.5% (capped)</text>
      <text x="340" y="97" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Bank earns ₹0-5 per ₹1,000</text>
      <rect x="520" y="44" width="140" height="56" rx="8" fill="var(--raise)" opacity="0.25" stroke="#ef4444" strokeWidth="1.2" />
      <text x="590" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ef4444">Reward Rate Needed</text>
      <text x="590" y="84" textAnchor="middle" fontSize="10" fill="var(--text-muted)">5% on ₹1,000 = ₹50</text>
      <text x="590" y="97" textAnchor="middle" fontSize="10" fill="var(--text-muted)">But bank earns only ₹5</text>
      <text x="340" y="128" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ef4444">Banks LOSE money giving rewards on utility bills</text>
      <text x="340" y="148" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Axis ACE subsidizes utility rewards from revenue on other categories (food delivery, general spend).</text>
      <text x="340" y="165" textAnchor="middle" fontSize="11" fill="var(--text-muted)">This is why most banks silently cap, reduce, or exclude utility rewards.</text>
      <rect x="60" y="175" width="560" height="18" rx="4" fill={COLOR} opacity="0.07" />
      <text x="340" y="187" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="600">Axis ACE is structurally unique: it is the only card that still offers 5% on eligible utility MCCs as of June 2026.</text>
    </svg>
  );
}

function BBPSVsDirectPaymentTable() {
  const rows = [
    { method: "BBPS via PhonePe/GPay + Axis ACE", reward: "5% (MCC 4900 qualifies)", works: "Yes, usually", note: "Most reliable route" },
    { method: "BBPS via bank's own app", reward: "5%", works: "Yes", note: "Safest but slower" },
    { method: "Direct on electricity website", reward: "5%", works: "Sometimes", note: "MCC depends on biller" },
    { method: "Amazon Pay bill payment", reward: "2% (Amazon Pay ICICI)", works: "Yes", note: "Only if biller listed" },
    { method: "Auto-debit from savings account", reward: "0%", works: "N/A", note: "Not a credit card payment" },
  ];
  return (
    <svg
      viewBox="0 0 680 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table comparing reward earning methods for utility bill payment in India"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Payment Method vs Reward Rate (Axis ACE)</text>
      {["Payment Method", "Reward", "Works?", "Notes"].map((h, i) => (
        <text key={h} x={[20, 310, 400, 480][i]} y="48" fontSize="10.5" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="12" y1="54" x2="668" y2="54" stroke="var(--border)" strokeWidth="1" />
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="12" y={58 + i * 38} width="656" height="36" rx="3" fill={i === 0 ? COLOR : "transparent"} opacity={i === 0 ? "0.06" : "1"} />
          <text x="20" y={81 + i * 38} fontSize="10" fill="var(--text)">{r.method}</text>
          <text x="310" y={81 + i * 38} fontSize="10" fontWeight="600" fill={r.reward.startsWith("5") ? COLOR : r.reward.startsWith("2") ? "#f59e0b" : "var(--text-muted)"}>{r.reward}</text>
          <text x="400" y={81 + i * 38} fontSize="10" fill={r.works === "Yes, usually" || r.works === "Yes" ? COLOR : "#ef4444"}>{r.works}</text>
          <text x="480" y={81 + i * 38} fontSize="10" fill="var(--text-muted)">{r.note}</text>
        </g>
      ))}
      <text x="340" y="252" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">MCC 4900 (utilities) is the key code. If the biller settles under MCC 4900, Axis ACE rewards it at 5%.</text>
    </svg>
  );
}

function MonthlyCapMathTable() {
  return (
    <svg
      viewBox="0 0 680 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table showing Axis ACE cashback earned at different monthly utility spending levels"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="220" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Axis ACE Utility Cashback: Monthly Spend vs Annual Return</text>
      {[
        { spend: "₹2,000/mo", cashback: "₹100/mo", annual: "₹1,200/yr", vsAnnualFee: "2.4x return on ₹499 fee" },
        { spend: "₹5,000/mo", cashback: "₹250/mo", annual: "₹3,000/yr", vsAnnualFee: "6x return on fee" },
        { spend: "₹10,000/mo", cashback: "₹500/mo", annual: "₹6,000/yr", vsAnnualFee: "12x return on fee" },
        { spend: "₹20,000/mo", cashback: "₹1,000/mo", annual: "₹12,000/yr", vsAnnualFee: "24x return on fee" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="16" y={50 + i * 38} width="648" height="36" rx="4" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.04" : "1"} />
          <text x="30" y={73 + i * 38} fontSize="12" fontWeight="600" fill="var(--text)">{r.spend}</text>
          <text x="190" y={73 + i * 38} fontSize="12" fill={COLOR} fontWeight="600">{r.cashback}</text>
          <text x="340" y={73 + i * 38} fontSize="12" fill={COLOR} fontWeight="700">{r.annual}</text>
          <text x="480" y={73 + i * 38} fontSize="11" fill="var(--text-muted)">{r.vsAnnualFee}</text>
        </g>
      ))}
      <text x="30" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Monthly Utility Spend</text>
      <text x="190" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Monthly Cashback</text>
      <text x="340" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">Annual Cashback</text>
      <text x="480" y="50" fontSize="10.5" fontWeight="700" fill="var(--text)">vs ₹499 Fee</text>
      <text x="340" y="212" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Axis ACE utility cashback is credited as statement credit. No points conversion needed. Cap applies per billing cycle.</text>
    </svg>
  );
}

function UtilityStackDiagram() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing recommended two-card stack for maximizing utility and online spending rewards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Optimal Two-Card Stack for Utility-Heavy Households</text>
      <rect x="30" y="44" width="270" height="80" rx="10" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" />
      <text x="165" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Card 1: Axis ACE (₹499/yr)</text>
      <text x="165" y="84" textAnchor="middle" fontSize="10.5" fill="var(--text)">Electricity, water, broadband</text>
      <text x="165" y="100" textAnchor="middle" fontSize="10.5" fill="var(--text)">Mobile recharge, LPG bills</text>
      <text x="165" y="116" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={COLOR}>Earn 5% cashback</text>
      <rect x="380" y="44" width="270" height="80" rx="10" fill="#0891b2" opacity="0.25" stroke="#0891b2" strokeWidth="1.5" />
      <text x="515" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0891b2">Card 2: Amazon Pay ICICI (Free)</text>
      <text x="515" y="84" textAnchor="middle" fontSize="10.5" fill="var(--text)">Online shopping, Amazon purchases</text>
      <text x="515" y="100" textAnchor="middle" fontSize="10.5" fill="var(--text)">Amazon Pay merchant bills</text>
      <text x="515" y="116" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0891b2">Earn 2-5% cashback</text>
      <text x="340" y="156" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Combined annual return for ₹8,000/mo utility + ₹15,000/mo online:</text>
      <text x="340" y="174" textAnchor="middle" fontSize="13" fontWeight="700" fill={COLOR}>~₹7,800/yr on zero fees (ACE fee waived at ₹2L spend)</text>
      <text x="340" y="190" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Estimates based on June 2026 reward rates. Actual results vary by spending mix and category caps.</text>
    </svg>
  );
}

export default function BestCreditCardForUtilityBills() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives best rewards on electricity and utility bills in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE is the only major Indian credit card that gives 5% cashback on utility bill payments as of June 2026. No other mainstream card comes close to this rate on electricity, water, broadband, or mobile recharge payments. Amazon Pay ICICI gives 2% on certain Amazon Pay utility billers.",
        },
      },
      {
        "@type": "Question",
        name: "Does Axis ACE give 5% on all utility bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE gives 5% on utility payments made via Google Pay or other UPI/payment apps that route the transaction under MCC 4900 (utilities). The reward applies when the biller settles the transaction under eligible merchant category codes. Not all payment methods or billers qualify. Paying through BBPS (Bharat Bill Payment System) via Google Pay, PhonePe, or the BBPS portal is the most reliable route.",
        },
      },
      {
        "@type": "Question",
        name: "Why do most credit cards not give rewards on utility bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility bill payments have low or zero Merchant Discount Rate (MDR) under RBI regulations. Banks earn very little interchange revenue from utility transactions. Giving 5% cashback on a category where the bank earns near-zero revenue is a loss-leader strategy. Axis ACE can sustain this by earning margin on food delivery (4%) and general spend (1.5%) categories.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a cap on Axis ACE utility cashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE has a monthly cashback cap that applies to the 5% Google Pay and utility category. The cap varies and has been adjusted over the card's history. As of June 2026, the cashback cap for the utility category is applied per billing cycle. Check the current Axis Bank terms as caps change. For most households spending under ₹20,000/month on utilities, the cap is unlikely to be a binding constraint.",
        },
      },
      {
        "@type": "Question",
        name: "Is Axis ACE annual fee waivable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Axis ACE has an annual fee of ₹499 which is waived if you spend ₹2 lakh or more in the card year. At ₹16,667 per month average spend across all categories, the fee is waived. For most active credit card users, this threshold is easily met.",
        },
      },
      {
        "@type": "Question",
        name: "What is BBPS and should I use it for utility bill payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BBPS (Bharat Bill Payment System) is RBI's official standardized platform for recurring bill payments including electricity, water, gas, broadband, and DTH. Paying through BBPS via Google Pay, PhonePe, or Amazon Pay ensures the transaction is routed under the correct MCC for utility rewards on Axis ACE. It also gives you a centralized payment record and official receipt.",
        },
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI give cashback on electricity bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Pay ICICI gives 2% cashback on bill payments made to Amazon Pay merchant billers. This applies to some but not all electricity and utility billers listed on Amazon. If your utility biller is not on Amazon Pay, you earn the base 1% rate. Compared to Axis ACE's 5%, Amazon Pay ICICI is a distant second for dedicated utility spend.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Axis ACE for LPG cylinder booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, LPG cylinder bookings made online through IndianOil, HP Gas, or Bharat Gas portals are eligible for utility rewards on Axis ACE if the transaction is coded under MCC 4900. However, rewards may not apply if you book via the IVRS helpline or in person. Online payment through the official app or BBPS gives the best chance of earning the 5% rate.",
        },
      },
      {
        "@type": "Question",
        name: "Is the two-card strategy (Axis ACE + Amazon Pay ICICI) really the best approach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most Indian households with significant utility spend plus regular online shopping, yes. Axis ACE handles utilities at 5% and food delivery at 4%. Amazon Pay ICICI (free) handles Amazon purchases at 5% (Prime) and other online merchants at 2%. The combination covers most household spending categories with above-average returns and minimal annual fees.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Utility Bills in India (June 2026): Axis ACE Dominates",
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
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Credit Card for Utility Bills",
        item: "https://assurefintech.com/best/credit-card-for-utility-bills",
      },
    ],
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
            Best Credit Card for Utility Bills in India (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 7 min read</div>
        </div>
      </div>
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "32px 22px 48px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "var(--text)",
        lineHeight: 1.6,
      }}
    >
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Utility Bills
      </nav>

      <div
        style={{
          display: "inline-block",
          background: COLOR,
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.07em",
          padding: "3px 10px",
          borderRadius: 4,
          marginBottom: 14,
          textTransform: "uppercase",
        }}
      >
        Utility Bills
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Axis ACE is the only major credit card that rewards your electricity bill at 5%. Here is why every competitor gave up, and why that makes ACE indispensable for utility-heavy households.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 7 min read
      </div>

      {/* Alert box */}
      <div
        style={{
          background: COLOR + "12",
          border: `1px solid ${COLOR}35`,
          borderRadius: 8,
          padding: "14px 18px",
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        <strong style={{ color: COLOR }}>Key finding:</strong> Axis ACE gives 5% cashback on utility bill payments via Google Pay and BBPS. No other mainstream Indian credit card comes close to this rate on electricity, water, broadband, or mobile recharge. The card costs ₹499/year, waivable at ₹2L annual spend.
      </div>

      {/* Top Picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Cards Ranked for Utility Bill Rewards</h2>

        {[
          {
            rank: "1",
            name: "Axis ACE",
            tag: "Clear Winner",
            fee: "₹499/yr (waivable at ₹2L)",
            reward: "5% on utility bills via Google Pay/BBPS",
            best: "Anyone with electricity + broadband + gas bills",
            slug: "axis-ace",
          },
          {
            rank: "2",
            name: "Amazon Pay ICICI",
            tag: "Best Free Alternative",
            fee: "Free",
            reward: "2% on Amazon Pay utility billers",
            best: "If your utility biller is listed on Amazon Pay",
            slug: "amazon-pay-icici",
          },
          {
            rank: "3",
            name: "HDFC Millennia",
            tag: "Passable, Not Great",
            fee: "₹1,000/yr",
            reward: "1% base on utility (most categories excluded from 5%)",
            best: "If you already have this card and want to use one card",
            slug: "hdfc-millennia",
          },
        ].map((card) => (
          <div
            key={card.rank}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "18px 22px",
              marginBottom: 14,
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              background: "var(--raise)",
            }}
          >
            <div
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: "50%",
                background: card.rank === "1" ? COLOR : "var(--border)",
                color: card.rank === "1" ? "#fff" : "var(--text)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 15,
                flexShrink: 0,
              }}
            >
              {card.rank}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                <Link href={`/cards/${card.slug}`} style={{ fontWeight: 700, fontSize: 16, color: COLOR }}>
                  {card.name}
                </Link>
                <span style={{ background: COLOR + "18", color: COLOR, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4 }}>
                  {card.tag}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Fee:</span> {card.fee} |{" "}
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Reward:</span> {card.reward}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Best for:</span> {card.best}
              </div>
            </div>
          </div>
        ))}
      </section>

      <UtilityRewardRateComparison />

      {/* Section 1: Why utility rewards are rare */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Why Does Almost No Card Reward Utility Bills?
        </h2>
        <p>
          Credit card rewards are funded by interchange fee revenue (MDR — Merchant Discount Rate), the small percentage a merchant pays when you swipe your card. On a restaurant bill, the bank earns 1.5-2% of the transaction amount. On a grocery purchase, around 0.5-1.5%. This revenue funds rewards, cashback, and the card program costs.
        </p>
        <p>
          Utility bills are different. RBI and NPCI have capped MDR on utility payments made through BBPS at near-zero levels to promote digital payments. When you pay your electricity bill via BBPS, the bank earns almost nothing. Giving you 5% rewards on a transaction where the bank earns 0.1-0.3% is genuinely a loss-making activity.
        </p>
        <MDRExplainerDiagram />
        <p>
          Axis Bank makes this math work on ACE because the card earns above-average margins on food delivery (4% you earn, but that category has decent MDR) and general purchases (1.5%). The utility reward is effectively subsidized by profitable categories. This is a calculated customer acquisition strategy, not charity, but the result benefits you as long as the rate holds.
        </p>
        <p>
          Several major banks, including HDFC, SBI, and Kotak, have silently reduced or excluded utility rewards from their cards' top reward tiers over the last two years. This is why the Axis ACE advantage is worth protecting: <Link href="/blog/credit-card-utility-rewards-history-india">see how utility reward rates have changed</Link> across Indian cards since 2022.
        </p>
      </section>

      <BBPSVsDirectPaymentTable />

      {/* Section 2: How ACE actually works */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Axis ACE: How the 5% Utility Cashback Actually Works
        </h2>
        <p>
          Axis ACE gives 5% cashback on transactions that are coded under specific utility merchant category codes (MCCs), primarily MCC 4900 (Electric, Gas, Sanitary, and Water Utilities). When you pay your BESCOM or MSEB electricity bill through Google Pay, the payment is routed through BBPS and typically settles under MCC 4900, triggering the 5% rate.
        </p>
        <p>
          The practical implication: the payment method matters, but the biller matters more. If your electricity board is on BBPS, paying via Google Pay or PhonePe is the most reliable path. Paying directly on the electricity board's website sometimes works and sometimes settles under a different MCC, resulting in the base 1.5% rate instead.
        </p>
        <p>
          For mobile recharge and broadband bills, the MCC situation is less consistent. Jio, Airtel, and Vi bill payments via BBPS typically qualify at 5%. Broadband payments vary by provider and payment portal. Test your specific billers with a small payment first before assuming the 5% applies.
        </p>
        <p>
          Cashback on Axis ACE is credited as statement credit, typically within 2-3 billing cycles of the transaction. Unlike reward points, this is actual money off your next bill. No points portal, no redemption complications.
        </p>
      </section>

      <MonthlyCapMathTable />

      {/* Section 3: Stacking strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Utility Card Stack: ACE Plus One More
        </h2>
        <p>
          Axis ACE is a narrow specialist: exceptional on utilities (5%) and food delivery (4%), decent on everything else (1.5%). The optimal approach is to use ACE specifically for bills and food delivery, and pair it with a stronger card for online shopping and other categories.
        </p>
        <p>
          The most common and effective pairing is Axis ACE with Amazon Pay ICICI (free). Amazon Pay ICICI covers Amazon purchases at 5% (Prime users), Amazon Pay merchant transactions at 2%, and everything else at 1%. Together, these two cards cover most household spending at above-average rates with only ₹499 in annual fees (waivable), and that fee pays back dozens of times over in utility cashback alone.
        </p>
        <UtilityStackDiagram />
        <p>
          Use our <Link href="/stack-builder">Stack Builder</Link> to model your specific household spend pattern and see the exact annual return from different card combinations. Also see: <Link href="/best/best-cashback-credit-card-no-annual-fee">Best No Annual Fee Cards</Link> for alternative card 2 options.
        </p>
      </section>

      {/* What to do */}
      <section
        style={{
          background: COLOR + "0e",
          border: `1px solid ${COLOR}28`,
          borderRadius: 10,
          padding: "22px 24px",
          marginBottom: 40,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Action Plan for Utility-Heavy Households</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Apply for Axis ACE</strong> if you spend more than ₹2,000/month on utility bills. The cashback covers the annual fee in 2 months at that spend level.
          </li>
          <li>
            <strong>Set up all your recurring utility bills</strong> through Google Pay or BBPS, linked to your Axis ACE card as the payment source.
          </li>
          <li>
            <strong>Test your billers.</strong> Pay one bill and check your Axis rewards statement within 2 billing cycles to confirm the 5% MCC was triggered.
          </li>
          <li>
            <strong>Pair with Amazon Pay ICICI</strong> (free) for online shopping and Amazon Pay merchant transactions.
          </li>
          <li>
            <strong>Hit ₹2 lakh annual spend</strong> across all categories to get the ₹499 fee waived. At ₹16,667/month total card spend, this is achievable for most urban households.
          </li>
          <li>
            <strong>Do not use Axis ACE for dining or groceries in physical stores</strong> where better-rate cards (HSBC Live+ at 10% dining, SBI SimplySAVE) would serve better.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Run the numbers for your household: <Link href="/smart-swipe">Smart Swipe</Link> calculates your estimated annual return from ACE vs alternatives in under 90 seconds.
        </p>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Frequently Asked Questions</h2>
        {faq.mainEntity.map((item, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: 16, marginBottom: 16 }}>
            <summary style={{ fontWeight: 600, fontSize: 15, cursor: "pointer", paddingTop: 4, color: "var(--text)" }}>
              {item.name}
            </summary>
            <p style={{ marginTop: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </p>
          </details>
        ))}
      </section>

      {/* Related */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Related Reading</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li><Link href="/cards/axis-ace">Axis ACE Card Full Review, Benefits, Apply</Link></li>
          <li><Link href="/best/best-credit-card-under-500-annual-fee">Best Credit Cards Under ₹500 Annual Fee</Link></li>
          <li><Link href="/best/best-cashback-credit-card-no-annual-fee">Best No Annual Fee Cashback Cards</Link></li>
          <li><Link href="/blog/bbps-credit-card-rewards-guide">BBPS and Credit Card Rewards: Complete Guide</Link></li>
          <li><Link href="/stack-builder">Build Your Card Stack</Link></li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial site with no banking license. Cashback rates, MCC eligibility, and monthly caps on Axis ACE change periodically. Always verify current terms on the Axis Bank website before relying on specific reward rates. Some links may earn a referral commission that does not influence our editorial positions.
      </footer>
    </main>
    </>
  );
}
