import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Should You Close Your Old Credit Card? The CIBIL Impact Is Real and It Will Surprise You",
  description: "Should You Close Your Old Credit Card? The CIBIL Impact Is Real and It Will Surprise You",
  alternates: { canonical: "/blog/should-you-close-old-credit-card" },
  openGraph: {
    title: "Should You Close Your Old Credit Card? The CIBIL Impact Is Real and It Will Surprise You",
    description: "Should You Close Your Old Credit Card? The CIBIL Impact Is Real and It Will Surprise You",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /blog/should-you-close-old-credit-card
// Template: myth-buster + decision tree
// Color: #dc2626 | Updated: June 4, 2026

const COLOR = "#dc2626";
const UPDATED = "June 4, 2026";

const SvgCibilImpact = () => (
  <svg viewBox="0 0 720 220" role="img" aria-label="CIBIL score impact of closing an old credit card: score can drop 30 to 60 points" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="220" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">What Closing One Old Card Does to Your CIBIL Score</text>
    <rect x="30" y="44" width="300" height="155" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5" />
    <text x="180" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">5-Year-Old Card, ₹2L Limit</text>
    <text x="180" y="90" textAnchor="middle" fontSize="28" fontWeight="800" fill="#16a34a">750</text>
    <text x="180" y="108" textAnchor="middle" fontSize="11" fill="var(--text-muted)">CIBIL before closing</text>
    <text x="180" y="132" textAnchor="middle" fontSize="12" fill="var(--text)">Credit age: reduced</text>
    <text x="180" y="150" textAnchor="middle" fontSize="12" fill="var(--text)">Available credit: reduced by ₹2L</text>
    <text x="180" y="168" textAnchor="middle" fontSize="12" fill="var(--text)">Utilisation ratio: spikes</text>
    <text x="180" y="186" textAnchor="middle" fontSize="12" fill="var(--text)">Score impact in 30 days:</text>
    <rect x="390" y="44" width="300" height="155" rx="8" fill={COLOR} opacity="0.07" stroke={COLOR} strokeWidth="1.5" />
    <text x="540" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>After Closing That Card</text>
    <text x="540" y="90" textAnchor="middle" fontSize="28" fontWeight="800" fill={COLOR}>690-720</text>
    <text x="540" y="108" textAnchor="middle" fontSize="11" fill="var(--text-muted)">CIBIL 30-60 days later</text>
    <text x="540" y="132" textAnchor="middle" fontSize="12" fill="var(--text)">Drop: 30 to 60 points</text>
    <text x="540" y="150" textAnchor="middle" fontSize="12" fill="var(--text)">Recovery time: 6-18 months</text>
    <text x="540" y="168" textAnchor="middle" fontSize="12" fill="var(--text)">Loan impact: real and measurable</text>
    <text x="540" y="186" textAnchor="middle" fontSize="12" fill="var(--text)">Home loan rate: could go up 0.25-0.5%</text>
    <text x="360" y="212" textAnchor="middle" fontSize="10" fill="var(--text-muted)">The older the card, the higher the hit. A 10-year-old card closure can drop scores more than 60 points in some profiles.</text>
  </svg>
);

const SvgCreditAgeExplainer = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="How credit age is calculated and why old cards matter for your CIBIL score" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Credit Age: How CIBIL Calculates It (And Why Old Cards Are Gold)</text>
    <text x="30" y="58" fontSize="11" fontWeight="700" fill="var(--text-muted)">CARD</text>
    <text x="200" y="58" fontSize="11" fontWeight="700" fill="var(--text-muted)">AGE</text>
    <text x="300" y="58" fontSize="11" fontWeight="700" fill="var(--text-muted)">LIMIT</text>
    <text x="420" y="58" fontSize="11" fontWeight="700" fill="var(--text-muted)">STATUS</text>
    <text x="560" y="58" fontSize="11" fontWeight="700" fill="var(--text-muted)">CLOSE IT?</text>
    <line x1="20" y1="64" x2="700" y2="64" stroke="var(--border)" strokeWidth="1" />
    <text x="30" y="84" fontSize="11" fill="var(--text)">SBI Card (2016)</text>
    <text x="200" y="84" fontSize="11" fill="var(--text)">10 yrs</text>
    <text x="300" y="84" fontSize="11" fill="var(--text)">₹1,00,000</text>
    <text x="420" y="84" fontSize="11" fill="var(--text)">Unused</text>
    <text x="560" y="84" fontSize="11" fontWeight="700" fill={COLOR}>Never. Keep it.</text>
    <line x1="20" y1="96" x2="700" y2="96" stroke="var(--border)" strokeWidth="0.5" />
    <text x="30" y="116" fontSize="11" fill="var(--text)">HDFC Card (2020)</text>
    <text x="200" y="116" fontSize="11" fill="var(--text)">6 yrs</text>
    <text x="300" y="116" fontSize="11" fill="var(--text)">₹3,00,000</text>
    <text x="420" y="116" fontSize="11" fill="var(--text)">Primary card</text>
    <text x="560" y="116" fontSize="11" fontWeight="700" fill="#16a34a">Definitely keep.</text>
    <line x1="20" y1="128" x2="700" y2="128" stroke="var(--border)" strokeWidth="0.5" />
    <text x="30" y="148" fontSize="11" fill="var(--text)">Axis Neo (2024)</text>
    <text x="200" y="148" fontSize="11" fill="var(--text)">2 yrs</text>
    <text x="300" y="148" fontSize="11" fill="var(--text)">₹50,000</text>
    <text x="420" y="148" fontSize="11" fill="var(--text)">Rarely used</text>
    <text x="560" y="148" fontSize="11" fontWeight="700" fill="#16a34a">Safest to close.</text>
    <text x="360" y="172" textAnchor="middle" fontSize="10" fill="var(--text-muted)">CIBIL uses average age of all open accounts. Closing the oldest card is the single most damaging action to your credit age.</text>
  </svg>
);

