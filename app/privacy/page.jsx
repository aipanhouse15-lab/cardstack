export const metadata = {
  title: "Privacy Policy",
  description: "How Assure Fintech handles tool inputs, analytics data, cookies, affiliate links, and third-party services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>Privacy Policy</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-faint)" }}>Last updated: September 2026</p>

      <div className="prose" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>What we collect</h2>
        <p>Assure Fintech does not require you to create an account or sign in. Our on-site tools do not ask for your card number, banking credentials, name, email address, or phone number.</p>
        <p>We use <strong>Google Analytics</strong> and <strong>Vercel Analytics</strong> to understand how people use the site. These services may process usage and technical data such as pages visited, interactions, device and browser information, approximate location, network information, and analytics identifiers. We use aggregate reports and do not attempt to identify individual visitors.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Cookies</h2>
        <p>Google Analytics may use analytics cookies or similar browser identifiers. We do not run third-party ad networks or use advertising cookies on Assure Fintech. You can restrict analytics through your browser settings, cookie controls, or content-blocking tools.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Affiliate links</h2>
        <p>Some pages may contain affiliate links to credit card application pages. If you click these links and apply for a card, the card issuer may pay us a commission. This does not affect our rankings, reviews, or the data we show. Our honest number calculations are independent of any affiliate relationship.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Your data</h2>
        <p>When you use our tools (Smart Swipe, Stack Builder, Gap Finder, and calculators), calculations happen in your browser. Your card selections and spending inputs are not intentionally submitted to our application server or included in our analytics events. If you open an external application link or feedback form, information you enter there is handled by that third party under its own privacy policy.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Third-party services</h2>
        <p>We use Google Analytics (privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>policies.google.com/privacy</a>) and Vercel Analytics (privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-text)" }}>vercel.com/legal/privacy-policy</a>).</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Contact</h2>
        <p>Questions about this policy? Reach us at <a href="/contact" style={{ color: "var(--accent-text)" }}>assurefintech.com/contact</a>.</p>
      </div>
    </div>
  );
}
