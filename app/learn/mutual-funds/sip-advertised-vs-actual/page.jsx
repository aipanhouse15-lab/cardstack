import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "SIP Returns: Why the 15% You See in Ads Often Becomes 10-12% in Your Account",
  description: "Fund ads show the best return window. Your SIP starts at a different time. Realistic expectations, sequence-of-return risk, and what actually matters.",
  alternates: { canonical: "/learn/mutual-funds/sip-advertised-vs-actual" },
  openGraph: {
    title: "SIP Returns: Why the 15% You See in Ads Often Becomes 10-12% in Your Account",
    description: "Fund ads show the best return window. Your SIP starts at a different time. Realistic expectations, sequence-of-return risk, and what actually matters.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/mutual-funds/sip-advertised-vs-actual
// Template: Trap article — the gap between promise and reality
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgAdvertisedVsActual = () => (
  <svg viewBox="0 0 720 340" role="img" aria-label="Comparison of advertised SIP returns in mutual fund advertisements versus actual investor returns across different market entry points showing ads claim 18 percent while average investor gets 10 to 13 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ADVERTISED vs ACTUAL SIP RETURNS · ₹10,000/MONTH · 10 YEARS · SAME FUND</text>
    {[
      { scenario: "Fund advertisement (best 10-yr window, 2013-2023)", returns: "18.4%", corpus: "₹3.01Cr", color: "#dc2626", note: "Cherry-picked: starts at 2013 bull-run base" },
      { scenario: "SIP started Jan 2020 (pre-COVID)", returns: "14.2%", corpus: "₹2.11Cr", color: "#f97316", note: "Good, but not 18%. Caught COVID crash." },
      { scenario: "SIP started Jan 2018 (market peak)", returns: "10.8%", corpus: "₹1.74Cr", color: "#f59e0b", note: "Started at 2018 peak, 2yr of low returns" },
      { scenario: "SIP started Jun 2020 (COVID low)", returns: "21.3%", corpus: "₹3.67Cr", color: "#16a34a", note: "Lucky timing: bought at market lows" },
      { scenario: "Average of all 10-yr windows (2010-2026)", returns: "12.1%", corpus: "₹1.93Cr", color: COLOR, note: "Most honest number. This is realistic." },
    ].map(({ scenario, returns, corpus, color, note }, i) => (
      <g key={scenario}>
        <rect x="20" y={40 + i * 42} width={700} height="34" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} rx="3" />
        <text x="26" y={55 + i * 42} fontFamily="system-ui" fontSize="11" fill="var(--text)">{scenario}</text>
        <text x="26" y={68 + i * 42} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{note}</text>
        <rect x="520" y={44 + i * 42} width="70" height="26" fill={color} rx="4" />
        <text x="555" y={61 + i * 42} textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">{returns}</text>
        <text x="600" y={61 + i * 42} fontFamily="system-ui" fontSize="13" fontWeight="700" fill={color}>{corpus}</text>
      </g>
    ))}
        <text x="20" y="255" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">The advertised 18.4% is real — for the specific window they chose. The realistic number for most investors starting today</text>
    <text x="20" y="269" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">is 10-14% over 10 years, depending on market conditions. Plan with 12%, celebrate if you get more.</text>
  </svg>
);

