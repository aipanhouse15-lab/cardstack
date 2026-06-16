import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "The Fuel Card Trick: Stop Paying the 1% Surcharge and Earn 4-7% Back at the Pump",
  description: "Your fuel card action plan Step 1: Note which petrol brand (BPCL, HPCL, IOCL) you fill up at most often. Check your last 3 fuel receipts.",
  alternates: { canonical: "/blog/fuel-trick" },
  openGraph: {
    title: "The Fuel Card Trick: Stop Paying the 1% Surcharge and Earn 4-7% Back at the Pump",
    description: "Your fuel card action plan Step 1: Note which petrol brand (BPCL, HPCL, IOCL) you fill up at most often. Check your last 3 fuel receipts.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/fuel-credit-card-trick-india
// Template: how-to / optimization guide
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgFuelSurchargeExplainer = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Diagram showing how the 1% fuel surcharge works on credit card payments at petrol stations" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">How the 1% Fuel Surcharge Actually Works</text>
    {/* Flow */}
    <rect x="30" y="55" width="140" height="60" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5" />
    <text x="100" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">You pay</text>
    <text x="100" y="100" textAnchor="middle" fontSize="16" fontWeight="800" fill={COLOR}>₹5,000</text>
    <text x="100" y="115" textAnchor="middle" fontSize="10" fill="var(--text-muted)">at petrol bunk</text>

    <text x="210" y="90" textAnchor="middle" fontSize="22" fill="var(--text-muted)">+</text>

    <rect x="240" y="55" width="160" height="60" rx="8" fill="var(--raise)" stroke="#ef4444" strokeWidth="1.5" />
    <text x="320" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ef4444">1% fuel surcharge</text>
    <text x="320" y="95" textAnchor="middle" fontSize="16" fontWeight="800" fill="#ef4444">₹50</text>
    <text x="320" y="112" textAnchor="middle" fontSize="10" fill="var(--text-muted)">added by card network</text>

    <text x="450" y="90" textAnchor="middle" fontSize="22" fill="var(--text-muted)">+</text>

    <rect x="470" y="55" width="160" height="60" rx="8" fill="var(--raise)" stroke="#f59e0b" strokeWidth="1.5" />
    <text x="550" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f59e0b">18% GST on surcharge</text>
    <text x="550" y="95" textAnchor="middle" fontSize="16" fontWeight="800" fill="#f59e0b">₹9</text>
    <text x="550" y="112" textAnchor="middle" fontSize="10" fill="var(--text-muted)">tax on a fee</text>

    <rect x="100" y="145" width="520" height="44" rx="8" fill="var(--raise2)" />
    <text x="360" y="164" textAnchor="middle" fontSize="12" fill="white">Total bill without fuel card:</text>
    <text x="360" y="180" textAnchor="middle" fontSize="14" fontWeight="800" fill="#ef4444">₹5,059 instead of ₹5,000</text>
  </svg>
);

const SvgCardComparison = () => (
  <svg viewBox="0 0 720 300" role="img" aria-label="Comparison table of best fuel credit cards in India with surcharge waiver and reward details" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="300" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Best Fuel Cards in India: June 2026</text>
    <rect x="20" y="36" width="680" height="32" fill={COLOR} rx="4" />
    <text x="100" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Card</text>
    <text x="230" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Surcharge Waiver</text>
    <text x="360" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Reward on Fuel</text>
    <text x="490" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Works At</text>
    <text x="630" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Net Value</text>
    {[
      ["BPCL SBI Octane", "Full waiver", "7.25% at BPCL", "BPCL pumps only", "~8.25%"],
      ["BPCL SBI Card", "Full waiver", "4.25% at BPCL", "BPCL pumps only", "~5.25%"],
      ["HPCL Coral RBL", "Full waiver", "3.5% at HPCL", "HPCL pumps only", "~4.5%"],
      ["IndianOil Kotak", "Full waiver", "4% at IOCL", "IOCL pumps only", "~5%"],
      ["HDFC Regalia", "Waiver ₹400-5000", "2X pts on fuel", "All pumps", "~2%"],
      ["Standard card", "No waiver", "1X pts on fuel", "All pumps", "-0.5% (net loss)"],
    ].map(([card, waiver, reward, where, net], i) => (
      <g key={i}>
        <rect x="20" y={70 + i * 36} width="680" height="36" fill={i % 2 === 0 ? "var(--raise2)" : "var(--raise)"} />
        <text x="100" y={93 + i * 36} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">{card}</text>
        <text x="230" y={93 + i * 36} textAnchor="middle" fontSize="11" fill={waiver === "No waiver" ? "#ef4444" : "#16a34a"} fontWeight="600">{waiver}</text>
        <text x="360" y={93 + i * 36} textAnchor="middle" fontSize="11" fill="var(--text)">{reward}</text>
        <text x="490" y={93 + i * 36} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{where}</text>
        <text x="630" y={93 + i * 36} textAnchor="middle" fontSize="12" fontWeight="800" fill={net.startsWith("-") ? "#ef4444" : COLOR}>{net}</text>
      </g>
    ))}
  </svg>
);

