import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Amex Platinum Travel vs HDFC Diners Privilege — premium card showdown for 2026",
  description: "Amex Platinum Travel vs HDFC Diners Privilege — premium card showdown for 2026",
  alternates: { canonical: "/compare/compare-amex-platinum-travel-vs-hdfc-diners-privilege" },
  openGraph: {
    title: "Amex Platinum Travel vs HDFC Diners Privilege — premium card showdown for 2026",
    description: "Amex Platinum Travel vs HDFC Diners Privilege — premium card showdown for 2026",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// Tier 3 Batch 3 · File 6/15 · Super-premium travel
// URL: /compare/amex-platinum-travel-vs-hdfc-diners-privilege

const COLOR = "#7C3AED";
const UPDATED = "June 6, 2026";

const SvgValueLadder = () => (
  <svg viewBox="0 0 520 200" role="img" aria-label="Annual benefit value at typical premium-card spend" style={{ width: "100%" }}>
    <text x="10" y="18" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text-muted)">ANNUAL VALUE AT ₹6L SPEND — REWARDS + LOUNGES + VOUCHERS</text>
    {[
      { item: "Reward earnings", amex: 18000, diners: 36000 },
      { item: "Lounge access value", amex: 16000, diners: 24000 },
      { item: "Welcome / milestone vouchers", amex: 25000, diners: 12000 },
      { item: "Total estimated", amex: 59000, diners: 72000 }
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${36 + i * 36})`}>
        <text x="10" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.item}</text>
        <rect x="220" y="2" width={r.amex / 800} height="11" fill="#9ca3af" />
        <text x={225 + r.amex / 800} y="11" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">₹{r.amex.toLocaleString("en-IN")}</text>
        <rect x="220" y="16" width={r.diners / 800} height="11" fill={COLOR} />
        <text x={225 + r.diners / 800} y="25" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>₹{r.diners.toLocaleString("en-IN")}</text>
      </g>
    ))}
  </svg>
);

export default function CompareAmexPlatinumVsDinersPrivilege() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which card has wider acceptance?", acceptedAnswer: { "@type": "Answer", text: "HDFC Diners Privilege runs on Diners Club International, which has expanded substantially through the Discover and Mastercard alliance — acceptance is now broadly comparable to Visa/Mastercard at major merchants. Amex Platinum Travel runs on the American Express network, which still faces patchier acceptance at smaller Indian merchants and some online portals. For everyday Indian retail, Diners is more reliable; for international hotels and premium retail, both are strong." } },
      { "@type": "Question", name: "How do reward currencies differ?", acceptedAnswer: { "@type": "Answer", text: "Amex Membership Rewards points transfer 1:1 to several airline programmes (KrisFlyer, Marriott Bonvoy via 2:3) and 1:0.5 for redemption against statement credit. Diners Reward Points transfer 1:1 to most airline FFP partners and 1:0.5 to SmartBuy redemptions. The headline rate on Diners is roughly twice as high on most spend (10 RP per ₹150) versus Amex (1 MR per ₹50, with category multipliers), making Diners more rewarding on raw spend volume." } },
      { "@type": "Question", name: "Are the welcome benefits really comparable?", acceptedAnswer: { "@type": "Answer", text: "Amex Platinum Travel offers ₹10,000 worth of Taj/SeleQtions/Vivanta vouchers on first 4 transactions, plus ₹15,000 vouchers at ₹1.9L spend milestone, plus ₹40,000 vouchers at ₹4L spend milestone. Diners Privilege offers a 10,000 RP welcome bonus + ₹5,000 voucher choice at the ₹1L spend milestone. On absolute first-year value, Amex's voucher stack outweighs Diners — though only if you genuinely use the Taj voucher set." } },
      { "@type": "Question", name: "What are the actual fees?", acceptedAnswer: { "@type": "Answer", text: "Amex Platinum Travel: ₹5,000 + GST joining and annual fee, no waiver. Diners Privilege: ₹2,500 + GST annual fee, waived from year two onwards on ₹3L annual spend. Diners is structurally cheaper for the typical mid-affluent user; Amex is fixed-cost premium tier. Both offer airline-mile-equivalent value far exceeding the fee, conditional on actually spending and redeeming." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "Amex Platinum Travel vs HDFC Diners Privilege", item: "https://assurefintech.com/compare/amex-platinum-travel-vs-hdfc-diners-privilege" }
    ]
  };

  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Amex Platinum Travel vs HDFC Diners Privilege — premium card showdown 2026",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-06", dateModified: "2026-06-06",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const Th = ({ children }) => <th style={{ padding: 12, textAlign: "left", fontSize: 12, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 1, borderBottom: "1px solid var(--border)" }}>{children}</th>;
  const Td = ({ children, hi }) => <td style={{ padding: 12, fontSize: 14, borderBottom: "1px solid var(--border)", color: hi ? COLOR : "var(--text)", fontWeight: hi ? 700 : 400 }}>{children}</td>;

  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "48px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / Amex Platinum Travel vs Diners Privilege
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · COMPARE · SUPER-PREMIUM</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>
        Amex Platinum Travel vs HDFC Diners Privilege — premium card showdown for 2026
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Both cards target the ₹15-25L income band and reward serious spenders. Diners has a higher headline rate and broader Indian acceptance; Amex stacks bigger first-year voucher value but demands more fee-flexibility. The right pick swings on whether your year-one spend will hit the milestone bars.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span><span>By Ash K</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Diners Privilege for everyday-spend optimisation; Amex for milestone-driven travellers</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          If your monthly spend is split across many merchants and you want raw earn rate, Diners' 10 RP per ₹150 wins. If you can hit ₹4L+ in 12 months and will use Taj/IHCL vouchers, Amex Platinum Travel returns roughly ₹65,000 in voucher value on top of points — a higher first-year ceiling at the cost of higher fee.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>Amex Platinum Travel</Th><Th>HDFC Diners Privilege</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Joining + annual fee</Td><Td>₹5,000 + GST (no waiver)</Td><Td hi>₹2,500 + GST (₹3L waiver)</Td></tr>
              <tr><Td>Welcome voucher</Td><Td hi>₹10,000 Taj/SeleQtions</Td><Td>10,000 RP + ₹5,000 voucher (at ₹1L spend)</Td></tr>
              <tr><Td>Milestone benefits</Td><Td hi>₹15,000 + ₹40,000 voucher tiers</Td><Td>1k bonus pts per ₹1L every quarter</Td></tr>
              <tr><Td>Reward rate</Td><Td>1 MR / ₹50 (~2% on travel)</Td><Td hi>10 RP / ₹150 (~3.3% effective)</Td></tr>
              <tr><Td>Best redemption value</Td><Td>₹1.00 — Taj voucher</Td><Td hi>₹1.00 — SmartBuy travel + airlines</Td></tr>
              <tr><Td>International lounges/yr</Td><Td>4 (Priority Pass)</Td><Td hi>6 (Priority Pass + DC card)</Td></tr>
              <tr><Td>Domestic lounges/yr</Td><Td>8</Td><Td hi>Unlimited Diners</Td></tr>
              <tr><Td>Network</Td><Td>American Express</Td><Td hi>Diners Club International</Td></tr>
              <tr><Td>Forex markup</Td><Td hi>2.0%</Td><Td>2.0%</Td></tr>
              <tr><Td>Min income</Td><Td hi>₹15L p.a.</Td><Td>₹18L p.a.</Td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Annual benefit stack at ₹6L spend</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgValueLadder />
        </div>
      </section>

      <section style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK HDFC DINERS PRIVILEGE IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You spend ₹3-6L annually with broad merchant mix.</li>
            <li style={{ marginBottom: 6 }}>You value unlimited domestic lounges over voucher stacks.</li>
            <li style={{ marginBottom: 6 }}>You want lower fee with realistic waiver.</li>
            <li>You travel international 1-2x/year.</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK AMEX PLATINUM TRAVEL IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You can spend ₹4L within 12 months to unlock the milestone vouchers.</li>
            <li style={{ marginBottom: 6 }}>You actually stay at Taj / IHCL / Vivanta hotels.</li>
            <li style={{ marginBottom: 6 }}>Your everyday merchants accept Amex (Mumbai/Delhi/Bangalore tier 1 mostly do).</li>
            <li>You value Amex concierge and travel-insurance riders.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Fee-justification thresholds</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Diners earns its ₹2,500 fee back at roughly ₹75,000 of qualifying spend through point value alone. Amex needs roughly ₹2.5L of spend before the rewards-only return covers the ₹5,000 fee, but the voucher stack changes the maths — first-year voucher haul of ₹65,000 means the ₹5,000 fee is paid back in the first 30 days for anyone genuinely using the Taj vouchers.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          For premium-card economics see our <Link href="/learn/credit-cards" style={{ color: COLOR }}>credit-cards hub</Link>; for the broader landscape including Magnus and other ₹10L-class cards, the <Link href="/compare/hdfc-regalia-vs-axis-magnus" style={{ color: COLOR }}>Regalia vs Magnus comparison</Link> covers the rung above.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}>
        Editorial disclaimer — fees, milestone schedules, and reward valuations are sourced from issuer MITC and verified on {UPDATED}. Voucher and lounge benefits change; reconfirm before applying. Not investment advice.
      </footer>
    </main>
  );
}
