import { BEST_FOR_CATEGORIES } from "@/data/bestfor";
import { CARDS, calcReward } from "@/data/cards";
import { interpolate } from "@/data/editorial-helper";
import { notFound } from "next/navigation";
import Link from "next/link";
import BankLogo from "@/components/BankLogo";

export async function generateStaticParams() {
  return BEST_FOR_CATEGORIES.map(cat => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const cat = BEST_FOR_CATEGORIES.find(c => c.slug === params.slug);
  if (!cat) return { title: "Not Found" };
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default function BestForPage({ params }) {
  const cat = BEST_FOR_CATEGORIES.find(c => c.slug === params.slug);
  if (!cat) notFound();

  // Calculate actual rewards for each picked card at test spend
  const picksWithMath = cat.picks.map(pick => {
    const card = CARDS.find(c => c.id === pick.cardId);
    if (!card) return { ...pick, card: null, reward: null };
    const reward = calcReward(card, cat.categoryId, cat.testSpend);
    return { ...pick, card, reward, note: interpolate(pick.note, card) };
  }).filter(p => p.card);

  // JSON-LD: FAQ schema
  const faqSchema = cat.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.faq.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "Best Cards", item: "https://assurefintech.com/best" },
      { "@type": "ListItem", position: 3, name: cat.shortTitle, item: `https://assurefintech.com/best/${cat.slug}` },
    ],
  };

  // JSON-LD: Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cat.title,
    description: cat.description,
    author: { "@type": "Organization", name: "Assure Fintech" },
    publisher: { "@type": "Organization", name: "Assure Fintech" },
    dateModified: new Date().toISOString(),
    mainEntityOfPage: `https://assurefintech.com/best/${cat.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>Best Cards</span>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>{cat.shortTitle}</span>
      </div>

      {/* Hero */}
      <div className="mb-10">
        <div className="text-4xl mb-3">{cat.icon}</div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
          {cat.title}
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--accent-text)" }}>
          {cat.heroLine}
        </p>
      </div>

      {/* Intro */}
      <div className="mb-10">
        {cat.intro.split("\n\n").map((para, i) => (
          <p key={i} className="text-[15px] leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
            {para}
          </p>
        ))}
      </div>

      {/* Test Spend Context */}
      <div className="mb-8 rounded-xl p-4 flex items-start gap-3" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)" }}>
        <span className="text-lg flex-shrink-0 mt-0.5">📊</span>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--blue)" }}>How we calculated</div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            All cashback figures below are calculated at <strong style={{ color: "var(--text)" }}>₹{cat.testSpend.toLocaleString()}/month</strong> spend in this category, using our cap-aware calculator that accounts for monthly limits and fallback rates.
          </p>
        </div>
      </div>

      {/* Card Picks */}
      <div className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>Our Picks</h2>
        <div className="flex flex-col gap-4">
          {picksWithMath.map((pick, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: i === 0 ? "2px solid var(--green-border)" : "1px solid var(--border)" }}>
              {/* Card Header */}
              <div className="px-5 py-4 flex items-center justify-between" style={{ background: i === 0 ? "var(--green-bg)" : "var(--bg-muted)" }}>
                <div className="flex items-center gap-3">
                  <BankLogo bank={pick.card.bank} cardId={pick.card.id} size={40} rounded={10} fontSize={12} />
                  <div>
                    <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{pick.card.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {pick.card.fee === 0 ? "Free" : `₹${pick.card.fee.toLocaleString()}/yr`}
                      {pick.card.fee > 0 && pick.card.feeWaiver !== "None" ? ` (waiver: ${pick.card.feeWaiver})` : ""}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold font-mono" style={{ color: "var(--green)" }}>
                    ₹{pick.reward.cashback.toLocaleString()}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>
                    /month
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="px-5 pt-3">
                <span className="inline-block text-xs font-semibold rounded-md px-2.5 py-1" style={{
                  background: i === 0 ? "var(--green-bg)" : "var(--accent-light)",
                  color: i === 0 ? "var(--green)" : "var(--accent-text)",
                  border: `1px solid ${i === 0 ? "var(--green-border)" : "var(--accent-border)"}`,
                }}>
                  {pick.badge}
                </span>
              </div>

              {/* Note + Math */}
              <div className="px-5 py-3">
                <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                  {pick.note}
                </p>
                <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-faint)" }}>
                  <span>Rate: <strong className="font-mono" style={{ color: "var(--text)" }}>{pick.reward.effectiveRate}%</strong></span>
                  {pick.reward.capped && (
                    <span className="rounded-md px-2 py-0.5" style={{ background: "var(--orange-bg)", color: "var(--orange)", border: "1px solid var(--orange-border)" }}>
                      ⚠️ Cap applies
                    </span>
                  )}
                  <Link href={`/cards/${pick.card.id}`} className="no-underline ml-auto text-xs font-semibold" style={{ color: "var(--accent-text)" }}>
                    Full review →
                  </Link>
                </div>
                {pick.reward.capNote && (
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--orange)" }}>
                    {pick.reward.capNote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="mb-10 rounded-xl p-5" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--accent-text)" }}>Our Verdict</div>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {cat.verdict.split("**").map((segment, i) =>
            i % 2 === 1
              ? <strong key={i} style={{ color: "var(--text)" }}>{segment}</strong>
              : <span key={i}>{segment}</span>
          )}
        </p>
      </div>

      {/* Try Smart Swipe CTA */}
      <div className="mb-10 rounded-xl p-5 text-center" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>Want personalized results?</p>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Enter your actual monthly spending and see which card saves you the most.</p>
        <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
          Try Smart Swipe →
        </Link>
      </div>

      {/* FAQ */}
      {cat.faq && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>❓ Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {cat.faq.map((item, i) => (
              <details key={i} className="group rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <summary className="cursor-pointer px-4 py-3.5 text-sm font-semibold flex items-center justify-between" style={{ color: "var(--text)", background: "var(--bg-muted)" }}>
                  <span>{item.q}</span>
                  <span className="text-base ml-2 transition-transform group-open:rotate-45" style={{ color: "var(--text-faint)" }}>+</span>
                </summary>
                <div className="px-4 py-3.5" style={{ background: "var(--bg-card)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Browse Other Categories */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Browse Other Categories</h2>
        <div className="flex flex-wrap gap-2">
          {BEST_FOR_CATEGORIES.filter(c => c.slug !== cat.slug).map(c => (
            <Link key={c.slug} href={`/best/${c.slug}`} className="no-underline text-xs rounded-lg px-3 py-1.5 transition-colors" style={{ color: "var(--text-secondary)", background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
              {c.icon} {c.shortTitle}
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
