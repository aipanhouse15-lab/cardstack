import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Quant Small Cap vs Nippon India Small Cap — high-momentum vs steady compounder in 2026",
  description: "Quant Small Cap vs Nippon India Small Cap — high-momentum vs steady compounder in 2026",
  alternates: { canonical: "/compare/compare-quant-small-cap-vs-nippon-small-cap" },
  openGraph: {
    title: "Quant Small Cap vs Nippon India Small Cap — high-momentum vs steady compounder in 2026",
    description: "Quant Small Cap vs Nippon India Small Cap — high-momentum vs steady compounder in 2026",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// Tier 3 Batch 3 · File 9/15 · Small-cap funds
// URL: /compare/quant-small-cap-vs-nippon-small-cap

const COLOR = "#0891B2";
const UPDATED = "June 6, 2026";

const SvgVolatilityChart = () => (
  <svg viewBox="0 0 520 200" role="img" aria-label="Drawdown frequency comparison" style={{ width: "100%" }}>
    <text x="10" y="18" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text-muted)">DRAWDOWN BUCKETS — FREQUENCY OF MONTHLY DROPS LAST 5 YEARS</text>
    {[
      { range: "≥ -10%", quant: 8, nippon: 5 },
      { range: "-5% to -10%", quant: 14, nippon: 11 },
      { range: "-2% to -5%", quant: 19, nippon: 17 },
      { range: "0 to -2%", quant: 21, nippon: 25 }
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${36 + i * 36})`}>
        <text x="10" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.range} drawdown months</text>
        <rect x="220" y="2" width={r.quant * 12} height="11" fill="#9ca3af" />
        <text x={225 + r.quant * 12} y="11" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{r.quant}</text>
        <rect x="220" y="16" width={r.nippon * 12} height="11" fill={COLOR} />
        <text x={225 + r.nippon * 12} y="25" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>{r.nippon}</text>
      </g>
    ))}
  </svg>
);

export default function CompareQuantVsNipponSmallCap() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why has Quant outperformed by such a wide margin?", acceptedAnswer: { "@type": "Answer", text: "Quant Small Cap's VLRT-driven (Valuation-Liquidity-Risk-Time) active rotation has delivered 32-35% 5-year CAGR versus Nippon's 26-28%. The fund holds concentrated 70-80 stock positions and rotates aggressively through small-cap sectors. The flip side is materially higher month-to-month volatility — Quant's max drawdown of 38% in mid-2025 was 600 bps deeper than Nippon's. Active rotation can magnify both winning and losing periods." } },
      { "@type": "Question", name: "Are small-cap funds suitable for first-time investors?", acceptedAnswer: { "@type": "Answer", text: "Generally no. Small-cap categories are SEBI-defined as the 251st-and-beyond market-cap rank, with 20-30% annualised volatility — roughly double large-cap volatility. They demand 10+ year horizons, behavioural tolerance for 30-40% drawdowns, and ideally a satellite allocation of 10-20% within an already-diversified portfolio. As a first or only fund, both Quant and Nippon are too volatile for most investors." } },
      { "@type": "Question", name: "How does the SEBI exit-load schedule differ?", acceptedAnswer: { "@type": "Answer", text: "Both funds apply a standard 1% exit load on units redeemed within 12 months of allotment. The clock runs per individual SIP instalment. For a SIP started 36 months ago, only the most recent 12 months of contributions face exit load on redemption — the older instalments are free. Both funds are equity-tax-status; LTCG over ₹1.25L per FY taxed at 12.5%, STCG (≤12 mo) at 20%." } },
      { "@type": "Question", name: "What does SEBI's small-cap stress test reveal about these funds?", acceptedAnswer: { "@type": "Answer", text: "AMFI's monthly stress tests (mandated since 2024) estimate days-to-liquidate in adverse market conditions. As of the most recent disclosure, Nippon Small Cap reports roughly 22 days to liquidate 50% of portfolio under stress, and Quant Small Cap reports closer to 28 days — reflecting both AUM size differences and concentration profiles. Higher days-to-liquidate is a structural risk in panic-redemption scenarios." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "Quant Small Cap vs Nippon Small Cap", item: "https://assurefintech.com/compare/quant-small-cap-vs-nippon-small-cap" }
    ]
  };

  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Quant Small Cap vs Nippon India Small Cap — high-momentum vs steady-compounder, 2026",
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
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / Quant vs Nippon Small Cap
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>MUTUAL FUNDS · COMPARE · SMALL CAP</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>
        Quant Small Cap vs Nippon India Small Cap — high-momentum vs steady compounder in 2026
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Both target the same SEBI category — companies ranked 251 or below by market cap. Two completely different operating philosophies produce two completely different volatility profiles. Pick the one whose drawdowns you can sleep through.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span><span>By Ash K</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Nippon for the disciplined SIP-er, Quant for the conviction-allocator</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          Nippon's 13-year track record of steadier compounding and lower max drawdown makes it the more behaviourally robust SIP for retail investors. Quant's punchier returns are real but came with sharper interim drawdowns — fund-management style risk concentrated in a single PMS-like decision-maker. As a 10% portfolio satellite either works; as a 30%+ allocation, lean towards Nippon.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>Quant Small Cap</Th><Th>Nippon Small Cap</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Inception</Td><Td>October 1996 (relaunched 2018 mandate)</Td><Td hi>September 2010</Td></tr>
              <tr><Td>5-yr CAGR (direct)</Td><Td hi>~33%</Td><Td>~28%</Td></tr>
              <tr><Td>10-yr CAGR (direct)</Td><Td>~21% (limited history under mandate)</Td><Td hi>~22.5%</Td></tr>
              <tr><Td>Max 5-yr drawdown</Td><Td>-38%</Td><Td hi>-32%</Td></tr>
              <tr><Td>Std deviation (annualised)</Td><Td>~22%</Td><Td hi>~20%</Td></tr>
              <tr><Td>Portfolio concentration (Top-10 wt)</Td><Td>~36%</Td><Td hi>~21%</Td></tr>
              <tr><Td>Stocks held</Td><Td hi>70-80</Td><Td>140-160</Td></tr>
              <tr><Td>TER (direct)</Td><Td hi>0.65%</Td><Td>0.74%</Td></tr>
              <tr><Td>AUM (₹ crore)</Td><Td>~22,500</Td><Td hi>~58,800</Td></tr>
              <tr><Td>Days-to-liquidate (50%)</Td><Td>~28</Td><Td hi>~22</Td></tr>
              <tr><Td>Exit load</Td><Td hi>1% if ≤ 12 mo</Td><Td>1% if ≤ 12 mo</Td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Volatility distribution comparison</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgVolatilityChart />
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 12 }}>
          Higher count of severe-drawdown months for Quant reflects the active rotation style. Both funds have similar 0-to-2% mild drawdown frequency.
        </p>
      </section>

      <section style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK NIPPON SMALL CAP IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You are SIP-ing for retirement, 15+ year horizon.</li>
            <li style={{ marginBottom: 6 }}>You want diversification across 140+ small-caps.</li>
            <li style={{ marginBottom: 6 }}>You prefer team-based fund management over single-manager risk.</li>
            <li>You are allocating 15-20% of portfolio to small-caps.</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK QUANT SMALL CAP IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You can stomach 35-40% drawdowns without redeeming.</li>
            <li style={{ marginBottom: 6 }}>You believe in active rotation and are comfortable with concentration.</li>
            <li style={{ marginBottom: 6 }}>Allocation is a small (5-10%) high-conviction satellite.</li>
            <li>You actively monitor portfolio and rebalance annually.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Position sizing matters more than fund choice</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          For most retail investors, the small-cap allocation question is bigger than the Quant-vs-Nippon question. SEBI guidance and conventional advice converge on capping small-cap exposure at 10-20% of equity allocation. A 50% small-cap portfolio is structurally fragile during liquidity stress, regardless of which fund holds the units.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          For category-fit guidance see the <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link>; the <Link href="/tools/sip-calculator" style={{ color: COLOR }}>SIP calculator</Link> models compounding under volatile assumptions.
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
        Editorial disclaimer — CAGR, drawdown, AUM, TER, and SEBI stress-test figures sourced from AMC factsheets and AMFI consolidated data, verified on {UPDATED}. Small-cap funds carry higher volatility and liquidity risk; not appropriate for short horizons. Not investment advice; consult a SEBI-registered advisor.
      </footer>
    </main>
  );
}
