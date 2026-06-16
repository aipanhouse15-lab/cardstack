import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Flipkart Axis vs Amazon Pay ICICI — which platform-native card pays more in 2026",
  description: "Flipkart Axis vs Amazon Pay ICICI — which platform-native card pays more in 2026",
  alternates: { canonical: "/compare/compare-flipkart-axis-vs-amazon-pay-icici" },
  openGraph: {
    title: "Flipkart Axis vs Amazon Pay ICICI — which platform-native card pays more in 2026",
    description: "Flipkart Axis vs Amazon Pay ICICI — which platform-native card pays more in 2026",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// Tier 3 Batch 3 · File 4/15 · E-commerce co-brand cards
// URL: /compare/flipkart-axis-vs-amazon-pay-icici

const COLOR = "#7C3AED";
const UPDATED = "June 6, 2026";

const SvgEcomRevenue = () => (
  <svg viewBox="0 0 520 220" role="img" aria-label="Annual cashback by online platform mix" style={{ width: "100%" }}>
    <text x="10" y="18" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text-muted)">ANNUAL CASHBACK BY E-COM PLATFORM MIX (₹40k/MONTH ONLINE)</text>
    {[
      { mix: "100% Amazon Prime", flipkart: 4800, icici: 24000 },
      { mix: "100% Flipkart/Myntra", flipkart: 24000, icici: 4800 },
      { mix: "70/30 Amazon-heavy", flipkart: 11200, icici: 17400 },
      { mix: "50/50 split", flipkart: 14400, icici: 14400 }
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${36 + i * 40})`}>
        <text x="10" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.mix}</text>
        <rect x="180" y="2" width={r.flipkart / 100} height="11" fill="#9ca3af" />
        <text x={185 + r.flipkart / 100} y="11" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">₹{r.flipkart.toLocaleString("en-IN")}</text>
        <rect x="180" y="16" width={r.icici / 100} height="11" fill={COLOR} />
        <text x={185 + r.icici / 100} y="25" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>₹{r.icici.toLocaleString("en-IN")}</text>
      </g>
    ))}
    <g transform="translate(380, 200)">
      <rect x="0" y="0" width="10" height="10" fill="#9ca3af" /><text x="14" y="9" fontFamily="system-ui" fontSize="10" fill="var(--text)">Flipkart Axis</text>
      <rect x="100" y="0" width="10" height="10" fill={COLOR} /><text x="114" y="9" fontFamily="system-ui" fontSize="10" fill="var(--text)">Amazon ICICI</text>
    </g>
  </svg>
);

export default function CompareFlipkartAxisVsAmazonIcici() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which is the true 'lifetime free' card?", acceptedAnswer: { "@type": "Answer", text: "Amazon Pay ICICI is the genuine lifetime-free product — no joining fee, no annual fee, ever. Flipkart Axis charges ₹500 + GST as joining and annual fee, waived on ₹2L annual spend. For someone spending under ₹15k/mo on either platform, Amazon ICICI's zero-fee structure is hard to argue against; for committed Flipkart shoppers above the waiver threshold, the annual fee effectively disappears." } },
      { "@type": "Question", name: "Can I hold both cards simultaneously?", acceptedAnswer: { "@type": "Answer", text: "Yes, and many savvy users do. The two cards target opposite ecosystems and a stacked strategy — Amazon ICICI for Amazon, Flipkart Axis for Flipkart/Myntra/Cleartrip — captures 5% on whichever platform the deal is. Both are issued under your single CIBIL profile so do not exceed about three active credit cards in total to keep your utilisation healthy." } },
      { "@type": "Question", name: "What earns the 4% rate on Flipkart Axis?", acceptedAnswer: { "@type": "Answer", text: "Flipkart Axis pays 4% on a curated 'preferred merchants' list — Cleartrip, PVR, MakeMyTrip, Cure.fit, Swiggy, and Uber as of 2026 — capped at ₹7,000 cashback per year on this category. The 5% Flipkart/Myntra/2GUD/Tata CLiQ rate is capped at ₹4,000 cashback per year. Together that is ₹11,000 of accelerated cashback annually before falling to 1.5% base on remaining spend." } },
      { "@type": "Question", name: "Which has better festive-sale offers?", acceptedAnswer: { "@type": "Answer", text: "Both run instant-discount and no-cost-EMI offers during BBD, GIF, Republic Day, and Diwali sales, typically 10% instant off up to ₹1,000-1,500 per transaction on minimum cart values. The platform-card pairing usually offers stackable instant discount + cashback during major sales, making the platform-native card the strictly better choice during festive windows on its home turf." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "Flipkart Axis vs Amazon Pay ICICI", item: "https://assurefintech.com/compare/flipkart-axis-vs-amazon-pay-icici" }
    ]
  };

  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Flipkart Axis vs Amazon Pay ICICI — which platform-native card pays more in 2026",
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
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / Flipkart Axis vs Amazon ICICI
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · COMPARE · CO-BRAND</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>
        Flipkart Axis vs Amazon Pay ICICI — which platform-native card pays more in 2026
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Co-brand cashback cards reward ecosystem loyalty. Pick whichever platform you actually shop on — the cross-platform earnings collapse to base rate. The interesting case is the household running both ecosystems simultaneously.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span><span>By Ash K</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Hold both — they are perfectly complementary</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          If forced to pick one: Amazon Pay ICICI for the lifetime-free structure plus Prime 5% with no cap; Flipkart Axis if your spend leans Flipkart/Myntra/Cleartrip. Most multi-platform households earn more by holding both — the combined annual fee impact is just ₹500 + GST after Amazon ICICI's zero charge.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>Flipkart Axis</Th><Th>Amazon Pay ICICI</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Joining + annual fee</Td><Td>₹500 + GST (₹2L spend waiver)</Td><Td hi>Lifetime free</Td></tr>
              <tr><Td>Welcome benefit</Td><Td hi>₹600 cashback + Curefit + Swiggy vouchers</Td><Td>₹500 / ₹1,500 Amazon Pay credit</Td></tr>
              <tr><Td>Top earn rate</Td><Td>5% Flipkart/Myntra (cap ₹4k/yr)</Td><Td hi>5% Amazon (Prime), no cap</Td></tr>
              <tr><Td>Secondary rate</Td><Td hi>4% Cleartrip/PVR/Uber/Swiggy (cap ₹7k/yr)</Td><Td>3% Amazon non-Prime / partner brands</Td></tr>
              <tr><Td>Base earn rate</Td><Td hi>1.5%</Td><Td>1%</Td></tr>
              <tr><Td>Forex markup</Td><Td hi>3.5%</Td><Td>3.5%</Td></tr>
              <tr><Td>Lounge benefit</Td><Td>4 domestic per year (₹50k spend)</Td><Td hi>None</Td></tr>
              <tr><Td>Reward credit type</Td><Td>Statement cashback</Td><Td hi>Amazon Pay balance</Td></tr>
              <tr><Td>Min income</Td><Td>₹3L p.a.</Td><Td hi>₹2.4L p.a.</Td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Annual earnings across platform mixes</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgEcomRevenue />
        </div>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 12 }}>
          The crossover line is roughly 50/50 platform mix. Below that, the heavier-weighted platform's native card always wins; above 70%, the difference is dramatic — ₹19,200/yr on a 100%-skewed profile.
        </p>
      </section>

      <section style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK AMAZON PAY ICICI IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You are a Prime member — the 5% rate doubles vs non-Prime (3%).</li>
            <li style={{ marginBottom: 6 }}>You want a no-fee secondary card without renewal anxiety.</li>
            <li style={{ marginBottom: 6 }}>Your income hovers near the ₹2.4L approval floor — easier eligibility.</li>
            <li>You buy on Amazon multiple times per week.</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK FLIPKART AXIS IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You concentrate fashion + electronics on Flipkart and Myntra.</li>
            <li style={{ marginBottom: 6 }}>You travel via Cleartrip and want the 4% bookings rate.</li>
            <li style={{ marginBottom: 6 }}>You want a domestic lounge benefit on a sub-₹500 fee card.</li>
            <li>You can clear the ₹2L spend bar to waive year-2 fee.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Why the stack is rational</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Holding both cards lets you always pay with the higher-rate option — Amazon spend gets 5% via ICICI, Flipkart spend gets 5% via Axis, and any fallback merchant takes the higher base rate (Flipkart Axis 1.5% beats Amazon ICICI 1%). Behavioural cost is checking which app you are paying from before tapping; CIBIL cost is one extra line on your report, which actually helps utilisation if you keep balances at zero.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          The full mathematics is documented in our <Link href="/blog/cap-adjusted-cashback-explained" style={{ color: COLOR }}>cap-adjusted cashback guide</Link>. To model your specific spend, our <Link href="/tools/cashback-calculator" style={{ color: COLOR }}>cashback calculator</Link> compares both cards in 30 seconds.
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
        Editorial disclaimer — partner-merchant lists, caps, and welcome benefits sourced from issuer MITC and verified on {UPDATED}. Co-brand card terms shift with platform partnership renewals; reconfirm before applying. Not investment advice.
      </footer>
    </main>
  );
}
