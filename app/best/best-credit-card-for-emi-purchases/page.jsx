import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for EMI Purchases in India (June 2026)",
  description: "No-cost EMI sounds free. It isn't. Here's the real cost on every top option, and which card minimises what you actually pay.",
  alternates: { canonical: "/best/best-credit-card-for-emi-purchases" },
  openGraph: {
    title: "Best Credit Card for EMI Purchases in India (June 2026)",
    description: "No-cost EMI sounds free. It isn't. Here's the real cost on every top option, and which card minimises what you actually pay.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-emi-purchases
// Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const IconEMI = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EMI credit card icon">
    <rect x="4" y="10" width="40" height="28" rx="5" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="2"/>
    <rect x="4" y="18" width="40" height="6" fill={COLOR} opacity="0.18"/>
    <circle cx="34" cy="32" r="3" fill={COLOR}/>
    <circle cx="40" cy="32" r="3" fill={COLOR} opacity="0.5"/>
    <text x="9" y="35" fontSize="7" fill={COLOR} fontWeight="700">EMI</text>
  </svg>
);

const IconWarning = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Warning: hidden cost">
    <path d="M14 3L26 24H2L14 3Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
    <rect x="13" y="11" width="2" height="7" rx="1" fill="#d97706"/>
    <rect x="13" y="20" width="2" height="2" rx="1" fill="#d97706"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monthly EMI calendar">
    <rect x="3" y="5" width="22" height="20" rx="3" fill="var(--raise)" stroke="var(--hair)" strokeWidth="2"/>
    <rect x="3" y="10" width="22" height="3" fill={COLOR} opacity="0.2"/>
    <rect x="8" y="3" width="2" height="5" rx="1" fill={COLOR}/>
    <rect x="18" y="3" width="2" height="5" rx="1" fill={COLOR}/>
    <text x="8" y="22" fontSize="7" fill="var(--text-muted,#64748b)">1 2 3 4 5</text>
  </svg>
);

const IconRupee = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rupee cost indicator">
    <circle cx="14" cy="14" r="12" fill={COLOR} opacity="0.1" stroke={COLOR} strokeWidth="1.5"/>
    <text x="9" y="19" fontSize="13" fill={COLOR} fontWeight="700">₹</text>
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top pick star">
    <polygon points="10,2 12.5,7.5 18.5,8 14,12.5 15.5,18.5 10,15.5 4.5,18.5 6,12.5 1.5,8 7.5,7.5" fill={COLOR} opacity="0.85"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit included">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.15"/>
    <path d="M5 9.5L8 12.5L13 6.5" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Information note">
    <circle cx="10" cy="10" r="9" fill="var(--raise)" stroke={COLOR} strokeWidth="1.5"/>
    <rect x="9" y="9" width="2" height="5" rx="1" fill={COLOR}/>
    <rect x="9" y="5.5" width="2" height="2" rx="1" fill={COLOR}/>
  </svg>
);

