import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Direct vs Regular Mutual Fund: The 1% That Becomes 47 Lakh Over 20 Years",
  description: "Same fund, same manager, same portfolio. 1% higher expense ratio in regular plan. On a 10K SIP for 20 years, that 1% costs 47 lakh. Full comparison.",
  alternates: { canonical: "/learn/mutual-funds/direct-vs-regular" },
  openGraph: {
    title: "Direct vs Regular Mutual Fund: The 1% That Becomes 47 Lakh Over 20 Years",
    description: "Same fund, same manager, same portfolio. 1% higher expense ratio in regular plan. On a 10K SIP for 20 years, that 1% costs 47 lakh. Full comparison.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/mutual-funds/direct-vs-regular
// Template: Math comparison — "1% that becomes ₹47L"
// Color: #7c3aed | Updated: June 4, 2026

const COLOR = "#7c3aed";
const UPDATED = "June 4, 2026";

const SvgExpenseRatio = () => (
  <svg viewBox="0 0 720 260" role="img" aria-label="Expense ratio comparison for direct versus regular mutual fund plans for top 5 large cap funds showing 0.5 to 1.5 percent higher expense in regular plans" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">EXPENSE RATIO COMPARISON · DIRECT vs REGULAR · TOP LARGE CAP FUNDS · JUNE 2026</text>
    {[{ h: "Fund" }, { h: "Direct Plan TER" }, { h: "Regular Plan TER" }, { h: "Difference" }, { h: "Commission to Distributor" }].map(({ h }, i) => {
      const xs = [20, 200, 330, 460, 560];
      return <rect key={h} x={xs[i]} y="35" width={[170, 120, 120, 90, 160][i]} height="24" fill={COLOR}><text x={xs[i] + [170, 120, 120, 90, 160][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Mirae Asset Large Cap", "0.55%", "1.45%", "0.90%", "~₹900/yr per ₹1L"],
      ["Axis Bluechip Fund", "0.46%", "1.56%", "1.10%", "~₹1,100/yr per ₹1L"],
      ["HDFC Top 100 Fund", "0.57%", "1.68%", "1.11%", "~₹1,110/yr per ₹1L"],
      ["Canara Robeco Bluechip", "0.42%", "1.34%", "0.92%", "~₹920/yr per ₹1L"],
      ["Nifty 50 Index Fund (UTI)", "0.18%", "0.38%", "0.20%", "~₹200/yr per ₹1L"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 30} width={700} height="30" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 200, 330, 460, 560];
          const isGood = ci === 1;
          const isBad = ci === 2 || ci === 3;
          return <text key={ci} x={xs[ci] + 5} y={78 + ri * 30} fontFamily="system-ui" fontSize="11" fill={isGood ? COLOR : isBad ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="236" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Regular plan TER includes the distributor commission (trailing fee). This fee is paid from your NAV growth every single day — silently reducing your returns. Direct plans have zero distributor commission.</text>
  </svg>
);

const SvgWealthDifference20yr = () => (
  <svg viewBox="0 0 720 295" role="img" aria-label="Wealth difference between direct and regular mutual fund over 20 years on 10000 rupee monthly SIP showing direct plan creates 47 lakh more wealth" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">₹10,000/MONTH SIP · 20 YEARS · 12% GROSS RETURN · DIRECT vs REGULAR (1% DIFFERENCE)</text>
    <rect x="60" y="50" width="240" height="190" fill="#dc2626" rx="6" opacity="0.85" />
    <text x="180" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">REGULAR PLAN (11% net)</text>
    <text x="180" y="115" textAnchor="middle" fontFamily="system-ui" fontSize="28" fontWeight="800" fill="#fff">₹91L</text>
    <text x="180" y="145" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fca5a5">Total invested: ₹24L</text>
    <text x="180" y="162" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fca5a5">Wealth created: ₹67L</text>
    <text x="180" y="210" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fca5a5">Distributor earned: ~₹12-15L</text>
    <text x="180" y="225" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fca5a5">from your returns over 20yr</text>
    <rect x="420" y="50" width="240" height="190" fill={COLOR} rx="6" opacity="0.85" />
    <text x="540" y="80" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#fff">DIRECT PLAN (12% net)</text>
    <text x="540" y="115" textAnchor="middle" fontFamily="system-ui" fontSize="28" fontWeight="800" fill="#fff">₹1.38Cr</text>
    <text x="540" y="145" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#ddd6fe">Total invested: ₹24L</text>
    <text x="540" y="162" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#ddd6fe">Wealth created: ₹1.14Cr</text>
    <text x="540" y="210" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#ddd6fe">Distributor earned: ₹0</text>
    <text x="540" y="225" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#ddd6fe">That money stays with you</text>
    <rect x="220" y="258" width="280" height="18" fill="#dc2626" rx="4" />
    <text x="360" y="271" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">Direct plan creates ₹47L more. That is the 1% compounding over 20 years.</text>
  </svg>
);

const SvgCommissionFlow = () => (
  <svg viewBox="0 0 720 214" role="img" aria-label="How distributor commission flows from your mutual fund investment through the regular plan expense ratio to the broker or distributor who sold you the fund" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW THE COMMISSION FLOWS · WHY YOUR DISTRIBUTOR RECOMMENDS REGULAR PLANS</text>
    {[
      { box: "Your ₹10,000 SIP", x: 20 },
      { box: "Fund House AMC", x: 200 },
      { box: "Distributor/Broker", x: 400 },
      { box: "Fund grows at 12%\nBut your NAV grows at 11%\n(1% to distributor)", x: 560 },
    ].slice(0, 3).map(({ box, x }) => (
      <g key={box}>
        <rect x={x} y="40" width="160" height="50" fill={COLOR} rx="8" opacity={0.7 + x / 1000} />
        <text x={x + 80} y="70" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#fff">{box}</text>
        <path d={`M ${x + 160} 65 L ${x + 196} 65`} stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr)" />
      </g>
    ))}
    <rect x="560" y="40" width="140" height="80" fill="#dc2626" rx="8" opacity="0.8" />
    <text x="630" y="65" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">YOUR COST</text>
    <text x="630" y="82" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#fff">1% per year</text>
    <text x="630" y="98" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fca5a5">silently deducted</text>
    <text x="630" y="113" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#fca5a5">from your NAV daily</text>
    <text x="20" y="150" fontFamily="system-ui" fontSize="7" fontWeight="700" fill="var(--text)">This is why your bank RM, insurance agent, and financial advisor recommend regular plans. They earn trailing commission every year you stay invested.</text>
    <text x="20" y="168" fontFamily="system-ui" fontSize="9" fill="var(--text)">SEBI mandated disclosure of this commission — it's in the fund's KIID document. Most investors never read it. Now you know.</text>
    <text x="20" y="190" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Direct plans were introduced by SEBI in 2013 specifically to allow investors to bypass distributors and access funds without commission loading. Direct plan NAVs are always higher than regular plan NAVs for the same fund.</text>
  </svg>
);

const SvgPlatformComparison = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Platform comparison for investing in direct mutual funds showing Zerodha Coin MF Central Kuvera and Groww with their features and whether they charge for direct plan investing" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHERE TO BUY DIRECT PLANS · PLATFORM COMPARISON</text>
    {[{ h: "Platform" }, { h: "Type" }, { h: "Direct Plans" }, { h: "Fee" }, { h: "Best For" }].map(({ h }, i) => {
      const xs = [20, 160, 280, 430, 520];
      return <rect key={h} x={xs[i]} y="35" width={[130, 110, 140, 80, 200][i]} height="24" fill={COLOR}><text x={xs[i] + [130, 110, 140, 80, 200][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["MF Central", "AMFI official", "All direct", "FREE", "Most complete — covers all AMCs, portfolio view"],
      ["Kuvera", "Fintech platform", "All direct", "FREE", "Best UI, goal tracking, portfolio overlap check"],
      ["Zerodha Coin", "Broker platform", "All direct", "FREE", "Already using Zerodha? Consolidate here."],
      ["Groww", "Fintech platform", "All direct", "FREE", "Best for beginners, very easy onboarding"],
      ["AMC website directly", "Fund house", "Direct only", "FREE", "Best for single fund — SBI, HDFC, ICICI etc."],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 26} width={700} height="22" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 160, 280, 430, 520];
          return <text key={ci} x={xs[ci] + 5} y={74 + ri * 26} fontFamily="system-ui" fontSize="10" fill={cell === "FREE" ? COLOR : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
    <text x="20" y="196" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Never pay a platform fee for direct plan investment. If any platform charges you for direct plans, walk away — MF Central, Kuvera, and Groww are all free. Avoid "advisory platforms" that charge 0.5-1% AUM fee annually.</text>
  </svg>
);

const SvgSwitchingProcess = () => (
  <svg viewBox="0 0 720 199" role="img" aria-label="How to switch from regular to direct mutual fund plan showing the process and tax implications of switching" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW TO SWITCH FROM REGULAR TO DIRECT PLAN · STEP-BY-STEP</text>
    {[
      { step: "1. Identify your regular plan holdings", detail: "Check your CAMS/KFintech statement. Any fund purchased via bank, broker, or agent is likely a regular plan." },
      { step: "2. Note the tax implication before switching", detail: "Switching = redemption of regular plan + purchase of direct plan. This triggers capital gains tax if held over 1 year (LTCG 12.5%) or under 1 year (STCG 20%). Wait for gains to cross 1 year for lower tax rate." },
      { step: "3. Switch on MF Central or directly at AMC", detail: "MF Central has a free 'Switch' feature. Log in with PAN+OTP, select fund, switch to direct plan of same fund. Takes 1-3 business days." },
      { step: "4. Future SIPs: start fresh in direct plan", detail: "For ongoing SIPs still in regular plan: cancel them and restart in direct plan via Kuvera or AMC website. No switching needed — just cancel and start new." },
    ].map(({ step, detail }, i) => (
      <g key={step}>
        <text x="20" y={42 + i * 34} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>{step}</text>
        <text x="20" y={57 + i * 34} fontFamily="system-ui" fontSize="11" fill="var(--text)">{detail.slice(0, 100)}</text>
      </g>
    ))}
    <text x="20" y="175" fontFamily="system-ui" fontSize="7" fill="var(--text-muted)">Don't switch everything at once if you have large gains. Spread switches over multiple financial years to stay within ₹1.25L LTCG exemption per year. A CA can help plan the switching strategy for large portfolios.</text>
  </svg>
);

export default function PageDirectVsRegular() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the difference between direct and regular mutual fund?", "acceptedAnswer": { "@type": "Answer", "text": "Direct mutual fund plans are purchased directly from the fund house (AMC) without any intermediary. Regular plans go through a distributor (bank, broker, agent) who earns a commission from the fund house, which is passed on as a higher expense ratio. The investment is in the same underlying fund — same portfolio, same fund manager. The only difference is the expense ratio: direct plans have lower TER (typically 0.5-1.5% lower), resulting in higher NAV growth over time." } },
      { "@type": "Question", "name": "How much does the regular plan expense ratio cost me over 20 years?", "acceptedAnswer": { "@type": "Answer", "text": "On a ₹10,000/month SIP over 20 years at 12% gross return: direct plan (11% after 1% commission) grows to ₹1.38 crore, while regular plan (11% net) grows to ₹91 lakh. The difference is ₹47 lakh — purely from the 1% annual commission compounding over 20 years. This is the most concrete example of how small percentage differences become enormous rupee amounts over long periods." } },
      { "@type": "Question", "name": "Is it safe to invest in direct mutual funds without an advisor?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for most straightforward investment strategies. If you're investing in a Nifty 50 index fund or a flexi cap active fund based on basic research, you don't need an advisor. Platforms like Kuvera, MF Central, and Groww make direct investing very accessible. Where an advisor adds value: complex financial planning (estate planning, NRI taxation, large portfolio construction), emotional discipline during market crashes, and tax-efficient withdrawal strategies. For basic SIPs, skip the advisor and take the direct plan savings." } },
      { "@type": "Question", "name": "How do I switch from regular to direct mutual fund?", "acceptedAnswer": { "@type": "Answer", "text": "Log in to MF Central (mfcentral.com) with your PAN and registered mobile OTP. Go to your portfolio, select the regular plan fund, and choose 'Switch' to the direct plan of the same fund. This triggers a redemption of the regular plan and purchase of the direct plan — it's a taxable event (capital gains apply). For minimizing tax: wait until your holding period exceeds 1 year (for lower LTCG rate of 12.5%) before switching. Cancel ongoing regular plan SIPs and restart them directly in the direct plan." } },
      { "@type": "Question", "name": "Do all direct plans perform better than regular plans?", "acceptedAnswer": { "@type": "Answer", "text": "Mathematically, yes — always. The direct plan of any fund will have higher NAV growth than the regular plan of the same fund because the direct plan has lower expense ratio. The portfolio, fund manager, and investment strategy are identical. The only difference is the expense ratio. There's no scenario where a regular plan outperforms the direct plan of the same fund — it's structurally impossible because the commission comes out of your returns." } },
      { "@type": "Question", "name": "Can I get financial advice for free and still invest in direct plans?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEBI registered investment advisors (RIAs) can charge a flat fee for advice (annual retainer: ₹15,000-50,000 for a comprehensive financial plan) and then you invest in direct plans yourself. This is the ideal arrangement: you pay for advice once, then invest without ongoing commission. The fee-based advisor has no incentive to recommend specific funds for commission — they earn only from you. SEBI's RIA registry at sebi.gov.in lists registered advisors in your city." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Direct vs Regular Mutual Fund: The 1% That Becomes ₹47 Lakh Over 20 Years", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Mutual Funds", item: "https://assurefintech.com/learn/mutual-funds/" },
    { "@type": "ListItem", position: 4, name: "Direct vs Regular", item: "https://assurefintech.com/learn/mutual-funds/direct-vs-regular" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #7c3aed22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Mutual Funds · Direct Plans · Expense Ratio
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Direct vs Regular Mutual Fund: The 1% That Becomes ₹47 Lakh Over 20 Years
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 10 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/mutual-funds" style={{ color: "inherit" }}>Mutual Funds</Link> / Direct vs Regular</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>Same fund, same fund manager, same portfolio. Just 1% higher expense ratio in the regular plan. On a ₹10,000 SIP for 20 years, that 1% costs you ₹47 lakh. And your bank RM benefits from every rupee of it.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Same Fund, Two Prices</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Every mutual fund in India exists in two versions: direct plan and regular plan. Same fund manager. Same portfolio of stocks or bonds. Same investment objective. The only difference is the expense ratio — the annual fee the fund charges as a percentage of assets under management.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Direct plans have lower expense ratios because there's no distributor commission. Regular plans pay a trailing commission (typically 0.5-1.5% per year) to whoever sold you the fund — your bank RM, ICICI Direct, Zerodha Regular (if you bought through a broker), or an independent financial advisor.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This commission is deducted silently from the fund's NAV every single day. You never see a fee in your account statement. But you see it over time in the lower NAV growth of your regular plan versus the direct plan of the same fund.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Expense Ratio Gap: What You're Actually Paying</h2>
        <SvgExpenseRatio />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The Axis Bluechip example is stark: 0.46% for direct, 1.56% for regular — a 1.10% annual difference. On a ₹10L corpus, that's ₹11,000 per year flowing to the distributor. Compounded over 20 years, this becomes the ₹47L difference we're talking about.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Index funds have the smallest gap (0.15-0.30% difference) because their total expense ratios are already low. Active funds have larger gaps. For the most impact, switching from a regular active fund (like Axis Bluechip regular) to the direct plan of the same fund saves the most.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Math: ₹47 Lakh Is Not Hyperbole</h2>
        <SvgWealthDifference20yr />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The compound math is unforgiving. A 1% lower annual return on a growing corpus creates an exponentially larger gap over time. At Year 5: the gap is about ₹2L. At Year 10: about ₹10L. At Year 20: ₹47L. The longer you stay invested, the more expensive the regular plan becomes.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>There's an additional framing worth sitting with: that ₹47L went somewhere. It went to the distributor — your bank, your broker, or your agent. They earned it by doing nothing after the initial sale. The trailing commission is the perfect passive income business, at your expense.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How the Commission System Works</h2>
        <SvgCommissionFlow />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is why your HDFC Bank relationship manager recommends HDFC Mutual Fund. Not because it's the best fund — it may or may not be. But because HDFC Bank earns trailing commission on HDFC AMC regular plans. The conflict of interest is structural, not personal.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>SEBI has mandated disclosure of distributor commissions in the fund KIM (Key Information Memorandum) and on fund house websites. You can look up exactly how much your distributor earns annually. Most investors never check.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Where to Buy Direct Plans (All Free)</h2>
        <SvgPlatformComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>MF Central is the government-authorized consolidator — all AMCs are available, your portfolio is consolidated, and XIRR is calculated automatically. Kuvera's UI is exceptional and includes features like goal tracking and portfolio overlap analysis. Both are completely free for direct plan investing — no AUM charge, no transaction fee.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Avoid any platform that charges 0.5-1% AUM fee "for using direct plans." That wipes out most of the savings from going direct. Real direct plan platforms earn from premium features or from referrals — not from your investments.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How to Switch: Step by Step</h2>
        <SvgSwitchingProcess />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most important step: check your tax position before switching. Switching triggers capital gains. If you've held funds for over a year, gains up to ₹1.25L per year are tax-free (LTCG exemption). Plan your switches to stay within this limit each year. A portfolio of ₹20L in regular plans with ₹8L in unrealized gains might need to be switched over 3-4 years to minimize tax.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For new investments: start in direct from day one. There's no reason to start a new SIP in a regular plan. Every platform mentioned above makes it straightforward to start direct plan SIPs in minutes.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our <Link href="/learn/mutual-funds/cagr-vs-actual-return" style={{ color: COLOR }}>CAGR vs actual return guide</Link> for understanding how to measure your direct plan performance, and our <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link> for all related content.</p>
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
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link> · <Link href="/learn/mutual-funds/cagr-vs-actual-return" style={{ color: COLOR }}>CAGR vs actual return</Link> · <Link href="/learn/mutual-funds/sip-advertised-vs-actual" style={{ color: COLOR }}>SIP advertised vs actual</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: expense ratio data from AMFI and fund house websites as of {UPDATED}. Wealth projections based on 12% gross return assumption. Past performance not indicative of future returns. Not investment advice.</footer>
    </main>
    </>
  );
}
