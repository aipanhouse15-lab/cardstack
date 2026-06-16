// Card Editorials Index — 50 cards across 5 batches
// Import this to access editorials for cards not in cards.js
// Usage: import { getEditorial } from "@/data/editorials";

import { CARD_EDITORIALS_BATCH_1 } from "./batch-1-editorials";
import { CARD_EDITORIALS_BATCH_2 } from "./batch-2-editorials";
import { CARD_EDITORIALS_BATCH_3 } from "./batch-3-editorials";
import { CARD_EDITORIALS_BATCH_4 } from "./batch-4-editorials";
import { CARD_EDITORIALS_BATCH_5 } from "./batch-5-editorials";

export const CARD_EDITORIALS = {
  ...CARD_EDITORIALS_BATCH_1,
  ...CARD_EDITORIALS_BATCH_2,
  ...CARD_EDITORIALS_BATCH_3,
  ...CARD_EDITORIALS_BATCH_4,
  ...CARD_EDITORIALS_BATCH_5,
};

export function getEditorial(cardId) {
  return CARD_EDITORIALS[cardId] || null;
}
