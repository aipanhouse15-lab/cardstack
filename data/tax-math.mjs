// Resident individual under 60, ordinary salary income, gross salary <= ₹50 lakh.
// Periods are explicit even where numeric rules match. No special-rate income.
export const TAX_PERIODS = {
  'ty2026': {
    label: 'Tax Year 2026–27', incomePeriod: '1 April 2026 – 31 March 2027',
    act: 'Income-tax Act, 2025', standardOld: 50000, standardNew: 75000,
    cessRate: 0.04, newRegimeSection: '202', rebateSection: '156',
    paymentLabel: 'Eligible savings/life-insurance payments (section 123 / Schedule XV)',
    healthLabel: 'Eligible health deduction: family + parents (section 126)',
    npsLabel: 'Eligible additional personal NPS contribution (section 124(3))',
    homeLabel: 'Eligible self-occupied home-loan interest (section 22)',
    sources: [
      {label: 'Income-tax Act, 2025, amended by Finance Act 2026', url: 'https://www.incometaxindia.gov.in/documents/d/guest/income_tax_act_2025_as_amended_by_fa_act_2026-pdf'},
      {label: 'Finance Act 2026: old-regime rates and cess', url: 'https://egazette.gov.in/WriteReadData/2026/271439.pdf'},
    ],
  },
  'ay2026': {
    label: 'AY 2026–27 (FY 2025–26)', incomePeriod: '1 April 2025 – 31 March 2026',
    act: 'Income-tax Act, 1961', standardOld: 50000, standardNew: 75000,
    cessRate: 0.04, newRegimeSection: '115BAC', rebateSection: '87A',
    paymentLabel: 'Eligible 80C payments (PPF, ELSS, LIC, etc.)',
    healthLabel: 'Eligible 80D health deduction: family + parents',
    npsLabel: 'Eligible additional personal NPS contribution (80CCD(1B))',
    homeLabel: 'Eligible self-occupied home-loan interest (section 24(b))',
    sources: [{label: 'Income Tax Department: AY 2026–27 rules', url: 'https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1'}],
  },
};
export const OLD_SLABS = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250000, max: 500000, rate: 5 },
  { min: 500000, max: 1000000, rate: 20 },
  { min: 1000000, max: Infinity, rate: 30 },
];
export const NEW_SLABS = [
  { min: 0, max: 400000, rate: 0 },
  { min: 400000, max: 800000, rate: 5 },
  { min: 800000, max: 1200000, rate: 10 },
  { min: 1200000, max: 1600000, rate: 15 },
  { min: 1600000, max: 2000000, rate: 20 },
  { min: 2000000, max: 2400000, rate: 25 },
  { min: 2400000, max: Infinity, rate: 30 },
];
export function calcTax(income, slabs) {
  return Math.round(slabs.reduce((tax, slab) => tax + Math.max(0, Math.min(income, slab.max) - slab.min) * slab.rate / 100, 0));
}
export function calcTaxAfterRebate(income, slabs, regime) {
  const tax = calcTax(income, slabs);
  if (regime === 'old') return income <= 500000 ? Math.max(0, tax - 12500) : tax;
  if (income <= 1200000) return 0;
  // Above ₹12 lakh, relief is only the excess of slab tax over excess income.
  // The ₹60,000 rebate must not be subtracted from every higher income.
  return Math.min(tax, income - 1200000);
}

export function salaryTaxComparison({period='ty2026', salary, hra=0, savings=0, health=0, nps=0, homeInterest=0}) {
  const rules=TAX_PERIODS[period];
  if (!rules) throw new RangeError('Unsupported tax period');
  for (const amount of [salary,hra,savings,health,nps,homeInterest]) {
    if (!Number.isFinite(amount) || amount < 0) throw new RangeError('Amounts must be finite and non-negative');
  }
  if (salary > 5000000) throw new RangeError('This salary-only model does not include surcharge above ₹50 lakh');
  const hraApplied=Math.min(hra,salary);
  const standardOld=Math.min(rules.standardOld,salary-hraApplied);
  const standardNew=Math.min(rules.standardNew,salary);
  const totalDeductionsOld=Math.min(salary,standardOld+hraApplied+Math.min(savings,150000)+Math.min(health,100000)+Math.min(nps,50000)+Math.min(homeInterest,200000));
  const taxableOld=salary-totalDeductionsOld;
  const taxableNew=salary-standardNew;
  const taxOld=calcTaxAfterRebate(taxableOld,OLD_SLABS,'old');
  const taxNew=calcTaxAfterRebate(taxableNew,NEW_SLABS,'new');
  const cessOld=Math.round(taxOld*rules.cessRate), cessNew=Math.round(taxNew*rules.cessRate);
  const totalTaxOld=taxOld+cessOld, totalTaxNew=taxNew+cessNew;
  return {taxableOld,taxableNew,totalDeductionsOld,standardOld,standardNew,taxOld,taxNew,cessOld,cessNew,totalTaxOld,totalTaxNew,savings:Math.abs(totalTaxNew-totalTaxOld),winner:totalTaxOld<totalTaxNew?'old':totalTaxNew<totalTaxOld?'new':'same'};
}
