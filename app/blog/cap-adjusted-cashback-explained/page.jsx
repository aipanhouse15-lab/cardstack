import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Cap-Adjusted Cashback Explained: Why Your 5% Card Actually Pays 1.2% | Assure Fintech",
  description:
    "Every cashback card in India advertises a headline rate that almost no cardholder ever earns. We reverse-engineer monthly caps, category rings, and spend ceilings across 5 popular cards to show the real rate you take home after a full year.",
  alternates: { canonical: "https://assurefintech.com/blog/cap-adjusted-cashback-explained" },
  openGraph: {
    title: "Cap-Adjusted Cashback Explained",
    description:
      "The gap between 5% headline and ~1% effective rate, torn apart card by card.",
    type: "article",
    publishedTime: "2026-04-20",
    modifiedTime: "2026-04-20",
    authors: ["Ash K"],
    url: "https://assurefintech.com/blog/cap-adjusted-cashback-explained",
  },
};

// ------------------ Brand ------------------
const VIOLET = "#7C3AED";
const VIOLET_SOFT = "rgba(124,58,237,0.10)";
const GREEN = "#16A34A";
const RED = "#DC2626";
const AMBER = "#D97706";

// ------------------ SVG 1: Before / After Cap (SBI Cashback) ------------------
function SvgCapBeforeAfter() {
  return (
    <svg viewBox="0 0 680 320" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-cap-before">
      <title id="svg-cap-before">SBI Cashback Card: Advertised 5% vs Effective Rate After ₹5,000 Monthly Cap</title>
      <text x="340" y="24" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">SBI Cashback Card — A ₹40,000/month online spender</text>
      <text x="340" y="44" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Advertised rate: 5% online • Monthly cap: ₹5,000 • Annual fee: ₹999</text>

      {/* LEFT: advertised */}
      <g transform="translate(40,75)">
        <text x="130" y="0" textAnchor="middle" fontSize="12" fontWeight="600" fill={VIOLET}>What the banner says</text>
        <rect x="10" y="15" width="240" height="180" rx="12" fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth="1.5" />
        <text x="130" y="55" textAnchor="middle" fontSize="36" fontWeight="800" fill={VIOLET}>5%</text>
        <text x="130" y="80" textAnchor="middle" fontSize="12" fill="var(--text-muted)">cashback on online</text>
        <text x="130" y="115" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--text)">Annual spend: ₹4,80,000</text>
        <text x="130" y="135" textAnchor="middle" fontSize="13" fontWeight="600" fill={GREEN}>Expected: ₹24,000</text>
        <text x="130" y="170" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Net of ₹999 fee:</text>
        <text x="130" y="188" textAnchor="middle" fontSize="16" fontWeight="700" fill={GREEN}>₹23,001</text>
      </g>

      {/* RIGHT: cap-adjusted */}
      <g transform="translate(370,75)">
        <text x="130" y="0" textAnchor="middle" fontSize="12" fontWeight="600" fill={RED}>What the T&amp;Cs actually deliver</text>
        <rect x="10" y="15" width="240" height="180" rx="12" fill="rgba(220,38,38,0.08)" stroke={RED} strokeWidth="1.5" />
        <text x="130" y="55" textAnchor="middle" fontSize="36" fontWeight="800" fill={RED}>1.25%</text>
        <text x="130" y="80" textAnchor="middle" fontSize="12" fill="var(--text-muted)">effective annual rate</text>
        <text x="130" y="115" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--text)">Capped at ₹5,000/mo</text>
        <text x="130" y="135" textAnchor="middle" fontSize="13" fontWeight="600" fill={RED}>Earned: ₹6,000</text>
        <text x="130" y="170" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Net of ₹999 fee:</text>
        <text x="130" y="188" textAnchor="middle" fontSize="16" fontWeight="700" fill={RED}>₹5,001</text>
      </g>

      {/* arrow */}
      <g>
        <path d="M295 170 L365 170" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arr)" />
        <defs>
          <marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L8,5 L0,10 Z" fill="var(--text-muted)" />
          </marker>
        </defs>
      </g>

      <text x="340" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">Delta: ₹18,000 of "promised" cashback evaporates at the monthly ceiling.</text>
      <text x="340" y="306" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Because above ₹1,00,000 online spend/month, the card pays 0% on the excess.</text>
    </svg>
  );
}

