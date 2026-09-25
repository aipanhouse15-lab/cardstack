import Link from "next/link";

export const metadata = {
  title: "Tax-Saving FD vs ELSS vs PPF: Compare Lock-in, Risk & Tax | Assure Fintech",
  description: "Compare tax-saving fixed deposits, ELSS mutual funds and PPF by lock-in, market risk, liquidity, tax regime and current eligibility rules.",
  alternates: { canonical: "/learn/savings/tax-saving-fd-vs-elss-vs-ppf" },
  openGraph: { title: "Tax-Saving FD vs ELSS vs PPF: Compare the Trade-offs", description: "A tax-regime-aware framework for comparing three different long-term products.", type: "article", siteName: "Assure Fintech" },
};

const COLOR = "#D97706";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do tax-saving FDs, ELSS and PPF all qualify for a tax deduction?", acceptedAnswer: { "@type": "Answer", text: "Eligibility depends on the instrument's statutory conditions, the taxpayer and applicable tax regime and year. Deductions under section 80C are generally associated with the old tax regime; do not assume the same deduction is available in the new regime. Confirm current law and eligibility before investing for a deduction." } },
    { "@type": "Question", name: "Which has the shortest lock-in?", acceptedAnswer: { "@type": "Answer", text: "An ELSS investment generally has a three-year lock-in measured from each allotment; tax-saving bank FDs generally have a five-year lock-in; PPF has a longer scheme tenure and specific loan and withdrawal rules. Verify current product and scheme conditions before relying on access dates." } },
    { "@type": "Question", name: "Is ELSS return guaranteed?", acceptedAnswer: { "@type": "Answer", text: "No. ELSS is an equity mutual fund; its value and returns can fluctuate, and capital is not guaranteed. Read the scheme information document, riskometer, portfolio and expenses, and invest only in line with your risk capacity and horizon." } },
    { "@type": "Question", name: "Is interest from a tax-saving FD taxable?", acceptedAnswer: { "@type": "Answer", text: "FD interest tax and withholding are separate from any eligible deduction for the investment. Check current tax-year rules, the FD's terms and your own tax position with official guidance or a qualified tax professional." } },
  ],
};

export default function TaxSavingFDvsELSSvsPPF() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Tax-Saving FD vs ELSS vs PPF: Compare Lock-in, Risk and Tax", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Savings", item: "https://assurefintech.com/learn/savings/" },
      { "@type": "ListItem", position: 4, name: "Tax-Saving FD, ELSS and PPF", item: "https://assurefintech.com/learn/savings/tax-saving-fd-vs-elss-vs-ppf" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #451a03, #92400e, #451a03)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#fde68a", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>SAVINGS · TAX-RELATED PRODUCTS</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#fff7ed", margin: "0 0 12px" }}>Tax-saving FD vs ELSS vs PPF: compare the trade-offs</h1>
          <p style={{ color: "#fed7aa", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>A deduction does not make two products equivalent. Compare tax eligibility, lock-in, risk and access before committing.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / Tax-Saving Products</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>First confirm whether a deduction is available under the regime and tax-year rules that apply to you. Then compare the product's liquidity, risk and taxation of returns. A tax label alone is not a reason to buy an unsuitable product.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Tax-saving bank fixed deposit</h2>
          <p style={{ margin: 0 }}>A qualifying bank tax-saver FD is generally locked in for five years, and interest is generally taxable under applicable rules. Premature closure is usually restricted, subject to the scheme's terms and exceptions. Check whether the institution and product qualify, the rate and payout, the lock-in, deposit insurance and the way interest will be reported and taxed.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Equity Linked Savings Scheme (ELSS)</h2>
          <p style={{ margin: 0 }}>ELSS is an equity mutual fund and its value can fall as well as rise. Each investment generally has a three-year lock-in. Review the scheme's objective, portfolio, riskometer, costs and redemption process. Tax on redemption depends on the applicable capital-gains rules and your transaction dates; returns are not guaranteed.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Public Provident Fund (PPF)</h2>
          <p style={{ margin: 0 }}>PPF is a government small-savings scheme with a longer prescribed tenure and specific contribution, loan, withdrawal and extension rules. The notified interest rate may change over time. Check current official scheme rules and tax treatment, and make sure the tenure fits your plans for the money.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Side-by-side considerations</h2>
          <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: 12 }}>
            <table style={{ width: "100%", minWidth: 650, borderCollapse: "collapse", fontSize: 14 }}>
              <thead><tr style={{ background: "var(--bg-muted)" }}>{["Feature", "Tax-saving FD", "ELSS", "PPF"].map((heading) => <th key={heading} style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>{heading}</th>)}</tr></thead>
              <tbody>
                {[
                  ["Main risk", "Issuer / deposit terms", "Equity market risk", "Scheme terms and rate resets"],
                  ["Typical access restriction", "Five-year tax-saver lock-in", "Three-year lock-in per allotment", "Long scheme tenure; limited withdrawals"],
                  ["Return basis", "Issuer's stated rate and payout", "Market-linked; not guaranteed", "Government-notified rate"],
                  ["Tax deduction", "Subject to current law and regime", "Subject to current law and regime", "Subject to current law and regime"],
                  ["Return taxation", "Check current interest rules", "Check current capital-gains rules", "Check current scheme and tax law"],
                ].map(([feature, fd, elss, ppf]) => <tr key={feature}><th scope="row" style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>{feature}</th><td style={{ padding: 12, borderBottom: "1px solid var(--border)" }}>{fd}</td><td style={{ padding: 12, borderBottom: "1px solid var(--border)" }}>{elss}</td><td style={{ padding: 12, borderBottom: "1px solid var(--border)" }}>{ppf}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Check the tax regime and remaining limit</h2>
          <p style={{ margin: 0 }}>Deductions under Section 80C are generally relevant to the old tax regime and are subject to a shared aggregate limit and qualifying conditions. Existing eligible payments may already use some or all of that limit. Rules may differ by tax year and instrument; verify the current Income Tax Department guidance and do not make an investment solely on an assumed tax saving.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/savings" style={{ color: COLOR }}>savings guides</Link> · <Link href="/learn/savings/ppf-vs-fd-vs-debt-fund" style={{ color: COLOR }}>PPF vs FD vs debt funds</Link> · <Link href="/learn/tax" style={{ color: COLOR }}>tax guides</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This general comparison is not investment or tax advice. Product rules and tax treatment change; confirm current official terms and your eligibility before investing.</footer>
      </main>
    </>
  );
}
