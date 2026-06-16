import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "How to Get Your Credit Card Annual Fee Waived — Scripts Indians Can Actually Use",
  description: "How to Get Your Credit Card Annual Fee Waived — Scripts Indians Can Actually Use",
  alternates: { canonical: "/blog/get-annual-fee-waived-scripts" },
  openGraph: {
    title: "How to Get Your Credit Card Annual Fee Waived — Scripts Indians Can Actually Use",
    description: "How to Get Your Credit Card Annual Fee Waived — Scripts Indians Can Actually Use",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/get-annual-fee-waived-scripts
// Template: practical-how-to
// Color: #16a34a | Updated: June 4, 2026

const COLOR = "#16a34a";
const UPDATED = "June 4, 2026";

const SvgBankFlexibilityRating = () => (
  <svg viewBox="0 0 720 240" role="img" aria-label="Annual fee waiver flexibility rating by Indian bank, from most to least flexible" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="240" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Annual Fee Waiver Flexibility — Indian Banks Ranked (June 2026)</text>
    {[
      { bank: "Kotak Mahindra", score: 88, label: "Very flexible with good history" },
      { bank: "Axis Bank", score: 74, label: "Flexible, especially for Magnus/Neo" },
      { bank: "ICICI Bank", score: 62, label: "Negotiable with 2+ products" },
      { bank: "SBI Card", score: 52, label: "Waiver via spend milestone" },
      { bank: "HDFC Bank", score: 34, label: "Difficult — prefers milestone route" },
    ].map(({ bank, score, label }, i) => (
      <g key={i}>
        <text x="36" y={67 + i * 36} fontSize="13" fontWeight="600" fill="var(--text)">{bank}</text>
        <text x="36" y={83 + i * 36} fontSize="11" fill="var(--text-muted)">{label}</text>
        <rect x="240" y={56 + i * 36} width={Math.round(score * 3.6)} height="20" rx="4" fill={score >= 70 ? "#16a34a" : score >= 50 ? "#f59e0b" : "#dc2626"} opacity="0.75" />
        <text x={248 + Math.round(score * 3.6)} y={70 + i * 36} fontSize="12" fontWeight="700" fill="var(--text)">{score}/100</text>
      </g>
    ))}
    <text x="36" y="224" fontSize="11" fill="var(--text-muted)">Flexibility score based on Assure Fintech reader reports and retention call outcomes, Jan–May 2026. Results vary by card variant, tenure, and payment history.</text>
  </svg>
);

const SvgWaiverOutcomeMatrix = () => (
  <svg viewBox="0 0 720 270" role="img" aria-label="Possible annual fee waiver outcomes when calling retention desk" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="270" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">What Banks Actually Offer When You Call About Annual Fee</text>
    <rect x="36" y="52" width="648" height="26" rx="4" fill="var(--border)" opacity="0.4" />
    <text x="50" y="70" fontSize="12" fontWeight="700" fill="var(--text)">Outcome</text>
    <text x="270" y="70" fontSize="12" fontWeight="700" fill="var(--text)">Likelihood</text>
    <text x="400" y="70" fontSize="12" fontWeight="700" fill="var(--text)">What it means</text>
    {[
      ["Full fee waiver", "Low-Medium (35%)", "₹0 charged. Rare but happens with long tenure."],
      ["Partial waiver (50%)", "Medium (28%)", "Half the fee reversed after charge posts."],
      ["Bonus points in lieu", "Medium (25%)", "Fee stands but you get 5,000-15,000 points."],
      ["Spend milestone offer", "High (60%)", "Fee waived IF you hit ₹X spend by deadline."],
      ["Flat refusal, no offer", "Low (12%)", "Escalate to retention desk immediately."],
    ].map(([outcome, likelihood, meaning], i) => (
      <g key={i}>
        <rect x="36" y={78 + i * 36} width="648" height="36" fill={i % 2 === 0 ? "transparent" : "var(--border)"} opacity="0.15" />
        <text x="50" y={101 + i * 36} fontSize="12" fontWeight="600" fill="var(--text)">{outcome}</text>
        <text x="270" y={101 + i * 36} fontSize="12" fill={likelihood.includes("High") ? "#16a34a" : likelihood.includes("Low") ? "#dc2626" : "#f59e0b"} fontWeight="600">{likelihood}</text>
        <text x="400" y={101 + i * 36} fontSize="11" fill="var(--text-muted)">{meaning}</text>
      </g>
    ))}
    <text x="36" y="252" fontSize="11" fill="var(--text-muted)">Likelihood percentages are indicative based on aggregated cardholder reports. Outcomes depend heavily on individual credit profile and card variant.</text>
  </svg>
);

const SvgAxisMagnusWaiverMath = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Axis Magnus annual fee waiver savings calculation" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Axis Magnus Annual Fee Waiver — The Real Savings (June 2026)</text>
    <rect x="36" y="54" width="190" height="80" rx="6" fill="var(--border)" opacity="0.3" />
    <text x="131" y="84" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Annual fee (ex-GST)</text>
    <text x="131" y="110" textAnchor="middle" fontSize="26" fontWeight="800" fill="var(--text)">₹10,000</text>
    <rect x="244" y="54" width="190" height="80" rx="6" fill="var(--raise)" opacity="0.12" />
    <text x="339" y="84" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">18% GST on fee</text>
    <text x="339" y="110" textAnchor="middle" fontSize="26" fontWeight="800" fill="#ea580c">₹1,800</text>
    <rect x="452" y="54" width="232" height="80" rx="6" fill="#16a34a" opacity="0.12" />
    <text x="568" y="84" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text)">Total charge on statement</text>
    <text x="568" y="110" textAnchor="middle" fontSize="26" fontWeight="800" fill="#16a34a">₹11,800</text>
    <text x="36" y="162" fontSize="13" fill="var(--text-muted)">A successful waiver saves you ₹11,800 in a single call that typically takes under 15 minutes.</text>
    <text x="36" y="182" fontSize="11" fill="var(--text-muted)">Even a 50% waiver = ₹5,900 saved. Getting bonus points in lieu of ₹11,800 rarely matches — calculate point value first.</text>
  </svg>
);

