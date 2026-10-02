import { CARDS, CATEGORIES, BANKS, isSourceReviewed, isRecommendable, calcReward } from "@/data/cards";
import Link from "next/link";
import CardCatalogClient from "./CardCatalogClient";
const CURRENT_CARDS = CARDS.filter(isSourceReviewed);

export const metadata = {
  title: `Credit Cards in India — Compare ${CURRENT_CARDS.length} Source-Linked Products`,
  description: `Compare ${CURRENT_CARDS.length} source-linked card records by fees, eligible earn rules and redemption options. Numerical estimates are available only where a reward model is supported; unresolved historical references are listed separately.`,
  alternates: { canonical: "/cards" },
};

function getCategoryWinners() {
  const verifiedCards = CARDS.filter(isRecommendable);
  const grossScenario = c => calcReward(c, "online", 10000).cashback;
  const free = verifiedCards.filter(c => c.fee === 0 && !c.joiningFee).sort((a, b) => grossScenario(b) - grossScenario(a));
  const bestForCategory = (catId) => [...verifiedCards].sort((a, b) => calcReward(b, catId, 10000).cashback - calcReward(a, catId, 10000).cashback || a.fee - b.fee).slice(0, 4);
  const premium = verifiedCards.filter(c => c.fee >= 5000).sort((a,b) => calcReward(b,'travel',10000).cashback - calcReward(a,'travel',10000).cashback);
  const cashback = verifiedCards.filter(c => c.type === "Cashback" || c.rewards.online >= 3).sort((a,b) => grossScenario(b) - grossScenario(a));
  return {
    free: free.slice(0, 5), dining: bestForCategory("dining"), travel: bestForCategory("travel"),
    online: bestForCategory("online"), fuel: verifiedCards.filter(c => c.rewards.fuel > 0).sort((a, b) => calcReward(b,'fuel',10000).cashback - calcReward(a,'fuel',10000).cashback).slice(0, 4),
    groceries: bestForCategory("groceries"), premium: premium.slice(0, 4), cashback: cashback.slice(0, 4),
  };
}

export default function CardsPage() {
  const winners = getCategoryWinners();
  const catalogSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Best Credit Cards in India 2026",
    description: `Compare ${CURRENT_CARDS.length} source-linked Indian credit-card records.`,
    mainEntity: { "@type": "ItemList", numberOfItems: CURRENT_CARDS.length,
      itemListElement: CURRENT_CARDS.map((c, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "FinancialProduct", name: c.name, provider: { "@type": "Organization", name: c.bank }, url: `https://www.assurefintech.com/cards/${c.id}` } })),
    },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }} />
    <CardCatalogClient winners={winners} allCards={CURRENT_CARDS} banks={BANKS} categories={CATEGORIES} />
    <section className="px-6 pb-16 max-w-[1100px] mx-auto"><h2 className="text-xl font-bold mb-4">Historical and unresolved product references</h2><p className="mb-4">These records remain accessible for existing-cardholder and variant lookups. They are not fee quotes or new-card reward recommendations.</p><div className="flex flex-wrap gap-4">{CARDS.filter(c=>!isSourceReviewed(c)).map(c=><Link key={c.id} href={`/cards/${c.id}`}>{c.name}</Link>)}</div></section>
  </>);
}
