import Link from "next/link";

export const metadata = {
  title: "Personal Loan Cost: Rates, Fees & APR | Assure Fintech",
  description: "Learn how to compare personal-loan rates, repayment schedules, net disbursal, fees and prepayment terms using your written offer.",
  alternates: { canonical: "/learn/loans/personal-loan-actual-apr" },
  openGraph: { title: "Personal Loan Cost: Rates, Fees & APR", description: "A checklist for comparing personal-loan offers and understanding their full cost.", type: "article", siteName: "Assure Fintech" },
};

const COLOR = "#2563eb";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I compare the cost of personal-loan offers?",
      acceptedAnswer: { "@type": "Answer", text: "Compare the written rate and method of calculation, instalment amount and schedule, total repayment, net amount disbursed, itemized fees and taxes, and prepayment conditions. Use the lender's formal disclosures and ask for written clarification where needed." },
    },
    {
      "@type": "Question",
      name: "What is the difference between a flat rate and reducing-balance rate?",
      acceptedAnswer: { "@type": "Answer", text: "With a flat-rate method, interest may be calculated on the original principal for the agreed period; with a reducing-balance method, interest is calculated on the outstanding principal as it is repaid. The quoted percentage alone cannot be compared across methods. Ask the lender which method applies and review the payment schedule." },
    },
    {
      "@type": "Question",
      name: "Why does net disbursal matter?",
      acceptedAnswer: { "@type": "Answer", text: "Some charges may be paid separately or deducted from funds disbursed. Compare the amount you will actually receive with the instalments and other payments you must make, and verify the treatment of fees and taxes in the lender's documents." },
    },
    {
      "@type": "Question",
      name: "Is personal-loan insurance compulsory?",
      acceptedAnswer: { "@type": "Answer", text: "Do not assume an insurance add-on is compulsory. Ask whether it is optional or a stated condition of the specific product, request the policy and premium details, and confirm whether declining it changes the loan offer." },
    },
    {
      "@type": "Question",
      name: "Can I repay a personal loan early?",
      acceptedAnswer: { "@type": "Answer", text: "Check the agreement and applicable directions for lock-in, notice, minimum part-payment and any charge. Rules can depend on the loan and borrower details. Ask the lender for the outstanding amount and an itemized early-closure quote before paying." },
    },
  ],
};

export default function PagePersonalLoanAPR() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Personal Loan Cost: How to Compare Rates, Fees and Disbursal", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
      { "@type": "ListItem", position: 4, name: "Personal Loan Costs", item: "https://assurefintech.com/learn/loans/personal-loan-actual-apr" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #172554, #1E40AF, #172554)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>LOANS · PERSONAL LOAN GUIDE</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#F1F5F9", margin: "0 0 12px" }}>How to compare the cost of a personal loan</h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>Compare the written offer and net amount you receive—not a generic rate or bank ranking.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Personal Loan Costs</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>A loan's cost is determined by its actual terms: how interest is calculated, the schedule of payments, fees, taxes, any deductions from disbursal and early-repayment conditions. Offers differ by applicant and can change, so use current written documents.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Start with the amount you receive</h2>
          <p style={{ margin: 0 }}>Write down the sanctioned amount, net amount expected in your account, every upfront payment or deduction, instalment amount and due dates. Ask the lender which fees or taxes are included in each figure, and whether any add-on product changes the amount disbursed or repayment schedule.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Check how interest is calculated</h2>
          <p style={{ margin: "0 0 12px" }}>A flat-rate percentage and a reducing-balance percentage are not directly comparable. Ask which method applies, the periodic rate used, whether the quoted rate is annual or monthly, how payments are allocated, and for the full repayment schedule. Do not infer an APR solely by multiplying a monthly rate by twelve; compounding and payment timing matter.</p>
          <p style={{ margin: 0 }}>Where a Key Facts Statement or other standardized cost disclosure applies, compare the disclosed annual percentage rate and covered charges as defined there. This site's <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link> illustrates EMI and hypothetical upfront-fee effects; it does not calculate or replace a lender's standardized APR disclosure.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Review each fee and add-on</h2>
          <p style={{ margin: 0 }}>Request an itemized written list of processing, documentation, taxes and other charges, including when and how each is payable. If insurance or another product is presented with the loan, ask whether it is optional or a condition of that particular offer. Check the provider, policy, premium, coverage, exclusions and effect on net disbursal; do not rely on an oral assurance.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Check early repayment and missed-payment terms</h2>
          <p style={{ margin: 0 }}>Read the agreement for any lock-in, part-payment limit, notice requirement, foreclosure process, late-payment charge and how an early payment changes the balance. Applicable protections can vary by loan category and circumstances. Before making a payment, request a dated payoff quote from the lender and confirm what it includes.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare competing offers carefully</h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Use the same loan amount and repayment period when requesting quotes.</li>
            <li style={{ marginBottom: 8 }}>Compare amount disbursed, payment schedule, total scheduled repayment and itemized charges.</li>
            <li style={{ marginBottom: 8 }}>Check rate type, interest calculation method, fees, add-ons and early-repayment terms.</li>
            <li style={{ marginBottom: 8 }}>Verify whether the quote is conditional on salary transfer, credit profile or a limited-time offer.</li>
            <li>Keep the formal offer and applicable disclosures; ask the lender to resolve discrepancies in writing before accepting.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link> · <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment guide</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This guide is general information, not a lender quote or financial advice. Confirm current charges, disclosures, eligibility and applicable rules directly with the lender before accepting an offer.</footer>
      </main>
    </>
  );
}
