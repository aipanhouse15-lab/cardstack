// ─── INDIAN CREDIT CARD CATALOGUE ───
// Only dated issuer-source reviews count as current verification. Older
// `verified` flags are retained for compatibility but are not freshness proof.
// Reward rates show effective cashback %. Partner/SmartBuy rates shown separately.
// To update: edit values below and push to GitHub. Vercel auto-deploys.

export const CARDS = [
  // ═══ LEGACY RECORDS (require a dated issuer-source review to be verified) ═══

  { id: "hdfc-regalia", name: "HDFC Regalia", bank: "HDFC", img: "💳", color: "#1a3c6e", fee: 2500, feeWaiver: "₹3L annual spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/regalia-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    caps: { pointsRedemption: { flightsAndHotelsPerMonth: 50000, groceryEarnPerMonth: 2000 }, note: "Travel value assumes 1 RP = ₹0.50; statement cashback value is ₹0.15/RP." },
    partnerRates: [
      { name: "SmartBuy (eligible flights/hotels and other bookings)", rate: "up to 5x Reward Points; 50,000-point monthly travel-redemption cap" },
    ],
    pointsInfo: "4 Reward Points/₹200 eligible retail spend; 1 RP = ₹0.50 on eligible SmartBuy travel (1% base equivalent) or ₹0.15 statement cashback (0.3% base equivalent). Domestic lounge vouchers require ₹1L quarterly spend; up to 6 international visits/year after 4 card transactions.",
    highlights: ["No longer sourced for new applications", "4 Reward Points per ₹200 eligible retail spend", "Up to 2 domestic lounge vouchers/quarter after ₹1L quarter spend", "Up to 6 international visits/year via Priority Pass after 4 card transactions", "₹3L anniversary-year renewal-fee waiver threshold"],
    pros: ["Travel-point redemption value is higher than statement cashback", "Quarterly lounge vouchers available when spend condition is met", "₹2,500 renewal fee can be waived at ₹3L anniversary-year spend"],
    cons: ["HDFC says new sourcing has been discontinued", "Lounge access is spend-conditional, not 18 guaranteed visits", "3.5% foreign-currency markup", "Fuel earns no Reward Points"],
    
    redemptionNote: "The displayed 1% base-equivalent rate assumes eligible SmartBuy flight/hotel redemption at ₹0.50 per Reward Point. Statement cashback is only ₹0.15 per point (0.3% effective base). SmartBuy multipliers, redemption caps and eligibility apply.",
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

  { id: "hdfc-infinia", name: "HDFC Infinia", bank: "HDFC", img: "💎", color: "#1a1a2e", fee: 12500, feeWaiver: "₹10L annual spend", type: "Super Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/infinia-credit-card",
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 3.33, fuel: 0, utilities: 3.33, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    caps: { pointsRedemption: { allCategoriesPerStatementCycle: 200000, flightsHotelsAndAirmilesPerMonth: 150000, statementCashbackPerMonth: 50000 }, note: "Redemption limits; not an earning cap." },
    partnerRates: [
      { name: "SmartBuy eligible travel and shopping", rate: "up to 10x Reward Points; redemption limits apply" },
    ],
    pointsInfo: "5 Reward Points/₹150 eligible retail spend; 1 RP = ₹1 on eligible flights/hotels (3.33% base equivalent) or ₹0.30 statement cashback (1% base equivalent). Travel/airmiles redemptions capped at 1.5L points/month; statement cashback redemptions capped at 50,000 points/month.",
    highlights: ["Unlimited domestic and international lounge access for primary/add-on", "5 Reward Points per ₹150 eligible retail spend", "Up to 10x Reward Points on eligible SmartBuy spends", "₹12,500 renewal fee waived at ₹10L preceding-12-month spend", "Invitation-only"],
    pros: ["Strong travel redemption value on eligible flights and hotels", "Unlimited eligible lounge access for primary and add-on cardholders", "₹12,500 renewal-fee waiver available at ₹10L spend"],
    cons: ["Invitation-only", "₹12,500 fee if renewal condition is not met", "Statement cashback is worth ₹0.30/RP, not ₹1/RP", "Fuel excluded from Reward Points"],
    
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
    rewards: { dining: 5, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 5, shopping: 5, default: 1 },
    caps: { cashbackPerCalendarMonth: { eligiblePartnerSpends: 1000, otherEligibleSpends: 1000 }, capPeriod: "calendar month", capAppliesTo: ["Amazon", "BookMyShow", "Cult.fit", "Flipkart", "Myntra", "Sony LIV", "Swiggy", "Tata CLiQ", "Uber", "Zomato"] },
    partnerRates: [
      { name: "Swiggy, Zomato", rate: "5% cashback" },
      { name: "Amazon, Flipkart, Myntra", rate: "5% cashback" },
      { name: "Tata CLiQ, Uber, BookMyShow, Sony LIV, Cult.fit", rate: "5% cashback" },
    ],
    pointsInfo: "5% CashPoints on 10 listed online merchants (₹1,000 per calendar-month cap); 1% on other eligible spends (separate ₹1,000 per-month cap); statement redemption 1 CashPoint = ₹1",
    highlights: ["5% on 10 listed online merchants", "Separate ₹1,000 caps per calendar month", "₹1L quarterly milestone: choose ₹1,000 voucher or 1 lounge voucher", "₹1L renewal-fee waiver spend"],
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
        { combo: "Millennia + Axis ACE", fee: "₹1,499/year, both waivable", reason: "The most popular budget combo. Use Millennia for partner platforms, ACE for utility bills (5% via GPay), food delivery overflow (4%), and everything else (1.5% uncapped).", cardId: "axis-ace" },
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

  { id: "hdfc-diners-black", name: "HDFC Diners Black", bank: "HDFC", img: "🖤", color: "#111827", fee: 10000, feeWaiver: "₹5L annual spend", type: "Super Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/diners-club-black-credit-card",
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 3.33, fuel: 0, utilities: 3.33, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    caps: { pointsRedemption: { maximumTravelShareOfBookingPercent: 70 }, note: "HDFC terms limit flight/hotel points redemption to up to 70% of booking value." },
    partnerRates: [
      { name: "SmartBuy eligible flights/hotels", rate: "up to 10x Reward Points; terms and redemption limits apply" },
    ],
    pointsInfo: "5 Reward Points/₹150 eligible retail spend; 1 RP = ₹1 on eligible flights/hotels (3.33% equivalent) or up to ₹0.30 cashback (1% equivalent); travel redemption up to 70% of booking value.",
    highlights: ["Unlimited domestic and international lounge access for primary/add-on", "5 Reward Points per ₹150 eligible retail spend", "Up to 10x on eligible SmartBuy travel", "₹10,000 renewal fee waived at ₹5L annual spend", "HDFC says applications are not currently accepted"],
    pros: ["Strong eligible travel redemption value", "Unlimited eligible lounge access", "Renewal-fee waiver threshold listed at ₹5L"],
    cons: ["Diners Club acceptance limited in India", "₹10K + GST fee", "Fuel excluded", "₹99 per reward redemption request"],
    
    redemptionNote: "The displayed 3.33% base-equivalent rate assumes eligible flight/hotel redemption at ₹1 per Reward Point. Cashback is up to ₹0.30 per point (1% equivalent). Flight/hotel redemption is limited to up to 70% of booking value; SmartBuy multipliers and other terms apply.",
    network: "Diners Club", lounge: "Unlimited",
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
    rewards: { dining: 10, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 5, shopping: 5, default: 1 },
    caps: { cashbackPerBillingCycle: { swiggyApp: 1500, eligibleOnlineCategories: 1500, otherEligibleCategories: 500 }, capPeriod: "billing cycle", minimumTransaction: { swiggyApp10Percent: 249, otherCashbackTiers: 100 }, capAppliesTo: ["Swiggy app", "eligible online categories", "other eligible categories"] },
    partnerRates: [
      { name: "Swiggy", rate: "10% cashback (cap ₹1500/mo)" },
      { name: "Online (apparel, electronics, entertainment)", rate: "5% (cap ₹1500/mo)" },
    ],
    pointsInfo: "10% Swiggy app (₹1,500/billing-cycle cap; ₹249 minimum); 5% on eligible online categories (separate ₹1,500 cap); 1% on other eligible categories (₹500 cap; ₹100 minimum)",
    highlights: ["10% on eligible Swiggy app transactions (₹1,500 cap/cycle; ₹249 minimum)", "5% on eligible online categories (separate ₹1,500 cap/cycle)", "1% other eligible spends (₹500 cap/cycle)", "₹500 fee; renewal waived at ₹2L annual spend"],
    pros: ["10% on eligible Swiggy app transactions", "5% on issuer-listed online categories", "₹500 renewal fee can be waived at ₹2L eligible annual spend"],
    cons: ["Separate billing-cycle cashback caps apply", "₹249 minimum for the 10% Swiggy tier; ₹100 for other tiers", "Exclusions apply; confirm eligibility by merchant category"],
    network: "MC", lounge: "None",

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

  { id: "sbi-simplyclick", name: "SBI SimplyCLICK", bank: "SBI", img: "🛒", color: "#1d4ed8", fee: 499, feeWaiver: "₹1L annual spend", type: "Online", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/simplyclick-sbi-card.html",
    rewards: { dining: 0.25, travel: 0.25, online: 1.25, groceries: 0.25, fuel: 0, utilities: 0.25, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    partnerRates: [
      { name: "Apollo 24/7, BookMyShow, Cleartrip, Dominos, IGP, Myntra, Netmeds, Yatra", rate: "10x reward points" },
      { name: "Other eligible online spends, including Swiggy", rate: "5x reward points" },
    ],
    caps: { rewardPointsPerMonth: { otherOnline: 10000, exclusivePartners: 10000 }, capPeriod: "calendar month", capDescription: "After an accelerated points cap is reached, standard base points may continue; see SBI Card terms." },
    pointsInfo: "1 point/₹100 other eligible spend; 5 points/₹100 eligible online and 10 points/₹100 on listed exclusive partners (each accelerated bucket has a 10,000-point monthly cap). Swiggy earns 5x, not 10x. Point-to-rupee value not confirmed here; these are not guaranteed cashback rates.",
    highlights: ["10x reward points on listed exclusive partners", "5x points on other eligible online spends", "₹499 annual fee; renewal waived at ₹1L spend", "E-voucher milestones at ₹1L and ₹2L annual online spend"],
    pros: ["10x points on listed exclusive partners", "5x points on other eligible online spends", "₹1L renewal-fee waiver threshold"],
    cons: ["Only 0.25% offline", "No lounge access", "Point redemption limited to e-vouchers"],
    network: "Visa/MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "A decent starter card for online shoppers, but outclassed by newer options in 2026.",
    body: `SBI SimplyCLICK was one of the first cards to offer meaningful online rewards in India. 2.5% on 9 partner brands and 1.25% on all online purchases still sounds reasonable. But the landscape has changed — HDFC Millennia gives 5% on partners, Amazon Pay ICICI gives 5% on Amazon, and Axis ACE gives 1.5% uncapped everywhere.

The card's main remaining advantage is its low ₹499 fee (waivable at ₹1L) and SBI's wide acceptance. For SBI customers who want a simple online rewards card without switching banks, it works. For everyone else, there are better options.`,
    idealFor: "Existing SBI customers who want a low-fee online rewards card and regularly shop on partners like Cleartrip, Myntra, or BookMyShow. Good starter card for building credit history with SBI.",
    skipIf: "You want the best online rewards available. At 1.25% online and 0.25% offline, this card is significantly behind HDFC Millennia (5% on partners) and Axis ACE (1.5% uncapped).",
  },
  bestFor: [
    { category: "SBI partner brands", reason: "2.5% on Apollo 24/7, BookMyShow, Cleartrip, Dominos, Myntra, Swiggy, Yatra. If you use 3+ of these regularly, the partner rate adds up." },
    { category: "General online shopping", reason: "1.25% on all online purchases is automatic — no partner restrictions. Better than many entry cards' online rates." },
    { category: "Building SBI credit history", reason: "Easy approval for SBI account holders. Good stepping stone to SBI ELITE or SBI Cashback cards." },
  ],
  avoidFor: [
    { category: "Offline spending", reason: "0.25% offline is nearly worthless. A ₹5,000 grocery run earns ₹12.50. Use virtually any other card for offline purchases.", altCard: "axis-ace" },
    { category: "Amazon shopping", reason: "1.25% on Amazon vs 5% with Amazon Pay ICICI (free card). No contest.", altCard: "amazon-icici" },
    { category: "Food delivery", reason: "2.5% on Swiggy via partner rate, but HDFC Millennia gives 5% and HDFC Swiggy gives 10%.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "SimplyCLICK + Amazon Pay ICICI", fee: "₹499/year", reason: "Amazon card for Amazon (5%), SimplyCLICK for other online partners (2.5%). Both have low/no fees.", cardId: "amazon-icici" },
    { combo: "SimplyCLICK + Axis ACE", fee: "₹998/year", reason: "ACE for offline and utility bills, SimplyCLICK for online partner brands. Covers the online/offline gap.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is SBI SimplyCLICK worth it in 2026?", a: "Only if you're an SBI customer who uses 3+ partner brands regularly. Otherwise, HDFC Millennia or Axis ACE offer better value for similar or lower fees." },
    { q: "How do I redeem SimplyCLICK reward points?", a: "Points can be redeemed as e-vouchers for partner brands. 1 point = ₹0.25. The voucher-only redemption is a limitation — no direct statement credit." },
    { q: "Can I upgrade from SimplyCLICK to SBI Cashback?", a: "Yes, SBI allows upgrades based on your credit history and spending pattern. Contact SBI Cards customer service to request an upgrade." },
  ],
},
  },

  { id: "sbi-cashback", name: "SBI Cashback Card", bank: "SBI", img: "💰", color: "#0369a1", fee: 999, feeWaiver: "₹2L annual spend", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sbicard.com/cashback-revised",
    rewards: { dining: 1, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    caps: { cashbackPerStatementCycle: { online: 2000, offline: 2000, total: 4000 }, capPeriod: "statement cycle", capAppliesTo: ["online", "offline"] },
    // Issuer sets separate ₹2,000 statement-cycle caps on 5% online and 1% offline cashback.
    partnerRates: [],
    pointsInfo: "5% eligible online and 1% eligible offline · Direct cashback · Per statement-cycle caps: ₹2,000 online + ₹2,000 offline (₹4,000 total) · Renewal fee waived at ₹2L annual spend",
    highlights: ["5% online cashback", "Auto-credited to statement", "Fee waiver ₹2L spend", "₹4K cap (Apr 2026: was ₹5K)"],
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

  { id: "sbi-elite", name: "SBI Card ELITE", bank: "SBI", img: "👑", color: "#4338ca", fee: 4999, feeWaiver: "₹10L annual spend", type: "Premium", verified: false, sourceUrl: "https://www.sbicard.com/en/personal/sbi-credit-card.page",
    rewards: { dining: 2.5, travel: 0.5, online: 0.5, groceries: 2.5, fuel: 0, utilities: 0.5, entertainment: 2.5, shopping: 2.5, default: 0.5 },
    partnerRates: [
      { name: "BookMyShow", rate: "Buy 1 Get 1 (2/month)" },
      { name: "Dining/grocery/dept stores", rate: "5x = 2.5%" },
    ],
    pointsInfo: "5x (2.5%) dining/grocery/dept stores, 2x (1%) other · 1pt = ₹0.50 · Fuel 1% surcharge waiver",
    highlights: ["BookMyShow 25% off (up to ₹100, 2x/mo)", "2.5% dining/grocery", "14 lounge visits/yr", "Milestone rewards"],
    pros: ["2.5% on dining/grocery/dept stores", "BookMyShow discount saves up to ₹200/month", "14 lounge visits"],
    cons: ["₹4,999 fee (waiver needs ₹10L)", "Only 1% on other spends", "High fee waiver threshold"],
    
    redemptionNote: "Point value ₹0.50 (higher than most SBI cards). Real value is BookMyShow BOGO (2 tickets/month) — worth ₹300-600/mo for regular moviegoers.",
    network: "Visa/MC/Amex", lounge: "14/year",

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

  { id: "amazon-icici", name: "Amazon Pay ICICI", bank: "ICICI", img: "📦", color: "#d97706", fee: 0, feeWaiver: "Lifetime free", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.icici.bank.in/personal-banking/cards/credit-card/amazon-pay-credit-card",
    rewards: { dining: 1, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Amazon (Prime member)", rate: "5%" },
      { name: "Amazon (non-Prime)", rate: "3%" },
      { name: "Amazon Pay partner merchants / eligible Amazon Pay categories", rate: "2% where eligible; exclusions apply" },
      { name: "Amazon Pay bill payments, recharges, gift cards and digital content", rate: "2% regardless of Prime status" },
    ],
    pointsInfo: "5% Amazon Prime / 3% non-Prime on eligible Amazon purchases; 2% on eligible Amazon Pay categories; 1% on other eligible spends · Credited as Amazon Pay balance",
    highlights: ["5% on Amazon (Prime)", "3% non-Prime", "Lifetime free", "No cashback cap"],
    pros: ["Strong Amazon rewards for eligible purchases", "Lifetime free", "No earnings limit; balance auto-credits to Amazon Pay"],
    cons: ["Rewards credited to Amazon Pay balance, not statement credit", "Most non-Amazon transactions earn 1%", "No reward on fuel, rent, EMI, tax-related payments and precious metals"],
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
    { category: "Amazon shopping (Prime member)", reason: "5% with no monthly cap is the highest uncapped reward rate on any single-merchant card. No other card beats this for Amazon." },
    { category: "Amazon Pay merchants", reason: "2% on Amazon Pay partner merchants — restaurants, fuel, groceries that accept Amazon Pay. Decent secondary rate." },
    { category: "First credit card", reason: "Instant approval for Amazon customers, lifetime free, no complex reward structure. Perfect starter card that builds credit history." },
  ],
  avoidFor: [
    { category: "Flipkart shopping", reason: "1% on Flipkart. Axis Flipkart card gives 5% on Flipkart. If you use both platforms, you need both cards.", altCard: "axis-flipkart" },
    { category: "Offline spending", reason: "1% on everything non-Amazon. Axis ACE's 1.5% uncapped is better for general offline spending.", altCard: "axis-ace" },
    { category: "People who want real cashback", reason: "Rewards are Amazon Pay balance, not statement credit. If you want money in your bank account, SBI Cashback is a better choice.", altCard: "sbi-cashback" },
  ],
  pairWith: [
    { combo: "Amazon ICICI + Axis Flipkart", fee: "₹500/year", reason: "Amazon card for Amazon (5%), Flipkart card for Flipkart/Myntra (5%). You're covered on both major e-commerce platforms.", cardId: "axis-flipkart" },
    { combo: "Amazon ICICI + Axis ACE", fee: "₹499/year", reason: "Amazon card for Amazon (5%), ACE for everything else — utility bills (5%), offline (1.5%), food delivery (4%).", cardId: "axis-ace" },
    { combo: "Amazon ICICI + HDFC Millennia", fee: "₹1,000/year", reason: "Amazon card for Amazon purchases, Millennia for Swiggy/Zomato/Flipkart at 5%. Maximizes both platforms.", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "Do I need Amazon Prime to get 5%?", a: "Yes. The issuer lists 5% for Prime members and 3% for non-Prime members on eligible Amazon India purchases. Some categories, including bill payments, recharges, e-books and gift cards, earn 2% regardless of Prime status." },
    { q: "Can I convert Amazon Pay balance to cash?", a: "Not directly. Amazon Pay balance can be used on Amazon and at Amazon Pay partner merchants (many restaurants, fuel stations, grocery stores). But you can't transfer it to a bank account." },
    { q: "Is there a cashback cap?", a: "No. This is one of the few cards with no monthly or annual cashback cap. Spend ₹1 lakh on Amazon and get ₹5,000 back (with Prime)." },
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

  { id: "axis-flipkart", name: "Axis Flipkart", bank: "Axis", img: "🛍️", color: "#2563eb", fee: 500, feeWaiver: "₹3.5L annual spend", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/flipkart-axisbank-credit-card",
    rewards: { dining: 4, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Flipkart", rate: "5% cashback (₹4,000 quarterly cap)" },
      { name: "Myntra", rate: "7.5% cashback (₹4,000 quarterly cap)" },
      { name: "Cleartrip", rate: "5% cashback (₹4,000 quarterly cap)" },
      { name: "Axis preferred merchants", rate: "4% cashback (merchant list may change)" },
    ],
    pointsInfo: "5% Flipkart/Cleartrip and 7.5% Myntra (₹4K quarterly cap each), 4% preferred merchants, 1% other eligible spends",
    highlights: ["5% Flipkart/Cleartrip; 7.5% Myntra (₹4K quarterly cap each)", "4% on Axis-defined preferred merchants", "Domestic lounge access discontinued June 2025", "1% on other eligible spends"],
    pros: ["Best for Flipkart ecosystem", "7.5% Myntra rate within quarterly cap", "Low ₹500 fee (waivable)"],
    cons: ["₹500 fee", "1% on non-partner spends", "Fuel excluded", "₹4K quarterly cap per partner category", "Lounge access discontinued June 2025"],
    network: "Visa", lounge: "None (discontinued Jun 2025)",

    editorial: {
  verdict: {
    headline: "A focused card for Flipkart and Myntra shoppers, with quarterly cashback caps.",
    body: `Axis Flipkart currently gives 5% on Flipkart and Cleartrip and 7.5% on Myntra, each capped at ₹4,000 per statement quarter. Axis also lists a changing set of preferred merchants at 4%; other eligible purchases earn 1%. Check the issuer's current merchant list and exclusions before applying.

The Axis Flipkart card has a ₹500 annual fee (waivable at ₹3.5L spend). Note: lounge access was discontinued in June 2025, so this is now purely a rewards card. The 1% on non-partner spends is average but acceptable as a secondary card.`,
    idealFor: "Shoppers who regularly use Flipkart, Myntra or Cleartrip and can stay within the quarterly caps.",
    skipIf: "You shop primarily on Amazon (get Amazon Pay ICICI instead). If you use both Flipkart and Amazon equally, you might want both dedicated cards rather than this one alone.",
  },
  bestFor: [
    { category: "Flipkart shopping", reason: "5% cashback, capped at ₹4,000 per statement quarter." },
    { category: "Myntra fashion", reason: "7.5% cashback, capped at ₹4,000 per statement quarter." },
    { category: "Cleartrip travel", reason: "5% on Cleartrip bookings — competitive with dedicated travel cards for domestic bookings." },
    { category: "Preferred merchants", reason: "Axis lists 4% cashback on its preferred merchants; check the issuer's current list as it may change." },
  ],
  avoidFor: [
    { category: "Amazon shopping", reason: "1% on Amazon. The Amazon Pay ICICI card gives 5% (Prime) for free. Get both if you use both platforms.", altCard: "amazon-icici" },
    { category: "Utility bills", reason: "1% on bills. Axis ACE gives 5% via Google Pay.", altCard: "axis-ace" },
    { category: "General offline spending", reason: "1% offline. If you need a good all-rounder for offline, Axis ACE at 1.5% is better.", altCard: "axis-ace" },
  ],
  pairWith: [
    { combo: "Axis Flipkart + Amazon Pay ICICI", fee: "₹500/year", reason: "The e-commerce power combo: 5% on Flipkart + 5% on Amazon. Between these two cards, you've covered India's two biggest shopping platforms with max rewards.", cardId: "amazon-icici" },
    { combo: "Axis Flipkart + Axis ACE", fee: "₹999/year", reason: "Flipkart card for Flipkart/Myntra (5%), ACE for utilities (5%), offline (1.5%), and general spending. Same bank, easy to manage.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is there a cashback cap?", a: "Yes. Flipkart, Myntra and Cleartrip cashback each has a ₹4,000 cap per statement quarter. Axis can change the preferred-merchant list and terms." },
    { q: "What earns 4% cashback?", a: "Axis-defined preferred merchants earn 4%. Check Axis's current cashback terms for the merchant list and eligibility." },
    { q: "Axis Flipkart vs HDFC Millennia?", a: "Compare their current eligible merchant lists, cashback rates and caps: Axis Flipkart has quarterly caps on Flipkart, Myntra and Cleartrip, while Millennia has its own monthly cashback cap and partner terms. Pick based on where you spend." },
  ],
},
  },

  { id: "axis-ace", name: "Axis ACE", bank: "Axis", img: "🎯", color: "#7c3aed", fee: 499, feeWaiver: "₹2L annual spend", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-ace-credit-card",
    rewards: { dining: 4, travel: 1.5, online: 1.5, groceries: 1.5, fuel: 0, utilities: 5, entertainment: 1.5, shopping: 1.5, default: 1.5 },
    caps: { monthlyCashback: 500, capRate: 5, fallbackRate: 0, capAppliesTo: ["utilities", "dining"] },
    // Cap math: ₹500/mo COMBINED cap on accelerated only (5% utilities + 4% food). After cap, accelerated → 0%. Base 1.5% is UNCAPPED.
    partnerRates: [
      { name: "Bill payments via Google Pay", rate: "5%" },
      { name: "Swiggy, Zomato, Ola", rate: "4%" },
    ],
    pointsInfo: "5% eligible utility bills/recharges via Google Pay, 4% Swiggy/Zomato/Ola, 1.5% other eligible spends · ₹500 billing-cycle cap combined on 5%+4% cashback",
    highlights: ["5% on eligible utility bills/recharges via Google Pay", "4% Swiggy, Zomato and Ola", "1.5% on other eligible spends", "₹500 billing-cycle cap on accelerated cashback"],
    pros: ["5% on eligible Google Pay utility bill payments", "4% on listed food/ride merchants", "1.5% on other eligible spends"],
    cons: ["₹500/mo cap on 5%+4% categories", "After cap, accelerated → 0%", "Fuel excluded"],
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
    { combo: "Axis ACE + Amazon Pay ICICI", fee: "₹499/year", reason: "Amazon card for Amazon (5%), ACE for literally everything else. Total cost under ₹500/year. Best value combo in Indian credit cards.", cardId: "amazon-icici" },
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

  { id: "axis-atlas", name: "Axis Atlas", bank: "Axis", img: "🌍", color: "#0f766e", fee: 5000, feeWaiver: "No standard annual-fee waiver listed", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-atlas-credit-card",
    rewards: { dining: 2, travel: 5, online: 2, groceries: 2, fuel: 0, utilities: 2, entertainment: 2, shopping: 2, default: 2 },
    partnerRates: [
      { name: "Travel EDGE, direct airline and hotel bookings", rate: "5 EDGE Miles/₹100 up to the monthly eligible-spend limit" },
      { name: "Other eligible spends", rate: "2 EDGE Miles/₹100" },
      { name: "Partner transfers", rate: "Partner list and conversion rates vary; check Axis Travel EDGE" },
    ],
    pointsInfo: "5 EDGE Miles/₹100 on eligible Travel EDGE/direct airline and hotel spends up to monthly limit; 2 EDGE Miles/₹100 on other eligible spends · Miles are not cash; partner rates vary",
    highlights: ["5 EDGE Miles/₹100 on eligible travel, subject to monthly limit", "2 EDGE Miles/₹100 on other eligible spends", "Partner list and transfer ratios can change", "Tier-based lounge benefits"],
    pros: ["Travel-focused EDGE Miles earning", "Milestone and tier benefits", "Partner transfers (check current conversion terms)"],
    cons: ["₹5,000 annual fee", "Rewards exclude several spend categories", "Partner list and transfer ratios may change"],
    
    redemptionNote: "Axis states an EDGE Mile value for its own redemption routes, but partner-mile value varies by conversion ratio, availability and redemption. Check the current Travel EDGE table before transferring.",
    network: "Visa Infinite", lounge: "Tier-based (4 intl Silver, 8 intl Gold)",

    editorial: {
  verdict: {
    headline: "A travel rewards card with tiered lounge benefits and partner transfers whose terms can change.",
    body: `Axis Atlas earns 5 EDGE Miles per ₹100 on eligible Travel EDGE, direct airline and hotel transactions up to the issuer's monthly eligible-spend limit, and 2 EDGE Miles per ₹100 on other eligible spends. Some categories are excluded. Partner availability and transfer ratios can change, so check Axis Travel EDGE before transferring; EDGE Miles should not be treated as cash.

    The ₹5,000 annual fee and tier/milestone structure mean its value depends on eligible spend and how you redeem. Axis does not list a standard annual-fee waiver on its current product page.`,
    idealFor: "Frequent travelers who value airline miles and premium cabin redemptions. If you fly 4+ times a year, Atlas delivers exceptional value.",
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
    { combo: "Axis Atlas + Axis ACE", fee: "₹5,499/year", reason: "Atlas for travel bookings (5%) and airline miles, ACE for everyday domestic spending (1.5-5%). Same bank, easy to manage.", cardId: "axis-ace" },
    { combo: "Axis Atlas + IDFC FIRST WOW", fee: "₹5,000/year", reason: "Atlas for domestic travel rewards, WOW for international spending (zero forex). Covers both domestic and international travel optimally.", cardId: "idfc-wow" },
  ],
  faq: [
    { q: "How do EDGE Miles transfers work?", a: "Transfer through the Axis Travel EDGE portal. The partner list, conversion ratios and annual transfer limits can change; verify the live table before transferring. EDGE Miles are not cash." },
    { q: "Is Atlas better than HDFC Regalia for travel?", a: "They use different reward systems, fees and booking rules. Compare the current issuer terms against your eligible travel spend and preferred redemption options; EDGE Miles should not be compared directly with cashback percentages." },
    { q: "Does Atlas have zero forex markup?", a: "No. Axis Atlas charges ~3.5% forex markup on international transactions. The 2% base rewards partially offset this, but you're still paying ~1.5% net on international spends." },
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

  { id: "rbl-shoprite", name: "RBL ShopRite", bank: "RBL", img: "🧺", color: "#c026d3", fee: 500, feeWaiver: "₹1.5L eligible annual spend", type: "Grocery", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.rbl.bank.in/personal-banking/cards/credit-cards/shoprite-credit-card",
    rewards: { dining: 0.25, travel: 0.25, online: 0.25, groceries: 5, fuel: 0, utilities: 0, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    caps: { monthlyPoints: 1000, pointValue: 0.25, spendPer: 100, pointsPer: 20, capPeriod: "billing cycle", groceryPointsAboveCap: 1 },
    partnerRates: [
      { name: "Grocery stores", rate: "20 pts/₹100 (5%)" },
      { name: "BookMyShow movies", rate: "10 pts/₹100 (2.5%)" },
      { name: "Online shopping", rate: "5 pts/₹100 (1.25%)" },
    ],
    pointsInfo: "20 reward points/₹100 on eligible grocery MCCs up to 1,000 points per billing cycle, then 1 point/₹100; each point redeems for up to ₹0.25. Other eligible retail earns 1 point/₹100. Fuel earns no reward points; separate surcharge waiver up to ₹100/month on eligible transactions.",
    highlights: ["20 points/₹100 on eligible grocery MCCs, up to 1,000 points/billing cycle", "Points are worth up to ₹0.25 each; rewards are not cash", "₹500 annual fee waived at ₹1.5L eligible membership-year spend", "Separate fuel-surcharge waiver has its own terms"],
    pros: ["Grocery reward applies to eligible online and in-store grocery MCCs", "Up to 5% value back before the monthly points cap", "₹1.5L eligible annual-fee waiver threshold"],
    cons: ["Only first 1,000 monthly grocery points earn at 20 points/₹100; then 1 point/₹100", "Reward value depends on redemption and points are not direct cash", "Fuel, utility, and other listed categories are excluded from reward points"],
    network: "Visa/MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "A grocery-focused points card with a low monthly accelerated-earn cap.",
    body: `RBL ShopRite earns 20 Reward Points per ₹100 on eligible grocery transactions, capped at 1,000 grocery points per billing cycle; grocery spend above that cap earns 1 point per ₹100. RBL says each point can be redeemed for up to ₹0.25, so the headline 5% is a maximum-value equivalent on only the accelerated tier—not direct cashback. Fuel earns no reward points, though a separate surcharge waiver may apply on eligible transactions.

The card's annual fee is ₹500 plus applicable tax; RBL lists a waiver at ₹1.5 lakh eligible membership-year spend. Merchant MCC eligibility and point redemption terms determine realized value.`,
    idealFor: "People with eligible grocery MCC spend within the monthly 1,000-point accelerated cap who are comfortable redeeming RBL reward points.",
    skipIf: "You want direct cashback, spend well above the accelerated grocery cap, or expect fuel/utility purchases to earn reward points.",
  },
  capMath: {
    title: "Understanding the 5,000 points/month cap",
    body: `The 5,000 points/month cap across grocery and fuel (at 20 pts/₹100) means your maximum beneficial spend in these categories is ₹25,000/month. At 5%, that's ₹1,250/month in rewards.

Spend ₹15K on groceries and ₹10K on fuel? You've hit the cap. The movie and online rates have the same shared cap, so the effective beneficial spend is ₹25K total across all accelerated categories.

Everything else (dining, travel, shopping) earns 0.25% — essentially nothing. Don't use this card for non-grocery/fuel purchases.`,
  },
  bestFor: [
    { category: "Grocery stores", reason: "5% at grocery stores is unmatched. No other widely-available card gives more than 2.5% on groceries (SBI ELITE). ShopRite gives double." },
    { category: "Fuel", reason: "5% on fuel is extremely rare — almost every card in India excludes fuel or gives 0%. This is ShopRite's truly unique feature." },
    { category: "Movies via BookMyShow", reason: "2.5% on movie tickets — a nice secondary perk for moviegoers." },
  ],
  avoidFor: [
    { category: "Everything except groceries and fuel", reason: "0.25% on dining, travel, utilities, and general shopping is near-zero. Use any other card.", altCard: "axis-ace" },
    { category: "Online shopping", reason: "1.25% online is below average. HDFC Millennia gives 5%.", altCard: "hdfc-millennia" },
    { category: "Dining", reason: "0% on dining. SBI ELITE gives 2.5%, BOB Eterna gives 3.75%.", altCard: "sbi-elite" },
  ],
  pairWith: [
    { combo: "RBL ShopRite + Axis ACE", fee: "₹999/year", reason: "ShopRite for groceries (5%) and fuel (5%), ACE for everything else (1.5-5%). This combo has no weak categories.", cardId: "axis-ace" },
    { combo: "RBL ShopRite + HDFC Millennia", fee: "₹1,500/year", reason: "ShopRite for groceries and fuel, Millennia for online shopping and food delivery. Two specialized cards covering each other's gaps.", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "Does 5% fuel cashback really work?", a: "Yes, at fuel stations that accept the card. The 5% is credited as reward points (20 pts/₹100 at ₹0.25/point). Subject to the 5,000 pts/month shared cap." },
    { q: "Does it work at BigBasket/Blinkit?", a: "The 5% grocery rate typically applies to physical grocery store transactions (MCC-coded as grocery). Online grocery platforms like BigBasket may code differently — check your statements." },
    { q: "Is the ₹500 fee waivable?", a: "No fee waiver option. The ₹500 is a fixed annual charge. But with ₹15K/month grocery+fuel spend, you earn ₹750/month — the fee is recovered in the first month." },
  ],
},
  },


  // ═══ EXPANDED CATALOGUE (review status is per record) ═══

// ═══ AXIS BANK ═══

  { id: "axis-airtel", name: "Axis Airtel Credit Card", bank: "Axis", img: "📱", color: "#e60012", fee: 500, feeWaiver: "Spend-based", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/airtel-axis-bank-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    caps: { capMethod: "Airtel 25% and utility 10% cashback capped relative to 1% base cashback earned that statement month", capAppliesTo: ["Airtel Thanks bills/utilities", "Zomato", "Blinkit", "District Movies"] },
    partnerRates: [
      { name: "Airtel Thanks app (bills)", rate: "25% cashback" },
      { name: "Zomato/Blinkit/District Movies", rate: "10% value back; issuer merchant definitions and caps apply" },
    ],
    pointsInfo: "25% Airtel mobile/broadband/WiFi/DTH and 10% Airtel Thanks utility bills (caps tied to same-month base cashback); 10% on Zomato, Blinkit and District Movies; 1% base cashback",
    highlights: ["25% eligible Airtel bills via Airtel Thanks; cap tied to base cashback", "10% Airtel Thanks utilities; cap tied to base cashback", "10% on Zomato, Blinkit and District Movies", "1% base cashback; lounge access discontinued April 2026"],
    pros: ["10% on Zomato/Blinkit orders ≥₹499", "25% on Airtel services (recharges, broadband)", "Low annual fee ₹500"],
    cons: ["Airtel cashback caps are linked to 1% base cashback earned during the statement month", "Preferred merchant and app categories follow issuer definitions", "Cashback exclusions apply", "Lounge access discontinued Apr 12, 2026"],
    network: "Visa", lounge: "None" },

  { id: "axis-cashback", name: "Axis Cashback Credit Card", bank: "Axis", img: "💵", color: "#5b21b6", fee: 1000, feeWaiver: "₹4L annual spend", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/cashback-credit-card",
    rewards: { dining: 0.75, travel: 0.75, online: 7, groceries: 0.75, fuel: 0, utilities: 0.5, entertainment: 0.75, shopping: 0.75, default: 0.75 },
    caps: { cashbackPerStatementMonth: { eligibleOnline: 4000 }, capPeriod: "statement month", capAppliesTo: ["eligible online spends"] },
    partnerRates: [
      { name: "Online spends", rate: "Tiered 2% on first ₹5,000 net spend, 5% on ₹5,001–₹40,000 band, then 7%; ₹4,000 statement-month cap" },
      { name: "EazyDiner", rate: "25% discount (up to ₹800)" },
    ],
    pointsInfo: "Online cashback is tiered by monthly net spend (2% first ₹5,000, 5% next ₹35,000, 7% beyond) up to ₹4,000 per statement month; 0.75% offline/travel; utilities 0.5% up to ₹100",
    highlights: ["Tiered online cashback up to 7% with ₹4,000 statement-month cap", "0.75% offline/travel cashback", "0.5% utility cashback up to ₹100", "₹4,000 anniversary-year fee waiver threshold"],
    pros: ["High online cashback rate", "Welcome benefit offsets fee", "Cashback auto-credited"],
    cons: ["No lounge access", "Low offline rate (0.75%)", "Utility rate only 0.5%"],
    network: "Visa", lounge: "None" },

  { id: "axis-horizon", name: "Axis Horizon Credit Card", bank: "Axis", img: "🌅", color: "#0369a1", fee: 3000, feeWaiver: "Not specified", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-horizon-credit-card",
    rewards: { dining: 2, travel: 5, online: 2, groceries: 2, fuel: 0, utilities: 2, entertainment: 2, shopping: 2, default: 2 },
    partnerRates: [
      { name: "Travel EDGE portal", rate: "5 EDGE Miles/₹100 (5%)" },
    ],
    pointsInfo: "5 EDGE Miles/₹100 on Travel EDGE and direct airline websites; 2 EDGE Miles/₹100 on other eligible spends; 1 EDGE Mile = ₹1 on issuer value chart",
    highlights: ["5 EDGE Miles/₹100 on Travel EDGE and direct airline websites", "2 EDGE Miles/₹100 on other eligible spends", "8 domestic Visa or 6 domestic Mastercard visits/quarter plus 2 international/quarter", "5,000 welcome and 1,500 renewal EDGE Miles on paid-card terms"],
    pros: ["Great for frequent flyers", "Excellent lounge access", "Good travel rate"],
    cons: ["₹3,000 annual fee unless eligible Burgundy relationship offer applies", "Eligibility and network determine lounge visit counts", "Check Travel EDGE/direct-airline terms"],
    network: "Visa", lounge: "16/year" },

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

  { id: "axis-myzone", name: "Axis MyZone Credit Card", bank: "Axis", img: "🎭", color: "#db2777", fee: 500, feeWaiver: "Lifetime free for select channels", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-my-zone-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Swiggy", rate: "₹120 off twice/month" },
      { name: "Sony LIV", rate: "1-year free premium" },
      { name: "EazyDiner", rate: "Up to 15% off" },
    ],
    pointsInfo: "4 EDGE Reward Points/₹200 on eligible spends; points are excluded on movies, fuel, insurance, wallet, rent, utilities, jewellery, education, government and EMI transactions. One lounge visit/quarter requires ₹50,000 spend in the previous 3 months. Milestone: 1,000 points after ₹1.5L anniversary-year eligible spend.",
    highlights: ["One domestic lounge visit/calendar quarter after ₹50,000 spend in the previous 3 months", "One 1,000-point milestone at ₹1.5L eligible anniversary-year spend", "Swiggy ₹120 off twice/month and District movie offer", "SonyLIV subscription offer; renewal conditions apply"],
    pros: ["Wide range of partner discounts", "Low/free fee", "Good for lifestyle spenders"],
    cons: ["Benefits are discounts/points, not statement cashback", "Lounge access requires ₹50,000 eligible spend in the prior 3 months", "Partner offers have eligibility, caps and validity terms"],
    network: "Visa/MC", lounge: "1/quarter (conditional)" },

  { id: "axis-neo", name: "Axis Neo Credit Card", bank: "Axis", img: "💫", color: "#4f46e5", fee: 250, feeWaiver: "Lifetime free for select channels", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/axis-bank-neo-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Zomato", rate: "₹120 off (twice/month)" },
      { name: "Paytm utilities", rate: "5% off (cap ₹150)" },
      { name: "Blinkit", rate: "10% off (cap ₹250)" },
    ],
    pointsInfo: "1 EDGE point/₹200 (~0.5%) · Discount-focused card · Partner deals are the main value",
    highlights: ["₹120 off Zomato (2x/month)", "5% off Paytm bills", "10% off Blinkit", "Low ₹250 fee"],
    pros: ["Very low fee", "Good partner discounts for young professionals", "Activation cashback on first bill"],
    cons: ["Low base reward rate (0.5%)", "Discounts have conditions and caps", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "axis-privilege", name: "Axis Privilege Credit Card", bank: "Axis", img: "🎖️", color: "#1e3a5f", fee: 1500, feeWaiver: "₹5L anniversary-year spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.axis.bank.in/cards/credit-card/privilege-credit-card-with-unlimited-benefits",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [],
    pointsInfo: "10 EDGE points/₹200 (~1%) on all spends · 1pt ≈ ₹0.20 · Milestone bonus at ₹2.5L",
    highlights: ["12,500 welcome EDGE points on eligible paid-card activation", "10,000 milestone points at ₹2.5L anniversary-year spend", "2 domestic lounge visits/quarter", "Annual fee waiver at ₹5L anniversary-year spend", "District movie BOGO; terms and caps apply"],
    pros: ["Good welcome and milestone benefits", "Decent lounge access (8/yr)", "Flat 1% on everything"],
    cons: ["₹1,500 fee unless anniversary-year spends reach ₹5L or offer eligibility applies", "1% base earn is average", "Welcome/milestone benefits require spend and fee conditions"],
    network: "Visa", lounge: "2 domestic visits/quarter" },

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
    rewards: { dining: 10, travel: 5, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 5, shopping: 1, default: 1 },
    caps: { cashbackPerBillingCycle: { swiggy: 1500, eligibleOnline: 1500, otherEligible: 1000 }, capPeriod: "billing cycle", capAppliesTo: ["Swiggy app", "eligible online categories", "other eligible categories"] },
    partnerRates: [
      { name: "Swiggy app", rate: "10% cashback; ₹1,500 billing-cycle cap" },
      { name: "Eligible online categories", rate: "5% cashback; separate ₹1,500 billing-cycle cap" },
    ],
    pointsInfo: "10% Swiggy app (₹1,500/cycle); 5% eligible online (₹1,500/cycle); 1% other eligible (₹1,000/cycle). Limited-time Cleartrip/Nykaa discounts are separate from cashback.",
    highlights: ["10% on eligible Swiggy app transactions (₹1,500/cycle cap)", "5% on eligible online categories (separate ₹1,500/cycle cap)", "1% other eligible spends (₹1,000/cycle cap)", "₹1,000 annual fee; waived at ₹2L prior-year spend"],
    pros: ["Highest Swiggy cashback", "Broad 5% coverage on travel/online", "Premium Swiggy membership included"],
    cons: ["Three separate billing-cycle cashback caps", "Joining fee is waived only after ₹75,000 spend within 90 days; terms apply", "Check issuer MCC list for eligible online merchants"],
    network: "Visa", lounge: "None" },

  { id: "hdfc-swiggy-ornge", name: "HDFC Swiggy ORNGE Credit Card", bank: "HDFC", img: "🧡", color: "#f97316", fee: 500, feeWaiver: "₹1.5L annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/swiggy-ornge-hdfc-bank-credit-card",
    rewards: { dining: 5, travel: 1, online: 1, groceries: 5, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [],
    pointsInfo: "5% on eligible Swiggy app spends, 5% on selected online merchants/categories and 1% on other eligible categories; ₹249 minimum applies to 5% tiers; check current issuer cap terms.",
    highlights: ["5% eligible Swiggy app and selected online-category cashback", "1% on other eligible categories", "₹500 annual fee; waived at ₹1.5L annual spend", "12-month Swiggy One membership subject to activation terms"],
    pros: ["5% on eligible Swiggy and selected online spends", "Swiggy One membership offer", "Lower fee than the BLCK variant"],
    cons: ["Lower Swiggy earn than BLCK", "Minimum transaction and category eligibility apply", "1% base cashback on other eligible categories"],
    network: "Visa", lounge: "None",
  },

  { id: "hdfc-tata-neu-plus", name: "HDFC Tata Neu Plus Credit Card", bank: "HDFC", img: "🟣", color: "#5b21b6", fee: 499, feeWaiver: "₹1L annual spend", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/tata-neu-plus-hdfc-bank-credit-card",
    rewards: { dining: 1, travel: 2, online: 2, groceries: 2, fuel: 0, utilities: 2, entertainment: 1, shopping: 2, default: 1 },
    caps: { monthlyCashback: 500, capRate: 7, fallbackRate: 1, capAppliesTo: ["travel", "groceries", "shopping"] },
    partnerRates: [
      { name: "Tata Neu (BigBasket/Croma/Westside)", rate: "Up to 7% NeuCoins" },
      { name: "Air India Express", rate: "Up to 7% NeuCoins" },
      { name: "UPI spends", rate: "1% (cap 500 NeuCoins/mo)" },
    ],
    pointsInfo: "2% NeuCoins on Tata Neu/partner-brand non-EMI spends, additional 5% on eligible NeuPass categories via Tata Neu, 1% on other eligible non-UPI spends; RuPay UPI earns per current SBI variant terms.",
    highlights: ["2% NeuCoins on Tata Neu and partner-brand non-EMI spends", "Additional 5% on selected NeuPass categories", "1% on other eligible non-UPI spend", "₹499 fee; waived at ₹1L annual spend"],
    pros: ["Excellent for Tata shoppers (BigBasket, Croma, Westside)", "NeuCoins worth ₹1 each", "UPI rewards rare"],
    cons: ["Rewards locked to Tata Neu ecosystem", "RuPay network (limited acceptance)", "No international lounge"],
    network: "RuPay", lounge: "Check current HDFC quarter-spend and variant terms" },

  { id: "hdfc-tata-neu-infinity", name: "HDFC Tata Neu Infinity Credit Card", bank: "HDFC", img: "♾️", color: "#4c1d95", fee: 1499, feeWaiver: "₹3L annual spend", type: "Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/tata-neu-infinity-hdfc-bank-credit-card",
    rewards: { dining: 1.5, travel: 5, online: 5, groceries: 5, fuel: 0, utilities: 5, entertainment: 1.5, shopping: 5, default: 1.5 },
    partnerRates: [
      { name: "Tata Neu brands", rate: "Up to 10% NeuCoins" },
      { name: "BigBasket/Croma", rate: "Up to 10% NeuCoins" },
      { name: "Air India/IHCL", rate: "Enhanced NeuCoins" },
    ],
    pointsInfo: "Up to 10% on Tata brands, ~1.5% on other · 1 NeuCoin = ₹1 · Premium variant of Tata Neu",
    highlights: ["5% NeuCoins on Tata brands (10% only via NeuPass + Tata Neu app)", "1.5% on all other spends", "Lounge: milestone-based — ₹50K/qtr spend → 2 vouchers/qtr (max 8/yr)", "NeuCoins expire 12 months after issuance (since Aug 2025)"],
    pros: ["Highest Tata ecosystem rewards", "Better lounge access than Plus", "NeuCoins worth ₹1 each"],
    cons: ["10% requires NeuPass + Tata Neu app payment (not automatic)", "Bill Pay, Tanishq, cult.fit, Air India, Tata Play excluded from 5% NeuPass bonus", "Lounge is milestone-based: need ₹50K/qtr spend (not automatic 8/yr)", "NeuCoins expire after 12 months (since Aug 2025)", "₹1,499 annual fee"],
    network: "RuPay", lounge: "2 domestic/quarter and 1 international/quarter; qualification terms apply" },

  { id: "hdfc-moneyback-plus", name: "HDFC MoneyBack+ Credit Card", bank: "HDFC", img: "💵", color: "#1e40af", fee: 500, feeWaiver: "₹50K annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/moneyback-plus-credit-card",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "10X CashPoints (up to 2.5% value back) at Amazon, Flipkart, Swiggy, Reliance Smart SuperStore and BigBasket; 2 CashPoints/₹200 other spend; quarterly voucher milestones and current May 2026 product changes apply.",
    highlights: ["10X CashPoints on named merchant categories", "2 CashPoints/₹200 on other spend", "₹500 fee; ₹50K quarterly spend milestone voucher", "HDFC published product changes effective 15 May 2026"],
    pros: ["Low fee waiver threshold", "Simple reward structure", "Good for building HDFC credit history"],
    cons: ["Very low reward rate (0.5%)", "No standout features", "No lounge access"],
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
    pros: ["Cashback directly to Paytm wallet", "Low fee with easy waiver"],
    cons: ["Cashback locked to Paytm ecosystem", "Low base rate (0.5%)", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "hdfc-freedom", name: "HDFC Freedom Credit Card", bank: "HDFC", img: "🆓", color: "#1d4ed8", fee: 500, feeWaiver: "₹50K annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hdfc.bank.in/credit-cards/freedom-credit-card/fees-and-charges",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "1 reward point/₹150 (~0.5% effective) · Basic entry card · 250 welcome points",
    highlights: ["Low ₹500 fee", "250 welcome reward points", "Good starter card"],
    pros: ["Low annual fee", "Easy waiver at ₹50K spend", "Builds HDFC credit history"],
    cons: ["Very basic card", "0.5% reward rate", "No lounge or premium perks"],
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

  { id: "sbi-bpcl-octane", name: "SBI BPCL Octane Credit Card", bank: "SBI", img: "⛽", color: "#dc2626", fee: 1499, feeWaiver: "₹2L annual spend", type: "Fuel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/bpcl-sbi-card-octane.html",
    rewards: { dining: 2.5, travel: 0.25, online: 0.25, groceries: 2.5, fuel: 6.25, utilities: 0.25, entertainment: 2.5, shopping: 0.25, default: 0.25 },
    caps: { monthlyPoints: 7500, fuelPointsPerStatementCycle: 2500, pointValue: 0.25, capPeriod: "monthly dining/grocery/movies; fuel per billing cycle", capAppliesTo: ["BPCL fuel points", "dining, grocery, movies and departmental-store points"] },
    partnerRates: [
      { name: "BPCL fuel stations", rate: "25 Reward Points/₹100 (max 2,500 points/billing cycle), plus eligible 1% surcharge waiver" },
    ],
    pointsInfo: "25 Reward Points/₹100 on BPCL fuel (maximum 2,500 points per billing cycle); 10X on dining, movies, grocery and departmental stores (maximum 7,500 points/month); 1 point/₹100 on other eligible retail. 4 points = ₹1 fuel value. 6,000 welcome points; 1% BPCL surcharge waiver; 4 domestic lounge visits/year per issuer material.",
    highlights: ["25 Reward Points/₹100 at BPCL; capped at 2,500 points/billing cycle", "10X dining, movies, grocery and departmental stores; capped at 7,500 points/month", "6,000 welcome points; 4 points = ₹1 fuel value", "4 domestic lounge visits/year; confirm current lounge-program terms"],
    pros: ["Highest fuel reward rate among major bank cards", "Strong dining/grocery rate", "Generous welcome benefit"],
    cons: ["₹1,499 fee", "Fuel accelerated points capped at 2,500 per billing cycle", "Reward points are not equivalent to direct cashback"],
    network: "Visa", lounge: "4/year" },

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

  { id: "sbi-simplysave", name: "SBI SimplySAVE Credit Card", bank: "SBI", img: "💾", color: "#2563eb", fee: 499, feeWaiver: "₹1L annual spend", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/psb-simplysave-sbi-card.html",
    rewards: { dining: 1.67, travel: 0.17, online: 0.17, groceries: 0.17, fuel: 0, utilities: 0.17, entertainment: 0.17, shopping: 0.17, default: 0.17 },
    caps: { monthlyPoints: 5000, pointValue: 0.25, spendPer: 150, pointsPer: 10, capPeriod: "calendar month" },
    partnerRates: [],
    pointsInfo: "10 Reward Points/₹150 on dining, movies, departmental stores and grocery; 1 Reward Point/₹150 on other eligible spends; 1 point = ₹0.25 catalogue value; accelerated earn capped at 5,000 points/month",
    highlights: ["10 Reward Points/₹150 on dining, movies, departmental stores and grocery", "1 Reward Point/₹150 on other eligible spends", "₹499 fee; waiver at ₹1L annual spend", "Confirm current lounge eligibility and network terms"],
    pros: ["Good weekend dining rate", "Low fee", "Some lounge access"],
    cons: ["Accelerated points are capped per month", "Low base rate on other eligible spends", "Points are not fixed-value cashback"],
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
    cons: ["Low 0.375% regular earn rate", "₹99 + GST redemption fee", "No airport lounge access", "International rewards end 26 Oct 2026"],
    network: "Visa", lounge: "4 railway visits/quarter",
    upcoming: { date: "26 October 2026", changes: ["International transactions will stop earning reward points."] } },

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
    network: "Visa + RuPay", lounge: "Unlimited domestic airport privileges (₹20K prior billing-cycle spend)" },

  // ═══ HSBC ═══

  { id: "hsbc-live-plus", name: "HSBC Live+ Credit Card", bank: "HSBC", img: "🎵", color: "#dc2626", fee: 999, feeWaiver: "Annual fee waived on annual spends above ₹2L", type: "Lifestyle", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hsbc.bank.in/credit-cards/products/live-plus/",
    rewards: { dining: 10, travel: 1.5, online: 1.5, groceries: 10, fuel: 0, utilities: 10, entertainment: 1.5, shopping: 10, default: 1.5 },
    caps: { monthlyCashback: 1200, capRate: 10, fallbackRate: 1.5, capAppliesTo: ["dining", "food delivery", "groceries", "shopping", "utilities"] },
    partnerRates: [],
    pointsInfo: "10% cashback on dining, food delivery, groceries, shopping and utilities (₹1,200/month combined cap); 1.5% on most other eligible spends · ₹999 joining/annual fee",
    highlights: ["10% across select lifestyle categories", "1.5% on most other eligible spends", "₹1,200/month accelerated-cashback cap", "2 domestic + 1 international lounge visits/year"],
    pros: ["Exceptional dining/grocery rate (10%)", "Strong 1.5% base on everything else", "Cashback auto-credited"],
    cons: ["Accelerated cashback has a combined monthly cap", "Category and transaction exclusions apply", "HSBC limited branch network in India"],
    network: "Visa Infinite", lounge: "2 domestic + 1 international/year" },

  { id: "hsbc-travelone", name: "HSBC TravelOne Credit Card", bank: "HSBC", img: "✈️", color: "#dc2626", fee: 4999, feeWaiver: "Annual fee waived on annual spends above ₹8L", type: "Travel", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hsbc.bank.in/credit-cards/products/travelone/",
    rewards: { dining: 0.5, travel: 2, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "4 reward points/₹100 on travel, travel aggregators and foreign-currency spends; 2 points/₹100 on other eligible spends · 10,000 bonus points at ₹12L annual spend · Points transfer to travel partners",
    highlights: ["4 points/₹100 on eligible travel and foreign-currency spends", "6 domestic + 4 international lounge visits/year", "₹4,999 joining/annual fee", "Fee waived above ₹8L annual spend"],
    pros: ["Transferable travel points", "Good lounge access", "Generous welcome voucher"],
    cons: ["₹4,999 fee", "Lower earn rate on non-travel spends", "HSBC limited network"],
    network: "Visa", lounge: "6 domestic + 4 international/year" },

  { id: "hsbc-platinum", name: "HSBC Platinum Credit Card", bank: "HSBC", img: "🔷", color: "#dc2626", fee: 0, feeWaiver: "No annual fee", type: "Entry", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.hsbc.bank.in/credit-cards/products/visa-platinum/",
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.25 },
    partnerRates: [],
    pointsInfo: "2 pts/₹100 on select categories (~0.5%), 1 pt other (~0.25%) · 2,500 welcome points",
    pointsInfo: "2 reward points/₹150 on eligible spends; up to 6x points on HSBC's Travel with Points portal. Points can be redeemed with travel partners. No annual fee.",
    highlights: ["No joining or annual fee", "2 points/₹150 on eligible spends", "Up to 6x points on HSBC Travel with Points", "Fuel offers subject to transaction and quarterly-spend terms"],
    pros: ["No annual fee", "Travel-points redemption options"],
    cons: ["No airport lounge access stated by issuer", "Low base points rate", "Fuel benefits have conditions"],
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
    pointsInfo: "AU advertises 2.5% rewards per ₹200 on eligible spends; international transactions do not earn reward points under revised terms. Zero forex markup. Up to 10% ixigo travel offers; terms vary.",
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
    pointsInfo: "1.5% cashback on eligible UPI scan-and-pay transactions via Kiwi · 0.5% on eligible online spends · Lifetime free",
    highlights: ["1.5% on UPI scan & pay", "0.5% on online spends", "Lifetime free", "Cashback transfers to bank account"],
    pros: ["Useful UPI cashback", "No joining or annual fee", "Cashback has direct monetary value"],
    cons: ["Best rate requires paying through Kiwi", "Only 0.5% on online card spends", "Premium Neon benefits require a paid membership"],
    redemptionNote: "Base cashback is 1.5% on eligible UPI scan-and-pay transactions through Kiwi and 0.5% on eligible online spends. Optional Kiwi Neon membership has separate pricing and benefits.",
    network: "RuPay", lounge: "None on free plan" },

  { id: "yes-uni", name: "Uni YES Bank Credit Card", bank: "YES Bank", img: "🦄", color: "#7c3aed", fee: 499, feeWaiver: "Renewal fee waived at ₹50,000 retail spend in the preceding 12 months; lifetime-free RuPay variant is listed separately by YES Bank", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.yes.bank.in/personal-banking/yes-individual/cards/credit-cards/uni-credit-card",
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [],
    pointsInfo: "YES Bank lists unlimited 1% rewards issued as Uni Coins and 0% forex markup. The standard YES Bank Uni card has no joining fee and a ₹499 renewal fee (waived at ₹50,000 eligible retail spend); the Uni RuPay variant is listed as lifetime-free. Rewards exclusions apply, including fuel, wallet loads, rent, government, utilities, EMI and international transactions.",
    highlights: ["1% Uni Coin rewards on eligible spends", "0% forex markup", "Standard variant: ₹499 renewal fee with ₹50K spend waiver", "RuPay variant listed as lifetime-free"],
    pros: ["Published 1% rewards and 0% forex markup", "Lifetime-free RuPay variant available per issuer"],
    cons: ["Rewards have broad exclusions, including international spends", "Standard variant has a renewal fee unless waiver is met", "No lounge access listed"],
    network: "Visa / RuPay variants", lounge: "None" },

  // ═══ OTHERS ═══

  { id: "slice", name: "Slice Credit Card", bank: "Slice", img: "🍕", color: "#6d28d9", fee: 0, feeWaiver: "Lifetime free", type: "Lifestyle", verified: false,
    rewards: { dining: 0.4, travel: 0.4, online: 0.2, groceries: 0.2, fuel: 0, utilities: 0.2, entertainment: 0.4, shopping: 0.4, default: 0.2 },
    partnerRates: [
      { name: "Partner restaurants/stores", rate: "2% Slice points (~0.4%)" },
    ],
    pointsInfo: "2% on partners (~0.4% effective), 1% on other (~0.2%) · 1 Slice point ≈ ₹0.20 · Digital-first card",
    highlights: ["Lifetime free", "Digital-first UX", "Instant issuance"],
    pros: ["Good app experience", "Instant issuance", "No fee"],
    cons: ["Very low effective reward rate", "Limited verified data", "Hybrid pay-later product"],
    network: "Visa", lounge: "None" },

  { id: "roarbank-unity", name: "Roarbank Unity SF Credit Card", bank: "Unity SF", img: "🦁", color: "#f97316", fee: 0, feeWaiver: "Lifetime free", type: "Entry", verified: false,
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [],
    pointsInfo: "~1% cashback on all spends · Digital-first card from Unity Small Finance Bank · Limited data available",
    highlights: ["Lifetime free", "Digital-first", "~1% cashback"],
    pros: ["No fee", "Simple structure"],
    cons: ["Very limited public data", "Small finance bank (less established)", "No lounge access"],
    network: "Visa", lounge: "None" },

  { id: "csb-edge-plus", name: "CSB Edge Plus Credit Card", bank: "CSB", img: "🔶", color: "#0891b2", fee: 999, feeWaiver: "No annual membership fee", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.csb.bank.in/pdf/edge_csb_bank_credit_card_terms_and_conditions_2025.pdf",
    rewards: { dining: 10, travel: 5, online: 10, groceries: 10, fuel: 0, utilities: 1, entertainment: 10, shopping: 10, default: 1 },
    partnerRates: [],
    pointsInfo: "Choose either cashback or CSB Jewels on eligible spends: shopping earns 10% cashback or 50x Jewels; eligible travel-platform spends earn 5% or 25x Jewels; other eligible spends earn 1% or 5x Jewels. Category and merchant caps apply. Current KFS lists ₹999 joining fee and no annual membership fee.",
    highlights: ["Up to 10% cashback on eligible shopping", "5% cashback on eligible travel platforms", "Category and merchant caps apply", "No annual membership fee"],
    pros: ["Selectable cashback or Jewels", "No recurring annual membership fee"],
    cons: ["Category and merchant caps constrain headline rates", "₹999 joining fee", "Limited partner ecosystem"],
    network: "RuPay", lounge: "None listed in current terms" },

  { id: "rbl-world-safari", name: "RBL World Safari Credit Card", bank: "RBL", img: "🌍", color: "#7e22ce", fee: 3000, feeWaiver: "No standard annual-fee waiver listed by RBL", type: "Travel", verified: false,
    rewards: { dining: 0.5, travel: 1.25, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [],
    pointsInfo: "RBL publishes 5 reward points/₹100 on eligible travel and 2 points/₹100 on other eligible domestic spends. Zero foreign-currency markup. Welcome MakeMyTrip voucher ₹3,000 after an eligible purchase within 30 days and payment of the membership fee. RBL currently lists ₹3,000 annual fee; point redemption value and exclusions should be checked in the current terms.",
    highlights: ["0% foreign-currency markup", "5 points/₹100 travel; 2 points/₹100 other eligible domestic spend", "₹3,000 annual fee", "Conditional quarterly lounge access; spend thresholds apply"],
    pros: ["No foreign-currency markup", "Annual spend voucher milestone is available"],
    cons: ["₹3,000 annual fee", "Lounge access is conditional, not 12 guaranteed visits", "Reward-point redemption value varies by use"],
    network: "Mastercard", lounge: "2 domestic/quarter after ₹35K prior-quarter spend; 1 international/quarter, with an additional conditional visit after ₹50K spend" },

  { id: "kotak-zen", name: "Kotak Zen Credit Card", bank: "Kotak", img: "🧘", color: "#e11d48", fee: 1500, feeWaiver: "Annual fee waived at ₹1.5L retail spend/year", type: "Premium", verified: false,
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 0.5 },
    partnerRates: [],
    pointsInfo: "4 pts/₹100 on select categories (~1%), 2 pts other (~0.5%) · 8,000 welcome points",
    highlights: ["1% on broad categories", "6 lounge visits/yr", "8,000 welcome points"],
    pros: ["Decent all-round rate", "Good lounge access", "Generous welcome benefit"],
    cons: ["₹1,999 fee", "1% is average for this price", "Kotak limited branch network vs HDFC/ICICI"],
    network: "Visa/MC", lounge: "6/year" },

  { id: "indusind-pinnacle", name: "IndusInd Pinnacle Credit Card", bank: "IndusInd", img: "🏔️", color: "#7e22ce", fee: 9999, feeWaiver: "Fee terms depend on customer/card variant; confirm with IndusInd", type: "Super Premium", verified: false,
    rewards: { dining: 1, travel: 0.375, online: 0.625, groceries: 0.625, fuel: 0, utilities: 0.25, entertainment: 0.625, shopping: 0.625, default: 0.25 },
    partnerRates: [],
    pointsInfo: "IndusInd publishes 2.5 reward points/₹100 on e-commerce, 1.5/₹100 on e-commerce travel and airline spends, and 1/₹100 on POS/MOTO/IVR/standing-instruction spends. Redemption value varies by option. Lounge access is one international visit per calendar quarter; domestic access is one visit per quarter after ₹1.5L eligible spend in the preceding quarter (verify variant-specific fee terms).",
    highlights: ["2.5 points/₹100 on e-commerce", "1 international lounge visit/quarter", "Domestic lounge: 1/quarter after ₹1.5L prior-quarter spend", "Redemption value and fee terms vary by card variant"],
    pros: ["Published earn rates vary by transaction type", "International lounge access is listed quarterly"],
    cons: ["Domestic lounge access has a high spend threshold", "Card fee may vary by variant and customer offer", "Point value depends on redemption option"],
    network: "Confirm card variant", lounge: "1 international/quarter; 1 domestic/quarter after ₹1.5L prior-quarter spend" },

  { id: "sc-ultimate", name: "Standard Chartered Ultimate Credit Card", bank: "StanC", img: "💎", color: "#0369a1", fee: 5000, feeWaiver: "No standard annual-fee waiver listed", type: "Super Premium", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sc.bank.in/credit-cards/ultimate-card/",
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 2, fuel: 0, utilities: 2, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    partnerRates: [],
    pointsInfo: "5 reward points/₹150 on most eligible spends (issuer values 1 point at ₹1); 3 points/₹150 on utilities, supermarkets, insurance, property management, schools and government payments; fuel earns no points. ₹5,000 joining/renewal fee. Foreign-currency markup is 2%.",
    highlights: ["5 points/₹150 on most eligible spends (₹1/point)", "4 domestic lounge visits per calendar quarter", "International lounge: 1/month after ₹20K spend in previous month", "₹5,000 annual fee; 2% forex markup"],
    pros: ["High value per issuer-defined reward point", "Quarterly domestic lounge access"],
    cons: ["₹5,000 annual fee", "International lounge access has a prior-month spend condition", "Fuel earns no reward points"],
    network: "Mastercard", lounge: "4 domestic/quarter; 1 international/month after ₹20K prior-month spend" },

  { id: "sc-smart", name: "Standard Chartered Smart Credit Card", bank: "StanC", img: "🧠", color: "#0891b2", fee: 499, feeWaiver: "Renewal fee reversed at ₹1.2L spend in the preceding year", type: "Cashback", verified: true, reviewedAt: "September 2026", sourceUrl: "https://www.sc.bank.in/credit-cards/smart-credit-card/",
    rewards: { dining: 2, travel: 2, online: 2, groceries: 2, fuel: 0, utilities: 2, entertainment: 2, shopping: 2, default: 1 },
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
    availabilityStatus: "As of September 2026, American Express says it is temporarily pausing new applications for this card in India while it updates its domestic card-issuing technology. Existing cardholder terms may continue; check with Amex before applying.",
    redemptionNote: "The issuer does not publish one fixed cash value per Membership Rewards point; redemption value varies by reward. Do not interpret the points earn rate as a fixed cashback percentage.",
    network: "Amex", lounge: "None listed by issuer" },
];

export const BANKS = [...new Set(CARDS.map(c => c.bank))].sort();
// This marker requires a dated source link; it does not prove every term.
// Review-pending cards remain searchable but do not drive recommendations.
export const isSourceReviewed = card => Boolean(
  card?.verified && card.reviewedAt && /^https:\/\//.test(card.sourceUrl || "")
);

// Normalize legacy flags so downstream UI/API consumers use the same marker.
for (const card of CARDS) card.verified = isSourceReviewed(card);

export const VERIFIED_CARDS = CARDS.filter(isSourceReviewed);

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
  const baseRate = card.rewards[categoryId] ?? card.rewards.default ?? 0;
  if (baseRate === 0 || monthlySpend === 0) return { cashback: 0, effectiveRate: 0, capped: false, capNote: null };

  const rawCashback = monthlySpend * baseRate / 100;

  if (!card.caps) {
    return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: null };
  }

  const caps = card.caps;

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
    categoryCap = categoryId === "dining"
      ? (buckets?.swiggyApp ?? buckets?.swiggy)
      : ["online", "entertainment", "shopping"].includes(categoryId)
        ? (buckets?.eligibleOnlineCategories ?? buckets?.eligibleOnline)
        : (buckets?.otherEligibleCategories ?? buckets?.otherEligible);
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
        capNote: `${baseRate}% up to ₹${Math.round(maxBeneficialSpend).toLocaleString()}/mo, then ${fallback}%${fallback === 0 ? " (no cashback)" : ""}. Cap: ₹${caps.monthlyCashback}/mo on accelerated categories`,
      };
    }

    // Under cap — full rate
    return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: `Cap: ₹${caps.monthlyCashback}/mo (you're under it)` };
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

  return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: null };
}

// Reconcile buckets shared by more than one broad category. The result is still
// illustrative because "online" or "dining" does not identify the merchant/MCC.
export function capSharedRewardBuckets(card, spending, details) {
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
        capNote: `Shared ₹${limit.toLocaleString()} cap across eligible categories per ${caps.capPeriod || "cycle"}.`,
      };
    });
  };

  if (caps.monthlyCashback && caps.capAppliesTo) {
    applyBucket(caps.capAppliesTo, caps.monthlyCashback, caps.fallbackRate || 0);
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
    applyBucket(["dining"], caps.cashbackPerBillingCycle?.swiggyApp ?? caps.cashbackPerBillingCycle?.swiggy);
    applyBucket(["online", "entertainment", "shopping"], caps.cashbackPerBillingCycle?.eligibleOnlineCategories ?? caps.cashbackPerBillingCycle?.eligibleOnline);
    applyBucket(["travel", "groceries"], caps.cashbackPerBillingCycle?.otherEligibleCategories ?? caps.cashbackPerBillingCycle?.otherEligible);
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
