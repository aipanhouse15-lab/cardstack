import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card with Zero Forex Markup in India (June 2026)",
  description: "Every ₹1 lakh you spend internationally costs you ₹3,500 in forex markup on a standard card. Zero-forex cards eliminate this completely. Here's what's actual...",
  alternates: { canonical: "/best/best-credit-card-with-no-forex-markup" },
  openGraph: {
    title: "Best Credit Card with Zero Forex Markup in India (June 2026)",
    description: "Every ₹1 lakh you spend internationally costs you ₹3,500 in forex markup on a standard card. Zero-forex cards eliminate this completely. Here's what's actual...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-with-no-forex-markup
// Updated: June 4, 2026

const COLOR = "#ea580c";
const UPDATED = "June 4, 2026";

const IconGlobe = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="International spending globe icon">
    <circle cx="24" cy="24" r="18" fill={COLOR} opacity="0.1" stroke={COLOR} strokeWidth="2"/>
    <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke={COLOR} strokeWidth="1.5"/>
    <path d="M6 24H42" stroke={COLOR} strokeWidth="1.5"/>
    <path d="M9 16H39M9 32H39" stroke={COLOR} strokeWidth="1" strokeDasharray="3 2"/>
  </svg>
);

const IconRupeeArrow = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Forex markup rupee loss">
    <circle cx="14" cy="14" r="12" fill={COLOR} opacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
    <path d="M10 8H18M10 12H14C16.2 12 18 13.8 18 16C18 18.2 16.2 20 14 20H10" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 16H16" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zero forex confirmed">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.12"/>
    <path d="M5 9.5L8 12L13 6" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCross = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Has forex markup">
    <circle cx="9" cy="9" r="8" fill="#fee2e2" opacity="0.6"/>
    <path d="M6 6L12 12M12 6L6 12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconATM = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ATM abroad withdrawal icon">
    <rect x="4" y="6" width="20" height="16" rx="3" fill="var(--raise)" stroke={COLOR} strokeWidth="1.8"/>
    <rect x="7" y="10" width="8" height="5" rx="1" fill={COLOR} opacity="0.2"/>
    <rect x="17" y="10" width="4" height="2" rx="0.5" fill={COLOR} opacity="0.4"/>
    <rect x="17" y="14" width="4" height="2" rx="0.5" fill={COLOR} opacity="0.4"/>
    <path d="M10 22L10 26M18 22L18 26" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconWarn = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DCC warning">
    <path d="M11 2L21 19H1L11 2Z" fill="#fff7ed" stroke="#f97316" strokeWidth="1.8"/>
    <rect x="10" y="8" width="2" height="5" rx="1" fill="var(--raise)"/>
    <rect x="10" y="15" width="2" height="2" rx="1" fill="var(--raise)"/>
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top pick indicator">
    <polygon points="9,1.5 11,7 17,7 12,11 14,17 9,13.5 4,17 6,11 1,7 7,7" fill={COLOR}/>
  </svg>
);

