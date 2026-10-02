import { CARDS, CATEGORIES, isEstimateReady, isRecommendable, calcReward, calcTotalMonthlyReward, defaultSpending } from "@/data/cards";
import { NextResponse } from "next/server";
export async function GET(request) {
  const q = new URL(request.url).searchParams;
  const cards = CARDS.filter(isEstimateReady);
  const category = q.get("for");
  const spend = q.has("spend") ? Number(q.get("spend")) : 10000;
  if (!Number.isFinite(spend) || spend <= 0 || spend > 10000000) return json({ error: "spend must be between 1 and 10000000" }, 400);
  const assumptions = "Eligible transactions only. Categories do not identify a merchant or MCC. Values exclude fees, GST and redemption charges unless stated. Shared caps need a full spending pattern.";
  const pack = c => ({ id:c.id, name:c.name, bank:c.bank, fee:c.fee, source:c.sourceUrl, reviewed_at:c.reviewedAt, reward_assumptions:c.rewardAssumptions || {}, redemption_note:c.redemptionNote || c.pointsInfo });
  if (category) {
    if (!CATEGORIES.some(c=>c.id===category)) return json({error:"Invalid category", available:CATEGORIES.map(c=>c.id)},400);
    const ranked = cards.filter(isRecommendable).map(c=>({...pack(c),...calcReward(c,category,spend),category_assumption:c.rewardAssumptions?.[category] || null})).sort((a,b)=>b.cashback-a.cashback || a.fee-b.fee).slice(0,5);
    return json({query:{category,monthly_spend:spend}, recommendation:ranked[0]?.name || null, top_5:ranked, assumptions});
  }
  const budget=q.get("budget");
  if (budget) {
    if (!["free","under5000"].includes(budget)) return json({error:"budget must be free or under5000"},400);
    const spending=defaultSpending();
    const totalSpend=Object.values(spending).reduce((a,b)=>a+b,0);
    const ranked=cards.filter(isRecommendable).filter(c=>budget==="free" ? c.fee===0 : c.fee<5000).map(c=>{
      const estimate=calcTotalMonthlyReward(c,spending);
      return {...pack(c),monthly_reward:estimate.total,effectiveRate:Number((estimate.total/totalSpend*100).toFixed(2)),annual_net_before_redemption_charges:Math.round(estimate.total*12-c.fee*1.18)};
    }).sort((a,b)=>b.annual_net_before_redemption_charges-a.annual_net_before_redemption_charges).slice(0,5);
    return json({query:{budget},scenario_spending:spending,top_5:ranked,assumptions,fee_assumption:"18% GST on listed annual fee; no waiver assumed"});
  }
  if (q.has("cards")) {
    const requested=[...new Set(q.get("cards").split(",").map(x=>x.trim()).filter(Boolean))];
    const owned=cards.filter(c=>requested.includes(c.id));
    if (!owned.length) return json({error:"No estimate-ready cards provided",available:cards.map(c=>c.id)},400);
    const optimization=CATEGORIES.map(cat=>({category:cat.id,isolated_category_spend:spend,best_owned_card:owned.map(c=>({...pack(c),...calcReward(c,cat.id,spend)})).sort((a,b)=>b.cashback-a.cashback || a.fee-b.fee)[0]}));
    return json({owned_cards:owned.map(pack),excluded_ids:requested.filter(id=>!owned.some(c=>c.id===id)),optimization,assumptions,scope:"Rows are separate scenarios, not a combined optimized stack. Use Smart Swipe for a full spending pattern."});
  }
  return json({name:"Assure Fintech recommendation API",endpoints:{category:"?for=dining&spend=10000",budget:"?budget=free",owned:"?cards=amazon-icici,sbi-simplyclick&spend=10000"},estimate_ready_cards:cards.length,assumptions});
}
function json(data,status=200) {
  const response=NextResponse.json(data,{status});
  response.headers.set("Access-Control-Allow-Origin","*");
  response.headers.set("Cache-Control","public, s-maxage=3600, stale-while-revalidate=86400");
  return response;
}
