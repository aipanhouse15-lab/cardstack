import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for International Spending in India (September 2026 Review)",
  description: "Compare international credit cards by foreign-currency fees, eligibility, rewards exclusions and the total cost of overseas use.",
  alternates: { canonical: "/best/credit-card-for-international-spending" },
  openGraph: {
    title: "Best Credit Card for International Spending in India (September 2026 Review)",
    description: "Compare international credit cards by foreign-currency fees, eligibility, rewards exclusions and the total cost of overseas use.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-international-spending
// Reviewed: September 26, 2026; originally published June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "September 26, 2026";

// --- SVG Components ---

function ForexMarkupExplainer() {
  return (
    <svg
      viewBox="0 0 680 318"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative calculation of a 3.5 percent foreign-currency markup fee before tax and network conversion"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="230" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Illustrative Cost of a 3.5% Foreign-Currency Fee</text>
      {[
        { label: "₹50,000 abroad", at35: "₹1,750", atZero: "₹0", saved: "₹1,750" },
        { label: "₹1,00,000 abroad", at35: "₹3,500", atZero: "₹0", saved: "₹3,500" },
        { label: "₹3,00,000 abroad", at35: "₹10,500", atZero: "₹0", saved: "₹10,500" },
        { label: "₹5,00,000 abroad", at35: "₹17,500", atZero: "₹0", saved: "₹17,500" },
      ].map((r, i) => (
        <g key={i}>
          <text x="30" y={70 + i * 38} fontSize="12" fontWeight="600" fill="var(--text)">{r.label}</text>
          <rect x="210" y={54 + i * 38} width="120" height="22" rx="4" fill="var(--raise)" opacity="0.15" />
          <text x="270" y={70 + i * 38} textAnchor="middle" fontSize="12" fill="#ef4444" fontWeight="700">{r.at35}</text>
          <rect x="350" y={54 + i * 38} width="120" height="22" rx="4" fill="#22c55e" opacity="0.15" />
          <text x="410" y={70 + i * 38} textAnchor="middle" fontSize="12" fill="#22c55e" fontWeight="700">{r.atZero}</text>
          <text x="520" y={70 + i * 38} fontSize="12" fill={COLOR} fontWeight="700">Save {r.saved}</text>
        </g>
      ))}
      <text x="270" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">Example Card (3.5%)</text>
      <text x="410" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="#22c55e">Example Card (0%)</text>
      <text x="340" y="220" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Illustration only: excludes GST on fees, network conversion-rate differences, DCC and other charges.</text>
    </svg>
  );
}

function CardSegmentTable() {
  const segments = [
    { segment: "FD-backed option", card: "IDFC FIRST WOW", forex: "0%*", fee: "Lifetime free*", why: "Secured against a fixed deposit; check current FD terms" },
    { segment: "App-based option", card: "Scapia Federal", forex: "0%*", fee: "No joining/annual fee*", why: "International transactions do not earn rewards under terms" },
    { segment: "Miles card", card: "Axis Atlas", forex: "3.5%*", fee: "₹5,000 + GST/yr*", why: "Check foreign fee, taxes and eligible reward terms" },
  ];
  return (
    <svg
      viewBox="0 0 680 286"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Examples of international credit cards with fees and important eligibility conditions to verify"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="250" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Examples to Compare (Not a Ranking)</text>
      {["Traveler Type", "Card", "Forex", "Fee", "Why"].map((h, i) => (
        <text key={h} x={[20, 175, 335, 400, 480][i]} y="48" fontSize="10.5" fontWeight="700" fill="var(--text)">{h}</text>
      ))}
      <line x1="12" y1="54" x2="668" y2="54" stroke="var(--border)" strokeWidth="1" />
      {segments.map((r, i) => (
        <g key={i}>
          <rect x="12" y={58 + i * 44} width="656" height="42" rx="3" fill={i % 2 === 0 ? COLOR : "transparent"} opacity={i % 2 === 0 ? "0.04" : "1"} />
          <text x="20" y={84 + i * 44} fontSize="10.5" fill="var(--text)">{r.segment}</text>
          <text x="175" y={84 + i * 44} fontSize="10.5" fontWeight="600" fill={COLOR}>{r.card}</text>
          <text x="335" y={84 + i * 44} fontSize="10.5" fill={r.forex.startsWith("0%") ? "#22c55e" : "#ef4444"} fontWeight="700">{r.forex}</text>
          <text x="400" y={84 + i * 44} fontSize="10.5" fill="var(--text-muted)">{r.fee}</text>
          <text x="480" y={84 + i * 44} fontSize="9.5" fill="var(--text-muted)">{r.why}</text>
        </g>
      ))}
    </svg>
  );
}

function DCCWarningDiagram() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram explaining Dynamic Currency Conversion trap and how to avoid it abroad"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="200" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">The DCC Trap: Always Pay in Local Currency</text>
      {/* DCC path */}
      <rect x="20" y="50" width="150" height="50" rx="8" fill="var(--raise)" opacity="0.12" stroke="#ef4444" strokeWidth="1.2" />
      <text x="95" y="71" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ef4444">Pay in INR</text>
      <text x="95" y="87" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(DCC chosen)</text>
      <text x="198" y="79" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="215" y="50" width="170" height="50" rx="8" fill="var(--raise)" opacity="0.22" />
      <text x="300" y="71" textAnchor="middle" fontSize="10.5" fill="var(--text)">Merchant converts at</text>
          <text x="300" y="85" textAnchor="middle" fontSize="10.5" fill="#ef4444" fontWeight="700">their rate / fee may apply</text>
      <text x="402" y="79" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="420" y="50" width="240" height="50" rx="8" fill="var(--raise)" opacity="0.12" stroke="#ef4444" strokeWidth="1.2" />
      <text x="540" y="71" textAnchor="middle" fontSize="10.5" fill="#ef4444" fontWeight="700">You pay the offered INR amount</text>
      <text x="540" y="85" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Issuer DCC/other fees may still apply</text>
      {/* Good path */}
      <rect x="20" y="130" width="150" height="50" rx="8" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.2" />
      <text x="95" y="151" textAnchor="middle" fontSize="11" fontWeight="700" fill="#22c55e">Pay in local currency</text>
      <text x="95" y="167" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(correct choice)</text>
      <text x="198" y="159" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="215" y="130" width="170" height="50" rx="8" fill="#22c55e" opacity="0.22" />
      <text x="300" y="151" textAnchor="middle" fontSize="10.5" fill="var(--text)">Your bank converts at</text>
      <text x="300" y="165" textAnchor="middle" fontSize="10.5" fill="#22c55e" fontWeight="700">network rate + issuer fees, if any</text>
      <text x="402" y="159" fontSize="20" fill="var(--text-muted)">→</text>
      <rect x="420" y="130" width="240" height="50" rx="8" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.2" />
      <text x="540" y="151" textAnchor="middle" fontSize="10.5" fill="#22c55e" fontWeight="700">Compare final card terms</text>
      <text x="540" y="165" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Zero markup does not remove every cost</text>
    </svg>
  );
}

