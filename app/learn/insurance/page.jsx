import InsuranceClient from "./InsuranceClient";

export const metadata = {
  title: "Insurance — What Your Policy Actually Covers",
  description: "Your ₹10L health insurance policy pays out ~₹4.2L after co-pay, room rent sub-limits, disease caps, and waiting periods. We calculate the honest coverage number.",
  alternates: { canonical: "/learn/insurance" },
};

export default function InsurancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insurance Guides — What Your Policy Actually Covers",
    description: "Honest number on health insurance, term insurance, and claim settlements. Real effective coverage after all fine print deductions.",
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
        { "@type": "Question", name: "Why does a ₹10L health insurance policy only cover ₹4.2L?", acceptedAnswer: { "@type": "Answer", text: "Co-pay deductions (10-20%), room rent sub-limits (proportional reduction), disease-specific caps (50% of sum insured), consumables exclusions, and waiting periods combine to reduce your effective coverage by 40-60%. Use our Insurance Coverage Calculator to see your policy's real number." } },
        { "@type": "Question", name: "What is room rent sub-limit in health insurance?", acceptedAnswer: { "@type": "Answer", text: "Room rent sub-limit caps the daily room charge your insurer will cover (e.g., ₹8,000/day). If your actual room costs ₹12,000/day, the insurer applies a proportional reduction (8/12 = 66.7%) to your entire claim — not just the room cost. This is the biggest hidden reducer in health insurance." } },
        { "@type": "Question", name: "Is co-pay health insurance worth it?", acceptedAnswer: { "@type": "Answer", text: "Co-pay plans cost 15-25% less in premium but you pay 10-20% of every claim from pocket. For healthy young individuals, the premium savings may outweigh the co-pay risk. For families or older adults, no-copay is strongly recommended." } },
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
