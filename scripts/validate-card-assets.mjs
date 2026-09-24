import { readFile, readdir } from "node:fs/promises";

const cardsSource = await readFile(new URL("../data/cards.js", import.meta.url), "utf8");
const cardsModuleUrl = `data:text/javascript;base64,${Buffer.from(cardsSource).toString("base64")}`;
const { CARDS } = await import(cardsModuleUrl);

const assetSource = await readFile(new URL("../data/card-assets.js", import.meta.url), "utf8");
const assetModuleUrl = `data:text/javascript;base64,${Buffer.from(assetSource).toString("base64")}`;
const { CARD_IDS_WITHOUT_IMAGES } = await import(assetModuleUrl);
const fallbackIds = new Set(CARD_IDS_WITHOUT_IMAGES);
const cardIds = new Set(CARDS.map(card => card.id));
const imageIds = new Set(
  (await readdir(new URL("../public/cards", import.meta.url)))
    .filter(filename => filename.endsWith(".png"))
    .map(filename => filename.slice(0, -4)),
);

const missingWithoutFallback = [...cardIds].filter(
  cardId => !imageIds.has(cardId) && !fallbackIds.has(cardId),
);
const staleFallbacks = [...fallbackIds].filter(
  cardId => !cardIds.has(cardId) || imageIds.has(cardId),
);

if (missingWithoutFallback.length || staleFallbacks.length) {
  throw new Error([
    missingWithoutFallback.length
      ? `Missing card images without fallbacks: ${missingWithoutFallback.join(", ")}`
      : null,
    staleFallbacks.length
      ? `Stale card-image fallbacks: ${staleFallbacks.join(", ")}`
      : null,
  ].filter(Boolean).join("\n"));
}

console.log(
  `Card assets valid: ${cardIds.size - fallbackIds.size} images and ${fallbackIds.size} intentional branded fallbacks.`,
);
