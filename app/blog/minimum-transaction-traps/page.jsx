import Link from "next/link";

const title = "Credit Card Reward Eligibility: Minimums, Exclusions and Fine Print";
const description = "A practical guide to transaction minimums, excluded categories, refund reversals and cash advances—without assuming every issuer uses the same rules.";
const updated = "October 2, 2026";
const source = "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog/minimum-transaction-traps" },
  openGraph: { title, description, type: "article", siteName: "Assure Fintech" },
};

const questions = [
  { q: "Is there one minimum transaction amount for credit-card rewards?", a: "No. A minimum may depend on the issuer, card variant, reward category and offer. Check the current product-specific terms; do not assume a small purchase is excluded or eligible based on another card." },
  { q: "Do all cards exclude fuel, rent, utilities and government payments?", a: "No universal exclusion list applies to every card. Issuers define eligible transactions and exclusions for each product. Read the current card terms and any category-specific conditions." },
  { q: "What happens to rewards after a refund?", a: "The issuer may reverse rewards for a refunded or reversed purchase under its programme terms. The timing and treatment of fees depend on the issuer and merchant; check the statement and card terms." },
  { q: "When can interest and late-payment charges apply?", a: "RBI says the interest-free period is conditional on paying the total amount due by the due date. Its directions also say late-payment charges and related charges may be levied only on the outstanding amount after the due date, and only when the account remains past due for more than three days. The card's own APR and fee schedule determine the amount." },
  { q: "Does paying before the statement date guarantee a better credit score?", a: "No fixed score change is guaranteed. CIBIL lists credit utilisation as one factor in a score, alongside payment history, age of credit and enquiries. Paying on time and keeping balances manageable are sensible habits, but a particular point increase cannot be promised." },
];

export default function RewardEligibilityGuide() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, author: { "@type": "Person", name: "Ash" }, datePublished: "2026-06-04", dateModified: "2026-10-02", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

  return <article className="prose pt-24 pb-20 px-6 max-w-[850px] mx-auto">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <p><Link href="/blog">Blog</Link> / Card terms</p>
    <h1>{title}</h1>
    <p>By Ash · Reviewed {updated}</p>
    <p>A reward rate is only useful when the transaction qualifies and the reward can be redeemed in a way you value. There is no single minimum purchase, exclusion list or reward-reversal rule shared by every Indian credit card. Start with the exact card variant and the terms that apply to your transaction.</p>

    <h2>Check the transaction, not just the category name</h2>
    <p>Before expecting points or cashback, check four things in the issuer's current product terms: the merchant or merchant-category eligibility, the payment channel, any minimum amount per transaction, and the cap or qualifying period. “Online”, “dining” or “utilities” in an app description may not be enough to establish how a particular transaction will be classified.</p>
    <ol>
      <li>Find the product-specific reward terms or Most Important Terms and Conditions (MITC) for your exact card variant.</li>
      <li>Check the transaction type, merchant/channel restrictions and any per-transaction threshold.</li>
      <li>Check exclusions and the cap period—statement cycle, calendar month or quarter.</li>
      <li>After the transaction posts, compare the statement and reward ledger with the issuer's rules; raise a query if they do not match.</li>
    </ol>
    <p>A threshold on one accelerated category does not necessarily apply to base rewards, another card variant or a later offer. Do not combine small purchases solely to cross a threshold unless the issuer's terms actually say that qualifying transactions are aggregated.</p>

    <h2>Exclusions are product-specific</h2>
    <p>Fuel, rent, wallet loads, insurance, education, tax payments, utilities and EMI transactions are not interchangeable categories. Some products exclude a transaction from rewards; others may award base points, apply a separate cap, or treat it differently for a fee waiver. A fuel-surcharge waiver is also distinct from reward earning. Check both the rewards section and the charges/waiver section rather than inferring one from the other.</p>
    <p>Keep a copy or link to the applicable issuer terms and note their effective date. If an offer page and a card's standing terms differ, treat the offer's eligibility and duration as separate conditions.</p>

    <h2>Refunds, interest and payment timing</h2>
    <p>Refunded or reversed purchases can change the eligible-spend total and may result in reward reversals under the issuer's programme rules. The exact treatment of rewards, processing charges and foreign-currency charges is product- and transaction-specific; check the posted entries instead of assuming every fee will be refunded.</p>
    <p>For bill payment, use a method authorised by your card issuer and leave time for it to be credited. RBI requires issuers to list authorised payment modes. The same RBI directions say the interest-free period is conditional on paying the total amount due, and explain that when the total is not cleared, interest may be charged on the outstanding amount subject to payments, refunds and reversals. Late-payment charges are not a universal “one-day penalty”: RBI's direction addresses accounts remaining past due for more than three days and limits such charges to the outstanding amount after the due date.</p>
    <p>See the <a href={source} target="_blank" rel="noopener noreferrer">RBI Credit Card and Debit Card Directions</a> and your issuer's own MITC and tariff. If you carry a balance or use a cash advance, the issuer's APR, fee and calculation method—not a generic online estimate—determine your cost.</p>

    <h2>Credit scores: avoid precise promises</h2>
    <p>TransUnion CIBIL identifies payment history, credit utilisation, age of credit and enquiries among the factors relevant to a score. That does not mean a particular utilisation percentage, mid-cycle payment or card closure guarantees a fixed score result. Lenders and bureaus use the information reported for your accounts, and an individual's score depends on their overall credit history.</p>
    <p>Paying the amount due on time, keeping borrowing within your budget and reviewing your credit report for errors are useful habits. They are not a promise of approval or a specific number of score points.</p>

    <h2>Questions</h2>
    {questions.map(({ q, a }) => <section key={q}><h3>{q}</h3><p>{a}</p></section>)}
    <p>Related: <Link href="/blog/cashback-rate-is-a-lie">How caps change a headline reward rate</Link> · <Link href="/cards">Compare card terms</Link> · <Link href="/learn/credit-cards">Credit-card basics</Link></p>
    <footer><p>Reviewed {updated}. This guide explains how to check terms; it is not an issuer-specific reward quote. Product rules can differ by variant and change over time. Assure Fintech does not promise approval, savings or a credit-score outcome.</p></footer>
  </article>;
}
