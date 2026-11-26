import Link from 'next/link';
import { RECOVERED_ARTICLES } from '@/data/recovered-articles';
import RestoredCoverage from '@/components/RestoredCoverage';

export function recoveredMetadata(slug) {
  const article = RECOVERED_ARTICLES[slug];
  return {title:article.title,description:article.intro,alternates:{canonical:'/blog/'+slug},openGraph:{title:article.title,description:article.intro,type:'article',siteName:'Assure Fintech'}};
}
export default function RecoveredArticle({slug}) {
  const article = RECOVERED_ARTICLES[slug];
  const schema = {'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.intro,datePublished:article.published,dateModified:'2026-10-17',author:{'@type':'Person',name:'Ash'},publisher:{'@type':'Organization',name:'Assure Fintech'},mainEntityOfPage:'https://www.assurefintech.com/blog/'+slug};
  return <article className="prose recovered-article pt-24 pb-20 px-6 max-w-[850px] mx-auto">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link></nav>
    <h1>{article.title}</h1><p>By Ash · Updated 17 October 2026</p><p>{article.intro}</p>
    {article.sections.map(([heading,...paragraphs])=><section key={heading}><h2>{heading}</h2>{paragraphs.map((text,i)=><p key={i}>{text}</p>)}</section>)}
    <RestoredCoverage route={'/blog/'+slug} />
    <p><Link href={article.related}>Related guide and current product terms →</Link></p>
  </article>;
}
