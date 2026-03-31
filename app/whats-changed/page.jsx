import { CARDS } from "@/data/cards";
import { MONTHLY_UPDATES } from "@/data/updates";
import Link from "next/link";

export const metadata = {
  title: "What Changed — Credit Card Reward Updates | Assure Fintech",
  description: "Monthly tracker of Indian credit card reward changes, cap updates, new card launches, and verified rate confirmations. Stay updated so you never miss a change.",
};

export default function WhatsChangedPage() {
  // Get cards with upcoming changes
  const upcomingCards = CARDS.filter(c => c.upcoming);

  // JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "What Changed", item: "https://www.assurefintech.com/whats-changed" },
    ],
  };

  const typeStyles = {
    alert: { bg: "var(--orange-bg)", border: "var(--orange-border)", color: "var(--orange)", label: "ALERT" },
    new: { bg: "var(--green-bg)", border: "var(--green-border)", color: "var(--green)", label: "NEW" },
    verified: { bg: "var(--blue-bg)", border: "var(--blue-border)", color: "var(--blue)", label: "VERIFIED" },
    update: { bg: "var(--bg-muted)", border: "var(--border)", color: "var(--text-muted)", label: "UPDATE" },
    removed: { bg: "var(--orange-bg)", border: "var(--orange-border)", color: "var(--orange)", label: "REMOVED" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <section className="pt-24 pb-20 px-4 sm:px-6 max-w-[700px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: "var(--text-faint)" }}>
        <Link href="/" className="no-underline hover:underline" style={{ color: "var(--text-faint)" }}>Home</Link>
        <span>/</span>
        <span style={{ color: "var(--text-muted)" }}>What Changed</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          What Changed
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          We track credit card reward changes so you don't have to. Updated monthly with verified rate changes, new card launches, and cap adjustments.
        </p>
      </div>

      {/* Upcoming Changes (from cards.js upcoming field) */}
      {upcomingCards.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🔔</span>
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--orange)" }}>Coming Soon</h2>
          </div>
          <div className="flex flex-col gap-3">
            {upcomingCards.map(card => (
              <div key={card.id} className="rounded-xl overflow-hidden" style={{ border: "2px solid var(--orange-border)" }}>
                <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: "var(--orange-bg)" }}>
                  <Link href={`/cards/${card.id}`} className="text-sm font-bold no-underline" style={{ color: "var(--text)" }}>
                    {card.name}
                  </Link>
                  <span className="text-xs font-semibold rounded-full px-3 py-0.5" style={{ background: "var(--orange)", color: "#fff" }}>
                    {card.upcoming.date}
                  </span>
                </div>
                <div className="px-4 py-3" style={{ background: "var(--bg-card)" }}>
                  {card.upcoming.changes.map((change, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      <span className="flex-shrink-0" style={{ color: "var(--orange)" }}>→</span>
                      <span>{change}</span>
                    </div>
                  ))}
                  {card.upcoming.impact && (
                    <div className="rounded-lg p-3 mt-2 text-xs leading-relaxed" style={{ background: "var(--orange-bg)", color: "var(--text-secondary)" }}>
                      <span className="font-bold" style={{ color: "var(--orange)" }}>Impact: </span>
                      {card.upcoming.impact}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Monthly Updates */}
      {MONTHLY_UPDATES.map((month, mi) => (
        <div key={mi} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📢</span>
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent-text)" }}>{month.month}</h2>
            {month.current && (
              <span className="text-[10px] font-semibold rounded-full px-2 py-0.5" style={{ background: "var(--green-bg)", color: "var(--green)", border: "1px solid var(--green-border)" }}>
                Current
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2.5">
            {month.entries.map((entry, i) => {
              const style = typeStyles[entry.type] || typeStyles.update;
              return (
                <div key={i} className="rounded-xl p-4 flex items-start gap-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <span className="text-xl flex-shrink-0 mt-0.5">{entry.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{entry.card}</span>
                      <span className="text-[10px] font-semibold uppercase rounded px-2 py-0.5" style={{
                        color: style.color, background: style.bg, border: `1px solid ${style.border}`,
                      }}>
                        {style.label}
                      </span>
                      <span className="text-[10px]" style={{ color: "var(--text-faint)" }}>{entry.date}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{entry.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Subscribe hint */}
      <div className="rounded-xl p-5 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
        <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>Never miss a reward change</p>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Follow us on Twitter for real-time updates when banks change reward rates or caps.</p>
        <a href="https://twitter.com/assurefintech" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
          Follow on Twitter →
        </a>
      </div>

      {/* Report a change */}
      <div className="mt-6 text-center">
        <p className="text-xs" style={{ color: "var(--text-faint)" }}>
          Spotted a reward change we haven't listed? <Link href="/contact" className="no-underline" style={{ color: "var(--accent-text)" }}>Report it here</Link> — we verify and update within 24 hours.
        </p>
      </div>
    </section>
    </>
  );
}
