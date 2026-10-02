import { CARDS, CATEGORIES, BANKS, isSourceReviewed, isRecommendable, calcReward } from "@/data/cards";
import { publicCard } from "@/data/public-card";
import { NextResponse } from "next/server";

// Public API: GET /api/cards
// Query params: ?bank=HDFC&category=dining&sort=reward&limit=10&free=true
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryIds = new Set(CATEGORIES.map(c => c.id));
  const sort = searchParams.get("sort");
  const category = searchParams.get("category");
  const bestFor = searchParams.get("best_for");
  const limitValue = searchParams.get("limit");
  if ((sort && sort !== "reward" && !categoryIds.has(sort)) ||
      (category && !categoryIds.has(category)) || (bestFor && !categoryIds.has(bestFor)) ||
      (sort === "reward" && !category) ||
      (limitValue !== null && (!/^\d+$/.test(limitValue) || Number(limitValue) < 1 || Number(limitValue) > 76))) {
    return NextResponse.json({ error: "Use a supported category/sort and an integer limit from 1 to 76." }, { status: 400 });
  }
  let results = [...CARDS];

  // Filter by bank
  const bank = searchParams.get("bank");
  if (bank) results = results.filter(c => c.bank.toLowerCase() === bank.toLowerCase());

  // Filter by free cards only
  const free = searchParams.get("free");
  if (free === "true") results = results.filter(c => isSourceReviewed(c) && c.fee === 0);

  // Filter by card type
  const type = searchParams.get("type");
  if (type) results = results.filter(c => c.type.toLowerCase().includes(type.toLowerCase()));

  // Sort by reward in a specific category
  const sortCat = sort === "reward" ? category : sort;
  if (sortCat && CATEGORIES.find(c => c.id === sortCat)) {
    results = results.filter(isRecommendable);
    results.sort((a, b) => calcReward(b,sortCat,10000).cashback - calcReward(a,sortCat,10000).cashback);
  }

  // Get best card for a category
  if (bestFor && CATEGORIES.find(c => c.id === bestFor)) {
    results = results.filter(isRecommendable);
    results.sort((a, b) => calcReward(b,bestFor,10000).cashback - calcReward(a,bestFor,10000).cashback);
    results = results.slice(0, 1);
  }
  // Apply pagination after ranking, not before selecting the best card.
  if (limitValue !== null) results = results.slice(0, Number(limitValue));

  const response = NextResponse.json({
    cards: results.map(publicCard),
    total: results.length,
    available_banks: BANKS,
    available_categories: CATEGORIES.map(c => c.id),
    api_version: "1.1",
    publication_policy: "Unresolved historical terms and disabled model percentages are null; check publicationStatus, estimateReady and estimateUnavailableReason.",
    ranking_assumption: "₹10,000 eligible spend in one category/cycle; reward value before annual fees and redemption charges. See /api/recommend for spending-specific estimates.",
    documentation: "/api/recommend",
  });

  // CORS headers for public API access
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");

  return response;
}
