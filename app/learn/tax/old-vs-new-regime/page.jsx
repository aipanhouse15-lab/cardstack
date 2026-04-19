import OldVsNewClient from "./OldVsNewClient";

export const metadata = {
  title: "Old vs New Tax Regime 2026: I Calculated the Breakeven at Every Income Level",
  description: "Budget 2025 makes income up to ₹12.75L tax-free under new regime. But old regime still wins if deductions exceed ₹3.75L. I ran the numbers at ₹8L, ₹10L, ₹12L, ₹15L, ₹20L, and ₹25L — here's which regime wins at each level.",
  alternates: { canonical: "/learn/tax/old-vs-new-regime" },
  openGraph: {
    title: "Old vs New Tax Regime 2026: Which Actually Saves You More?",
    description: "Budget 2025 tax slabs, breakeven analysis at every income level, deduction stacking guide. Calculated by Ash K at Assure Fintech.",
    type: "article",
  },
  other: {
    "article:author": "Ash K",
    "article:published_time": "2026-03-22T00:00:00+05:30",
    "article:modified_time": "2026-04-19T00:00:00+05:30",
  },
};

export default function OldVsNewRegimePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Old vs New Tax Regime 2026: I Calculated the Breakeven at Every Income Level",
    description: "Budget 2025 makes income up to ₹12.75L tax-free under new regime. But old regime still wins if deductions exceed ₹3.75L. Breakeven analysis at every income level.",
    author: { "@type": "Person", name: "Ash K", url: "https://www.assurefintech.com/about" },
    publisher: { "@type": "Organization", name: "Assure Fintech", url: "https://www.assurefintech.com" },
    datePublished: "2026-03-22",
    dateModified: "2026-04-19",
    mainEntityOfPage: "https://www.assurefintech.com/learn/tax/old-vs-new-regime",
    url: "https://www.assurefintech.com/learn/tax/old-vs-new-regime",
    image: "https://www.assurefintech.com/opengraph-image",
    articleSection: "Tax Planning",
    keywords: ["old vs new tax regime", "tax regime comparison 2026", "income tax slabs 2025-26", "which tax regime is better", "tax breakeven deductions"],
    wordCount: 3600,
    inLanguage: "en-IN",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Can I switch between old and new tax regime every year?", acceptedAnswer: { "@type": "Answer", text: "Yes, if you're salaried with no business income. You can choose a different regime each financial year at the time of filing your ITR. There's no lock-in." } },
      { "@type": "Question", name: "Is the ₹12L rebate available for income from capital gains?", acceptedAnswer: { "@type": "Answer", text: "No. The Section 87A rebate of ₹60,000 applies only to normal income like salary and interest. Capital gains are taxed separately and don't qualify for this rebate." } },
      { "@type": "Question", name: "Old vs new tax regime — which is better for ₹15L salary?", acceptedAnswer: { "@type": "Answer", text: "At ₹15L CTC, it depends on your deductions. If total deductions (HRA + 80C + 80D + NPS) exceed ₹3.75L, old regime saves more. Below that, new regime wins. Use our Tax Regime Calculator for your exact number." } },
      { "@type": "Question", name: "Is the Budget 2026 tax slab different from Budget 2025?", acceptedAnswer: { "@type": "Answer", text: "No. Budget 2026 did not change any tax slabs. The slabs introduced in Budget 2025 continue for FY 2026-27." } },
      { "@type": "Question", name: "Does employer NPS contribution get deduction in new regime?", acceptedAnswer: { "@type": "Answer", text: "Yes. Employer's NPS contribution up to 14% of salary is deductible under both regimes under Section 80CCD(2). Only the self-contribution deduction of ₹50K under 80CCD(1B) is old-regime-only." } },
      { "@type": "Question", name: "What is the breakeven deduction for old vs new regime?", acceptedAnswer: { "@type": "Answer", text: "Approximately ₹3.75 lakh in total deductions (including old regime standard deduction of ₹50K). If your HRA + 80C + 80D + NPS + home loan exceeds this, old regime saves more tax." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "Tax Planning", item: "https://www.assurefintech.com/learn/tax" },
      { "@type": "ListItem", position: 3, name: "Old vs New Tax Regime", item: "https://www.assurefintech.com/learn/tax/old-vs-new-regime" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OldVsNewClient />
    </>
  );
}
