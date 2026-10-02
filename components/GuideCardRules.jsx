import Link from 'next/link';
import { CARDS, isSourceReviewed } from '@/data/cards';
import { BEST_FOR_CATEGORIES } from '@/data/bestfor';

// One source of product rules for static guides as well as generated pages.
// A guide's intent is not necessarily a calculator category (e.g. UPI/rent).
export default function GuideCardRules({slug}) {
  const intent = BEST_FOR_CATEGORIES.find(c=>c.slug===slug);
  if (!intent) return null;
  const products = intent.picks.map(p=>CARDS.find(c=>c.id===p.cardId)).filter(c=>isSourceReviewed(c) && !['discontinued','closed','phasing-out'].includes(c.availability));
  return <section aria-labelledby="current-product-rules" style={{margin:'32px 0',padding:24,border:'1px solid var(--border)',borderRadius:16,background:'var(--raise)',lineHeight:1.7}}>
    <h2 id="current-product-rules" style={{fontSize:22,margin:'0 0 12px'}}>Product rules behind this comparison</h2>
    <p>{intent.intro}</p>
    {products.map(card=><details key={card.id} style={{borderTop:'1px solid var(--border)',padding:'14px 0'}}>
      <summary style={{cursor:'pointer',fontWeight:700}}>{card.name} — earning, costs and limits</summary>
      <p>{card.pointsInfo}</p>
      {card.availabilityNote && <p>{card.availabilityNote}</p>}
      <p>{card.feeScheduleNote || `Annual fee before tax: ₹${card.fee.toLocaleString('en-IN')}.${card.joiningFee !== undefined ? ` Joining fee: ₹${card.joiningFee.toLocaleString('en-IN')} ${card.joiningFeeIncludesTax ? 'including GST' : 'before tax'}.` : ''}`} {card.feeWaiver}.</p>
      {card.redemptionNote && <p>{card.redemptionNote}</p>}
      {card.transactionFeeNote && <p>{card.transactionFeeNote}</p>}
      {card.estimateUnavailableReason && <p>Calculation scope: {card.estimateUnavailableReason}</p>}
      <p><Link href={`/cards/${card.id}`}>Full product review</Link> · <a href={card.rewardSourceUrl || card.sourceUrl} target="_blank" rel="noopener noreferrer">Issuer/co-brand source</a></p>
    </details>)}
    <p style={{fontSize:13}}>A reward rate is conditional on the merchant and payment route. Numerical tools show scenarios using the supported models; they do not estimate rent, insurance, UPI or overseas earning by substituting a generic spending category.</p>
  </section>;
}
