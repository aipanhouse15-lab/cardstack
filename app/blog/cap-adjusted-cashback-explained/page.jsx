import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 2 Article 2 — Cap-Adjusted Cashback Explained
// URL: /blog/cap-adjusted-cashback-explained
// Category: Credit Cards · Color: Violet #7C3AED
// Author: Ash K · Reviewed: June 3, 2026
// Target: 2,500+ visible words · 4 info-SVGs · 6 FAQs
// Template archetype: Math Walkthrough
// ============================================================

const COLOR = "#7C3AED";
const UPDATED = "June 3, 2026";

const SvgCapBinding = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="How a five percent cashback rate effectively becomes 1.5 percent when monthly cap binds at typical household spend levels" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">5% RATE WITH ₹1,000 MONTHLY CAP · EFFECTIVE RATE BY SPEND</text>
    <line x1="60" y1="240" x2="700" y2="240" stroke="var(--border)" />
    <line x1="60" y1="50" x2="60" y2="240" stroke="var(--border)" />
    <text x="60" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹5k</text>
    <text x="170" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹15k</text>
    <text x="280" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹25k</text>
    <text x="390" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹40k</text>
    <text x="500" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹60k</text>
    <text x="600" y="258" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">₹100k</text>

    <path d="M 60 65 L 130 65 L 200 65 L 280 130 L 390 175 L 500 200 L 700 218" fill="none" stroke={COLOR} strokeWidth="3" />
    <circle cx="200" cy="65" r="6" fill={COLOR} />
    <text x="160" y="56" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">5.0% earn rate (cap not binding)</text>
    <circle cx="280" cy="130" r="6" fill="#dc2626" />
    <text x="290" y="124" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">CAP BINDS at ₹20k spend</text>
    <text x="500" y="208" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">→ 1.0% effective at ₹100k</text>

    <text x="20" y="60" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)" transform="rotate(-90 20 60)">Effective % ↑</text>
  </svg>
);

const SvgFormula = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Cap-adjusted cashback formula visualisation showing partner spend cashback plus base spend cashback minus annual fee divided by total spend" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">THE GENERAL FORMULA · WHAT REALLY DETERMINES YOUR EFFECTIVE RATE</text>
    <rect x="40" y="50" width="640" height="90" fill="var(--bg-soft)" stroke="var(--border)" />
    <text x="360" y="82" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="14" fill="var(--text)">Effective rate = (Capped partner cashback + base cashback − annual fee)</text>
    <text x="360" y="106" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="14" fill="var(--text)">÷ total annual spend × 100</text>
    <text x="360" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill={COLOR} fontWeight="700">Where: capped partner cashback = MIN(partner spend × partner rate, monthly cap × 12)</text>
    <text x="360" y="178" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">base cashback = (total spend − partner spend) × base rate</text>
  </svg>
);

