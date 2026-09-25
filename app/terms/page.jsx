export const metadata = {
  title: "Terms of Service",
  description: "Assure Fintech terms of service. How to use our tools and content responsibly.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>Terms of Service</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-faint)" }}>Last updated: September 25, 2026</p>

      <div className="prose" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>What Assure Fintech is</h2>
        <p>Assure Fintech provides financial comparison tools and educational content about credit cards, loans, insurance, savings, tax, and mutual funds. Some tools use public information and the assumptions or inputs you provide. Results may be estimates and may not include every fee, restriction, policy term or personal circumstance.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Not financial advice</h2>
        <p>Nothing on this site constitutes financial, investment, tax, or legal advice. Our tools calculate numbers based on publicly available data and the inputs you provide. We are not SEBI-registered advisors, tax consultants, or insurance brokers. Always consult a qualified professional before making financial decisions.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Data accuracy</h2>
        <p>Information is provided for general education and comparison, not as a guarantee that every figure or product term is current or independently verified. Where available, a page may show its source, verification status or review date; the status page describes the scope of current card-data reviews. Issuers, regulators and tax rules can change their terms. Verify material details with the relevant issuer or official source before applying, investing, filing or making another decision. We do not guarantee that the site is complete, error-free or up to date at all times.</p>

        <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>Affiliate disclosure</h2>
        <p>Some pages may contain affiliate or referral links through which Assure Fintech could receive compensation if you click or take an action. Any such relationship should be disclosed on or near the relevant link or page. Compensation, where applicable, does not change the terms offered by the issuer; review the issuer's own offer and eligibility conditions. See <a href="/how-we-earn" style={{ color: "var(--accent-text)" }}>How We Earn</a> for the site's stated monetization information.</p>

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
