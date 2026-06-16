import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Movies and Entertainment in India (June 2026)",
  description: "The right credit card turns a ₹500 movie ticket into a ₹200 one. Here's exactly how the BookMyShow deal works, which cards deliver it, and what to do about N...",
  alternates: { canonical: "/best/best-credit-card-for-movie-entertainment" },
  openGraph: {
    title: "Best Credit Card for Movies and Entertainment in India (June 2026)",
    description: "The right credit card turns a ₹500 movie ticket into a ₹200 one. Here's exactly how the BookMyShow deal works, which cards deliver it, and what to do about N...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-movie-entertainment
// Updated: June 4, 2026

const COLOR = "#f59e0b";
const UPDATED = "June 4, 2026";

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
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Movie ticket icon">
    <path d="M3 10C3 8.3 4.3 7 6 7H22C23.7 7 25 8.3 25 10V11C23.3 11 22 12.3 22 14C22 15.7 23.3 17 25 17V18C25 19.7 23.7 21 22 21H6C4.3 21 3 19.7 3 18V17C4.7 17 6 15.7 6 14C6 12.3 4.7 11 3 11V10Z" fill={COLOR} opacity="0.15" stroke={COLOR} strokeWidth="1.5"/>
    <line x1="10" y1="7" x2="10" y2="21" stroke={COLOR} strokeWidth="1.2" strokeDasharray="3 2"/>
  </svg>
);

const IconBogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Buy-one-get-one BOGO offer">
    <rect x="2" y="8" width="11" height="14" rx="2" fill={COLOR} opacity="0.3" stroke={COLOR} strokeWidth="1.5"/>
    <rect x="15" y="8" width="11" height="14" rx="2" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5" strokeDasharray="3 2"/>
    <text x="5" y="18" fontSize="6" fill={COLOR} fontWeight="800">PAY</text>
    <text x="17.5" y="18" fontSize="6" fill={COLOR} fontWeight="800">FREE</text>
  </svg>
);

