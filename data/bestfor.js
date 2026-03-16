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
      { q: "Is 5% cashback really 5%?", a: "Check the caps. HDFC Millennia's 5% is capped at ₹1,000/month (₹20K beneficial spend). SBI Cashback's 5% is capped at ₹5,000/cycle. Amazon ICICI's 5% has no cap. The effective rate depends on your spending volume." },
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
      { cardId: "hdfc-swiggy", badge: "Highest rate: 10% on Swiggy", note: "10% cashback on Swiggy is unmatched. But it's Swiggy-only (not Zomato), capped at ₹1,500/month combined across all accelerated categories, and requires ₹100 minimum per order." },
      { cardId: "hdfc-millennia", badge: "Best for Swiggy + Zomato", note: "5% on both Swiggy AND Zomato (plus Amazon, Flipkart, etc.). More versatile than the Swiggy card but lower rate. ₹1,000/month shared cap." },
      { cardId: "axis-ace", badge: "Best backup after cap", note: "4% on Swiggy/Zomato/Ola with a ₹500/month accelerated cap. Once your primary card's cap is hit, switch to ACE for the overflow at 4%." },
      { cardId: "axis-flipkart", badge: "Strong alternative", note: "4% on Swiggy with no explicit cap on the 4% tier. If you've hit Millennia's ₹1K cap, Flipkart card continues earning 4%." },
      { cardId: "sbi-elite", badge: "Best for restaurant dining", note: "2.5% on dining (including delivery platforms that code as dining). Better for restaurant bills than delivery-specific cashback." },
    ],
    verdict: "If you use **only Swiggy**: HDFC Swiggy card (10%) is the clear winner up to ₹15K/month. If you use **both Swiggy and Zomato**: HDFC Millennia (5% on both) is more practical. Pair either with Axis ACE for overflow after caps.",
    faq: [
      { q: "Does HDFC Swiggy card work on Zomato?", a: "The 10% rate is Swiggy-exclusive. Zomato orders earn the standard rate (1%). If you use both platforms, HDFC Millennia's 5% on both is more versatile." },
      { q: "Do food delivery orders always count as dining?", a: "It depends on the MCC code. Swiggy/Zomato may code as dining, online, or food delivery depending on the card issuer and platform. Check your statement to confirm which category your orders fall under." },
      { q: "What about Swiggy Instamart?", a: "Most cards treat Swiggy Instamart as a Swiggy transaction. The HDFC Swiggy card's 10% typically applies, subject to the same ₹1,500/month cap." },
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
      { cardId: "sbi-cashback", badge: "5% on online bill payments", note: "5% on all online transactions — including bill payments made online. The ₹5,000/cycle cap (reducing to ₹2,000 in April 2026) covers bills plus other online spending." },
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
      { cardId: "hdfc-infinia", badge: "Best overall (invite-only)", note: "Up to 33.33% via SmartBuy, 3.33% base, unlimited lounge. The ultimate travel card — if you can get the invite." },
      { cardId: "hdfc-diners-black", badge: "Best accessible premium", note: "Same SmartBuy rates as Infinia (up to 33.33%), unlimited lounge, waivable ₹10K fee. The best travel card you can actually apply for." },
      { cardId: "axis-atlas", badge: "Best for airline miles", note: "5% on travel + transferable miles to Singapore Airlines, Qatar, and more. Best for premium cabin redemptions. 18 lounge visits." },
      { cardId: "hdfc-regalia", badge: "Best mid-tier travel card", note: "Up to 13.33% via SmartBuy, 18 lounge visits. Lower fee (₹2,500, waivable) makes it accessible for moderate travelers." },
      { cardId: "idfc-wow", badge: "Best free travel card", note: "Zero forex markup on a free card. Won't earn high rewards, but saves 1.5-3.5% on every international transaction." },
    ],
    verdict: "For domestic travel: **HDFC Diners Black or Regalia** with SmartBuy bookings. For international: add **IDFC FIRST WOW** for zero forex. For airline mile enthusiasts: **Axis Atlas** with transfers to premium carriers.",
    faq: [
      { q: "What's SmartBuy and why does it matter?", a: "HDFC SmartBuy is a booking portal that gives 10x reward points on flights and hotels. It turns Regalia's 1.33% into 13.33% and Infinia's 3.33% into 33.33%. If you have an HDFC card, always book travel through SmartBuy." },
      { q: "Are airline mile transfers worth it?", a: "For economy tickets, usually not — you get roughly 1:1 value. For business/first class, miles can deliver 3-5x value. If you ever fly premium cabins, mile transfers from Axis Atlas are extremely valuable." },
      { q: "Which card has the best lounge access?", a: "Unlimited: HDFC Infinia, HDFC Diners Black, ICICI Emeralde, AU Zenith+. 18/year: HDFC Regalia, Axis Atlas, BOB Eterna. 14/year: SBI ELITE. For most travelers, 18/year is more than enough." },
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

];
