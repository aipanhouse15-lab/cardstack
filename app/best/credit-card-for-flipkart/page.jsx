import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Flipkart: Current Rewards Compared",
  description: "Compare current Axis Flipkart, SBI Cashback and HDFC Millennia rewards, caps, exclusions and statement-cycle limits before applying.",
  alternates: { canonical: "/best/credit-card-for-flipkart" },
  openGraph: {
    title: "Best Credit Card for Flipkart: Current Rewards Compared",
    description: "Compare current Axis Flipkart, SBI Cashback and HDFC Millennia rewards, caps, exclusions and statement-cycle limits before applying.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-flipkart
// Reviewed against issuer sources: September 26, 2026

const COLOR = "#2563eb";
const UPDATED = "September 26, 2026";
const SOURCES = {
  axis: "https://www.axis.bank.in/cards/credit-card/flipkart-axisbank-credit-card",
  sbi: "https://www.sbicard.com/en/faq/cashback-sbi-card-faq.page",
  sbiTerms: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/cashback-revised.pdf",
  hdfc: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0",
};

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
      <text x="170" y="76" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Check current joining/annual fee</text>
      <text x="170" y="93" textAnchor="middle" fill="var(--text)" fontSize="12">5% on Flipkart + Cleartrip</text>
      <text x="170" y="108" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="700">₹4,000 / quarter / merchant cap</text>
      <text x="170" y="124" textAnchor="middle" fill="var(--text)" fontSize="12">7.5% Myntra; 4% preferred merchants</text>
      <text x="170" y="140" textAnchor="middle" fill="var(--text)" fontSize="12">1% on other eligible spends</text>
      <text x="170" y="158" textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="700">Quarterly caps matter</text>
      <text x="170" y="175" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Axis Bank Flipkart Credit Card</text>
      <rect x="360" y="38" width="300" height="148" fill="var(--raise)" stroke="var(--hair2)" strokeWidth="1" rx="8" />
      <text x="510" y="58" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Compare named card variants</text>
      <text x="510" y="76" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Do not infer terms from similar names</text>
      <text x="510" y="93" textAnchor="middle" fill="var(--text)" fontSize="12">Reward currency may differ</text>
      <text x="510" y="108" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="700">Check variant-specific T&amp;C</text>
      <text x="510" y="124" textAnchor="middle" fill="var(--text)" fontSize="12">Caps and eligible spends can change</text>
      <text x="510" y="140" textAnchor="middle" fill="var(--text)" fontSize="12">Confirm fee and redemption value</text>
      <text x="510" y="158" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Use issuer product name</text>
      <text x="510" y="175" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Verify directly before applying</text>
    </svg>
  );
}

function CapComparisonBars() {
  const scenarios = [
    { label: "₹10,000", axis: 500, superCoin: 500, sbi: 500 },
    { label: "₹20,000", axis: 1000, superCoin: 1000, sbi: 1000 },
    { label: "₹30,000", axis: 1500, superCoin: 1500, sbi: 1500 },
    { label: "₹40,000", axis: 2000, superCoin: 2000, sbi: 2000 },
    { label: "₹50,000", axis: 2500, superCoin: 2500, sbi: 2000 },
  ];
  const maxVal = 2500;
  return (
    <svg
      viewBox="0 0 680 307"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monthly cashback earned on Flipkart at different spend levels comparing Axis Flipkart, SuperCoin card, and SBI Cashback"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Illustration: ₹ Flipkart cashback at 5% eligible rate</text>
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
        <text x="94" y="283" fill="var(--text-muted)" fontSize="11">Axis (quarterly merchant cap)</text>
        <rect x="280" y="274" width="10" height="10" fill="var(--raise)" rx="2" />
        <text x="294" y="283" fill="var(--text-muted)" fontSize="11">Example only; variant terms differ</text>
        <rect x="490" y="274" width="10" height="10" fill="#10b981" rx="2" />
        <text x="504" y="283" fill="var(--text-muted)" fontSize="11">SBI: ₹2k online cap / cycle</text>
      </g>
    </svg>
  );
}

