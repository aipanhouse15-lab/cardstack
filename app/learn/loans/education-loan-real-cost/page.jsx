import Link from "next/link";

export const metadata = {
  title: "Education Loan Costs: Moratorium, Interest & Repayment | Assure Fintech",
  description: "Understand education-loan disbursement, interest during study or moratorium, repayment schedules, fees and tax eligibility before borrowing.",
  alternates: { canonical: "/learn/loans/education-loan-real-cost" },
  openGraph: { title: "Education Loan Costs: Moratorium, Interest & Repayment", description: "A practical checklist for evaluating education-loan repayment and total cost.", type: "article", siteName: "Assure Fintech" },
};

const COLOR = "#2563eb";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does an education-loan moratorium mean no interest is charged?",
      acceptedAnswer: { "@type": "Answer", text: "Not necessarily. A moratorium may defer scheduled principal repayment, but the agreement may still provide for interest during study or the moratorium. Check the rate, calculation method, payment options and treatment of unpaid interest in your sanction letter." },
    },
    {
      "@type": "Question",
      name: "What does capitalizing interest mean?",
      acceptedAnswer: { "@type": "Answer", text: "Capitalization generally means adding unpaid interest to the outstanding loan balance under the agreement. Future interest may then be calculated on the higher balance. Ask the lender for a schedule showing the balance at repayment start under each available payment option." },
    },
    {
      "@type": "Question",
      name: "When does education-loan repayment begin?",
      acceptedAnswer: { "@type": "Answer", text: "The repayment start date and any moratorium or grace period depend on the product terms and circumstances. Confirm the trigger date, installment amount and schedule with the lender; do not assume it begins only after securing employment." },
    },
    {
      "@type": "Question",
      name: "Can I claim a tax deduction for education-loan interest?",
      acceptedAnswer: { "@type": "Answer", text: "Tax eligibility depends on the applicable tax year, tax regime, lender, borrower, course and other statutory conditions. Verify current Income Tax Department guidance or consult a qualified tax professional; do not assume a deduction applies to every loan or borrower." },
    },
    {
      "@type": "Question",
      name: "How should I compare education-loan offers?",
      acceptedAnswer: { "@type": "Answer", text: "Compare the amount and timing of disbursements, interest calculation and rate resets, moratorium treatment, repayment start, fees, collateral or co-borrower obligations, prepayment terms and full repayment schedule. Request all conditions in writing." },
    },
  ],
};

export default function PageEducationLoanRealCost() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Education Loan Costs: Moratorium, Interest and Repayment", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Loans", item: "https://assurefintech.com/learn/loans/" },
      { "@type": "ListItem", position: 4, name: "Education Loan Costs", item: "https://assurefintech.com/learn/loans/education-loan-real-cost" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #172554, #1E40AF, #172554)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>LOANS · EDUCATION LOAN GUIDE</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#F1F5F9", margin: "0 0 12px" }}>Understand education-loan costs before you borrow</h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>Study-period interest, disbursement timing and repayment terms can materially affect the amount you owe when regular installments begin.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Education Loan Costs</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>The sanctioned amount alone does not show how much you may owe at repayment start. Build your estimate from the expected disbursement dates, applicable rates, payments made during study, capitalization terms and the schedule in the lender's documents.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Map the disbursements</h2>
          <p style={{ margin: 0 }}>Record when and how much the lender expects to release, and to whom payments will be made. Some education loans are released in stages against fees or other eligible expenses. The balance on which interest accrues can therefore depend on the actual disbursement timeline. Confirm whether later disbursements require fresh documentation or conditions.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Understand interest during study and any moratorium</h2>
          <p style={{ margin: "0 0 12px" }}>A moratorium can defer scheduled repayments, but it does not automatically mean interest stops accruing. Check the applicable rate, calculation method, reset terms and whether payments during study are required, optional or subject to concessions. Ask for written examples for your course duration and expected disbursements.</p>
          <p style={{ margin: 0 }}>If interest is unpaid and the agreement adds it to the balance, subsequent interest may apply to a larger principal. Request a schedule showing both the balance at repayment start and total payments over the full term. Do not rely on a single growth estimate without the lender's assumptions.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare payment options and affordability</h2>
          <p style={{ margin: "0 0 12px" }}>Ask the lender to explain any options for paying interest or installments during study, how each affects the later balance, and whether making additional payments is permitted. Consider payments alongside tuition, living costs and other borrowing; do not assume future income or job placement will match a forecast.</p>
          <p style={{ margin: 0 }}>Review repayment start triggers, installment frequency, total tenure, rate resets, late-payment terms and prepayment provisions. Check whether a parent or other co-borrower has separate obligations and what collateral, if any, secures the loan.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare offers beyond the headline rate</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Rate type, calculation basis, benchmark and reset frequency.</li>
            <li style={{ marginBottom: 8 }}>Disbursement milestones and eligible education expenses.</li>
            <li style={{ marginBottom: 8 }}>Study-period and moratorium interest, concessions and capitalization terms.</li>
            <li style={{ marginBottom: 8 }}>Repayment start date, installment schedule and full-term repayment estimate.</li>
            <li style={{ marginBottom: 8 }}>Processing and third-party fees, collateral and co-borrower responsibilities.</li>
            <li>Prepayment, late-payment and other material contract terms.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Check tax claims separately</h2>
          <p style={{ margin: 0 }}>Tax deductions are subject to the law and conditions applicable to the tax year and taxpayer. Confirm the eligible loan, lender, borrower, payment records, regime and claim period using current Income Tax Department guidance or a qualified tax adviser. Do not subtract an assumed tax benefit from the loan cost until eligibility is established.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Documents and questions before signing</h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Request the sanction letter, applicable Key Facts Statement, repayment schedule and fee list.</li>
            <li style={{ marginBottom: 8 }}>Ask for the projected balance when regular repayment begins under the chosen payment option.</li>
            <li style={{ marginBottom: 8 }}>Confirm how rate changes, course extensions, delayed completion or changes to disbursement affect payments.</li>
            <li style={{ marginBottom: 8 }}>Clarify all co-borrower and collateral obligations with the lender.</li>
            <li>Keep written answers and seek independent professional advice if any obligation is unclear.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link> · <Link href="/learn/tax" style={{ color: COLOR }}>tax guides</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This general guide is not a loan offer, tax opinion or financial advice. Terms vary; verify all amounts and obligations with the lender and confirm tax treatment for your circumstances before acting.</footer>
      </main>
    </>
  );
}
