import Link from "next/link";

export const metadata = {
  title: "Contact CardStack — Report Issues, Suggest Cards, Say Hi",
  description: "Get in touch with CardStack. Report incorrect data, suggest new cards, share feedback, or just say hello.",
};

export default function ContactPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>
        📬 Contact
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
        Get in Touch
      </h1>

      <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          CardStack is built by one person. Every message is read personally. Here's how to reach us.
        </p>

        <div className="flex flex-col gap-4">
          {/* Report card data */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxSR9PYvavFrELzWEunMv5Y5MmWeKxwij0BnzFDuzO4_a2Ew/viewform" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ color: "inherit" }}>
            <div className="rounded-xl p-5 transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: "var(--orange-bg)" }}>🐛</div>
                <div>
                  <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>Report incorrect card data</h3>
                  <p className="text-xs" style={{ color: "var(--text-faint)" }}>Wrong rate, cap changed, fee updated, etc.</p>
                </div>
                <span className="ml-auto text-sm font-semibold" style={{ color: "var(--accent-text)" }}>Open form →</span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Use our Google Form to report data issues. Card name is pre-filled when you click from a card page. We review within 24 hours.
              </p>
            </div>
          </a>

          {/* Suggest a card */}
          <div className="rounded-xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: "var(--green-bg)" }}>💳</div>
              <div>
                <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>Suggest a card to add</h3>
                <p className="text-xs" style={{ color: "var(--text-faint)" }}>We currently have 25 cards. Want us to add yours?</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              We're expanding our database. If your card isn't listed, let us know the card name and bank — we'll research and add it. Use the report form above and select "Other" as the category.
            </p>
          </div>

          {/* General feedback */}
          <div className="rounded-xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: "var(--blue-bg)" }}>💬</div>
              <div>
                <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>General feedback</h3>
                <p className="text-xs" style={{ color: "var(--text-faint)" }}>Bugs, suggestions, ideas, or just want to say hi</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              We love hearing from users. Whether it's a bug report, feature suggestion, or just kind words — it all helps us build a better product. Use the Google Form or reach out on social media.
            </p>
          </div>

          {/* Partnership */}
          <div className="rounded-xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: "var(--accent-light)" }}>🤝</div>
              <div>
                <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>Partnership & API</h3>
                <p className="text-xs" style={{ color: "var(--text-faint)" }}>Banks, fintech, AI companies</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Interested in licensing our card data API? Want to integrate CardStack into your app? We have a public API at <code className="text-xs rounded px-1.5 py-0.5" style={{ background: "var(--bg-muted)" }}>/api/cards</code> and <code className="text-xs rounded px-1.5 py-0.5" style={{ background: "var(--bg-muted)" }}>/api/recommend</code>. Contact us to discuss enterprise access.
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-6 text-center" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <p className="text-sm mb-1" style={{ color: "var(--text-faint)" }}>Response time</p>
          <p className="text-xl font-extrabold" style={{ color: "var(--text)" }}>Within 24 hours</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-faint)" }}>Usually much faster. We're one person — but a very responsive one.</p>
        </div>
      </div>
    </section>
  );
}
