import Link from "next/link";

const UPDATED = "September 26, 2026";
const RBI_MASTER_DIRECTION = "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300";
const RBI_2024_AMENDMENT = "https://rbi.org.in/scripts/FS_Notification.aspx?Id=12620";

export const metadata = {
  title: "RBI Credit Card Rules: What Cardholders Should Check | Assure Fintech",
  description: "A source-linked guide to RBI credit-card rules on disclosure, EMI conversion, unsolicited cards, closure requests and complaints.",
  alternates: { canonical: "/blog/rbi-credit-card-rules-2026" },
  openGraph: {
    title: "RBI Credit Card Rules: What Cardholders Should Check",
    description: "Understand key RBI credit-card requirements and verify them against the current Master Direction.",
    type: "article",
    siteName: "Assure Fintech",
  },
};

const sectionStyle = { marginBottom: 28 };

export default function RbiCreditCardRules2026() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RBI Credit Card Rules: What Cardholders Should Check",
    description: "A practical, source-linked summary of selected RBI credit-card protections.",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://assurefintech.com/blog/rbi-credit-card-rules-2026" },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "RBI Credit Card Rules", item: "https://assurefintech.com/blog/rbi-credit-card-rules-2026" },
    ],
  };

  return (
    <main style={{ maxWidth: 820, margin: "64px auto 0", padding: "36px 22px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 24 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / RBI Credit Card Rules
      </nav>
      <header style={{ marginBottom: 32 }}>
        <p style={{ color: "#7C3AED", fontWeight: 700, fontSize: 12, letterSpacing: 1 }}>REGULATORY EXPLAINER</p>
        <h1 style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.12, margin: "0 0 16px" }}>RBI credit-card rules: what cardholders should check</h1>
        <p style={{ fontSize: 18, color: "var(--text-muted)" }}>The RBI’s Credit Card and Debit Card Directions set disclosure, consent, billing and complaint-handling requirements. This guide focuses on provisions in the RBI text—not unsourced claims about newer rules.</p>
        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Published April 20, 2026 · Updated {UPDATED} · By Ash K</p>
      </header>

      <aside style={{ padding: 16, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-muted)", marginBottom: 30 }}>
        <strong>What changed in this September review?</strong>
        <p style={{ margin: "8px 0 0" }}>We checked this explainer against the RBI Master Direction, updated March 7, 2024, and its official amendment. We removed unsupported claims that RBI sets a 15-day statement-to-due-date minimum, mandates a universal “months to clear” statement calculation, or introduced a March 2025 forex-markup line-item rule. Earlier April and June references describe the article’s publication and prior review history, not the dates of new RBI rules.</p>
      </aside>

      <section style={sectionStyle}>
        <h2>1. Check the rates and charges in your card documents</h2>
        <p>The Master Direction requires issuers to disclose Annualised Percentage Rates (APR) for relevant situations—such as retail purchases, balance transfers, cash advances and late or missed payments—and explain the calculation with examples. The APR and annual fee must be displayed prominently. Compare the issuer’s current Most Important Terms and Conditions (MITC), welcome information and statements; rates and fees differ by product.</p>
      </section>

      <section style={sectionStyle}>
        <h2>2. Understand the interest-free period and minimum due</h2>
        <p>RBI defines the interest-free credit period by reference to the transaction date and payment due date, subject to payment of the entire outstanding by that due date. The Master Direction does not set a universal minimum number of days from statement generation to the due date. If an earlier bill remains unpaid, the interest-free period may be suspended.</p>
        <p>Issuers must warn that paying only the minimum due can stretch repayment over months or years and lead to compounded interest. Check the specific warning and payment terms on your statement. Avoid relying on a generic day-count or payoff estimate as a regulatory rule.</p>
      </section>

      <section style={sectionStyle}>
        <h2>3. Review EMI conversions before accepting</h2>
        <p>Before converting a credit-card transaction to EMI, the issuer must clearly indicate the principal, interest and any upfront discount provided by the merchant or issuer. These items must also appear separately on the card bill or statement. An EMI with an interest component must not be camouflaged as zero-interest or “no-cost” EMI.</p>
        <p>This requirement is a transparent cost breakdown; it is not a blanket RBI rule prescribing one effective-APR display format at every merchant checkout. Compare the total payable, fees and offer terms before proceeding.</p>
      </section>

      <section style={sectionStyle}>
        <h2>4. A card should not be issued without your request</h2>
        <p>The RBI direction restricts unsolicited card issuance and upgrades. It also sets a process for cards that remain unactivated: issuers must seek the cardholder’s consent to activate, and close the account if consent is not received within the specified period. Read the rule and the issuer’s activation notice before assuming that delivery alone activates a card or starts a fee.</p>
      </section>

      <section style={sectionStyle}>
        <h2>5. Closure requests have a defined timeline</h2>
        <p>When dues are cleared, the issuer should close the card within seven working days of receiving the request and promptly notify the cardholder. If it fails to do so, RBI’s direction provides for a penalty of ₹500 per calendar day of delay, subject to the rule’s conditions. Keep the request reference and follow up with the issuer if closure is delayed.</p>
      </section>

      <section style={sectionStyle}>
        <h2>6. Take an unresolved complaint through the correct channel</h2>
        <p>First complain to the card issuer and retain its reference number. If the issuer rejects the complaint, gives an unsatisfactory response, or does not respond within 30 days, you may be eligible to approach the RBI Integrated Ombudsman Scheme through its Complaint Management System. Review the scheme’s current eligibility and exclusions before filing; the Ombudsman is not an automatic appeal for every dispute.</p>
      </section>

      <section style={sectionStyle}>
        <h2>Source documents</h2>
        <ul>
          <li><a href={RBI_MASTER_DIRECTION} target="_blank" rel="noopener noreferrer" style={{ color: "#7C3AED" }}>RBI Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022</a> (updated March 7, 2024).</li>
          <li><a href={RBI_2024_AMENDMENT} target="_blank" rel="noopener noreferrer" style={{ color: "#7C3AED" }}>RBI amendment dated March 7, 2024</a>.</li>
          <li><a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" style={{ color: "#7C3AED" }}>RBI Complaint Management System</a>.</li>
        </ul>
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)" }}>RBI may amend its directions. This is general information, not legal, tax or financial advice; check the linked RBI text and your issuer’s current terms. Related: <Link href="/learn/credit-cards" style={{ color: "#7C3AED" }}>credit-card explainers</Link>.</p>
    </main>
  );
}
