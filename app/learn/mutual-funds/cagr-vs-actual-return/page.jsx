import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "CAGR vs Your Actual Mutual Fund Return: Which Measure to Use",
  description: "Learn when CAGR is useful, why dated cash flows need a money-weighted return such as XIRR, and how to compare like with like.",
  alternates: { canonical: "/learn/mutual-funds/cagr-vs-actual-return" },
};

const COLOR = "#0891b2";

export default function CagrVsActualReturnPage() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What does CAGR tell me?", acceptedAnswer: { "@type": "Answer", text: "CAGR is the constant annual growth rate that would connect a beginning value to an ending value over a stated period. It smooths the path and does not describe the actual year-by-year returns." } },
      { "@type": "Question", name: "Should I use XIRR for SIP investments?", acceptedAnswer: { "@type": "Answer", text: "For irregular or dated cash flows, a money-weighted measure such as XIRR can summarise the annualised return implied by those cash flows and the current value. It is sensitive to the dates and amounts entered and is not a forecast." } },
      { "@type": "Question", name: "Can I compare one fund's CAGR with my SIP's XIRR?", acceptedAnswer: { "@type": "Answer", text: "Not as a like-for-like comparison unless the scheme, plan, option, period, valuation date, cash-flow assumptions and treatment of costs are aligned. Check the calculation basis before drawing conclusions." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "CAGR vs Your Actual Mutual Fund Return: Which Measure to Use", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };

  return <>
    <div style={{ background: "linear-gradient(135deg, #082f49, #0e7490, #082f49)", padding: "48px 24px", marginTop: 64 }}><div style={{ maxWidth: 820, margin: "0 auto" }}><div style={{ color: "#a5f3fc", fontSize: 13, marginBottom: 12 }}>Mutual funds · Measuring returns</div><h1 style={{ color: "#F1F5F9", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, margin: "0 0 12px" }}>CAGR vs your actual return: choose the measure that fits</h1><p style={{ color: "#cffafe", margin: 0, lineHeight: 1.6 }}>A single annualised figure cannot explain every investment path. Start with the timing and pattern of your cash flows.</p></div></div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "30px 22px 56px", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 22 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn/mutual-funds" style={{ color: "inherit" }}>Mutual Funds</Link> / CAGR vs actual return</nav>
      <section><h2 style={{ color: COLOR }}>CAGR: useful, but smoothed</h2><p>Compound annual growth rate expresses the rate that would take a starting value to an ending value over a period if growth were steady. Actual markets do not move steadily. CAGR is most useful for summarising a single investment’s start-to-end growth over a stated interval; it hides volatility and the sequence of returns inside that interval.</p><p>When reading a published number, note the exact start and end dates, scheme and plan, growth or IDCW option, benchmark, and whether the figure is before or after ongoing scheme expenses. A past-period CAGR is not a promised or expected future return.</p></section>
      <section><h2 style={{ color: COLOR }}>Dated investments: account for each cash flow</h2><p>If money enters or leaves on different dates—as with an SIP, partial withdrawal or additional purchase—the investor’s result depends on the size and timing of each cash flow. A money-weighted annualised measure such as XIRR uses those dated flows and the ending value. It answers a different question from the scheme’s published CAGR, which is usually based on a defined investment interval.</p><p>Use the dates and amounts from your transaction statement, mark contributions and withdrawals consistently, and include a valuation date and current value. Small data-entry differences, missing instalments, switches or dividend/IDCW treatment can change the result. Check the platform’s methodology where it is not stated.</p></section>
      <section><h2 style={{ color: COLOR }}>A fair comparison checklist</h2><ul><li>Match scheme, plan, option and valuation date.</li><li>Use the same period and the same return measure where possible.</li><li>Distinguish a scheme’s historical return from your own cash-flow-weighted result.</li><li>Account for expenses in the NAV; separately consider taxes, exit loads and transaction-specific costs where relevant.</li><li>Do not rank funds from a short or selectively chosen period alone.</li></ul><p>Returns are only one part of an investment decision. Consider the fund’s objective, risk, portfolio, benchmark, time horizon and whether it fits your plan.</p></section>
      <section><h2 style={{ color: COLOR }}>Frequently asked questions</h2>{faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 650 }}>{item.name}</summary><p style={{ color: "var(--text-muted)" }}>{item.acceptedAnswer.text}</p></details>)}</section>
      <p style={{ marginTop: 24 }}>Continue to <Link href="/learn/mutual-funds/sip-advertised-vs-actual" style={{ color: COLOR }}>understand SIP return differences</Link> or <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>compare direct and regular plans</Link>.</p>
      <p style={{ borderTop: "1px solid var(--border)", paddingTop: 16, fontSize: 13, color: "var(--text-muted)" }}>General educational information, not investment advice. Mutual fund investments are subject to market risks. Past performance does not guarantee future results.</p>
    </main>
  </>;
}
