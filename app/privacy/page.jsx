export const metadata = {
  title: "Privacy Policy",
  description: "Assure Fintech privacy policy. How we handle your data — spoiler: we don't collect much.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>Privacy Policy</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-faint)" }}>Last updated: April 2026</p>

      <div className="prose" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>What we collect</h2>
        <p>Assure Fintech does not require you to create an account or sign in. We do not collect personal information like your name, email, phone number, or financial details.</p>
        <p>We use <strong>Google Analytics</strong> and <strong>Vercel Analytics</strong> to understand how people use the site — page views, time on page, device type. This data is aggregated and anonymous. No individual user is tracked or identified.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Cookies</h2>
        <p>We use minimal cookies required for analytics. We do not use advertising cookies, tracking pixels, or third-party ad networks. We do not sell or share any data with advertisers.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Affiliate links</h2>
        <p>Some pages may contain affiliate links to credit card application pages. If you click these links and apply for a card, the card issuer may pay us a commission. This does not affect our rankings, reviews, or the data we show. Our honest number calculations are independent of any affiliate relationship.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Your data</h2>
        <p>When you use our tools (Smart Swipe, Stack Builder, Gap Finder, calculators), all calculations happen in your browser. No data is sent to our servers. Your card selections, spending inputs, and results stay on your device.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Third-party services</h2>
        <p>We use Google Analytics (privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>policies.google.com/privacy</a>) and Vercel Analytics (privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>vercel.com/legal/privacy-policy</a>).</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Contact</h2>
        <p>Questions about this policy? Reach us at <a href="/contact" style={{ color: "var(--accent-text)" }}>assurefintech.com/contact</a>.</p>
      </div>
    </div>
  );
}
