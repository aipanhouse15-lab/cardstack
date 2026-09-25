import Link from "next/link";

export const metadata = {
  title: "Build a Credit Card Stack in India: A Three-Card Decision Guide",
  description: "Choose complementary cards by eligible spend, caps, fees and repayment discipline rather than assuming a fixed blended return.",
  alternates: { canonical: "/blog/build-3-card-stack-guide" },
};

export default function BuildThreeCardStackGuide() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Build a Credit Card Stack in India: A Three-Card Decision Guide",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 max-w-[760px] mx-auto" style={{ color: "var(--text)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Link href="/blog" className="text-sm">← Blog</Link>
      <h1 className="text-3xl font-extrabold mt-6 mb-3">Build a credit-card stack around your real spending</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Published June 4, 2026 · Reviewed September 26, 2026</p>

      <div className="space-y-7 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>Three cards are useful only when each has a clear job and the extra reward exceeds its fees and management effort. Start with two if you cannot reliably pay every statement in full. A third card should solve a specific spending gap, not just add another headline rate.</p>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Example roles</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/cards/amazon-icici">Amazon Pay ICICI</Link> for eligible Amazon purchases if its Prime and Amazon Pay reward terms suit you.</li>
            <li><Link href="/cards/sbi-cashback">SBI Cashback</Link> for other eligible online purchases, up to its ₹2,000 online cashback cap per statement cycle. It excludes utility, insurance, rent, fuel and other listed categories.</li>
            <li><Link href="/cards/axis-ace">Axis ACE</Link> for eligible Google Pay bills and listed Swiggy, Zomato and Ola transactions. Its 5% and 4% tiers share one ₹500 statement-cycle cap; other eligible spending can earn 1.5%.</li>
          </ul>
          <p className="mt-3">These are examples, not a universal three-card recommendation. A fuel, travel or grocery-focused card could be a better third card for your spending.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Calculate the extra value</h2>
          <p>For each card, include only qualifying transactions and apply the issuer&apos;s caps. Compare the combined annual reward after all fees and GST with the simpler one-card or two-card setup. If the incremental gain is small, the added due date may not be worthwhile. Fees can be waived only when you meet the specific eligible-spend requirement.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Keep it manageable</h2>
          <p>Set full-balance autopay where available, check every statement for posted rewards and fees, and avoid purchases made solely to reach a waiver. Recheck issuer terms when a card changes its programme. <Link href="/blog/cap-adjusted-cashback-explained">This calculation guide</Link> shows how to handle shared caps.</p>
        </section>

        <p>Sources: <a href="https://www.sbicard.com/cashback-revised" target="_blank" rel="noreferrer">SBI Card revised cashback terms</a> and <a href="https://www.axis.bank.in/docs/default-source/default-document-library/axis-bank-ace-credit-card-tncs.pdf" target="_blank" rel="noreferrer">Axis ACE cashback terms</a>. Confirm the current issuer schedule before applying.</p>
      </div>
    </main>
  );
}