const IconOTT = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OTT streaming subscription reward">
    <rect x="4" y="7" width="20" height="14" rx="2" fill="var(--raise)" stroke={COLOR} strokeWidth="1.8"/>
    <rect x="7" y="10" width="14" height="8" rx="1" fill={COLOR} opacity="0.15"/>
    <path d="M11 12L17 14L11 16V12Z" fill={COLOR} opacity="0.7"/>
    <path d="M10 21L18 21" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 21L14 24" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit included in card">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.12"/>
    <path d="M5 9.5L8 12L13 6" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCross = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit not included">
    <circle cx="9" cy="9" r="8" fill="#fee2e2" opacity="0.5"/>
    <path d="M6 6L12 12M12 6L6 12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top entertainment card recommendation">
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
          text: "ICICI Coral credit card gives ₹200 off on two BookMyShow movie tickets per month (buy-one-get-one offer, capped at ₹200 discount). SBI Card ELITE gives ₹200 off on BookMyShow once a month. HDFC Regalia (select tier) offers 2-for-1 on BookMyShow Gold bookings. ICICI Coral is the most accessible for the BookMyShow offer, with a low fee of ₹500/year."
        }
      },
      {
        "@type": "Question",
        name: "How does the BookMyShow BOGO credit card offer work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BOGO (buy-one-get-one) means you pay for one ticket and get a second one free, up to a specified cap. On ICICI Coral, the offer is: buy 2 tickets on BookMyShow, and ₹200 is discounted from the total. The discount applies on a minimum 2-ticket purchase. This is available twice per month for card holders as of June 2026. The discount triggers automatically when you select the card at checkout on the BMS app."
        }
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI card give cashback on Prime Video subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Amazon Pay ICICI gives 5% cashback for Prime members on all Amazon transactions, which includes Amazon Prime subscription payments. Paying your annual Prime subscription (₹1,499) with this card earns ₹75 back. The same applies to Prime Video rent and buy transactions made within the Amazon ecosystem."
        }
      },
      {
        "@type": "Question",
        name: "Can I use my credit card to pay for Netflix and earn rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Netflix charges your credit card like any other merchant. Most credit cards earn standard reward points on Netflix payments. Some cards do better: Amazon Pay ICICI earns 1-5% (if Netflix is paid through Amazon Pay balance). HDFC Millennia earns 5% on Netflix if paid via its app partner ecosystem. Standard cards earn 1-1.5% on Netflix/Hotstar as a base category."
        }
      },
      {
        "@type": "Question",
        name: "Which credit card is best for movie lovers in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For dedicated movie lovers who watch in cinemas 2+ times a month, ICICI Coral is the best value card. The ₹200 BookMyShow discount used twice per month = ₹400 saved monthly = ₹4,800 per year, against a ₹500 annual card fee. SBI Card ELITE is a close second if you also want premium lifestyle benefits. For everything else (OTT + occasional movies), Amazon Pay ICICI is the most practical free option."
        }
      },
      {
        "@type": "Question",
        name: "Does SBI SimplySAVE card give good rewards on movies and dining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI SimplySAVE earns 10X reward points on movies, dining, and groceries — which sounds high but the base point value is ₹0.20 per point, making the effective return about 1.3% in these categories. At the same fee range, ICICI Coral's direct BookMyShow discount delivers more measurable value for regular movie-goers."
        }
      },
      {
        "@type": "Question",
        name: "Are credit card movie offers valid on all screens including IMAX and 4DX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally yes, but the discount cap matters. If the IMAX ticket costs ₹450 and the BOGO cap is ₹200, you still pay ₹700 for two IMAX tickets instead of ₹900 — a valid saving. The ₹200 cap doesn't cover the full IMAX price premium but still provides partial benefit. Check if the offer applies to all BookMyShow ticket types or is restricted to regular 2D/3D screenings."
        }
      },
      {
        "@type": "Question",
        name: "Which credit card is best for live events, concerts, and sports in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For live events and concerts beyond cinema, HDFC Infinia and Axis Magnus provide concierge-assisted ticket procurement for sold-out events. SBI Card ELITE has specific partnerships with entertainment venues. For IPL, music concerts, and stand-up shows on BookMyShow, the same BMS-linked cards (ICICI Coral, SBI ELITE) apply their discounts. Premium Amex cards have global event access benefits useful for Formula One, international concerts, and sports tours."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Movies and Entertainment in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Movie Entertainment", item: "https://assurefintech.com/best/credit-card-for-movie-entertainment" }
    ]
  };

  const bmsCards = [
    {
      card: "ICICI Coral",
      fee: "₹500/yr",
      bmsOffer: "₹200 off on 2 tickets, 2x/month",
      monthlyValue: "₹400",
      annualValue: "₹4,800",
      cap: "₹200/offer",
      verdict: "Best for cinema regulars — offer alone covers fee 9x over"
    },
    {
      card: "SBI Card ELITE",
      fee: "₹4,999/yr",
      bmsOffer: "₹200 off on 2 tickets, 1x/month",
      monthlyValue: "₹200",
      annualValue: "₹2,400",
      cap: "₹200/month",
      verdict: "Good movie perk but card justifies itself on other lifestyle benefits"
    },
    {
      card: "Axis MyZone",
      fee: "₹500/yr (waived)",
      bmsOffer: "1 free ticket/month (up to ₹200)",
      monthlyValue: "₹200",
      annualValue: "₹2,400",
      cap: "₹200/month",
      verdict: "Strong entry card for young professionals who watch monthly"
    },
    {
      card: "HDFC Regalia Gold",
      fee: "₹2,500/yr",
      bmsOffer: "2-for-1 on BMS Gold tier",
      monthlyValue: "Varies",
      annualValue: "₹1,200-₹3,000 est.",
      cap: "BMS Gold prices",
      verdict: "Better as an all-round card — movie benefit is a bonus, not the main draw"
    }
  ];

  const ottTable = [
    { platform: "Amazon Prime (annual)", cost: "₹1,499/yr", bestCard: "Amazon Pay ICICI", reward: "₹75 (5% for Prime)", note: "Paid via Amazon app" },
    { platform: "Netflix (monthly ₹499)", cost: "₹5,988/yr", bestCard: "HDFC Millennia", reward: "₹300/yr (5%)", note: "On partner Netflix payment" },
    { platform: "Disney+ Hotstar (annual)", cost: "₹1,499/yr", bestCard: "Any 1.5-2% card", reward: "₹22-30", note: "No specific partnership bonus" },
    { platform: "Spotify Premium (monthly)", cost: "₹1,188/yr", bestCard: "Any card + auto-pay", reward: "₹12-18 (1-1.5%)", note: "Standard utility rate" },
    { platform: "Apple TV+ (monthly)", cost: "₹99/mo = ₹1,188/yr", bestCard: "Amazon Pay ICICI (Amazon purchases)", reward: "Varies", note: "Standard merchant rate" }
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
            Best Credit Card for Movies and Entertainment in India (June 2026)
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED}</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
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
        The right credit card turns a ₹500 movie ticket into a ₹200 one. Here's exactly how the BookMyShow deal works, which cards deliver it, and what to do about Netflix and live events.
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
            ICICI Coral's ₹200 BookMyShow discount used twice a month = ₹4,800 per year. The card costs ₹500 annually. Net benefit: ₹4,300 per year just from the movie offer — before any reward points on other spends. This is one of the highest return-on-fee ratios of any lifestyle card in India if you watch movies regularly.
          </p>
        </div>
      </div>

      {/* BMS mechanics */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How the BookMyShow Credit Card Offer Actually Works</h2>

      <p style={{ marginBottom: 12 }}>
        BookMyShow partner offers on credit cards are structured as instant discounts at checkout — not cashback that arrives later. When you select the eligible card during payment on the BMS app or website, the discount is applied immediately to your transaction total.
      </p>

      <p style={{ marginBottom: 12 }}>
        The "buy-one-get-one" framing can be misleading. What actually happens: you add 2 tickets to your cart, apply the card offer at checkout, and ₹200 is deducted (or the lower-priced ticket's value up to ₹200). This is a cap-based discount, not a literal free ticket at any price point.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {[
          { scenario: "2 tickets at ₹250 each (₹500 total) → Discount: ₹200 → You pay: ₹300", good: true },
          { scenario: "2 tickets at ₹450 each (IMAX, ₹900 total) → Discount: ₹200 → You pay: ₹700", good: true },
          { scenario: "1 ticket only → Offer not applicable (minimum 2 tickets required)", good: false },
          { scenario: "3rd and 4th ticket in same booking → No additional discount", good: false }
        ].map(({ scenario, good }, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 14px", background: good ? "var(--green-dim)" : "var(--raise)", border: `1px solid ${good ? "rgba(62,224,143,.35)" : "var(--hair)"}`, borderRadius: 8 }}>
            {good ? <IconCheck /> : <IconCross />}
            <span style={{ fontSize: 13, color: "var(--text-muted,#475569)" }}>{scenario}</span>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 24 }}>
        The offer resets monthly, not weekly. Most BMS-linked cards allow 1-2 discounted bookings per calendar month. If you use it on the 2nd of the month, you need to wait until the 1st of next month for the counter to reset.
      </p>

      {/* Card comparison table */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>BookMyShow Credit Card Offers Compared (June 2026)</h2>
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
                  {row.card === "ICICI Coral" ? "+₹4,300" : row.card === "SBI Card ELITE" ? "-₹2,599" : row.card === "Axis MyZone" ? "+₹1,900" : "+₹0 to +₹500"}
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
            fee: "₹500/yr (waived at ₹1.5L spend)",
            headline: "Best pure-value movie card in India",
            benefits: [
              "₹200 off on BookMyShow, 2 times per month",
              "1 complimentary DreamFolks lounge visit/quarter (4/year)",
              "2 reward points per ₹100 spent on dining and entertainment",
              "1 reward point per ₹100 on other spends",
              "Fuel surcharge waiver at HPCL pumps"
            ],
            math: "₹200 x 2 offers x 12 months = ₹4,800 value. Annual fee ₹500. Net: +₹4,300.",
            link: "/cards/icici-coral"
          },
          {
            rank: 2,
            name: "SBI Card ELITE",
            fee: "₹4,999/yr",
            headline: "Best premium entertainment card — movies are a side benefit",
            benefits: [
              "₹200 off on BookMyShow, once per month",
              "5X reward points on dining, entertainment, groceries",
              "6 domestic lounge visits + 6 Priority Pass visits/year",
              "₹6,000 e-vouchers on card activation",
              "Milestone rewards at ₹3L, ₹4L, ₹5L spend"
            ],
            math: "₹200 x 12 months = ₹2,400 BMS value. Card fee ₹4,999. Movie offer alone doesn't justify the fee — need total lifestyle use.",
            link: "/cards/sbi-card-elite"
          },
          {
            rank: 3,
            name: "Axis MyZone",
            fee: "₹500/yr (waived at ₹2L spend)",
            headline: "Best entry card for students and early-career professionals",
            benefits: [
              "1 free BookMyShow movie ticket per month (up to ₹200)",
              "5% cashback on Zomato, Swiggy",
              "10% discount on Myntra",
              "2 DreamFolks lounge visits/quarter",
              "No forex markup on international transactions (bonus travel benefit)"
            ],
            math: "₹200 x 12 months = ₹2,400 BMS value. Fee ₹500 waived at ₹2L/yr. Net: +₹2,400 if fee waived.",
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
        Streaming subscriptions are one of the most consistent recurring charges in India today. Netflix, Prime, Hotstar, and Spotify together cost a typical household ₹8,000 to ₹11,000 per year. Choosing the right card for these auto-debits adds up.
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
        BookMyShow is not just for films — it sells event tickets for IPL, standup comedy, music concerts, and live performances. The same credit card BMS offers apply to event bookings, giving you ₹200 off on event tickets purchased in pairs.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: "IPL / Sports Tickets", card: "ICICI Coral (BMS offer applies)", note: "₹200 off on 2 IPL tickets" },
          { label: "Music Concerts / Festivals", card: "HDFC Infinia / Axis Magnus", note: "Concierge for sold-out shows" },
          { label: "Gaming (Steam, Xbox, PS Store)", card: "Any international card with low forex", note: "IDFC WOW or Scapia best for USD charges" },
          { label: "Standup Comedy Shows", card: "ICICI Coral (BMS offer applies)", note: "BookMyShow-listed shows eligible" }
        ].map(({ label, card, note }, i) => (
          <div key={i} style={{ background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 8, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: COLOR, marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{card}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted,#64748b)" }}>{note}</div>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 12 }}>
        For gaming spend (PlayStation Store, Steam, Xbox Game Pass), international charges in USD or GBP attract forex markup on most cards. A zero-forex card like IDFC FIRST WOW saves you 3.5% on every in-game purchase or DLC download.
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
            "Set ICICI Coral as your default card in the BookMyShow app. This triggers the offer automatically — you don't need to hunt for a promo code each time.",
            "Use the BMS offer exactly twice per month. Calendar it if needed. Using it only once per month on ICICI Coral leaves ₹2,400 per year on the table.",
            "Set OTT auto-debits to whichever card earns the most in that category (Amazon Pay ICICI for Prime, HDFC Millennia for Netflix if available).",
            "For live events and concerts, book early. Credit card BOGO offers apply regardless of price — saving ₹200 on an ₹800 event ticket is a better discount percentage than on a ₹250 movie ticket."
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
            <div style={{ padding: "0 18px 16px", fontSize: 14, color: "var(--text-muted,#475569)", lineHeight: 1.7 }}>
              {item.acceptedAnswer.text}
            </div>
          </details>
        ))}
      </div>

      <footer style={{ borderTop: "1px solid var(--border,var(--hair))", paddingTop: 20, fontSize: 12, color: "var(--text-muted,#94a3b8)", lineHeight: 1.7 }}>
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
