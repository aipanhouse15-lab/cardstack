import assert from'node:assert/strict';
const base=process.argv[2]||'http://127.0.0.1:3225';
const get=async p=>{const r=await fetch(base+p);assert.equal(r.status,200,p);return r};
const about=await get('/about');for(const h of ['content-security-policy','x-frame-options','x-content-type-options','referrer-policy','permissions-policy'])assert.ok(about.headers.get(h),h);
assert.match(about.headers.get('content-security-policy'),/frame-ancestors 'none'/);
assert.ok(!(await about.text()).includes('1.33%'));
const all=await(await get('/api/cards')).json();assert.equal(all.total,76);
const c=id=>all.cards.find(c=>c.id===id);assert.equal(c('amex-mrcc').fee,4500);assert.match(c('idfc-select').pointsInfo,/threshold was removed/);assert.match(c('icici-mmt').pointsInfo,/earn no myCash/);
const contact=await(await get('/contact')).text();assert.ok(contact.includes('Ashutosh Khulbe'));assert.ok(contact.includes('mailto:ccardproject@gmail.com'));
const home=await(await get('/')).text();assert.ok(home.includes('Questions about card rewards'));assert.ok(home.includes('"@id":"https://www.assurefintech.com/#organization"'));assert.ok(!/<script[^>]+src="https:\/\/www.googletagmanager.com/.test(home));
for(const p of ['/compare/hdfc-millennia-vs-axis-ace','/compare/compare-hdfc-millennia-vs-axis-ace']){const html=await(await get(p)).text();assert.ok(html.includes('rel="canonical" href="https://www.assurefintech.com/compare/compare-hdfc-millennia-vs-axis-ace"'));}
const sitemap=await(await get('/sitemap.xml')).text();for(const p of ['/blog/best-free-cards','/learn/credit-cards'])assert.ok(sitemap.includes('https://www.assurefintech.com'+p+'</loc>'));
const image=await get('/og-image.png');assert.ok(image.headers.get('content-type').startsWith('image/'));
const cards=await(await get('/cards')).text();assert.ok(cards.includes('.webp'));assert.ok(cards.includes('loading="lazy"'));assert.ok(cards.length<400000,'Catalogue HTML must shrink without removing cards');
const short=await(await get('/llms.txt')).text(),full=await(await get('/llms-full.txt')).text();assert.notEqual(short,full);assert.ok(full.length>short.length*5);assert.ok(full.includes('Source: https://www.assurefintech.com/learn/tax/old-vs-new-regime'));
console.log('Repair HTTP checks passed: facts in API, headers, schema/visible FAQ, canonical aliases, sitemap omissions, OG image, lighter catalogue and expanded reference.');
