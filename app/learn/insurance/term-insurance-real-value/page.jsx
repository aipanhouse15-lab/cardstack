import Link from "next/link";

export const metadata = {
  title: "How Much Term Life Insurance Cover Do You Need? | Assure Fintech",
  description: "Estimate term-life cover using dependants, liabilities, future goals, existing assets and inflation scenarios, then compare policy terms.",
  alternates: { canonical: "/learn/insurance/term-insurance-real-value" },
};

const COLOR = "#DB2777";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a fixed multiple of income enough term insurance?", acceptedAnswer: { "@type": "Answer", text: "An income multiple can be a starting point, but it does not account for your debts, dependants, future goals, existing assets, other cover or inflation. Estimate the family's financial gap and review assumptions periodically." } },
    { "@type": "Question", name: "How does inflation affect a life-insurance sum assured?", acceptedAnswer: { "@type": "Answer", text: "Inflation reduces the future purchasing power of a fixed nominal amount. Model a range of possible inflation assumptions for the period your dependants may need support; no single rate or cover amount fits everyone." } },
    { "@type": "Question", name: "Should I choose a level or increasing term cover?", acceptedAnswer: { "@type": "Answer", text: "Compare how the cover changes, when increases occur, premium cost, eligibility and policy conditions. An increasing benefit may address some future needs but can cost more; review the exact product illustration and wording." } },
    { "@type": "Question", name: "What should I disclose when applying for term insurance?", acceptedAnswer: { "@type": "Answer", text: "Answer the insurer's proposal questions completely and accurately, including requested health, lifestyle, occupation, financial and existing-policy details. Keep a copy of the application and review the policy documents and exclusions after issuance." } },
  ],
};

export default function TermInsuranceRealValuePage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "How Much Term Life Insurance Cover Do You Need?", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
      { "@type": "ListItem", position: 4, name: "Term-Life Cover", item: "https://assurefintech.com/learn/insurance/term-insurance-real-value" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #500724, #9d174d, #500724)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#fbcfe8", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>INSURANCE · LIFE COVER</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#fff1f2", margin: "0 0 12px" }}>How much term-life cover might your family need?</h1>
          <p style={{ color: "#fce7f3", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>Estimate a financial gap from your family's obligations instead of relying on a universal income multiple.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Term-Life Cover</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>A life-cover estimate should reflect the financial support your household would need if your income stopped—not simply the largest amount an insurer offers. It is a planning exercise with assumptions, not a guarantee or personalized recommendation.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Build an estimate from obligations and resources</h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>List dependants and the period for which each may need financial support.</li>
            <li style={{ marginBottom: 8 }}>Estimate essential household costs and specific future goals, such as education or caregiving.</li>
            <li style={{ marginBottom: 8 }}>Add debts or other obligations you would want to repay.</li>
            <li style={{ marginBottom: 8 }}>Subtract assets and existing life cover that would realistically be available for those needs.</li>
            <li>Test the result against different inflation, investment-return and timing assumptions.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Allow for future purchasing power</h2>
          <p style={{ margin: 0 }}>A fixed rupee amount buys less over time if prices rise. To make an estimate more useful, model a range of inflation scenarios over the years your family may rely on the benefit. If considering an increasing-cover product, check the schedule of increases, resulting premiums, maximum cover, eligibility and any conditions in the policy illustration.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare policy terms—not just the premium</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Benefit amount, term, payout options and any escalation.</li>
            <li style={{ marginBottom: 8 }}>Premium payment period, exclusions and policy conditions.</li>
            <li style={{ marginBottom: 8 }}>Optional riders and whether their benefits duplicate other cover.</li>
            <li style={{ marginBottom: 8 }}>Insurer's underwriting outcome and the final issued terms.</li>
            <li>Accurate disclosure of health, occupation, lifestyle and existing cover.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Review cover as life changes</h2>
          <p style={{ margin: 0 }}>Major changes—such as a new dependant, home loan, repayment of debt, change in income or children becoming financially independent—can change the protection gap. Review your needs and existing policies periodically, while considering the cost and underwriting conditions of any new cover.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance guides</Link> · <Link href="/learn/insurance/health-insurance-for-parents" style={{ color: COLOR }}>health cover for parents</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This is general information, not financial advice or an insurance recommendation. Assess your own needs and verify policy terms with the insurer before applying.</footer>
      </main>
    </>
  );
}
