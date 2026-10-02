import Link from 'next/link';

export default function PendingCardRecord({ card }) {
  return <main className="pt-24 pb-20 px-6 max-w-[850px] mx-auto">
    <Link href="/cards">Credit-card directory</Link>
    <h1 className="text-3xl font-bold mt-6 mb-4">{card.name}: product record</h1>
    <p className="mb-6">This URL is retained for people looking up an older catalogue entry. It is not an application recommendation or a current fee quote.</p>
    <section className="rounded-xl p-6 mb-8" style={{ background:'var(--bg-card)', border:'1px solid var(--border)' }}>
      <h2 className="text-xl font-bold mb-4">What needs to be reconciled</h2>
      <p>{card.estimateUnavailableReason || 'The catalogue entry does not yet have a dated, product-specific issuer source establishing its current variant, earning rules and fees.'}</p>
      {card.sourceUrl && <p className="mt-4"><a href={card.sourceUrl} target="_blank" rel="noopener noreferrer">Open the available issuer reference ↗</a> — a general catalogue or old launch announcement does not establish every current benefit.</p>}
    </section>
    <h2 className="text-xl font-bold mb-4">If you already hold this card</h2>
    <p className="mb-4">Match the name and issuer on your statement to the exact product variant. Renewal fees can differ from joining fees or a personalised lifetime-free offer. Check the reward table attached to that variant and any later change notice before estimating rewards.</p>
    <p className="mb-8">Keep reward points separate from their redemption value. A points multiplier needs an eligible merchant category, an earning-period cap and a redemption route. A fuel surcharge waiver or conditional lounge voucher is not a cash reward on every transaction.</p>
    <h2 className="text-xl font-bold mb-4">Choosing a new card?</h2>
    <p className="mb-4">Use the current product reviews and their issuer sources to compare a concrete spending pattern. These tools exclude this unresolved entry from reward rankings.</p>
    <div className="flex flex-wrap gap-5"><Link href="/cards">Browse product reviews →</Link><Link href="/learn/credit-cards">Learn how reward caps work →</Link><Link href="/compare">Compare eligible spending scenarios →</Link></div>
  </main>;
}
