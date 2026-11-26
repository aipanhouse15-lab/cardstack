import {readFileSync,writeFileSync}from'node:fs';
import {CARDS,isSourceReviewed}from'../data/cards.js';
const sitemap=readFileSync('.next/server/app/sitemap.xml.body','utf8');
const paths=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
const decode=s=>s.replace(/&#(x[\da-f]+|\d+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n))).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&apos;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&nbsp;',' ');
function mainText(html){
 let main=0,skip=0,parts=[];
 for(const token of html.match(/<[^>]*>|[^<]+/g)||[]){
  if(token[0]==='<'){
   const m=token.match(/^<(\/)?([\w-]+)/);if(!m)continue;const end=!!m[1],tag=m[2].toLowerCase();
   if(tag==='main')main+=end?-1:1;
   if(['script','style','svg','nav','footer'].includes(tag))skip=Math.max(0,skip+(end?-1:1));
   if(main&&!skip&&['p','h1','h2','h3','li','tr','section','article','br'].includes(tag))parts.push('\n');
  }else if(main&&!skip)parts.push(decode(token));
 }
 return parts.join(' ').replace(/[ \t]+/g,' ').replace(/ *\n */g,'\n').replace(/\n{3,}/g,'\n\n').trim();
}
const intro=`# Assure Fintech — expanded published reference\n\nGenerated from the canonical sitemap pages in this release. Issuer effective dates and article review dates remain in each page. ${CARDS.length} catalogue records; ${CARDS.filter(isSourceReviewed).length} source-linked. A source link is not a guarantee of current terms. Disabled reward models must not be inferred from headline points.\n\n`;
let sections=[];
for(const path of paths){const file='.next/server/app'+(path==='/'?'/index':path)+'.html';const html=readFileSync(file,'utf8');const title=decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)||[])[1]?.replace(/<[^>]+>/g,'')||path);sections.push(`## ${title}\nSource: https://www.assurefintech.com${path}\n\n${mainText(html)}`);}
writeFileSync('public/llms-full.txt',intro+sections.join('\n\n---\n\n')+'\n');
console.log(`Expanded reference generated from ${sections.length} canonical pages.`);
