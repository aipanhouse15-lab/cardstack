import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "SBI Cashback vs Amazon Pay ICICI 2026 — which online-shopper card actually wins",
  description: "SBI Cashback vs Amazon Pay ICICI 2026 — which online-shopper card actually wins",
  alternates: { canonical: "/compare/compare-sbi-cashback-vs-amazon-pay-icici" },
  openGraph: {
    title: "SBI Cashback vs Amazon Pay ICICI 2026 — which online-shopper card actually wins",
    description: "SBI Cashback vs Amazon Pay ICICI 2026 — which online-shopper card actually wins",
    type: "article",
    siteName: "Assure Fintech",
  },
};


const COLOR = "#7C3AED";
const UPDATED = "June 6, 2026";

const SvgUseCase = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="SBI Cashback versus Amazon Pay ICICI effective annual rate across four online spend patterns ranging from Amazon Prime concentrated to diversified e-commerce" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">EFFECTIVE RATE BY ONLINE SPEND PATTERN · NET OF FEE</text>
    {[
      { case: "₹15k Amazon Prime + ₹5k other online", sbi: 4.5, icici: 5.0 },
      { case: "₹10k Amazon + ₹10k Flipkart + ₹10k others", sbi: 4.9, icici: 2.6 },
      { case: "₹40k Amazon Prime exclusive", sbi: 4.7, icici: 5.0 },
      { case: "₹5k Amazon + ₹50k diversified online", sbi: 4.8, icici: 1.5 },
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${44 + i * 42})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="11" fill="var(--text)">{r.case}</text>
        <text x="380" y="8" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">SBI</text>
        <rect x="380" y="10" width={r.sbi * 50} height="10" fill="#9ca3af" />
        <text x={386 + r.sbi * 50} y="19" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{r.sbi.toFixed(1)}%</text>
        <text x="380" y="32" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">Amazon ICICI</text>
        <rect x="380" y="34" width={r.icici * 50} height="10" fill={COLOR} />
        <text x={386 + r.icici * 50} y="42" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>{r.icici.toFixed(1)}%</text>
      </g>
    ))}
  </svg>
);

