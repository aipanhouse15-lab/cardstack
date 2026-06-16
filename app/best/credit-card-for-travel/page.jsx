import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Travel in India (June 2026)",
  description: "Most travel cards in India advertise miles but never tell you how far those miles actually fly you. Here is the honest number.",
  alternates: { canonical: "/best/credit-card-for-travel" },
  openGraph: {
    title: "Best Credit Card for Travel in India (June 2026)",
    description: "Most travel cards in India advertise miles but never tell you how far those miles actually fly you. Here is the honest number.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-travel
// Updated: June 4, 2026

const COLOR = "#0891b2";
const UPDATED = "June 4, 2026";

// --- SVG Components ---

function MilesVsCashbackChart() {
  return (
    <svg
      viewBox="0 0 680 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bar chart comparing value per ₹100 spent for miles-based vs cashback travel cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="260" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Value per ₹100 Spent: Miles vs Cashback</text>
      {/* Y axis labels */}
      {[0, 1, 2, 3, 4, 5].map((v, i) => (
        <g key={v}>
          <text x="42" y={210 - i * 32} fontSize="11" fill="var(--text-muted)" textAnchor="end">{v}%</text>
          <line x1="48" y1={210 - i * 32} x2="640" y2={210 - i * 32} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4,4" />
        </g>
      ))}
      {/* Bars */}
      {[
        { label: "Axis Atlas\n(Miles)", value: 4.2, x: 80 },
        { label: "Scapia\n(Free)", value: 4.0, x: 190 },
        { label: "Axis Magnus\n(Invite)", value: 4.8, x: 300 },
        { label: "HDFC Tata\nNeu Inf.", value: 3.2, x: 410 },
        { label: "HSBC\nTravelOne", value: 2.8, x: 520 },
      ].map((item) => (
        <g key={item.label}>
          <rect
            x={item.x}
            y={210 - item.value * 32}
            width="60"
            height={item.value * 32}
            rx="4"
            fill={COLOR}
            opacity="0.85"
          />
          <text x={item.x + 30} y={205 - item.value * 32} fontSize="10" textAnchor="middle" fill={COLOR} fontWeight="700">{item.value}%</text>
          {item.label.split("\n").map((line, idx) => (
            <text key={idx} x={item.x + 30} y={225 + idx * 13} fontSize="10" textAnchor="middle" fill="var(--text-muted)">{line}</text>
          ))}
        </g>
      ))}
      <text x="340" y="255" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Estimated redemption value assuming 0.5 paise per mile. Actual value varies by partner and redemption.</text>
    </svg>
  );
}

function AtlasDevaluationTimeline() {
  const events = [
    { year: "Jan 2024", label: "Atlas launched. 5 EDGE Miles/₹100, all 17 partners at 2:1 ratio." },
    { year: "Nov 2024", label: "Milestone bonuses capped. Some users saw lower valuations on Vistara post-Air India merger." },
    { year: "Apr 2026", label: "Devaluation: New partners added at 2:1. Accor, Qatar, Marriott removed. 5 old partners retained at better ratios." },
    { year: "Jun 2026", label: "Current state. EDGE Miles best used on Air India, Singapore Airlines, Marriott (legacy points)." },
  ];
  return (
    <svg
      viewBox="0 0 680 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Timeline of Axis Atlas card devaluation events from 2024 to 2026"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="220" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Axis Atlas: Key Changes Timeline</text>
      <line x1="60" y1="60" x2="620" y2="60" stroke="var(--border)" strokeWidth="2" />
      {events.map((ev, i) => {
        const x = 60 + i * 185;
        return (
          <g key={i}>
            <circle cx={x} cy="60" r="7" fill={i === 3 ? COLOR : "var(--border)"} />
            <text x={x} y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill={COLOR}>{ev.year}</text>
            {ev.label.split(". ").map((line, idx) => (
              <text key={idx} x={x} y={80 + idx * 16} textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function LoungeAccessTable() {
  const rows = [
    { card: "Axis Atlas Silver", domestic: "8/yr", international: "4/yr", fee: "₹5,000" },
    { card: "Axis Atlas Gold", domestic: "12/yr", international: "8/yr", fee: "₹5,000 + spend" },
    { card: "Axis Magnus", domestic: "Unlimited", international: "Unlimited", fee: "₹12,500 (invite)" },
    { card: "Scapia Federal", domestic: "Unlimited*", international: "None", fee: "Free" },
    { card: "HSBC TravelOne", domestic: "4/yr", international: "4/yr", fee: "₹2,999" },
    { card: "HDFC Tata Neu Inf.", domestic: "6/yr", international: "3/yr", fee: "₹1,499" },
  ];
  return (
    <svg
      viewBox="0 0 680 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Table showing lounge access benefits for top Indian travel credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="300" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Lounge Access Comparison (June 2026)</text>
      {/* Header */}
      {["Card", "Domestic", "International", "Annual Fee"].map((h, i) => (
        <text key={h} x={[24, 240, 380, 520][i]} y="52" fontSize="11" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="16" y1="58" x2="664" y2="58" stroke="var(--border)" strokeWidth="1" />
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="16" y={62 + i * 36} width="648" height="35" rx="3" fill={i % 2 === 0 ? "transparent" : "var(--raise)"} opacity="0.6" />
          <text x="24" y={84 + i * 36} fontSize="11" fill="var(--text)">{r.card}</text>
          <text x="240" y={84 + i * 36} fontSize="11" fill="var(--text-muted)">{r.domestic}</text>
          <text x="380" y={84 + i * 36} fontSize="11" fill="var(--text-muted)">{r.international}</text>
          <text x="520" y={84 + i * 36} fontSize="11" fill={COLOR} fontWeight="600">{r.fee}</text>
        </g>
      ))}
      <text x="24" y="292" fontSize="9.5" fill="var(--text-muted)">* Scapia domestic lounge requires ₹20,000/month minimum spend to activate free access.</text>
    </svg>
  );
}

function TravelCardDecisionFlow() {
  return (
    <svg
      viewBox="0 0 680 380"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision flowchart to choose the right travel credit card based on travel frequency and spending"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="380" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Which Travel Card Is Right for You?</text>
      {/* Start */}
      <rect x="240" y="44" width="200" height="38" rx="8" fill={COLOR} />
      <text x="340" y="66" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="600">How often do you fly?</text>
      {/* Branch 1 */}
      <line x1="240" y1="63" x2="120" y2="130" stroke="var(--border)" strokeWidth="1.5" />
      <text x="150" y="120" fontSize="10" fill="var(--text-muted)">Less than 4x/year</text>
      <rect x="40" y="130" width="160" height="36" rx="7" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.2" />
      <text x="120" y="152" textAnchor="middle" fontSize="11" fill="var(--text)">Scapia Federal</text>
      <text x="120" y="166" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(Free, zero forex)</text>
      {/* Branch 2 */}
      <line x1="440" y1="63" x2="560" y2="130" stroke="var(--border)" strokeWidth="1.5" />
      <text x="500" y="120" fontSize="10" fill="var(--text-muted)">6 or more times/year</text>
      <rect x="480" y="130" width="160" height="36" rx="7" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="1.2" />
      <text x="560" y="152" textAnchor="middle" fontSize="11" fill="var(--text)">Axis Magnus</text>
      <text x="560" y="166" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(Invite-only, ₹12,500)</text>
      {/* Middle branch */}
      <line x1="340" y1="82" x2="340" y2="130" stroke="var(--border)" strokeWidth="1.5" />
      <text x="340" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">4-6x / year</text>
      <rect x="240" y="130" width="200" height="38" rx="8" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.2" />
      <text x="340" y="153" textAnchor="middle" fontSize="12" fill="var(--text)" fontWeight="600">Do you fly Air India primarily?</text>
      {/* Sub-branch Air India yes */}
      <line x1="265" y1="168" x2="175" y2="228" stroke="var(--border)" strokeWidth="1.5" />
      <text x="188" y="220" fontSize="10" fill="var(--text-muted)">Yes, Air India</text>
      <rect x="80" y="228" width="185" height="36" rx="7" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.2" />
      <text x="172" y="248" textAnchor="middle" fontSize="11" fill="var(--text)">HDFC Tata Neu Infinity</text>
      <text x="172" y="262" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(₹1,499/yr, 10% NeuCoins)</text>
      {/* Sub-branch no Air India */}
      <line x1="415" y1="168" x2="490" y2="228" stroke="var(--border)" strokeWidth="1.5" />
      <text x="455" y="220" fontSize="10" fill="var(--text-muted)">Multiple airlines</text>
      <rect x="410" y="228" width="185" height="36" rx="7" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="1.2" />
      <text x="502" y="248" textAnchor="middle" fontSize="11" fill="var(--text)">Axis Atlas</text>
      <text x="502" y="262" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(₹5,000/yr, 17 partners)</text>
      {/* Bottom note */}
      <text x="340" y="320" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Not invited to Magnus? Axis Atlas is the next best step.</text>
      <text x="340" y="338" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Flying less than 4x/yr? Miles rarely beat simple cashback.</text>
      <rect x="80" y="348" width="520" height="22" rx="4" fill={COLOR} opacity="0.07" />
      <text x="340" y="363" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="600">Note: All annual fee cards assume spend justifies the fee. Run the math below.</text>
    </svg>
  );
}

function MilesValueCalculator() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Reference table showing break-even spend for Axis Atlas card to justify the annual fee"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Axis Atlas: Does the ₹5,000 Fee Pay Off?</text>
      {[
        { spend: "₹50,000/mo", miles: "12,000 EDGE Miles/yr", value: "~₹4,800", verdict: "Borderline — barely covers fee" },
        { spend: "₹1,00,000/mo", miles: "24,000 EDGE Miles/yr", value: "~₹9,600", verdict: "Good — 1.9x return on fee" },
        { spend: "₹2,00,000/mo", miles: "48,000 EDGE Miles/yr", value: "~₹19,200", verdict: "Excellent — 3.8x return on fee" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="16" y={48 + i * 44} width="648" height="40" rx="5" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.06" : "1"} />
          <text x="30" y={73 + i * 44} fontSize="11" fontWeight="600" fill="var(--text)">{r.spend}</text>
          <text x="180" y={73 + i * 44} fontSize="11" fill="var(--text-muted)">{r.miles}</text>
          <text x="380" y={73 + i * 44} fontSize="11" fill={COLOR} fontWeight="600">{r.value}</text>
          <text x="490" y={73 + i * 44} fontSize="10" fill="var(--text-muted)">{r.verdict}</text>
        </g>
      ))}
      <text x="340" y="188" textAnchor="middle" fontSize="9.5" fill="var(--text-muted)">Assumes 0.40 paise/EDGE Mile (conservative post-April 2026). Premium airline redemptions can yield 0.70-0.90 paise.</text>
    </svg>
  );
}

export default function BestCreditCardForTravel() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best travel credit card in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis Atlas is the best mid-tier travel credit card for most Indians in June 2026. It offers 5 EDGE Miles per ₹100 on travel and 2 EDGE Miles on other spends, with 17 airline and hotel transfer partners. If you want a free option, Scapia Federal Card (co-issued with Federal Bank) gives 4% on travel bookings via the Scapia app, zero forex markup, and unlimited domestic lounge access with ₹20,000/month spend.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to Axis Atlas after the April 2026 devaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In April 2026, Axis Bank removed some transfer partners including Accor, Qatar Airways, and Marriott from the EDGE Miles transfer program. New partners were added but at a 2:1 ratio instead of the earlier 1:1 or 2:1 rates. Five legacy partners still offer competitive ratios. The card remains valuable if you redeem on Air India, Singapore Airlines, or the retained partners.",
        },
      },
      {
        "@type": "Question",
        name: "Is it worth getting a travel card if I fly only 2-3 times a year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Probably not. If you fly 2-3 times per year, miles-based cards rarely deliver more value than a simple cashback card. The Scapia Federal Card is free and still gives you lounge access and zero forex — that is a better deal than paying ₹5,000 per year for Axis Atlas if your travel spend is low.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Axis Atlas fee waiver condition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis Atlas does not offer a traditional annual fee waiver. The ₹5,000 annual fee is charged every year regardless of spend. The card moves you from Silver to Gold tier when you spend ₹7.5 lakh in a card year, which unlocks more lounge access and higher milestone bonuses.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use travel credit card miles to book domestic flights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Axis EDGE Miles can be transferred to IndiGo BluChip or Air India Flying Returns to book domestic flights. The value per mile on domestic redemptions is typically lower than international premium cabin redemptions. For domestic-only travelers, the Scapia app's 4% direct discount often beats mile redemption math.",
        },
      },
      {
        "@type": "Question",
        name: "Does Scapia Federal Card really give unlimited domestic lounge access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but with a condition. From February 2026, Scapia requires a minimum spend of ₹20,000 per month to activate unlimited domestic lounge access for that month. If you spend less than ₹20,000 in a given month, lounge access is not available for that month.",
        },
      },
      {
        "@type": "Question",
        name: "What is EDGE Miles and how do I redeem them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EDGE Miles are Axis Bank's reward currency for premium cards including Atlas and Magnus. You redeem them through the EDGE Rewards portal or the Axis mobile app. You can transfer EDGE Miles to airline frequent flyer programs or hotel loyalty programs, or redeem against statement balance at a lower rate. Transfer to airline programs gives the best value.",
        },
      },
      {
        "@type": "Question",
        name: "Is Axis Magnus worth it in 2026 after the devaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis Magnus is still excellent if you travel frequently and can get an invite. Unlimited Priority Pass lounge access alone is worth ₹12,500 annually for heavy travelers. The April 2026 devaluation hurt but did not kill the card. The problem is it is invite-only and you cannot simply apply for it.",
        },
      },
      {
        "@type": "Question",
        name: "Which travel card is best for domestic hotel bookings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Tata Neu Infinity earns 10% NeuCoins on Tata-owned hotels through NeuPass. If you stay at Taj, SeleQtions, or Vivanta hotels, this card gives exceptional return. For general hotel chains, Axis Atlas transfers to Marriott Bonvoy or IHG at competitive rates.",
        },
      },
      {
        "@type": "Question",
        name: "Does Axis Atlas have a forex markup fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Axis Atlas charges a 3.5% foreign currency transaction fee (forex markup). This makes it a poor choice for international spending. If you travel internationally and want a travel card, pair Atlas for airline miles with a zero-forex card like IDFC FIRST WOW or Scapia for your international purchases.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Travel in India (June 2026): Axis Atlas, Scapia, Magnus Compared",
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
        name: "Best Credit Card for Travel",
        item: "https://assurefintech.com/best/credit-card-for-travel",
      },
    ],
  };

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "44px 22px 88px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "var(--text)",
        lineHeight: 1.65,
      }}
    >
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Travel
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
        Travel Cards
      </div>

      <h1 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14, color: "var(--text)" }}>
        Best Credit Card for Travel in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Most travel cards in India advertise miles but never tell you how far those miles actually fly you. Here is the honest number.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 32 }}>
        Last updated {UPDATED} · By Ash K · 9 min read
      </div>

      {/* Quick Picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Our Top Picks at a Glance</h2>

        {[
          {
            rank: "1",
            name: "Axis Atlas",
            tag: "Best Mid-Tier Travel Card",
            fee: "₹5,000/yr",
            reward: "5 EDGE Miles/₹100 on travel",
            best: "Frequent flyers who use multiple airlines",
            slug: "axis-atlas",
          },
          {
            rank: "2",
            name: "Scapia Federal Card",
            tag: "Best Free Travel Card",
            fee: "Free",
            reward: "4% on Scapia app travel bookings",
            best: "Budget travelers, zero forex needed",
            slug: "scapia-federal",
          },
          {
            rank: "3",
            name: "HDFC Tata Neu Infinity",
            tag: "Best for Air India Flyers",
            fee: "₹1,499/yr",
            reward: "10% NeuCoins on Tata brands",
            best: "Loyal Air India or Tata Hotels customers",
            slug: "hdfc-tata-neu-infinity",
          },
          {
            rank: "4",
            name: "Axis Magnus",
            tag: "Best Premium Travel Card (Invite Only)",
            fee: "₹12,500/yr",
            reward: "Unlimited Priority Pass lounge",
            best: "Heavy business travelers with invite",
            slug: "axis-magnus",
          },
          {
            rank: "5",
            name: "HSBC TravelOne",
            tag: "Best Simple Points Card",
            fee: "₹2,999/yr",
            reward: "Transferable points, 8 lounge visits",
            best: "Travelers wanting simplicity over optimization",
            slug: "hsbc-travelone",
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
                background: COLOR,
                color: "#fff",
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
                <span
                  style={{
                    background: COLOR + "18",
                    color: COLOR,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  {card.tag}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
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

      <MilesVsCashbackChart />

      {/* Section 1: The miles question */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Do You Actually Need a Miles Card?
        </h2>
        <p>
          The Indian travel card market has a dirty little secret: miles cards are only worth their annual fee if you fly more than 4 times a year and actively optimize your redemptions. If you fly twice a year for family vacations and book on MakeMyTrip, a flat cashback card like Axis ACE or Amazon Pay ICICI will likely give you more money back.
        </p>
        <p>
          The math is not complicated. Axis Atlas charges ₹5,000 per year. To recover that fee at 0.40 paise per EDGE Mile, you need to earn at least 12,500 EDGE Miles before you start generating net positive value. That requires roughly ₹2.5 lakh of travel spend on the card or ₹6.25 lakh of general spend.
        </p>
        <p>
          The sweet spot for Atlas is someone spending ₹80,000 to ₹1.5 lakh per month who books flights and hotels directly rather than through aggregators. For everyone else, the chart above shows Scapia Federal delivers comparable value for zero rupees annually.
        </p>
        <p>
          Read our detailed breakdown: <Link href="/blog/miles-vs-cashback-india-2026">Miles vs Cashback in India 2026</Link> — we ran the math for 6 spending profiles.
        </p>
      </section>

      {/* Section 2: Axis Atlas post-devaluation */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Axis Atlas After the April 2026 Devaluation
        </h2>
        <p>
          Axis Bank restructured the EDGE Miles transfer program in April 2026. The headline change: several premium partners including Accor Hotels, Qatar Airways, and Marriott Bonvoy were removed from the transfer list. New partners were added but at a 2:1 ratio, meaning 2 EDGE Miles get you 1 partner mile.
        </p>
        <p>
          The legacy partners that survived the devaluation with better ratios include Air India Flying Returns, Singapore Airlines KrisFlyer, and IndiGo BluChip. If you primarily use these airlines, Atlas is still a very strong card. The 5 EDGE Miles per ₹100 on travel (capped at ₹2 lakh per month) is a rate no other mid-tier card currently matches.
        </p>
        <p>
          What changed practically: users who were transferring to Marriott for hotel stays lost their best hotel redemption option. The workaround is to use Atlas miles for airline redemptions and book hotels with a separate cashback card. That two-card strategy outperforms any single card for most profiles.
        </p>
        <AtlasDevaluationTimeline />
        <p>
          Check the current partner list on the Axis EDGE Rewards portal before transferring miles. Partner ratios and availability can change without prominent notice. See our updated guide: <Link href="/blog/axis-atlas-edge-miles-partners-2026">Axis Atlas Partner List June 2026</Link>.
        </p>
      </section>

      {/* Section 3: Lounge access */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Lounge Access: What the Numbers Actually Mean
        </h2>
        <p>
          Travel card marketing loves to feature lounge access prominently. But "8 complimentary international lounge visits" only matters if you travel internationally 8 or more times a year. Most Indian travelers take 1-3 international trips annually, making unlimited domestic lounge access more practically valuable.
        </p>
        <p>
          Axis Atlas has a tier system. You start at Silver (4 international, 8 domestic visits per year) and upgrade to Gold after spending ₹7.5 lakh in a card year. Gold gives you 8 international and 12 domestic visits. Axis Magnus gives unlimited access on Priority Pass but is invite-only and costs ₹12,500 per year.
        </p>
        <LoungeAccessTable />
        <p>
          Scapia Federal's unlimited domestic lounge access is technically the best deal in this comparison, but the ₹20,000/month spend requirement is a meaningful hurdle. If your monthly spend drops below that threshold, you lose access for that month with no partial credit.
        </p>
      </section>

      {/* Section 4: International travel strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          International Travel Strategy: The Two-Card Rule
        </h2>
        <p>
          None of the top miles cards in India have zero forex markup. Axis Atlas charges 3.5% foreign currency markup. Axis Magnus charges 3.5%. HDFC Tata Neu Infinity charges 3.5%. The miles you earn abroad do not offset this markup for most redemption patterns.
        </p>
        <p>
          The smartest strategy is to carry two cards on international trips: a miles card like Atlas for booking flights and hotels before you travel, and a zero-forex card like Scapia Federal or IDFC FIRST WOW for all in-country spending abroad. This approach captures both the miles on large pre-trip purchases and avoids forex fees on daily international expenses.
        </p>
        <p>
          Use our <Link href="/stack-builder">Stack Builder tool</Link> to model this two-card approach against your actual spending to see the annual return difference.
        </p>
      </section>

      {/* Section 5: Scapia vs premium */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          When Scapia Beats Premium Cards
        </h2>
        <p>
          The Scapia Federal Card is the most underrated card in this list. It is free. It charges zero forex markup on international transactions. It gives 4% on travel booked through the Scapia app (down from 5% after the February 2026 update). It offers unlimited domestic lounge access with the spend condition.
        </p>
        <p>
          For someone spending ₹30,000 to ₹50,000 per month, with 3-4 domestic flights per year and 1 international trip, Scapia outperforms Axis Atlas on net annual return because the ₹5,000 fee is not recovered. Add the zero forex advantage and the domestic lounge access, and Scapia is clearly the better card for this profile.
        </p>
        <p>
          Scapia's limitation is the booking dependency: to get the 4%, you have to use the Scapia app for travel booking, which is powered by Ixigo. Flight and hotel inventory is comparable to major OTAs but occasionally prices can differ. Always do a quick price check before committing to a Scapia booking.
        </p>
      </section>

      <MilesValueCalculator />
      <TravelCardDecisionFlow />

      {/* What to do */}
      <section
        style={{
          background: COLOR + "10",
          border: `1px solid ${COLOR}30`,
          borderRadius: 10,
          padding: "22px 24px",
          marginBottom: 40,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>What to Do Right Now</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Count your actual flights in the last 12 months.</strong> If it is under 4, skip miles cards for now.
          </li>
          <li>
            <strong>If you fly 4 or more times:</strong> Apply for Axis Atlas. Activate EDGE Miles. Set a calendar reminder to check partner ratios before transferring.
          </li>
          <li>
            <strong>If you want free:</strong> Get Scapia Federal. Ensure you can hit ₹20K/month spend for lounge activation.
          </li>
          <li>
            <strong>For international trips:</strong> Pair Atlas (or any miles card) with IDFC FIRST WOW or Scapia for in-country spending. Do not use a 3.5% forex card for daily abroad expenses.
          </li>
          <li>
            <strong>Never transfer miles in bulk without checking current partner valuations</strong> on the Axis EDGE portal. Rates change without announcement.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Want a personalized recommendation? Use our <Link href="/smart-swipe">Smart Swipe tool</Link> — input your spend and travel pattern, get a stack recommendation in 90 seconds.
        </p>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Frequently Asked Questions</h2>
        {faq.mainEntity.map((item, i) => (
          <details
            key={i}
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: 16,
              marginBottom: 16,
            }}
          >
            <summary
              style={{
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                paddingTop: 4,
                color: "var(--text)",
              }}
            >
              {item.name}
            </summary>
            <p style={{ marginTop: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
              {item.acceptedAnswer.text}
            </p>
          </details>
        ))}
      </section>

      {/* Related */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Related Reading</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            <Link href="/best/credit-card-for-international-spending">Best Credit Card for International Spending</Link>
          </li>
          <li>
            <Link href="/blog/axis-atlas-vs-magnus-2026">Axis Atlas vs Axis Magnus: Which Is Worth It?</Link>
          </li>
          <li>
            <Link href="/blog/scapia-federal-card-review-2026">Scapia Federal Card Full Review 2026</Link>
          </li>
          <li>
            <Link href="/cards/axis-atlas">Axis Atlas Card Full Details, Rewards, Apply</Link>
          </li>
          <li>
            <Link href="/stack-builder">Build Your Card Stack</Link>
          </li>
        </ul>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          fontSize: 12,
          color: "var(--text-muted)",
          lineHeight: 1.7,
        }}
      >
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial site. We do not have a banking license and do not provide financial advice regulated under SEBI or RBI guidelines. Card terms, rewards rates, and partner lists change frequently. Verify all details with the issuing bank before applying. Some links on this page may earn us a referral fee, which does not influence our rankings or editorial opinions.
      </footer>
    </main>
  );
}
