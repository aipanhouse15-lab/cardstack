// Cards in this list deliberately render the branded bank fallback until artwork exists.
export const CARD_IDS_WITHOUT_IMAGES = Object.freeze([
  "csb-edge-plus",
  "hdfc-swiggy-ornge",
  "hdfc-tata-neu-infinity",
  "indusind-pinnacle",
  "roarbank-unity",
  "sc-smart",
]);

const fallbackIds = new Set(CARD_IDS_WITHOUT_IMAGES);

export function hasLocalCardImage(cardId) {
  return Boolean(cardId) && !fallbackIds.has(cardId);
}
