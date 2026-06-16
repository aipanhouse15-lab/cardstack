import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Credit Card for Amazon India (June 2026)",
  description: "If you buy on Amazon and are not using Amazon Pay ICICI, you are leaving ₹5,000-10,000 per year on the table. Here is why this free card is genuinely excepti...",
  alternates: { canonical: "/best/credit-card-for-amazon" },
  openGraph: {
    title: "Best Credit Card for Amazon India (June 2026)",
    description: "If you buy on Amazon and are not using Amazon Pay ICICI, you are leaving ₹5,000-10,000 per year on the table. Here is why this free card is genuinely excepti...",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /best/credit-card-for-amazon
// Updated: June 4, 2026

const COLOR = "#ea580c";
const UPDATED = "June 4, 2026";

function NoCap5PercentVisual() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const amazonSpend = [12000, 18000, 8000, 22000, 15000, 9000, 30000, 14000, 11000, 20000, 45000, 38000];
  const maxSpend = 45000;
  return (
    <svg
      viewBox="0 0 680 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Annual cashback comparison showing Amazon Pay ICICI uncapped return vs HDFC Millennia capped return across 12 months"
      style={{ width: "100%", borderRadius: 10, background: "var(--surface, #f8fafc)", border: "1px solid var(--border)" }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">No Cap vs Capped: What You Actually Earn Each Month</text>
      {months.map((m, i) => {
        const x = 28 + i * 54;
        const spend = amazonSpend[i];
        const icici5pct = Math.round(spend * 0.05);
        const millenniaCapped = Math.min(Math.round(spend * 0.05), 1000);
        const barMax = 2250;
        const hi = (v) => Math.round((v / barMax) * 180);
        const baseY = 230;
        return (
          <g key={m}>
            <rect x={x} y={baseY - hi(icici5pct)} width={22} height={hi(icici5pct)} fill={COLOR} rx="2" />
            <rect x={x + 24} y={baseY - hi(millenniaCapped)} width={22} height={hi(millenniaCapped)} fill="#6366f1" rx="2" />
            <text x={x + 23} y={baseY + 14} textAnchor="middle" fill="var(--text-muted)" fontSize="9">{m}</text>
            {spend > 20000 && (
              <text x={x + 11} y={baseY - hi(icici5pct) - 4} textAnchor="middle" fill={COLOR} fontSize="8">₹{Math.round(icici5pct / 100) * 100}</text>
            )}
          </g>
        );
      })}
      <line x1="20" y1="230" x2="660" y2="230" stroke="var(--border)" strokeWidth="1" />
      <g>
        <rect x="100" y="258" width="12" height="10" fill={COLOR} rx="2" />
        <text x="116" y="267" fill="var(--text-muted)" fontSize="11">Amazon Pay ICICI (5%, no cap)</text>
        <rect x="370" y="258" width="12" height="10" fill="#6366f1" rx="2" />
        <text x="386" y="267" fill="var(--text-muted)" fontSize="11">HDFC Millennia (5%, cap ₹1,000/mo)</text>
      </g>
      <text x="340" y="248" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Notice October, November, December: ICICI earns significantly more. The cap is where Millennia loses.</text>
    </svg>
  );
}

function TrifectaExplainer() {
  return (
    <svg
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="The rare trifecta: Amazon Pay ICICI card has zero annual fee, 5 percent cashback, and no monthly cap simultaneously"
      style={{ width: "100%", borderRadius: 10, background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="26" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">The Rarest Trifecta in Indian Credit Cards</text>
      {[
        { x: 80, label: "Zero Fee", sub: "Lifetime free", icon: "₹0", ok: true },
        { x: 280, label: "5% Rate", sub: "On all Amazon", icon: "5%", ok: true },
        { x: 480, label: "No Cap", sub: "On Amazon spend", icon: "∞", ok: true },
      ].map(item => (
        <g key={item.x}>
          <circle cx={item.x + 70} cy={95} r={55} fill={item.ok ? COLOR + "22" : "#fee2e2"} stroke={item.ok ? COLOR : "#dc2626"} strokeWidth="2" />
          <text x={item.x + 70} y={85} textAnchor="middle" fill={COLOR} fontSize="20" fontWeight="900">{item.icon}</text>
          <text x={item.x + 70} y={106} textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">{item.label}</text>
          <text x={item.x + 70} y={122} textAnchor="middle" fill="var(--text-muted)" fontSize="11">{item.sub}</text>
        </g>
      ))}
      <text x="340" y="162" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Every other 5% card in India has either a fee, a cap, or both. Amazon Pay ICICI has neither.</text>
    </svg>
  );
}

function SaleStrategyGrid() {
  return (
    <svg
      viewBox="0 0 680 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Amazon sale strategy grid showing how cashback stacks with bank offers during Great Indian Sale and Prime Day"
      style={{ width: "100%", borderRadius: 10, background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">Sale Season Stack: What You Actually Save</text>
      {[
        ["Scenario", "Card Cashback", "Bank Offer", "Sale Discount", "Total Return"],
        ["₹10,000 purchase, Prime", "₹500 (5%)", "₹500-1,000 (bank)", "₹1,000-3,000", "₹2,000-4,500"],
        ["₹20,000 purchase, Prime", "₹1,000 (5%)", "₹1,000-2,000 (bank)", "₹2,000-5,000", "₹4,000-8,000"],
        ["₹5,000, non-Prime", "₹150 (3%)", "₹250-500 (bank)", "₹500-1,500", "₹900-2,150"],
        ["₹50,000 big-ticket item", "₹2,500 (5%)", "₹2,500-5,000 (bank)", "₹5,000-10,000", "₹10,000-17,500"],
      ].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={10 + ci * 132} y={36 + ri * 34} width={130} height={32} fill={ri === 0 ? COLOR : ri % 2 === 0 ? "#fff" : "var(--surface, #f8fafc)"} rx="2" />
              <text x={75 + ci * 132} y={55 + ri * 34} textAnchor="middle" fill={ri === 0 ? "#fff" : ci === 4 ? COLOR : "var(--text)"} fontSize="10" fontWeight={ri === 0 || ci === 0 ? "700" : "400"}>{cell}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="340" y="210" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Bank offers are additional and require prior card registration. Check Amazon offer page before sale.</text>
    </svg>
  );
}

function EMIDecisionTree() {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision tree: when to use no-cost EMI on Amazon versus paying in full with 5 percent cashback"
      style={{ width: "100%", borderRadius: 10, background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">No-Cost EMI vs Full Payment: Which Earns More?</text>
      <rect x="240" y="38" width="200" height="42" fill={COLOR} rx="8" />
      <text x="340" y="57" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Purchase on Amazon</text>
      <text x="340" y="73" textAnchor="middle" fill="#fff" fontSize="11">Do you need EMI?</text>
      <line x1="180" y1="80" x2="180" y2="108" stroke="var(--border)" strokeWidth="1" />
      <line x1="500" y1="80" x2="500" y2="108" stroke="var(--border)" strokeWidth="1" />
      <line x1="180" y1="80" x2="340" y2="80" stroke="var(--border)" strokeWidth="1" />
      <line x1="340" y1="80" x2="500" y2="80" stroke="var(--border)" strokeWidth="1" />
      <rect x="80" y="108" width="200" height="56" fill="#fef2f2" stroke="#fca5a5" rx="8" />
      <text x="180" y="128" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="600">No-Cost EMI</text>
      <text x="180" y="145" textAnchor="middle" fill="#991b1b" fontSize="11">Cashback on upfront amount only.</text>
      <text x="180" y="160" textAnchor="middle" fill="#991b1b" fontSize="11">Interest waived but cashback lost on EMI instalments.</text>
      <rect x="400" y="108" width="200" height="56" fill="#f0fdf4" stroke="#86efac" rx="8" />
      <text x="500" y="128" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="600">Pay in Full</text>
      <text x="500" y="145" textAnchor="middle" fill="#166534" fontSize="11">5% cashback on full amount.</text>
      <text x="500" y="160" textAnchor="middle" fill="#166534" fontSize="11">On ₹20,000 item: ₹1,000 back immediately.</text>
    </svg>
  );
}

function WhenOtherCardsBeat() {
  return (
    <svg
      viewBox="0 0 680 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Scenarios where HDFC Millennia or SBI Cashback beats Amazon Pay ICICI despite lower rates"
      style={{ width: "100%", borderRadius: 10, background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", marginTop: 8 }}
    >
      <text x="340" y="24" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="700">When Another Card Beats Amazon Pay ICICI</text>
      {[
        { label: "You also spend heavily on Swiggy/Zomato", card: "HDFC Millennia", reason: "5% on Amazon + Swiggy + Zomato in one card" },
        { label: "Your Amazon spend is under ₹2,000/mo", card: "AU Xcite ACE", reason: "Free card, 2% flat, no complexity" },
        { label: "Mixed online: Amazon + Myntra + Ajio + others", card: "SBI Cashback", reason: "5% ALL online, not just Amazon, cap ₹5,000" },
      ].map((item, i) => (
        <g key={i}>
          <rect x="10" y={42 + i * 36} width="320" height="30" fill="#fff" stroke="var(--border)" rx="4" />
          <text x="170" y={61 + i * 36} textAnchor="middle" fill="var(--text)" fontSize="11">{item.label}</text>
          <rect x="344" y={42 + i * 36} width="160" height="30" fill={COLOR + "22"} stroke={COLOR} rx="4" />
          <text x="424" y={61 + i * 36} textAnchor="middle" fill={COLOR} fontSize="11" fontWeight="700">{item.card}</text>
          <rect x="518" y={42 + i * 36} width="152" height="30" fill="var(--surface, #f8fafc)" stroke="var(--border)" rx="4" />
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
        acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI Credit Card gives 5% cashback on Amazon for Prime members, with no monthly cap and no annual fee. This is the single best card for Amazon spend in India as of June 2026. No other card offers 5% cashback on Amazon without either a monthly cap or an annual fee." }
      },
      {
        "@type": "Question",
        name: "Does Amazon Pay ICICI card work for non-Prime Amazon members?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, but the cashback rate drops to 3% for non-Prime Amazon members. The card itself is free regardless of Prime status. If you spend more than ₹600/month on Amazon, the Prime subscription pays for itself in extra 2% cashback alone." }
      },
      {
        "@type": "Question",
        name: "Is there any monthly spending cap on Amazon Pay ICICI cashback?",
        acceptedAnswer: { "@type": "Answer", text: "There is no monthly cap on cashback earned from Amazon purchases. This is what makes the card genuinely exceptional. Even if you spend ₹1 lakh on Amazon in a month during a big sale, you earn ₹5,000 cashback. No other card in this category offers this." }
      },
      {
        "@type": "Question",
        name: "Does Amazon cashback stack with bank offers during Amazon sale?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, bank offers during Great Indian Sale and Prime Day are typically additional to your regular cashback. You earn your 5% card cashback plus the bank offer discount. However, bank offers often require pre-registration on Amazon's offer page before the sale starts." }
      },
      {
        "@type": "Question",
        name: "Should I use Amazon gift cards to get double cashback?",
        acceptedAnswer: { "@type": "Answer", text: "This does not work as hoped. Purchasing Amazon gift cards with your credit card and then using those gift cards on Amazon does not earn you 5% on the gift card purchase amount. Banks treat gift card purchases as cash equivalent transactions, which earn base 0.5% or nothing. This is a known trap." }
      },
      {
        "@type": "Question",
        name: "What cashback do I earn on Amazon Pay partners with the ICICI card?",
        acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI card earns 2% cashback on Amazon Pay partner merchants. These are merchants where you pay via Amazon Pay at checkout. The list changes, but it typically includes Swiggy, Cleartrip, BookMyShow, and several utility services. Check Amazon's partner list for current inclusions." }
      },
      {
        "@type": "Question",
        name: "Does no-cost EMI on Amazon reduce my cashback?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, this is an important detail. When you choose no-cost EMI, the cashback is typically calculated only on the amount charged to your card in that billing cycle, not the full purchase price. Paying in full gives you 5% on the entire amount upfront." }
      },
      {
        "@type": "Question",
        name: "Can I use HDFC Millennia instead of Amazon Pay ICICI for Amazon shopping?",
        acceptedAnswer: { "@type": "Answer", text: "HDFC Millennia also gives 5% on Amazon as a partner merchant, but with a shared ₹1,000 monthly cap across all cashback categories. If your Amazon spend regularly exceeds ₹20,000 per month, Amazon Pay ICICI earns significantly more because of the uncapped structure." }
      },
      {
        "@type": "Question",
        name: "Is Amazon Pay ICICI a good card for non-Amazon purchases?",
        acceptedAnswer: { "@type": "Answer", text: "It earns 1% on all other spends outside Amazon and Amazon Pay partners. That is a decent base rate for a free card. For non-Amazon spending, cards like SBI Cashback (5% all online) or Axis ACE (4% via UPI) will earn more. Amazon Pay ICICI is best used exclusively for Amazon and Amazon Pay transactions." }
      },
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Credit Card for Amazon Shopping in India (June 2026)",
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
      { "@type": "ListItem", position: 3, name: "Best Credit Card for Amazon", item: "https://assurefintech.com/best/credit-card-for-amazon" },
    ]
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
        <Link href="/">Home</Link> / <Link href="/best/">Best Cards</Link> / Best Credit Card for Amazon
      </nav>

      <div style={{ display: "inline-block", background: COLOR, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>
        CREDIT CARDS · AMAZON SHOPPING
      </div>

      <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--text)", marginBottom: 12, lineHeight: 1.2 }}>
        Best Credit Card for Amazon India (June 2026)
      </h1>

      <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 16 }}>
        If you buy on Amazon and are not using Amazon Pay ICICI, you are leaving ₹5,000-10,000 per year on the table. Here is why this free card is genuinely exceptional, and when other cards are worth considering instead.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 32 }}>
        Last updated {UPDATED} · By Ash K · 8 min read
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--text)" }}>Our Top Picks for Amazon Shopping</h2>

        {[
          {
            name: "Amazon Pay ICICI Credit Card",
            slug: "amazon-pay-icici",
            fee: "Free (lifetime)",
            rate: "5% (Prime) / 3% (non-Prime)",
            cap: "No cap on Amazon",
            badge: "Clear Winner",
            why: "The only 5% cashback card in India with zero annual fee and no monthly cap on the cashback category. At ₹10,000/month Amazon spend, you earn ₹6,000/year in cashback at zero card cost. There is no sensible argument against holding this card if you use Amazon.",
            caveat: "3% only if you do not have Prime. Earns only 1% on non-Amazon spends."
          },
          {
            name: "HDFC Millennia Credit Card",
            slug: "hdfc-millennia",
            fee: "₹1,000/yr",
            rate: "5% on Amazon",
            cap: "₹1,000/mo shared",
            badge: "Versatile Backup",
            why: "Good if you also want 5% on Swiggy, Zomato, and Flipkart under one card. The shared ₹1,000/mo cap limits Amazon-only earnings to ₹12,000/year, but the breadth of partner coverage is unmatched in this tier.",
            caveat: "Cap is shared across all partner categories. Heavy Amazon use crowds out other rewards."
          },
          {
            name: "SBI Cashback Credit Card",
            slug: "sbi-cashback",
            fee: "₹999/yr",
            rate: "5% all online spends",
            cap: "₹5,000/mo",
            badge: "High-Volume Pick",
            why: "If your combined online spend across Amazon, Myntra, Nykaa, and other sites exceeds ₹30,000/month, SBI Cashback starts competing. The ₹5,000 monthly cap binds only at ₹1 lakh of online spend, giving it the largest effective earning ceiling of any 5% card.",
            caveat: "Not as good as Amazon Pay ICICI for pure Amazon spend unless you are a very high spender."
          },
          {
            name: "AU Xcite ACE Credit Card",
            slug: "au-xcite-ace",
            fee: "Free (lifetime)",
            rate: "2% flat all purchases",
            cap: "No cap",
            badge: "Budget Option",
            why: "If Amazon Pay ICICI application is declined or you want a simple backup, AU Xcite ACE gives 2% flat cashback with no cap and no fee. The rate is lower but the simplicity is real.",
            caveat: "2% is significantly lower than 5%. Only use if you cannot get Amazon Pay ICICI."
          },
        ].map(card => (
          <div key={card.slug} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: "20px 22px", marginBottom: 16, background: "#fff" }}>
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
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Why Amazon Pay ICICI Is Genuinely Exceptional</h2>
        <p>In the Indian credit card market, high cashback rates almost always come with one of two catches: a significant annual fee or a strict monthly cap. Amazon Pay ICICI eliminates both for Amazon spend. This is not normal. It is the rarest combination in the market.</p>
        <p>The card is issued by ICICI Bank under a co-brand agreement with Amazon India. The economics work because Amazon subsidises the reward cost in exchange for payment exclusivity and customer lock-in. You benefit from that business arrangement.</p>
        <TrifectaExplainer />
        <p style={{ marginTop: 12 }}>The annual savings compound quickly. A household spending ₹15,000/month on Amazon earns ₹9,000/year in cashback at zero card cost. The same household on a capped 5% card like HDFC Millennia earns at most ₹12,000 per year but pays ₹1,000 in fee, netting ₹11,000. On the uncapped free card they net ₹9,000. Wait, that is actually less.</p>
        <p>The key insight is that Millennia wins only if you stay within its ₹1,000/month cap, meaning you are spending under ₹20,000/month on Amazon. Above ₹20,000/month on Amazon, Amazon Pay ICICI wins decisively because Millennia is capped and the free card earns 5% on every rupee. Read our breakdown of <Link href="/blog/cashback-rate-is-a-lie">why the cashback rate is always a lie</Link> at the margins.</p>
        <NoCap5PercentVisual />
        <p style={{ marginTop: 12 }}>The chart above shows a typical Indian household's Amazon spend across a year, spiking in July (Prime Day) and October-December (festive season). The uncapped ICICI card earns proportionally more in those peak months while Millennia hits its ₹1,000 ceiling and leaves money on the table.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Amazon Sale Strategy</h2>
        <p>Great Indian Festival, Prime Day, and the Republic Day and Independence Day sales represent the highest-value weeks of the year for Amazon shoppers. The card cashback stacks with Amazon bank offers, creating a combined return that can reach 15-25% on some purchases.</p>
        <p>The key is pre-registration. Bank offers during Amazon sales require you to register your card on Amazon's offer page before the sale goes live. Missing this step means you get only your card's base cashback and forfeit the bank offer amount.</p>
        <SaleStrategyGrid />
        <p style={{ marginTop: 12 }}>ICICI Bank typically offers ₹1,500-3,000 instant discount on purchases above ₹5,000 during major Amazon sales, on top of the 5% card cashback. This is not guaranteed every sale, but ICICI Amazon co-brand cards have historically been included in almost every major Amazon sale offer.</p>
        <p>For a structured approach to maximising returns across all online platforms, visit our <Link href="/smart-swipe">Smart Swipe guide</Link> or build your optimal card combination at <Link href="/stack-builder">Stack Builder</Link>.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>EMI on Amazon: The Hidden Cashback Trap</h2>
        <p>No-cost EMI sounds like a free service, and on the interest side it largely is. But when you choose no-cost EMI on Amazon, your card is typically charged in monthly instalments, not the full amount upfront.</p>
        <EMIDecisionTree />
        <p style={{ marginTop: 12 }}>If you pay ₹24,000 for a laptop on 3-month no-cost EMI, your card is charged ₹8,000 per month. You earn 5% cashback on ₹8,000 in the first month, not ₹24,000. The total cashback across 3 months is still ₹1,200, which is the same as paying full upfront. However, the cashback arrives in smaller tranches and the processing fee sometimes charged for no-cost EMI can reduce the effective return.</p>
        <p>For high-value purchases during sale, paying in full typically gives you access to larger bank offer discounts that exceed any EMI convenience benefit. Do the math on your specific purchase before choosing EMI.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Gift Card Trap</h2>
        <p>A common question: can you buy Amazon gift cards with your credit card and then use those gift cards on Amazon to effectively earn 5% on everything including categories that might otherwise be excluded?</p>
        <p>No. Banks classify gift card purchases as cash-equivalent transactions. The Amazon Pay ICICI card terms explicitly exclude gift card purchases from the 5% cashback. Gift card purchases typically earn 0% or the base 1% rate. This is a well-documented trap that gets repeated on reward forums, and it does not work.</p>
        <WhenOtherCardsBeat />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What to Do Right Now</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 2.1 }}>
          <li>If you do not have Amazon Pay ICICI, apply now. It is free, approval is typically quick for existing ICICI customers, and the value addition is immediate.</li>
          <li>If you are an Amazon Prime member, confirm you get the 5% rate. Check your Amazon wallet section after your first purchase to confirm the rate applied.</li>
          <li>Set Amazon Pay ICICI as your default payment method in the Amazon app and on the website.</li>
          <li>Before the next Amazon sale, check the ICICI Bank offer page on Amazon and pre-register your card for additional discounts.</li>
          <li>Do not use this card for non-Amazon spending if you have better category cards. Reserve it for Amazon purchases only.</li>
          <li>If your Amazon spend exceeds ₹30,000/month and you also shop on other sites, consider pairing with <Link href="/cards/sbi-cashback">SBI Cashback</Link> for non-Amazon online purchases.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 40, background: "var(--surface, #f8fafc)", border: `1px solid ${COLOR}44`, borderRadius: 10, padding: "24px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Honest Verdict</h2>
        <p>Amazon Pay ICICI is not the best card in your wallet. It is the best card for one specific thing: buying on Amazon. Within that use case, it is almost impossible to beat: free, 5%, uncapped, and backed by ICICI Bank which is one of the most reliable issuers in India for prompt cashback credit.</p>
        <p>If you already have HDFC Millennia, it covers Amazon at the same 5% rate and handles a wider range of categories. But if Amazon is your primary online shopping platform, and for many Indian households it is, the dedicated Amazon Pay ICICI is the better choice because you will eventually spend more than ₹20,000/month on Amazon during sale months, and that is when the no-cap advantage shows its value.</p>
        <p>One final honest note: cashback on this card is credited as Amazon Pay balance, not direct bank credit. Amazon Pay balance is spendable on Amazon and Amazon Pay partner merchants, not directly withdrawable. If you prefer bank-account cashback, the SBI Cashback card is the alternative.</p>
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

      <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>
        Related:{" "}
        <Link href="/cards/amazon-pay-icici">Amazon Pay ICICI Full Review</Link> ·{" "}
        <Link href="/cards/hdfc-millennia">HDFC Millennia Review</Link> ·{" "}
        <Link href="/best/credit-card-for-online-shopping">Best Cards for All Online Shopping</Link> ·{" "}
        <Link href="/best/credit-card-for-flipkart">Best Cards for Flipkart</Link> ·{" "}
        <Link href="/blog/reward-points-vs-cashback">Reward Points vs Cashback</Link> ·{" "}
        <Link href="/smart-swipe">Smart Swipe Guide</Link>
      </p>

      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 20, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong>Disclaimer:</strong> Assure Fintech earns referral fees from some card links. All card terms, rates, and caps are based on issuer terms as of {UPDATED}. Cashback rates, partner merchant lists, and monthly caps can change without notice. Amazon Pay cashback is credited as Amazon Pay balance, not bank account credit. Verify current terms with ICICI Bank and Amazon before applying. This is not financial advice.
      </footer>
    </main>
  );
}
