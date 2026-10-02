import { CATEGORIES, calcReward, isSourceReviewed, isEstimateReady } from './cards';

// Product descriptions stay attached to their current data instead of retaining
// separate historical percentage claims in verdicts, FAQs and pairing advice.
export function reviewedEditorial(card) {
  if (!isSourceReviewed(card)) return null;
  const ready = isEstimateReady(card);
  const categories = CATEGORIES.filter(c => (card.rewards[c.id] || 0) > 0);
  const best = [...categories].sort((a,b) => card.rewards[b.id] - card.rewards[a.id])[0];
  const example = ready && best ? calcReward(card,best.id,10000) : null;
  const basis = [card.availabilityNote, card.pointsInfo || card.highlights.join('. '), card.redemptionNote].filter(Boolean).join(' ');
  return {
    verdict: {
      headline: `${card.name}: judge the ${card.type.toLowerCase()} benefits against your spending and renewal cost.`,
      body: `${basis}\n\n${ready && example ? `For ₹10,000 of eligible ${best.label.toLowerCase()} spending in one modelled cycle, the estimate is ₹${example.cashback.toLocaleString('en-IN')} (${example.effectiveRate}% after the modelled cap). ${card.rewardAssumptions?.[best.id] || ''} ${example.capNote || ''} This example excludes merchant offers, redemption fees, annual milestones and transaction-level rounding. ` : 'Cash-value estimates are not enabled for this product. Its merchant, feature or redemption conditions need a separate model; published earn rules and non-cash benefits are shown below.'}${card.caps ? ` Cap terms: ${card.caps.capDescription || card.caps.note || 'Accelerated rewards may be limited by merchant, transaction or reward period; the earning rules below describe the applicable buckets.'}` : ' Eligibility and excluded transaction types still matter even where no cap is recorded.'}`,
      idealFor: `Cardholders who use the benefits listed below and can meet the applicable channel, merchant and spend requirements. Fee-waiver terms: ${card.feeWaiver}.`,
      skipIf: 'The annual fee outweighs the benefits you can actually use, or your main spending falls outside the eligible merchants or categories.',
    },
    bestFor: [
      {category:'Published earn rules',reason:card.pointsInfo || card.highlights.join('. ')},
      {category:'Redemption choice',reason:basis},
      {category:'Renewal decision',reason:`${card.feeScheduleNote || `Listed annual fee: ₹${card.fee.toLocaleString('en-IN')} before applicable tax.${card.joiningFee === undefined ? '' : ` Joining fee: ₹${card.joiningFee.toLocaleString('en-IN')} ${card.joiningFeeIncludesTax ? 'including GST' : 'before tax'}.`}`} ${card.feeWaiver}. Compare this cost with rewards you can redeem; a fee waiver is not itself a reward.`},
    ],
    avoidFor: [{category:'Excluded or conditional spending',reason:card.cons.join('. ')}],
    faq: [
      {q:`How does ${card.name} earn rewards?`,a:card.pointsInfo || card.highlights.join('. ')},
      {q:'Are points and cashback the same?',a:basis || 'Points are valued using the chosen redemption route; cashback and non-cash benefits should be compared separately.'},
      {q:'What should I compare before renewing?',a:`The published fee, applicable tax, waiver conditions and the benefits you use. ${card.feeWaiver}. Exclude unused vouchers and promotional offers from your baseline.`},
    ],
  };
}
