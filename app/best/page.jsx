import Link from "next/link";

export const metadata = {
  title: "Best Credit Cards in India: Compare by Spending Need",
  description: "Browse Assure Fintech's credit-card comparisons by use case. Compare current fees, eligible rewards, caps, exclusions and source-review status before applying.",
  alternates: { canonical: "/best" },
};

const categories = [
  ["Cashback and no annual fee", "/best/best-cashback-credit-card-no-annual-fee", "Compare no-annual-fee cards using eligible spending and current fee terms."],
  ["Online shopping", "/best/credit-card-for-online-shopping", "Compare shopping cards by merchant, offer route, monthly caps and exclusions."],
  ["Travel", "/best/credit-card-for-travel", "Compare travel rewards, fees, forex charges and benefits you will actually use."],
  ["UPI payments", "/best/best-credit-card-for-upi-payments", "Check RuPay support, transaction eligibility, reward caps and issuer conditions."],
  ["Bills and utilities", "/best/best-credit-card-for-bill-payments", "Review bill-payment eligibility, category exclusions and reward limits."],
  ["Fuel", "/best/credit-card-for-fuel", "Compare fuel surcharge treatment, fees and issuer reward terms."],
  ["Insurance premiums", "/best/best-credit-card-for-insurance-premium", "Check insurance exclusions, payment charges and caps before paying."],
  ["Beginners", "/best/best-credit-card-for-beginners-india", "Understand fees, eligibility and repayment basics before choosing a first card."],
];

export default function BestCardsIndex() {
  return <main style={{ maxWidth: 1060, margin: "72px auto 0", padding: "40px 24px 64px", color: "var(--text)", lineHeight: 1.7 }}>
    <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)" }}><Link href="/">Home</Link> / Best cards</nav>
    <p style={{ margin: "24px 0 8px", textTransform: "uppercase", letterSpacing: ".16em", fontSize: 12, color: "var(--text-muted)" }}>Compare by use case</p>
    <h1 style={{ fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.1, margin: "0 0 16px" }}>Find a card that fits the way you spend</h1>
    <p style={{ maxWidth: 760, fontSize: 18, color: "var(--text-muted)" }}>Start with your spending pattern, then compare eligible rewards after fees, caps and exclusions. Card terms and approval decisions are set by issuers; our guides show what to check and link to product details where available.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginTop: 32 }}>
      {categories.map(([title, href, copy]) => <Link key={href} href={href} style={{ display: "block", border: "1px solid var(--border)", borderRadius: 16, background: "var(--bg-card)", padding: 20, color: "inherit", textDecoration: "none" }}><h2 style={{ fontSize: 19, margin: "0 0 8px" }}>{title} <span aria-hidden="true">→</span></h2><p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0 }}>{copy}</p></Link>)}
    </div>
    <p style={{ marginTop: 30 }}>Want to browse every listed card? Go to the <Link href="/cards">credit-card catalogue</Link>. For a personalized comparison based on your spending inputs, try <Link href="/smart-swipe">Smart Swipe</Link>.</p>
  </main>;
}
