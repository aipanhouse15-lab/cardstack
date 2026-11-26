import assert from 'node:assert/strict';
import {salaryTaxComparison} from '../data/tax-math.mjs';
const close=(actual,expected,tolerance=1)=>assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} vs ${expected}`);
// Independently calculated slab totals, rather than snapshots of rendered text.
let c=salaryTaxComparison({period:'ay2026',salary:1500000,savings:150000});
assert.equal(c.totalTaxOld,210600);assert.equal(c.totalTaxNew,97500);
c=salaryTaxComparison({period:'ay2026',salary:2200000,hra:450000,savings:150000,health:25000,nps:50000,homeInterest:200000});
assert.equal(c.totalTaxOld,202800);assert.equal(c.totalTaxNew,240500);
c=salaryTaxComparison({period:'ay2026',salary:1275000,savings:150000});
assert.equal(c.totalTaxOld,140400);assert.equal(c.totalTaxNew,0);
for(const [rate,expected]of[[.06,21643],[.08,16977],[.10,13169],[.12,10109]]){
 const i=rate/12;close(1e7/(((1+i)**240-1)/i),expected);
}
for(const [tax,expected]of[[0,120766],[.208,105303],[.312,98261]])close(1e5*((1+.07*(1-tax))/1.05)**10,expected);
close(100000*.01/(1-1.01**-12),8884.88,.01);
close(1e7/1.05**20,3768895,1);
assert.equal((400000-20000-30000-50000)*.9,270000);
assert.equal((300000-20000)*.8,224000);
assert.equal(60000/.2,300000);
assert.equal(Math.min(300000,360000-60000,240000),240000);
console.log('Restored examples passed: tax scenarios, HRA, purchasing power, SIP funding, loan payments and claim deductions.');