const IconPercent = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Processing fee percentage">
    <circle cx="9" cy="9" r="4" fill="none" stroke={COLOR} strokeWidth="2"/>
    <circle cx="19" cy="19" r="4" fill="none" stroke={COLOR} strokeWidth="2"/>
    <path d="M7 21L21 7" stroke={COLOR} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function BestCreditCardForEMIPurchases() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is no-cost EMI truly free on credit cards in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. No-cost EMI is typically structured in one of two ways: the brand or merchant inflates the product price to cover the interest (called price subvention), or the bank charges a processing fee of 1-2% upfront. There is no such thing as genuinely free financing — the cost is just shifted or hidden."
        }
      },
      {
        "@type": "Question",
        name: "Do I earn reward points on EMI transactions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the type of EMI. For cost EMI (where you pay interest), most banks including HDFC and Axis do allow reward points on the full purchase amount. For no-cost EMI, many banks have started withholding reward points — specifically for transactions where the EMI is subvented by the brand. Always check your bank's current T&C before assuming points will accrue."
        }
      },
      {
        "@type": "Question",
        name: "Which HDFC credit card is best for EMI purchases in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HDFC Regalia and HDFC Infinia are the strongest EMI cards in 2026. Both have wide acceptance across Amazon, Flipkart, Apple, and Samsung stores. Infinia earns 3.33% back via SmartBuy, making it the highest-value EMI card for high-ticket purchases like laptops and appliances if you can access it."
        }
      },
      {
        "@type": "Question",
        name: "What is the EMI processing fee on SBI credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI credit cards typically charge a processing fee of 1% to 2% on EMI conversions, with a minimum of ₹199 per transaction. On a ₹50,000 purchase at 1%, that is ₹500 out of pocket. This is separate from any interest charged on cost EMI plans."
        }
      },
      {
        "@type": "Question",
        name: "Can I convert any credit card transaction to EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Post-purchase EMI conversion (converting a regular transaction into EMI after billing) is available on most premium cards from HDFC, SBI, Axis, and ICICI. This is different from no-cost EMI offered at the point of sale. Post-purchase conversion usually carries interest at 13-15% annualised."
        }
      },
      {
        "@type": "Question",
        name: "Is it better to pay full amount or take EMI on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you can pay the full amount within the credit-free period, always do that. EMI converts a non-interest transaction into an interest-bearing one. The only exception is genuine no-cost EMI where the price is not inflated AND you get reward points — which is increasingly rare in 2026."
        }
      },
      {
        "@type": "Question",
        name: "Does Axis ACE credit card give reward points on EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axis ACE earns 2% cashback on most spends. For EMI transactions, cashback accrual depends on whether the EMI is bank-initiated or merchant-subvented. Bank-initiated cost EMI typically earns cashback; brand-subvented no-cost EMI may not. Check Axis's current MITC before large purchases."
        }
      },
      {
        "@type": "Question",
        name: "What happens to my credit limit during an EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The full purchase amount is blocked from your credit limit upfront. As you pay each EMI, only that month's instalment amount is freed up — not the full amount. If you buy a ₹60,000 laptop on EMI with a ₹1 lakh limit, you have only ₹40,000 available for the rest of the billing cycle."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for EMI Purchases in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for EMI Purchases", item: "https://assurefintech.com/best/credit-card-for-emi-purchases" }
    ]
  };

  const cards = [
    {
      rank: 1,
      name: "HDFC Infinia",
      fee: "₹12,500/yr",
      emiHighlight: "3.33% back via SmartBuy on full purchase before EMI split",
      processingFee: "Nil on most partner EMIs",
      network: "Amazon, Flipkart, Apple, Samsung, 5,000+ offline stores",
      verdict: "Best for high-value EMI: ₹1L laptop = ₹3,330 back",
      access: "Invite-only, ₹30L+ income"
    },
    {
      rank: 2,
      name: "HDFC Regalia Gold",
      fee: "₹2,500/yr",
      emiHighlight: "4X reward points on electronics (up to 1.6% return)",
      processingFee: "Nil to 1% depending on partner",
      network: "Amazon, Flipkart, Croma, Reliance Digital",
      verdict: "Best mid-range EMI card for salaried professionals",
      access: "Open market, ₹12L+ income"
    },
    {
      rank: 3,
      name: "Axis ACE",
      fee: "₹499/yr (waived at ₹2L spend)",
      emiHighlight: "2% cashback on EMI transactions (cost EMI only)",
      processingFee: "1-2% (approx. ₹499 minimum)",
      network: "Flipkart, Amazon, Bajaj Finance merchants",
      verdict: "Best low-fee EMI card for sub-₹1L purchases",
      access: "Open market, ₹3L+ income"
    },
    {
      rank: 4,
      name: "SBI Card ELITE",
      fee: "₹4,999/yr",
      emiHighlight: "5X points on dining/groceries; standard points on EMI",
      processingFee: "1% (min ₹199)",
      network: "Wide retail network, SBI SimplySAVE EMI stores",
      verdict: "Best for offline EMI at retail stores across India",
      access: "Open market, ₹6L+ income"
    }
  ];

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 24 }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/best/">Best Cards</Link>
        {" / "}
        <span>Best Credit Card for EMI Purchases</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <IconEMI />
        <span style={{ background: COLOR, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, letterSpacing: 0.4 }}>EMI GUIDE</span>
      </div>

      <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, lineHeight: 1.25, marginBottom: 14, color: "var(--text)" }}>
        Best Credit Card for EMI Purchases in India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted,#475569)", marginBottom: 10, fontWeight: 500 }}>
        No-cost EMI sounds free. It isn't. Here's the real cost on every top option, and which card minimises what you actually pay.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>By Ash K</span>
        <span>9 min read</span>
      </div>

      {/* The honest number box */}
      <div style={{ background: `${COLOR}10`, border: `1.5px solid ${COLOR}30`, borderRadius: 12, padding: "18px 20px", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <IconWarning />
          <div>
            <strong style={{ color: COLOR, fontSize: 14 }}>The Honest Number on No-Cost EMI</strong>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--text-muted,#475569)" }}>
              On a ₹50,000 purchase with 1% processing fee, you pay ₹500 upfront. The brand-subvented "free" EMI usually means the product price is ₹1,200 to ₹3,000 higher than its cash price. Run the <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe calculator</Link> to see your real cost before you tap.
            </p>
          </div>
        </div>
      </div>

      {/* How no-cost EMI actually works */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>How No-Cost EMI Actually Works in 2026</h2>

      <p style={{ marginBottom: 12 }}>
        When you see "0% EMI for 6 months" on Amazon or Flipkart, one of two things is happening. Either the bank is subsidising the interest (called bank-subvented EMI), or the brand has quietly raised the product's MRP to cover the financing cost (brand-subvented EMI).
      </p>

      <p style={{ marginBottom: 12 }}>
        In the first case, your card often earns no reward points because the bank classifies it as a financing transaction. In the second case, you pay full price and the brand covers the interest — but you may have been able to buy the product cheaper with an instant bank discount or during a sale.
      </p>

      <div style={{ background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 10, padding: "16px 20px", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <IconInfo />
          <strong style={{ fontSize: 14 }}>RBI Directive (2024, still in force June 2026)</strong>
        </div>
        <p style={{ fontSize: 14, margin: 0, color: "var(--text-muted,#475569)" }}>
          RBI's 2024 circular requires banks to disclose the effective interest rate on all EMI schemes, including "no-cost" ones. If your bank app isn't showing you an effective APR, that's a red flag. The regulator calls hidden interest "unfair trade practice" — yet enforcement at the merchant level remains patchy.
        </p>
      </div>

      <p style={{ marginBottom: 12 }}>
        A processing fee of 1-2% on a 6-month no-cost EMI is equivalent to roughly 3.5-7% annual interest. That's not meaningfully cheaper than a standard credit card cost EMI at 12-15% annualised for short tenures.
      </p>

      <p style={{ marginBottom: 24 }}>
        The only genuinely good use case for no-cost EMI is when you lack the lump sum but the price hasn't been inflated, and your card earns points on the full transaction amount upfront. That combination exists, but you need to verify it card by card.
      </p>

      {/* Reward points on EMI */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Reward Points Question: Do You Earn on EMI?</h2>

      <p style={{ marginBottom: 12 }}>
        This is the most misunderstood aspect of credit card EMIs. The rule is not universal — it differs by bank, by EMI type, and sometimes by the specific merchant.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <div style={{ background: "var(--green-dim)", border: "1px solid #86efac", borderRadius: 8, padding: "14px 16px" }}>
          <strong style={{ fontSize: 13, color: "#16a34a", display: "block", marginBottom: 6 }}>Cost EMI (you pay interest)</strong>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.7 }}>
            <li>HDFC: Points earned on full amount</li>
            <li>Axis: 2% cashback still accrues</li>
            <li>SBI: Points earned, lower rate</li>
            <li>ICICI: Points on principal amount</li>
          </ul>
        </div>
        <div style={{ background: "rgba(212,168,83,.06)", border: "1px solid #fdba74", borderRadius: 8, padding: "14px 16px" }}>
          <strong style={{ fontSize: 13, color: "#ea580c", display: "block", marginBottom: 6 }}>No-Cost EMI (subvented)</strong>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.7 }}>
            <li>HDFC: Points withheld on select brand EMIs</li>
            <li>Axis: Cashback may not apply</li>
            <li>SBI: Points NOT earned (per MITC 2026)</li>
            <li>Amazon Pay ICICI: Points earned (exception)</li>
          </ul>
        </div>
      </div>

      <p style={{ marginBottom: 24 }}>
        Amazon Pay ICICI is an interesting exception: their no-cost EMI on Amazon often still earns the standard 5% back for Prime members because Amazon is both the merchant and the EMI partner. Verify this at checkout before assuming.
      </p>

      {/* Processing fee math */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Processing Fee Math: What You Actually Pay</h2>

      <p style={{ marginBottom: 16 }}>
        A 1% processing fee sounds trivial until you apply it to real purchase sizes. Here's what that looks like across common big-ticket purchases.
      </p>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: `${COLOR}12` }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Purchase</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Amount</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>1% Fee</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>2% Fee</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Smartphone (mid-range)", "₹20,000", "₹200", "₹400"],
              ["Laptop", "₹55,000", "₹550", "₹1,100"],
              ["DSLR / Mirrorless Camera", "₹80,000", "₹800", "₹1,600"],
              ["AC / Refrigerator", "₹45,000", "₹450", "₹900"],
              ["Premium Smartphone (iPhone)", "₹1,20,000", "₹1,200", "₹2,400"]
            ].map(([item, amt, f1, f2], i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border,var(--hair))", background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                <td style={{ padding: "10px 14px" }}>{item}</td>
                <td style={{ padding: "10px 14px", textAlign: "right" }}>{amt}</td>
                <td style={{ padding: "10px 14px", textAlign: "right", color: "#16a34a", fontWeight: 600 }}>{f1}</td>
                <td style={{ padding: "10px 14px", textAlign: "right", color: "#dc2626", fontWeight: 600 }}>{f2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card picks */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Top 4 Cards for EMI Purchases in India (June 2026)</h2>
      <p style={{ color: "var(--text-muted,#64748b)", fontSize: 14, marginBottom: 20 }}>Ranked by total EMI cost (processing fee + reward offset) on a ₹50,000 purchase over 6 months.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
        {cards.map((card) => (
          <div key={card.rank} style={{ border: `2px solid ${card.rank === 1 ? COLOR : "var(--hair)"}`, borderRadius: 14, padding: "20px 22px", background: card.rank === 1 ? `${COLOR}06` : "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {card.rank === 1 && <IconStar />}
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>#{card.rank} {card.name}</h3>
              </div>
              <span style={{ background: `${COLOR}15`, color: COLOR, borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600 }}>{card.fee}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 13, color: "var(--text-muted,#475569)", marginBottom: 12 }}>
              <div><span style={{ fontWeight: 600 }}>EMI Benefit:</span> {card.emiHighlight}</div>
              <div><span style={{ fontWeight: 600 }}>Processing Fee:</span> {card.processingFee}</div>
              <div><span style={{ fontWeight: 600 }}>EMI Network:</span> {card.network}</div>
              <div><span style={{ fontWeight: 600 }}>Access:</span> {card.access}</div>
            </div>
            <div style={{ background: `${COLOR}10`, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 600, color: COLOR }}>
              Verdict: {card.verdict}
            </div>
          </div>
        ))}
      </div>

      {/* EMI vs full payment */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>EMI vs Full Payment: A Simple Decision Tree</h2>

      <p style={{ marginBottom: 12 }}>
        Before you click "Convert to EMI" at checkout, run through this logic. It takes 30 seconds and could save you ₹500 to ₹2,000 on a single purchase.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {[
          { q: "Can you pay the full amount before the next billing cycle without stress?", ans: "Yes", action: "Pay in full. You get reward points, zero interest, zero processing fee." },
          { q: "Is the no-cost EMI price identical to the cash/full-payment price?", ans: "No (price is higher)", action: "Declining the EMI and paying full price may be cheaper if you have funds." },
          { q: "Does your card earn reward points on this EMI transaction?", ans: "No", action: "A 2% cashback card losing points on a ₹60,000 purchase = ₹1,200 lost reward. Factor this in." },
          { q: "Is the processing fee visible at checkout?", ans: "Not shown", action: "Call your bank before purchasing. Hidden fees are common on offline store EMIs." }
        ].map(({ q, ans, action }, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 16px", background: "var(--raise)", borderRadius: 8, border: "1px solid var(--border,var(--hair))" }}>
            <div style={{ background: COLOR, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{q}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted,#475569)" }}><strong style={{ color: "#dc2626" }}>Watch for:</strong> {action}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Flexi Pay HDFC */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>HDFC Flexi Pay: The Post-Purchase EMI Option</h2>

      <p style={{ marginBottom: 12 }}>
        HDFC's Flexi Pay lets you convert any billing cycle transaction over ₹5,000 into EMI within 90 days of purchase. The annualised interest is 13-18% depending on tenure, which is expensive — but it's a useful escape valve if you miscalculated your cash flow.
      </p>

      <p style={{ marginBottom: 24 }}>
        The key rule: if you convert to Flexi Pay, you still pay the EMI principal (the bank doesn't waive the purchase). What you avoid is the 3.75% monthly finance charge on the outstanding balance if you'd missed full payment. Use <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe</Link> to model both scenarios before committing.
      </p>

      {/* Internal link section */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Build the Right EMI Stack</h2>

      <p style={{ marginBottom: 16 }}>
        If you regularly make high-value purchases on EMI, consider a two-card approach. Use one card for its broad EMI acceptance network (SBI or HDFC), and a second card that earns strong rewards on all other spends.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
        <Link href="/stack-builder" style={{ display: "block", padding: "16px", background: `${COLOR}10`, borderRadius: 10, border: `1px solid ${COLOR}30`, textDecoration: "none", color: "var(--text)" }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: COLOR, marginBottom: 4 }}>Stack Builder</div>
          <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)" }}>Build your optimal 2-card combo for EMI + everyday spends</div>
        </Link>
        <Link href="/blog/emi-reward-points-india" style={{ display: "block", padding: "16px", background: "var(--raise)", borderRadius: 10, border: "1px solid var(--border,var(--hair))", textDecoration: "none", color: "var(--text)" }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: COLOR, marginBottom: 4 }}>EMI Reward Points Deep Dive</div>
          <div style={{ fontSize: 13, color: "var(--text-muted,#64748b)" }}>Bank-by-bank breakdown of when you earn and when you don't</div>
        </Link>
      </div>

      {/* Actionable ending */}
      <div style={{ background: `${COLOR}08`, border: `2px solid ${COLOR}`, borderRadius: 16, padding: "24px 26px", marginBottom: 44 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: COLOR }}>Before Your Next EMI Purchase: 3 Things to Do</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Check if the no-cost EMI price matches the regular price on the product page. If it's higher, you're paying interest through inflation.",
            "Log in to your bank's app and confirm whether reward points accrue on EMI transactions. Screenshot it — banks update T&Cs silently.",
            "Calculate the processing fee as a percentage of reward earned. If your card earns 1.33% and the fee is 1%, your net gain is only 0.33%."
          ].map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <IconCheck />
              <span style={{ fontSize: 14, color: "var(--text-muted,#475569)" }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
        {faq.mainEntity.map((item, i) => (
          <details key={i} style={{ border: "1px solid var(--border,var(--hair))", borderRadius: 10, padding: "0" }}>
            <summary style={{ padding: "14px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "var(--text)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
          <strong>Disclaimer:</strong> Assure Fintech is an independent comparison platform. We are not affiliated with any bank or card issuer. Card features, fees, and reward rates change frequently — verify all details with the issuing bank before applying. This page does not constitute financial advice.
        </p>
        <p style={{ margin: 0 }}>
          Data sourced from official bank websites, MITC documents, and RBI circulars as of {UPDATED}. Internal links to <Link href="/smart-swipe" style={{ color: COLOR }}>/smart-swipe</Link> and <Link href="/stack-builder" style={{ color: COLOR }}>/stack-builder</Link> are Assure Fintech tools.
        </p>
      </footer>
    </main>
  );
}