const SvgCallTimeline = () => (
  <svg viewBox="0 0 720 160" role="img" aria-label="Best time window to call for annual fee waiver on credit cards" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="160" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">When to Call — The Optimal Window</text>
    <rect x="36" y="50" width="648" height="16" rx="8" fill="var(--border)" opacity="0.5" />
    <rect x="36" y="50" width="180" height="16" rx="8" fill="#dc2626" opacity="0.5" />
    <rect x="216" y="50" width="200" height="16" rx="8" fill="#16a34a" opacity="0.8" />
    <rect x="416" y="50" width="140" height="16" rx="8" fill="var(--raise)" opacity="0.7" />
    <rect x="556" y="50" width="128" height="16" rx="8" fill="#dc2626" opacity="0.4" />
    <text x="126" y="86" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Too early</text>
    <text x="316" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="#16a34a">Sweet spot: 30-7 days before renewal</text>
    <text x="486" y="86" textAnchor="middle" fontSize="11" fill="#ea580c">Fee posted, before due date</text>
    <text x="620" y="86" textAnchor="middle" fontSize="11" fill="#dc2626">After due date</text>
    <text x="36" y="118" fontSize="12" fill="var(--text-muted)">Watch for the renewal SMS — it triggers the ideal window. Call within 48 hours of receiving that message for best results.</text>
    <text x="36" y="138" fontSize="12" fill="var(--text-muted)">If the fee has already posted, you can still negotiate — but ask for a reversal or credit to statement, not a "waiver."</text>
  </svg>
);

