import Link from "next/link";

export const metadata = {
  title: "Health Insurance Co-payment: How to Compare Plans | Assure Fintech",
  description: "Understand health-insurance co-pay, deductibles and sub-limits, and compare the cost-sharing clauses in policy documents.",
  alternates: { canonical: "/learn/insurance/copay-vs-no-copay" },
};

const COLOR = "#DB2777";
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a co-payment in health insurance?", acceptedAnswer: { "@type": "Answer", text: "A co-payment is a cost-sharing term under which the insured pays a specified share of the admissible claim, as defined in the policy. Check the percentage, when it applies, and whether the insurer calculates it before or after other limits or deductions." } },
    { "@type": "Question", name: "Is a no-co-pay policy always better?", acceptedAnswer: { "@type": "Answer", text: "Not automatically. Compare the complete premium and terms, including room limits, deductibles, sub-limits, waiting periods, exclusions and the conditions under which any co-pay applies. A lower premium can come with other restrictions; only the policy wording shows the trade-off." } },
    { "@type": "Question", name: "Can a co-payment apply only in certain situations?", acceptedAnswer: { "@type": "Answer", text: "Some policies specify co-payment conditions linked to age, treatment, location, provider or another circumstance. These vary by product. Read the schedule and full wording and ask the insurer to explain examples that matter to you." } },
    { "@type": "Question", name: "How do I compare co-pay costs?", acceptedAnswer: { "@type": "Answer", text: "Use a hypothetical admissible claim amount and apply the exact policy formula, while keeping deductibles, room limits, sub-limits and excluded items separate. Ask the insurer to confirm the order of calculation; the final payable amount depends on admissibility and claim facts." } },
  ],
};

export default function CopayVsNoCopayPage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Health Insurance Co-payment: How to Compare Plans", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
      { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
      { "@type": "ListItem", position: 4, name: "Co-payment Terms", item: "https://assurefintech.com/learn/insurance/copay-vs-no-copay" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <header style={{ background: "linear-gradient(135deg, #500724, #9d174d, #500724)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#fbcfe8", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>INSURANCE · HEALTH COVER</div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, color: "#fff1f2", margin: "0 0 12px" }}>Health insurance co-payment: understand your share before you choose</h1>
          <p style={{ color: "#fce7f3", lineHeight: 1.6, maxWidth: 620, margin: 0 }}>Compare the exact policy formula and conditions with the rest of the cover—not just the premium.</p>
        </div>
      </header>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 72px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Co-payment</nav>

        <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 26px" }}>IRDAI describes co-payment as a specified amount or percentage of an admissible claim that the policyholder pays. The percentage alone is not enough to estimate your share: exclusions, deductibles, room limits and sub-limits may change which expenses are admissible and how the calculation works.</p>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Find the clause and the conditions</h2>
          <p style={{ margin: "0 0 12px" }}>Check the policy schedule, Customer Information Sheet and complete wording for the co-pay amount, eligible claim basis, and events or providers that trigger it. Look for different rules by age, treatment, city, hospital network or other circumstance. Ask the insurer to explain whether the share is applied before or after other limits.</p>
          <p style={{ margin: 0 }}>IRDAI's <a href="https://irdai.gov.in/health-dept" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>health-insurance guidance</a> lists co-payment alongside room limits, sub-limits, deductibles, exclusions and waiting periods as policy terms consumers should check.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Use a worked example—but match the policy's formula</h2>
          <p style={{ margin: "0 0 12px" }}>For a simple illustration only: if a claim has an admissible amount of ₹1,00,000 and a policy applies 10% co-pay to that full amount, the insured share under that clause would be ₹10,000. Actual claims may have non-admissible items, caps, deductibles or other provisions; a percentage of the hospital bill is not necessarily the same as a percentage of the admissible claim.</p>
          <p style={{ margin: 0 }}>Ask the insurer to provide an example using the exact wording and explain how the co-pay combines with any deductible, room-rent clause or sub-limit. Keep each adjustment visible rather than treating them as one generic percentage.</p>
        </section>

        <section style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Compare the complete plan</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Annual premium and renewal terms.</li>
            <li style={{ marginBottom: 8 }}>Co-pay trigger, percentage and calculation base.</li>
            <li style={{ marginBottom: 8 }}>Deductibles, room/ICU limits, disease sub-limits and exclusions.</li>
            <li style={{ marginBottom: 8 }}>Waiting periods, pre-existing-condition terms and continuity credits.</li>
            <li style={{ marginBottom: 8 }}>Network access, cashless process and claim-document requirements.</li>
            <li>Coverage for each insured member and any family-floater sharing.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.name}</summary><p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance guides</Link> · <Link href="/learn/insurance/room-rent-trap" style={{ color: COLOR }}>room-rent limits</Link> · <Link href="/learn/insurance/health-insurance-effective-coverage" style={{ color: COLOR }}>effective coverage</Link></p>
        <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}><strong>Editorial note.</strong> This general guide does not determine whether a claim is payable. The policy terms and claim facts control; confirm interpretation with the insurer.</footer>
      </main>
    </>
  );
}
