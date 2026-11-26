import { GUIDE_DETAILS } from '@/data/guide-details';
import RestoredCoverage from '@/components/RestoredCoverage';

export default function GuideDetails({ topic }) {
  const sections = GUIDE_DETAILS[topic];
  if (!sections) return <RestoredCoverage route={topic.startsWith('blog/') ? '/'+topic : '/learn/'+topic} />;
  return <div className="guide-details">
    {sections.map(([heading, ...paragraphs]) => <section key={heading} style={{margin:'32px 0',padding:0}}>
      <h2 style={{fontSize:24,lineHeight:1.35,fontWeight:700,marginBottom:14}}>{heading}</h2>
      {paragraphs.map((text,i) => <p key={i} style={{margin:'12px 0',lineHeight:1.8}}>{text}</p>)}
    </section>)}
    <RestoredCoverage route={topic.startsWith('blog/') ? '/'+topic : '/learn/'+topic} />
  </div>;
}
