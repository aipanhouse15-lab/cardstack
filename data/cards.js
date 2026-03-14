// ─── 25 INDIAN CREDIT CARDS ───
// Last verified: March 2026
// Reward rates show effective cashback %. Partner/SmartBuy rates shown separately.
// To update: edit values below and push to GitHub. Vercel auto-deploys.

export const CARDS = [
  // ═══ VERIFIED CARDS (March 2026) ═══

  { id: "hdfc-regalia", name: "HDFC Regalia", bank: "HDFC", img: "💳", color: "#1a3c6e", fee: 2500, feeWaiver: "₹4L annual spend", type: "Premium", verified: true,
    rewards: { dining: 1.33, travel: 1.33, online: 1.33, groceries: 1.33, fuel: 0, utilities: 1.33, entertainment: 1.33, shopping: 1.33, default: 1.33 },
    caps: { monthlyPoints: 50000, pointValue: 0.20, spendPer: 150, pointsPer: 4 },
    // Cap math: 50000 pts × ₹0.20 = ₹10,000 max cashback/month. At 4pts/₹150, need ₹18.75L spend to hit cap. Unlikely for most users.
    partnerRates: [
      { name: "SmartBuy (flights/hotels)", rate: "up to 13.33%" },
      { name: "Myntra, Nykaa, Reliance Digital", rate: "5x points (~3.33%)" },
    ],
    pointsInfo: "4 points/₹150 · 1pt = ₹0.20 cashback or ₹0.50 travel",
    highlights: ["12 domestic + 6 intl lounge/yr", "Up to 10x on SmartBuy", "5x on select partners", "Fee waiver on ₹4L spend"],
    pros: ["Excellent lounge access (18/yr total)", "SmartBuy gives up to 13% on travel", "Partner brands 5x rewards"],
    cons: ["Base rate only 1.33%", "Fuel excluded from rewards", "₹2,500 + GST fee"],
    
    redemptionNote: "Rate shown (1.33%) assumes cashback at ₹0.20/point. Travel redemption via SmartBuy = ₹0.50/point (3.33% base). SmartBuy flights/hotels can reach 13.33%.",
    network: "Visa/MC", lounge: "18/year",
    editorial: {
      verdict: {
        headline: "India's most popular premium card — but only worth it if you travel or use SmartBuy.",
        body: `HDFC Regalia looks average on paper at 1.33% cashback. But that number is misleading. The real value is hidden in SmartBuy, where travel bookings earn up to 13.33%, and partner brands earn 3.33%. If you book even 2-3 flights a year through SmartBuy, the rewards easily outpace cards with higher base rates.

The 18 lounge visits per year (12 domestic + 6 international) are worth ₹15,000-20,000 alone if you travel regularly. The {feeNum} annual fee is waivable at ₹4 lakh spend — roughly ₹33,000/month, which is achievable for most premium card holders. For non-travelers, though, 1.33% flat is mediocre.`,
        idealFor: "Frequent travelers who book through SmartBuy, or anyone spending ₹4L+/year who values lounge access. If you fly 3+ times a year domestically, the lounge visits alone justify the fee.",
        skipIf: "You rarely travel and don't use SmartBuy. At 1.33% base, you'd earn more with an Axis ACE (1.5% uncapped) or HDFC Millennia (5% on partners) for everyday spending.",
      },
      capMath: {
        title: "Understanding Regalia's point value — cashback vs travel",
        body: `This is where most people get confused. Regalia earns 4 points per ₹150 spent. But those points have two very different values:

Cashback redemption: 1 point = ₹0.20 → effective rate 1.33%. This is what most people experience.

Travel via SmartBuy: 1 point = ₹0.50 → effective rate 3.33%. This is the intended use case. Book flights or hotels through HDFC SmartBuy and your effective rate jumps to 3.33% base, with 10x accelerators pushing it to 13.33%.

The monthly cap of 50,000 points (worth ₹10,000 in cashback or ₹25,000 in travel) requires ₹18.75 lakh in monthly spend to hit — virtually impossible for individuals. So the cap is effectively irrelevant.`,
      },
      bestFor: [
        { category: "Flight and hotel bookings via SmartBuy", reason: "Up to 13.33% back on travel bookings is the highest effective rate among non-invite-only cards. Even base travel via SmartBuy gives 3.33%." },
        { category: "Lounge access", reason: "18 visits/year (12 domestic + 6 international) is the best ratio of lounge access to annual fee in the premium segment." },
        { category: "Partner brand shopping", reason: "5x points on Myntra, Nykaa, Reliance Digital gives 3.33% — competitive with dedicated shopping cards." },
        { category: "All-round premium spending", reason: "1.33% on everything with no category restrictions (except fuel) is reliable as a default card for non-partner spends." },
      ],
      avoidFor: [
        { category: "Food delivery", reason: "1.33% on Swiggy/Zomato is poor. HDFC Millennia gives 5% and even Axis ACE gives 4%.", altCard: "hdfc-millennia" },
        { category: "Utility bills", reason: "1.33% vs Axis ACE's 5% on bills via Google Pay. If your monthly bills are ₹5K, that's ₹250 vs ₹67.", altCard: "axis-ace" },
        { category: "Fuel", reason: "0% rewards on fuel. No Regalia points earned at petrol pumps.", altCard: "axis-ace" },
        { category: "Online shopping (non-partner)", reason: "1.33% on Amazon/Flipkart is below average. Amazon Pay ICICI gives 5% on Amazon, HDFC Millennia gives 5% on both.", altCard: "hdfc-millennia" },
      ],
      pairWith: [
        { combo: "Regalia + HDFC Millennia", fee: "₹3,500/year", reason: "Regalia for travel/SmartBuy/lounges, Millennia for Swiggy/Amazon/Flipkart at 5%. Covers both premium travel and everyday online spending.", cardId: "hdfc-millennia" },
        { combo: "Regalia + Axis ACE", fee: "₹2,999/year", reason: "Regalia for travel and partner brands, ACE for utility bills (5%) and all-round spending (1.5% uncapped). The ACE fills Regalia's biggest gaps.", cardId: "axis-ace" },
        { combo: "Regalia + Amazon Pay ICICI", fee: "₹2,500/year", reason: "If you're a heavy Amazon shopper. Amazon card's 5% with no cap beats Regalia's 1.33% on Amazon. Use Regalia for everything else.", cardId: "amazon-icici" },
      ],
      faq: [
        { q: "Is HDFC Regalia worth the {feeNum} annual fee?", a: "Yes, if you travel 2+ times a year. The 18 lounge visits alone are worth ₹15K+. The fee is waivable at {feeWaiver} (₹33K/month). If you don't travel, there are better options." },
        { q: "How do I maximize Regalia rewards?", a: "Always book travel through HDFC SmartBuy for 10x points (up to 13.33%). For non-travel, use partner brands (Myntra, Nykaa) for 5x points. Never redeem points as cashback — travel redemption gives 2.5x more value." },
        { q: "HDFC Regalia vs Infinia — which is better?", a: "Infinia is objectively better (3.33% vs 1.33% base, unlimited lounge) but it's invite-only and costs ₹12,500. If you can get Infinia, get it. If not, Regalia is the best accessible HDFC premium card." },
        { q: "Does Regalia earn points on rent payments?", a: "Yes, but only if processed as a normal transaction. Rent paid via third-party platforms may not earn points depending on the MCC code." },
        { q: "Can I use Regalia lounge access for guests?", a: "Guest access depends on the specific lounge program (Priority Pass, Visa, domestic). Generally, you can bring 1 guest per visit but the guest visit counts toward your annual limit." },
      ],
    },
  },

  { id: "hdfc-infinia", name: "HDFC Infinia", bank: "HDFC", img: "💎", color: "#1a1a2e", fee: 12500, feeWaiver: "None", type: "Super Premium", verified: true,
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 3.33, fuel: 0, utilities: 3.33, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    partnerRates: [
      { name: "SmartBuy (flights/hotels)", rate: "up to 33.33%" },
    ],
    pointsInfo: "5 points/₹150 · 1pt = ₹0.20 cashback or ₹1.00 travel",
    highlights: ["Unlimited lounge worldwide", "24/7 concierge", "10x on SmartBuy", "Golf 100+ courses"],
    pros: ["Best all-round rate (3.33%)", "Unlimited lounge", "SmartBuy up to 33% on travel"],
    cons: ["₹12,500 fee", "Invite-only", "Fuel excluded"],
    
    redemptionNote: "Rate shown (3.33%) assumes travel redemption at ₹1/point. Cashback is only ₹0.20/point (0.66%). Always redeem via SmartBuy for max value.",
    network: "Visa", lounge: "Unlimited",
    editorial: {
      verdict: {
        headline: "The best credit card in India — if you can get it. Invite-only and worth every rupee.",
        body: `HDFC Infinia is the gold standard of Indian credit cards. 3.33% on everything (via travel redemption), unlimited worldwide lounge access, 24/7 concierge, and SmartBuy rates that can hit 33.33%. No other card comes close on all-round value.

The catch? It's invite-only. HDFC offers it to customers with high savings balances (typically ₹10L+) or significant relationship value. The {feeNum} annual fee has no waiver option, but if you spend ₹5L+/year on travel via SmartBuy, the rewards alone pay for the fee multiple times over.`,
        idealFor: "High spenders (₹5L+/month) who travel frequently and can maximize SmartBuy. If you already have an HDFC relationship and get the invite, accept it immediately.",
        skipIf: "You can't get the invite, or your monthly spend is under ₹2L. The {feeNum} fee with no waiver makes this uneconomical for moderate spenders. HDFC Diners Black offers similar rates with a waivable fee.",
      },
      bestFor: [
        { category: "Everything (via travel redemption)", reason: "3.33% on all spends when redeemed via SmartBuy travel. This is the highest flat rate available on any Indian card." },
        { category: "SmartBuy travel bookings", reason: "Up to 33.33% on flights and hotels. Book a ₹30,000 flight and effectively pay ₹20,000. No other card matches this." },
        { category: "International travel", reason: "Unlimited worldwide Priority Pass lounge access, concierge, and strong travel insurance." },
        { category: "High-value purchases", reason: "3.33% on a ₹1L purchase = ₹3,330 back. No monthly cap means big spenders earn proportionally." },
      ],
      avoidFor: [
        { category: "Cashback redemption", reason: "If you redeem as cashback (₹0.20/point), the effective rate drops to 0.66% — terrible for a premium card. Always redeem via travel.", altCard: "sbi-cashback" },
        { category: "Fuel", reason: "0% on fuel, same as every HDFC card.", altCard: "rbl-shoprite" },
        { category: "Small everyday purchases", reason: "If you're spending ₹5K/month total, the {feeNum} fee eats all your rewards. This card needs volume to justify itself.", altCard: "axis-ace" },
      ],
      pairWith: [
        { combo: "Infinia + Axis ACE", fee: "₹12,999/year", reason: "Infinia for high-value spends and travel, ACE for utility bills (5% via GPay) and small everyday purchases (1.5% uncapped).", cardId: "axis-ace" },
        { combo: "Infinia + Amazon Pay ICICI", fee: "₹12,500/year", reason: "Amazon card's 5% with no cap beats Infinia's 3.33% on Amazon specifically. Use Infinia for everything else.", cardId: "amazon-icici" },
      ],
      faq: [
        { q: "How do I get an HDFC Infinia invite?", a: "Maintain a high HDFC savings balance (₹10L+ reported by most cardholders), have a strong HDFC relationship, or hold a Regalia/Diners Black and spend heavily. There's no public application — HDFC reaches out." },
        { q: "Is the {feeNum} fee worth it with no waiver?", a: "If you spend ₹10L+/year and redeem via SmartBuy travel, you'll earn ₹33,000+ in rewards — the fee pays for itself nearly 3x over. If you spend less than ₹5L/year, consider Diners Black instead." },
        { q: "HDFC Infinia vs Diners Black — which is better?", a: "Infinia has a higher point value (₹1 vs ₹0.50 travel) and better concierge. Diners Black has free memberships (Prime, Swiggy One) and a waivable fee. If you can afford the Infinia fee, it wins on pure rewards math." },
        { q: "Does Infinia have a cashback cap?", a: "No explicit monthly cashback cap for most users. There's a theoretical points cap but it requires spending levels that virtually no individual hits." },
      ],
    },
  },

  { id: "hdfc-millennia", name: "HDFC Millennia", bank: "HDFC", img: "✨", color: "#7c3aed", fee: 1000, feeWaiver: "₹1L annual spend", type: "Lifestyle", verified: true,
    rewards: { dining: 5, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 5, shopping: 5, default: 1 },
    caps: { monthlyCashback: 1000, capRate: 5, fallbackRate: 1, capAppliesTo: ["dining", "online", "entertainment", "shopping"] },
    // Cap math: ₹1000/mo at 5% = max beneficial spend ₹20,000/mo across partner categories. After that, drops to 1%.
    partnerRates: [
      { name: "Swiggy, Zomato", rate: "5% cashback" },
      { name: "Amazon, Flipkart, Myntra", rate: "5% cashback" },
      { name: "Tata CLiQ, Uber, BookMyShow, Sony LIV, Cult.fit", rate: "5% cashback" },
    ],
    pointsInfo: "5% on partners (cap ₹1000/mo), 1% on all other",
    highlights: ["5% on 10+ partner brands", "₹1000/mo cashback cap on 5%", "4 domestic lounge/yr", "Fee waiver ₹1L spend"],
    pros: ["5% on Swiggy/Zomato/Amazon/Flipkart", "Low ₹1000 fee (waivable)", "4 lounge visits"],
    cons: ["Only 1% on non-partner spends", "₹1000/mo cap on 5% cashback", "Fuel excluded"],
    network: "Visa/MC", lounge: "4/year",

    editorial: {
      verdict: {
        headline: "The best entry-level card for online spenders — if you understand the {cap} monthly cap.",
        body: `At face value, 5% cashback on Swiggy, Zomato, Amazon, Flipkart, Myntra, BookMyShow, and a dozen other platforms sounds unbeatable. And for most people spending under ₹20,000/month on these platforms, it genuinely is. The problem starts when you cross that ₹20,000 threshold — because every rupee after that earns just 1%. Most review sites mention the 5% but bury the cap, and that's how people end up disappointed.

The card's annual fee of {feeNum} is easily waivable at ₹1 lakh annual spend — roughly ₹8,300/month, which most working professionals hit without trying. If you're spending on Swiggy and Amazon anyway, this card essentially pays for itself within the first two months.`,
        idealFor: "Anyone who spends ₹5,000–20,000/month on food delivery, online shopping, or entertainment platforms. At ₹15,000/month partner spend, you're earning ₹750/month — that's ₹9,000/year from a card with a waivable {feeNum} fee.",
        skipIf: "You're a heavy online spender above ₹20,000/month on partner categories. You'll hit the cap halfway through the month, and the 1% fallback rate is below average. You need a second card for the overflow, or a card with higher caps altogether.",
      },
      capMath: {
        title: "Understanding the {cap} monthly cashback cap",
        body: `This is the single most important detail about this card, and it's the one most sites gloss over.

The 5% cashback on partner brands — Swiggy, Zomato, Amazon, Flipkart, Myntra, BookMyShow, Tata CLiQ, Uber, Sony LIV, Cult.fit — is capped at {cap} total cashback per month across all these brands combined. Not ₹1,000 per brand. Combined.

Here's what that means in practice: {cap} cashback at {capRate} means your maximum beneficial partner spend is {maxSpend}/month. Spend ₹10,000 on Amazon and ₹10,000 on Swiggy? You've hit the cap. Everything after that drops to 1%.

The 1% rate on non-partner spends (groceries, travel, offline shopping) has no cap, but 1% is below average for those categories. You're better off using a different card for non-partner spends entirely.`,
      },
      bestFor: [
        { category: "Swiggy & Zomato orders", reason: "5% is the highest cashback rate on food delivery among entry-level cards. Even the Axis Flipkart card only gives 4% on Swiggy." },
        { category: "Amazon & Flipkart purchases", reason: "5% matches the Amazon Pay ICICI card on Amazon (for Prime members), and beats it on Flipkart. If you shop on both platforms, Millennia is more versatile." },
        { category: "BookMyShow, Sony LIV, Cult.fit", reason: "Entertainment and lifestyle spends that most cards give 1% on. Getting 5% here is genuine found money." },
        { category: "Monthly spends under ₹20,000 on partner platforms", reason: "This is the sweet spot where this card is unbeatable at its fee level." },
      ],
      avoidFor: [
        { category: "Groceries", reason: "Millennia gives 1% on groceries. SBI Card ELITE gives 2.5%. Even ICICI Coral's Culinary Treats gives better dining/grocery value.", altCard: "sbi-elite" },
        { category: "Fuel", reason: "0% rewards. No card gives great fuel rewards, but at least Axis ACE's 1.5% base covers fuel.", altCard: "axis-ace" },
        { category: "Utility bills", reason: "1% on Millennia vs 5% on Axis ACE via Google Pay. If your electricity bill is ₹3,000/month, that's ₹150 vs ₹30.", altCard: "axis-ace" },
        { category: "Spending after ₹20K/month cap", reason: "Once the cap hits, switch to a flat-rate card like Axis ACE (1.5% uncapped) for the rest of the month.", altCard: "axis-ace" },
        { category: "Travel", reason: "1% is poor for travel. HDFC Regalia gives 1.33% base and up to 13% via SmartBuy.", altCard: "hdfc-regalia" },
      ],
      pairWith: [
        { combo: "Millennia + Axis ACE", fee: "₹1,499/year, both waivable", reason: "The most popular budget combo. Use Millennia for partner platforms, ACE for utility bills (5% via GPay), food delivery overflow (4%), and everything else (1.5% uncapped).", cardId: "axis-ace" },
        { combo: "Millennia + Amazon Pay ICICI", fee: "₹1,000/year", reason: "If you're a heavy Amazon shopper, the Amazon card's 5% has no monthly cap — unlike Millennia's. Use Millennia for non-Amazon partners, Amazon card exclusively for Amazon.", cardId: "amazon-icici" },
        { combo: "Millennia + SBI ELITE", fee: "₹5,999/year", reason: "If you eat out often and watch movies. ELITE gives 2.5% on dining/groceries plus BookMyShow Buy 1 Get 1. Use Millennia for online, ELITE for offline dining and groceries.", cardId: "sbi-elite" },
      ],
      faq: [
        { q: "Does HDFC Millennia cashback work on Swiggy orders under ₹150?", a: "Yes, there is no minimum transaction amount for the 5% cashback on Swiggy. However, the {cap} monthly cap across all partner brands still applies." },
        { q: "Is HDFC Millennia cashback real cashback or reward points?", a: "It's CashPoints, which are HDFC's version of cashback. They're automatically credited and can be redeemed against your statement or converted to rewards. The effective value is 1:1 — ₹1 CashPoint = ₹1." },
        { q: "Can I get the HDFC Millennia fee waived?", a: "Yes. Spend ₹1 lakh in a year (roughly ₹8,300/month) and the {feeNum} annual fee is waived for the next year. Most regular users hit this without trying." },
        { q: "Is HDFC Millennia better than Amazon Pay ICICI?", a: "For Amazon-only shopping, the Amazon Pay ICICI card wins because its 5% has no monthly cap. But Millennia covers a broader range of platforms — Swiggy, Zomato, Flipkart, Myntra, BookMyShow — all at 5%. If you shop across multiple platforms, Millennia is more versatile." },
        { q: "What happens after I hit the {cap} monthly cap?", a: "All partner category spending drops from 5% to 1% for the rest of that month. The cap resets on the 1st of the next month. Non-partner spends are always at 1% regardless of the cap." },
      ],
    },
  },

  { id: "hdfc-diners-black", name: "HDFC Diners Black", bank: "HDFC", img: "🖤", color: "#111827", fee: 10000, feeWaiver: "₹5L annual spend", type: "Super Premium", verified: true,
    rewards: { dining: 3.33, travel: 3.33, online: 3.33, groceries: 3.33, fuel: 0, utilities: 3.33, entertainment: 3.33, shopping: 3.33, default: 3.33 },
    caps: { monthlyPoints: 75000, pointValue: 0.50, spendPer: 150, pointsPer: 5 },
    partnerRates: [
      { name: "SmartBuy (flights/hotels/vouchers)", rate: "up to 33.33%" },
    ],
    pointsInfo: "5 points/₹150 · 1pt = ₹0.50 cashback or ₹1.00 travel · 10x SmartBuy · 75K pts cap/cycle",
    highlights: ["Unlimited domestic + intl lounge", "Amazon Prime/Swiggy One/MMT Black", "10x SmartBuy", "Fee waiver ₹5L"],
    pros: ["3.33% on everything", "Unlimited lounge access", "Free memberships (Prime, Swiggy One, MMT)"],
    cons: ["Diners Club acceptance limited in India", "₹10K + GST fee", "Fuel excluded"],
    
    redemptionNote: "Rate shown (3.33%) assumes travel redemption at ₹1/point via SmartBuy. Cashback value is ₹0.50/point (1.66%). SmartBuy bookings can reach 33%.",
    network: "Diners Club", lounge: "Unlimited",

    editorial: {
  verdict: {
    headline: "The best value super-premium card in India — if you can live with Diners Club acceptance.",
    body: `HDFC Diners Black delivers Infinia-level rewards (3.33% via travel) at a waivable {feeNum} fee. Throw in unlimited lounge access, free Amazon Prime, Swiggy One, and MakeMyTrip Black memberships, and you have arguably the best overall value proposition in Indian credit cards.

The one real problem: Diners Club network acceptance. While it works at most large merchants and online, smaller shops, toll plazas, and some POS terminals don't accept it. You'll need a backup Visa/Mastercard for those situations. If you can tolerate carrying two cards, Diners Black is phenomenal.`,
    idealFor: "Anyone spending ₹5L+/year who values lounge access and travel rewards. The free Prime + Swiggy One memberships alone save ₹3,000-4,000/year before you even count reward points.",
    skipIf: "You need a single card that works everywhere. Diners Club acceptance gaps mean you'll be embarrassed at a toll booth or small restaurant at least once a month.",
  },
  capMath: {
    title: "Understanding the 75,000 points/cycle cap",
    body: `Diners Black earns 5 points per ₹150, capped at 75,000 points per statement cycle. At travel redemption value (₹1/point), that's ₹75,000 in rewards per cycle.

To hit the cap, you'd need to spend ₹22.5 lakh in a single statement cycle. For almost everyone, this cap is irrelevant — you'll never hit it. The effective rate remains 3.33% (travel) or 1.66% (cashback) on all spending.

The real math to focus on: SmartBuy bookings earn 10x points. A ₹50,000 flight booked through SmartBuy earns 16,666 points (worth ₹16,666 in travel). That's effectively 33% back. This is where the card's value explodes.`,
  },
  bestFor: [
    { category: "Travel via SmartBuy", reason: "Up to 33.33% on flights and hotels — identical to Infinia. Book ₹2L in annual travel and you've earned ₹66,000+ in points." },
    { category: "Subscriptions (via free memberships)", reason: "Amazon Prime (₹1,499), Swiggy One (₹899), MMT Black — ₹3,000+ in annual subscriptions included free." },
    { category: "All-round premium spending", reason: "3.33% on everything (travel redemption) with no category restrictions except fuel. Flat, simple, powerful." },
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
    { q: "Is Diners Black better than Regalia?", a: "Yes, significantly. 3.33% vs 1.33% base rate, unlimited vs 18 lounge visits, plus free memberships. The only advantage Regalia has is wider Visa/MC acceptance." },
    { q: "Can I get the {feeNum} fee waived?", a: "Yes. Spend ₹5 lakh in a year and the fee is waived. That's roughly ₹42,000/month — achievable for most premium card users if it's their primary card." },
    { q: "Does Diners Black work for international payments?", a: "Diners Club/Discover network works at most international merchants, especially in the US, Japan, and Europe. Coverage is similar to Amex — good but not as universal as Visa/MC." },
  ],
},
  },

  { id: "hdfc-swiggy", name: "HDFC Swiggy Card", bank: "HDFC", img: "🍕", color: "#fc8019", fee: 500, feeWaiver: "₹2L annual spend", type: "Entry", verified: true,
    rewards: { dining: 10, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 5, shopping: 5, default: 1 },
    caps: { monthlyCashback: 1500, capRate: 10, fallbackRate: 1, capAppliesTo: ["dining", "online", "entertainment", "shopping"] },
    partnerRates: [
      { name: "Swiggy", rate: "10% cashback (cap ₹1500/mo)" },
      { name: "Online (apparel, electronics, entertainment)", rate: "5% (cap ₹1500/mo)" },
    ],
    pointsInfo: "10% Swiggy, 5% online, 1% other · ₹1500/mo total cap · Min ₹100 txn",
    highlights: ["10% on Swiggy", "5% on online shopping", "Fee waiver on ₹2L", "₹500 joining voucher"],
    pros: ["Best for Swiggy users (10%)", "5% on online categories", "Low fee (waivable)"],
    cons: ["₹1500/mo total cashback cap", "Fuel/utilities excluded", "Min ₹100 per transaction"],
    network: "MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "The ultimate card for Swiggy addicts — 10% cashback is unmatched, but the cap limits who should get it.",
    body: `10% cashback on Swiggy is the highest food delivery reward rate on any Indian credit card. If you order Swiggy regularly, no other card comes close. The card also gives 5% on online shopping, entertainment, and apparel — making it a strong contender for the online lifestyle segment.

But there's a hard ceiling: {cap}/month total cashback cap across all accelerated categories combined. At 10% on Swiggy, that's maxed out at ₹15,000 in Swiggy orders. If you also shop online (5%), the cap is eaten even faster. The ₹100 minimum transaction requirement also means your ₹80 chai orders earn nothing.`,
    idealFor: "Regular Swiggy users spending ₹5,000-15,000/month on food delivery. At ₹10K/month Swiggy spend, you're earning ₹1,000/month — ₹12,000/year from a card with a {feeNum} fee.",
    skipIf: "You use Zomato more than Swiggy (this card doesn't give 10% on Zomato), or your food delivery spend is under ₹3,000/month. HDFC Millennia's 5% on both Swiggy AND Zomato is more versatile.",
  },
  capMath: {
    title: "Understanding the {cap}/month combined cap",
    body: `The ₹1,500/month cashback cap is shared across ALL accelerated categories — Swiggy (10%), online shopping (5%), entertainment (5%), and apparel (5%). Not ₹1,500 per category. Combined.

At 10% on Swiggy alone, you hit the cap at ₹15,000/month in orders. But if you also shop online, the cap fills faster. Example: ₹10,000 Swiggy (₹1,000 cashback) + ₹10,000 online shopping (₹500 cashback) = ₹1,500 cap reached. Everything after that earns 1%.

Minimum transaction: ₹100. Orders below ₹100 earn zero cashback. This matters for quick snack or chai orders.`,
  },
  bestFor: [
    { category: "Swiggy orders above ₹100", reason: "10% is double what any competitor offers. HDFC Millennia gives 5%, Axis Flipkart gives 4%." },
    { category: "Online shopping", reason: "5% on online purchases is competitive with HDFC Millennia when you haven't hit the shared cap." },
    { category: "Budget-conscious food delivery users", reason: "{feeNum} annual fee waivable at ₹2L spend. If Swiggy is your primary spend, the rewards far exceed the fee." },
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
    { q: "Does HDFC Swiggy card give 10% on Swiggy Instamart?", a: "Swiggy Instamart orders generally qualify as Swiggy transactions, but cashback depends on the MCC code. Most users report getting 10% on Instamart as well." },
    { q: "Is the ₹100 minimum per order or per day?", a: "Per transaction. Each Swiggy order must be ₹100+ to earn the 10% cashback. Multiple small orders below ₹100 won't earn anything regardless of daily total." },
    { q: "HDFC Swiggy vs HDFC Millennia for food delivery?", a: "If you use only Swiggy and spend under ₹15K/month on it, the Swiggy card wins (10% vs 5%). If you use Swiggy AND Zomato, Millennia is more versatile since it covers both at 5%." },
  ],
},
  },

  { id: "sbi-simplyclick", name: "SBI SimplyCLICK", bank: "SBI", img: "🛒", color: "#1d4ed8", fee: 499, feeWaiver: "₹1L annual spend", type: "Online", verified: true,
    rewards: { dining: 0.25, travel: 0.25, online: 1.25, groceries: 0.25, fuel: 0, utilities: 0.25, entertainment: 0.25, shopping: 0.25, default: 0.25 },
    partnerRates: [
      { name: "Apollo 24/7, BookMyShow, Cleartrip, Dominos, Myntra, Swiggy, Yatra", rate: "10x = 2.5%" },
    ],
    pointsInfo: "10x (2.5%) partners, 5x (1.25%) online, 1x (0.25%) other · 1pt = ₹0.25",
    highlights: ["2.5% on 9 partner brands", "1.25% all online", "Fee waiver ₹1L", "E-voucher redemption"],
    pros: ["2.5% on Swiggy/Cleartrip/Myntra/BookMyShow", "1.25% on all online", "Easy fee waiver"],
    cons: ["Only 0.25% offline", "No lounge access", "Point redemption limited to e-vouchers"],
    network: "Visa/MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "A decent starter card for online shoppers, but outclassed by newer options in 2026.",
    body: `SBI SimplyCLICK was one of the first cards to offer meaningful online rewards in India. 2.5% on 9 partner brands and 1.25% on all online purchases still sounds reasonable. But the landscape has changed — HDFC Millennia gives 5% on partners, Amazon Pay ICICI gives 5% on Amazon, and Axis ACE gives 1.5% uncapped everywhere.

The card's main remaining advantage is its low {feeNum} fee (waivable at ₹1L) and SBI's wide acceptance. For SBI customers who want a simple online rewards card without switching banks, it works. For everyone else, there are better options.`,
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

  { id: "sbi-cashback", name: "SBI Cashback Card", bank: "SBI", img: "💰", color: "#0369a1", fee: 999, feeWaiver: "₹2L annual spend", type: "Cashback", verified: true,
    rewards: { dining: 1, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 0, entertainment: 1, shopping: 1, default: 1 },
    caps: { monthlyCashback: 5000, capRate: 5, fallbackRate: 0, capAppliesTo: ["online"] },
    // Cap math: ₹5000/statement cycle at 5% = max beneficial online spend ₹1,00,000/cycle. After cap, no more cashback earned.
    partnerRates: [],
    pointsInfo: "5% online, 1% offline · Direct cashback (no points) · ₹5K cap/cycle · Fuel surcharge waiver ₹500-₹3K",
    highlights: ["5% online cashback", "Auto-credited to statement", "Fee waiver ₹2L spend", "No point conversion needed"],
    pros: ["Simple 5% on all online spends", "Cashback auto-credited (no redemption hassle)", "Fee waiver on ₹2L spend"],
    cons: ["₹5K cashback cap per cycle", "Fuel/utilities excluded from cashback", "Only 1% offline"],
    upcoming: {
      date: "April 2026",
      changes: [
        "Total cashback cap reduced: ₹5,000 → ₹4,000 per statement cycle",
        "Online cashback capped at ₹2,000 per cycle (currently no sub-cap)",
        "Offline cashback capped at ₹2,000 per cycle (currently no sub-cap)",
      ],
      impact: "At 5% online, max beneficial online spend drops from ₹1L to ₹40K per cycle. Heavy online spenders should consider pairing with another card after April.",
    },
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "The simplest 5% online cashback card in India — real cashback, auto-credited, no points hassle. But changes are coming.",
    body: `SBI Cashback Card does one thing and does it well: 5% real cashback on all online purchases, automatically credited to your statement. No points to track, no vouchers to redeem, no partner restrictions. If it's online, you get 5%. That simplicity is its biggest strength.

But there's a {cap} per statement cycle cap, and importantly, changes coming in April 2026 will reduce this to ₹4,000 with sub-caps of ₹2,000 each for online and offline. Heavy online spenders should plan for this. The card remains excellent for online spends under ₹40K/cycle post-April (previously ₹1L/cycle).`,
    idealFor: "Online shoppers spending ₹20,000-80,000/month who hate dealing with reward points. The auto-credited cashback is genuinely hassle-free — no redemption required.",
    skipIf: "You want rewards on offline spending (1% is below average) or you spend over ₹1L/month online (you'll hit the cap and the effective rate drops). Also reconsider if you mainly shop on Amazon — the Amazon Pay ICICI card gives 5% with no cap.",
  },
  capMath: {
    title: "Understanding the cashback cap — and what changes in April 2026",
    body: `Currently: ₹5,000 cashback cap per statement cycle on online purchases at 5%. That means your maximum beneficial online spend is ₹1,00,000/cycle.

After April 2026: Total cap drops to ₹4,000, split into ₹2,000 online + ₹2,000 offline sub-caps. Your maximum beneficial online spend drops to ₹40,000/cycle at 5%. This is a 60% reduction in the useful spending range.

If you currently spend ₹60K-₹1L online per cycle, you'll need a second card to cover the overflow after April. HDFC Millennia or Amazon Pay ICICI can absorb the excess at 5%.`,
  },
  bestFor: [
    { category: "All online purchases (pre-April 2026)", reason: "5% on everything online with no partner restrictions. Amazon, Flipkart, Myntra, Swiggy, bill payments — all at 5%." },
    { category: "People who hate points systems", reason: "Real cashback, auto-credited. No points to track, no vouchers to redeem, no expiry to worry about. The simplest rewards system available." },
    { category: "Online bill payments", reason: "5% on online utility payments is rare. Most cards give 1% or exclude utilities entirely." },
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
    { q: "Does SBI Cashback give 5% on Swiggy/Zomato?", a: "Yes, if you order through the app (online transaction). In-app purchases from food delivery platforms count as online spends and earn 5%." },
    { q: "Is the cashback real money or points?", a: "Real cashback, directly credited to your statement. No conversion, no redemption, no minimum threshold. This is the card's biggest advantage over points-based competitors." },
    { q: "SBI Cashback vs HDFC Millennia?", a: "SBI Cashback is simpler — 5% on ALL online, auto-credited. Millennia is 5% only on partner brands but has lounge access. If you shop on non-partner sites, SBI wins. If you want lounges and mostly use Swiggy/Amazon, Millennia wins." },
  ],
},
  },

  { id: "sbi-elite", name: "SBI Card ELITE", bank: "SBI", img: "👑", color: "#4338ca", fee: 4999, feeWaiver: "₹10L annual spend", type: "Premium", verified: true,
    rewards: { dining: 2.5, travel: 1, online: 1, groceries: 2.5, fuel: 0, utilities: 1, entertainment: 2.5, shopping: 2.5, default: 1 },
    partnerRates: [
      { name: "BookMyShow", rate: "Buy 1 Get 1 (2/month)" },
      { name: "Dining/grocery/dept stores", rate: "5x = 2.5%" },
    ],
    pointsInfo: "5x (2.5%) dining/grocery/dept stores, 2x (1%) other · 1pt = ₹0.50 · Fuel 1% surcharge waiver",
    highlights: ["Movie BOGO BookMyShow", "2.5% dining/grocery", "14 lounge visits/yr", "Milestone rewards"],
    pros: ["2.5% on dining/grocery/dept stores", "Movie BOGO excellent value", "14 lounge visits"],
    cons: ["₹4,999 fee (waiver needs ₹10L)", "Only 1% on other spends", "High fee waiver threshold"],
    
    redemptionNote: "Point value ₹0.50 (higher than most SBI cards). Real value is BookMyShow BOGO (2 tickets/month) — worth ₹300-600/mo for regular moviegoers.",
    network: "Visa/MC/Amex", lounge: "14/year",

    editorial: {
  verdict: {
    headline: "The best card for foodies and moviegoers — 2.5% on dining plus BookMyShow Buy 1 Get 1.",
    body: `SBI ELITE occupies a unique niche: it's the best card for people who eat out frequently and watch movies regularly. 2.5% on dining and groceries is strong, and the BookMyShow Buy 1 Get 1 offer (twice a month) can save ₹300-600/month for regular moviegoers. That's ₹3,600-7,200/year in movie savings alone.

The downsides are real: {feeNum} annual fee with a ₹10L spend waiver threshold is steep. 1% on non-dining categories is below average. But if dining and entertainment are your primary discretionary spends, no other card delivers this combination of rewards and perks at this price point.`,
    idealFor: "People who eat out 3+ times/week and watch 2+ movies/month. The dining rewards + BOGO movies make this card pay for itself quickly. Also strong for grocery shoppers at 2.5%.",
    skipIf: "You rarely eat out or watch movies. At 1% on non-dining spends and {feeNum} fee, this card is poor value for online shoppers or general spenders. HDFC Millennia or Axis ACE are better all-rounders.",
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
    { category: "Travel bookings", reason: "1% on travel. HDFC Regalia gives 1.33% base and up to 13% via SmartBuy. Axis Atlas gives 5% on travel.", altCard: "hdfc-regalia" },
  ],
  pairWith: [
    { combo: "SBI ELITE + HDFC Millennia", fee: "₹5,999/year", reason: "ELITE for dining/groceries/movies, Millennia for online shopping at 5%. This combo covers eating in, eating out, and shopping online.", cardId: "hdfc-millennia" },
    { combo: "SBI ELITE + Axis ACE", fee: "₹5,498/year", reason: "ELITE for dining/grocery/movies, ACE for utility bills (5%) and everything else (1.5% uncapped).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is the BookMyShow BOGO offer really worth it?", a: "If you watch 2 movies/month as a couple, you save ₹300-600/month (₹150-300 per ticket saved). That's ₹3,600-7,200/year — more than the annual fee." },
    { q: "Can I get the {feeNum} fee waived?", a: "Yes, but you need ₹10 lakh annual spend — roughly ₹83,000/month. This is a high threshold. Most people pay the fee and justify it through dining rewards + BOGO." },
    { q: "Does 2.5% apply to Swiggy/Zomato?", a: "Swiggy/Zomato may code as dining or online depending on the platform. The 2.5% dining rate typically applies, but check your statements to confirm." },
    { q: "SBI ELITE vs HDFC Millennia?", a: "Different strengths. ELITE wins on dining (2.5% vs 1%), groceries (2.5% vs 1%), and movies (BOGO). Millennia wins on online shopping (5% vs 1%) and lower fee. Pick based on whether you eat out more or shop online more." },
  ],
},
  },

  { id: "amazon-icici", name: "Amazon Pay ICICI", bank: "ICICI", img: "📦", color: "#d97706", fee: 0, feeWaiver: "Lifetime free", type: "Cashback", verified: true,
    rewards: { dining: 1, travel: 1, online: 5, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Amazon (Prime member)", rate: "5%" },
      { name: "Amazon (non-Prime)", rate: "3%" },
      { name: "Amazon Pay partners", rate: "2%" },
    ],
    pointsInfo: "5% Amazon Prime, 3% non-Prime, 2% partners, 1% other · Credited as Amazon Pay balance",
    highlights: ["5% on Amazon (Prime)", "3% non-Prime", "Lifetime free", "No cashback cap"],
    pros: ["Best for Amazon shopping", "Lifetime free", "Instant issuance", "No cap"],
    cons: ["Rewards locked to Amazon Pay balance", "Only 1% non-Amazon", "Fuel surcharge waiver only"],
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "If you shop on Amazon, this card is mandatory. Lifetime free, 5% with no cap, instant approval.",
    body: `Amazon Pay ICICI is the easiest recommendation in Indian credit cards. It's lifetime free, gives 5% on Amazon for Prime members (3% without Prime), and has no monthly cashback cap. If you spend even ₹5,000/month on Amazon, that's ₹250/month or ₹3,000/year in rewards — from a free card.

The catch is that rewards are credited as Amazon Pay balance, not real cashback. You can use Amazon Pay at many merchants (offline and online), but you can't transfer it to your bank account. For most Amazon shoppers, this is a non-issue since you'll spend it on Amazon anyway.`,
    idealFor: "Anyone who shops on Amazon regularly. Even ₹3,000/month Amazon spend earns ₹1,800/year from a card that costs nothing. It's essentially free money with zero effort.",
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
    { q: "Do I need Amazon Prime to get 5%?", a: "No. Without Prime you get 3% on Amazon. With Prime (₹1,499/year) you get 5%. If you spend ₹3,000+/month on Amazon, Prime pays for itself through the extra 2%." },
    { q: "Can I convert Amazon Pay balance to cash?", a: "Not directly. Amazon Pay balance can be used on Amazon and at Amazon Pay partner merchants (many restaurants, fuel stations, grocery stores). But you can't transfer it to a bank account." },
    { q: "Is there a cashback cap?", a: "No. This is one of the few cards with no monthly or annual cashback cap. Spend ₹1 lakh on Amazon and get ₹5,000 back (with Prime)." },
    { q: "Amazon Pay ICICI vs HDFC Millennia for Amazon?", a: "For Amazon specifically, the Amazon Pay ICICI card wins — 5% with no cap vs Millennia's 5% with a ₹1,000/month shared cap. But Millennia covers more platforms (Swiggy, Flipkart, Myntra)." },
  ],
},
  },

  { id: "icici-coral", name: "ICICI Coral", bank: "ICICI", img: "🪸", color: "#dc2626", fee: 500, feeWaiver: "₹1.5L annual spend", type: "Entry Premium", verified: true,
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.25, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "BookMyShow", rate: "Buy 1 Get 1" },
      { name: "Culinary Treats dining", rate: "15% off at partner restaurants" },
    ],
    pointsInfo: "2 points/₹100 retail (0.5%), 1 point/₹100 utility (0.25%) · 1pt = ₹0.25",
    highlights: ["Movie BOGO BookMyShow", "Culinary Treats 15% off dining", "4+4 lounge (domestic+railway)", "Fee waiver ₹1.5L"],
    pros: ["Movie BOGO excellent value", "8 total lounge visits", "Dining discounts", "Low fee"],
    cons: ["Very low reward rate (0.5%)", "Fuel excluded", "Points redemption limited"],
    network: "Visa/MC/RuPay/Amex", lounge: "8/year",

    editorial: {
  verdict: {
    headline: "A solid entry-level card for movies and dining — but the 0.5% reward rate hurts for everything else.",
    body: `ICICI Coral's headline feature is the BookMyShow Buy 1 Get 1 offer and 15% Culinary Treats dining discount. For movie lovers and restaurant-goers, these perks alone can justify the {feeNum} fee. Add 8 lounge visits (4 domestic + 4 railway), and Coral delivers surprising premium perks at an entry-level price.

But the reward rate — 0.5% on most purchases — is genuinely low. On ₹50,000 monthly spending, you earn ₹250 in rewards. That's below what free cards like Amazon Pay ICICI or AU LIT offer on their respective strong categories. Coral is a perks card, not a rewards card.`,
    idealFor: "Movie lovers who watch 2+ movies/month and dine out regularly. The BOGO + dining discounts easily exceed the {feeNum} fee. Also good for beginners wanting lounge access on a budget.",
    skipIf: "You care about maximizing cashback on spending. 0.5% is half of what Axis ACE gives on everything. Get Coral only if the movie and dining perks matter to you.",
  },
  bestFor: [
    { category: "Movies via BookMyShow", reason: "Buy 1 Get 1 on movies is the card's killer feature. 2 movies/month = 24 free tickets/year." },
    { category: "Restaurant dining (Culinary Treats)", reason: "15% off at Culinary Treats partner restaurants. On a ₹2,000 dinner, that's ₹300 saved per visit." },
    { category: "Budget lounge access", reason: "8 lounge visits/year (including railway lounges) at just {feeNum} annual fee is the best lounge-to-fee ratio available." },
  ],
  avoidFor: [
    { category: "Online shopping", reason: "0.5% is very low. HDFC Millennia gives 10x more (5%) on the same purchases.", altCard: "hdfc-millennia" },
    { category: "General spending", reason: "0.5% across the board. Even free cards like Axis ACE (1.5%) give 3x more.", altCard: "axis-ace" },
    { category: "Fuel", reason: "0% on fuel. No rewards whatsoever at petrol pumps.", altCard: "rbl-shoprite" },
  ],
  pairWith: [
    { combo: "ICICI Coral + HDFC Millennia", fee: "₹1,500/year", reason: "Coral for movies and dining discounts, Millennia for all actual spending (5% on online partners). Use Coral for perks, Millennia for rewards.", cardId: "hdfc-millennia" },
    { combo: "ICICI Coral + Axis ACE", fee: "₹999/year", reason: "Coral for movie BOGO and lounge, ACE for everything else (1.5-5%). Both at low fees.", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is ICICI Coral worth it just for BookMyShow BOGO?", a: "If you watch 1+ movie/month, yes. One BOGO saves ₹150-300 per visit. Two movies/month means ₹300-600/month saved, far exceeding the {feeNum} annual fee." },
    { q: "How does Culinary Treats work?", a: "Book through the Culinary Treats app/website, dine at partner restaurants, and get 15% off the bill. Works at 1,000+ restaurants across India." },
    { q: "ICICI Coral vs SBI ELITE for movies?", a: "Both offer BookMyShow BOGO. Coral costs ₹500, ELITE costs ₹4,999. ELITE adds 2.5% on dining/groceries and 14 lounge visits. Coral is better on value-for-money if movies are your main perk." },
  ],
},
  },

  { id: "icici-sapphiro", name: "ICICI Sapphiro", bank: "ICICI", img: "💠", color: "#0891b2", fee: 3500, feeWaiver: "₹6L annual spend", type: "Premium", verified: true,
    rewards: { dining: 0.5, travel: 0.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.25, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "International spends", rate: "4 points/₹100 (1%)" },
    ],
    pointsInfo: "2 pts/₹100 domestic (0.5%), 4 pts intl (1%), 1 pt utility (0.25%) · 1pt = ₹0.25",
    highlights: ["Golf 4 rounds/year", "6 lounge visits/yr", "Concierge", "1% on international"],
    pros: ["Golf privileges", "Decent lounge access", "1% on international spends"],
    cons: ["Low domestic rate (0.5%)", "₹3,500 fee", "No zero forex markup"],
    network: "Visa/MC/Amex", lounge: "6/year",

    editorial: {
  verdict: {
    headline: "A niche card for golfers and occasional international spenders — not for everyday rewards.",
    body: `ICICI Sapphiro occupies an unusual position: it's a premium card that doesn't compete on rewards. 0.5% domestically is poor for a {feeNum}/year card. What it offers instead are lifestyle perks — 4 complimentary golf rounds/year, concierge service, and 1% on international spends.

For golfers, the 4 rounds/year (worth ₹4,000-8,000 depending on the course) justify the fee on their own. For everyone else, there's almost no reason to choose Sapphiro over cards with higher reward rates and similar lounge access.`,
    idealFor: "Golfers who play 4+ times/year at partner courses, or people with significant international spending. The golf benefit alone can exceed the annual fee.",
    skipIf: "You want high cashback on domestic spends. 0.5% is well below average — you'd earn 3x more with Axis ACE (1.5%) for no additional fee.",
  },
  bestFor: [
    { category: "Golf", reason: "4 complimentary rounds/year at 100+ courses. Each round is worth ₹1,000-2,000. This is the card's primary value proposition." },
    { category: "International spending", reason: "1% on international transactions is double the domestic rate. Not the best (ICICI Emeralde gives 2%), but useful for occasional travelers." },
    { category: "Lounge access", reason: "6 visits/year at a {feeNum} fee is reasonable, though not as competitive as ICICI Coral's 8 visits at ₹500." },
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
    { q: "Is ICICI Sapphiro worth it without golf?", a: "Probably not. Without golf, you're paying ₹3,500/year for 0.5% rewards and 6 lounge visits. ICICI Coral gives 8 lounge visits + BOGO movies for ₹500." },
    { q: "Does Sapphiro have zero forex markup?", a: "No. You'll pay standard forex markup (1.5-3.5%) on international transactions. For zero forex, look at IDFC FIRST WOW or select Niyo/Fi cards." },
    { q: "Can I get the fee waived?", a: "Yes, at ₹6L annual spend (₹50K/month). Achievable if it's your primary card, but hard to justify when the reward rate is only 0.5%." },
  ],
},
  },

  { id: "icici-emeralde", name: "ICICI Emeralde", bank: "ICICI", img: "💚", color: "#047857", fee: 12000, feeWaiver: "₹15L annual spend", type: "Super Premium", verified: true,
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 0.5, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "International spends", rate: "8 points/₹100 (2%)" },
    ],
    pointsInfo: "4 pts/₹100 domestic (1%), 8 pts intl (2%), 2 pts utility (0.5%) · 1pt = ₹0.25",
    highlights: ["Unlimited lounge worldwide (Priority Pass)", "24/7 concierge", "2% international", "Visa Infinite perks"],
    pros: ["Unlimited global lounge", "2% on international", "Concierge service"],
    cons: ["₹12K + GST fee", "Only 1% domestic", "Fee waiver needs ₹15L spend"],
    
    redemptionNote: "Domestic 1% at ₹0.25/point. International earns 8pts/₹100 = 2%. Frequent international travelers get significantly higher effective rates.",
    network: "Visa Infinite/Amex", lounge: "Unlimited",

    editorial: {
  verdict: {
    headline: "India's best card for international spenders — 2% on forex plus unlimited global lounge access.",
    body: `ICICI Emeralde is built for one purpose: international spending. 2% on international transactions is among the best in India, and unlimited Priority Pass lounge access makes it a serious travel companion. The 24/7 concierge adds a layer of premium service that few Indian cards match.

Domestically, though, it's average at best. 1% on everything and {feeNum} annual fee with a ₹15L spend waiver makes it hard to justify unless you travel internationally frequently. This is not an everyday spending card — it's a travel card you activate when crossing borders.`,
    idealFor: "Frequent international travelers spending ₹2L+/year abroad. The 2% on forex + unlimited global lounge access makes every international trip more rewarding and comfortable.",
    skipIf: "You primarily spend domestically. 1% at a ₹12K fee is poor value. HDFC Regalia gives 1.33% with better lounge and SmartBuy perks for a lower fee.",
  },
  bestFor: [
    { category: "International purchases", reason: "2% on all international transactions — shopping, dining, and hotel payments abroad. Among the highest forex reward rates in India." },
    { category: "Airport lounges worldwide", reason: "Unlimited Priority Pass visits with no caps. Use it at 1,300+ lounges globally, as often as you travel." },
    { category: "International online subscriptions", reason: "Subscriptions billed in foreign currency (Netflix US, Spotify, SaaS tools) earn 2% instead of the domestic 1%." },
  ],
  avoidFor: [
    { category: "Domestic spending", reason: "1% on domestic purchases doesn't justify the ₹12K fee. HDFC Regalia gives 1.33% with better domestic perks at lower cost.", altCard: "hdfc-regalia" },
    { category: "Online shopping (domestic)", reason: "1% on Amazon/Flipkart is poor. HDFC Millennia gives 5% on the same platforms.", altCard: "hdfc-millennia" },
    { category: "People who need zero forex", reason: "2% rewards doesn't mean zero forex. Forex markup is separate. IDFC FIRST WOW has actual zero forex markup.", altCard: "idfc-wow" },
  ],
  pairWith: [
    { combo: "Emeralde + HDFC Millennia", fee: "₹13,000/year", reason: "Emeralde for international travel and global lounges, Millennia for domestic online spending (5%). International card + domestic card combo.", cardId: "hdfc-millennia" },
    { combo: "Emeralde + Axis ACE", fee: "₹12,499/year", reason: "Emeralde for international, ACE for domestic everything — utilities (5%), offline (1.5%), food delivery (4%).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Does the 2% apply on top of forex markup?", a: "The 2% reward is separate from forex markup. You'll still pay the bank's forex markup (typically 1.5-3.5%) but earn 2% back in rewards. Net cost depends on the markup charged." },
    { q: "Is Emeralde invite-only?", a: "Not strictly invite-only like HDFC Infinia, but ICICI may require a minimum relationship value or salary. Apply through ICICI with a strong income profile." },
    { q: "Emeralde vs HDFC Infinia for international?", a: "Emeralde gives 2% on international vs Infinia's 3.33% (travel redemption). But Infinia is invite-only. If you have both options, Infinia wins. If you can't get Infinia, Emeralde is the best accessible option." },
  ],
},
  },

  { id: "axis-flipkart", name: "Axis Flipkart", bank: "Axis", img: "🛍️", color: "#2563eb", fee: 500, feeWaiver: "₹3.5L annual spend", type: "Cashback", verified: true,
    rewards: { dining: 4, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 1, default: 1 },
    partnerRates: [
      { name: "Flipkart", rate: "5% cashback" },
      { name: "Myntra", rate: "5% cashback" },
      { name: "Cleartrip", rate: "5% cashback" },
      { name: "Swiggy, Uber, PVR, Cure.fit", rate: "4% cashback" },
    ],
    pointsInfo: "5% Flipkart/Myntra/Cleartrip, 4% preferred, 1.25% dining, 1% other",
    highlights: ["5% Flipkart/Myntra/Cleartrip", "4% Swiggy/Uber/PVR", "4 lounge visits/yr", "No cashback cap"],
    pros: ["Best for Flipkart ecosystem", "4% on Swiggy/dining", "Now has lounge access"],
    cons: ["₹500 fee", "1% on non-partner spends", "Fuel excluded"],
    network: "Visa", lounge: "4/year",

    editorial: {
  verdict: {
    headline: "The essential card for Flipkart and Myntra shoppers — 5% with no cashback cap.",
    body: `Axis Flipkart card is the mirror image of Amazon Pay ICICI — it gives 5% on Flipkart, Myntra, and Cleartrip with no monthly cap. If Flipkart is your primary shopping platform, this card is a no-brainer. The 4% on Swiggy, Uber, and PVR adds a solid everyday spending layer.

Unlike Amazon Pay ICICI, the Axis Flipkart card has a {feeNum} annual fee (waivable at ₹3.5L spend) and 4 lounge visits — making it a more well-rounded card for the price. The 1% on non-partner spends is average but acceptable as a secondary card.`,
    idealFor: "Flipkart and Myntra shoppers spending ₹5,000+/month on these platforms. Also strong for Swiggy users at 4%. The no-cap 5% on Flipkart makes this essential for sale season shopping.",
    skipIf: "You shop primarily on Amazon (get Amazon Pay ICICI instead). If you use both Flipkart and Amazon equally, you might want both dedicated cards rather than this one alone.",
  },
  bestFor: [
    { category: "Flipkart shopping", reason: "5% with no cap. During Big Billion Days or other sales, heavy Flipkart spenders earn significantly more than any flat-rate card." },
    { category: "Myntra fashion", reason: "5% on Myntra is the same as HDFC Millennia but with no monthly cap. For fashion shoppers, this is better." },
    { category: "Cleartrip travel", reason: "5% on Cleartrip bookings — competitive with dedicated travel cards for domestic bookings." },
    { category: "Food delivery and rides", reason: "4% on Swiggy, Uber, PVR, and Cure.fit — strong secondary rates that add everyday value." },
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
    { q: "Is there a cashback cap on Flipkart purchases?", a: "No. Unlike HDFC Millennia which caps at ₹1,000/month, the Axis Flipkart card has no monthly cap on the 5% rate. Spend ₹50,000 on Flipkart and get ₹2,500 back." },
    { q: "Does the 4% work on Zomato?", a: "The 4% rate applies to Swiggy, Uber, PVR, and Cure.fit specifically. Zomato may or may not qualify depending on the MCC code — check your statements." },
    { q: "Axis Flipkart vs HDFC Millennia?", a: "Flipkart card wins for Flipkart/Myntra (no cap vs ₹1K/month cap). Millennia wins for broader platform coverage (Amazon, BookMyShow, etc.) and lounge access. Both are strong; the choice depends on your primary shopping platform." },
  ],
},
  },

  { id: "axis-ace", name: "Axis ACE", bank: "Axis", img: "🎯", color: "#7c3aed", fee: 499, feeWaiver: "₹2L annual spend", type: "Cashback", verified: true,
    rewards: { dining: 4, travel: 1.5, online: 1.5, groceries: 1.5, fuel: 0, utilities: 5, entertainment: 1.5, shopping: 1.5, default: 1.5 },
    caps: { monthlyCashback: 500, capRate: 5, fallbackRate: 0, capAppliesTo: ["utilities", "dining"] },
    // Cap math: ₹500/mo COMBINED cap on accelerated only (5% utilities + 4% food). After cap, accelerated → 0%. Base 1.5% is UNCAPPED.
    partnerRates: [
      { name: "Bill payments via Google Pay", rate: "5%" },
      { name: "Swiggy, Zomato, Ola", rate: "4%" },
    ],
    pointsInfo: "5% bills (GPay), 4% Swiggy/Zomato/Ola, 1.5% all other · ₹500/mo cap on 5%+4% only · 1.5% base uncapped",
    highlights: ["5% on bills via GPay", "4% Swiggy/Zomato", "4 lounge visits/yr", "₹500/mo cap on accelerated only"],
    pros: ["5% on utility bills (rare)", "4% on food delivery", "1.5% base is uncapped", "Lounge access at low fee"],
    cons: ["₹500/mo cap on 5%+4% categories", "After cap, accelerated → 0%", "Fuel excluded"],
    network: "Visa", lounge: "4/year",

    editorial: {
  verdict: {
    headline: "The best all-rounder card in India — 1.5% uncapped on everything, 5% on bills, 4% on food delivery.",
    body: `Axis ACE is the card we recommend more than any other. Not because it has the highest rate in any single category, but because it has no weak spots. 1.5% uncapped on all spending (no category restrictions, no monthly cap) means you never earn below average, anywhere, on anything except fuel.

Add 5% on utility bills via Google Pay (electricity, broadband, water — categories most cards ignore) and 4% on Swiggy/Zomato/Ola, and you have a card that quietly out-earns flashier competitors. The {cap}/month cap only applies to the 5% and 4% accelerated rates — the 1.5% base is completely uncapped.`,
    idealFor: "Everyone. Seriously. Even if you have a premium card, Axis ACE should be your backup for categories your primary card doesn't cover well. The 1.5% floor means you never lose.",
    skipIf: "You only shop on one platform (get the dedicated card instead — Amazon ICICI for Amazon, Flipkart card for Flipkart). But even then, ACE is a great complement.",
  },
  capMath: {
    title: "Understanding the ₹500/month accelerated cap",
    body: `This is the most misunderstood cap in Indian credit cards. The {cap}/month cap ONLY applies to the accelerated rates — 5% on utility bills and 4% on food delivery. Once you've earned ₹500 in accelerated cashback, those categories drop to 0%.

But the 1.5% base rate on everything else has NO cap. Spend ₹5 lakh in a month on general purchases and you'll earn ₹7,500 with no cap hit. This makes ACE the most reliable floor-rate card in India.

In practice: ₹500 accelerated cap means optimal bill+food spending is about ₹10,000-12,500/month on those categories. Above that, switch to your 1.5% base categories — still earning more than most cards' standard rates.`,
  },
  bestFor: [
    { category: "Utility bills via Google Pay", reason: "5% on electricity, water, broadband, gas. Most cards give 0-1% on utilities. On ₹5K monthly bills, that's ₹250/month or ₹3,000/year." },
    { category: "Food delivery", reason: "4% on Swiggy, Zomato, Ola. Second only to HDFC Swiggy card (10%) but more versatile across platforms." },
    { category: "Everything else", reason: "1.5% uncapped on all other spending — groceries, fuel, offline shopping, travel, subscriptions. This is the reliable base that never lets you down." },
    { category: "Backup card", reason: "For categories where your primary card earns 0-1%, ACE's 1.5% ensures you're always earning above average." },
  ],
  avoidFor: [
    { category: "Amazon/Flipkart shopping", reason: "1.5% on e-commerce when Amazon Pay ICICI gives 5% on Amazon and Axis Flipkart gives 5% on Flipkart — both with no cap.", altCard: "amazon-icici" },
    { category: "Travel bookings", reason: "1.5% on travel when HDFC Regalia gives up to 13% via SmartBuy. For travel, a dedicated travel card wins.", altCard: "hdfc-regalia" },
    { category: "Heavy food delivery spend", reason: "After the ₹500 cap on 4%, food delivery drops to 0%. If you spend ₹15K+/month on Swiggy alone, HDFC Swiggy card's 10% (₹1,500 cap) is better.", altCard: "hdfc-swiggy" },
  ],
  pairWith: [
    { combo: "Axis ACE + HDFC Millennia", fee: "₹1,499/year", reason: "The budget power combo. Millennia for Swiggy/Amazon/Flipkart at 5%, ACE for utilities (5%), offline (1.5%), and everything Millennia doesn't cover.", cardId: "hdfc-millennia" },
    { combo: "Axis ACE + Amazon Pay ICICI", fee: "₹499/year", reason: "Amazon card for Amazon (5%), ACE for literally everything else. Total cost under ₹500/year. Best value combo in Indian credit cards.", cardId: "amazon-icici" },
    { combo: "Axis ACE + HDFC Regalia", fee: "₹2,999/year", reason: "Regalia for travel/SmartBuy/lounges, ACE for everyday domestic spending. Premium travel perks with a solid everyday floor.", cardId: "hdfc-regalia" },
  ],
  faq: [
    { q: "Is the 1.5% base rate really uncapped?", a: "Yes. The 1.5% on general purchases has no monthly or annual cap. Only the accelerated rates (5% bills, 4% food) are capped at {cap}/month combined." },
    { q: "Does 5% work on all bill payments via Google Pay?", a: "Most utility bills paid through Google Pay qualify — electricity, water, broadband, DTH, gas. The bill must be paid using the Axis ACE card linked to GPay." },
    { q: "Axis ACE vs HDFC Millennia — which is better?", a: "Different strengths. Millennia peaks higher (5% on partners) but drops to 1% elsewhere and has a ₹1K/month cap. ACE never drops below 1.5% and has no base rate cap. For most people, both together is the answer." },
    { q: "Does Axis ACE earn on fuel?", a: "The 1.5% base rate technically applies to all MCC codes, but fuel transactions are typically excluded from cashback by Axis Bank. You get the fuel surcharge waiver only." },
    { q: "What happens to accelerated cashback after ₹500 cap?", a: "The 5% and 4% rates drop to 0% for the rest of the month. Your 1.5% base on other categories continues uncapped. The cap resets on the next billing cycle." },
  ],
},
  },

  { id: "axis-atlas", name: "Axis Atlas", bank: "Axis", img: "🌍", color: "#0f766e", fee: 5000, feeWaiver: "₹10L annual spend", type: "Travel", verified: true,
    rewards: { dining: 2, travel: 5, online: 2, groceries: 2, fuel: 0, utilities: 2, entertainment: 2, shopping: 2, default: 2 },
    partnerRates: [
      { name: "Travel bookings", rate: "5 EDGE Miles/₹100 (5%)" },
      { name: "Airline transfers", rate: "Air India, Vistara, Singapore Airlines, Etihad, Qatar, Accor" },
    ],
    pointsInfo: "5 EDGE Miles/₹100 travel (5%), 2 other (2%) · 1 Mile ≈ ₹1 · Transferable to airlines",
    highlights: ["5% on travel", "18 lounge visits/yr", "Airline mile transfers", "Fee waiver ₹10L"],
    pros: ["Best Indian travel rewards card", "Airline mile transfers (6 partners)", "2% on non-travel"],
    cons: ["₹5K fee", "~3.5% forex markup (no zero forex)", "Fuel excluded"],
    
    redemptionNote: "1 EDGE Mile ≈ ₹1 (typical). Actual value varies ₹0.80–₹1.50 by airline partner and route. Best value on premium cabin redemptions.",
    network: "Visa Infinite", lounge: "18/year",

    editorial: {
  verdict: {
    headline: "India's best dedicated travel rewards card — 5% on travel, airline mile transfers, 18 lounges.",
    body: `Axis Atlas is built from the ground up for travelers. 5% on travel bookings, transferable EDGE Miles to 6 airline partners (including Singapore Airlines and Qatar Airways), and 18 lounge visits make it the most complete travel card available in India.

The 2% base rate on non-travel spending is strong enough that Atlas works as a primary card, not just a travel card. The {feeNum} annual fee is waivable at ₹10L spend, and the value from airline transfers alone can far exceed this. The main downside is the ~3.5% forex markup — no zero forex means international transactions are penalized.`,
    idealFor: "Frequent travelers who value airline miles and premium cabin redemptions. If you fly 4+ times a year and are willing to learn the miles game, Atlas delivers exceptional value.",
    skipIf: "You rarely travel or only care about cashback. The miles system requires effort to maximize. For simple cashback, Axis ACE or HDFC Millennia are easier choices.",
  },
  bestFor: [
    { category: "Flight and hotel bookings", reason: "5% on travel is the highest travel rate outside of SmartBuy. Book ₹3L in annual travel and earn 15,000 EDGE Miles (worth ₹15K+ in flights)." },
    { category: "Airline mile transfers", reason: "Transfer to Air India, Vistara, Singapore Airlines, Etihad, Qatar, Accor. Premium cabin redemptions can give 3-5x value per mile." },
    { category: "All-round spending", reason: "2% base on non-travel is above average. Unlike most travel cards that give 0.5-1% on non-travel, Atlas remains competitive for everyday purchases." },
    { category: "Lounge access", reason: "18 visits/year (comparable to HDFC Regalia) at a similar fee point. Excellent for domestic and international transit." },
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
    { q: "How do EDGE Miles transfers work?", a: "Accumulate EDGE Miles from spending, then transfer to partner airlines (Air India, Singapore Airlines, etc.) through the Axis EDGE Rewards portal. Transfer ratios vary by partner — typically 1:1 but check current rates." },
    { q: "Is Atlas better than HDFC Regalia for travel?", a: "Different strengths. Atlas gives 5% on travel + airline transfers. Regalia gives up to 13% via SmartBuy but only through HDFC's portal. If you want flexibility in booking platforms, Atlas wins. If you're happy using SmartBuy, Regalia's rate is higher." },
    { q: "Does Atlas have zero forex markup?", a: "No. Axis Atlas charges ~3.5% forex markup on international transactions. The 2% base rewards partially offset this, but you're still paying ~1.5% net on international spends." },
  ],
},
  },


  { id: "au-lit", name: "AU LIT Credit Card", bank: "AU Bank", img: "🔥", color: "#ea580c", fee: 0, feeWaiver: "Lifetime free", type: "Lifestyle", verified: true,
    rewards: { dining: 1, travel: 1, online: 1, groceries: 1, fuel: 0, utilities: 1, entertainment: 1, shopping: 5, default: 1 },
    partnerRates: [
      { name: "Selected feature pack categories", rate: "Up to 5% or 10x points" },
    ],
    pointsInfo: "Customizable rewards — pick your categories · Up to 5% on selected, 1pt/₹100 other",
    highlights: ["Lifetime free", "Customizable reward categories", "Up to 5% on your picks", "Fuel surcharge waiver"],
    pros: ["Choose your own reward categories", "Lifetime free", "Up to 5% on selected"],
    cons: ["Need to actively select feature packs", "1% base on non-selected", "10K points cap/cycle"],
    
    redemptionNote: "Rates depend on Feature Pack selection. Pick 2-3 categories for up to 5%. Without packs, base is ~1%. Change packs monthly via AU app.",
    network: "Visa/RuPay", lounge: "Add-on",

    editorial: {
  verdict: {
    headline: "The most customizable card in India — choose your own 5% categories. Free forever.",
    body: `AU LIT's unique selling point is Feature Packs — you pick which spending categories earn up to 5%, and you can change them monthly. No other card in India offers this level of customization. If your spending pattern is concentrated in specific categories, you can optimize the card to match your life.

The catch is that you need to actively manage it. Select the wrong Feature Pack and you're stuck with 1% base for the month. The 10,000 points/cycle cap limits earning potential for heavy spenders. But for engaged users who check their spending patterns, LIT can outperform cards with fixed reward structures.`,
    idealFor: "People with concentrated spending in 2-3 categories who are willing to actively manage their Feature Pack selection monthly. If you spend ₹15K/month on groceries, set groceries as your 5% category and earn ₹750/month.",
    skipIf: "You want a set-it-and-forget-it card. If managing reward categories sounds like a chore, Axis ACE's automatic 1.5% on everything is simpler and earns well without any effort.",
  },
  bestFor: [
    { category: "Your top spending category (customizable)", reason: "Up to 5% on whichever category you choose via Feature Packs. This is the card's superpower — it adapts to you." },
    { category: "Budget-conscious optimizers", reason: "Lifetime free with up to 5% on selected categories. You can't beat the rewards-per-rupee-of-fee ratio." },
    { category: "Changing spending patterns", reason: "Moving to a new city? Change your Feature Pack from groceries to fuel. Having a baby? Switch to healthcare. Monthly flexibility is unique." },
  ],
  avoidFor: [
    { category: "All-round spending", reason: "1% base on non-selected categories is average. If your spending is spread equally across many categories, Axis ACE's 1.5% on everything is better.", altCard: "axis-ace" },
    { category: "Heavy spenders", reason: "10,000 points/cycle cap limits total earnings. At 5%, that's ₹2,500/cycle max — fine for moderate spenders, limiting for heavy ones.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "AU LIT + Axis ACE", fee: "₹499/year", reason: "LIT for your top spending category at 5%, ACE for everything else at 1.5% uncapped. Free + ₹499 = best budget combo.", cardId: "axis-ace" },
    { combo: "AU LIT + Amazon Pay ICICI", fee: "Free", reason: "LIT for your chosen category at 5%, Amazon card for Amazon at 5%. Two free cards covering your top categories.", cardId: "amazon-icici" },
  ],
  faq: [
    { q: "How do Feature Packs work?", a: "Select 2-3 spending categories in the AU app for up to 5% rewards. You can change your selection monthly. Available categories include groceries, fuel, dining, travel, and more." },
    { q: "What if I forget to select a Feature Pack?", a: "You'll earn the base rate of ~1% on everything. The card doesn't auto-select — you need to actively choose each month." },
    { q: "Is AU Bank reliable?", a: "AU Small Finance Bank has grown significantly and offers full banking services. The card is issued on Visa/RuPay networks with standard security features. The app is functional but not as polished as HDFC or ICICI." },
  ],
},
  },

  { id: "au-zenith", name: "AU Zenith+", bank: "AU Bank", img: "⚜️", color: "#b45309", fee: 4999, feeWaiver: "₹8L annual spend", type: "Premium", verified: true,
    rewards: { dining: 1.25, travel: 1.25, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "Dining", rate: "5 pts/₹100 (1.25%)" },
      { name: "Travel", rate: "5 pts/₹100 (1.25%)" },
      { name: "International", rate: "10 pts/₹100 (2.5%)" },
    ],
    pointsInfo: "5 pts/₹100 dining/travel (1.25%), 10 pts intl (2.5%), 2 pts other (0.5%) · 1pt = ₹0.25",
    highlights: ["Unlimited domestic + intl lounge", "2.5% on international", "1.25% dining/travel", "Fee waiver ₹8L"],
    pros: ["Unlimited lounge access", "2.5% on international spends", "Decent dining/travel rate"],
    cons: ["₹4,999 fee", "Only 0.5% on general spends", "AU Bank less established"],
    network: "Visa Infinite", lounge: "Unlimited",

    editorial: {
  verdict: {
    headline: "Unlimited lounge access and 2.5% on international — a value play for AU Bank customers.",
    body: `AU Zenith+ is positioned as a premium card from a smaller bank, and it delivers on its headline perks: unlimited lounge access worldwide and 2.5% on international spending. For frequent travelers, these two features alone compete with cards costing much more.

Domestically, 1.25% on dining/travel and 0.5% on everything else is underwhelming for a ₹4,999 card. This card makes sense primarily for AU Bank customers who value lounge access and travel internationally. For domestic spending, there are much better options.`,
    idealFor: "AU Bank customers who travel frequently (domestic lounge access unlimited) and make international purchases. The 2.5% on forex spending is competitive with much pricier cards.",
    skipIf: "You primarily spend domestically. 0.5% base rate on a ₹4,999 card is poor value. HDFC Regalia gives 1.33% with better domestic perks for a similar fee.",
  },
  bestFor: [
    { category: "Airport lounges", reason: "Unlimited domestic and international lounge access. No visit caps — use it every time you fly." },
    { category: "International spending", reason: "2.5% on international transactions is among the best available, matching ICICI Emeralde at a lower fee." },
    { category: "Dining and travel (domestic)", reason: "1.25% on dining and travel is decent though not exceptional." },
  ],
  avoidFor: [
    { category: "General domestic spending", reason: "0.5% on most categories is half of what Axis ACE gives (1.5%) at a lower fee.", altCard: "axis-ace" },
    { category: "Online shopping", reason: "0.5% on online purchases. HDFC Millennia gives 5% — ten times the rate.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "AU Zenith+ + Axis ACE", fee: "₹5,498/year", reason: "Zenith+ for lounges and international spending, ACE for all domestic spending (1.5-5%).", cardId: "axis-ace" },
  ],
  faq: [
    { q: "Is AU Zenith+ worth the {feeNum} fee?", a: "Only if you use lounge access frequently (10+ times/year) and make international purchases. The domestic rewards alone don't justify the fee." },
    { q: "Can I get the fee waived?", a: "Yes, at ₹8L annual spend (₹67K/month). Achievable but difficult to justify given the low base rate." },
  ],
},
  },

  { id: "idfc-wow", name: "IDFC FIRST WOW", bank: "IDFC", img: "🌟", color: "#059669", fee: 0, feeWaiver: "Lifetime free", type: "Travel", verified: true,
    rewards: { dining: 0.66, travel: 0.66, online: 0.66, groceries: 0.66, fuel: 0, utilities: 0.66, entertainment: 0.66, shopping: 0.66, default: 0.66 },
    partnerRates: [],
    pointsInfo: "4 pts/₹150 (0.66%) · 1pt = ₹0.25 · Zero forex · Points never expire · Redeemable as cash",
    highlights: ["Lifetime free", "Zero forex markup", "Points never expire", "Redeemable as cash"],
    pros: ["Zero forex (rare for free card)", "Points never expire", "Cash redemption", "Free forever"],
    cons: ["Low base rate (0.66%)", "No lounge access", "No accelerated categories"],
    network: "Visa", lounge: "None",

    editorial: {
  verdict: {
    headline: "The only free card with zero forex markup — essential for anyone making international payments.",
    body: `IDFC FIRST WOW has a single killer feature: zero forex markup on international transactions, on a lifetime free card. No other free card in India offers this. If you pay for international subscriptions (Netflix, Spotify, SaaS tools), shop from international websites, or travel abroad, this card saves you 1.5-3.5% on every foreign currency transaction.

The domestic reward rate of 0.66% is low, and there's no lounge access. This isn't meant to be your primary card — it's the card you pull out for anything involving foreign currency, while using a higher-rewards card for domestic spending.`,
    idealFor: "Anyone with recurring international payments — SaaS subscriptions, international e-commerce, or frequent travel. Zero forex on a free card is unique and saves real money.",
    skipIf: "You never make international payments. The 0.66% domestic rate doesn't justify using this as your primary card. Get it and keep it specifically for forex transactions.",
  },
  bestFor: [
    { category: "International subscriptions", reason: "Netflix, Spotify, GitHub, AWS, Adobe — any USD/EUR subscription costs 0% markup. On ₹5K/month in subscriptions, you save ₹150-175/month vs a standard card." },
    { category: "International online shopping", reason: "Shopping from Amazon US, eBay, AliExpress with zero forex. The savings compound significantly for frequent international shoppers." },
    { category: "Travel abroad", reason: "Swipe freely overseas without worrying about 3.5% markup on every coffee and taxi. The savings on a week-long international trip can reach ₹2,000-5,000." },
  ],
  avoidFor: [
    { category: "Domestic spending", reason: "0.66% on domestic purchases is well below average. Use virtually any other card for Indian transactions.", altCard: "axis-ace" },
    { category: "Lounge access", reason: "No lounge access at all. Pair with a lounge card for travel.", altCard: "hdfc-regalia" },
  ],
  pairWith: [
    { combo: "IDFC WOW + Axis ACE", fee: "₹499/year", reason: "WOW for all international transactions (zero forex), ACE for all domestic spending (1.5-5%). A free + ₹499 combo that covers everything.", cardId: "axis-ace" },
    { combo: "IDFC WOW + HDFC Millennia", fee: "₹1,000/year", reason: "WOW for international, Millennia for domestic online partners (5%). Strong for people who shop both domestically and internationally.", cardId: "hdfc-millennia" },
    { combo: "IDFC WOW + Axis Atlas", fee: "₹5,000/year", reason: "WOW for zero forex on international transactions, Atlas for domestic travel rewards (5%) and airline mile transfers. The complete travel card combo.", cardId: "axis-atlas" },
  ],
  faq: [
    { q: "Is zero forex really zero?", a: "Yes, IDFC FIRST WOW charges 0% markup on foreign currency transactions. The exchange rate used is the Visa network rate with no added margin. This is verified and not a promotional offer — it's a permanent feature." },
    { q: "Does zero forex apply on ATM withdrawals abroad?", a: "Zero forex applies to POS and online transactions. International ATM withdrawals may have separate cash advance charges — check with IDFC FIRST." },
    { q: "Why is the reward rate so low (0.66%)?", a: "The zero forex feature is the value proposition. IDFC subsidizes the low rewards with the forex savings. This card isn't meant for domestic rewards — pair it with a higher-rewards domestic card." },
    { q: "Do points expire?", a: "No, IDFC FIRST rewards points never expire. And they're redeemable as direct cash credit to your account — no voucher restrictions." },
  ],
},
  },

  { id: "idfc-select", name: "IDFC FIRST Select", bank: "IDFC", img: "⭐", color: "#0d9488", fee: 0, feeWaiver: "Lifetime free", type: "Premium Entry", verified: true,
    rewards: { dining: 0.5, travel: 1.5, online: 0.5, groceries: 0.5, fuel: 0, utilities: 0.5, entertainment: 0.5, shopping: 0.5, default: 0.5 },
    partnerRates: [
      { name: "UPI spends", rate: "2x (1%)" },
      { name: "Travel bookings", rate: "3x (1.5%)" },
      { name: "Birthday month", rate: "10x (5%)" },
      { name: "Spends above ₹20K", rate: "5x (2.5%)" },
    ],
    pointsInfo: "3 pts/₹150 base (0.5%), 2x UPI (1%), 3x travel (1.5%), 10x birthday (5%), 5x above ₹20K (2.5%) · 1pt = ₹0.25 · Points never expire",
    highlights: ["Lifetime free", "5% birthday month", "Airport + railway lounge", "Points never expire"],
    pros: ["Free card with lounge access", "5% on birthday month", "2.5% on spends above ₹20K"],
    cons: ["Low base rate (0.5%)", "Fuel excluded", "No zero forex"],
    
    redemptionNote: "Base rate (0.5%) is for normal spends. Jumps to 2.5% above ₹20K/mo and 5% in birthday month. UPI earns 1%. Effective rate depends on spending pattern.",
    network: "Visa", lounge: "4/year",

    editorial: {
  verdict: {
    headline: "A free card with lounge access, zero forex, and a 5% birthday bonus — surprisingly complete for ₹0.",
    body: `IDFC FIRST Select punches well above its price point (free). Zero forex markup, 4 lounge visits/year (airport + railway), points that never expire, and a 10x birthday month bonus (5%) — all on a lifetime free card. No other free card offers this combination.

The base rate of 0.5% is low, but the card has several accelerators: 2.5% on spends above ₹20K/month, 1.5% on travel, 1% on UPI, and 5% during your birthday month. If you spend strategically, the effective rate is significantly higher than the base suggests.`,
    idealFor: "Budget-conscious spenders who want lounge access and zero forex without paying an annual fee. Also great for anyone with one high-spending month (put big purchases in your birthday month for 5%).",
    skipIf: "You want consistently high rewards every month. The 0.5% base is low, and the accelerators require specific conditions. Axis ACE's 1.5% uncapped is more reliable.",
  },
  bestFor: [
    { category: "Birthday month spending", reason: "10x points (5%) during your birthday month. Time a big purchase (laptop, appliance) for your birthday month and earn 5% instead of 0.5%." },
    { category: "International transactions", reason: "Zero forex markup on a free card — same benefit as IDFC WOW. Essential for international subscriptions and travel." },
    { category: "Free lounge access", reason: "4 visits/year (airport + railway) on a free card. The only free card with meaningful lounge access." },
    { category: "High-value monthly spenders", reason: "Spends above ₹20K/month earn 2.5% — competitive with mid-tier premium cards." },
  ],
  avoidFor: [
    { category: "Regular everyday spending", reason: "0.5% base on normal purchases. Axis ACE gives 1.5% uncapped — 3x more on every transaction.", altCard: "axis-ace" },
    { category: "Food delivery", reason: "0.5% on Swiggy/Zomato. HDFC Millennia gives 5%, Axis ACE gives 4%.", altCard: "hdfc-millennia" },
  ],
  pairWith: [
    { combo: "IDFC Select + Axis ACE", fee: "₹499/year", reason: "Select for lounges, zero forex, and birthday month. ACE for all regular spending (1.5-5%). Free + ₹499 covers everything.", cardId: "axis-ace" },
    { combo: "IDFC Select + HDFC Millennia", fee: "₹1,000/year", reason: "Select for lounges and international transactions, Millennia for domestic online partners (5%).", cardId: "hdfc-millennia" },
  ],
  faq: [
    { q: "How does the birthday month 5% work?", a: "During the month of your birthday, all spending earns 10x points (effectively 5%). This applies to all categories, not just specific ones. Great for timing large purchases." },
    { q: "Does the 2.5% above ₹20K apply to total or per-transaction?", a: "It applies to total monthly spending above ₹20,000. Once your cumulative spend crosses ₹20K in a month, subsequent transactions earn 5x points (2.5%)." },
    { q: "Is zero forex same as IDFC WOW?", a: "Yes, identical zero forex markup. The difference is Select adds lounge access, birthday bonus, and UPI rewards. WOW is simpler with slightly higher base rate (0.66% vs 0.5%)." },
  ],
},
  },

  { id: "onecard", name: "OneCard", bank: "OneCard", img: "⚡", color: "#18181b", fee: 0, feeWaiver: "Lifetime free", type: "Lifestyle", verified: true,
    rewards: { dining: 0.2, travel: 0.2, online: 0.2, groceries: 0.2, fuel: 1, utilities: 0.2, entertainment: 0.2, shopping: 0.2, default: 0.2 },
    partnerRates: [
      { name: "Top 2 spending categories (auto-detected)", rate: "5x points (~1%)" },
    ],
    pointsInfo: "5x on top 2 categories (~1%), 1x others (~0.2%) · 1pt = ₹0.10 · Points never expire",
    highlights: ["Metal card", "5x on top 2 categories", "Lifetime free", "Points never expire"],
    pros: ["Metal card (premium feel)", "Auto-optimizes for your spending", "Free forever"],
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

  { id: "bob-eterna", name: "BOB Eterna", bank: "BOB", img: "🏛️", color: "#1e40af", fee: 2499, feeWaiver: "₹2.5L annual spend", type: "Premium", verified: true,
    rewards: { dining: 3.75, travel: 3.75, online: 3.75, groceries: 0.75, fuel: 0, utilities: 0.75, entertainment: 0.75, shopping: 0.75, default: 0.75 },
    partnerRates: [
      { name: "Dining/travel/online", rate: "15 pts/₹100 (3.75%)" },
    ],
    pointsInfo: "15 pts/₹100 dining/travel/online (3.75%), 3 pts other (0.75%) · 1pt = ₹0.25 · Fuel surcharge waiver",
    highlights: ["3.75% on dining/travel/online", "18 lounge visits/yr", "Golf access", "BookMyShow discount"],
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
    { q: "BOB Eterna vs HDFC Regalia?", a: "Eterna gives 3.75% on dining/travel/online vs Regalia's 1.33% base. Eterna wins on raw rate. Regalia wins on SmartBuy (up to 13%), app experience, and wider redemption options. If you don't use SmartBuy, Eterna is better value." },
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

But 0.5-0.75% reward rates on a {feeNum}/year card are hard to justify on spending alone. The 50K points/month cap further limits earning potential. This is purely a lounge card — if you need rewards, look elsewhere.`,
    idealFor: "Ultra-frequent domestic travelers (20+ flights/year) who use airport lounges regularly. If lounge visits are your primary credit card benefit, the unlimited access justifies the fee.",
    skipIf: "You fly less than 15 times a year. HDFC Regalia (18 lounge visits) or BOB Eterna (18 visits) offer similar lounge access with significantly better reward rates.",
  },
  bestFor: [
    { category: "Unlimited lounge access", reason: "No visit caps, domestic or international. For someone flying weekly, this is unmatched." },
    { category: "Online spending", reason: "0.75% online is the highest rate this card offers — modest but slightly above its offline rate." },
  ],
  avoidFor: [
    { category: "Earning rewards", reason: "0.5% base on a ₹10K card. HDFC Regalia gives 1.33% with better perks for a lower effective fee.", altCard: "hdfc-regalia" },
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

  { id: "rbl-shoprite", name: "RBL ShopRite", bank: "RBL", img: "🧺", color: "#c026d3", fee: 500, feeWaiver: "None", type: "Cashback", verified: true,
    rewards: { dining: 0, travel: 0, online: 1.25, groceries: 5, fuel: 5, utilities: 0, entertainment: 2.5, shopping: 0, default: 0.25 },
    caps: { monthlyPoints: 5000, pointValue: 0.25, spendPer: 100, pointsPer: 20 },
    partnerRates: [
      { name: "Grocery stores", rate: "20 pts/₹100 (5%)" },
      { name: "Fuel", rate: "20 pts/₹100 (5%)" },
      { name: "BookMyShow movies", rate: "10 pts/₹100 (2.5%)" },
      { name: "Online shopping", rate: "5 pts/₹100 (1.25%)" },
    ],
    pointsInfo: "5% grocery/fuel, 2.5% movies, 1.25% online, 0.25% other · 5K pts/mo cap · 2000 welcome pts",
    highlights: ["5% on grocery + fuel", "2.5% on movies", "2000 welcome points"],
    pros: ["Best grocery rate (5%)", "5% fuel (very rare)", "Movie cashback"],
    cons: ["₹500 fee (not free)", "5000 points/month cap", "Near-zero on most categories"],
    network: "Visa/MC", lounge: "None",

    editorial: {
  verdict: {
    headline: "The only card in India with 5% on both groceries AND fuel — two categories every other card ignores.",
    body: `RBL ShopRite fills a unique gap: 5% on grocery stores and 5% on fuel. Every major card excludes fuel from rewards, and most give 1% or less on groceries. If you spend significantly on weekly groceries and monthly fuel, ShopRite earns rewards where no other card will.

The 5,000 points/month cap (₹1,250) and near-zero rates on other categories (0.25%) limit its use as a primary card. But as a dedicated grocery+fuel card paired with a better all-rounder, ShopRite adds genuine value that no other card can provide.`,
    idealFor: "Families spending ₹10,000+/month on groceries and ₹5,000+/month on fuel. At these levels, ShopRite earns ₹750/month or ₹9,000/year on spending that every other card ignores.",
    skipIf: "You don't spend much on groceries or fuel. The 0.25% rate on everything else makes this useless as a primary card.",
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
    { q: "Is the {feeNum} fee waivable?", a: "No fee waiver option. The ₹500 is a fixed annual charge. But with ₹15K/month grocery+fuel spend, you earn ₹750/month — the fee is recovered in the first month." },
  ],
},
  },
];

export const BANKS = [...new Set(CARDS.map(c => c.bank))].sort();

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
// This is the killer feature — no other Indian site does this.
// Returns { cashback, effectiveRate, capped, capNote } for a card + category + monthly spend

export function calcReward(card, categoryId, monthlySpend) {
  const baseRate = card.rewards[categoryId] || card.rewards.default || 0;
  if (baseRate === 0 || monthlySpend === 0) return { cashback: 0, effectiveRate: 0, capped: false, capNote: null };

  const rawCashback = monthlySpend * baseRate / 100;

  if (!card.caps) {
    return { cashback: Math.round(rawCashback), effectiveRate: baseRate, capped: false, capNote: null };
  }

  const caps = card.caps;

  // Monthly cashback cap (Axis ACE, HDFC Millennia, HDFC Swiggy)
  if (caps.monthlyCashback !== undefined) {
    const isCappedCategory = !caps.capAppliesTo || caps.capAppliesTo.includes(categoryId);

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

// Calculate total monthly reward across all categories for a card
export function calcTotalMonthlyReward(card, spending) {
  let total = 0;
  let anyCapped = false;
  const details = {};

  CATEGORIES.forEach(cat => {
    const result = calcReward(card, cat.id, spending[cat.id] || 0);
    total += result.cashback;
    if (result.capped) anyCapped = true;
    details[cat.id] = result;
  });

  return { total, anyCapped, details };
}