function ZeroForexComparisonChart() {
  return (
    <svg
      viewBox="0 0 680 242"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comparison chart of forex markup rates across major Indian credit cards"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="220" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Examples of Issuer-Published Foreign-Currency Markup</text>
      {[
        { card: "IDFC FIRST WOW", markup: 0, label: "0%*" },
        { card: "Scapia Federal", markup: 0, label: "0%*" },
        { card: "Axis Atlas", markup: 3.5, label: "3.5%*" },
      ].map((item, i) => {
        const barWidth = item.markup === 0 ? 4 : (item.markup / 3.5) * 300;
        const barColor = item.markup === 0 ? "#22c55e" : item.markup <= 1 ? "#f59e0b" : "#ef4444";
        return (
          <g key={i}>
            <text x="170" y={66 + i * 26} fontSize="11" textAnchor="end" fill="var(--text)">{item.card}</text>
            <rect x="178" y={52 + i * 26} width={barWidth || 6} height="18" rx="3" fill={barColor} opacity="0.85" />
            <text x={184 + barWidth} y={66 + i * 26} fontSize="11" fontWeight="700" fill={barColor}>{item.label}</text>
          </g>
        );
      })}
      <text x="340" y="208" textAnchor="middle" fontSize="10" fill="var(--text-muted)">*Current issuer terms apply. Zero markup does not remove network conversion, taxes, DCC or ATM/operator charges.</text>
    </svg>
  );
}

