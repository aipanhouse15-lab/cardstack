import Link from "next/link";

export const metadata = {
  title: "How We Earn Money — Assure Fintech Transparency",
  description: "Assure Fintech is free for users. Here's exactly how we plan to make money — with full transparency about affiliate links and future revenue.",
  alternates: { canonical: "/how-we-earn" },
};

export default function HowWeEarnPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}>
        💰 Transparency
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
        How We Earn Money
      </h1>

      <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          Assure Fintech is <strong style={{ color: "var(--text)" }}>100% free</strong> for users. All tools, all card data, all comparisons — free. No sign-up required. No premium tier. No hidden costs.
        </p>
        <p>
          So how do we plan to sustain this? Here's the honest answer.
        </p>

        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--text)" }}>Revenue and link disclosures</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            No affiliate or referral links are currently active on Assure Fintech. Issuer links are references, not paid recommendations. If paid links are introduced, they will be labelled next to the link; compensation will not determine our calculations. Affiliate status confirmed by the founder on 25 November 2026. This is a disclosure about affiliate links, not a statement of total business revenue.
          </p>
        </div>

        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>Planned revenue sources</h2>

        <div className="flex flex-col gap-4">
          {[
            {
              icon: "🔗", title: "Affiliate links (future)",
              desc: "An issuer reference alone does not establish compensation. If we add a paid application link, its relationship will be disclosed next to it.",
              status: "Not active",
            },
            {
              icon: "⭐", title: "Premium subscription (future)",
              desc: "We may offer a ₹199/month premium tier with features like auto-spend tracking, WhatsApp alerts for reward changes, and portfolio optimization. All current tools will remain free forever.",
              status: "Planned for later",
            },
            {
              icon: "📊", title: "B2B data licensing (future)",
              desc: "Banks, fintech companies, and AI tools may license our structured card database via API. This is B2B only and doesn't affect the user experience.",
              status: "Exploring",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>{item.title}</h3>
                <span className="text-[10px] font-semibold rounded-full px-2.5 py-1 ml-auto" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>{item.status}</span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <h2 className="text-lg font-extrabold mb-3" style={{ color: "var(--text)" }}>Our promise</h2>
          <div className="flex flex-col gap-2 text-sm">
            {[
              "We will never rank cards by who pays us the most. Rankings are always by real value to you.",
              "Affiliate links will always be clearly labeled. No hidden links. No sneaky redirects.",
              "All current tools will remain free forever — regardless of whether we add premium features.",
              "We do not sell your personal data. Optional analytics and external forms are explained in our Privacy Policy; tools do not require a user account.",
              "If a card is bad for you, we'll say so — even if we earn commission from it.",
            ].map((p, i) => (
              <div key={i} className="flex gap-2">
                <span style={{ color: "var(--green)" }}>✓</span>
                <span style={{ color: "var(--text-secondary)" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm" style={{ color: "var(--text-faint)" }}>
          Questions about how we earn? <Link href="/contact" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>Contact us</Link>.
        </p>
      </div>
    </section>
  );
}
