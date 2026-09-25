import Link from "next/link";

export const metadata = {
  title: "Loan Prepayment Charges: RBI Rules & What to Check | Assure Fintech",
  description: "Understand RBI's pre-payment charge directions, effective dates and loan-specific conditions. Check your sanction letter, Key Facts Statement and agreement.",
  alternates: { canonical: "/learn/loans/prepayment-penalty-trap" },
};

const COLOR = "#2563eb";
const RBI_DIRECTION = "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12878&Mode=0";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do all floating-rate loans have no prepayment charges?",
      acceptedAnswer: { "@type": "Answer", text: "No. The RBI's 2025 Directions apply to loans sanctioned or renewed on or after January 1, 2026, and specify different covered cases based on rate type, loan purpose, borrower and regulated-entity category. Other loans may be governed by earlier applicable instructions and their terms. Verify which rule applies to your loan." },
    },
    {
      "@type": "Question",
      name: "What does the RBI rule say for an individual’s floating-rate loan for a non-business purpose?",
      acceptedAnswer: { "@type": "Answer", text: "For loans sanctioned or renewed on or after January 1, 2026, the RBI Directions state that regulated entities covered by the Directions shall not levy pre-payment charges on floating-rate loans granted for purposes other than business to individuals, with or without co-obligants. The Directions specify that this applies irrespective of the source of funds and without a minimum lock-in period. Check that your lender and loan meet the conditions." },
    },
    {
      "@type": "Question",
      name: "Can charges apply to business-purpose or fixed-rate loans?",
      acceptedAnswer: { "@type": "Answer", text: "The Directions define specific charge-free categories for certain floating-rate business loans to individuals and micro or small enterprises, with lender-category and sanctioned-amount conditions. Outside the specified cases, any charges are subject to the regulated entity's approved policy and applicable rules. Fixed-rate and special-rate cases need separate review." },
    },
    {
      "@type": "Question",
      name: "Where should prepayment charges be disclosed?",
      acceptedAnswer: { "@type": "Answer", text: "Under the RBI's 2025 Directions, applicability or non-applicability of charges must be disclosed in the sanction letter and loan agreement, and in the Key Facts Statement where one is required. The Directions also state that an undisclosed charge may not be levied and previously waived charges may not be imposed retrospectively at prepayment." },
    },
    {
      "@type": "Question",
      name: "What should I do if the lender quotes a prepayment fee?",
      acceptedAnswer: { "@type": "Answer", text: "Request a written, itemized payoff quote and the contractual clause and applicable RBI provision the lender relies on. Compare it with your sanction or renewal date, rate type, purpose, borrower category, lender category and disclosures. If unresolved, use the lender's grievance process and consider seeking qualified advice." },
    },
  ],
};

export default function PrepaymentPenaltyTrapPage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Loan Prepayment Charges: RBI Rules and What Borrowers Should Check", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
      { "@type": "ListItem", position: 4, name: "Loan Prepayment Charges", item: "https://assurefintech.com/learn/loans/prepayment-penalty-trap" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #040C1E, #0B1F4B, #040C1E)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>LOANS · BORROWER CHECKLIST</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#F1F5F9", margin: "0 0 12px" }}>Loan prepayment charges: check the rule that applies to your loan</h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6, maxWidth: 640, margin: 0 }}>There is no single prepayment rule for every loan. Effective date, rate type, loan purpose, borrower and lender category can all matter.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Prepayment Charges</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 24px" }}>Prepayment can reduce the outstanding balance or close a loan, but do not assume a fee is either always allowed or always prohibited. Start with the RBI direction and the documents for your particular facility. A loan's date of sanction or renewal can determine which directions apply.</p>

        <section style={{ marginBottom: 26, padding: 18, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-muted)" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 10px" }}>RBI Directions effective January 1, 2026</h2>
          <p style={{ margin: "0 0 12px" }}>The <a href={RBI_DIRECTION} target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025</a> apply to loans and advances sanctioned or renewed on or after January 1, 2026. They cover commercial banks (excluding payments banks), co-operative banks, NBFCs and All India Financial Institutions.</p>
          <p style={{ margin: 0 }}>For covered floating-rate loans granted to individuals for purposes other than business, the Directions prohibit prepayment charges, with or without co-obligants, irrespective of the source of funds and without a minimum lock-in period. For dual or special-rate loans, applicability depends on whether the loan is floating-rate when prepayment is made.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Business-purpose loans have additional conditions</h2>
          <p style={{ margin: "0 0 12px" }}>The Directions also specify no-charge categories for some floating-rate business loans to individuals and micro or small enterprises. Coverage depends on regulated-entity type and, for specified categories, the sanctioned amount or limit (including a ₹50 lakh threshold for certain entities). The exact categories are set out in paragraph 5(ii) of the RBI Directions; review that text rather than relying on a generalized summary.</p>
          <p style={{ margin: 0 }}>For cases outside the specified charge-free categories, any prepayment charges are subject to the regulated entity's approved policy. The Directions specify that for term loans, any such charges must be based on the amount being prepaid. Special-rate and fixed-rate loans require checking the applicable terms and rules.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Earlier loans may follow earlier instructions</h2>
          <p style={{ margin: 0 }}>If your loan was sanctioned or renewed before January 1, 2026, do not automatically apply the 2025 Directions. Earlier RBI instructions and lender-category rules can differ. Identify the lender type, loan purpose, borrower, rate type and sanction or renewal date, then verify the instructions that applied to that period. If the loan was modified or renewed, ask the lender which date and terms it treats as relevant.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Check what the lender disclosed</h2>
          <p style={{ margin: "0 0 12px" }}>For loans covered by the 2025 Directions, applicability or non-applicability of prepayment charges must be disclosed in the sanction letter and loan agreement, and in a Key Facts Statement when one is required. The Directions state that undisclosed charges must not be levied and that charges waived earlier must not be imposed retrospectively at prepayment.</p>
          <p style={{ margin: 0 }}>Before paying, request a dated payoff statement that separates principal, accrued interest and any charge. Ask for the agreement clause and applicable RBI provision supporting each item. Save the lender's written response and compare it with your sanction and renewal documents.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Prepayment is also a financial decision</h2>
          <p style={{ margin: 0 }}>Once applicable charges are clear, compare the interest avoided with the effect on your cash reserves and other priorities. Check how a part-payment changes tenure or instalments, whether there is a minimum amount, and how quickly the lender will update the balance. Do not assume prepayment is always preferable to keeping liquidity or reducing higher-cost debt.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/learn/loans/fixed-vs-floating-rate" style={{ color: COLOR }}>fixed vs floating rates</Link> · <Link href="/learn/loans/home-loan-true-cost" style={{ color: COLOR }}>home-loan costs</Link> · <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This is a general summary, not legal or financial advice. RBI directions and lender terms are detailed and fact-specific. Read the official direction and seek qualified help if a charge is disputed.</footer>
      </main>
    </>
  );
}
