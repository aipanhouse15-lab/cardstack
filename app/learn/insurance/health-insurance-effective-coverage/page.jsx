import Link from "next/link";

export const metadata = {
  title: "Health Insurance Coverage: Limits, Co-pay & Exclusions | Assure Fintech",
  description: "Understand how admissibility, room limits, co-pay, deductibles, sub-limits and exclusions affect a health-insurance claim.",
  alternates: { canonical: "/learn/insurance/health-insurance-effective-coverage" },
};

const COLOR = "#DB2777";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does a sum insured equal the amount the insurer will pay for every claim?", acceptedAnswer: { "@type": "Answer", text: "No. The sum insured is a policy limit, but payment also depends on covered and admissible expenses, exclusions, waiting periods, co-payment, deductibles, sub-limits, room terms and remaining available cover." } },
    { "@type": "Question", name: "Can I estimate a health-insurance claim with a generic deduction chart?", acceptedAnswer: { "@type": "Answer", text: "Not reliably. Claim calculations depend on the actual policy wording, schedule, hospital bill, medical facts and insurer assessment. Use hypothetical examples only to understand clauses, not to predict a payout." } },
    { "@type": "Question", name: "What documents explain my health-insurance coverage?", acceptedAnswer: { "@type": "Answer", text: "Review the policy schedule, Customer Information Sheet and full policy wording. The CIS summarizes coverage, exclusions, sub-limits, deductibles, waiting periods, claims and grievance information, but confirm material details in the contract." } },
    { "@type": "Question", name: "Does cashless pre-authorization guarantee the full bill is covered?", acceptedAnswer: { "@type": "Answer", text: "No. Authorization is subject to policy terms, available cover, medical records and claim assessment. Confirm what the authorization includes and retain the final bill and claim decision documents." } },
  ],
};

export default function HealthInsuranceEffectiveCoveragePage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Health Insurance Coverage: Limits, Co-pay and Exclusions", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-04-20", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
      { "@type": "ListItem", position: 4, name: "Health-Insurance Coverage", item: "https://assurefintech.com/learn/insurance/health-insurance-effective-coverage" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #500724, #9d174d, #500724)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#fbcfe8", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>INSURANCE · UNDERSTAND YOUR COVER</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#fff1f2", margin: "0 0 12px" }}>What your health-insurance sum insured does—and does not—tell you</h1>
          <p style={{ color: "#fce7f3", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>The actual payable amount depends on covered expenses and your policy terms, not a universal payout formula.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Effective Coverage</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>A policy's sum insured is not a guaranteed payout for any particular hospital bill. The insurer assesses which expenses are covered and admissible under the contract, and applies the relevant limits and cost-sharing terms. The same bill can be treated differently under different policies.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Read the policy documents as a set</h2>
          <p style={{ margin: 0 }}>Start with the policy schedule for the insured people and chosen cover. Use the Customer Information Sheet to locate key terms, then check the full policy wording for definitions, exclusions, limits and claim procedures. IRDAI says the CIS summarizes coverage, exclusions, sub-limits, deductibles, waiting periods, free-look and grievance information; it does not replace the complete contract.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Separate the clauses that affect a claim</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}><strong>Coverage and exclusions:</strong> whether the treatment and expense are covered under the policy definition.</li>
            <li style={{ marginBottom: 8 }}><strong>Waiting periods:</strong> when specified conditions or treatments become eligible, subject to continuous coverage and the wording.</li>
            <li style={{ marginBottom: 8 }}><strong>Room and ICU terms:</strong> any accommodation cap and whether the wording links it to other expenses.</li>
            <li style={{ marginBottom: 8 }}><strong>Co-payment and deductible:</strong> the insured's share or threshold, and how it is calculated.</li>
            <li style={{ marginBottom: 8 }}><strong>Sub-limits:</strong> caps for specified treatments or expense categories.</li>
            <li><strong>Available sum insured:</strong> the remaining amount and any restoration or bonus provisions that actually apply.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Ask for an explanation before buying</h2>
          <p style={{ margin: "0 0 12px" }}>Use a hypothetical hospital scenario relevant to your family and ask the insurer to explain which clauses could affect the claim. Get the response in writing and note that it is illustrative; actual admissibility depends on medical facts, documents and policy conditions.</p>
          <p style={{ margin: 0 }}>IRDAI's <a href="https://irdai.gov.in/health-dept" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>health-insurance consumer page</a> advises buyers to pay attention to room and ICU limits, waiting periods, exclusions, sub-limits, co-payments, network providers and the Customer Information Sheet.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>If you need to make a claim</h2>
          <p style={{ margin: 0 }}>Follow the insurer's notification and documentation process, keep copies of bills and medical records, and ask for an itemized written explanation of any deduction or denial. Use the insurer's internal grievance channel if you disagree, then follow the official escalation process applicable to your case.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance guides</Link> · <Link href="/learn/insurance/room-rent-trap" style={{ color: COLOR }}>room-rent limits</Link> · <Link href="/learn/insurance/copay-vs-no-copay" style={{ color: COLOR }}>co-pay terms</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This is general information, not a claim prediction or coverage determination. Refer to your policy and insurer's written decision for your circumstances.</footer>
      </main>
    </>
  );
}
