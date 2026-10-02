import assert from 'node:assert/strict';
import {calcTaxAfterRebate, NEW_SLABS, OLD_SLABS, TAX_PERIODS, salaryTaxComparison} from '../data/tax-math.mjs';
const withCess = tax => tax + Math.round(tax * 0.04);
for (const [income, expected] of [[1200000,0],[1200001,1],[1210000,10000],[1250000,50000],[1425000,93750],[2000000,200000],[2400000,300000]]) {
  assert.equal(calcTaxAfterRebate(income,NEW_SLABS,'new'),expected,`new regime at ${income}`);
}
assert.equal(withCess(calcTaxAfterRebate(1500000-75000,NEW_SLABS,'new')),97500);
assert.equal(calcTaxAfterRebate(500000,OLD_SLABS,'old'),0);
assert.equal(calcTaxAfterRebate(500001,OLD_SLABS,'old'),12500);
assert.equal(withCess(calcTaxAfterRebate(1105000,OLD_SLABS,'old')),149760);
for (const period of Object.keys(TAX_PERIODS)) {
  const defaults=salaryTaxComparison({period,salary:1500000,hra:120000,savings:150000,health:25000,nps:50000});
  assert.equal(defaults.totalTaxNew,97500);
  assert.equal(defaults.totalTaxOld,149760);
  assert.equal(defaults.winner,'new');
  assert.equal(salaryTaxComparison({period,salary:1275000}).totalTaxNew,0);
  assert.equal(salaryTaxComparison({period,salary:1275001}).totalTaxNew,1);
  assert.equal(salaryTaxComparison({period,salary:1285000}).totalTaxNew,10400);
  assert.equal(salaryTaxComparison({period,salary:550000}).totalTaxOld,0);
  const zero=salaryTaxComparison({period,salary:0,hra:100000,savings:150000});
  assert.equal(zero.totalTaxOld,0);
  assert.equal(zero.totalDeductionsOld,0);
  assert.equal(zero.standardNew,0);
  const caps=salaryTaxComparison({period,salary:1500000,savings:999999,health:999999,nps:999999,homeInterest:999999});
  assert.equal(caps.totalDeductionsOld,550000);
  // Independent piecewise calculation, outside the marginal-relief zone.
  assert.equal(salaryTaxComparison({period,salary:3000000}).totalTaxNew,475800);
  assert.equal(salaryTaxComparison({period,salary:5000000}).totalTaxNew,1099800);
  assert.equal(salaryTaxComparison({period,salary:5000000}).totalTaxOld,1349400);
  let previous=-1;
  for (let salary=0;salary<=5000000;salary+=10000) {
    const estimate=salaryTaxComparison({period,salary});
    assert(estimate.totalTaxNew>=previous,`Non-monotonic tax at ${salary}`);
    assert(Number.isFinite(estimate.totalTaxOld)&&estimate.totalTaxOld>=0);
    previous=estimate.totalTaxNew;
  }
}
assert.throws(()=>salaryTaxComparison({period:'unknown',salary:1500000}),RangeError);
for(const salary of [-1,NaN,Infinity,5000001]) assert.throws(()=>salaryTaxComparison({salary}),RangeError);
assert.throws(()=>salaryTaxComparison({salary:1500000,health:-1}),RangeError);
console.log('Tax arithmetic passed: both periods, rebates, marginal relief, salary thresholds, deduction caps, invalid inputs and monotonicity.');