const SvgOneCroreIn15yr = () => (
  <svg viewBox="0 0 720 370" role="img" aria-label="How much SIP needed to reach 1 crore in 15 years at different return rates showing that 15 percent advertised returns require only 11000 rupees monthly while realistic 12 percent requires 16000 monthly" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">₹1 CRORE GOAL IN 15 YEARS · HOW MUCH MONTHLY SIP IS NEEDED AT DIFFERENT RETURNS?</text>
    {[
      { rate: "15% CAGR (advertised typical)", sip: "₹11,500/mo", total: "₹20.7L invested", color: "#dc2626", note: "Optimistic — not what most investors achieve" },
      { rate: "12% CAGR (realistic for equity)", sip: "₹16,200/mo", total: "₹29.2L invested", color: COLOR, note: "More realistic planning benchmark" },
      { rate: "10% CAGR (conservative equity)", sip: "₹21,700/mo", total: "₹39.1L invested", color: "#f59e0b", note: "Pessimistic but worth planning for" },
      { rate: "7% CAGR (debt fund / FD level)", sip: "₹33,500/mo", total: "₹60.3L invested", color: "#ca8a04", note: "If you don't take equity risk" },
    ].map(({ rate, sip, total, color, note }, i) => (
      <g key={rate}>
        <text x="240" y={58 + i * 46} textAnchor="end" fontFamily="system-ui" fontSize="12" fill="var(--text)">{rate}</text>
        <rect x="250" y={42 + i * 46} width={parseInt(sip.replace(/[₹,/mo]/g, "")) / 150} height="28" fill={color} rx="4" opacity="0.85" />
        <text x={258 + parseInt(sip.replace(/[₹,/mo]/g, "")) / 150} y={61 + i * 46} fontFamily="system-ui" fontSize="15" fontWeight="800" fill={color}>{sip}</text>
        <text x={258 + parseInt(sip.replace(/[₹,/mo]/g, "")) / 150} y={74 + i * 46} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{total} · {note}</text>
      </g>
    ))}
        <text x="20" y="232" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Planning with 15% and getting 12% means you'll fall ₹30-40L short of your goal. Planning with 12% and getting 15% means</text>
    <text x="20" y="246" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">you hit ₹1Cr early. Always plan conservatively with realistic return assumptions.</text>
  </svg>
);

const SvgInflationAdjusted = () => (
  <svg viewBox="0 0 720 374" role="img" aria-label="Inflation adjusted value of 1 crore rupees in 15 years showing that 1 crore in 2041 is worth only about 48 lakh in today purchasing power at 5 percent inflation" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">INFLATION REALITY CHECK · WHAT ₹1 CRORE IN 2041 IS WORTH IN TODAY'S MONEY</text>
    <rect x="20" y="38" width="680" height="60" fill="var(--raise)" stroke="#dc2626" strokeWidth="1" rx="8" />
    <text x="30" y="62" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#dc2626">₹1 Crore in 2041 = ₹48.1 Lakh in today's purchasing power (at 5% annual inflation)</text>
        <text x="30" y="84" fontSize="9" fontFamily="system-ui" fill="var(--text)">That is, if you achieve your ₹1Cr goal in 15 years, you'll be able to buy what ₹48 Lakh buys today. Not ₹1 Crore worth of</text>
    <text x="30" y="98" fontSize="9" fontFamily="system-ui" fill="var(--text)">today's goods.</text>
    <text x="20" y="122" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">Correct target: ₹2.08 Crore in 15 years = ₹1 Crore of today's purchasing power</text>
    {[
      { target: "₹1Cr nominal", rate: "12%", sip: "₹16,200/mo" },
      { target: "₹2.08Cr real", rate: "12%", sip: "₹33,700/mo" },
    ].map(({ target, rate, sip }, i) => (
      <g key={target}>
        <rect x="20" y={132 + i * 34} width={700} height="26" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={150 + i * 34} fontFamily="system-ui" fontSize="12" fill="var(--text)">Goal: {target} by 2041 at {rate} CAGR = SIP of {sip}</text>
      </g>
    ))}
        <text x="20" y="215" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Inflation is the silent tax on all investment goals. Set your target in real (inflation-adjusted) terms, then</text>
    <text x="20" y="229" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">back-calculate your required SIP. Most people set nominal targets and end up with half the purchasing power they planned</text>
    <text x="20" y="243" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">for.</text>
  </svg>
);

