import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Movies and Entertainment in India (September 2026)",
  description: "Compare current movie-ticket promotions, card fees and redemption conditions. Offers vary by card variant, platform and booking date.",
  alternates: { canonical: "/best/best-credit-card-for-movie-entertainment" },
  openGraph: {
    title: "Best Credit Card for Movies and Entertainment in India (September 2026)",
    description: "Compare current movie-ticket promotions, card fees and redemption conditions. Offers vary by card variant, platform and booking date.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-movie-entertainment
// Updated: September 26, 2026

const COLOR = "#f59e0b";
const UPDATED = "September 26, 2026";

const IconMovie = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Movie and entertainment credit card icon">
    <rect x="4" y="10" width="40" height="28" rx="5" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="2"/>
    <circle cx="14" cy="24" r="7" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
    <path d="M11 20L18 24L11 28V20Z" fill={COLOR} opacity="0.7"/>
    <rect x="26" y="16" width="4" height="4" rx="1" fill={COLOR} opacity="0.5"/>
    <rect x="32" y="16" width="4" height="4" rx="1" fill={COLOR} opacity="0.5"/>
    <rect x="26" y="22" width="4" height="4" rx="1" fill={COLOR} opacity="0.5"/>
    <rect x="32" y="22" width="4" height="4" rx="1" fill={COLOR} opacity="0.5"/>
  </svg>
);

const IconTicket = () => (
  <svg width="28" height="28" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Movie ticket icon">
    <path d="M3 10C3 8.3 4.3 7 6 7H22C23.7 7 25 8.3 25 10V11C23.3 11 22 12.3 22 14C22 15.7 23.3 17 25 17V18C25 19.7 23.7 21 22 21H6C4.3 21 3 19.7 3 18V17C4.7 17 6 15.7 6 14C6 12.3 4.7 11 3 11V10Z" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
    <line x1="10" y1="7" x2="10" y2="21" stroke={COLOR} strokeWidth="1.2" strokeDasharray="3 2"/>
  </svg>
);

const IconBogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Buy-one-get-one BOGO offer">
    <rect x="2" y="8" width="11" height="14" rx="2" fill={COLOR} opacity="0.3" stroke={COLOR} strokeWidth="1.5"/>
    <rect x="15" y="8" width="11" height="14" rx="2" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" strokeDasharray="3 2"/>
    <text x="5" y="18" fontSize="6" fill={COLOR} fontWeight="800">PAY</text>
    <text x="17.5" y="18" fontSize="6" fill={COLOR} fontWeight="800">FREE</text>
  </svg>
);

const IconOTT = () => (
  <svg width="28" height="28" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OTT streaming subscription reward">
    <rect x="4" y="7" width="20" height="14" rx="2" fill="var(--raise)" stroke={COLOR} strokeWidth="1.8"/>
    <rect x="7" y="10" width="14" height="8" rx="1" fill={COLOR} opacity="0.15"/>
    <path d="M11 12L17 14L11 16V12Z" fill={COLOR} opacity="0.7"/>
    <path d="M10 21L18 21" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 21L14 24" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit included in card">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.12"/>
    <path d="M5 9.5L8 12L13 6" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCross = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit not included">
    <circle cx="9" cy="9" r="8" fill="#fee2e2" opacity="0.5"/>
    <path d="M6 6L12 12M12 6L6 12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top entertainment card recommendation">
    <polygon points="9,1.5 11,7 17,7 12,11 14,17 9,13.5 4,17 6,11 1,7 7,7" fill={COLOR}/>
  </svg>
);

