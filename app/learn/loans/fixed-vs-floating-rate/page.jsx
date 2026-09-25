import Link from "next/link";

export const metadata = {
  title: "Fixed vs Floating Home Loan Rates: How to Compare | Assure Fintech",
  description: "Understand fixed and floating home-loan rate structures, compare lender offers and model repayment changes without relying on rate forecasts.",
  alternates: { canonical: "/learn/loans/fixed-vs-floating-rate" },
  openGraph: {
    title: "Fixed vs Floating Home Loan Rates: How to Compare",
    description: "A practical framework for comparing rate structures, resets, fees and repayment risk.",
    type: "article",
    siteName: "Assure Fintech",
  },
};

const COLOR = "#2563eb";

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a fixed or floating home-loan rate better?",
      acceptedAnswer: { "@type": "Answer", text: "Neither is always better. Compare the written rate, how long it applies, reset or conversion terms, fees and your ability to manage payment changes. Future rates and total savings cannot be known in advance." },
    },
    {
      "@type": "Question",
      name: "Does a fixed home-loan rate stay fixed for the whole tenure?",
      acceptedAnswer: { "@type": "Answer", text: "Do not assume so. Some offers may be fixed only for a stated period or may include reset or conversion provisions. Check the sanction letter and agreement for the exact rate period and what happens afterward." },
    },
    {
      "@type": "Question",
      name: "What should I compare in floating-rate home loans?",
      acceptedAnswer: { "@type": "Answer", text: "Check the benchmark, lender spread, reset frequency, notice and EMI or tenure adjustment method, applicable fees, and prepayment terms. Ask the lender to explain a sample rate increase in writing." },
    },
    {
      "@type": "Question",
      name: "Can I switch between fixed and floating rates later?",
      acceptedAnswer: { "@type": "Answer", text: "Possibly, subject to the product terms and lender process. Ask for the available conversion options, revised rate, fees and effect on the repayment schedule before deciding." },
    },
  ],
};

export default function PageFixedVsFloating() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fixed vs Floating Home Loan Rates: How to Compare",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-25",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
      { "@type": "ListItem", position: 4, name: "Fixed vs Floating Rate", item: "https://assurefintech.com/learn/loans/fixed-vs-floating-rate" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #040C1E, #0B1F4B, #040C1E)", padding: "52px 24px 44px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#93c5fd", fontSize: 12, fontWeight: 700, marginBottom: 14 }}>LOAN GUIDE · HOME LOANS</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#F1F5F9", margin: "0 0 12px" }}>Fixed vs floating home-loan rates: how to compare</h1>
          <p style={{ color: "#cbd5e1", margin: 0 }}>A decision framework based on the terms you can verify—not a forecast of future interest rates.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
          <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Fixed vs Floating Rate
        </nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 24px" }}>A fixed rate can provide payment certainty for the period specified in the offer. A floating rate can change under its benchmark and reset terms. The better fit depends on the actual contract and your capacity to absorb payment changes; no rate path or savings outcome is guaranteed.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>First, confirm what “fixed” means in the offer</h2>
          <p style={{ margin: "0 0 12px" }}>Read the sanction letter and agreement to establish how long the quoted rate applies. Check whether it can reset, when a fixed period ends, how a later floating rate is determined, and whether a conversion option or charge applies. Product labels alone are not enough to establish that the rate stays unchanged for the full loan tenure.</p>
          <p style={{ margin: 0 }}>For a floating offer, identify the benchmark and lender spread, reset frequency, how rate changes affect EMI or tenure, and how the lender communicates revisions. Ask for an example schedule showing how a change in the benchmark would affect your payments.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare like-for-like written offers</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Use the same loan amount, tenure and repayment assumptions for each offer.</li>
            <li style={{ marginBottom: 8 }}>Compare the interest rate and full repayment schedule, not just the first EMI.</li>
            <li style={{ marginBottom: 8 }}>List processing and third-party charges separately; confirm whether insurance or another add-on is optional.</li>
            <li style={{ marginBottom: 8 }}>Check reset, conversion, prepayment and foreclosure clauses and their applicable conditions.</li>
            <li>Ask how a rate increase would affect your EMI, tenure and total repayment, and whether you can make additional payments.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Stress-test your budget</h2>
          <p style={{ margin: "0 0 12px" }}>For a floating offer, model several hypothetical rates above and below the quoted rate. Treat these as scenarios, not predictions. Check that the higher-payment scenario remains manageable alongside essential expenses, emergency savings and other debt.</p>
          <p style={{ margin: 0 }}>For a fixed or partly fixed offer, consider the price of payment certainty and what happens after any fixed period ends. Compare the total payments across the actual product terms, including any later reset—not a single rate applied across the entire tenure unless the lender confirms that in writing.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Questions to ask the lender</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>For exactly how long is this rate fixed, and what rate applies afterward?</li>
            <li style={{ marginBottom: 8 }}>For a floating rate, what benchmark, spread and reset interval apply?</li>
            <li style={{ marginBottom: 8 }}>When a rate changes, does the EMI, tenure or both change—and how will I be notified?</li>
            <li style={{ marginBottom: 8 }}>Can I switch rate types or prepay, and what conditions or charges apply to my loan?</li>
            <li>Which charges and add-on products are optional, and which are required by the product terms?</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => (
            <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
              <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{item.name}</summary>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0", lineHeight: 1.6 }}>{item.acceptedAnswer.text}</p>
            </details>
          ))}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
          Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" style={{ color: COLOR }}>compare home-loan offers</Link> · <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment guide</Link> · <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link>
        </p>
        <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>
          This general guide is not a lender quotation, legal opinion or financial advice. Loan terms vary; verify your offer and applicable rules with the lender and relevant authorities before acting.
        </footer>
      </main>
    </>
  );
}