const SvgBrandMap = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Map showing which fuel card brand works at which petrol station chain in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Card-to-Pump Brand Matching: Use the Wrong Card and You Earn Nothing</text>
    {[
      { brand: "BPCL Pumps", card: "BPCL SBI / Octane", color: "#f59e0b", x: 60 },
      { brand: "HPCL Pumps", card: "HPCL Coral RBL", color: "#ef4444", x: 240 },
      { brand: "IOCL Pumps", card: "IndianOil Kotak", color: "#16a34a", x: 420 },
      { brand: "Any Pump", card: "HDFC Regalia (lower rate)", color: "var(--mut)", x: 600 },
    ].map(({ brand, card, color, x }) => (
      <g key={x}>
        <rect x={x} y="44" width="160" height="100" rx="8" fill="var(--raise)" stroke={color} strokeWidth="2" />
        <rect x={x} y="44" width="160" height="32" rx="8" fill={color} />
        <rect x={x} y="60" width="160" height="16" fill={color} />
        <text x={x + 80} y="65" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">{brand}</text>
        <text x={x + 80} y="100" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Use this card:</text>
        <text x={x + 80} y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">{card.split("(")[0]}</text>
        {card.includes("(") && <text x={x + 80} y="133" textAnchor="middle" fontSize="9" fill="var(--text-muted)">({card.split("(")[1]}</text>}
      </g>
    ))}
  </svg>
);

const SvgAnnualSavingsChart = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Bar chart comparing annual fuel savings at Rs 5000 per month spend with and without a fuel card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="280" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Annual Impact at ₹5,000/month Fuel Spend (₹60,000/year)</text>
    {[
      { label: "No card (surcharge paid)", val: -600, color: "#ef4444", x: 80, desc: "You lose ₹600/year in surcharge" },
      { label: "HDFC Regalia", val: 600, color: "var(--dim)", x: 230, desc: "~2% rewards, surcharge waived" },
      { label: "IndianOil Kotak", val: 2400, color: "#16a34a", x: 380, desc: "~4% at IOCL + waiver" },
      { label: "BPCL SBI Card", val: 3150, color: COLOR, x: 530, desc: "4.25% at BPCL + waiver" },
      { label: "BPCL SBI Octane", val: 4350, color: "#4c1d95", x: 600, desc: "7.25% at BPCL + waiver" },
    ].map(({ label, val, color, x, desc }) => {
      const isNeg = val < 0;
      const barH = Math.abs(val) / 30;
      const barY = isNeg ? 160 : 160 - barH;
      return (
        <g key={x}>
          <rect x={x} y={barY} width="72" height={barH} fill={color} rx="4" />
          <text x={x + 36} y={isNeg ? 160 + barH + 14 : barY - 6} textAnchor="middle" fontSize="11" fontWeight="700" fill={isNeg ? "#ef4444" : "var(--text)"}>
            {isNeg ? `-₹${Math.abs(val)}` : `+₹${val}`}
          </text>
          <text x={x + 36} y={isNeg ? 160 + barH + 28 : 226} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{label.split(" ").slice(0, 2).join(" ")}</text>
          <text x={x + 36} y={isNeg ? 160 + barH + 40 : 238} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{label.split(" ").slice(2).join(" ")}</text>
        </g>
      );
    })}
    <line x1="40" y1="160" x2="680" y2="160" stroke="var(--border)" strokeWidth="1.5" />
    <text x="24" y="164" fontSize="10" fill="var(--text-muted)">₹0</text>
    <text x="20" y="268" fontSize="10" fill="var(--text-muted)">*BPCL Octane: ₹1,499 annual fee. All others at respective annual fees. Net values shown after fee.</text>
  </svg>
);

