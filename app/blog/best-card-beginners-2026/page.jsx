import Link from "next/link";
import Script from "next/script";

// ============================================================
// Tier 2 Article 3 — Best Credit Card for Beginners 2026
// URL: /blog/best-card-beginners-2026
// Category: Credit Cards · Color: Violet #7C3AED
// Author: Ash K · Reviewed: June 3, 2026
// Target: 2,500+ visible words · 4 info-SVGs · 6 FAQs
// Template archetype: Persona Journey
// ============================================================

const COLOR = "#7C3AED";
const UPDATED = "June 3, 2026";

const SvgPersonaMatrix = () => (
  <svg viewBox="0 0 720 280" role="img" aria-label="Beginner persona matrix mapping income bracket and CIBIL band to recommended first credit card" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">PERSONA → CARD MATRIX · 4 INCOME × 3 CIBIL BANDS</text>
    {/* x-axis CIBIL */}
    {["No CIBIL", "650-720", "720+"].map((c, i) => (
      <text key={c} x={170 + i * 175} y="50" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)" textAnchor="middle">{c}</text>
    ))}
    {[
      { y: "No income", row: ["FD-secured Axis Insta", "FD-secured Axis Insta", "FD-secured Axis Insta"] },
      { y: "₹2.4-3L", row: ["FD-secured", "Amazon Pay ICICI", "Amazon Pay ICICI"] },
      { y: "₹3-5L", row: ["FD-secured", "SBI SimplyCLICK", "Amazon Pay ICICI"] },
      { y: "₹5L+", row: ["FD-secured", "Axis Ace", "HDFC Millennia"] },
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${74 + i * 42})`}>
        <text x="20" y="20" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{r.y}</text>
        {r.row.map((card, j) => (
          <g key={j} transform={`translate(${110 + j * 175}, 0)`}>
            <rect x="0" y="2" width="160" height="32" fill={COLOR} opacity={card === "FD-secured" || card === "FD-secured Axis Insta" ? 0.3 : 0.6} stroke={COLOR} />
            <text x="80" y="22" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="var(--text)">{card}</text>
          </g>
        ))}
      </g>
    ))}
  </svg>
);

const SvgFirstYearMath = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="First year economic outcome of three popular beginner cards under typical 25k monthly spend" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">YEAR 1 NET BENEFIT · ₹25K MONTHLY SPEND PROFILE</text>
    {[
      { card: "Amazon Pay ICICI", fee: 0, welcome: 1500, cashback: 4200, net: 5700, w: 285 },
      { card: "Axis Ace", fee: 499, welcome: 0, cashback: 5800, net: 5301, w: 265 },
      { card: "SBI SimplyCLICK", fee: 499, welcome: 500, cashback: 4500, net: 4501, w: 225 },
    ].map((c, i) => (
      <g key={i} transform={`translate(0, ${52 + i * 50})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">{c.card}</text>
        <text x="20" y="32" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Fee ₹{c.fee} · welcome ₹{c.welcome} · cashback ₹{c.cashback.toLocaleString("en-IN")}</text>
        <rect x="350" y="6" width={c.w} height="22" fill={COLOR} opacity={0.5 + i * 0.15} />
        <text x={358 + c.w} y="22" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--text)">₹{c.net.toLocaleString("en-IN")}</text>
      </g>
    ))}
    <text x="20" y="220" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Net benefit = welcome bonus + annual cashback − annual fee · effective rate ranges 1.5-1.9% across these cards</text>
  </svg>
);

