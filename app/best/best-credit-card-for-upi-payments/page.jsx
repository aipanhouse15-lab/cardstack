import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for UPI Payments in India (June 2026)",
  description: "Paying your Swiggy order on GPay with your Axis ACE card? You earned 0 rewards. Here's what actually works.",
  alternates: { canonical: "/best/best-credit-card-for-upi-payments" },
  openGraph: {
    title: "Best Credit Card for UPI Payments in India (June 2026)",
    description: "Paying your Swiggy order on GPay with your Axis ACE card? You earned 0 rewards. Here's what actually works.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-upi-payments
// Updated: June 4, 2026

const COLOR = "#ea580c";
const UPDATED = "June 4, 2026";

function UpiLogoIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="UPI payment logo icon">
      <rect x="2" y="8" width="40" height="28" rx="5" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="27" textAnchor="middle" fontSize="13" fill={COLOR} fontWeight="800">UPI</text>
    </svg>
  );
}

function RupayBadgeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RuPay card network badge - the only network that earns rewards on UPI">
      <rect x="2" y="10" width="40" height="24" rx="4" fill={COLOR} fillOpacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="27" textAnchor="middle" fontSize="10" fill={COLOR} fontWeight="800">RuPay</text>
      <path d="M36 10v24" stroke={COLOR} strokeWidth="0.5" strokeDasharray="3 2"/>
      <circle cx="38" cy="9" r="5" fill="#22c55e"/>
      <path d="M36 9l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BlockedIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blocked icon showing Visa and Mastercard credit cards do not earn rewards on UPI">
      <rect x="2" y="10" width="40" height="24" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5"/>
      <line x1="10" y1="10" x2="34" y2="34" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="34" y1="10" x2="10" y2="34" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function PhonePayIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phone showing UPI payment app">
      <rect x="10" y="4" width="20" height="32" rx="4" fill="var(--surface, #f8fafc)" stroke="var(--border)" strokeWidth="1.5"/>
      <rect x="13" y="9" width="14" height="18" rx="1" fill={COLOR} fillOpacity="0.15"/>
      <circle cx="20" cy="32" r="2" fill={COLOR} fillOpacity="0.5"/>
      <text x="20" y="21" textAnchor="middle" fontSize="8" fill={COLOR} fontWeight="700">GPay</text>
    </svg>
  );
}

function ZeroRewardBadge() {
  return (
    <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zero rewards earned badge">
      <rect width="60" height="32" rx="16" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5"/>
      <text x="30" y="21" textAnchor="middle" fontSize="13" fill="#dc2626" fontWeight="800">0%</text>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arrow pointing right">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Information icon">
      <circle cx="9" cy="9" r="8" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.2"/>
      <line x1="9" y1="8" x2="9" y2="12" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="9" cy="6" r="1" fill={COLOR}/>
    </svg>
  );
}

const rupayUpiCards = [
  {
    name: "HDFC Millennia RuPay",
    issuer: "HDFC Bank",
    fee: "₹1,000/yr",
    feeWaiver: "Waived on ₹1L annual spend",
    upiReward: "5% cashback on UPI (partner merchants)",
    nonUpiReward: "5% on partner merchants (direct card)",
    slug: "hdfc-millennia-rupay",
    note: "Best UPI reward rate but requires HDFC app setup and specific merchant categories apply.",
    best: true,
  },
  {
    name: "IDFC FIRST WOW RuPay",
    issuer: "IDFC FIRST Bank",
    fee: "Lifetime free (against FD)",
    feeWaiver: "N/A",
    upiReward: "Reward points on UPI transactions",
    nonUpiReward: "Points on all spends",
    slug: "idfc-first-wow-rupay",
    note: "Zero forex markup. Excellent for UPI users who also travel. FD-backed, so very easy to get.",
    best: false,
  },
  {
    name: "SBI SimplySAVE RuPay",
    issuer: "SBI Cards",
    fee: "₹499/yr",
    feeWaiver: "Waived on ₹1L annual spend",
    upiReward: "Limited rewards on UPI transactions",
    nonUpiReward: "10X on dining, movies, grocery",
    slug: "sbi-simplysave-rupay",
    note: "The UPI reward rate is modest but SBI RuPay integration is seamless via BHIM SBI Pay.",
    best: false,
  },
];

