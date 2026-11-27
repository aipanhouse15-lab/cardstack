import Link from "next/link";
import details from "@/data/featured-card-details.json";

export function CardCashbackExample({ cardId }) {
  if (cardId === "axis-atlas") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">How the ₹2 lakh travel threshold changes your miles</h2>
        <p>Suppose ₹2.5 lakh of qualifying travel spend posts in one month. Axis combines eligible Travel EDGE, direct airline and eligible hotel transactions when applying the accelerated limit.</p>
        <dl className="side-sum">
          <div className="row"><dt>First ₹2 lakh at 5 EDGE Miles per ₹100</dt><dd>10,000 EDGE Miles</dd></div>
          <div className="row"><dt>Next ₹50,000 at 2 EDGE Miles per ₹100</dt><dd>1,000 EDGE Miles</dd></div>
        </dl>
        <p><strong>11,000 EDGE Miles in total.</strong> The rate drops above the threshold. A booking through a third-party travel agent may miss the accelerated tier altogether.</p>
        <p>At the issuer’s listed ₹1 per mile for travel redemption, 11,000 miles would have ₹11,000 of gross value on a qualifying booking, before the portal fee. The annual fee, transfer fees and partner conversion rates are separate. Anniversary-year tiers and milestone rewards are separate from this monthly calculation.</p>
      </section>
    );
  }

  if (cardId === "amex-mrcc") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">Two ways to earn the monthly bonus</h2>
        <p>Assume all purchases qualify for standard rewards and are made in the same calendar month, in complete ₹50 earning blocks.</p>
        <dl className="side-sum">
          <div className="row"><dt>Four purchases of ₹1,500 each, ₹6,000 total</dt><dd>120 base + 1,000 bonus = 1,120 points</dd></div>
          <div className="row"><dt>₹20,000 total, including those four purchases, with enrolment</dt><dd>400 base + 2,000 bonus = 2,400 points</dd></div>
        </dl>
        <p>One ₹20,000 purchase can meet the enrolled spend milestone, but it cannot meet the four-purchase milestone by itself. Amex lists an ₹8,000 Amazon voucher at 24,000 points. Check the redemption you would actually use before valuing the points.</p>
        <p><strong>Compare the renewal cost separately.</strong> At 18% GST, ₹4,500 becomes ₹5,310 before any waiver. The renewal waiver uses the preceding membership year. Bonus eligibility uses calendar months.</p>
      </section>
    );
  }

  if (cardId === "idfc-wow") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">What zero forex and 4X rewards mean on one trip</h2>
        <p>Suppose eligible foreign-currency purchases convert to ₹40,000 in total and earn in complete ₹200 blocks. The bank adds no forex markup to those purchases. The network exchange rate still applies.</p>
        <dl className="side-sum">
          <div className="row"><dt>Points earned at 4 per ₹200</dt><dd>800 points</dd></div>
          <div className="row"><dt>Gross value at ₹0.25 per point</dt><dd>₹200</dd></div>
          <div className="row"><dt>One ₹99 redemption fee with 18% GST</dt><dd>₹116.82</dd></div>
        </dl>
        <p><strong>₹83.18 after one redemption fee</strong>, assuming the selected redemption accepts the full 800 points at the stated value. With a fixed fee per redemption, redeeming a larger balance can spread that fee over more points. Check the 24-month expiry before waiting.</p>
        <p>The deposit stays pledged while the card is secured against it. Cash withdrawals and a terminal’s offer to convert the purchase into INR have separate costs, so check them before paying.</p>
      </section>
    );
  }

  if (cardId === "sbi-simplyclick") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">What 2,100 Reward Points can buy</h2>
        <p>Assume all purchases qualify, use complete ₹100 earning blocks and fall within the same calendar month with no prior cap use.</p>
        <dl className="side-sum">
          <div className="row"><dt>₹10,000 at eligible named partners</dt><dd>1,000 points</dd></div>
          <div className="row"><dt>₹20,000 on other eligible online purchases</dt><dd>1,000 points</dd></div>
          <div className="row"><dt>₹10,000 in other eligible purchases</dt><dd>100 points</dd></div>
        </dl>
        <p><strong>One ₹500 Amazon voucher, with 100 points left over</strong> at the catalogue’s 2,000-point price. The remaining points stay in your rewards account for a future redemption. This example excludes the membership fee and separate milestone vouchers.</p>
        <p>SBI’s current booklet explicitly states the 10,000-point cap for the 5X tier. An earlier booklet also lists a separate cap for the 10X tier. Check your card’s 10X terms before using that rate in a high-spend estimate.</p>
      </section>
    );
  }

  if (cardId === "hdfc-swiggy") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">Which orders earn cashback, and when the cap kicks in</h2>
        <p>On the original card, a ₹240 Swiggy order falls below the ₹249 minimum for 10%. An eligible ₹300 order earns ₹30 if there’s room in the Swiggy cap.</p>
        <p>If ₹16,000 of qualifying Swiggy purchases and ₹8,000 in qualifying online purchases settle in one billing cycle, the Swiggy tier earns ₹1,500 after its cap and the online tier earns ₹400. That’s <strong>₹1,900 in statement credit</strong> before any refunds or fees, assuming each transaction meets its tier’s minimum and there’s no earlier cap usage.</p>
        <p>The ₹1,500 Swiggy cap is shared by eligible Food Delivery, Instamart and Dineout purchases. The online tier has its own ₹1,500 cap. If you’ve migrated to ORNGE or BLCK, use the terms in your migration notice for your new card.</p>
      </section>
    );
  }

  if (cardId === "amazon-icici") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">What Prime adds to the same shopping basket</h2>
        <p>Compare the same purchases with and without Prime. This example uses eligible retail purchases, eligible Amazon Pay payments and domestic purchases eligible for the base rate.</p>
        <dl className="side-sum">
          <div className="row"><dt>₹10,000 of eligible Amazon.in retail purchases</dt><dd>₹500 with Prime · ₹300 without</dd></div>
          <div className="row"><dt>₹2,000 via a qualifying Amazon Pay route</dt><dd>₹40 either way</dd></div>
          <div className="row"><dt>₹5,000 in other eligible domestic purchases</dt><dd>₹50 either way</dd></div>
        </dl>
        <p><strong>₹590 with Prime or ₹390 without, both as Amazon Pay balance.</strong> Prime adds ₹200 on this basket before membership cost. If you would pay for Prime only to earn more on this card, compare that incremental reward with the cost of the plan you would buy.</p>
        <p>Travel bookings are outside this retail example. ICICI separately announced benefits for eligible flights and hotels booked via Amazon Pay. Check the offer and route before counting a travel reward.</p>
      </section>
    );
  }

  if (cardId === "axis-ace") {
    return (
      <section id="cashback-example" className="side-box">
        <h2 className="card-review-heading">Two accelerated rates, one ₹500 limit</h2>
        <p>Suppose these eligible purchases fall in the same statement cycle. The arithmetic assumes each transaction earns a whole-rupee amount before the cap.</p>
        <dl className="side-sum">
          <div className="row"><dt>₹8,000 in listed bills via Google Pay on Android</dt><dd>₹400 at 5%</dd></div>
          <div className="row"><dt>₹5,000 at eligible Swiggy, Zomato or Ola merchants</dt><dd>₹200 at 4%</dd></div>
          <div className="row"><dt>Accelerated cashback after the shared cap</dt><dd>₹500</dd></div>
          <div className="row"><dt>₹10,000 in other eligible purchases</dt><dd>₹150 at 1.5%</dd></div>
        </dl>
        <p><strong>₹650 total cashback.</strong> The first two routes generate ₹600 before the cap. Only ₹500 counts, and the separate ₹150 still earns. Actual credit can differ because Axis rounds each transaction and adjusts for refunds.</p>
        <p>Check the payment route first. An eligible utility bill paid outside Google Pay earns zero on ACE, and the accelerated Google Pay route requires Android.</p>
      </section>
    );
  }

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
