import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Bill Payments in India (June 2026)",
  description: "Axis ACE is the only card that rewards your electricity bill at 5%. Everyone else gives you 1% or nothing.",
  alternates: { canonical: "/best/best-credit-card-for-bill-payments" },
  openGraph: {
    title: "Best Credit Card for Bill Payments in India (June 2026)",
    description: "Axis ACE is the only card that rewards your electricity bill at 5%. Everyone else gives you 1% or nothing.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-bill-payments
// Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

function BoltIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lightning bolt representing electricity bill payments">
      <path d="M26 4L10 24h14L18 40l16-20H20L26 4z" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function AxisAceIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Axis ACE card - top pick for bill payments at 5% cashback">
      <rect x="2" y="10" width="40" height="24" rx="4" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <circle cx="34" cy="18" r="4" fill={COLOR} fillOpacity="0.3"/>
      <circle cx="38" cy="18" r="4" fill={COLOR} fillOpacity="0.5"/>
      <text x="10" y="32" fontSize="8" fill={COLOR} fontWeight="700">AXIS ACE</text>
      <text x="10" y="22" fontSize="7" fill="var(--text-muted)">5% utility</text>
    </svg>
  );
}

function BbpsIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BBPS - Bharat Bill Payment System logo representation">
      <rect x="2" y="8" width="40" height="28" rx="4" fill={COLOR} fillOpacity="0.08" stroke={COLOR} strokeWidth="1.5"/>
      <text x="22" y="24" textAnchor="middle" fontSize="9" fill={COLOR} fontWeight="800">BBPS</text>
      <text x="22" y="33" textAnchor="middle" fontSize="6" fill="var(--text-muted)">Bharat Bill Pay</text>
    </svg>
  );
}

function AutopayIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autopay cycle icon showing automated bill payment">
      <path d="M8 22 A14 14 0 0 1 36 22" stroke={COLOR} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M36 22 A14 14 0 0 1 8 22" stroke={COLOR} strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 2"/>
      <path d="M32 15l4 7-7 1" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 29l-4-7 7-1" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function FivePercentBadge() {
  return (
    <svg width="64" height="36" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="5% cashback badge for Axis ACE on utility bills">
      <rect width="64" height="36" rx="18" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5"/>
      <text x="32" y="24" textAnchor="middle" fontSize="16" fill={COLOR} fontWeight="800">5%</text>
    </svg>
  );
}

function CalendarCashIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calendar with cash symbol representing monthly bill payment schedule">
      <rect x="4" y="8" width="36" height="32" rx="3" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5"/>
      <line x1="4" y1="17" x2="40" y2="17" stroke="var(--border)" strokeWidth="1.5"/>
      <rect x="13" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <rect x="27" y="4" width="4" height="8" rx="2" fill={COLOR}/>
      <text x="22" y="32" textAnchor="middle" fontSize="12" fill={COLOR} fontWeight="700">₹₹₹</text>
    </svg>
  );
}

function GatewayIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Payment gateway showing different cashback rates by route">
      <rect x="4" y="16" width="14" height="22" rx="2" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.2"/>
      <rect x="26" y="16" width="14" height="22" rx="2" fill={COLOR} fillOpacity="0.3" stroke={COLOR} strokeWidth="1.2"/>
      <rect x="15" y="4" width="14" height="10" rx="2" fill={COLOR} fillOpacity="0.5" stroke={COLOR} strokeWidth="1.2"/>
      <line x1="22" y1="14" x2="11" y2="16" stroke={COLOR} strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="22" y1="14" x2="33" y2="16" stroke={COLOR} strokeWidth="1" strokeDasharray="2 2"/>
      <text x="22" y="11" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">Bill</text>
    </svg>
  );
}