const SvgEscalationLadder = () => (
  <svg viewBox="0 0 720 230" role="img" aria-label="Escalation steps if first agent refuses annual fee waiver" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="230" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Escalation Ladder — If the First Agent Says No</text>
    {[
      { step: "Step 1", action: "Ask for retention/loyalty desk specifically", tip: "Say: 'I'd like to speak with your retention department please.'" },
      { step: "Step 2", action: "Repeat your tenure and spend history", tip: "Have your card since date and approx monthly spend ready." },
      { step: "Step 3", action: "Mention the downgrade option", tip: "Downgrading keeps your credit age intact — agents know this." },
      { step: "Step 4", action: "File a formal grievance if still refused", tip: "All banks must resolve within 30 days under RBI rules." },
      { step: "Step 5", action: "File RBI Banking Ombudsman complaint", tip: "bankingombudsman.rbi.org.in — this gets attention fast." },
    ].map(({ step, action, tip }, i) => (
      <g key={i}>
        <rect x="36" y={52 + i * 34} width="60" height="24" rx="4" fill={i < 3 ? "#16a34a" : "#ea580c"} opacity="0.8" />
        <text x="66" y="69" dy={i * 34} textAnchor="middle" fontSize="11" fontWeight="700" fill="white">{step}</text>
        <text x="110" y={69 + i * 34} fontSize="13" fontWeight="600" fill="var(--text)">{action}</text>
        <text x="110" y={85 + i * 34} fontSize="11" fill="var(--text-muted)">{tip}</text>
      </g>
    ))}
  </svg>
);

const SvgDowngradeVsClose = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="Comparison of downgrading versus closing a credit card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Downgrade vs. Close — What Happens to Your Credit Score</text>
    <rect x="36" y="52" width="308" height="130" rx="6" fill="#16a34a" opacity="0.22" />
    <text x="190" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="#16a34a">Downgrade Card</text>
    <text x="190" y="98" textAnchor="middle" fontSize="12" fill="var(--text)">Credit age: Preserved</text>
    <text x="190" y="116" textAnchor="middle" fontSize="12" fill="var(--text)">Credit limit: May reduce slightly</text>
    <text x="190" y="134" textAnchor="middle" fontSize="12" fill="var(--text)">Annual fee: ₹0-500 (no-fee variant)</text>
    <text x="190" y="152" textAnchor="middle" fontSize="12" fill="var(--text)">CIBIL impact: Neutral or slight positive</text>
    <text x="190" y="170" textAnchor="middle" fontSize="11" fill="var(--text-muted)">e.g., Regalia to Millennia, Magnus to Neo</text>
    <rect x="376" y="52" width="308" height="130" rx="6" fill="#dc2626" opacity="0.22" />
    <text x="530" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="#dc2626">Close Card</text>
    <text x="530" y="98" textAnchor="middle" fontSize="12" fill="var(--text)">Credit age: Reduced (hurts score)</text>
    <text x="530" y="116" textAnchor="middle" fontSize="12" fill="var(--text)">Credit limit: Lost permanently</text>
    <text x="530" y="134" textAnchor="middle" fontSize="12" fill="var(--text)">Annual fee: ₹0 (card gone)</text>
    <text x="530" y="152" textAnchor="middle" fontSize="12" fill="var(--text)">CIBIL impact: Usually negative</text>
    <text x="530" y="170" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Fine only if card is very new (under 1 year)</text>
    <text x="36" y="204" fontSize="11" fill="var(--text-muted)">Unless the card is under 12 months old, downgrading almost always beats closing. Mention this when negotiating — agents respond to it.</text>
  </svg>
);

