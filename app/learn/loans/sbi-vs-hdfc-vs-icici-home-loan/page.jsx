import Link from "next/link";

export const metadata = {
  title: "Compare SBI, HDFC Bank & ICICI Home Loans | Assure Fintech",
  description: "A practical checklist for comparing home-loan offers from SBI, HDFC Bank and ICICI Bank using current written rates, fees, repayment terms and eligibility.",
  alternates: { canonical: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
  openGraph: {
    title: "Compare SBI, HDFC Bank & ICICI Home Loans",
    description: "Compare lender offers using your own current written terms—not a generic rate ranking.",
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
      name: "Which bank has the lowest home-loan rate?",
      acceptedAnswer: { "@type": "Answer", text: "There is no single lowest rate for every applicant. The offered rate and eligibility may depend on borrower and property details, product type and lender policy. Request current written offers from the lenders you are considering and compare them for the same assumptions." },
    },
    {
      "@type": "Question",
      name: "How do I compare home loans from SBI, HDFC Bank and ICICI Bank?",
      acceptedAnswer: { "@type": "Answer", text: "Compare the actual offered rate and reset basis, repayment schedule, itemized charges, eligibility and documentation, service expectations, and prepayment or conversion clauses. Compare like-for-like offers and confirm all terms in writing." },
    },
    {
      "@type": "Question",
      name: "Are advertised home-loan rates guaranteed?",
      acceptedAnswer: { "@type": "Answer", text: "An advertised rate is not necessarily the rate offered to every applicant. Check the lender's current eligibility criteria and your sanction letter for the rate, conditions and fees that apply to you." },
    },
    {
      "@type": "Question",
      name: "What documents should I request before choosing a lender?",
      acceptedAnswer: { "@type": "Answer", text: "Request the sanction letter or formal offer, Key Facts Statement where applicable, repayment schedule, itemized charges and relevant product terms. Ask for written clarification of any unclear fees, rate resets, add-ons or prepayment conditions." },
    },
  ],
};

export default function PageSBIvsHDFCvsICICI() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compare SBI, HDFC Bank and ICICI Bank Home-Loan Offers",
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
      { "@type": "ListItem", position: 4, name: "Compare Home-Loan Offers", item: "https://assurefintech.com/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #0F2A5C, #1E40AF, #0F2A5C)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>LOANS · COMPARISON GUIDE</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#F1F5F9", margin: "0 0 12px" }}>Compare SBI, HDFC Bank and ICICI home-loan offers</h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>Rates and eligibility change and are borrower-specific. Use this checklist to compare current written offers without relying on a stale “cheapest bank” ranking.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
          <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/loans" style={{ color: "inherit" }}>Loans</Link> / Compare Home Loans
        </nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>A published starting rate is not a personalized approval or quote. The relevant comparison is between offers issued for your profile and property, using the same loan amount, tenure and repayment assumptions.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare the same fields for each lender</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}><strong>Rate:</strong> record the rate actually offered, whether it is fixed or floating, the benchmark and spread if applicable, and reset terms.</li>
            <li style={{ marginBottom: 8 }}><strong>Repayment:</strong> compare the schedule, initial EMI, tenure, and the lender's treatment of rate changes or staged disbursements.</li>
            <li style={{ marginBottom: 8 }}><strong>Charges:</strong> request an itemized list of processing and other lender or third-party costs, taxes and any conditional waivers.</li>
            <li style={{ marginBottom: 8 }}><strong>Eligibility:</strong> check income and credit assessment, property requirements, loan-to-value limits, co-applicant rules and documentation for your case.</li>
            <li style={{ marginBottom: 8 }}><strong>Flexibility:</strong> compare prepayment, foreclosure, rate-conversion and servicing terms that apply to your loan category and sanction date.</li>
            <li><strong>Optional products:</strong> ask whether insurance or another add-on is optional, who provides it, and what alternatives are available.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>A simple side-by-side worksheet</h2>
          <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: 12 }}>
            <table style={{ width: "100%", minWidth: 560, borderCollapse: "collapse", fontSize: 14 }}>
              <thead><tr style={{ background: "var(--bg-muted)" }}>
                {["Offer detail", "SBI", "HDFC Bank", "ICICI Bank"].map((heading) => <th key={heading} style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>{heading}</th>)}
              </tr></thead>
              <tbody>
                {["Rate and rate type", "Benchmark / reset terms", "EMI and tenure", "Itemized fees", "Prepayment terms", "Optional add-ons"].map((label) => (
                  <tr key={label}><th scope="row" style={{ textAlign: "left", fontWeight: 600, padding: 12, borderBottom: "1px solid var(--border)" }}>{label}</th><td style={{ padding: 12, borderBottom: "1px solid var(--border)" }}>Fill from current written offer</td><td style={{ padding: 12, borderBottom: "1px solid var(--border)" }}>Fill from current written offer</td><td style={{ padding: 12, borderBottom: "1px solid var(--border)" }}>Fill from current written offer</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "10px 0 0" }}>The worksheet intentionally contains no bank rates or fees: enter the amounts and terms in the offers you receive.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>How to request comparable quotes</h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Share the same requested amount, tenure, property details and co-applicant information with each lender.</li>
            <li style={{ marginBottom: 8 }}>Ask each lender for a current written offer, repayment schedule and itemized charges, including applicable Key Facts Statement disclosures.</li>
            <li style={{ marginBottom: 8 }}>Ask what assumptions, eligibility conditions or promotional deadlines the quote depends on.</li>
            <li style={{ marginBottom: 8 }}>Check unclear terms directly with the lender and save the response with the offer documents.</li>
            <li>Compare total scheduled payments and flexibility—not only the headline rate or first EMI.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => (
            <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p>
            </details>
          ))}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
          Related: <Link href="/learn/loans" style={{ color: COLOR }}>loans hub</Link> · <Link href="/learn/loans/home-loan-true-cost" style={{ color: COLOR }}>home-loan costs</Link> · <Link href="/learn/loans/fixed-vs-floating-rate" style={{ color: COLOR }}>fixed vs floating rates</Link> · <Link href="/loan-calculator" style={{ color: COLOR }}>loan calculator</Link>
        </p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}>
          <strong>Editorial note.</strong> This is a comparison framework, not a live rate comparison or lender endorsement. Verify current eligibility, rates, fees and terms directly with each lender before making a decision.
        </footer>
      </main>
    </>
  );
}