function ATMVsCardChart() {
  return (
    <svg
      viewBox="0 0 680 262"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cost comparison of withdrawing cash at ATM abroad vs paying directly with card"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="180" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Check These Separate Costs Before Paying or Withdrawing</text>
      {[
        { method: "Cash advance", cost: "Issuer fee + interest + ATM operator charge may apply", verdict: "Check fees" },
        { method: "Purchase transaction", cost: "Issuer FX fee + network conversion + tax may apply", verdict: "Check fees" },
        { method: "Zero-markup purchase", cost: "No issuer FX markup under stated terms; other costs may remain", verdict: "Not fee-free" },
        { method: "DCC in INR", cost: "Merchant/ATM conversion rate and charges may apply", verdict: "Review choice" },
      ].map((r, i) => (
        <g key={i}>
          <text x="20" y={62 + i * 30} fontSize="11" fontWeight="600" fill="var(--text)">{r.method}</text>
          <text x="210" y={62 + i * 30} fontSize="10.5" fill="var(--text-muted)">{r.cost}</text>
          <rect x="595" y={48 + i * 30} width="72" height="20" rx="4" fill={i >= 2 ? "#22c55e" : "#ef4444"} opacity="0.15" />
          <text x="631" y={62 + i * 30} textAnchor="middle" fontSize="10" fontWeight="700" fill={i >= 2 ? "#22c55e" : "#ef4444"}>{r.verdict}</text>
        </g>
      ))}
      <text x="340" y="170" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Check your issuer’s fees and avoid cash advances unless necessary; ATM/operator fees vary.</text>
    </svg>
  );
}