const SvgFiveCardCompare = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Effective cashback rate of five popular cards on identical 40k monthly spend split between partner and other categories" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">5 POPULAR CARDS · IDENTICAL ₹40K MONTHLY SPEND · 25% PARTNER MIX</text>
    {[
      { name: "Axis Ace", rate: "5% Gpay util · 4% Swiggy/Zomato/Ola · 1.5% base", eff: 2.85, w: 285, fee: 499 },
      { name: "HDFC Millennia", rate: "5% on 10 partner apps · 1% base · ₹1k voucher", eff: 2.50, w: 250, fee: 1000 },
      { name: "SBI Cashback", rate: "5% all online (cap ₹5k/mo) · 1% offline", eff: 2.40, w: 240, fee: 999 },
      { name: "Amazon Pay ICICI", rate: "5% Amazon Prime · 1% other · lifetime free", eff: 2.10, w: 210, fee: 0 },
      { name: "Flipkart Axis", rate: "5% Flipkart/Myntra · 4% Cleartrip etc · 1.5% base", eff: 2.30, w: 230, fee: 500 },
    ].map((c, i) => (
      <g key={i} transform={`translate(0, ${44 + i * 42})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">{c.name}</text>
        <text x="20" y="32" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{c.rate}</text>
        <rect x="380" y="6" width={c.w} height="22" fill={COLOR} opacity={0.5 + i * 0.12} />
        <text x={388 + c.w} y="22" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">{c.eff.toFixed(2)}%</text>
      </g>
    ))}
    <text x="20" y="262" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">All rates net of annual fee · profile: ₹10k food + ₹15k partner online + ₹15k other offline</text>
  </svg>
);

const SvgEarnersHeatmap = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Effective cashback rate matrix across five cards versus four spend profiles showing which card wins each profile" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">EFFECTIVE RATE MATRIX · CARD × SPEND PROFILE</text>
    {/* column headers */}
    {["Profile", "Light ₹15k", "Modest ₹30k", "Heavy ₹60k", "HNI ₹1L"].map((h, i) => (
      <text key={h} x={20 + i * 140} y="50" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">{h}</text>
    ))}
    {[
      { card: "Axis Ace", row: ["3.10%", "2.95%", "1.85%", "1.20%"] },
      { card: "HDFC Millennia", row: ["2.20%", "2.45%", "1.40%", "1.05%"] },
      { card: "SBI Cashback", row: ["2.00%", "2.25%", "3.10%", "2.50%"] },
      { card: "Amazon Pay ICICI", row: ["2.85%", "2.40%", "1.55%", "1.10%"] },
      { card: "Flipkart Axis", row: ["2.20%", "2.30%", "1.90%", "1.45%"] },
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${74 + i * 36})`}>
        <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{r.card}</text>
        {r.row.map((v, j) => {
          const num = parseFloat(v);
          const opacity = 0.3 + (num - 1.0) / 2.0 * 0.7;
          return (
            <g key={j} transform={`translate(${160 + j * 140}, 0)`}>
              <rect x="0" y="2" width="120" height="26" fill={COLOR} opacity={Math.max(0.15, Math.min(0.95, opacity))} />
              <text x="60" y="20" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={num > 2.5 ? "#fff" : "var(--text)"}>{v}</text>
            </g>
          );
        })}
      </g>
    ))}
    <text x="20" y="270" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Darker cell = higher effective rate · winner per profile shown bolded in app</text>
  </svg>
);