const SvgBuildingScore = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="CIBIL score progression over 24 months for a first-time cardholder following three different behavioural patterns" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">CIBIL TRAJECTORY · 24 MONTHS POST FIRST CARD · 3 BEHAVIOURS</text>
    <line x1="60" y1="200" x2="700" y2="200" stroke="var(--border)" />
    <line x1="60" y1="50" x2="60" y2="200" stroke="var(--border)" />
    <text x="60" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Mo 0</text>
    <text x="220" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Mo 6</text>
    <text x="380" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Mo 12</text>
    <text x="540" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Mo 18</text>
    <text x="680" y="218" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Mo 24</text>

    <path d="M 60 195 L 220 110 L 380 80 L 540 65 L 700 60" fill="none" stroke="#16a34a" strokeWidth="3" />
    <text x="600" y="55" fontFamily="system-ui" fontSize="10" fill="#16a34a" fontWeight="700">Disciplined: 750+ by Mo 24</text>

    <path d="M 60 195 L 220 145 L 380 130 L 540 110 L 700 100" fill="none" stroke={COLOR} strokeWidth="3" strokeDasharray="5 4" />
    <text x="600" y="93" fontFamily="system-ui" fontSize="10" fill={COLOR} fontWeight="700">Average: 720 by Mo 24</text>

    <path d="M 60 195 L 220 175 L 380 180 L 540 170 L 700 165" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="3 3" />
    <text x="600" y="158" fontFamily="system-ui" fontSize="10" fill="#dc2626" fontWeight="700">Sloppy: 670 + dings</text>
  </svg>
);

const SvgSpendCheck = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Monthly spend pattern self-test showing how to identify which beginner card matches the user's actual transaction mix" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">MATCH YOUR SPEND TO YOUR FIRST CARD</text>
    {[
      { profile: "Amazon Prime + grocery delivery", card: "Amazon Pay ICICI", reason: "Lifetime free · 5% Amazon Prime · 1% other" },
      { profile: "Multi-platform online shopper", card: "SBI Cashback (after 18mo CIBIL build)", reason: "5% all online up to ₹5k/mo cap" },
      { profile: "Utility bills via Gpay + offline", card: "Axis Ace", reason: "5% Gpay util · 1.5% base · ₹499 fee" },
      { profile: "Swiggy + Zomato + Uber heavy", card: "HDFC Millennia (3L+ income)", reason: "5% on 10 partner apps · ₹1k voucher" },
      { profile: "Just want to build CIBIL", card: "FD-secured Axis Insta", reason: "Pledge ₹15k · build score 18 months" },
    ].map((p, i) => (
      <g key={i} transform={`translate(0, ${50 + i * 36})`}>
        <text x="20" y="16" fontFamily="system-ui" fontSize="11" fontWeight="700" fill={COLOR}>{p.profile}</text>
        <text x="280" y="16" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text)">{p.card}</text>
        <text x="20" y="30" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">{p.reason}</text>
      </g>
    ))}
  </svg>
);

