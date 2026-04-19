import TaxClient from "./TaxClient";

export const metadata = {
  title: "Tax Planning — Old vs New Regime, Which Saves More?",
  description: "Enter your salary and deductions to find out which tax regime saves you more. We calculate the honest number on 80C, HRA, NPS, and all deductions.",
  alternates: { canonical: "/learn/tax" },
};

export default function TaxPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tax Planning Guides — Which Regime Saves You More?",
    description: "Honest number on old vs new tax regime, 80C deductions, HRA calculation, and tax on credit card rewards.",
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
        { "@type": "Question", name: "Old vs new tax regime — which is better in 2026?", acceptedAnswer: { "@type": "Answer", text: "If your total deductions (80C + 80D + HRA + NPS + home loan) exceed ~₹3.75L, old regime saves more. Below that, new regime wins due to higher basic exemption (₹4L) and lower slab rates. Use our Tax Regime Calculator for your exact number." } },
        { "@type": "Question", name: "Are credit card rewards taxable in India?", acceptedAnswer: { "@type": "Answer", text: "Generally no. RBI treats credit card rewards as discounts on purchases, not income. However, if you earn rewards through a business expense and claim that expense as a deduction, the reward value may technically be taxable. In practice, no one reports this and there's no enforcement." } },
        { "@type": "Question", name: "What deductions are available beyond 80C?", acceptedAnswer: { "@type": "Answer", text: "Beyond the ₹1.5L 80C limit: 80D health insurance (₹25K-₹75K), 80CCD(1B) NPS extra (₹50K), 80E education loan interest (no limit), 80EEA home loan interest (₹1.5L), 80G donations, and HRA exemption. Stacking these can push total deductions past ₹5L." } },
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