const SvgStepUpSIP = () => (
  <svg viewBox="0 0 720 272" role="img" aria-label="Step-up SIP versus flat SIP comparison showing that increasing SIP by 10 percent annually creates significantly more wealth than a flat SIP over 15 years" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">STEP-UP SIP vs FLAT SIP · ₹10,000 STARTING · 12% RETURN · 15 YEARS</text>
    <rect x="20" y="40" width="310" height="150" fill="#dc2626" rx="8" opacity="0.22" stroke="#dc2626" strokeWidth="1" />
    <text x="175" y="66" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#dc2626">FLAT SIP: ₹10,000/month</text>
    <text x="175" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Total invested: ₹18L</text>
    <text x="175" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill="#dc2626">₹50.4L</text>
    <text x="175" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">at 15 years</text>
    <text x="175" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Real value (inflation adj): ₹24.2L</text>
    <text x="175" y="180" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">SIP at Year 15 still: ₹10,000</text>
    <rect x="390" y="40" width="310" height="150" fill={COLOR} rx="8" opacity="0.22" stroke={COLOR} strokeWidth="1" />
    <text x="545" y="66" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill={COLOR}>STEP-UP: 10% annual increase</text>
    <text x="545" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Total invested: ₹38.5L</text>
    <text x="545" y="110" textAnchor="middle" fontFamily="system-ui" fontSize="22" fontWeight="800" fill={COLOR}>₹1.16Cr</text>
    <text x="545" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">at 15 years</text>
    <text x="545" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">Real value (inflation adj): ₹55.8L</text>
    <text x="545" y="180" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text-muted)">SIP at Year 15: ₹38,000/month</text>
    <rect x="200" y="206" width="320" height="24" fill={COLOR} rx="4" />
    <text x="360" y="222" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Step-up creates ₹65.6L more wealth — and actually beats inflation.</text>
        <text x="20" y="238" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Step-up SIP is available on all major platforms. Set a 10% annual increment and forget — it auto-increases each April. As</text>
    <text x="20" y="252" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">your salary grows, your SIP should too. This is the single best SIP optimization available.</text>
  </svg>
);

const SvgRealisticTargetSetting = () => (
  <svg viewBox="0 0 720 214" role="img" aria-label="Realistic SIP target setting guide showing how to set goals accounting for inflation realistic returns and step-up investments" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">THE REALISTIC SIP PLANNING CHECKLIST</text>
    {[
      { item: "Use 12% as your equity CAGR assumption (not 15-18% from ads)", status: "DO THIS", color: COLOR },
      { item: "Set goals in inflation-adjusted terms (multiply nominal goal × 2 for 15yr at 5% inflation)", status: "DO THIS", color: COLOR },
      { item: "Start a step-up SIP with 10% annual increment — not a flat SIP", status: "DO THIS", color: COLOR },
      { item: "Check XIRR (not fund CAGR) on your portfolio annually", status: "DO THIS", color: COLOR },
      { item: "Trust advertisements that show 25% 3-year SIP returns as your future expectation", status: "AVOID", color: "#dc2626" },
      { item: "Invest in regular plans because the bank RM said so without checking direct plan option", status: "AVOID", color: "#dc2626" },
    ].map(({ item, status, color }, i) => (
      <g key={item}>
        <rect x="20" y={35 + i * 24} width={700} height="20" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <rect x="20" y={37 + i * 24} width="70" height="16" fill={color} rx="3" opacity="0.85" />
        <text x="55" y={49 + i * 24} textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#fff">{status}</text>
        <text x="98" y={50 + i * 24} fontFamily="system-ui" fontSize="11" fill="var(--text)">{item}</text>
      </g>
    ))}
        <text x="20" y="178" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">The ads show you the best-case. Plan for the base case. Celebrate if you beat it. Never confuse historical best</text>
    <text x="20" y="192" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">performance with guaranteed future performance.</text>
  </svg>
);

