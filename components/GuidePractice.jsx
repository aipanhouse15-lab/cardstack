import Link from "next/link";
import { GUIDE_PRACTICE } from "@/data/guide-practice";

export default function GuidePractice({ topic }) {
  const example = GUIDE_PRACTICE[topic];
  if (!example) return null;
  const group = topic.split("/")[0];
  const tool = group === "loans" ? ["/loan-calculator", "Test your loan figures"] : group === "tax" ? ["/tax-calculator", "Compare AY 2026–27 salary scenarios"] : group === "savings" ? ["/fd-calculator", "Test FD return assumptions"] : group === "insurance" ? ["/insurance-calculator", "Explore simplified claim deductions"] : ["/learn/mutual-funds", "Explore mutual-fund guides"];
  return <section aria-labelledby="worked-example-title" style={{marginTop:32,padding:24,border:"1px solid var(--border)",borderRadius:16,background:"var(--bg-card)"}}>
    <h2 id="worked-example-title" style={{fontSize:24,marginBottom:16}}>{example[0]}</h2>
    <p style={{lineHeight:1.8}}>{example[1]}</p>
    <h3 style={{fontSize:19,marginTop:22}}>How to use this in your decision</h3>
    <p style={{lineHeight:1.8}}>{example[2]}</p>
    <p style={{color:"var(--text-muted)",fontSize:13,lineHeight:1.7}}><strong>Example assumptions:</strong> {example[3]}</p>
    <Link href={tool[0]}>{tool[1]} →</Link>
  </section>;
}