const SvgUtilisationSpike = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Credit utilisation ratio spike after closing a credit card" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Utilisation Spike: The Second Hit You Do Not See Coming</text>
    <text x="180" y="56" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">Before Closing Old Card</text>
    <text x="540" y="56" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">After Closing Old Card</text>
    <text x="180" y="80" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Total credit limit: ₹5,00,000</text>
    <text x="180" y="98" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Current outstanding: ₹75,000</text>
    <text x="180" y="118" textAnchor="middle" fontSize="22" fontWeight="800" fill="#16a34a">15%</text>
    <text x="180" y="138" textAnchor="middle" fontSize="11" fill="var(--text-muted)">utilisation (excellent)</text>
    <rect x="80" y="152" width="200" height="22" rx="4" fill="#16a34a" opacity="0.2" />
    <rect x="80" y="152" width="30" height="22" rx="4" fill="#16a34a" />
    <text x="540" y="80" textAnchor="middle" fontSize="11" fill="var(--text-muted)">Total credit limit: ₹3,00,000</text>
    <text x="540" y="98" textAnchor="middle" fontSize="11" fill="var(--text-muted)">(old ₹2L card removed)</text>
    <text x="540" y="118" textAnchor="middle" fontSize="22" fontWeight="800" fill={COLOR}>25%</text>
    <text x="540" y="138" textAnchor="middle" fontSize="11" fill="var(--text-muted)">utilisation (hurts score)</text>
    <rect x="440" y="152" width="200" height="22" rx="4" fill={COLOR} opacity="0.15" />
    <rect x="440" y="152" width="50" height="22" rx="4" fill={COLOR} opacity="0.6" />
    <text x="360" y="190" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Same ₹75,000 outstanding. Different utilisation. Closing a high-limit old card is a double penalty: lower credit age AND higher utilisation ratio.</text>
  </svg>
);