export default function BestCreditCardForUpiPayments() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why don't Visa and Mastercard credit cards earn rewards on UPI payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RBI mandated zero MDR (Merchant Discount Rate) on UPI transactions in 2020. Since card rewards are funded by MDR, Visa and Mastercard credit card issuers earn nothing on UPI transactions and therefore pass zero rewards to cardholders. Only RuPay credit cards on UPI have a separate reward mechanism.",
        },
      },
      {
        "@type": "Question",
        name: "Which credit cards actually earn rewards on UPI in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only RuPay credit cards linked to UPI-enabled banking apps earn rewards on UPI transactions. HDFC Millennia RuPay, IDFC FIRST WOW RuPay, and SBI SimplySAVE RuPay are current options. Visa and Mastercard credit cards earn zero rewards on UPI regardless of the card or bank.",
        },
      },
      {
        "@type": "Question",
        name: "If I pay at Swiggy using GPay with my Axis ACE card, do I earn 5%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. When you use GPay (or PhonePe, Paytm) with a non-RuPay credit card, the transaction is processed as a UPI payment. Your Axis ACE earns 0% on UPI. To earn 5% on Swiggy with Axis ACE, you must add the card directly on Swiggy's payment screen and pay with the card itself.",
        },
      },
      {
        "@type": "Question",
        name: "Can I link my HDFC Millennia RuPay to Google Pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RuPay credit cards on UPI currently require you to use the issuing bank's own UPI app. HDFC Millennia RuPay needs to be linked via HDFC Bank's app (HDFC PayZapp or similar), not Google Pay or PhonePe. This is a known friction point in the RuPay-UPI ecosystem.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to pay at Zomato and earn maximum cashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Add your credit card directly in the Zomato app under payment methods. Do not use GPay or PhonePe as the payment method. If you use Axis ACE directly, you earn 5% (Zomato is a partner). Using GPay in between drops your reward to 0%.",
        },
      },
      {
        "@type": "Question",
        name: "Does UPI credit card work for person-to-person (P2P) transfers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. RBI does not permit credit cards to be used for P2P UPI transfers. You can only use a UPI-linked credit card for merchant payments (P2M). Sending money to a friend's UPI ID via a credit card is not allowed.",
        },
      },
      {
        "@type": "Question",
        name: "Is it worth getting a RuPay credit card just for UPI rewards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your UPI spend volume. If you spend ₹15,000 to ₹20,000/month via UPI on merchants, a RuPay card earning even 1% gives you ₹1,800 to ₹2,400/year in rewards. Weigh this against the annual fee and the friction of using a separate banking app for UPI.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for UPI Payments in India (June 2026)",
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
        name: "Best Credit Card for UPI Payments",
        item: "https://assurefintech.com/best/credit-card-for-upi-payments",
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

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/best/">Best Cards</Link>
        {" / "}
        Best Credit Card for UPI Payments
      </nav>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: `${COLOR}18`,
          color: COLOR,
          fontSize: 12,
          fontWeight: 600,
          padding: "4px 12px",
          borderRadius: 20,
          marginBottom: 16,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        <UpiLogoIcon />
        UPI Payments
      </div>

      <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px" }}>
        Best Credit Card for UPI Payments in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Paying your Swiggy order on GPay with your Axis ACE card? You earned 0 rewards. Here's what actually works.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>
        Last updated {UPDATED} · By Ash K · 7 min read
      </p>

      {/* The single most important fact */}
      <div
        style={{
          background: "#fef2f2",
          border: "2px solid #ef4444",
          borderRadius: 10,
          padding: "20px 22px",
          marginBottom: 40,
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 16, color: "#dc2626", marginBottom: 8 }}>
          The single most important fact on this page
        </div>
        <p style={{ margin: 0, fontSize: 15 }}>
          Visa and Mastercard credit cards earn <strong>zero rewards</strong> on UPI transactions. This applies to every card from HDFC, Axis, SBI, ICICI, Kotak, and every other Indian bank. The only credit cards that earn rewards via UPI are <strong>RuPay credit cards</strong>.
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--text-muted)" }}>
          Source: RBI's zero MDR policy on UPI (2020), confirmed by NPCI circular. Last verified June 2026.
        </p>
      </div>

      {/* Why this happens */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Visa/Mastercard credit cards earn nothing on UPI</h2>

        <p>
          Every time you swipe a credit card at a shop, the merchant pays an MDR (Merchant Discount Rate) of typically 1.5 to 2% to the bank. A slice of that MDR funds your reward points.
        </p>
        <p>
          In January 2020, RBI mandated zero MDR on all UPI transactions. Merchants pay nothing when you pay via UPI. Without MDR income, banks have no budget to fund rewards, so they simply don't give any.
        </p>

        {/* Visual flow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "16px",
            background: "var(--surface, #f8fafc)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            marginTop: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "You tap GPay", sub: "linked to Axis ACE" },
            null,
            { label: "UPI processes", sub: "Zero MDR" },
            null,
            { label: "Bank earns", sub: "₹0 from merchant" },
            null,
            { label: "Your reward", sub: "₹0 on this txn", highlight: true },
          ].map((item, i) =>
            item === null ? (
              <ArrowRightIcon key={i} />
            ) : (
              <div
                key={i}
                style={{
                  background: item.highlight ? "#fef2f2" : "white",
                  border: item.highlight ? "1.5px solid #ef4444" : "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "8px 14px",
                  textAlign: "center",
                  minWidth: 90,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: item.highlight ? "#dc2626" : "var(--text)" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.sub}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* What actually works */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <RupayBadgeIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>What actually earns rewards on UPI: RuPay credit cards</h2>
        </div>

        <p>
          NPCI (which runs both UPI and RuPay) built a separate incentive structure for RuPay credit cards on UPI. When you pay via UPI with a RuPay credit card, the transaction goes through a different processing rail, which can carry rewards.
        </p>
        <p>
          The catch: as of June 2026, most RuPay credit cards on UPI require you to use the issuing bank's own UPI app. You can't link your HDFC Millennia RuPay to Google Pay and expect rewards. You need to use HDFC's app.
        </p>

        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
          {rupayUpiCards.map((card) => (
            <div
              key={card.slug}
              style={{
                border: card.best ? `2px solid ${COLOR}` : "1.5px solid var(--border)",
                borderRadius: 10,
                padding: "18px 20px",
                background: card.best ? `${COLOR}07` : "var(--surface, #f8fafc)",
                position: "relative",
              }}
            >
              {card.best && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 18,
                    background: COLOR,
                    color: "white",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Best for UPI
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{card.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.issuer}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, color: COLOR }}>{card.fee}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.feeWaiver}</div>
                </div>
              </div>
              <div style={{ fontSize: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: 10 }}>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>UPI reward rate: </span>
                  <strong style={{ color: "#16a34a" }}>{card.upiReward}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>Direct card rate: </span>
                  {card.nonUpiReward}
                </div>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", fontStyle: "italic", marginBottom: 10 }}>{card.note}</div>
              <Link
                href={`/cards/${card.slug}`}
                style={{ color: COLOR, fontSize: 13, fontWeight: 600, textDecoration: "none", borderBottom: `1px solid ${COLOR}40` }}
              >
                Full review
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* The practical guide: direct vs UPI */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          How to actually pay Swiggy, Zomato, and Blinkit to earn rewards
        </h2>

        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 20 }}>
          <PhonePayIcon />
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0 }}>
              The way most people pay online is: open GPay or PhonePe, scan, or use UPI autopay. This kills all rewards on non-RuPay cards.
            </p>
            <p style={{ margin: "8px 0 0" }}>
              The right method is to add your credit card directly inside the merchant app and pay through that. One extra step, full rewards.
            </p>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Merchant", "Pay via GPay/PhonePe", "Pay directly in app", "Best card for direct pay"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Swiggy", "0% reward", "5% (Axis ACE partner)", "Axis ACE"],
                ["Zomato", "0% reward", "5% (Axis ACE partner)", "Axis ACE"],
                ["Blinkit", "0% reward", "5% (Axis ACE partner)", "Axis ACE"],
                ["Amazon", "0% reward", "5% (Prime, Amazon Pay ICICI)", "Amazon Pay ICICI"],
                ["Bigbasket", "0% reward", "1-2% varies", "HDFC Millennia"],
              ].map(([merchant, upiRate, directRate, bestCard], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--surface, #f8fafc)" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{merchant}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <ZeroRewardBadge />
                  </td>
                  <td style={{ padding: "10px 14px", color: "#16a34a", fontWeight: 600 }}>{directRate}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{bestCard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* When UPI genuinely makes sense */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>When paying via UPI (with a credit card) actually makes sense</h2>

        <div
          style={{
            display: "flex",
            gap: 14,
            background: `${COLOR}0d`,
            border: `1px solid ${COLOR}40`,
            borderRadius: 8,
            padding: "16px 18px",
            marginBottom: 14,
          }}
        >
          <InfoIcon />
          <p style={{ margin: 0, fontSize: 14 }}>
            Even without rewards, using a credit card via UPI gives you the credit period benefit. If your billing cycle closes on the 1st and due date is the 21st, a UPI payment on the 2nd effectively gives you ~50 days of interest-free credit before you pay.
          </p>
        </div>

        {[
          {
            scenario: "You have a RuPay credit card and use the bank's own UPI app",
            verdict: "Good. You earn rewards AND get credit period.",
            verdictColor: "#16a34a",
          },
          {
            scenario: "You want to track all spend in one place (budget management)",
            verdict: "Acceptable. Consolidates UPI payments to card statement, even if 0% rewards.",
            verdictColor: COLOR,
          },
          {
            scenario: "You want to earn 5% on Swiggy using GPay",
            verdict: "Not possible. Switch to direct card payment in the Swiggy app.",
            verdictColor: "#dc2626",
          },
          {
            scenario: "You want to hit the ₹1L spend threshold for card fee waiver",
            verdict: "Valid. Even 0%-reward UPI spends count toward spend-based fee waivers on most cards.",
            verdictColor: "#16a34a",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "14px 16px",
              marginBottom: 10,
              display: "flex",
              gap: 12,
            }}
          >
            <BlockedIcon />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{item.scenario}</div>
              <div style={{ fontSize: 13, color: item.verdictColor, fontWeight: 600 }}>{item.verdict}</div>
            </div>
          </div>
        ))}
      </section>

      {/* RuPay landscape 2026 */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The RuPay credit card landscape in 2026</h2>

        <p>
          NPCI has been aggressively pushing RuPay credit cards on UPI since 2023. In 2026, most major banks offer at least one RuPay variant of their popular card, though these are often less prominent than the Visa/Mastercard versions.
        </p>
        <p>
          The friction remains: you must use the issuing bank's UPI app, not Google Pay or PhonePe. NPCI has announced interoperability plans but as of June 2026, implementation is partial.
        </p>

        <div style={{ overflowX: "auto", marginTop: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Bank", "RuPay Credit Card", "UPI App Required", "Rewards on UPI"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["HDFC Bank", "Millennia RuPay", "HDFC Bank app", "Yes, 5% partner categories"],
                ["IDFC FIRST Bank", "WOW RuPay", "IDFC FIRST Pay", "Yes, reward points"],
                ["SBI", "SimplySAVE RuPay", "BHIM SBI Pay", "Yes, limited categories"],
                ["Axis Bank", "Axis RuPay (limited rollout)", "Axis Mobile", "Partial rollout June 2026"],
              ].map(([bank, card, app, reward], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--surface, #f8fafc)" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>{bank}</td>
                  <td style={{ padding: "10px 14px" }}>{card}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{app}</td>
                  <td style={{ padding: "10px 14px", color: "#16a34a", fontWeight: 600 }}>{reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Action plan */}
      <section
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderRadius: 10,
          padding: "24px 26px",
          marginBottom: 44,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>What to do right now</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            Check which cards you already own. Any non-RuPay card earns <strong>0 rewards on UPI</strong>.
          </li>
          <li>
            For Swiggy, Zomato, Blinkit: add your credit card directly in the app. Remove UPI as default payment.
          </li>
          <li>
            If UPI is your primary payment mode: consider IDFC FIRST WOW RuPay (FD-backed, easy to get, zero forex).
          </li>
          <li>
            Use our{" "}
            <Link href="/smart-swipe" style={{ color: COLOR }}>
              Smart Swipe tool
            </Link>{" "}
            to check the right payment method for every merchant category you spend on.
          </li>
          <li>
            Read{" "}
            <Link href="/blog/rupay-credit-card-upi-rewards-india-2026" style={{ color: COLOR }}>
              our complete RuPay credit card guide
            </Link>{" "}
            for bank-by-bank setup instructions.
          </li>
        </ol>
      </section>

      {/* Related links */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Related guides</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/best/credit-card-for-bill-payments" style={{ color: COLOR, fontSize: 14 }}>
            Best credit card for electricity and utility bill payments
          </Link>
          <Link href="/cards/axis-ace" style={{ color: COLOR, fontSize: 14 }}>
            Axis ACE credit card full review (5% on Swiggy, Zomato, Blinkit via direct pay)
          </Link>
          <Link href="/blog/zero-mdr-upi-credit-card-india" style={{ color: COLOR, fontSize: 14 }}>
            Why your credit card earns nothing on UPI: the MDR explainer
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faq.mainEntity.map((item, i) => (
            <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
              <summary
                style={{
                  fontWeight: 600,
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.name}
                <span style={{ color: COLOR, fontSize: 18, fontWeight: 300, marginLeft: 12 }}>+</span>
              </summary>
              <p style={{ margin: "10px 0 0", color: "var(--text-muted)", fontSize: 14 }}>
                {item.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          lineHeight: 1.8,
        }}
      >
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. UPI reward structures are based on NPCI and bank communications as of {UPDATED}. RuPay credit card UPI rewards are subject to change by NPCI and individual issuers. This is not financial advice. Verify current reward structures with the issuing bank before making decisions. Assure Fintech may earn referral fees from some card issuers, which does not influence editorial content.
      </footer>
    </main>
  );
}
