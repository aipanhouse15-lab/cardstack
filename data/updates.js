// ─── MONTHLY UPDATES / WHAT CHANGED ───
// Add new entries at the TOP of each month's array
// Cards with `upcoming` field in cards.js auto-appear in the "Coming Soon" section

export const MONTHLY_UPDATES = [
  {
    month: "October 2026",
    current: true,
    entries: [
      {type:"update",icon:"💳",card:"Card and guide corrections",text:"Corrected reward caps, merchant/payment-route assumptions and several fee/points mismatches. Insurance guide now includes worked premium-payment examples and checkout-fee arithmetic. MakeMyTrip broad-category estimates are withheld pending its complete earning-table review; the product review remains available. These are editorial/model corrections, not a claim that every issuer changed terms in October.",date:"Oct 1, 2026"},
      {type:"update",icon:"📅",card:"Tax-year selector",text:"Added Tax Year 2026–27 salary estimates under the Income-tax Act, 2025, while retaining AY 2026–27 for earlier income. Period-specific deduction labels, official sources and regression tests accompany the selector. Scope remains ordinary salary for a resident individual below age 60, up to ₹50 lakh; special-rate income and filing adjustments are outside this model.",date:"Oct 1, 2026"},
      {type:"update",icon:"🧮",card:"Calculator corrections",text:"Corrected AY 2026–27 rebate/marginal-relief arithmetic, FD purchasing-power calculations, above-limit insurance claim display, and SIP effective annual-rate and inflation assumptions. Added regression tests.",date:"Oct 1, 2026"},
      {type:"update",icon:"📚",card:"Guides and comparisons",text:"Added distinct worked examples and decision steps to 24 existing non-card guides. Rebuilt 15 static comparisons with source links and explicit scenario scope; removed unsupported performance, premium and coverage winner claims. Preserved existing URLs.",date:"Oct 1, 2026"},
      {type:"update",icon:"🔎",card:"Reward model coverage",text:"Separated a recorded issuer-source review from calculation readiness. Products with incomplete reward models are excluded from numerical rankings; a source link alone no longer qualifies a card. Examples remain merchant-eligibility dependent, not personalized application advice.",date:"Oct 1, 2026"},
    ],
  },
  {
    month: "September 2026",
    current: false,
    entries: [
      { type: "update", icon: "🧮", card: "Homepage examples and technical SEO", text: "Replaced unsupported homepage reward-rate claims with issuer-linked examples and explicit spend/redemption assumptions. Removed the stale June ticker items, duplicate brand suffixes in page titles, and blanket sitemap modified dates that overstated content freshness.", date: "Sep 2026" },
      { type: "update", icon: "📝", card: "Loan & tax guides", text: "Added worked loan examples for fee-adjusted personal-loan cash flows, home-loan rate changes and education-loan moratorium interest. Added HRA and tax-saving deduction examples, and clarified the AY 2026–27 / Tax Year 2026–27 transition, including section 123 of the Income-tax Act, 2025. Examples state their assumptions and link to official guidance where applicable.", date: "Sep 2026" },
      { type: "update", icon: "🔎", card: "Coverage & freshness", text: "At this September checkpoint, 58 of 76 records had a source link and review date; 18 remained pending. This historical count is not today's coverage or a claim that all fields were verified. Subsequent field corrections are recorded in October; source review and calculator readiness are separate.", date: "Sep 2026" },
    ],
  },
  {
    month: "June 2026",
    current: false,
    entries: [
      { type: "alert", icon: "🔄", card: "Stale Content Audit", text: "Earlier audit work covered selected Axis, HDFC, Scapia and Standard Chartered records and Vistara naming. The original 'full data refresh' wording overstated coverage; field-level review continued in September and October. This entry preserves the earlier audit checkpoint, not a complete current-terms certification.", date: "Jun 2026" },
      { type: "alert", icon: "📉", card: "Loan & FD Rates", text: "RBI repo rate at 5.25% (held Jun 2026). Home loan rates dropped ~125bps — SBI now ~7.25%, HDFC ~7.75%. FD rates down ~50bps across banks. Learn pages updated.", date: "Jun 2026" },
      { type: "verified", icon: "✅", card: "Tax Slabs", text: "Budget 2025 slabs confirmed unchanged in Budget 2026. New regime ₹12.75L tax-free (salaried). Learn/tax hub recomputed.", date: "Jun 2026" },
    ],
  },
  {
    month: "April 2026",
    current: false,
    entries: [
      { type: "alert", icon: "📉", card: "Axis Airtel", text: "Major devaluation effective Apr 12. 10% limited to Zomato/Blinkit/District only (was dining/groceries/utilities). Each partner capped ₹200/mo, min order ₹499. Lounge access discontinued.", date: "Apr 2026" },
      { type: "alert", icon: "📉", card: "Axis Atlas + Magnus", text: "Transfer partners reshuffled Apr 2. Qatar Airways, Marriott Bonvoy, Accor removed. New partners (BA Avios, Vietnam Airlines, Finnair) at worse 2:1 ratio. Magnus lounge capped at 8 intl/year.", date: "Apr 2026" },
      { type: "alert", icon: "🔎", card: "HDFC Swiggy — historical correction", text: "The earlier notice combined unsupported closure dates and replacement-card pricing. September migration terms now establish phased-out status for the original card; BLCK and ORNGE have separate prices, minimums, caps and migration offers. Use the variant-specific reviews rather than the earlier notice.", date: "Apr 2026" },
      { type: "alert", icon: "🔎", card: "Scapia — historical correction", text: "The earlier notice incorrectly treated rewards exclusions as proof of lounge-spend exclusions. These are separate programmes. Current Federal-card earning and redemption rules are linked from the review; airport-privilege qualification must be checked separately.", date: "Apr 2026" },
      { type: "alert", icon: "📉", card: "IDFC FIRST Select", text: "Lounge reduced to 1 domestic/quarter (was 4). International lounge access removed. Spend conditions added.", date: "Apr 2026" },
      { type: "alert", icon: "📉", card: "SBI Cashback", text: "Total cap reduced ₹5K→₹4K per cycle. Sub-caps: ₹2K online + ₹2K offline. Digital gaming, tolls, govt transactions excluded.", date: "Apr 2026" },
    ],
  },
  {
    month: "March 2026",
    current: false,
    entries: [
      { type: "verified", icon: "✅", card: "11 Cards Verified", text: "Effective cashback rates verified from bank product pages for HDFC, SBI, ICICI, Axis, and other banks. Cap calculations confirmed.", date: "Mar 2026" },
      { type: "new", icon: "🆕", card: "50 New Cards Added", text: "Database expanded from 25 to 75 cards covering 18+ banks. New cards include Axis Magnus, HDFC Tata Neu, Scapia, HSBC Live+, Amex MRCC, and more. All marked as unverified — verification ongoing.", date: "Mar 2026" },
      { type: "new", icon: "🆕", card: "HDFC Swiggy BLCK", text: "Premium variant of HDFC Swiggy card added. 10% on Swiggy, 5% on travel/online/entertainment. Swiggy One BLCK membership included.", date: "Mar 2026" },
      { type: "update", icon: "📊", card: "HDFC Regalia", text: "An older review used higher effective-value figures without separating redemption routes. The current card record distinguishes eligible travel redemption from lower-value statement cashback and notes that new Regalia sourcing is discontinued.", date: "Mar 2026" },
      { type: "alert", icon: "⚠️", card: "Axis ACE", text: "Monthly cashback cap is ₹500 on accelerated categories (5% bills + 4% food). After cap, accelerated drops to 0%. Base 1.5% is uncapped.", date: "Mar 2026" },
      { type: "verified", icon: "📦", card: "Amazon Pay ICICI", text: "Confirmed: 5% Prime, 3% non-Prime, 2% Amazon Pay partners, 1% other. No monthly cap. Lifetime free.", date: "Mar 2026" },
      { type: "new", icon: "🚀", card: "Scapia", text: "Scapia Federal was added to the catalogue. The original broad travel/dining and 'everything else' percentages have been withdrawn: the current review separates eligible Visa, RuPay and app-booking routes, excluded categories, redemption fees and spend-conditioned airport privileges.", date: "Mar 2026" },
      { type: "alert", icon: "⚠️", card: "Axis Airtel", text: "Changes effective from April 2026: lounge access removed; Zomato, Blinkit and District Movies moved to separate 10% partner-wallet value back (up to ₹200 per partner/month). Airtel Thanks bill cashback remains 25%, capped at twice the eligible 1% base cashback earned in the same statement month; the cap is not a fixed ₹250 amount.", date: "Mar 2026" },
    ],
  },
  // Add future months here:
  // {
  //   month: "April 2026",
  //   current: true,
  //   entries: [ ... ],
  // },
];
