import Link from "next/link";

export const metadata = {
  title: "Personal Finance Guides: Loans, Insurance, Savings and Tax",
  description: "Explore practical explainers on loans, insurance, savings, tax and mutual funds, with year-specific context and links to official sources where relevant.",
  alternates: { canonical: "/learn" },
};

const areas = [
  ["Loans", "/learn/loans", "Understand loan pricing, APR, fixed and floating rates, prepayment and total borrowing cost."],
  ["Insurance", "/learn/insurance", "Learn how coverage, exclusions, co-payments, room limits and claims affect protection."],
  ["Savings", "/learn/savings", "Compare deposits and savings choices using liquidity, tax, risk and inflation-adjusted returns."],
  ["Tax", "/learn/tax", "Use the relevant tax year and official rules when comparing regimes, deductions and reporting."],
  ["Mutual funds", "/learn/mutual-funds", "Explore fees, direct versus regular plans, SIP assumptions and realised returns."],
  ["Credit cards", "/learn/credit-cards", "Understand card costs, reward eligibility, repayment and product terms."],
];

export default function LearnIndex() {
  return <main style={{ maxWidth: 1060, margin: "72px auto 0", padding: "40px 24px 64px", color: "var(--text)", lineHeight: 1.7 }}>
    <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)" }}><Link href="/">Home</Link> / Learn</nav>
    <p style={{ margin: "24px 0 8px", textTransform: "uppercase", letterSpacing: ".16em", fontSize: 12, color: "var(--text-muted)" }}>Personal finance, explained</p>
    <h1 style={{ fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.1, margin: "0 0 16px" }}>Make clearer financial decisions</h1>
    <p style={{ maxWidth: 760, fontSize: 18, color: "var(--text-muted)" }}>Browse practical guides by topic. Rules, rates and product terms can vary by date and individual circumstances; time-sensitive guides identify the period they cover and point to primary sources where possible.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginTop: 32 }}>
      {areas.map(([title, href, copy]) => <Link key={href} href={href} style={{ display: "block", border: "1px solid var(--border)", borderRadius: 16, background: "var(--bg-card)", padding: 20, color: "inherit", textDecoration: "none" }}><h2 style={{ fontSize: 20, margin: "0 0 8px" }}>{title} <span aria-hidden="true">→</span></h2><p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0 }}>{copy}</p></Link>)}
    </div>
  </main>;
}