const SvgGSTBreakdown = () => (
  <svg viewBox="0 0 720 160" role="img" aria-label="Breakdown showing GST charged on fuel surcharge amounts to paying tax on a fee" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">The GST-on-Surcharge Problem: Paying Tax on a Fee</text>
    <rect x="40" y="44" width="180" height="90" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5" />
    <text x="130" y="68" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Fuel purchase</text>
    <text x="130" y="90" textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--text)">₹10,000</text>
    <text x="130" y="110" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Your actual fuel</text>
    <text x="250" y="95" textAnchor="middle" fontSize="24" fill="var(--text-muted)">+</text>
    <rect x="280" y="44" width="180" height="90" rx="8" fill="var(--raise)" stroke="#ef4444" strokeWidth="1.5" />
    <text x="370" y="68" textAnchor="middle" fontSize="11" fill="#ef4444">1% surcharge</text>
    <text x="370" y="90" textAnchor="middle" fontSize="18" fontWeight="800" fill="#ef4444">₹100</text>
    <text x="370" y="110" textAnchor="middle" fontSize="10" fill="var(--text-muted)">card network charge</text>
    <text x="490" y="95" textAnchor="middle" fontSize="24" fill="var(--text-muted)">+</text>
    <rect x="520" y="44" width="180" height="90" rx="8" fill="var(--raise)" stroke="#f59e0b" strokeWidth="1.5" />
    <text x="610" y="68" textAnchor="middle" fontSize="11" fill="#f59e0b">18% GST on surcharge</text>
    <text x="610" y="90" textAnchor="middle" fontSize="18" fontWeight="800" fill="#f59e0b">₹18</text>
    <text x="610" y="110" textAnchor="middle" fontSize="10" fill="var(--text-muted)">govt tax on a private fee</text>
    <text x="360" y="148" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Without a fuel card: you pay ₹118 extra on every ₹10,000 of fuel</text>
  </svg>
);

const SvgStackingFlow = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Strategy guide showing how to stack a fuel card with a cashback card for maximum return" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Stacking Strategy: Fuel Card + Cashback Card</text>
    <rect x="30" y="50" width="190" height="110" rx="8" fill="var(--raise)" stroke={COLOR} strokeWidth="2" />
    <text x="125" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">At BPCL pump?</text>
    <text x="125" y="98" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Use BPCL SBI Card</text>
    <text x="125" y="115" textAnchor="middle" fontSize="14" fontWeight="800" fill={COLOR}>4.25% value</text>
    <text x="125" y="133" textAnchor="middle" fontSize="10" fill="var(--text-muted)">+ no surcharge</text>
    <text x="125" y="148" textAnchor="middle" fontSize="10" fill="var(--text-muted)">+ no GST on surcharge</text>
    <line x1="220" y1="105" x2="280" y2="105" stroke="var(--border)" strokeWidth="2" strokeDasharray="4,3" />
    <rect x="270" y="50" width="190" height="110" rx="8" fill="var(--raise)" stroke="#16a34a" strokeWidth="2" />
    <text x="365" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Not brand-specific?</text>
    <text x="365" y="98" textAnchor="middle" fontSize="11" fill="var(--text-muted)">HDFC Regalia / Diners</text>
    <text x="365" y="115" textAnchor="middle" fontSize="14" fontWeight="800" fill="#16a34a">~2% value</text>
    <text x="365" y="133" textAnchor="middle" fontSize="10" fill="var(--text-muted)">+ partial surcharge waiver</text>
    <text x="365" y="148" textAnchor="middle" fontSize="10" fill="var(--text-muted)">(₹400-₹5,000 range)</text>
    <line x1="460" y1="105" x2="510" y2="105" stroke="var(--border)" strokeWidth="2" strokeDasharray="4,3" />
    <rect x="500" y="50" width="190" height="110" rx="8" fill="var(--raise)" stroke="#f59e0b" strokeWidth="2" />
    <text x="595" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">No fuel card at all?</text>
    <text x="595" y="98" textAnchor="middle" fontSize="11" fill="var(--text-muted)">You pay 1% surcharge</text>
    <text x="595" y="115" textAnchor="middle" fontSize="14" fontWeight="800" fill="#ef4444">-1.18% net</text>
    <text x="595" y="133" textAnchor="middle" fontSize="10" fill="var(--text-muted)">surcharge + GST</text>
    <text x="595" y="148" textAnchor="middle" fontSize="10" fill="var(--text-muted)">₹708 loss at ₹5k/month</text>
  </svg>
);

