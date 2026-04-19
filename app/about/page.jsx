import Link from "next/link";

export const metadata = {
  title: "About Assure Fintech — India's Honest Credit Card Tool",
  description: "Assure Fintech helps Indians maximize credit card rewards with real cashback math after caps. Built lean, built honest, built for India.",
};

export default function AboutPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>
        🏠 About
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
        About Assure Fintech
      </h1>

      <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          Assure Fintech started from a simple frustration: Indian credit card comparison sites show "5% rewards" when the real effective cashback is 1.33%. They ignore reward caps, mix up point values, and rank cards by who pays them the most — not by what's best for you.
        </p>
        <p>
          We decided to fix that. Assure Fintech is a free tool that calculates <strong style={{ color: "var(--text)" }}>effective cashback after reward caps</strong> — the number banks don't advertise and other sites don't calculate. When you use our Smart Swipe Guide, the savings number you see is real. Not inflated. Not theoretical.
        </p>

        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-3" style={{ color: "var(--text)" }}>What makes us different</h2>
          <div className="flex flex-col gap-3 text-sm">
            {[
              ["📊", "Real math", "We convert reward points to effective cashback % using the actual formula. 4 points per ₹150 at ₹0.20/point = 1.33%. Not 5%."],
              ["⚡", "Cap-aware", "We're the only Indian site that calculates your effective rate after cashback caps. Axis ACE isn't 5% if you spend ₹20K — it's 2.5%."],
              ["🔒", "Zero tracking", "No accounts. No cookies. No emails collected. We don't even have a database of users."],
              ["✅", "Verified data", "All 25 cards verified from bank product pages. Unverified cards are clearly marked."],
              ["🆓", "Free forever", "All tools are free. We plan to earn through optional affiliate links — clearly labeled."],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-lg flex-shrink-0">{icon}</span>
                <div><strong style={{ color: "var(--text)" }}>{title}:</strong> {desc}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-lg font-extrabold mt-2" style={{ color: "var(--text)" }}>The numbers</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[["75", "Cards listed"], ["11", "With cashback caps"], ["4", "Free tools"]].map(([n, l], i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
              <div className="text-2xl font-extrabold" style={{ color: "var(--accent-text)" }}>{n}</div>
              <div className="text-xs mt-1" style={{ color: "var(--text-faint)" }}>{l}</div>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-extrabold mt-2" style={{ color: "var(--text)" }}>Who builds this?</h2>
        <p>
          Assure Fintech is built by one person in India. No VC funding. No team of 50. Just one person who got tired of misleading credit card comparison sites and decided to build something honest.
        </p>
        <p>
          We follow <Link href="/editorial-policy" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>strict editorial principles</Link> and are transparent about <Link href="/how-we-earn" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>how we earn money</Link>.
        </p>

        <div className="rounded-2xl p-6 text-center mt-2" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>Want to try our tools?</p>
          <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
            Start Smart Swipe →
          </Link>
        </div>
      </div>
    </section>
  );
}