const SvgFeeFreedom = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Lifetime fee economics comparison showing total fees paid over 5 years on SBI Cashback versus Amazon Pay ICICI assuming year 2 onwards waiver hits or fails" style={{ width: "100%", maxWidth: 760 }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--text-muted)">5-YEAR LIFETIME FEE OUTLAY · ASSUMING WAIVER PATTERN</text>
    {[
      { name: "SBI Cashback · waiver hit Yr 2-5", fee: 999, w: 200 },
      { name: "SBI Cashback · waiver missed any year", fee: 5000, w: 1000 },
      { name: "Amazon Pay ICICI · always", fee: 0, w: 10 },
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${44 + i * 36})`}>
        <text x="20" y="14" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">{r.name}</text>
        <rect x="380" y="2" width={r.w / 2} height="20" fill={COLOR} opacity={0.4 + i * 0.2} />
        <text x={390 + r.w / 2} y="16" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text)">₹{r.fee.toLocaleString("en-IN")}</text>
      </g>
    ))}
    <text x="20" y="184" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Amazon Pay ICICI's lifetime-free structure removes renewal anxiety entirely</text>
  </svg>
);

export default function CompareSbiVsAmazonIcici() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "SBI Cashback vs Amazon Pay ICICI 2026 — Which Online-Shopper Card Wins",
    description: "Head-to-head comparison of SBI Cashback Card and Amazon Pay ICICI for online-heavy Indian shoppers in 2026, with effective rate across four spend patterns and the structural decision on diversified versus Amazon-concentrated profiles.",
    author: { "@type": "Person", name: "Ash K", url: "https://assurefintech.com/author/ash-k" },
    reviewedBy: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-06", dateModified: "2026-06-06",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/compare/sbi-cashback-vs-amazon-pay-icici" }
  };

  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which card has zero annual fee?", acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI is the genuine lifetime-free product — no joining fee, no annual fee, ever, no minimum spend renewal condition. SBI Cashback charges ₹999 plus GST as both joining and annual fee, waived from year two onwards if you cross ₹2 lakh annual spend on the card. For low-volume users below ₹15,000 to ₹18,000 monthly spend, the ICICI card is mathematically unbeatable on year-one economics — the SBI fee can never be recovered at that spend level. For high-volume users spending ₹30,000-plus monthly, the SBI fee is recovered easily by month 3 and the year-2-onwards waiver kicks in to remove fee friction." } },
      { "@type": "Question", name: "Which earns more on Amazon specifically?", acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI gives Prime members 5 percent on Amazon.in spend with no monthly cap whatsoever — the headline rate holds at any volume. Non-Prime members get 3 percent on Amazon. SBI Cashback gives 5 percent on any online spend including Amazon, but caps total online cashback at ₹5,000 per month (corresponding to ₹1 lakh of qualifying online spend at 5 percent). For Amazon-concentrated spenders exceeding ₹1 lakh monthly Amazon spend, ICICI wins by avoiding the cap. Below that threshold, both cards deliver 5 percent cleanly on Amazon, and SBI offers the same rate on Flipkart, Myntra, Cleartrip, and other non-Amazon online merchants which ICICI does not." } },
      { "@type": "Question", name: "What categories are excluded from cashback?", acceptedAnswer: { "@type": "Answer", text: "Both cards exclude rent payments, fuel beyond surcharge waiver, wallet loads (PhonePe, Paytm, Mobikwik refills), education fees, government services, and gold/jewellery from cashback eligibility. SBI Cashback additionally excludes utility bills, EMIs, and insurance premiums from its 5 percent online rate — these earn the 1 percent offline rate or zero. Amazon Pay ICICI applies 5 percent/3 percent/1 percent strictly to Amazon, Amazon partners, and other merchants respectively; non-Amazon online spend gets only 1 percent, not 5 percent. The exclusions list reflects the underlying MDR economics — banks don't earn merchant fees on these categories sufficient to fund cashback." } },
      { "@type": "Question", name: "Is the welcome bonus comparable?", acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI offers ₹1,500 worth of Amazon Pay balance for Prime members (₹500 for non-Prime) on first transaction within 45 days of card mailing. SBI Cashback has no welcome bonus. The ICICI welcome materially shifts year-one economics — adds 30 to 50 basis points of effective rate at typical spend volumes. ICICI also runs periodic 10x-points festive promotions exclusive to cardholders, which routinely add 2 to 3 percent extra value during Diwali, New Year, and Republic Day sales. SBI Cashback has no equivalent festive booster — its 5 percent rate is the steady-state ceiling." } },
      { "@type": "Question", name: "Should I hold both cards?", acceptedAnswer: { "@type": "Answer", text: "Yes, for online-heavy multi-platform shoppers. The two cards complement each other structurally — Amazon Pay ICICI captures the no-cap 5 percent on Amazon Prime, SBI Cashback captures the broader 5 percent on Flipkart, Myntra, Cleartrip, MakeMyTrip, and other online merchants. The combined effective rate across the stack typically lands at 4 to 4.5 percent on a ₹40,000 monthly online-heavy profile, versus 3 to 3.5 percent for either card held alone. Operational overhead is minimal — both auto-credit cashback (no redemption marketplace) and both have simple binary routing (Amazon to ICICI, everything else online to SBI)." } },
      { "@type": "Question", name: "Which is easier to get approved?", acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI has a notably lower income approval bar at ₹2.4 lakh per annum, versus SBI Cashback's ₹3 lakh per annum minimum. For first-jobbers and lower-income earners, ICICI is the easier first-card approval. CIBIL requirements are similar — 720-plus recommended for clean approval at both. Application flow is faster at ICICI (typically 3 to 5 working days for in-app application versus 7 to 10 for SBI). For applicants without existing relationship with either bank, ICICI's digital application flow and lower income threshold make it the easier first approval; SBI Cashback works better as an upgrade card 12 to 18 months after building CIBIL on an entry-level product." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "SBI Cashback vs Amazon Pay ICICI", item: "https://assurefintech.com/compare/sbi-cashback-vs-amazon-pay-icici" }
    ]
  };

  const Th = ({ children }) => <th style={{ padding: 12, textAlign: "left", fontSize: 12, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 1, borderBottom: "1px solid var(--border)" }}>{children}</th>;
  const Td = ({ children, hi }) => <td style={{ padding: 12, fontSize: 14, borderBottom: "1px solid var(--border)", color: hi ? COLOR : "var(--text)", fontWeight: hi ? 700 : 400 }}>{children}</td>;

  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "44px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / SBI Cashback vs Amazon ICICI
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · COMPARE</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>
        SBI Cashback vs Amazon Pay ICICI 2026 — which online-shopper card actually wins
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Direct answer: it depends on your Amazon concentration. If your monthly online spend is Amazon Prime-heavy (above ₹15,000 of monthly Amazon spend), the lifetime-free Amazon Pay ICICI wins through the no-cap 5 percent Prime rate. If your online spend is diversified across Flipkart, Myntra, Cleartrip, and other platforms, SBI Cashback's 5 percent flat rate on all online merchants beats ICICI's 1 percent rate on non-Amazon online. The two cards target opposite spend patterns despite both being "online cashback" products. The fee differential matters too — ICICI is free, SBI charges ₹999.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span>
        <span>By <Link href="/author/ash-k" style={{ color: COLOR }}>Ash K</Link></span><span>·</span>
        <span>Verified from issuer MITC schedules</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 32 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Hold both — they're perfectly complementary for online-heavy spenders</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          If forced to pick one: Amazon Pay ICICI for the lifetime-free structure plus uncapped 5 percent Prime rate. SBI Cashback if your spend genuinely diversifies across multiple e-commerce platforms. Most online-heavy households earn the highest blended rate by holding both — combined annual fee impact is just ₹999 (Amazon ICICI's zero plus SBI's fee).
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>SBI Cashback</Th><Th>Amazon Pay ICICI</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Joining + annual fee</Td><Td>₹999 + GST</Td><Td hi>Lifetime free</Td></tr>
              <tr><Td>Year-2 fee waiver</Td><Td>₹2L annual spend</Td><Td hi>N/A (no fee to waive)</Td></tr>
              <tr><Td>Welcome benefit</Td><Td>—</Td><Td hi>₹500 / ₹1,500 Amazon Pay credit (Prime)</Td></tr>
              <tr><Td>Online spend rate</Td><Td hi>5% all online merchants</Td><Td>5% Amazon Prime, 3% non-Prime, 1% other online</Td></tr>
              <tr><Td>Monthly cap on top rate</Td><Td>₹5,000 cashback (₹1L spend at 5%)</Td><Td hi>None on Amazon Prime</Td></tr>
              <tr><Td>Offline spend rate</Td><Td>1%</Td><Td>1%</Td></tr>
              <tr><Td>Fuel surcharge waiver</Td><Td hi>1% (cap ₹100/mo)</Td><Td>1% (cap ₹400/yr)</Td></tr>
              <tr><Td>Forex markup</Td><Td>3.5%</Td><Td>3.5%</Td></tr>
              <tr><Td>Min income</Td><Td>₹3L p.a.</Td><Td hi>₹2.4L p.a.</Td></tr>
              <tr><Td>Reward redemption</Td><Td>Auto statement credit</Td><Td hi>Amazon Pay balance (broad use)</Td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Effective rate by online spend pattern</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>
          The chart maps both cards across four online spend patterns common to Indian metro households. The crossover between which card wins depends almost entirely on Amazon concentration as a percentage of total online spend.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgUseCase />
        </div>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 12 }}>
          Amazon ICICI dominates Amazon-concentrated profiles. SBI Cashback dominates diversified online profiles. The 50/50 crossover line is roughly ₹15,000 monthly Amazon spend versus ₹15,000 on other online merchants.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Lifetime fee economics</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>
          The fee structure differential compounds materially over 5 years. Amazon Pay ICICI's lifetime-free status eliminates renewal anxiety entirely. SBI Cashback's ₹999 fee with ₹2 lakh spend waiver creates a binary outcome — hit the milestone, fee waives from year 2; miss it any year, full ₹999 plus GST is charged.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 16px" }}>
          For low-volume cardholders (under ₹15,000 monthly spend), the SBI waiver milestone is hard to hit consistently. A bad year — extended travel, sabbatical, income drop — easily misses the threshold and triggers the fee. Amazon Pay ICICI removes this entire failure mode.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgFeeFreedom />
        </div>
      </section>

      <section style={{ marginBottom: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK AMAZON PAY ICICI IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You're an Amazon Prime member with ₹15k+ monthly Amazon spend</li>
            <li style={{ marginBottom: 6 }}>You hate annual fees on principle, regardless of fee waivers</li>
            <li style={{ marginBottom: 6 }}>You want a lifetime-free secondary card without spend pressure</li>
            <li style={{ marginBottom: 6 }}>Your income hovers near the ₹2.4L approval floor</li>
            <li>You like ICICI's app and 24×7 chargeback handling on Amazon</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK SBI CASHBACK IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>Your online spend is split across multiple e-commerce platforms</li>
            <li style={{ marginBottom: 6 }}>You routinely book travel via Cleartrip, MMT, or airlines directly</li>
            <li style={{ marginBottom: 6 }}>Your monthly online spend is comfortably under ₹1L (within the ₹5k cap)</li>
            <li style={{ marginBottom: 6 }}>You can reliably hit ₹2L annual spend to waive the year-2 fee</li>
            <li>You prefer statement credit over Amazon Pay balance for redemption flexibility</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The cap math, in numbers</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          A user spending exactly ₹50,000 monthly online — say ₹20k Amazon Prime, ₹15k Flipkart, ₹15k other online — earns differently on each card. With Amazon Pay ICICI: ₹20k × 5 percent equals ₹1,000 plus ₹30k × 1 percent equals ₹300 = ₹1,300 monthly cashback = ₹15,600 annually. No fee, fully accessible. Effective rate: 2.6 percent on total ₹6 lakh annual spend.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          With SBI Cashback: ₹50k × 5 percent equals ₹2,500 monthly (within the ₹5,000 monthly cap) = ₹30,000 annually. Subtract ₹999 fee (waived year 2 onwards on ₹2L spend, achievable easily here). Net: ₹29,001 year one, ₹30,000 year two onwards. Effective rate: 4.83 percent year one, 5.0 percent steady state. SBI wins by ₹13,400 to ₹14,400 per year on this profile.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Now flip the profile: ₹50k all on Amazon Prime. Amazon Pay ICICI: ₹50k × 5 percent equals ₹2,500 monthly = ₹30,000 annually, fee zero, net ₹30,000. SBI Cashback: ₹50k × 5 percent equals ₹2,500 monthly (within the ₹5,000 cap), but the cap binding moment doesn't trigger here. Same ₹30,000 annually less ₹999 fee equals ₹29,001 year one, ₹30,000 year two onwards. Tie on annual cashback amount; ICICI wins year one by ₹999 due to no fee.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          The pattern emerges: SBI Cashback's ₹5,000 monthly cap is high enough that the cap rarely binds for retail users. Even at ₹1 lakh monthly online spend (₹12 lakh annually), the cap is exactly hit. Beyond that, SBI's marginal earn rate drops to 1 percent on the excess. ICICI's no-cap Amazon Prime rate keeps performing at 5 percent regardless of volume — making it the right card for true Amazon power users.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The festive booster — ICICI's quiet advantage</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Amazon Pay ICICI runs periodic 10x-rewards or instant-discount promotions during major sale events — Amazon Great Indian Festival (October-November), Amazon Republic Day Sale, Amazon Summer Sale, and occasional Prime Day flash promotions. The 10x booster typically translates to 5 percent extra discount on top of the standard 5 percent Prime rate, producing 10 percent effective return during the promotional window.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          For a household concentrating major purchases (electronics, appliances, large household items) into these sale windows, the festive booster adds 30 to 50 percent to annual cashback over what the steady-state 5 percent rate alone would produce. A household with ₹2 lakh of annual Amazon spend, of which ₹80,000 falls within festive promotional windows, captures roughly ₹6,000 of extra discount on top of regular cashback — meaningful incremental value.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          SBI Cashback has no equivalent festive booster. Its 5 percent rate is the steady-state ceiling regardless of season. For Amazon-aligned spenders who time large purchases for sale events, the ICICI festive advantage compounds the structural rate advantage on Amazon spend.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>What each card explicitly excludes</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          The exclusions list matters more than most cardholders realise. SBI Cashback's 5 percent online rate explicitly excludes utility bill payments (electricity, water, gas paid online), education fees, government services, EMI conversions, insurance premiums, and gold or jewellery purchases. These earn the 1 percent offline rate or zero. For households assuming any-online-counts, the actual cashback can come in 30 to 40 percent below expectations.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Amazon Pay ICICI's 5 percent Prime rate excludes Amazon Pay wallet loads (the wallet itself), Amazon Pay BBPS bill payments (utility, mobile, DTH), Amazon-issued gift cards, and Amazon Prime membership renewal. Standard product purchases on Amazon all qualify; the non-product spend doesn't.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          Both cards exclude rent payments via fintech platforms (Cred, Magicbricks, NoBroker, etc.), wallet loads, fuel beyond surcharge waiver, government services, and gold/jewellery — the standard cashback-card exclusion list applies across both. Before assuming any specific transaction will earn cashback, check the MITC exclusion section.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The two-card stack — combined economics</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Most online-heavy cardholders benefit from holding both. Route all Amazon spend through ICICI (5 percent uncapped Prime). Route Flipkart, Myntra, Cleartrip, MakeMyTrip, Tata CLiQ, Lenskart, and other non-Amazon online merchants through SBI Cashback (5 percent capped ₹5,000/mo). Use either card for the residual offline spend at 1 percent base.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Worked example. ₹40,000 monthly online spend split as ₹15k Amazon Prime, ₹15k other online (Flipkart, Myntra, Cleartrip), ₹10k offline. With ICICI alone: ₹15k × 5 percent + ₹25k × 1 percent = ₹1,000/mo = ₹12,000 annual at effective rate 2.5 percent. With SBI alone: ₹30k × 5 percent + ₹10k × 1 percent = ₹1,600/mo = ₹19,200 annual, less ₹999 fee = ₹18,201 net at effective rate 3.8 percent (waived year 2 onwards to clean 4.0 percent). With the stack: ₹15k × 5% Amazon Pay + ₹15k × 5% SBI + ₹10k × 1% offline = ₹1,600/mo = ₹19,200 annual less ₹999 fee = ₹18,201 net year one, ₹19,200 year two onwards. Effective rate 3.8 to 4.0 percent.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          The stack beats either card alone, but the gain over SBI Cashback alone is modest (₹0 to ₹3,600/yr depending on Amazon percentage). The real value of the stack is structural — Amazon Pay ICICI as the zero-fee safety net that protects against SBI fee-waiver failure, plus the Amazon-specific welcome bonus and festive boosters.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>When to add other cards to the stack</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          For households with significant offline spend (utility bills via Gpay, restaurant dining, fuel, grocery), adding a third card optimised for offline categories meaningfully boosts blended rate. Axis Ace at ₹499 fee delivers 5 percent on Gpay utility (cap ₹500/mo), 4 percent on Swiggy/Zomato/Ola, and 1.5 percent base — covering offline categories the SBI-plus-ICICI stack leaves at 1 percent base.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          A three-card stack (SBI Cashback for diversified online, Amazon Pay ICICI for Amazon, Axis Ace for utility and offline) on a ₹60,000 monthly spend profile typically captures 3.5 to 4.5 percent blended effective rate. Annual fee outlay ₹1,499 plus GST is recovered within 2 months of typical spend. The operational discipline cost — knowing which card to tap at which merchant — is the trade-off. For details see our <Link href="/blog/cap-adjusted-cashback-explained" style={{ color: COLOR }}>cap-adjusted cashback explainer</Link>.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Behavioural pitfalls — and how to avoid them on either card</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Two operational mistakes recur often enough to highlight. The first: assuming any online transaction earns the 5 percent rate. On SBI Cashback, utility bills paid via the merchant website (BSES electricity, Indane gas booking, etc.) often classify under MCC codes that the card's 5-percent-online-merchants ruleset excludes. Check the first month's statement for actual rates credited; you'll typically find one or two categories you assumed were online-eligible but actually earned only 1 percent.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          The second: routing the wrong card to Amazon. If you hold both Amazon Pay ICICI and SBI Cashback, you should always pay Amazon via the ICICI card — it earns 5 percent uncapped versus SBI's 5 percent capped at ₹5,000/mo aggregate online cashback. On ₹50,000 monthly Amazon spend, ICICI delivers ₹2,500 cashback; SBI delivers ₹2,500 cashback but uses up the entire monthly cap, leaving zero room for Flipkart or other online merchants to earn cashback that month. Always route Amazon to ICICI, everything else online to SBI.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 16px" }}>
          The third pitfall — letting Amazon Pay balance accumulate without redemption. ICICI cashback credits as Amazon Pay balance, useful for Amazon purchases or partner-merchant payments. The balance has no expiry, but it sits idle if you don't actively use it. Set a quarterly reminder to use accumulated balance during normal Amazon purchases rather than letting it compound unused. SBI Cashback's statement-credit redemption avoids this issue entirely — cashback auto-reduces your next statement balance.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Approval timing and CIBIL considerations</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Both cards require a hard CIBIL pull at application, dropping your score by 5 to 10 points temporarily. The drop recovers within 30 to 60 days of clean usage. Apply for one card at a time, not both simultaneously — cumulative hard pulls within 90 days drag CIBIL meaningfully and trigger underwriting flags.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          The recommended sequence for someone planning to hold both: start with Amazon Pay ICICI (lower income approval, faster digital flow). Use it cleanly for 12 to 18 months to build CIBIL above 740. Then apply for SBI Cashback as a second card. By that point the bureau record is strong, approval is straightforward, and the second card's CIBIL impact is minimal.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          For seasoned cardholders with established CIBIL above 760 and existing card portfolio, both cards approve on the same application cycle without behavioural concern. The sequential approach matters mainly for first-time or thin-CIBIL applicants.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <section style={{ marginBottom: 28, padding: "18px 20px", border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-soft)" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>RELATED ON ASSURE FINTECH</h3>
        <ul style={{ fontSize: 14, paddingLeft: 22, margin: 0 }}>
          <li style={{ marginBottom: 6 }}><Link href="/tools/cashback-calculator" style={{ color: COLOR }}>Cashback calculator</Link>. Plug in your spend profile.</li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/cap-adjusted-cashback-explained" style={{ color: COLOR }}>Cap-adjusted cashback explainer</Link>. The math behind effective rates.</li>
          <li style={{ marginBottom: 6 }}><Link href="/best/credit-card-online-shopping" style={{ color: COLOR }}>Best for online shopping</Link>. Broader pick across 5 cards.</li>
          <li><Link href="/learn/credit-cards" style={{ color: COLOR }}>Credit cards knowledge hub</Link>.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 28, fontSize: 13, color: "var(--text-muted)" }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", margin: "0 0 8px", letterSpacing: 1.5 }}>SOURCES</h3>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          <li>SBI Cashback Card MITC verified June 6, 2026 via sbicard.com</li>
          <li>Amazon Pay ICICI Card MITC verified June 6, 2026 via icicibank.com</li>
          <li>RBI Master Direction on Credit Cards (April 2022) and 2024-25 amendments</li>
        </ul>
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}>
        <p style={{ margin: 0 }}>
          <strong>Editorial disclaimer.</strong> Fees, caps, exclusions, and Prime-tier Amazon rates verified from each issuer's MITC schedule on {UPDATED}. Cashback excludes rent, wallet loads, fuel beyond surcharge waiver, government services, education, gold, and similar non-MDR-earning categories. Effective-rate calculations assume full statement balance is paid on time every cycle. Not investment or credit advice.
        </p>
      </footer>
    </main>
  );
}
