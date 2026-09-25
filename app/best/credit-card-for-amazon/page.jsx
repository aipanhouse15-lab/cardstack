import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Amazon India: Rewards, Fees and Exclusions",
  description: "Compare Amazon Pay ICICI, HDFC Millennia and SBI Cashback by eligible Amazon rewards, caps, fees and exclusions.",
  alternates: { canonical: "/best/credit-card-for-amazon" },
  openGraph: {
    title: "Best Credit Card for Amazon India: Rewards, Fees and Exclusions",
    description: "Compare Amazon Pay ICICI, HDFC Millennia and SBI Cashback by eligible Amazon rewards, caps, fees and exclusions.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-amazon
// Reviewed against issuer sources: September 26, 2026

const COLOR = "#ea580c";
const UPDATED = "September 26, 2026";

function NoCap5PercentVisual() {
  const spends = [10000, 20000, 30000];
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative reward calculation for eligible monthly Amazon purchases comparing Amazon Pay ICICI Prime rate and HDFC Millennia cap"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)" }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Illustrative Monthly Value at 5% (Eligible Transactions Only)</text>
      {spends.map((spend, i) => {
        const y = 48 + i * 35;
        const icici = Math.round(spend * 0.05);
        const millennia = Math.min(icici, 1000);
        return (
          <g key={spend}>
            <text x="26" y={y + 16} fill="var(--text)" fontSize="11">₹{spend.toLocaleString("en-IN")} eligible Amazon spend</text>
            <text x="300" y={y + 16} fill={COLOR} fontSize="11" fontWeight="700">Amazon Pay ICICI Prime: ₹{icici.toLocaleString("en-IN")}</text>
            <text x="520" y={y + 16} fill="#6366f1" fontSize="11" fontWeight="700">Millennia: ₹{millennia.toLocaleString("en-IN")}</text>
          </g>
        );
      })}
      <text x="340" y="165" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Illustration excludes non-eligible transactions, Prime subscription cost and other card terms. Millennia cap is shared per cycle.</text>
    </svg>
  );
}

function TrifectaExplainer() {
  return (
    <svg
      viewBox="0 0 680 186"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Amazon Pay ICICI published reward rates by purchase type, with eligibility and exclusions"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="26" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Amazon Pay ICICI: Current Reward Structure (Check Exclusions)</text>
      {[
        { x: 80, label: "No annual fee", sub: "Issuer says no cap on earnings", icon: "₹0", ok: true },
        { x: 280, label: "Amazon India", sub: "5% Prime / 3% non-Prime*", icon: "5%", ok: true },
        { x: 480, label: "Other categories", sub: "2%/1% by eligible route*", icon: "1%", ok: true },
      ].map(item => (
        <g key={item.x}>
          <circle cx={item.x + 70} cy={95} r={55} fill={item.ok ? COLOR + "22" : "#fee2e2"} stroke={item.ok ? COLOR : "#dc2626"} strokeWidth="2" />
          <text x={item.x + 70} y={85} textAnchor="middle" fill={COLOR} fontSize="20" fontWeight="900">{item.icon}</text>
          <text x={item.x + 70} y={106} textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">{item.label}</text>
          <text x={item.x + 70} y={122} textAnchor="middle" fill="var(--text-muted)" fontSize="11">{item.sub}</text>
        </g>
      ))}
      <text x="340" y="162" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">*Reward rates depend on Prime status, purchase type and Amazon Pay checkout path; exclusions apply.</text>
    </svg>
  );
}