// ------------------ SVG 2: Four cap mechanisms ------------------
function SvgCapTypes() {
  const caps = [
    { n: "01", t: "Hard monthly cap", d: "₹5,000/mo SBI Cashback. Resets first calendar day of each month. Spend over the ceiling returns 0%." },
    { n: "02", t: "Category ring-fence", d: "HDFC Millennia: 5% only on 11 branded merchants. Everywhere else drops to 1%. The ring itself is the trap." },
    { n: "03", t: "Tiered degradation", d: "Axis Ace: 5% on bills up to ₹500 cashback, then rate silently drops to 1.5% on every subsequent transaction." },
    { n: "04", t: "Annual super-cap", d: "Amex MRCC: points are capped at 24,000 per statement quarter regardless of category. Hit it in month two and you carry zero." },
  ];
  return (
    <svg viewBox="0 0 680 320" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-cap-types">
      <title id="svg-cap-types">The four mechanisms issuers use to cap your cashback</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Four ways the issuer pulls the brake</text>
      {caps.map((c, i) => {
        const x = 25 + (i % 2) * 330;
        const y = 55 + Math.floor(i / 2) * 125;
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <rect width="310" height="105" rx="10" fill="var(--bg-soft)" stroke="var(--border)" />
            <rect width="42" height="105" rx="10" fill={VIOLET_SOFT} />
            <text x="21" y="60" textAnchor="middle" fontSize="18" fontWeight="800" fill={VIOLET}>{c.n}</text>
            <text x="55" y="25" fontSize="12" fontWeight="700" fill="var(--text)">{c.t}</text>
            <foreignObject x="55" y="32" width="250" height="70">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "10.5px", color: "var(--text-muted)", lineHeight: "1.35" }}>{c.d}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

// ------------------ SVG 3: Five card calculator ------------------
function SvgFiveCardCalc() {
  const rows = [
    { card: "SBI Cashback", hdr: "5%", spent: "₹4.8L", cap: "₹60k/yr", earned: "₹6,000", eff: "1.25%" },
    { card: "HDFC Millennia", hdr: "5%", spent: "₹4.8L", cap: "₹12k/yr", earned: "₹12,000", eff: "2.5%" },
    { card: "Axis Ace", hdr: "5%", spent: "₹4.8L", cap: "₹6k/yr", earned: "₹6,000", eff: "1.25%" },
    { card: "Amazon Pay ICICI", hdr: "5%", spent: "₹4.8L", cap: "No cap*", earned: "₹18,000", eff: "3.75%" },
    { card: "Flipkart Axis", hdr: "5%", spent: "₹4.8L", cap: "₹4k/mo", earned: "₹11,500", eff: "2.40%" },
  ];
  return (
    <svg viewBox="0 0 680 300" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-five-calc">
      <title id="svg-five-calc">Headline 5% vs effective rate — five popular cards at ₹40,000 monthly spend</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Same headline. Very different take-home.</text>
      <text x="340" y="40" textAnchor="middle" fontSize="10" fill="var(--text-muted)">All calculated at ₹40,000/month of matching-category online spend over 12 months</text>

      {/* header row */}
      <g transform="translate(30,60)">
        <rect width="620" height="26" fill={VIOLET} rx="4" />
        <text x="10" y="17" fontSize="11" fontWeight="700" fill="white">Card</text>
        <text x="160" y="17" fontSize="11" fontWeight="700" fill="white">Headline</text>
        <text x="240" y="17" fontSize="11" fontWeight="700" fill="white">Spent</text>
        <text x="310" y="17" fontSize="11" fontWeight="700" fill="white">Cap ceiling</text>
        <text x="430" y="17" fontSize="11" fontWeight="700" fill="white">Cashback earned</text>
        <text x="550" y="17" fontSize="11" fontWeight="700" fill="white">Effective</text>
      </g>

      {rows.map((r, i) => {
        const y = 90 + i * 34;
        return (
          <g key={i}>
            <rect x="30" y={y} width="620" height="32" fill={i % 2 ? "var(--bg-soft)" : "transparent"} />
            <text x="40" y={y + 20} fontSize="11" fontWeight="600" fill="var(--text)">{r.card}</text>
            <text x="190" y={y + 20} fontSize="11" fill="var(--text-muted)">{r.hdr}</text>
            <text x="270" y={y + 20} fontSize="11" fill="var(--text-muted)">{r.spent}</text>
            <text x="340" y={y + 20} fontSize="11" fill="var(--text-muted)">{r.cap}</text>
            <text x="460" y={y + 20} fontSize="11" fontWeight="600" fill={GREEN}>{r.earned}</text>
            <text x="580" y={y + 20} fontSize="12" fontWeight="700" fill={parseFloat(r.eff) >= 3 ? GREEN : parseFloat(r.eff) >= 2 ? AMBER : RED}>{r.eff}</text>
          </g>
        );
      })}
      <text x="340" y="280" textAnchor="middle" fontSize="10" fill="var(--text-muted)">* Amazon Pay ICICI has no monthly cap but reserves 5% only for Prime members on Amazon spends.</text>
    </svg>
  );
}

// ------------------ SVG 4: Effective rate calculator grid ------------------
function SvgEffectiveRateCalc() {
  // rows = spend tiers, cols = cap types; cell = effective rate %
  const spends = ["₹10k/mo", "₹25k/mo", "₹50k/mo", "₹1L/mo"];
  const grid = [
    [5.0, 5.0, 5.0, 2.5],
    [5.0, 5.0, 3.5, 1.75],
    [5.0, 2.5, 1.75, 0.88],
    [2.0, 1.0, 0.70, 0.35],
  ];
  const caps = ["₹500/mo", "₹1,250/mo", "₹1,750/mo", "₹3,500/mo"];
  return (
    <svg viewBox="0 0 680 340" width="100%" style={{ fontFamily: "system-ui", maxWidth: 680 }} role="img" aria-labelledby="svg-calc-grid">
      <title id="svg-calc-grid">Effective cashback rate by spend-level × cap-ceiling combination</title>
      <text x="340" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">Where do you sit on the cap curve?</text>
      <text x="340" y="40" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Effective % if headline rate is 5% — rows: your monthly spend, columns: the card's cap</text>

      {/* header */}
      <text x="80" y="75" fontSize="11" fontWeight="700" fill="var(--text-muted)">Your spend ↓  /  Cap →</text>
      {caps.map((c, i) => (
        <text key={i} x={230 + i * 100} y="75" textAnchor="middle" fontSize="11" fontWeight="700" fill={VIOLET}>{c}</text>
      ))}

      {spends.map((s, ri) => (
        <g key={ri}>
          <text x="80" y={115 + ri * 50} fontSize="11" fontWeight="600" fill="var(--text)">{s}</text>
          {grid[ri].map((v, ci) => {
            const col = v >= 4 ? GREEN : v >= 2 ? AMBER : RED;
            return (
              <g key={ci}>
                <rect x={180 + ci * 100} y={90 + ri * 50} width="90" height="36" rx="6" fill={`${col}22`} stroke={col} strokeWidth="1" />
                <text x={225 + ci * 100} y={113 + ri * 50} textAnchor="middle" fontSize="13" fontWeight="700" fill={col}>{v}%</text>
              </g>
            );
          })}
        </g>
      ))}

      <text x="340" y="325" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Green = you genuinely get the headline rate. Red = you are subsidising someone else's category.</text>
    </svg>
  );
}

// ------------------ Inline components ------------------
const MythCard = ({ children }) => (
  <div style={{
    borderLeft: `4px solid ${RED}`, background: "rgba(220,38,38,0.06)",
    padding: "14px 16px", borderRadius: 8, margin: "14px 0", color: "var(--text)",
  }}>
    <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: RED, marginBottom: 6 }}>MYTH</div>
    <div style={{ fontSize: 15, lineHeight: 1.55 }}>{children}</div>
  </div>
);

const RealityCard = ({ children }) => (
  <div style={{
    borderLeft: `4px solid ${GREEN}`, background: "rgba(22,163,74,0.07)",
    padding: "14px 16px", borderRadius: 8, margin: "14px 0 24px", color: "var(--text)",
  }}>
    <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: GREEN, marginBottom: 6 }}>REALITY</div>
    <div style={{ fontSize: 15, lineHeight: 1.55 }}>{children}</div>
  </div>
);

