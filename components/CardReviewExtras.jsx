import Link from "next/link";
import details from "@/data/featured-card-details.json";

export function CardCashbackExample({ cardId }) {
  if (cardId === "sbi-cashback") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">What one SBI statement can earn</h2>
        <p>₹50,000 of eligible online purchases earns ₹2,000 after the online cap. ₹10,000 of eligible store purchases earns ₹100 from the separate offline bucket.</p>
        <p><strong>₹2,100 total cashback.</strong> Unused offline allowance cannot increase the online cap. The posting date determines the cycle and returns can reverse cashback.</p>
        <p>Joining and renewal each cost ₹1,178.82 at 18% GST. At 5%, about ₹23,600 of eligible online spending covers one fee if there are no cap losses.</p>
      </section>
    );
  }

  return (
    <section id="cashback-example" className="side-box">
      <h2 className="card-review-heading">How Millennia’s two monthly caps work</h2>
      <p>Suppose ₹22,000 at named merchants and ₹8,000 on other eligible purchases settle in one calendar month. Assuming complete ₹100 blocks and no prior cap use, the 5% bucket earns 1,000 CashPoints after its cap and the 1% bucket earns 80.</p>
      <p><strong>₹1,080 gross statement-credit value.</strong> One ₹50 redemption fee plus 18% GST leaves ₹1,021 before membership charges.</p>
      <p>Eligible Amazon, Flipkart, Swiggy and Zomato purchases draw from the same 5% bucket. When that bucket fills, further purchases in it earn zero.</p>
    </section>
  );
}

export function CardReviewSources({ cardId }) {
  return (
    <section id="card-sources" className="side-box">
      <h2 className="card-review-heading">Issuer sources and card tools</h2>
      <ul>
        {details.cards[cardId].sources.map(([label, url]) => <li key={url}><a href={url}>{label}</a></li>)}
        <li><Link href="/smart-swipe">Find a card with Smart Swipe</Link></li>
        <li><Link href="/compare">Compare cards</Link></li>
        <li><Link href="/stack-builder">Build a card combination</Link></li>
      </ul>
    </section>
  );
}