function SaleStrategyGrid() {
  return (
    <svg
      viewBox="0 0 680 279"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Checklist for evaluating Amazon sale promotions separately from regular card rewards"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Treat Sale Discounts as Separate, Offer-Specific Benefits</text>
      {[
        ["Check", "Card reward", "Promo offer", "Order", "Before paying"],
        ["Amazon purchase", "Eligible rate", "May stack", "Eligible items", "Read offer rules"],
        ["Part pay", "On card portion", "Min card spend", "Partial pay", "Check threshold"],
        ["EMI purchase", "No reward per FAQ", "May be separate", "EMI terms", "Compare total cost"],
        ["Returned order", "May be reversed", "May be cancelled", "Refund rules", "Check both terms"],
      ].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={10 + ci * 132} y={36 + ri * 34} width={130} height={32} fill={ri === 0 ? COLOR : ri % 2 === 0 ? "#fff" : "var(--raise)"} rx="2" />
              <text x={75 + ci * 132} y={55 + ri * 34} textAnchor="middle" fill={ri === 0 ? "#fff" : ci === 4 ? COLOR : "var(--text)"} fontSize="10" fontWeight={ri === 0 || ci === 0 ? "700" : "400"}>{cell}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="340" y="210" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Offers vary by event, card, item and payment route; do not assume fixed discounts or universal stacking.</text>
    </svg>
  );
}

function EMIDecisionTree() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Compare Amazon no-cost EMI and full payment using current card reward eligibility and offer terms"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">No-Cost EMI vs Full Payment: Which Earns More?</text>
      <rect x="240" y="38" width="200" height="42" fill={COLOR} rx="8" />
      <text x="340" y="57" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Purchase on Amazon</text>
      <text x="340" y="73" textAnchor="middle" fill="#fff" fontSize="11">Do you need EMI?</text>
      <line x1="180" y1="80" x2="180" y2="108" stroke="var(--border)" strokeWidth="1" />
      <line x1="500" y1="80" x2="500" y2="108" stroke="var(--border)" strokeWidth="1" />
      <line x1="180" y1="80" x2="340" y2="80" stroke="var(--border)" strokeWidth="1" />
      <line x1="340" y1="80" x2="500" y2="80" stroke="var(--border)" strokeWidth="1" />
      <rect x="80" y="108" width="200" height="56" fill="var(--raise)" stroke="#fca5a5" rx="8" />
      <text x="180" y="128" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="600">No-Cost EMI</text>
      <text x="180" y="145" textAnchor="middle" fill="#991b1b" fontSize="11">ICICI states Amazon EMI purchases earn no rewards.</text>
      <text x="180" y="160" textAnchor="middle" fill="#991b1b" fontSize="11">Check any separate EMI offer terms.</text>
      <rect x="400" y="108" width="200" height="56" fill="var(--raise)" stroke="rgba(62,224,143,.35)" rx="8" />
      <text x="500" y="128" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="600">Pay in Full</text>
      <text x="500" y="145" textAnchor="middle" fill="#166534" fontSize="11">Eligible purchases may earn by Prime status.</text>
      <text x="500" y="160" textAnchor="middle" fill="#166534" fontSize="11">Check exclusions and current offers.</text>
    </svg>
  );
}

