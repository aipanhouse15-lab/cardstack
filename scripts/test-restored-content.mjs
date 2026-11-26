import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {RESTORED_COVERAGE} from '../data/restored-coverage.js';
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;');
let sections=0,tables=0;
for(const [route,content]of Object.entries(RESTORED_COVERAGE)){
 const html=readFileSync('.next/server/app'+route+'.html','utf8');
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,route+': one H1');
 assert.ok(!html.includes('NEXT_REDIRECT'),route+': article is rendered');
 for(const section of content.sections){
  assert.ok(html.includes(escape(section.heading)),route+': missing '+section.heading);
  for(const p of section.paragraphs||[])assert.ok(html.includes(escape(p)),route+': missing paragraph');
  if(section.table){tables++;assert.ok(html.includes(escape(section.table.caption)),route+': missing table');}
  sections++;
 }
}
const restored=['amazon-hack','best-card-beginners-2026','best-card-insurance-premiums-2026','best-card-low-spenders-2026','first-card-decision-framework','fuel-trick','future-credit-card-rewards-india','get-annual-fee-waived-scripts','maximize-dining','reward-points-vs-cashback','why-reward-rates-dropping-india'];
for(const slug of restored){
 const html=readFileSync('.next/server/app/blog/'+slug+'.html','utf8');
 assert.ok(!html.includes('NEXT_REDIRECT'),slug);
 assert.ok(html.includes('"dateModified":"2026-10-17"'),slug+': date');
}
const free=readFileSync('.next/server/app/blog/best-free-cards.html','utf8');
assert.ok(!free.includes('NEXT_REDIRECT'));
const millennia=readFileSync('.next/server/app/cards/hdfc-millennia.html','utf8');
assert.ok(millennia.includes('₹100 transaction blocks'));
assert.ok(!millennia.includes('current card-specific terms state no minimum'));
console.log(`Content recovery checks passed: ${Object.keys(RESTORED_COVERAGE).length} routes, ${sections} substantive sections, ${tables} tables, and 11 former redirects.`);

const {BLOG_POSTS}=await import('../data/content.js');
assert.equal(BLOG_POSTS.length,37);
for(const post of BLOG_POSTS){
 const html=readFileSync('.next/server/app/blog/'+post.id+'.html','utf8');
 const h1=html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]*>/g,'');
 assert.equal(h1,escape(post.title),post.id+': listing title matches article');
 assert.equal(post.standalone,true);
 assert.ok(!post.content,post.id+': no duplicate draft bundled');
}
console.log('Blog listing checks passed: all 37 titles match their standalone articles.');
