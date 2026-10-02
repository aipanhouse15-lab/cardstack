import HomeClient from "@/components/HomeClient";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which credit card gives the best dining rewards in India?", acceptedAnswer: { "@type": "Answer", text: "There is no universal best dining card. Compare the exact card variant's eligible restaurant and food-delivery transactions, reward caps, redemption value, annual cost and any transaction minimums. A surcharge waiver, points and statement cashback are different benefits." } },
      { "@type": "Question", name: "What is the best lifetime free credit card in India?", acceptedAnswer: { "@type": "Answer", text: "A lifetime-free card is useful only when its current, eligible benefits match your spending. Compare verified card terms, merchant eligibility, caps and redemption value; a zero annual fee does not guarantee that every transaction earns rewards." } },
      { "@type": "Question", name: "Which credit card should I use for fuel in India?", acceptedAnswer: { "@type": "Answer", text: "Compare the card's eligible fuel range, surcharge waiver, any separate reward, monthly or statement-cycle cap and fuel surcharge tax. Calculate the net saving for the exact transaction; fuel benefits should not be generalised across cards." } },
      { "@type": "Question", name: "How do I maximize credit card rewards in India?", acceptedAnswer: { "@type": "Answer", text: "Use different cards for different spending categories — no single card is best for everything. Use Assure Fintech's Smart Swipe Guide to see which card to use for dining, travel, groceries, fuel, and more based on the cards you own." } },
      { "@type": "Question", name: "Which card gives the best Amazon cashback?", acceptedAnswer: { "@type": "Answer", text: "Compare Amazon Pay ICICI's eligible Amazon rate for your Prime status with current issuer terms. For other online purchases, SBI SimplyCLICK earns reward points at different rates for listed partner and other eligible online transactions; SBI Cashback has separate eligibility and caps. These are not interchangeable cash rates, so compare redemption value, caps and fees for the merchants you actually use." } },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Assure Fintech",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    description: "Free credit card optimization tool for India. Compare 76+ cards, find the best card for every purchase, and discover how much you could save.",
    featureList: "Smart Swipe Guide, Card Gap Finder, Swipe Check, Head-to-Head Comparison, 76+ Indian credit cards, Real savings calculator",
    screenshot: "https://www.assurefintech.com/og-image.png",
    author: { "@type": "Organization", name: "Assure Fintech" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <HomeClient />
    </>
  );
}
