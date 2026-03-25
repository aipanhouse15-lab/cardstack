// ─── "BEST CARD FOR X" CATEGORY PAGES ───
// Each entry generates a page at /best/[slug]
// Cards are ranked by effective reward rate for the category, with cap-aware math

export const BEST_FOR_CATEGORIES = [

  {
    slug: "credit-card-for-online-shopping",
    title: "Best Credit Card for Online Shopping in India (2026)",
    shortTitle: "Online Shopping",
    description: "Compare the best credit cards for online shopping in India. Cap-aware cashback calculations on Amazon, Flipkart, Myntra, and more.",
    icon: "🛒",
    heroLine: "The best cards for online shopping — with the cap math most sites won't show you.",
    categoryId: "online",
    testSpend: 15000,
    intro: `Every card claims high online rewards, but the fine print tells a different story. Monthly caps, partner-only rates, and falling fallback rates mean the "5% cashback" card might actually earn you less than a simple 1.5% flat-rate card — depending on how much you spend.

We ran the numbers at ₹15,000/month online spend across every card in our database. Here's what actually happens after the caps kick in.`,
    picks: [
      { cardId: "hdfc-millennia", badge: "Best for multi-platform shoppers", note: "5% on Amazon, Flipkart, Myntra, and 10+ other partners. But the ₹1,000/month cap means your max beneficial partner spend is ₹20,000. Under that? Unbeatable at this fee." },
      { cardId: "amazon-icici", badge: "Best for Amazon-only", note: "5% on Amazon (Prime members) with no monthly cap. If Amazon is 80%+ of your online shopping, this free card beats everything else." },
      { cardId: "sbi-cashback", badge: "Best for all-site coverage", note: "5% on ALL online purchases — no partner restrictions. Amazon, niche stores, SaaS subscriptions — everything. ₹5,000/cycle cap (dropping to ₹2,000 in April 2026)." },
      { cardId: "axis-flipkart", badge: "Best for Flipkart ecosystem", note: "5% on Flipkart, Myntra, Cleartrip with no cap. If Flipkart is your primary platform, this edges out Millennia (which has a shared cap)." },
      { cardId: "axis-ace", badge: "Best uncapped all-rounder", note: "1.5% on everything with no cap. Doesn't peak as high as 5% cards, but never drops below 1.5% either. The reliable backup for spending above other cards' caps." },
    ],
    verdict: "For most people, **HDFC Millennia + Amazon Pay ICICI** (₹1,000/year total) covers online shopping optimally. Millennia for Swiggy/Flipkart/Myntra at 5%, Amazon card for Amazon at 5% (no cap). If you shop on niche sites, add SBI Cashback for its unrestricted 5% online rate.",
    faq: [
      { q: "Which card gives the highest online cashback?", a: "HDFC Millennia and Amazon Pay ICICI both give 5%, but Millennia has a ₹1,000/month cap while Amazon card has no cap. For pure rate, they tie. For uncapped earning, Amazon ICICI wins on Amazon specifically." },
      { q: "Does cashback work on EMI purchases?", a: "Generally no. Most cards exclude EMI transactions from cashback calculations. Full-payment transactions earn the advertised rate." },
      { q: "Is 5% cashback really 5%?", a: "Check the caps. HDFC Millennia's 5% is capped at ₹1,000/month (₹20K beneficial spend). SBI Cashback's 5% is capped at ₹5,000/cycle (dropping to ₹2,000 online sub-cap from Apr 2026). Amazon ICICI's 5% has no cap. The effective rate depends on your spending volume." },
    ],
  },

  {
    slug: "credit-card-for-swiggy-zomato",
    title: "Best Credit Card for Swiggy & Zomato in India (2026)",
    shortTitle: "Food Delivery",
    description: "Find the best credit card for Swiggy and Zomato food delivery. Detailed cashback comparison with monthly cap calculations.",
    icon: "🍕",
    heroLine: "The real cashback rates on Swiggy and Zomato — after caps are applied.",
    categoryId: "dining",
    testSpend: 8000,
    intro: `Food delivery is where credit card rewards get interesting — and confusing. Cards advertise 4-10% on Swiggy and Zomato, but monthly caps mean your actual earning rate depends entirely on how much you order.

We calculated effective cashback at ₹8,000/month food delivery spend — the average for urban professionals ordering 4-5 times per week.`,
    picks: [
      { cardId: "hdfc-swiggy", badge: "Highest rate: 10% on Swiggy ecosystem", note: "10% on Swiggy Food, Instamart, Dineout, Genie. Separate caps: ₹1,500/mo Swiggy + ₹1,500/mo online + ₹500/mo other = ₹3,500 total possible. Swiggy-only (Zomato earns 1%)." },
      { cardId: "hdfc-millennia", badge: "Best for Swiggy + Zomato", note: "5% on both Swiggy AND Zomato (plus Amazon, Flipkart, etc.). More versatile than the Swiggy card but lower rate. ₹1,000/month shared cap." },
      { cardId: "axis-ace", badge: "Best backup after cap", note: "4% on Swiggy/Zomato/Ola with a ₹500/month accelerated cap. Once your primary card's cap is hit, switch to ACE for the overflow at 4%." },
      { cardId: "axis-flipkart", badge: "Strong alternative", note: "4% on Swiggy with no explicit cap on the 4% tier. If you've hit Millennia's ₹1K cap, Flipkart card continues earning 4%." },
      { cardId: "sbi-elite", badge: "Best for restaurant dining", note: "2.5% on dining (including delivery platforms that code as dining). Better for restaurant bills than delivery-specific cashback." },
    ],
    verdict: "If you use **only Swiggy**: HDFC Swiggy card (10%) is the clear winner up to ₹15K/month. If you use **both Swiggy and Zomato**: HDFC Millennia (5% on both) is more practical. Pair either with Axis ACE for overflow after caps.",
    faq: [
      { q: "Does HDFC Swiggy card work on Zomato?", a: "The 10% rate is Swiggy-exclusive. Zomato orders earn the standard rate (1%). If you use both platforms, HDFC Millennia's 5% on both is more versatile." },
      { q: "Do food delivery orders always count as dining?", a: "It depends on the MCC code. Swiggy/Zomato may code as dining, online, or food delivery depending on the card issuer and platform. Check your statement to confirm which category your orders fall under." },
      { q: "What about Swiggy Instamart?", a: "Yes, Instamart is part of the Swiggy ecosystem and earns 10%. Also Dineout and Genie. All under the ₹1,500/month Swiggy cap (separate from online and other caps)." },
    ],
  },

  {
    slug: "credit-card-for-amazon",
    title: "Best Credit Card for Amazon India (2026)",
    shortTitle: "Amazon",
    description: "Best credit cards for Amazon shopping in India. Compare 5% cashback options with and without caps.",
    icon: "📦",
    heroLine: "Three cards give 5% on Amazon — here's which one actually earns you more.",
    categoryId: "online",
    testSpend: 12000,
    intro: `Amazon is the most common online shopping destination in India, and several cards offer 5% cashback. But they're not equal — one has no cap, one has a ₹1,000/month shared cap, and one is changing its caps in April 2026.

At ₹12,000/month Amazon spend, the difference between these cards is real money.`,
    picks: [
      { cardId: "amazon-icici", badge: "Best overall — 5%, no cap, free", note: "5% on Amazon (Prime members), no monthly cap, lifetime free. The math is simple: ₹12K/month = ₹600/month = ₹7,200/year. From a free card. No other option matches this." },
      { cardId: "hdfc-millennia", badge: "Best if you also shop elsewhere", note: "5% on Amazon plus Flipkart, Myntra, Swiggy, and more. But the ₹1,000/month shared cap limits total earning. Best if your Amazon spend is under ₹10K/month and you want broader coverage." },
      { cardId: "sbi-cashback", badge: "Best for Amazon + other sites", note: "5% on ALL online (including Amazon) with no partner restrictions. The ₹5,000/cycle cap gives more room than Millennia's ₹1K cap. But changes coming April 2026 reduce this to ₹2K." },
      { cardId: "axis-ace", badge: "Reliable floor", note: "1.5% on Amazon (uncapped). Not exciting, but never drops below 1.5% regardless of spend level. Good for Amazon purchases after your primary card's cap is hit." },
    ],
    verdict: "**Amazon Pay ICICI is the obvious winner.** Free card, 5%, no cap. If you spend ₹5K+/month on Amazon, get this card. Pair it with HDFC Millennia for non-Amazon online shopping.",
    faq: [
      { q: "Do I need Amazon Prime for 5%?", a: "Yes for 5%. Without Prime, you get 3%. At ₹5K+/month Amazon spend, the extra 2% earns back the Prime fee (₹1,499/year) within 6 months." },
      { q: "Is the cashback real money?", a: "It's Amazon Pay balance — usable on Amazon and Amazon Pay partner merchants. You can't transfer it to a bank account, but you'll likely spend it on Amazon anyway." },
      { q: "Amazon Pay ICICI vs HDFC Millennia for Amazon?", a: "Amazon ICICI wins decisively: 5% with no cap vs Millennia's 5% with a ₹1,000/month shared cap. Millennia is better for Flipkart/Swiggy; Amazon ICICI is better for Amazon." },
    ],
  },

  {
    slug: "credit-card-for-flipkart",
    title: "Best Credit Card for Flipkart Shopping in India (2026)",
    shortTitle: "Flipkart",
    description: "Best credit cards for Flipkart and Myntra. Uncapped 5% cashback options compared.",
    icon: "🛍️",
    heroLine: "Flipkart shoppers have fewer options than Amazon — but one card dominates.",
    categoryId: "shopping",
    testSpend: 10000,
    intro: `While Amazon has a dedicated co-branded card with no cap, Flipkart shoppers have fewer optimized options. The Axis Flipkart card leads the pack, but HDFC Millennia also covers Flipkart at 5% (with cap limitations).

Here's how they compare at ₹10,000/month Flipkart spend.`,
    picks: [
      { cardId: "axis-flipkart", badge: "Best for Flipkart — 5%, no cap", note: "5% on Flipkart and Myntra with no monthly cap. During Big Billion Days, heavy spenders earn uncapped rewards. Also gives 5% on Cleartrip and 4% on Swiggy." },
      { cardId: "hdfc-millennia", badge: "Best multi-platform alternative", note: "5% on Flipkart, but the ₹1,000/month shared cap means your max beneficial Flipkart spend is ₹20K if you don't use other partner categories. More versatile but lower ceiling." },
      { cardId: "bob-eterna", badge: "Hidden strong option", note: "3.75% on online shopping (including Flipkart) with no partner restrictions. From Bank of Baroda — underrated but genuinely competitive." },
      { cardId: "axis-ace", badge: "Reliable floor", note: "1.5% on Flipkart, uncapped. Use when Flipkart card's 5% isn't applicable or as a general backup." },
    ],
    verdict: "**Axis Flipkart card is the clear winner** for Flipkart shopping — 5% with no cap. Pair it with Amazon Pay ICICI (free, 5% on Amazon) to cover India's two biggest e-commerce platforms at max rewards.",
    faq: [
      { q: "Does Axis Flipkart card give 5% on Flipkart Grocery?", a: "Flipkart Grocery orders placed through the Flipkart app typically qualify for the 5% rate. However, the MCC code determines the final rate — check your statement." },
      { q: "Axis Flipkart vs HDFC Millennia for Flipkart?", a: "Axis Flipkart wins: 5% with no cap vs Millennia's 5% with ₹1K/month shared cap. Millennia covers more platforms (Amazon, Swiggy), but for Flipkart specifically, the Axis card is better." },
      { q: "Does the 5% work during Flipkart sales?", a: "Yes, the 5% applies during Big Billion Days and all other Flipkart sales. No exclusions for sale-period purchases." },
    ],
  },

  {
    slug: "best-cashback-credit-card-no-annual-fee",
    title: "Best Cashback Credit Card with No Annual Fee in India (2026)",
    shortTitle: "Free Cards",
    description: "Best lifetime free credit cards in India ranked by actual cashback earned. No fee, real rewards.",
    icon: "💸",
    heroLine: "The best free credit cards — ranked by what you actually earn, not what they advertise.",
    categoryId: "default",
    testSpend: 30000,
    intro: `Why pay an annual fee when free cards can earn competitive rewards? The catch: most free cards have low base rates or hidden limitations. We ranked every lifetime-free card in our database by effective cashback on ₹30,000/month mixed spending.

The winners might surprise you.`,
    picks: [
      { cardId: "amazon-icici", badge: "Best free card for Amazon shoppers", note: "5% on Amazon (Prime) with no cap. If even 30% of your spending is Amazon, this card's effective rate beats most paid cards." },
      { cardId: "idfc-select", badge: "Most feature-rich free card", note: "Zero forex, 4 lounge visits, 5% birthday month, 2.5% above ₹20K spend. No other free card offers this combination of perks." },
      { cardId: "au-lit", badge: "Best customizable free card", note: "Choose your own 5% categories via Feature Packs. Active management required, but the reward potential is the highest among free cards." },
      { cardId: "idfc-wow", badge: "Best for international payments", note: "Zero forex markup on a free card. Essential if you pay for any international subscriptions or shop overseas." },
      { cardId: "kotak-811", badge: "Easiest to get", note: "1% online, easy approval. Not the best rewards, but the lowest barrier to entry. Good starter card to build credit." },
    ],
    verdict: "**Amazon Pay ICICI** is the best free card for most people — 5% on Amazon with no cap is genuinely excellent. Add **IDFC FIRST Select** for lounges, zero forex, and the birthday bonus. Total cost: ₹0. Combined effective rate on mixed spending: significantly better than most paid cards.",
    faq: [
      { q: "Are lifetime free cards really free forever?", a: "Yes. Lifetime free means no annual fee, ever. The bank may change terms in the future (rare), but you won't be charged fees retroactively." },
      { q: "Why do banks offer free cards?", a: "They earn from interchange fees (1.5-2% from merchants), interest on revolving balances, and cross-selling other products. Your spending generates revenue even without an annual fee." },
      { q: "Can a free card be as good as a paid one?", a: "For specific categories, yes. Amazon Pay ICICI (free) gives 5% on Amazon — matching paid cards like HDFC Millennia. But paid cards generally offer broader rewards, lounges, and perks." },
    ],
  },

  {
    slug: "credit-card-for-groceries",
    title: "Best Credit Card for Groceries in India (2026)",
    shortTitle: "Groceries",
    description: "Best credit cards for grocery shopping — BigBasket, Blinkit, DMart, and supermarkets. Category rates compared.",
    icon: "🥦",
    heroLine: "Groceries are where most cards fail. Only a few give more than 1% on your weekly shopping.",
    categoryId: "groceries",
    testSpend: 10000,
    intro: `Groceries are a blind spot for Indian credit cards. Most cards give 0.5-1% on grocery spending — essentially nothing on your ₹8,000-15,000 monthly grocery bill. Only a handful of cards treat groceries as a rewarded category.

We found the exceptions. Here's where to earn actual cashback on your BigBasket, Blinkit, DMart, and supermarket spending.`,
    picks: [
      { cardId: "rbl-shoprite", badge: "Highest grocery rate: 5%", note: "5% at grocery stores is unmatched. The 1,000 pts/month cap limits beneficial spend to ₹5,000/month (₹250 max cashback). For dedicated grocery rewards, nothing else comes close." },
      { cardId: "sbi-elite", badge: "Best premium grocery card", note: "2.5% on groceries is solid for a mainstream card. Plus BookMyShow BOGO and 14 lounge visits. The all-round premium card that also happens to reward groceries." },
      { cardId: "axis-ace", badge: "Best floor rate for groceries", note: "1.5% on groceries (uncapped). Not the highest, but reliably above average. And 5% on utility bills via GPay covers your household spending broadly." },
      { cardId: "au-lit", badge: "Best if you customize", note: "Set groceries as your Feature Pack category for up to 5%. Requires active management but the rate matches RBL ShopRite." },
    ],
    verdict: "**RBL ShopRite** is the clear winner for dedicated grocery spending at 5% (₹250/mo cap). Pair it with **Axis ACE** for everything else. If you want one card for groceries + other categories, **SBI ELITE** at 2.5% is the best compromise.",
    faq: [
      { q: "Does BigBasket/Blinkit count as grocery?", a: "It depends on the MCC code. Physical grocery stores reliably code as grocery. Online platforms like BigBasket may code as online shopping instead. Check your statement for the specific category." },
      { q: "Why don't more cards reward groceries?", a: "Groceries are high-frequency, low-margin transactions. Banks earn less interchange on grocery merchants, so they don't incentivize the category. This is why grocery-focused cards like ShopRite are rare." },
      { q: "Is 5% on groceries sustainable?", a: "RBL ShopRite caps it at 1,000 pts/month (₹250). This limits the bank's liability while giving genuine value to typical grocery spenders (up to ₹5K/month)." },
    ],
  },

  {
    slug: "credit-card-for-fuel",
    title: "Best Credit Card for Fuel / Petrol in India (2026)",
    shortTitle: "Fuel",
    description: "Best credit cards for fuel and petrol pumps. Most cards give 0% on fuel — here are the rare exceptions.",
    icon: "⛽",
    heroLine: "Almost every credit card in India excludes fuel from rewards. Here are the rare exceptions.",
    categoryId: "fuel",
    testSpend: 5000,
    intro: `Fuel is the most excluded category in Indian credit cards. HDFC, ICICI, SBI — nearly all major banks give 0% rewards on fuel transactions. The best most cards offer is a fuel surcharge waiver (saving 1% on the ₹500-₹3,000 transaction range).

Very few cards earn meaningful rewards at the pump.`,
    picks: [
      { cardId: "onecard", badge: "Possible fuel rewards (auto-detected)", note: "If fuel is your top spending category, OneCard's algorithm may select it for 5x points (~1%). Not guaranteed, but one of the few cards that can earn anything on fuel." },
      { cardId: "axis-ace", badge: "Best general card with fuel tolerance", note: "While Axis ACE officially excludes fuel from cashback, the 1.5% base rate may apply depending on the fuel station MCC. Plus fuel surcharge waiver on ₹400-₹5,000 transactions." },
    ],
    verdict: "**Honest truth: no widely-available card gives great fuel cashback.** Most cards give 0%. The best strategy is to use any card with a fuel surcharge waiver (saves 1%) and not overthink this category. For dedicated fuel cards, look at co-branded options like ICICI HPCL or BPCL SBI Octane (not yet in our database).",
    faq: [
      { q: "Why do cards exclude fuel?", a: "Fuel margins are razor-thin (1-2%), and interchange fees are low on fuel transactions. Banks earn almost nothing when you swipe at a petrol pump, so they exclude fuel from rewards to protect their economics." },
      { q: "What's a fuel surcharge waiver?", a: "Petrol pumps charge 1% extra for card payments (fuel surcharge). Many cards waive this on transactions between ₹400-₹5,000. This saves you 1% but doesn't earn additional cashback." },
      { q: "Does RBL ShopRite give 5% on fuel?", a: "No. Despite many sites claiming this, RBL ShopRite only gives a standard fuel surcharge waiver. The 5% rate applies only to grocery stores." },
    ],
  },

  {
    slug: "credit-card-for-utility-bills",
    title: "Best Credit Card for Utility Bills in India (2026)",
    shortTitle: "Utility Bills",
    description: "Best credit cards for electricity, water, broadband, and DTH bill payments. Up to 5% cashback.",
    icon: "💡",
    heroLine: "Your monthly bills can earn up to 5% cashback — most people earn 0%.",
    categoryId: "utilities",
    testSpend: 6000,
    intro: `Electricity, water, broadband, gas, DTH — recurring monthly bills add up to ₹5,000-10,000 for most households. Yet most credit cards give 0-1% on utility payments. Some even exclude utilities entirely.

One card changes this equation dramatically — and it works through a payment method you're already using.`,
    picks: [
      { cardId: "axis-ace", badge: "Best for bills: 5% via Google Pay", note: "5% on bill payments via Google Pay. Electricity, broadband, water, DTH, gas — all qualify. The ₹500/month accelerated cap means optimal bill spend is ₹10,000/month on bills+food combined." },
      { cardId: "sbi-cashback", badge: "5% on all online purchases", note: "5% on all online transactions (excluding utilities, insurance, rent, education, etc.). The ₹5,000/cycle cap (reducing to ₹4,000 with ₹2,000 online sub-cap from April 2026) still offers strong value for diverse online shoppers." },
      { cardId: "axis-ace", badge: "Also the best backup", note: "Even after hitting the ₹500 accelerated cap, ACE's 1.5% base on utility bills is above average. Most cards give 0%." },
    ],
    verdict: "**Axis ACE is the definitive bills card** — 5% via Google Pay on all utility payments. At ₹6K/month in bills, that's ₹300/month or ₹3,600/year. Pay your bills through GPay with ACE linked, and you're earning real money on expenses you can't avoid.",
    faq: [
      { q: "Does the 5% work on all bill types?", a: "Most utility bills paid through Google Pay qualify — electricity, water, broadband, DTH, piped gas. The bill must be paid using Axis ACE linked to Google Pay." },
      { q: "Why Google Pay specifically?", a: "Axis ACE's 5% on bills is a Google Pay partnership. Paying the same bill through Paytm, PhonePe, or the biller's website earns the base 1.5% rate instead." },
      { q: "What about rent payments?", a: "Rent payments via credit card are typically processed through third-party platforms that charge 1-2% fees. The cashback often doesn't offset the fee. We don't recommend paying rent via credit card unless the math works in your specific case." },
    ],
  },

  {
    slug: "credit-card-for-travel",
    title: "Best Credit Card for Travel & Flights in India (2026)",
    shortTitle: "Travel",
    description: "Best credit cards for flights, hotels, and travel bookings. Compare airline miles, travel cashback, and lounge access.",
    icon: "✈️",
    heroLine: "From SmartBuy's 13% to airline mile transfers — the best travel cards decoded.",
    categoryId: "travel",
    testSpend: 20000,
    intro: `Travel rewards are where credit cards deliver their highest value — but also their most complex math. SmartBuy portal rates, airline mile transfer ratios, lounge access tiers, and forex markups all affect the real value you extract.

We ranked cards by effective return on ₹20,000/month travel spend, factoring in all the variables.`,
    picks: [
      { cardId: "hdfc-infinia", badge: "Best overall (invite-only)", note: "~10% via SmartBuy (3X, reduced from 5X in Jan 2026), 3.33% base, unlimited lounge, earns on fuel. The ultimate card — if you can get the invite." },
      { cardId: "hdfc-diners-black", badge: "Best accessible premium", note: "SmartBuy Hotels 33.33% (10X), Flights 16.5% (5X), Vouchers ~6% net (3X). 1.66% cashback / 3.33% travel base. Unlimited lounge, waivable ₹10K fee." },
      { cardId: "axis-atlas", badge: "Best for airline miles", note: "5% on travel + transferable miles to Singapore Airlines, Qatar, and more. Best for premium cabin redemptions. 18 lounge visits." },
      { cardId: "hdfc-regalia", badge: "Best mid-tier travel card", note: "Up to 13.33% via SmartBuy, 12 domestic + 6 intl lounge visits (Priority Pass). Lower fee (₹2,500, waivable at ₹3L) makes it accessible for moderate travelers." },
      { cardId: "idfc-wow", badge: "Best free travel card", note: "Zero forex markup on a free card. Won't earn high rewards, but saves 1.5-3.5% on every international transaction." },
    ],
    verdict: "For domestic travel: **HDFC Diners Black or Regalia** with SmartBuy bookings. For international: add **IDFC FIRST WOW** for zero forex. For airline mile enthusiasts: **Axis Atlas** with transfers to premium carriers.",
    faq: [
      { q: "What's SmartBuy and why does it matter?", a: "HDFC SmartBuy is a booking portal that gives accelerated reward points on flights, hotels, and brand vouchers via Gyftr. Post-Jan 2026, the multiplier was reduced from 5X to 3X. It turns Regalia's 0.53% cashback into up to ~13.33% and Infinia's 3.33% into ~10%. If you have an HDFC card, always book travel through SmartBuy." },
      { q: "Are airline mile transfers worth it?", a: "For economy tickets, usually not — you get roughly 1:1 value. For business/first class, miles can deliver 3-5x value. If you ever fly premium cabins, mile transfers from Axis Atlas are extremely valuable." },
      { q: "Which card has the best lounge access?", a: "Unlimited: HDFC Infinia, HDFC Diners Black, ICICI Emeralde, AU Zenith+. 18/year: Axis Atlas, BOB Eterna. HDFC Regalia: 12 domestic + 6 intl (Priority Pass). SBI ELITE: 8 domestic + 6 intl. For most travelers, 12-18/year is more than enough." },
    ],
  },

  {
    slug: "credit-card-for-international-spending",
    title: "Best Credit Card for International Spending in India (2026)",
    shortTitle: "International",
    description: "Best credit cards for international transactions, zero forex markup, and overseas spending from India.",
    icon: "🌍",
    heroLine: "Forex markup can eat 3.5% of every international purchase. These cards fight back.",
    categoryId: "travel",
    testSpend: 15000,
    intro: `Every time you make an international transaction — shopping on a US website, paying for a SaaS subscription in USD, or swiping your card abroad — your bank charges 1.5-3.5% as forex markup. On ₹15,000/month in international spending, that's ₹225-525 lost to markup alone.

Two strategies fight this: zero forex cards (eliminate the markup) and high forex reward cards (earn enough to offset it).`,
    picks: [
      { cardId: "idfc-wow", badge: "Best zero forex (free)", note: "Zero forex markup on a lifetime free card. ₹15K/month international spend saves ₹225-525/month in markup. The 0.66% reward rate is low, but the forex savings dwarf any reward difference." },
      { cardId: "idfc-select", badge: "Zero forex + lounge + perks", note: "Same zero forex as WOW, plus 4 lounge visits, birthday month 5%, and 2.5% above ₹20K. Also free. The more feature-rich version." },
      { cardId: "icici-emeralde", badge: "Highest forex rewards: 2%", note: "2% on international transactions. But still charges forex markup (1.5-3.5%), so net cost is negative. Best for people who want rewards on top of markup, not instead of it." },
      { cardId: "au-zenith", badge: "2.5% forex rewards + unlimited lounge", note: "2.5% on international with unlimited lounge. Like Emeralde but with higher reward rate and unlimited lounge at a lower fee." },
      { cardId: "axis-atlas", badge: "Best for travel miles on forex", note: "2% on international spending plus airline mile transfers. For frequent international travelers who value miles over cashback." },
    ],
    verdict: "**IDFC FIRST WOW or Select** (both free) are the no-brainer choice. Zero forex saves more than any reward rate can earn back. Use WOW/Select for all international transactions, and your primary high-rewards card for domestic spending.",
    faq: [
      { q: "Is zero forex really zero?", a: "Yes. IDFC FIRST cards charge 0% markup. You pay the Visa network exchange rate with no bank margin. This is verified — not a promotional rate." },
      { q: "Do 2% forex rewards offset the markup?", a: "Typically no. If markup is 3.5% and rewards are 2%, you're still paying 1.5% net. Zero forex cards eliminate the problem entirely rather than partially offsetting it." },
      { q: "What about international ATM withdrawals?", a: "Zero forex applies to POS and online transactions. ATM withdrawals abroad may incur separate cash advance fees and interest regardless of forex markup. Avoid international ATM withdrawals on credit cards." },
      { q: "Which card for international Netflix/Spotify?", a: "IDFC FIRST WOW. Zero forex on a free card means your ₹649 Netflix plan costs ₹649, not ₹672 (with 3.5% markup). Small savings that add up over 12 months." },
    ],
  },

  // ─── pSEO PAGES: Long-tail keyword targets ───

  {
    slug: "best-credit-card-under-500-annual-fee",
    title: "Best Credit Cards Under ₹500 Annual Fee in India (2026)",
    shortTitle: "Under ₹500 Fee",
    description: "Best Indian credit cards with annual fees under ₹500. Cap-aware cashback math on budget cards that punch above their weight.",
    icon: "💸",
    heroLine: "Premium rewards on a budget — the best cards under ₹500/year.",
    categoryId: "online",
    testSpend: 10000,
    intro: `You don't need a ₹5,000/year card to earn serious rewards. Several cards under ₹500 annual fee offer 4-5% on key categories — some even waive the fee at ₹1-2L annual spend, making them effectively free.\n\nWe compared every card under ₹500 fee by what they actually earn after caps.`,
    picks: [
      { cardId: "axis-ace", badge: "Best overall under ₹500", note: "₹499/yr (waived at ₹2L). 5% on bills via GPay, 4% on Swiggy/Zomato/Ola, 1.5% everything else. ₹500/mo cap on accelerated, but 1.5% base is uncapped." },
      { cardId: "axis-flipkart", badge: "Best for Flipkart shoppers", note: "₹500/yr (waived at ₹3.5L). 5% on Flipkart/Myntra/Cleartrip, 4% on dining. No cap on 5% tier." },
      { cardId: "sbi-simplyclick", badge: "Best for online variety", note: "₹499/yr (waived at ₹1L). 5% on partner sites (Amazon, BookMyShow, Cleartrip), 2.5% on all online. 10x points on partner purchases." },
      { cardId: "hdfc-swiggy", badge: "Best for food delivery", note: "₹500/yr (waived at ₹2L). 10% on Swiggy ecosystem, 5% on online. The highest food delivery rate at this price point." },
      { cardId: "icici-coral", badge: "Best for lounge + dining", note: "₹500/yr (waived at ₹1.5L). 2 lounge visits/quarter, 5% on dining. If you value lounge access, this is cheapest way to get it." },
    ],
    verdict: "**Axis ACE at ₹499** is the best all-rounder under ₹500 — 5% on utility bills alone can earn ₹6,000/year. Pair it with HDFC Swiggy (₹500) for 10% on food delivery. Total: ₹999/year in fees for two powerful cards.",
    faq: [
      { q: "Can I get the fee waived on these cards?", a: "Yes — most waive the fee if you spend ₹1-3.5L/year. Axis ACE waives at ₹2L (easy to hit), Flipkart at ₹3.5L, SBI SimplyCLICK at ₹1L. Track your spending and request waiver before renewal." },
      { q: "Are free cards better than ₹500-fee cards?", a: "Not always. Axis ACE (₹499) outearns most free cards. Amazon ICICI (free) beats it on Amazon specifically. The ₹499 fee is worth it if you earn ₹500+ more in rewards than the best free alternative." },
    ],
  },

  {
    slug: "best-credit-card-for-beginners-india",
    title: "Best Credit Card for Beginners in India (2026)",
    shortTitle: "Beginners",
    description: "First credit card? These beginner-friendly cards have no annual fee, easy approval, and decent rewards. Cap-aware comparison inside.",
    icon: "🌱",
    heroLine: "Your first credit card — zero fees, easy approval, solid rewards.",
    categoryId: "online",
    testSpend: 8000,
    intro: `Getting your first credit card is confusing. Banks push premium cards with ₹5,000 fees and ₹8L income requirements. You don't need that.\n\nThe best beginner cards are lifetime free, have low income requirements (₹3-4L), and still earn 1-5% on your spending. Here's what actually makes sense for your first card.`,
    picks: [
      { cardId: "amazon-icici", badge: "Best first card overall", note: "Lifetime free, instant issuance, 5% on Amazon (Prime), 1% everywhere else. No income proof needed for existing ICICI customers. The easiest high-reward card to get." },
      { cardId: "onecard", badge: "Best app experience", note: "Lifetime free, metal card, 5x on top spending category (auto-detected). Excellent app with spend tracking. Income requirement: ₹3L+. Great for building credit history." },
      { cardId: "au-lit", badge: "Best for groceries + utilities", note: "Lifetime free, 3% on groceries and utilities, 1% everything else. AU Bank has easy approval for first-time cardholders." },
      { cardId: "kotak-811", badge: "Easiest to get", note: "Lifetime free, instant issuance for Kotak 811 account holders. 1% cashback on everything. Low limits but perfect for building credit history." },
      { cardId: "idfc-wow", badge: "Best if you travel", note: "Lifetime free, zero forex markup (saves 1.5-3.5% on every international transaction), 3% on travel. Rare for a free card." },
    ],
    verdict: "**Amazon Pay ICICI** if you shop online. **OneCard** if you want the best app experience. **IDFC FIRST WOW** if you travel internationally. All three are lifetime free — no risk of forgetting to cancel.",
    faq: [
      { q: "What income do I need for my first credit card?", a: "Most entry-level cards require ₹3-4L annual income. Amazon ICICI and Kotak 811 can be issued against FD (no income proof). IDFC FIRST cards have flexible approval criteria." },
      { q: "Will a credit card hurt my CIBIL score?", a: "No — it helps build credit history. Use less than 30% of your limit, pay full bill before due date, and your CIBIL score will improve within 6 months." },
      { q: "Should I get a free card or paid card first?", a: "Always start with a free card. Build 6-12 months of credit history, then upgrade to a rewards card if your spending justifies the fee." },
    ],
  },

  {
    slug: "best-credit-card-for-students-india",
    title: "Best Credit Cards for Students in India (2026)",
    shortTitle: "Students",
    description: "Credit cards for students with no income proof needed. Secured cards, add-on cards, and student-friendly options compared.",
    icon: "🎓",
    heroLine: "Student-friendly cards — no salary slip needed, decent rewards.",
    categoryId: "online",
    testSpend: 5000,
    intro: `Most students can't get a regular credit card — banks want income proof and credit history. But there are options: secured cards (against FD), add-on cards from parents, and student-specific products.\n\nHere's what actually works for students who want to start building credit early.`,
    picks: [
      { cardId: "kotak-811", badge: "Easiest for students", note: "Issue against ₹5,000 FD in Kotak 811 account. No income proof. 1% cashback. Credit limit = 80% of FD amount. Perfect for building credit history during college." },
      { cardId: "amazon-icici", badge: "Best if you have ICICI account", note: "If your parents' account is with ICICI or you have a student account, you may get instant approval. 5% on Amazon, lifetime free. Worth trying before secured cards." },
      { cardId: "onecard", badge: "Best app for tracking", note: "Approve based on alternative data (UPI history, etc.). Some students report approval with limited income documentation. 5x on top category. Metal card is a flex." },
      { cardId: "au-lit", badge: "Low barrier entry", note: "AU Bank is more flexible on approval criteria. Lifetime free, 3% on groceries. If you have a part-time income or freelance earnings, this is worth applying for." },
      { cardId: "idfc-wow", badge: "Best for travel students", note: "Zero forex markup. If you're studying abroad or buying international subscriptions (ChatGPT, Coursera, etc.), this saves 1.5-3.5% on every transaction." },
    ],
    verdict: "**Kotak 811 against FD** is the safest bet — guaranteed approval, builds credit history, costs nothing. Get Amazon ICICI as your second card once you have 6 months of history. **Don't apply for multiple cards at once** — each rejection hurts your CIBIL score.",
    faq: [
      { q: "Can students get credit cards in India?", a: "Yes — through secured cards (against FD), add-on cards from parents, or student-specific products. Kotak 811, SBI Unnati, and ICICI Student cards are designed for this." },
      { q: "What's a secured credit card?", a: "You deposit ₹5,000-₹25,000 in an FD with the bank. They issue a credit card with 80% of that as your limit. You earn FD interest + credit card rewards. Zero risk for the bank, so approval is guaranteed." },
      { q: "Will using a credit card help my future loan applications?", a: "Yes. A 12-month credit card history with on-time payments gives you a CIBIL score of 700+, which makes home loans, car loans, and personal loans cheaper and easier to get later." },
    ],
  },

  {
    slug: "best-credit-card-for-upi-payments",
    title: "Best Credit Card for UPI Payments in India (2026)",
    shortTitle: "UPI Payments",
    description: "Which credit cards work with UPI and earn rewards on RuPay UPI transactions? Compare Axis ACE, HDFC, and RuPay options.",
    icon: "📲",
    heroLine: "Credit card rewards on UPI — which cards actually work and earn cashback.",
    categoryId: "utilities",
    testSpend: 10000,
    intro: `RBI enabled credit cards on UPI in 2023, but adoption is patchy. Only RuPay credit cards work on all UPI apps. Visa/Mastercard cards work on specific apps (GPay for Axis, etc.).\n\nThe big question: do you actually earn rewards when paying via UPI? The answer is complicated — and varies by card.`,
    picks: [
      { cardId: "axis-ace", badge: "Best for GPay UPI", note: "5% on utility bills paid via Google Pay. This is the only major card that explicitly rewards UPI payments at an accelerated rate. ₹500/mo cap. Pay electricity, broadband, gas, insurance via GPay for 5%." },
      { cardId: "au-lit", badge: "Best RuPay option", note: "RuPay network — works on all UPI apps (PhonePe, GPay, Paytm, BHIM). 3% on groceries and utilities. RuPay cards get additional government incentives on UPI transactions." },
      { cardId: "hdfc-freedom", badge: "Budget RuPay option", note: "RuPay network, ₹500/yr fee. Works on all UPI apps. 2x rewards on select categories. HDFC's entry into the RuPay credit-on-UPI space." },
      { cardId: "kotak-811", badge: "Free RuPay card", note: "RuPay network, lifetime free. Works on all UPI apps. 1% cashback. The simplest way to use credit on UPI without complexity." },
      { cardId: "idfc-select", badge: "Best rewards on RuPay", note: "Lifetime free, RuPay variant available. 3x rewards on online, 2x on others. Works on all UPI apps." },
    ],
    verdict: "**Axis ACE via GPay** is the highest-earning combo for UPI — 5% on utility bills is unmatched. For universal UPI access (all apps), get a **RuPay credit card** — AU LIT or Kotak 811 are the best free options.",
    faq: [
      { q: "Do all credit cards work on UPI?", a: "No. Only RuPay credit cards work on all UPI apps. Visa/Mastercard cards have limited UPI support — Axis works on GPay, some HDFC cards on PhonePe. Check your card network before trying." },
      { q: "Do I earn rewards on UPI transactions?", a: "It depends on the card. Axis ACE explicitly gives 5% on GPay utility payments. Most other cards give standard base rate (1-1.5%) on UPI. RuPay cards may get government incentives (0.5-1% additional)." },
      { q: "Is there a limit on credit card UPI transactions?", a: "RBI caps credit card UPI at ₹1L per transaction. Some apps have lower limits (₹50K on PhonePe). No daily cap specified by RBI, but individual banks may set limits." },
    ],
  },

  {
    slug: "best-credit-card-for-dining-restaurants",
    title: "Best Credit Card for Dining & Restaurants in India (2026)",
    shortTitle: "Dining",
    description: "Best credit cards for restaurant dining in India. Compare HDFC Regalia, ICICI Coral, SBI ELITE, and more with real cashback calculations.",
    icon: "🍽️",
    heroLine: "Dine-out rewards that actually add up — after caps and fine print.",
    categoryId: "dining",
    testSpend: 10000,
    intro: `Dining is one of the highest-reward categories across Indian credit cards. Multiple cards offer 5%+ on restaurants and food delivery. But dining vs food delivery MCC codes differ, and caps limit your earnings.\n\nAt ₹10,000/month dining spend (mix of restaurants and delivery), here's what each card actually earns you.`,
    picks: [
      { cardId: "hdfc-regalia", badge: "Best for restaurant dining", note: "5x reward points on dining (1.33% effective). But the real value is SmartBuy at 13.33% and unlimited lounge access. Dining is a bonus, not the main value proposition." },
      { cardId: "hdfc-swiggy", badge: "Best for delivery dining", note: "10% on Swiggy ecosystem (including Dineout for restaurant reservations). If you book through Swiggy Dineout, even restaurant dining earns 10%. ₹1,500/mo Swiggy cap." },
      { cardId: "hdfc-millennia", badge: "Best for mixed dining", note: "5% on Swiggy + Zomato + restaurants that code as dining. ₹1,000/mo shared cap across all 5% categories." },
      { cardId: "icici-coral", badge: "Best budget dining card", note: "₹500/yr. 5% on dining (2 PAYBACK points per ₹100). Plus 2 domestic lounge visits/quarter. Best value for someone who dines out 2-3 times/month." },
      { cardId: "sbi-elite", badge: "Best for premium dining", note: "₹4,999/yr. 5x rewards on dining = 2.5% effective (at ₹0.50/point). Plus complimentary dining privileges through Dining Delights program." },
    ],
    verdict: "For food delivery: **HDFC Swiggy (10%)**. For restaurants: **ICICI Coral (5%, cheap)**. For a mix of both: **HDFC Millennia (5% on everything food-related)**. Pair Swiggy card with Millennia for maximum coverage.",
    faq: [
      { q: "Do restaurants and food delivery earn the same rewards?", a: "Not always. Restaurants typically use MCC 5812 (dining). Swiggy/Zomato may code as 5812, 5499 (food stores), or 5811 (caterers) depending on the card issuer. HDFC Millennia covers them all; some cards don't." },
      { q: "Does Swiggy Dineout count for the HDFC Swiggy card?", a: "Yes — Swiggy Dineout is part of the Swiggy ecosystem and earns 10% on the HDFC Swiggy card, subject to the ₹1,500/mo Swiggy cap." },
    ],
  },

  {
    slug: "best-credit-card-for-movie-entertainment",
    title: "Best Credit Card for Movies & Entertainment in India (2026)",
    shortTitle: "Entertainment",
    description: "Best credit cards for BookMyShow, PVR, Netflix, Spotify, and entertainment spending. Cashback rates compared with cap math.",
    icon: "🎬",
    heroLine: "Movie tickets, OTT subscriptions, and events — which card earns you the most.",
    categoryId: "entertainment",
    testSpend: 5000,
    intro: `Entertainment spending — movies, OTT subscriptions, concerts, gaming — is a growing category. Some cards offer 5-10% on BookMyShow and streaming services, but caps and partner restrictions limit the real value.\n\nAt ₹5,000/month entertainment spend, here's the honest breakdown.`,
    picks: [
      { cardId: "hdfc-millennia", badge: "Best for BookMyShow", note: "5% on BookMyShow (partner rate). Plus Swiggy, Amazon, Flipkart. ₹1,000/mo shared cap across all 5% partners." },
      { cardId: "axis-myzone", badge: "Built for entertainment", note: "10% on Swiggy/Zomato, 5% on dining, 4x on entertainment. Design specifically for millennials who spend on food and entertainment." },
      { cardId: "sbi-simplyclick", badge: "Best for OTT subscriptions", note: "5% on partner sites (includes select entertainment platforms). 10x points on online purchases. ₹499/yr." },
      { cardId: "hdfc-swiggy", badge: "Best for Swiggy + movies combo", note: "10% on Swiggy ecosystem + 5% on online (which includes most OTT subscriptions). ₹500/yr." },
      { cardId: "axis-ace", badge: "Best for streaming via GPay", note: "If you pay Netflix/Hotstar/Spotify via Google Pay, Axis ACE gives 5% (utility/digital payments via GPay). ₹500/mo cap." },
    ],
    verdict: "Entertainment spending is fragmented — no single card dominates. **HDFC Millennia** covers BookMyShow + most online entertainment. **Axis ACE via GPay** works for streaming subscriptions. Pair them for full coverage.",
    faq: [
      { q: "Do Netflix and Spotify count as entertainment or online?", a: "Depends on the card issuer. Most classify OTT subscriptions as 'online purchases' (MCC 5968 or 5815). Some classify them as entertainment. Check your statement to confirm which rate applies." },
      { q: "Do I get rewards on BookMyShow convenience fee?", a: "Yes — the reward is calculated on the total transaction amount including convenience fee. The fee itself becomes slightly less painful with 5% cashback." },
    ],
  },

  {
    slug: "best-credit-card-for-bill-payments",
    title: "Best Credit Card for Bill Payments in India (2026)",
    shortTitle: "Bill Payments",
    description: "Best credit cards for paying electricity, broadband, mobile, insurance, and utility bills. Axis ACE vs alternatives compared.",
    icon: "🧾",
    heroLine: "5% on electricity, broadband, and mobile bills — if you know the right card.",
    categoryId: "utilities",
    testSpend: 12000,
    intro: `Utility bills are unavoidable monthly spending — electricity, broadband, mobile recharge, gas, water, insurance premiums. The right card turns this mandatory spending into meaningful rewards.\n\nAt ₹12,000/month in bills, the difference between 1% and 5% is ₹5,760/year. Here's which cards maximize bill payment rewards.`,
    picks: [
      { cardId: "axis-ace", badge: "King of bill payments", note: "5% on utility bills via Google Pay. Electricity, broadband, mobile, DTH, gas, water — all at 5%. ₹500/mo cap = first ₹10K earns 5%, rest drops to 1.5%. Still the best option by far." },
      { cardId: "au-lit", badge: "Best free alternative", note: "Lifetime free. 3% on utilities (electricity, water, gas). No cap specified. If your bills exceed ₹10K/mo (ACE's cap), AU LIT handles the overflow at 3%." },
      { cardId: "onecard", badge: "Auto-detects top category", note: "5x on your highest spending category. If utilities are your top spend, OneCard auto-gives 5% on all bills. Lifetime free, no cap." },
      { cardId: "sbi-cashback", badge: "5% on all online bills", note: "If you pay bills through online portals (not in-person), SBI Cashback gives 5% as online transaction. ₹5,000/cycle cap (changing April 2026)." },
      { cardId: "axis-ace", badge: "Pair with itself (GPay only)", note: "Important: the 5% only works when paying via Google Pay. Direct bank/biller payments earn 1.5%. Always route utility bills through GPay for the 5% rate." },
    ],
    verdict: "**Axis ACE via Google Pay is the undisputed winner** for bill payments. First ₹10K/month at 5% = ₹500/month = ₹6,000/year. Pair with AU LIT (free, 3%) for bills above the ₹10K cap. Route ALL bills through GPay.",
    faq: [
      { q: "Does Axis ACE give 5% on all bill payments?", a: "Only when paid through Google Pay. Direct payments to billers earn the base 1.5% rate. The 5% is specifically for utility bill payments routed through GPay." },
      { q: "What counts as a utility bill?", a: "Electricity, water, gas, broadband, mobile postpaid, DTH, and landline. Insurance premiums and rent usually don't qualify as utility payments." },
      { q: "Is there a cap on Axis ACE's 5% bill payments?", a: "Yes — ₹500/month total cashback on accelerated categories. At 5%, that means first ₹10,000 in bills earns 5%. Everything above earns the base 1.5%." },
    ],
  },

  {
    slug: "best-credit-card-for-rent-payment",
    title: "Best Credit Card for Rent Payment in India (2026)",
    shortTitle: "Rent Payments",
    description: "Can you pay rent with a credit card? Which platforms and cards give the best effective reward after transaction fees? Full analysis.",
    icon: "🏠",
    heroLine: "Paying rent with credit cards — does the math actually work after platform fees?",
    categoryId: "utilities",
    testSpend: 25000,
    intro: `Platforms like CRED, NoBroker, Paytm, and MagicBricks let you pay rent via credit card. But they charge 1-2% processing fee. If your card earns less than the fee, you're losing money.\n\nWe calculated the break-even: which cards earn enough to offset the platform fee and still come out ahead.`,
    picks: [
      { cardId: "hdfc-infinia", badge: "Best for rent payments", note: "3.33% flat reward rate. Platform charges 1-1.5%. Net effective: 1.83-2.33% earning on rent. On ₹25K rent, that's ₹458-₹583/month net positive." },
      { cardId: "hdfc-diners-black", badge: "Strong alternative", note: "3.33% effective (same as Infinia). If you have either of these super-premium cards, paying rent via CRED/NoBroker is profitable after fees." },
      { cardId: "hdfc-regalia", badge: "Marginal positive", note: "1.33% effective. With 1% platform fee, net: 0.33%. Barely positive. Not worth the effort unless you're chasing lounge milestones or fee waiver spend." },
      { cardId: "axis-atlas", badge: "Good for travel points", note: "2% in Edge Miles (can be 5% on travel redemption). After 1% platform fee, you net 1% in miles = potentially 4% on travel. Good if you redeem for flights." },
      { cardId: "amazon-icici", badge: "Break-even at best", note: "1% reward (Amazon Pay balance). With 1% platform fee, you break even — no net gain. Only worth it if you need to hit spend targets for fee waiver on another card." },
    ],
    verdict: "Rent payment via credit card **only makes sense with 2.5%+ reward rate cards** — HDFC Infinia, Diners Black, or travel cards where miles multiply value. For most cards earning 1-1.5%, the platform fee eats all rewards. **Don't pay rent on a 1% card** — you'll lose money.",
    faq: [
      { q: "Which platform has the lowest fee for rent payment?", a: "CRED: 1-1.5%. NoBroker: 1.5%. Paytm: 1.5-2%. MagicBricks: 1%. Fees change frequently — check before paying. Some offer cashback that partially offsets the fee." },
      { q: "Does rent payment count toward fee waiver spend?", a: "Yes — most banks count platform-processed rent payments toward annual spend for fee waiver calculation. Useful for hitting ₹3L-₹5L spend targets on premium cards." },
      { q: "Will my landlord know I paid via credit card?", a: "No — the platform transfers money to your landlord's bank account via NEFT/IMPS. They receive a normal bank transfer." },
    ],
  },

  {
    slug: "best-credit-card-for-insurance-premium",
    title: "Best Credit Card for Insurance Premium Payments in India (2026)",
    shortTitle: "Insurance Premiums",
    description: "Earn rewards on your annual insurance premium payments. Which cards give cashback on health, term, and car insurance?",
    icon: "🛡️",
    heroLine: "Turn your insurance premium into credit card rewards — the cards that work.",
    categoryId: "utilities",
    testSpend: 50000,
    intro: `Insurance premiums are large annual payments — ₹20K-₹1L+ for health, term life, car, and home insurance. The right credit card can earn 1-5% on these payments.\n\nBut insurance premium payments sometimes code differently (MCC 6300 or 5960) and some cards exclude insurance from rewards. Here's what actually works.`,
    picks: [
      { cardId: "hdfc-infinia", badge: "Best for large premiums", note: "3.33% on everything including insurance. On a ₹50K annual premium, that's ₹1,665 back. No exclusion for insurance payments." },
      { cardId: "axis-ace", badge: "Best if paid via GPay", note: "Some insurance companies accept payment via Google Pay. If yours does, Axis ACE gives 5% (up to ₹500/mo cap). Check if your insurer supports GPay." },
      { cardId: "au-zenith", badge: "Best flat rate for insurance", note: "3.5% on everything including insurance premiums. Higher than Infinia but higher fee (₹4,999/yr). Worth it if your total annual premiums exceed ₹1.5L." },
      { cardId: "onecard", badge: "Potential 5x if auto-detected", note: "If insurance is your top spending category in a month (pay all premiums in one month), OneCard may auto-apply 5x rewards. Worth testing with a small premium first." },
      { cardId: "sbi-cashback", badge: "5% if paid online", note: "If you pay insurance premium through the insurer's website (online transaction), SBI Cashback gives 5%. Subject to the ₹5,000/cycle cap." },
    ],
    verdict: "Pay insurance premiums with your **highest flat-rate card** — Infinia (3.33%), AU Zenith+ (3.5%), or SBI Cashback (5% online). On ₹1L annual premiums, the right card earns ₹3,300-₹5,000 back. Always pay annual (not monthly) to minimize processing charges.",
    faq: [
      { q: "Do all cards give rewards on insurance premiums?", a: "Most do, but some exclude insurance payments (MCC 6300) from reward calculations. Check your card's terms. HDFC Infinia, AU Zenith+, and SBI Cashback are confirmed to reward insurance payments." },
      { q: "Should I pay insurance via credit card or bank transfer?", a: "Credit card if your card earns 2%+. The 1-2% rewards offset the small convenience charge (if any). Some insurers offer 0% convenience fee for card payments." },
    ],
  },

  {
    slug: "best-credit-card-for-emi-purchases",
    title: "Best Credit Card for EMI Purchases in India (2026)",
    shortTitle: "EMI Purchases",
    description: "Which credit cards offer the best no-cost EMI options? Do you still earn rewards on EMI? Everything you need to know.",
    icon: "📋",
    heroLine: "No-cost EMI sounds great — but do you lose rewards? Here's the full picture.",
    categoryId: "shopping",
    testSpend: 20000,
    intro: `No-cost EMI on credit cards is massively popular for electronics, appliances, and big purchases. But there's a catch: most cards don't earn reward points on EMI transactions.\n\nAlso, "no-cost EMI" isn't truly free — the discount you'd get on full payment is usually removed. Here's the honest math.`,
    picks: [
      { cardId: "hdfc-millennia", badge: "Best for partner EMI", note: "HDFC offers no-cost EMI on Amazon, Flipkart, and most major electronics stores. Millennia doesn't earn 5% on EMI transactions (points often reversed after first EMI), but the EMI itself is genuinely 0% interest." },
      { cardId: "axis-flipkart", badge: "Best for Flipkart EMI", note: "No-cost EMI on Flipkart purchases. 5% reward is not earned on EMI transactions. But Flipkart often offers exclusive EMI-only pricing that can be better than full-payment price." },
      { cardId: "sbi-cashback", badge: "Widest EMI network", note: "SBI has no-cost EMI partnerships with most major retailers. Low processing fee (₹99-₹199). Cashback is NOT earned on EMI transactions." },
      { cardId: "amazon-icici", badge: "Best for Amazon EMI", note: "Seamless no-cost EMI on Amazon. 5% reward is typically not earned on EMI. But Amazon's EMI pricing is often the same as full-payment price, making it genuinely free." },
      { cardId: "hdfc-infinia", badge: "If you must earn rewards + EMI", note: "Some super-premium cards don't reverse points on EMI. Infinia may retain rewards on select EMI transactions — but this is inconsistent. Ask HDFC before relying on it." },
    ],
    verdict: "**Don't choose a card based on EMI features.** Choose based on regular spend rewards. Use EMI when the purchase is genuinely 0% interest and the price isn't inflated. For electronics, compare EMI price vs full-payment price — if they're the same, EMI is free money. If not, pay in full and earn rewards.",
    faq: [
      { q: "Do credit cards earn rewards on EMI purchases?", a: "Almost never. Most banks reverse reward points after the first EMI installment. This is standard across HDFC, Axis, SBI, and ICICI. Treat EMI as a financing option, not a rewards opportunity." },
      { q: "Is no-cost EMI really free?", a: "The bank doesn't charge you interest. But the merchant may remove the instant discount or list a higher price for EMI. Compare EMI price vs full-payment price before deciding." },
      { q: "Does EMI affect my credit score?", a: "Yes — EMI reduces your available credit limit and shows as an outstanding balance on your credit report. Too many active EMIs can lower your CIBIL score by 10-20 points." },
    ],
  },

  {
    slug: "best-credit-card-for-lounge-access",
    title: "Best Credit Card for Airport Lounge Access in India (2026)",
    shortTitle: "Lounge Access",
    description: "Best credit cards for domestic and international airport lounge access in India. Compare complimentary visits, networks, and guest policies.",
    icon: "✈️",
    heroLine: "Free airport lounges — which cards give the most visits at the lowest cost.",
    categoryId: "travel",
    testSpend: 10000,
    intro: `Airport lounge access has become a primary reason Indians get premium credit cards. A single lounge visit costs ₹800-₹2,000. Cards offering 4-12+ complimentary visits save ₹3,200-₹24,000/year.\n\nBut lounge policies vary wildly — domestic vs international, guest charges, network restrictions. Here's the honest comparison.`,
    picks: [
      { cardId: "hdfc-infinia", badge: "Unlimited worldwide lounges", note: "Unlimited Priority Pass visits (domestic + international). Guest at ₹2,000. The gold standard. But ₹12,500/yr fee and invite-only." },
      { cardId: "hdfc-diners-black", badge: "Unlimited domestic + international", note: "Unlimited domestic (via DreamFolks) + unlimited international (Priority Pass). ₹10,000/yr fee (waived at ₹5L). Best value if you travel frequently." },
      { cardId: "hdfc-regalia", badge: "Best mid-range for lounges", note: "6 domestic + 6 international lounges per year. ₹2,500/yr (waived at ₹3L). 12 total visits = ₹12,000-₹24,000 value. Best ratio of fee to lounge benefit." },
      { cardId: "icici-sapphiro", badge: "Good domestic coverage", note: "4 domestic + 4 international per quarter (16 total/year). ₹3,500/yr. Generous for the price — nearly as many visits as Regalia at slightly higher fee." },
      { cardId: "icici-coral", badge: "Cheapest lounge card", note: "₹500/yr. 2 domestic lounge visits per quarter (8/year). No international. The cheapest way to get any lounge access. Perfect for occasional travelers." },
    ],
    verdict: "**ICICI Coral (₹500/yr)** for occasional domestic travel — 8 visits/year is enough. **HDFC Regalia (₹2,500/yr)** for regular travelers — 12 visits covers most people. **HDFC Diners Black/Infinia** only if you travel 10+ times/year internationally.",
    faq: [
      { q: "Can I bring guests to airport lounges?", a: "Most cards allow guests at ₹1,000-₹2,000 per visit. HDFC Infinia charges ₹2,000/guest. Some lounges allow children under 2 for free. Always check the specific lounge's policy." },
      { q: "What lounge network do Indian cards use?", a: "Domestic: DreamFolks (most common), Priority Pass (premium cards). International: Priority Pass, DragonPass, LoungeKey. HDFC uses DreamFolks domestically and Priority Pass internationally." },
      { q: "Do lounge visits work at all Indian airports?", a: "Major airports (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata) have multiple lounges. Smaller airports may have 1-2 lounges or none. Check the DreamFolks/Priority Pass app for your airport." },
    ],
  },

  {
    slug: "best-credit-card-for-health-insurance-payment",
    title: "Best Credit Card for Health Insurance Premium Payment (2026)",
    shortTitle: "Health Insurance",
    description: "Pay your health insurance premium with the right credit card and earn ₹1,500-₹5,000 back annually. Best cards for insurance payments.",
    icon: "❤️",
    heroLine: "Your annual health insurance premium can earn you serious rewards — if you use the right card.",
    categoryId: "utilities",
    testSpend: 30000,
    intro: `Health insurance premiums for families range from ₹15,000 to ₹60,000/year. That's a large mandatory expense that deserves the best possible card. Most health insurers accept credit card payments with zero or minimal surcharge.\n\nHere's which cards earn the most on insurance premium payments.`,
    picks: [
      { cardId: "au-zenith", badge: "Highest flat rate", note: "3.5% on everything including insurance. On ₹30K premium, earn ₹1,050. On ₹60K family floater, earn ₹2,100. No cap on this category." },
      { cardId: "hdfc-infinia", badge: "Best premium card option", note: "3.33% on insurance. On ₹30K premium = ₹1,000 back. If you already have Infinia, this is a no-brainer." },
      { cardId: "sbi-cashback", badge: "5% if paid online", note: "Pay through the insurer's website for 5% cashback. On ₹30K = ₹1,500. But subject to ₹5K/cycle cap (shared with all online spend)." },
      { cardId: "axis-ace", badge: "Best budget option", note: "If your insurer accepts GPay, pay via GPay for 5%. Otherwise 1.5% base rate. ₹500/mo cap." },
      { cardId: "hdfc-regalia", badge: "Lounge value bonus", note: "1.33% on insurance, but paying a large premium in one shot helps hit the ₹3L fee waiver threshold. Think of it as fee waiver contribution + some rewards." },
    ],
    verdict: "**SBI Cashback (5% online)** if you have room in your monthly cap. **AU Zenith+ (3.5%)** for guaranteed uncapped return. Always pay the annual premium in one shot (not monthly) to maximize rewards and avoid installment charges.",
    faq: [
      { q: "Do insurance companies charge extra for credit card payment?", a: "Most don't — Star Health, HDFC Ergo, ICICI Lombard, and Care Health accept credit cards with zero surcharge. Some smaller insurers charge 1-2%. Check before paying." },
      { q: "Can I pay health insurance premium via EMI on credit card?", a: "Some insurers offer EMI options through bank partnerships. But EMI transactions typically don't earn reward points. Pay in full to earn rewards." },
    ],
  },

  {
    slug: "best-credit-card-with-no-forex-markup",
    title: "Best Credit Card with Zero Forex Markup in India (2026)",
    shortTitle: "Zero Forex",
    description: "Best Indian credit cards with no foreign currency markup. Save 1.5-3.5% on every international transaction. IDFC WOW, Axis Atlas, and more.",
    icon: "🌐",
    heroLine: "International transactions without the 1.5-3.5% markup tax — these cards save real money.",
    categoryId: "travel",
    testSpend: 15000,
    intro: `Most Indian credit cards charge 1.5-3.5% forex markup on international transactions. On a ₹15,000 international purchase, that's ₹225-₹525 lost to markup alone. A few cards charge zero markup — effectively giving you 1.5-3.5% extra on every international transaction.\n\nIf you shop internationally (even Netflix, ChatGPT, or AWS), a zero-forex card saves real money.`,
    picks: [
      { cardId: "idfc-wow", badge: "Best free zero-forex card", note: "Lifetime free. Zero forex markup. 3% on travel. The only free card in India with truly zero international charges. Netflix, Spotify, ChatGPT, international shopping — all at zero markup." },
      { cardId: "idfc-select", badge: "Free + better rewards", note: "Lifetime free. Zero forex. Higher rewards than WOW (3x online, 2x others). If you want zero forex AND decent rewards, Select edges out WOW." },
      { cardId: "axis-atlas", badge: "Best for travel redemption", note: "₹5,000/yr. Zero forex. 2% in Edge Miles (up to 5% on travel portal redemption). Best if you fly frequently — miles add up fast on international spend." },
      { cardId: "axis-magnus", badge: "Premium zero-forex", note: "₹12,500/yr. Zero forex. Higher mile earning rate than Atlas. For high international spenders (₹50K+/month international transactions)." },
      { cardId: "hdfc-infinia", badge: "Premium but 2% markup", note: "Infinia has 2% forex markup — BUT 3.33% reward rate means you still net 1.33% on international transactions. Positive but not as good as zero-forex cards." },
    ],
    verdict: "**IDFC FIRST WOW** is the clear winner for most people — zero forex on a free card. If you travel frequently, **Axis Atlas** adds miles on top of zero markup. Don't use HDFC/SBI/ICICI cards internationally unless you have Infinia/Diners Black.",
    faq: [
      { q: "What is forex markup?", a: "A fee charged by the card issuer (1.5-3.5%) on top of the Visa/Mastercard exchange rate for international transactions. Zero forex cards don't charge this markup, so you pay only the base exchange rate." },
      { q: "Does forex markup apply to online international purchases?", a: "Yes — Netflix, ChatGPT, AWS, App Store, Steam, international shopping — all charged forex markup unless your card has zero markup. IDFC FIRST WOW saves ₹225-₹525 per ₹15,000 in such purchases." },
      { q: "Is DCC the same as forex markup?", a: "No. Dynamic Currency Conversion (DCC) is when a merchant converts to INR at their rate (usually 3-5% worse). Always choose to pay in the local currency and let your card handle conversion. DCC + forex markup is double loss." },
    ],
  },

  {
    slug: "best-credit-card-for-women-india",
    title: "Best Credit Cards for Women in India (2026)",
    shortTitle: "Women",
    description: "Credit cards designed for women with lower fees, higher rewards on shopping, dining, and wellness. Honest comparison with cap math.",
    icon: "👩",
    heroLine: "Women-specific cards vs regular cards — which actually gives better value?",
    categoryId: "shopping",
    testSpend: 12000,
    intro: `Several banks offer women-specific credit cards with tailored benefits — lower fees, higher rewards on shopping/wellness, fuel surcharge waivers, and partner discounts.\n\nBut are these cards genuinely better, or just marketing? We compared women's cards against the best general-purpose cards to find out.`,
    picks: [
      { cardId: "hdfc-millennia", badge: "Best unisex alternative", note: "Not a women's card, but 5% on Amazon, Flipkart, Myntra, Swiggy covers most shopping and food needs. ₹1,000/yr. Often better than dedicated women's cards." },
      { cardId: "axis-ace", badge: "Best for bill-paying women", note: "5% on utility bills via GPay. If you manage household expenses (electricity, broadband, gas), this card earns more than any women-specific card on those categories." },
      { cardId: "amazon-icici", badge: "Best for Amazon shoppers", note: "5% on Amazon, lifetime free. Better rewards on online shopping than most women-specific cards that offer 2-3% on generic shopping." },
      { cardId: "onecard", badge: "Best lifestyle card", note: "Lifetime free, 5x on top category. If shopping is your #1 spend, OneCard auto-gives the highest rate. Metal card, great app, no gender-specific marketing." },
      { cardId: "au-lit", badge: "Best for groceries", note: "3% on groceries and utilities. Lifetime free. If grocery shopping is a significant expense, AU LIT earns more than women-specific cards on this category." },
    ],
    verdict: "Honestly, **most women-specific cards offer worse rewards than the best general cards**. Banks use the 'women's card' label for marketing but the math doesn't add up. Pick cards based on your spending pattern, not your gender. HDFC Millennia + Amazon ICICI covers most shopping needs better than any women-specific option.",
    faq: [
      { q: "Are women's credit cards worth it?", a: "Usually no — they offer lower rewards than the best general-purpose cards. The 'women's' branding is mostly marketing. Compare the actual cashback rates, not the card name." },
      { q: "Do women get easier credit card approval?", a: "No difference in approval criteria. Income requirements and CIBIL score thresholds are the same. Some banks offer lower income requirements on entry-level cards regardless of gender." },
    ],
  },

  {
    slug: "best-credit-card-for-high-income-earners",
    title: "Best Credit Card for High Income Earners in India (2026) — ₹15L+ Salary",
    shortTitle: "High Income (₹15L+)",
    description: "Premium and super-premium credit cards for Indians earning ₹15L+. HDFC Infinia, Diners Black, Axis Magnus compared with real math.",
    icon: "💎",
    heroLine: "When your income crosses ₹15L — which premium card actually justifies the fee.",
    categoryId: "travel",
    testSpend: 50000,
    intro: `At ₹15L+ income, you qualify for premium cards with ₹5,000-₹12,500 annual fees. These cards offer 2-3.33% flat rewards, unlimited lounge access, and concierge services.\n\nBut do the rewards justify the fees? We calculated the break-even spend for each card.`,
    picks: [
      { cardId: "hdfc-infinia", badge: "Best super-premium card", note: "3.33% flat on everything. Unlimited lounge (Priority Pass). SmartBuy 13-33% on travel. ₹12,500/yr. Break-even: ₹3.75L/year spend. Invite-only — need ₹8L+ income or ₹10L+ relationship with HDFC." },
      { cardId: "hdfc-diners-black", badge: "Best if you can't get Infinia", note: "3.33% effective (same as Infinia). Unlimited lounge. ₹10,000/yr (waived at ₹5L). Easier to get than Infinia — apply directly with ₹10L+ income." },
      { cardId: "axis-atlas", badge: "Best for frequent flyers", note: "2% in Edge Miles (5% on travel redemption). ₹5,000/yr. Zero forex. If you fly 4+ times/year, Atlas earns more value than Infinia on travel specifically." },
      { cardId: "au-zenith", badge: "Highest flat rate in India", note: "3.5% on everything. ₹4,999/yr. No lounge but highest cashback rate. Break-even: ₹1.43L/year. Best if you don't care about lounge and want pure cashback." },
      { cardId: "axis-magnus", badge: "Ultra-premium travel", note: "₹12,500/yr. 12 Edge Miles per ₹200 (higher than Atlas). Unlimited lounge. Zero forex. For international frequent flyers spending ₹30L+/year." },
    ],
    verdict: "**HDFC Infinia** if you can get it (invite-only). **HDFC Diners Black** if you can't. **AU Zenith+** if you want highest flat cashback without premium card hassle. The key metric: your annual spend must exceed the break-even point (₹1.5-4L depending on card) for the fee to be worth paying.",
    faq: [
      { q: "How to get HDFC Infinia?", a: "Invite-only. Criteria: ₹8L+ annual income OR ₹10L+ total relationship with HDFC (savings + FD + investments). Existing Regalia holders spending ₹8-10L/year often get upgrade offers." },
      { q: "Is it worth paying ₹10,000-₹12,500 for a credit card?", a: "Only if your annual spend exceeds ₹3-4L. At ₹50K/month spend, Infinia earns ₹20,000/year in rewards + ₹15,000+ in lounge value. Net gain: ₹22,500+. The fee pays for itself 2x over." },
    ],
  },

];