function WhenOtherCardsBeat() {
  return (
    <svg
      viewBox="0 0 680 302"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Examples where HDFC Millennia or SBI Cashback may suit other eligible merchant spends"
      style={{ width: "100%", borderRadius: 10, background: "var(--raise)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">When Another Card Beats Amazon Pay ICICI</text>
      {[
        { label: "You use several named online merchants", card: "HDFC Millennia", reason: "5% on named merchants; ₹1,000/cycle cap" },
        { label: "You have eligible online purchases", card: "SBI Cashback", reason: "5% online; ₹2,000/cycle cap" },
        { label: "You want Amazon Pay balance rewards", card: "Amazon Pay ICICI", reason: "Amazon-linked balance; terms apply" },
      ].map((item, i) => (
        <g key={i}>
          <rect x="10" y={42 + i * 36} width="320" height="30" fill="var(--raise)" stroke="var(--border)" rx="4" />
          <text x="170" y={61 + i * 36} textAnchor="middle" fill="var(--text)" fontSize="11">{item.label}</text>
          <rect x="344" y={42 + i * 36} width="160" height="30" fill={COLOR + "22"} stroke={COLOR} rx="4" />
          <text x="424" y={61 + i * 36} textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="700">{item.card}</text>
          <rect x="518" y={42 + i * 36} width="152" height="30" fill="var(--raise)" stroke="var(--border)" rx="4" />
          <text x="594" y={54 + i * 36} textAnchor="middle" fill="var(--text-muted)" fontSize="9">{item.reason.slice(0, 28)}</text>
          <text x="594" y={66 + i * 36} textAnchor="middle" fill="var(--text-muted)" fontSize="9">{item.reason.slice(28)}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BestCreditCardForAmazon() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which credit card gives maximum cashback on Amazon India?",
        acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI currently lists 5% back for Prime members and 3% for non-Prime members on eligible Amazon India purchases, with no joining or annual fee and no limit on earnings. Exclusions apply, and Amazon earnings are credited as Amazon Pay balance. HDFC Millennia also lists 5% on Amazon within a shared cycle cap. Compare the variant, fees and purchase eligibility that fit your use." }
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI card work for non-Prime Amazon members?",
        acceptedAnswer: { "@type": "Answer", text: "ICICI lists 3% back for non-Prime members on eligible Amazon India products; some digital items and gift cards earn 2%, regardless of Prime status. Prime membership has a separate cost and benefits beyond this card, so calculate its value using your eligible purchases and the current subscription price rather than assuming it pays for itself." }
      },
      {
        "@type": "Question",
        name: "Is there any monthly spending cap on Amazon Pay ICICI cashback?",
        acceptedAnswer: { "@type": "Answer", text: "ICICI states there is no limit on earnings. The advertised Amazon rate still depends on Prime status and eligible product/payment type; its FAQ lists exclusions including Amazon EMI, rent, fuel, precious metals and tax-related payments. Digital products, gift cards and some Amazon Pay transactions earn at a lower rate, not the Prime 5% tier." }
      },
      {
        "@type": "Question",
        name: "Does Amazon cashback stack with bank offers during Amazon sale?",
        acceptedAnswer: { "@type": "Answer", text: "A sale promotion may combine with the card’s regular reward, but this is not guaranteed. Check the offer’s eligible card, products, dates, minimum amount, payment channel, maximum discount and whether EMI or partial Amazon Pay balance payments change eligibility. Promotions can be changed or withdrawn." }
      },
      {
        "@type": "Question",
        name: "Should I use Amazon gift cards to get double cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Do not assume gift cards earn the Prime 5% rate. ICICI’s FAQ says gift cards earn 2% irrespective of Prime status; Amazon Pay money loads and reloads are also listed at 2%. Review current terms and any separate merchant promotion before purchasing." }
      },
      {
        "@type": "Question",
        name: "What cashback do I earn on Amazon Pay partners with the ICICI card?",
        acceptedAnswer: { "@type": "Answer", text: "ICICI lists 2% back on 100+ Amazon Pay partner websites when you use the ‘Login and Pay with Amazon’ payment method. A merchant merely accepting Amazon Pay may not qualify; check the current eligible partner list and checkout route." }
      },
      {
        "@type": "Question",
        name: "Does no-cost EMI on Amazon reduce my cashback?",
        acceptedAnswer: { "@type": "Answer", text: "ICICI’s FAQ says Amazon EMI purchases do not earn rewards. A separate instant-discount offer may have its own EMI terms. Compare the total payable, processing fee, foregone rewards and offer conditions before choosing EMI." }
      },
      {
        "@type": "Question",
        name: "Can I use HDFC Millennia instead of Amazon Pay ICICI for Amazon shopping?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia lists Amazon among its 10 online 5% merchants, with a maximum of ₹1,000 CashBack/CashPoints per cycle across the offer. Amazon Pay ICICI has no earnings cap according to ICICI, but its rate varies with Prime and item eligibility and pays as Amazon Pay balance. Compare combined category use and reward form." }
      },
      {
        "@type": "Question",
        name: "Is Amazon Pay ICICI a good card for non-Amazon purchases?",
        acceptedAnswer: { "@type": "Answer", text: "ICICI lists 1% back on other eligible payments, but exclusions apply. SBI Cashback lists 5% on eligible online transactions subject to a ₹2,000 online cap per statement cycle and category exclusions. Check each card’s current terms; SBI’s advertised online rate is not universal for every website or payment type." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Amazon Shopping in India: Rewards, Fees and Exclusions",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Amazon", item: "https://assurefintech.com/best/credit-card-for-amazon" },
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1E0B01, #4A1C03, #1E0B01)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #ea580c22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Best Credit Card for Amazon India
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Amazon
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · AMAZON SHOPPING
      </div>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        Compare Amazon’s eligible reward rates, Prime status, caps, reward form and exclusions before choosing a card for your purchases.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Cards to Compare for Amazon Shopping</h2>

        {[
          {
            name: "Amazon Pay ICICI Credit Card",
            slug: "amazon-pay-icici",
            fee: "Free (lifetime)",
            rate: "5% Prime / 3% non-Prime on eligible Amazon India purchases",
            cap: "ICICI says no limit on earnings; exclusions apply",
            badge: "Amazon-linked balance",
            why: "No joining or annual fee; eligible earnings are automatically credited as Amazon Pay balance. ICICI lists 2% for Amazon Pay partner sites through Login and Pay with Amazon, and 1% on other eligible payments.",
            caveat: "Prime status and purchase type affect rates; EMI, rent, fuel, precious metals and tax-related payments are excluded."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000 + taxes/yr",
            rate: "5% on Amazon and 9 other named online merchants",
            cap: "₹1,000 CashPoints/cycle shared across categories",
            badge: "Multi-merchant option",
            why: "Can suit people who use several of HDFC’s named 5% merchants. The current terms describe the accelerated reward as CashPoints, not direct statement cashback.",
            caveat: "Eligibility and cap are shared across listed merchants; non-EMI transactions only."
          },
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "₹999 + taxes/yr",
            rate: "5% eligible online / 1% eligible offline",
            cap: "₹2,000 online and offline each per statement cycle",
            badge: "Broader online use",
            why: "Can be considered for eligible online purchases across merchants beyond Amazon, within SBI’s current terms and caps.",
            caveat: "Not every online transaction qualifies; exclusions apply and card fees may apply."
          },
        ].map(card => (
          <div key={card.slug} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: "20px 22px", marginBottom: 16, background: "var(--raise)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <span style={{ background: COLOR + "22", color: COLOR, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, marginRight: 8 }}>{card.badge}</span>
                <Link href={`/cards/${card.slug}`} style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", textDecoration: "none" }}>{card.name}</Link>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Fee: {card.fee}</div>
            </div>
            <div style={{ display: "flex", gap: 24, margin: "10px 0", flexWrap: "wrap" }}>
              <div><span style={{ fontSize: 12, color: "var(--text-muted)" }}>Rate</span><br /><strong style={{ color: COLOR }}>{card.rate}</strong></div>
              <div><span style={{ fontSize: 12, color: "var(--text-muted)" }}>Cap</span><br /><strong>{card.cap}</strong></div>
            </div>
            <p style={{ fontSize: 14, color: "var(--text)", margin: "8px 0 4px" }}>{card.why}</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>Watch out: {card.caveat}</p>
          </div>
        ))}
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How Amazon Pay ICICI Rewards Work</h2>
        <p>ICICI’s current FAQ lists no joining or annual fee and no limit on earnings. On eligible Amazon India purchases it lists 5% for Prime members and 3% for non-Prime members; digital products and gift cards earn 2% regardless of Prime status. Amazon EMI purchases and several other categories earn no rewards.</p>
        <p>Amazon Pay partner-site purchases earn 2% when you use the specific “Login and Pay with Amazon” route. Other eligible payments earn 1%. Rewards are credited to Amazon Pay balance, not a bank account. Check the issuer’s exclusions and eligible payment path before relying on a headline rate.</p>
        <TrifectaExplainer />
        <p style={{ marginTop: 12 }}>At ₹15,000 of fully eligible Amazon purchases in a month, the headline reward would be ₹750 for a Prime Amazon Pay ICICI cardholder or ₹450 for a non-Prime cardholder. HDFC Millennia’s nominal 5% at that spend is constrained by its ₹1,000 CashPoints-per-cycle cap across ten merchants; fees and other category use matter too.</p>
        <p>There is no single comparison that fits every user: Amazon Pay ICICI credits Amazon Pay balance, while Millennia rewards are CashPoints and SBI Cashback has separate online/offline caps and exclusions. See our <Link href="/blog/cashback-rate-is-a-lie">cap structure explainer</Link> before treating a headline rate as money saved.</p>
        <NoCap5PercentVisual />
        <p style={{ marginTop: 12 }}>This is an illustration for eligible purchases at the Prime 5% Amazon Pay ICICI rate and HDFC Millennia’s 5% rate, capped at ₹1,000 per cycle across its named merchants. It excludes Prime subscription cost, fees, other category spend and reward exclusions.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Amazon Sale Strategy</h2>
        <p>Sale discounts are campaign-specific and can have their own eligible cards, products, order minimums, caps, payment paths and dates. Do not assume a bank offer combines with the card’s regular reward or applies to every Amazon item.</p>
        <SaleStrategyGrid />
        <p style={{ marginTop: 12 }}>Check the live Amazon offer page and linked issuer terms for each event. A promotion may be limited by minimum card-paid amount, eligible products or a per-card maximum, and could treat EMI or returned orders differently.</p>
        <p>For a structured approach to maximising returns across all online platforms, visit our <Link href="/smart-swipe">Smart Swipe guide</Link> or build your optimal card combination at <Link href="/stack-builder">Stack Builder</Link>.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>EMI on Amazon: The Hidden Cashback Trap</h2>
        <p>“No-cost EMI” still has terms and may include processing fees or foregone rewards. ICICI’s current Amazon Pay card FAQ says Amazon EMI purchases do not earn rewards; evaluate the full payable and any separate instant discount before choosing it.</p>
        <EMIDecisionTree />
        <p style={{ marginTop: 12 }}>Reward eligibility and campaign discounts are separate questions. Read the card’s EMI exclusion and exact offer terms, then compare the total payable, processing fee and any foregone reward before committing.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Gift Card Trap</h2>
        <p>A common question: can you buy Amazon gift cards with your credit card and then use those gift cards on Amazon to effectively earn 5% on everything including categories that might otherwise be excluded?</p>
        <p>Gift cards do not earn the Prime 5% Amazon rate under ICICI’s current FAQ; it lists gift-card purchases at 2% irrespective of Prime status. Check current terms and any separate merchant promotion before buying.</p>
        <WhenOtherCardsBeat />
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>Review Amazon Pay ICICI’s eligibility, fees and terms if you want Amazon Pay balance rewards; approval is subject to ICICI’s assessment.</li>
          <li>Check Prime status, product type and payment route; digital products and gift cards may earn a lower rate.</li>
          <li>For Amazon Pay partners, use the eligible “Login and Pay with Amazon” route and confirm the site is on the current list.</li>
          <li>Read current sale-offer conditions; discounts may have their own caps and exclusions.</li>
          <li>For other online purchases, compare the current SBI Cashback exclusions and ₹2,000 online statement-cycle cap.</li>
        </ol>
      </section>
      <section style={{ marginBottom: 40, background: "var(--raise)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Practical Comparison</h2>
        <p>Amazon Pay ICICI may suit eligible Amazon purchases if you value Amazon Pay balance and meet the relevant Prime and purchase rules. HDFC Millennia may suit someone using several named partner merchants; SBI Cashback may fit eligible online spend beyond Amazon. Each has distinct reward forms, fees, caps and exclusions.</p>
        <p>Choose based on your actual eligible purchases and the reward you will use—not a promise of annual savings. Amazon Pay ICICI earnings are credited as Amazon Pay balance; they are not a bank-account credit.</p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faq.mainEntity.map((item, i) => (
            <details key={i} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "14px 18px" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--text)", fontSize: 15 }}>{item.name}</summary>
              <p style={{ marginTop: 10, color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>{item.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 28, fontSize: 13, color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text)" }}>Issuer references:</strong>{" "}
        <a href="https://www.icicibank.com/personal-banking/cards/credit-card/amazon-pay-credit-card/amazon-pay-faq" target="_blank" rel="noreferrer">ICICI Amazon Pay card FAQ</a>{" · "}
        <a href="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0" target="_blank" rel="noreferrer">HDFC Millennia terms</a>{" · "}
        <a href="https://www.sbicard.com/cashback-revised" target="_blank" rel="noreferrer">SBI Cashback revised terms</a>.
      </section>

      <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>
        Related:{" "}
        <Link href="/cards/amazon-pay-icici">Amazon Pay ICICI Full Review</Link> ·{" "}
        <Link href="/cards/hdfc-millennia">HDFC Millennia Review</Link> ·{" "}
        <Link href="/best/credit-card-for-online-shopping">Best Cards for All Online Shopping</Link> ·{" "}
        <Link href="/best/credit-card-for-flipkart">Best Cards for Flipkart</Link> ·{" "}
        <Link href="/blog/reward-points-vs-cashback">Reward Points vs Cashback</Link> ·{" "}
        <Link href="/smart-swipe">Smart Swipe Guide</Link>
      </p>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. All card terms, rates, and caps are based on issuer terms as of {UPDATED}. Cashback rates, partner merchant lists, and monthly caps can change without notice. Amazon Pay cashback is credited as Amazon Pay balance, not bank account credit. Verify current terms with ICICI Bank and Amazon before applying. This is not financial advice.
      </footer>
    </main>
    </>
  );
}
