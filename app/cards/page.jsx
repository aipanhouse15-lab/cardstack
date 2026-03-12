import { CARDS, CATEGORIES, BANKS } from "@/data/cards";
import Link from "next/link";
import CardCatalogClient from "./CardCatalogClient";

export const metadata = {
  title: "Best Credit Cards in India 2026 — Compare 25+ Cards | Assure Fintech",
  description: "Browse and compare 25+ Indian credit cards by category. Best free cards, best cashback, best for dining, travel, fuel, and more. Real cashback rates after caps.",
};

// Define category winners
function getCategoryWinners() {
  const free = CARDS.filter(c => c.fee === 0).sort((a, b) => {
    const aMax = Math.max(...Object.values(a.rewards));
    const bMax = Math.max(...Object.values(b.rewards));
    return bMax - aMax;
  });

  const bestForCategory = (catId) => {
    return [...CARDS].sort((a, b) => (b.rewards[catId] || 0) - (a.rewards[catId] || 0)).slice(0, 4);
  };

  const premium = CARDS.filter(c => c.fee >= 5000).sort((a, b) => {
    const aAvg = Object.values(a.rewards).reduce((s, v) => s + v, 0) / Object.keys(a.rewards).length;
    const bAvg = Object.values(b.rewards).reduce((s, v) => s + v, 0) / Object.keys(b.rewards).length;
    return bAvg - aAvg;
  });

  const cashback = CARDS.filter(c => c.type === "Cashback" || c.rewards.online >= 3).sort((a, b) => {
    const aMax = Math.max(...Object.values(a.rewards));
    const bMax = Math.max(...Object.values(b.rewards));
    return bMax - aMax;
  });

  return {
    free: free.slice(0, 5),
    dining: bestForCategory("dining"),
    travel: bestForCategory("travel"),
    online: bestForCategory("online"),
    fuel: CARDS.filter(c => c.rewards.fuel > 0).sort((a, b) => b.rewards.fuel - a.rewards.fuel).slice(0, 4),
    groceries: bestForCategory("groceries"),
    premium: premium.slice(0, 4),
    cashback: cashback.slice(0, 4),
  };
}

export default function CardsPage() {
  const winners = getCategoryWinners();

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Best Credit Cards in India 2026",
    description: "Compare 25+ Indian credit cards. Best free cards, cashback cards, travel cards, dining cards and more.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: CARDS.length,
      itemListElement: CARDS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "FinancialProduct",
          name: c.name,
          provider: { "@type": "Organization", name: c.bank },
          url: `https://assurefintech.com/cards/${c.id}`,
        },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }} />
      <CardCatalogClient winners={winners} allCards={CARDS} banks={BANKS} categories={CATEGORIES} />
    </>
  );
}
