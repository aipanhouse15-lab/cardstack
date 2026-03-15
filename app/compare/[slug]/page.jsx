import { COMPARISONS } from "@/data/comparisons";
import { CARDS, CATEGORIES, calcReward } from "@/data/cards";
import { notFound } from "next/navigation";
import Link from "next/link";
import BankLogo from "@/components/BankLogo";

export async function generateStaticParams() {
  return COMPARISONS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const comp = COMPARISONS.find(c => c.slug === params.slug);
  if (!comp) return { title: "Not Found" };
  const c1 = CARDS.find(c => c.id === comp.card1);
  const c2 = CARDS.find(c => c.id === comp.card2);
  if (!c1 || !c2) return { title: "Not Found" };
  return {
    title: `${c1.name} vs ${c2.name} — Which Credit Card is Better? (2026)`,
    description: `${c1.name} vs ${c2.name}: detailed comparison of rewards, fees, caps, and cashback across 8 spending categories. Cap-aware calculations show which card actually earns more.`,
  };
}

// Auto-generate verdict based on numbers
function generateVerdict(c1, c2, c1Total, c2Total, c1Details, c2Details, categories) {
  const diff = Math.abs(c1Total - c2Total);
  const winner = c1Total >= c2Total ? c1 : c2;
  const loser = c1Total >= c2Total ? c2 : c1;
  const winnerDetails = c1Total >= c2Total ? c1Details : c2Details;
  const loserDetails = c1Total >= c2Total ? c2Details : c1Details;

  // Find categories each card wins
  const c1Wins = categories.filter(cat => (c1Details[cat.id]?.cashback || 0) > (c2Details[cat.id]?.cashback || 0));
  const c2Wins = categories.filter(cat => (c2Details[cat.id]?.cashback || 0) > (c1Details[cat.id]?.cashback || 0));
  const ties = categories.filter(cat => (c1Details[cat.id]?.cashback || 0) === (c2Details[cat.id]?.cashback || 0));

  if (diff < 100) {
    return `It's nearly a tie — just ₹${diff.toLocaleString("en-IN")} difference per month. ${c1.name} wins ${c1Wins.length} categories, ${c2.name} wins ${c2Wins.length}. Pick based on which categories matter most to you, or get both for full coverage.`;
  }

  const c1WinNames = c1Wins.map(c => c.label.toLowerCase()).join(", ");
  const c2WinNames = c2Wins.map(c => c.label.toLowerCase()).join(", ");

  return `${winner.name} earns ₹${diff.toLocaleString("en-IN")} more per month on this spending pattern. ${c1.name} wins on ${c1WinNames || "no categories"}. ${c2.name} wins on ${c2WinNames || "no categories"}. ${ties.length > 0 ? `They tie on ${ties.length} ${ties.length === 1 ? "category" : "categories"}.` : ""} The best strategy? Use ${winner.name} as your primary card and ${loser.name} for its winning categories.`;
}

// Auto-generate "who should pick which" based on data
function generatePickAdvice(c1, c2, c1Details, c2Details, categories) {
  const c1Strengths = categories
    .filter(cat => (c1Details[cat.id]?.cashback || 0) > (c2Details[cat.id]?.cashback || 0))
    .map(cat => cat.label.toLowerCase());
  const c2Strengths = categories
    .filter(cat => (c2Details[cat.id]?.cashback || 0) > (c1Details[cat.id]?.cashback || 0))
    .map(cat => cat.label.toLowerCase());

  const c1Fee = c1.fee === 0 ? "free" : `₹${c1.fee.toLocaleString("en-IN")}/year`;
  const c2Fee = c2.fee === 0 ? "free" : `₹${c2.fee.toLocaleString("en-IN")}/year`;

  return {
    pick1: {
      label: `Pick ${c1.name} if`,
      reasons: [
        c1Strengths.length > 0 ? `You spend heavily on ${c1Strengths.slice(0, 3).join(", ")}` : null,
        c1.lounge !== "None" && c2.lounge === "None" ? `You want lounge access (${c1.lounge})` : null,
        c1.fee < c2.fee ? `You want a lower fee (${c1Fee} vs ${c2Fee})` : null,
        c1.fee === 0 ? "You want a lifetime free card" : null,
      ].filter(Boolean),
    },
    pick2: {
      label: `Pick ${c2.name} if`,
      reasons: [
        c2Strengths.length > 0 ? `You spend heavily on ${c2Strengths.slice(0, 3).join(", ")}` : null,
        c2.lounge !== "None" && c1.lounge === "None" ? `You want lounge access (${c2.lounge})` : null,
        c2.fee < c1.fee ? `You want a lower fee (${c2Fee} vs ${c1Fee})` : null,
        c2.fee === 0 ? "You want a lifetime free card" : null,
      ].filter(Boolean),
    },
    pickBoth: `Use ${c1.name} for ${c1Strengths.slice(0, 2).join(" and ") || "its strengths"}, and ${c2.name} for ${c2Strengths.slice(0, 2).join(" and ") || "its strengths"}. Combined fee: ${c1.fee === 0 && c2.fee === 0 ? "free" : `₹${(c1.fee + c2.fee).toLocaleString("en-IN")}/year`}.`,
  };
}