const SvgHomeLoanInterest = () => (
  <svg viewBox="0 0 720 190" role="img" aria-label="Effect of CIBIL score drop on home loan interest rate in India" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="190" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">CIBIL Drop vs Home Loan Rate: The Real Cost of Closing a Card</text>
    <text x="30" y="52" fontSize="10" fontWeight="700" fill="var(--text-muted)">CIBIL RANGE</text>
    <text x="220" y="52" fontSize="10" fontWeight="700" fill="var(--text-muted)">TYPICAL RATE (SBI/HDFC)</text>
    <text x="420" y="52" fontSize="10" fontWeight="700" fill="var(--text-muted)">₹50L LOAN, 20YR EMI</text>
    <text x="600" y="52" fontSize="10" fontWeight="700" fill="var(--text-muted)">EXTRA COST</text>
    <line x1="20" y1="58" x2="700" y2="58" stroke="var(--border)" strokeWidth="1" />
    <text x="30" y="78" fontSize="11" fontWeight="600" fill="#16a34a">750 and above</text>
    <text x="220" y="78" fontSize="11" fill="var(--text)">8.50 - 8.75%</text>
    <text x="420" y="78" fontSize="11" fill="var(--text)">₹43,391/month</text>
    <text x="600" y="78" fontSize="11" fontWeight="700" fill="#16a34a">Baseline</text>
    <line x1="20" y1="90" x2="700" y2="90" stroke="var(--border)" strokeWidth="0.5" />
    <text x="30" y="110" fontSize="11" fontWeight="600" fill="#ea580c">720 to 749</text>
    <text x="220" y="110" fontSize="11" fill="var(--text)">8.75 - 9.00%</text>
    <text x="420" y="110" fontSize="11" fill="var(--text)">₹44,986/month</text>
    <text x="600" y="110" fontSize="11" fontWeight="700" fill="#ea580c">+₹1,595/month</text>
    <line x1="20" y1="122" x2="700" y2="122" stroke="var(--border)" strokeWidth="0.5" />
    <text x="30" y="142" fontSize="11" fontWeight="600" fill={COLOR}>700 to 719</text>
    <text x="220" y="142" fontSize="11" fill="var(--text)">9.00 - 9.50%</text>
    <text x="420" y="142" fontSize="11" fill="var(--text)">₹44,986 - ₹46,607/month</text>
    <text x="600" y="142" fontSize="11" fontWeight="700" fill={COLOR}>+₹3,216/month</text>
    <line x1="20" y1="154" x2="700" y2="154" stroke="var(--border)" strokeWidth="0.5" />
    <text x="30" y="174" fontSize="11" fontWeight="600" fill={COLOR}>Below 700</text>
    <text x="220" y="174" fontSize="11" fill="var(--text)">9.50%+ or rejection</text>
    <text x="420" y="174" fontSize="11" fill="var(--text)">₹46,607+ or no loan</text>
    <text x="600" y="174" fontSize="11" fontWeight="700" fill={COLOR}>Significant premium</text>
  </svg>
);

const SvgWhenToClose = () => (
  <svg viewBox="0 0 720 200" role="img" aria-label="Legitimate reasons to close a credit card despite the CIBIL impact" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="200" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">When Closing IS the Right Call (Rare, But Real)</text>
    <rect x="30" y="44" width="310" height="138" rx="8" fill={COLOR} opacity="0.07" stroke={COLOR} strokeWidth="1.5" />
    <text x="185" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Close When...</text>
    <text x="185" y="88" textAnchor="middle" fontSize="11" fill="var(--text)">Card is compromised and bank refuses to reissue</text>
    <text x="185" y="108" textAnchor="middle" fontSize="11" fill="var(--text)">Fee card you cannot waive and no longer use</text>
    <text x="185" y="128" textAnchor="middle" fontSize="11" fill="var(--text)">You have 6+ cards and cannot manage them</text>
    <text x="185" y="148" textAnchor="middle" fontSize="11" fill="var(--text)">Card is a joint account with someone you want to separate finances from</text>
    <text x="185" y="168" textAnchor="middle" fontSize="11" fill="var(--text)">No loan planned for at least 12 months</text>
    <rect x="380" y="44" width="310" height="138" rx="8" fill="#16a34a" opacity="0.07" stroke="#16a34a" strokeWidth="1.5" />
    <text x="535" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="#16a34a">Try This First...</text>
    <text x="535" y="88" textAnchor="middle" fontSize="11" fill="var(--text)">Downgrade to a free version of the same card</text>
    <text x="535" y="108" textAnchor="middle" fontSize="11" fill="var(--text)">Call retention and ask for fee waiver</text>
    <text x="535" y="128" textAnchor="middle" fontSize="11" fill="var(--text)">Keep the card, just stop using it (zero cost)</text>
    <text x="535" y="148" textAnchor="middle" fontSize="11" fill="var(--text)">Set a small auto-pay to keep it active</text>
    <text x="535" y="168" textAnchor="middle" fontSize="11" fill="var(--text)">Reduce limit instead of closing</text>
  </svg>
);

