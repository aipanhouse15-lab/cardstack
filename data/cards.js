// ─── INDIAN CREDIT CARD CATALOGUE ───
// Only dated issuer-source reviews count as current verification. Older
// `verified` flags are retained for compatibility but are not freshness proof.
// Reward rates show effective cashback %. Partner/SmartBuy rates shown separately.
// To update: edit values below and push to GitHub. Vercel auto-deploys.

export const CARDS = [
  // ═══ LEGACY RECORDS (require a dated issuer-source review to be verified) ═══

  { id: "hdfc-regalia", name: "HDFC Regalia", bank: "HDFC", img: "💳", color: "#1a3c6e", fee: 2500, feeWaiver: "₹3L eligible spend in the card-anniversary year", type: "Premium", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/regalia-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    caps: { pointsRedemption: { flightsAndHotelsPerCalendarMonth: 50000, statementCashbackPointsPerCalendarMonth: 50000, maximumTravelShareOfBookingPercent: 70 }, maxEarnPointsPerStatementCycle: 50000, groceryEarnPerCalendarMonth: 2000, note: "Travel value assumes 1 RP = ₹0.50; statement cashback value is up to ₹0.15/RP. Eligible travel redemption covers at most 70% of booking value." },
    partnerRates: [
      { name: "SmartBuy (eligible flights/hotels and other bookings)", rate: "up to 5x Reward Points; 50,000-point monthly travel-redemption cap" },
    ],
    pointsInfo: "4 Reward Points per ₹200 on eligible retail spend. HDFC lists ₹0.50/RP for eligible flight/hotel bookings, up to ₹0.35 for products/vouchers and up to ₹0.15 for statement cashback; flight/hotel redemption is capped at 50,000 points per calendar month and grocery earning at 2,000 points/month. Fuel, rent/property-management and government transactions, e-wallet loading and EasyEMI are excluded; EMI conversion reverses points. Points expire after two years, and HDFC says 365 days without card use can nullify them.",
    highlights: ["No longer sourced for new applications; record is for existing holders", "4 Reward Points per ₹200 eligible retail spend", "Welcome: 2,500 points; renewal: 2,500 points only after fee realization and not when the fee is waived", "Annual-spend benefits: 10,000 points at ₹5L and another 5,000 at ₹8L in the same anniversary year", "Up to 2 domestic lounge vouchers/quarter after ₹1L calendar-quarter spend", "Up to 6 international Priority Pass visits/year after 4 retail transactions", "₹2,500 membership fee; waiver at ₹3L eligible anniversary-year spend"],
    pros: ["Travel-point redemption value is higher than statement cashback", "Quarterly lounge vouchers available when spend condition is met", "₹2,500 renewal fee can be waived at ₹3L anniversary-year spend"],
    cons: ["HDFC says new sourcing has been discontinued", "Lounge access is spend-conditional, not 18 guaranteed visits", "3.5% foreign-currency markup", "Fuel, rent/property-management and government transactions do not earn Reward Points", "Grocery and travel-redemption limits apply"],

    redemptionNote: "The displayed 1% base-equivalent rate assumes eligible SmartBuy flight/hotel redemption at ₹0.50 per Reward Point; reward points can cover at most 70% of eligible travel-booking value, and the balance is paid by card. Statement cashback is up to ₹0.15 per point (0.3% base equivalent) and products/vouchers up to ₹0.35. This is not a cash-equivalent value for every redemption. Grocery earning is capped at 2,000 points per calendar month and flight/hotel redemption at 50,000 points per calendar month. Welcome, renewal and annual-spend milestone points are excluded from the calculator.",
    availability: "discontinued",
    availabilityNote: "Regalia is no longer sourced for new applications. This review covers the legacy card held by existing customers, not Regalia Gold.",
    availabilityStatus: "HDFC says sourcing of this card has been discontinued. This record is for existing cardholders; check current issuer options before applying.",
    network: "Visa/MC", lounge: "Conditional: up to 2 domestic vouchers/quarter after ₹1L quarterly spend; up to 6 international visits/year after 4 card transactions",
    editorial: {
      verdict: {
        headline: "Existing-cardholder reference: Regalia sourcing is discontinued and lounge access is conditional.",
        body: `HDFC's current Regalia page says sourcing has been discontinued. This page is therefore a reference for existing cardholders, not a recommendation to apply. The published base earn is 4 Reward Points per ₹200 eligible retail spend. At the issuer's ₹0.50 flight/hotel redemption value that is a 1% equivalent; statement cashback at ₹0.15 per point is 0.3%. Eligible SmartBuy multipliers are separate and subject to terms.

The ₹2,500 renewal fee is waived at ₹3 lakh anniversary-year spend. Domestic lounge vouchers require ₹1 lakh spend in the calendar quarter; international Priority Pass access has separate transaction conditions. This card record has not yet had a complete dated review of all issuer terms, so confirm your own card's current terms with HDFC.`,
        idealFor: "Existing Regalia cardholders checking the currently published fee, reward and lounge terms.",
        skipIf: "You are looking to apply for a new Regalia card, or need lounge access without quarterly spend conditions.",
      },
      capMath: {
        title: "Regalia: availability and conditions to re-check",
        body: `HDFC currently says sourcing for new customers has been discontinued. Existing cardholders should check their own terms for renewal fees, eligible spends and redemption options.

The issuer lists 4 Reward Points per ₹200 eligible retail spend. Redemption value depends on the option: ₹0.50 per point for eligible flights/hotels and ₹0.15 for statement cashback. SmartBuy earn multipliers and travel redemption caps are not the same thing as a flat cashback rate.

Domestic lounge vouchers require ₹1 lakh spend per calendar quarter. International lounge access is subject to Priority Pass and transaction conditions.`,
      },
      bestFor: [
        { category: "Existing cardholder reference", reason: "Use this page to check the issuer-listed fee, reward and conditional lounge terms; confirm your account-specific terms with HDFC." },
      ],
      avoidFor: [
        { category: "New applications", reason: "HDFC says sourcing of this card has been discontinued." },
      ],
      pairWith: [
        { combo: "Regalia + HDFC Millennia", fee: "₹3,500/year", reason: "Regalia for travel/SmartBuy/lounges, Millennia for Swiggy/Amazon/Flipkart at 5%. Covers both premium travel and everyday online spending.", cardId: "hdfc-millennia" },
        { combo: "Regalia + Axis ACE", fee: "₹2,999/year", reason: "Regalia for travel and partner brands, ACE for utility bills (5%) and all-round spending (1.5% uncapped). The ACE fills Regalia's biggest gaps.", cardId: "axis-ace" },
        { combo: "Regalia + Amazon Pay ICICI", fee: "₹2,500/year", reason: "For existing Regalia holders who shop on Amazon: compare Amazon Pay ICICI's eligible Prime rate with Regalia's redemption-dependent points. Regalia is no longer sourced for new applications.", cardId: "amazon-icici" },
      ],
      faq: [
        { q: "Can I apply for HDFC Regalia?", a: "HDFC's current product page says sourcing has been discontinued. Check directly with HDFC for any product or upgrade availability." },
        { q: "What is Regalia's base reward rate?", a: "HDFC lists 4 Reward Points per ₹200 eligible retail spend. Point value varies by redemption: the issuer lists ₹0.50 for eligible flights/hotels and ₹0.15 for statement cashback. SmartBuy offers and exclusions are conditional." },
        { q: "HDFC Regalia vs Infinia — which is better?", a: "They have different eligibility, fees, reward redemption options and lounge conditions. Regalia sourcing is discontinued and Infinia is invitation-only; compare the current issuer terms if you already hold either card." },
        { q: "Does Regalia earn points on rent payments?", a: "Eligibility can depend on current issuer exclusions and the transaction's merchant category. Confirm rent-related terms with HDFC; this page has not independently rechecked that detail." },
        { q: "Is Regalia lounge access unconditional?", a: "No. Domestic lounge vouchers require at least ₹1 lakh eligible spend in a calendar quarter, and international Priority Pass access has separate transaction conditions. Confirm guest and visit rules with HDFC before travel." },
      ],
    },
  },

  { id: "hdfc-infinia", name: "HDFC Infinia", bank: "HDFC", img: "💎", color: "#1a1a2e", fee: 12500, feeWaiver: "₹10L eligible spend in the preceding 12 months", type: "Super Premium", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/infinia-credit-card",
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 3.33, fuel: 0, utilities: 3.33, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    caps: { pointsRedemption: { flightsAndHotelsPerCalendarMonth: 150000, statementCashbackPerCalendarMonth: 50000, maximumTravelShareOfBookingPercent: 70 }, note: "Travel/cashback redemption limits are separate from the 200,000-point statement-cycle earning ceiling." },
    partnerRates: [
      { name: "SmartBuy eligible travel and shopping", rate: "up to 10x Reward Points; redemption limits apply" },
    ],
    pointsInfo: "5 Reward Points/₹150 eligible retail spend, including insurance, utilities and education; fuel, rent/property-management and government transactions, e-wallet loading and EasyEMI are excluded, and EMI conversion reverses points. 1 RP = ₹1 on eligible flights/hotels (3.33% base equivalent) or ₹0.30 statement cashback (1% base equivalent). Travel/airmiles redemptions cap at 1.5L points/calendar month; statement cashback at 50,000 points/calendar month; total redemption at 2L points/statement cycle. Flight/hotel, Apple and Tanishq redemption requires card co-payment under the issuer terms.",
    highlights: ["Invitation-only; issuer lists unlimited domestic and international lounge access for primary/add-on cardholders", "5 Reward Points per ₹150 eligible retail spend", "12,500 welcome points on fee realization and card activation; first-year Club Marriott membership", "Renewal benefit: 12,500 points after fee realization/activation; fee waiver at ₹10L eligible spend in the preceding 12 months", "Up to 10x Reward Points on eligible SmartBuy spends; terms apply"],
    pros: ["Strong travel redemption value on eligible flights and hotels", "Unlimited eligible lounge access for primary and add-on cardholders", "₹12,500 renewal-fee waiver available at ₹10L spend"],
    cons: ["Invitation-only", "₹12,500 + GST fee if renewal condition is not met", "Statement cashback is worth ₹0.30/RP, not ₹1/RP", "Fuel, rent/property-management and government transactions do not earn Reward Points", "Insurance reward points have a separate monthly cap"],

    redemptionNote: "The displayed 3.33% base-equivalent rate assumes eligible flight/hotel redemption at ₹1 per Reward Point. Statement cashback is ₹0.30 per point (1% effective base). SmartBuy and monthly redemption caps apply.",
    network: "Visa", lounge: "Unlimited",
    editorial: {
      verdict: {
        headline: "The best credit card in India — if you can get it. Invite-only and worth every rupee.",
        body: `HDFC Infinia is invitation-only. It earns 5 Reward Points per ₹150 eligible retail spend. At ₹1 per point for eligible flights/hotels, that is a 3.33% base equivalent; statement cashback at ₹0.30 per point is a 1% equivalent. SmartBuy multipliers are conditional, not a guaranteed flat return.

The ₹12,500 renewal fee is waived after ₹10 lakh spend in the preceding 12 months. Redemption caps apply, including 2 lakh points per statement cycle, 1.5 lakh points/month for travel and airmiles, and 50,000 points/month for statement cashback. This record still needs a complete dated review of all issuer terms; confirm eligibility and exclusions with HDFC.`,
        idealFor: "Eligible invited cardholders who understand the redemption options, caps and renewal-fee threshold.",
        skipIf: "You need a card that can be applied for publicly or cannot meet its annual fee after applicable waiver conditions.",
      },
      bestFor: [
        { category: "Eligible base spending", reason: "5 Reward Points per ₹150 eligible retail spend; equivalent value depends on redemption option and exclusions." },
        { category: "Eligible SmartBuy travel", reason: "HDFC advertises up to 10x Reward Points on eligible SmartBuy spends; multiplier eligibility and redemption limits apply." },
        { category: "Eligible flight/hotel redemption", reason: "HDFC lists ₹1 per point on eligible flights/hotels, subject to redemption limits and booking terms." },
        { category: "Lounge access", reason: "HDFC lists unlimited domestic and international lounge access for primary and add-on cardholders; check current access terms." },
      ],
      avoidFor: [
        { category: "Statement cashback", reason: "The issuer lists ₹0.30 per point for statement cashback (1% base equivalent), lower than eligible flight/hotel redemption." },
        { category: "Fee waiver threshold", reason: "The ₹12,500 renewal fee waiver requires ₹10 lakh spend in the preceding 12 months." },
      ],
      pairWith: [
        { combo: "Infinia + Axis ACE", fee: "₹12,999/year", reason: "Infinia for high-value spends and travel, ACE for utility bills (5% via GPay) and small everyday purchases (1.5% uncapped).", cardId: "axis-ace" },
        { combo: "Infinia + Amazon Pay ICICI", fee: "₹12,500/year", reason: "Amazon card's 5% with no cap beats Infinia's 3.33% on Amazon specifically. Use Infinia for everything else.", cardId: "amazon-icici" },
      ],
      faq: [
        { q: "How do I get an HDFC Infinia invite?", a: "Maintain a high HDFC savings balance (₹10L+ reported by most cardholders), have a strong HDFC relationship, or hold a Regalia/Diners Black and spend heavily. There's no public application — HDFC reaches out." },
        { q: "Can the ₹12,500 renewal fee be waived?", a: "HDFC lists a renewal-fee waiver at ₹10 lakh spend in the preceding 12 months. Check the current issuer terms for eligible spend and timing." },
        { q: "HDFC Infinia vs Diners Black — which is better?", a: "Compare eligibility, fee-waiver thresholds, network acceptance, redemption choices and current issuer benefits. This site has not completed a full side-by-side dated review of both cards." },
        { q: "What are Infinia's redemption limits?", a: "HDFC lists a maximum 2 lakh points per statement cycle, with separate monthly limits of 1.5 lakh points for travel/airmiles and 50,000 points for statement cashback. These are redemption limits, not an earning cap." },
      ],
    },
  },

  { id: "hdfc-millennia", name: "HDFC Millennia", bank: "HDFC", img: "✨", color: "#7c3aed", fee: 1000, feeWaiver: "₹1L annual spend", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/millennia-credit-card",
    rewardAssumptions: { dining: "Only eligible Swiggy/Zomato transactions, not all restaurants.", online: "Only the ten listed online merchants; not all online shopping. SmartBuy/PayZapp transactions follow separate rules.", entertainment: "Only eligible listed merchants such as BookMyShow/Sony LIV/Cult.fit.", shopping: "Only eligible purchases at the listed online merchants, not ordinary in-store shopping." },
    redemptionNote: "Estimates use statement credit at ₹1 per CashPoint, before the ₹50 redemption fee and applicable tax. A minimum balance of 500 CashPoints is required; statement-credit redemption is capped at 3,000 points per calendar month. Travel/catalogue redemption is ₹0.30 per point. CashPoints expire after two years.",
    rewards: { dining: 5, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 5, shopping: 5, default: 1 },
    caps: { cashbackPerCalendarMonth: { eligiblePartnerSpends: 1000, otherEligibleSpends: 1000 }, capPeriod: "calendar month", capAppliesTo: ["Amazon", "BookMyShow", "Cult.fit", "Flipkart", "Myntra", "Sony LIV", "Swiggy", "Tata CLiQ", "Uber", "Zomato"] },
    partnerRates: [
      { name: "Swiggy, Zomato", rate: "5% cashback" },
      { name: "Amazon, Flipkart, Myntra", rate: "5% cashback" },
      { name: "Tata CLiQ, Uber, BookMyShow, Sony LIV, Cult.fit", rate: "5% cashback" },
    ],
    pointsInfo: "5% CashPoints on 10 listed online merchants (₹1,000 per calendar-month cap); 1% on other eligible spends (separate ₹1,000 per-month cap); statement redemption 1 CashPoint = ₹1. The current card-specific terms state no minimum transaction value; merchant IDs and settlement timing govern eligible posting.",
    highlights: ["5% on 10 listed online merchants", "Separate ₹1,000 caps per calendar month", "₹1L quarterly milestone: choose ₹1,000 voucher or 1 lounge voucher", "1,000 welcome CashPoints if the joining membership fee is paid", "₹1L renewal-fee waiver spend"],
    pros: ["5% on 10 named online merchants", "₹1,000 renewal fee waived at ₹1L annual spend", "Quarterly milestone includes lounge-voucher choice"],
    cons: ["₹1,000 cap per calendar month on each cashback bucket", "Quarterly lounge access is an option, not automatic", "Fuel and some transaction types excluded"],
    network: "Visa/MC", lounge: "Optional 1 lounge voucher at ₹1L eligible spend per calendar quarter",

    editorial: {
      verdict: {
        headline: "A low-fee online card with capped CashPoints and a quarterly milestone choice.",
        body: `HDFC currently lists 5% CashPoints on ten named online merchants, subject to a ₹1,000 cap per calendar month for that bucket. Other eligible spends earn 1%, with a separate ₹1,000-per-month cap. These are issuer-defined cashback points, not unlimited cashback.

The ₹1,000 annual renewal fee is waived on ₹1 lakh eligible annual spend. A separate quarterly milestone at ₹1 lakh spend offers a choice between a ₹1,000 voucher and one domestic lounge voucher; lounge access is not automatic. Check exclusions and your billing-cycle dates in the latest issuer terms.`,
        idealFor: "Applicants who use the listed online merchants, can stay within the monthly caps, and value the ₹1 lakh annual fee-waiver threshold.",
        skipIf: "You need uncapped cashback, or you expect four guaranteed lounge visits each year. Lounge access is an optional voucher tied to quarterly spending.",
      },
      capMath: {
        title: "Millennia cashback buckets and quarterly milestone",
        body: `HDFC lists 5% CashPoints on Amazon, BookMyShow, Cult.fit, Flipkart, Myntra, Sony LIV, Swiggy, Tata CLiQ, Uber and Zomato, capped at ₹1,000 per calendar month. Other eligible spends earn 1%, with a separate ₹1,000 cap per calendar month. Once a bucket reaches its cap, do not assume additional eligible spend earns the headline rate; check the latest card terms.

At ₹1 lakh eligible spend in a calendar quarter, choose either a ₹1,000 voucher or one domestic airport lounge voucher. It is a choice between benefits, not four automatic lounge visits per year.`,
      },
      bestFor: [
        { category: "Swiggy & Zomato orders", reason: "5% is the highest cashback rate on food delivery among entry-level cards. Even the Axis Flipkart card only gives 4% on Swiggy." },
        { category: "Amazon & Flipkart purchases", reason: "5% matches the Amazon Pay ICICI card on Amazon (for Prime members), and beats it on Flipkart. If you shop on both platforms, Millennia is more versatile." },
        { category: "BookMyShow, Sony LIV, Cult.fit", reason: "Entertainment and lifestyle spends that most cards give 1% on. Getting 5% here is genuine found money." },
        { category: "Listed online merchants", reason: "Earn 5% CashPoints, subject to the issuer's ₹1,000-per-calendar-month bucket cap." },
      ],
      avoidFor: [
        { category: "Groceries", reason: "Millennia gives 1% on groceries. SBI Card ELITE gives 2.5%. Even ICICI Coral's Culinary Treats gives better dining/grocery value.", altCard: "sbi-elite" },
        { category: "Fuel", reason: "Fuel is excluded from this card's rewards. Compare a dedicated fuel card and its surcharge-waiver terms rather than assuming a general-spend rate applies." },
        { category: "Utility bills", reason: "1% on Millennia vs 5% on Axis ACE via Google Pay. If your electricity bill is ₹3,000/month, that's ₹150 vs ₹30.", altCard: "axis-ace" },
        { category: "Spend after the cashback bucket cap", reason: "The issuer caps cashback in monthly buckets; compare another card for additional eligible spend.", altCard: "axis-ace" },
        { category: "Travel", reason: "Compare your actual travel redemption value and eligibility; Regalia is no longer sourced for new applications." },
      ],
      pairWith: [
        { combo: "Millennia + Axis ACE", fee: "₹1,499/year, both waivable", reason: "A possible two-card setup: use each only for its eligible partner or payment route, and compare combined fees and shared-category caps against your own spending.", cardId: "axis-ace" },
        { combo: "Millennia + Amazon Pay ICICI", fee: "₹1,000/year", reason: "If you're a heavy Amazon shopper, the Amazon card's 5% for Prime members has no earnings cap. Use Millennia for its listed partner merchants and the Amazon card for eligible Amazon purchases.", cardId: "amazon-icici" },
        { combo: "Millennia + SBI ELITE", fee: "₹5,999/year", reason: "Compare current SBI ELITE reward and movie-benefit terms before pairing it with Millennia; this pairing has not been fully revalidated.", cardId: "sbi-elite" },
      ],
      faq: [
        { q: "Does HDFC Millennia cashback work on small Swiggy orders?", a: "HDFC's public product summary lists Swiggy among the 5% merchants. Transaction eligibility and exclusions can depend on the posted transaction and current issuer terms; check those terms before relying on a minimum-spend assumption." },
        { q: "Is HDFC Millennia cashback real cashback or reward points?", a: "It's CashPoints, which are HDFC's version of cashback. They're automatically credited and can be redeemed against your statement or converted to rewards. The effective value is 1:1 — ₹1 CashPoint = ₹1." },
        { q: "Can I get the HDFC Millennia fee waived?", a: "Yes. Spend ₹1 lakh in a year (roughly ₹8,300/month) and the ₹1,000 annual fee is waived for the next year. Most regular users hit this without trying." },
        { q: "Is HDFC Millennia better than Amazon Pay ICICI?", a: "For eligible Amazon India purchases, Amazon Pay ICICI earns 5% for Prime members with no earnings limit, while Millennia lists 5% on ten named merchants subject to a ₹1,000 calendar-month cap. Compare your likely spend and each card's exclusions." },
        { q: "How do the Millennia cashback caps work?", a: "HDFC lists a ₹1,000 calendar-month cap for the 5% merchant bucket and a separate ₹1,000 cap per month for other eligible spends. The cap period is not your billing cycle; check current issuer terms for exclusions." },
      ],
    },
  },

  { id: "hdfc-diners-black", name: "HDFC Diners Black", bank: "HDFC", img: "🖤", color: "#111827", fee: 10000, feeWaiver: "₹5L eligible spend in the preceding 12 months", type: "Super Premium", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/diners-club-black-credit-card",
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 3.33, fuel: 0, utilities: 3.33, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    caps: { pointsRedemption: { maximumTravelShareOfBookingPercent: 70 }, note: "HDFC terms limit flight/hotel points redemption to up to 70% of booking value." },
    partnerRates: [
      { name: "SmartBuy eligible flights/hotels", rate: "up to 10x Reward Points; terms and redemption limits apply" },
    ],
    pointsInfo: "5 Reward Points/₹150 eligible retail spend. 1 RP = ₹1 on eligible flights/hotels, up to ₹0.50 for products/vouchers or ₹0.30 for cashback; eligible travel redemption is limited to 70% of booking value. Travel/airmiles redemptions cap at 75,000 points/calendar month, total redemption at 2L/statement cycle and statement cashback at 50,000/calendar month. Fuel is excluded; insurance-earned points have a separate 5,000-point monthly cap.",
    highlights: ["Applications are not currently accepted; record is for existing holders", "5 Reward Points per ₹150 eligible retail spend; up to 10x on eligible SmartBuy travel", "Unlimited domestic and international lounge access for primary/add-on cardholders", "Two-times Reward Points on weekend dining at participating restaurants; 6 complimentary golf games per quarter", "₹10,000 + GST renewal fee waived at ₹5L eligible spend in the preceding 12 months", "Issuer lists complimentary annual memberships at ₹8L anniversary-year spend; participating memberships have separate terms"],
    pros: ["Strong eligible travel redemption value", "Unlimited eligible lounge access", "Renewal-fee waiver threshold listed at ₹5L"],
    cons: ["Applications are not currently accepted", "Diners Club acceptance varies by merchant", "₹10K + GST fee unless waiver condition is met", "2% foreign-currency markup", "Fuel excluded", "Travel points cover at most 70% of eligible booking value"],

    redemptionNote: "The displayed 3.33% base-equivalent rate assumes eligible flight/hotel redemption at ₹1 per Reward Point. Cashback is up to ₹0.30 per point (1% equivalent). Flight/hotel redemption is limited to up to 70% of booking value; SmartBuy multipliers and other terms apply.",
    network: "Diners Club", lounge: "Unlimited",
    availability: "closed",
    availabilityNote: "Applications for this legacy Diners Black variant are not currently accepted. Diners Black Metal is a different product; existing-holder calculations here must not be used to recommend a new card.",
    availabilityStatus: "HDFC says applications for this card are not currently being accepted. This record is for existing cardholders; confirm current availability and terms with HDFC.",

    editorial: {
  verdict: {
    headline: "Existing-cardholder reference: applications are closed and full terms remain under review.",
    body: `HDFC currently says applications for Diners Club Black are not being accepted. This reference is therefore intended for existing cardholders, not as an invitation to apply. HDFC lists 5 Reward Points per ₹150 eligible retail spend, with 1 point worth ₹1 on eligible flights/hotels or up to ₹0.30 as cashback. Flight/hotel points can cover up to 70% of booking value.

The renewal fee is ₹10,000 plus tax and is waived at ₹5 lakh annual spend. The issuer lists unlimited domestic and international lounge access for primary and add-on cardholders. The card earns up to 10x on eligible SmartBuy travel; it is not a 33% flat return. This record still needs a complete dated review, so verify current cardholder terms with HDFC.`,
    idealFor: "Existing Diners Club Black cardholders checking currently listed issuer terms.",
    skipIf: "You are looking to apply now; HDFC says applications are not currently being accepted.",
  },
  capMath: {
    title: "Diners Club Black: current issuer terms to note",
    body: `HDFC says applications are not currently being accepted. Its current product information lists 5 Reward Points per ₹150 eligible retail spend and up to 10x on eligible SmartBuy travel; accelerated earnings are subject to offer terms.

For eligible flights and hotels, 1 point is valued at ₹1, but points can cover up to 70% of booking value. Cashback is up to ₹0.30 per point. HDFC lists a ₹10,000 + tax fee and a renewal waiver at ₹5 lakh annual spend.

HDFC lists unlimited domestic and international lounge access. Memberships and other add-on benefits may have separate eligibility and spend conditions; check current terms before relying on them.`,
  },
  bestFor: [
    { category: "Eligible SmartBuy travel", reason: "HDFC advertises up to 10x Reward Points on eligible travel; actual value depends on redemption and booking terms." },
    { category: "Eligible travel redemption", reason: "The issuer lists ₹1 per point for eligible flights/hotels, subject to the 70%-of-booking-value redemption limit." },
    { category: "Eligible base spending", reason: "5 Reward Points per ₹150 eligible retail spend; point value depends on redemption choice and exclusions." },
    { category: "Lounge access", reason: "Unlimited domestic and international — no visit caps. Best lounge access per rupee of annual fee." },
  ],
  avoidFor: [
    { category: "Small merchants and toll plazas", reason: "Diners Club isn't accepted at many small businesses, toll booths, and some POS terminals. Keep a Visa/MC backup.", altCard: "axis-ace" },
    { category: "Fuel", reason: "0% rewards on fuel, consistent across HDFC cards.", altCard: "rbl-shoprite" },
    { category: "Online food delivery", reason: "While 3.33% is decent, HDFC Millennia gives 5% on Swiggy/Zomato. Use Millennia for food, Diners Black for everything else.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "Diners Black + Axis ACE", fee: "₹10,499/year", reason: "Diners Black for high-value spends and travel. ACE as your Visa backup for merchants that don't take Diners, plus 5% on utility bills.", cardId: "axis-ace" },
    { combo: "Diners Black + HDFC Millennia", fee: "₹11,000/year", reason: "Diners Black for everything above ₹500, Millennia for Swiggy/Amazon at 5%. Millennia also serves as your Visa/MC backup.", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "Where does Diners Club NOT work in India?", a: "Toll plazas (FASTag works on all networks but POS doesn't), some small restaurants, local shops, and a few government payment portals. Most large retailers and all major online merchants accept it." },
    { q: "Can I apply for Diners Club Black now?", a: "HDFC's current product page says applications are not currently being accepted. Check with HDFC for any changes or upgrade options." },
    { q: "Can the ₹10,000 renewal fee be waived?", a: "HDFC lists a renewal-fee waiver after ₹5 lakh annual spend. Check the applicable cardholder terms for eligible spend and timing." },
    { q: "Does Diners Black work for international payments?", a: "Diners Club/Discover network works at most international merchants, especially in the US, Japan, and Europe. Coverage is similar to Amex — good but not as universal as Visa/MC." },
  ],
},
  },

  { id: "hdfc-swiggy", name: "HDFC Swiggy Card", bank: "HDFC", img: "🍕", color: "#fc8019", fee: 500, feeWaiver: "₹2L annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/swiggy-hdfc-bank-credit-card",
    availability: "phasing-out",
    availabilityNote: "HDFC is phasing out this original variant and migrating eligible holders in stages to ORNGE or BLCK. Your bank communication sets your migration date and offer; these estimates describe the original card before migration.",
    availabilitySourceUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/swiggy-hdfc-bank-credit-card/pdf/faq-swiggy-migration-29-09-2026.pdf",
    rewardAssumptions: { dining: "Only eligible Swiggy Food Delivery/Instamart/Dineout transactions of ₹249 or more, not all restaurants or Zomato.", online: "Only issuer-listed online merchants/MCCs, with each transaction ₹100 or more.", entertainment: "Only eligible online transactions of ₹100 or more at listed merchants/MCCs.", shopping: "Only eligible online transactions of ₹100 or more; offline shopping uses the other-spend tier.", travel: "This row assumes eligible base-rate travel, not the separate Cleartrip online offer." },
    rewards: { dining: 10, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 5, shopping: 5, default: 1 },
    caps: { cashbackPerBillingCycle: { swiggyApp: 1500, eligibleOnlineCategories: 1500, otherEligibleCategories: 500 }, capPeriod: "billing cycle", minimumTransaction: { swiggyApp10Percent: 249, otherCashbackTiers: 100 }, capAppliesTo: ["Swiggy app", "eligible online categories", "other eligible categories"] },
    partnerRates: [
      { name: "Eligible Swiggy app transactions", rate: "10% cashback; ₹1,500/billing cycle; ₹249 minimum per transaction" },
      { name: "Eligible online merchants/MCCs", rate: "5%; separate ₹1,500/billing cycle; ₹100 minimum per transaction" },
    ],
    pointsInfo: "10% Swiggy app (₹1,500/billing-cycle cap; ₹249 minimum); 5% on eligible online categories (separate ₹1,500 cap); 1% on other eligible categories (₹500 cap; ₹100 minimum)",
    highlights: ["10% on eligible Swiggy app transactions (₹1,500 cap/cycle; ₹249 minimum)", "5% on eligible online categories (separate ₹1,500 cap/cycle)", "1% other eligible spends (₹500 cap/cycle)", "₹500 fee; renewal waived at ₹2L annual spend"],
    pros: ["10% on eligible Swiggy app transactions", "5% on issuer-listed online categories", "₹500 renewal fee can be waived at ₹2L eligible annual spend"],
    cons: ["Separate billing-cycle cashback caps apply", "₹249 minimum for the 10% Swiggy tier; ₹100 for other tiers", "Exclusions apply; confirm eligibility by merchant category"],
    network: "Mastercard World", lounge: "None",

    editorial: {
  verdict: {
    headline: "High cashback tiers for eligible Swiggy and online spends, each with its own cap.",
    body: `HDFC's current terms list 10% cashback on eligible Swiggy app transactions (₹1,500 cap per billing cycle), 5% on specified online categories (a separate ₹1,500 cap), and 1% on other eligible categories (₹500 cap). A ₹249 minimum applies to the 10% Swiggy tier; a ₹100 minimum applies to other cashback tiers. Swiggy Money Wallet, Liquor and Minis are excluded, and other eligibility rules apply.

The annual fee is ₹500 and HDFC lists a renewal waiver at ₹2 lakh eligible annual spend. Check the current issuer terms for category definitions and exclusions before applying.`,
    idealFor: "People who use eligible Swiggy app services and can benefit from the 10% tier while staying within its billing-cycle cap.",
    skipIf: "You mostly use excluded Swiggy services or want the 10% rate on transactions below ₹249. Compare eligible online spend categories and their separate caps before choosing this card.",
  },
  capMath: {
    title: "Swiggy HDFC cashback tiers and minimums",
    body: `HDFC's current terms list separate billing-cycle caps: ₹1,500 on eligible Swiggy app transactions at 10%, ₹1,500 on specified online categories at 5%, and ₹500 on other eligible categories at 1%. These are separate buckets, not one shared ₹1,500 cap.

The 10% Swiggy tier requires a transaction of at least ₹249. The other cashback tiers have a ₹100 minimum. Exclusions include Swiggy Money Wallet, Swiggy Liquor and Swiggy Minis; issuer terms may include further exclusions.`,
  },
  bestFor: [
    { category: "Eligible Swiggy app spends of ₹249 or more", reason: "The issuer's current terms list 10% cashback, subject to a ₹1,500 billing-cycle cap." },
    { category: "Online shopping", reason: "5% on online purchases is competitive with HDFC Millennia when you haven't hit the shared cap." },
    { category: "Budget-conscious food delivery users", reason: "₹500 annual fee waivable at ₹2L spend. If Swiggy is your primary spend, the rewards far exceed the fee." },
  ],
  avoidFor: [
    { category: "Zomato orders", reason: "The 10% rate is Swiggy-exclusive. Zomato falls under general dining at lower rates. If you use both platforms, HDFC Millennia's 5% on both is better.", altCard: "hdfc-millennia" },
    { category: "Offline dining", reason: "Restaurant bills don't get 10% — only Swiggy orders do. For restaurant spending, look at SBI ELITE's 2.5% or BOB Eterna's 3.75%.", altCard: "sbi-elite" },
    { category: "Groceries and utilities", reason: "1% on groceries and 0% on utilities. You need a separate card for these categories.", altCard: "axis-ace" },
  ],
  pairWith: [
    { combo: "HDFC Swiggy + Axis ACE", fee: "₹999/year", reason: "Swiggy card for food delivery, ACE for utilities (5%), Zomato overflow (4%), and everything else (1.5% uncapped). Total fee under ₹1K.", cardId: "axis-ace" },
    { combo: "HDFC Swiggy + Amazon Pay ICICI", fee: "₹500/year", reason: "Swiggy card for food delivery, Amazon card for Amazon shopping (5%, no cap). Both low-cost, high-value for online spenders.", cardId: "amazon-icici" },
  ],
  faq: [
    { q: "Does HDFC Swiggy card give 10% on Instamart?", a: "HDFC lists Instamart among eligible Swiggy app transactions, subject to the ₹249 minimum for the 10% tier and the applicable exclusions and cap." },
    { q: "What is the minimum transaction for the 10% cashback?", a: "HDFC's current terms require at least ₹249 for the 10% Swiggy app tier. Other cashback tiers have a ₹100 minimum." },
    { q: "HDFC Swiggy vs HDFC Millennia for food delivery?", a: "If you use only Swiggy and spend under ₹15K/month on it, the Swiggy card wins (10% vs 5%). If you use Swiggy AND Zomato, Millennia is more versatile since it covers both at 5%." },
  ],
},
  },

  { id: "sbi-simplyclick", name: "SBI SimplyCLICK", bank: "SBI", img: "🛒", color: "#1d4ed8", fee: 499, feeWaiver: "Renewal fee waived at ₹1L eligible spend in the preceding 365 days", type: "Online", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/simplyclick-sbi-card.html", rewardSourceUrl: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/SimplyClick-TnC.pdf",
    rewards: { dining: 0.25, travel: 0.25, online: 1.25, groceries: 0.25, fuel: 0, utilities: 0.25, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    partnerRates: [
      { name: "Apollo 24/7, BookMyShow, Cleartrip, Domino's, GyFTR, IGP, Myntra, Netmeds, Swiggy and Yatra (as listed in the card-specific terms)", rate: "10x reward points, subject to eligible merchant IDs and channel rules" },
      { name: "Other eligible online spends", rate: "5x reward points" },
    ],
    caps: { rewardPointsPerMonth: { otherOnline: 10000, exclusivePartners: 10000 }, capPeriod: "calendar month", capDescription: "5X other-eligible-online and 10X listed-partner rewards have separate 10,000-point calendar-month caps; after each accelerated cap, eligible spend earns 1 point/₹100." },
    pointsInfo: "1 point/₹100 other eligible spend; 5 points/₹100 eligible online and 10 points/₹100 on listed exclusive partners. The card-specific terms list Apollo 24/7, BookMyShow, Cleartrip, Domino's, GyFTR, IGP, Myntra, Netmeds, Swiggy and Yatra; SBI's product video names a different set, so this page follows the dated card-specific terms. The 5X other-online and 10X listed-partner buckets each cap at 10,000 points per calendar month; eligible spend after either cap earns 1 point/₹100. 10X partner earn requires INR payment and an eligible merchant MID; Cleartrip/Yatra affiliate transactions are excluded. The issuer relies on correct online identifiers and merchant classification. Rent (MCC 6513), government (9399/9311), digital gaming (5816, 7993, 7994), cash advance, balance transfer, Encash, Flexipay and offline fuel do not earn points; wallet loading at partner MCCs 6540/6541 is excluded. SBI Card-platform utility bill payments do not earn 5X. GyFTR voucher purchases earn 10X only on its SimplyCLICK portal. Points redeem for partner e-vouchers, cannot pay card outstanding, and expire after 24 months. The ₹500 Amazon Pay welcome gift is conditional on paying the ₹499 first-year membership fee and maintaining an eligible account in good standing.",
    redemptionNote: "Voucher-equivalent value, not cash paid to your bank account. ₹500 Amazon voucher / 2,000 points = ₹0.25 per point. This is one illustrated catalogue choice, not a universal point value; Swiggy is listed at 10X in the card-specific reward terms, but actual eligibility depends on merchant identification and channel rules.",
    calculationSourceUrl: "https://www.sbicard.com/en/personal/rewards/amazon-e-voucher-rs-500-click",
    highlights: ["10X points on partners listed in the card-specific terms; 5X on other eligible online spend", "Separate 10,000-point monthly caps; base earn continues after each cap", "₹499 fee; renewal waiver at ₹1L eligible spend in the preceding 365 days", "₹2,000 Cleartrip or Yatra voucher at each ₹1L and ₹2L annual online-spend milestone; SBI Card selects the brand", "₹500 Amazon Pay welcome gift after paying the first-year ₹499 membership fee"],
    pros: ["10X points on eligible listed partners, subject to merchant IDs and exclusions", "5X points on other eligible online spend, subject to issuer online identifiers", "₹1L renewal-fee waiver threshold on eligible preceding-year spend"],
    cons: ["Reward points are redeemed as partner e-vouchers, not statement cash", "Separate accelerated-point caps and transaction exclusions apply", "No lounge access listed"],
    network: "Visa/MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "Voucher-point earning with separate rates for eligible online purchases and listed partners.",
    body: `SBI SimplyCLICK earns 5 Reward Points per ₹100 on eligible non-partner online purchases and 10 points per ₹100 at listed exclusive partners. The 10X tier depends on eligible merchant IDs and INR payment; affiliate Cleartrip/Yatra transactions do not qualify. At the illustrative ₹0.25 per point value of SBI Card's ₹500 Amazon voucher for 2,000 points, the two rates correspond to 1.25% and 2.5% in voucher value—not statement cashback. Each accelerated bucket has a separate 10,000-point calendar-month cap; eligible spend after the cap earns 1 point/₹100. Reward exclusions and merchant classification apply. Annual online-spend milestones provide ₹2,000 Cleartrip or Yatra vouchers at ₹1 lakh and ₹2 lakh; SBI Card chooses the brand.

    The joining/annual fee is ₹499. SBI's key fact statement lists a renewal-fee waiver at ₹1 lakh eligible spend in the preceding year. Compare merchants you actually use, redemption options and fees; a partner headline rate is not a universal online rate.`,
    idealFor: "People whose online spending matches the issuer's listed SimplyCLICK partners and who are comfortable redeeming e-vouchers. Check the card-specific terms for the dated partner list and channel conditions.",
    skipIf: "You need statement cashback, or your spending does not fit SBI's eligible online and named-partner categories; rewards are voucher points and exclusions apply.",
  },
  bestFor: [
    { category: "Listed exclusive partners", reason: "10 points/₹100 on eligible transactions at named partners; value depends on voucher redemption and a separate monthly points cap." },
    { category: "Other eligible online purchases", reason: "5 points/₹100, illustratively 1.25% at the ₹0.25-per-point Amazon voucher value; exclusions and the 10,000-point monthly bucket cap apply." },
    { category: "Applicants comparing a low-fee SBI rewards card", reason: "Compare the ₹499 fee, renewal waiver and voucher redemption against eligible spending; approval and eligibility are set by SBI Card." },
  ],
  avoidFor: [
    { category: "Primarily offline spending", reason: "The generic base earn is 1 point/₹100 (illustratively ₹0.25 at the selected Amazon voucher value); compare a card with stronger rewards on your eligible offline categories.", altCard: "axis-ace" },
    { category: "Statement cashback", reason: "SimplyCLICK rewards are voucher points, not cash credited to the statement." },
  ],
  pairWith: [
    { combo: "SimplyCLICK + Amazon Pay ICICI", fee: "₹499/year before taxes, subject to issuer fee/offer terms", reason: "Use each card only for qualifying merchants: SimplyCLICK rewards are vouchers; Amazon Pay ICICI's rate depends on Prime status and eligible Amazon transactions.", cardId: "amazon-icici" },
    { combo: "SimplyCLICK + a card for offline spend", fee: "Fees depend on the second card", reason: "SimplyCLICK's generic offline value is low; compare the other card's eligible transactions, caps and redemption route before pairing.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "What are SimplyCLICK's online reward rates worth?", a: "SBI Card lists 5 points/₹100 on eligible online purchases and 10 points/₹100 at named exclusive partners. At ₹0.25 per point for the ₹500 Amazon voucher, these equal 1.25% and 2.5% before rounding; they are voucher values, not statement cashback." },
    { q: "How do I redeem SimplyCLICK reward points?", a: "SBI Card's SimplyCLICK terms provide redemption for partner e-gift vouchers in its rewards catalogue; points cannot be used to pay the card outstanding. The ₹0.25-per-point figure is an example based on the listed ₹500 Amazon voucher for 2,000 points, not a guaranteed value for every catalogue reward." },
    { q: "Can I upgrade from SimplyCLICK to SBI Cashback?", a: "Upgrade availability and eligibility are determined by SBI Card; holding SimplyCLICK does not guarantee an upgrade. Check your account or ask SBI Card." },
  ],
},
  },

  { id: "sbi-cashback", name: "SBI Cashback Card", bank: "SBI", img: "💰", color: "#0369a1", fee: 999, joiningFee: 999, feeWaiver: "₹999 renewal fee reversed after ₹2L or more spend in the preceding year", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/cashback-sbi-card.html", rewardSourceUrl: "https://www.sbicard.com/en/faq/cashback-sbi-card-faq.page", offerSourceUrl: "https://www.sbicard.com/cashback-revised",
    rewardAssumptions: { online: "5% only on eligible online purchases; insurance, utilities, gaming, government and other excluded MCCs earn nothing.", dining: "This row assumes eligible offline/POS spending; eligible online purchases use the separate 5% bucket.", travel: "This row assumes eligible offline/POS spending, excluding railways; online eligible bookings use the 5% bucket.", groceries: "This row assumes eligible offline/POS spending; eligible online purchases use the separate 5% bucket.", entertainment: "This row assumes eligible offline/POS spending; digital gaming is excluded.", shopping: "This row assumes eligible offline/POS spending; eligible online purchases use the separate 5% bucket." },
    rewards: { dining: 1, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    caps: { cashbackPerStatementCycle: { online: 2000, offline: 2000, total: 4000 }, capPeriod: "statement cycle", capAppliesTo: ["online", "offline"] },
    // Issuer sets separate ₹2,000 statement-cycle caps on 5% online and 1% offline cashback.
    partnerRates: [],
    pointsInfo: "5% on eligible online and 1% on eligible offline (POS) purchases. From 1 April 2026: separate ₹2,000 online and ₹2,000 offline caps, ₹4,000 combined per statement cycle. Cashback accrues by transaction posting/settlement date, is credited within 2 working days after the next statement generation, and returns/reversals can be debited. Utility, insurance, fuel, rent, wallet, education, jewellery, railways, merchant/Flexipay EMI and issuer-listed MCCs are excluded; digital gaming, tolls and government MCCs were added in April 2026. ₹999 joining/renewal; renewal reversed at ₹2L+ eligible spend in preceding year.",
    highlights: ["5% eligible online; 1% eligible offline POS", "₹2K online + ₹2K offline cap per statement cycle", "₹999 renewal reversed at ₹2L preceding-year spend", "Separate fuel surcharge waiver: ₹500–₹3,000 transactions, up to ₹100/cycle"],
    pros: ["5% on eligible online spends", "Cashback auto-credited (no redemption hassle)", "Fee waiver on ₹2L spend"],
    cons: ["₹4K cashback cap per cycle (reduced from ₹5K, Apr 2026)", "₹2K sub-cap on online + ₹2K on offline", "Fuel/utilities excluded", "New exclusions: digital gaming, tolls, govt transactions (Apr 2026)"],
    recentChanges: {
      date: "April 1, 2026",
      changes: [
        "Total cashback cap reduced: ₹5,000 → ₹4,000 per statement cycle",
        "Online cashback sub-cap: ₹2,000 per cycle (new)",
        "Offline cashback sub-cap: ₹2,000 per cycle (new)",
        "New exclusions: digital gaming, tolls, government transactions",
      ],
      impact: "At 5% online, max beneficial online spend dropped from ₹1L to ₹40K per cycle. Heavy online spenders should pair with another card.",
    },
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "5% on eligible online spending, with a ₹2,000 online cap per statement cycle.",
    body: `SBI Cashback Card offers 5% cashback on eligible online purchases and 1% on eligible offline purchases, automatically credited to the statement. Utilities, insurance, fuel, rent, education, jewellery, railways and other issuer-listed categories are excluded; an online transaction does not automatically qualify.

Since April 1, 2026, cashback is capped at ₹2,000 for online and ₹2,000 for offline transactions per statement cycle, with a ₹4,000 combined ceiling. Digital gaming, tolls and government transactions are also excluded. At 5%, ₹40,000 of eligible online spend reaches the online cap.`,
    idealFor: "Online shoppers with qualifying purchases of up to roughly ₹40,000 per statement cycle who prefer direct cashback.",
    skipIf: "Your spending is mainly in excluded categories, or your eligible online spend is well above ₹40,000 per cycle. Compare Amazon Pay ICICI for Amazon purchases if applicable.",
  },
  capMath: {
    title: "Understanding the cashback cap — what changed on April 1, 2026",
    body: `Before April 2026: ₹5,000 cashback cap per statement cycle on online purchases at 5%. Maximum beneficial online spend was ₹1,00,000/cycle.

Since April 1, 2026: Total cap is now ₹4,000, split into ₹2,000 online + ₹2,000 offline sub-caps. Maximum beneficial online spend is now ₹40,000/cycle at 5%. This is a 60% reduction in the useful spending range. Digital gaming, tolls, and government transactions are now excluded entirely.

If you spend ₹60K-₹1L online per cycle, you need a second card for the overflow. HDFC Millennia or Amazon Pay ICICI can absorb the excess at 5%.`,
  },
  bestFor: [
    { category: "Eligible online purchases under ₹40K/cycle", reason: "5% on qualifying online merchants, subject to issuer exclusions and a ₹2,000 online cashback cap per statement cycle. Utility bill payments are excluded." },
    { category: "People who hate points systems", reason: "Real cashback, auto-credited. No points to track, no vouchers to redeem, no expiry to worry about. The simplest rewards system available." },
    { category: "Statement cashback", reason: "Eligible cashback is credited directly to the statement; check transaction categories and the separate online and offline caps." },
  ],
  avoidFor: [
    { category: "Offline shopping", reason: "1% offline is below average. Axis ACE gives 1.5% uncapped offline.", altCard: "axis-ace" },
    { category: "Amazon-only shopping", reason: "Amazon Pay ICICI gives 5% on Amazon with no monthly cap. If Amazon is your primary online spend, that card is better.", altCard: "amazon-icici" },
    { category: "Fuel", reason: "Excluded from cashback entirely. Fuel surcharge waiver applies only on ₹500-₹3,000 transactions.", altCard: "rbl-shoprite" },
  ],
  pairWith: [
    { combo: "SBI Cashback + Axis ACE", fee: "₹1,498/year", reason: "SBI for online purchases (5%), ACE for offline spending (1.5% uncapped) and utility overflow. Covers both worlds.", cardId: "axis-ace" },
    { combo: "SBI Cashback + Amazon Pay ICICI", fee: "₹999/year", reason: "Post-April 2026, use Amazon card for Amazon (5%, no cap) and SBI Cashback for all other online purchases (5%, ₹2K cap).", cardId: "amazon-icici" },
  ],
  faq: [
    { q: "Is SBI Cashback still worth it after April 2026 changes?", a: "Yes, but for smaller online spenders. At ₹40K/cycle online spend (₹2K cashback cap), you still earn ₹24K/year from a ₹999 card. Pair it with another card for overflow." },
    { q: "Does SBI Cashback give 5% on Swiggy/Zomato?", a: "An eligible online food-delivery transaction may earn 5%, subject to its merchant category, issuer exclusions and the ₹2,000 online cap per statement cycle. Check the posted transaction and current SBI terms." },
    { q: "Is the cashback real money or points?", a: "Real cashback, directly credited to your statement. No conversion, no redemption, no minimum threshold. This is the card's biggest advantage over points-based competitors." },
    { q: "SBI Cashback vs HDFC Millennia?", a: "SBI Cashback is simpler — 5% on ALL online, auto-credited. Millennia is 5% only on partner brands but has lounge access. If you shop on non-partner sites, SBI wins. If you want lounges and mostly use Swiggy/Amazon, Millennia wins." },
  ],
},
  },

  { id: "sbi-elite", name: "SBI Card ELITE", bank: "SBI", img: "👑", color: "#4338ca", fee: 4999, feeWaiver: "₹10L eligible spend in preceding year", type: "Premium", verified: false, sourceUrl: "https://www.sbicard.com/en/personal/sbi-credit-card.page", feeSourceUrl: "https://www.sbicard.com/en/most-important-terms-and-conditions.page", rewardSourceUrl: "https://www.sbicard.com/en/cardholder-agreement.page",
    // This legacy card remains source-pending. Remove its former flat-cash
    // conversions, BMS quota, network and lounge claims from reusable fields.
    // Zeroes are schema placeholders only; verified:false prevents publication.
    rewards: { dining: 0, travel: 0, online: 0, groceries: 0, fuel: 0, utilities: 0, entertainment: 0, shopping: 0, default: 0 },
    pointsInfo: "Issuer currently advertises a ₹5,000 welcome e-Gift Voucher, movie tickets worth ₹6,000/year and up to 50,000 bonus Reward Points/year (advertised value ₹12,500). Card-specific earning, offer eligibility, redemption value and lounge/network terms are not fully reconciled here.",
    highlights: ["Issuer-advertised ₹5,000 welcome voucher; eligibility applies", "Issuer-advertised movie tickets worth ₹6,000/year; terms apply", "Up to 50,000 bonus Reward Points/year; issuer-advertised value ₹12,500"],
    pros: [],
    cons: ["₹4,999 + applicable taxes; standard renewal waiver at ₹10L eligible preceding-year spend", "Full current card-specific reward, offer, redemption and network terms remain under review"],
    redemptionNote: "No general rupee value is assigned to Reward Points: the issuer's advertised ₹12,500 annual value applies to a specific bonus-point claim, not every earned point or redemption route.",

    editorial: {
  verdict: {
    headline: "The best card for foodies and moviegoers — 2.5% on dining plus BookMyShow Buy 1 Get 1.",
    body: `SBI ELITE occupies a unique niche: it's the best card for people who eat out frequently and watch movies regularly. 2.5% on dining and groceries is strong, and the BookMyShow Buy 1 Get 1 offer (twice a month) can save ₹300-600/month for regular moviegoers. That's ₹3,600-7,200/year in movie savings alone.

The downsides are real: ₹4,999 annual fee with a ₹10L spend waiver threshold is steep. 1% on non-dining categories is below average. But if dining and entertainment are your primary discretionary spends, no other card delivers this combination of rewards and perks at this price point.`,
    idealFor: "People who eat out 3+ times/week and watch 2+ movies/month. The dining rewards + BOGO movies make this card pay for itself quickly. Also strong for grocery shoppers at 2.5%.",
    skipIf: "You rarely eat out or watch movies. At 1% on non-dining spends and ₹4,999 fee, this card is poor value for online shoppers or general spenders. HDFC Millennia or Axis ACE are better all-rounders.",
  },
  bestFor: [
    { category: "Restaurant dining", reason: "2.5% on dining is among the best in the mid-premium segment. On ₹10K/month restaurant spending, that's ₹250/month or ₹3,000/year." },
    { category: "Grocery shopping", reason: "2.5% on groceries (BigBasket, Blinkit, stores) is rare. Most cards give 1% or less on groceries." },
    { category: "Movies via BookMyShow", reason: "Buy 1 Get 1, twice per month. For couples seeing 2 movies/month, that's 24 free tickets/year — easily worth ₹3,600+." },
    { category: "Lounge access", reason: "14 visits/year is generous for the fee bracket. Good for moderate travelers." },
  ],
  avoidFor: [
    { category: "Online shopping", reason: "1% on online purchases. HDFC Millennia gives 5x more on the same platforms.", altCard: "hdfc-millennia" },
    { category: "Utility bills", reason: "1% on utilities. Axis ACE gives 5% via Google Pay — five times the return.", altCard: "axis-ace" },
    { category: "Travel bookings", reason: "Compare eligible travel earn and redemption terms with a currently available travel card; partner promotions are conditional." },
  ],
  pairWith: [
    { combo: "SBI ELITE + HDFC Millennia", fee: "₹5,999/year", reason: "ELITE for dining/groceries/movies, Millennia for online shopping at 5%. This combo covers eating in, eating out, and shopping online.", cardId: "hdfc-millennia" },
    { combo: "SBI ELITE + Axis ACE", fee: "₹5,498/year", reason: "ELITE for dining/grocery/movies, ACE for utility bills (5%) and everything else (1.5% uncapped).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is the BookMyShow BOGO offer really worth it?", a: "If you watch 2 movies/month as a couple, you save ₹300-600/month (₹150-300 per ticket saved). That's ₹3,600-7,200/year — more than the annual fee." },
    { q: "Can I get the ₹4,999 fee waived?", a: "Yes, but you need ₹10 lakh annual spend — roughly ₹83,000/month. This is a high threshold. Most people pay the fee and justify it through dining rewards + BOGO." },
    { q: "Does 2.5% apply to Swiggy/Zomato?", a: "Swiggy/Zomato may code as dining or online depending on the platform. The 2.5% dining rate typically applies, but check your statements to confirm." },
    { q: "SBI ELITE vs HDFC Millennia?", a: "Different strengths. ELITE wins on dining (2.5% vs 1%), groceries (2.5% vs 1%), and movies (BOGO). Millennia wins on online shopping (5% vs 1%) and lower fee. Pick based on whether you eat out more or shop online more." },
  ],
},
  },

  { id: "amazon-icici", name: "Amazon Pay ICICI", bank: "ICICI", img: "📦", color: "#d97706", fee: 0, joiningFee: 0, feeWaiver: "No joining or annual fee", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/amazon-pay-credit-card", rewardSourceUrl: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/tc-for-amazon-pay-credit-card.pdf",
    rewards: { dining: 1, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    availabilityNote: "This is an invite-only programme; application availability and approval are determined by Amazon and ICICI Bank.",
    rewardAssumptions: { default: "Generic estimates assume eligible domestic spend and value rewards at face value as non-expiring Amazon Pay balance, not cash or statement credit. International transactions earn no points.", online: "Assumes eligible Amazon India purchases with active Prime membership: 5%; non-Prime earns 3%. This is not a 5% rate for other websites or Amazon flight/hotel bookings.", utilities: "No points on utility transactions outside Amazon. Eligible Amazon Pay digitally fulfilled bill payments have a separate 2% route not represented by this generic utilities input.", travel: "Assumes eligible domestic travel transactions outside Amazon; international transactions earn no points. Amazon flight/hotel bookings are excluded from the 5% Prime tier." },
    redemptionSourceUrl: "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/tc-for-amazon-pay-credit-card.pdf",
    partnerRates: [
      { name: "Amazon (Prime member)", rate: "5%" },
      { name: "Amazon (non-Prime)", rate: "3%" },
      { name: "Amazon Pay partner merchants / eligible Amazon Pay categories", rate: "2% where eligible; exclusions apply" },
      { name: "Amazon Pay bill payments, recharges, gift cards and digital content", rate: "2% regardless of Prime status" },
    ],
    pointsInfo: "Amazon.in: 5% for Prime / 3% for non-Prime, excluding gold coins and Amazon flight/hotel bookings; 2% on digitally fulfilled categories, Login and Pay with Amazon, and physical gift cards; 1% on other eligible Amazon.in purchases. Rewards are non-expiring, credit as Amazon Pay balance within 2 working days after the billing cycle, and round down to whole points. International, education, utility outside Amazon, fuel, precious metals, tax, rent, fees and EMI transactions do not earn points; cancellations/returns can claw them back. Current issuer page lists 1.99% forex markup and a separate 1% fuel-surcharge waiver.",
    redemptionNote: "The calculator values rewards at face value as Amazon Pay balance for eligible routes. This is wallet balance—not statement credit or cash transferable to a bank account—and is useful only if you can spend it through eligible Amazon/Amazon Pay purchases.",
    highlights: ["5% Amazon.in Prime / 3% non-Prime on eligible purchases", "2% on specified Amazon Pay/digital routes; 1% on other eligible Amazon.in", "No joining or annual fee; earnings have no stated cap", "1.99% forex markup; international spends earn no points", "Separate 1% fuel-surcharge waiver"],
    pros: ["Strong Amazon rewards for eligible purchases", "Lifetime free", "No earnings limit; balance auto-credits to Amazon Pay"],
    cons: ["Rewards credited to Amazon Pay balance, not statement credit", "Most non-Amazon eligible transactions earn 1%", "No points on education/international transactions or utilities outside Amazon (from 11 October 2025)", "No reward on fuel, rent, EMI, tax-related payments and precious metals"],
    estimateUnavailableReason: "The 5%/3% rate is specific to eligible Amazon.in purchases and depends on Prime status; 2% routes and 1% other eligible Amazon.in purchases are also channel-specific. Broad online/travel inputs cannot identify Amazon.in or Prime eligibility, so no category estimate is shown.",
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "A lifetime-free Amazon-linked card with tiered rewards credited as Amazon Pay balance.",
    body: `ICICI lists 5% back on eligible Amazon India purchases for Prime members and 3% for non-Prime members; some categories earn 2% regardless of Prime status. The issuer states there is no limit on earnings and no annual fee. Amazon Pay earnings are automatically credited to the linked Amazon account as balance, not as bank-transferable cash.

This card is offered through an invite-based Amazon/ICICI programme, so availability and eligibility are determined by the issuer and Amazon. Check exclusions, including fuel, rent, tax-related payments, precious metals and eligible EMI purchases, in the current issuer FAQ.`,
    idealFor: "People who make eligible Amazon India purchases and are comfortable receiving rewards as Amazon Pay balance.",
    skipIf: "You don't shop on Amazon, or you want real cashback (not Amazon Pay balance). Also not great as a primary card — 1% on non-Amazon is below average.",
  },
  bestFor: [
    { category: "Eligible Amazon.in shopping", reason: "Prime members can earn 5% and non-Prime members 3% on eligible Amazon.in purchases. Gold coins and Amazon flight/hotel bookings are excluded; compare the balance-based redemption with your likely use." },
    { category: "Eligible Amazon Pay partner routes", reason: "The issuer lists 2% for digitally fulfilled categories and eligible Login and Pay with Amazon transactions; partner-site eligibility and route matter." },
    { category: "No-fee cardholders who use Amazon Pay", reason: "There is no joining or annual fee. The programme is invite-only, and rewards arrive as Amazon Pay balance rather than statement cashback." },
  ],
  avoidFor: [
    { category: "Flipkart shopping", reason: "1% on Flipkart. Axis Flipkart card gives 5% on Flipkart. If you use both platforms, you need both cards.", altCard: "axis-flipkart" },
    { category: "International transactions", reason: "International transactions earn no reward points and the issuer lists a 1.99% forex markup. Compare a card with lower forex cost for overseas use." },
    { category: "Offline spending", reason: "Most other eligible domestic purchases earn 1% as Amazon Pay balance, not statement credit. Compare redemption use and exclusions with a general-spend card.", altCard: "axis-ace" },
    { category: "People who want real cashback", reason: "Rewards are Amazon Pay balance, not statement credit. If you want money in your bank account, SBI Cashback is a better choice.", altCard: "sbi-cashback" },
  ],
  pairWith: [
    { combo: "Amazon ICICI + Axis Flipkart", fee: "₹500/year", reason: "Amazon card for Amazon (5%), Flipkart card for Flipkart/Myntra (5%). You're covered on both major e-commerce platforms.", cardId: "axis-flipkart" },
    { combo: "Amazon ICICI + Axis ACE", fee: "₹499/year", reason: "Amazon card for Amazon (5%), ACE for everything else — utility bills (5%), offline (1.5%), food delivery (4%).", cardId: "axis-ace" },
    { combo: "Amazon ICICI + HDFC Millennia", fee: "₹1,000/year", reason: "Amazon card for Amazon purchases, Millennia for Swiggy/Zomato/Flipkart at 5%. Maximizes both platforms.", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "Do I need Amazon Prime to get 5%?", a: "Yes. The issuer lists 5% for Prime members and 3% for non-Prime members on eligible Amazon.in purchases. Separate 2% terms apply to digitally fulfilled categories, physical gift cards and eligible Login and Pay with Amazon transactions; those routes are not a universal rate for every partner merchant." },
    { q: "Can I convert Amazon Pay balance to cash?", a: "Not directly. Amazon Pay balance can be used on Amazon and at Amazon Pay partner merchants (many restaurants, fuel stations, grocery stores). But you can't transfer it to a bank account." },
    { q: "Is there a reward cap?", a: "The issuer describes rewards as unlimited, with no stated monthly or annual earnings cap. Eligibility exclusions still apply: ₹1 lakh entirely in eligible Prime Amazon.in purchases (excluding gold coins and travel bookings) would produce ₹5,000 as Amazon Pay balance, not statement cashback." },
    { q: "Amazon Pay ICICI vs HDFC Millennia for Amazon?", a: "For Amazon specifically, the Amazon Pay ICICI card wins — 5% with no cap vs Millennia's 5% with a ₹1,000/month shared cap. But Millennia covers more platforms (Swiggy, Flipkart, Myntra)." },
  ],
},
  },

  { id: "icici-coral", name: "ICICI Coral", bank: "ICICI", img: "🪸", color: "#dc2626", fee: 500, feeWaiver: "₹1.5L annual spend", type: "Entry Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/coral-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.25, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "BookMyShow", rate: "25% off up to ₹100 on at least 2 tickets, up to 2 times/month; ₹25,000 previous-quarter spend required from Apr 2026" },
    ],
    pointsInfo: "2 Reward Points/₹100 retail spend; 1 point/₹100 utility and insurance spend. Points are redeemable through ICICI Rewards; value varies by redemption and is not a fixed cashback rate.",
    highlights: ["BookMyShow: 25% off up to ₹100 on 2+ tickets, up to twice/month; ₹25K prior-quarter spend gate", "Up to 1 domestic airport lounge visit/quarter after ₹75K previous-quarter spend", "1 railway lounge visit/quarter", "₹500 annual fee waived at ₹1.5L spend"],
    pros: ["Movie discount and railway lounge benefit", "Domestic airport lounge benefit after spend condition", "₹500 annual fee waived at ₹1.5L spend"],
    cons: ["Movie and airport lounge benefits have conditions", "Reward points do not have a single fixed cash value", "3.5% foreign-currency markup"],
    network: "Visa/MC/RuPay", lounge: "Up to 1 domestic visit/quarter after ₹75K previous-quarter spend; 1 railway visit/quarter",

    editorial: {
  verdict: {
    headline: "Coral’s headline perks now have spend gates; its points are not guaranteed cashback.",
    body: `ICICI Coral currently earns 2 Reward Points per ₹100 on retail spends and 1 point per ₹100 on utility and insurance spends. The issuer describes catalogue redemptions, not one fixed rupee value per point, so this page does not treat points as a guaranteed cashback percentage.

The BookMyShow discount is up to 25% (₹100 per ticket) on a minimum of two tickets, up to twice a month. From April 2026, it requires ₹25,000 spend in the preceding spend quarter. Domestic lounge access is also spend-qualified: ₹75,000 in the previous calendar quarter unlocks up to one visit in the next quarter for the primary cardholder. The ₹500 annual fee is waived after ₹1.5 lakh spend.`,
    idealFor: "Cardholders who can meet the spend thresholds and will use Coral’s movie, railway-lounge or conditional airport-lounge benefits.",
    skipIf: "You expect unconditional airport lounge entry, or are choosing this card primarily for a fixed cashback rate.",
  },
  bestFor: [
    { category: "BookMyShow", reason: "25% off up to ₹100 per ticket on at least two tickets, up to twice per month; ₹25,000 previous-quarter spend is required from April 2026." },
    { category: "Railway lounges", reason: "The issuer lists one complimentary railway lounge visit per quarter." },
    { category: "Annual fee waiver", reason: "Spend over ₹1.5 lakh to waive the ₹500 annual fee for the next year." },
  ],
  avoidFor: [
    { category: "Unconditional airport lounge access", reason: "Domestic lounge visits require ₹75,000 spend in the preceding calendar quarter." },
    { category: "Movie offers without card spend", reason: "The BookMyShow offer requires ₹25,000 eligible spend in the preceding spend quarter from April 2026." },
  ],
  pairWith: [
    { combo: "ICICI Coral + HDFC Millennia", fee: "₹1,500/year", reason: "Coral for movies and dining discounts, Millennia for all actual spending (5% on online partners). Use Coral for perks, Millennia for rewards.", cardId: "hdfc-millennia" },
    { combo: "ICICI Coral + Axis ACE", fee: "₹999/year", reason: "Coral for movie BOGO and lounge, ACE for everything else (1.5-5%). Both at low fees.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "How does the Coral BookMyShow offer work now?", a: "The listed offer is 25% off up to ₹100 per ticket on a booking of at least two tickets, up to twice a month. From April 1, 2026, ₹25,000 spend in the preceding spend quarter is required for the following quarter's benefit." },
    { q: "What qualifies me for Coral airport lounge access?", a: "The issuer says ₹75,000 spend in a calendar quarter unlocks one domestic lounge visit in the following quarter for the primary cardholder." },
    { q: "ICICI Coral vs SBI ELITE for movies?", a: "Compare the current movie-offer caps, spend gates and fees for your card variants. Coral's BookMyShow offer has a ₹25,000 preceding-quarter spend condition from April 2026; this page has not re-audited SBI ELITE's current offer." },
  ],
},
  },

  { id: "icici-sapphiro", name: "ICICI Sapphiro", bank: "ICICI", img: "💠", color: "#0891b2", fee: 3500, feeWaiver: "₹6L annual spend (joining fee ₹6,500+GST)", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/experience",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.25, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "BookMyShow", rate: "Buy 1, get 1 up to ₹500 per free ticket, up to twice/month; quarterly ₹25K spend gate applies from Apr 2026" },
    ],
    pointsInfo: "ICICI Reward Points are not a fixed cash equivalent. Current issuer material lists welcome vouchers, up to 20,000 anniversary-year points, lounge and golf benefits; exact earn/redemption value depends on applicable card terms.",
    highlights: ["Joining fee ₹6,500 + GST; renewal fee ₹3,500 + GST", "Annual fee waiver at ₹6L anniversary-year spend", "BookMyShow BOGO up to ₹500 per ticket, twice/month; ₹25K quarterly spend gate applies from Apr 2026", "Domestic lounge access requires ₹75K previous-quarter spend; up to 4 visits/quarter listed in product overview", "Up to 4 golf rounds/month based on eligible spend"],
    pros: ["Welcome vouchers and anniversary reward points", "BookMyShow and golf benefits, subject to terms", "Domestic and international lounge benefits with applicable conditions"],
    cons: ["₹6,500 joining fee and ₹3,500 renewal fee + GST unless applicable waiver", "₹75K quarterly spend condition applies to domestic lounge access", "₹25K preceding-quarter spend condition applies to BookMyShow from April 2026", "No zero-forex claim; check current markup and DCC separately"],
    network: "Visa/MC/Amex", lounge: "Up to 4 domestic visits/quarter after ₹75K previous-quarter spend; 2 international visits/year listed",

    editorial: {
  verdict: {
    headline: "Sapphiro is a benefits card; eligibility gates and fees matter more than headline offers.",
    body: `ICICI currently lists a ₹6,500 + GST joining fee and ₹3,500 + GST annual fee, with the annual fee waived at ₹6 lakh anniversary-year spend. Issuer material advertises welcome vouchers, anniversary reward points, lounge access, golf and BookMyShow benefits. Reward points are catalogue-based; this page does not convert them to a fixed cashback rate.

Domestic lounge access is subject to the bank's ₹75,000 previous-quarter spend condition (the product overview lists up to four visits per quarter). The BookMyShow benefit is buy-one-get-one with a free-ticket cap of ₹500, and the general ICICI spend-change notice adds a ₹25,000 preceding-quarter threshold from April 2026. Golf is also spend-based, not a flat four-round annual allowance.`,
    idealFor: "Cardholders who qualify for the fee waiver and will use the card's lounge, golf, welcome-voucher or movie benefits under their conditions.",
    skipIf: "You want a simple cashback card, or would pay the full fees without using the gated lifestyle benefits.",
  },
  bestFor: [
    { category: "Golf", reason: "Up to four rounds/lessons per month are listed, subject to eligible spend and program terms." },
    { category: "BookMyShow", reason: "Buy-one-get-one, with a free-ticket cap of ₹500 and a quarterly spend condition from April 2026." },
    { category: "Lounge access", reason: "Product material lists lounge benefits; domestic access has a ₹75,000 previous-quarter spend condition and visit limits apply." },
  ],
  avoidFor: [
    { category: "All domestic spending", reason: "0.5% on everything domestic. Axis ACE gives 1.5% uncapped for a lower fee.", altCard: "axis-ace" },
    { category: "Online shopping", reason: "0.5% vs 5% on HDFC Millennia. You'd earn 10x more using almost any partner card.", altCard: "hdfc-millennia" },
    { category: "Frequent international travel", reason: "1% with no zero forex markup means you lose 2-3% to forex charges. IDFC FIRST WOW offers zero forex on a free card.", altCard: "idfc-wow" },
  ],
  pairWith: [
    { combo: "Sapphiro + Axis ACE", fee: "₹3,999/year", reason: "Sapphiro for golf perks and international spending, ACE for all domestic spending (1.5% uncapped).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "What are the Sapphiro fees and waiver?", a: "ICICI lists ₹6,500 + GST joining fee and ₹3,500 + GST annual fee. Its MITC lists annual-fee waiver eligibility at ₹6 lakh anniversary-year spend; check the offer attached to your application and card variant." },
    { q: "Is Sapphiro lounge access unconditional?", a: "No. ICICI's spend-change notice requires ₹75,000 in the previous calendar quarter for domestic lounge access on eligible cards; access counts depend on the card's terms. International access also has program-specific limits." },
    { q: "How does Sapphiro's BookMyShow offer work?", a: "ICICI lists buy-one-get-one with a maximum free-ticket price of ₹500, up to twice per month. From April 2026, the bank's spend-change notice requires ₹25,000 spend in the preceding quarter for eligible card offers." },
  ],
},
  },

  { id: "icici-emeralde", name: "ICICI Emeralde", bank: "ICICI", img: "💚", color: "#047857", fee: 12000, feeWaiver: "₹10L annual spend", type: "Super Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/emeralde-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0.5, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "BookMyShow", rate: "Buy 1, get 1 up to ₹750 per free ticket, up to 4 times/month; quarterly ₹25K spend gate applies from Apr 2026" },
    ],
    pointsInfo: "4 Reward Points/₹100 domestic and international eligible spend; 1 point/₹100 utility and insurance spend. Redemption value varies by reward and category; ICICI does not state one fixed cashback value here.",
    highlights: ["Unlimited domestic and international lounge access for primary cardholder", "4 Reward Points/₹100 domestic and international eligible spend", "1 Reward Point/₹100 utility and insurance spend", "₹12,000 + GST joining and annual fee; next-year annual fee waived above ₹10L spend", "2% forex markup; separate DCC fee may apply to INR transactions with overseas merchants"],
    pros: ["Unlimited eligible lounge access for the primary cardholder", "Golf benefits subject to eligible spend", "₹10L annual-spend renewal-fee waiver threshold"],
    cons: ["₹12,000 joining and annual fee + GST unless waived", "Reward points are not guaranteed cashback", "2% forex markup and separate DCC charges can apply"],

    redemptionNote: "ICICI lists points per spend but redemption value varies by reward and category. Do not treat these points as a fixed cashback rate. Forex markup and dynamic currency conversion charges are separate costs.",
    network: "Visa Infinite/Amex", lounge: "Unlimited",

    editorial: {
  verdict: {
    headline: "Emeralde combines unlimited primary-cardholder lounges with high fees and spend-based perks.",
    body: `ICICI lists a ₹12,000 + GST joining and annual fee, with the next year's annual fee waived after spending over ₹10 lakh. The current issuer page lists 4 Reward Points per ₹100 domestic and international spend and 1 point per ₹100 on utility and insurance spends; it does not give a single fixed cashback value for those points. Its published forex markup is 2%, before any separate dynamic-currency-conversion fee.

The primary cardholder has unlimited domestic and international lounge access. BookMyShow offers up to four buy-one-get-one redemptions monthly with a maximum free ticket price of ₹750, subject to a ₹25,000 preceding-quarter spend requirement from April 2026. Golf rounds are also spend-based.`,
    idealFor: "Cardholders who can use the lounge and lifestyle benefits and meet the annual-spend waiver condition.",
    skipIf: "You want guaranteed cashback from points, or are comparing international spend without accounting separately for forex and DCC fees.",
  },
  bestFor: [
    { category: "Airport lounges", reason: "Issuer lists unlimited domestic and international lounge access for the primary cardholder." },
    { category: "Eligible retail spend", reason: "ICICI lists 4 points per ₹100 domestic and international spend; redemption value varies by selected reward." },
    { category: "Annual fee waiver", reason: "Spend over ₹10 lakh for the annual fee to be waived for the following year." },
  ],
  avoidFor: [
    { category: "Fixed cashback expectations", reason: "Emeralde earns ICICI Reward Points; their redemption value varies and should not be treated as a guaranteed cashback rate." },
    { category: "Lowest-cost international spending", reason: "The card has a 2% forex markup, and separate DCC fees may apply. Compare total charges and any chosen reward redemption before using it abroad." },
  ],
  pairWith: [
    { combo: "Emeralde + HDFC Millennia", fee: "₹13,000/year", reason: "Emeralde for international travel and global lounges, Millennia for domestic online spending (5%). International card + domestic card combo.", cardId: "hdfc-millennia" },
    { combo: "Emeralde + Axis ACE", fee: "₹12,499/year", reason: "Emeralde for international, ACE for domestic everything — utilities (5%), offline (1.5%), food delivery (4%).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "How much cashback do Emeralde points provide?", a: "ICICI lists earn rates in Reward Points but redemption value depends on the reward and category. The current product page does not define a single fixed cashback value, so do not assume a flat 2% return." },
    { q: "Is Emeralde invite-only?", a: "ICICI's current product page presents an application flow and lists age and income eligibility requirements. Final eligibility and any personalised offer are determined by ICICI." },
    { q: "What are Emeralde's current headline fees?", a: "ICICI lists ₹12,000 + GST joining and annual fees. Spend over ₹10 lakh to have the annual fee waived for the next year. Check current eligibility and terms with the issuer." },
  ],
},
  },

  { id: "axis-flipkart", name: "Axis Flipkart", bank: "Axis", img: "🛍️", color: "#2563eb", fee: 500, joiningFee: 0, feeWaiver: "Annual fee waived above ₹3.5L eligible annual spend; rent and wallet loads do not count.", feeScheduleNote: "Axis currently lists a NIL joining fee as a limited-period offer and ₹500 annual fee from year two. Fees and offer eligibility can vary by application; taxes apply where charged.", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/flipkart-axisbank-credit-card", feeSourceUrl: "https://www.axis.bank.in/cards/credit-card/flipkart-axisbank-credit-card", rewardSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/cashback-tncs---final.pdf?sfvrsn=b55a0e1a_5",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Flipkart", rate: "5% cashback (₹4,000 per statement quarter)" },
      { name: "Myntra", rate: "7.5% cashback (₹4,000 per statement quarter)" },
      { name: "Cleartrip", rate: "5% cashback (₹4,000 per statement quarter)" },
      { name: "Axis preferred merchants", rate: "4% cashback (merchant list can change; qualifying merchant IDs apply)" },
    ],
    pointsInfo: "Cashback is credited to the card statement. Axis's current cashback terms list 5% on Flipkart (website/app, excluding Flipkart Health) and Cleartrip, and 7.5% on Myntra; each merchant has its own ₹4,000 statement-quarter cashback cap. Preferred merchants earn 4% with no stated cap, but the list can change and accelerated cashback depends on merchant IDs; only Swiggy food-delivery orders in the Swiggy app qualify for that preferred-merchant tier, not Instamart or Genie. Other eligible merchants earn 1%. Utility, telecom, fuel, insurance, financial-institution, rent, wallet-load, education, government and specified jewellery/watch MCCs are excluded, as are Flipkart/Myntra gift cards, gold, EMI/post-facto EMI, cash advances, card payments/fees and charges. Returns and EMI conversions can reverse cashback; the issuer terms describe statement credit before the next statement. Fuel earns no cashback; a separate 1% surcharge waiver applies to ₹400–₹4,000 transactions, up to ₹400 per statement cycle, with fuel-surcharge GST not refunded. Axis currently advertises ₹350 in activation benefits: a ₹250 Flipkart voucher after a first transaction within 30 days on paid cards, plus 50% off up to ₹100 on a first Swiggy order for eligible first-time users. Axis states lounge access ended in June 2025.",
    highlights: ["5% Flipkart/Cleartrip and 7.5% Myntra; separate ₹4,000 cashback cap per merchant per statement quarter", "4% on changing Axis preferred merchants; qualifying merchant IDs and Swiggy-app conditions apply", "1% on other eligible spends; utility, telecom and several other categories excluded", "₹350 advertised activation benefits; ₹250 Flipkart voucher is not available on first-year-free cards", "Fuel earns no cashback; separate surcharge waiver is capped at ₹400 per statement cycle", "Domestic lounge access discontinued June 2025"],
    pros: ["Useful accelerated cashback on eligible Flipkart, Myntra and Cleartrip spend", "Separate per-merchant quarterly caps", "Current Axis page advertises a limited-period NIL joining fee"],
    cons: ["₹500 annual fee from year two unless eligible annual spend exceeds ₹3.5L", "Preferred merchant list and accelerated cashback depend on merchant IDs", "Utilities, fuel and several other categories are excluded", "Fuel surcharge relief is separate from cashback and capped", "Lounge access discontinued June 2025"],
    network: "Visa", lounge: "None (discontinued Jun 2025)",

    editorial: {
  verdict: {
    headline: "A focused card for Flipkart and Myntra shoppers, with quarterly cashback caps.",
    body: `Axis Flipkart pays statement cashback: 5% on eligible Flipkart and Cleartrip transactions and 7.5% on Myntra, with a separate ₹4,000 cashback cap for each merchant per statement quarter. Eligible Flipkart Health purchases are excluded. A changing set of Axis preferred merchants earns 4%; the current terms rely on merchant IDs, and Swiggy's accelerated tier is limited to food delivery in the Swiggy app—not Instamart or Genie. Other eligible purchases earn 1%.

Utilities, telecom, fuel and several other categories do not earn cashback. Fuel instead has a separate surcharge waiver with transaction bands and a ₹400 statement-cycle maximum. Axis currently lists NIL joining fee as a limited-period offer and ₹500 annual fee from year two; the annual fee is waived above ₹3.5 lakh eligible annual spend, excluding rent and wallet loads. Axis advertises up to ₹350 in activation benefits, with eligibility conditions; the ₹250 Flipkart voucher excludes first-year-free cards. Domestic lounge access ended in June 2025.`,
    idealFor: "Shoppers who regularly use Flipkart, Myntra or Cleartrip and can stay within the quarterly caps.",
    skipIf: "You shop primarily on Amazon (get Amazon Pay ICICI instead). If you use both Flipkart and Amazon equally, you might want both dedicated cards rather than this one alone.",
  },
  bestFor: [
    { category: "Flipkart shopping", reason: "5% cashback, capped at ₹4,000 per statement quarter." },
    { category: "Myntra fashion", reason: "7.5% cashback, capped at ₹4,000 per statement quarter." },
    { category: "Cleartrip travel", reason: "5% cashback on eligible Cleartrip transactions, capped at ₹4,000 per statement quarter; merchant-ID eligibility and exclusions apply." },
    { category: "Preferred merchants", reason: "Axis lists 4% cashback on its preferred merchants; check the issuer's current list as it may change." },
  ],
  avoidFor: [
    { category: "Amazon shopping", reason: "1% on Amazon. The Amazon Pay ICICI card gives 5% (Prime) for free. Get both if you use both platforms.", altCard: "amazon-icici" },
    { category: "Utility bills", reason: "Utility and telecom transactions are excluded from cashback under Axis's current terms. Compare a card whose eligible bill-payment route matches how you pay.", altCard: "axis-ace" },
    { category: "General offline spending", reason: "1% offline. If you need a good all-rounder for offline, Axis ACE at 1.5% is better.", altCard: "axis-ace" },
  ],
  pairWith: [
    { combo: "Axis Flipkart + Amazon Pay ICICI", fee: "Axis: ₹500 annual fee from year two (waiver threshold applies); Amazon Pay ICICI: no annual fee", reason: "A two-card setup can cover eligible Flipkart and Amazon purchases, but compare the Axis fee, merchant caps, exclusions and your Amazon Prime eligibility before applying.", cardId: "amazon-icici" },
    { combo: "Axis Flipkart + Axis ACE", fee: "₹999/year", reason: "Flipkart card for Flipkart/Myntra (5%), ACE for utilities (5%), offline (1.5%), and general spending. Same bank, easy to manage.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is there a cashback cap?", a: "Yes. Flipkart, Myntra and Cleartrip cashback each has a ₹4,000 cap per statement quarter. Axis can change the preferred-merchant list and terms." },
    { q: "What earns 4% cashback?", a: "A changing set of Axis preferred merchants earns 4%, subject to eligible merchant IDs. The current terms specifically limit Swiggy's accelerated tier to food delivery in its app; Instamart and Genie are excluded." },
    { q: "Does the card earn cashback on utilities or fuel?", a: "Utilities and fuel are excluded from cashback by Axis's current terms. Eligible fuel transactions can receive a separate surcharge waiver of 1% on ₹400–₹4,000 transactions, capped at ₹400 per statement cycle; GST on the surcharge is not refunded." },
    { q: "What is the current joining fee and welcome offer?", a: "Axis currently lists NIL joining fee as a limited-period offer and a ₹500 annual fee from year two, waived above ₹3.5 lakh eligible annual spend. Its product page advertises ₹350 in activation benefits subject to conditions; the ₹250 Flipkart voucher is not available on first-year-free cards." },
    { q: "Axis Flipkart vs HDFC Millennia?", a: "Compare their current eligible merchant lists, cashback rates and caps: Axis Flipkart has quarterly caps on Flipkart, Myntra and Cleartrip, while Millennia has its own monthly cashback cap and partner terms. Pick based on where you spend." },
  ],
},
  },

  { id: "axis-ace", name: "Axis ACE", bank: "Axis", img: "🎯", color: "#7c3aed", fee: 499, joiningFee: 499, feeWaiver: "Annual fee waived when eligible annual spend exceeds ₹2 lakh; rent (MCC 6513) and wallet loads (MCC 6540) are excluded from waiver spend.", feeScheduleNote: "Joining fee ₹499; annual fee ₹499 from year two, subject to the eligible-spend waiver. Applicable taxes are extra.", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-ace-credit-card", rewardSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/axis-bank-ace-credit-card-tncs.pdf?sfvrsn=a3effc42_6",
    rewardAssumptions: { default: "Illustrative broad-category estimate assumes each rupee qualifies and applies the published percentage before per-transaction rounding. Actual accelerated eligibility depends on Google Pay for Android or the named merchant's MID; transaction rounding, returns and reversals can change credited cashback.", dining: "4% applies only to eligible Swiggy, Zomato and Ola transactions identified by issuer merchant IDs, not every restaurant or food transaction.", utilities: "5% applies only to listed bill payments/recharges made with Axis ACE through Google Pay on Android; other utility platforms do not qualify." },
    rewards: { dining: 4, travel: 1.5, online: 1.5, groceries: 1.5, fuel: 0, utilities: 5, entertainment: 1.5, shopping: 1.5, default: 1.5 },
    caps: { monthlyCashback: 500, capRate: 5, fallbackRate: 0, capPeriod: "statement cycle", capAppliesTo: ["utilities", "dining"] },
    // Cap math: ₹500/mo COMBINED cap on accelerated only (5% utilities + 4% food). After cap, accelerated → 0%. Base 1.5% is UNCAPPED.
    partnerRates: [
      { name: "Bill payments via Google Pay", rate: "5%" },
      { name: "Swiggy, Zomato, Ola", rate: "4%" },
    ],
    pointsInfo: "5% on eligible electricity, water, gas, LPG, broadband, DTH and mobile recharge through Google Pay on Android; 4% on eligible Swiggy, Zomato and Ola transactions; 1.5% on other eligible spends. The 5% and 4% categories share one ₹500 cap per statement; the 1.5% base cashback is uncapped. Utility transactions outside Google Pay, fuel, EMI, wallet, rent, jewellery, insurance, education, government, gift cards and toll/road fees are excluded. Merchant IDs determine accelerated eligibility; cashback rounds to the nearest rupee per transaction and returns/EMI conversions reverse rewards. Fuel surcharge waiver is separate: 1% on ₹400–₹4,000 transactions, up to ₹500 per statement; GST on the surcharge is not refunded.",
    highlights: ["5% on listed bills/recharges through Google Pay for Android", "4% on eligible Swiggy, Zomato and Ola transactions", "5% and 4% share a ₹500 statement-cycle cap; 1.5% base cashback is uncapped", "₹499 joining fee; ₹499 annual fee from year two, waivable above ₹2L eligible spend"],
    pros: ["5% on eligible Google Pay utility bill payments", "4% on listed food/ride merchants", "1.5% on other eligible spends"],
    cons: ["₹500 per statement cycle shared across 5%+4% categories", "Payment route and merchant IDs determine accelerated eligibility; per-transaction rounding applies", "Fuel earns no cashback; surcharge relief and transaction fees have separate terms"],
    estimateUnavailableReason: "Broad dining and utility categories cannot identify Swiggy/Zomato/Ola merchant IDs or Google Pay on Android eligibility. The accelerated buckets share a ₹500 statement-cycle cap and round per transaction; the category model would falsely apply 4%/5% to unqualified spend. No generic estimate is shown.",
    network: "Visa", lounge: "4/year at select domestic airports; verify current spend eligibility with Axis",

    editorial: {
  verdict: {
    headline: "A practical cashback card for selected bills, food delivery and everyday eligible spends.",
    body: `Axis ACE offers 5% on eligible utility bill payments and recharges through Google Pay, 4% on Swiggy, Zomato and Ola, and 1.5% on other eligible purchases. Cashback on the accelerated categories has a combined ₹500 billing-cycle cap. Fuel and several merchant categories are excluded, so check Axis's latest exclusions before relying on a reward estimate.

    Eligible non-accelerated purchases earn 1.5%, subject to Axis's exclusions. The card has a ₹499 annual fee from the second year, waived on eligible annual spends above ₹2 lakh.`,
    idealFor: "People who pay eligible utility bills through Google Pay or regularly use the listed food and ride-hailing merchants, and whose eligible spend fits the cashback cap.",
    skipIf: "You only shop on one platform (get the dedicated card instead — Amazon ICICI for Amazon, Flipkart card for Flipkart). But even then, ACE is a great complement.",
  },
  capMath: {
    title: "Understanding the accelerated cashback cap",
    body: `Axis applies a combined ₹500 cashback cap per billing cycle to the accelerated 5% and 4% categories. The eligible transaction list and treatment after reaching the cap are governed by Axis's current cashback terms; check those terms before estimating returns.`,
  },
  bestFor: [
    { category: "Utility bills via Google Pay", reason: "5% on electricity, water, broadband, gas. Most cards give 0-1% on utilities. On ₹5K monthly bills, that's ₹250/month or ₹3,000/year." },
    { category: "Listed food and ride-hailing merchants", reason: "4% on eligible Swiggy, Zomato and Ola transactions, subject to Axis's cashback cap and exclusions." },
    { category: "Other eligible purchases", reason: "Earn 1.5% on eligible non-accelerated purchases. Exclusions apply, including fuel and other issuer-defined categories." },
    { category: "Bill payments", reason: "The 5% rate is for eligible utility bill payments and recharges made through Google Pay; not every bill or payment route qualifies." },
  ],
  avoidFor: [
    { category: "Amazon/Flipkart shopping", reason: "Dedicated co-branded cards may offer higher rates, subject to their eligibility rules and caps. Compare current terms before choosing.", altCard: "amazon-icici" },
    { category: "Travel bookings", reason: "A travel card may offer better value if its current earn, redemption and fee terms fit your bookings; verify those terms before switching." },
    { category: "Heavy food delivery spend", reason: "After the ₹500 cap on 4%, food delivery drops to 0%. If you spend ₹15K+/month on Swiggy alone, HDFC Swiggy card's 10% (₹1,500 cap) is better.", altCard: "hdfc-swiggy" },
  ],
  pairWith: [
    { combo: "Axis ACE + HDFC Millennia", fee: "₹1,499/year", reason: "The budget power combo. Millennia for Swiggy/Amazon/Flipkart at 5%, ACE for utilities (5%), offline (1.5%), and everything Millennia doesn't cover.", cardId: "hdfc-millennia" },
    { combo: "Axis ACE + Amazon Pay ICICI", fee: "₹499/year", reason: "One card targets eligible Amazon purchases and the other has separate Google Pay utility and general-spend terms. Check eligibility, exclusions and fee waivers for both before combining them.", cardId: "amazon-icici" },
    { combo: "Axis ACE + HDFC Regalia", fee: "₹2,999/year", reason: "Regalia for travel/SmartBuy/lounges, ACE for everyday domestic spending. Premium travel perks with a solid everyday floor.", cardId: "hdfc-regalia" },
  ],
  faq: [
    { q: "What is the cashback cap?", a: "Axis's cashback terms specify a combined ₹500 billing-cycle cap for the accelerated 5% and 4% categories. Check the latest terms for eligible MCCs and excluded transactions." },
    { q: "Does 5% work on every bill payment via Google Pay?", a: "No. The rate is limited to eligible utility bill payments and recharges through Google Pay. Eligibility and exclusions are set by Axis and can change." },
    { q: "Axis ACE vs HDFC Millennia — which is better?", a: "They have different partner categories, cashback caps and exclusions. Compare each issuer's current terms against your own eligible spending rather than relying on headline rates." },
    { q: "Does Axis ACE earn on fuel?", a: "Fuel transactions are excluded from cashback under Axis's terms; a separate fuel-surcharge waiver may apply subject to its conditions." },
    { q: "When does the accelerated cashback cap reset?", a: "The combined ₹500 cap is per billing cycle. Refer to Axis's latest cashback terms for how transactions are categorized and processed." },
  ],
},
  },

  { id: "axis-atlas", name: "Axis Atlas", bank: "Axis", img: "🌍", color: "#0f766e", fee: 5000, feeWaiver: "No standard annual-fee waiver listed", type: "Travel", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card", rewardSourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card/rewards-benefits?id=Accelerated",
    rewards: { dining: 2, travel: 5, online: 2, groceries: 2, fuel: 0, utilities: 0, entertainment: 2, shopping: 2, default: 2 },
    caps: { monthlyCashback: 10000, capAppliesTo: ["travel"], fallbackRate: 2, capPeriod: "month", capDescription: "5 EDGE Miles/₹100 on the first ₹2L combined eligible Travel EDGE, direct-airline and hotel spend/month; 2 EDGE Miles/₹100 above that. This is travel-redemption value, not statement cashback." },
    rewardAssumptions: { travel: "5 EDGE Miles/₹100 applies only to Travel EDGE MID VERNMAKRUPCYB21 and airline MCC 3000–3350/4511 and hotel MCC 3501–3838/7011. Combined qualifying transaction cap: ₹2 lakh/month, then 2 Miles/₹100. OTAs/travel agents and other travel merchants are not eligible for the accelerated tier. The generic travel input cannot identify these routes; estimates are disabled.", utilities: "Utilities and telecom are excluded from EDGE Miles earning." },
    redemptionSourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card/rewards-benefits?id=Accelerated",
    partnerRates: [
      { name: "Travel EDGE, direct airline and hotel bookings", rate: "5 EDGE Miles/₹100 up to the monthly eligible-spend limit" },
      { name: "Other eligible spends", rate: "2 EDGE Miles/₹100" },
      { name: "Partner transfers", rate: "Partner list and conversion rates vary; check Axis Travel EDGE" },
    ],
    pointsInfo: "5 EDGE Miles/₹100 only on Travel EDGE (MID VERNMAKRUPCYB21), eligible airline MCCs 3000–3350/4511 and hotel MCCs 3501–3838/7011, up to ₹2 lakh combined qualifying spend/month; then 2/₹100. Other eligible spend earns 2/₹100. Miles cannot be encashed; transfers and redemption routes differ.",
    highlights: ["5 EDGE Miles/₹100 only on issuer-defined Travel EDGE, airline and hotel transactions; ₹2L monthly combined cap", "2 EDGE Miles/₹100 on other eligible spend", "₹99 per portal redemption; ₹199 per partner transfer", "Tier-based lounge benefits; qualifying spend thresholds apply"],
    pros: ["Travel-focused EDGE Miles earning", "Milestone and tier benefits", "Partner transfers (check current conversion terms)"],
    cons: ["₹5,000 joining and annual fee + GST", "₹99 portal redemption or ₹199 partner-transfer fee per transaction", "Accelerated rate is MCC/MID-specific; generic travel estimates are unavailable", "Tier, lounge and milestone benefits depend on anniversary-year eligible spend"],

    redemptionNote: "Axis states 1 EDGE Mile = ₹1 for its listed programme, but Miles cannot be encashed. Portal redemptions cost ₹99 per transaction; partner transfers cost ₹199 and conversion/availability vary. Annual tier Miles require payment of the ₹5,000 + GST fee (Gold 2,500; Platinum 5,000); milestone Miles are 2,500 at ₹3L, another 2,500 at ₹7.5L and another 5,000 at ₹15L in qualifying anniversary-year spend. Exclusions apply.",
    network: "Visa Infinite", lounge: "Tier-based: Silver 8 domestic/4 international, Gold 12/6, Platinum 18/12 per year; issuer access conditions apply",

    editorial: {
  verdict: {
    headline: "A travel rewards card with tiered lounge benefits and partner transfers whose terms can change.",
    body: `Axis Atlas earns 5 EDGE Miles per ₹100 on eligible Travel EDGE, direct airline and hotel transactions up to the issuer's monthly eligible-spend limit, and 2 EDGE Miles per ₹100 on other eligible spends. Some categories are excluded. Partner availability and transfer ratios can change, so check Axis Travel EDGE before transferring; EDGE Miles should not be treated as cash.

    The ₹5,000 annual fee and tier/milestone structure mean its value depends on eligible spend and how you redeem. Axis does not list a standard annual-fee waiver on its current product page.`,
    idealFor: "Travelers who can use EDGE Miles through an available redemption route and whose eligible direct-airline, hotel or Travel EDGE spend justifies the fee. Value depends on the routes, caps, tier and redemptions actually available to the cardholder.",
    skipIf: "You rarely travel or only care about cashback. The miles system requires effort to maximize. For simple cashback, Axis ACE or HDFC Millennia are easier choices.",
  },
  bestFor: [
    { category: "Eligible flight and hotel bookings", reason: "Eligible Travel EDGE and direct airline/hotel bookings earn 5 EDGE Miles/₹100 up to the monthly limit; agent/OTA bookings may earn the base rate instead." },
    { category: "Partner mile transfers", reason: "The live Axis Travel EDGE portal lists participating partners and current conversion rates; these can change." },
    { category: "Other eligible purchases", reason: "Earn 2 EDGE Miles/₹100 on other eligible spends; several categories are excluded." },
    { category: "Lounge access", reason: "Lounge entitlements vary by Atlas tier. Check Axis's current tier table and access conditions before travel." },
  ],
  avoidFor: [
    { category: "International transactions", reason: "~3.5% forex markup eats into rewards. For international spending, IDFC FIRST WOW (zero forex) or ICICI Emeralde (2% forex rewards) are better.", altCard: "idfc-wow" },
    { category: "Utility bills", reason: "2% on bills when Axis ACE gives 5% via GPay. Use ACE for bills, Atlas for travel.", altCard: "axis-ace" },
    { category: "Food delivery", reason: "2% on Swiggy/Zomato when Axis ACE gives 4% and HDFC Millennia gives 5%.", altCard: "axis-ace" },
  ],
  pairWith: [
    { combo: "Axis Atlas + Axis ACE", fee: "₹5,499/year", reason: "Consider Atlas only for its MCC/MID-eligible airline, hotel and Travel EDGE routes and after comparing redemption fees; ACE has separate eligible cashback routes. Both have exclusions and caps.", cardId: "axis-ace" },
    { combo: "Axis Atlas + IDFC FIRST WOW", fee: "₹5,000/year", reason: "Compare Atlas's issuer-defined eligible domestic travel earn and redemption fees with WOW's current foreign-currency terms. Atlas's accelerated rate does not apply to every travel merchant, and neither card is right for every trip.", cardId: "idfc-wow" },
  ],
  faq: [
    { q: "How do EDGE Miles transfers work?", a: "Transfer through the Axis Travel EDGE portal. The partner list, conversion ratios and annual transfer limits can change; verify the live table before transferring. EDGE Miles are not cash." },
    { q: "Is Atlas better than HDFC Regalia for travel?", a: "They use different reward systems, fees and booking rules. Compare the current issuer terms against your eligible travel spend and preferred redemption options; EDGE Miles should not be compared directly with cashback percentages." },
    { q: "Does Atlas have zero forex markup?", a: "No. Axis lists a 3.50% foreign-currency transaction fee, plus applicable taxes. EDGE Miles should not be assumed to offset this cost: foreign-currency spend does not qualify for the travel accelerated tier, and the base Miles cannot be encashed." },
  ],
},
  },


  { id: "au-lit", name: "AU LIT Credit Card", bank: "AU Bank", img: "🔥", color: "#ea580c", fee: 0, feeWaiver: "Lifetime free", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.au.bank.in/personal-banking/credit-cards/lit-credit-card/features",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Shoppers' Reward feature", rate: "5X or 10X Reward Points on eligible retail spends" },
      { name: "Optional cashback features", rate: "Additional 5% or 2% on eligible retail/category spends, with conditions and caps" },
    ],
    pointsInfo: "Base 1 Reward Point/₹100; optional paid features may boost eligible rewards or provide cashback. Feature-specific fees, durations, minimum spends and caps apply.",
    highlights: ["Lifetime-free base card", "Optional reward/cashback features", "Features run for 90 days and may auto-renew", "10,000-point statement-cycle cap"],
    pros: ["Customizable optional reward features", "Lifetime-free base card", "Fuel surcharge waiver subject to terms"],
    cons: ["Optional features may carry fees", "Feature terms, caps and eligible categories vary", "Rewards capped at 10,000 points per statement cycle"],

    redemptionNote: "AU LIT features are optional and feature-specific pricing applies for their 90-day duration. The bank says features may auto-renew; manage renewal in the AU app. Check each feature's live fee and terms before opting in.",
    network: "Visa/RuPay", lounge: "Add-on",

    editorial: {
  verdict: {
    headline: "A lifetime-free base card with optional, fee-based reward features.",
    body: `AU LIT combines a lifetime-free base card with optional reward and cashback features. Depending on the feature selected, eligible retail purchases can earn accelerated points or additional cashback; caps and minimum spends apply. Features last 90 days, are priced separately, and may auto-renew, so review the in-app fee and renewal setting before activating one.`,
    idealFor: "People willing to compare AU's optional feature fees and conditions against their own spending before activating a feature.",
    skipIf: "You want boosted rewards without paying feature fees or monitoring feature duration and renewal settings.",
  },
  bestFor: [
    { category: "Feature-based rewards", reason: "Optional features can add cashback or accelerated points on eligible spending. Check the current feature cost, validity period, minimum spend and cap first." },
    { category: "Planned short-term spend", reason: "A 90-day feature may suit a planned spend period if its fee is lower than the expected benefit and renewal is managed." },
    { category: "Category cashback", reason: "AU lists an additional 5% cashback feature for eligible grocery and apparel spend, capped at ₹500 per 30-day period; confirm current feature terms and pricing." },
  ],
  avoidFor: [
    { category: "All-round spending", reason: "1% base on non-selected categories is average. If your spending is spread equally across many categories, Axis ACE's 1.5% on everything is better.", altCard: "axis-ace" },
    { category: "Users who don't track feature fees", reason: "Optional features have separate pricing and a 90-day duration; account for those charges and renewal before activating them.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "AU LIT + Axis ACE", fee: "₹499/year plus any LIT feature fees", reason: "Use a paid LIT feature only when its expected eligible cashback/rewards outweigh the feature fee; Axis ACE may complement it for eligible everyday categories.", cardId: "axis-ace" },
    { combo: "AU LIT + Amazon Pay ICICI", fee: "LIT features may carry fees", reason: "A free base Amazon Pay ICICI card can complement AU LIT, but include any selected LIT feature costs when comparing value.", cardId: "amazon-icici" },
  ],
  faq: [
    { q: "How do AU LIT features work?", a: "Choose optional features in the AU app. Each feature has its own fee and terms and is valid for 90 days; AU says features may auto-renew unless renewal is disabled." },
    { q: "Is AU LIT completely free?", a: "The base card is lifetime free, but optional features can carry separate fees. Review the feature price and duration in the app before opting in." },
    { q: "Is AU Bank reliable?", a: "AU Small Finance Bank has grown significantly and offers full banking services. The card is issued on Visa/RuPay networks with standard security features. The app is functional but not as polished as HDFC or ICICI." },
  ],
},
  },

  { id: "au-zenith", name: "AU Zenith+", bank: "AU Bank", img: "⚜️", color: "#b45309", fee: 4999, feeWaiver: "₹8L net retail spend in previous card anniversary year", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.au.bank.in/premium-banking/credit-cards/zenith-plus-credit-card",
    rewards: { dining: 2, travel: 2, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Dining", rate: "5 pts/₹100 (1.25%)" },
      { name: "Travel", rate: "5 pts/₹100 (1.25%)" },
      { name: "International", rate: "10 pts/₹100 (2.5%)" },
    ],
    pointsInfo: "Up to 2 Reward Points/₹100 on dining, travel and international spends; AU lists 1 Reward Point = ₹1 for Zenith+. ₹4,999 annual fee; ₹8L net retail spend waiver from year 2.",
    highlights: ["16 domestic and 16 international lounge visits/year", "0.99% forex markup", "Up to 2 Reward Points/₹100 on dining, travel and international spends", "₹8L annual fee-waiver threshold"],
    pros: ["Substantial domestic and international lounge access", "Low 0.99% forex markup", "₹8L anniversary-year fee waiver"],
    cons: ["₹4,999 annual fee", "Reward value depends on AU redemption options", "Terms and milestone benefits can change"],
    network: "Visa Infinite / RuPay", lounge: "16 domestic + 16 international annually; India Priority Pass visits are chargeable",

    editorial: {
  verdict: {
    headline: "A premium travel card with extensive tiered lounge access and 0.99% forex markup.",
    body: `AU Zenith+ charges ₹4,999 annually and offers a fee waiver from the second year after ₹8 lakh in net retail anniversary-year spend. AU lists 16 domestic and 16 international lounge visits annually, a 0.99% forex markup, and up to 2 Reward Points per ₹100 on dining, travel and international spend. Check current milestone terms and redemption value before deciding whether the fee works for you.`,
    idealFor: "Frequent travelers able to use the lounge benefits and who value the 0.99% forex markup, subject to the card's fee and current terms.",
    skipIf: "You won't use lounge access or travel benefits enough to offset the annual fee, and don't meet the eligible spend waiver threshold.",
  },
  bestFor: [
    { category: "Airport lounges", reason: "AU lists 16 domestic and 16 international lounge visits annually; domestic Priority Pass usage is chargeable. Check current eligible lounges and terms." },
    { category: "International spending", reason: "The current foreign-currency markup is 0.99%; this is a fee, not a cashback or reward rate." },
    { category: "Dining and travel", reason: "AU advertises up to 2 Reward Points per ₹100 on dining and travel; redemption value depends on AU's current catalogue and terms." },
  ],
  avoidFor: [
    { category: "General domestic spending", reason: "The card's headline reward rates emphasize dining, travel and international spend; compare the applicable rate and redemption value for other categories in the latest terms.", altCard: "axis-ace" },
    { category: "Online shopping", reason: "Compare current eligible online-spend rewards and redemption value before using this as a primary shopping card.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "AU Zenith+ + Axis ACE", fee: "₹5,498/year", reason: "Zenith+ for lounges and international spending, ACE for all domestic spending (1.5-5%).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is AU Zenith+ worth the ₹4,999 fee?", a: "It depends on the value you place on its current lounge, travel and lifestyle benefits and your eligible spending. Compare those with the fee and your own redemption value." },
    { q: "Can I get the fee waived?", a: "AU lists a waiver from the second year onward after ₹8 lakh in net retail spends in the previous card anniversary year." },
  ],
},
  },

  { id: "idfc-wow", name: "IDFC FIRST WOW", bank: "IDFC", img: "🌟", color: "#059669", fee: 0, feeWaiver: "Lifetime free; FD-backed (minimum FD ₹20,000)", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.idfcfirst.bank.in/credit-card/wow",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.125, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Eligible online, offline and international spends", rate: "4 Reward Points/₹200" },
      { name: "Utilities, insurance, FASTag and railway spends", rate: "1 Reward Point/₹200" },
    ],
    pointsInfo: "4 Reward Points/₹200 on eligible online, offline and international spends; 1 point/₹200 on utilities, insurance, FASTag and railway spends. 1 point = ₹0.25; points expire after 24 months; redemption fee ₹99 + GST.",
    highlights: ["Lifetime-free, FD-backed card", "Zero forex markup", "Up to 4 Reward Points/₹200", "Reward points valid for 24 months"],
    pros: ["Zero forex markup", "No joining or annual fee", "FD-backed access without income proof"],
    cons: ["Requires an FD (minimum ₹20,000)", "Reward points expire after 24 months", "₹99 + GST redemption fee; no airport lounge access"],
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "A lifetime-free, FD-backed card with zero forex markup.",
    body: `IDFC FIRST WOW is secured against a fixed deposit and has no joining or annual fee. It offers zero forex markup and up to 4 Reward Points per ₹200 on eligible retail and international transactions. Utilities and certain other categories earn at a lower rate; fuel, EMI and cash withdrawals do not earn points. Points are worth ₹0.25 for standard redemption, expire after 24 months, and each redemption costs ₹99 + GST.`,
    idealFor: "People who want an FD-backed card, including users with limited credit history, and who value zero forex markup.",
    skipIf: "You need an unsecured card or would rather avoid an FD requirement and reward redemption/expiry conditions.",
  },
  bestFor: [
    { category: "International subscriptions", reason: "Netflix, Spotify, GitHub, AWS, Adobe — any USD/EUR subscription costs 0% markup. On ₹5K/month in subscriptions, you save ₹150-175/month vs a standard card." },
    { category: "International online shopping", reason: "Shopping from Amazon US, eBay, AliExpress with zero forex. The savings compound significantly for frequent international shoppers." },
    { category: "Travel abroad", reason: "Eligible foreign-currency card purchases have zero forex markup. ATM cash advances, exchange rates and dynamic currency conversion can still involve separate costs." },
  ],
  avoidFor: [
    { category: "Domestic spending", reason: "Reward rates depend on category: most eligible retail spends earn 4 points per ₹200, while utilities and selected categories earn 1 point per ₹200. Points are not cash and redemption conditions apply.", altCard: "axis-ace" },
    { category: "Lounge access", reason: "No lounge access at all. Pair with a lounge card for travel.", altCard: "hdfc-regalia" },
  ],
  pairWith: [
    { combo: "IDFC WOW + Axis ACE", fee: "₹499/year", reason: "WOW for all international transactions (zero forex), ACE for all domestic spending (1.5-5%). A free + ₹499 combo that covers everything.", cardId: "axis-ace" },
    { combo: "IDFC WOW + HDFC Millennia", fee: "₹1,000/year", reason: "WOW for international, Millennia for domestic online partners (5%). Strong for people who shop both domestically and internationally.", cardId: "hdfc-millennia" },
    { combo: "IDFC WOW + Axis Atlas", fee: "₹5,000/year", reason: "WOW for zero forex on international transactions, Atlas for domestic travel rewards (5%) and airline mile transfers. The complete travel card combo.", cardId: "axis-atlas" },
  ],
  faq: [
    { q: "Is zero forex really zero?", a: "IDFC FIRST lists zero forex markup on eligible foreign-currency card transactions. Dynamic currency conversion, cash advances and other charges can still apply; check the transaction currency and applicable terms." },
    { q: "Does zero forex apply on ATM withdrawals abroad?", a: "Zero forex applies to POS and online transactions. International ATM withdrawals may have separate cash advance charges — check with IDFC FIRST." },
    { q: "Do points expire?", a: "Yes. IDFC FIRST WOW reward points are valid for 24 months from credit. A ₹99 + GST fee applies to each successful redemption." },
  ],
},
  },

  { id: "idfc-select", name: "IDFC FIRST Select", bank: "IDFC", img: "⭐", color: "#0d9488", fee: 0, feeWaiver: "Lifetime free", type: "Premium Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.idfcfirst.bank.in/credit-card/select",
    rewards: { dining: 1.25, travel: 1.25, online: 0.375, groceries: 0.375, fuel: 0, utilities: 0.125, entertainment: 0.375, shopping: 0.375, default: 0.375 },
    partnerRates: [
      { name: "Dining, travel and international spends", rate: "Up to 10X Reward Points" },
      { name: "Other eligible retail spends", rate: "3X up to ₹20,000 statement-cycle spend; 10X on incremental spend above ₹20,000 and on birthday spends" },
      { name: "Utilities, insurance, FASTag and railway spends", rate: "1X Reward Points" },
    ],
    pointsInfo: "3 Reward Points/₹200 on eligible spends up to ₹20,000 per statement cycle; 10X on incremental spends above ₹20,000 and on birthday spends. Dining/travel/international may earn up to 10X; select categories earn 1X. 1 point = ₹0.25; points valid for 24 months.",
    highlights: ["Lifetime free", "Zero forex markup", "1 domestic airport visit/quarter after ₹20K spend in the previous month", "4 railway lounge visits/quarter after spend condition"],
    pros: ["No joining or annual fee", "Zero forex markup", "Airport and railway lounge access subject to spend eligibility"],
    cons: ["₹20K spend condition for lounge access", "Fuel excluded from rewards", "₹99 + GST redemption fee; points expire after 24 months"],

    redemptionNote: "Reward earning is tiered by monthly spend and category; 1 point is worth ₹0.25. A ₹99 + GST redemption fee applies. IDFC FIRST also advertises bonus points on eligible flight and hotel bookings through its app; check the live offer terms.",
    network: "Visa", lounge: "1 domestic airport + 4 railway visits/quarter, each subject to the current ₹20K monthly spend condition",
    recentChanges: { date: "January 2026", changes: ["Reward-point base revised to 1 point per ₹200", "Select railway/FASTag categories moved to 1X and excluded from milestone spend", "Airport lounge access requires ₹20K monthly spend"], impact: "Use the current point-per-₹200 basis and verify lounge eligibility each month" },

    editorial: {
  verdict: {
    headline: "A lifetime-free card with zero forex and spend-gated domestic lounge access.",
    body: `FIRST Select has no joining or annual fee and now carries zero forex markup under IDFC FIRST Bank's current card terms. Rewards depend on category and statement-cycle spending tiers: the bank lists up to 10X on dining, travel and international purchases, 3X on other eligible spends up to ₹20,000, and 10X on incremental spend above that threshold and birthday purchases. One domestic airport visit per quarter and railway lounge access require meeting the monthly spend condition. Points expire after 24 months.`,
    idealFor: "People seeking a lifetime-free card with zero forex and who can meet the monthly spend condition for lounge access.",
    skipIf: "You need unconditional lounge access or want straightforward cashback rather than tiered reward points.",
  },
  bestFor: [
    { category: "Birthday-month spending", reason: "Eligible birthday-month purchases earn 10X Reward Points under the current program terms." },
    { category: "International transactions", reason: "IDFC FIRST currently lists zero forex markup for its credit cards; check the applicable terms and DCC choices when paying abroad." },
    { category: "Airport and railway lounges", reason: "Access is limited by quarterly visit counts and the current monthly spend condition; confirm eligibility and lounge lists before travel." },
    { category: "Higher monthly spend", reason: "Eligible incremental spend above ₹20,000 can earn 10X Reward Points; points are not equivalent to a fixed cashback percentage." },
  ],
  avoidFor: [
    { category: "Regular everyday spending", reason: "Standard earning is 3 Reward Points per ₹200 before category and statement-cycle accelerators. Compare point value and redemption fees with a cashback card.", altCard: "axis-ace" },
    { category: "Unconditional lounge access", reason: "Airport lounge visits require meeting the bank's monthly spend condition; select visits are limited each quarter.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "IDFC Select + Axis ACE", fee: "₹499/year", reason: "Select for lounges, zero forex, and birthday month. ACE for all regular spending (1.5-5%). Free + ₹499 covers everything.", cardId: "axis-ace" },
    { combo: "IDFC Select + HDFC Millennia", fee: "₹1,000/year", reason: "Select for lounges and international transactions, Millennia for domestic online partners (5%).", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "How do birthday-month rewards work?", a: "Eligible birthday-month purchases earn 10X Reward Points under the current program terms. This is a points multiplier, not a 5% cashback promise; exclusions and caps apply." },
    { q: "How does the ₹20,000 spend tier work?", a: "The current program offers 3X on eligible spends up to ₹20,000 per statement cycle and 10X on incremental eligible spends above that threshold. Some categories have separate earning rates or exclusions." },
    { q: "Is zero forex the same as IDFC WOW?", a: "IDFC FIRST currently lists zero forex markup across its credit cards. Select also has domestic airport and railway lounge benefits, subject to visit limits and spend eligibility." },
  ],
},
  },

  { id: "onecard", name: "OneCard", bank: "OneCard", img: "⚡", color: "#18181b", fee: 0, feeWaiver: "Lifetime free", type: "Lifestyle", verified: true,
    rewards: { dining: 0.2, travel: 0.2, online: 0.2, groceries: 0.2, fuel: 0.2, utilities: 0.2, entertainment: 0.2, shopping: 0.2, default: 0.2 },
    partnerRates: [
      { name: "Top 2 spending categories (auto-detected)", rate: "5x points (~1%)" },
    ],
    pointsInfo: "5x on top 2 categories (~1%), 1x others (~0.2%) · 1pt = ₹0.10 · Points never expire",
    highlights: ["Metal card", "5x on top 2 categories", "Lifetime free", "Points never expire"],
    pros: ["Metal card (premium feel)", "Low 1% forex markup", "Auto-optimizes for your spending", "Free forever"],
    cons: ["Effective rate only ~1% even at 5x", "0.2% on non-top categories", "No lounge"],

    redemptionNote: "Top 2 spending categories auto-detected monthly at 5x (~1%). Other categories 1x (~0.2%). Algorithm picks based on actual spend — not manually selectable.",
    network: "Visa/MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "A metal card with smart auto-optimizing rewards — but the effective rates are disappointingly low.",
    body: `OneCard markets itself as a smart, premium card with its metal build and algorithm that auto-detects your top 2 spending categories for 5x rewards. It sounds impressive, but the math tells a different story: 5x points at ₹0.10/point = 1% effective rate on your top categories. Everything else earns 0.2%.

The metal card looks and feels premium, and the app is genuinely excellent. But as a rewards card, it underdelivers compared to competition. A free card that earns 1% at best is hard to justify when Axis ACE gives 1.5% on everything and HDFC Millennia gives 5% on partners — both for under ₹500/year.`,
    idealFor: "People who want a premium-looking free card with a good app experience, and don't care about maximizing cashback. Also decent if your top 2 categories are consistent month over month.",
    skipIf: "You care about actual reward value. 1% maximum (on 5x categories) and 0.2% on everything else is among the lowest effective rates of any card on our list.",
  },
  bestFor: [
    { category: "Auto-optimized top 2 categories", reason: "The algorithm picks your highest-spending categories for 5x points. No manual selection needed — unlike AU LIT which requires active management." },
    { category: "Premium feel on zero budget", reason: "Metal card, clean app, good UX. If aesthetics and app experience matter to you, OneCard delivers." },
    { category: "Fuel (rare)", reason: "1% on fuel is unusual — most cards give 0%. If you spend heavily on fuel, OneCard's auto-detection might pick it up." },
  ],
  avoidFor: [
    { category: "Maximizing rewards", reason: "1% at best is below Axis ACE's 1.5% floor. On ₹50K/month spending, you earn ₹500 on OneCard vs ₹750 on ACE.", altCard: "axis-ace" },
    { category: "Online shopping", reason: "0.2% on online unless it's your top category. HDFC Millennia gives 25x more at 5%.", altCard: "hdfc-millennia" },
    { category: "Lounge access", reason: "No lounge access. For a free card with lounges, IDFC FIRST Select offers 4 visits/year.", altCard: "idfc-select" },
  ],
  pairWith: [
    { combo: "OneCard + Axis ACE", fee: "₹499/year", reason: "Keep OneCard as a metal backup card, use ACE for actual spending at 1.5-5%.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Can I choose which categories get 5x?", a: "No. The algorithm auto-detects your top 2 spending categories based on actual usage. You can't manually select or override it." },
    { q: "Is the metal card actually better?", a: "Functionally identical to a plastic card. The metal build is an aesthetic choice. It's heavier, looks premium, but doesn't improve contactless performance or durability meaningfully." },
    { q: "Why is OneCard so popular despite low rewards?", a: "Marketing, app experience, and the metal card create a premium perception. Many users don't calculate their effective rate — they just see '5x' and assume it's good." },
  ],
},
  },

  { id: "bob-eterna", name: "BOB Eterna", bank: "BOB", img: "🏛️", color: "#1e40af", fee: 2499, feeWaiver: "₹2.5L annual spend (was LTF until Mar 2026)", type: "Premium", verified: true,
    rewards: { dining: 3.75, travel: 3.75, online: 3.75, groceries: 0.75, fuel: 0, utilities: 0.75, entertainment: 0.75, shopping: 0.75, default: 0.75 },
    partnerRates: [
      { name: "Dining/travel/online", rate: "15 pts/₹100 (3.75%)" },
    ],
    pointsInfo: "15 pts/₹100 dining/travel/online (3.75%), 3 pts other (0.75%) · 1pt = ₹0.25 · Fuel surcharge waiver",
    highlights: ["3.75% on dining/travel/online", "Lounge: tier-based (4 intl at Silver, more at higher tiers)", "Golf access", "BookMyShow discount"],
    pros: ["Excellent 3.75% on dining/travel/online", "18 lounge visits", "Golf access", "Low fee waiver ₹2.5L"],
    cons: ["0.75% on general spends", "BOB app mediocre", "Point redemption limited"],
    network: "Visa", lounge: "18/year",

    editorial: {
  verdict: {
    headline: "A hidden gem — 3.75% on dining, travel, and online from a bank nobody expects.",
    body: `BOB Eterna flies under the radar because Bank of Baroda isn't the first name in credit cards. But 3.75% on dining, travel, and online shopping is the highest non-HDFC rate in India at this price point. Add 18 lounge visits/year and golf access, and Eterna competes directly with HDFC Regalia.

The fee waiver at ₹2.5L is more achievable than Regalia's ₹4L. The main downsides: 0.75% on general spends, BOB's mobile app is dated, and point redemption options are limited. But for the three categories where it shines, Eterna is genuinely excellent.`,
    idealFor: "Frequent diners, travelers, and online shoppers looking for premium-level rewards without HDFC's ecosystem. If you spend ₹20K+/month across dining/travel/online, the 3.75% rate makes this one of the best value cards available.",
    skipIf: "You want a great mobile app experience or need wide redemption options. BOB's digital experience lags behind HDFC and Axis. Also skip if most spending is groceries/fuel/utilities (0.75% is below average).",
  },
  bestFor: [
    { category: "Dining", reason: "3.75% on restaurants — among the highest dining rates available. On ₹10K/month restaurant spending, that's ₹375/month or ₹4,500/year." },
    { category: "Travel", reason: "3.75% on travel bookings. Competitive with HDFC Regalia's SmartBuy rates without needing a specific booking portal." },
    { category: "Online shopping", reason: "3.75% on online shopping is exceptional — only HDFC Millennia's 5% on partners beats it, and that has a ₹1K/month cap." },
    { category: "Lounge access", reason: "18 visits/year matches HDFC Regalia, at a lower effective fee (easier waiver)." },
  ],
  avoidFor: [
    { category: "Groceries and utilities", reason: "0.75% on both. SBI ELITE gives 2.5% on groceries, Axis ACE gives 5% on utility bills.", altCard: "axis-ace" },
    { category: "Fuel", reason: "0% rewards on fuel. Only fuel surcharge waiver applies.", altCard: "rbl-shoprite" },
    { category: "General offline non-dining", reason: "0.75% on general spending. Axis ACE's 1.5% uncapped is double.", altCard: "axis-ace" },
  ],
  pairWith: [
    { combo: "BOB Eterna + Axis ACE", fee: "₹2,998/year", reason: "Eterna for dining/travel/online (3.75%), ACE for utilities (5%), groceries (1.5%), and everything else.", cardId: "axis-ace" },
    { combo: "BOB Eterna + Amazon Pay ICICI", fee: "₹2,499/year", reason: "Eterna for dining/travel/general online (3.75%), Amazon card for Amazon specifically (5%, no cap).", cardId: "amazon-icici" },
  ],
  faq: [
    { q: "Is BOB Eterna easy to get?", a: "BOB has lower approval thresholds than HDFC for premium cards. If you have an existing BOB relationship or salary account, approval is typically straightforward." },
    { q: "How do I redeem BOB Eterna points?", a: "Points can be redeemed through the BOB rewards portal for gift vouchers, merchandise, or catalogue items. Direct statement credit may be available but check current options — redemption is more limited than HDFC." },
    { q: "BOB Eterna vs HDFC Regalia?", a: "Compare current eligible earn, redemption values, fees and exclusions. HDFC says Regalia is no longer sourced for new applications; this site has not completed a current side-by-side review." },
  ],
},
  },

  { id: "kotak-811", name: "Kotak 811 Dream", bank: "Kotak", img: "🌊", color: "#e11d48", fee: 0, feeWaiver: "Lifetime free", type: "Entry", verified: true,
    rewards: { dining: 0.5, travel: 0.5, online: 1, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    caps: { monthlyPoints: 10000, pointValue: 0.25, spendPer: 100, pointsPer: 4 },
    partnerRates: [],
    pointsInfo: "4 pts/₹100 online (1%), 2 pts offline (0.5%) · 1pt = ₹0.25 · 10K pts/mo cap · Fuel excluded",
    highlights: ["Lifetime free", "1% online", "Easy approval", "Good starter card"],
    pros: ["Free forever", "1% online cashback", "Easy approval for beginners"],
    cons: ["0.5% offline", "10K points/month cap", "No lounge/perks", "Fuel excluded"],
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "The easiest credit card to get in India — a true starter card with no frills and no fee.",
    body: `Kotak 811 Dream exists for one purpose: getting your first credit card. Easy approval (even for thin credit files), lifetime free, and a simple 1% online / 0.5% offline reward structure. It's not exciting, but it's functional and costs nothing.

This card is a stepping stone, not a destination. Use it for 6-12 months to build credit history, then upgrade to a card with better rewards. The 10,000 points/month cap and lack of any perks mean you'll outgrow it quickly.`,
    idealFor: "First-time credit card users or those building credit history. Easy approval, zero risk (no fee), and teaches you how credit cards work.",
    skipIf: "You already have a credit card or credit history. Even IDFC FIRST Select (also free) gives you lounge access, zero forex, and a birthday bonus. 811 Dream is only for the true beginner.",
  },
  bestFor: [
    { category: "Building credit history", reason: "Easy approval and zero cost make this the safest way to start building a credit score. Use for 6-12 months, then upgrade." },
    { category: "Online purchases (basic)", reason: "1% on online shopping is the highest rate this card offers. Adequate for light online shopping while you build toward better cards." },
  ],
  avoidFor: [
    { category: "Any significant spending", reason: "0.5% offline and 1% online are among the lowest rates available. Once you have credit history, switch to Axis ACE or HDFC Millennia.", altCard: "axis-ace" },
    { category: "Lounge access or travel", reason: "No lounges, no travel perks. If you need a free card with perks, IDFC FIRST Select is far better.", altCard: "idfc-select" },
  ],
  pairWith: [
    { combo: "Kotak 811 + Amazon Pay ICICI", fee: "Free", reason: "Both free. Amazon card for Amazon shopping (5%), 811 Dream for building credit history on other purchases. Graduate to better cards after 6-12 months.", cardId: "amazon-icici" },
  ],
  faq: [
    { q: "Can I upgrade from kotak 811 Dream to a better Kotak card?", a: "Yes, after 6-12 months of good credit behavior. Kotak may offer you their higher-tier cards like Kotak Royale or White based on your usage and payment history." },
    { q: "Is the 10,000 points/month cap a problem?", a: "At 1% online rate, you'd need to spend ₹2.5L/month online to hit the cap. For a starter card, this cap is unlikely to matter." },
    { q: "Should I use this as my main card?", a: "Only if you have no other option. Use it to build credit, then apply for Axis ACE or HDFC Millennia within 6-12 months for significantly better rewards." },
  ],
},
  },

  { id: "indusind-legend", name: "IndusInd Legend", bank: "IndusInd", img: "🦁", color: "#7e22ce", fee: 0, feeWaiver: "Lifetime free", type: "Lifestyle", verified: true,
    rewards: { dining: 0.25, travel: 0.25, online: 0.25, groceries: 0.25, fuel: 0, utilities: 0.25, entertainment: 0.5, shopping: 0.25, default: 0.25 },
    partnerRates: [
      { name: "Weekend spends", rate: "2 pts/₹100 (0.5%)" },
      { name: "₹5L milestone", rate: "10,000 bonus points (₹2,500)" },
    ],
    pointsInfo: "1 pt/₹100 weekday (0.25%), 2 pts weekend (0.5%) · 1pt = ₹0.25 · ₹5L milestone bonus · Fuel surcharge waiver",
    highlights: ["Lifetime free", "Weekend 2x points", "₹5L milestone bonus", "Fuel surcharge waiver"],
    pros: ["Lifetime free", "Weekend double points", "Milestone bonus at ₹5L"],
    cons: ["Very low base rate (0.25%)", "Lounge discontinued Mar 2025", "0.5% even on weekends"],
    network: "Visa Signature", lounge: "Discontinued",

    editorial: {
  verdict: {
    headline: "A free card that lost its main perk — lounge access was discontinued. Little reason to choose it now.",
    body: `IndusInd Legend was once attractive for its free lounge access and weekend double points. But with lounge access discontinued in March 2025, the card's main differentiator is gone. What remains is a 0.25% base rate (0.5% on weekends) and a ₹5L milestone bonus — neither of which justify choosing this over better free alternatives.

The milestone bonus of 10,000 points (₹2,500) at ₹5L annual spend is nice, but IDFC FIRST Select gives lounge access, zero forex, AND a birthday bonus — all for free. IndusInd Legend is now a card for existing holders, not new applicants.`,
    idealFor: "Existing IndusInd customers who already have the card and benefit from the ₹5L milestone bonus. Not recommended for new applicants.",
    skipIf: "You're applying for a new card. IDFC FIRST Select, Amazon Pay ICICI, or AU LIT are all better free options in 2026.",
  },
  bestFor: [
    { category: "Weekend spending (if you already have it)", reason: "0.5% on weekends is double the weekday rate. If you time large purchases for weekends, the effective rate improves slightly." },
    { category: "₹5L milestone chasers", reason: "If you naturally spend ₹5L/year, the 10,000 point bonus (₹2,500) is a nice annual reward on top of regular points." },
  ],
  avoidFor: [
    { category: "Everything (for new applicants)", reason: "0.25% base with no lounge access. Almost every free card on the market is better in 2026.", altCard: "idfc-select" },
    { category: "Online shopping", reason: "0.25% is negligible. HDFC Millennia gives 20x more at 5%.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "IndusInd Legend + Axis ACE", fee: "₹499/year", reason: "If you already have Legend, add ACE for actual rewards on your spending (1.5-5%). Use Legend only for milestone tracking.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Will lounge access come back?", a: "No official announcement. IndusInd discontinued lounge access in March 2025 across several cards. Don't count on it returning." },
    { q: "Is the ₹5L milestone bonus automatic?", a: "Points are credited after you cross ₹5L in annual spend. This is cumulative — all spending counts, not just specific categories." },
    { q: "Should I close this card?", a: "If it's your oldest credit card, keep it open for credit history length. If you have older cards, there's little reason to keep Legend active." },
  ],
},
  },

  { id: "yes-ace", name: "YES Private Ace", bank: "YES Bank", img: "🃏", color: "#ca8a04", fee: 10000, feeWaiver: "₹10L annual spend", type: "Super Premium", verified: true,
    rewards: { dining: 0.5, travel: 0.5, online: 0.75, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    caps: { monthlyPoints: 50000, pointValue: 0.25, spendPer: 200, pointsPer: 6 },
    partnerRates: [
      { name: "Online spends", rate: "6 pts/₹200 (0.75%)" },
    ],
    pointsInfo: "6 pts/₹200 online (0.75%), 4 pts/₹200 offline (0.5%) · 1pt = ₹0.25 · 50K pts cap/cycle · Fuel/rent excluded",
    highlights: ["Unlimited lounge access", "0.75% online", "Fee waiver ₹10L"],
    pros: ["Unlimited domestic + intl lounge", "Higher online rate"],
    cons: ["₹10K + GST fee", "Low reward rates overall", "Fuel/rent excluded", "50K pts cap"],
    network: "Visa Infinite", lounge: "Unlimited",

    editorial: {
  verdict: {
    headline: "Unlimited lounge access on a card with mediocre rewards — only worth it for ultra-frequent flyers.",
    body: `YES Private Ace's value proposition is simple: unlimited lounge access. If you fly 20+ times a year domestically and value lounge access above rewards, this card delivers. The unlimited visits have no cap — use a lounge every week if you want.

But 0.5-0.75% reward rates on a ₹10,000/year card are hard to justify on spending alone. The 50K points/month cap further limits earning potential. This is purely a lounge card — if you need rewards, look elsewhere.`,
    idealFor: "Ultra-frequent domestic travelers (20+ flights/year) who use airport lounges regularly. If lounge visits are your primary credit card benefit, the unlimited access justifies the fee.",
    skipIf: "You fly less than 15 times a year. HDFC Regalia (18 lounge visits) or BOB Eterna (18 visits) offer similar lounge access with significantly better reward rates.",
  },
  bestFor: [
    { category: "Unlimited lounge access", reason: "No visit caps, domestic or international. For someone flying weekly, this is unmatched." },
    { category: "Online spending", reason: "0.75% online is the highest rate this card offers — modest but slightly above its offline rate." },
  ],
  avoidFor: [
    { category: "Earning rewards", reason: "Compare redemption value and current fees with an available card; Regalia is no longer sourced for new applications." },
    { category: "Online shopping", reason: "0.75% when competitors offer 5%+. The gap is enormous.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "YES Ace + Axis ACE", fee: "₹10,499/year", reason: "YES Ace for unlimited lounges, ACE for all actual spending (1.5-5%). Lounge card + rewards card.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is unlimited lounge really unlimited?", a: "Yes, no caps on domestic or international Priority Pass visits. Each visit can include 1 guest (guest visit also free on most programs)." },
    { q: "Can I get the ₹10K fee waived?", a: "Yes, at ₹10L annual spend (₹83K/month). A high bar that most people won't reach casually." },
    { q: "YES Bank reliability concerns?", a: "YES Bank went through a crisis in 2020 but has since stabilized under new management with RBI oversight. Card operations continue normally." },
  ],
},
  },

  { id: "rbl-shoprite", name: "RBL ShopRite", bank: "RBL", img: "🧺", color: "#c026d3", fee: 500, feeWaiver: "₹1.5L eligible purchases in the membership year", type: "Grocery", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.rbl.bank.in/personal-banking/cards/credit-cards/shoprite-credit-card", rewardSourceUrl: "https://webassets.rbl.bank.in/document/credit-cards/tnc-shoprite-credit-card.pdf",
    rewardAssumptions: { default: "Illustrative maximum catalogue value of ₹0.25/point, not statement cashback. Assumes eligible retail MCCs; point rounding and redemption charges are not modelled.", groceries: "Treats entered spend as issuer-listed grocery MCCs (5411, 5422, 5441, 5451 or 5499); first 1,000 accelerated points per billing cycle earn 20 points/₹100, then 1 point/₹100. Actual merchant coding and ₹0.25 maximum-value redemption route apply." },
    rewards: { dining: 0.25, travel: 0.25, online: 0.25, groceries: 5, fuel: 0, utilities: 0, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    caps: { monthlyPoints: 1000, pointValue: 0.25, spendPer: 100, pointsPer: 20, capPeriod: "billing cycle", groceryPointsAboveCap: 1 },
    partnerRates: [
      { name: "Grocery stores", rate: "20 pts/₹100 (5%)" },
      { name: "BookMyShow movies", rate: "10% ticket discount, up to ₹100; 15 uses/year (offer terms apply)" },
      { name: "Other eligible retail", rate: "1 point/₹100 (up to 0.25% redemption value)" },
    ],
    pointsInfo: "20 reward points/₹100 on eligible grocery MCCs up to 1,000 accelerated points per billing cycle, then 1 point/₹100 on grocery spend above the cap; each point redeems for up to ₹0.25. Other eligible retail earns 1 point/₹100. Fuel earns no reward points; a separate surcharge waiver applies to eligible ₹500–₹4,000 purchases up to ₹100 per calendar month.",
    highlights: ["20 points/₹100 on eligible grocery MCCs, up to 1,000 points/billing cycle", "Points are worth up to ₹0.25 each; rewards are not cash", "₹500 annual fee waived at ₹1.5L eligible membership-year spend", "Separate fuel-surcharge waiver has its own terms"],
    pros: ["Grocery reward applies to eligible online and in-store grocery MCCs", "Up to 5% value back before the monthly points cap", "₹1.5L eligible annual-fee waiver threshold"],
    cons: ["Only first 1,000 monthly grocery points earn at 20 points/₹100; then 1 point/₹100", "Reward value depends on redemption and points are not direct cash", "Fuel, utility, and other listed categories are excluded from reward points"],
    network: "Visa/Mastercard/RuPay", lounge: "None",

    editorial: {
  verdict: {
    headline: "A grocery-focused points card with a low monthly accelerated-earn cap.",
    body: `RBL ShopRite earns 20 Reward Points per ₹100 on eligible grocery transactions, capped at 1,000 grocery points per billing cycle; grocery spend above that cap earns 1 point per ₹100. RBL says each point can be redeemed for up to ₹0.25, so the headline 5% is a maximum-value equivalent on only the accelerated tier—not direct cashback. Fuel earns no reward points, though a separate surcharge waiver may apply on eligible transactions.

The card's annual fee is ₹500 plus applicable tax; RBL lists a waiver at ₹1.5 lakh eligible membership-year spend. Merchant MCC eligibility and point redemption terms determine realized value.`,
    idealFor: "People with eligible grocery MCC spend within the monthly 1,000-point accelerated cap who are comfortable redeeming RBL reward points.",
    skipIf: "You want direct cashback, spend well above the accelerated grocery cap, or expect fuel/utility purchases to earn reward points.",
  },
  capMath: {
    title: "The grocery points cap and separate card benefits",
    body: `Eligible grocery transactions earn 20 Reward Points per ₹100, up to 1,000 grocery points per billing cycle (₹250 at the maximum stated redemption value of ₹0.25 per point). Grocery spending above that points cap earns 1 point per ₹100. This cap applies to grocery reward points only; fuel does not earn reward points.

Other eligible purchases earn 1 point per ₹100. A separate BookMyShow offer gives a 10% ticket discount up to ₹100, 15 times per calendar year. Fuel surcharge relief is also separate: eligible ₹500–₹4,000 purchases, up to ₹100/calendar month. These benefits do not share a 5,000-point cap.`,
  },
  bestFor: [
    { category: "Eligible grocery transactions", reason: "20 Reward Points/₹100 up to 1,000 grocery points per billing cycle; value depends on redemption and is not direct cashback." },
    { category: "Fuel", reason: "Fuel earns no reward points. A separate surcharge waiver may apply to eligible ₹500–₹4,000 transactions, up to ₹100/calendar month." },
    { category: "BookMyShow", reason: "Separate 10% movie-ticket discount up to ₹100, 15 times per calendar year; this is not reward-point earning." },
  ],
  avoidFor: [
    { category: "Fuel rewards", reason: "Fuel earns no reward points; the surcharge waiver is a separate, capped benefit." },
    { category: "Utilities and excluded merchant categories", reason: "These categories do not earn reward points under the listed product terms." },
  ],
  pairWith: [
    { combo: "ShopRite + a card suited to your other spending", fee: "Fees depend on the second card", reason: "ShopRite's grocery points and fuel surcharge waiver have separate rules; compare eligible merchant categories with the second card's terms and redemption route.", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "Does ShopRite earn rewards on fuel?", a: "No. Fuel is excluded from reward points. Eligible ₹500–₹4,000 fuel purchases may receive a separate surcharge waiver, up to ₹100/calendar month." },
    { q: "Do online grocery orders earn the grocery rate?", a: "The issuer defines eligible categories by merchant category code. An online grocery order qualifies only when its posted category is eligible; the grocery rate is capped at 1,000 points per billing cycle." },
    { q: "Can the ₹500 annual fee be waived?", a: "Yes. RBL lists an annual-fee waiver at ₹1.5 lakh in eligible purchases during a membership year. Some categories are excluded from the waiver calculation." },
  ],
},
  },


  // ═══ EXPANDED CATALOGUE (review status is per record) ═══

// ═══ AXIS BANK ═══

  { id: "axis-airtel", name: "Axis Airtel Credit Card", bank: "Axis", img: "📱", color: "#e60012", fee: 500, joiningFee: 500, feeWaiver: "Annual fee waived when eligible annual spend exceeds ₹2 lakh; rent (MCC 6513) and wallet loads (MCC 6540) do not count.", feeScheduleNote: "Primary joining fee ₹500; annual fee ₹500 from year two, subject to the eligible-spend waiver. Add-on joining and annual fees are waived.", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/airtel-axis-bank-credit-card", rewardSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/credit-cards/terms-and-conditions-for-cashback-for-airtel-axis-bank-credit-card.pdf?sfvrsn=3192829c_10",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    caps: { capMethod: "Airtel Thanks 25% cashback capped at 2× and Airtel Thanks utility 10% cashback capped at 1× the eligible 1% base cashback earned in the same statement month. Preferred-merchant wallet value back is a separate offer, not statement cashback.", capAppliesTo: ["Airtel Mobile/Broadband/WiFi/DTH bill payments through Airtel Thanks", "Other utility bill payments through Airtel Thanks"] },
    partnerRates: [
      { name: "Airtel services via Airtel Thanks", rate: "25% cashback; capped at 2× eligible base cashback in the same statement month" },
      { name: "Utilities via Airtel Thanks", rate: "10% cashback; capped at 1× eligible base cashback in the same statement month" },
      { name: "Zomato/Blinkit/District Movies", rate: "10% partner-wallet credit, up to ₹200 per partner/month; qualifying-order terms apply" },
    ],
    pointsInfo: "Earn 1% base cashback on eligible other spend. Airtel Mobile/Broadband/WiFi/DTH bill payments through Airtel Thanks earn 25%, capped at 2× the base cashback earned in that statement month; other Airtel Thanks utility bills earn 10%, capped at 1× base cashback. These app benefits require eligible merchant IDs/UPI VPAs; active Airtel connections are required for Airtel bill cashback. Zomato, Blinkit and District Movies provide separate 10% partner-wallet value back, up to ₹200 per partner/month; Zomato/Blinkit orders require ₹499 minimum, app/website checkout and card payment (UPI is ineligible). Wallet value back is not statement cashback. Utility/telecom payments outside Airtel Thanks, fuel, rent, wallet, jewellery, insurance, education, government, gift cards, tolls/road fees and EMI transactions earn no cashback. Cashback rounds down per transaction; returns and reversals adjust it.",
    highlights: ["25% on eligible Airtel bills via Airtel Thanks; capped at 2× eligible base cashback", "10% on Airtel Thanks utility bills; capped at 1× eligible base cashback", "Separate 10% partner-wallet value back up to ₹200 per partner/month", "1% eligible base cashback; lounge access discontinued 12 April 2026"],
    pros: ["Airtel Thanks bill rewards are linked to eligible base cashback earned that statement month", "Separate partner-wallet offers for Zomato, Blinkit and District Movies", "Primary annual fee ₹500, waivable on eligible annual spend"],
    cons: ["Airtel/utility cashback depends on same-month eligible base cashback and app merchant identifiers", "Partner benefits are wallet value, not statement cashback; channel and minimum-order rules apply", "Multiple transaction categories, including fuel, rent and insurance, are excluded", "Lounge access discontinued 12 April 2026"],
    network: "Visa", lounge: "None" },

  { id: "axis-cashback", name: "Axis Cashback Credit Card", bank: "Axis", img: "💵", color: "#5b21b6", fee: 1000, joiningFee: 1000, feeWaiver: "Annual fee waived at ₹4 lakh or more eligible spend in the anniversary year; rent, wallet loads and gift cards do not count. The published ₹1,000 annual fee/waiver applies to customers onboarded through Axis Bank's portal on or after 1 June 2024.", feeScheduleNote: "Joining fee ₹1,000 + GST for new-to-card customers; annual fee ₹1,000 + GST after the anniversary year, unless the eligible-spend waiver applies.", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/cashback-credit-card", rewardSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/axis-bank-cashback-credit-card-tnc.pdf?sfvrsn=d015df26_5",
    rewards: { dining: 0.75, travel: 0.75, online: 7, groceries: 0.75, fuel: 0, utilities: 0.5, entertainment: 0.75, shopping: 0.75, default: 0.75 },
    caps: { cashbackPerStatementMonth: { eligibleOnline: 4000 }, capPeriod: "statement month", capAppliesTo: ["eligible online spends"] },
    partnerRates: [
      { name: "Online spends", rate: "Tiered 2% on first ₹5,000 net spend, 5% on ₹5,001–₹40,000 band, then 7%; ₹4,000 statement-month cap" },
      { name: "EazyDiner", rate: "25% discount (up to ₹800)" },
    ],
    pointsInfo: "Eligible online card-not-present purchases (excluding travel MCCs and all listed excluded MCCs) earn progressive statement-month cashback: 2% on the first ₹5,000 net spend, 5% on the next ₹35,000, then 7%; total accelerated cashback is capped at ₹4,000 per statement month. Eligible offline POS and issuer-defined travel earn uncapped 0.75%; eligible utility MCCs 4816, 4899 and 4900 earn 0.5% up to ₹100 per statement. Telephone MCC 4814 is classified by payment channel. Cashback is rounded down per transaction/category and credited to the next statement; reversals, EMI conversions and excluded MCCs affect eligibility.",
    highlights: ["Progressive eligible-online cashback up to 7%; ₹4,000 accelerated cap per statement month", "0.75% on eligible offline POS and issuer-defined travel transactions", "0.5% on utility MCCs 4816, 4899 and 4900, capped at ₹100 per statement", "Annual fee waiver at ₹4 lakh eligible anniversary-year spend"],
    pros: ["Progressive cashback tiers with a published statement-month cap", "₹1,000 welcome EDGE Reward Points for eligible new-to-card customers after a first spend within 30 days", "Cashback automatically posts to the next statement"],
    cons: ["Online, offline/travel and utility cashback use different eligibility rules", "Insurance, education, jewellery, government, wallet, rent, fuel and gift-card MCCs are excluded", "₹4,000 cap applies to accelerated cashback; transaction-level rounding and reversals affect credited value"],
    network: "Visa", lounge: "None" },

  { id: "axis-horizon", name: "Axis Horizon Credit Card", bank: "Axis", img: "🌅", color: "#0369a1", fee: 3000, feeWaiver: "₹3,000 + GST joining and annual fees; a lifetime-free offer is limited to eligible Burgundy customers under issuer conditions", type: "Travel", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-horizon-credit-card", rewardSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/credit-cards/terms-and-conditions-for-horizon-credit-card.pdf",
    rewards: { dining: 2, travel: 5, online: 2, groceries: 2, fuel: 0, utilities: 0, entertainment: 2, shopping: 2, default: 2 },
    rewardAssumptions: { travel: "5 EDGE Miles/₹100 applies only on Axis Travel EDGE and eligible airline MCC transactions (airline-owned sites, counters and helplines); travel agents, corporate agencies and OTAs earn 2/₹100. Generic travel input cannot separate these routes; no estimate is enabled.", utilities: "Utilities and telecom are excluded from rewards." },
    partnerRates: [
      { name: "Travel EDGE portal", rate: "5 EDGE Miles/₹100 (5%)" },
    ],
    pointsInfo: "5 EDGE Miles/₹100 on Axis Travel EDGE and eligible airline MCCs (airline-owned websites, counters and helplines); travel agents/OTAs earn 2/₹100. Other eligible spends earn 2/₹100. Utilities/telecom, insurance, education, government, wallet/gift cards, rent, fuel and transport/tolls are excluded. Welcome: 5,000 Miles when the first transaction is at least ₹1,000 within 30 days (paid cards only); 1,500 renewal Miles from year two for the primary cardholder. EDGE Miles are a programme currency, not cash.",
    highlights: ["5 EDGE Miles/₹100 only on Travel EDGE and eligible airline MCCs; OTAs earn 2/₹100", "2 EDGE Miles/₹100 on other eligible spend; issuer exclusions apply", "Quarterly lounge access varies by network: 8 domestic Visa / 6 Mastercard and 2 international", "5,000 welcome Miles on first ₹1,000+ transaction within 30 days (paid cards only); 1,500 renewal Miles from year two"],
    pros: ["Travel EDGE and qualifying direct-airline earn routes", "Quarterly domestic and international lounge visits, with network-specific domestic limits", "Published welcome and renewal Miles, subject to card/offer eligibility"],
    cons: ["₹3,000 + GST joining and annual fees unless eligible Burgundy lifetime-free offer applies", "OTA and travel-agent bookings earn only the 2-Mile base rate", "Generic travel estimates cannot identify airline MCC/booking route; Miles are not cash"],
    redemptionNote: "The Horizon terms specify different redemption routes (Travel EDGE bookings, catalogue and partner-mile transfers); minimum redemption and current conversion/availability conditions apply. EDGE Miles should not be treated as cash or statement credit.",
    network: "Visa/Mastercard", lounge: "Visa: 8 domestic visits/calendar quarter; Mastercard: 6 domestic/calendar quarter; 2 international/calendar quarter. Primary card only; eligible lounges and network terms apply." },

  { id: "axis-magnus", name: "Axis Magnus Credit Card", bank: "Axis", img: "👑", color: "#7e22ce", fee: 12500, feeWaiver: "₹25L annual spend", type: "Super Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-magnus-credit-card",
    rewards: { dining: 1.2, travel: 5, online: 1.2, groceries: 1.2, fuel: 0, utilities: 1.2, entertainment: 1.2, shopping: 1.2, default: 1.2 },
    caps: { monthlyPoints: 50000, pointValue: 0.20, spendPer: 200, pointsPer: 12 },
    partnerRates: [
      { name: "Travel EDGE portal", rate: "5X EDGE Miles" },
      { name: "20+ airline/hotel partners", rate: "5:2 transfer ratio" },
      { name: "Oberoi/Trident Hotels", rate: "15% off + complimentary nights" },
    ],
    pointsInfo: "12 EDGE Reward Points/₹200 on eligible spends up to ₹1.5L/calendar month; 35/₹200 on eligible incremental spend above ₹1.5L subject to issuer limits. Travel EDGE has separate accelerated rates. Verify exclusions and redemption value in current terms.",
    highlights: ["12 points/₹200 up to ₹1.5L eligible monthly spend; 35/₹200 on eligible incremental spend", "Travel EDGE earns at a separate accelerated rate", "Current Axis page advertises unlimited domestic and international lounge access", "₹12,500 annual fee; issuer terms govern waiver and Burgundy eligibility"],
    pros: ["Premium travel and transfer-partner benefits", "Current issuer page advertises unlimited lounge access", "Higher earn on eligible spend above ₹1.5L/month"],
    cons: ["₹12,500 fee", "₹25L spend for waiver", "Many categories excluded from rewards", "Recent devaluations"],
    redemptionNote: "Best value through airline/hotel transfer partners at 5:2 ratio. Catalog redemption at ₹0.20/point gives lower effective rate.",
    network: "Visa", lounge: "Unlimited domestic and international access advertised; current issuer/network conditions apply" },

  { id: "axis-myzone", name: "Axis MyZone Credit Card", bank: "Axis", img: "🎭", color: "#db2777", fee: 500, joiningFee: 500, feeWaiver: "₹500 annual fee; no standard waiver listed in Axis's 17 September 2026 Key Fact Sheet", type: "Lifestyle", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-my-zone-credit-card", rewardSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/terms-and-conditions-for-myzone-credit-card.pdf?sfvrsn=6b8ed8a4_17", offerSourceUrl: "https://www.axis.bank.in/docs/default-source/default-document-library/credit-card/sosc-credit-cards.pdf?sfvrsn=e31b3c52_8",
    rewards: { dining: 0.4, travel: 0.4, online: 0.4, groceries: 0.4, fuel: 0, utilities: 0, entertainment: 0, shopping: 0.4, default: 0.4 },
    rewardAssumptions: { default: "4 EDGE Reward Points/₹200 on eligible purchases. Axis directs customers to its EDGE Rewards catalogue and lists a redemption fee, but these sources do not establish one universal point-to-rupee or statement-credit value. No cash-value estimate is enabled.", entertainment: "Movie purchases are excluded. No generic entertainment estimate is assigned.", utilities: "Utilities and telecom are excluded." },
    partnerRates: [
      { name: "Swiggy", rate: "₹120 off twice/month" },
      { name: "Sony LIV", rate: "1-year free premium" },
      { name: "EazyDiner", rate: "Up to 15% off" },
    ],
    pointsInfo: "4 EDGE Reward Points/₹200 on eligible purchases; no points on movies, fuel, insurance, wallet, rent, utilities/telecom, jewellery, education, government, cash advances, repayments or EMI. Axis directs redemption through its EDGE Rewards catalogue and lists a redemption fee; one universal cash/statement value is not established. From 1 April 2026: 1,000 milestone points after ₹1.5L eligible anniversary-year spend (exclusions apply; evaluated after 60 days and credited within 90 days). One domestic lounge visit/calendar quarter requires ₹50,000 settled eligible spend in the prior 3 calendar months.",
    highlights: ["4 EDGE Reward Points/₹200 on eligible purchases; redemption value depends on the EDGE Rewards catalogue", "1,000-point milestone after ₹1.5L eligible anniversary-year spend from Apr 2026", "District movie BOGO up to ₹200/month; Swiggy ₹120 off per ₹500+ order, twice/month", "One domestic lounge visit/calendar quarter after ₹50K settled eligible spend in the preceding 3 calendar months", "Fuel-surcharge refund: 1% on ₹400–₹4,000 transactions, up to ₹400/statement cycle; fuel purchases earn no points"],
    pros: ["Wide range of partner discounts", "Low/free fee", "Good for lifestyle spenders"],
    cons: ["₹500 joining and annual fee; no standard waiver listed in the current Axis Key Fact Sheet", "The current product page lists a reward-point redemption fee but not its amount; a universal rupee value is not established", "Lounge access requires ₹50,000 eligible settled spend in the previous 3 calendar months", "Partner offers have minimum spends, monthly caps and eligibility terms"],
    redemptionNote: "EDGE Reward Points are redeemed through the issuer's EDGE Rewards catalogue. Axis's current MyZone schedule says a redemption fee applies but does not give its amount; a cash or statement-credit point value is not established by the product page and linked revision notice. Partner discounts, fuel-surcharge waivers and the spend milestone are separate from ordinary point value.",
    network: "Visa/ Mastercard", lounge: "1 domestic visit/calendar quarter to participating lounges after ₹50,000 eligible settled spend in the preceding 3 calendar months; new-card grace and access rules apply." },

  { id: "axis-neo", name: "Axis Neo Credit Card", bank: "Axis", img: "💫", color: "#4f46e5", fee: 250, feeWaiver: "Lifetime free for select channels", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-neo-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Zomato", rate: "₹120 off (twice/month)" },
      { name: "Paytm utilities", rate: "5% off (cap ₹150)" },
      { name: "Blinkit", rate: "10% off (cap ₹250)" },
    ],
    pointsInfo: "1 EDGE point/₹200 on eligible spends; this is a points earn rate, not 0.5% cashback. Conditional merchant discounts are separate from points.",
    highlights: ["₹120 off Zomato (2x/month)", "5% off Paytm bills", "10% off Blinkit", "Low ₹250 fee"],
    pros: ["Very low fee", "Good partner discounts for young professionals", "Activation cashback on first bill"],
    cons: ["Low base points earn", "Discounts have conditions and caps", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "axis-privilege", name: "Axis Privilege Credit Card", bank: "Axis", img: "🎖️", color: "#1e3a5f", fee: 1500, feeWaiver: "₹5L eligible spend in the previous card-anniversary year", type: "Premium", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/privilege-credit-card-with-unlimited-benefits",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    rewardAssumptions: { default: "Illustrative voucher value only: Axis values the 10,000-point milestone at ₹2,000 against its listed rewards. Ordinary points are not statement cashback; the aggregate model assumes eligible ₹200 earning blocks and does not simulate transaction-level rounding. Redemption fees are excluded; welcome and milestone points are not included.", utilities: "Utilities are excluded, as are insurance, rent, fuel, education, government, wallet, jewellery, gift-card, bridge-fee, road-fee and toll transactions." },
    partnerRates: [],
    pointsInfo: "10 EDGE Reward Points per ₹200 on eligible domestic and international purchases. The issuer's value chart illustrates selected shopping/travel voucher value; points are not cash or statement credit. Utilities, insurance, rent, fuel, education, government, wallet, jewellery, gift-card, bridge-fee, road-fee and toll transactions are excluded; EMI-converted transactions are reversed.",
    redemptionNote: "Axis's current fee table says reward-redemption fee applies but does not state its amount here. The issuer values the 10,000-point anniversary milestone at ₹2,000 and the eligible welcome award at ₹2,500 against vouchers; these are selected voucher values, not guaranteed cash or statement credit. The illustrative calculator excludes redemption fees.",
    highlights: ["12,500 welcome EDGE points worth ₹2,500 against vouchers after joining fee is charged and first purchase within 30 days; free/first-year-free and priority-segment cards are excluded", "10,000 milestone points worth ₹2,000 at ₹2.5L eligible anniversary-year spend", "2 select domestic lounge visits per calendar quarter after ₹50,000 eligible spend in the prior 3 months", "₹1,500 annual fee reversed after ₹5L eligible spend in the previous card-anniversary year", "Fuel surcharge refund on eligible ₹400–₹4,000 transactions, capped at ₹400 per statement cycle; fuel earns no points", "District movie offer: up to ₹250 off once a month; terms apply"],
    pros: ["Conditional welcome and milestone benefits", "Spend-gated domestic lounge access", "Points on eligible retail spending"],
    cons: ["₹1,500 annual fee unless eligible anniversary-year spend reaches ₹5L; issuer also lists a limited-period Amex-network fee offer", "Rewards are points, not statement cashback, and redemption fees apply", "Welcome/milestone points have separate fee and spend conditions"],
    network: "Visa", lounge: "2 domestic visits/quarter after ₹50,000 eligible spending in the previous 3 months" },

  { id: "axis-iocl", name: "Axis IOCL Credit Card", bank: "Axis", img: "⛽", color: "#e11d48", fee: 500, feeWaiver: "₹3.5L annual spend", type: "Fuel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/indianoil-axis-bank-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 4, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    caps: { monthlyAcceleratedSpend: { ioclFuel: 5000, eligibleOnline: 5000 }, capPeriod: "calendar month", fuelSurchargeWaiverPerStatement: 50, capAppliesTo: ["IOCL fuel", "eligible online shopping"] },
    partnerRates: [
      { name: "IOCL fuel stations", rate: "6 EDGE Miles/₹150 (~4%)" },
      { name: "Eligible online shopping", rate: "5 EDGE Reward Points/₹100 on up to ₹5,000 eligible monthly spend" },
    ],
    pointsInfo: "4% value back at IOCL on eligible ₹400–₹4,000 transactions and up to ₹5,000 monthly spend; 1 EDGE Reward Point/₹100 base eligible spend; accelerated online points separately capped",
    highlights: ["4% value back at IOCL on up to ₹5,000 eligible fuel spend/month", "1% fuel surcharge waiver capped at ₹50/statement cycle", "5 EDGE points/₹100 online on up to ₹5,000 monthly spend", "₹3.5L anniversary-year fee waiver threshold"],
    pros: ["4% value back on eligible IOCL fuel spend", "1% surcharge waiver on eligible transactions, capped ₹50 per statement cycle", "Separate lounge benefit; verify current terms"],
    cons: ["₹500 annual fee from year two; ₹3.5L anniversary-year waiver threshold", "Accelerated IOCL and online earning has low monthly spend caps", "Fuel surcharge waiver capped at ₹50/statement cycle"],
    network: "Visa", lounge: "8/year" },

  { id: "axis-flipkart-supercoin", name: "Flipkart Axis SuperCoin Credit Card", bank: "Axis", img: "🪙", color: "#2563eb", fee: 500, feeWaiver: "₹2L annual spend", type: "Shopping", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/flipkart-axis-bank-super-elite-credit-card",
    rewards: { dining: 0.4, travel: 0.4, online: 0.4, groceries: 0.4, fuel: 0, utilities: 0.4, entertainment: 0.4, shopping: 0.4, default: 0.4 },
    caps: { capPeriod: "per transaction on Flipkart; other eligible SuperCoins uncapped", capAppliesTo: ["Flipkart SuperCoins"] },
    partnerRates: [
      { name: "Flipkart", rate: "Additional 12 SuperCoins/₹100 for Plus members or 6/₹100 for non-Plus; per-transaction caps apply" },
    ],
    pointsInfo: "2 SuperCoins/₹100 on other eligible spends; additional Flipkart earn varies by Flipkart Plus status (12/₹100 Plus, 6/₹100 non-Plus; transaction limits); SuperCoins are not rupee cashback",
    highlights: ["500 SuperCoins activation benefit", "Additional Flipkart earn depends on Plus status", "2 SuperCoins/₹100 on other eligible spends", "₹500 annual fee waived above ₹2L annual spend"],
    pros: ["Useful for eligible Flipkart purchases", "Earns SuperCoins rather than statement cashback", "Low fee"],
    cons: ["SuperCoins are platform points, not rupee cashback", "Flipkart earn has per-transaction caps", "Benefits are tied to the Flipkart ecosystem"],
    network: "Visa", lounge: "None" },

  // ═══ HDFC BANK ═══

  { id: "hdfc-swiggy-blck", name: "HDFC Swiggy BLCK Credit Card", bank: "HDFC", img: "🖤", color: "#1a1a1a", fee: 1000, feeWaiver: "₹2L annual spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/swiggy-blck-hdfc-bank-credit-card",
    calculationSourceUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/swiggy-blck-hdfc-bank-credit-card/pdf/tncs-swiggy-blck-hdfc-bank-credit-card-22092026.pdf",
    rewardAssumptions: { dining: "Only eligible Swiggy Food Delivery/Instamart/Dineout transactions of ₹249 or more; not all restaurants or Zomato.", travel: "5% assumes a listed online travel merchant and eligible MCC, with each transaction ₹100 or more.", online: "5% assumes eligible listed online merchants/MCCs and each transaction ₹100 or more.", entertainment: "Only eligible listed online merchants/MCCs, excluding gaming; ₹100 minimum per transaction.", shopping: "5% assumes eligible online shopping, not every in-store purchase; ₹100 minimum per transaction.", groceries: "This row models eligible base-rate grocery purchases. Put qualifying Instamart orders in the Swiggy-app scenario, not both rows." },
    rewards: { dining: 10, travel: 5, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 5, shopping: 5, default: 1 },
    caps: { cashbackPerBillingCycle: { swiggy: 1500, eligibleOnline: 1500, otherEligible: 1000 }, capPeriod: "billing cycle", minimumTransaction: { swiggyApp10Percent: 249, otherCashbackTiers: 100 }, capAppliesTo: ["Swiggy app", "eligible online categories", "other eligible categories"] },
    partnerRates: [
      { name: "Swiggy app", rate: "10% cashback; ₹1,500 billing-cycle cap" },
      { name: "Eligible online categories", rate: "5% cashback; separate ₹1,500 billing-cycle cap" },
    ],
    pointsInfo: "10% Swiggy app (₹1,500/cycle); 5% eligible online (₹1,500/cycle); 1% other eligible (₹1,000/cycle). Limited-time Cleartrip/Nykaa discounts are separate from cashback.",
    highlights: ["10% on eligible Swiggy app transactions (₹1,500/cycle cap)", "5% on eligible online categories (separate ₹1,500/cycle cap)", "1% other eligible spends (₹1,000/cycle cap)", "₹1,000 annual fee; waived at ₹2L prior-year spend"],
    pros: ["10% on qualifying Swiggy purchases within its cap", "5% on listed online merchants and travel categories", "Three-month BLCK welcome membership after activation and claim"],
    cons: ["Three separate billing-cycle cashback caps", "₹249 minimum per 10% transaction; ₹100 per 5%/1% transaction", "₹75,000 in first 90 days for joining-fee waiver; ₹2L annual renewal waiver", "Gaming, education, gift cards, EMI and other exclusions apply"],
    network: "Mastercard World", lounge: "None" },

  { id: "hdfc-swiggy-ornge", name: "HDFC Swiggy ORNGE Credit Card", bank: "HDFC", img: "🧡", color: "#f97316", fee: 500, feeWaiver: "₹1.5L annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/swiggy-ornge-hdfc-bank-credit-card",
    calculationSourceUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/swiggy-ornge-hdfc-bank-credit-card/pdf/tncs-swiggy-ornge-hdfc-bank-credit-card-22092026.pdf",
    estimateUnavailableReason: "The September cap table and worked example do not establish unambiguous shared-versus-separate 5% bucket treatment. Merchant/channel and per-transaction minimums also apply.",
    rewards: { dining: 5, travel: 5, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 5, shopping: 5, default: 1 },
    partnerRates: [
      { name: "Eligible Swiggy Food Delivery, Instamart and Dineout", rate: "5%; ₹249 minimum per transaction; billing-cycle cap applies" },
      { name: "Listed online merchants/MCCs", rate: "5%; ₹249 minimum per transaction; billing-cycle cap applies" },
    ],
    pointsInfo: "5% on eligible Swiggy Food Delivery/Instamart/Dineout and listed online merchants/MCCs, with ₹249 minimum per transaction. Other eligible purchases earn 1% with ₹100 minimum and ₹1,000 billing-cycle cap. Ordinary grocery purchases do not automatically earn 5%.",
    redemptionNote: "Cashback is statement credit, not Swiggy wallet money. The advertised ₹500 fee is for priced cards; the September terms list a lifetime-free offer for applications through Swiggy from 1 July 2026. Confirm the offer on your application or migration notice; do not assume every issuance channel is free.",
    highlights: ["5% eligible Swiggy app and selected online-category cashback", "1% on other eligible categories", "₹500 annual fee; waived at ₹1.5L annual spend", "12-month Swiggy One membership subject to activation terms"],
    pros: ["5% on eligible Swiggy and selected online spends", "Swiggy One membership offer", "Lower fee than the BLCK variant"],
    cons: ["5% tiers require individual transactions of ₹249 or more; 1% requires ₹100", "Merchant eligibility and billing-cycle caps apply; automated estimates not enabled", "Gaming, education, gift cards, EMI and other exclusions apply"],
    network: "Mastercard World", lounge: "None",
  },

  { id: "hdfc-tata-neu-plus", name: "HDFC Tata Neu Plus Credit Card", bank: "HDFC", img: "🟣", color: "#5b21b6", fee: 499, feeWaiver: "₹1L annual spend", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/tata-neu-plus-hdfc-bank-credit-card",
    rewards: { dining: 1, travel: 2, online: 2, groceries: 2, fuel: 0, utilities: 2, entertainment: 1, shopping: 2, default: 1 },
    caps: { monthlyCashback: 500, capRate: 7, fallbackRate: 1, capAppliesTo: ["travel", "groceries", "shopping"] },
    partnerRates: [
      { name: "Tata Neu (BigBasket/Croma/Westside)", rate: "Up to 7% NeuCoins" },
      { name: "Air India Express", rate: "Up to 7% NeuCoins" },
      { name: "UPI spends", rate: "1% (cap 500 NeuCoins/mo)" },
    ],
    pointsInfo: "2% NeuCoins on Tata Neu/partner-brand non-EMI spends, additional 5% on eligible NeuPass categories via Tata Neu, 1% on other eligible non-UPI spends; HDFC RuPay UPI has channel-specific earning terms and a 500-NeuCoin calendar-month ceiling.",
    highlights: ["2% NeuCoins on Tata Neu and partner-brand non-EMI spends", "Additional 5% on selected NeuPass categories", "1% on other eligible non-UPI spend", "₹499 fee; waived at ₹1L annual spend"],
    pros: ["Excellent for Tata shoppers (BigBasket, Croma, Westside)", "NeuCoins worth ₹1 each", "UPI rewards rare"],
    cons: ["Rewards locked to Tata Neu ecosystem", "RuPay network (limited acceptance)", "No international lounge"],
    network: "RuPay", lounge: "Check current HDFC quarter-spend and variant terms" },

  { id: "hdfc-tata-neu-infinity", name: "HDFC Tata Neu Infinity Credit Card", bank: "HDFC", img: "♾️", color: "#4c1d95", fee: 1499, feeWaiver: "₹3L annual spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/tata-neu-infinity-hdfc-bank-credit-card",
    rewards: { dining: 1.5, travel: 5, online: 5, groceries: 5, fuel: 0, utilities: 5, entertainment: 1.5, shopping: 5, default: 1.5 },
    categoryRewardCaps: { groceries: 2000, utilities: 2000 },
    rewardAssumptions: { travel: "5% assumes eligible non-EMI partner Tata-brand spending, not all travel merchants. Additional NeuPass benefits are not counted.", online: "Eligible partner Tata brands only; ordinary non-Tata purchases earn 1.5%, not 5%.", shopping: "Eligible partner Tata brands only; ordinary non-Tata purchases earn 1.5%, not 5%.", groceries: "Eligible partner Tata-brand grocery spending, capped at 2,000 NeuCoins/month. Additional NeuPass benefits are not counted.", utilities: "Assumes eligible Tata Neu bill payments at the listed 5% route, capped at 2,000 utility NeuCoins/calendar month. Ordinary eligible card utility payments earn 1.5%. Telecom has its own 2,000 cap. This model excludes UPI, which has a separate 500-NeuCoin monthly cap." },
    partnerRates: [
      { name: "Tata Neu brands", rate: "Up to 10% NeuCoins" },
      { name: "BigBasket/Croma", rate: "Up to 10% NeuCoins" },
      { name: "Air India/IHCL", rate: "Enhanced NeuCoins" },
    ],
    pointsInfo: "5% NeuCoins on eligible non-EMI Tata-brand spends; 1.5% on eligible non-Tata and merchant EMI. Selected Tata Neu/NeuPass purchases earn an additional 5%, excluded from this model. Grocery and utility earning each capped at 2,000 NeuCoins/month; UPI has a separate 500-NeuCoin calendar-month cap. 1 NeuCoin = ₹1 ecosystem savings, not cash.",
    highlights: ["5% NeuCoins on Tata brands (10% only via NeuPass + Tata Neu app)", "1.5% on all other spends", "Lounge: milestone-based — ₹50K/qtr spend → 2 vouchers/qtr (max 8/yr)", "NeuCoins expire 12 months after issuance (since Aug 2025)"],
    pros: ["Highest Tata ecosystem rewards", "Better lounge access than Plus", "NeuCoins worth ₹1 each"],
    cons: ["10% requires NeuPass + Tata Neu app payment (not automatic)", "Bill Pay, Tanishq, cult.fit, Air India, Tata Play excluded from 5% NeuPass bonus", "Lounge is milestone-based: need ₹50K/qtr spend (not automatic 8/yr)", "NeuCoins expire after 12 months (since Aug 2025)", "₹1,499 annual fee"],
    network: "RuPay", lounge: "2 domestic/quarter and 1 international/quarter; qualification terms apply" },

  { id: "hdfc-moneyback-plus", name: "HDFC MoneyBack+ Credit Card", bank: "HDFC", img: "💵", color: "#1e40af", fee: 500, feeWaiver: "₹50K annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/moneyback-plus-credit-card",
    rewards: { dining: 0.25, travel: 0.25, online: 0.25, groceries: 0.25, fuel: 0, utilities: 0.25, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    redemptionNote: "Model uses base earn only: 2 CashPoints/₹200 × maximum catalogue/travel value ₹0.25 = 0.25% illustrative value. Statement cashback is ₹0.20/CashPoint (0.20% base value), not ₹0.50. Named 10X merchants, annual milestones, redemption charges and transaction rounding are not included. Statement-redemption minimum is ₹500 equivalent; monthly redemption limits apply.",
    redemptionSourceUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/generic-mailer-tnc.pdf",
    partnerRates: [],
    pointsInfo: "10X CashPoints (up to 2.5% value back) at Amazon, Flipkart, Swiggy, Reliance Smart SuperStore and BigBasket; 2 CashPoints/₹200 other spend; quarterly voucher milestones and current May 2026 product changes apply.",
    highlights: ["10X CashPoints on named merchant categories", "2 CashPoints/₹200 on other spend", "₹500 fee; ₹50K quarterly spend milestone voucher", "HDFC published product changes effective 15 May 2026"],
    pros: ["Low fee waiver threshold", "Simple reward structure", "Good for building HDFC credit history"],
    cons: ["Base value only 0.25% at maximum catalogue/travel valuation (0.20% statement cashback)", "10X earn is restricted to named merchants", "No lounge access"],
    network: "Visa/MC", lounge: "None" },

  { id: "hdfc-paytm", name: "HDFC Paytm Credit Card", bank: "HDFC", img: "📲", color: "#002970", fee: 500, feeWaiver: "₹50K annual spend", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/paytm-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 1, groceries: 0.5, fuel: 0, utilities: 1, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Paytm app purchases, recharges, utility payments, movies and Mini App", rate: "3% CashBack; max 500 CashPoints/calendar month" },
      { name: "Other Paytm spends", rate: "2% CashBack; max 500 CashPoints/calendar month" },
      { name: "Other retail", rate: "1% CashBack; max 1,000 CashPoints/calendar month" },
    ],
    pointsInfo: "3% on eligible Paytm app transactions (500 CashPoints/month), 2% on other Paytm (500/month), 1% on other retail (1,000/month); fuel surcharge waiver terms apply.",
    highlights: ["3% on eligible Paytm app categories", "2% on other Paytm spends", "1% on other retail; monthly bucket caps apply", "₹500 fee; renewal waiver at ₹50K annual spend"],
    pros: ["CashPoints can redeem against the statement balance", "Separate Paytm and other-retail earning buckets"],
    cons: ["Calendar-month earning and redemption limits apply", "Wallet loads, EMI, fuel, rent and government spend excluded", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "hdfc-freedom", name: "HDFC Freedom Credit Card", bank: "HDFC", img: "🆓", color: "#1d4ed8", fee: 500, feeWaiver: "₹50K annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/freedom-credit-card/fees-and-charges",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "From the issuer's 15 May 2026 terms: 1 CashPoint/₹200 on eligible other spending; 10X at BigBasket, BookMyShow, OYO, Swiggy and Uber, capped at 2,500 CashPoints/calendar month. Merchant identifiers determine qualification. RuPay UPI has a separate 500-point monthly cap. Fuel, wallets, gift/prepaid loads, rent, government and EMI earn no points.",
    highlights: ["₹500 standard fee with spend-based renewal waiver", "Named-merchant 10X tier, not all online purchases", "No airport lounge access listed"],
    pros: ["Low annual fee", "Easy waiver at ₹50K spend", "Builds HDFC credit history"],
    cons: ["Low base CashPoint value", "Minimum balance and redemption fees affect usable value", "No lounge or premium perks"],
    rewardSourceUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/freedom-credit-card/freedom-tncs.pdf",
    redemptionNote: "1 CashPoint = ₹0.15 for statement/travel redemption; base arithmetic is 0.075%, not the old 0.5%. Statement redemption requires 3,334 points and a ₹50 fee; catalogue handling costs ₹99 plus tax. Travel points cover up to 50% of a booking; points expire after two years. Per-₹200 transaction rounding and cap eligibility matter.",
    network: "Visa/MC", lounge: "None" },

  { id: "hdfc-ultimo", name: "HDFC PhonePe Ultimo Credit Card", bank: "HDFC", img: "📞", color: "#5f259f", fee: 999, feeWaiver: "₹2L annual spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/phonepe-hdfc-bank-ultimo-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "PhonePe", rate: "Accelerated rewards" },
    ],
    pointsInfo: "10% Reward Points on selected PhonePe categories (recharges, utilities, bill payments and travel; 1,000 points/calendar-month cap); 5% on selected online brands (500 points/month cap); 1% on Scan & Pay (500 points/month cap). Statement cashback redemption is ₹1/point; SmartBuy rates and redemption limits differ.",
    highlights: ["10% points on select PhonePe categories (₹1,000/month cap)", "5% points on select online brands (₹500/month cap)", "1% Scan & Pay value back (₹500/month cap)", "₹999 fee; ₹2L prior-year spend waiver; 8 domestic lounge visits require ₹75K quarterly spend"],
    pros: ["PhonePe ecosystem benefits", "Lounge access"],
    cons: ["Reward points and cashback are different value types", "Lounge access requires quarterly spend threshold", "₹999 annual fee unless prior-year ₹2L waiver is met"],
    network: "RuPay", lounge: "Up to 8/year after ₹75K quarterly spend" },

  // ═══ ICICI BANK ═══

  { id: "icici-rubyx", name: "ICICI Rubyx Credit Card", bank: "ICICI", img: "💎", color: "#b91c1c", fee: 2000, feeWaiver: "₹3L annual spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/rubyx-credit-card",
    rewards: { dining: 0.5, travel: 1, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.25, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "BookMyShow / INOX", rate: "25% off up to ₹150 on eligible tickets; prior-quarter ₹25,000 spend required from Apr 2026" },
      { name: "EazyDiner", rate: "Eligible dining offer; check current issuer terms" },
    ],
    pointsInfo: "2 Reward Points/₹100 domestic eligible spend and 4/₹100 international spend; utility/insurance earn 1/₹100. Fuel earns no points (eligible fuel-surcharge waiver applies). Redemption value depends on catalogue; issuer lists 2 domestic lounge visits/quarter, 8 railway lounge visits/year, and spend-based lounge/movie terms.",
    highlights: ["2 Reward Points/₹100 domestic and 4/₹100 international eligible spend", "2 domestic airport lounge visits/quarter and 8 railway visits/year; eligibility applies", "BookMyShow/INOX offers require prior-quarter spend from Apr 2026", "₹2,000 annual fee; waiver at ₹3L spend"],
    pros: ["Movie BOGO", "Dining discounts", "Decent lounge access"],
    cons: ["₹2,000 annual fee (joining fee is higher)", "Reward value depends on redemption option", "Movie and lounge access have spend/variant conditions"],
    network: "Visa/MC/RuPay", lounge: "2 domestic visits/quarter and 8 railway visits/year, subject to current issuer eligibility" },

  { id: "icici-mmt", name: "ICICI MakeMyTrip Credit Card", bank: "ICICI", img: "✈️", color: "#ef4444", fee: 999, feeWaiver: "₹3L annual spend", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/makemytrip/makemytrip-icici-bank-credit-card",
    rewards: { dining: 1, travel: 3, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "MakeMyTrip bookings", rate: "6 myCash/₹100 hotel; 3/₹100 flight, bus and cab; 1/₹100 other retail" },
    ],
    pointsInfo: "Current MakeMyTrip ICICI card earns up to 6% myCash on eligible MMT hotel/flight bookings and 1% on other retail; myCash does not expire. Fee ₹999, ₹3L renewal waiver threshold, 0.99% forex markup.",
    highlights: ["Up to 6 myCash/₹100 on eligible MMT hotel bookings; 3/₹100 on flights, bus and cab; 1/₹100 other retail", "₹999 annual fee; waiver at ₹3L annual spend", "0.99% forex markup", "2 domestic lounge visits/quarter and 1 international/year; issuer terms apply"],
    pros: ["Good for MakeMyTrip users", "Decent lounge access", "Welcome points offset first year fee"],
    cons: ["myCash is most useful on MakeMyTrip", "Non-MMT earn is lower than eligible MMT booking rates", "Eligibility and lounge benefits depend on current card variant terms"],
    network: "Visa/RuPay", lounge: "2 domestic/quarter and 1 international/year; current eligibility terms apply" },

  { id: "icici-hpcl-super-saver", name: "ICICI HPCL Super Saver Credit Card", bank: "ICICI", img: "⛽", color: "#059669", fee: 500, feeWaiver: "₹1.5L annual spend", type: "Fuel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/hpcl-super-saver",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 5, fuel: 5, utilities: 5, entertainment: 0.5, shopping: 0.5, default: 0.25 },
    caps: { monthlyCashback: 200, capRate: 4, fallbackRate: 0.25, monthlyPoints: 400, pointValue: 0.25, capPeriod: "calendar month", capAppliesTo: ["HPCL fuel cashback", "utility, grocery and departmental-store reward points"] },
    partnerRates: [
      { name: "HPCL fuel stations / HP Pay", rate: "4% cashback (₹200/month cap) + 1% surcharge waiver; additional 1.5% Happy Coins on HP Pay" },
    ],
    pointsInfo: "4% fuel cashback at HPCL/HP Pay (₹200/calendar-month cap) plus 1% fuel surcharge waiver on eligible transactions; HP Pay HPCL fuel also earns 1.5% Happy Coins. 5% on eligible utility, grocery and departmental-store spend as 20 points/₹100, capped at 400 points/month. 2,000 welcome points.",
    highlights: ["Up to 5% fuel savings at HPCL/HP Pay; cashback capped at ₹200/month", "Additional 1.5% Happy Coins on HP Pay HPCL fuel", "5% on eligible utility, grocery and departmental-store spend, capped at 400 points/month", "2,000 welcome points; lounge access requires ₹75,000 prior-quarter spend"],
    pros: ["Good fuel savings at HPCL", "Decent lounge access"],
    cons: ["Fuel cashback capped at ₹200/month", "Most valuable at HPCL; category exclusions apply", "Lounge and movie offers require prior-quarter spend"],
    network: "Visa", lounge: "Quarterly access subject to ₹75,000 prior-quarter spend" },

  { id: "icici-hpcl-coral", name: "ICICI HPCL Coral Credit Card", bank: "ICICI", img: "⛽", color: "#0d9488", fee: 199, feeWaiver: "₹50K annual spend", type: "Fuel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/hpcl-coral-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 2.5, utilities: 0.25, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    caps: { monthlyCashback: 100, capRate: 2.5, fallbackRate: 0.5, capPeriod: "calendar month", capAppliesTo: ["HPCL fuel cashback"] },
    partnerRates: [
      { name: "HPCL fuel stations", rate: "2.5% cashback (₹100/month cap) + 1% surcharge waiver on eligible transactions" },
    ],
    pointsInfo: "2.5% cashback on HPCL fuel (₹100/month cap) plus 1% surcharge waiver on eligible transactions; 2 Reward Points/₹100 retail spend excluding fuel; BookMyShow and lounge conditions apply.",
    highlights: ["3.5% HPCL fuel savings includes 2.5% cashback capped ₹100/month and 1% surcharge waiver", "₹199 annual fee; waiver at ₹50K spend", "Movie and lounge benefits have spend conditions"],
    pros: ["Low fee", "Fuel savings at HPCL", "Easy fee waiver"],
    cons: ["Fuel cashback is capped at ₹100/month", "Retail/utility reward-point values differ from cashback", "Movie and lounge benefits have conditions"],
    network: "Visa", lounge: "None" },

  { id: "icici-platinum", name: "ICICI Platinum Credit Card", bank: "ICICI", img: "🪙", color: "#a3a3a3", fee: 299, feeWaiver: "Confirm offer-specific fee with ICICI", type: "Entry", verified: false,
    rewards: { dining: 0.25, travel: 0.25, online: 0.25, groceries: 0.25, fuel: 0, utilities: 0.25, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    partnerRates: [],
    pointsInfo: "This is a legacy/basic Platinum record; fee and reward variants may differ by offer. Confirm account-specific pricing and current reward terms with ICICI before relying on this entry.",
    highlights: ["Legacy/basic card record; issuer pricing may be offer-specific", "Confirm joining/annual fee and benefits with ICICI", "Avoid presenting this as a single standard fee/reward variant"],
    pros: ["Basic entry-level card record", "Fee and reward variant should be confirmed with ICICI"],
    cons: ["Very low reward rate (0.25%)", "No lounge access", "Minimal perks"],
    network: "Visa", lounge: "None" },

  // ═══ SBI ═══

  { id: "sbi-bpcl-octane", name: "SBI BPCL Octane Credit Card", bank: "SBI", img: "⛽", color: "#dc2626", fee: 1499, feeWaiver: "₹2L annual spend", type: "Fuel", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/bpcl-sbi-card-octane.html", feeSourceUrl: "https://www.sbicard.com/en/most-important-terms-and-conditions.page", rewardSourceUrl: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/ekit-tncs/BPCLOctanetnc.pdf", loungeSourceUrl: "https://www.sbicard.com/en/personal/benefits/airport-lounge-access.page",
    rewards: { dining: 2.5, travel: 0.25, online: 0.25, groceries: 2.5, fuel: 6.25, utilities: 0.25, entertainment: 2.5, shopping: 0.25, default: 0.25 },
    caps: { monthlyPoints: 7500, fuelPointsPerStatementCycle: 2500, pointValue: 0.25, capPeriod: "monthly dining/grocery/movies; fuel per billing cycle", capAppliesTo: ["BPCL fuel points", "dining, grocery, movies and departmental-store points"] },
    partnerRates: [
      { name: "BPCL fuel stations", rate: "25 Reward Points/₹100 (max 2,500 points/billing cycle), plus eligible 1% surcharge waiver" },
    ],
    pointsInfo: "25 Reward Points/₹100 on eligible BPCL fuel (maximum 2,500 points per billing cycle); 10X on dining, movies, grocery and departmental stores (maximum 7,500 points/month); 1 point/₹100 on other eligible retail. SBI lists 4 points = ₹1 for eligible fuel redemption. The welcome benefit is 6,000 points after joining-fee payment under issuer terms. A separate 1% BPCL surcharge waiver has its own transaction and cycle limits. SBI's current lounge programme lists Octane in Set A; the current public list does not restate this card's visit quota.",
    highlights: ["25 Reward Points/₹100 at eligible BPCL outlets; capped at 2,500 points/billing cycle", "10X dining, movies, grocery and departmental stores; capped at 7,500 points/month", "6,000 welcome points after joining-fee payment; fuel redemption route values 4 points at ₹1", "Included in SBI's current Set A lounge programme; current public lounge page does not state this card's visit quota"],
    pros: ["Highest fuel reward rate among major bank cards", "Strong dining/grocery rate", "Generous welcome benefit"],
    cons: ["₹1,499 fee", "Fuel accelerated points capped at 2,500 per billing cycle", "Reward points are not equivalent to direct cashback"],
    network: "Visa", lounge: "SBI lists BPCL SBI Card OCTANE in its current Set A airport-lounge programme. The current public list does not specify this card's visit quota; older issuer launch material listed four domestic visits per year, max one per quarter.", loungeSourceUrl: "https://www.sbicard.com/en/personal/benefits/airport-lounge-access.page" },

  { id: "phonepe-sbi-select-black", name: "PhonePe SBI Select Black Credit Card", bank: "SBI", img: "📱", color: "#5f259f", fee: 1499, feeWaiver: "Check current issuer fee-waiver terms", type: "Premium", verified: false,
    rewards: { dining: 0, travel: 0, online: 0, groceries: 0, fuel: 0, utilities: 0, entertainment: 0, shopping: 0, default: 0 },
    partnerRates: [],
    pointsInfo: "SBI Card announced revisions to the SELECT Black rewards programme effective 1 July 2026. Current card-specific earn rates and caps have not been confirmed from issuer terms; do not rely on older rates until verified.",
    highlights: ["Rewards programme revised effective 1 July 2026", "Current card-specific earn rates and caps require issuer confirmation", "Verify current fee-waiver and lounge terms with SBI Card"],
    pros: ["PhonePe co-brand benefits may apply; check current issuer terms"],
    cons: ["Current reward earn rates and caps are not verified", "Fee-waiver and lounge terms need card-specific confirmation", "Do not compare using the superseded reward schedule"],
    network: "Visa/RuPay", lounge: "Check current issuer terms" },

  { id: "sbi-tata-neu-infinity", name: "SBI Tata Neu Infinity Credit Card", bank: "SBI", img: "♾️", color: "#5b21b6", fee: 1499, feeWaiver: "₹3L annual spend", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/Tata-neu-infinty-tnc.pdf",
    rewards: { dining: 1.5, travel: 1.5, online: 1.5, groceries: 10, fuel: 0, utilities: 1.5, entertainment: 1.5, shopping: 10, default: 1.5 },
    partnerRates: [
      { name: "Tata Neu brands", rate: "Enhanced NeuCoins" },
      { name: "BigBasket/Croma", rate: "NeuCoins" },
    ],
    pointsInfo: "5% NeuCoins on Tata Neu and partner Tata brands, plus an additional 5% on selected Tata Neu app categories; 1.5% on other eligible spend, including RuPay UPI (UPI earn capped at 500 NeuCoins/month). 1 NeuCoin = ₹1 savings. Fuel, wallet, rental, government and education exclusions apply.",
    highlights: ["5% at Tata Neu/partner brands plus an extra 5% on selected Tata Neu app categories", "1.5% on other eligible spend and RuPay UPI; UPI rewards capped at 500 NeuCoins/month", "1 NeuCoin = ₹1 savings; 1,499 NeuCoins welcome benefit after joining fee realization", "Network-specific lounge and fee terms apply"],
    pros: ["Good for Tata shoppers", "NeuCoins worth ₹1 each"],
    cons: ["Rewards locked to Tata Neu ecosystem", "Tata Neu partner/category MID eligibility applies", "₹1,499 fee; verify current waiver and lounge conditions"],
    network: "RuPay", lounge: "8/year" },

  { id: "sbi-flipkart", name: "SBI Flipkart Credit Card", bank: "SBI", img: "🛍️", color: "#2563eb", fee: 500, feeWaiver: "₹3.5L annual spend", type: "Shopping", verified: false, sourceUrl: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/who-we-are/notices/SEFilingPressReleaseAugust2025.pdf",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 5, default: 1 },
    caps: { cashbackPerStatementQuarter: { flipkart: 4000, myntra: 4000, cleartrip: 4000 }, capPeriod: "statement quarter", capAppliesTo: ["Flipkart", "Myntra", "Cleartrip"] },
    partnerRates: [
      { name: "Flipkart", rate: "5% value back" },
    ],
    pointsInfo: "5% Flipkart (including Shopsy), 7.5% Myntra, 5% Cleartrip and 4% preferred merchants; each co-brand bucket caps at ₹4,000/statement quarter; 1% unlimited other eligible spends.",
    highlights: ["5% Flipkart/Cleartrip, each ₹4K/statement-quarter cap", "7.5% Myntra, ₹4K/statement-quarter cap", "4% preferred merchants; 1% other eligible spends", "₹500 fee, waived at ₹3.5L previous-year spend"],
    pros: ["Good for Flipkart shoppers", "Decent fee with waiver"],
    cons: ["Cashback caps are quarterly, not monthly", "1% base rate applies outside partner categories", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "sbi-titan", name: "SBI Titan Credit Card", bank: "SBI", img: "⌚", color: "#ca8a04", fee: 2999, feeWaiver: "₹3L annual spend", type: "Shopping", verified: false, sourceUrl: "https://www.sbicard.com/en/most-important-terms-and-conditions.page",
    rewards: { dining: 1.5, travel: 1.5, online: 1.5, groceries: 1.5, fuel: 0, utilities: 1.5, entertainment: 1.5, shopping: 7.5, default: 1.5 },
    caps: { cashbackPerStatementQuarter: { nonJewelleryTitanBrands: 10000, MiaCaratlaneZoya: 10000, TanishqVoucherValue: 25000 }, capPeriod: "statement quarter", capAppliesTo: ["Titan group brands"] },
    partnerRates: [
      { name: "Titan/Taneira/Titan EyePlus and other non-jewellery brands", rate: "7.5% cashback; ₹10,000 quarterly cap" },
    ],
    pointsInfo: "7.5% cashback at Titan group non-jewellery brands (₹10,000/quarter); 5% at Mia/Caratlane/Zoya (₹10,000/quarter); Tanishq voucher benefit has separate terms; ₹6/₹100 other-brand rewards per issuer release.",
    highlights: ["7.5% cashback at eligible Titan group brands", "5% at Mia/Caratlane/Zoya; jewellery/voucher terms differ", "₹2,999 annual fee; waived at ₹3L annual spend", "Domestic and international lounge access listed by SBI Card"],
    pros: ["Excellent for Titan shoppers (Tanishq, Titan watches, etc.)"],
    cons: ["Very niche — only useful at Titan", "Very low non-Titan rate", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "sbi-simplysave", name: "SBI SimplySAVE Credit Card", bank: "SBI", img: "💾", color: "#2563eb", fee: 499, feeWaiver: "₹1L eligible spend in the preceding year reverses the renewal fee.", type: "Entry", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/shopping/simplysave-sbi-card.html", feeSourceUrl: "https://www.sbicard.com/en/most-important-terms-and-conditions.page", rewardSourceUrl: "https://www.sbicard.com/sbi-card-en/assets/docs/pdf/SimplySAVE-TnC.pdf",
    rewards: { dining: 1.67, travel: 0.17, online: 0.17, groceries: 0.17, fuel: 0, utilities: 0.17, entertainment: 0.17, shopping: 0.17, default: 0.17 },
    caps: { monthlyPoints: 5000, pointValue: 0.25, spendPer: 150, pointsPer: 10, capPeriod: "calendar month" },
    partnerRates: [],
    pointsInfo: "10 Reward Points/₹150 on issuer-listed dining, movie, grocery and departmental-store MCCs; 1 Reward Point/₹150 on other eligible spends. The promoted categories share a 5,000-point calendar-month cap, then earn base points. SBI lists 4 points = ₹1 for statement-credit redemption; minimum redemption is 2,000 points and points expire after 24 months. The current welcome offer gives 2,000 bonus points after at least ₹2,000 eligible purchase spend within 60 days of receiving a new card; offer eligibility and exclusions apply.",
    highlights: ["10 Reward Points/₹150 on eligible dining, movies, departmental stores and grocery", "1 Reward Point/₹150 on other eligible spends", "2,000 bonus points after ₹2,000 eligible spend in the first 60 days on a qualifying new card", "₹499 + tax fee; renewal reversal at ₹1L preceding-year spend"],
    pros: ["Accelerated points on eligible dining, grocery, movie and departmental-store transactions", "Low standard fee with a spend-based renewal waiver", "Welcome points on qualifying new-card spend"],
    cons: ["Accelerated points share a 5,000-point monthly cap", "Low base earn on other eligible spends", "Points are a rewards currency, not cash at purchase"],
    redemptionNote: "The ₹0.25/point value assumes SBI's stated 4-points-per-₹1 redemption route, not direct cashback. A minimum of 2,000 points is required and points expire after 24 months. Fuel earns no points; its separate 1% surcharge waiver applies only to ₹500–₹3,000 transactions, capped at ₹100/month.",
    network: "Visa/MC", lounge: "Check current issuer/network terms" },

  { id: "sbi-iocl", name: "SBI IOCL Credit Card", bank: "SBI", img: "⛽", color: "#dc2626", fee: 499, feeWaiver: "₹1L annual spend", type: "Fuel", verified: false,
    rewards: { dining: 0.25, travel: 0.25, online: 0.25, groceries: 0.25, fuel: 4, utilities: 0.25, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    caps: { monthlyCashback: 200, capRate: 4, fallbackRate: 0.25, capAppliesTo: ["fuel"] },
    partnerRates: [
      { name: "IOCL fuel stations", rate: "4% value back" },
    ],
    pointsInfo: "4% at IOCL (cap ₹200/mo), 0.25% on other · 500 welcome points",
    highlights: ["4% at IOCL", "Low ₹499 fee", "Fuel surcharge waiver"],
    pros: ["Good fuel rate at IOCL", "Very low fee", "Easy fee waiver"],
    cons: ["Fuel cap at ₹200/month", "Very low non-fuel rate", "No lounge access"],
    network: "Visa", lounge: "None" },

  // ═══ BOB ═══

  { id: "bob-premier", name: "BOB Premier Credit Card", bank: "BOB", img: "🏛️", color: "#ea580c", fee: 999, feeWaiver: "₹2L annual spend", type: "Premium", verified: false,
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0.5, entertainment: 1, shopping: 1, default: 0.5 },
    partnerRates: [],
    pointsInfo: "4 pts/₹100 on select categories (~1%), 2 pts other (~0.5%) · 5,000 welcome points",
    highlights: ["1% on broad categories", "Lounge discontinued (June 2025)", "5,000 welcome points"],
    pros: ["Decent all-round rate", "Good lounge access for the fee", "Generous welcome benefit"],
    cons: ["Limited partner ecosystem", "BOB app not great", "0.5% on utilities/general"],
    network: "Visa", lounge: "4/year" },

  // ═══ IDFC FIRST ═══

  { id: "idfc-millennia", name: "IDFC FIRST Millennia Credit Card", bank: "IDFC", img: "🌐", color: "#059669", fee: 0, feeWaiver: "Lifetime free", type: "Rewards", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.idfcfirst.bank.in/credit-card/millennia",
    rewards: { dining: 1.25, travel: 1.25, online: 0.375, groceries: 0.375, fuel: 0, utilities: 0.125, entertainment: 0.375, shopping: 0.375, default: 0.375 },
    partnerRates: [],
    pointsInfo: "10X on eligible dining and travel (1.25%), 3X on most eligible spends (0.375%), 1X on utilities/insurance/railways/FASTag (0.125%) · 1 point = ₹0.25",
    highlights: ["Lifetime free", "10X on eligible dining and travel", "4 railway lounge visits/quarter", "25% off one movie ticket/month"],
    pros: ["No joining or annual fee", "Accelerated dining and travel rewards", "Railway lounge access", "Points redeem against online purchases"],
    cons: ["Low 0.375% regular earn rate", "₹99 + GST redemption fee", "No airport lounge access", "Railway lounge access requires previous-month spending"],
    network: "Visa", lounge: "4 railway visits/quarter after ₹20,000 previous-calendar-month spend" },

  { id: "idfc-ashva", name: "IDFC FIRST Ashva Credit Card", bank: "IDFC", img: "🐎", color: "#0d9488", fee: 2999, feeWaiver: "No fee waiver listed; ₹8L anniversary-year spend earns 7,500 Reward Points after next-year fee payment", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.idfcfirst.bank.in/credit-card/metal-credit-card/ashva",
    rewards: { dining: 0.83, travel: 1.67, online: 0.83, groceries: 0.83, fuel: 0, utilities: 0.83, entertainment: 0.83, shopping: 0.83, default: 0.83 },
    partnerRates: [
      { name: "Eligible retail spends", rate: "5X up to ₹20,000 statement-cycle spend; 10X on incremental spends above ₹20,000" },
      { name: "Travel & Shop hotel bookings", rate: "30X bonus Reward Points" },
      { name: "Travel & Shop flight bookings", rate: "15X bonus Reward Points" },
      { name: "Utilities, insurance, railways and FASTag", rate: "1X Reward Points" },
    ],
    pointsInfo: "1X = 1 Reward Point/₹150; 5X below ₹20,000 cycle spend and up to 10X on incremental spend above ₹20,000. Travel & Shop app bonuses: 30X hotels / 15X flights. Up to ₹0.40/point on eligible app travel redemptions; ₹0.25 standard value.",
    highlights: ["₹2,999 joining and annual fee", "Zero forex markup on purchases", "4 domestic + 2 international lounge visits/quarter after spend condition", "Up to 40X on eligible in-app hotel bookings"],
    pros: ["Premium travel rewards and metal card", "Zero forex markup on eligible purchase transactions", "Domestic, international and railway lounge access subject to spend conditions"],
    cons: ["₹2,999 annual fee from year 2", "₹20K current-month spend required for next-month lounge benefits", "Reward tiers and higher redemption value depend on channel and eligibility"],
    network: "Visa Infinite", lounge: "4 domestic + 2 international airport visits/quarter after ₹20K current-month spend; railway access also spend-gated" },

  { id: "idfc-power-plus", name: "IDFC FIRST Power+ Credit Card", bank: "IDFC", img: "⚡", color: "#047857", fee: 499, feeWaiver: "₹1.5L annual spend", type: "Fuel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.idfcfirst.bank.in/credit-card/hpcl-power-fuel-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 5, fuel: 5, utilities: 5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "HPCL fuel", rate: "30 Reward Points/₹150 (up to 5% value at standard redemption)" },
      { name: "Grocery, utility and IDFC FASTag", rate: "30 Reward Points/₹150" },
      { name: "Other eligible retail spends", rate: "3 Reward Points/₹150" },
      { name: "RuPay UPI spends", rate: "3X Reward Points" },
    ],
    pointsInfo: "30 Reward Points/₹150 on HPCL fuel, groceries, utilities and IDFC FASTag; 3 points/₹150 on other retail spends. Point value and savings depend on redemption. ₹499 joining/annual fee; annual fee waived at ₹1.5L eligible annual spend.",
    highlights: ["HPCL fuel and select categories earn accelerated points", "3X points on UPI", "₹499 annual fee; waived at ₹1.5L yearly spend", "1 domestic airport lounge visit/quarter"],
    pros: ["Useful savings for HPCL fuel and eligible grocery/utility spends", "RuPay UPI rewards", "₹1.5L annual fee-waiver threshold"],
    cons: ["Rewards strongest at HPCL and select categories", "₹499 annual fee unless spend waiver met", "Only 1 domestic airport lounge visit/quarter, subject to eligibility"],
    network: "RuPay", lounge: "1 domestic airport visit/quarter; check current eligibility terms" },

  // ═══ FEDERAL BANK ═══

  { id: "scapia", name: "Scapia Credit Card", bank: "Federal Bank", img: "🚀", color: "#6366f1", fee: 0, feeWaiver: "Lifetime free", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.scapia.cards/product/blog/the-scapia-federal-credit-card-everything-you-need-to-know",
    rewards: { dining: 2, travel: 4, online: 2, groceries: 2, fuel: 0, utilities: 0, entertainment: 2, shopping: 2, default: 2 },
    partnerRates: [
      { name: "Scapia app bookings", rate: "20% Coins (4% effective)" },
      { name: "RuPay UPI spends ₹500+", rate: "5% Coins (1% effective)" },
    ],
    pointsInfo: "Visa: 10% Coins (2% effective) · RuPay UPI ₹500+: 5% Coins (1% effective) · Scapia app: 20% Coins (4% effective) · 5 Coins = ₹1",
    highlights: ["4% effective on Scapia app bookings", "2% effective on eligible Visa spends", "Zero forex on Visa", "Airport privileges after ₹20K billing-cycle spend", "Lifetime free"],
    pros: ["Lifetime free", "4% effective on Scapia app bookings", "2% effective on eligible Visa spends", "Visa and RuPay cards share one limit", "₹50K+ international flight booking unlocks up to ₹2,000 airport credit"],
    cons: ["Rewards redeem within the Scapia ecosystem", "RuPay UPI earn is only 1% effective and requires ₹500+ transactions", "Airport privileges require ₹20K in the preceding billing cycle"],
    estimateUnavailableReason: "Federal issues both Visa and RuPay cards under the same account: eligible Visa everyday transactions earn 2% effective value, eligible RuPay transactions of ₹500+ earn 1%, and Scapia-app bookings use a separate 4% route. The calculator has no network or booking-channel input, so its single rate would misstate at least one route.",
    network: "Visa + RuPay", lounge: "Unlimited domestic airport privileges (₹20K prior billing-cycle spend)" },

  // ═══ HSBC ═══

  { id: "hsbc-live-plus", name: "HSBC Live+ Credit Card", bank: "HSBC", img: "🎵", color: "#dc2626", fee: 999, joiningFee: 999, feeWaiver: "₹999 renewal fee is reversed in full after more than ₹2L spend in the anniversary year; reversal follows in the next statement cycle", type: "Lifestyle", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.hsbc.bank.in/credit-cards/products/live-plus/", rewardSourceUrl: "https://www.hsbc.bank.in/content/dam/hsbc/in/documents/credit-cards/live-plus-credit-card-services-guide.pdf",
    rewardAssumptions: { shopping: "The 10% category follows HSBC's listed MCCs. Amazon, Flipkart and Myntra shopping transactions earn 1.5%, not 10%; other merchants may classify differently.", travel: "The 1.5% base rate is domestic-only: HSBC says international spends no longer earn cashback. The 1.99% forex markup is separate." },
    rewards: { dining: 10, travel: 1.5, online: 1.5, groceries: 10, fuel: 0, utilities: 10, entertainment: 1.5, shopping: 10, default: 1.5 },
    caps: { monthlyCashback: 1200, capRate: 10, fallbackRate: 0, capPeriod: "month", capAppliesTo: ["dining", "food delivery", "groceries", "shopping", "utilities"] },
    partnerRates: [],
    pointsInfo: "10% cashback on eligible dining, food delivery, grocery, shopping and utility MCCs, capped at ₹1,200/month combined. Amazon, Flipkart and Myntra shopping earn 1.5%, not 10%; foreign-currency spends earn no cashback. Most other eligible domestic spends earn 1.5%. Cashback is credited within 45 days of the statement date; reversals/cancellations can recover credited cashback. ₹999 joining and annual fee; renewal reversed after >₹2L anniversary-year spend.",
    highlights: ["10% on eligible accelerated-category MCCs", "Amazon, Flipkart & Myntra shopping earn 1.5%, not 10%", "₹1,200/month combined accelerated-cashback cap", "2 domestic lounge visits (one per six calendar months) + 1 international visit/year from 1 Sep 2026", "1.99% forex markup; no cashback on international spends"],
    pros: ["10% on eligible accelerated categories within the shared cap", "1.5% on other eligible spends", "Cashback auto-credited"],
    cons: ["No further cashback on accelerated-category spending after the ₹1,200 monthly cap", "Category and transaction exclusions apply", "HSBC limited branch network in India"],
    network: "Visa Infinite", lounge: "2 domestic/year (one per 6 calendar months) + 1 international/year (from 1 Sep 2026)" },

  { id: "hsbc-travelone", name: "HSBC TravelOne Credit Card", bank: "HSBC", img: "✈️", color: "#dc2626", fee: 4999, feeWaiver: "Annual fee waived on annual spends above ₹8L", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hsbc.bank.in/credit-cards/products/travelone/",
    rewards: { dining: 0.5, travel: 2, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "4 reward points/₹100 on travel, travel aggregators and foreign-currency spends; 2 points/₹100 on other eligible spends · 10,000 bonus points at ₹12L annual spend · Points transfer to travel partners",
    highlights: ["4 points/₹100 on eligible travel and foreign-currency spends", "6 domestic + 4 international lounge visits/year", "₹4,999 joining/annual fee", "Fee waived above ₹8L annual spend"],
    pros: ["Transferable travel points", "Good lounge access", "Generous welcome voucher"],
    cons: ["₹4,999 fee", "Lower earn rate on non-travel spends", "HSBC limited network"],
    network: "Visa", lounge: "6 domestic + 4 international/year" },

  { id: "hsbc-platinum", name: "HSBC Platinum Credit Card", bank: "HSBC", img: "🔷", color: "#dc2626", fee: 0, joiningFee: 0, feeWaiver: "No joining or annual fee", type: "Entry", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.hsbc.bank.in/credit-cards/products/visa-platinum/", rewardSourceUrl: "https://www.hsbc.bank.in/content/dam/hsbc/in/documents/platinum-ser-guide.pdf", offerSourceUrl: "https://www.hsbc.bank.in/content/dam/hsbc/in/documents/offers/visa-platinum-fuel-contactless-offer-terms-and-conditions.pdf",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.25 },
    partnerRates: [
      { name: "HSBC Travel with Points", rate: "Up to 6x Reward Points on eligible hotel, flight and car-rental bookings through the portal" },
      { name: "HSBC Unicorn portal", rate: "5x Reward Points on eligible Apple purchases through the portal" },
      { name: "Visa Platinum contactless fuel offer", rate: "₹250 cashback per calendar quarter after ₹10,000 eligible domestic contactless fuel spend; ₹1,000–₹5,000 per transaction; offer ends 31 December 2026" },
    ],
    pointsInfo: "Earn 2 Reward Points per ₹150 eligible card purchase. No points on listed utility (MCC 4900), tax, rent, insurance, jewellery, money-transfer, financial-institution, wallet, fuel, education/government and other excluded MCCs; no points on fees, cash advances, disputed purchases or EMI. Points cannot be exchanged for cash or statement credit; redeem in the HSBC app for selected gift cards, merchandise, airline miles or hotel points. Redemption values depend on the option; points expire on a rolling three-year basis. The separate Visa Platinum fuel-contactless offer pays ₹250 per calendar quarter after ₹10,000 qualifying domestic contactless fuel spend, with each transaction ₹1,000–₹5,000; valid through 31 December 2026. A separate fuel-surcharge waiver is up to ₹250/calendar month on ₹400–₹4,000 transactions; the surcharge-waiver transactions earn no reward points, and fuel GST is not reversed.",
    redemptionNote: "Reward points are not cash and cannot be redeemed as statement credit. The current issuer lists multiple gift-card, merchandise, airline and hotel routes; conversion/value varies by the selected reward. Points expire on a rolling three-year schedule. Review the redemption displayed in the HSBC app before valuing them.",
    highlights: ["No joining or annual fee", "2 points/₹150 on eligible purchases; exclusions apply", "Redeem through the HSBC app; points are not cash or statement credit", "Separate ₹250/quarter contactless fuel offer after ₹10K qualifying spend, through 31 December 2026"],
    pros: ["No joining or annual fee", "Airline and hotel-point redemption options", "Current conditional fuel-contactless offer is separately disclosed"],
    cons: ["No airport lounge access stated by issuer", "Point value varies by redemption; cash-value calculator remains disabled", "Utilities (MCC 4900), fuel, insurance and other listed MCCs do not earn base points", "Fuel offer and surcharge waiver have separate transaction and period rules"],
    network: "Visa", lounge: "None" },

  { id: "hsbc-cashback", name: "HSBC Cashback Credit Card (legacy listing)", bank: "HSBC", img: "💵", color: "#dc2626", fee: 0, feeWaiver: "Legacy product; current availability/terms not verified", type: "Cashback", verified: false,
    rewards: { dining: 0, travel: 0, online: 0, groceries: 0, fuel: 0, utilities: 0, entertainment: 0, shopping: 0, default: 0 },
    availabilityStatus: "HSBC rebranded its Cashback Credit Card as Live+ in 2024. This legacy listing is retained for existing-cardholder/search reference only; do not treat it as a separate current product. See the HSBC Live+ listing for current published terms.",
    partnerRates: [],
    pointsInfo: "Legacy product listing: current separate Cashback card terms are not verified. HSBC rebranded this card as Live+; consult the Live+ record for current published product terms.",
    highlights: ["Legacy listing; rebranded as HSBC Live+", "Current standalone terms not verified"],
    pros: ["Kept only to preserve legacy references"],
    cons: ["Do not compare as a distinct currently available product", "Legacy cardholder terms may differ"],
    network: "Unverified", lounge: "Unverified" },

  // ═══ AU BANK ═══

  { id: "au-xcite-ace", name: "AU Xcite ACE Credit Card", bank: "AU Bank", img: "🎯", color: "#ea580c", fee: 749, feeWaiver: "₹2L retail spend in previous card anniversary year (from year 2)", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.au.bank.in/personal-banking/credit-cards/swipeup-program/xcite-ace-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Monthly spend milestones", rate: "Cashback up to 3%; see current AU terms for qualifying spend and crediting" },
    ],
    pointsInfo: "Monthly milestone cashback up to 3% (eligibility depends on total spend); ₹749 annual fee, waived from year 2 at ₹2L previous-anniversary-year retail spend",
    highlights: ["Milestone cashback up to 3%", "₹749 annual fee; ₹2L retail-spend waiver from year 2", "2 domestic airport lounge visits/quarter after ₹50K prior-quarter spend", "8 railway lounge visits/year"],
    pros: ["Spend-linked cashback milestones", "Quarterly domestic airport lounge access when spend condition is met", "Railway lounge access"],
    cons: ["Annual fee applies unless waiver condition is met", "Cashback depends on monthly spend milestones", "Airport lounge access requires ₹50K previous-quarter spend"],
    network: "Visa", lounge: "2 domestic/quarter after ₹50K previous-quarter retail spend; 8 railway visits/year" },

  { id: "au-ixigo", name: "AU Ixigo Credit Card", bank: "AU Bank", img: "🧳", color: "#f59e0b", fee: 0, feeWaiver: "Currently offered lifetime-free for a limited period", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.au.bank.in/personal-banking/credit-cards/ixigo-au-credit-card",
    rewards: { dining: 1.25, travel: 1.25, online: 1.25, groceries: 1.25, fuel: 0, utilities: 1.25, entertainment: 1.25, shopping: 1.25, default: 1.25 },
    caps: { capAppliesTo: ["travel"] },
    partnerRates: [
      { name: "ixigo flight, bus and hotel offers", rate: "Up to 10% off; offer-specific terms and caps apply" },
      { name: "Quarterly spend milestone", rate: "5,000 bonus Reward Points on ₹75,000 eligible calendar-quarter spend" },
    ],
    pointsInfo: "The co-brand page lists 5 Reward Points/₹200 on eligible online, offline and QR-UPI purchases. AU's marketing uses a different headline illustration; no universal cash percentage is assigned. International purchases earn no points. The member agreement limits ixigo/LIT earning to 10,000 points per statement cycle and has category exclusions/reduced earn. Travel offers are separate discounts.",
    estimateUnavailableReason: "Current co-brand earning and AU marketing illustrations do not establish a matched redemption value. Category/transaction limits and the 10,000-point statement cap also need a dedicated model; the legacy 1.25% estimate is withdrawn.",
    highlights: ["Lifetime free (current offer)", "Zero forex markup; overseas spend earns no reward points", "Up to 10% ixigo flight, bus and hotel offers", "Airport lounge access has spend eligibility"],
    pros: ["Zero forex markup", "ixigo travel offers and zero train-booking PG fee on eligible platforms", "Railway and international lounge benefits"],
    cons: ["Domestic airport lounge access requires ₹50K previous-quarter spend", "Travel discounts vary by offer", "International spend does not earn reward points"],
    network: "Visa/RuPay", lounge: "2 domestic airport + 2 railway visits/quarter (domestic airport after ₹50K previous-quarter spend); 1 international visit/year" },

  // ═══ YES BANK ═══

  { id: "yes-kiwi", name: "Kiwi YES Bank Credit Card", bank: "YES Bank", img: "🥝", color: "#16a34a", fee: 0, feeWaiver: "Lifetime free", type: "UPI Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.gokiwi.in/cards/yesbank/",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "UPI scan & pay via Kiwi", rate: "1.5% cashback" },
      { name: "Eligible online spends", rate: "0.5% cashback" },
    ],
    pointsInfo: "Non-Neon cards issued since 4 July 2024: 1.5% eligible Kiwi scan-and-pay; 0.5% eligible online. Older cards earn 1% scan-and-pay. Kiwis accrue only on ₹100 transaction multiples, each worth ₹0.25; monthly Kiwis are capped at 1% of the card's credit limit. Utilities, fuel, insurance, government, education and other listed MCCs are excluded. Paid memberships and promotions have separate rules.",
    estimateUnavailableReason: "The monthly limit is expressed in Kiwis as 1% of the credit limit, and rewards round down per ₹100 transaction. Issuance date, membership, channel, credit limit and transaction sizes are not inputs here; a flat uncapped 0.5% model would overstate returns.",
    highlights: ["1.5% on UPI scan & pay", "0.5% on online spends", "Lifetime free", "Cashback transfers to bank account"],
    pros: ["Useful UPI cashback", "No joining or annual fee", "Cashback has direct monetary value"],
    cons: ["Best rate requires paying through Kiwi", "Only 0.5% on online card spends", "Premium Neon benefits require a paid membership"],
    redemptionNote: "1 Kiwi = ₹0.25, redeemable to the linked account in multiples of 500 Kiwis after accumulating at least 500. See the rewards policy for excluded MCCs, issuance-date differences and credit-limit-based monthly ceiling. Neon/Boost are separate memberships, not this free-plan baseline.",
    rewardSourceUrl: "https://gokiwi.in/rewards-policy-v2/",
    network: "RuPay", lounge: "None on free plan" },

  { id: "yes-uni", name: "Uni YES Bank Credit Card", bank: "YES Bank", img: "🦄", color: "#7c3aed", fee: 499, feeWaiver: "Renewal fee waived at ₹50,000 retail spend in the preceding 12 months; lifetime-free RuPay variant is listed separately by YES Bank", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.yes.bank.in/personal-banking/yes-individual/cards/credit-cards/uni-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    rewardAssumptions: { travel: "Domestic eligible retail spend only; international spend earns no Uni Coins despite zero forex markup.", utilities: "Utility payments are excluded from Uni Coin rewards." },
    partnerRates: [],
    pointsInfo: "YES Bank lists unlimited 1% rewards issued as Uni Coins and 0% forex markup. The standard YES Bank Uni card has no joining fee and a ₹499 renewal fee (waived at ₹50,000 eligible retail spend); the Uni RuPay variant is listed as lifetime-free. Rewards exclusions apply, including fuel, wallet loads, rent, government, utilities, EMI and international transactions.",
    highlights: ["1% Uni Coin rewards on eligible spends", "0% forex markup", "Standard variant: ₹499 renewal fee with ₹50K spend waiver", "RuPay variant listed as lifetime-free"],
    pros: ["Published 1% rewards and 0% forex markup", "Lifetime-free RuPay variant available per issuer"],
    cons: ["Rewards have broad exclusions, including international spends", "Standard variant has a renewal fee unless waiver is met", "No lounge access listed"],
    network: "Visa / RuPay variants", lounge: "None" },

  // ═══ OTHERS ═══

  { id: "slice", name: "slice UPI Credit Card", bank: "Slice", img: "🍕", color: "#6d28d9", fee: 0, feeWaiver: "No joining or annual fee listed", type: "UPI Cashback", verified: true, reviewedAt: "1 October 2026", sourceUrl: "https://slice.bank.in/credit-card/",
    rewards: { dining: 0, travel: 0, online: 0, groceries: 0, fuel: 0, utilities: 0, entertainment: 0, shopping: 0, default: 0 },
    partnerRates: [{ name: "Issuer-advertised UPI/card cashback", rate: "Up to 3%; not a guaranteed flat earning rate" }],
    pointsInfo: "Current slice UPI credit-card page advertises up to 3% cashback, no joining/annual fees and zero forex charges. The historical Slice-points valuation is not applicable to this current product record. Detailed cashback eligibility, caps and offer allocation are not established by the landing page.",
    highlights: ["No joining or annual fee listed", "UPI credit-card payments", "Up to 3% advertised cashback; eligibility not modelled", "Zero forex charges advertised"],
    pros: ["No listed membership fee", "UPI-focused payments"],
    cons: ["Up-to cashback is not a flat 3% on every category", "Cashback rules need a matched current programme table"],
    estimateUnavailableReason: "The current issuer advertises up to 3% cashback, but the landing page does not establish a flat earn table, caps or allocation rules. Legacy Slice-point percentages have been removed.",
    network: "UPI-linked credit-card product; check issued network", lounge: "No complimentary entitlement established by this source" },

  { id: "roarbank-unity", name: "Roarbank Unity Credit Card", bank: "Unity SF", img: "🦁", color: "#f97316", fee: 0, feeWaiver: "No joining or annual fee listed", type: "UPI Cashback", verified: true, reviewedAt: "1 October 2026", sourceUrl: "https://roar.unity.bank.in/en/credit-card",
    rewards: { dining: 0, travel: 0, online: 0, groceries: 0, fuel: 0, utilities: 0, entertainment: 0, shopping: 0, default: 0 },
    partnerRates: [],
    pointsInfo: "Roarbank lists a lifetime-free RuPay credit card with UPI support. Up to 20% cashback applies to selected categories that change monthly; it is not a published 1% reward on every purchase. Cashback is adjusted against the card balance.",
    highlights: ["No joining or annual fee listed", "RuPay credit card with UPI", "Monthly selected-category cashback offers", "Cashback adjusts the card balance"],
    pros: ["No listed membership fee", "UPI-compatible RuPay product"],
    cons: ["Promotional cashback categories change monthly", "No flat base rate or recurring cap established by the product page"],
    estimateUnavailableReason: "The issuer's up-to-20% cashback is a changing monthly category programme. No stable base rate, selected-category schedule or cap is represented in this model; the legacy 1% rate was unsupported.",
    network: "RuPay", lounge: "No complimentary entitlement established by this source" },

  { id: "csb-edge-plus", name: "CSB Edge Plus Credit Card", bank: "CSB", img: "🔶", color: "#0891b2", fee: 0, joiningFee: 999, feeWaiver: "No annual membership fee; ₹999 joining fee is separate", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.csb.bank.in/pdf/edge_csb_bank_credit_card_terms_and_conditions_2025.pdf",
    rewards: { dining: 10, travel: 5, online: 10, groceries: 10, fuel: 0, utilities: 1, entertainment: 10, shopping: 10, default: 1 },
    partnerRates: [],
    pointsInfo: "Choose either cashback or CSB Jewels on eligible spends: shopping earns 10% cashback or 50x Jewels; eligible travel-platform spends earn 5% or 25x Jewels; other eligible spends earn 1% or 5x Jewels. Category and merchant caps apply. Current KFS lists ₹999 joining fee and no annual membership fee.",
    highlights: ["Up to 10% cashback on eligible shopping", "5% cashback on eligible travel platforms", "Category and merchant caps apply", "No annual membership fee"],
    pros: ["Selectable cashback or Jewels", "No recurring annual membership fee"],
    cons: ["Category and merchant caps constrain headline rates", "₹999 joining fee", "Limited partner ecosystem"],
    network: "RuPay", lounge: "None listed in current terms" },

  { id: "rbl-world-safari", name: "RBL World Safari Credit Card", bank: "RBL", img: "🌍", color: "#7e22ce", fee: 3000, feeWaiver: "No standard annual-fee waiver listed by RBL", type: "Travel", verified: true, reviewedAt: "1 October 2026", sourceUrl: "https://www.rbl.bank.in/personal-banking/cards/credit-cards/world-safari-credit-card",
    rewards: { dining: 0.5, travel: 1.25, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "RBL publishes 5 reward points/₹100 on eligible travel and 2 points/₹100 on other eligible domestic spends. Zero foreign-currency markup. Welcome MakeMyTrip voucher ₹3,000 after an eligible purchase within 30 days and payment of the membership fee. RBL currently lists ₹3,000 annual fee; point redemption value and exclusions should be checked in the current terms.",
    highlights: ["0% foreign-currency markup", "5 points/₹100 travel; 2 points/₹100 other eligible domestic spend", "₹3,000 annual fee", "Conditional quarterly lounge access; spend thresholds apply"],
    pros: ["No foreign-currency markup", "Annual spend voucher milestone is available"],
    cons: ["₹3,000 annual fee", "Lounge access is conditional", "International transactions earn no points", "Reward-point redemption value varies by use"],
    estimateUnavailableReason: "The issuer establishes domestic earn and no overseas points, but a current fixed redemption value is not established for this cash-value model. Zero forex and lounge benefits are not cashback.",
    network: "Mastercard", lounge: "2 domestic/quarter after ₹35K prior-quarter spend; 2 international/year plus an extra international visit after ₹50K eligible quarterly spend; issuer terms apply" },

  { id: "kotak-zen", name: "Kotak Zen Credit Card", bank: "Kotak", img: "🧘", color: "#e11d48", fee: 1500, feeWaiver: "Annual fee waived at ₹1.5L retail spend/year", type: "Premium", verified: true, reviewedAt: "1 October 2026", sourceUrl: "https://www.kotak.bank.in/en/personal-banking/cards/credit-cards/zen-signature-credit-card.html",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 0.5 },
    partnerRates: [],
    pointsInfo: "10 Zen Points/₹150 on eligible shopping and 5/₹150 other eligible spends, with a shared 6,500-point billing-cycle cap. Utility eligible spend is limited to ₹50K/cycle; education/insurance to ₹70K and government to ₹40K. Fuel, wallet, rent, skill-based gaming and EMI are excluded. ₹1,500 joining/renewal fee; renewal waiver at ₹1.5L retail spend.",
    highlights: ["Shopping-specific 10 points/₹150; other eligible 5/₹150", "Shared 6,500-point billing-cycle cap", "1,500 welcome points after joining-fee payment", "₹1,500 annual fee with ₹1.5L spend waiver"],
    pros: ["Published shopping earn tier", "Domestic and international lounge entitlements with conditions"],
    cons: ["Points are not a fixed 1% cashback rate", "Lounge access has spend and primary-cardholder conditions", "Monthly point cap limits high-spend earning"],
    estimateUnavailableReason: "Earn tiers and the shared 6,500-point cap are established; an explicit current redemption route/value is still required before rupee estimates are enabled.",
    network: "Visa Signature", lounge: "2 domestic/quarter after ₹75K prior-quarter spend; 3 international/year for primary cardholder, subject to issuer terms" },

  { id: "indusind-pinnacle", name: "IndusInd Pinnacle Credit Card", bank: "IndusInd", img: "🏔️", color: "#7e22ce", fee: 9999, feeWaiver: "Fee terms depend on customer/card variant; confirm with IndusInd", type: "Super Premium", verified: false,
    rewards: { dining: 1, travel: 0.375, online: 0.625, groceries: 0.625, fuel: 0, utilities: 0.25, entertainment: 0.625, shopping: 0.625, default: 0.25 },
    partnerRates: [],
    pointsInfo: "IndusInd publishes 2.5 reward points/₹100 on e-commerce, 1.5/₹100 on e-commerce travel and airline spends, and 1/₹100 on POS/MOTO/IVR/standing-instruction spends. Redemption value varies by option. Lounge access is one international visit per calendar quarter; domestic access is one visit per quarter after ₹1.5L eligible spend in the preceding quarter (verify variant-specific fee terms).",
    highlights: ["2.5 points/₹100 on e-commerce", "1 international lounge visit/quarter", "Domestic lounge: 1/quarter after ₹1.5L prior-quarter spend", "Redemption value and fee terms vary by card variant"],
    pros: ["Published earn rates vary by transaction type", "International lounge access is listed quarterly"],
    cons: ["Domestic lounge access has a high spend threshold", "Card fee may vary by variant and customer offer", "Point value depends on redemption option"],
    network: "Confirm card variant", lounge: "1 international/quarter; 1 domestic/quarter after ₹1.5L prior-quarter spend" },

  { id: "sc-ultimate", name: "Standard Chartered Ultimate Credit Card", bank: "StanC", img: "💎", color: "#0369a1", fee: 5000, feeWaiver: "No standard annual-fee waiver listed", type: "Super Premium", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.sc.bank.in/credit-cards/ultimate-card/", rewardSourceUrl: "https://www.sc.bank.in/credit-cards/ultimate-card/",
    rewardAssumptions: { default: "Illustrative gross value assumes ₹1 per Reward Point through the issuer's stated redemption value, not cash. Most eligible MCCs earn 5 points/₹150; issuer-listed utility, supermarket, insurance, property-management, school and government MCCs earn 3/₹150. The aggregate model does not simulate transaction-level ₹150 block rounding. Fuel earns none; merchant coding and redemption rules apply.", groceries: "Maps this broad input to eligible supermarket MCC 5411 (3 points/₹150), not every grocery delivery/service merchant." },
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 2, fuel: 0, utilities: 2, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    partnerRates: [],
    pointsInfo: "5 reward points/₹150 on most eligible spends (issuer values 1 point at ₹1); 3 points/₹150 on utilities, supermarkets, insurance, property management, schools and government payments; fuel earns no points. ₹5,000 joining/renewal fee. Foreign-currency markup is 2%.",
    highlights: ["5 points/₹150 on most eligible spends (₹1/point)", "4 domestic lounge visits per calendar quarter", "International lounge: 1/month after ₹20K spend in previous month", "₹5,000 annual fee; 2% forex markup"],
    pros: ["High value per issuer-defined reward point", "Quarterly domestic lounge access"],
    cons: ["₹5,000 annual fee", "International lounge access has a prior-month spend condition", "Fuel earns no reward points"],
    network: "Mastercard", lounge: "4 domestic/quarter; 1 international/month after ₹20K prior-month spend" },

  { id: "sc-smart", name: "Standard Chartered Smart Credit Card", bank: "StanC", img: "🧠", color: "#0891b2", fee: 499, feeWaiver: "Renewal fee reversed at ₹1.2L spend in the preceding year", type: "Cashback", verified: true, reviewedAt: "2 October 2026", sourceUrl: "https://www.sc.bank.in/credit-cards/smart-credit-card/", rewardSourceUrl: "https://www.sc.bank.in/credit-cards/smart-card-faqs/",
    rewards: { dining: 1, travel: 1, online: 2, groceries: 1, fuel: 0, utilities: 2, entertainment: 1, shopping: 1, default: 1 },
    caps: { monthlyCashback: 1500, capRate: 2, fallbackRate: 1, capAppliesTo: ["online", "other eligible retail"] },
    partnerRates: [
      { name: "Online spends", rate: "2% cashback, up to ₹1,000/month" },
    ],
    pointsInfo: "2% online cashback (maximum ₹1,000/month) and 1% on other eligible spends (maximum ₹500/month); fuel excluded. Joining/first-year fee ₹499 + GST; renewal ₹499 + GST, reversed on ₹1.2L qualifying spend in the preceding year.",
    highlights: ["2% online cashback up to ₹1,000/month", "1% other eligible cashback up to ₹500/month", "₹499 + GST annual fee with spend-based renewal reversal", "Fuel excluded"],
    pros: ["Clear online cashback rate", "Fee reversal threshold published by issuer"],
    cons: ["Monthly cashback caps apply", "Fuel earns no cashback", "No lounge access listed by issuer"],
    network: "Visa", lounge: "None" },

  { id: "amex-mrcc", name: "Amex Membership Rewards Credit Card", bank: "Amex", img: "💳", color: "#006fcf", fee: 1000, feeWaiver: "Renewal fee ₹4,500; 100% waiver at ₹1.5L preceding membership-year spend, 50% waiver at ₹90K–₹1,49,999", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.americanexpress.com/in/credit-cards/membership-rewards-card/",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Taj Hotels", rate: "Up to 20% discount" },
      { name: "Marriott Bonvoy", rate: "MR point transfers" },
    ],
    pointsInfo: "1 Membership Rewards point per ₹50 on eligible spends. Fuel, insurance, utilities, cash transactions and merchant/POS EMI conversions are excluded. Earn 1,000 bonus points for 4 monthly transactions of ₹1,500+ and another 1,000 on ₹20,000 monthly spend after enrollment. Points value depends on redemption.",
    highlights: ["1 point per ₹50 on eligible spends", "1,000 points for 4 monthly transactions of ₹1,500+", "Additional 1,000 points at ₹20,000/month after enrollment", "₹4,500 renewal fee with spend-based waiver"],
    pros: ["Monthly transaction and spend milestones", "Multiple Membership Rewards redemption options"],
    cons: ["₹4,500 renewal fee unless spend waiver is met", "Fuel, insurance and utilities do not earn points", "Limited acceptance vs Visa/Mastercard in India"],
    availability: "closed",
    availabilityNote: "The issuer page reports a temporary pause in new applications. Existing-holder benefits and new-card availability are separate.",
    availabilityStatus: "As of September 2026, American Express says it is temporarily pausing new applications for this card in India while it updates its domestic card-issuing technology. Existing cardholder terms may continue; check with Amex before applying.",
    redemptionNote: "The issuer does not publish one fixed cash value per Membership Rewards point; redemption value varies by reward. Do not interpret the points earn rate as a fixed cashback percentage.",
    network: "Amex", lounge: "None listed by issuer" },
];

// Historical verdicts duplicated terms and were sent to client components.
// Public editorial now comes from reviewed-editorial.js and current records.
for (const card of CARDS) delete card.editorial;

// Correct legacy broad-category values before any consumer reads the records.
const platinum = CARDS.find(c=>c.id === 'icici-platinum');
Object.assign(platinum,{name:'ICICI Platinum Chip Credit Card',verified:true,reviewedAt:'1 October 2026',sourceUrl:'https://www.icici.bank.in/personal-banking/cards/credit-card/platinum-chip-credit-card',fee:0,joiningFee:0,feeWaiver:'No standard joining or annual fee',pointsInfo:'2 reward points/₹100 eligible retail spending; 1 point/₹100 utility and insurance spending. Rewards redeem through the issuer catalogue. Eligible HPCL fuel transactions from ₹400 to ₹4,000 receive a 1% surcharge waiver; the waiver is not points earning.',partnerRates:[],highlights:['No standard joining or annual fee','2 points/₹100 retail; 1 point/₹100 utilities and insurance','Redemption value depends on the reward selected'],pros:['No recurring membership fee','Published retail and reduced-category earning'],cons:['Points are not a fixed cashback percentage','Redemption handling fee and reward-specific value affect returns'],lounge:'None listed in the product benefits',estimateUnavailableReason:'The Platinum Chip variant, fees and points table are matched. The current catalogue does not establish a universal cash value for points; redemption-specific charges and exclusions need a selected-route model.'});
const dream = CARDS.find(c=>c.id === 'kotak-811');
Object.assign(dream,{name:'Kotak811 Dream Different FD Credit Card',verified:true,reviewedAt:'1 October 2026',sourceUrl:'https://www.kotak811.bank.in/credit-cards/811-dream-different-credit-card-against-fd',rewardSourceUrl:'https://www.kotak811.bank.in/credit-cards/811-dream-different-credit-card-against-fd/terms-and-conditions',fee:0,joiningFee:500,joiningFeeIncludesTax:true,feeWaiver:'No annual fee. Standard joining fee ₹500 including GST from 1 September 2026; a limited-period no-joining-fee offer is separate.',pointsInfo:'For billing cycles commencing September 2026: 2% on eligible purchases after at least ₹15,000 eligible cycle spend. Overall cashback ₹500/cycle, UPI sub-cap ₹200 and ₹100 per individual transaction. UPI must use Kotak811 app. Fuel, wallets, rent, cash withdrawals, EMI, gaming, gold and listed MCCs are excluded. Account/payment-channel eligibility, claim and reversal conditions apply.',caps:{monthlyCashback:500,upiCashback:200,transactionCashback:100,minimumCycleSpend:15000,capPeriod:'billing cycle'},partnerRates:[],highlights:['FD-backed product; no standard annual fee','September programme requires ₹15K eligible cycle spend','₹500 total, ₹200 UPI and ₹100 transaction cashback limits'],pros:['Cashback instead of a selected point valuation','FD-backed eligibility route'],cons:['UPI rewards require Kotak811 app','Low or excluded cycle spending may earn no cashback','An FD lien limits access to the deposit'],network:'Visa/RuPay — confirm the issued variant',lounge:'None listed in current product benefits',estimateUnavailableReason:'The September cashback programme is identified, but aggregate spending inputs omit the ₹100 transaction ceiling, ₹15K eligibility threshold, app-only UPI, payment-channel eligibility and claim conditions. No generic model is enabled.'});
const legend = CARDS.find(c=>c.id === 'indusind-legend');
legend.sourceUrl = 'https://www.indusind.bank.in/in/en/personal/cards/credit-card/legend-credit-card.html';
legend.lounge = 'Discontinued effective 7 March 2025';
legend.estimateUnavailableReason = 'The product page establishes weekday/weekend points and says lounge access ended 7 March 2025. Joining-fee plans and redemption limits/value remain variant-dependent; the historical lifetime-free fee claim is not established.';
const pinnacle = CARDS.find(c=>c.id === 'indusind-pinnacle');
pinnacle.sourceUrl = 'https://www.indusind.bank.in/in/en/personal/cards/credit-card/pinnacle-world-credit-card.html';
pinnacle.estimateUnavailableReason = 'Current issuer earn tiers are 2.5 points/₹100 e-commerce, 1.5 on travel/airline e-commerce and 1 on other eligible spend; these are points, not cashback. Current lounge terms specify one domestic visit per quarter after ₹1.5L eligible settled spend in the preceding quarter. Fee-plan and reward-redemption value/limits remain unresolved, so no cashback estimate is enabled.';
const phonePe = CARDS.find(c=>c.id === 'phonepe-sbi-select-black');
Object.assign(phonePe,{verified:true,reviewedAt:'1 October 2026',sourceUrl:'https://www.phonepe.com/credit-cards/phonepe-sbi-card-select-black-credit-card/',rewardSourceUrl:'https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/phonepe/tnc/RP-tnc.pdf',joiningFee:1499,feeWaiver:'Renewal reversed after ₹3L annual retail spending in the previous year. A limited-time first-year-free offer is separate from standard pricing.',pointsInfo:'From 1 July 2026: eligible PhonePe recharge, utilities, bills and travel earn 10 points/₹100, capped at 1,500 points/calendar month; PhonePe insurance has a separate 500-point cap. Eligible online purchases earn 5 points/₹100 up to 1,000 points/month; other eligible spending earns 1 point/₹100 up to 2,000 points/month. Minimum transaction ₹100. UPI outside PhonePe, utilities/insurance outside the app, fuel, education, rent, wallets, jewellery, gifts, tolls and other listed transactions are excluded.',redemptionNote:'1 point = ₹1 for statement credit or eligible vouchers; issuer reward terms say no redemption fee. Posting date and app merchant identifiers determine accrual.',lounge:'4 domestic visits/year, 1/quarter; Priority Pass membership is not a promise of free international visits',caps:{phonePeNonInsurance:1500,phonePeInsurance:500,online:1000,other:2000,capPeriod:'calendar month'},highlights:['July 2026 revised app/online caps','₹1,499 standard joining and renewal fee; time-limited first-year offer separate','₹3L retail-spend renewal waiver'],pros:['Statement-credit redemption at ₹1/point','Separate app and online reward buckets'],cons:['App route and merchant identifiers matter','Outside-PhonePe UPI earns no points','Accelerated caps apply per calendar month'],estimateUnavailableReason:'Current July 2026 earning, caps and fees are identified, but the inputs cannot distinguish PhonePe in-app, online, insurance and UPI routes or individual ₹100 minimum transactions. No generic numerical model is enabled.'});
const flipkartSbi = CARDS.find(c=>c.id === 'sbi-flipkart');
Object.assign(flipkartSbi, {
  verified: true,
  reviewedAt: '2 October 2026',
  sourceUrl: 'https://www.sbicard.com/en/personal/sbi-credit-card.page',
  feeSourceUrl: 'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/kfs/key-fact-statement.pdf',
  rewardSourceUrl: 'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/ekit-tncs/Flipkart-SBI-CreditCard-TandC-Booklet.pdf',
  joiningFee: 500,
  feeWaiver: '₹500 renewal fee waived after ₹3.5L annual spend in the preceding year.',
  feeScheduleNote: 'SBI Card’s August 2026 Key Fact Statement lists ₹500 annual and renewal fees, plus applicable taxes; the renewal fee is waived after ₹3.5 lakh spend in the preceding year.',
  pointsInfo: 'Statement cashback: 5% at eligible Flipkart merchant IDs (including Shopsy and Flipkart Travel), 7.5% at Myntra, 5% at Cleartrip and 4% at four issuer-listed select merchants; each accelerated merchant bucket has its own ₹4,000 quarterly ceiling. Other eligible spend earns 1%. The card-specific e-Kit describes a personalized quarterly cycle: its example begins at the first transaction and resets when the fourth bill is generated, so this is not safely described as a calendar quarter. Accelerated qualification uses partner merchant IDs; cashback is rounded down per transaction, applies only to transactions of ₹100 or more, and is credited around statement generation. Returns, EMI conversions, fees and excluded categories can reduce or reverse cashback. Exclusions include fuel, wallet/gift/prepaid loads, vouchers, cash advances, balance transfers, financial charges, rent/property management, government, jewellery, gaming, education, insurance, issuer-platform standing-instruction payments and EMI transactions. SBI currently advertises a ₹250 Flipkart gift card after fee realization; card-specific terms say delivery within 60 days and one-year expiry. A separate 1% fuel-surcharge waiver is capped at ₹400 per statement cycle; fuel itself earns no cashback.',
  redemptionNote: 'This is statement cashback, not Reward Points; eligible cashback is credited to the SBI Card account. Returns and EMI conversion may reverse it.',
  caps: { cashbackPerRewardQuarter: { flipkart: 4000, myntra: 4000, cleartrip: 4000, preferred: 4000 }, capPeriod: 'personalized quarterly cycle; see card-specific terms', capAppliesTo: ['Flipkart', 'Myntra', 'Cleartrip', 'four select merchants'] },
  partnerRates: [
    { name: 'Flipkart, Shopsy and Flipkart Travel', rate: '5% cashback; ₹4,000 quarterly cap' },
    { name: 'Myntra', rate: '7.5% cashback; ₹4,000 quarterly cap' },
    { name: 'Cleartrip', rate: '5% cashback; ₹4,000 quarterly cap' },
    { name: 'Four select merchants', rate: '4% cashback; ₹4,000 quarterly cap; exact current list is not exposed in the linked public summary' },
  ],
  highlights: ['5% Flipkart/Shopsy/Flipkart Travel, 7.5% Myntra and 5% Cleartrip; each has a separate ₹4,000 quarterly cap', '4% at four select merchants, also capped at ₹4,000 per personalized quarterly cycle', '1% on other eligible spends; transaction and category exclusions apply', '₹500 + tax annual/renewal fee; ₹3.5L preceding-year spend waives renewal', '₹250 Flipkart gift card after fee realization; separate fuel-surcharge waiver up to ₹400/cycle'],
  pros: ['Several named shopping and travel cashback tiers', 'Separate quarterly caps instead of a single shared accelerated bucket', '₹250 Flipkart gift card after fee realization'],
  cons: ['Merchant-ID matching and the card-specific quarterly reset affect cashback', '₹4,000 cap applies separately to each accelerated merchant tier', '₹500 + tax renewal fee unless preceding-year spend reaches ₹3.5L', 'Fuel, EMI and several common transaction types are excluded'],
  network: 'Visa/Mastercard',
  lounge: 'No lounge access listed in the current public product summary',
  estimateUnavailableReason: "Each accelerated merchant tier has its own ₹4,000 cap. The card-specific booklet's personalized quarterly reset, merchant-ID qualification, ₹100 minimum per transaction and per-transaction rounding cannot be modelled from aggregate category inputs; the exact preferred-merchant list is not stated in the public product summary. Keep the generic cashback estimate disabled.",
});
const eterna = CARDS.find(c=>c.id === 'bob-eterna');
Object.assign(eterna,{verified:true,reviewedAt:'2 October 2026',sourceUrl:'https://www.bobcard.co.in/credit-card-types/eterna',feeSourceUrl:'https://www.bobcard.co.in/credit-card-types/eterna',rewardSourceUrl:'https://www.bobcard.co.in/credit-card-types/eterna',joiningFee:0,fee:2499,feeWaiver:'From the second year, the ₹2,499 annual fee is waived after ₹2.5L eligible spend in the preceding card anniversary year.',feeScheduleNote:'BOBCARD advertises a ₹0 joining/first-year fee effective 1 September 2026; the standard annual fee is ₹2,499 from year two, before applicable taxes, with a ₹2.5L preceding-anniversary-year spend waiver. Promotional first-year pricing and renewal terms are distinct.',network:null,pointsInfo:'BOBCARD currently lists 15 Reward Points/₹100 on eligible dining, travel, online and international spending, and 3 points/₹100 on other eligible categories. Accelerated points share a 5,000-point statement-cycle cap; qualifying accelerated spend above it earns the regular rate. Cashback redemption is listed at ₹0.25 per point. Fuel earns no points; select MCCs are excluded. Eligibility and merchant coding affect the outcome.',redemptionNote:'The issuer lists cashback redemption at ₹0.25 per Reward Point. This is a stated redemption route, not a flat return on all spending: accelerated spend is capped, select MCCs are excluded and fuel earns no points.',lounge:'Unlimited domestic lounge visits are conditional on ₹75,000 eligible spend in the preceding calendar quarter (revised effective 15 July 2026); access remains subject to the issuer’s eligibility criteria and participating-lounge list.',caps:{acceleratedPoints:5000,pointValue:0.25,capPeriod:'statement cycle'},highlights:['15 points/₹100 on eligible dining, travel, online and international spend; shared 5,000-point statement-cycle cap','₹0 joining/first-year offer from 1 September 2026; ₹2,499 annual fee from year two','Unlimited domestic lounge access after ₹75K eligible spend in the preceding calendar quarter'],pros:['Published cashback redemption value of ₹0.25 per point','Accelerated rewards on eligible dining, travel, online and international spending'],cons:['A shared accelerated cap and excluded MCCs apply','The renewal-fee waiver and lounge access use separate spend tests','Fuel transactions earn no points'],estimateUnavailableReason:'The current issuer lists the accelerated categories, point value and shared statement-cycle cap, but generic category inputs cannot identify eligible MCCs or track the shared remaining cap. Lounge access is also spend-gated. Do not present the accelerated rate as a flat return.'});
const premier = CARDS.find(c=>c.id === 'bob-premier');
Object.assign(premier,{verified:true,reviewedAt:'1 October 2026',sourceUrl:'https://www.bobcard.co.in/credit-card-types/premier',joiningFee:0,fee:1000,feeWaiver:'Published offer from 1 September 2026: ₹0 joining/first-year fee; renewal ₹1,000, waived at ₹1.2L preceding anniversary-year eligible spending',pointsInfo:'10 points/₹100 eligible dining, travel and international spending, sharing a 2,000-point statement-cycle ceiling; then 2 points/₹100. Statement-credit value ₹0.25/point. Welcome 500 points requires ₹5,000 spend within 60 days. Fuel is excluded.',lounge:'One eligible domestic lounge visit per quarter; issuer spend eligibility applies',caps:{acceleratedPoints:2000,pointValue:0.25,capPeriod:'statement cycle'},highlights:['2,000-point shared accelerated ceiling per statement cycle','₹0 joining/first-year offer; ₹1,000 renewal','500 welcome points after qualifying spend'],pros:['Published statement-credit redemption route','Spend-based renewal waiver'],cons:['Accelerated earning shares a statement-cycle cap','Fuel and select MCCs are excluded','Lounge eligibility is conditional'],estimateUnavailableReason:'Current earning, shared cap and renewal pricing are identified. The remaining MCC exclusions, lounge spend test and redemption charges are not fully reconciled; no numerical model is enabled.'});
const titan = CARDS.find(c=>c.id === 'sbi-titan');
Object.assign(titan,{verified:true,reviewedAt:'1 October 2026',sourceUrl:'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/TnCforTitan.pdf',pointsInfo:'Eligible Titan non-jewellery brands: 7.5% benefit capped at ₹10,000/quarter; Mia/Caratlane/Zoya: 5%, separate ₹10,000/quarter; Tanishq: 3% restricted voucher benefit capped ₹25,000/quarter. Other eligible spending earns 6 points/₹100, capped at 6,000 points/month; utilities, fuel, rent, wallet and EMI are excluded. Points redeem for restricted Titan vouchers, not cash.',network:'Visa/RuPay',lounge:'Issuer booklet lists 8 domestic/year (2/quarter), 4 international/year (2/quarter); programme eligibility applies',cons:['Brand-specific merchant identifiers and quarterly limits','Other-spend points have a 6,000 monthly cap','Points redeem only for eligible Titan vouchers'],estimateUnavailableReason:'Brand-specific cashback, restricted vouchers and monthly points have different limits and redemption terms. The issuer-hosted booklet is dated November 2024; later programme changes remain to be reconciled, so no numerical recommendation is enabled.'});
titan.rewards.utilities = 0;
const simplysave = CARDS.find(c => c.id === "sbi-simplysave");
simplysave.rewardAssumptions = {dining:'Eligible restaurant MCCs; not a weekend-specific rate.',shopping:'Departmental-store MCCs only, not all retailers.',entertainment:'Eligible movie MCCs only, not generic streaming/entertainment.',default:'Voucher-equivalent ₹0.25/point before redemption charges; transaction rounding and excluded categories can reduce earning.'};
simplysave.pros = ['Accelerated points on eligible dining, grocery, movie and departmental-store transactions','Low standard fee with a spend-based renewal waiver','Welcome points on qualifying new-card spend'];
// Broad site buckets also contain non-accelerated categories (e.g. streaming,
// fashion and electronics). Keep those at base; the issuer's exact MCC-based
// 10X dining/grocery/movie/departmental-store terms remain in pointsInfo.
simplysave.rewards.groceries = 1.67;
const smart = CARDS.find(c => c.id === "sc-smart");
Object.assign(smart.rewards, { dining: 1, travel: 1, groceries: 1, utilities: 2, entertainment: 1, shopping: 1 });
smart.caps = { cashbackBuckets: { online: 1000, other: 500 }, capPeriod: "statement cycle" };
smart.reviewedAt = '2 October 2026';
smart.rewardSourceUrl = 'https://www.sc.bank.in/credit-cards/smart-card-faqs/';
smart.pointsInfo = '2% eligible online cashback capped at ₹1,000/statement cycle; 1% eligible offline capped at ₹500/statement cycle, combined across primary/supplementary cardholders. Billdesk/StanChart Bill Pay eligibility is limited to registered telecom and utility billers. Fuel and cash withdrawals earn no cashback.';
smart.partnerRates = [{name:'Eligible online purchases',rate:'2%, up to ₹1,000 per statement cycle'}];
smart.highlights = ['Separate online/offline statement-cycle buckets','Published fee-reversal condition','Cashback redemption minimum applies'];
smart.cons = ['Caps are per statement cycle, not calendar month','₹2,500 redemption minimum; subsequent ₹1,000 increments','Fuel/cash withdrawals excluded'];
smart.redemptionNote = '₹1 cashback value per unit; redeem through Rewards360 against the card statement. Minimum ₹2,500 balance, then ₹1,000 increments. Issuer FAQ says no ₹99 cashback redemption fee. Accrued value is not necessarily immediately redeemable.';
smart.rewardAssumptions = {utilities:'Assumes online payment to an eligible registered utility/telecom biller through Billdesk or StanChart Bill Pay; shares the ₹1,000 online statement-cycle bucket. Not a promise for any bill app.',online:'Eligible online purchases, sharing the ₹1,000 statement-cycle bucket with modelled eligible utility bills.',default:'Other modelled categories assume eligible offline transactions in one statement cycle, sharing ₹500. Online transactions use a different bucket; cashback shown is accrued value before the redemption minimum.'};
const neuPlus = CARDS.find(c => c.id === "hdfc-tata-neu-plus");
Object.assign(neuPlus,{reviewedAt:'2 October 2026',feeSourceUrl:'https://www.hdfc.bank.in/credit-cards/tata-neu-plus-hdfc-bank-credit-card/fees-and-charges',rewardSourceUrl:'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/tata-neu-plus-hdfc-bank-credit-card/pdfs/tata_neu_plus_card_tnc.pdf',joiningFee:499,fee:499,feeWaiver:'₹499 renewal fee waived after ₹1L eligible spend in the preceding year.',feeScheduleNote:'HDFC lists ₹499 joining and renewal fees, plus applicable taxes; the renewal fee is waived after ₹1 lakh spend in the preceding year. Any first-year-free offer is channel- and application-date-specific.',network:'RuPay; HDFC also lists Visa/RuPay lounge terms, so confirm the network shown on the issued card',lounge:'One domestic lounge voucher per calendar quarter after ₹50,000 eligible spend in that calendar quarter. Claim within the issuer window; a voucher is not an unconditional lounge visit.',pointsInfo:'2% NeuCoins on eligible non-EMI Tata-brand purchases; 1% on eligible non-Tata and merchant-EMI spend. Eligible Tata Neu app/website categories can earn an additional 5% through NeuPass; exclusions apply. On RuPay UPI, eligible UPI transactions earn 0.25%, plus 0.75% when paid using the Tata Neu UPI ID; UPI is capped at 500 NeuCoins/calendar month. Grocery earning is capped at 1,000/month; utility, telecom/cable and insurance have separate 2,000-NeuCoin monthly caps. NeuCoins are ecosystem value, not statement cashback; fuel and other excluded transactions earn none.',redemptionNote:'One NeuCoin is shown by HDFC as ₹1 for eligible Tata Neu redemption. It is not unrestricted cash or statement credit; some merchant/payment routes are ineligible and the issuer applies transaction/category caps.',caps:{neuCoins:{grocery:1000,utilities:2000,telecom:2000,insurance:2000,upi:500},capPeriod:'calendar month',capAppliesTo:['grocery','utility','telecom/cable','insurance','RuPay UPI']},highlights:['2% on eligible Tata-brand non-EMI spend; 1% on other eligible spend','Selected Tata Neu/NeuPass categories can add 5%; UPI has a separate 500-NeuCoin monthly cap','₹499 joining/renewal fee; renewal waiver at ₹1L preceding-year spend','One domestic lounge voucher/quarter after ₹50K calendar-quarter spend'],pros:['Earns NeuCoins on eligible Tata-brand purchases','RuPay UPI has a published, separately capped earning route'],cons:['NeuCoins are restricted to eligible Tata Neu redemption, not statement cash','Partner MIDs, app route and category-specific caps determine actual earning','Lounge voucher requires quarterly spend and a separate claim']});
neuPlus.estimateUnavailableReason='The broad categories cannot distinguish eligible Tata partner brands, NeuPass app routes and ordinary purchases; UPI, grocery, utility, telecom and insurance also have separate caps. NeuCoins are restricted ecosystem value rather than unrestricted cash, so no generic category estimate is enabled.';
neuPlus.rewardAssumptions={default:'Reward rate depends on Tata partner MID, app route and transaction type; ordinary eligible non-Tata non-UPI spend earns 1%. No flat category estimate.',online:'Only eligible Tata partner/MID and NeuPass app transactions earn the accelerated Tata-brand rates; generic online spend does not.',travel:'Tata-brand/NeuPass routes only; generic travel merchants do not receive partner earning.',groceries:'Eligible Tata-brand grocery earning is capped at 1,000 NeuCoins per calendar month.',utilities:'Eligible utility, telecom/cable and insurance routes have separate 2,000-NeuCoin monthly caps; BBPS/payment route and MCC eligibility apply.',default:'NeuCoins redeem within the Tata Neu ecosystem, not as unrestricted cash. Transaction rounding and exclusions apply.'};
const paytm = CARDS.find(c=>c.id==='hdfc-paytm');
paytm.reviewedAt = '1 October 2026';
paytm.joiningFee = 500;
paytm.feeWaiver = '₹30K eligible non-EMI spending in first 90 days for first-year fee waiver; ₹50K in 12 months for renewal';
paytm.redemptionNote = 'CashPoints redeem against the statement balance, not automatically into the Paytm wallet. Statement redemption capped at 3,000 points/calendar month; travel redemption has a separate 50,000-point limit. Selected product redemptions require at least 30% cash co-payment. Verify the current redemption handling charge.';
paytm.estimateUnavailableReason = 'The standard ₹500 Paytm HDFC variant is matched to its 3%/2%/1% buckets. Inputs do not identify Paytm routes, and a current fixed CashPoint conversion/handling-charge model is not established. Do not substitute Digital, Select or Business variant terms.';
CARDS.find(c=>c.id==='hdfc-freedom').reviewedAt = '1 October 2026';
CARDS.find(c=>c.id==='hsbc-platinum').joiningFee = 0;
CARDS.find(c=>c.id==='hsbc-platinum').reviewedAt = '2 October 2026';
const xcite = CARDS.find(c=>c.id==='au-xcite-ace');
xcite.reviewedAt = '1 October 2026';
xcite.partnerRates.push({name:'Fuel surcharge waiver',rate:'From 1 October 2026: up to ₹100/statement cycle on ₹400–₹5,000 fuel transactions; this is not fuel cashback'});
// Convert category earning ceilings using the SAME valuation route as the
// displayed rate. A redemption ceiling is not an earning ceiling.
for (const [id, value] of [["hdfc-regalia",0.50],["hdfc-infinia",1],["hdfc-diners-black",1],["hdfc-moneyback-plus",0.25]]) {
  const card = CARDS.find(c=>c.id===id);
  card.categoryRewardCaps = {groceries:(id === "hdfc-moneyback-plus" ? 1000 : 2000)*value,utilities:2000*value};
  card.totalRewardValueCap = ({'hdfc-regalia':50000,'hdfc-infinia':200000,'hdfc-diners-black':75000,'hdfc-moneyback-plus':15000})[id]*value;
  card.minimumEligibleTransaction = ['hdfc-infinia','hdfc-diners-black'].includes(id) ? 150 : 200;
  card.categoryRewardCapPeriods = {groceries:'month',utilities:'calendar month'};
  card.rewardAssumptions = {...card.rewardAssumptions,default:`Eligible retail spending only, using ₹${value}/point ${id === 'hdfc-moneyback-plus' ? 'catalogue/travel' : 'travel'} redemption value, not statement cashback. Assumes individual transactions qualify for ₹${card.minimumEligibleTransaction} earning blocks. Utility caps use a calendar month; the overall cap uses a statement cycle. The aggregate scenario assumes spending lies within both periods; it cannot track overlapping statements. Transaction remainders, redemption charges and booking co-payment requirements are not simulated.`};
  card.rewardSourceUrl = 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf';
  card.reviewedAt = '2 October 2026';
  card.pointsInfo += ` Eligible purchases earn in ₹${card.minimumEligibleTransaction} blocks. Grocery earning is capped at ${id === 'hdfc-moneyback-plus' ? '1,000' : '2,000'} points/month; utilities at 2,000 points/calendar month. The overall statement-cycle earning ceiling is ${(card.totalRewardValueCap/value).toLocaleString('en-IN')} points. These are earning caps, not redemption limits.`;
  const insurancePointCap = id === 'hdfc-infinia' ? 10000 : id === 'hdfc-diners-black' ? 5000 : 2000;
  card.pointsInfo += ` September 2026 HDFC MITC separately caps insurance-earned points at ${insurancePointCap.toLocaleString('en-IN')} per month; insurance rewards are not included in this calculator.`;
}
const regaliaRecord = CARDS.find(c=>c.id==='hdfc-regalia');
regaliaRecord.rewardSourceUrl = 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-credit-card/pdfs/rp-regalia.pdf';
const hdfcPersonalMITC = 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf';
for (const card of CARDS.filter(c=>c.bank==='HDFC')) {
  card.transactionFeeSourceUrl = hdfcPersonalMITC;
  card.transactionFeeNote = 'September 2026 consumer-card MITC: utilities above ₹50,000 in a calendar month attract a 1% fee on the full eligible monthly total (maximum ₹4,999 before GST), not just the excess. Fuel purchases above ₹15,000 attract 1% on the full transaction, capped at ₹4,999 before GST. INR payments at overseas/internationally registered merchants attract 1.75% DCC markup. These charges and applicable GST are not deducted from gross reward estimates; a fuel-surcharge waiver does not waive the separate high-value fuel charge.';
}
for (const id of ['hdfc-infinia','hdfc-diners-black']) {
  const card = CARDS.find(c=>c.id===id);
  card.redemptionNote = `Travel redemption value assumes ₹1/point on the eligible bank portal, covering at most 70% of flight/hotel booking value; the remainder is paid with the card. Flight/hotel redemption is limited to ${id === 'hdfc-infinia' ? '150,000' : '75,000'} points/calendar month. Catalogue and cashback request processing fees are waived for this variant under September 2026 MITC. Points normally expire after three years; 365 days without card use can forfeit the balance.`;
}
const hdfcMoneyback = CARDS.find(c=>c.id==='hdfc-moneyback-plus');
hdfcMoneyback.redemptionNote = 'Displayed estimates use the ₹0.25/point eligible catalogue/travel route, not statement cashback, which is ₹0.20/point from November 2025. Catalogue requests cost ₹99 + GST; cashback requests cost ₹50 + GST and require a ₹500 minimum redemption value. SmartBuy flight/hotel points cover at most 50% of booking value. CashPoints normally expire after two years; inactivity can forfeit them.';
const ultimo = CARDS.find(c=>c.id==='hdfc-ultimo');
ultimo.reviewedAt = '2 October 2026';
ultimo.lounge = 'Issuer documents conflict on the domestic lounge allowance; not used as a confirmed lounge recommendation';
ultimo.loungeSourceConflict = true;
ultimo.highlights[3] = '₹999 standard fee; ₹2L prior-year fee-waiver threshold; lounge allowance under source reconciliation';
ultimo.pros = ['PhonePe ecosystem earning buckets','₹1/point statement-credit route'];
ultimo.cons = ['App/merchant route determines earning','September MITC and linked lounge terms publish different allowances','₹999 annual fee unless prior-year ₹2L waiver is met'];
ultimo.redemptionNote = 'Statement-credit value is ₹1/point; catalogue and cashback processing fees are waived in the September MITC. Reward points normally expire after two years. The September MITC describes two domestic visits/quarter plus two extra after ₹75,000 preceding-quarter eligible spend (extra visits exclude the issuance quarter); the product page and linked April lounge terms instead describe two spend-qualified visits/quarter. Neither conflicting allowance is counted as a confirmed benefit in comparisons.';
ultimo.rewardSourceUrl = hdfcPersonalMITC;
CARDS.find(c=>c.id==='hdfc-infinia').name = 'HDFC Infinia Metal Edition';
const hdfcNeu = CARDS.find(c=>c.id === 'hdfc-tata-neu-infinity');
hdfcNeu.totalRewardValueCap = 50000;
hdfcNeu.overallCapExcludedCategories = ['groceries','utilities'];
hdfcNeu.rewardSourceUrl = hdfcPersonalMITC;
hdfcNeu.sourceUrl = 'https://www.hdfc.bank.in/credit-cards/tata-neu-infinity-hdfc-bank-credit-card';
hdfcNeu.rewardSourceUrl = 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/tata-neu-infinity-credit-card/pdf/tata_neu_infinity_card_faq.pdf';
hdfcNeu.minimumEligibleTransaction = 100;
hdfcNeu.categoryRewardCapPeriods = {groceries:'month',utilities:'calendar month'};
hdfcNeu.rewardAssumptions = {...hdfcNeu.rewardAssumptions,default:'Eligible purchases accrue in ₹100 transaction blocks; aggregate estimates do not round each purchase. Assumes spending within one calendar month and one statement cycle; separate NeuPass promotions are not added. Utility/calendar and overall/statement-cycle ceilings are different periods.'};
hdfcNeu.reviewedAt = '2 October 2026';
hdfcNeu.pointsInfo += ' Insurance earning has a separate 2,000-NeuCoin monthly ceiling; it is not the utility route. The overall 50,000-NeuCoin statement-cycle ceiling covers categories without an existing fair-usage cap.';
hdfcNeu.joiningFee = 1499;
hdfcNeu.fee = 1499;
hdfcNeu.feeWaiver = '₹1,499 renewal fee waived after ₹3L eligible spend in the preceding year.';
hdfcNeu.feeScheduleNote = 'HDFC lists ₹1,499 joining and renewal fees, plus applicable taxes; renewal is waived after ₹3 lakh spend in the preceding year.';
hdfcNeu.feeSourceUrl = 'https://www.hdfc.bank.in/credit-cards/tata-neu-infinity-hdfc-bank-credit-card';
hdfcNeu.redemptionNote = 'One NeuCoin is shown by HDFC as ₹1 for eligible Tata Neu redemption. This is ecosystem-specific value, not unrestricted cashback or statement credit; eligible merchants, payment routes, caps and NeuCoin expiry apply.';
hdfcNeu.network = 'RuPay; HDFC also lists Visa/RuPay lounge terms, so confirm the network shown on the issued card';
hdfcNeu.lounge = 'Two domestic lounge vouchers per calendar quarter (up to eight/year) after ₹50,000 eligible spend in that calendar quarter; four international lounge visits/year are separately listed. Network, claim and programme conditions apply.';
hdfcNeu.pointsInfo = '5% NeuCoins on eligible non-EMI Tata-brand purchases; 1.5% on eligible non-Tata and merchant-EMI spend. Selected Tata Neu app/website categories can earn an additional 5% through NeuPass, with named exclusions. On RuPay UPI, eligible transactions earn 0.5%, plus 1% when paid using the Tata Neu UPI ID; the combined UPI cap is 500 NeuCoins/calendar month. Grocery, utility, telecom/cable and insurance each have separate 2,000-NeuCoin monthly caps. A further 50,000-NeuCoin statement-cycle ceiling applies where no category cap already governs. NeuCoins expire 12 months from the end of the month of credit under the current issuer schedule; fuel and other excluded transactions earn none.';
hdfcNeu.highlights = ['5% on eligible Tata-brand non-EMI purchases; 1.5% on other eligible spend','Selected Tata Neu/NeuPass routes can add 5%; RuPay UPI has a distinct capped route','Category monthly caps and a separate 50,000-NeuCoin statement-cycle ceiling apply','Two domestic lounge vouchers/quarter after ₹50K calendar-quarter spend; international visits are separately conditioned/listed'];
hdfcNeu.pros = ['Strong NeuCoin earning on eligible Tata-brand spend','Published domestic lounge voucher threshold and annual international allowance'];
hdfcNeu.cons = ['Partner-MID, app route and category caps determine actual earning','NeuCoins are restricted ecosystem value and expire under the issuer schedule','Lounge access requires the spend milestone and voucher/programme conditions'];
hdfcNeu.estimateUnavailableReason = 'Generic spend categories cannot distinguish Tata partner-brand MIDs, selected NeuPass app routes, ordinary non-Tata purchases or RuPay UPI channels. Separate category caps, the 50,000-point statement-cycle ceiling and ecosystem-restricted redemption cannot be represented faithfully in one flat category estimate.';
const hdfcMillennia = CARDS.find(c=>c.id==='hdfc-millennia');
hdfcMillennia.joiningFee = 1000;
hdfcMillennia.feeWaiver = 'Spend over ₹1L in the year before renewal for annual-fee waiver';
hdfcMillennia.rewardSourceUrl = 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf';
hdfcMillennia.reviewedAt = '2 October 2026';
hdfcMillennia.rewardAssumptions.default = 'Statement-credit value before the ₹50 redemption fee and applicable tax. Uses calendar-month settlement, not the statement cycle; the issuer identifies the ten merchant MIDs, and refunds/reversals adjust CashPoints. SmartBuy/PayZapp has separate 1% base rules. Fuel, rent, government, EMI, wallet loading, cash, fees and third-party education are excluded. No minimum transaction value is stated in the current card-specific reward terms; aggregate estimates do not model transaction-level rounding or settlement-date shifts.';
hdfcMillennia.estimateUnavailableReason = 'The 5% rate applies only to ten listed merchant MIDs, while this calculator accepts broad categories such as online, dining and shopping. It cannot distinguish an eligible listed merchant from other spend, or model the separate monthly caps and redemption fee reliably; no generic estimate is shown.';
const zenith = CARDS.find(c=>c.id === 'au-zenith');
zenith.categoryRewardCaps = {utilities:1000};
zenith.totalRewardValueCap = 25000;
zenith.rewardAssumptions = {default:'₹1/point issuer redemption route; total earn limited to 25,000 points per statement cycle. No welcome/milestone benefits included.',utilities:'Assumes eligible non-BBPS utility/telecom transactions, each no more than ₹10,000. Earn is capped at 100 points per transaction and 1,000 per statement cycle; a single large payment can earn much less.'};
zenith.pointsInfo += ' Utility/telecom earn: 1 point/₹100, maximum 100 points per transaction and 1,000 per statement cycle; total earning ceiling 25,000 points/cycle. BBPS and other excluded transactions do not earn.';
zenith.rewardSourceUrl = 'https://www.au.bank.in/content/dam/aubank/in/en/credit-cards/credit-card-member-agreement.pdf';
zenith.rewardAssumptions.default += ' Per-redemption handling charges and per-₹100 transaction rounding are not subtracted; this is gross reward value, not net savings.';
const sbiNeu = CARDS.find(c=>c.id === 'sbi-tata-neu-infinity');
Object.assign(sbiNeu,{reviewedAt:'2 October 2026',sourceUrl:'https://www.sbicard.com/en/personal/sbi-credit-card.page',feeSourceUrl:'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/kfs/key-fact-statement.pdf',rewardSourceUrl:'https://www.sbicard.com/sbi-card-en/assets/docs/pdf/Tata-neu-infinty-tnc.pdf',joiningFee:1499,fee:1499,feeWaiver:'₹1,499 renewal fee waived after ₹3L or more eligible spend in the preceding year.',feeScheduleNote:'SBI Card’s May 2026 Key Fact Statement lists ₹1,499 annual and renewal fees, plus applicable taxes; renewal is waived after ₹3 lakh eligible spend in the preceding year.',network:'Visa or RuPay variant',rewards:{dining:1.5,travel:1.5,online:1.5,groceries:1.5,fuel:0,utilities:1.5,entertainment:1.5,shopping:1.5,default:1.5},pointsInfo:'5% NeuCoins on eligible non-EMI purchases made on Tata Neu and at listed partner Tata brands; selected Tata Neu app categories may have a separate accelerated offer under the linked card terms. Other eligible purchases earn 1.5% NeuCoins. RuPay UPI has route-specific terms and a 500-NeuCoin monthly cap; partner-brand, grocery, utility, telecom and insurance limits/exclusions apply. NeuCoins are credited to Tata Neu for eligible ecosystem redemption, not bank-account cash. SBI lists a 1.99% foreign-currency markup for this card.',redemptionNote:'NeuCoins are credited to the Tata Neu account and redeem within eligible Tata Neu/partner-brand channels; they are not statement cash. The 5% earn requires an eligible Tata Neu/partner-brand route. A generic category estimate is not supported.',lounge:'SBI currently lists up to eight complimentary domestic lounge visits/year (two per quarter) after ₹75,000 eligible spend in the preceding quarter. This benefit is spend- and programme-conditional; do not treat it as unconditional access.',highlights:['5% NeuCoins on eligible Tata Neu and partner-brand non-EMI spend','1.5% on other eligible purchases; RuPay UPI has separate route/cap terms','₹1,499 + tax annual/renewal fee; waiver after ₹3L preceding-year eligible spend','Domestic lounge allowance is spend-qualified: ₹75K preceding quarter'],pros:['Accelerated NeuCoin earn on eligible Tata Neu/partner-brand purchases','Reduced foreign-currency markup listed by SBI'],cons:['Partner brand/MID and channel determine accelerated earn','NeuCoins are ecosystem redemption value, not statement cashback','Quarterly lounge access requires the issuer spend threshold']});
sbiNeu.categoryRewardCaps = {groceries:2000,utilities:2000};
sbiNeu.estimateUnavailableReason='The 5% rate depends on eligible Tata Neu/partner-brand MIDs and selected app routes, while generic spend categories cannot separate those purchases from ordinary spending. UPI and multiple category caps are also distinct, and NeuCoins are restricted ecosystem value. Do not apply the partner rate to all grocery, shopping or travel spend.';
sbiNeu.rewardAssumptions = {groceries:'Only eligible Tata-brand grocery transactions receive the partner rate; ordinary grocery purchases use the base rate and may be subject to a category ceiling.',shopping:'The 5% tier requires listed Tata partner brands/MIDs, not generic shopping.',utilities:'Eligible utility earning has its own monthly cap and exclusions; UPI uses a separate channel-specific cap.',default:'Generic inputs use the 1.5% base-tier rate only as descriptive context; the public estimate stays disabled. NeuCoins redeem within eligible Tata Neu channels, not as cash.'};
for (const id of ['idfc-wow','idfc-millennia']) {
  const card = CARDS.find(c=>c.id===id);
  card.reviewedAt = '1 October 2026';
  card.minimumEligibleTransaction = 200;
  card.rewardAssumptions = {default:'Points valued at ₹0.25, before ₹99 + GST per redemption. Assumes eligible transactions meet the ₹200 earning block and total cycle spending stays within the credit limit; spend beyond that limit earns no points. Aggregate estimates do not simulate per-transaction block rounding. Fuel, EMI, cash withdrawals, fees and charges are excluded.',travel:id==='idfc-millennia' ? '10X applies only to eligible travel; railway/FASTag earn at 1X. Birthday and portal promotions are not added.' : '4X eligible travel except railway/FASTag at 1X; not the separate WOW Black variant.'};
}
CARDS.find(c=>c.id==='idfc-millennia').pointsInfo += ' Current product page also lists 10X on international purchases; the previously displayed October 26 cessation is not supported by the current page. Optional personalised cards/add-ons and FIRST Digital have separate charges.';
const uni = CARDS.find(c=>c.id==='yes-uni');
uni.reviewedAt = '1 October 2026';
uni.joiningFee = 0;
uni.rewardSourceUrl = 'https://webcdn.uni.cards/nxwave/docs/CC_YesBank_MITC.pdf';
uni.pointsInfo = 'YES BANK June 23, 2026 MITC lists the standard Uni variant with no joining fee, ₹499 annual fee and ₹50,000 preceding-12-month waiver. Uni RuPay Virtual is a separate zero-fee row. Uni now markets GoldX and digital-gold rewards; its general landing page does not establish the same reward table or redemption route for this standard YES BANK variant.';
uni.highlights = ['Standard Uni: no joining fee; ₹499 annual fee', 'Annual fee waiver at ₹50,000 eligible retail spend', 'Zero foreign-currency conversion charge in the issuer MITC', 'Uni RuPay Virtual has a separate zero-fee schedule'];
uni.pros = ['Standard fee and waiver are documented in the issuer MITC', 'Zero foreign-currency conversion charge', 'Separate no-fee virtual RuPay variant listed'];
uni.pointsInfo += ' The same MITC exempts Uni from issuer foreign-currency and dynamic-currency conversion charges; merchant conversion rates and ATM costs are separate. Eligible non-UPI fuel surcharge waiver is capped at ₹500 per statement cycle, for transactions up to ₹7,500; surcharge tax is not waived.';
uni.cons = ['Current reward programme differs by issuer/variant', 'Standard annual fee applies without the waiver', 'Generic GoldX marketing cannot establish standard Uni reward value'];
uni.estimateUnavailableReason = 'The current standard Uni fee variant is matched to the June 2026 YES BANK MITC, but the current Uni Coin earning, exclusions and redemption route are not matched to that same variant. The generic 1% rupee model is withheld rather than substituting GoldX/BOBCARD terms.';
CARDS.find(c=>c.id==='icici-mmt').rewardAssumptions = {travel:'3% myCash applies to eligible flights/holidays/cabs/buses booked on MakeMyTrip, not all travel merchants. Hotels on MakeMyTrip use a separate 6% route not modelled here.',default:'myCash is restricted to eligible MakeMyTrip redemptions, not statement cashback; excluded transaction types do not earn.'};
CARDS.find(c=>c.id==='scapia').rewardAssumptions = {travel:'Assumes eligible bookings made through the Scapia app (20% Coins = 4% ecosystem value), not other travel websites.',default:'Assumes eligible domestic Visa card spending (10% Coins = 2% ecosystem value). RuPay UPI ₹500+ has a different 1% effective tier. Overseas transactions, fuel and listed excluded categories earn no Coins.'};
const scapia = CARDS.find(c=>c.id==='scapia');
scapia.rewardSourceUrl = 'https://res.cloudinary.com/scapiacards/raw/upload/v1774342764/spitha_prod_uploads/2026_03/Cardholderagreementv1027_02_26_1774342761664.pdf';
scapia.reviewedAt = '2 October 2026';
scapia.rewards.utilities = 0;
scapia.minimumEligibleTransaction = 20;
scapia.rewardAssumptions.default = 'Eligible domestic Federal Visa transactions of ₹20 or more; aggregate estimates assume each transaction qualifies. RuPay has separate ₹500 eligibility. Foreign currency, insurance, utilities, telecom, education, wallets, rent, fuel and other excluded MCCs earn no Coins. Transaction rounding is not simulated.';
scapia.redemptionNote = 'Five Scapia Coins = ₹1 towards eligible app bookings, not cash. Coins normally expire after 36 months; account inactivity/closure can forfeit them. Booking and Coin redemption fees are excluded from these gross estimates; compare the checkout price with the same itinerary elsewhere.';
const mmt = CARDS.find(c=>c.id==='icici-mmt');
mmt.reviewedAt = '2 October 2026';
mmt.joiningFee = 999;
mmt.feeWaiver = 'Spend over ₹3L in one year for next-year annual-fee waiver';
mmt.fee = 999;
mmt.feeSourceUrl = 'https://www.icici.bank.in/personal-banking/cards/credit-card/makemytrip/makemytrip-icici-bank-credit-card';
mmt.rewardSourceUrl = 'https://www.icici.bank.in/personal-banking/cards/credit-card/makemytrip/makemytrip-icici-bank-credit-card';
mmt.lounge = 'Two complimentary domestic airport lounge visits per quarter and one international visit per year are listed for the current MakeMyTrip card. The issuer’s general ₹75K lounge-spend gate expressly excludes MakeMyTrip cards; participating-lounge and card/network programme conditions still apply.';
mmt.pointsInfo = 'Current MakeMyTrip ICICI card: 6 myCash/₹100 on eligible MMT hotel bookings, 3/₹100 on eligible MMT flight, bus and cab bookings, and 1/₹100 on other retail. myCash is ₹1 of MakeMyTrip wallet value per unit, usable for eligible MMT bookings/partner vouchers—not bank cash—and current-card myCash does not expire. The issuer also lists a 0.99% forex markup, MMTBLACK Gold membership, ₹1,000 joining voucher on fee payment and ₹1,000 hotel voucher on annual-fee payment. Legacy MMT Signature and Platinum cards have different benefits and expiry.';
mmt.redemptionNote = 'Current-card myCash is credited to MakeMyTrip MyWallet at ₹1 per myCash and may be used for eligible MakeMyTrip bookings or partner vouchers. It cannot be withdrawn to a bank account; current-card myCash does not expire. Legacy Signature/Platinum cards follow different expiry and reward terms.';
mmt.feeScheduleNote = 'Joining and annual fees are ₹999 + GST. The annual fee is waived for the next year after spending more than ₹3 lakh in one year. The issuer lists a ₹1,000 MakeMyTrip joining voucher after paying the joining fee and a ₹1,000 hotel voucher after annual-fee payment; these are conditional platform vouchers, not fee cashbacks.';
mmt.highlights = ['6 myCash/₹100 on eligible MMT hotel bookings; 3/₹100 on eligible flights, buses and cabs; 1/₹100 on other retail','Current-card myCash does not expire, but is restricted to eligible MakeMyTrip wallet redemption','₹999 + GST joining/annual fee; next-year renewal waiver after more than ₹3L eligible annual spend','Two domestic lounge visits/quarter and one international/year listed; ICICI general ₹75K lounge gate excludes MMT cards'];
mmt.pros = ['Travel earn is differentiated by eligible MakeMyTrip booking type','Current-card myCash is not subject to expiry and has a ₹1 wallet value','Reduced 0.99% foreign-currency markup'];
mmt.cons = ['myCash is not cash and can only be used through eligible MakeMyTrip redemption routes','MMT booking rewards depend on merchant route and completion/credit terms','Joining, renewal, movie and lounge benefits have separate eligibility rules'];
mmt.rewardAssumptions.default = 'Eligible myCash earning excludes rent, cash advances, fees, EMI, balance transfers and personal loans. myCash cannot be transferred to a bank account. Utility/insurance MCC earning is not established by this general retail model.';
mmt.estimateUnavailableReason = 'Aggregate category inputs cannot separate eligible MakeMyTrip hotel, flight, bus and cab booking routes from other travel spend, and myCash is restricted wallet value rather than cash. No broad-category cash estimate is enabled.';
// August 2, 2026 ICICI MITC distinguishes the joining charge in year one
// from the annual charge from year two. Do not add both to a first-year bill.
const iciciMITC = 'https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/mitc_cc.pdf';
const infiniaMetal = CARDS.find(c=>c.id==='hdfc-infinia');
infiniaMetal.joiningFee = 12500;
infiniaMetal.feeSourceUrl = 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf';
infiniaMetal.feeWaiver = '₹10L preceding-year eligible spend; Metal Edition fee schedule, not legacy plastic Infinia';
for (const [id, joiningFee] of [['icici-coral',500],['icici-sapphiro',6500],['icici-rubyx',3000],['icici-emeralde',12000],['icici-hpcl-super-saver',500],['icici-hpcl-coral',199],['icici-mmt',999],['icici-platinum',0]]) {
  const card = CARDS.find(c=>c.id===id);
  Object.assign(card,{joiningFee,firstYearAnnualFee:0,feeSourceUrl:iciciMITC,reviewedAt:'1 October 2026'});
  card.feeScheduleNote = `Standard schedule: year one joining fee ₹${joiningFee.toLocaleString('en-IN')} and no additional first-year annual fee; renewal ₹${card.fee.toLocaleString('en-IN')} from year two, before GST and any eligible reversal. Offer-specific pricing and add-on charges are separate.`;
}
Object.assign(mmt,{reviewedAt:'2 October 2026',feeSourceUrl:'https://www.icici.bank.in/personal-banking/cards/credit-card/makemytrip/makemytrip-icici-bank-credit-card'});
const coral = CARDS.find(c=>c.id==='icici-coral');
coral.feeWaiver = '₹1.5L eligible anniversary-year spend; EMI excluded (MITC reversal threshold)';
coral.pointsInfo += ' Eligible HPCL fuel surcharge waiver requires a ₹400–₹4,000 transaction on an ICICI Merchant Services terminal; this is not fuel reward earning.';
coral.lounge = '1 domestic visit/quarter after ₹75K previous-calendar-quarter spend, primary only; 1 railway visit/quarter';
const sapphiro = CARDS.find(c=>c.id==='icici-sapphiro');
sapphiro.sourceUrl = 'https://www.icici.bank.in/personal-banking/cards/credit-card/sapphiro-card';
sapphiro.feeWaiver = '₹6L eligible anniversary-year spend for next-year annual-fee reversal; EMI excluded';
sapphiro.pointsInfo = '2 points/₹100 domestic, 4/₹100 international, and 1/₹100 utility/insurance eligible spending. Catalogue redemption is not a universal cashback value. Milestones: 4,000 points at ₹4L, then 2,000 for each further ₹1L, up to 20,000 points/anniversary year. Golf: one round/lesson per ₹50K previous-calendar-month eligible retail spend, maximum four/month.';
sapphiro.lounge = '4 domestic visits/quarter after ₹75K previous-calendar-quarter spend, primary only; dual Mastercard/Amex: 2 visits per variant; 2 international visits/year';
sapphiro.cons = ['₹6,500 joining and ₹3,500 renewal fee before GST/eligible reversal','Domestic lounges need ₹75K previous-calendar-quarter spend','BookMyShow needs ₹25K preceding spend-quarter spend; dual cards get one offer/month per variant','3.5% forex markup; DCC is a separate cost'];
const rubyx = CARDS.find(c=>c.id==='icici-rubyx');
rubyx.feeWaiver = '₹3L eligible anniversary-year spend; EMI excluded (MITC reversal threshold)';
rubyx.partnerRates = [{name:'BookMyShow',rate:'25% off up to ₹150, twice/month; ₹25K preceding spend-quarter requirement from April 2026. Dual-network cards: one offer/month per variant.'},{name:'INOX',rate:'25% off up to ₹150, twice/month, subject to the separate booking-offer terms'}];
rubyx.pros = ['Qualified movie-ticket discounts, not buy-one-get-one','8 railway lounge visits/year','Spend-qualified airport lounge and golf benefits'];
rubyx.highlights = ['2 points/₹100 domestic; 4 international; 1 utility/insurance','2 domestic visits/quarter after ₹75K preceding spend-quarter spend, primary only','BookMyShow: 25% off up to ₹150, twice/month; ₹25K spend-quarter gate','₹3,000 joining; ₹2,000 renewal before GST'];
rubyx.lounge = '2 domestic visits/quarter after ₹75K preceding spend-quarter spend, primary only; dual cards: 1 per variant; 8 railway visits/year';
rubyx.pointsInfo += ' Golf: one round/lesson per ₹50K eligible retail spending in the previous calendar month, maximum two/month. Anniversary milestones: 3,000 points at ₹3L, then 1,500 for each further ₹1L, up to 15,000 points/year.';
const emeralde = CARDS.find(c=>c.id==='icici-emeralde');
emeralde.feeWaiver = '₹10L eligible anniversary-year spend for next-year annual-fee reversal; EMI excluded';
emeralde.lounge = 'Unlimited eligible domestic and international airport access for the primary cardholder';
emeralde.network = 'Mastercard/Amex — benefit variant matters; not Emeralde Private Metal';
for (const id of ['icici-coral','icici-sapphiro','icici-rubyx','icici-emeralde','icici-platinum']) {
  const card = CARDS.find(c=>c.id===id);
  const premium = ['icici-sapphiro','icici-rubyx','icici-emeralde'].includes(id);
  card.rewardSourceUrl = iciciMITC;
  card.pointsInfo += ` MITC eligible-spend ceilings per statement cycle: utilities and insurance ₹${premium ? '80,000 each' : '40,000 each'}, grocery/departmental stores ₹${premium ? '40,000' : '20,000'}, and transportation ₹${premium ? '20,000' : '10,000'}. These are spend ceilings, not cashback limits. Reward value depends on the selected redemption; no fixed cash conversion is modelled.`;
}
const hpclCoral = CARDS.find(c=>c.id==='icici-hpcl-coral');
hpclCoral.rewardSourceUrl = 'https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/updated_terms-and-conditions-for-icici-bank-hpcl-coral-credit-card.pdf';
hpclCoral.feeWaiver = '₹50K eligible anniversary-year spend for next-year renewal reversal; EMI excluded';
hpclCoral.caps.capPeriod = 'monthly limit; posting tracked by statement cycle';
hpclCoral.pointsInfo = 'HPCL fuel: 2.5% cashback, maximum ₹100/month, minimum qualifying purchase ₹500, on any bank POS. Separate 1% surcharge waiver requires ₹400–₹4,000 on an ICICI Bank POS; HP Pay wallet loads do not qualify. Primary/add-on spend is combined and posting dates determine the statement receiving cashback. Other retail earns 2 points/₹100; product-specific terms list 1 point/₹100 on utility, grocery, telecom, government/tax and departmental-store spending. These points are catalogue rewards, not fixed cashback. Utility/insurance eligible-spend ceilings are ₹40K each, grocery/departmental ₹20K and transportation ₹10K per statement cycle in the MITC.';
hpclCoral.partnerRates = [{name:'HPCL fuel stations',rate:'2.5% cashback up to ₹100/month on ₹500+ purchases; surcharge waiver has a different ₹400–₹4,000 band and requires ICICI Bank POS'},{name:'BookMyShow',rate:'25% off up to ₹100 on at least two tickets, twice/month; ₹25K preceding spend-quarter requirement'}];
hpclCoral.highlights = ['Separate fuel cashback and surcharge-waiver eligibility','₹199 standard joining and renewal before GST','BookMyShow discount has a ₹25K preceding spend-quarter gate'];
hpclCoral.cons = ['Fuel cashback limited to ₹100/month','Surcharge waiver depends on transaction size and POS','Movie benefits are spend-qualified; no airport lounge entitlement listed'];
const superSaver = CARDS.find(c=>c.id==='icici-hpcl-super-saver');
superSaver.feeWaiver = '₹1.5L eligible anniversary-year spend for next-year renewal reversal; EMI excluded';
superSaver.pointsInfo = 'HPCL fuel: 4% cashback, maximum ₹200/month, plus a separate 1% surcharge waiver for ₹400–₹4,000 eligible purchases. HP Pay adds 1.5% Happy Coins, not bank-account cashback. Eligible utility, grocery and departmental-store purchases earn 20 points/₹100, sharing 400 points/month; other eligible retail earns 2 points/₹100. Catalogue point value is redemption-specific, so 400 points must not be described as ₹400 cashback. Insurance eligible-spend ceiling: ₹40K per statement cycle; transportation ₹10K. Roadside assistance requires paid joining/annual membership and activation; delivered fuel is charged at actual cost.';
superSaver.lounge = '1 domestic visit/quarter after ₹75K previous-calendar-quarter spend, primary only';
superSaver.highlights = ['HPCL: 4% cashback capped ₹200/month; surcharge waiver is separate','HP Pay Happy Coins are a separate reward currency','Essentials share a 400-point monthly limit, not ₹400 cashback','Airport lounge and BookMyShow offers have different spend gates'];
superSaver.partnerRates.push({name:'BookMyShow',rate:'25% off up to ₹100 on at least two tickets, twice/month; ₹25K preceding spend-quarter requirement'});
export const BANKS = [...new Set(CARDS.map(c => c.bank))].sort();
// This marker requires a dated source link; it does not prove every term.
// Review-pending cards remain searchable but do not drive recommendations.
export const isSourceReviewed = card => Boolean(
  card?.verified && card.reviewedAt && /^https:\/\//.test(card.sourceUrl || "")
);

// Normalize legacy flags so downstream UI/API consumers use the same marker.
for (const card of CARDS) card.verified = isSourceReviewed(card);

// Source review and a calculable rupee reward are separate decisions. These
// records need a redemption value, feature selection or cap/tier model before
// their old percentages can be used to rank a user's spending.
const ESTIMATE_PENDING_IDS = new Set([
  "icici-coral", "icici-sapphiro", "icici-emeralde", "icici-rubyx", "yes-uni", "hsbc-live-plus",
  "au-lit", "idfc-select", "axis-airtel", "axis-cashback", "hdfc-swiggy", "hdfc-swiggy-blck",
  "axis-flipkart-supercoin", "sbi-flipkart", "hdfc-swiggy-ornge", "hdfc-tata-neu-plus",
  "hdfc-paytm", "hdfc-ultimo", "hdfc-tata-neu-infinity", "sbi-tata-neu-infinity", "hsbc-travelone", "hsbc-platinum",
  "au-xcite-ace", "csb-edge-plus", "idfc-ashva", "idfc-power-plus", "amex-mrcc",
  "axis-flipkart", "axis-iocl", "icici-hpcl-super-saver", "icici-hpcl-coral",
  "hdfc-freedom", "hdfc-millennia", "amazon-icici", "axis-ace", "scapia", "axis-neo", "axis-magnus", "sbi-bpcl-octane",
  "slice", "roarbank-unity", "rbl-world-safari", "kotak-zen", "au-ixigo", "yes-kiwi", "bob-eterna", "bob-premier", "sbi-titan", "phonepe-sbi-select-black", "icici-platinum", "kotak-811", "icici-mmt", "axis-atlas", "axis-horizon", "axis-myzone",
]);
export const isEstimateReady = card => isSourceReviewed(card) && !ESTIMATE_PENDING_IDS.has(card.id);
// Existing-holder estimates and new-card recommendations have different scope.
export const isRecommendable = card => isEstimateReady(card) && !["phasing-out", "discontinued", "closed"].includes(card.availability);
for (const card of CARDS) card.estimateReady = isEstimateReady(card);

// A disabled model needs a product-specific explanation, not merely a missing
// percentage. These are modelling/research gaps, not a declaration that the
// underlying product has no rewards.
const MODEL_GAPS = {
  "axis-myzone": "Axis specifies 4 EDGE Reward Points/₹200 but its current card page only points to a catalogue and says a redemption fee applies; the linked sources do not establish one universal cash/statement value. Do not convert points into a flat 0.4% estimate.",
  "axis-horizon": "The 5 EDGE Miles/₹100 tier is limited to Travel EDGE and eligible airline MCCs; online travel agencies and travel agents earn 2/₹100. The generic travel input cannot identify these routes, and EDGE Miles' redemption value depends on the selected route. Do not show a flat cash estimate.",
  "axis-atlas": "The 5 EDGE Miles/₹100 accelerated tier is limited to specified airline/hotel MCCs and the Travel EDGE merchant ID, with a shared ₹2 lakh monthly cap. The generic travel input includes OTAs and cannot identify eligible merchant routes or separate base and accelerated spend; transfers/redemptions also have per-transaction fees. Do not use a flat travel estimate.",
  "icici-coral": "Reward value depends on redemption and variant-specific earning/exclusions; no supported cash-value conversion is modelled.",
  "icici-sapphiro": "Network/variant benefits, transaction earn tiers and redemption value need a matched model; a universal percentage is not supported.",
  "icici-emeralde": "Emeralde and Emeralde Private Metal are distinct products. Redemption routes and variant-dependent earning must not be combined.",
  "icici-rubyx": "Domestic/international/utility point tiers and redemption choice cannot be reduced to one cash percentage without a selected variant.",
  "au-lit": "Paid, time-limited feature selections change cashback and points. Feature charges, activation windows and cap buckets are not inputs in this model.",
  "idfc-select": "Spend-threshold acceleration, transaction categories and redemption fees need a tier-aware portfolio model.",
  "axis-airtel": "Thanks-app cashback caps depend on eligible 1% base cashback in the same statement month and merchant MID/VPA eligibility. Zomato/Blinkit/District benefits are separate partner-wallet value back, not card cashback, with app/website, payment-channel and order-minimum conditions. Aggregate category spend cannot safely calculate these combined routes; no model is enabled.",
  "axis-cashback": "The issuer's progressive online tiers apply to eligible card-not-present net spend, exclude travel and listed MCCs, round cashback down by transaction, and share a ₹4,000 accelerated statement-month cap. Broad online-category spend cannot isolate eligible channels/MCCs, individual transactions, reversals or the separate offline/travel and utility buckets, so no numerical estimate is enabled.",
  "axis-flipkart-supercoin": "SuperCoins are a non-cash currency with merchant redemption restrictions. Cash-value conversion and quarterly earning caps need a separate model.",
  "hdfc-tata-neu-plus": "Tata brand, NeuPass and UPI-channel earning differ; UPI and utility/grocery caps require a route-specific model.",
  "hdfc-tata-neu-infinity": "Generic spend categories cannot distinguish Tata partner-brand MIDs, selected NeuPass app routes, ordinary non-Tata purchases or RuPay UPI channels. Separate category caps, the 50,000-point statement-cycle ceiling and ecosystem-restricted redemption cannot be represented faithfully in one flat category estimate.",
  "sbi-tata-neu-infinity": "The 5% rate depends on eligible Tata Neu/partner-brand MIDs and selected app routes, while generic spend categories cannot separate those purchases from ordinary spending. UPI and multiple category caps are also distinct, and NeuCoins are restricted ecosystem value. Do not apply the partner rate to all grocery, shopping or travel spend.",
  "hdfc-swiggy": "The 10% rate applies to eligible Swiggy-app transactions, not all dining; 5% applies only to issuer-listed online merchants/MCCs. Generic dining and online inputs cannot identify those routes, and the card is being migrated to ORNGE/BLCK in stages. Keep this estimate disabled until inputs can distinguish the app/MCC route.",
  "hdfc-swiggy-blck": "The 10% rate applies to eligible Swiggy-app transactions, not all dining; 5% applies only to issuer-listed online merchants/MCCs. Generic dining and online inputs cannot identify those routes, so the calculator could assign elevated cashback to ordinary restaurant and online spend. Keep the broad-category estimate disabled.",
  "hdfc-paytm": "Paytm-channel earning has separate 3%, 2% and 1% capped buckets. The broad-category inputs do not identify the payment route.",
  "hdfc-ultimo": "PhonePe and merchant/channel tiers have separate monthly caps and exclusions not represented by a generic category input.",
  "hsbc-travelone": "Points redemption/partner transfer and accelerated merchant caps are not a fixed cash percentage. A selected redemption route is required.",
  "hsbc-platinum": "The issuer allows several non-cash redemptions at different values and does not provide a single current cash/statement conversion. The separate fuel contactless and surcharge-waiver offers have independent quarterly/monthly gates; a flat rupee model is not supported.",
  "hsbc-live-plus": "The generic spend inputs cannot distinguish HSBC's accelerated-category MCCs from merchants such as Amazon, Flipkart and Myntra, or domestic from international spend (which earns no cashback). A flat category estimate would misstate rewards, so no model is enabled.",
  "au-xcite-ace": "Cashback varies with total retail-spend thresholds and caps; a spend-slab model is required instead of a flat rate.",
  "csb-edge-plus": "Channel-dependent cashback, minimum-spend rules and caps require a product-specific model. Its ₹999 joining fee is separate from the zero annual membership fee.",
  "idfc-ashva": "Spend-based acceleration, reward caps and milestone points are not modelled; an annual milestone is not a renewal-fee waiver.",
  "idfc-power-plus": "Fuel, HP Pay and non-fuel reward buckets have separate caps and eligible-transaction rules; surcharge waiver is not additive cashback on every purchase.",
  "amex-mrcc": "Point value depends on redemption, and monthly bonuses require transaction counts/enrolment not supplied by aggregate spending inputs.",
  "axis-flipkart": "Flipkart, Myntra and Cleartrip have separate ₹4,000 statement-quarter caps. Broad categories cannot identify those merchants or remaining quarterly balances.",
  "sbi-flipkart": "Each accelerated merchant tier has its own ₹4,000 cap. The card-specific booklet's personalized quarterly reset, merchant-ID qualification, ₹100 minimum per transaction and per-transaction rounding cannot be modelled from aggregate category inputs; the exact preferred-merchant list is also not stated in the public product summary. Keep the generic cashback estimate disabled.",
  "axis-iocl": "Fuel and online accelerated spending have separate caps, qualifying transaction bands and redemption rules; no cash-valued merchant model is enabled.",
  "icici-hpcl-super-saver": "HPCL/HP Pay and selected merchant-category buckets have separate limits and point-redemption conditions not represented here.",
  "icici-hpcl-coral": "HPCL transaction bands, cashback/surcharge caps and point redemption need a dedicated fuel model.",
  "hdfc-freedom": "Current points accrual and merchant acceleration cannot use the legacy flat cashback figures. A redemption-route and capped-merchant model is required.",
  "axis-neo": "Merchant offers are conditional discounts, not a generic reward rate; EDGE points need an explicit redemption route and exclusions.",
  "axis-magnus": "Spend tiers and Travel EDGE caps must be distinguished from partner-mile transfers; no universal cashback value is assigned.",
  "sbi-bpcl-octane": "Fuel, dining/grocery and surcharge-waiver buckets have separate eligible bands and caps; adding the headline benefits would overstate rewards.",
  "sbi-elite": "SBI's current portfolio page advertises a ₹5,000 welcome voucher, movie tickets worth ₹6,000/year and up to 50,000 bonus points/year advertised at ₹12,500. Current MITC lists the ₹4,999 + tax standard renewal fee and ₹10L eligible preceding-year waiver. The issuer-hosted ELITE booklet is an older document; it describes 10 points/₹100 on dining, groceries and departmental stores with a shared 10,000-point calendar-month accelerated cap, but does not establish today's complete earning, exclusion, offer, network, lounge or redemption rules. Do not convert all points into cash or use the legacy flat-rate estimate until current card-specific terms are reconciled.",
  "onecard": "OneCard has multiple partner issuers. Federal terms require ₹750 in each of at least three categories for 5X on the top two; this cannot establish the same terms for every issuer variant.",
  "bob-eterna": "BOBCARD’s current product page describes 15 points/₹100 on eligible dining, travel, online and international spend, 3 points/₹100 on other eligible spend, a shared 5,000-point accelerated ceiling per statement cycle and ₹0.25 per point for cashback. Generic category inputs cannot identify excluded MCCs or track the shared cycle cap, so no flat category estimate is enabled. Lounge access also requires ₹75,000 eligible spend in the preceding calendar quarter.",
  "kotak-811": "The legacy Dream label combines an FD-backed Dream Different variant with an unsecured 811 product whose published fee is ₹500. Do not combine their fees or reward tables.",
  "indusind-legend": "Issuer terms distinguish weekday/weekend earn and reduced categories; cash redemption differs from other routes. Personalised joining-fee/LTF eligibility and current redemption limits need reconciliation.",
  "yes-ace": "YES Private and YES ACE are separate issuer products. The legacy name 'YES Private Ace' combines them; its ₹10,000 fee and reward claims cannot identify a real current variant.",
  "icici-platinum": "Platinum variant/offer and current fee table are not matched to a product-specific dated record; legacy generic percentages are withheld.",
  "phonepe-sbi-select-black": "SBI issued a rewards revision effective 1 July 2026. The older launch earning table is insufficient to establish the current PhonePe, online and utility buckets.",
  "sbi-flipkart": "Issuer terms use separate calendar-quarter merchant caps, not the legacy uncapped cashback claim. A current merchant/balance-aware model is required.",
  "sbi-titan": "The available generic SBI fee reference does not establish a current Titan variant's fees, earning or redemption rules.",
  "sbi-iocl": "A product-specific current SBI/IndianOil card was not established for this legacy label. Do not substitute another bank's IndianOil product.",
  "bob-premier": "Current product variant, renewal fee and rewards caps are not established by a dated product-specific record.",
  "hsbc-cashback": "This is a legacy name, not an independently verified current product. Use the Live+ record for that product's published terms.",
  "slice": "Current issuer, credit-card variant and legacy rewards programme have not been matched. Do not treat a historical credit/prepaid product as a current credit-card recommendation.",
  "roarbank-unity": "Current issuer product and variant-specific credit-card terms have not been established for this catalogue label.",
  "rbl-world-safari": "Point value, current earning limits and fee terms require a dated issuer product/terms record; zero forex does not imply universal cashback.",
  "kotak-zen": "Current Zen variant, joining/renewal terms and redemption value have not been reconciled with the historical record.",
  "indusind-pinnacle": "Published earn categories are not a fixed cashback rate. Variant/offer fee and selected redemption value remain unresolved.",
};
for (const card of CARDS) {
  if (!card.estimateReady && !card.estimateUnavailableReason) card.estimateUnavailableReason = MODEL_GAPS[card.id];
}
export const VERIFIED_CARDS = CARDS.filter(isEstimateReady);
export const RECOMMENDABLE_CARDS = CARDS.filter(isRecommendable);

export const CATEGORIES = [
  { id: "dining", label: "Dining", icon: "🍽️", desc: "Restaurants, Swiggy, Zomato", avgSpend: 5000 },
  { id: "travel", label: "Travel", icon: "✈️", desc: "Flights, hotels, MakeMyTrip", avgSpend: 4000 },
  { id: "online", label: "Online Shopping", icon: "🛒", desc: "Amazon, Flipkart, Myntra", avgSpend: 8000 },
  { id: "groceries", label: "Groceries", icon: "🥦", desc: "BigBasket, Blinkit, stores", avgSpend: 6000 },
  { id: "fuel", label: "Fuel", icon: "⛽", desc: "Petrol pumps, EV charging", avgSpend: 5000 },
  { id: "utilities", label: "Utilities", icon: "💡", desc: "Electricity, water, broadband", avgSpend: 4000 },
  { id: "entertainment", label: "Entertainment", icon: "🎬", desc: "Netflix, movies, concerts", avgSpend: 2000 },
  { id: "shopping", label: "Shopping", icon: "🛍️", desc: "Malls, fashion, electronics", avgSpend: 5000 },
];

export const defaultSpending = () => Object.fromEntries(CATEGORIES.map(c => [c.id, c.avgSpend]));

export function getCardById(id) {
  return CARDS.find(c => c.id === id) || null;
}

export function getCardsByBank(bank) {
  return CARDS.filter(c => c.bank === bank);
}

// ─── CAP-AWARE REWARD CALCULATION ───
// Returns an illustrative estimate for a broad category and monthly spend.
// Merchant-specific exclusions, channel rules and transaction rounding are
// not represented by these category buckets.

export function calcReward(card, categoryId, monthlySpend) {
  if (!Number.isFinite(monthlySpend) || monthlySpend < 0) return { cashback: 0, effectiveRate: 0, capped: false, capNote: "Invalid spending amount", unavailable: true };
  if (!isEstimateReady(card)) return { cashback: 0, effectiveRate: 0, capped: false, capNote: "Reward estimate unavailable for this record", unavailable: true };
  const baseRate = card.rewards[categoryId] ?? card.rewards.default ?? 0;
  if (baseRate === 0 || monthlySpend === 0) return { cashback: 0, effectiveRate: 0, capped: false, capNote: null };

  const rawCashback = monthlySpend * baseRate / 100;
  if (card.minimumEligibleTransaction && monthlySpend < card.minimumEligibleTransaction) {
    return {cashback:0,effectiveRate:0,capped:false,capNote:`Eligible individual transactions must be at least ₹${card.minimumEligibleTransaction}; aggregate estimates assume every transaction qualifies.`};
  }

  if (card.categoryRewardCaps?.[categoryId] !== undefined) {
    const limit = card.categoryRewardCaps[categoryId];
    const overall = card.overallCapExcludedCategories?.includes(categoryId) ? Infinity : card.totalRewardValueCap ?? Infinity;
    const value = Math.min(rawCashback, limit, overall);
    const period = card.categoryRewardCapPeriods?.[categoryId] || 'month';
    return { cashback: Math.round(value), effectiveRate: Number((value / monthlySpend * 100).toFixed(2)), capped: value < rawCashback, capNote: `Separate ₹${limit.toLocaleString('en-IN')} equivalent earning cap for this eligible category per ${period}${Number.isFinite(overall) ? `; also subject to the shared ₹${overall.toLocaleString('en-IN')} equivalent statement-cycle ceiling` : ''}. Redemption and channel restrictions apply.` };
  }

  if (!card.caps) {
    const value = Math.min(rawCashback,card.totalRewardValueCap ?? Infinity);
    return { cashback: Math.round(value), effectiveRate: Number((value/monthlySpend*100).toFixed(2)), capped: value < rawCashback, capNote: card.totalRewardValueCap ? `Shared ₹${card.totalRewardValueCap.toLocaleString('en-IN')} equivalent earning ceiling per statement cycle.` : null };
  }

  const caps = card.caps;

  // ShopRite's cap belongs only to accelerated grocery points. Other retail
  // must not inherit it; grocery overflow continues at the base points rate.
  if (card.id === "rbl-shoprite") {
    if (categoryId !== "groceries") return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: null };
    const threshold = caps.monthlyPoints / caps.pointsPer * caps.spendPer;
    const value = Math.min(monthlySpend, threshold) * baseRate / 100
      + Math.max(0, monthlySpend - threshold) / caps.spendPer * caps.groceryPointsAboveCap * caps.pointValue;
    return { cashback: Math.round(value), effectiveRate: Number((value / monthlySpend * 100).toFixed(2)), capped: monthlySpend > threshold, capNote: "1,000 accelerated grocery points per billing cycle, then 1 point/₹100; assumed maximum redemption value ₹0.25/point. Transaction rounding and redemption charges are not included." };
  }


  if (card.id === "sc-smart") {
    const onlineBucket = ['online','utilities'].includes(categoryId);
    const cap = onlineBucket ? caps.cashbackBuckets.online : caps.cashbackBuckets.other;
    const cashback = Math.min(rawCashback, cap);
    return { cashback: Math.round(cashback), effectiveRate: Number((cashback / monthlySpend * 100).toFixed(2)), capped: rawCashback > cap, capNote: `₹${cap}/statement cycle ${onlineBucket ? "eligible online" : "eligible offline"} cap; no further cashback in that bucket. ₹2,500 minimum cashback balance for redemption.` };
  }
  if (card.id === "sbi-simplysave") {
    // Site categories are broader than SBI's exact MCC list. Dining/groceries
    // are the only safe accelerated buckets; entertainment (movies) and
    // shopping (department stores) conservatively use base earn here.
    if (!["dining", "groceries"].includes(categoryId)) {
      return { cashback: Math.round(rawCashback), effectiveRate: Number((rawCashback / monthlySpend * 100).toFixed(2)), capped: false, capNote: "Broad category uses base points; movie and departmental-store MCCs may earn more but are not separable in this estimate." };
    }
    const capValue = caps.monthlyPoints * caps.pointValue;
    const threshold = caps.monthlyPoints / caps.pointsPer * caps.spendPer;
    const value = monthlySpend <= threshold ? rawCashback : capValue + (monthlySpend - threshold) / 150 * 0.25;
    return { cashback: Math.round(value), effectiveRate: Number((value / monthlySpend * 100).toFixed(2)), capped: monthlySpend > threshold, capNote: "5,000 accelerated points/month shared across eligible dining/grocery MCCs, then base earn. Voucher value ₹0.25/point." };
  }

  if (card.id === "sbi-simplyclick" && categoryId === "online") {
    const capValue = caps.rewardPointsPerMonth.otherOnline * 0.25;
    const threshold = capValue / (baseRate / 100);
    const value = monthlySpend <= threshold ? rawCashback : capValue + (monthlySpend - threshold) * 0.0025;
    return { cashback: Math.round(value), effectiveRate: Number((value / monthlySpend * 100).toFixed(2)), capped: monthlySpend > threshold, capNote: "5x online bucket: 10,000 points/calendar month, then 1 point/₹100; voucher value ₹0.25/point." };
  }

  // These issuer buckets were previously ignored, so a single category could
  // exceed its published statement-cycle or calendar-month maximum.
  let categoryCap;
  if (card.id === "sbi-cashback") {
    categoryCap = categoryId === "online"
      ? caps.cashbackPerStatementCycle?.online
      : caps.cashbackPerStatementCycle?.offline;
  } else if (card.id === "hdfc-millennia") {
    categoryCap = ["dining", "online", "entertainment", "shopping"].includes(categoryId)
      ? caps.cashbackPerCalendarMonth?.eligiblePartnerSpends
      : caps.cashbackPerCalendarMonth?.otherEligibleSpends;
  } else if (card.id === "hdfc-swiggy" || card.id === "hdfc-swiggy-blck") {
    const buckets = caps.cashbackPerBillingCycle;
    // Bucket follows the modelled earn tier, not a fixed category list: BLCK
    // travel is 5%, while its shopping/utilities rows currently model 1%.
    categoryCap = baseRate === 10
      ? (buckets?.swiggyApp ?? buckets?.swiggy)
      : baseRate === 5
        ? (buckets?.eligibleOnlineCategories ?? buckets?.eligibleOnline)
        : (buckets?.otherEligibleCategories ?? buckets?.otherEligible);
    const minimum = baseRate === 10 ? caps.minimumTransaction?.swiggyApp10Percent : caps.minimumTransaction?.otherCashbackTiers;
    if (minimum && monthlySpend < minimum) return { cashback: 0, effectiveRate: 0, capped: false, capNote: `Each eligible transaction must be at least ₹${minimum}. This total cannot contain a qualifying transaction.` };
  }
  if (categoryCap !== undefined) {
    const cashback = Math.min(rawCashback, categoryCap);
    return {
      cashback: Math.round(cashback),
      effectiveRate: Number((cashback / monthlySpend * 100).toFixed(2)),
      capped: rawCashback > categoryCap,
      capNote: `₹${categoryCap.toLocaleString()} reward-bucket cap per ${caps.capPeriod || "cycle"}; other eligible categories may share it.`,
    };
  }

  // Monthly cashback cap (Axis ACE, HDFC Millennia, HDFC Swiggy)
  if (caps.monthlyCashback !== undefined) {
    const isCappedCategory = !caps.capAppliesTo || caps.capAppliesTo.includes(categoryId);
    if (!isCappedCategory) {
      return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: null };
    }

    if (isCappedCategory && rawCashback > caps.monthlyCashback) {
      // Spend beyond cap earns fallback rate
      const maxBeneficialSpend = caps.monthlyCashback / (baseRate / 100);
      const overflowSpend = monthlySpend - maxBeneficialSpend;
      const fallback = caps.fallbackRate || 0;
      const totalCashback = caps.monthlyCashback + (overflowSpend * fallback / 100);
      const effectiveRate = parseFloat(((totalCashback / monthlySpend) * 100).toFixed(2));

      return {
        cashback: Math.round(totalCashback),
        effectiveRate,
        capped: true,
        capNote: `${baseRate}% up to ₹${Math.round(maxBeneficialSpend).toLocaleString()} per ${caps.capPeriod || "month"}, then ${fallback}%${fallback === 0 ? " (no cashback)" : ""}. Shared accelerated cap: ₹${caps.monthlyCashback} per ${caps.capPeriod || "month"}.`,
      };
    }

    // Under cap — full rate
    return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: `Shared accelerated cap: ₹${caps.monthlyCashback} per ${caps.capPeriod || "month"}; this category alone is within it.` };
  }

  // Yearly cashback cap (SBI Cashback)
  if (caps.yearlyCashback !== undefined) {
    const isCappedCategory = !caps.capAppliesTo || caps.capAppliesTo.includes(categoryId);

    if (isCappedCategory) {
      const yearlySpend = monthlySpend * 12;
      const rawYearly = yearlySpend * baseRate / 100;

      if (rawYearly > caps.yearlyCashback) {
        const maxBeneficialYearlySpend = caps.yearlyCashback / (baseRate / 100);
        const maxBeneficialMonthly = maxBeneficialYearlySpend / 12;
        const fallback = caps.fallbackRate || 0;

        if (monthlySpend > maxBeneficialMonthly) {
          const overflowSpend = monthlySpend - maxBeneficialMonthly;
          const totalCashback = (maxBeneficialMonthly * baseRate / 100) + (overflowSpend * fallback / 100);
          const effectiveRate = parseFloat(((totalCashback / monthlySpend) * 100).toFixed(2));

          return {
            cashback: Math.round(totalCashback),
            effectiveRate,
            capped: true,
            capNote: `${baseRate}% up to ₹${Math.round(maxBeneficialMonthly).toLocaleString()}/mo (₹${caps.yearlyCashback.toLocaleString()}/yr cap), then ${fallback}%`,
          };
        }
      }

      return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: `Yearly cap: ₹${caps.yearlyCashback.toLocaleString()}/yr (you're under it)` };
    }
  }

  // Monthly points cap (HDFC Regalia — 50K points/cycle)
  if (caps.monthlyPoints !== undefined) {
    const pointsEarned = (monthlySpend / caps.spendPer) * caps.pointsPer;
    if (pointsEarned > caps.monthlyPoints) {
      const maxBeneficialSpend = (caps.monthlyPoints / caps.pointsPer) * caps.spendPer;
      const effectiveRate = parseFloat(((caps.monthlyPoints * caps.pointValue / monthlySpend) * 100).toFixed(2));

      return {
        cashback: Math.round(caps.monthlyPoints * caps.pointValue),
        effectiveRate,
        capped: true,
        capNote: `Capped at ${caps.monthlyPoints.toLocaleString()} points/month (₹${Math.round(caps.monthlyPoints * caps.pointValue).toLocaleString()})`,
      };
    }
  }

  const value = Math.min(rawCashback,card.totalRewardValueCap ?? Infinity);
  return { cashback: Math.round(value), effectiveRate: Number((value/monthlySpend*100).toFixed(2)), capped: value < rawCashback, capNote: card.totalRewardValueCap ? `Overall earning ceiling ₹${card.totalRewardValueCap.toLocaleString('en-IN')} equivalent per statement cycle; redemption ceilings are separate.` : null };
}

// Reconcile buckets shared by more than one broad category. The result is still
// illustrative because "online" or "dining" does not identify the merchant/MCC.
export function capSharedRewardBuckets(card, spending, details) {
  if (!isEstimateReady(card)) return details;
  const adjusted = Object.fromEntries(
    Object.entries(details).map(([id, result]) => [id, { ...result }]),
  );
  const caps = card.caps || {};

  const applyBucket = (ids, limit, fallbackRate = 0) => {
    if (!Number.isFinite(limit)) return;
    const present = ids.filter(id => adjusted[id] && Number(spending[id]) > 0);
    if (!present.length) return;
    const entries = present.map(id => ({
      id,
      spend: Number(spending[id]),
      raw: Number(spending[id]) * (card.rewards[id] ?? card.rewards.default ?? 0) / 100,
    }));
    const rawTotal = entries.reduce((sum, entry) => sum + entry.raw, 0);
    if (rawTotal <= limit) return;
    const spendTotal = entries.reduce((sum, entry) => sum + entry.spend, 0);
    const rate = fallbackRate / 100;
    const cappedTotal = limit + Math.max(0, spendTotal - limit / (rawTotal / spendTotal)) * rate;
    let remaining = Math.round(cappedTotal);
    entries.forEach((entry, index) => {
      const cashback = index === entries.length - 1
        ? remaining
        : Math.round(cappedTotal * entry.raw / rawTotal);
      remaining -= cashback;
      adjusted[entry.id] = {
        ...adjusted[entry.id],
        cashback,
        effectiveRate: Number((cashback / entry.spend * 100).toFixed(2)),
        capped: true,
        capNote: card.id === "sbi-simplysave"
          ? `Shared 5,000 accelerated-point cap (₹${limit.toLocaleString()}) across eligible dining/grocery MCCs per calendar month, then base earn.`
          : `Shared ₹${limit.toLocaleString()} cap across eligible categories per ${caps.capPeriod || "cycle"}.`,
      };
    });
  };

  if (caps.monthlyCashback && caps.capAppliesTo) {
    applyBucket(caps.capAppliesTo, caps.monthlyCashback, caps.fallbackRate || 0);
  }
  if (card.id === "sbi-simplysave") applyBucket(["dining", "groceries"], 1250, 0.25 / 150 * 100);
  if (card.id === "sc-smart") {
    applyBucket(["online","utilities"], 1000);
    applyBucket(["dining", "travel", "groceries", "entertainment", "shopping"], 500);
  }
  if (card.id === "sbi-cashback") {
    applyBucket(["online"], caps.cashbackPerStatementCycle?.online);
    applyBucket(["dining", "travel", "groceries", "entertainment", "shopping"], caps.cashbackPerStatementCycle?.offline);
  }
  if (card.id === "hdfc-millennia") {
    applyBucket(["dining", "online", "entertainment", "shopping"], caps.cashbackPerCalendarMonth?.eligiblePartnerSpends);
    applyBucket(["travel", "groceries", "utilities"], caps.cashbackPerCalendarMonth?.otherEligibleSpends);
  }
  if (card.id === "hdfc-swiggy" || card.id === "hdfc-swiggy-blck") {
    const tierIds = rate => {
      const minimum = rate === 10 ? caps.minimumTransaction?.swiggyApp10Percent : caps.minimumTransaction?.otherCashbackTiers;
      return CATEGORIES.filter(cat => card.rewards[cat.id] === rate && (!minimum || Number(spending[cat.id]) >= minimum)).map(cat => cat.id);
    };
    applyBucket(tierIds(10), caps.cashbackPerBillingCycle?.swiggyApp ?? caps.cashbackPerBillingCycle?.swiggy);
    applyBucket(tierIds(5), caps.cashbackPerBillingCycle?.eligibleOnlineCategories ?? caps.cashbackPerBillingCycle?.eligibleOnline);
    applyBucket(tierIds(1), caps.cashbackPerBillingCycle?.otherEligibleCategories ?? caps.cashbackPerBillingCycle?.otherEligible);
  }

  // Apply overall earning ceilings to already category-capped values. Using
  // raw values here could incorrectly restore utility rewards above its cap.
  const overall = card.totalRewardValueCap;
  const cappedEntries = Object.entries(adjusted).filter(([id])=>!card.overallCapExcludedCategories?.includes(id));
  const subtotal = cappedEntries.reduce((sum,[,r])=>sum+r.cashback,0);
  if (Number.isFinite(overall) && subtotal > overall) {
    const entries = cappedEntries.filter(([,r])=>r.cashback>0);
    let remaining = overall;
    entries.forEach(([id,r],index)=>{
      const value = index === entries.length-1 ? remaining : Math.floor(r.cashback*overall/subtotal);
      remaining -= value;
      adjusted[id] = {...r,cashback:value,effectiveRate:Number((value/Number(spending[id])*100).toFixed(2)),capped:true,capNote:`Shared ₹${overall.toLocaleString('en-IN')} equivalent earning ceiling per statement cycle.`};
    });
  }
  return adjusted;
}

// Calculate total monthly reward across all categories for a card
export function calcTotalMonthlyReward(card, spending) {
  const details = {};

  CATEGORIES.forEach(cat => {
    const result = calcReward(card, cat.id, spending[cat.id] || 0);
    details[cat.id] = result;
  });

  const cappedDetails = capSharedRewardBuckets(card, spending, details);
  const total = Object.values(cappedDetails).reduce((sum, result) => sum + result.cashback, 0);
  const anyCapped = Object.values(cappedDetails).some(result => result.capped);
  return { total, anyCapped, details: cappedDetails };
}

// Keep every reward record compatible with calculators, rankings, and API averages.
// Product-specific conditions still live in partnerRates, pointsInfo, highlights, and cons.
export function validateCardData(cards = CARDS) {
  const rewardCategories = [...CATEGORIES.map(category => category.id), "default"];
  const errors = [];
  const seenIds = new Set();

  cards.forEach((card, index) => {
    const label = card.id || `card at index ${index}`;

    if (!card.id) errors.push(`Card at index ${index} has no id`);
    if (seenIds.has(card.id)) errors.push(`${label}: duplicate id`);
    seenIds.add(card.id);

    if (typeof card.verified !== "boolean") errors.push(`${label}: verified must be a boolean`);
    if (card.reviewedAt && !card.verified) errors.push(`${label}: reviewedAt requires verified: true`);
    if (card.reviewedAt && !/^https:\/\//.test(card.sourceUrl || "")) {
      errors.push(`${label}: newly reviewed cards need an HTTPS sourceUrl`);
    }
    if (!Number.isFinite(card.fee) || card.fee < 0) errors.push(`${label}: fee must be a non-negative number`);

    rewardCategories.forEach(categoryId => {
      const rate = card.rewards?.[categoryId];
      if (!Number.isFinite(rate) || rate < 0) {
        errors.push(`${label}: rewards.${categoryId} must be a non-negative number`);
      }
    });
  });

  if (errors.length) {
    throw new Error(`Invalid card data:\n- ${errors.join("\n- ")}`);
  }

  return {
    cards: cards.length,
    verified: cards.filter(isSourceReviewed).length,
    unverified: cards.filter(card => !isSourceReviewed(card)).length,
  };
}