export default function ComparisonPage({ params }) {
  const comp = COMPARISONS.find(c => c.slug === params.slug);
  if (!comp) notFound();

  const c1 = CARDS.find(c => c.id === comp.card1);
  const c2 = CARDS.find(c => c.id === comp.card2);
  if (!c1 || !c2) notFound();

  // Calculate rewards for each category
  const c1Details = {};
  const c2Details = {};
  let c1Total = 0;
  let c2Total = 0;

  CATEGORIES.forEach(cat => {
    const spend = comp.testSpends[cat.id] || 0;
    const r1 = calcReward(c1, cat.id, spend);
    const r2 = calcReward(c2, cat.id, spend);
    c1Details[cat.id] = r1;
    c2Details[cat.id] = r2;
    c1Total += r1.cashback;
    c2Total += r2.cashback;
  });

  const totalSpend = Object.values(comp.testSpends).reduce((a, b) => a + b, 0);
  const verdict = generateVerdict(c1, c2, c1Total, c2Total, c1Details, c2Details, CATEGORIES);
  const advice = generatePickAdvice(c1, c2, c1Details, c2Details, CATEGORIES);

  // JSON-LD schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare" },
      { "@type": "ListItem", position: 3, name: `${c1.name} vs ${c2.name}`, item: `https://assurefintech.com/compare/${comp.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${c1.name} vs ${c2.name} — which is better?`,
        acceptedAnswer: { "@type": "Answer", text: verdict },
      },
      {
        "@type": "Question",
        name: `Can I use both ${c1.name} and ${c2.name} together?`,
        acceptedAnswer: { "@type": "Answer", text: advice.pickBoth },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <Link href="/compare" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Compare</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>{c1.name} vs {c2.name}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
        {c1.name} vs {c2.name}
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
        Cap-aware comparison at ₹{totalSpend.toLocaleString("en-IN")}/month total spend · Data verified March 2026
      </p>

      {/* Head-to-Head Summary */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="rounded-xl p-5 text-center" style={{
          background: c1Total >= c2Total ? "var(--green-bg)" : "var(--bg-muted)",
          border: `${c1Total >= c2Total ? "2px" : "1px"} solid ${c1Total >= c2Total ? "var(--green-border)" : "var(--border)"}`,
        }}>
          <BankLogo bank={c1.bank} cardId={c1.id} size={48} rounded={12} fontSize={14} />
          <div className="text-sm font-bold mt-2" style={{ color: "var(--text)" }}>{c1.name}</div>
          <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{c1.fee === 0 ? "Free" : `₹${c1.fee.toLocaleString("en-IN")}/yr`}</div>
          <div className="text-2xl font-bold font-mono mt-3" style={{ color: c1Total >= c2Total ? "var(--green)" : "var(--text)" }}>
            ₹{c1Total.toLocaleString("en-IN")}
          </div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>cashback/month</div>
          {c1Total >= c2Total && c1Total !== c2Total && (
            <div className="mt-2 inline-block text-xs font-semibold rounded-full px-3 py-1" style={{ background: "var(--green)", color: "#fff" }}>
              Winner
            </div>
          )}
        </div>
        <div className="rounded-xl p-5 text-center" style={{
          background: c2Total > c1Total ? "var(--green-bg)" : "var(--bg-muted)",
          border: `${c2Total > c1Total ? "2px" : "1px"} solid ${c2Total > c1Total ? "var(--green-border)" : "var(--border)"}`,
        }}>
          <BankLogo bank={c2.bank} cardId={c2.id} size={48} rounded={12} fontSize={14} />
          <div className="text-sm font-bold mt-2" style={{ color: "var(--text)" }}>{c2.name}</div>
          <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{c2.fee === 0 ? "Free" : `₹${c2.fee.toLocaleString("en-IN")}/yr`}</div>
          <div className="text-2xl font-bold font-mono mt-3" style={{ color: c2Total > c1Total ? "var(--green)" : "var(--text)" }}>
            ₹{c2Total.toLocaleString("en-IN")}
          </div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>cashback/month</div>
          {c2Total > c1Total && (
            <div className="mt-2 inline-block text-xs font-semibold rounded-full px-3 py-1" style={{ background: "var(--green)", color: "#fff" }}>
              Winner
            </div>
          )}
        </div>
      </div>

      {/* Category-by-Category Breakdown */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Category-by-Category Breakdown</h2>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map(cat => {
            const spend = comp.testSpends[cat.id] || 0;
            const r1 = c1Details[cat.id];
            const r2 = c2Details[cat.id];
            const winner = r1.cashback > r2.cashback ? 1 : r2.cashback > r1.cashback ? 2 : 0;

            return (
              <div key={cat.id} className="rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{cat.icon}</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{cat.label}</span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>₹{spend.toLocaleString("en-IN")}/mo</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg px-3 py-2" style={{
                    background: winner === 1 ? "var(--green-bg)" : "var(--bg-card)",
                    border: `1px solid ${winner === 1 ? "var(--green-border)" : "var(--border-light)"}`,
                  }}>
                    <div className="text-xs" style={{ color: "var(--text-faint)" }}>{c1.name}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold font-mono" style={{ color: winner === 1 ? "var(--green)" : "var(--text)" }}>
                        ₹{r1.cashback.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>{r1.effectiveRate}%</span>
                    </div>
                    {r1.capped && <span className="text-[10px]" style={{ color: "var(--orange)" }}>⚠ capped</span>}
                  </div>
                  <div className="rounded-lg px-3 py-2" style={{
                    background: winner === 2 ? "var(--green-bg)" : "var(--bg-card)",
                    border: `1px solid ${winner === 2 ? "var(--green-border)" : "var(--border-light)"}`,
                  }}>
                    <div className="text-xs" style={{ color: "var(--text-faint)" }}>{c2.name}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold font-mono" style={{ color: winner === 2 ? "var(--green)" : "var(--text)" }}>
                        ₹{r2.cashback.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>{r2.effectiveRate}%</span>
                    </div>
                    {r2.capped && <span className="text-[10px]" style={{ color: "var(--orange)" }}>⚠ capped</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Specs Comparison */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Quick Specs</h2>
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {[
            ["Annual Fee", c1.fee === 0 ? "FREE" : `₹${c1.fee.toLocaleString("en-IN")}`, c2.fee === 0 ? "FREE" : `₹${c2.fee.toLocaleString("en-IN")}`],
            ["Fee Waiver", c1.feeWaiver, c2.feeWaiver],
            ["Network", c1.network, c2.network],
            ["Lounge Access", c1.lounge, c2.lounge],
            ["Card Type", c1.type, c2.type],
          ].map(([label, v1, v2], i) => (
            <div key={i} className="flex items-center px-4 py-2.5 text-sm" style={{
              background: i % 2 === 0 ? "var(--bg-muted)" : "var(--bg-card)",
              borderBottom: i < 4 ? "1px solid var(--border-light)" : "none",
            }}>
              <span className="w-28 flex-shrink-0 text-xs" style={{ color: "var(--text-faint)" }}>{label}</span>
              <span className="flex-1 font-mono text-xs" style={{ color: "var(--text)" }}>{v1}</span>
              <span className="flex-1 font-mono text-xs" style={{ color: "var(--text)" }}>{v2}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="mb-8 rounded-xl p-5" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--accent-text)" }}>The Verdict</div>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{verdict}</p>
      </div>

      {/* Pick Advice */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="rounded-xl p-4" style={{ background: `${c1.color}08`, border: `1px solid ${c1.color}18` }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: c1.color }}>{advice.pick1.label}</div>
          {advice.pick1.reasons.map((r, i) => (
            <p key={i} className="text-sm leading-relaxed mb-1" style={{ color: "var(--text-secondary)" }}>→ {r}</p>
          ))}
          <Link href={`/cards/${c1.id}`} className="inline-block mt-2 text-xs font-semibold no-underline" style={{ color: "var(--accent-text)" }}>
            View {c1.name} details →
          </Link>
        </div>
        <div className="rounded-xl p-4" style={{ background: `${c2.color}08`, border: `1px solid ${c2.color}18` }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: c2.color }}>{advice.pick2.label}</div>
          {advice.pick2.reasons.map((r, i) => (
            <p key={i} className="text-sm leading-relaxed mb-1" style={{ color: "var(--text-secondary)" }}>→ {r}</p>
          ))}
          <Link href={`/cards/${c2.id}`} className="inline-block mt-2 text-xs font-semibold no-underline" style={{ color: "var(--accent-text)" }}>
            View {c2.name} details →
          </Link>
        </div>
      </div>

      {/* Use Both */}
      <div className="mb-8 rounded-xl p-4" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)" }}>
        <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--green)" }}>Or use both</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{advice.pickBoth}</p>
      </div>

      {/* Smart Swipe CTA */}
      <div className="mb-8 rounded-xl p-5 text-center" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
        <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>Want to compare with your actual spending?</p>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Enter your real monthly spends for a personalized comparison.</p>
        <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
          Try Smart Swipe →
        </Link>
      </div>

      {/* Other Comparisons */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>More Comparisons</h2>
        <div className="flex flex-wrap gap-2">
          {COMPARISONS.filter(c => c.slug !== comp.slug).map(c => {
            const a = CARDS.find(x => x.id === c.card1);
            const b = CARDS.find(x => x.id === c.card2);
            if (!a || !b) return null;
            return (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="no-underline text-xs rounded-lg px-3 py-1.5 transition-colors" style={{ color: "var(--text-secondary)", background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
                {a.name} vs {b.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
