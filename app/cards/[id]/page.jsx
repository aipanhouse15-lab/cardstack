import { CARDS, CATEGORIES } from "@/data/cards";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";
import BankLogo from "@/components/BankLogo";

export async function generateStaticParams() {
  return CARDS.map(card => ({ id: card.id }));
}

export async function generateMetadata({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) return { title: "Card Not Found" };
  const editorial = card.editorial;
  const pageTitle = `${card.name} Review — Rewards, Fees, Caps & Best Combos (2026)`;
  const pageDesc = editorial?.verdict?.headline
    ? `${card.name}: ${editorial.verdict.headline} Full review with cap math, best uses, what to avoid, and ideal card pairings.`
    : `${card.name} by ${card.bank}: ${card.fee === 0 ? "Lifetime free" : `₹${card.fee}/year`}. Best for ${Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0][0]} at ${Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0][1]}%. Full review with pros, cons, and reward breakdown.`;
  return {
    title: pageTitle,
    description: pageDesc,
    alternates: { canonical: `/cards/${params.id}` },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      type: "article",
      siteName: "Assure Fintech",
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: pageDesc,
    },
  };
}

export default function CardPage({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) notFound();

  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const maxRate = sorted[0][1];
  const bestCategory = sorted[0][0];
  const ed = card.editorial;

  // JSON-LD: Product schema for credit card
  const cardSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: card.name,
    description: `${card.name} by ${card.bank}. ${card.type} credit card with up to ${maxRate}% rewards on ${bestCategory}. ${card.fee === 0 ? "Lifetime free — no annual fee." : `Annual fee: ₹${card.fee}.`} ${card.highlights.join(". ")}.`,
    brand: { "@type": "Organization", name: card.bank },
    category: "Credit Card",
    offers: {
      "@type": "Offer",
      price: card.fee,
      priceCurrency: "INR",
      description: card.fee === 0 ? "Lifetime free — no annual fee" : `Annual fee: ₹${card.fee}`,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Card Type", value: card.type },
      { "@type": "PropertyValue", name: "Card Network", value: card.network },
      { "@type": "PropertyValue", name: "Lounge Access", value: card.lounge },
      { "@type": "PropertyValue", name: "Best Reward Category", value: bestCategory },
      { "@type": "PropertyValue", name: "Best Reward Rate", value: `${maxRate}%` },
      ...sorted.map(([catId, rate]) => ({
        "@type": "PropertyValue",
        name: `${catId.charAt(0).toUpperCase() + catId.slice(1)} Reward Rate`,
        value: `${rate}%`,
      })),
    ],
    feesAndCommissionsSpecification: card.fee === 0 ? "No annual fee" : `Annual fee of ₹${card.fee}`,
    areaServed: { "@type": "Country", name: "India" },
  };

  // JSON-LD: Review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "FinancialProduct", name: card.name },
    author: { "@type": "Organization", name: "Assure Fintech" },
    reviewBody: ed?.verdict?.headline
      ? `${card.name}: ${ed.verdict.headline} ${ed.verdict.idealFor}`
      : `${card.name} review: ${card.pros.join(". ")}. Downsides: ${card.cons.join(". ")}.`,
    positiveNotes: { "@type": "ItemList", itemListElement: card.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })) },
    negativeNotes: { "@type": "ItemList", itemListElement: card.cons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })) },
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "Cards", item: "https://www.assurefintech.com/cards" },
      { "@type": "ListItem", position: 3, name: card.name, item: `https://www.assurefintech.com/cards/${card.id}` },
    ],
  };

  // JSON-LD: FAQ schema (if editorial FAQ exists)
  const faqSchema = ed?.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ed.faq.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cardSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <Link href="/cards" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Cards</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>{card.name}</span>
      </div>

      {/* Header */}
      <div className="rounded-2xl p-7 mb-8" style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}>
        <div className="flex items-center gap-4 flex-wrap mb-5">
          <BankLogo bank={card.bank} cardId={card.id} size={64} rounded={16} fontSize={16} />
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>{card.name}{!/credit card/i.test(card.name) ? " Credit Card" : ""}</h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{card.bank} · {card.type} · {card.network}</p>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {[["Annual Fee", card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}`],
            ["Fee Waiver", card.feeWaiver || "N/A"],
            ["Lounge Access", card.lounge],
            ["Best Rate", `${maxRate}%`],
            ["Network", card.network],
          ].map(([label, value], i) => (
            <div key={i}>
              <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>{label}</div>
              <div className="text-lg font-bold font-mono" style={{ color: i === 3 ? "var(--green)" : "var(--text)" }}>{value}</div>
            </div>
          ))}
        </div>
        {card.verified && (
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>✅ Data verified March 2026</div>
        )}
        {!card.verified && (
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)", color: "var(--orange)" }}>⚠️ Data being verified</div>
        )}
      </div>

      {/* ═══ EDITORIAL: Verdict ═══ */}
      {ed?.verdict && (
        <div className="mb-10">
          <p className="text-lg sm:text-xl font-bold leading-snug mb-4" style={{ color: "var(--text)" }}>
            {ed.verdict.headline}
          </p>
          {ed.verdict.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-[15px] leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
              {para}
            </p>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl p-4" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--green)" }}>✦ Ideal for</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{ed.verdict.idealFor}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--orange)" }}>✦ Skip if</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{ed.verdict.skipIf}</p>
            </div>
          </div>
        </div>
      )}

      {/* Reward Rates */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Reward Rates by Category</h2>
        <div className="flex flex-col gap-2">
          {sorted.map(([catId, rate]) => {
            const cat = CATEGORIES.find(c => c.id === catId);
            return (
              <div key={catId} className="flex items-center gap-3">
                <span className="text-base w-6">{cat?.icon || "📋"}</span>
                <span className="text-sm w-24" style={{ color: "var(--text-secondary)" }}>{cat?.label || catId}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-muted)" }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(rate / maxRate) * 100}%`, background: rate === maxRate ? "var(--green)" : "var(--accent)" }} />
                </div>
                <span className="text-sm font-bold font-mono w-10 text-right" style={{ color: rate === maxRate ? "var(--green)" : "var(--text)" }}>{rate}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ EDITORIAL: Cap Math ═══ */}
      {ed?.capMath && (
        <div className="mb-8 rounded-xl overflow-hidden" style={{ border: "2px solid var(--orange-border)" }}>
          <div className="px-5 py-3 flex items-center gap-2" style={{ background: "var(--orange-bg)" }}>
            <span className="text-lg">⚠️</span>
            <span className="text-sm font-bold" style={{ color: "var(--orange)" }}>{ed.capMath.title}</span>
          </div>
          <div className="p-5" style={{ background: "var(--bg-card)" }}>
            {ed.capMath.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--text-secondary)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Points Info */}
      {card.pointsInfo && (
        <div className="mb-6 rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-faint)" }}>How Points Work</div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{card.pointsInfo}</p>
        </div>
      )}

      {/* Redemption Note */}
      {card.redemptionNote && (
        <div className="mb-6 rounded-xl p-4 flex items-start gap-3" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)" }}>
          <span className="text-lg flex-shrink-0 mt-0.5">💡</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--blue)" }}>Redemption matters</div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{card.redemptionNote}</p>
          </div>
        </div>
      )}

      {/* Partner / SmartBuy Rates */}
      {card.partnerRates && card.partnerRates.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>🚀 Boosted Rates (Partners & SmartBuy)</h2>
          <div className="flex flex-col gap-2">
            {card.partnerRates.map((pr, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
                <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{pr.name}</span>
                <span className="text-sm font-bold font-mono rounded-md px-2.5 py-1" style={{ background: "var(--green-bg)", color: "var(--green)" }}>{pr.rate}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--text-faint)" }}>These rates apply when using specific platforms or partners — higher than the base category rate shown above.</p>
        </div>
      )}

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Key Benefits</h2>
        <div className="flex flex-wrap gap-1.5">
          {card.highlights.map((h, i) => (
            <span key={i} className="text-xs rounded-lg px-3 py-1.5" style={{ color: "var(--text-secondary)", background: "var(--bg-muted)" }}>{h}</span>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="rounded-xl p-5" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
          <div className="text-xs font-bold mb-3" style={{ color: "var(--green)" }}>PROS</div>
          {card.pros.map((p, i) => <div key={i} className="text-sm mb-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>✅ {p}</div>)}
        </div>
        <div className="rounded-xl p-5" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
          <div className="text-xs font-bold mb-3" style={{ color: "var(--orange)" }}>CONS</div>
          {card.cons.map((c, i) => <div key={i} className="text-sm mb-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>⚠️ {c}</div>)}
        </div>
      </div>

      {/* ═══ EDITORIAL: Best Used For ═══ */}
      {ed?.bestFor && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>✅ Best Used For</h2>
          <div className="flex flex-col gap-2">
            {ed.bestFor.map((item, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
                <div className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>{item.category}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══ EDITORIAL: Don't Use For ═══ */}
      {ed?.avoidFor && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>⚠️ Switch to Another Card For</h2>
          <div className="flex flex-col gap-2">
            {ed.avoidFor.map((item, i) => {
              const altCard = item.altCard ? CARDS.find(c => c.id === item.altCard) : null;
              return (
                <div key={i} className="rounded-xl p-4" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.category}</span>
                    {altCard && (
                      <Link href={`/cards/${altCard.id}`} className="text-xs font-semibold no-underline rounded-md px-2 py-0.5" style={{ background: "var(--accent-light)", color: "var(--accent-text)", border: "1px solid var(--accent-border)" }}>
                        → {altCard.name}
                      </Link>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ EDITORIAL: Pair With ═══ */}
      {ed?.pairWith && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>🤝 Best Card Combos with {card.name}</h2>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            No single card covers everything well. Here are the best combinations to fill {card.name}'s gaps:
          </p>
          <div className="flex flex-col gap-3">
            {ed.pairWith.map((combo, i) => {
              const pairedCard = combo.cardId ? CARDS.find(c => c.id === combo.cardId) : null;
              return (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--accent-border)" }}>
                  <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: "var(--accent-light)" }}>
                    <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{combo.combo}</span>
                    <span className="text-xs font-mono font-semibold rounded-md px-2 py-0.5" style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}>{combo.fee}</span>
                  </div>
                  <div className="px-4 py-3" style={{ background: "var(--bg-card)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{combo.reason}</p>
                    {pairedCard && (
                      <Link href={`/cards/${pairedCard.id}`} className="inline-block mt-2 text-xs font-semibold no-underline" style={{ color: "var(--accent-text)" }}>
                        View {pairedCard.name} details →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-xl p-4 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
            <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>Want to find the best card to pair with yours?</p>
            <Link href="/gap-finder" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-5 py-2 text-sm font-semibold">
              Try Gap Finder →
            </Link>
          </div>
        </div>
      )}

      {/* Upcoming Changes */}
      {card.upcoming && (
        <div className="mb-8 rounded-xl overflow-hidden" style={{ border: "2px solid var(--orange-border)" }}>
          <div className="px-5 py-3 flex items-center justify-between" style={{ background: "var(--orange-bg)" }}>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔔</span>
              <span className="text-sm font-bold" style={{ color: "var(--orange)" }}>Upcoming Changes</span>
            </div>
            <span className="text-xs font-semibold rounded-full px-3 py-1" style={{ background: "var(--orange)", color: "#fff" }}>{card.upcoming.date}</span>
          </div>
          <div className="p-5" style={{ background: "var(--bg-card)" }}>
            <div className="flex flex-col gap-2 mb-4">
              {card.upcoming.changes.map((change, i) => (
                <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--orange)" }}>→</span>
                  <span>{change}</span>
                </div>
              ))}
            </div>
            {card.upcoming.impact && (
              <div className="rounded-lg p-3.5 text-sm leading-relaxed" style={{ background: "var(--orange-bg)", color: "var(--text-secondary)" }}>
                <span className="font-bold" style={{ color: "var(--orange)" }}>Impact: </span>
                {card.upcoming.impact}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══ EDITORIAL: FAQ ═══ */}
      {ed?.faq && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>❓ Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {ed.faq.map((item, i) => (
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

      {/* CTA */}
      <button className="w-full rounded-xl py-3.5 text-base font-semibold text-white border-none cursor-pointer opacity-80"
        style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}cc)` }}>
        Check {card.name} on bank website →
      </button>
      <p className="text-[11px] text-center mt-2" style={{ color: "var(--text-faint)" }}>Affiliate links coming soon</p>

      {/* Report an update */}
      <ReportForm cardName={card.name} cardId={card.id} />

      {/* Compare CTA */}
      <div className="mt-8 rounded-xl p-5 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>Want to compare this card?</p>
        <Link href="/compare" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
          Go to Compare Tool →
        </Link>
      </div>
    </section>
    </>
  );
}
