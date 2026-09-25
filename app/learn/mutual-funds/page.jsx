import MutualFundsClient from "./MutualFundsClient";

export const metadata = {
  title: "Mutual Fund Guides: Returns, Costs and Risk",
  description: "Practical guides to mutual-fund return measures, plan costs, SIPs, risk and current scheme disclosures.",
  alternates: { canonical: "/learn/mutual-funds" },
};

export default function MutualFundsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mutual Fund Guides: Returns, Costs and Risk",
    description: "Educational guides to mutual-fund return measures, plan costs, SIPs, risk and scheme disclosures.",
    url: "https://www.assurefintech.com/learn/mutual-funds",
    isPartOf: { "@type": "WebSite", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
        { "@type": "ListItem", position: 2, name: "Mutual Funds", item: "https://www.assurefintech.com/learn/mutual-funds" },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How should I compare mutual-fund returns?", acceptedAnswer: { "@type": "Answer", text: "Use a return measure suited to the cash flows and period being assessed, such as CAGR for a single lump-sum interval or XIRR for dated cash flows. Check the same scheme, plan, option and dates; returns are not guaranteed and do not predict future results." } },
        { "@type": "Question", name: "What should I check before comparing direct and regular plans?", acceptedAnswer: { "@type": "Answer", text: "Compare the current total expense ratio and scheme documents for the exact plan, then consider distribution or service support, investment risk, tax and any costs of switching. Expense ratios and other terms can change." } },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MutualFundsClient />
    </>
  );
}