const SvgClosingOrder = () => (
  <svg viewBox="0 0 720 180" role="img" aria-label="Correct order to close credit cards if you must: newest first, lowest limit first" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="180" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">If You Must Close: The Damage-Minimising Order</text>
    <rect x="30" y="44" width="140" height="110" rx="8" fill="#16a34a" opacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <text x="100" y="66" textAnchor="middle" fontSize="22" fontWeight="800" fill="#16a34a">1st</text>
    <text x="100" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Newest card</text>
    <text x="100" y="104" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Least history</text>
    <text x="100" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">to lose</text>
    <text x="100" y="140" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Lowest score hit</text>
    <rect x="200" y="44" width="140" height="110" rx="8" fill="var(--raise)" opacity="0.12" stroke="#ea580c" strokeWidth="1.5" />
    <text x="270" y="66" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ea580c">2nd</text>
    <text x="270" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Lowest limit</text>
    <text x="270" y="104" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Removes least</text>
    <text x="270" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">available credit</text>
    <text x="270" y="140" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Utilisation hit minimal</text>
    <rect x="370" y="44" width="140" height="110" rx="8" fill={COLOR} opacity="0.1" stroke={COLOR} strokeWidth="1.5" />
    <text x="440" y="66" textAnchor="middle" fontSize="22" fontWeight="800" fill={COLOR}>Never</text>
    <text x="440" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">Oldest card</text>
    <text x="440" y="104" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Destroys credit age</text>
    <text x="440" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Biggest score drop</text>
    <text x="440" y="140" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Worst-case scenario</text>
    <rect x="540" y="44" width="150" height="110" rx="8" fill={COLOR} opacity="0.08" stroke="var(--border)" strokeWidth="1.5" />
    <text x="615" y="66" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--text-muted)">Avoid</text>
    <text x="615" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">High-limit card</text>
    <text x="615" y="104" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Spikes utilisation</text>
    <text x="615" y="120" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Even if recently</text>
    <text x="615" y="140" textAnchor="middle" fontSize="10" fill="var(--text-muted)">opened</text>
  </svg>
);

