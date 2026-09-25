import SavingsClient from "./SavingsClient";

export const metadata = {
  title: "Savings & Fixed Deposits: Compare Returns, Tax and Risk | Assure Fintech",
  description: "Compare fixed deposits, PPF and debt funds using clearly labelled assumptions for returns, tax, inflation, liquidity and risk.",
  alternates: { canonical: "/learn/savings" },
};

export default function SavingsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Savings & FD Guides — Real Returns After Tax & Inflation",
    description: "Guides to fixed deposits, PPF and savings, with return assumptions, tax, inflation, liquidity and risk explained.",
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
        { "@type": "Question", name: "How do I estimate the real return on an FD?", acceptedAnswer: { "@type": "Answer", text: "Use the actual issuer rate and compounding terms, your applicable tax rate and an explicit inflation assumption. TDS is a tax prepayment and does not determine your final tax liability. Results are an illustration, not a forecast." } },
        { "@type": "Question", name: "Is PPF better than FD for tax saving?", acceptedAnswer: { "@type": "Answer", text: "There is no universal winner. PPF and FDs differ in rate-setting, lock-in, liquidity, risk and tax treatment. Eligibility and tax outcomes depend on scheme rules and the applicable tax year; compare those terms for your own circumstances." } },
        { "@type": "Question", name: "Do senior citizens get better FD rates or tax treatment?", acceptedAnswer: { "@type": "Answer", text: "Some institutions offer different rates or terms for senior citizens, but offers vary. Tax deductions and withholding rules depend on the applicable tax law and year. Verify the current issuer schedule and Income Tax Department guidance rather than relying on a generic rate premium or deduction." } },
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
