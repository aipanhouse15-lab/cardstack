import Link from "next/link";

export const metadata = {
  title: "Credit Card Cashback: Why the Headline Rate Is Not Your Return",
  description: "Understand how exclusions, monthly and statement-cycle caps, fees and reward redemption affect the cashback you actually receive.",
  alternates: { canonical: "/blog/cashback-rate-is-a-lie" },
};

export default function CashbackRateGuide() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Credit Card Cashback: Why the Headline Rate Is Not Your Return",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 max-w-[760px] mx-auto" style={{ color: "var(--text)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Link href="/blog" className="text-sm">← Blog</Link>
      <h1 className="text-3xl font-extrabold mt-6 mb-3">A 5% card may earn much less on your actual spending</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Published June 4, 2026 · Reviewed September 26, 2026</p>

      <div className="space-y-7 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>The advertised percentage is usually a rate for a particular merchant, payment route or category. Your real return depends on eligible spending, excluded categories, reward caps, fees and the value of points when you redeem them.</p>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>The cap changes the answer</h2>
          <p>For example, <a href="https://www.sbicard.com/cashback-revised" target="_blank" rel="noreferrer">SBI Card&apos;s April 2026 terms</a> cap its 5% eligible online cashback at ₹2,000 per statement cycle. ₹40,000 of qualifying online purchases reaches that cap. If the same cycle has ₹60,000 of qualifying online purchases, the online reward is still ₹2,000, or 3.33% of that spend before fees. Utilities, insurance, fuel, rent and several other categories are excluded altogether.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Shared caps matter too</h2>
          <p><a href="https://www.axis.bank.in/docs/default-source/default-document-library/axis-bank-ace-credit-card-tncs.pdf" target="_blank" rel="noreferrer">Axis ACE terms</a> combine the 5% eligible Google Pay bill tier and the 4% listed food and ride merchants under a ₹500 statement-cycle cap. Calculating ₹500 for each category separately would double-count the same cap. Other eligible Axis ACE purchases may earn 1.5% separately.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Compare net value</h2>
          <p>Group only qualifying transactions, apply each issuer cap once for its period, then subtract the annual fee plus GST. For points cards, use the value of the redemption you are likely to choose. A best-case travel redemption is not the same as cash in your account.</p>
        </section>

        <p>See the <Link href="/blog/cap-adjusted-cashback-explained">worked cap calculation</Link> and the <Link href="/cards">card catalogue</Link>. Confirm terms with the issuer before making a large purchase.</p>
      </div>
    </main>
  );
}