export default function BestCreditCardForInternationalSpending() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card has zero forex markup in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Examples whose issuers currently advertise zero foreign-currency markup include IDFC FIRST WOW and Federal Bank Scapia. Availability and fees can change; verify the exact card variant, current schedule of charges, taxes, DCC treatment and other terms before applying or travelling. This is not an exhaustive list.",
        },
      },
      {
        "@type": "Question",
        name: "What is forex markup on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foreign-currency markup is a fee an issuer may charge on foreign-currency transactions. The rate varies by card and may attract applicable taxes; card-network conversion rates and dynamic currency conversion are separate considerations. Check your card’s schedule of charges. A zero-markup feature does not mean every conversion or transaction is cost-free.",
        },
      },
      {
        "@type": "Question",
        name: "Is IDFC FIRST WOW really free with zero forex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IDFC FIRST Bank describes FIRST WOW as a lifetime-free, fixed-deposit-backed card with zero forex markup. The fixed deposit secures the card and is subject to the bank’s terms; review the current minimum FD, lien, reward and fee conditions before applying.",
        },
      },
      {
        "@type": "Question",
        name: "What is DCC or Dynamic Currency Conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DCC is when a merchant or ATM offers to bill you in your home currency rather than local currency. Review both amounts, the exchange rate and any additional fees shown. If you do not want the merchant’s conversion, decline it and choose local currency; Visa advises declining when required details are missing or you feel pressured. Your issuer’s terms still apply.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use my Indian credit card at ATMs abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some cards permit overseas ATM withdrawals, but cash-advance fees, interest, foreign-currency fees and ATM-operator charges may apply. The amounts and when interest begins depend on the card. Check your issuer’s schedule before withdrawing; purchases and cash advances are charged differently.",
        },
      },
      {
        "@type": "Question",
        name: "Does Scapia Federal Card work in all countries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Federal Bank advertises zero forex markup on Scapia international transactions. Acceptance depends on the card network, merchant, country and issuer controls. Scapia’s current site describes rewards in Scapia Coins, but its card terms exclude foreign-currency transactions from rewards; app offers have separate eligibility and can change.",
        },
      },
      {
        "@type": "Question",
        name: "How should I decide whether a premium card is worth its fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Compare the annual fee and taxes with rewards you can actually earn and redeem, foreign-currency charges, exclusions and lounge benefits you would otherwise pay for. Verify the exact card variant’s current terms; do not assume premium status means zero forex or a guaranteed positive return.",
        },
      },
      {
        "@type": "Question",
        name: "What if I lose my card abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consider carrying a backup payment method and store it separately from your primary card. Turn on international usage only as needed, check transaction controls and contact details, and follow your issuer’s guidance for travel and lost-card reporting. Replacement availability and timing vary by issuer and destination.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for International Spending in India (September 2026 Review)",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
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
        name: "Best Credit Card for International Spending",
        item: "https://assurefintech.com/best/credit-card-for-international-spending",
      },
    ],
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
            Best Credit Card for International Spending in India (September 2026 Review)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
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
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for International Spending
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
        International Cards
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
          Compare the card’s foreign-currency fee, conversion rate, taxes, cash-advance charges and any dynamic currency conversion offer before using it abroad.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <ForexMarkupExplainer />

      {/* Section 1: What is forex markup */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          What Is a Foreign-Currency Markup?
        </h2>
        <p>
          When you pay in a foreign currency, the transaction is converted under the card network and issuer’s processes. Your card may add a foreign-currency markup and applicable taxes; an ATM or merchant may also offer a separate currency conversion.
        </p>
        <p>
          For example, a 3.5% markup on ₹1 lakh would be ₹3,500 before applicable tax. The actual bill depends on the issuer’s fee, tax, network rate and transaction currency. Check your card’s current fee schedule rather than assuming a market-wide rate.
        </p>
        <p>
          Some issuers advertise zero markup for particular card variants. This can reduce one fee but does not guarantee zero total currency-conversion cost, waive ATM charges, or make a secured card unsecured. Review the exact card terms and any linked deposit requirement.
        </p>
      </section>

      <ZeroForexComparisonChart />

      {/* Top picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Examples to Compare for International Use</h2>

        {[
          {
            rank: "•",
            name: "IDFC FIRST WOW",
            tag: "FD-backed option",
            fee: "No joining/annual fee (verify current terms)",
            forex: "0%*",
            reward: "Review eligible domestic rewards and exclusions",
            best: "Applicants comfortable placing a fixed deposit as security",
            slug: "idfc-first-wow",
          },
          {
            rank: "•",
            name: "Scapia Federal Card",
            tag: "No joining/annual fee per current issuer page",
            fee: "No joining/annual fee*",
            forex: "0%*",
            reward: "10% Scapia Coins on eligible non-forex Visa spend; 5 coins = ₹1; exclusions apply",
            best: "People who want no forex markup and accept app-based terms",
            slug: "scapia-federal",
          },
        ].map((card) => (
          <div
            key={card.name}
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
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Fee:</span> {card.fee} |{" "}
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Forex:</span>{" "}
                  <span style={{ color: card.forex.startsWith("0%") ? "#22c55e" : card.forex.startsWith("1%") ? "#f59e0b" : "#ef4444", fontWeight: 700 }}>
                  {card.forex}
                </span>{" "}
                | <span style={{ fontWeight: 600, color: "var(--text)" }}>Reward:</span> {card.reward}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>Best for:</span> {card.best}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CardSegmentTable />
      <p style={{ marginTop: -18, marginBottom: 32, fontSize: 12, color: "var(--text-muted)" }}>*Issuer-published headline terms; card eligibility, taxes, other fees, reward exclusions and conditions apply. This is not a ranking.</p>

      {/* Section 2: IDFC WOW deep dive */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          IDFC FIRST WOW: The Quiet Hero of International Cards
        </h2>
        <p>
          IDFC FIRST Bank describes WOW as a fixed-deposit-backed, lifetime-free card with zero forex markup. Because it is secured against an FD, it is not equivalent to an unsecured no-fee card: check the current minimum deposit, lien, credit limit and account conditions before applying.
        </p>
        <p>
          Zero markup can remove the issuer’s stated foreign-currency markup, but it does not fix the network exchange rate or remove taxes and third-party charges that may apply. Compare the total cost and keep a separate domestic-spend comparison if rewards are important to you.
        </p>
        <p>
          Do not choose the card based on reward expiry or value without reviewing the latest IDFC reward programme terms; reward rules may be revised separately from foreign-currency fees.
        </p>
      </section>

      {/* Section 3: DCC trap */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The DCC Trap: A Fee That Catches Even Experienced Travelers
        </h2>
        <p>
          Dynamic Currency Conversion (DCC) is when a foreign merchant or ATM offers to convert the transaction into Indian rupees at checkout. The provider should display both amounts, the rate and additional charges and give you a choice. Compare what is shown; the home-currency option can include its own conversion markup or fee.
        </p>
        <p>
          DCC pricing and the issuer’s treatment vary. Do not assume the merchant’s offered conversion is cheaper or that the issuer will treat it like a foreign-currency transaction. Visa advises declining when the required details are missing or you feel pressured; choosing local currency generally lets the card-network/issuer conversion apply under your card terms.
        </p>
        <DCCWarningDiagram />
        <p>
          If you do not want DCC, choose local currency or decline the conversion. Check the displayed currency before authorizing the payment and keep the receipt. If a conversion was applied without your active choice, contact your issuer and card network.
        </p>
      </section>

      {/* Section 4: ATM abroad */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          ATM Abroad: When to Use It, When to Avoid It
        </h2>
        <p>
          Cash may be needed in some destinations, but a credit-card cash advance is different from a purchase and may incur issuer fees and interest as well as an ATM-operator charge. Check your card’s terms before using an overseas ATM.
        </p>
        <p>
          There is no single fee schedule across Indian cards. Some issuers charge a cash-advance fee, interest may begin immediately, and ATM owners can set their own fees. A zero forex-markup feature does not mean an ATM withdrawal is free.
        </p>
        <ATMVsCardChart />
        <p>
          Avoid cash advances unless needed. Before withdrawing, check the cash limit, issuer fee, interest start date and local ATM charge. Do not withdraw more cash than you can safely carry just to reduce a per-transaction charge.
        </p>
      </section>

      {/* Section 5: The two-card strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          The Two-Card International Strategy
        </h2>
        <p>
          A backup card may help with acceptance or loss, but carrying two cards does not guarantee better rewards or lower costs. Compare the actual terms and only use a card’s accelerated category when the transaction qualifies.
        </p>
        <p>
          For example, Axis Atlas’s accelerated travel earn is limited to eligible Travel EDGE, direct airline and direct hotel transactions and has a monthly cap; an OTA booking receives the base earn under its terms. Scapia and IDFC FIRST WOW advertise zero markup, but check taxes, network conversion, rewards eligibility and merchant acceptance for each transaction.
        </p>
        <p>
          Use our <Link href="/stack-builder">Stack Builder</Link> to model this combination against your actual travel budget and spending pattern. The tool calculates net annual return including fees paid and rewards earned.
        </p>
        <p>
          Also read: <Link href="/blog/international-spending-card-strategy-india">Complete International Card Strategy for Indian Travelers</Link> and <Link href="/best/credit-card-for-travel">Best Travel Credit Cards India 2026</Link> for the miles card side of this equation.
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
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>What to Do Before Your Next International Trip</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 15 }}>
          <li>
            <strong>Compare the exact card variant and its application conditions.</strong> IDFC FIRST WOW is FD-backed; Scapia’s issuer currently lists no joining or annual fee. Approval and eligibility still apply.
          </li>
          <li>
            <strong>Review international-use controls</strong> in your bank app before departing; enable only what you need and check limits and authentication.
          </li>
          <li>
            <strong>Review any DCC offer.</strong> Check the displayed rate and fees; if you do not want the merchant conversion, choose local currency.
          </li>
          <li>
            <strong>Check ATM cash-advance fees and interest</strong> before using a credit card to withdraw cash.
          </li>
          <li>
            <strong>Carry two cards on every trip.</strong> One zero-forex card for spending and one backup in a separate bag or hotel safe.
          </li>
          <li>
            <strong>Do not assume a premium card pays for itself.</strong> Compare its current foreign transaction fee, annual fee, rewards eligibility and lounge conditions against your realistic spend.
          </li>
        </ol>
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--text-muted)" }}>
          Use <Link href="/smart-swipe">Smart Swipe</Link> to enter your international spend estimate and get a personalized card recommendation in under 2 minutes.
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
            <summary style={{ fontWeight: 600, fontSize: 15, cursor: "pointer", paddingTop: 4, color: "var(--text)" }}>
              {item.name}
            </summary>
            <p style={{ marginTop: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </p>
          </details>
        ))}
      </section>

      <section style={{ marginBottom: 32, fontSize: 13, color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text)" }}>Issuer and network references:</strong>{" "}
        <a href="https://www.idfcfirstbank.com/credit-card/lifetime-free-credit-card" target="_blank" rel="noreferrer">IDFC FIRST WOW features</a>{" · "}
        <a href="https://www.federal.bank.in/scapia" target="_blank" rel="noreferrer">Federal Bank Scapia fees, rewards and forex terms</a>{" · "}
        <a href="https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v10-27_02_26-2-" target="_blank" rel="noreferrer">Scapia cardholder agreement and exclusions</a>{" · "}
        <a href="https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card" target="_blank" rel="noreferrer">Axis Atlas fees and charges</a>{" · "}
        <a href="https://www.visa.com/en-us/personal/travel/dynamic-currency-conversion" target="_blank" rel="noreferrer">Visa guidance on dynamic currency conversion</a>.
      </section>

      {/* Related */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Related Reading</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            <Link href="/best/credit-card-for-travel">Best Travel Credit Cards India 2026</Link>
          </li>
          <li>
            <Link href="/cards/idfc-first-wow">IDFC FIRST WOW Card Full Review</Link>
          </li>
          <li>
            <Link href="/cards/scapia-federal">Scapia Federal Card Full Review</Link>
          </li>
          <li>
            <Link href="/blog/forex-markup-india-guide">Forex Markup Guide: How Indian Banks Make Money on Your Trips</Link>
          </li>
          <li>
            <Link href="/stack-builder">Build Your International Travel Card Stack</Link>
          </li>
        </ul>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          fontSize: 12,
          color: "var(--text-muted)",
          lineHeight: 1.6,
        }}
      >
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial platform and does not hold a banking license. Nothing on this page constitutes financial advice regulated under SEBI or RBI. Forex markup rates, reward structures, and card terms change frequently. Always verify current terms with the issuing bank before applying or traveling. Some links may earn us a referral commission that does not affect our editorial stance.
      </footer>
    </main>
    </>
  );
}
