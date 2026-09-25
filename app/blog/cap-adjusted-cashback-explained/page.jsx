import Link from "next/link";

export const metadata = {
  title: "Cap-Adjusted Cashback: Calculate What Your Card Really Earns",
  description: "A practical method for checking credit-card cashback after category exclusions, shared caps, fees and redemption rules.",
  alternates: { canonical: "/blog/cap-adjusted-cashback-explained" },
};

const sources = {
  sbi: "https://www.sbicard.com/cashback-revised",
  axis: "https://www.axis.bank.in/docs/default-source/default-document-library/axis-bank-ace-credit-card-tncs.pdf",
};

export default function CapAdjustedCashbackExplained() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cap-Adjusted Cashback: Calculate What Your Card Really Earns",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-04-20",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 max-w-[760px] mx-auto" style={{ color: "var(--text)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Link href="/blog" className="text-sm">← Blog</Link>
      <h1 className="text-3xl font-extrabold mt-6 mb-3">Cap-adjusted cashback: what your card really earns</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Published April 20, 2026 · Reviewed September 26, 2026</p>

      <div className="space-y-7 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>A headline reward rate applies only to eligible transactions. To estimate your actual return, classify each transaction by the issuer&apos;s rules, apply every cap for its stated period, then subtract fees. An online payment can still be excluded because it is a utility, insurance, fuel or other restricted purchase.</p>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>The calculation</h2>
          <p>For each reward bucket: <strong>cashback = the lesser of eligible spend × reward rate and that bucket&apos;s cap</strong>. Add the buckets, subtract the annual fee including GST, and divide by total spend for a net effective rate. Keep billing-cycle, calendar-month and annual caps separate. A reward-point card also needs a redemption value; points are not automatically cash.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Example: SBI Cashback</h2>
          <p><a href={sources.sbi} target="_blank" rel="noreferrer">SBI Card&apos;s April 2026 revision</a> limits eligible online cashback to ₹2,000 and eligible offline cashback to ₹2,000 per statement cycle, with a ₹4,000 combined ceiling. At 5%, ₹60,000 of eligible online spending would nominally earn ₹3,000, but the online bucket pays at most ₹2,000. That is 3.33% on the ₹60,000 before fees. Utilities, insurance, fuel, rent, education and other specified transactions are excluded, even if paid online.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Example: Axis ACE shared cap</h2>
          <p><a href={sources.axis} target="_blank" rel="noreferrer">Axis ACE&apos;s cashback terms</a> put the 5% eligible Google Pay bill and recharge tier and the 4% Swiggy, Zomato and Ola tier under one ₹500 statement-cycle cap. A qualifying ₹5,000 bill gives ₹250. If you also make ₹10,000 of qualifying partner purchases, the nominal ₹400 from those purchases brings the combined amount to ₹650; the accelerated cashback paid is ₹500. Other eligible spends may separately earn 1.5%. The Google Pay route and issuer exclusions matter.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Before you compare cards</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check the merchant, payment route and minimum transaction amount.</li>
            <li>Group transactions that share a cap; do not apply the same cap separately to each category.</li>
            <li>Check whether unused cap carries forward; usually it does not.</li>
            <li>Value points at the redemption option you will actually use.</li>
            <li>Compare the result after the joining or renewal fee and GST.</li>
          </ul>
        </section>

        <p>Card terms can change. Use the latest issuer schedule before you apply or route a large payment. See the <Link href="/cards">card catalogue</Link> for product pages and source links.</p>
      </div>
    </main>
  );
}
