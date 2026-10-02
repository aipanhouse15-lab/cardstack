import { readFile } from "node:fs/promises";

const cardsSource = await readFile(new URL("../data/cards.js", import.meta.url), "utf8");
const cardsModuleUrl = `data:text/javascript;base64,${Buffer.from(cardsSource).toString("base64")}`;
const { CARDS, VERIFIED_CARDS, validateCardData } = await import(cardsModuleUrl);

const result = validateCardData(CARDS);

console.log(
  `Card data valid: ${result.cards} cards (${result.verified} source-reviewed, ${result.unverified} review-pending; ${VERIFIED_CARDS.length} estimate-ready).`,
);