const SvgDecisionTree = () => (
  <svg viewBox="0 0 720 320" role="img" aria-label="Decision tree: should you close your old credit card?" style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
    <rect width="720" height="320" fill="var(--raise2)" rx="10" stroke="var(--hair2)" strokeWidth="1" />
    <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text)">Should You Close That Old Card? Decision Tree</text>
    <rect x="255" y="42" width="210" height="40" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1.5" />
    <text x="360" y="67" textAnchor="middle" fontSize="12" fill="var(--text)">Thinking about closing an old card?</text>
    <line x1="360" y1="82" x2="360" y2="106" stroke="var(--text-muted)" strokeWidth="1.5" />
    <rect x="215" y="106" width="290" height="36" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
    <text x="360" y="129" textAnchor="middle" fontSize="12" fill="var(--text)">Is a loan application planned in next 6 months?</text>
    <line x1="215" y1="124" x2="80" y2="170" stroke="var(--text-muted)" strokeWidth="1.5" />
    <line x1="505" y1="124" x2="620" y2="170" stroke="var(--text-muted)" strokeWidth="1.5" />
    <text x="118" y="162" textAnchor="middle" fontSize="11" fill="#16a34a">Yes</text>
    <text x="570" y="162" textAnchor="middle" fontSize="11" fill={COLOR}>No</text>
    <rect x="20" y="170" width="200" height="40" rx="8" fill={COLOR} opacity="0.1" stroke={COLOR} strokeWidth="1.5" />
    <text x="120" y="188" textAnchor="middle" fontSize="12" fontWeight="700" fill={COLOR}>Do NOT close.</text>
    <text x="120" y="204" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Protect your score for loan</text>
    <rect x="500" y="170" width="200" height="36" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
    <text x="600" y="193" textAnchor="middle" fontSize="12" fill="var(--text)">Is there an unjustified annual fee?</text>
    <line x1="500" y1="188" x2="390" y2="234" stroke="var(--text-muted)" strokeWidth="1.5" />
    <line x1="700" y1="188" x2="660" y2="234" stroke="var(--text-muted)" strokeWidth="1.5" />
    <text x="432" y="226" textAnchor="middle" fontSize="11" fill={COLOR}>No fee</text>
    <text x="688" y="226" textAnchor="middle" fontSize="11" fill={COLOR}>Yes, fee</text>
    <rect x="270" y="234" width="200" height="40" rx="8" fill="#16a34a" opacity="0.1" stroke="#16a34a" strokeWidth="1.5" />
    <text x="370" y="252" textAnchor="middle" fontSize="12" fontWeight="700" fill="#16a34a">Keep it. Zero cost.</text>
    <text x="370" y="268" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Stop using, don't close</text>
    <rect x="520" y="234" width="180" height="40" rx="8" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" />
    <text x="610" y="252" textAnchor="middle" fontSize="12" fill="var(--text)">Call bank for waiver first</text>
    <line x1="610" y1="274" x2="610" y2="296" stroke="var(--text-muted)" strokeWidth="1.5" />
    <text x="420" y="310" textAnchor="middle" fontSize="10" fill="var(--text-muted)">Waiver denied? Close with 6-month buffer before any loan application. Close newest card first.</text>
    <text x="660" y="296" textAnchor="middle" fontSize="10" fill="#16a34a">Waiver granted: keep open</text>
  </svg>
);

