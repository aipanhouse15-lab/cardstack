import {CARDS,isSourceReviewed,isEstimateReady,isRecommendable} from './cards.js';
export const CARD_COUNTS = Object.freeze({
 total:CARDS.length,
 sourceReviewed:CARDS.filter(isSourceReviewed).length,
 historical:CARDS.filter(c=>!isSourceReviewed(c)).length,
 estimateReady:CARDS.filter(isEstimateReady).length,
 recommendable:CARDS.filter(isRecommendable).length,
 capped:CARDS.filter(c=>c.caps||c.categoryRewardCaps||c.totalRewardValueCap).length,
});
// Issuer Regalia example: published points and cashback valuation before charges.
export const REGALIA_EXAMPLE = Object.freeze({points:4,spend:200,pointValue:.15,rate:4*.15/200*100});
