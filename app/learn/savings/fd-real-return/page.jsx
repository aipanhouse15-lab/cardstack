import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Fixed-Deposit Return After Tax and Inflation: Estimate Your Scenario",
  description: "A framework for estimating the purchasing-power effect of a fixed deposit using its actual terms, your tax situation and an inflation assumption.",
  alternates: { canonical: "/learn/savings/fd-real-return" },
};

const COLOR = "#ca8a04";

export default function FdRealReturnPage() {
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "How do I estimate a fixed deposit's real return?", acceptedAnswer: { "@type": "Answer", text: "Start with the effective annual yield implied by the deposit's actual rate, compounding and payout terms. Apply an appropriate tax assumption to taxable interest, then compare the resulting after-tax return with an inflation assumption over the same period. The estimate is not a guaranteed future purchasing-power result." } },
    { "@type": "Question", name: "Does TDS equal the tax I owe on FD interest?", acceptedAnswer: { "@type": "Answer", text: "No. Tax deducted at source is a withholding or tax-credit mechanism and is not necessarily the final tax liability. Check current tax-year rules and your own tax position." } },
    { "@type": "Question", name: "Are bank deposits protected against loss?", acceptedAnswer: { "@type": "Answer", text: "Eligible deposits at an insured bank are covered subject to DICGC's limits, aggregation rules and conditions. Review the current DICGC guidance; a deposit's advertised rate does not by itself describe issuer risk or insurance coverage." } },
  ] };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Fixed-Deposit Return After Tax and Inflation: Estimate Your Scenario", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  return <>
    <div style={{ background: "linear-gradient(135deg, #422006, #92400E, #422006)", padding: "48px 24px", marginTop: 64 }}><div style={{ maxWidth: 820, margin: "0 auto" }}><div style={{ color: "#fde68a", fontSize: 13, marginBottom: 12 }}>Savings · Fixed deposits</div><h1 style={{ color: "#F1F5F9", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, margin: "0 0 12px" }}>Estimate an FD’s return after tax and inflation</h1><p style={{ color: "#fef3c7", margin: 0, lineHeight: 1.6 }}>Use your actual deposit terms and a clearly stated personal tax and inflation scenario—not an old bank-rate chart.</p></div></div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "30px 22px 56px", color: "var(--text)", lineHeight: 1.7 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 22 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / FD return</nav>
      <section><h2 style={{ color: COLOR }}>A scenario, not a bank quote</h2><p>A deposit’s outcome depends on the issuer’s current rate, tenure, compounding or payout frequency, deposit amount, customer eligibility, premature-closure terms and any special conditions. Rates change, so collect them from the issuer’s official schedule for the date you plan to book. Do not use a rate in an old chart as a current offer.</p><p>For a rough comparison, estimate the effective annual return from the actual product terms. If interest is taxable for you, apply a tax assumption relevant to your circumstances and the correct assessment or tax year. Then compare the after-tax result with an inflation assumption over a matching period. State each input: the result is only as useful as those assumptions.</p></section>
      <section><h2 style={{ color: COLOR }}>What the estimate leaves out</h2><ul><li>Your actual tax rate, deductions, exemptions, other income and filing position.</li><li>Deposit payout timing, reinvestment rate, tax withholding and changes in the tax rules.</li><li>Issuer-specific premature-withdrawal penalties or product conditions.</li><li>Future inflation, which is uncertain and varies across households and spending baskets.</li><li>Issuer risk and whether the deposit is eligible for DICGC protection.</li></ul><p>TDS is not necessarily your final tax. For deposit-protection limits, aggregation and exclusions, read DICGC’s current <a href="https://www.dicgc.org.in/guide-to-deposit-insurance" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>deposit-insurance guide</a>.</p></section>
      <section><h2 style={{ color: COLOR }}>Compare deposits fairly</h2><p>Compare the same tenure and payout type, and verify whether the advertised yield requires a particular customer category or amount. Consider liquidity, premature closure, maturity instructions, issuer type, deposit insurance and tax treatment—not only the highest headline rate.</p><p>Continue to <Link href="/learn/savings/best-fd-rates-2026" style={{ color: COLOR }}>our FD-offer comparison checklist</Link> or <Link href="/learn/savings" style={{ color: COLOR }}>the savings hub</Link>.</p></section>
      <section><h2 style={{ color: COLOR }}>Frequently asked questions</h2>{faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 650 }}>{item.name}</summary><p style={{ color: "var(--text-muted)" }}>{item.acceptedAnswer.text}</p></details>)}</section>
      <p style={{ borderTop: "1px solid var(--border)", paddingTop: 16, fontSize: 13, color: "var(--text-muted)" }}>General educational information, not investment or tax advice. Rates, tax rules, deposit terms and insurance conditions can change. Verify current official terms before acting.</p>
    </main>
  </>;
}