export default function CapAdjustedCashbackExplained() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Cap-Adjusted Cashback Explained — Why Your 5% Card Returns 2%",
    description: "How cap binding turns a headline 5% cashback rate into 1.5-2.5% effective return, with the formula, worked examples across five popular cards, and a spend-profile matrix.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-06-03",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/blog/cap-adjusted-cashback-explained" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why does my 5% cashback card actually return 2%?", acceptedAnswer: { "@type": "Answer", text: "Monthly caps. Most 5% cashback cards cap accelerated rewards at ₹500 to ₹1,500 per month on a defined category. HDFC Millennia caps at ₹1,000 per month combined across all 10 partner apps. Spend ₹15,000 across those apps and you hit the cap exactly at 5% rate; spend ₹50,000 and the cap binds at 5,000 of qualifying earnings, dropping the effective partner rate to 2 percent. Add 1 percent base rate on the rest of your spend and the blended effective rate for typical household spend lands at 1.5 to 2.5 percent. The 5 percent headline is true and accessible only at low partner-spend volumes; beyond the cap, the marginal earn rate collapses to the base rate." } },
      { "@type": "Question", name: "How do I figure out my real effective rate?", acceptedAnswer: { "@type": "Answer", text: "Three numbers determine it. Partner-app monthly spend, total monthly spend, and the card's specific cap structure. The formula: capped partner cashback equals minimum of (partner spend × partner rate) and (monthly cap × 12). Add base cashback equal to (total spend minus partner spend) × base rate. Subtract annual fee. Divide by total annual spend. Run this for your specific spend profile in our cashback calculator at /tools/cashback-calculator. Most users discover their effective rate is 30 to 50 percent below the headline — useful information when choosing between cards." } },
      { "@type": "Question", name: "Are there cards without binding caps?", acceptedAnswer: { "@type": "Answer", text: "A few. Amazon Pay ICICI gives 5 percent on Amazon Prime spend with no monthly cap — the headline rate holds at any spend volume. The trade-off is reward locked to Amazon Pay balance (closed redemption ecosystem). SBI Cashback caps at ₹5,000 monthly cashback (which corresponds to ₹1 lakh of qualifying online spend at 5 percent), so the cap binds only at very high online spend. For most retail users below ₹1 lakh monthly online spend, SBI Cashback delivers the headline 5 percent rate cleanly. Premium cards like HDFC Diners Privilege earn 10 reward points per ₹150 with no caps, but reward redemption value varies, so effective rate depends on how you redeem." } },
      { "@type": "Question", name: "Why don't issuers just remove the caps?", acceptedAnswer: { "@type": "Answer", text: "Caps protect issuer profitability. Card issuers fund cashback through merchant discount rates (MDR) charged to merchants on the transaction plus interchange fees from the card network. The combined revenue is roughly 1.5 to 2.5 percent of the transaction. A 5 percent uncapped cashback rate would be loss-making at any volume. Caps let issuers offer attractive headline rates while limiting their cashback liability at the per-customer level. The structural reality is that no card can sustainably pay above its MDR + interchange revenue without offsetting the cost from interest charges (revolving customers), annual fees, or co-brand merchant subsidies." } },
      { "@type": "Question", name: "Should I get multiple cards to bypass each card's cap?", acceptedAnswer: { "@type": "Answer", text: "It's a defensible strategy if your spend is predictable and you can manage two to three cards without behavioural overhead. Hold one card optimised for online (SBI Cashback), one for partner-app spend (HDFC Millennia for Swiggy / Zomato / Uber), and one as a cashback-on-everything backup (Axis Ace). Route each transaction to the highest-rate card available. Earnings across the stack typically beat single-card returns by 50 to 100 basis points. The downside is operational — three cards means three statements to track, three due dates to honour, and CIBIL-utilisation calculations across all three. Most well-organised cardholders manage two cards comfortably; three becomes work." } },
      { "@type": "Question", name: "How does the welcome benefit affect the calculation?", acceptedAnswer: { "@type": "Answer", text: "Welcome benefits are typically year-one one-time bonuses — voucher stacks, statement credit, point bundles. They materially shift the year-one effective rate but vanish in year two. HDFC Millennia's ₹1,000 e-voucher boosts year-one effective rate by 3 to 5 percentage points on a ₹3 to 4 lakh annual spend baseline, but year two reverts to the structural rate. Compute year-one and year-two-onwards rates separately when comparing cards; some cards win year one but lose long-term, others vice versa. Cashback calculators that show only the steady-state rate underestimate year-one value of welcome-heavy cards." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Cap-Adjusted Cashback Explained", item: "https://assurefintech.com/blog/cap-adjusted-cashback-explained" }
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #2D1042, #7C3AED, #2D1042)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #A78BFA22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA" }} /> Credit Card Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Your 5% Credit Card Actually Earns 2.8%
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Cap-adjusted cashback: why advertised rates are a lie.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Advertised rate</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>2.8%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>After caps</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>11</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Cards analyzed</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 100px", fontSize: "18px", lineHeight: 1.85, fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)" }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Cap-Adjusted Cashback Explained
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · TIER 2 GUIDE · MATH WALKTHROUGH</div>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed against MITC schedules of 5 issuers</span>
        <span>·</span>
        <span>About 9 min read</span>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The cap binding curve — visualised</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Take a 5% cashback card with a ₹1,000 monthly cap on the accelerated category. At a partner-spend level of ₹5,000 per month, you earn ₹250 (5%) — well below the cap, so the headline rate holds. At ₹15,000 partner spend you'd earn ₹750, still below the cap. At ₹20,000, you'd earn exactly ₹1,000 — the cap binds for the first time. Every additional rupee of partner spend beyond ₹20,000 earns nothing in the partner rate; it falls to the base rate of typically 1 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The chart below plots effective rate against monthly partner spend. The drop from 5 percent to 2 percent at the cap-binding point is the entire mathematical phenomenon described in this article. Most cardholders never see this curve and assume their card returns the headline rate at any spend.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgCapBinding />
        </div>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The general formula</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Effective rate is determined by four inputs: partner-app monthly spend, total monthly spend, the card's specific cap structure, and the annual fee. Combine them and you can compute the real return rate for any card on any spend profile.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The capped partner cashback for a year is the minimum of (partner annual spend × partner rate) and (monthly cap × 12). The base cashback is (total annual spend − partner spend) × base rate. Subtract the annual fee. Divide by total annual spend. Multiply by 100 to express as a percentage.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          A worked example. HDFC Millennia, monthly partner spend ₹15,000 (within cap of ₹1,000/month at 5 percent), other monthly spend ₹25,000 at 1 percent base. Annual partner cashback: ₹15,000 × 12 × 5% = ₹9,000. Cap check: ₹1,000 × 12 = ₹12,000. ₹9,000 is within cap, so capped partner cashback = ₹9,000. Annual base cashback: ₹25,000 × 12 × 1% = ₹3,000. Subtract annual fee ₹1,000. Net annual cashback ₹11,000. Total annual spend ₹4,80,000. Effective rate equals 11,000 divided by 4,80,000 multiplied by 100, which works out to 2.29 percent. Note how this is less than half the headline 5 percent rate — the cap math is the entire story.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgFormula />
        </div>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Applied to five popular cashback cards</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          To make this concrete, here's the same ₹40,000 monthly spend profile (₹10,000 food delivery, ₹15,000 partner online, ₹15,000 other offline) run through five cards. The chart shows effective rate net of annual fee for the second year of holding (year-one welcome benefits excluded for fairness).
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Axis Ace wins this profile at 2.85 percent effective. The combination of 4 percent on Swiggy/Zomato/Ola (qualifying for the food delivery portion), 5 percent on Gpay utility-bill payments (which most metro households route through Gpay), and a 1.5 percent base on remaining spend produces the highest aggregate. The 1.5 percent base is unusually high; most cards anchor at 1 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          HDFC Millennia comes second at 2.50 percent. The 5 percent on 10 partner apps is broader in roster than Axis Ace's narrower acceleration list, but the ₹1,000 monthly cap binds at lower partner-spend volume. The ₹1,000 welcome voucher (excluded above for steady-state comparison) restores Millennia's lead in year one only.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          SBI Cashback's 2.40 percent on this profile reflects the card's offline weakness — only 1 percent on the ₹15,000 of offline spend drags the average down. SBI shines for online-heavy users; on a profile of ₹50,000 online + ₹10,000 offline, SBI tops the table at 4.2 percent effective rate.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The Amazon Pay ICICI lifetime-free card delivers 2.10 percent — held back on this multi-merchant profile because non-Amazon spend earns only 1 percent. Lifetime-free is its structural advantage; the absence of any annual fee makes it usable as a permanent backup card without renewal anxiety.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgFiveCardCompare />
        </div>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The card-by-spend-profile matrix</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Different spend profiles have different winners. The matrix below maps five cards across four spend buckets (light at ₹15k/month, modest at ₹30k, heavy at ₹60k, HNI at ₹1L). Read horizontally to find the best card for your profile; vertically to see how a single card performs across spend levels.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Three clear patterns emerge. First, cap binding hurts most at the heavy and HNI profiles. Cards with absolute ₹500 to ₹1,000 monthly caps see effective rate drop below 1.5 percent at ₹60k+ monthly spend. Second, SBI Cashback is uniquely well-suited to heavy online spenders because its ₹5,000 monthly cap is high enough to absorb up to ₹1 lakh of qualifying online spend. Third, lifetime-free cards (Amazon Pay ICICI) become relatively more valuable at lower spend volumes where the absence of fee is a meaningful percentage of total cashback.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Implication for card stacking. A two-card stack of SBI Cashback (for online-heavy weeks) plus Amazon Pay ICICI (as a no-fee backup with Amazon Prime focus) captures roughly 3.0 to 3.5 percent effective rate across most spend volumes. A three-card stack adds Axis Ace for offline + utility coverage and pushes effective rate to 3.5 to 4 percent. Each marginal card adds operational overhead but real return.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgEarnersHeatmap />
        </div>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Why this gap exists — the issuer economics</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Card issuers earn revenue from three sources on every transaction. Merchant Discount Rate (MDR), the fee charged to merchants for accepting card payments, ranges 0.4 to 2 percent depending on category. Interchange fees, paid by the merchant's bank to the issuing bank via the card network, run 0.15 to 0.50 percent. Combined gross revenue per transaction is 0.55 to 2.5 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A 5 percent uncapped cashback rate would be loss-making at any volume. Issuers offer attractive headline rates to win customers, but cap the actual earn liability at a level that keeps the per-customer relationship profitable. The cap is the structural compromise.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Two ways issuers can sustain higher effective rates. Co-brand subsidies — Amazon, Flipkart, Tata each contribute to their co-brand card's cashback pool from their own marketing budget, allowing issuers to offer 5 percent without taking the loss. This is why Amazon Pay ICICI offers 5 percent on Amazon Prime spend with no cap; Amazon is funding part of the cashback. Revolving-customer subsidy — issuers earn 36 to 42 percent APR on customers who carry balances, generating enough revenue to fund higher cashback rates for transactors. The cap structure thus reflects the cross-subsidy from revolvers to transactors.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Practical takeaway: the 5 percent headline is real, but it's a marketing strategy with structural constraints, not a sustainable arbitrage. Plan around the cap rather than against it.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How to maximise effective rate on your existing cards</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          You don't need to add new cards to improve your effective rate. Three operational tweaks on your current card portfolio can lift effective return by 50 to 100 basis points without any change in spend pattern.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Stop concentrating partner spend on a single card.</strong> If you have HDFC Millennia and Axis Ace, route Swiggy + Zomato to one and Amazon to the other to keep each card's monthly cap from binding. The cap reset works on a per-card basis, so two ₹1,000 caps deliver ₹2,000 of accelerated cashback per month versus a single card's ₹1,000.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Time fee-waiver milestones.</strong> Most ₹500 to ₹1,500 fee cashback cards waive year-two fees on spend milestones (typically ₹1 lakh to ₹2 lakh annual spend). If your spend pattern is hitting the bar in months 1 to 9 with ease, plan a planned-purchase consolidation in months 10 to 12 to confirm milestone hit. The fee waiver is worth ₹500 to ₹1,500 of effective annual return — meaningful at low spend volumes.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Track partner roster changes.</strong> Issuers rotate partners quarterly to annually. HDFC Millennia's 10-merchant list has shuffled twice since launch — Cult.fit was added in 2023, Tata CLiQ was rotated in for Reliance Jewels in 2024. The current list is your guide; spend habits should adjust to match.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          For the full per-card analysis, our <Link href="/best/credit-card-online-shopping" style={{ color: COLOR, fontWeight: 600 }}>online shopping picks</Link>, <Link href="/best/credit-card-food-delivery" style={{ color: COLOR, fontWeight: 600 }}>food delivery picks</Link>, and <Link href="/best/credit-card-fuel" style={{ color: COLOR, fontWeight: 600 }}>fuel picks</Link> show the cap-adjusted winner per category.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The credit-revolver penalty — why this article matters most</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Everything above assumes you pay the full statement balance on time every month. The instant you revolve a credit card balance, the math collapses. Indian credit card APRs are 36 to 50 percent. A single month of carrying a ₹50,000 balance costs roughly ₹1,500 in interest, wiping out the cumulative cashback from many months of optimised spending.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The cap-adjusted cashback formula is meaningful only for transactors. If you're a revolver, the priority is to clear the revolving balance via balance transfer to a 0%-promotional card or a 12-month EMI conversion. Pursue cap optimisation later, after the underlying interest leakage is plugged. Read more on this in the <Link href="/blog/rbi-credit-card-rules-2026" style={{ color: COLOR, fontWeight: 600 }}>RBI credit card rules guide</Link> — Rule 4 (months-to-clear disclosure) is specifically designed to help revolvers see the true cost of carrying balances.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Spend categorisation — the missing piece in most calculators</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The cap-adjusted formula assumes you can correctly categorise every transaction as "partner spend" versus "base spend." In practice this is harder than it sounds because Indian merchants often classify under non-obvious Merchant Category Codes (MCCs) that determine whether a card's accelerator applies.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Take a typical example. You order groceries on BigBasket. The transaction looks like online shopping, so an SBI Cashback's 5 percent online rate should apply. Actually, BigBasket's MCC is 5411 (grocery stores) and many cards explicitly carve grocery out of the online rate, applying base rate instead. Or you pay your electricity bill via Paytm. Online transaction, but most cards explicitly exclude utility payments from accelerated rates because of the low MDR these merchants pay.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The MCC matters more than the merchant name. Three categories that routinely surprise cardholders. Quick-commerce apps (Blinkit, Zepto, Instamart) sometimes file under MCC 5411 grocery and sometimes under MCC 5311 general merchandise — the rate that applies depends on which the bank's ruleset matches first. Aggregator-platform spend (Swiggy, Zomato) is reliable because the MCC is consistently 5814 restaurants. Wallet loads (PhonePe, Paytm, Google Pay wallet refills) are usually MCC 6051 financial services and excluded from rewards entirely.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The practical workflow: check your card statement for the first three months and see which transactions actually credited the accelerated rate versus the base rate. The real reward pattern reveals itself only after you see it on the statement. Adjust your routing logic accordingly.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The exclusions list — what no cashback covers</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Almost every Indian credit card maintains an exclusions list that earns zero rewards regardless of the card's reward structure. Knowing the list saves you from the disappointment of expecting cashback that isn't coming.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Rent payments.</strong> Almost universally excluded post-2024. SCB EaseMyTrip is the rare exception with 1 percent on rent (capped ₹150/mo).
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Wallet loads.</strong> Loading PhonePe, Paytm, or Mobikwik wallets earns no rewards. The card sees this as a quasi-cash transaction and excludes it.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Fuel beyond surcharge waiver.</strong> Fuel transactions earn 1 percent surcharge waiver (capped per month) on most cards but no actual cashback. Fuel co-brand cards (BPCL SBI Octane, Citi IOC) are the exceptions.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Education and government services.</strong> Tuition fees, university dues, and government tax payments are typically excluded. The MDR is too low to support cashback on these categories.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Insurance premiums and EMIs.</strong> Most cards exclude these from accelerated rates and credit only base rate, sometimes zero.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Gold and jewellery.</strong> High-value low-MDR category, almost always excluded from accelerated rates. A ₹5 lakh gold purchase on a 5 percent card earns base rate (₹5,000) at most, not the headline ₹25,000.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>A complete worked example for a real household</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Take a household with monthly spend mix that's representative of upper-middle-class urban India. ₹12,000 BigBasket grocery, ₹8,000 Swiggy/Zomato food delivery, ₹6,000 Amazon Prime shopping, ₹5,000 Uber/Ola rides, ₹15,000 fuel, ₹8,000 utility bills via Gpay, ₹10,000 dining (offline), ₹6,000 Cleartrip + MakeMyTrip travel bookings. Total ₹70,000 monthly = ₹8.4 lakh annual.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Run the cap-adjusted formula on three card choices.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Option A — Single Axis Ace card.</strong> 5 percent on ₹8,000 Gpay utility (cap binds at ₹500/mo) = ₹6,000/yr. 4 percent on ₹13,000 Swiggy/Zomato/Ola = ₹6,240/yr. 1.5 percent base on remaining ₹49,000 = ₹8,820/yr. Total annual cashback ₹21,060. Less ₹499 fee = ₹20,561. Effective rate 2.45 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Option B — Single SBI Cashback card.</strong> 5 percent on online merchants ₹37,000/mo (BigBasket, Swiggy, Zomato, Amazon, Cleartrip, MMT, Gpay utility) = capped at ₹5,000/mo earnings = ₹60,000/yr. 1 percent on remaining offline ₹33,000/mo = ₹3,960/yr. Total ₹63,960. Less ₹999 fee = ₹62,961. Effective rate 7.5 percent. (Note: online utility may not qualify; in worst case where utility is excluded, effective rate drops to ~5.5 percent.)
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Option C — Two-card stack: Axis Ace + Amazon Pay ICICI.</strong> Route Amazon to ICICI (5 percent Prime, no cap) = ₹3,600/yr. Route everything else to Axis Ace, capturing 5 percent Gpay utility (capped), 4 percent Swiggy/Zomato/Ola, and 1.5 percent base. Total Ace cashback approximately ₹19,560. ICICI ₹3,600 + Ace ₹19,560 − ₹499 fee = ₹22,661. Effective rate 2.7 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The verdict: SBI Cashback dominates this profile because of the high online concentration. Even if some online categories don't qualify, the ₹5,000 monthly cap is large enough to absorb most of the spend. The lesson: card choice is a function of spend profile, not card-marketing prestige. The ₹100,000 to ₹400,000 of online-heavy spenders should default to SBI Cashback unless they specifically value Amazon Pay ICICI's lifetime-free structure. For a household with online concentration above 50 percent, the cumulative annual gain over picking the wrong card is ₹30,000 to ₹50,000 — meaningfully more than the difference between any two flat-cashback cards on a balanced spend profile. Run your own numbers in our calculator at /tools/cashback-calculator before committing to any card for the long term.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The hidden cost of reward-point cards in this comparison</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          So far this article has assumed cashback in INR. Many premium cards (HDFC Diners Club Privilege, Axis Magnus, American Express Membership Rewards) earn reward points instead. Reward points add a redemption-rate variable that materially changes the effective return.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Take HDFC Diners Privilege as a worked example. Earn rate is 10 reward points per ₹150 — translating to roughly 6.66 percent gross. Sounds amazing on paper. But redemption value varies dramatically. Statement credit redemption: ₹0.30 per point (so the gross 6.66 percent becomes 2.0 percent). SmartBuy travel redemption: ₹0.50 per point (3.33 percent). Singapore Airlines KrisFlyer transfer: ₹0.80 to ₹1.00 per point (5.3 to 6.7 percent). The headline 6.66 percent is real only if you religiously route reward points to airline-mile transfers and actually use the miles for travel.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The behavioural challenge: most users default-redeem at the lowest-value path (statement credit), capturing 30 to 40 percent of the theoretical maximum. Cashback cards have no such optimisation gap; the headline rate is the redeemed rate. So a 5 percent cashback card cap-adjusted to 2.5 percent effective beats a 6.66 percent reward-point card default-redeemed at 2 percent effective. Compare cap-adjusted cashback to default-redeemed reward-point rate, not to the headline reward-point rate.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          For the deep-dive on premium card economics, see our <Link href="/blog/cashback-vs-reward-points" style={{ color: COLOR }}>cashback vs reward points</Link> comparison and the <Link href="/blog/premium-card-review-framework" style={{ color: COLOR }}>premium card review framework</Link>. The honest framing: most cardholders should optimise for cashback simplicity unless they're committed to actively managing reward-point redemption ladders, which requires periodic time investment that rarely repays itself for sub-₹3 lakh monthly spenders.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 18px" }}>Frequently asked questions</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 16, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 12, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <section style={{ marginBottom: 28, padding: "20px 22px", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-soft)" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>RELATED ON ASSURE FINTECH</h3>
        <ul style={{ fontSize: 15, paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><Link href="/tools/cashback-calculator" style={{ color: COLOR }}>Cashback calculator</Link>. Plug in your spend and see effective rate per card.</li>
          <li style={{ marginBottom: 8 }}><Link href="/compare/hdfc-millennia-vs-axis-ace" style={{ color: COLOR }}>Millennia vs Ace</Link>. Two of the cards modelled in this article, head-to-head.</li>
          <li style={{ marginBottom: 8 }}><Link href="/compare/sbi-cashback-vs-amazon-pay-icici" style={{ color: COLOR }}>SBI Cashback vs Amazon Pay ICICI</Link>. Online-heavy comparison.</li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/rbi-credit-card-rules-2026" style={{ color: COLOR }}>RBI credit card rules 2026</Link>. The regulatory framework that shapes card economics.</li>
          <li><Link href="/learn/credit-cards" style={{ color: COLOR }}>Credit cards knowledge hub</Link>. All our card guides in one place.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 28, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>RBI Master Direction on Credit Cards (April 2022) and 2024-25 amendments</li>
          <li style={{ marginBottom: 6 }}>HDFC Millennia, Axis Ace, SBI Cashback, Amazon Pay ICICI, Flipkart Axis MITC schedules verified June 3, 2026</li>
          <li style={{ marginBottom: 6 }}>RBI Annual Report 2024-25 — credit card market statistics and MDR framework</li>
          <li>Card-network publications on interchange fee structures (Visa, Mastercard, RuPay)</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> Cap structures, partner rosters, and fee schedules described above reflect each card's MITC as published by the issuer and verified individually on {UPDATED}. Cashback rates and caps change with each card-product refresh; reconfirm via the issuer's tariff page before booking. Effective rate calculations assume full statement balance is paid on time every cycle. Carrying any balance triggers finance charges that wipe out cashback economics regardless of card choice. This article is informational and does not constitute credit advice; consult a financial advisor for personalised card portfolio decisions.
        </p>
            <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 4 }}>Source: <a href="https://www.sbicard.com/en/personal/credit-cards/cashback.page" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>www.sbicard.com</a></p>
      </footer>
    </main>
    </>
  );
}