const SvgMetricsTable = () => (
  <svg viewBox="0 0 720 230" role="img" aria-label="Cardholder metrics that strengthen your annual fee waiver case" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="230" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="36" y="34" fontSize="14" fontWeight="700" fill="var(--text)">Metrics That Strengthen Your Waiver Case</text>
    <rect x="36" y="50" width="648" height="26" rx="4" fill="var(--border)" opacity="0.4" />
    <text x="50" y="68" fontSize="12" fontWeight="700" fill="var(--text)">Metric</text>
    <text x="300" y="68" fontSize="12" fontWeight="700" fill="var(--text)">Strong position</text>
    <text x="500" y="68" fontSize="12" fontWeight="700" fill="var(--text)">Weak position</text>
    {[
      ["Payment history", "Zero late payments ever", "1+ late payments in 12 months"],
      ["Card tenure", "3+ years with same card", "Under 1 year"],
      ["Multiple products", "Loan/savings/FD with bank", "Card only relationship"],
      ["Monthly spend", "> ₹20,000/month", "{'<'} ₹5,000/month"],
      ["CIBIL score", "750+", "Below 700"],
    ].map(([metric, strong, weak], i) => (
      <g key={i}>
        <rect x="36" y={76 + i * 28} width="648" height="28" fill={i % 2 === 0 ? "transparent" : "var(--border)"} opacity="0.15" />
        <text x="50" y={95 + i * 28} fontSize="12" fill="var(--text)">{metric}</text>
        <text x="300" y={95 + i * 28} fontSize="12" fill="#16a34a" fontWeight="600">{strong}</text>
        <text x="500" y={95 + i * 28} fontSize="12" fill="#dc2626">{weak}</text>
      </g>
    ))}
    <text x="36" y="218" fontSize="11" fill="var(--text-muted)">Mention your strongest 2-3 metrics in the first 30 seconds of the call. Agents have a checklist — you want to tick the boxes upfront.</text>
  </svg>
);

