import Link from "next/link";
import { CARDS, isSourceReviewed, isEstimateReady, calcTotalMonthlyReward, defaultSpending } from "@/data/cards";
export function cardComparisonMetadata(slug, ids) {
  const cards=ids.map(id=>CARDS.find(c=>c.id===id));
  const title=`${cards[0].name} vs ${cards[1].name}: Fees, Earn Rules & Caps`;
  const description=`Compare ${cards[0].name} and ${cards[1].name} using eligible spending, redemption choices, reward caps and renewal costs. Includes issuer sources.`;
  return {title,description,alternates:{canonical:`/compare/${slug}`},openGraph:{title,description,type:"article",siteName:"Assure Fintech"}};
}
export default function EditorialCardComparison({slug,ids,decision}) {
  const cards=ids.map(id=>CARDS.find(c=>c.id===id));
  const ready=cards.every(isEstimateReady);
  const spending=defaultSpending();
  const schema={"@context":"https://schema.org","@type":"Article",headline:`${cards[0].name} vs ${cards[1].name}`,author:{"@type":"Person",name:"Ash"},dateModified:"2026-10-01",mainEntityOfPage:`https://www.assurefintech.com/compare/${slug}`};
  return <main style={{maxWidth:900,margin:"0 auto",padding:"110px 24px 70px",lineHeight:1.8}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <Link href="/compare">Compare cards</Link>
    <h1 style={{fontSize:36,lineHeight:1.2,margin:"24px 0"}}>{cards[0].name} vs {cards[1].name}</h1>
    <p>{decision}</p>
    <h2 style={{marginTop:32}}>Published earn rules and renewal costs</h2>
    <div className="grid sm:grid-cols-2 gap-6">{cards.map(card=><section key={card.id} style={{padding:22,border:"1px solid var(--border)",borderRadius:14}}>
      <h3>{card.name}</h3><p>{isSourceReviewed(card) ? `Listed annual fee: ₹${card.fee.toLocaleString("en-IN")} before applicable GST. ${card.feeWaiver}.` : 'Current variant and fee terms are not established for this historical record.'}</p>
      <p>{isSourceReviewed(card) ? card.pointsInfo || card.redemptionNote || card.highlights.join(". ") : card.estimateUnavailableReason}</p>
      {isSourceReviewed(card) && <><p>{card.availabilityNote}</p><p>{card.redemptionNote}</p><p>{card.cons.join(". ")}</p><ul>{Object.entries(card.rewardAssumptions || {}).map(([category,note])=><li key={category}>{category}: {note}</li>)}</ul></>}
      <p><Link href={`/cards/${card.id}`}>Full review and assumptions</Link>{card.sourceUrl && <> · <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer">Issuer reference</a></>}</p>
    </section>)}</div>
    <h2 style={{marginTop:32}}>A spending-specific illustration</h2>
    {ready ? <><p>For the same monthly spending pattern below, we apply each card's modelled reward buckets. Returns exclude merchant offers, redemption charges, transaction rounding and milestones. Category eligibility is assumed; an actual merchant may be excluded.</p><ul>{Object.entries(spending).map(([cat,value])=><li key={cat}>{cat}: ₹{value.toLocaleString("en-IN")}</li>)}</ul>
      <ul>{cards.map(card=>{const result=calcTotalMonthlyReward(card,spending);return <li key={card.id}>{card.name}: ₹{result.total.toLocaleString("en-IN")} monthly modelled value; ₹{Math.round(result.total*12-card.fee*1.18).toLocaleString("en-IN")} annual value after the listed fee and 18% GST, assuming no waiver.</li>;})}</ul></> : <p>A cash-value winner is not calculated for this pair until both reward models cover the earn and redemption conditions. Compare the rules above and the usable benefits rather than treating points from different programs as interchangeable cash.</p>}
    <h2 style={{marginTop:32}}>How to decide from your own spending</h2><ol><li>List eligible spending by merchant and payment channel for a normal month.</li><li>Apply reward caps within the issuer's stated period. Do not add category maxima when they share a cap.</li><li>Value rewards using a redemption you will actually use, including charges and expiry.</li><li>Subtract the renewal cost unless normal eligible spending meets the waiver. Do not increase unnecessary spending to reach it.</li><li>Keep the bill paid in full. Interest and late charges can overwhelm the reward difference.</li></ol>
    <p>This comparison is about value, not approval probability. Income, credit assessment and issuer policy determine eligibility. Card application decisions remain with the issuer.</p>
    <p><Link href="/smart-swipe">Test a full spending pattern in Smart Swipe →</Link></p>
  </main>;
}
