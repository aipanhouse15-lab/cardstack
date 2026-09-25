import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Direct vs Regular Mutual Fund Plans: Costs and Trade-offs",
  description: "Understand how direct and regular mutual fund plans differ in distribution costs, expense ratios, service and switching implications.",
  alternates: { canonical: "/learn/mutual-funds/direct-vs-regular" },
};

const COLOR = "#7c3aed";

export default function DirectVsRegularPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Do direct and regular plans invest in different portfolios?", acceptedAnswer: { "@type": "Answer", text: "They are plan options within the same mutual fund scheme and generally share its portfolio and investment objective, but have separate NAVs and expense ratios. Verify the scheme documents for details." } },
      { "@type": "Question", name: "Does choosing a direct plan guarantee higher returns?", acceptedAnswer: { "@type": "Answer", text: "No. Direct plans have a lower expense ratio because distribution expenses are excluded, but fund performance, market risk, timing, investor behaviour, taxes and other costs still affect the outcome. Lower cost is not a guarantee of profit or suitability." } },
      { "@type": "Question", name: "Does switching from regular to direct trigger tax or exit charges?", acceptedAnswer: { "@type": "Answer", text: "A switch is generally treated as a redemption from one plan and a purchase in another. Capital-gains tax, exit load and other terms may apply based on the scheme, units and applicable law. Check current documents and obtain tax advice before switching." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "Direct vs Regular Mutual Fund Plans: Costs and Trade-offs", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-09-25", publisher: { "@type": "Organization", name: "Assure Fintech" } };

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #10071E, #27124B, #10071E)", padding: "48px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ color: "#c4b5fd", fontSize: 13, marginBottom: 12 }}>Mutual funds · Plan options</div>
          <h1 style={{ color: "#F1F5F9", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, margin: "0 0 12px" }}>Direct vs regular mutual fund plans: understand the cost and trade-offs</h1>
          <p style={{ color: "#ddd6fe", margin: 0, lineHeight: 1.6 }}>There is no universal rupee saving: plan expenses vary by scheme and change over time. Compare the current documents for the exact scheme and plan you hold.</p>
        </div>
      </div>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "30px 22px 56px", color: "var(--text)", lineHeight: 1.7 }}>
        <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
        <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 22 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn/mutual-funds" style={{ color: "inherit" }}>Mutual Funds</Link> / Direct vs regular</nav>

        <section>
          <h2 style={{ color: COLOR }}>What differs?</h2>
          <p>A direct plan is bought without a mutual-fund distributor; a regular plan is bought through one. AMFI explains that both plan options belong to the same scheme and share its portfolio and fund manager, while their expense ratios and NAVs differ. Direct plans exclude distribution expenses. A lower expense ratio can reduce one ongoing cost, but it does not make the investment risk-free or assure a better overall outcome for every investor.</p>
          <p>For a current comparison, find the exact scheme, category, option (growth or IDCW) and plan in your statement. Then compare its latest total expense ratio (TER), benchmark, riskometer, exit load and other scheme terms using the fund house’s current disclosures and AMFI’s TER listings. Do not reuse a TER quoted in an old article or advertisement.</p>
        </section>

        <section>
          <h2 style={{ color: COLOR }}>Estimate the impact using your own figures</h2>
          <p>To illustrate compounding, compare two assumed annual costs against the same assumed gross return and contribution schedule. Keep the return assumption identical between cases and label it as an assumption—not a forecast. A small cost difference may compound over a long horizon, but the realised amount depends on future market returns, changing TERs, contribution timing, taxes and any transaction charges.</p>
          <ol>
            <li>Record each plan’s current TER from its latest official disclosure.</li>
            <li>Check whether you receive advice or ongoing service through the regular-plan distribution channel, and what that service is worth to you.</li>
            <li>Compare total expected costs and responsibilities, not just the headline TER.</li>
            <li>Recheck the figures periodically; TER and scheme terms may change.</li>
          </ol>
        </section>

        <section>
          <h2 style={{ color: COLOR }}>Before switching plans</h2>
          <p>A switch is not merely a label change: it is generally processed as a redemption and a fresh purchase. Depending on the scheme and applicable rules, it can have tax consequences, exit load, settlement timing and other operational implications. Each SIP instalment can have a different holding period. Review the current scheme information, account statement and tax treatment before placing instructions; if the tax impact is material, ask a qualified tax professional.</p>
          <p>Direct plans are not automatically right for everyone. Investors who want distribution or service support may value the regular-plan channel; investors comfortable choosing and maintaining investments themselves may prefer to compare direct plans. Consider advice from an appropriately registered professional when needed.</p>
        </section>

        <section>
          <h2 style={{ color: COLOR }}>Frequently asked questions</h2>
          {faq.mainEntity.map((item) => <details key={item.name} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}><summary style={{ cursor: "pointer", fontWeight: 650 }}>{item.name}</summary><p style={{ color: "var(--text-muted)" }}>{item.acceptedAnswer.text}</p></details>)}
        </section>

        <p style={{ marginTop: 24 }}><Link href="https://www.amfiindia.com/investor/knowledge-center-info?zoneName=DirectPlan" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>AMFI: Direct Plan and Regular Plan</Link> · <Link href="https://www.amfiindia.com/ter-of-mf-schemes" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>AMFI: current scheme TER listings</Link></p>
        <p style={{ borderTop: "1px solid var(--border)", paddingTop: 16, fontSize: 13, color: "var(--text-muted)" }}>This guide is general educational information, not investment, tax or legal advice. Check current scheme documents, disclosures and applicable rules before acting. Past performance does not guarantee future results.</p>
      </main>
    </>
  );
}