export default function PageSIPAdvertisedVsActual() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "Why does my SIP not give the same returns as advertised?", "acceptedAnswer": { "@type": "Answer", "text": "Mutual fund advertisements show CAGR from a specific point in time — usually a market low — to the present. Your SIP started at a different time and has different entry prices for each installment. The advertised 18% CAGR reflects a particular 10-year window. If you started at a different point, you'd get a different (often lower) return. The realistic expectation for a Nifty 50 equity fund SIP over any 10-year period is 10-14% XIRR, not 18%." } },
      { "@type": "Question", "name": "What is a realistic SIP return expectation in India?", "acceptedAnswer": { "@type": "Answer", "text": "For large cap equity funds or Nifty 50 index funds over 10+ years: 10-14% XIRR is realistic. For flexi cap or mid cap: 12-16% in good markets. The Nifty 50's rolling 10-year average CAGR since 2000 is approximately 11-12%. Plan your goals with 12% as the base assumption, and treat anything above as a bonus. For debt funds or FDs: 6-8%. For hybrid funds: 9-11%." } },
      { "@type": "Question", "name": "What is a step-up SIP and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "A step-up SIP (also called SIP Top-Up) allows you to automatically increase your SIP amount by a fixed percentage or amount each year. Most platforms (Kuvera, Zerodha Coin, Groww) offer this with a simple toggle. Setting a 10% annual step-up means your ₹10,000 SIP becomes ₹11,000 in Year 2, ₹12,100 in Year 3, and so on. Over 15 years, step-up SIP creates over 2x more wealth than a flat SIP at the same starting amount because it matches your income growth to investment growth." } },
      { "@type": "Question", "name": "How do I account for inflation when setting SIP goals?", "acceptedAnswer": { "@type": "Answer", "text": "Multiply your nominal goal by the inflation factor for your horizon. At 5% inflation: 15 years = multiply by 2.08. 10 years = multiply by 1.63. 20 years = multiply by 2.65. So if you want ₹1 crore in today's purchasing power in 15 years, your nominal target should be ₹2.08 crore. This doubles the required SIP amount but ensures you actually have the purchasing power you planned for." } },
      { "@type": "Question", "name": "Is ₹1 crore in 15 years a good SIP goal?", "acceptedAnswer": { "@type": "Answer", "text": "₹1 crore nominal in 15 years (2041) = ₹48 lakh in today's purchasing power at 5% inflation. That's a reasonable retirement supplement or child education corpus but not a full retirement fund. A more useful target: ₹2 crore nominal, which equals approximately ₹1 crore in today's terms. Required SIP at 12% CAGR: ₹33,700/month. Start with what you can afford (₹10,000-15,000) using step-up SIP — it grows to ₹33,000+ naturally over 15 years if you increase 10% annually." } },
      { "@type": "Question", "name": "Should I time my SIP entry to market lows?", "acceptedAnswer": { "@type": "Answer", "text": "No. SIP is designed specifically to remove market timing from the equation. Regular monthly investments automatically buy more units when markets are low (reducing average cost) and fewer units when markets are high. Trying to time SIP entry often means staying in cash waiting for a 'better time' — and missing months of market growth while waiting. Studies consistently show that SIP investors who invest consistently through market crashes outperform those who pause during volatility." } },
      { "@type": "Question", "name": "What happens to my SIP if I stop during a market crash?", "acceptedAnswer": { "@type": "Answer", "text": "Stopping SIP during a crash is the single biggest mistake SIP investors make. Market crashes are when SIP is most powerful — you're buying more units at lower prices. Every unit bought at a crash NAV becomes highly valuable when markets recover. Investors who paused SIPs in March 2020 (COVID crash) and resumed later missed the most powerful buying opportunity in a decade. If you can't afford to continue: reduce the amount to ₹500/month — but never stop completely." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "SIP Returns: Why the 15% in Ads Often Becomes 10-12% in Your Account", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Mutual Funds", item: "https://assurefintech.com/learn/mutual-funds/" },
    { "@type": "ListItem", position: 4, name: "SIP Advertised vs Actual", item: "https://assurefintech.com/learn/mutual-funds/sip-advertised-vs-actual" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Mutual Funds · Sip · Realistic Returns
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            SIP Returns: Why the 15% You See in Ads Often Becomes 10-12% in Your Account
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/mutual-funds" style={{ color: "inherit" }}>Mutual Funds</Link> / SIP Advertised vs Actual</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Fund advertisements always show the best possible return window. Your SIP starts at a different time. Here's the realistic expectation, how to set real goals, and why step-up SIP is the only honest fix for the inflation problem.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Advertisement's Honest Asterisk</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Every mutual fund advertisement in India has a disclaimer: "Past performance is not indicative of future returns." It's printed in small type at the bottom. The headline in big type says "18% returns in 10 years" or "₹10,000 SIP becomes ₹3 crore."</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The headline is technically accurate. For the specific 10-year window the fund chose to show. The small print captures the rest of the truth: that window was cherry-picked, your entry point is different, and the exact sequence of annual returns determines what you actually earn.</p>
        <SvgAdvertisedVsActual />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most honest number is the rolling average: 12.1% XIRR across all 10-year windows since 2010. Not 18%. Not 10%. About 12%. Plan with 12%. Everything above is a bonus.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The ₹1 Crore Goal: How Much SIP Do You Actually Need?</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The ad says: ₹10,000 SIP for 15 years = ₹1 crore. The ad uses 15% CAGR. That's possible — in a good window. Planning with it is dangerous.</p>
        <SvgOneCroreIn15yr />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If you plan with 15% and get 12%, your ₹10,000 SIP produces ₹50.4 lakh — half your target. You either miss the goal or need to invest significantly more in the final years to compensate. Planning conservatively with 12% and setting your SIP at ₹16,200 ensures you hit the target even in average market conditions, and you celebrate if you get more.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Inflation Problem No SIP Ad Mentions</h2>
        <SvgInflationAdjusted />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>₹1 crore in 2041 feels like a big number today. In terms of what you can buy, it's equivalent to ₹48 lakh today (at 5% inflation). If your actual retirement or goal need is ₹1 crore of today's purchasing power, your nominal 2041 target should be ₹2.08 crore.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This doesn't mean SIP is a bad deal — equity returns at 12% comfortably beat 5% inflation, producing real wealth over time. But your goal should be set in real terms, not nominal ones. Most people set nominal goals and end up with half the purchasing power they needed.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The One SIP Strategy That Actually Beats Inflation</h2>
        <SvgStepUpSIP />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Step-up SIP automatically increases your investment amount each year — matching the natural growth in your income. If your salary grows 8-10% annually, your investable surplus also grows. Routing that increment into your SIP is the single most powerful thing you can do to build real wealth.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The math is dramatic: a flat ₹10,000 SIP for 15 years creates ₹50.4L (nominal). The same ₹10,000 starting SIP with 10% annual step-up creates ₹1.16Cr. More than double the corpus with the same starting investment. Step-up SIP is available on all major platforms — Zerodha Coin, Kuvera, Groww all have a toggle for it in the SIP setup flow.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Realistic Planning Checklist</h2>
        <SvgRealisticTargetSetting />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The core principle: set conservative expectations, invest consistently, and increase periodically. Markets will surprise you — sometimes negatively, sometimes positively. But your investment habit (monthly SIP + annual step-up) is the one thing fully within your control.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Also see: <Link href="/learn/mutual-funds/cagr-vs-actual-return" style={{ color: COLOR }}>CAGR vs actual return</Link> for understanding how to measure your real returns, <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>Direct vs Regular plans</Link> so you're not losing 1% to commissions, and the full <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link>.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link> · <Link href="/learn/mutual-funds/cagr-vs-actual-return" style={{ color: COLOR }}>CAGR vs actual return</Link> · <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>direct vs regular</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: return data from AMFI, Value Research, and NSE India. Rolling return analysis based on Nifty 50 TRI data. Projections for illustrative purposes. Not investment advice. Past returns do not guarantee future performance. Last verified {UPDATED}.</footer>
    </main>
    </>
  );
}