export default function BlogFuelTrick() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the 1% fuel surcharge on credit cards?",
        acceptedAnswer: { "@type": "Answer", text: "When you pay for petrol or diesel at a petrol bunk using a credit card, the card network (Visa, Mastercard, RuPay) adds a 1% fuel surcharge on top of the transaction amount. The government then levies 18% GST on this surcharge. Combined, you pay roughly 1.18% more than the pump price without a fuel-specific card." }
      },
      {
        "@type": "Question",
        name: "Which fuel card gives the highest reward at BPCL pumps?",
        acceptedAnswer: { "@type": "Answer", text: "BPCL SBI Octane Card gives the highest value at BPCL pumps: 7.25% effective return on fuel spend. This includes 25 reward points per ₹100 at BPCL (each point valued at ₹0.25 = ₹6.25 value) plus the 1% surcharge waiver. The card has a ₹1,499 annual fee, which is recovered at roughly ₹21,000 annual BPCL spend." }
      },
      {
        "@type": "Question",
        name: "Does the BPCL SBI Card work at non-BPCL petrol pumps?",
        acceptedAnswer: { "@type": "Answer", text: "You can use the BPCL SBI Card at any petrol pump in India, but the enhanced fuel rewards (4.25% at BPCL) only apply at BPCL-branded stations. At HPCL or IOCL pumps, you earn standard reward points (much lower rate). The surcharge waiver may also be limited to BPCL transactions." }
      },
      {
        "@type": "Question",
        name: "What if I fill fuel at both BPCL and HPCL stations?",
        acceptedAnswer: { "@type": "Answer", text: "In this case, either use HDFC Regalia or a similar premium all-pump card that gives partial surcharge waiver and 2X points everywhere, or carry both a BPCL SBI and HPCL Coral card and use each at the matching pump. The second option is more effort but maximizes returns if your monthly fuel spend is above ₹4,000." }
      },
      {
        "@type": "Question",
        name: "How much is the surcharge waiver limit per month?",
        acceptedAnswer: { "@type": "Answer", text: "BPCL SBI Card waives surcharge on transactions between ₹500 and ₹4,000 per transaction. Most fuel cards have a minimum transaction floor (to prevent misuse at low amounts) and a maximum limit per statement cycle. BPCL SBI caps surcharge waiver at ₹100/month. Beyond that cap, you pay the surcharge even with the card." }
      },
      {
        "@type": "Question",
        name: "Is it worth getting a fuel card if I spend only ₹2,000-3,000 per month on fuel?",
        acceptedAnswer: { "@type": "Answer", text: "At ₹2,000-3,000/month, the benefit is real but modest. Without a fuel card, you pay roughly ₹24-36/month in surcharge and GST. With a BPCL SBI Card (annual fee ₹499 waivable at ₹50,000 spend), you save the surcharge plus earn 4.25% rewards. Even at low fuel spend, the waiver alone justifies a free or low-fee fuel card." }
      },
      {
        "@type": "Question",
        name: "What does 'surcharge waiver' mean exactly on fuel cards?",
        acceptedAnswer: { "@type": "Answer", text: "Surcharge waiver means the bank refunds the 1% fuel surcharge back to your account, typically within 2-3 business days of the transaction. The 18% GST on the surcharge may or may not be waived separately, depending on the card. Check your card's terms to confirm whether GST on surcharge is also refunded or just the base 1% surcharge." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Fuel Card Trick: How to Stop Paying the 1% Surcharge and Earn 4-7% Back at the Pump",
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
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Fuel Credit Card Trick India", item: "https://assurefintech.com/blog/fuel-credit-card-trick-india" },
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Fuel Optimization
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            The Fuel Card Trick: Stop Paying the 1% Surcharge and Earn 4-7% Back at the Pump
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
            Every time you pay fuel with a regular credit card, you lose about ₹118 per ₹10,000. The right fuel card flips that into a ₹425-725 gain. Here is the complete optimization guide.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 7 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Fuel Card Trick
      </nav>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The surcharge problem nobody explains clearly</h2>
        <p>When you swipe any credit card at a petrol bunk, the Visa or Mastercard network adds a 1% fuel surcharge to your transaction. This is not charged by the petrol station, it is levied by the card network for fuel category transactions. The government then charges 18% GST on this surcharge, so your actual extra cost is 1.18% above the pump price.</p>
        <p>On ₹5,000/month in fuel, that is ₹59/month or ₹708/year quietly exiting your wallet. A fuel-specific card eliminates this and adds rewards on top.</p>
      </section>
      <SvgFuelSurchargeExplainer />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Cards that actually solve the problem</h2>
        <p>Fuel cards work in two ways: they waive the surcharge (so you pay exactly the pump price) and they earn enhanced reward points on fuel transactions. The best cards do both. The key constraint is that most top-tier fuel cards are brand-specific, meaning the best rewards only work at one petrol company's pumps.</p>
        <p>Know which brand of petrol bunk is nearest your home and office before picking a card. This single decision determines which card is best for you.</p>
      </section>
      <SvgCardComparison />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Brand-to-card matching: the most important decision</h2>
        <p>India's petrol retail is dominated by three PSU brands: BPCL (Bharat Petroleum), HPCL (Hindustan Petroleum), and IOCL (Indian Oil). Each has a co-branded credit card optimized for its own pumps. Using an HPCL card at a BPCL pump gives you standard reward rates, not the fuel-category enhanced rate.</p>
        <p>Before applying, check which brand dominates your usual fuel route. In most Indian cities, you will find all three brands on major roads, so look at which one is on your commute specifically.</p>
      </section>
      <SvgBrandMap />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The GST problem: you are paying tax on a fee</h2>
        <p>The 18% GST on the fuel surcharge is the part of this story that almost no card comparison site mentions. Without a surcharge waiver, you are not just paying 1%, you are paying 1.18%. The 0.18% extra is the government's cut on a private card network fee.</p>
        <p>Fuel cards that waive the surcharge eliminate both the base 1% and typically the GST component. This is the cleaner win from a fuel card beyond the reward points, and it is immediate, appearing on your bill at the pump.</p>
      </section>
      <SvgGSTBreakdown />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Real math: ₹5,000/month fuel spend</h2>

        <div style={{ background: "var(--raise)", padding: "16px 20px", borderRadius: 8, marginBottom: 16 }}>
          <p style={{ margin: "0 0 8px", fontWeight: 700 }}>Scenario: BPCL pump, ₹5,000/month spend</p>
          <p style={{ margin: "0 0 4px", fontSize: 14 }}><strong>Without fuel card:</strong> ₹5,000 x 1.18% surcharge+GST = ₹59/month lost. Annual loss: ₹708.</p>
          <p style={{ margin: "0 0 4px", fontSize: 14 }}><strong>With BPCL SBI Card (₹499 annual fee, waivable at ₹50K):</strong> Surcharge waived + 4.25% rewards = ₹212.50/month earned. Annual: ₹2,550. Net after fee: +₹2,051/year.</p>
          <p style={{ margin: 0, fontSize: 14 }}><strong>Swing from no card to fuel card:</strong> ₹2,051 + ₹708 = ₹2,759/year difference at ₹5,000/month spend. That is real money for picking the right card.</p>
        </div>
      </section>
      <SvgAnnualSavingsChart />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>How to stack a fuel card with a cashback card</h2>
        <p>Fuel cards typically earn minimal rewards outside the fuel category. So carry a general cashback card (like Axis Ace or Amazon Pay ICICI) for all non-fuel purchases, and reserve your BPCL/HPCL card strictly for petrol transactions. This two-card stack costs you no extra annual fee if the fuel card is fee-waivable.</p>
        <p>Do not use your fuel card for grocery or restaurant payments. It will not earn fuel-category rewards there, and you will miss out on better category rewards from your general card.</p>
      </section>
      <SvgStackingFlow />
      <section style={{ marginBottom: 24, padding: "20px 24px", background: "rgba(157,140,255,.08)", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 8px 8px 0" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px" }}>Your fuel card action plan</h2>
        <p style={{ margin: "0 0 8px" }}><strong>Step 1:</strong> Note which petrol brand (BPCL, HPCL, IOCL) you fill up at most often. Check your last 3 fuel receipts.</p>
        <p style={{ margin: "0 0 8px" }}><strong>Step 2:</strong> Apply for the matching co-branded card. BPCL pump users: BPCL SBI Card. HPCL users: HPCL Coral RBL. IOCL users: IndianOil Kotak.</p>
        <p style={{ margin: "0 0 8px" }}><strong>Step 3:</strong> Never use the fuel card for non-fuel purchases. Keep it in your wallet for petrol visits only and pair it with a general rewards card for everything else.</p>
        <p style={{ margin: 0 }}>Check <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe</Link> to find the best fuel card for your specific petrol brand and monthly spend amount.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        Related:{" "}
        <Link href="/blog/cashback-rate-is-a-lie" style={{ color: COLOR }}>Why advertised cashback rates are misleading</Link>{" "}
        ·{" "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe card finder</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison site. Fuel surcharge waiver terms, reward rates, and annual fee conditions are based on publicly available bank documentation as of June 2026. Petrol station brand availability varies by city and location. Verify all terms at the issuing bank's website before applying. Assure Fintech receives no payment from banks for editorial coverage.
      </footer>
    </main>
    </>
  );
}
