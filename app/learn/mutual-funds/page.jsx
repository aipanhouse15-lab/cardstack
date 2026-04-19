import MutualFundsClient from "./MutualFundsClient";

export const metadata = {
  title: "Mutual Funds — Your Real Return After All Charges",
  description: "Your 15% CAGR fund gives you 11.8% after expense ratio, exit load, and LTCG tax. We calculate the honest number on mutual fund returns.",
  alternates: { canonical: "/learn/mutual-funds" },
};

export default function MutualFundsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mutual Fund Guides — Real Returns After All Charges",
    description: "Honest number on mutual fund returns: CAGR vs actual, direct vs regular, SIP real returns after expense ratio and tax.",
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
        { "@type": "Question", name: "Why does my 15% CAGR mutual fund only give 11.8%?", acceptedAnswer: { "@type": "Answer", text: "The advertised 15% CAGR doesn't account for expense ratio (1-2.5% annually), exit load (1% if redeemed within 1 year), and LTCG tax (12.5% on gains above ₹1.25L). A direct plan at 1% expense ratio with 12.5% LTCG on a 15% gross return gives ~12.5% net. Regular plans lose another 0.5-1.5% to distributor commission." } },
        { "@type": "Question", name: "Direct vs regular mutual fund — how much difference?", acceptedAnswer: { "@type": "Answer", text: "Direct plans save 0.5-1.5% annually by cutting distributor commission. On a ₹10,000/month SIP over 20 years at 12% return, this 1% difference means ₹12L more in your corpus — the compounding effect is massive." } },
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
