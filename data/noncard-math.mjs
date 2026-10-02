// Scenario arithmetic: no live rates, eligibility or underwriting decisions.
export function calcSIP(monthly,rate,years) {
  const periods=years*12;
  const monthlyRate=Math.pow(1+rate/100,1/12)-1;
  const invested=monthly*periods;
  const maturity=monthlyRate===0 ? invested : monthly*((Math.pow(1+monthlyRate,periods)-1)/monthlyRate)*(1+monthlyRate);
  return {maturity:Math.round(maturity),invested,gains:Math.round(maturity-invested)};
}
export function calcLumpsum(principal,rate,years) {
  const maturity=principal*Math.pow(1+rate/100,years);
  return {maturity:Math.round(maturity),invested:principal,gains:Math.round(maturity-principal)};
}
export function fdScenario({amount,fdRate,taxBracket,inflation,tenure,isSenior}) {
  const grossInterest=amount*fdRate/100*tenure;
  // Assumes this deduction is available in each modelled year. Not a tax-year eligibility check.
  const seniorExemption=isSenior ? Math.min(grossInterest,50000*tenure) : 0;
  const estimatedTax=Math.max(0,grossInterest-seniorExemption)*taxBracket/100;
  const postTaxInterest=grossInterest-estimatedTax;
  const maturityAmount=amount+postTaxInterest;
  const purchasingPower=maturityAmount/Math.pow(1+inflation/100,tenure);
  const realGain=purchasingPower-amount;
  return {grossInterest:Math.round(grossInterest),seniorExemption:Math.round(seniorExemption),estimatedTax:Math.round(estimatedTax),postTaxInterest:Math.round(postTaxInterest),postTaxRate:(postTaxInterest/amount/tenure*100).toFixed(2),maturityAmount:Math.round(maturityAmount),purchasingPower:Math.round(purchasingPower),realGain:Math.round(realGain),inflationLoss:Math.round(maturityAmount-purchasingPower),realReturn:((Math.pow(purchasingPower/amount,1/tenure)-1)*100).toFixed(2)};
}
export function insuranceScenario({sumInsured,claimAmount,copay,roomRentCap,chosenRoomRent,diseaseSubLimit,proportionateClauseApplies}) {
  const cappedClaim=Math.min(claimAmount,sumInsured);
  const aboveSumInsured=claimAmount-cappedClaim;
  const roomRatio=proportionateClauseApplies && chosenRoomRent>roomRentCap ? roomRentCap/chosenRoomRent : 1;
  const afterRoom=Math.round(cappedClaim*roomRatio);
  const afterDisease=Math.min(afterRoom,Math.round(sumInsured*diseaseSubLimit/100));
  const copayAmount=Math.round(afterDisease*copay/100);
  const finalPayout=Math.max(0,afterDisease-copayAmount);
  const coverageRatio=claimAmount>0 ? Math.round(finalPayout/claimAmount*100) : 0;
  return {claimAmount,aboveSumInsured,roomRentLoss:cappedClaim-afterRoom,diseaseLoss:afterRoom-afterDisease,copayAmount,finalPayout,outOfPocket:claimAmount-finalPayout,coverageRatio,lostPercent:100-coverageRatio};
}