export default function BlogShouldYouCloseOldCreditCard() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does closing a credit card hurt your CIBIL score?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, in two ways. First, it reduces your available credit, which raises your credit utilisation ratio. Second, if it is an old card, it can lower your average credit age. Both factors hurt CIBIL. The typical drop from closing a 5-year-old card is 30-60 points, and recovery takes 6-18 months." }
      },
      {
        "@type": "Question",
        name: "Is it better to keep an old unused credit card or close it?",
        acceptedAnswer: { "@type": "Answer", text: "Almost always better to keep it, especially if there is no annual fee. An unused card with no annual fee costs you nothing but preserves your credit age, keeps your credit utilisation ratio lower, and maintains your available credit. Set a ₹100 auto-pay on a streaming subscription to keep the card active and avoid bank-initiated closure." }
      },
      {
        "@type": "Question",
        name: "How much can closing a credit card drop my CIBIL score?",
        acceptedAnswer: { "@type": "Answer", text: "It varies by profile, but closing a 5-year-old card typically drops CIBIL by 30-60 points. A 10-year-old card can cause a larger drop. The hit is worse if the closed card had a high limit (causing a utilisation spike) or if it was your oldest account (causing a significant credit age drop)." }
      },
      {
        "@type": "Question",
        name: "What is the 6-month buffer rule for credit card closure?",
        acceptedAnswer: { "@type": "Answer", text: "If you plan to close a card, do it at least 6 months before any major loan application (home loan, car loan, personal loan). This gives your CIBIL score time to partially recover before lenders check it. Closing a card right before a loan application is one of the most common and avoidable credit mistakes." }
      },
      {
        "@type": "Question",
        name: "What is the right order to close credit cards if I have too many?",
        acceptedAnswer: { "@type": "Answer", text: "Close the newest card first, then the card with the lowest credit limit. Never close your oldest card or your highest-limit card. The newest, lowest-limit card does the least damage to your credit age and utilisation ratio when removed." }
      },
      {
        "@type": "Question",
        name: "Can I deactivate a credit card without closing it?",
        acceptedAnswer: { "@type": "Answer", text: "Not officially, but you can effectively deactivate it by stopping usage. Most banks will not close a card unless you request it, even if unused for years. Just stop spending on it. If you are worried about security, you can request a 'card block' from the app while keeping the account open, which preserves your credit history." }
      },
      {
        "@type": "Question",
        name: "What happens to CIBIL if a bank closes my credit card due to inactivity?",
        acceptedAnswer: { "@type": "Answer", text: "The same negative impact applies whether you close it or the bank closes it. The account still gets removed from your available credit and credit age calculation. To prevent bank-initiated closure, make at least one transaction every 6-12 months on each card you want to keep." }
      },
      {
        "@type": "Question",
        name: "I have a card I hate with a high fee. What should I do?",
        acceptedAnswer: { "@type": "Answer", text: "First, call the bank's retention team and ask for a fee waiver. If they refuse, ask if you can downgrade to a free variant of the same card family (HDFC MoneyBack to MoneyBack+, for example). Downgrading preserves the account's credit history. Only close as a last resort, and wait until 6+ months before any planned loan application." }
      },
      {
        "@type": "Question",
        name: "How does credit utilisation ratio affect CIBIL?",
        acceptedAnswer: { "@type": "Answer", text: "CIBIL recommends keeping utilisation below 30% of your total credit limit. Closing a high-limit card can spike your utilisation ratio even if your spending does not change. For example, ₹75,000 outstanding on ₹5,00,000 total limit is 15% (excellent). If you close a ₹2,00,000 limit card, the same ₹75,000 outstanding on ₹3,00,000 limit becomes 25% (noticeably worse)." }
      }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Should You Close Your Old Credit Card? The CIBIL Math First",
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
      { "@type": "ListItem", position: 3, name: "Should You Close Your Old Credit Card?", item: "https://assurefintech.com/blog/should-you-close-old-credit-card" }
    ]
  };

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1C0404, #460C0C, #1C0404)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #dc262622, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Credit Cards · Cibil
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            Should You Close Your Old Credit Card? The CIBIL Impact Is Real and It Will Surprise You
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 560, marginBottom: 20 }}>
            Closing an old credit card feels like tidying up your finances. It is actually one of the most common ways people accidentally hurt their credit score right before a major loan.
          </p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 7 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/blog" style={{ color: "inherit" }}>Blog</Link> / Should You Close Old Credit Card
      </nav>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Myth: Closing Cards Cleans Up Your Credit Profile</h2>
        <p>The thinking is intuitive: fewer cards means simpler finances, less exposure, cleaner credit report. This is wrong. CIBIL and other Indian credit bureaus score you better when you have a long, well-managed credit history across multiple accounts.</p>
        <p>Closing an old card does not remove its positive history from your report immediately, but it does remove it from your live credit age calculation. Within 2-7 years, the closed account drops off your report entirely, erasing years of good behaviour you spent building.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Double Penalty: Credit Age and Utilisation</h2>
        <p>Closing any credit card hits your score in two ways at once. First, your average credit age drops because one account is no longer averaging into the calculation. Second, your credit utilisation ratio rises because your total available credit limit has shrunk.</p>
        <p>A 5-year-old card closed today drops your CIBIL by an estimated 30-60 points depending on your profile. A 10-year-old card can do even more damage. Recovery takes 6-18 months of clean behaviour.</p>
        <SvgCibilImpact />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Why Your Oldest Card Is the One You Should Never Close</h2>
        <p>CIBIL calculates credit age as an average across all open accounts. Your oldest card anchors the entire calculation. If you have a 2016 SBI Card, a 2020 HDFC Card, and a 2024 Axis Neo — closing the 2016 card drops your average age from roughly 5.7 years to 2.5 years, nearly halved overnight.</p>
        <p>Even if that old SBI card sits untouched, even if its limit is modest, even if the bank charges you a small annual fee to retain it — it is likely worth the cost just to protect your credit age.</p>
        <SvgCreditAgeExplainer />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>The Utilisation Spike Nobody Talks About</h2>
        <p>When you close a card, your total credit limit goes down. If your outstanding balance stays the same, your utilisation ratio goes up. This is the hidden hit that catches people off guard, particularly when closing a high-limit card.</p>
        <p>The recommended utilisation ratio is below 30%. Many good CIBIL scores are built on 10-15% utilisation. Closing one high-limit card can push that number past 30% with zero change in actual spending behaviour.</p>
        <SvgUtilisationSpike />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>What a CIBIL Drop Actually Costs You: Home Loan Math</h2>
        <p>A 30-50 point CIBIL drop sounds abstract until you are sitting across a loan officer. Home loan interest rates in India are directly tiered to credit scores. The difference between 750+ and 700-719 on a ₹50 lakh loan over 20 years is real monthly cash out of your pocket.</p>
        <p>On a ₹50 lakh home loan, a 0.5% higher rate adds roughly ₹1,600 per month to your EMI, totalling ₹3.84 lakh over the loan tenure. That is the true cost of an avoidable CIBIL drop from closing the wrong card at the wrong time.</p>
        <SvgHomeLoanInterest />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>When It IS the Right Call to Close</h2>
        <p>There are genuine reasons to close a card. If you have been defrauded and the bank insists on closing rather than reissuing, if the annual fee is steep and the bank refuses a waiver or downgrade, or if you genuinely cannot manage multiple cards and are missing payments, closing makes sense.</p>
        <p>The key question to ask first: is there a way to keep the account open with zero cost? Almost always, the answer is yes. A free-tier downgrade, a fee waiver call to retention, or simply leaving the card dormant costs nothing and saves your credit history.</p>
        <SvgWhenToClose />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>If You Must Close: The Damage-Minimising Order</h2>
        <p>Close the newest card first, then the card with the lowest limit. Never start with the oldest card or the highest-limit card. The goal is to protect credit age and minimise the utilisation spike.</p>
        <p>Wait 6 months after any closure before applying for a home loan, car loan, or significant personal loan. Your score will partially recover in that window, and lenders will see a cleaner picture.</p>
        <SvgClosingOrder />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Use This Decision Tree First</h2>
        <p>Before picking up the phone to close any card, walk through this tree. Most people who go through it find they do not actually need to close the card at all.</p>
        <SvgDecisionTree />
      </section>

      <section style={{ background: "var(--raise)", border: `1.5px solid ${COLOR}`, borderRadius: 10, padding: "22px 24px", marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", color: COLOR }}>Three Actions Before You Close Anything</h2>
        <p style={{ margin: "0 0 10px" }}>One: call the bank retention team and ask for a fee waiver or free-tier downgrade. Two: make one small transaction on the card every 6 months to prevent bank-initiated closure. Three: check if any home loan or major credit application is coming in the next 6-12 months. If yes, close nothing.</p>
        <p style={{ margin: 0 }}>Read our full guides on <Link href="/blog/cibil-score-101-india" style={{ color: COLOR }}>understanding your CIBIL score</Link> and <Link href="/blog/credit-utilisation-ratio-guide" style={{ color: COLOR }}>managing credit utilisation</Link>. If you are planning a loan, check our <Link href="/learn/loans" style={{ color: COLOR }}>loan comparison guide</Link> first.</p>
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
        Related: <Link href="/blog/cibil-score-101-india" style={{ color: COLOR }}>CIBIL Score 101 India</Link> · <Link href="/blog/credit-utilisation-ratio-guide" style={{ color: COLOR }}>Credit Utilisation Ratio Guide</Link> · <Link href="/learn/loans" style={{ color: COLOR }}>Loan Comparison</Link>
      </p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Assure Fintech is an independent comparison platform. CIBIL score ranges and home loan interest rate bands are indicative as of June 4, 2026. Actual loan rates depend on bank-specific policies and individual credit profiles. This is not financial advice.
      </footer>
    </main>
    </>
  );
}
