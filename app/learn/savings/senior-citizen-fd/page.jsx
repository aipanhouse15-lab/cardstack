import Link from "next/link";

export const metadata = {
  title: "Senior Citizen Fixed Deposits: How to Compare | Assure Fintech",
  description: "Compare senior-citizen FD offers using current rates, payout terms, premature-withdrawal rules, DICGC cover, liquidity and tax treatment.",
  alternates: { canonical: "/learn/savings/senior-citizen-fd" },
  openGraph: { title: "Senior Citizen Fixed Deposits: How to Compare", description: "A checklist for comparing senior-citizen deposit products without relying on stale rate rankings.", type: "article", siteName: "Assure Fintech" },
};

const COLOR = "#D97706";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do all banks offer senior-citizen FD rates?", acceptedAnswer: { "@type": "Answer", text: "Eligibility and any additional rate vary by issuer, product, tenure and depositor. Check the current official rate card and product terms; do not assume the same premium or eligibility across institutions." } },
    { "@type": "Question", name: "Are senior-citizen bank FDs insured?", acceptedAnswer: { "@type": "Answer", text: "Eligible deposits at DICGC-insured banks are covered subject to the insurance limit and aggregation rules. The cover is up to ₹5 lakh per depositor per insured bank, including principal and interest, in the same right and capacity. NBFC company deposits are not bank deposits insured by DICGC." } },
    { "@type": "Question", name: "Does Section 80TTB mean senior citizens pay no tax on FD interest?", acceptedAnswer: { "@type": "Answer", text: "No blanket exemption should be assumed. Eligibility, deduction limits and regime conditions depend on the applicable tax law and tax year. Verify current Income Tax Department guidance or consult a qualified tax professional." } },
    { "@type": "Question", name: "What should I check before booking an FD for retirement income?", acceptedAnswer: { "@type": "Answer", text: "Check issuer and product type, current rate, payout dates, premature-closure terms, deposit protection, tax treatment, liquidity needs and whether the maturity date fits your cash-flow plan." } },
  ],
};

export default function SeniorCitizenFDPage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Senior Citizen Fixed Deposits: How to Compare", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Savings", item: "https://assurefintech.com/learn/savings/" },
      { "@type": "ListItem", position: 4, name: "Senior Citizen Fixed Deposits", item: "https://assurefintech.com/learn/savings/senior-citizen-fd" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #451a03, #92400e, #451a03)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#fde68a", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>SAVINGS · RETIREMENT INCOME</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#fff7ed", margin: "0 0 12px" }}>Senior-citizen fixed deposits: compare the terms, not just the rate</h1>
          <p style={{ color: "#fed7aa", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>A deposit plan should balance income timing, access to cash, issuer risk, protection and tax—not maximize a headline yield in isolation.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/savings" style={{ color: "inherit" }}>Savings</Link> / Senior-Citizen FDs</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>Senior-citizen rates and eligibility differ across issuers and can change. A current official rate card and the deposit contract matter more than a rate table captured on an earlier date.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Match payout timing to expenses</h2>
          <p style={{ margin: 0 }}>Compare cumulative deposits with periodic-interest options and note the payment dates. Map known expenses and emergency cash needs before locking money away. A higher rate may not compensate for an unsuitable maturity date or a costly early-closure rule.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Check issuer and protection</h2>
          <p style={{ margin: "0 0 12px" }}>Confirm whether the product is a bank deposit or a company/NBFC deposit. DICGC insurance applies only to eligible deposits at insured banks, subject to aggregation and other rules. It does not insure NBFC company deposits. Consult the <a href="https://www.dicgc.org.in/guide-to-deposit-insurance" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>DICGC guide</a> and verify the bank's insured status.</p>
          <p style={{ margin: 0 }}>A credit rating, issuer guarantee or promotional description is not the same thing as deposit insurance. Understand who owes the money and what protections actually apply before comparing yields.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Review closure, renewal and nomination details</h2>
          <p style={{ margin: 0 }}>Check premature withdrawal eligibility, penalties, loan-against-deposit options, auto-renewal settings, maturity instructions, nomination and joint-holder terms. Keep enough liquid funds outside deposits that cannot be accessed promptly without a cost.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Treat tax and withholding separately</h2>
          <p style={{ margin: 0 }}>Interest tax and withholding are distinct questions: TDS is not necessarily the final tax. Thresholds, forms, deductions and tax-regime treatment can change. Verify the applicable tax-year rules with the Income Tax Department or a qualified adviser; do not assume a fixed interest amount is tax-free because of age alone.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Before booking: quick checklist</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Confirm current senior eligibility and rate for the chosen tenure and deposit amount.</li>
            <li style={{ marginBottom: 8 }}>Compare payout frequency, maturity value and premature-withdrawal terms.</li>
            <li style={{ marginBottom: 8 }}>Identify the legal issuer and verify whether DICGC insurance applies.</li>
            <li style={{ marginBottom: 8 }}>Keep near-term expenses and emergencies liquid.</li>
            <li>Check current tax and TDS rules for the relevant tax year.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/savings" style={{ color: COLOR }}>savings guides</Link> · <Link href="/learn/savings/best-fd-rates-2026" style={{ color: COLOR }}>compare FD offers</Link> · <Link href="/fd-calculator" style={{ color: COLOR }}>FD calculator</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This general guide does not recommend a particular issuer or deposit. Verify current rates, product terms, insurance coverage and tax treatment before investing.</footer>
      </main>
    </>
  );
}
