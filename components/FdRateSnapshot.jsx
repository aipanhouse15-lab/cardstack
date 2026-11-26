const banks = [
  { name: 'SBI', effective: '15 December 2025', source: 'https://sbi.bank.in/web/interest-rates/deposit-rates/retail-domestic-term-deposits', rates: [['1 year', '6.25%', '6.75%'], ['2 years', '6.40%', '6.90%'], ['3 years 1 day', '6.30%', '6.80%']] },
  { name: 'HDFC Bank', effective: '4 November 2026', source: 'https://www.hdfc.bank.in/fixed-deposit/fd-interest-rate', rates: [['1 year', '6.25%', '6.75%'], ['2 years', '6.50%', '7.00%'], ['3 years 1 day', '6.60%', '7.20%']] },
  { name: 'ICICI Bank', effective: '25 November 2026', source: 'https://www.icici.bank.in/personal-banking/deposits/fixed-deposit/fd-interest-rates', rates: [['1 year', '6.25%', '6.75%'], ['2 years', '6.30%', '6.80%'], ['3 years 1 day', '6.50%', '7.10%']] },
];
const cell = {padding:12,textAlign:'left',borderBottom:'1px solid var(--border)'};
export default function FdRateSnapshot() {
  return <section aria-labelledby="fd-rate-snapshot" style={{margin:'24px 0 32px'}}>
    <h2 id="fd-rate-snapshot" style={{fontSize:24,fontWeight:700}}>Selected retail FD rates: checked 26 November 2026</h2>
    <p>Annual nominal rates for selected domestic retail deposits below ₹3 crore, with premature-withdrawal facility. Senior rates require the issuer's eligibility. The exact tenures below are matched; special-tenure, non-callable and company deposits are outside this comparison.</p>
    <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:640,borderCollapse:'collapse'}}>
      <caption style={{textAlign:'left',marginBottom:12}}>Issuer-published snapshot; the booking confirmation determines your contracted rate.</caption>
      <thead><tr>{['Bank / source','Exact tenure','General public','Senior citizen','Schedule effective date'].map(t=><th scope="col" key={t} style={cell}>{t}</th>)}</tr></thead>
      <tbody>{banks.flatMap(bank=>bank.rates.map(([tenure,general,senior])=><tr key={bank.name+tenure}>
        <th scope="row" style={cell}><a href={bank.source} target="_blank" rel="noopener noreferrer">{bank.name}</a></th>
        {[tenure,general,senior,bank.effective].map((value,i)=><td key={i} style={cell}>{value}</td>)}
      </tr>))}</tbody>
    </table></div>
    <p>In this sample, all three one-year general-public rates are 6.25%. At two years HDFC Bank lists 6.45%, SBI 6.40% and ICICI Bank 6.30%. At three years and one day HDFC Bank and ICICI Bank list 6.50%, while SBI lists 6.30%. This does not establish the highest rate across all Indian institutions or all tenures.</p>
    <p>For a hypothetical ₹5 lakh kept for one year at the same 6.25% rate, simple interest is ₹31,250 before tax. An actual cumulative maturity amount depends on compounding and day count; a monthly payout can use a different convention. Compare the issuer's quoted maturity amount and early-closure conditions alongside the rate.</p>
  </section>;
}
