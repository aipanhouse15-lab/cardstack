export const COMPARE_CANONICAL = Object.freeze({
 'hdfc-millennia-vs-axis-ace':'compare-hdfc-millennia-vs-axis-ace',
 'sbi-cashback-vs-amazon-pay-icici':'compare-sbi-cashback-vs-amazon-pay-icici',
 'amazon-pay-icici-vs-axis-flipkart':'compare-flipkart-axis-vs-amazon-pay-icici',
});
export const canonicalCompare = slug => COMPARE_CANONICAL[slug] || slug;