export default function BestCardBeginners2026() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Best Credit Card for Beginners in India 2026 — A Persona-Based Picker",
    description: "Five real personas mapped to first-card recommendations across income, CIBIL, and spend pattern. Detailed first-year math and CIBIL-building behaviour guide for first-time Indian cardholders.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20", dateModified: "2026-06-03",
    publisher: { "@type": "Organization", name: "Assure Fintech", logo: { "@type": "ImageObject", url: "https://assurefintech.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/blog/best-card-beginners-2026" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Should I get a credit card if I don't have any income yet?", acceptedAnswer: { "@type": "Answer", text: "Yes, via FD-secured route. Pledge ₹15,000 to ₹50,000 as a fixed deposit at Axis Bank, ICICI Bank, or SBI; in return you get a credit card with limit at 80 to 90 percent of the FD value. The card reports to bureaus identically to unsecured cards. After 12 to 18 months of disciplined usage, you can convert to an unsecured equivalent at the same bank without re-application. The structural advantage of starting at no-income with FD-secured: you build 12 to 18 months of CIBIL history before your first job, putting you in the 720-plus band by the time you need an unsecured card. Family-funded FDs work fine; the FD doesn't need to be from your own money." } },
      { "@type": "Question", name: "How do I avoid the credit-card-debt trap as a first-time user?", acceptedAnswer: { "@type": "Answer", text: "Three behaviours, in priority order. Set up auto-debit on the full statement balance, not minimum due — this is the single most important habit you can build. Keep utilisation under 30 percent of credit limit at statement-cut date (banks report your statement balance to bureaus monthly). Use the card every month for at least 3 small transactions to maintain active status, but don't chase rewards by over-spending. Get these three right and you'll avoid every common first-card pitfall. The 36 to 42 percent APR on revolving balances wipes out cashback economics regardless of card choice; pay in full or balance-transfer to a 0%-promo card if cash flow ever forces a roll." } },
      { "@type": "Question", name: "Which lifetime-free cards are realistically available for a beginner?", acceptedAnswer: { "@type": "Answer", text: "The genuinely lifetime-free options for beginners with verifiable income above ₹2.4 lakh are limited but real. Amazon Pay ICICI is the standout — 5 percent Amazon Prime, 1 percent elsewhere, no annual fee ever, low ₹2.4L income approval. ICICI Platinum is older and simpler at 2 PAYBACK pts/₹100 with no acceleration, also lifetime free. IDFC FIRST Classic and Millennia are both lifetime free and offer reasonable reward structures. SBI Card has no lifetime-free entry products; their cards typically carry ₹499 to ₹999 fees with milestone-based waivers. For a no-income beginner via FD-secured route, Axis Insta Easy is ₹500 fee but the FD continues earning interest while pledged, partially offsetting the fee." } },
      { "@type": "Question", name: "Should I close my first card after upgrading to a better one?", acceptedAnswer: { "@type": "Answer", text: "Generally no. Closing your oldest credit card account reduces credit-history-age, which can drop CIBIL by 30 to 50 points temporarily. Keep the first card open even after upgrading; make a small ₹500 to ₹1,000 transaction every 3 to 4 months to maintain active status. If the first card has annual fee that's now uneconomical, ask the bank to downgrade to a lifetime-free variant of the same product family (HDFC Millennia → MoneyBack+; SBI Elite → Prime; ICICI Coral → Platinum). Downgrade preserves credit-history-age and limit; closure does not. Only close if downgrade is unavailable and you're certain about not needing the card." } },
      { "@type": "Question", name: "What's the realistic credit limit on a first card?", acceptedAnswer: { "@type": "Answer", text: "First-card limits typically sit at 1.5x to 3x of monthly net salary, capped initially at ₹50,000 to ₹2 lakh. So a ₹40,000/month salaried earner might get ₹60,000 to ₹1.2 lakh limit at sanction. FD-secured cards cap at 80 to 90 percent of pledged FD value. Banks usually review limits at the 6-month mark and bump by 30 to 50 percent if your utilisation has stayed under 50 percent. Don't request a manual limit increase in the first 6 months — most banks treat the request as a soft signal and may instead cap your spend. Wait for the bank-initiated limit hike around month 7 to 9, which is genuine recognition of clean behaviour." } },
      { "@type": "Question", name: "Can I have multiple credit cards as a first-time user?", acceptedAnswer: { "@type": "Answer", text: "Apply for one card. Each application is a hard pull on your CIBIL, costing 5 to 10 points temporarily. Multiple applications in 30 to 90 days drop the score sharply, and rejections compound the damage by appearing on the bureau report for 7 years. Build 12 to 18 months of clean history on one card before adding a second. By the time you're ready for card 2, your CIBIL should be 740 plus, your salary higher, and you'll qualify for stronger products like Axis Ace, HDFC Millennia, or Flipkart Axis. The compounding benefit of patience here is meaningful — first card eligibility narrows your menu, but second and third card eligibility widens dramatically once CIBIL is established." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Best Card for Beginners 2026", item: "https://assurefintech.com/blog/best-card-beginners-2026" }
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
            Best Credit Card for Beginners in India (2026)
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
            Your first card decision matters more than you think.
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>5</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Cards picked</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>₹0</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Annual fee (top pick)</div></div>
            <div><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>2026</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Updated</div></div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 100px", fontSize: "18px", lineHeight: 1.85, fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)" }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Best Card for Beginners 2026
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · TIER 2 GUIDE · PERSONA JOURNEY</div>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span>
        <span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span>
        <span>·</span>
        <span>Reviewed against RBI Master Direction + 2025 amendments</span>
        <span>·</span>
        <span>About 9 min read</span>
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The persona-to-card matrix</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Two variables decide your first card more than any other: your verifiable monthly income and your existing CIBIL band. The matrix below maps the four most common income bands against three CIBIL situations (no CIBIL, sub-720 CIBIL, and 720-plus). Find your cell and the card name in it is the safe default.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The matrix is conservative by design. Aggressive picks (premium reward cards) work for some first-timers but the rejection cost (5 to 10 CIBIL points per hard pull, 7-year bureau record) makes them poor risk-reward bets when you can't be sure of approval. Stick to the matrix unless you have specific reason to deviate.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgPersonaMatrix />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Persona 1 — Karthik, 22, final-year student, no income</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Karthik is in his final year at IIT Bombay, has a placement offer for ₹18 lakh starting July, but no income today. He wants to start building CIBIL before his first salary so that he can rent a flat in Bangalore and get an unsecured card by year-end.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The right move: FD-secured route. His parents pledge ₹25,000 as a fixed deposit at Axis Bank's Insta Easy product. Within a week, Karthik gets a credit card with ₹20,000 limit. The card reports to TransUnion CIBIL identically to an unsecured card, building his bureau record from day one.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Behavioural prescription: spend ₹2,000 to ₹4,000 per month on the card (small purchases — coffee, online subscriptions, occasional Swiggy), pay full statement balance via auto-debit on due date, never carry a balance. After 6 to 8 months of clean reporting, his first CIBIL score generates around 700 to 730. By the time his salary credits start in July, his CIBIL is established and he qualifies for unsecured products like Amazon Pay ICICI or Axis Ace as his second card.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The FD continues earning interest at the bank's standard rate (around 6.5 percent annually) while pledged. The opportunity cost is small. The CIBIL gain is meaningful — first-card builders who skip this path and apply for unsecured cards immediately at salary credit time often face rejection (no bureau history) and burn 5 to 10 points per attempt.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Persona 2 — Riya, 24, junior consultant, ₹6 lakh, no card</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Riya works at a mid-tier consulting firm, salary ₹6 lakh per annum (₹50,000 monthly net). She has a salary account at HDFC, no existing credit card or loan, no CIBIL score yet. Her spend pattern is split: ₹15,000 monthly online (Amazon Prime, Myntra, Cleartrip), ₹8,000 Swiggy and Zomato, ₹6,000 Uber and Ola, ₹5,000 grocery delivery on BigBasket, ₹16,000 offline (rent, utilities, dining).
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The right move: Amazon Pay ICICI as the first card. Lifetime-free structure means no fee anxiety. Income approval at ₹2.4 lakh is easily cleared at her ₹6 lakh salary. The 5 percent Amazon Prime rate captures her existing Amazon spend (₹4,000 monthly = ₹2,400 annual cashback). Her remaining online spend earns 1 percent (₹1,320 annual). Total year-one cashback approximately ₹4,200. Plus ₹1,500 welcome Amazon Pay credit (Prime members). Net first-year benefit: ₹5,700.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Behavioural prescription same as Karthik. Spend regularly, pay in full, sub-30 percent utilisation. After 18 months, Riya should add a second card optimised for her partner-app spend (HDFC Millennia or Axis Ace). The two-card stack at that point delivers 2.5 to 3.5 percent effective rate across her full spend mix versus the single-card 1.5 percent at year one.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Why not start with a higher-tier card? Two reasons. CIBIL approval risk is real for first applications without any bureau history. And the marginal cashback benefit of premium cards is small at ₹50,000 monthly spend, so the higher fee isn't justified. Lifetime-free Amazon Pay ICICI is the boring-but-correct first card for most of this persona band.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Persona 3 — Sagar, 28, gig-economy professional, ₹4 lakh, irregular income</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Sagar is a freelance UX designer earning ₹4 lakh annually, but his monthly income varies from ₹15,000 in lean months to ₹60,000 in busy months. He has filed two years of ITRs as a self-employed individual under Section 44ADA presumptive taxation. His CIBIL is 0 — never had any credit product.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The challenge: most banks underwrite first-card applications on income predictability rather than just income level. Salaried earners at ₹4 lakh get cards easily; freelancers at the same level often face rejection. Sagar's path is structurally different.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The right move: FD-secured Axis Insta or ICICI Coral. Pledge ₹30,000 as fixed deposit, get a card with ₹25,000 limit. Build 6 to 9 months of bureau history. Then apply for an unsecured American Express SmartEarn — Amex specifically markets to self-employed and consultants, with friendlier underwriting on ITR-based income than mainstream banks.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Behavioural prescription. Beyond the standard pay-in-full discipline, Sagar should keep utilisation low even in busy months. Spending ₹20,000 on a ₹25,000 limit card looks like high utilisation to bureaus regardless of underlying income; banks read it as financial stress. Aim for under 30 percent utilisation by paying down balances mid-month if necessary, before statement generation.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Persona 4 — Meera, 32, homemaker, no formal income</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Meera is a homemaker with two children, husband earns ₹15 lakh per annum at a private bank. She manages all household spend, currently using her husband's add-on card. She wants her own credit card — partly for financial autonomy, partly because the add-on card doesn't build her individual CIBIL.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The right move: same FD-secured route as no-income applicants. Pledge ₹50,000 to ₹1 lakh and get a card in her name. This builds Meera's individual CIBIL over 18 to 24 months. After that period, she can apply for an unsecured card based on her own bureau record, which now exists.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The add-on path that many homemakers default to (using husband's primary card with a supplementary card) does not build the holder's CIBIL — it builds the primary cardholder's. So 10 years on add-on usage means zero individual CIBIL history. Switch to FD-secured to build personal credit infrastructure.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Why this matters. Personal CIBIL is independently valuable. If Meera ever needs to take a loan in her own name (small business, vehicle, eventual property), banks will need her CIBIL. Building it through 24 months of FD-secured card discipline is the cleanest path. The pledged FD continues earning interest, so the opportunity cost is small. The autonomy and creditworthiness gain is structural.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Persona 5 — Aditya, 26, IT engineer, ₹12 lakh, building portfolio fast</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Aditya works at a mid-tier IT services company, earns ₹12 lakh annually, has held a job for 18 months. He wants to optimise cashback aggressively from day one — specifically wants the Axis Magnus or HDFC Diners Privilege premium cards within a year.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The right path is staged. First card: Axis Ace (₹499 fee, ₹2L spend waiver, 1.5 percent base, 5 percent Gpay utility). Eligible at ₹3 lakh income. Build 12 to 15 months of clean payment history; CIBIL should reach 740-plus by month 18.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Second card at month 18: HDFC Millennia (₹3.5L income requirement, 5 percent on 10 partner apps). The two-card stack now covers most spend categories at accelerated rate. Combined effective rate roughly 2.8 percent.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          Premium card at month 24 to 30: HDFC Diners Privilege if his spend has consistently exceeded ₹1.5 lakh monthly, justifying the ₹2,500 fee. Magnus is too aspirational (₹18 lakh income recommended); wait until salary crosses that bar. Skipping these stages and applying for Magnus immediately at month 6 with ₹12 lakh income usually produces rejection plus 5-10 CIBIL points lost. The staged approach builds approval certainty.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>The first-year math — what you actually earn</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          On a typical first-card profile (₹25,000 monthly spend split across online and offline categories), three popular beginner cards deliver ₹4,500 to ₹5,700 of net first-year benefit. The chart below shows the breakdown.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The differences between cards are small in absolute terms. ₹1,200 of annual benefit difference between Amazon Pay ICICI and SBI SimplyCLICK is real but not transformative. The bigger benefit comes from holding any beginner card consistently for 18 to 24 months and building a 720-plus CIBIL — which then unlocks ₹15,000 to ₹30,000 of annual benefit on a stronger second card.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgFirstYearMath />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>How CIBIL evolves on a first card — the trajectory</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          A first credit card generates your first CIBIL score around month 6 to 9 of usage. Where the score lands depends entirely on your behaviour over those months. The chart below shows three trajectories.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The disciplined trajectory (full payment, sub-30 percent utilisation, monthly active usage) produces a score around 740 to 760 by month 24. The average trajectory (occasional minimum-due payments, 40 to 60 percent utilisation, irregular usage) lands around 700 to 720. The sloppy trajectory (one or two missed due dates, 70-plus percent utilisation, late payment dings) lands around 660 to 680 — a level that can take another 12 to 18 months to repair.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The single most important behavioural rule: pay the full statement balance on time, every cycle, no exceptions. Set up auto-debit on full statement amount (not minimum due) on day after due date. Get this one rule right and the rest of CIBIL discipline follows naturally.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgBuildingScore />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Match your spend pattern to a card — the self-test</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The persona walkthrough above covers archetypal cases. Many beginners don't fit cleanly into one persona. Use the spend-pattern self-test below to find the best match for your specific transaction mix.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The pattern is: identify the single category that dominates your monthly spend, then pick the card that rewards that category at acceleration rate. Cap binding (covered in detail in our <Link href="/blog/cap-adjusted-cashback-explained" style={{ color: COLOR }}>cap-adjusted cashback</Link> guide) means you only need acceleration on the dominant category; the rest of the spend earns base rate which is similar across most cards.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, background: "var(--bg-soft)" }}>
          <SvgSpendCheck />
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Common first-card mistakes that cost real money</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          Five mistakes recur often enough across first-card portfolios to deserve a checklist.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Applying at multiple banks simultaneously.</strong> Each application is a hard pull on CIBIL. Three rejections in 90 days drop the score 25 to 40 points. Apply at one bank only. If rejected, wait 6 months, fix the underlying issue (income proof, CIBIL pattern), and apply at one other bank.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Picking a premium card to "look successful."</strong> The fee economics rarely work for first-time users. A ₹5,000 premium card fee on ₹3 lakh annual spend produces 1.5 to 2 percent net benefit — barely better than a ₹500 fee card on the same spend, while costing ten times the upfront fee.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Buying ULIP-bundled add-ons during onboarding.</strong> Some banks pitch ULIPs and unit-linked products during card-onboarding calls. These are mis-sold investment products with 1.5 to 3 percent annual charges and 5-year lock-ins. Decline politely.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Closing the first card after upgrading.</strong> Reduces credit-history-age and drops CIBIL by 30 to 50 points temporarily. Downgrade instead — most banks support downgrade to a no-fee variant of the same product family. Keep the card open with ₹500 monthly transactions to maintain active status.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          <strong>Auto-debiting minimum due rather than full balance.</strong> The single most common first-card trap. Minimum due autopay protects CIBIL but accumulates interest on remaining balance at 36 to 42 percent APR. Set up full-statement-balance auto-debit instead. Net banking apps from every major bank now offer this option explicitly; switching takes about 2 minutes and saves potentially years of compounding interest leakage if you ever forget a manual payment.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>What documentation do you actually need?</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The application paperwork is similar across banks but the small differences matter. Here's the standard list, with notes on what most first-time applicants miss.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>PAN card.</strong> Mandatory; most digital banking apps now check PAN-Aadhaar linkage automatically. If your PAN is unlinked, fix it before applying — banks reject applications with mismatched KYC.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Aadhaar.</strong> Required for KYC and address verification. The address on Aadhaar should match your current residential address. If you've moved cities, update Aadhaar at a UIDAI service centre before applying.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Salary slips and bank statement.</strong> Most banks accept the latest 1 to 3 salary slips plus 3 to 6 months of bank statement showing salary credit. If you've recently changed jobs, your offer letter from the new employer plus 1 month of new-salary credit is usually enough.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Form 16 or ITR.</strong> Optional for first-jobbers but useful if you have it. For self-employed applicants, 2 to 3 years of ITRs are mandatory.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          <strong>Address proof.</strong> Aadhaar usually serves; some banks ask for a recent utility bill or rent agreement as supplementary. Mobile bills work; broadband bills work.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          One under-appreciated detail: applying through your salary-account bank cuts processing time roughly in half. Banks already have your KYC, salary credit history, and address on file — they just need to confirm CIBIL and underwrite the card. HDFC salary account holders typically get HDFC Millennia approved in 2 to 3 days versus 7 to 10 days through a non-relationship application. The same shortcut works at SBI, ICICI, and Axis. If your salary credits to a particular bank, default the first-card application there unless you have a specific reason to apply elsewhere — the friction reduction alone justifies the choice in most cases.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Year 2 onwards — what changes once you have CIBIL</h2>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The first card is mostly about building bureau history, not maximising rewards. Year 2 onwards is when you actually optimise reward earnings — and the toolkit widens dramatically.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          With CIBIL 720 plus and 12 to 15 months of clean payment history, you become eligible for stronger products. Co-brand cards (Tata Neu Plus, Flipkart Axis), specialised cashback (Axis Ace 5 percent on utility, SBI Cashback 5 percent online), entry-tier travel (HDFC Regalia, ICICI Sapphiro at the lower-fee end). The reward differential between a beginner card at 1.5 percent effective and a year-2 second card at 2.5 to 3.0 percent on the same spend is roughly ₹15,000 to ₹30,000 annually.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 14px" }}>
          The structural advice: don't try to optimise rewards on the first card. Optimise discipline. Reward optimisation is the second-card and third-card decision, not the first-card decision. Treat year one as the credit-history-building investment that unlocks the bigger benefits in year two and beyond.
        </p>
        <p style={{ fontSize: 17, margin: "0 0 16px" }}>
          The patience pays a non-obvious dividend. By year three, with a 740-plus CIBIL and three years of clean tradelines, you'd qualify for premium cards (HDFC Diners Privilege, Axis Atlas, American Express MRCC) that deliver 3.5 to 5 percent effective rate on optimised redemption. Skip the disciplined first-year build and you're stuck on entry-tier cards for several extra years while your CIBIL catches up. The compounding effect over a 10-year card-holding career is roughly ₹2 to 3 lakh of cumulative reward differential between disciplined first-year builders and sloppy first-year revolvers — almost entirely from the gating that strong CIBIL provides into higher-reward products. The first card is the foundation; the optimisation is what you build on top of it later.
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

      <section style={{ marginBottom: 36, padding: "20px 22px", border: "1px solid var(--border)", borderRadius: 14, background: "var(--bg-soft)" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>RELATED ON ASSURE FINTECH</h3>
        <ul style={{ fontSize: 15, paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/how-to-choose-first-credit-card-2026" style={{ color: COLOR }}>How to choose your first credit card in 2026</Link>. Five filters that matter.</li>
          <li style={{ marginBottom: 8 }}><Link href="/learn/credit-cards/cibil-score-explained" style={{ color: COLOR }}>CIBIL score explained</Link>. How it's calculated and how to improve it.</li>
          <li style={{ marginBottom: 8 }}><Link href="/best/credit-card-students" style={{ color: COLOR }}>Best credit cards for students</Link>. FD-secured route deep dive.</li>
          <li style={{ marginBottom: 8 }}><Link href="/best/credit-card-first-salary" style={{ color: COLOR }}>Best credit cards for first salary</Link>. Five filters in priority order.</li>
          <li><Link href="/learn/credit-cards" style={{ color: COLOR }}>Credit cards knowledge hub</Link>. All our card guides in one place.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 36, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: 1.5 }}>SOURCES &amp; FURTHER READING</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>RBI Master Direction on Credit Cards (April 2022) and 2024-25 amendments</li>
          <li style={{ marginBottom: 6 }}>TransUnion CIBIL guidelines on credit-card reporting and score components</li>
          <li style={{ marginBottom: 6 }}>Bank tariff pages — Axis, HDFC, ICICI, SBI verified individually June 3, 2026</li>
          <li>RBI Annual Report 2024-25 — credit card market and bureau statistics</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 22 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> Card eligibility, fees, reward rates, and welcome benefits described above reflect each issuer's current published terms as of {UPDATED}. Verify on the bank's official tariff page before applying. CIBIL trajectory examples are illustrative based on aggregated bureau patterns; individual scores depend on specific behaviour and bureau-data flow. The personas in this article are composites used for educational illustration, not specific individuals. This article is informational and does not constitute credit advice. Consult a qualified financial planner for personalised guidance.
        </p>
            <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 4 }}>Source: <a href="https://www.cibil.com/faq" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>www.cibil.com</a></p>
      </footer>
    </main>
    </>
  );
}