export default function BlogGetAnnualFeeWaived() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you actually get credit card annual fees waived in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many cardholders successfully get full or partial waivers, especially with Kotak and Axis cards. Your success depends on payment history, card tenure, relationship breadth with the bank, and your monthly spend. Calling 30 days before renewal gives you the best chance."
        }
      },
      {
        "@type": "Question",
        name: "Which Indian bank is most likely to waive credit card annual fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kotak Mahindra Bank has historically been the most flexible, particularly if you have a savings account or other products with them. Axis Bank is relatively flexible, especially for Magnus and Neo cardholders with good payment history. HDFC Bank is the most rigid — they strongly prefer offering a spend milestone waiver over a direct waiver."
        }
      },
      {
        "@type": "Question",
        name: "What is the exact script to use when calling for an annual fee waiver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Try this: 'Hello, I received an SMS about my card renewal. I have been a customer for [X] years with a clean payment record and monthly spend of approximately ₹[amount]. I am considering whether to continue or switch to a card with no annual fee. I wanted to check if there is any loyalty waiver available before I decide.' Pause and let the agent respond — do not fill the silence."
        }
      },
      {
        "@type": "Question",
        name: "What if the first agent refuses to waive the fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask to be transferred to the retention or loyalty desk specifically. This is a different team with different authority. If they also refuse, ask what it would take — sometimes they will offer a specific spend milestone or bonus points. If still dissatisfied, you can file a formal grievance, which banks must resolve within 30 days under RBI guidelines."
        }
      },
      {
        "@type": "Question",
        name: "Is it better to downgrade or cancel a card if the fee is not waived?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost always downgrade rather than cancel, unless the card is under 12 months old. Downgrading preserves your credit age (which helps your CIBIL score), keeps the credit limit mostly intact, and eliminates the annual fee by moving to a lower-tier variant. Cancelling reduces your available credit and credit age — both can hurt your CIBIL score."
        }
      },
      {
        "@type": "Question",
        name: "What can I downgrade the Axis Magnus to if the fee is not waived?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Axis Neo card has no annual fee and preserves your credit history with Axis Bank. You lose the Magnus benefits but avoid the ₹11,800 annual cost and keep your credit age intact. Mention this explicitly on the call — 'I'll downgrade to Neo if a waiver isn't possible' — it often prompts a counter-offer."
        }
      },
      {
        "@type": "Question",
        name: "When is the best time to call for an annual fee waiver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call 30 to 7 days before your renewal date — ideally within 48 hours of receiving the renewal reminder SMS. Calling too early (60+ days before) and the system may not have a live renewal to act on. Calling after the fee has already posted is harder but still possible — ask for a statement credit rather than a 'waiver'."
        }
      },
      {
        "@type": "Question",
        name: "Are bonus points in lieu of a fee waiver worth accepting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your redemption rate. Calculate the cash value of the offered points first. If a card offers 15,000 reward points in lieu of a ₹5,000 fee and those points redeem at 25 paise each, you are getting ₹3,750 in value against a ₹5,000 charge — that is a bad deal. Many points redeem at 20-50 paise, so run the numbers before agreeing."
        }
      },
      {
        "@type": "Question",
        name: "Does having a salary account with the bank help in getting a fee waiver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, significantly. Banks view customers with multiple products — savings account, salary account, fixed deposit, loan — as higher-value relationships. Mention any product you hold with the bank in your opening statement. 'I have my salary account and home loan with HDFC' carries far more weight than just being a cardholder."
        }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Get Your Credit Card Annual Fee Waived in India — Scripts That Actually Work",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://assurefintech.com/blog/" },
      { "@type": "ListItem", position: 3, name: "Get Annual Fee Waived Scripts", item: "https://assurefintech.com/blog/get-annual-fee-waived-scripts" },
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #021509, #073417, #021509)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #16a34a22, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · How-to
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            How to Get Your Credit Card Annual Fee Waived — Scripts Indians Can Actually Use
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 20 }}>
            A ₹11,800 annual fee on an Axis Magnus does not have to be a done deal. Here is word-for-word what to say, when to call, which banks cave, and what to do if they say no.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 8 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Get Annual Fee Waived Scripts
      </nav>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why This Works — And When It Does Not</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Banks have a retention budget. Acquiring a new credit card customer costs anywhere from ₹1,500 to ₹4,000 in marketing and onboarding — keeping you is cheaper than finding someone new.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The retention desk exists specifically to offer concessions to cardholders who would otherwise cancel or downgrade. You are not begging — you are triggering a business calculation that often tilts in your favour.
        </p>
        <SvgBankFlexibilityRating />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Step 1: Time Your Call Correctly</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The renewal SMS is your trigger. Banks typically send it 45-60 days before the renewal date, and most retention desks can act on an active renewal from about 30 days out.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Call within 48 hours of that SMS and say the renewal message prompted you — this signals you are a engaged customer, not someone calling blindly.
        </p>
        <SvgCallTimeline />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Step 2: Know Your Numbers Before You Dial</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Agents can pull your account history in 10 seconds. But stating your own metrics first shows you are informed and sets the frame for the conversation.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Before calling, write down: how long you have had the card, your approximate monthly spend, whether you have ever missed a payment, and any other products you hold with that bank.
        </p>
        <SvgMetricsTable />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Script — Word for Word</h2>

        <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 24px", marginBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: COLOR, margin: "0 0 8px" }}>Opening (the first 30 seconds matter most)</p>
          <p style={{ fontSize: 14, fontStyle: "italic", margin: "0 0 8px", color: "var(--text)" }}>
            "Hello, I received the renewal SMS for my [card name] card ending in [XXXX]. I have been a customer for [X] years with a clean payment record and monthly spend of about ₹[amount]. I wanted to speak with someone about my annual fee before I decide on renewal."
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>Then stop. Do not fill the silence. Let the agent respond.</p>
        </div>

        <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 24px", marginBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: COLOR, margin: "0 0 8px" }}>If they ask "what do you want?"</p>
          <p style={{ fontSize: 14, fontStyle: "italic", margin: "0 0 8px", color: "var(--text)" }}>
            "I am considering whether to continue with this card or downgrade to [no-fee variant / competitor card]. I wanted to check if there is any loyalty waiver available for long-standing customers before I make a decision."
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>The word "downgrade" is important — it signals you will leave the product but stay with the bank, which agents can sometimes count as a partial retention win.</p>
        </div>

        <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 24px", marginBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: COLOR, margin: "0 0 8px" }}>If they offer a spend milestone instead</p>
          <p style={{ fontSize: 14, fontStyle: "italic", margin: "0 0 8px", color: "var(--text)" }}>
            "I understand the milestone option — what is the spend required and by when? Can you confirm that in writing via SMS or email? And is there any option for a partial waiver without a condition?"
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>Always get spend milestones in writing — amounts and deadlines sometimes differ from what was said on the call.</p>
        </div>

        <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 24px", marginBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: COLOR, margin: "0 0 8px" }}>If they offer bonus points instead of a waiver</p>
          <p style={{ fontSize: 14, fontStyle: "italic", margin: "0 0 8px", color: "var(--text)" }}>
            "What is the cash value of those points at current redemption rates? [Pause for answer.] So that comes to ₹[X], versus the ₹[fee] I would pay. Is there any way to get that closer to a full value offset?"
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>Many agents have not done this math themselves. Running it out loud sometimes prompts them to offer more.</p>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What Banks Typically Offer</h2>
        <SvgWaiverOutcomeMatrix />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Real Case: Axis Magnus Annual Fee ₹11,800</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          The Axis Magnus charges ₹10,000 plus 18% GST, totalling ₹11,800 annually. For context, the card is primarily valuable for its edge ratio on travel redemptions — but those ratios were cut in April 2026, reducing the card's effective value.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          A cardholder with 3+ years of history, ₹25,000+ monthly spend, and a clean payment record has a reasonable shot at a partial or full waiver. Even a 50% result saves ₹5,900 for a 15-minute call.
        </p>
        <SvgAxisMagnusWaiverMath />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>If They Say No: The Escalation Ladder</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          A flat refusal from the first agent is not the end — it is the beginning of escalation. The first-tier agent often has limited authority; the retention desk does not.
        </p>
        <SvgEscalationLadder />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Downgrade as Your Backup — Not a Consolation</h2>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          If neither a waiver nor an acceptable milestone offer materialises, downgrading is the smart move in most cases. It preserves your credit age (a key CIBIL factor), eliminates the annual fee, and keeps your credit limit largely intact.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 12px" }}>
          Closing a card — especially one you have held for 3+ years — reduces your average credit age and can knock 15-30 points off your CIBIL score temporarily.
        </p>
        <SvgDowngradeVsClose />
      </section>

      <section style={{ background: "var(--green-dim)", border: "1px solid rgba(62,224,143,.25)", borderRadius: 8, padding: "20px 24px", marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: COLOR }}>Your Pre-Call Checklist</h2>
        <ol style={{ fontSize: 14, color: "var(--text)", lineHeight: 2.1, paddingLeft: 20 }}>
          <li>Note your card start date — "customer since [month, year]" lands better than "a few years."</li>
          <li>Check last 12 months for any late payments — if clean, lead with this.</li>
          <li>Calculate your average monthly spend — round to the nearest ₹5,000.</li>
          <li>List any other bank products (savings account, FD, loan, other card).</li>
          <li>Know the no-fee downgrade option for your card before calling.</li>
          <li>Have time — the call can take 15-25 minutes including hold music.</li>
        </ol>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
        Related:{" "}
        <Link href="/blog/annual-fee-when-worth-paying" style={{ color: COLOR }}>When Is a Credit Card Annual Fee Worth Paying?</Link>{" "}
        ·{" "}
        <Link href="/blog/should-you-close-old-credit-card" style={{ color: COLOR }}>Should You Close an Old Credit Card?</Link>{" "}
        ·{" "}
        <Link href="/blog/why-reward-rates-dropping-india" style={{ color: COLOR }}>Why Reward Rates Are Dropping in India</Link>{" "}
        ·{" "}
        <Link href="/stack-builder" style={{ color: COLOR }}>Card Stack Builder</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison site. Scripts and bank flexibility ratings are based on aggregated reader reports and publicly available information as of June 2026. Outcomes vary by individual profile and bank policy, which can change at any time. This article is not financial advice.
      </footer>
    </main>
    </>
  );
}