const CapLens = ({ title, children }) => (
  <figure style={{
    border: `1.5px solid ${VIOLET}`, background: VIOLET_SOFT,
    borderRadius: 12, padding: "16px 18px", margin: "20px 0",
  }}>
    <figcaption style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, color: VIOLET, marginBottom: 8 }}>
      ◉ ZOOM IN — {title}
    </figcaption>
    <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text)" }}>{children}</div>
  </figure>
);

const FinePrint = ({ children }) => (
  <div style={{
    fontSize: 12, color: "var(--text-muted)", fontStyle: "italic",
    padding: "8px 12px", background: "var(--bg-soft)", borderRadius: 6, margin: "12px 0",
  }}>
    Fine print: {children}
  </div>
);

// ------------------ Page ------------------
export default function CapAdjustedCashbackPage() {
  const published = "2026-04-20";
  const modified = "2026-04-20";

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cap-Adjusted Cashback Explained: Why Your 5% Card Actually Pays 1.2%",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/about" },
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: "https://assurefintech.com/blog/cap-adjusted-cashback-explained",
    description:
      "Every Indian cashback card advertises a headline rate almost no holder ever earns. We reverse-engineer caps across five popular cards to show the real take-home rate.",
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why is the effective cashback rate lower than the advertised rate?", acceptedAnswer: { "@type": "Answer", text: "Issuers apply monthly or category ceilings. Spending beyond the ceiling earns either a much lower rate or zero. The effective rate is total cashback earned divided by total spend across the full year." } },
      { "@type": "Question", name: "Do monthly caps reset on a calendar month or statement cycle?", acceptedAnswer: { "@type": "Answer", text: "It varies by issuer. SBI Cashback card resets on the first day of each calendar month, while HDFC and Axis typically reset on statement cycle boundaries. Always check the most recent Most Important Terms and Conditions document." } },
      { "@type": "Question", name: "Can cashback be withdrawn as cash?", acceptedAnswer: { "@type": "Answer", text: "Most Indian cashback cards credit the cashback as a statement adjustment, not as redeemable cash. Amazon Pay ICICI and a few others credit as Amazon Pay balance instead of a statement credit." } },
      { "@type": "Question", name: "Is the cashback taxable in India?", acceptedAnswer: { "@type": "Answer", text: "Cashback on personal consumption is treated as a discount and is not taxable. Cashback credited to a business account or used against business expenses may be treated as income under Section 28 of the Income Tax Act depending on the nature of the transaction." } },
      { "@type": "Question", name: "Which cashback card has the highest realistic effective rate in India right now?", acceptedAnswer: { "@type": "Answer", text: "For a ₹40,000 monthly online-dominant spend profile in April 2026, Amazon Pay ICICI for Prime members delivers the highest effective rate at roughly 3.75 percent, followed by HDFC Millennia for branded-merchant spends." } },
      { "@type": "Question", name: "Does the GST on the annual fee eat into the cashback?", acceptedAnswer: { "@type": "Answer", text: "Yes. A ₹999 fee becomes ₹1,179 including 18 percent GST. On a ₹6,000 annual cashback that is a 19.65 percent haircut on the gross benefit, pushing the net effective rate even lower." } },
    ],
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog" },
      { "@type": "ListItem", position: 3, name: "Cap-Adjusted Cashback Explained", item: "https://assurefintech.com/blog/cap-adjusted-cashback-explained" },
    ],
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
            Cap-adjusted cashback: why advertised rates lie and how to calculate your real return.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Advertised rate</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>2.8%</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>After caps</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>11</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Cards analyzed</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "32px 20px 80px", color: "var(--text)", lineHeight: 1.7, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Script id="jsonld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="jsonld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> ›{" "}
        <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> › <span>Cap-Adjusted Cashback Explained</span>
      </nav>

      <span style={{
        display: "inline-block", padding: "4px 10px", background: VIOLET_SOFT,
        color: VIOLET, fontSize: 11, letterSpacing: 2, fontWeight: 700, borderRadius: 4,
      }}>
        CREDIT CARDS — ANALYSIS
      </span>

      <p style={{ fontSize: 19, color: "var(--text-muted)", marginBottom: 22 }}>
        The number on the banner is a sticker price. The number the bank actually credits to your statement
        is an entirely different animal — almost always smaller, often by 70 or 80 percent. Here is how the
        math breaks, card by card, and how to pick a card whose advertised rate and effective rate are
        actually in the same postcode.
      </p>

      <div style={{ display: "flex", gap: 14, fontSize: 13, color: "var(--text-muted)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "10px 0", marginBottom: 28 }}>
        <span>By <strong>Ash K</strong></span>
        <span>•</span>
        <span>Last updated April 20, 2026</span>
        <span>•</span>
        <span>11 min read</span>
      </div>

      <figure style={{ margin: "20px 0 30px" }}>
        <SvgCapBeforeAfter />
      </figure>

      <p>
        Spend ₹40,000 a month on a typical cashback card — groceries, Swiggy, a couple of Amazon parcels,
        the occasional flight. The card's press release promises you 5 percent. Over a year at that rate,
        you should be pocketing ₹24,000, which netted against a ₹999 fee would still leave ₹23,001. That is
        a genuinely excellent return for doing nothing. It is also almost never what shows up in your
        statement.
      </p>

      <p>
        The reason is a quiet line in the terms and conditions that talks about a monthly cap. On the SBI
        Cashback card, that cap is ₹5,000 of cashback per statement cycle. The moment you cross ₹1,00,000
        of online spend in any month — easy, if your rent goes on the card — the rate silently drops to
        zero on everything above that. Over twelve months the cap tops out at ₹60,000 a year of cashback,
        but because our typical holder never spends enough to hit that ceiling, the actual credited amount
        is a lot smaller. On ₹40,000 a month the earned cashback is just ₹6,000 a year; net of the fee,
        roughly ₹5,000. That is not 5 percent. That is 1.25 percent.
      </p>

      <MythCard>
        A 5 percent cashback card will return ₹24,000 on ₹4.8 lakh of annual spend. The math is simple:
        rate times spend equals reward.
      </MythCard>

      <RealityCard>
        The math is rate times spend, <em>bounded by the cap</em>, <em>scoped to the eligible category</em>,
        <em> minus the fee and GST</em>. The cap is usually the binding constraint. On a five-card audit
        across SBI, HDFC, Axis, ICICI and Amex, the effective rate was between 1.25 and 3.75 percent.
      </RealityCard>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>The four cap mechanisms, explained plainly</h2>

      <p>
        Indian issuers cap cashback in four distinct ways, and understanding which one applies to your card
        is the difference between earning the headline rate and subsidising the issuer's ad budget.
      </p>

      <figure style={{ margin: "18px 0" }}>
        <SvgCapTypes />
      </figure>

      <p>
        Most cards combine two or more of these. HDFC Millennia uses the category ring-fence plus a quarterly
        super-cap. Axis Ace uses tiered degradation on top of a monthly hard cap. The SBI Cashback card keeps
        things refreshingly simple with just one hard monthly ceiling — which is why its effective rate is
        also refreshingly transparent, though refreshingly low.
      </p>

      <CapLens title="How HDFC Millennia's ring-fence actually bites">
        Millennia advertises 5 percent cashback on ten partnered merchants — Amazon, Flipkart, Swiggy,
        Zomato, Uber, Ola, Myntra, BookMyShow, Cult.fit and Tata CLiQ. On everything else, including offline
        restaurants, fuel, utilities and most travel, the rate is 1 percent. A typical holder splits spend
        roughly 40/60 between partner and non-partner categories, not 100 percent on partners. So the
        weighted average becomes <strong>0.4 × 5% + 0.6 × 1% = 2.6%</strong>, before a quarterly cashback
        super-cap of ₹1,000 on the 5 percent tier kicks in and trims the top end further. Effective annual
        rate on ₹4.8 lakh of mixed spend: roughly 2.4 percent.
      </CapLens>

      <FinePrint>
        HDFC's cashback schedule as of its 1 April 2026 Most Important Terms &amp; Conditions document.
        Issuers revise these routinely — check the <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia-credit-card" target="_blank" rel="noopener noreferrer" style={{ color: VIOLET }}>MITC</a> before signing up.
      </FinePrint>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>Five popular cards, one spend profile, five very different take-homes</h2>

      <p>
        We modelled the same ₹40,000 monthly spend across five of India's most popular cashback propositions.
        The spend is weighted 60 percent to online merchants (Amazon, Flipkart, Swiggy), 20 percent to
        utilities, 15 percent to offline dining, and 5 percent to fuel. This profile is close to what a
        dual-income urban household in a metro actually runs through its primary card.
      </p>

      <figure style={{ margin: "18px 0" }}>
        <SvgFiveCardCalc />
      </figure>

      <p>
        The spread is enormous — 1.25 percent on the low end, 3.75 percent on the high. Every one of these
        cards has a banner promising 5 percent on its website. Three of the five deliver less than half of
        that. The two that deliver meaningfully more — Amazon Pay ICICI and Flipkart Axis — do so because
        their eligible category is <em>exactly</em> the category where the holder already spends. The cap is
        still there; the holder just never hits it because their spending pattern and the card's category
        are aligned.
      </p>

      <MythCard>
        If two cards advertise the same headline rate, the one with the higher fee must offer better
        rewards.
      </MythCard>

      <RealityCard>
        Fee tells you almost nothing. Effective rate is the product of (headline rate × category fit ×
        spend-to-cap ratio). SBI Cashback has a ₹999 fee and delivers 1.25 percent. Amazon Pay ICICI is free
        to apply for and delivers nearly three times as much because its 5 percent tier matches the
        category most online buyers already use.
      </RealityCard>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>The fee-and-GST haircut nobody models</h2>

      <p>
        A ₹999 annual fee is not really ₹999 — it is ₹1,179 once the 18 percent GST is added. On the
        ₹6,000 of gross cashback that SBI Cashback returns at our spend profile, that fee consumes nearly
        20 percent of the benefit before a single rupee reaches you. Card marketing teams never surface this
        number because it invariably makes the card look worse.
      </p>

      <p>
        On lifetime-free cards the fee math simplifies to zero, which is why Amazon Pay ICICI and Flipkart
        Axis punch far above their weight. A card that earns ₹6,000 with no fee delivers exactly the same
        real rupees as a card that earns ₹7,179 with a ₹1,179 fee. Indian cardholders consistently pick the
        second card because the banner looks bigger.
      </p>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>A calculator you can do in your head</h2>

      <p>
        There is a rule of thumb that survives most edge cases. Take the annual cashback cap — not the
        headline rate, the actual rupee ceiling on benefits — and divide it by your expected annual spend.
        That is your effective rate, with roughly 90 percent accuracy for anyone who spends above the
        card's ceiling in category.
      </p>

      <p>
        For SBI Cashback that is ₹60,000 ÷ ₹4,80,000 = 12.5 percent, except the cap is only effective on
        the in-category spend, which is roughly 60 percent of total. So the real ceiling on credit is
        ₹6,000 per year, and ₹6,000 ÷ ₹4,80,000 = 1.25 percent. Matches the detailed calculation.
      </p>

      <figure style={{ margin: "22px 0" }}>
        <SvgEffectiveRateCalc />
      </figure>

      <p>
        Read the grid from left to right. If your monthly spend is below the cap, your effective rate
        equals your headline rate. The second the spend-to-cap ratio exceeds one, the effective rate falls
        proportionally — and it falls fast. A ₹1,00,000-a-month spender on a ₹1,250-a-month cap card is
        earning less than 1 percent no matter what the banner says.
      </p>

      <CapLens title="The single heuristic that beats most reviews">
        If the product of your monthly spend and the headline rate is greater than the monthly cap, your
        effective rate is <strong>(cap ÷ monthly spend) × 100</strong>. If it is smaller, your effective
        rate equals the headline. That is all the algebra you need to choose a card rationally.
      </CapLens>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>Why this pattern is getting worse in 2026</h2>

      <p>
        Through 2023 and early 2024, Indian issuers raced to compete on headline cashback rates. RuPay's
        expansion, UPI-on-credit integrations and a surge in first-time cardholders all meant customer
        acquisition cost was rising fast. The fastest way to draw applications was to advertise bigger
        numbers.
      </p>

      <p>
        The numbers got bigger, but the caps got tighter. HDFC Millennia launched in 2019 with a ₹2,000
        monthly cap on its 5 percent tier. By 2023 that was ₹1,000. In the 2026 refresh it's down to
        effectively ₹750 once the quarterly super-cap is averaged out. The advertised rate has never
        changed. What's changed is the size of the box the rate lives in.
      </p>

      <p>
        The RBI's April 2024 guidance on card issuance asked issuers to be more transparent about effective
        returns, and the 2026 master direction amendment <Link href="/blog/rbi-credit-card-rules-2026" style={{ color: VIOLET, fontWeight: 600 }}>reviewed in detail here</Link> tightens some disclosure rules. But the fundamental arithmetic of caps versus spends is left
        to the consumer. Most cardholders never calculate it. The cards that win in ads are almost never
        the cards that win in rupees.
      </p>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>How to pick a genuinely good cashback card</h2>

      <p>
        Three tests, in order. First, identify the single category where more than 40 percent of your
        annual spend goes. For most urban professionals, that is one of four: online shopping, food
        delivery, fuel, or travel. Second, find the card whose highest tier is fastened to that same
        category. Third, estimate whether your monthly spend in that category exceeds the card's cap. If
        yes, switch to a card with a higher ceiling; if no, you will earn the headline rate and the card
        is an honest choice.
      </p>

      <p>
        Applied to the ₹40,000 online-heavy profile we've been modelling, that points to Amazon Pay ICICI
        for Prime members, or Flipkart Axis for non-Prime buyers. The SBI Cashback card, despite its
        reputation as a flat 5 percent product, only wins if you spend less than ₹1,00,000 a month in total
        online, at which point you should also ask whether the ₹999 fee is genuinely buying you more than
        the free alternatives deliver.
      </p>

      <CapLens title="A pragmatic two-card strategy">
        Hold a lifetime-free Amazon Pay ICICI for all e-commerce and use a Flipkart Axis for the e-commerce
        not on Amazon. Everywhere else — utilities, fuel, offline — use a flat-1.5-percent workhorse like
        the Axis Ace (ignoring its promoted tier entirely). This stack delivers 3 to 3.5 percent on about
        70 percent of your spend and 1.5 percent on the rest, averaging closer to 2.7 percent — higher
        than any single card's effective rate on a normal profile. No fees. No category dance.
      </CapLens>

      <h2 style={{ fontSize: 26, marginTop: 40, marginBottom: 14, fontWeight: 700 }}>The questions readers ask most</h2>

      <div style={{ marginTop: 14 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Is a 1.25 percent effective rate bad?</h3>
        <p>Not terrible, but it is below the <Link href="/credit-cards/best-flat-cashback" style={{ color: VIOLET, fontWeight: 600 }}>best flat cashback cards</Link> in the Indian market. Any flat 1.5 percent card with no fee
          beats a capped 5 percent card that delivers 1.25 percent. The goal is not the banner; the goal is
          the deposit.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>What happens after the cap is hit?</h3>
        <p>Different issuers do different things. SBI drops the cashback on excess spends to zero. HDFC
          usually drops to 1 percent as a retention rate. Axis stops crediting the 5 percent tier and gives
          1.5 percent on excess. Always check the MITC specifically for the "beyond cap" clause.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Do caps apply to welcome bonuses?</h3>
        <p>The welcome bonus is usually separate from the ongoing cashback cap, but may be subject to its
          own minimum-spend gate. Read both clauses carefully — the welcome bonus often hides a 3-month
          ₹30,000 spend requirement which itself implies a cap on how fast you can earn it.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Does this apply to reward-point cards too?</h3>
        <p>Yes, in a slightly disguised form. Reward point cards cap either the points earned per month or
          the points redeemable per year. A 4-points-per-₹150 card with a 12,000-points-per-cycle cap is
          mathematically identical to a 2.67 percent cashback card with a ₹600 monthly cap.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Can I negotiate a cap removal?</h3>
        <p>Realistically, no, for retail cards. Private banking and super-premium cards (Amex Platinum,
          Yes First Exclusive) sometimes remove category caps for customers with large average balances.
          For mass-market cards, the cap is hardcoded in the product definition and customer care cannot
          lift it.</p>

        <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 18 }}>Is annual-fee reversal worth it?</h3>
        <p>Often, yes, on fee-waiver cards like HDFC Millennia (₹1,00,000 spend waives ₹1,000 fee). But
          the waiver math itself is circular: you have to spend more to earn the waiver, and that extra
          spend may push you past the category cap where the rate collapses.</p>
      </div>

      <div style={{
        marginTop: 46, padding: "24px 22px", background: "var(--bg-soft)",
        borderRadius: 12, borderLeft: `4px solid ${VIOLET}`,
      }}>
        <h3 style={{ marginTop: 0, fontSize: 20, fontWeight: 700 }}>Before you apply, run the numbers</h3>
        <p style={{ marginBottom: 12 }}>
          The cards that look best on billboards are rarely the cards that leave the most rupees in your
          account. Use our unbiased cashback ranker, which plots every card on the spend profile you
          actually have — not the one the bank hopes you have.
        </p>
        <Link href="/tools/cashback-calculator" style={{
          display: "inline-block", padding: "10px 18px", background: VIOLET,
          color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 600,
        }}>
          Calculate my effective rate →
        </Link>
      </div>

      <div style={{ marginTop: 36, padding: "18px 20px", background: "var(--bg-soft)", borderRadius: 10, fontSize: 13, color: "var(--text-muted)" }}>
        <strong>Methodology:</strong> Cap data drawn from each issuer's public Most Important Terms &amp;
        Conditions document current to 1 April 2026. Spend profile modelled on a ₹40,000-per-month urban
        household card with 60 percent online, 20 percent utilities, 15 percent dining and 5 percent
        fuel. Calculations exclude statement interest charges (assumes zero revolve) and include the
        18 percent GST applicable on card fees under Notification 13/2017 CT(R).
      </div>

      <div style={{ marginTop: 18, fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>
        This article is editorial and does not constitute financial or legal advice. Always consult a
        SEBI-registered advisor for decisions touching your personal finances. Assure Fintech has no
        undisclosed commercial affiliation with any card issuer mentioned; our rankings are based on
        publicly available fee schedules and customer-effective return models.
      </div>

      <div style={{ marginTop: 26, padding: "24px 26px", borderTop: "1px solid var(--border)", fontSize: 13, color: "var(--text-muted)" }}>
        Reviewed by the Assure Fintech research desk. Originally published April 20, 2026. Next review due
        July 2026 or upon any RBI master-direction amendment to card reward transparency.
      </div>

      <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Read next</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.9 }}>
          <li>→ <Link href="/blog/rbi-credit-card-rules-2026" style={{ color: VIOLET }}>RBI credit card rules: what changed in 2026</Link></li>
          <li>→ <Link href="/credit-cards/best-cashback-cards" style={{ color: VIOLET }}>Best cashback cards India — cap-adjusted rankings</Link></li>
          <li>→ <Link href="/blog/best-card-beginners-2026" style={{ color: VIOLET }}>Best credit card for a first-time applicant in 2026</Link></li>
          <li>→ <Link href="/learn/credit-cards/apr-and-real-cost" style={{ color: VIOLET }}>APR explained: what your card actually charges</Link></li>
        </ul>
      </div>
    </main>
    </>
  );
}