export default function BestCreditCardWithNoForexMarkup() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is forex markup on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Forex markup (or foreign currency markup) is a fee banks charge when you spend in a currency other than Indian rupees. It is applied on top of the RBI reference rate (the true mid-market rate). Most Indian credit cards charge 2.5% to 3.5% as forex markup. On ₹1 lakh of international spending, this is ₹2,500 to ₹3,500 in pure fees — not a government charge, just the bank's margin."
        }
      },
      {
        "@type": "Question",
        name: "Which Indian credit card has truly zero forex markup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of June 2026, IDFC FIRST WOW credit card (lifetime free) has genuinely zero forex markup — you pay exactly the RBI reference rate with no markup. Scapia Federal credit card (also free) has zero forex markup and additionally earns 4% back on travel booked via the Scapia app. Both cards are currently the best free zero-forex options in India."
        }
      },
      {
        "@type": "Question",
        name: "Is IDFC FIRST Select a zero forex card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, and this is a very common misconception. IDFC FIRST Select charges 3.5% forex markup — it is not a zero-forex card. The confusion arises because IDFC FIRST WOW (a different, lifetime-free card) is zero-forex. Check the specific card name carefully before applying."
        }
      },
      {
        "@type": "Question",
        name: "What is DCC and should I always decline it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DCC stands for Dynamic Currency Conversion. When you pay at an international merchant, the terminal may offer to convert the charge to rupees on the spot, showing you the amount in INR. This sounds convenient but the conversion rate used by the merchant's bank is typically 4-7% worse than what your card would apply. Always choose to pay in the local currency — not in rupees. Decline the DCC offer every time."
        }
      },
      {
        "@type": "Question",
        name: "Does Scapia Federal credit card work everywhere internationally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scapia Federal is a Visa card and works at all Visa-accepting merchants globally. The zero-forex markup applies to all international transactions. The 4% travel reward applies only to travel bookings made through the Scapia app. Standard merchant purchases internationally earn a lower reward rate but still with zero markup."
        }
      },
      {
        "@type": "Question",
        name: "Can I use my zero-forex card at ATMs abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but there are two layers of charges at foreign ATMs. First, forex markup (zero on IDFC WOW and Scapia). Second, a cash advance fee (typically 2.5-3% of the amount withdrawn, charged separately by your Indian bank). Additionally, the foreign ATM's own bank may charge a local fee. Net result: even on a zero-forex card, international ATM withdrawals are more expensive than card swipes. Use your card for spending; minimise ATM withdrawals."
        }
      },
      {
        "@type": "Question",
        name: "How much do I save with a zero-forex card on a 15-day international trip?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical 15-day international trip for one person involves ₹80,000 to ₹1,50,000 in local spending (hotels, food, transport, shopping). At 3.5% standard markup versus 0%, you save ₹2,800 to ₹5,250 purely on forex fees. For a couple spending ₹2 lakh, the savings are ₹7,000 — enough to pay for 1-2 extra meals or a day excursion."
        }
      },
      {
        "@type": "Question",
        name: "Is OneCard a zero-forex credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. OneCard charges 1% forex markup, which is lower than the industry standard of 3-3.5% but not zero. On ₹1 lakh of international spend, OneCard costs you ₹1,000 in forex — compared to ₹0 on IDFC WOW or Scapia. OneCard's strong domestic rewards make it a good everyday card but not the best choice for international travel."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card with Zero Forex Markup in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card with No Forex Markup", item: "https://assurefintech.com/best/credit-card-with-no-forex-markup" }
    ]
  };

  const cards = [
    {
      rank: 1,
      name: "IDFC FIRST WOW",
      fee: "Lifetime Free",
      forex: "0%",
      rewardRate: "1.5% on international spends",
      atmFee: "2.5% cash advance (standard)",
      bestFor: "Anyone who travels internationally and doesn't want a fee card",
      keyNote: "TRUE zero forex. Not IDFC FIRST Select (3.5%). Confirm card name at issuance."
    },
    {
      rank: 2,
      name: "Scapia Federal",
      fee: "Lifetime Free",
      forex: "0%",
      rewardRate: "4% on Scapia travel bookings; 1% on all else",
      atmFee: "2.5% cash advance",
      bestFor: "International travellers who book flights and hotels through apps",
      keyNote: "Zero forex + travel rewards combo. Best free card for international frequent travellers."
    },
    {
      rank: 3,
      name: "ICICI Emeralde",
      fee: "₹12,000/yr",
      forex: "1.5% (low, not zero)",
      rewardRate: "~2% on international + unlimited lounge",
      atmFee: "Waived on premium tier",
      bestFor: "High-spenders who want lounge + low forex in one premium card",
      keyNote: "Not zero-forex but lowest markup among premium cards. Not the right pick if forex saving is the only goal."
    },
    {
      rank: 4,
      name: "OneCard",
      fee: "Lifetime Free",
      forex: "1%",
      rewardRate: "Up to 5% on top 2 spend categories",
      atmFee: "2.5% cash advance",
      bestFor: "Young professionals who travel occasionally and want strong domestic rewards",
      keyNote: "1% forex is good but not zero. Strong domestic card; not the best dedicated travel card."
    }
  ];

  const savingsTable = [
    ["₹25,000", "₹875", "₹250", "₹0", "₹0"],
    ["₹50,000", "₹1,750", "₹500", "₹0", "₹0"],
    ["₹1,00,000", "₹3,500", "₹1,000", "₹0", "₹0"],
    ["₹2,00,000", "₹7,000", "₹2,000", "₹0", "₹0"],
    ["₹5,00,000", "₹17,500", "₹5,000", "₹0", "₹0"]
  ];

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 24 }}>
        <Link href="/">Home</Link>{" / "}<Link href="/best/">Best Cards</Link>{" / "}
        <span>Best Credit Card with No Forex Markup</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <IconGlobe />
        <span style={{ background: COLOR, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600 }}>INTERNATIONAL TRAVEL</span>
      </div>

      <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, lineHeight: 1.25, marginBottom: 14 }}>
        Best Credit Card with Zero Forex Markup in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted,#475569)", marginBottom: 10, fontWeight: 500 }}>
        Every ₹1 lakh you spend internationally costs you ₹3,500 in forex markup on a standard card. Zero-forex cards eliminate this completely. Here's what's actually worth carrying.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>By Ash K</span><span>10 min read</span>
      </div>

      {/* Honest number box */}
      <div style={{ background: `${COLOR}08`, border: `2px solid ${COLOR}30`, borderRadius: 12, padding: "18px 22px", marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <IconRupeeArrow />
        <div>
          <strong style={{ color: COLOR, fontSize: 14, display: "block", marginBottom: 4 }}>The Honest Number</strong>
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted,#475569)" }}>
            A standard Indian credit card charges 2.5-3.5% forex markup plus 18% GST on that fee. On ₹2 lakh of international spend (a modest 10-day Europe trip for one), you pay ₹5,900 to ₹8,260 in fees that serve no purpose except bank profit. This is not a government tax, RBI charge, or Visa/Mastercard fee. It is a pure bank margin. Zero-forex cards eliminate it entirely.
          </p>
        </div>
      </div>

      {/* What forex markup is */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What Forex Markup Is (and What It Isn't)</h2>

      <p style={{ marginBottom: 12 }}>
        When you swipe your card at a shop in Singapore or pay for a hotel in London, your Indian bank converts that foreign currency amount to rupees. The conversion uses RBI's reference rate as the base — this is the true mid-market rate, the same one you see on Google.
      </p>

      <p style={{ marginBottom: 12 }}>
        On top of that, the bank adds a forex markup of 2.5% to 3.5%. GST at 18% is then charged on this markup. So the effective extra cost on a 3.5% markup card is approximately 4.13%.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Government / RBI / Visa fee", amount: "₹0", isGood: true },
          { label: "Bank forex markup (3.5%)", amount: "₹3,500", isGood: false },
          { label: "GST on markup (18%)", amount: "₹630", isGood: false }
        ].map(({ label, amount, isGood }, i) => (
          <div key={i} style={{ background: isGood ? "var(--green-dim)" : "#fff1f0", border: `1px solid ${isGood ? "rgba(62,224,143,.35)" : "#fca5a5"}`, borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted,#64748b)", marginBottom: 6 }}>{label}</div>
            <strong style={{ color: isGood ? "#16a34a" : "#dc2626", fontSize: 18 }}>{amount}</strong>
            <div style={{ fontSize: 11, color: "var(--text-muted,#64748b)" }}>per ₹1 lakh spent</div>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: 24 }}>
        This fee structure applies on every single international transaction — merchant payments, hotel checkouts, subscription renewals in foreign currency, and international ATM withdrawals. A zero-forex card eliminates the bank markup; GST on zero markup is also zero.
      </p>

      {/* DCC section */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>DCC: The Second Layer of Cost You Must Decline</h2>

      <div style={{ background: "rgba(212,168,83,.06)", border: "1.5px solid #f97316", borderRadius: 10, padding: "14px 18px", marginBottom: 16, display: "flex", gap: 10 }}>
        <IconWarn />
        <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted,#475569)" }}>
          Dynamic Currency Conversion (DCC) is a merchant-side trap that often catches Indian travellers. When the terminal asks "Pay in Indian Rupees or local currency?", always choose local currency. The DCC rate is 4-7% worse than your card's rate — even on a zero-forex card.
        </p>
      </div>

      <p style={{ marginBottom: 12 }}>
        DCC is offered at hotel checkouts, restaurants, and shopping malls in tourist destinations. The terminal shows you a rupee amount, which feels convenient but costs you significantly more. The merchant's acquirer bank profits from this conversion.
      </p>

      <p style={{ marginBottom: 24 }}>
        The rule is universal: always pay in the local currency of the country you're in, not in rupees. This applies even if you have a zero-forex card — DCC adds a separate markup that your zero-forex benefit does not cover.
      </p>

      {/* Savings table */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How Much You Save at Different Spend Levels</h2>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: `${COLOR}12` }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Intl Spend</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Standard Card (3.5%)</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>OneCard (1%)</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))", color: COLOR }}>IDFC WOW / Scapia (0%)</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Saving vs Std</th>
            </tr>
          </thead>
          <tbody>
            {savingsTable.map(([spend, std, onecard, zero, saving], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 14px", fontWeight: 600 }}>{spend}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#dc2626" }}>{std}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#f97316" }}>{onecard}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: COLOR, fontWeight: 700 }}>{zero}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: COLOR, fontWeight: 700 }}>
                  {`₹${Number(std.replace(/[₹,]/g, '')) - 0}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card picks */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Top Zero and Low Forex Cards in India (June 2026)</h2>
      <p style={{ color: "var(--text-muted,#64748b)", fontSize: 14, marginBottom: 20 }}>Verified against official card T&Cs and MITC documents as of {UPDATED}.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
        {cards.map((card) => (
          <div key={card.rank} style={{ border: `2px solid ${card.rank <= 2 ? COLOR : "var(--hair)"}`, borderRadius: 14, padding: "20px 22px", background: card.rank === 1 ? `${COLOR}06` : "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {card.rank <= 2 && <IconStar />}
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>#{card.rank} {card.name}</h3>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ background: card.forex === "0%" ? `${COLOR}15` : "#fef3c7", color: card.forex === "0%" ? COLOR : "#92400e", borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>Forex: {card.forex}</span>
                <span style={{ background: "var(--raise)", color: "var(--text-muted,#64748b)", borderRadius: 20, padding: "3px 10px", fontSize: 12, border: "1px solid var(--border,var(--hair))" }}>{card.fee}</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 13, color: "var(--text-muted,#475569)", marginBottom: 12 }}>
              <div><span style={{ fontWeight: 600 }}>Reward Rate:</span> {card.rewardRate}</div>
              <div><span style={{ fontWeight: 600 }}>ATM Abroad:</span> {card.atmFee}</div>
              <div style={{ gridColumn: "1/-1" }}><span style={{ fontWeight: 600 }}>Best For:</span> {card.bestFor}</div>
            </div>
            <div style={{ background: `${COLOR}10`, borderRadius: 8, padding: "8px 12px", fontSize: 13, color: COLOR, fontWeight: 600 }}>
              Key note: {card.keyNote}
            </div>
          </div>
        ))}
      </div>

      {/* IDFC WOW vs IDFC Select clarification */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>IDFC FIRST WOW vs IDFC FIRST Select: Not the Same Card</h2>

      <p style={{ marginBottom: 12 }}>
        This is the most common zero-forex confusion among Indian credit card applicants in 2026. IDFC FIRST has multiple cards and only one of them — WOW — has zero forex markup.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        <div style={{ background: "var(--green-dim)", border: "1px solid #86efac", borderRadius: 10, padding: "16px" }}>
          <strong style={{ color: "#16a34a", display: "block", marginBottom: 8 }}>IDFC FIRST WOW</strong>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <IconCheck />
            <span style={{ fontSize: 13 }}>Zero forex markup</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <IconCheck />
            <span style={{ fontSize: 13 }}>Lifetime free card</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <IconCheck />
            <span style={{ fontSize: 13 }}>Points never expire</span>
          </div>
        </div>
        <div style={{ background: "rgba(212,168,83,.06)", border: "1px solid #fdba74", borderRadius: 10, padding: "16px" }}>
          <strong style={{ color: "#c2410c", display: "block", marginBottom: 8 }}>IDFC FIRST Select</strong>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <IconCross />
            <span style={{ fontSize: 13 }}>3.5% forex markup</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <IconCheck />
            <span style={{ fontSize: 13 }}>Strong domestic rewards</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <IconCheck />
            <span style={{ fontSize: 13 }}>Lifetime free card</span>
          </div>
        </div>
      </div>

      {/* ATM abroad */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Using Your Card at ATMs Abroad: What to Know</h2>

      <p style={{ marginBottom: 12 }}>
        Even a zero-forex card has costs at international ATMs. Your Indian bank charges a cash advance fee (typically 2.5-3% of the amount, minimum ₹500) every time you withdraw cash abroad. This is separate from the forex markup and applies even when the forex markup is zero.
      </p>

      <div style={{ display: "flex", gap: 12, padding: "14px 16px", background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 10, marginBottom: 12 }}>
        <IconATM />
        <div>
          <strong style={{ fontSize: 14, display: "block", marginBottom: 4 }}>International ATM Withdrawal Cost Example</strong>
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted,#475569)" }}>
            Withdrawing ₹10,000 equivalent abroad on IDFC WOW: forex markup = ₹0, cash advance fee = ₹250 (2.5%), GST on advance fee = ₹45, foreign ATM fee = $3-5 (≈₹250-420). Total: ₹500-720 in fees for a ₹10,000 withdrawal.
          </p>
        </div>
      </div>

      <p style={{ marginBottom: 24 }}>
        The recommendation: carry a zero-forex card for all card payments abroad and use ATMs only when merchants require cash. In most developed and major tourist destinations (Dubai, Thailand, Europe, USA), card payments at restaurants, shops, and hotels work seamlessly.
      </p>

      {/* Travel checklist */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>International Travel Card Checklist</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {[
          "Carry at least 2 cards on international trips — one as primary (zero-forex), one as backup on a different network (Visa + Mastercard if possible).",
          "Inform your bank of travel dates to prevent fraud blocks. Most banks allow this via the mobile app under 'Travel Notification'.",
          "Always decline DCC at merchant terminals. Pay in local currency, not rupees.",
          "Keep some local currency cash for taxis, small vendors, and markets. Withdraw from ATMs in larger amounts to minimise fixed fees per withdrawal.",
          "For online international purchases (subscriptions, Amazon global, Airbnb), use your zero-forex card — these also attract forex markup on standard cards.",
          "Check if your card has international transaction limits. Some base-tier cards have per-transaction or monthly caps on international spend."
        ].map((tip, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", background: "var(--raise)", borderRadius: 8, border: "1px solid var(--border,var(--hair))" }}>
            <div style={{ background: COLOR, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
            <span style={{ fontSize: 13, color: "var(--text-muted,#475569)" }}>{tip}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: `${COLOR}08`, border: `2px solid ${COLOR}`, borderRadius: 16, padding: "24px 26px", marginBottom: 44 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: COLOR }}>Planning an International Trip? Do This First.</h3>
        <p style={{ margin: "0 0 16px", fontSize: 14, color: "var(--text-muted,#475569)" }}>
          Apply for IDFC FIRST WOW or Scapia Federal at least 2 weeks before travel — physical card delivery takes 7-10 working days. Both cards are free and approve quickly. Pair with a lounge card for complete travel coverage.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/cards/idfc-first-wow" style={{ display: "inline-block", padding: "10px 18px", background: COLOR, color: "#fff", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>IDFC FIRST WOW Full Review</Link>
          <Link href="/best/credit-card-for-lounge-access" style={{ display: "inline-block", padding: "10px 18px", background: "var(--raise)", color: COLOR, border: `1px solid ${COLOR}`, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Lounge Access Guide</Link>
          <Link href="/blog/forex-markup-india-explained" style={{ display: "inline-block", padding: "10px 18px", background: "var(--raise)", color: COLOR, border: `1px solid ${COLOR}`, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Forex Markup Deep Dive</Link>
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
          <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. Forex markup rates and card features are subject to change by the issuing bank. Always verify the current forex charges with your bank before international travel.
        </p>
        <p style={{ margin: 0 }}>
          Data sourced from official IDFC FIRST, Federal Bank, ICICI Bank, and OneCard T&C pages as of {UPDATED}. Related: <Link href="/best/credit-card-for-lounge-access" style={{ color: COLOR }}>Lounge Access Cards</Link> and <Link href="/best/credit-card-for-high-income-earners" style={{ color: COLOR }}>High Income Premium Cards</Link>.
        </p>
      </footer>
    </main>
  );
}
