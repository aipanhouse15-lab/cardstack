import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Mirae Asset ELSS Tax Saver vs SBI Long Term Equity — 80C face-off for 2026",
  description: "Mirae Asset ELSS Tax Saver vs SBI Long Term Equity — 80C face-off for 2026",
  alternates: { canonical: "/compare/compare-mirae-tax-saver-vs-sbi-long-term-equity" },
  openGraph: {
    title: "Mirae Asset ELSS Tax Saver vs SBI Long Term Equity — 80C face-off for 2026",
    description: "Mirae Asset ELSS Tax Saver vs SBI Long Term Equity — 80C face-off for 2026",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// Tier 3 Batch 3 · File 10/15 · ELSS funds
// URL: /compare/mirae-tax-saver-vs-sbi-long-term-equity

const COLOR = "#0891B2";
const UPDATED = "June 6, 2026";

const SvgTaxSaved = () => (
  <svg viewBox="0 0 520 200" role="img" aria-label="ELSS post-tax outcome at ₹1.5L annual investment" style={{ width: "100%" }}>
    <text x="10" y="18" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text-muted)">10-YEAR OUTCOME ON ₹1.5L/YEAR ELSS UNDER OLD REGIME</text>
    {[
      { row: "Pre-tax corpus (~14% CAGR)", mirae: 33.5, sbi: 30.4 },
      { row: "Tax saved (30% slab × 10 yrs)", mirae: 4.5, sbi: 4.5 },
      { row: "Effective post-tax wealth", mirae: 38.0, sbi: 34.9 },
      { row: "Effective return after lock-in", mirae: 16.4, sbi: 14.8 }
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${36 + i * 36})`}>
        <text x="10" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.row}</text>
        <rect x="220" y="2" width={r.mirae * 6} height="11" fill="#9ca3af" />
        <text x={225 + r.mirae * 6} y="11" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{r.row.includes("return") ? `${r.mirae.toFixed(1)}%` : `₹${r.mirae.toFixed(1)} L`}</text>
        <rect x="220" y="16" width={r.sbi * 6} height="11" fill={COLOR} />
        <text x={225 + r.sbi * 6} y="25" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>{r.row.includes("return") ? `${r.sbi.toFixed(1)}%` : `₹${r.sbi.toFixed(1)} L`}</text>
      </g>
    ))}
  </svg>
);

export default function CompareMiraeVsSbiElss() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is the lock-in mechanism on ELSS?", acceptedAnswer: { "@type": "Answer", text: "Each individual ELSS purchase has a 3-year lock-in starting from the purchase date — it is the only equity mutual fund category with built-in lock-in. For SIP investors, this means the unit batch from your January 2026 instalment unlocks January 2029, and so on for each monthly tranche. You cannot redeem partially before lock-in expires; switches between schemes are also blocked during lock-in." } },
      { "@type": "Question", name: "Are ELSS funds still attractive under the new tax regime?", acceptedAnswer: { "@type": "Answer", text: "ELSS funds claim Section 80C deduction up to ₹1.5L per FY only under the old regime. Under the default new regime ELSS gets no tax benefit and behaves like any other equity fund. If you have opted for the new regime, an ELSS fund offers no tax-saving advantage versus a flexi-cap or large-cap fund — so most new-regime investors prefer non-ELSS equity funds for the absence of lock-in." } },
      { "@type": "Question", name: "How does Mirae's portfolio differ from SBI's?", acceptedAnswer: { "@type": "Answer", text: "Mirae Asset ELSS Tax Saver Fund (renamed from Mirae Asset Tax Saver) leans large-cap with roughly 70% large-cap, 20% mid-cap, 10% small-cap exposure. SBI Long Term Equity Fund (formerly SBI Magnum Tax Gain) historically had a more multi-cap tilt with closer to 60% large-cap and stronger mid-cap conviction. Both stay within the SEBI ELSS mandate of minimum 80% equity, but the cap-curve differs and explains the variance in 5-year returns." } },
      { "@type": "Question", name: "Which has better post-tax outcomes?", acceptedAnswer: { "@type": "Answer", text: "Mirae has historically delivered roughly 200 bps higher CAGR (16.5% vs 14.5% over 5 years), so on absolute return Mirae wins. Both funds are equity-tax-treated post lock-in: LTCG over ₹1.25L per FY at 12.5%. Tax saved upfront under 80C is identical for both — ₹46,800 at 30% slab + 4% cess. The real differentiator is the gross-return CAGR, where Mirae has been pulling ahead since 2018." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "Mirae Tax Saver vs SBI Long Term Equity", item: "https://assurefintech.com/compare/mirae-tax-saver-vs-sbi-long-term-equity" }
    ]
  };

  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Mirae Asset ELSS Tax Saver vs SBI Long Term Equity — ELSS face-off for 80C, 2026",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-06", dateModified: "2026-06-06",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const Th = ({ children }) => <th style={{ padding: 12, textAlign: "left", fontSize: 12, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 1, borderBottom: "1px solid var(--border)" }}>{children}</th>;
  const Td = ({ children, hi }) => <td style={{ padding: 12, fontSize: 14, borderBottom: "1px solid var(--border)", color: hi ? COLOR : "var(--text)", fontWeight: hi ? 700 : 400 }}>{children}</td>;

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #011217, #022E38, #011217)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #0891B222, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Mutual Funds · Compare · Elss
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Mirae Asset ELSS Tax Saver vs SBI Long Term Equity — 80C face-off for 2026
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 20 }}>
            Two of the largest ELSS funds in India by AUM. Same Section 80C deduction, same 3-year lock-in, same equity tax treatment. The differentiator is portfolio construction and the resulting CAGR — and Mirae has been pulling ahead consistently for the last seven years.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED}</div>
        </div>
      </div>
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "48px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / Mirae Tax Saver vs SBI Long Term
      </nav>
<div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span><span>By Ash K</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Mirae Asset ELSS Tax Saver wins on CAGR, both win on 80C</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          Mirae's 5-year CAGR of ~16.5% beats SBI Long Term Equity's ~14.5% by 200 bps annualised. The 80C deduction (₹46,800 saved at 30% slab) is identical — that benefit is invariant across ELSS funds. If you are claiming 80C under the old regime in FY 2025-26, Mirae is the simpler default; SBI is reasonable as a second ELSS for diversification across AMCs.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>Mirae Asset ELSS</Th><Th>SBI Long Term Equity</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Inception</Td><Td>December 2015</Td><Td hi>March 1993</Td></tr>
              <tr><Td>5-yr CAGR (direct)</Td><Td hi>~16.5%</Td><Td>~14.5%</Td></tr>
              <tr><Td>10-yr CAGR (direct)</Td><Td hi>~16.0%</Td><Td>~13.4%</Td></tr>
              <tr><Td>Section 80C eligible</Td><Td>Yes</Td><Td hi>Yes</Td></tr>
              <tr><Td>Lock-in period</Td><Td>3 years per tranche</Td><Td hi>3 years per tranche</Td></tr>
              <tr><Td>Cap-curve tilt</Td><Td hi>~70% large / 30% mid+small</Td><Td>~60% large / 40% mid+small</Td></tr>
              <tr><Td>TER (direct)</Td><Td hi>0.71%</Td><Td>0.92%</Td></tr>
              <tr><Td>AUM (₹ crore)</Td><Td hi>~26,800</Td><Td>~28,400</Td></tr>
              <tr><Td>Min SIP</Td><Td hi>₹500</Td><Td>₹500</Td></tr>
              <tr><Td>Exit load post lock-in</Td><Td>None</Td><Td hi>None</Td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>10-year wealth outcome at ₹1.5L/year</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgTaxSaved />
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 12 }}>
          Tax saved adds roughly ₹4.68L over 10 years (₹46,800/year × 10) at 30% slab, irrespective of fund choice — both ELSS funds save the same upfront tax. The post-tax wealth differential is driven entirely by gross return.
        </p>
      </section>

      <section style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK MIRAE ASSET ELSS IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You want the higher-CAGR ELSS option for your 80C tranche.</li>
            <li style={{ marginBottom: 6 }}>You prefer a more large-cap-tilted, lower-volatility ELSS profile.</li>
            <li style={{ marginBottom: 6 }}>You SIP through Coin/Kuvera/MFU — Mirae's direct plan TER is lower.</li>
            <li>You want a single ELSS fund, not multiple.</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK SBI LONG TERM EQUITY IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You consolidate within SBI MF for simplicity.</li>
            <li style={{ marginBottom: 6 }}>You want stronger mid-cap conviction in your ELSS allocation.</li>
            <li style={{ marginBottom: 6 }}>You value the longer 30+ year fund track record.</li>
            <li>You already hold Mirae and want AMC diversification.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The 80C decision frame</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          ELSS makes sense only if your 80C basket is not already filled by EPF, PPF, or life insurance premiums. Many salaried earners exhaust 80C with EPF alone — in that case adding an ELSS is investment-bound, not tax-saving. ELSS still offers the shortest lock-in (3 years per tranche) versus PPF (15 years), ULIPs (5 years), or NSC (5 years), making it the most liquid 80C-eligible product.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          Compare the regime decision in our <Link href="/learn/tax/old-vs-new-regime" style={{ color: COLOR }}>old vs new regime</Link> walkthrough; the <Link href="/tools/income-tax-calculator" style={{ color: COLOR }}>tax calculator</Link> models actual 80C savings. For ELSS positioning within a broader portfolio see the <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual funds hub</Link>.
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
        Editorial disclaimer — CAGR, AUM, TER, and portfolio composition figures sourced from AMC factsheets and AMFI consolidated data, verified on {UPDATED}. ELSS lock-in applies per individual tranche. Tax benefits are subject to your chosen regime under Income Tax Act provisions. Not investment advice.
      </footer>
    </main>
    </>
  );
}
