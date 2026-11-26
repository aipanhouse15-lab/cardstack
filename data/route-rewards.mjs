// A single confirmed eligible transaction, not an aggregate category proxy.
// All used-cap inputs are prior rewards in the same named issuer period.
export const ROUTE_REWARD_CARDS = {
 'amazon-icici':{name:'Amazon Pay ICICI',period:'statement cycle',currency:'Amazon Pay balance',fee:0,source:'https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/tc-for-amazon-pay-credit-card.pdf',routes:[
  ['amazon-prime','Eligible Amazon.in goods — active Prime',5],['amazon-nonprime','Eligible Amazon.in goods — non-Prime',3],['amazon-pay','Qualifying Amazon Pay digital / Login and Pay route',2],['retail','Other eligible domestic retail',1]
 ],note:'Gold/precious metals, international, education, rent, excluded utilities, tax, EMI and other exclusions are outside these choices. Whole points round down per transaction. Value is balance for eligible Amazon Pay uses, not bank cash.'},
 'hdfc-millennia':{name:'HDFC Millennia',period:'calendar month of settlement',currency:'CashPoints at statement-credit value',fee:1000,source:'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf',routes:[
  ['partner','Eligible direct purchase at one of the ten listed online merchants',5],['retail','Other eligible retail, including qualifying 1% routes',1]
 ],cap:1000,block:100,note:'Separate 1,000-CashPoint monthly buckets for the 5% and 1% routes. Use prior earning in the chosen bucket. HDFC MITC v4.19 specifies complete ₹100 transaction blocks. Minimum 500 points for statement redemption; ₹50 plus applicable tax per redemption; 3,000-point monthly redemption ceiling. The result is before those costs and membership.',mitc:'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf'},
 'axis-ace':{name:'Axis ACE',period:'statement cycle',currency:'statement cashback',fee:499,source:'https://www.axis.bank.in/docs/default-source/default-document-library/axis-bank-ace-credit-card-tncs.pdf?sfvrsn=a3effc42_6',routes:[
  ['googlepay','Qualifying Google Pay bill payment / recharge',5],['delivery','Qualifying Swiggy, Zomato or Ola purchase',4],['retail','Other eligible retail',1.5]
 ],cap:500,note:'The 5% and 4% routes share a ₹500 statement-cycle cap. Enter prior cashback across both routes together. The 1.5% eligible-retail route does not consume that shared cap. Fuel, rent, excluded utilities, wallets and other exclusions must not be entered as eligible retail. Transaction cashback rounds to the nearest rupee.'},
 'sbi-cashback':{name:'SBI Cashback',period:'statement cycle',currency:'statement cashback',fee:999,source:'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/cashback-revised.pdf',routes:[
  ['online','Eligible online retail',5],['offline','Eligible offline retail at merchant POS',1]
 ],cap:2000,note:'Separate ₹2,000 online/offline caps and ₹4,000 combined ceiling from 1 April 2026. Enter prior earning in the chosen bucket. Excludes specified utility, insurance, rent, fuel, education, government, wallet and other MCCs. This percentage-and-cap illustration excludes issuer posting/rounding adjustments.'}
};
export function transactionReward({cardId,routeId,amount,used=0,eligible=false}) {
 const card=ROUTE_REWARD_CARDS[cardId];
 if(!card) throw new RangeError('Unknown card');
 const route=card.routes.find(r=>r[0]===routeId);
 if(!route) throw new RangeError('Unknown route');
 if(!Number.isFinite(amount)||amount<0||!Number.isFinite(used)||used<0) throw new RangeError('Amounts must be finite and non-negative');
 if(!eligible) return {unavailable:true,reason:'Confirm that this purchase qualifies for the selected issuer route.'};
 const eligibleAmount=card.block?Math.floor(amount/card.block)*card.block:amount;
 let gross=eligibleAmount*route[2]/100;
 if(cardId==='amazon-icici')gross=Math.floor(gross);
 if(cardId==='axis-ace')gross=Math.round(gross);
 const cap=cardId==='axis-ace'&&routeId==='retail'?Infinity:card.cap??Infinity;
 const reward=Math.round(Math.min(gross,Math.max(0,cap-used))*100)/100;
 return {reward,gross:Math.round(gross*100)/100,eligibleAmount,rate:amount?Math.round(reward/amount*10000)/100:0,capped:reward<gross,currency:card.currency,period:card.period};
}
