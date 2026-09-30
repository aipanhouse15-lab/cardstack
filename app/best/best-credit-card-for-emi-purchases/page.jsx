import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Credit Card EMI in India: Fees, Discounts and Total Cost",
  description: "Compare credit-card EMI offers by total payable, disclosed interest, upfront discounts, fees, reward exclusions and repayment terms.",
  alternates: { canonical: "/best/best-credit-card-for-emi-purchases" },
  openGraph: {
    title: "Credit Card EMI in India: Fees, Discounts and Total Cost",
    description: "Compare credit-card EMI offers by total payable, disclosed interest, upfront discounts, fees, reward exclusions and repayment terms.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-emi-purchases
// Updated: September 26, 2026

const COLOR = "#7c3aed";
const UPDATED = "September 26, 2026";

const IconEMI = () => (
  <svg width="48" height="48" viewBox="0 0 48 59" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EMI credit card icon">
    <rect x="4" y="10" width="40" height="28" rx="5" fill={COLOR} opacity="0.12" stroke={COLOR} strokeWidth="2"/>
    <rect x="4" y="18" width="40" height="6" fill={COLOR} opacity="0.18"/>
    <circle cx="34" cy="32" r="3" fill={COLOR}/>
    <circle cx="40" cy="32" r="3" fill={COLOR} opacity="0.5"/>
    <text x="9" y="35" fontSize="9" fill={COLOR} fontWeight="700">EMI</text>
  </svg>
);

const IconWarning = () => (
  <svg width="28" height="28" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Warning: hidden cost">
    <path d="M14 3L26 24H2L14 3Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
    <rect x="13" y="11" width="2" height="7" rx="1" fill="#d97706"/>
    <rect x="13" y="20" width="2" height="2" rx="1" fill="#d97706"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="28" height="28" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monthly EMI calendar">
    <rect x="3" y="5" width="22" height="20" rx="3" fill="var(--raise)" stroke="var(--hair)" strokeWidth="2"/>
    <rect x="3" y="10" width="22" height="3" fill={COLOR} opacity="0.2"/>
    <rect x="8" y="3" width="2" height="5" rx="1" fill={COLOR}/>
    <rect x="18" y="3" width="2" height="5" rx="1" fill={COLOR}/>
    <text x="8" y="22" fontSize="9" fill="var(--text-muted,#64748b)">1 2 3 4 5</text>
  </svg>
);

const IconRupee = () => (
  <svg width="28" height="28" viewBox="0 0 28 43" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rupee cost indicator">
    <circle cx="14" cy="14" r="12" fill={COLOR} opacity="0.25" stroke={COLOR} strokeWidth="1.5"/>
    <text x="9" y="19" fontSize="13" fill={COLOR} fontWeight="700">₹</text>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Benefit included">
    <circle cx="9" cy="9" r="8" fill={COLOR} opacity="0.15"/>
    <path d="M5 9.5L8 12.5L13 6.5" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Information note">
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
          text: "It depends on the offer. Compare the cash price, EMI total, any upfront discount, processing fee, taxes, lost instant discounts and reward treatment. RBI requires card issuers to disclose principal, interest and any upfront discount before EMI conversion; check the actual checkout and statement figures rather than relying on the label."
        }
      },
      {
        "@type": "Question",
        name: "Do I earn reward points on EMI transactions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reward treatment depends on the issuer, card variant, transaction and offer terms. Check the current MITC or offer terms for the exact product and transaction, then verify the posted rewards. Do not assume that the full purchase amount earns points—or that an EMI transaction is excluded."
        }
      },
      {
        "@type": "Question",
        name: "Which HDFC credit card is best for EMI purchases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universally best card. Merchant participation, eligible card variants, tenure, fees, upfront discount and rewards can differ by offer. Compare the exact checkout terms and issuer terms for your purchase; do not treat a shopping-portal reward rate as a guaranteed EMI reward."
        }
      },
      {
        "@type": "Question",
        name: "What is the EMI processing fee on SBI credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI Card fees depend on the card, conversion route and current offer. Check the fee displayed before confirming and the current issuer schedule; determine whether it is additional to interest, taxes or other charges."
        }
      },
      {
        "@type": "Question",
        name: "Can I convert any credit card transaction to EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not every transaction, card or account is eligible. Issuers set minimum amounts, conversion windows, tenures, rates and fees. Check the offer in your issuer's app and review the repayment schedule and total payable before accepting."
        }
      },
      {
        "@type": "Question",
        name: "Is it better to pay full amount or take EMI on a credit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Compare the total cost and your cash-flow needs. Paying in full may avoid EMI charges, but keep enough funds for essential expenses and emergencies. An EMI may be suitable if its disclosed total cost and instalments fit your budget; no-cost labels alone are not enough to decide."
        }
      },
      {
        "@type": "Question",
        name: "Does Axis ACE credit card give reward points on EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do not assume cashback on an EMI transaction. Check the current Axis ACE MITC and the exact merchant offer for the transaction type, then verify the statement. Rates and exclusions can change."
        }
      },
      {
        "@type": "Question",
        name: "What happens to my credit limit during an EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The issuer's treatment of available credit and its release as repayments post is product-specific. Check your available limit in the app and ask the issuer how it handles the outstanding principal; do not assume an instalment immediately restores the same amount of credit."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Credit Card EMI in India: Fees, Discounts and Total Cost",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://www.assurefintech.com/best/" },
      { "@type": "ListItem", position: 3, name: "Credit Card EMI: Fees and Total Cost", item: "https://www.assurefintech.com/best/best-credit-card-for-emi-purchases" }
    ]
  };

  const emiOptions = [
    { name: "Merchant or brand offer", cue: "Check cash price, eligible models, instant discounts, subvention and any fee.", compare: "Cash total versus all instalments and upfront charges.", caution: "Participating merchant and product rules vary." },
    { name: "Issuer no-cost EMI", cue: "Read the disclosed principal, interest and upfront discount before confirming.", compare: "Total payable, lost discounts, taxes and reward treatment.", caution: "Terms may depend on issuer, card variant, merchant and tenure." },
    { name: "Post-purchase EMI conversion", cue: "Ask the issuer for the applicable rate, fee, tenure and repayment schedule.", compare: "Total of instalments plus conversion fee and taxes.", caution: "Availability and charges are account-specific." },
    { name: "Pay in full", cue: "Compare the cash price and preserve enough money for essential expenses.", compare: "Full payment may avoid EMI interest and conversion charges.", caution: "Choose based on your cash flow, not reward points alone." },
  ];

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
            Credit Card EMI in India: Fees, Discounts and Total Cost
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED}</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted,#64748b)", marginBottom: 24 }}>
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/best/">Best Cards</Link>
        {" / "}
        <span>Credit Card EMI: Fees and Total Cost</span>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <IconEMI />
        <span style={{ background: COLOR, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, letterSpacing: 0.4 }}>EMI GUIDE</span>
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted,#475569)", marginBottom: 10, fontWeight: 500 }}>
        Learn how to compare the actual price, interest, discounts, fees and repayment terms in a credit-card EMI offer.
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
            <strong style={{ color: COLOR, fontSize: 14 }}>A simple fee illustration—not a typical issuer charge</strong>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--text-muted,#475569)" }}>
              If an offer charged a 1% processing fee on ₹50,000, the fee would be ₹500 before applicable taxes. This is arithmetic only, not a claim about a particular card or offer. Compare the checkout's complete total with the cash price and any discounts you would otherwise receive.
            </p>
          </div>
        </div>
      </div>

      {/* How no-cost EMI actually works */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>What a “no-cost EMI” offer means</h2>

      <p style={{ marginBottom: 12 }}>
        An offer may involve interest offset by an upfront merchant or issuer discount, or another promotion structure. Do not assume the listed cash price, discount eligibility, fees or reward treatment are identical across payment methods. Compare the exact product, seller, card, tenure and checkout total.
      </p>

      <p style={{ marginBottom: 12 }}>
        Check whether the promotion can be combined with a sale or instant card discount, whether a processing fee or tax is added, and what reward rules apply. The offer terms and transaction record—not the “0%” headline—determine the amount you pay.
      </p>

      <div style={{ background: "var(--raise)", border: "1px solid var(--border,var(--hair))", borderRadius: 10, padding: "16px 20px", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <IconInfo />
          <strong style={{ fontSize: 14 }}>RBI requirements for transparent no-cost EMI disclosures</strong>
        </div>
        <p style={{ fontSize: 14, margin: 0, color: "var(--text-muted,#475569)" }}>
          RBI's credit-card directions require issuers, before EMI conversion, to show the principal, interest and upfront discount provided by the merchant or issuer to make an offer no-cost; these must also be separately shown in the card statement. Read the disclosure and ask the issuer to explain any amount you cannot reconcile. <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>RBI Master Direction</a>.
        </p>
      </div>

      <p style={{ marginBottom: 12 }}>
        A one-time fee is not directly comparable to an annual interest rate without considering when the fee is charged, the repayment schedule, taxes and any discount. Add all amounts you will pay and compare the final total for the same product and period.
      </p>

      <p style={{ marginBottom: 24 }}>
        An EMI may suit a budget when the instalments are affordable and its complete cost is acceptable to you. Do not borrow solely to earn rewards, and do not use an EMI if it would put essential expenses or repayment at risk.
      </p>

      {/* Reward points on EMI */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Check rewards separately from the EMI cost</h2>

      <p style={{ marginBottom: 12 }}>
        Rewards can be excluded, reduced or calculated differently for an EMI transaction. The rule depends on the exact card, conversion type, merchant and offer. Verify the current written terms and do not include rewards in your cost estimate until eligibility is clear.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <div style={{ background: "var(--green-dim)", border: "1px solid #86efac", borderRadius: 8, padding: "14px 16px" }}>
          <strong style={{ fontSize: 13, color: "#16a34a", display: "block", marginBottom: 6 }}>For an interest-bearing EMI</strong>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.6 }}>
            <li>Check if the card earns rewards on the conversion</li>
            <li>Check whether rewards accrue on principal or instalments</li>
            <li>Check category and merchant exclusions</li>
            <li>Compare the reward's redemption value with all EMI costs</li>
          </ul>
        </div>
        <div style={{ background: "rgba(212,168,83,.06)", border: "1px solid #fdba74", borderRadius: 8, padding: "14px 16px" }}>
          <strong style={{ fontSize: 13, color: "#ea580c", display: "block", marginBottom: 6 }}>For a no-cost or discounted EMI</strong>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--text-muted,#475569)", lineHeight: 1.6 }}>
            <li>Check the specific offer's reward terms</li>
            <li>Confirm whether a discount replaces interest or affects rewards</li>
            <li>Check that the card variant is eligible</li>
            <li>Verify the posted reward after the transaction</li>
          </ul>
        </div>
      </div>

      <p style={{ marginBottom: 24 }}>
        Do not assume a regular purchase reward applies to an EMI transaction, even when the merchant and issuer are partners. Ask the issuer or check the offer terms for the exact card and transaction.
      </p>

      {/* Processing fee math */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Processing Fee Math: What You Actually Pay</h2>

      <p style={{ marginBottom: 16 }}>Illustration only: if a particular offer charged a fee at these rates, the arithmetic would be as shown. Actual rates and taxes vary; do not assume a fee applies to your offer.</p>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: `${COLOR}12` }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Purchase</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Amount</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Illustrative 1%</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid var(--border,var(--hair))" }}>Illustrative 2%</th>
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

      {/* Compare payment structures */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Compare the offer structure—not a card ranking</h2>
      <p style={{ color: "var(--text-muted,#64748b)", fontSize: 14, marginBottom: 20 }}>There is no reliable universal ranking without the product, merchant, card variant, tenure and checkout terms. Use this checklist for the offer in front of you.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
        {emiOptions.map((option) => (
          <div key={option.name} style={{ border: "1.5px solid var(--border,var(--hair))", borderRadius: 14, padding: "20px 22px", background: "var(--raise)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{option.name}</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 13, color: "var(--text-muted,#475569)", marginBottom: 12 }}>
              <div><span style={{ fontWeight: 600 }}>What to inspect:</span> {option.cue}</div>
              <div><span style={{ fontWeight: 600 }}>Compare:</span> {option.compare}</div>
            </div>
            <div style={{ background: `${COLOR}10`, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 600, color: COLOR }}>
              {option.caution}
            </div>
          </div>
        ))}
      </div>

      {/* EMI vs full payment */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>EMI vs Full Payment: A Simple Decision Tree</h2>

      <p style={{ marginBottom: 12 }}>
        Before accepting, read the exact checkout disclosure and compare the total amount payable with other payment options.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {[
          { q: "What is the final total for the EMI offer?", action: "Add all instalments, upfront charges, taxes and any amount due outside the EMI." },
          { q: "What discounts would I receive with another payment method?", action: "Check whether sale pricing or instant discounts can be combined with the EMI offer." },
          { q: "How does this exact transaction earn rewards?", action: "Check the issuer's terms for the card, merchant, EMI type and transaction amount; do not assume rewards." },
          { q: "What happens if I repay early or miss an instalment?", action: "Read foreclosure, late-payment and interest terms, and confirm any fees before converting." }
        ].map(({ q, action }, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 16px", background: "var(--raise)", borderRadius: 8, border: "1px solid var(--border,var(--hair))" }}>
            <div style={{ background: COLOR, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{q}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted,#475569)" }}><strong style={{ color: "#dc2626" }}>Watch for:</strong> {action}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Post-purchase EMI */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>If you are considering post-purchase conversion</h2>

      <p style={{ marginBottom: 12 }}>
        Issuers may offer to convert eligible purchases after the transaction, but thresholds, time windows, rates, fees and eligible accounts vary. Request the full repayment schedule and total payable before accepting; a conversion is not a waiver of the purchase amount.
      </p>

      <p style={{ marginBottom: 24 }}>
        If you are already having difficulty paying a card bill, contact the issuer promptly and compare any conversion option with the written cost of the existing balance. Avoid taking new borrowing without understanding the full cost and repayment obligations.
      </p>

      {/* Related tool */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Estimate an instalment</h2>

      <p style={{ marginBottom: 16 }}>
        The loan calculator can estimate a payment schedule from an amount, rate and tenure. It does not replace the issuer's offer disclosure or include every fee unless you enter it.
      </p>

      <Link href="/loan-calculator" style={{ display: "inline-block", padding: "12px 16px", marginBottom: 28, background: `${COLOR}10`, borderRadius: 10, border: `1px solid ${COLOR}30`, textDecoration: "none", color: COLOR, fontWeight: 600 }}>Open the loan calculator →</Link>

      {/* Actionable ending */}
      <div style={{ background: `${COLOR}08`, border: `2px solid ${COLOR}`, borderRadius: 16, padding: "24px 26px", marginBottom: 44 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: COLOR }}>Before Your Next EMI Purchase: 3 Things to Do</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Compare the full payable amount and available discounts for EMI and non-EMI checkout options.",
            "Read the issuer's disclosure for principal, interest, upfront discount, fees, taxes and repayment schedule before confirming.",
            "Check the current card and offer terms for reward eligibility, early closure and missed-payment consequences."
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
            <div style={{ padding: "0 18px 16px", fontSize: 14, color: "var(--text-muted,#475569)", lineHeight: 1.6 }}>
              {item.acceptedAnswer.text}
            </div>
          </details>
        ))}
      </div>

      <footer style={{ borderTop: "1px solid var(--border,var(--hair))", paddingTop: 20, fontSize: 12, color: "var(--text-muted,#94a3b8)", lineHeight: 1.6 }}>
        <p style={{ margin: "0 0 6px" }}>
          <strong>Sources and disclosure:</strong> RBI credit-card directions require transparent disclosure of principal, interest and any upfront discount for EMI conversion. See the linked RBI Master Direction above. Issuer fees, rates, availability and reward eligibility vary; review the exact issuer and checkout terms before accepting. This page is educational and not financial advice. Assure Fintech may earn referral fees from some card links; compensation does not determine editorial coverage.
        </p>
        <p style={{ margin: 0 }}>
          Reviewed {UPDATED}. Internal links to <Link href="/smart-swipe" style={{ color: COLOR }}>/smart-swipe</Link> and <Link href="/stack-builder" style={{ color: COLOR }}>/stack-builder</Link> are Assure Fintech tools.
        </p>
      </footer>
    </main>
    </>
  );
}
