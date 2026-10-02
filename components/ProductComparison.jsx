import Link from "next/link";
import { PRODUCT_COMPARISONS } from "@/data/product-comparisons";
export function comparisonMetadata(slug) {
  const c=PRODUCT_COMPARISONS[slug];
  const title=`${c.a} vs ${c.b}: How to Compare`;
  const description=c.intro.slice(0,160);
  return {title,description,alternates:{canonical:`/compare/${slug}`},openGraph:{title,description,type:"article",siteName:"Assure Fintech"}};
}
export default function ProductComparison({slug}) {
  const c=PRODUCT_COMPARISONS[slug];
  const fund=c.kind==="fund", term=c.kind==="term";
  const fields=fund ? ["Exact scheme, plan and option","Mandate and benchmark","Same-date portfolio and riskometer","Current expense ratio","Same-period returns and drawdown","Exit-load and subscription conditions"] : term ? ["Same applicant and underwriting inputs","Death benefit and payout method","Cover term versus premium-paying term","Variant and rider definitions","Exclusions and benefit reductions","Total quoted premiums and renewability"] : ["Policy UIN, variant and issue-date wording","Same members, ages and medical disclosures","Room category and proportionate deductions","Co-pay, deductible and sub-limits","Waiting periods and exclusions","Restoration triggers and single-claim limit"];
  const example=fund ? "Consider a hypothetical ₹2 lakh equity holding that falls 25% to ₹1.5 lakh. It needs a 33.3% gain—not 25%—to return to ₹2 lakh. This is a risk illustration, not either fund's historical drawdown. A recent winning return does not remove that exposure; keep money needed soon outside a strategy that can experience such a fall." : term ? "A hypothetical ₹1 crore death benefit paid immediately is not financially identical to ₹1 crore spread over ten years. At an assumed 6% annual discount rate, ten equal ₹10 lakh year-end payments have a present value of about ₹73.6 lakh. This is not an insurer quote; it explains why payout timing must be matched before comparing prices." : "Suppose a hypothetical ₹3 lakh hospital bill contains ₹20,000 of excluded expenses and the remaining ₹2.8 lakh is subject to a 20% co-pay. Payment would be ₹2.24 lakh and the household contribution ₹76,000 under that assumed order. This is not a claim prediction for either plan. Use the actual wording to determine the order, limits and admissibility.";
  const faq=[{q:"Which one should I choose?",a:c.decision},{q:fund?"Why is there no recent-return winner?":"Why is there no fixed premium winner?",a:fund?"A fair return comparison needs identical dates, plan and option, with its benchmark and risk context. This page does not publish unsupported performance numbers or predict which fund will outperform.":"Premiums depend on the applicant, variant and underwriting. Compare two written offers with identical inputs. An example premium cannot establish which contract covers your circumstances better."}];
  const schema={"@context":"https://schema.org","@type":"Article",headline:`${c.a} vs ${c.b}`,author:{"@type":"Person",name:"Ash"},dateModified:"2026-10-01",mainEntityOfPage:`https://www.assurefintech.com/compare/${slug}`};
  return <main style={{maxWidth:820,margin:"0 auto",padding:"110px 24px 70px",lineHeight:1.8}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}).replace(/</g,"\\u003c")}} />
    <nav><Link href="/">Home</Link> / <Link href="/compare">Compare</Link></nav>
    <h1 style={{fontSize:"clamp(28px,4vw,40px)",lineHeight:1.2,margin:"24px 0"}}>{c.a} vs {c.b}</h1>
    <p>{c.intro}</p>
    <p style={{fontSize:13,color:"var(--text-muted)"}}>By Ash · Comparison framework revised 1 October 2026. Product documents below identify the source; this is not a personalized quote or a performance ranking.</p>
    <h2 style={{marginTop:32}}>The decision that matters for this pair</h2><p>{c.decision}</p>
    <h2 style={{marginTop:32}}>Compare these fields side by side</h2>
    <p>Save both source documents with their effective date. Populate the fields below from those documents, and write down a question wherever a condition is unclear. Do not substitute an advertisement for a missing contractual term.</p>
    <ol>{fields.map(field=><li key={field} style={{marginBottom:10}}>{field}</li>)}</ol>
    <h2 style={{marginTop:32}}>A worked example: {fund?"risk and recovery":term?"payout timing":"out-of-pocket cost"}</h2><p>{example}</p>
    <h2 style={{marginTop:32}}>When the comparison is not like for like</h2>
    <p>{fund?"A direct growth plan cannot be compared fairly with a regular distribution option by looking at one NAV or one return percentage. If mandates differ, decide the portfolio role first. If switching existing units, include any tax and exit-load effects separately from the choice of where to invest new money.":"A quote with a rider, deductible or changed payout option is not interchangeable with the base plan. For an existing policy, continuity and accepted medical disclosures matter alongside the new quote. Do not cancel existing protection before the replacement is issued and its terms are understood."}</p>
    <h2 style={{marginTop:32}}>Official product documents</h2><ul><li><a href={c.urlA} target="_blank" rel="noopener noreferrer">{c.a}: issuer documents</a></li><li><a href={c.urlB} target="_blank" rel="noopener noreferrer">{c.b}: issuer documents</a></li></ul>
    <h2 style={{marginTop:32}}>Questions before you decide</h2>{faq.map(f=><details key={f.q} style={{padding:"14px 0",borderBottom:"1px solid var(--border)"}}><summary>{f.q}</summary><p>{f.a}</p></details>)}
    <p style={{marginTop:24}}><Link href={fund?"/learn/mutual-funds":"/learn/insurance"}>Explore the practical {fund?"mutual-fund":"insurance"} guides →</Link></p>
  </main>;
}
