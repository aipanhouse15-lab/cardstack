import InsuranceClient from "./InsuranceClient";

export const metadata = {
  title: "Insurance Guides — Understand Policy Coverage and Claims",
  description: "Learn how to review insurance coverage, co-payments, exclusions, waiting periods, claim data and policy terms. Benefits vary by product and contract.",
  alternates: { canonical: "/learn/insurance" },
};

export default function InsurancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insurance Guides — Understand Policy Coverage and Claims",
    description: "Guides to health and term insurance, policy terms, claim data and exclusions. Coverage depends on the policy contract and claim circumstances.",
    url: "https://www.assurefintech.com/learn/insurance",
    isPartOf: { "@type": "WebSite", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
        { "@type": "ListItem", position: 2, name: "Insurance", item: "https://www.assurefintech.com/learn/insurance" },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Why may a health insurance claim be less than the sum insured?", acceptedAnswer: { "@type": "Answer", text: "The payable amount depends on admissible expenses and the policy contract, including any limits, co-payment, deductible, exclusions, waiting periods and claim-specific facts. There is no universal payout figure. Check the policy wording and Customer Information Sheet and ask the insurer about unclear terms." } },
        { "@type": "Question", name: "How do room rent sub-limits affect a health insurance claim?", acceptedAnswer: { "@type": "Answer", text: "Room and ICU limits and any linked proportional deductions depend on the specific policy wording. Review the limits and ask the insurer how a room choice may affect other admissible expenses under your contract." } },
        { "@type": "Question", name: "Is a co-pay health insurance policy worth it?", acceptedAnswer: { "@type": "Answer", text: "Compare the quoted premium with the cost-sharing obligation on eligible claims, along with coverage, exclusions and limits. The right choice depends on the policy and the customer's circumstances." } },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <InsuranceClient />
    </>
  );
}
