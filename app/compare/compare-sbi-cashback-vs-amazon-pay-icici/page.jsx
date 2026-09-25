import Link from "next/link";

export const metadata = {
  title: "SBI Cashback vs Amazon Pay ICICI: Caps, Eligibility and Fees",
  description: "Compare the September 2026 terms of SBI Cashback and Amazon Pay ICICI with worked examples that apply SBI's ₹2,000 online cap.",
  alternates: { canonical: "/compare/compare-sbi-cashback-vs-amazon-pay-icici" },
};

export default function CompareSbiCashbackAmazonPay() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SBI Cashback vs Amazon Pay ICICI: Caps, Eligibility and Fees",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-06",
    dateModified: "2026-09-26",
    publisher: { "@type": "Organization", name: "Assure Fintech" },
  };

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 max-w-[760px] mx-auto" style={{ color: "var(--text)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Link href="/compare" className="text-sm">← Comparisons</Link>
      <h1 className="text-3xl font-extrabold mt-6 mb-3">SBI Cashback vs Amazon Pay ICICI</h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Published June 6, 2026 · Reviewed September 26, 2026</p>

      <div className="space-y-7 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p><Link href="/cards/sbi-cashback">SBI Cashback</Link> rewards eligible online purchases across merchants. <Link href="/cards/amazon-icici">Amazon Pay ICICI</Link> is stronger for eligible Amazon spending if you have Prime and can use Amazon Pay rewards. Compare where you spend, because the rates and limits apply to different transactions.</p>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Current SBI cap</h2>
          <p><a href="https://www.sbicard.com/cashback-revised" target="_blank" rel="noreferrer">SBI Card&apos;s revised schedule</a> gives 5% on eligible online transactions, capped at ₹2,000 per statement cycle. Eligible offline cashback is 1%, separately capped at ₹2,000; total cashback cannot exceed ₹4,000. Utilities, insurance, fuel, rent, education and other listed categories are excluded. An online payment is not enough on its own to qualify.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Worked example</h2>
          <p>On ₹50,000 of otherwise eligible online shopping in one statement cycle, SBI&apos;s 5% headline rate gives ₹2,500 before caps, so cashback is ₹2,000: an effective 4% before the annual fee. On ₹1,00,000 it is still ₹2,000, or 2%. If the same ₹50,000 is an eligible Amazon purchase and you qualify for Amazon Pay ICICI&apos;s 5% Prime rate, that would be ₹2,500 in Amazon Pay rewards, subject to the issuer&apos;s current terms and posting rules.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Which to use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mostly Amazon Prime shopping: check Amazon Pay ICICI&apos;s current eligible merchant rate and reward crediting.</li>
            <li>Several online merchants: SBI can cover eligible non-Amazon purchases until its ₹2,000 online cap is used.</li>
            <li>Large online spend: calculate the cap by statement cycle rather than assuming 5% on the full amount.</li>
            <li>Utilities, insurance or rent: verify exclusions; do not treat either card&apos;s headline online rate as guaranteed.</li>
          </ul>
        </section>

        <p>Compare fees including GST, renewal waiver conditions and whether Amazon Pay balance is useful to you. Recheck issuer terms before applying.</p>
      </div>
    </main>
  );
}
