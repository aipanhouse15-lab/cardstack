'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ROUTE_REWARD_CARDS,transactionReward} from '@/data/route-rewards.mjs';
export default function TransactionRewardCheck(){
 const [cardId,setCard]=useState('amazon-icici');
 const [routeId,setRoute]=useState('amazon-prime');
 const [amount,setAmount]=useState('10000');
 const [used,setUsed]=useState('0');
 const [eligible,setEligible]=useState(false);
 const card=ROUTE_REWARD_CARDS[cardId];
 const valid=amount.trim()!==''&&used.trim()!==''&&Number.isFinite(Number(amount))&&Number(amount)>=0&&Number.isFinite(Number(used))&&Number(used)>=0;
 const result=valid?transactionReward({cardId,routeId,amount:Number(amount),used:Number(used),eligible}):null;
 return <section id="transaction-check" className="transaction-check" aria-labelledby="transaction-check-title">
  <h2 id="transaction-check-title">Check one purchase by merchant and payment route</h2>
  <p>Use this for Amazon Pay ICICI, Millennia, ACE or SBI Cashback. Choose the actual route and enter a single eligible transaction; a card’s highest tier does not apply to every purchase.</p>
  <div className="transaction-inputs">
   <label>Card<select value={cardId} onChange={e=>{const id=e.target.value;setCard(id);setRoute(ROUTE_REWARD_CARDS[id].routes[0][0]);setUsed('0');setEligible(false);}}>{Object.entries(ROUTE_REWARD_CARDS).map(([id,c])=><option key={id} value={id}>{c.name}</option>)}</select></label>
   <label>Purchase route<select value={routeId} onChange={e=>{setRoute(e.target.value);setUsed('0');setEligible(false);}}>{card.routes.map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
   <label>Single purchase amount (₹)<input type="number" min="0" step="0.01" value={amount} onChange={e=>setAmount(e.target.value)} /></label>
   {card.cap&&<label>Rewards already earned in this bucket / shared cap (₹)<input type="number" min="0" step="0.01" value={used} onChange={e=>setUsed(e.target.value)} /></label>}
  </div>
  <p><strong>Period:</strong> {card.period}. {card.note}</p>
  <label className="eligibility-check"><input type="checkbox" checked={eligible} onChange={e=>setEligible(e.target.checked)} />I have checked that this purchase meets the selected route’s merchant, channel and exclusion rules.</label>
  <div className="transaction-result" aria-live="polite">
   {!valid?<p>Enter a non-negative purchase amount and prior reward amount.</p>:result.unavailable?<p>{result.reason}</p>:<><p><strong>Illustrative reward: ₹{result.reward.toLocaleString('en-IN')}</strong> in {result.currency} · {result.rate}% of this purchase.</p>{result.capped&&<p>The remaining reward cap reduces this transaction’s value.</p>}{result.eligibleAmount<Number(amount)&&<p>₹{result.eligibleAmount.toLocaleString('en-IN')} qualifies after complete ₹100 earning blocks; the residual amount is excluded.</p>}<p>Before membership, redemption charges, merchant/platform fees, interest and later refunds. This does not verify a merchant’s posted classification or predict approval.</p></>}
  </div>
  <p><a href={card.source} target="_blank" rel="noopener noreferrer">Issuer reward terms</a>{card.mitc&&<> · <a href={card.mitc} target="_blank" rel="noopener noreferrer">Current MITC and transaction blocks</a></>} · <Link href={'/cards/'+cardId}>Full card review</Link></p>
 </section>;
}
