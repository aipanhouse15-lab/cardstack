import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Travel in India: Miles, Fees and Lounge Conditions",
  description: "Compare travel cards by eligible rewards, fees, lounge conditions, foreign-currency charges and redemption rules.",
  alternates: { canonical: "/best/credit-card-for-travel" },
  openGraph: {
    title: "Best Credit Card for Travel in India: Miles, Fees and Lounge Conditions",
    description: "Compare travel cards by eligible rewards, fees, lounge conditions, foreign-currency charges and redemption rules.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-travel
// Reviewed against issuer sources: September 26, 2026

const COLOR = "#0891b2";
const UPDATED = "September 26, 2026";

// --- SVG Components ---

function MilesVsCashbackChart() {
  return (
    <div role="note" style={{ margin: "28px 0", padding: "18px 22px", border: "1px solid var(--border)", borderRadius: 10, background: "var(--raise)", color: "var(--text-muted)", fontSize: 14 }}>
      <strong style={{ color: "var(--text)" }}>Reward value is not a fixed percentage.</strong> Compare a card using your eligible spend, the fee you will actually pay, reward expiry, transfer ratios, redemption availability and the price of the same booking elsewhere. A points or miles estimate is not guaranteed cash value.
    </div>
  );
}

function AtlasDevaluationTimeline() {
  return (
    <div role="note" style={{ padding: "16px 20px", border: "1px solid var(--border)", borderRadius: 10, background: "var(--raise)", color: "var(--text-muted)", fontSize: 14 }}>
      Axis EDGE Miles partner availability, transfer groups, ratios and caps can change. Verify the live Axis transfer-program terms and the airline or hotel programme rules immediately before transferring; transfers may not be reversible.
    </div>
  );
}

function LoungeAccessTable() {
  return (
    <ul style={{ margin: "16px 0", paddingLeft: 22, color: "var(--text-muted)", lineHeight: 1.8 }}>
      <li>Check the issuing bank’s current domestic and international lounge list, visit count and per-visit charges.</li>
      <li>Confirm whether access needs a prior-quarter/month spend threshold, voucher generation or app activation.</li>
      <li>Check guest rules, add-on-card rules, lounge participation and any payment validation fee before travelling.</li>
    </ul>
  );
}

function TravelCardDecisionFlow() {
  return (
    <svg
      viewBox="0 0 680 387"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision flowchart to choose the right travel credit card based on travel frequency and spending"
      style={{ width: "100%", height: "auto", margin: "28px 0" }}
    >
      <rect width="680" height="380" rx="10" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
      <text x="340" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Choose Using Your Actual Travel Priorities</text>
      {/* Start */}
      <rect x="240" y="44" width="200" height="38" rx="8" fill={COLOR} />
      <text x="340" y="66" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="600">What will you actually use?</text>
      {/* Branch 1 */}
      <line x1="240" y1="63" x2="120" y2="130" stroke="var(--border)" strokeWidth="1.5" />
      <text x="150" y="120" fontSize="10" fill="var(--text-muted)">Low annual cost / low forex</text>
      <rect x="40" y="130" width="160" height="36" rx="7" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.2" />
      <text x="120" y="152" textAnchor="middle" fontSize="11" fill="var(--text)">Compare no-fee options</text>
      <text x="120" y="166" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Check forex and lounge conditions</text>
      {/* Branch 2 */}
      <line x1="440" y1="63" x2="560" y2="130" stroke="var(--border)" strokeWidth="1.5" />
      <text x="500" y="120" fontSize="10" fill="var(--text-muted)">Airport lounge access</text>
      <rect x="480" y="130" width="160" height="36" rx="7" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="1.2" />
      <text x="560" y="152" textAnchor="middle" fontSize="11" fill="var(--text)">Compare current lounge rules</text>
      <text x="560" y="166" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Visit caps and spend triggers</text>
      {/* Middle branch */}
      <line x1="340" y1="82" x2="340" y2="130" stroke="var(--border)" strokeWidth="1.5" />
      <text x="340" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Reward ecosystem</text>
      <rect x="240" y="130" width="200" height="38" rx="8" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.2" />
      <text x="340" y="153" textAnchor="middle" fontSize="12" fill="var(--text)" fontWeight="600">Can you redeem it well?</text>
      {/* Sub-branch Air India yes */}
      <line x1="265" y1="168" x2="175" y2="228" stroke="var(--border)" strokeWidth="1.5" />
      <text x="188" y="220" fontSize="10" fill="var(--text-muted)">Tata brand use</text>
      <rect x="80" y="228" width="185" height="36" rx="7" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.2" />
      <text x="172" y="248" textAnchor="middle" fontSize="11" fill="var(--text)">Check Tata Neu terms</text>
      <text x="172" y="262" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Eligible partner / caps</text>
      {/* Sub-branch no Air India */}
      <line x1="415" y1="168" x2="490" y2="228" stroke="var(--border)" strokeWidth="1.5" />
      <text x="455" y="220" fontSize="10" fill="var(--text-muted)">Airline / hotel miles</text>
      <rect x="410" y="228" width="185" height="36" rx="7" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="1.2" />
      <text x="502" y="248" textAnchor="middle" fontSize="11" fill="var(--text)">Check Atlas terms</text>
      <text x="502" y="262" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Partners / ratio / fee</text>
      {/* Bottom note */}
      <text x="340" y="320" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Check annual fees, reward exclusions and realistic redemption value.</text>
      <text x="340" y="338" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Never infer a card’s value from flight count alone.</text>
      <rect x="80" y="348" width="520" height="22" rx="4" fill={COLOR} opacity="0.07" />
      <text x="340" y="363" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="600">Offers, eligibility and access conditions must be checked with the issuer.</text>
    </svg>
  );
}

function MilesValueCalculator() {
  return (
    <div role="note" style={{ margin: "28px 0", padding: "18px 22px", border: "1px solid var(--border)", borderRadius: 10, background: "var(--raise)", color: "var(--text-muted)", fontSize: 14 }}>
      <strong style={{ color: "var(--text)" }}>Break-even check:</strong> start with the fee including tax, subtract only fee waivers or benefits you will actually use, then compare your eligible net spend and realistic redemption value. Exclude categories that do not earn or qualify for milestones. Do not treat a mile as a fixed rupee amount.
    </div>
  );
}

export default function BestCreditCardForTravel() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best travel credit card in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single best card for everyone. Axis Atlas may suit users who can use EDGE Miles and meet its eligible-spend rules; Scapia may suit people who value its app-based travel rewards, zero forex markup and lounge access tied to a preceding-month spend condition. Compare current fees, exclusions and redemption terms with your actual travel pattern.",
        },
      },
      {
        "@type": "Question",
        name: "Have Axis Atlas transfer partners or ratios changed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partner availability, transfer groups, ratios and transfer caps can change. Do not rely on an old partner list or assumed valuation: review the live Axis Bank transfer terms and the loyalty programme rules before initiating a transfer, which may not be reversible.",
        },
      },
      {
        "@type": "Question",
        name: "Is it worth getting a travel card if I fly only 2-3 times a year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the card’s fee, eligible spend, benefits you will actually use, and redemption value. Compare the annual cost with your likely rewards after exclusions and caps; do not count lounge visits or miles at a value you would not otherwise pay for.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Axis Atlas fee waiver condition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis’s published fee table does not list a standard annual-fee waiver for Atlas. It lists tier-based annual EDGE Miles benefits after payment of the annual fee; check the live terms for your card tier and the conditions that apply.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use travel credit card miles to book domestic flights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Potentially, if the airline or hotel is currently listed as a transfer partner and the transfer ratio and award availability work for your trip. Check both programmes before transferring and compare the cash fare; transfer values are not fixed cash equivalents.",
        },
      },
      {
        "@type": "Question",
        name: "Does Scapia Federal Card really give unlimited domestic lounge access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Federal Bank currently advertises domestic lounge access unlocked by spending ₹20,000 in the preceding month. Access is conditional, not unconditional; check the current Scapia app and bank terms for qualifying spend, validity, lounge participation and access rules.",
        },
      },
      {
        "@type": "Question",
        name: "What is EDGE Miles and how do I redeem them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EDGE Miles are a reward currency associated with the Atlas card. Axis describes transfers to participating airline and hotel loyalty programmes through its transfer programme. Available partners, ratios, caps and redemption routes may change; check the current terms before acting. Do not assume transfers are always the best-value option.",
        },
      },
      {
        "@type": "Question",
        name: "Is Axis Magnus worth its annual fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whether Magnus is worthwhile depends on your eligibility, fee, eligible spend, current benefits and the value you personally place on those benefits. Check Axis’s live Magnus terms and application route; lounge access alone should not be valued at a price you would not otherwise pay.",
        },
      },
      {
        "@type": "Question",
        name: "Which travel card is best for domestic hotel bookings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC currently lists 5% NeuCoins on eligible non-EMI spends with Tata Neu and partner Tata brands, plus selected additional offers through Tata Neu. Brand, booking route, caps and exclusions matter. Check the current eligible partner list and card terms; NeuCoins are not statement cashback.",
        },
      },
      {
        "@type": "Question",
        name: "Does Axis Atlas have a forex markup fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check the current Atlas schedule of charges for the foreign-currency markup and applicable taxes before using it abroad. Federal Bank states that Scapia Federal Credit Card has no forex markup, but review its current terms and any other transaction charges. Dynamic currency conversion and ATM/operator fees may still apply.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Travel in India: Axis Atlas, Scapia and Magnus Compared",
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
        name: "Best Credit Card for Travel",
        item: "https://assurefintech.com/best/credit-card-for-travel",
      },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #011217, #022E38, #011217)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #0891b222, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Travel in India
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
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

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 10 }}>
        Most travel cards in India advertise miles but never tell you how far those miles actually fly you. Here is the honest number.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 9 min read
      </div>

      {/* Quick Picks */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: "var(--text)" }}>Examples to Compare by Travel Use Case</h2>

        {[
          {
            rank: "•",
            name: "Axis Atlas",
            tag: "Transferable miles; terms-dependent",
            fee: "₹5,000 + GST/yr",
            reward: "5 EDGE Miles/₹100 on eligible direct airline, direct hotel and Travel EDGE spend (monthly eligible-spend cap applies); 2/₹100 on other eligible spend",
            best: "People who can use the current transfer partners and justify the annual fee",
            slug: "axis-atlas",
          },
          {
            rank: "•",
            name: "Scapia Federal Card",
            tag: "No annual fee; confirm current offers",
            fee: "Free",
            reward: "App-based travel rewards; current earn and redemption terms apply",
            best: "People who value Scapia booking features, conditional lounge access or zero forex",
            slug: "scapia-federal",
          },
          {
            rank: "•",
            name: "HDFC Tata Neu Infinity",
            tag: "Tata Neu partner ecosystem",
            fee: "₹1,499 + applicable taxes/yr",
            reward: "5% NeuCoins on eligible non-EMI Tata Neu and partner Tata-brand spend; caps and exclusions apply",
            best: "Users who redeem NeuCoins and meet the relevant Tata-brand eligibility conditions",
            slug: "hdfc-tata-neu-infinity",
          },
          {
            rank: "•",
            name: "Axis Magnus",
            tag: "Premium card; assess eligibility and cost",
            fee: "₹12,500 + GST/yr",
            reward: "Review current reward, lounge eligibility and spend conditions with Axis",
            best: "Applicants who qualify and can use enough current benefits to justify the fee",
            slug: "axis-magnus",
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

      <MilesVsCashbackChart />

      {/* Section 1: The miles question */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Do You Actually Need a Miles Card?
        </h2>
        <p>
          A travel card is worthwhile only if its benefits match the way you book and travel. Flight count alone is not enough: compare eligible spend, caps, annual fee and the redemption you can actually make. A no-fee or cashback card can be better for some people, but run that comparison using current terms.
        </p>
        <p>
          Axis Atlas currently lists a ₹5,000 + GST annual fee. It earns 5 EDGE Miles per ₹100 on eligible Travel EDGE, direct airline and direct hotel transactions up to ₹2 lakh cumulative spend per month, then 2 per ₹100 on those transactions; travel-agent and OTA bookings receive only the base earn under the published terms. The 2 EDGE Miles per ₹100 base rate applies to other eligible spend. Miles value varies by transfer partner and redemption.
        </p>
        <p>
          There is no universal Atlas spend “sweet spot.” Consider it only after checking exclusions, transfer caps and the live partner list, and when you can use the miles. Compare OTA pricing and booking protections before choosing a direct booking just for accelerated earn.
        </p>
        <p>
          Read our detailed breakdown: <Link href="/blog/miles-vs-cashback-india-2026">Miles vs Cashback in India 2026</Link> — we ran the math for 6 spending profiles.
        </p>
      </section>

      {/* Section 2: Axis Atlas terms and transfers */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Axis Atlas: Check Current Miles Terms Before Transferring
        </h2>
        <p>
          Axis’s published Atlas terms describe a miles-transfer programme, annual transfer caps and partner-specific conversion rules. The current eligible partner list and ratios should be checked at the point of use; older articles, screenshots and card comparisons can become stale.
        </p>
        <p>
          Axis’s current published earn terms specify 5 EDGE Miles per ₹100 on eligible direct airline, direct hotel and Travel EDGE transactions up to ₹2 lakh cumulative monthly spend, then 2 per ₹100. Transactions via travel agents and online travel agencies earn the base rate. Read exclusions and transfer conditions before calculating an expected return.
        </p>
        <p>
          Do not transfer points speculatively. Check award availability and the receiving programme’s expiry, cancellation and booking rules first; compare the points redemption against the cash price and any card fees.
        </p>
        <AtlasDevaluationTimeline />
        <p>
          <a href="https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card/privileges" target="_blank" rel="noreferrer">Check Axis’s current Atlas privileges and miles-transfer information</a> before transferring. Confirm the partner’s own terms as well.
        </p>
      </section>

      {/* Section 3: Lounge access */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          Lounge Access: What the Numbers Actually Mean
        </h2>
        <p>
          Lounge access is valuable only when you can use the lounges on your route and satisfy the card’s access conditions. Published visit counts can depend on card tier, prior-period spend, voucher activation, guest fees and the participating lounge list.
        </p>
        <p>
          Benefits and access conditions change, and a card name alone does not establish that a visit is free. Verify the current issuer-specific lounge rules shortly before travel.
        </p>
        <LoungeAccessTable />
        <p>
          Federal Bank currently advertises Scapia domestic lounge access when ₹20,000 is spent in the preceding month. Check the app and current terms for qualifying spend, validity window and participating locations.
        </p>
      </section>

      {/* Section 4: International travel strategy */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
          International Travel Strategy: The Two-Card Rule
        </h2>
        <p>
          Do not assume a travel-rewards card is economical for overseas purchases. Check each card’s live foreign-currency markup, applicable taxes, reward exclusions and dynamic-currency-conversion risks. Federal Bank states that Scapia Federal has no forex markup; confirm the current card terms and any third-party charges.
        </p>
        <p>
          A second card can be useful as a backup or for a lower-forex transaction, but compare the actual fee schedules and acceptance. No card recommendation here removes possible ATM-owner charges or dynamic currency conversion.
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
          Federal Bank describes Scapia as a no-forex-markup card and says domestic lounge access is unlocked by ₹20,000 spend in the preceding month. Travel-app rewards and their value can vary; consult current in-app terms and compare the final booking price with other providers.
        </p>
        <p>
          Whether Scapia beats a fee-based card depends on your transactions and benefit use. Compare fee, qualifying rewards, lounge spend threshold, foreign-currency use and the same itinerary’s total booking cost; do not infer a guaranteed net return from an illustrative profile.
        </p>
        <p>
          App-based booking rewards may depend on booking through the app and offer-specific conditions. Compare the full price, cancellation/refund policy, baggage and seat inclusions, and payment terms before booking.
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
            <strong>If you are considering a fee-based miles card:</strong> calculate value from eligible spend and realistic redemptions, and check transfer partners and caps first.
          </li>
          <li>
            <strong>If you want a no-annual-fee option:</strong> check Scapia’s current fee, qualifying lounge spend and app-reward terms before applying.
          </li>
          <li>
            <strong>For international trips:</strong> compare each card’s current forex markup and taxes; pay in local currency where offered and review the final conversion.
          </li>
          <li>
            <strong>Before transferring miles:</strong> confirm partner availability, ratio, caps, award availability and expiry rules with both programmes.
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

      <section style={{ marginBottom: 32, fontSize: 13, color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text)" }}>Issuer references:</strong>{" "}
        <a href="https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card" target="_blank" rel="noreferrer">Axis Atlas benefits and fees</a>{" · "}
        <a href="https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card/rewards-benefits" target="_blank" rel="noreferrer">Atlas reward earn terms</a>{" · "}
        <a href="https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card/privileges" target="_blank" rel="noreferrer">Atlas privileges and transfer programme</a>{" · "}
        <a href="https://www.federal.bank.in/scapia" target="_blank" rel="noreferrer">Federal Bank Scapia terms</a>{" · "}
        <a href="https://www.hdfc.bank.in/credit-cards/tata-neu-infinity-hdfc-bank-credit-card" target="_blank" rel="noreferrer">HDFC Tata Neu Infinity benefits</a>{" · "}
        <a href="https://www.axis.bank.in/cards/credit-card/axis-bank-magnus-credit-card/more-benefits" target="_blank" rel="noreferrer">Axis Magnus benefits</a>.
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
        <strong>Disclaimer:</strong> Assure Fintech is an independent editorial site. We do not have a banking license and do not provide financial advice regulated under SEBI or RBI guidelines. Card terms, rewards rates, and partner lists change frequently. Verify all details with the issuing bank before applying. Some links on this page may earn us a referral fee, which does not influence our rankings or editorial opinions.
      </footer>
    </main>
    </>
  );
}
