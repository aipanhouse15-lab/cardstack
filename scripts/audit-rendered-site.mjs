const baseUrl = (process.env.AUDIT_BASE_URL || process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");

const decodeEntities = value => value
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&#x27;", "'")
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">");

async function get(pathname) {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect: "follow" });
  return { response, body: await response.text() };
}

const sitemap = await get("/sitemap.xml");
if (!sitemap.response.ok) throw new Error(`Sitemap returned ${sitemap.response.status}`);

const paths = [...sitemap.body.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(match => new URL(decodeEntities(match[1])).pathname)
  .filter((path, index, all) => all.indexOf(path) === index);

const errors = [];
const titles = new Map();
const linkedPaths = new Set();

for (const pathname of paths) {
  const { response, body } = await get(pathname);
  if (!response.ok) {
    errors.push(`${pathname}: HTTP ${response.status}`);
    continue;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) continue;

  const title = decodeEntities((body.match(/<title>(.*?)<\/title>/is) || [])[1]?.trim() || "");
  const description = (body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i) || [])[1]?.trim() || "";
  const canonical = (body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)/i) || [])[1] || "";
  const h1Count = (body.match(/<h1(?:\s|>)/gi) || []).length;

  if (!title) errors.push(`${pathname}: missing title`);
  if (!description) errors.push(`${pathname}: missing meta description`);
  if (!canonical) errors.push(`${pathname}: missing canonical`);
  else if (new URL(canonical, baseUrl).pathname.replace(/\/$/, "") !== pathname.replace(/\/$/, "")) {
    errors.push(`${pathname}: canonical path mismatch (${canonical})`);
  }
  if (h1Count !== 1) errors.push(`${pathname}: expected 1 h1, found ${h1Count}`);

  if (title) {
    const existing = titles.get(title) || [];
    titles.set(title, [...existing, pathname]);
  }

  for (const match of body.matchAll(/href=["']([^"'#]+)["']/gi)) {
    const href = decodeEntities(match[1]);
    if (/^(mailto:|tel:|javascript:)/i.test(href)) continue;
    const url = new URL(href, baseUrl);
    if (url.origin === new URL(baseUrl).origin) linkedPaths.add(url.pathname);
  }
}

for (const pathname of linkedPaths) {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
  if (response.status >= 400) errors.push(`${pathname}: linked route returned HTTP ${response.status}`);
}

for (const [title, titlePaths] of titles) {
  if (titlePaths.length > 1) errors.push(`Duplicate title “${title}”: ${titlePaths.join(", ")}`);
}

if (errors.length) {
  console.error(`Rendered audit failed with ${errors.length} issue(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Rendered audit passed: ${paths.length} sitemap routes and ${linkedPaths.size} internal link targets.`);
