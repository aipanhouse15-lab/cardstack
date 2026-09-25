import TaxClient from "./TaxClient";

export const metadata = {
  title: "Indian Income Tax Guides — Compare Regimes and Deductions",
  description: "Understand Indian income-tax regimes, deductions and tax calculations. Rules differ by tax year and taxpayer; verify current official guidance before filing.",
  alternates: { canonical: "/learn/tax" },
};

export default function TaxPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Indian Income Tax Guides",
    description: "Guides to Indian tax regimes, deductions, HRA and taxation questions. Rules vary by tax year and taxpayer.",
    url: "https://www.assurefintech.com/learn/tax",
    isPartOf: { "@type": "WebSite", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
        { "@type": "ListItem", position: 2, name: "Tax Planning", item: "https://www.assurefintech.com/learn/tax" },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Which tax regime should I choose?", acceptedAnswer: { "@type": "Answer", text: "There is no universal deduction threshold at which one regime always wins. Compare your estimated tax under the rules for the relevant tax year, accounting for eligible deductions, exemptions, rebates, income types, age and other applicable conditions. Use the Income Tax Department's current tools and guidance before filing." } },
        { "@type": "Question", name: "Are credit card rewards taxable in India?", acceptedAnswer: { "@type": "Answer", text: "Tax treatment can depend on how rewards are earned and used, including whether they relate to business expenditure or taxable income. This site does not provide an individual tax determination; consult current Income Tax Department guidance or a qualified tax professional for your situation." } },
        { "@type": "Question", name: "Which deductions are available?", acceptedAnswer: { "@type": "Answer", text: "Deductions and exemptions depend on the applicable tax regime and tax year. Some deductions available under the old regime are not available under the default new regime, while specific exceptions may apply. Check current official guidance and eligibility conditions before claiming an amount." } },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <TaxClient />
    </>
  );
}
