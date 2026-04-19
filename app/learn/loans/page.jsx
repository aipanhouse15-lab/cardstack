import LoansClient from "./LoansClient";

export const metadata = {
  title: "Loans — The True Cost Banks Don't Show You",
  description: "Your 8.5% home loan actually costs 9.35% after processing fees, mandatory insurance, prepayment lock-in, and documentation charges. We calculate the honest number on every loan.",
  alternates: { canonical: "/learn/loans" },
};

export default function LoansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Loan Guides — The True Cost Banks Don't Show You",
    description: "Honest number on every loan: home loans, personal loans, education loans. Real effective APR after all hidden charges.",
    url: "https://www.assurefintech.com/learn/loans",
    isPartOf: { "@type": "WebSite", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
        { "@type": "ListItem", position: 2, name: "Loans", item: "https://www.assurefintech.com/learn/loans" },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the real cost of a home loan in India?", acceptedAnswer: { "@type": "Answer", text: "An 8.5% home loan typically costs 9.3-9.5% effective APR after processing fees (0.25-0.5%), mandatory insurance, documentation charges, and prepayment penalties. On a ₹50L loan over 20 years, this means ₹4-5L in extra costs." } },
        { "@type": "Question", name: "How to calculate effective APR on a loan?", acceptedAnswer: { "@type": "Answer", text: "Add all upfront costs (processing fee, insurance, documentation) to the loan interest. Divide total cost by loan tenure to get annual cost. Effective APR = (total annual cost / loan amount) × 100. Use our Loan Truth Calculator for instant results." } },
        { "@type": "Question", name: "Is prepayment of home loan worth it?", acceptedAnswer: { "@type": "Answer", text: "Usually yes. Even partial prepayment in the first 5 years saves significant interest. However, watch for prepayment penalties — fixed rate loans may charge 2-3% of outstanding principal. Floating rate loans cannot be charged prepayment penalties per RBI rules." } },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LoansClient />
    </>
  );
}
