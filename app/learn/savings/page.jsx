import SavingsClient from "./SavingsClient";

export const metadata = {
  title: "Savings & FDs — Your Real Return After Tax & Inflation",
  description: "Your 7.5% FD returns 0.15% after TDS and inflation. We calculate the honest number on fixed deposits, PPF, and savings instruments in India.",
  alternates: { canonical: "/learn/savings" },
};

export default function SavingsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Savings & FD Guides — Real Returns After Tax & Inflation",
    description: "Honest number on fixed deposits, PPF, and savings. Real returns after TDS, inflation erosion, and lock-in costs.",
    url: "https://www.assurefintech.com/learn/savings",
    isPartOf: { "@type": "WebSite", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
        { "@type": "ListItem", position: 2, name: "Savings", item: "https://www.assurefintech.com/learn/savings" },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the real return on a 7.5% FD after tax?", acceptedAnswer: { "@type": "Answer", text: "In the 30% tax bracket, a 7.5% FD yields ~5.25% post-tax. After adjusting for 5-6% inflation, your real return is 0-0.25%. In some years, FDs deliver negative real returns — your money actually loses purchasing power." } },
        { "@type": "Question", name: "Is PPF better than FD for tax saving?", acceptedAnswer: { "@type": "Answer", text: "PPF at 7.1% is fully tax-exempt (EEE status) — no tax on interest or maturity. A 7.5% FD in the 30% bracket gives 5.25% post-tax. PPF wins on post-tax returns but has a 15-year lock-in vs 5 years for tax-saving FD." } },
        { "@type": "Question", name: "Do senior citizens get better FD rates?", acceptedAnswer: { "@type": "Answer", text: "Yes, most banks offer 0.25-0.50% higher rates for senior citizens. Plus, seniors get ₹50,000 interest exemption under Section 80TTB (vs ₹10,000 for others under 80TTA). This makes FDs relatively more attractive for retirees." } },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SavingsClient />
    </>
  );
}
