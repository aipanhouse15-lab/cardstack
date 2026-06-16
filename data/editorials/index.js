// Card Editorials Index — 50 cards across 5 batches
// Normalizes batch format → card template format
// Usage: import { getEditorial } from "@/data/editorials";

import { CARD_EDITORIALS_BATCH_1 } from "./batch-1-editorials";
import { CARD_EDITORIALS_BATCH_2 } from "./batch-2-editorials";
import { CARD_EDITORIALS_BATCH_3 } from "./batch-3-editorials";
import { CARD_EDITORIALS_BATCH_4 } from "./batch-4-editorials";
import { CARD_EDITORIALS_BATCH_5 } from "./batch-5-editorials";

const RAW = {
  ...CARD_EDITORIALS_BATCH_1,
  ...CARD_EDITORIALS_BATCH_2,
  ...CARD_EDITORIALS_BATCH_3,
  ...CARD_EDITORIALS_BATCH_4,
  ...CARD_EDITORIALS_BATCH_5,
};

// Transform batch format → card page template format
function normalize(raw) {
  if (!raw) return null;
  return {
    verdict: {
      headline: raw.verdict || "",
      body: raw.verdictDetail || raw.verdict || "",
      idealFor: raw.idealFor || "",
      skipIf: raw.skipIf || "",
    },
    bestFor: raw.bestUsedFor
      ? raw.bestUsedFor.map(b => ({ category: b.use || b.category || "", reason: b.detail || b.reason || "" }))
      : undefined,
    avoidFor: raw.avoidFor
      ? raw.avoidFor.map(a => ({ category: a.category || "", reason: a.reason || "", altCard: a.alternative || a.altCard || null }))
      : undefined,
    pairWith: raw.combos
      ? raw.combos.map(c => ({ combo: c.cardName || c.card || "", fee: c.totalFee || "", reason: c.reason || "", cardId: c.card || null }))
      : undefined,
    faq: raw.faq || undefined,
  };
}

export function getEditorial(cardId) {
  const raw = RAW[cardId];
  return raw ? normalize(raw) : null;
}
