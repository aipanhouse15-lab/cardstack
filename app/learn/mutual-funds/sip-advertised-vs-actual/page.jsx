import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "SIP Returns: Why Your Result Differs from Published Returns",
  description: "Understand how contribution dates, market path, scheme costs and return methodology affect SIP outcomes. Historical returns are not forecasts.",
  alternates: { canonical: "/learn/mutual-funds/sip-advertised-vs-actual" },
};

const COLOR = "#0891b2";

export default function SipAdvertisedVsActualPage() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Why can my SIP return differ from a fund's advertised return?", acceptedAnswer: { "@type": "Answer", text: "Published figures and your SIP may use different start dates, cash-flow patterns, plans, options, return methods and valuation dates. Your instalments buy units at different NAVs, so timing changes your personal outcome." } },
      { "@type": "Question", name: "Is there a realistic SIP return I can assume?", acceptedAnswer: { "@type": "Answer", text: "No single return assumption is suitable for every fund, asset class, period or investor. Use scenarios to test whether a goal is resilient; do not treat an advertised or historical return as a forecast or guarantee." } },
      { "@type": "Question", name: "Does a SIP protect me from market losses?", acceptedAnswer: { "@type": "Answer", text: "No. A SIP is a way to invest periodically and does not remove market, credit, liquidity or scheme-specific risks. The value of units can fall, and returns are not assured." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "SIP Returns: Why Your Result Differs from Published Returns", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };

  return <>
    <div style={{ background: "linear-gradient(135deg, #10071E, #164e63, #10071E)", padding: "48px 24px", marginTop: 64 }}><div style={{ maxWidth: 820, margin: "0 auto" }}><div style={{ color: "#a5f3fc", fontSize: 13, marginBottom: 12 }}>Mutual funds · SIPs</div><h1 style={{ color: "#F1F5F9", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, margin: "0 0 12px" }}>Why your SIP return may differ from a published number</h1><p style={{ color: "#cffafe", margin: 0, lineHeight: 1.6 }}>A SIP outcome depends on when each contribution was invested, what happened in the market afterwards and how returns are measured.</p></div></div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "30px 22px 56px", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 22 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn/mutual-funds" style={{ color: "inherit" }}>Mutual Funds</Link> / SIP returns</nav>
      <section><h2 style={{ color: COLOR }}>The starting date and market path matter</h2><p>A scheme’s published return usually summarises a specific period and investment pattern. An SIP makes multiple purchases over time, each at a different NAV. Two investors in the same scheme can therefore have different outcomes if they started, paused, increased or redeemed their investments at different times.</p><p>Advertisements may highlight a historical period that is favourable to the product. That number can be mathematically correct for its stated window and still be a poor guide to a different investor’s experience. Look for the period, benchmark, plan, option, calculation method and required risk disclaimer; avoid treating any past return as an expected return.</p></section>
      <section><h2 style={{ color: COLOR }}>How to review your own SIP</h2><ol><li>Download a transaction statement with each instalment date, amount and units.</li><li>Use a money-weighted return measure such as XIRR for dated cash flows, with the current portfolio value and valuation date recorded.</li><li>Check that switches, withdrawals and IDCW distributions are treated consistently.</li><li>Compare against an appropriate benchmark over the same interval and using a compatible calculation method.</li><li>Review goal progress and risk fit, not only the latest return ranking.</li></ol><p>Published scheme CAGR and personal SIP XIRR answer different questions. For a primer, see <Link href="/learn/mutual-funds/cagr-vs-actual-return" style={{ color: COLOR }}>CAGR vs actual return</Link>.</p></section>
      <section><h2 style={{ color: COLOR }}>Plan with scenarios, not promises</h2><p>For a financial goal, test a range of outcomes, contribution levels, time horizons and inflation assumptions. A step-up contribution can be one scenario if your income and budget support it; it is not a guaranteed way to “beat inflation.” Keep emergency savings and near-term needs separate from market-linked investments, and consider the scheme’s risk and time horizon.</p><p>Markets can fall, and periodic investing does not guarantee profit or prevent loss. Do not stop or continue an investment solely because of this article; revisit your objective, ability to take risk and the scheme information before making changes.</p></section>
      <section><h2 style={{ color: COLOR }}>Frequently asked questions</h2>{faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 650 }}>{item.name}</summary><p style={{ color: "var(--text-muted)" }}>{item.acceptedAnswer.text}</p></details>)}</section>
      <p style={{ marginTop: 24 }}>Related: <Link href="/learn/mutual-funds" style={{ color: COLOR }}>mutual fund guides</Link> · <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>direct vs regular plans</Link>.</p>
      <p style={{ borderTop: "1px solid var(--border)", paddingTop: 16, fontSize: 13, color: "var(--text-muted)" }}>General educational information, not investment advice. Mutual fund investments are subject to market risks. Past performance does not guarantee future results.</p>
    </main>
  </>;
}
