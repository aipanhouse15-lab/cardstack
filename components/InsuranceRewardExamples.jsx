import Link from 'next/link';
import {CARDS} from '@/data/cards';

const phonePe = CARDS.find(c=>c.id==='phonepe-sbi-select-black');
const ultimate = CARDS.find(c=>c.id==='sc-ultimate');

export default function InsuranceRewardExamples() {
  return <section aria-labelledby="insurance-payment-examples" style={{margin:'32px 0',padding:24,border:'1px solid var(--border)',borderRadius:16,lineHeight:1.8}}>
    <h2 id="insurance-payment-examples">Worked example: a ₹50,000 insurance premium</h2>
    <p>Start with the insurance earning rule, not the card's shopping headline. Assume one eligible ₹50,000 payment, unused reward limits and a bill paid in full. These examples compare gross usable reward value; they are not a recommendation to buy a new card just for a premium.</p>
    <div style={{overflowX:'auto'}}><table style={{width:'100%',borderCollapse:'collapse'}}>
      <caption style={{textAlign:'left'}}>Insurance route and reward calculation</caption>
      <thead><tr>{['Product / route','Calculation','Gross value'].map(s=><th key={s} scope="col" style={{textAlign:'left',padding:12,borderBottom:'1px solid var(--border)'}}>{s}</th>)}</tr></thead>
      <tbody>
        <tr><th scope="row" style={{textAlign:'left',padding:12}}>Standard Chartered Ultimate</th><td style={{padding:12}}>333 complete ₹150 blocks × 3 insurance points</td><td style={{padding:12}}>999 points; ₹999 at the issuer's ₹1 reward route</td></tr>
        <tr><th scope="row" style={{textAlign:'left',padding:12}}>PhonePe SBI SELECT BLACK: eligible in-app insurance</th><td style={{padding:12}}>500 complete ₹100 blocks × 10 points, limited to 500 insurance points/calendar month</td><td style={{padding:12}}>₹500 statement-credit value, not ₹5,000</td></tr>
        <tr><th scope="row" style={{textAlign:'left',padding:12}}>Insurance-excluded card</th><td style={{padding:12}}>No points on the insurance MCC, irrespective of the shopping rate</td><td style={{padding:12}}>₹0</td></tr>
      </tbody>
    </table></div>
    <p>Ultimate's ordinary 5-points-per-₹150 tier does not apply to insurance. Its reward catalogue and selected redemption matter. PhonePe's example requires the eligible PhonePe insurance payment route: an insurer's own website, another bill app or UPI outside PhonePe is not interchangeable. Other PhonePe app rewards have a different bucket; do not combine that limit with insurance.</p>
    <h3>Payment charges can reverse the result</h3>
    <p>If a checkout hypothetically charges 2% plus 18% GST on that fee, a ₹50,000 premium incurs ₹1,180 in extra charges. Before annual fees, the above ₹999 reward leaves a ₹181 loss; ₹500 leaves a ₹680 loss. This is a worked hypothetical, not an assertion that every insurer charges 2%. Compare the actual final card-payment amount against UPI/net-banking before confirming.</p>
    <h3>Existing card versus new application</h3>
    <p>Standard annual fees before tax are ₹{ultimate.fee.toLocaleString('en-IN')} for Ultimate and ₹{phonePe.fee.toLocaleString('en-IN')} for SELECT BLACK. If you already pay the fee for other benefits, assess the incremental premium reward and checkout charge. For a new application, include joining fees, renewal terms and your other spending; neither example alone pays for the standard annual fee.</p>
    <h3>Premium frequency is not a free cap workaround</h3>
    <p>A monthly policy option can have a different total premium from an annual policy. Only compare frequencies the insurer actually offers, with their full-year charges and due dates. Do not delay coverage or split a payment into unsupported instalments for points. Refunds can reverse rewards, and outstanding card interest can exceed the entire benefit.</p>
    <p><a href={ultimate.sourceUrl} target="_blank" rel="noopener noreferrer">Ultimate issuer rules</a> · <a href={phonePe.rewardSourceUrl} target="_blank" rel="noopener noreferrer">PhonePe SBI reward terms</a> · <Link href="/cards/phonepe-sbi-select-black">SELECT BLACK full review</Link></p>
  </section>;
}
