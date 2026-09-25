import LoansClient from "./LoansClient";

export const metadata = {
  title: "Loan Guides & Calculators | Assure Fintech",
  description: "Guides and calculators to help compare loan interest, repayment schedules, fees and prepayment terms. Rates and charges vary by lender and borrower.",
  alternates: { canonical: "/learn/loans" },
};

export default function LoansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Loan Guides and Calculators",
    description: "Guides to home, personal and education loans, with tools to estimate repayments and understand fees and terms.",
    url: "https://www.assurefintech.com/learn/loans",
    isPartOf: { "@type": "WebSite", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
        { "@type": "ListItem", position: 2, name: "Loans", item: "https://www.assurefintech.com/learn/loans" },
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