export default function BestCreditCardForBillPayments() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives the most cashback on electricity bill payment in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE gives 5% cashback on electricity bill payments made via the Google Pay or ACE credit card utility category. No other major Indian credit card offers this rate on utility bills as of June 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What is BBPS and does my credit card work on it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BBPS (Bharat Bill Payment System) is RBI's centralised bill payment network that connects all utility providers. Most credit cards work on BBPS, but the reward rate may differ from direct payment. Some cards that give 5% on direct utility payments give only 1% or nothing on BBPS transactions.",
        },
      },
      {
        "@type": "Question",
        name: "Does Axis ACE give 5% on all utility bills or only specific ones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE gives 5% on utility payments classified under electricity, gas, and broadband when paid via Google Pay Bill Pay or other qualifying routes. DTH, water bills, and municipal taxes may be categorised differently and earn a lower rate. Always verify the MCC code of your specific biller.",
        },
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI give cashback on bill payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Pay ICICI gives 2% cashback on bill payments made through Amazon Pay Bill Pay. If you pay bills directly on the utility provider's website or via other apps, the rate drops to 1%. The 2% applies when Amazon Pay is the payment gateway.",
        },
      },
      {
        "@type": "Question",
        name: "Should I set up autopay for bills on my credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with one condition: make sure your credit card's autopay is set up before your billing cycle closes, and your card has enough available limit. Autopay ensures you never miss payments, earn rewards every cycle, and build consistent payment history.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay my mobile postpaid bill and earn 5% cashback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Axis ACE, mobile bills paid via Google Pay Bill Pay may qualify for the 5% utility category. However, this depends on the merchant category code assigned by your telecom provider. Check the Axis Bank website for the confirmed list of qualifying utility categories.",
        },
      },
      {
        "@type": "Question",
        name: "What is the annual cashback I can realistically earn on household bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical Indian household paying ₹3,000/month in electricity, broadband, and mobile bills earns ₹1,800/year at 5% (Axis ACE). That comfortably covers the ₹499 annual card fee and leaves ₹1,301 in net benefit.",
        },
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Bill Payments in India (June 2026)",
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
        name: "Best Credit Card for Bill Payments",
        item: "https://assurefintech.com/best/credit-card-for-bill-payments",
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
            Best Credit Card for Bill Payments in India (June 2026)
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
        Best Credit Card for Bill Payments
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
        <BoltIcon />
        Utility Bills
      </div>


      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 12px" }}>
        Axis ACE is the only card that rewards your electricity bill at 5%. Everyone else gives you 1% or nothing.
      </p>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
        Last updated {UPDATED} · By Ash K · 7 min read
      </p>

      {/* Honest opener */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderLeft: `4px solid ${COLOR}`,
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        <FivePercentBadge />
        <div>
          <strong style={{ color: COLOR }}>The honest number on this page:</strong>{" "}
          On ₹3,000/month in bills, Axis ACE earns ₹1,800/year. The next best option earns ₹720. The difference is ₹1,080/year on the same bills you'll pay regardless.
        </div>
      </div>

      {/* Winner section */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <AxisAceIcon />
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>The clear winner: Axis ACE Credit Card</h2>
        </div>

        <p>
          The Axis ACE is the only major Indian credit card that puts utility bills in its top reward category at 5% cashback. Every other card either excludes utility bills from high-reward categories or caps them at 1 to 2%.
        </p>
        <p>
          The 5% applies to electricity, broadband, and gas when paid via Google Pay Bill Pay. This covers the majority of Indian household bills routed through BBPS.
        </p>

        <div
          style={{
            background: "var(--raise)",
            border: `1.5px solid ${COLOR}`,
            borderRadius: 10,
            padding: "20px 22px",
            marginTop: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17 }}>Axis ACE Credit Card</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13 }}>Axis Bank · Visa</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 700, color: COLOR }}>₹499/yr</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Waived on ₹2L annual spend</div>
            </div>
          </div>
          <div style={{ fontSize: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
            <div><span style={{ color: "var(--text-muted)" }}>Utility bills: </span><strong style={{ color: COLOR }}>5% cashback</strong></div>
            <div><span style={{ color: "var(--text-muted)" }}>Swiggy/Zomato/Blinkit: </span>5% (direct pay)</div>
            <div><span style={{ color: "var(--text-muted)" }}>All other spends: </span>2% cashback</div>
            <div><span style={{ color: "var(--text-muted)" }}>Income required: </span>₹15,000/month</div>
          </div>
          <Link
            href="/cards/axis-ace"
            style={{
              display: "inline-block",
              marginTop: 14,
              fontSize: 13,
              color: COLOR,
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: `1px solid ${COLOR}40`,
            }}
          >
            Full Axis ACE review + apply
          </Link>
        </div>
      </section>

      {/* BBPS mechanics */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <BbpsIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>How BBPS works and why payment route matters</h2>
        </div>

        <p>
          BBPS (Bharat Bill Payment System) is RBI's centralised bill payment network. When you pay your electricity bill through Paytm, PhonePe, Google Pay, or any bank app, it almost certainly routes through BBPS.
        </p>
        <p>
          The critical detail is that the merchant category code (MCC) of your transaction changes depending on how you route it. Paying directly on your electricity provider's website may register as a different MCC than paying via Google Pay Bill Pay.
        </p>

        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginTop: 20, flexWrap: "wrap" }}>
          <GatewayIcon />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Same bill, different routes, different reward rates</div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${COLOR}40` }}>
                    {["Payment Route", "MCC Assigned", "Axis ACE Rate"].map((h) => (
                      <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--text-muted)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Google Pay Bill Pay", "Utilities (5491)", "5% cashback"],
                    ["Paytm (BBPS route)", "Varies by biller", "2% (usually)"],
                    ["Direct on DISCOM website", "Utilities or Govt", "2% (usually)"],
                    ["Bank's own netbanking", "Bill Payment", "2% or 0%"],
                  ].map(([route, mcc, rate], i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i === 0 ? `${COLOR}07` : "transparent" }}>
                      <td style={{ padding: "8px 12px", fontWeight: i === 0 ? 600 : 400 }}>{route}</td>
                      <td style={{ padding: "8px 12px", color: "var(--text-muted)" }}>{mcc}</td>
                      <td style={{ padding: "8px 12px", color: i === 0 ? COLOR : "var(--text)", fontWeight: i === 0 ? 700 : 400 }}>{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Other cards compared */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>How other popular cards handle utility bills</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              name: "Amazon Pay ICICI",
              fee: "Lifetime free",
              utilityRate: "2% via Amazon Pay Bill Pay, 1% otherwise",
              exclusions: "None specific",
              verdict: "Good secondary card. Use for bills if you already have it.",
              tag: "Good backup",
              tagColor: COLOR,
            },
            {
              name: "HDFC Millennia",
              fee: "₹1,000/yr",
              utilityRate: "1% on utility bill payments",
              exclusions: "Utility bills excluded from 5% partner category",
              verdict: "Disappointing for bills given the higher fee. Use this for shopping, not bills.",
              tag: "Not optimal",
              tagColor: "#f59e0b",
            },
            {
              name: "SBI Cashback",
              fee: "₹999/yr",
              utilityRate: "1% on utility bills",
              exclusions: "Utility not in 5% online category",
              verdict: "The 5% you see advertised is only for shopping sites. Bills are firmly in the 1% bucket.",
              tag: "Misleading for bills",
              tagColor: "#ef4444",
            },
            {
              name: "Axis MyZone",
              fee: "₹500/yr",
              utilityRate: "1% flat",
              exclusions: "None specific",
              verdict: "Axis's entry card. Get Axis ACE instead for utility category advantage.",
              tag: "Upgrade to ACE",
              tagColor: "var(--text-muted)",
            },
          ].map((card) => (
            <div
              key={card.name}
              style={{
                border: "1.5px solid var(--border)",
                borderRadius: 8,
                padding: "16px 18px",
                background: "var(--raise)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                <div style={{ fontWeight: 700 }}>{card.name}</div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{card.fee}</span>
                  <span
                    style={{
                      background: `${card.tagColor}18`,
                      color: card.tagColor,
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: 12,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
              <div style={{ fontSize: 13, marginBottom: 4 }}>
                <span style={{ color: "var(--text-muted)" }}>Utility bill rate: </span>
                <strong>{card.utilityRate}</strong>
              </div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>
                <span style={{ color: "var(--text-muted)" }}>Exclusions: </span>
                {card.exclusions}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", fontStyle: "italic" }}>{card.verdict}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cashback calculation */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Annual cashback calculation for a typical household</h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Bill Category", "Monthly Spend", "Axis ACE (5%)", "HDFC Millennia (1%)", "Amazon Pay ICICI (2%)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Electricity", "₹1,500", "₹75", "₹15", "₹30"],
                ["Mobile postpaid x2", "₹700", "₹35", "₹7", "₹14"],
                ["Broadband", "₹600", "₹30", "₹6", "₹12"],
                ["Gas/PNG", "₹400", "₹20", "₹4", "₹8"],
              ].map(([cat, spend, ace, millennia, amzn], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px" }}>{cat}</td>
                  <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>{spend}</td>
                  <td style={{ padding: "10px 14px", color: COLOR, fontWeight: 600 }}>{ace}</td>
                  <td style={{ padding: "10px 14px" }}>{millennia}</td>
                  <td style={{ padding: "10px 14px" }}>{amzn}</td>
                </tr>
              ))}
              <tr style={{ background: `${COLOR}0d`, borderTop: `2px solid ${COLOR}40` }}>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>Monthly total</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹3,200</td>
                <td style={{ padding: "10px 14px", fontWeight: 800, color: COLOR }}>₹160</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹32</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹64</td>
              </tr>
              <tr style={{ background: `${COLOR}07` }}>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>Annual total</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹38,400</td>
                <td style={{ padding: "10px 14px", fontWeight: 800, color: COLOR }}>₹1,920</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹384</td>
                <td style={{ padding: "10px 14px", fontWeight: 700 }}>₹768</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 10 }}>
          After Axis ACE annual fee (₹499): net benefit = ₹1,421. After HDFC Millennia annual fee (₹1,000): net benefit = negative ₹616 for bills alone.
        </p>
      </section>

      {/* Autopay setup */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <AutopayIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Setting up autopay for maximum reward and zero missed payments</h2>
        </div>

        <p>
          The single best thing you can do after getting an Axis ACE is to set up autopay for every recurring bill. This ensures you earn 5% every single month without logging in.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {[
            "Open Google Pay and go to Bill Payments section.",
            "Add each utility: electricity board, broadband provider, gas company, mobile postpaid.",
            "Set Axis ACE as the default payment method for each biller.",
            "Enable autopay with a reasonable maximum amount (say ₹3,000 for electricity).",
            "Set a calendar reminder to check your Axis ACE statement every month and pay the full balance.",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, fontSize: 14 }}>
              <div
                style={{
                  minWidth: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: COLOR,
                  color: "var(--raise)",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </div>
              <div style={{ paddingTop: 3 }}>{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly bill calendar */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <CalendarCashIcon />
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Monthly bill payment calendar for maximum reward</h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: `${COLOR}15`, borderBottom: `2px solid ${COLOR}40` }}>
                {["Bill Due Date", "Bill Type", "Pay via", "Card to Use", "Expected Cashback"].map((h) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["1st to 5th", "Electricity", "Google Pay Bill Pay", "Axis ACE", "5%"],
                ["7th to 10th", "Mobile (postpaid)", "Google Pay Bill Pay", "Axis ACE", "5%"],
                ["10th to 15th", "Broadband", "Google Pay Bill Pay", "Axis ACE", "5%"],
                ["15th to 20th", "Piped gas / LPG", "Google Pay Bill Pay", "Axis ACE", "5%"],
                ["Any", "Amazon subscriptions", "Amazon Pay ICICI direct", "Amazon Pay ICICI", "2%"],
              ].map(([date, bill, route, card, reward], i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--text-muted)" }}>{date}</td>
                  <td style={{ padding: "8px 12px" }}>{bill}</td>
                  <td style={{ padding: "8px 12px", color: "var(--text-muted)" }}>{route}</td>
                  <td style={{ padding: "8px 12px", fontWeight: 600 }}>{card}</td>
                  <td style={{ padding: "8px 12px", color: COLOR, fontWeight: 700 }}>{reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Actionable ending */}
      <section
        style={{
          background: `${COLOR}0d`,
          border: `1.5px solid ${COLOR}40`,
          borderRadius: 10,
          padding: "24px 26px",
          marginBottom: 44,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Three things to do this week</h2>
        <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
          <li>
            Apply for the{" "}
            <Link href="/cards/axis-ace" style={{ color: COLOR }}>
              Axis ACE credit card
            </Link>{" "}
            if you don't have it. Annual fee pays for itself in 3 months of household bills.
          </li>
          <li>
            Set up Google Pay Bill Pay for all your utilities, with Axis ACE as the payment card.
          </li>
          <li>
            Use our{" "}
            <Link href="/smart-swipe" style={{ color: COLOR }}>
              Smart Swipe tool
            </Link>{" "}
            to confirm your other spend categories are optimised too.
          </li>
        </ol>
      </section>

      {/* Related */}
      <section style={{ marginBottom: 44 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Related guides</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/best/credit-card-for-upi-payments" style={{ color: COLOR, fontSize: 14 }}>
            Best credit card for UPI payments (why most cards earn zero)
          </Link>
          <Link href="/blog/axis-ace-vs-amazon-pay-icici" style={{ color: COLOR, fontSize: 14 }}>
            Axis ACE vs Amazon Pay ICICI: which card wins overall?
          </Link>
          <Link href="/blog/bbps-credit-card-rewards-india" style={{ color: COLOR, fontSize: 14 }}>
            BBPS and credit cards: how the merchant category codes affect your rewards
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
        <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Reward rates and exclusions are based on issuer terms as of {UPDATED}. BBPS routing and MCC classifications can vary. Always confirm the applicable reward rate on your specific bill payment with the card issuer before relying on this guide for financial planning. Assure Fintech may earn referral fees from some card issuers.
      </footer>
    </main>
    </>
  );
}
