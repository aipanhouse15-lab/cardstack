export const metadata = {
  title: "Terms of Service",
  description: "Assure Fintech terms of service. How to use our tools and content responsibly.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>Terms of Service</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-faint)" }}>Last updated: April 2026</p>

      <div className="prose" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>What Assure Fintech is</h2>
        <p>Assure Fintech is a free financial comparison platform. We show you the honest number on credit cards, loans, insurance, savings, tax, and mutual funds by calculating effective rates, real returns, and actual coverage after all fees, caps, and conditions.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Not financial advice</h2>
        <p>Nothing on this site constitutes financial, investment, tax, or legal advice. Our tools calculate numbers based on publicly available data and the inputs you provide. We are not SEBI-registered advisors, tax consultants, or insurance brokers. Always consult a qualified professional before making financial decisions.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Data accuracy</h2>
        <p>We verify card data, loan rates, insurance terms, and tax rules against official bank documents and government sources. However, banks and financial institutions change terms frequently — sometimes without public notice. While we update our data as fast as possible, we cannot guarantee 100% accuracy at all times. Always verify critical numbers with the issuing bank or institution before making decisions.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Affiliate disclosure</h2>
        <p>We may earn commissions from credit card issuers when you apply through affiliate links on our site. This revenue helps us keep the site free. Our rankings, reviews, and honest number calculations are never influenced by affiliate relationships. If a card is bad, we say so — regardless of whether we earn from it.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Intellectual property</h2>
        <p>All content, tools, calculations, and design on Assure Fintech are original work. You may share our content with attribution. You may not reproduce, scrape, or republish our content or data without written permission.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Limitation of liability</h2>
        <p>Assure Fintech is provided "as is" without warranties. We are not liable for any financial loss, missed opportunities, or damages arising from your use of our tools, content, or recommendations. Use at your own discretion.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Changes</h2>
        <p>We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Contact</h2>
        <p>Questions? Reach us at <a href="/contact" style={{ color: "var(--accent-text)" }}>assurefintech.com/contact</a>.</p>
      </div>
    </div>
  );
}
