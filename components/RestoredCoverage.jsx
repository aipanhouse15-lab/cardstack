import { RESTORED_COVERAGE } from '@/data/restored-coverage';
import Link from 'next/link';
import { CARDS, isSourceReviewed } from '@/data/cards';

export default function RestoredCoverage({ route }) {
  const content = RESTORED_COVERAGE[route];
  if (!content) return null;
  return <div className="restored-coverage">
    {content.sections.map((section) => <section key={section.heading}>
      <h2>{section.heading}</h2>
      {section.table && <div className="coverage-table" tabIndex={0} role="region" aria-label={section.heading}>
        <table><caption>{section.table.caption}</caption><thead><tr>{section.table.headers.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead>
          <tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>}
      {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
      {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
      {section.cardRefs && <div className="coverage-table" tabIndex={0} role="region" aria-label={section.heading+' product terms'}><table><caption>Product starting points, not approval promises or a ranked list. Terms below come from the site’s dated product records.</caption><thead><tr><th scope="col">Card</th><th scope="col">Joining / renewal before tax</th><th scope="col">What to check</th></tr></thead><tbody>{section.cardRefs.map(([id,note])=>{const c=CARDS.find(card=>card.id===id);if(!c||!isSourceReviewed(c))return null;return <tr key={id}><th scope="row"><Link href={'/cards/'+id}>{c.name}</Link></th><td>{c.feeScheduleNote||`Joining: ${c.joiningFee===undefined?'confirm offered fee':'₹'+c.joiningFee.toLocaleString('en-IN')}; renewal: ₹${c.fee.toLocaleString('en-IN')}. ${c.feeWaiver}`}</td><td>{note} <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer">Issuer source</a></td></tr>;})}</tbody></table></div>}
    </section>)}
    {content.sources?.length > 0 && <section><h2>Sources for these examples and rules</h2><ul>{content.sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul><p className="coverage-source-date">Explanations revised 17 October 2026. Numerical scenarios are illustrations unless explicitly identified as issuer-published terms. Product schedules and policy documents have their own effective dates.</p></section>}
  </div>;
}
