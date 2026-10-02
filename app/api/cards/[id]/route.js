import { CARDS, CATEGORIES, getCardById, isEstimateReady } from "@/data/cards";
import { NextResponse } from "next/server";
import { publicCard } from "@/data/public-card";

// Public API: GET /api/cards/[id]
// Returns full card details with computed insights
export async function GET(request, { params }) {
  const card = getCardById(params.id);
  if (!card) {
    return NextResponse.json({ error: "Card not found", available_cards: CARDS.map(c => c.id) }, { status: 404 });
  }

  // Compute insights
  const sorted = Object.entries(card.rewards)
    .filter(([k]) => k !== "default")
    .sort((a, b) => b[1] - a[1]);

  const insights = {
    best_category: sorted[0][0],
    best_rate: sorted[0][1],
    worst_category: sorted[sorted.length - 1][0],
    worst_rate: sorted[sorted.length - 1][1],
    average_rate: null,
    fee_per_month: card.fee === 0 ? 0 : Math.round(card.fee / 12),
    // A spending-independent average is not a fee break-even model.
    breakeven_monthly_spend: null,
    reward_rates_ranked: sorted.map(([cat, rate]) => ({ category: cat, rate })),
  };

  const response = NextResponse.json({ ...publicCard(card), insights: isEstimateReady(card) ? { ...insights, breakeven_monthly_spend: null, assumptions: "Listed category rates are illustrative redemption values under card.rewardAssumptions, not cashback promises or cap-adjusted averages. Use /api/recommend for a spending-specific estimate." } : null });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return response;
}