export default function BestCreditCardForMovieEntertainment() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives the best discount on BookMyShow in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ICICI's current Coral page advertises 25% off, up to ₹100, on a minimum purchase of two BookMyShow or INOX tickets, twice a month. The same page lists a ₹500 + GST joining fee and ₹500 + GST annual fee from year two, waived after ₹1.5 lakh spend in the previous year. Other card offers vary by variant and may change; check the live offer terms shown at checkout before valuing or applying for a card."
        }
      },
      {
        "@type": "Question",
        name: "How does the BookMyShow BOGO credit card offer work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do not assume every movie-card promotion is a literal free ticket. ICICI's current Coral offer is 25% off up to ₹100 on a minimum two-ticket purchase, twice a month, on BookMyShow and INOX. Eligibility, participating ticket types and redemption steps are governed by the offer terms visible at checkout."
        }
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI card give cashback on Prime Video subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rewards depend on how the subscription is billed and the issuer's eligible-transaction terms. Do not assume a subscription, wallet-funded payment or third-party billing route qualifies for a card's advertised shopping rate; check the transaction route and current exclusions."
        }
      },
      {
        "@type": "Question",
        name: "Can I use my credit card to pay for Netflix and earn rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A streaming payment may earn the card's ordinary eligible-spend rate, but partner rates do not automatically apply to subscriptions. The payment channel, merchant classification and issuer exclusions matter; verify the charge route against the current card terms."
        }
      },
      {
        "@type": "Question",
        name: "Which credit card is best for movie lovers in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal best card. ICICI Coral's currently published offer is 25% off up to ₹100 on at least two tickets, twice monthly, subject to its live terms. Estimate value from the discount you can actually redeem, card fees you will pay, and offers you would otherwise use."
        }
      },
      {
        "@type": "Question",
        name: "Does SBI SimplySAVE card give good rewards on movies and dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI SimplySAVE lists accelerated reward points for eligible dining, movies, departmental stores and grocery transactions. Points are not cash; check the current reward programme, eligible transaction classification and redemption value before comparing it with a ticket discount."
        }
      },
      {
        "@type": "Question",
        name: "Are credit card movie offers valid on all screens including IMAX and 4DX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Participating formats, venues, ticket types and discount caps are defined by each promotion. Read the live offer terms in the booking flow rather than assuming IMAX, 4DX or other premium formats qualify."
        }
      },
      {
        "@type": "Question",
        name: "Which credit card is best for live events, concerts, and sports in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Event access and ticket discounts are offer- and card-specific, and a movie promotion may not cover concerts, sports or other events. Check the issuer and BookMyShow terms for the exact event, venue, card variant and booking period."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Movies and Entertainment in India (September 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Movie Entertainment", item: "https://assurefintech.com/best/credit-card-for-movie-entertainment" }
    ]
  };

  const bmsCards = [
    {
      card: "ICICI Coral",
      fee: "₹500 + GST joining; ₹500 + GST annual from year two; prior-year ₹1.5L waiver condition",
      bmsOffer: "25% off up to ₹100; minimum 2 tickets; twice/month",
      monthlyValue: "Up to ₹200",
      annualValue: "Up to ₹2,400 gross",
      cap: "₹100/offer",
      verdict: "Check offer availability and eligible ticket types at checkout"
    },
    {
      card: "SBI Card ELITE",
      fee: "Check current issuer fee schedule",
      bmsOffer: "Check live issuer/BookMyShow offer",
      monthlyValue: "Varies",
      annualValue: "Not estimated",
      cap: "Variant/offer-specific",
      verdict: "Do not value without current terms"
    },
    {
      card: "Axis MyZone",
      fee: "Check current issuer fee schedule",
      bmsOffer: "Check live issuer/BookMyShow offer",
      monthlyValue: "Varies",
      annualValue: "Not estimated",
      cap: "Variant/offer-specific",
      verdict: "Do not value without current terms"
    },
    {
      card: "HDFC Regalia Gold",
      fee: "Check current issuer fee schedule",
      bmsOffer: "Check live issuer/BookMyShow offer",
      monthlyValue: "Varies",
      annualValue: "Not estimated",
      cap: "BMS Gold prices",
      verdict: "Do not value without current terms"
    }
  ];

  const ottTable = [
    { platform: "Any streaming subscription", cost: "Current plan price", bestCard: "No universal best card", reward: "Depends on eligible transaction route", note: "Check issuer exclusions and payment channel" }
  ];

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1F1401, #4E3203, #1F1401)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #f59e0b22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Movies and Entertainment in India (September 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED}</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 24 }}>
        <Link href="/">Home</Link>{" / "}<Link href="/best/">Best Cards</Link>{" / "}
        <span>Best Credit Card for Movies and Entertainment</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <IconMovie />
        <span style={{ background: COLOR, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600 }}>ENTERTAINMENT GUIDE</span>
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted,#475569)", marginBottom: 10, fontWeight: 500 }}>
        Compare current ticket offers, issuer fees and redemption conditions. Movie promotions vary by card variant, platform, venue and booking date; verify the offer at checkout.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>By Ash K</span><span>8 min read</span>
      </div>

      {/* Honest number */}
      <div style={{ background: `${COLOR}10`, border: `1.5px solid ${COLOR}30`, borderRadius: 12, padding: "18px 22px", marginBottom: 28, display: "flex", gap: 12 }}>
        <IconTicket />
        <div>
          <strong style={{ color: COLOR, fontSize: 14, display: "block", marginBottom: 4 }}>The Honest Number on Movie Card Benefits</strong>
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted,#475569)" }}>
            ICICI Bank currently advertises 25% off up to ₹100 on a minimum two-ticket purchase on BookMyShow and INOX, twice a month, for Coral. That is up to ₹200 per month before fees and only when eligible bookings qualify. Coral's published joining fee is ₹500 + GST; annual fee is ₹500 + GST from year two, with a previous-year spend waiver condition.
          </p>
        </div>
      </div>

      {/* BMS mechanics */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How the BookMyShow Credit Card Offer Actually Works</h2>

      <p style={{ marginBottom: 12 }}>
        BookMyShow partner offers on credit cards are structured as instant discounts at checkout — not cashback that arrives later. When you select the eligible card during payment on the BMS app or website, the discount is applied immediately to your transaction total.
      </p>

      <p style={{ marginBottom: 12 }}>
        Promotion labels can be misleading. For Coral, ICICI currently advertises 25% off up to ₹100 on a minimum two-ticket purchase; this is not a ₹200 discount per booking. The discount depends on the eligible purchase and live terms.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {[
          { scenario: "Two eligible tickets → Coral offer may apply: 25% off, capped at ₹100", good: true },
          { scenario: "One ticket → Coral offer's minimum two-ticket condition is not met", good: false },
          { scenario: "Premium format, venue or event → Check offer-specific exclusions", good: false },
          { scenario: "Additional tickets or repeat bookings → Check checkout counter and monthly limit", good: false }
        ].map(({ scenario, good }, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 14px", background: good ? "var(--green-dim)" : "var(--raise)", border: `1px solid ${good ? "rgba(62,224,143,.35)" : "var(--hair)"}`, borderRadius: 8 }}>
            {good ? <IconCheck /> : <IconCross />}
            <span style={{ fontSize: 13, color: "var(--text-muted,#475569)" }}>{scenario}</span>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 24 }}>
        Coral's issuer page says the promotion is available twice a month. Other card-specific counters, reset periods and limits may differ; use the current offer terms displayed during booking.
      </p>

      {/* Card comparison table */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>BookMyShow Credit Card Offers: Verify the Live Terms</h2>
      <p style={{ color: "var(--text-muted,#64748b)", fontSize: 14, marginBottom: 16 }}>Annual value calculated assuming consistent monthly use of full offer.</p>

      <div style={{ overflowX: "auto", marginBottom: 28 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: `${COLOR}12` }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${COLOR}30` }}>Card</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${COLOR}30` }}>BMS Offer</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: `2px solid ${COLOR}30` }}>Annual Value</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: `2px solid ${COLOR}30` }}>Card Fee</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: `2px solid ${COLOR}30` }}>Net Benefit</th>
            </tr>
          </thead>
          <tbody>
            {bmsCards.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i === 0 ? `${COLOR}05` : i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 14px" }}>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    {i === 0 && <IconStar />}
                    <strong>{row.card}</strong>
                  </div>
                </td>
                <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--text-muted,#64748b)" }}>{row.bmsOffer}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: COLOR, fontWeight: 700 }}>{row.annualValue}</td>
                <td style={{ padding: "10px 12px", textAlign: "right" }}>{row.fee}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, color: "#16a34a" }}>
                  Not estimated
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card picks detailed */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Top 3 Entertainment Cards: Full Breakdown</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
        {[
          {
            rank: 1,
            name: "ICICI Coral",
            fee: "₹500 + GST joining; ₹500 + GST annual from year two; prior-year ₹1.5L waiver condition",
            headline: "Published Coral ticket offer; compare your actual redemption",
            benefits: [
              "25% off up to ₹100 on at least two BookMyShow or INOX tickets, twice monthly",
              "Check current lounge, reward and fuel terms separately; they are not valued here"
            ],
            math: "Maximum advertised discount is up to ₹200/month before fees, only if both eligible bookings qualify; actual savings can be lower.",
            link: "/cards/icici-coral"
          },
          {
            rank: 2,
            name: "SBI Card ELITE",
            fee: "Check current issuer fee schedule",
            headline: "Best premium entertainment card — movies are a side benefit",
            benefits: [
              "Movie and entertainment offers are variant- and offer-specific; check current issuer terms",
              "Evaluate other benefits separately against the current fee"
            ],
            math: "No annual movie value estimated without a verified current offer for your card variant.",
            link: "/cards/sbi-card-elite"
          },
          {
            rank: 3,
            name: "Axis MyZone",
            fee: "Check current issuer fee schedule",
            headline: "Best entry card for students and early-career professionals",
            benefits: [
              "Check current MyZone movie promotion, eligible platform and cap",
              "Check current issuer terms for other benefits and exclusions"
            ],
            math: "No annual movie value estimated without a verified current offer for your card variant.",
            link: "/cards/axis-myzone"
          }
        ].map(({ rank, name, fee, headline, benefits, math, link }) => (
          <div key={rank} style={{ border: `2px solid ${rank === 1 ? COLOR : "var(--hair)"}`, borderRadius: 14, padding: "20px 22px", background: rank === 1 ? `${COLOR}05` : "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {rank === 1 && <IconStar />}
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>#{rank} {name}</h3>
              </div>
              <span style={{ background: `${COLOR}15`, color: COLOR, borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>{fee}</span>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: 14, color: COLOR, fontWeight: 600 }}>{headline}</p>
            <ul style={{ margin: "0 0 12px", paddingLeft: 18, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.8 }}>
              {benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div style={{ background: `${COLOR}10`, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 600, color: COLOR, marginBottom: 8 }}>
              The Math: {math}
            </div>
            <Link href={link} style={{ color: COLOR, fontSize: 13, fontWeight: 600 }}>Full Review</Link>
          </div>
        ))}
      </div>

      {/* OTT section */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>OTT Subscriptions and Credit Card Rewards</h2>

      <p style={{ marginBottom: 12 }}>
        Subscription prices and eligible reward rates depend on the plan, billing route and issuer terms. Verify the current price and how the transaction is classified before estimating card rewards.
      </p>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: `${COLOR}10` }}>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${COLOR}25` }}>Platform</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: `2px solid ${COLOR}25` }}>Annual Cost</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${COLOR}25` }}>Best Card</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: `2px solid ${COLOR}25` }}>Reward Earned</th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, borderBottom: `2px solid ${COLOR}25` }}>Note</th>
            </tr>
          </thead>
          <tbody>
            {ottTable.map(({ platform, cost, bestCard, reward, note }, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 12px", fontWeight: 600 }}>{platform}</td>
                <td style={{ padding: "10px 12px", textAlign: "right" }}>{cost}</td>
                <td style={{ padding: "10px 12px" }}>{bestCard}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: COLOR, fontWeight: 700 }}>{reward}</td>
                <td style={{ padding: "10px 12px", color: "var(--text-muted,#64748b)" }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Beyond movies */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Beyond Cinema: Concerts, Gaming, and Events</h2>

        <p style={{ marginBottom: 12 }}>
        BookMyShow lists films and other events, but a movie-ticket card offer may not apply to concerts, sports or live performances. Confirm eligible event types and venues in the offer terms.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Sports and live events", card: "Check event-specific offer terms", note: "A movie offer may not cover events" },
          { label: "Concerts and festivals", card: "Compare current card benefits", note: "Do not assume concierge access guarantees tickets" },
          { label: "Gaming subscriptions", card: "Check foreign-currency fee and reward rules", note: "Payment currency and route affect total cost" },
          { label: "Comedy shows", card: "Check event-specific offer terms", note: "Confirm eligible venue and ticket type" }
        ].map(({ label, card, note }, i) => (
          <div key={i} style={{ background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 8, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: COLOR, marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{card}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted,#64748b)" }}>{note}</div>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 12 }}>
        For gaming spend, check whether the charge is processed in foreign currency and compare the card's current forex markup, network conversion and reward exclusions. A zero-markup claim does not necessarily mean the transaction has no conversion cost.
      </p>

      <p style={{ marginBottom: 24 }}>
        See the <Link href="/best/credit-card-with-no-forex-markup" style={{ color: COLOR }}>zero forex card guide</Link> for more on managing international digital spend.
      </p>

      {/* Actionable ending */}
      <div style={{ background: `${COLOR}08`, border: `2px solid ${COLOR}`, borderRadius: 16, padding: "24px 26px", marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
          <IconBogo />
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: COLOR }}>Maximise Your Entertainment Cards: Quick Checklist</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
          {[
            "Check the offer in the BookMyShow or INOX checkout flow before choosing a card; offers can vary by card variant and date.",
            "Read minimum-ticket, discount-cap, eligible-format and monthly-usage conditions before calculating savings.",
            "For subscriptions, confirm whether the actual merchant and payment route qualify for the card's advertised reward category.",
            "Compare the discount you can redeem with joining/annual fees and any spend-based waiver; do not count unused or unavailable offers as savings."
          ].map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ background: COLOR, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: "var(--text-muted,#475569)" }}>{tip}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/cards/icici-coral" style={{ display: "inline-block", padding: "10px 18px", background: COLOR, color: "#fff", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>ICICI Coral Full Review</Link>
          <Link href="/smart-swipe" style={{ display: "inline-block", padding: "10px 18px", background: "var(--raise)", color: COLOR, border: `1px solid ${COLOR}`, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Calculate Your Savings</Link>
          <Link href="/blog/bookmyshow-credit-card-offers-2026" style={{ display: "inline-block", padding: "10px 18px", background: "var(--raise)", color: COLOR, border: `1px solid ${COLOR}`, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>BMS Offers Deep Dive</Link>
        </div>
      </div>

      {/* FAQs */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
        {faq.mainEntity.map((item, i) => (
          <details key={i} style={{ border: "1px solid var(--border,var(--hair))", borderRadius: 10 }}>
            <summary style={{ padding: "14px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {item.name}
              <span style={{ color: COLOR, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
            </summary>
            <div style={{ padding: "0 18px 16px", fontSize: 14, color: "var(--text-muted,#475569)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </div>
          </details>
        ))}
      </div>

      <footer style={{ borderTop: "1px solid var(--border,var(--hair))", paddingTop: 20, fontSize: 12, color: "var(--text-muted,#94a3b8)", lineHeight: 1.6 }}>
        <p style={{ margin: "0 0 6px" }}>
          <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. BookMyShow offers and credit card benefits are subject to change. Verify current offer terms on the BookMyShow app and your bank's offer page before purchasing tickets.
        </p>
        <p style={{ margin: 0 }}>
          Data sourced from ICICI Bank, SBI Card, Axis Bank, and BookMyShow offer pages as of {UPDATED}. Related: <Link href="/best/credit-card-for-women-india" style={{ color: COLOR }}>Lifestyle Card Guide</Link> and <Link href="/best/credit-card-with-no-forex-markup" style={{ color: COLOR }}>Zero Forex for International Gaming</Link>.
        </p>
      </footer>
    </main>
    </>
  );
}
