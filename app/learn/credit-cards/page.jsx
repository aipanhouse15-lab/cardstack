import Link from "next/link";

export const metadata = {
  title: "Credit Card Guides: Fees, Rewards and Responsible Use",
  description: "Learn how credit-card billing, rewards, fees and eligibility work, then compare cards using your actual eligible spending.",
  alternates: { canonical: "/learn/credit-cards" },
};

const topics = [
  ["Read a card statement", "/blog/read-credit-card-statement"],
  ["Compare reward points and cashback", "/blog/how-reward-points-work-india"],
  ["Pay a card bill responsibly", "/blog/right-way-pay-credit-card-bill"],
  ["Understand credit utilisation", "/blog/credit-utilization-ratio-guide"],
  ["Compare annual fees with usable value", "/blog/annual-fee-when-worth-paying"],
  ["Review card rules from RBI", "/blog/rbi-latest-guidelines-credit-cards"],
];

export default function CreditCardLearningHub() {
  return <main style={{ maxWidth: 900, margin: "72px auto 0", padding: "36px 24px 56px", color: "var(--text)", lineHeight: 1.7 }}>
    <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-muted)" }}><Link href="/">Home</Link> / <Link href="/learn">Learn</Link> / Credit cards</nav>
    <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.12, margin: "28px 0 14px" }}>Credit cards: costs, rewards and responsible use</h1>
    <p style={{ fontSize: 18, color: "var(--text-muted)" }}>Start with the billing and repayment basics. Then compare the terms for the exact card and transaction you are considering—reward caps, excluded categories, fees and redemption rules vary across products.</p>
    <h2 style={{ marginTop: 32 }}>Guides</h2>
    <ul>{topics.map(([title, href]) => <li key={href} style={{ margin: "10px 0" }}><Link href={href}>{title}</Link></li>)}</ul>
    <p>For current product comparisons, browse the <Link href="/cards">card catalogue</Link> or the <Link href="/best">best-card guides</Link>. Issuers determine eligibility and final product terms.</p>
  </main>;
}
