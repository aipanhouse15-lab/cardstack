import Link from "next/link";
import Script from "next/script";

const UPDATED = "September 28, 2026";
const URL = "https://www.assurefintech.com/blog/how-reward-points-work-india";
const faqs = [
  ["How much is one credit card reward point worth?", "There is no universal rupee value. It depends on the card, redemption route, conversion ratio, catalogue price, fees, caps and the value you personally get from the item or booking."],
  ["Do credit card reward points expire?", "Expiry rules differ by issuer, card and reward program. Check the current program terms and your points statement for the applicable expiry date; do not assume another card or bank has the same rule."],
  ["What happens to points when I close my card?", "The treatment varies by issuer and program. Before requesting closure or changing a product, check whether points can be redeemed or transferred and the exact deadline, if any."],
  ["Are cashback cards always better than points cards?", "No. Compare the net value you can actually redeem on your normal eligible spending. Cashback is usually easier to value, while points can suit someone who will use a specific redemption route; neither wins for every person or transaction."],
];

export const metadata = {
  title: "Credit Card Reward Points in India: Value, Expiry and Redemption",
  description: "Learn how to value credit card points, check expiry and closure rules, compare redemption routes, and decide whether points or cashback fit your spending.",
  alternates: { canonical: "/blog/how-reward-points-work-india" },
  openGraph: { title: "How Credit Card Reward Points Work", description: "A practical guide to point value, expiry and redemption choices.", type: "article", siteName: "Assure Fintech" },
};

export default function HowRewardPointsWorkIndia() {
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: metadata.title, author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-28", publisher: { "@type": "Organization", name: "Assure Fintech" }, mainEntityOfPage: URL };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.assurefintech.com/blog/" },
    { "@type": "ListItem", position: 3, name: "How Reward Points Work", item: URL },
  ] };
  return <main style={{ maxWidth: 820, margin: "72px auto 0", padding: "32px 22px 56px", color: "var(--text)", lineHeight: 1.75 }}>
    <Script id="points-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <Script id="points-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <Script id="points-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}><Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Reward points</nav>
    <p style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-muted)" }}>Credit cards · Reviewed {UPDATED}</p>
    <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.12, margin: "12px 0 18px" }}>Credit card reward points: how to value, redeem and compare them</h1>
    <p style={{ fontSize: 19, color: "var(--text-muted)" }}>A points balance is not cash. Its value depends on the rules of your exact card and whether you can use a redemption that is worthwhile to you. This guide shows how to check the math without relying on a generic “value per point.”</p>

    <section style={{ marginTop: 36 }}><h2>Start with the earning rules</h2>
      <p>Read the issuer's current reward terms for your exact card variant. Check the earning rate, eligible transaction categories, minimum transaction rules, excluded merchant categories, monthly or statement-cycle caps, and whether returns or reversals remove previously earned points. The same purchase type can be treated differently across cards.</p>
      <p>Do not assume that every transaction earns the headline rate just because it was paid by card. Confirm the payment category and exclusions in the issuer's terms and, where available, your statement or rewards ledger.</p>
    </section>

    <section style={{ marginTop: 28 }}><h2>Calculate the value you can actually use</h2>
      <p>For a redemption, divide the realistic cash price you would otherwise pay by the number of points required. Subtract any taxes, fees, delivery charges or extra cash payment. Compare like with like: a catalogue item's listed price is not necessarily the price you would have paid for it.</p>
      <div style={{ padding: 20, margin: "20px 0", border: "1px solid var(--border)", borderRadius: 14, background: "var(--raise)" }}><strong>Example method</strong><p style={{ marginBottom: 0 }}>If a redemption uses 8,000 points plus ₹500 for something you would otherwise buy for ₹2,500, the usable value is about ₹2,000 ÷ 8,000 = ₹0.25 per point. If you would not have bought it, its personal value may be lower.</p></div>
      <p>Compare this with the cashback or statement-credit option actually available on your card. A partner transfer can have a different conversion ratio, availability and fees. Do not count a theoretical flight or hotel price as savings unless you would book that itinerary, can find availability and accept the dates and conditions.</p>
    </section>

    <section style={{ marginTop: 28 }}><h2>Check expiry and account-change rules</h2>
      <p>Expiry, inactivity, transfer and account-closure rules are specific to the issuer and rewards program. Check the current terms and your account's reward balance page. Before closing a card, changing its variant or allowing a linked account to lapse, confirm whether points will remain, transfer, or be forfeited—and the exact deadline and steps.</p>
      <p>Keep a note of your balance, expiry dates and any redemption confirmation. Do not rely on a general rule from another bank or an old article; program rules can differ and change.</p>
    </section>

    <section style={{ marginTop: 28 }}><h2>Points or cashback: which fits?</h2>
      <p>Cashback is often simpler to compare because its rupee amount is explicit, but the card can still have caps, exclusions, delayed credits or conditions. Points can be useful when you already have a realistic redemption plan and the value after costs beats the best alternative. For each card, compare only eligible spending and subtract the annual fee, taxes and redemption friction.</p>
      <p>A useful test is to review the last 12 months: what did you actually redeem, what value did you receive, and what expired unused? Choose based on observed habits rather than a best-case conversion claim. Our <Link href="/cards">card catalogue</Link> and <Link href="/smart-swipe">Smart Swipe tool</Link> can help you compare options against your spending.</p>
    </section>

    <section style={{ marginTop: 32 }}><h2>FAQ</h2>{faqs.map(([q, a]) => <details key={q} style={{ padding: "14px 0", borderBottom: "1px solid var(--border)" }}><summary style={{ cursor: "pointer", fontWeight: 650 }}>{q}</summary><p style={{ color: "var(--text-muted)" }}>{a}</p></details>)}</section>
    <footer style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid var(--border)", fontSize: 13, color: "var(--text-muted)" }}>Reviewed September 28, 2026. Reward earning, value, expiry and redemption are determined by the current issuer and program terms for your card. This explainer describes a comparison method and does not promise a particular return.</footer>
  </main>;
}