function BBDStrategyTimeline() {
  const events = [
    { month: "Before", action: "Read the sale offer terms and eligible cards", note: "Offers vary by event and account" },
    { month: "Before", action: "Check card exclusions, cap and minimum spend", note: "Sale discount may exclude some items" },
    { month: "Sale", action: "Compare final checkout price across payment options", note: "Do not assume discounts stack" },
    { month: "After", action: "Keep invoice and check statement rewards", note: "Posting and reversal rules vary" },
    { month: "Return", action: "Recheck adjusted price and reward reversal", note: "Refunds can change eligible spend" },
  ];
  return (
    <svg
      viewBox="0 0 680 303"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Big Billion Days preparation timeline showing steps to maximise Flipkart card rewards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Sale checklist: verify each offer, don't assume stacking</text>
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
    { label: "Other eligible spend", axis: 1.0, sbi: 1.0, millennia: 1 },
    { label: "Preferred merchants", axis: 4.0, sbi: 1.0, millennia: 1 },
    { label: "Myntra (Axis tier)", axis: 7.5, sbi: 5.0, millennia: 1 },
    { label: "Flipkart (Axis tier)", axis: 5.0, sbi: 5.0, millennia: 5.0 },
    { label: "Excluded transaction", axis: 0, sbi: 0, millennia: 0 },
  ];
  return (
    <svg
      viewBox="0 0 680 250"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Base rate comparison on non-Flipkart categories showing Axis Flipkart 1.5 percent advantage over zero base on SBI Cashback"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Illustrative headline earn rates by merchant/category</text>
      {categories.map((c, i) => {
        const y = 44 + i * 36;
        return (
          <g key={c.label}>
            <text x="110" y={y + 14} textAnchor="end" fill="var(--text)" fontSize="11">{c.label}</text>
            <rect x="120" y={y + 2} width={c.axis * 20} height={18} fill={COLOR} rx="3" />
            <text x={120 + c.axis * 60 + 4} y={y + 15} fill={COLOR} fontSize="11" fontWeight="700">{c.axis}%</text>
            <rect x="120" y={y + 22} width={Math.max(c.sbi * 20, 2)} height={8} fill="#10b981" rx="2" />
            <text x={120 + Math.max(c.sbi * 60, 4) + 4} y={y + 30} fill="#10b981" fontSize="9">{c.sbi === 0 ? "0% (offline)" : c.sbi + "%"}</text>
          </g>
        );
      })}
      <text x="340" y="226" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Illustrative headline rates only; merchant eligibility and caps apply.</text>
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
      <text x="160" y="130" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Check eligible spend and quarterly cap</text>
      <rect x="240" y="92" width="200" height="50" fill="var(--raise)" stroke={COLOR} rx="8" />
      <text x="340" y="113" textAnchor="middle" fill={COLOR} fontSize="12" fontWeight="700">Axis Flipkart</text>
      <text x="340" y="130" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Still wins: cap advantage kicks in here</text>
      <rect x="420" y="92" width="200" height="50" fill="var(--raise)" stroke="#16a34a" rx="8" />
      <text x="520" y="113" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="700">SBI Cashback</text>
      <text x="520" y="130" textAnchor="middle" fill="var(--text-muted)" fontSize="10">₹2,000 eligible online / statement cycle</text>
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
        acceptedAnswer: { "@type": "Answer", text: "There is no single best card for every shopper. Axis Bank Flipkart currently advertises 5% on Flipkart, subject to a ₹4,000 cap per statement quarter per merchant; SBI Cashback advertises 5% eligible online cashback subject to a ₹2,000 online cap per statement cycle, shared across eligible online spends. Compare your total eligible spend, caps, fees and exclusions." }
      },
      {
        "@type": "Question",
        name: "What is the difference between Axis Flipkart card and Flipkart Axis SuperCoin card?",
        acceptedAnswer: { "@type": "Answer", text: "Do not conflate similarly named products. Confirm the full issuer product name and read that variant's current fee schedule, rewards currency, caps and redemption rules; terms can differ and change. Axis Bank's current product page lists the Flipkart Axis Bank Credit Card and its cashback structure." }
      },
      {
        "@type": "Question",
        name: "Does HDFC Millennia give 5% on Flipkart?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, Flipkart is listed among HDFC Millennia's 5% CashPoints partner merchants. The accelerated merchant tier has a ₹1,000 cap per statement cycle, shared across that tier; eligible transaction conditions and the current issuer terms apply." }
      },
      {
        "@type": "Question",
        name: "When does SBI Cashback beat Axis Flipkart for Flipkart purchases?",
        acceptedAnswer: { "@type": "Answer", text: "SBI Cashback's current terms provide 5% on eligible online transactions, with an online cashback cap of ₹2,000 per statement cycle. The limit applies across eligible online spend, not separately to Flipkart. Axis lists a ₹4,000 quarterly cap per merchant for Flipkart. Which yields more depends on your billing cycle, other online purchases, eligibility and fees." }
      },
      {
        "@type": "Question",
        name: "Is Big Billion Days cashback extra on top of the card cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Not necessarily. Sale discounts, card rewards, eligible products, maximum discounts and stacking rules are event-specific. Read the live checkout and offer terms; do not assume registration is needed, that offers stack, or that a headline discount is guaranteed." }
      },
      {
        "@type": "Question",
        name: "Do SuperCoins from the Flipkart Axis card expire?",
        acceptedAnswer: { "@type": "Answer", text: "Expiry, eligible redemption and transfer rules depend on the specific SuperCoins program terms. Check the current Flipkart terms and the exact card variant; do not assume SuperCoins are cash-equivalent." }
      },
      {
        "@type": "Question",
        name: "Which card is better for Myntra purchases?",
        acceptedAnswer: { "@type": "Answer", text: "Axis currently lists Myntra in a 7.5% cashback tier, capped at ₹4,000 per statement quarter. SBI Cashback may earn 5% on eligible online Myntra transactions subject to its ₹2,000 per-cycle online cap and exclusions. Compare caps across your combined spend." }
      },
      {
        "@type": "Question",
        name: "What happens if I return a Flipkart order? Do I lose the cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Returns or cancellations can reduce eligible spend and lead to reward adjustments or reversals under issuer terms. The exact timing and amount depend on the transaction and issuer rules; check the subsequent statement and the current terms." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Flipkart Shopping in India: Cashback and Caps",
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
            Best Credit Card for Flipkart
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
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
        Compare eligible cashback, the cap period and total online spending—not just the headline rate. Terms below are summarized from issuer sources; verify them again before applying.
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
            fee: "Check current issuer fee",
            rate: "5% on Flipkart and Cleartrip",
            cap: "₹4,000 per statement quarter, per merchant",
            badge: "Flipkart-focused option",
            why: "Axis lists 5% cashback on Flipkart and Cleartrip, 7.5% on Myntra, 4% on preferred merchants and 1% on other eligible spends. Each tier has its own conditions and caps.",
            caveat: "Confirm current fee, preferred merchant list, exclusions and quarterly caps on Axis's official page."
          },
          {
            name: "Other similarly named Flipkart/Axis variants",
            slug: "axis-flipkart",
            fee: "Check issuer terms",
            rate: "Varies by exact product",
            cap: "Check variant terms",
            badge: "Verify first",
            why: "Product names and reward programs are easy to confuse. Use the full name shown in the application and verify reward currency, earn rates, caps and redemption rules for that exact card.",
            caveat: "We are not assigning a rate or fee to a product variant without current, unambiguous issuer terms."
          },
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "Check current issuer fee",
            rate: "5% on eligible online spends",
            cap: "₹2,000 online per statement cycle",
            badge: "High-Volume Pick",
            why: "Potentially useful when you have eligible online purchases across several merchants. Its online cap is shared across eligible online transactions, so other shopping can use the same cycle limit.",
            caveat: "Many transaction types are excluded; see SBI's revised terms and FAQ."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "Check current issuer fee",
            rate: "5% on Flipkart",
            cap: "₹1,000 per statement cycle on 5% merchant tier",
            badge: "Versatile but Capped",
            why: "Flipkart is one of HDFC's listed 5% CashPoints merchants. The cap is shared across the accelerated merchant tier, which includes multiple named partners.",
            caveat: "The 5% tier is subject to eligible transaction conditions, including non-EMI terms; verify the current HDFC schedule."
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
        <p>Similar card names do not guarantee the same rewards. This page compares issuer-published features for named products and avoids assigning unverified terms to similarly named variants.</p>
        <NamingConfusionChart />
        <p style={{ marginTop: 12 }}>Axis currently lists 5% cashback on Flipkart and Cleartrip, up to ₹4,000 per statement quarter per merchant; Myntra is listed at 7.5% with its own quarterly cap. Preferred merchants earn 4%, while other eligible spends earn 1%. See the <a href={SOURCES.axis} target="_blank" rel="noreferrer">Axis Bank product page</a> for fees, exclusions and current terms.</p>
        <p>When a product name is ambiguous, check the full card name and issuer product page. Cashback and loyalty points are different reward currencies and should not be compared at face value.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Cap Math: Where Each Card Breaks</h2>
        <p>These limits use different periods: Axis states a quarterly per-merchant cap for its Flipkart tier, while SBI Cashback caps eligible online cashback per statement cycle across eligible online purchases. A statement cycle is not necessarily a calendar month.</p>
        <p>The graphic is a simple 5% arithmetic illustration, not a promise of credited rewards. It excludes fees, ineligible transactions, cap timing and reversals. Axis reaches its ₹4,000 cap at ₹80,000 eligible Flipkart spend in a statement quarter; SBI reaches its ₹2,000 online cap at ₹40,000 eligible online spend per statement cycle across merchants.</p>
        <CapComparisonBars />
        <p style={{ marginTop: 12 }}>For ₹50,000 eligible Flipkart spend within a quarter, Axis's tier would reach its ₹4,000 cap. SBI is subject to its ₹2,000 online cap per statement cycle shared with other eligible online purchases. Actual reward may be lower. See <Link href="/blog/cashback-rate-is-a-lie">why advertised cashback rates can mislead</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Big Billion Days: The High-Value Window</h2>
        <p>Big Billion Days, typically held in October, is Flipkart's equivalent of Amazon Prime Day but often larger in scale. The 5-7 day sale window represents months of normal Flipkart earning compressed into a week.</p>
        <BBDStrategyTimeline />
        <p style={{ marginTop: 12 }}>Sale events change each time: eligible cards, products, minimum spends, maximum discounts and stacking rules differ. Review the live offer details and issuer terms at checkout. Do not assume registration is required or that a discount stacks with regular rewards.</p>
        <p>Do not add a headline sale discount to cashback as guaranteed savings until you verify both sets of terms and the final payable price. Use our <Link href="/stack-builder">Stack Builder</Link> only after checking eligibility.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Headline rates outside Flipkart</h2>
        <p>Axis lists 4% for preferred merchants and 1% on other eligible spends; this is not a blanket 1.5% rate. SBI Cashback's schedule lists 1% on eligible offline spends, subject to its cap. Issuer exclusions apply.</p>
        <BaseRateAdvantageChart />
        <p style={{ marginTop: 12 }}>These are headline rates, not guaranteed net returns. Check the issuer's preferred-merchant list, exclusions and current fee schedule before estimating value. Use the <Link href="/smart-swipe">Smart Swipe guide</Link> to compare eligible spend.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>When SBI Cashback Beats Dedicated Flipkart Cards</h2>
        <p>SBI Cashback offers 5% on eligible online transactions, not every online purchase. Current revised terms cap online cashback at ₹2,000 per statement cycle, shared across eligible online purchases; several categories and transaction types are excluded.</p>
        <FlipkartDecisionFlow />
        <p style={{ marginTop: 12 }}>Axis may suit eligible Flipkart spending up to its quarterly merchant cap; SBI may suit a range of eligible online purchases until its cycle cap is used. SBI's cap is shared across merchants, and exclusions can change the result. Compare statement periods and fees against your actual spend.</p>
        <p>Holding multiple cards adds fees and complexity; do not apply based only on this simplified comparison.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>Identify the exact card and read its latest issuer fee and reward terms.</li>
          <li>Estimate eligible Flipkart spend over the issuer's statement-quarter or statement-cycle period.</li>
          <li>Include other merchants that share a reward cap.</li>
          <li>Check exclusions, EMI eligibility, refund treatment and offer-specific conditions.</li>
          <li>Compare net value after fees, and do not treat points or temporary discounts as cash without checking redemption terms.</li>
          <li>Recheck the issuer sources linked below before applying.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>Axis Flipkart is one option for shoppers who use its eligible Flipkart cashback tier within the quarterly cap. SBI Cashback may suit other eligible online spend, but the online limit is shared per statement cycle. HDFC Millennia has a shared partner-merchant CashPoints cap. Fees, exclusions and spend patterns decide; there is no universal winner.</p>
        <p>Check the current issuer terms for the exact product before applying. Rewards and promotional offers can change; this comparison is not a guarantee of approval, savings or future benefits.</p>
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

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. Rewards and fees can change; verify current issuer terms before applying. This is not financial advice. Sources: <a href={SOURCES.axis} target="_blank" rel="noreferrer">Axis Bank</a> · <a href={SOURCES.sbi} target="_blank" rel="noreferrer">SBI Card FAQ</a> · <a href={SOURCES.sbiTerms} target="_blank" rel="noreferrer">SBI revised terms</a> · <a href={SOURCES.hdfc} target="_blank" rel="noreferrer">HDFC Millennia terms</a>.
      </footer>
    </main>
    </>
  );
}
