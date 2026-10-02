import { isSourceReviewed, isEstimateReady, isRecommendable } from './cards';
import { reviewedEditorial } from './reviewed-editorial';

// Stored historical copy is not a current product description. Never export
// a legacy verdict or unsupported percentage as a public API recommendation.
export function publicCard(card) {
  const ready = isEstimateReady(card);
  const reviewed = isSourceReviewed(card);
  const { editorial, ...record } = card;
  return {
    ...record,
    estimateReady: ready,
    recommendable: isRecommendable(card),
    rewards: ready ? card.rewards : null,
    editorial: reviewed ? reviewedEditorial(card) : null,
    ...(!reviewed ? {
      fee: null, joiningFee: null, feeWaiver: null, network: null, lounge: null,
      caps: null, partnerRates: [], highlights: [], pros: [], cons: [],
      pointsInfo: null, redemptionNote: null,
      publicationStatus: 'Historical catalogue record; current product terms not established',
    } : {}),
  };
}
