import Link from "next/link";

export const metadata = {
  title: "Home Loan Costs: EMI, Fees & Other Charges | Assure Fintech",
  description: "Understand the components of home-loan cost, including interest, lender fees, property-related charges, disbursement and optional add-ons.",
  alternates: { canonical: "/learn/loans/home-loan-true-cost" },
};

const COLOR = "#2563eb";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What costs should I compare beyond a home-loan EMI?",
      acceptedAnswer: { "@type": "Answer", text: "Review the complete repayment schedule and interest, lender processing and service charges, applicable third-party or property transaction costs, charges for staged disbursement if relevant, and any optional products. Amounts and rules vary by lender, property and state; use your written offer and local official schedules." },
    },
    {
      "@type": "Question",
      name: "Are insurance products required with every home loan?",
      acceptedAnswer: { "@type": "Answer", text: "Do not assume every insurance add-on is required. Ask the lender to identify any requirement in the product terms, which cover is optional, who provides it, the premium and exclusions, and whether you may choose another provider." },
    },
    {
      "@type": "Question",
      name: "How do state property charges affect the cost?",
      acceptedAnswer: { "@type": "Answer", text: "Stamp duty, registration and related property charges depend on the transaction and the applicable state or local rules. Confirm current amounts with the relevant state authority or qualified conveyancing professional; do not rely on a national estimate." },
    },
    {
      "@type": "Question",
      name: "What is pre-EMI interest on an under-construction property?",
      acceptedAnswer: { "@type": "Answer", text: "Where a loan is disbursed in stages, the agreement may require interest payments on amounts already disbursed before regular repayment begins. Confirm the disbursement schedule, payment basis and when principal repayment starts with the lender." },
    },
    {
      "@type": "Question",
      name: "Can I deduct home-loan interest from tax?",
      acceptedAnswer: { "@type": "Answer", text: "Tax treatment depends on the applicable tax year, tax regime, property use, loan and taxpayer circumstances. Rules have changed, so check current Income Tax Department guidance or consult a qualified tax professional rather than assuming a deduction applies." },
    },
  ],
};

export default function HomeLoanTrueCostPage() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Home Loan Costs: EMI, Fees and Other Charges",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-03",
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
      { "@type": "ListItem", position: 4, name: "Home Loan Costs", item: "https://assurefintech.com/learn/loans/home-loan-true-cost" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #172554, #1E3A8A, #172554)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>LOANS · HOME LOAN GUIDE</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#F1F5F9", margin: "0 0 12px" }}>Understand the full cost of a home loan</h1>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>An EMI is only one part of the decision. Compare the written repayment terms and transaction costs that apply to your loan and property.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontSize: 16, lineHeight: 1.65, fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)" }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }} aria-label="Breadcrumb">
          <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Home Loan Costs
        </nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>The cost of borrowing depends on the rate and how it changes, the repayment period, charges and how funds are disbursed. Property-purchase costs are separate from lender charges, and many depend on location. Build your comparison from the actual documents rather than a generic “true cost” percentage.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>1. Interest and repayment schedule</h2>
          <p style={{ margin: "0 0 12px" }}>Ask each lender for a repayment schedule based on the offered amount, rate, tenure, benchmark or reset terms, and disbursement plan. Compare total scheduled payments as well as the initial EMI. For a floating-rate loan, request examples of how a rate change may affect the EMI or tenure. These are scenarios—not forecasts.</p>
          <p style={{ margin: 0 }}>Use the <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link> for an independent EMI illustration. Its assumptions are simplified and do not replace the lender's schedule or disclosure.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>2. Lender and third-party charges</h2>
          <p style={{ margin: "0 0 12px" }}>Request a written itemized list of processing, documentation, valuation, legal, technical, account or other charges that apply to your offer. Ask which are payable upfront, which are refundable, whether taxes apply, and whether a promotion or waiver has conditions.</p>
          <p style={{ margin: 0 }}>If an insurance or other product is presented with the loan, ask whether it is optional or a stated condition of that product. Confirm the provider, premium, coverage, exclusions, payment method and alternatives in writing. Do not treat a generic market figure as your quote.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>3. Property transaction costs</h2>
          <p style={{ margin: 0 }}>Stamp duty, registration and other property transaction charges are not a universal percentage. They can depend on state or local rules, property value and transaction details. Verify the current amount with the relevant official authority or a qualified property professional for the state where the property is located.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>4. Staged disbursement and pre-EMI payments</h2>
          <p style={{ margin: 0 }}>For some under-construction purchases, the lender releases funds in stages. The loan agreement may require interest payments on amounts already disbursed before regular principal-and-interest instalments begin. Check the release milestones, payment basis and start date for regular instalments. Do not assume that a builder's construction schedule or handover date changes the lender's obligations.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>5. Prepayment and rate-change terms</h2>
          <p style={{ margin: 0 }}>Read the agreement for part-payment, foreclosure, conversion, notice and minimum-payment terms. Any charge or protection may depend on the loan category, rate type, borrower and sanction or renewal date. Ask the lender to confirm how the rules apply to your specific loan and get the response in writing. See our <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment guide</Link> for a cautious overview.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>6. Tax treatment</h2>
          <p style={{ margin: 0 }}>Do not include an assumed tax saving in your loan comparison until you confirm eligibility for the relevant tax year and regime. Treatment can depend on property use, ownership, loan purpose and other conditions, and tax rules change. Check current Income Tax Department guidance or consult a qualified tax adviser.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>A comparison checklist</h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Compare offers for the same principal and tenure.</li>
            <li style={{ marginBottom: 8 }}>Save the sanction letter, repayment schedule and itemized charges for each offer.</li>
            <li style={{ marginBottom: 8 }}>Separate lender charges from property transaction costs and optional products.</li>
            <li style={{ marginBottom: 8 }}>Test a higher-rate scenario if the rate can change, and check that payments remain affordable.</li>
            <li>Verify location-specific charges and tax treatment with the appropriate authority or professional.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => (
            <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p>
            </details>
          ))}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
          Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link> · <Link href="/learn/loans/fixed-vs-floating-rate" style={{ color: COLOR }}>fixed vs floating rates</Link> · <Link href="/learn/loans/prepayment-penalty-trap" style={{ color: COLOR }}>prepayment guide</Link>
        </p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}>
          <strong>Editorial note.</strong> This guide provides a general comparison checklist, not a lender quotation, legal or tax opinion, or financial advice. Verify charges, current rules and contract terms for your own transaction before acting.
        </footer>
      </main>
    </>
  );
}
