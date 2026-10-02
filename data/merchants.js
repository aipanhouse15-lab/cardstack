import { CARDS, isSourceReviewed } from './cards';

// Merchant lookups are route checklists, not rankings by a category proxy.
// Keep product rules in the central records instead of duplicate percentages.
const GROUPS = [
  [
    "dining",
    "Food & Dining",
    "🍽️",
    [
      [
        "swiggy",
        "Swiggy",
        "🟠",
        "dining",
        [
          "hdfc-swiggy-blck",
          "hsbc-live-plus",
          "hdfc-millennia"
        ],
        "Swiggy-specific earning has transaction minimums. Restaurant dining and Zomato do not inherit the Swiggy tier."
      ],
      [
        "zomato",
        "Zomato",
        "🔴",
        "dining",
        [
          "hsbc-live-plus",
          "axis-ace",
          "hdfc-millennia"
        ],
        "Use the named food-delivery tier and shared cap, not a generic restaurant rate."
      ],
      [
        "blinkit",
        "Blinkit",
        "🟡",
        "groceries",
        [
          "hsbc-live-plus",
          "rbl-shoprite",
          "axis-airtel"
        ],
        "The posted merchant category and named partner route determine eligibility. Do not assume every quick-commerce order uses the grocery MCC."
      ],
      [
        "bigbasket",
        "BigBasket",
        "🟢",
        "groceries",
        [
          "hdfc-tata-neu-infinity",
          "sbi-tata-neu-infinity",
          "hsbc-live-plus"
        ],
        "Card NeuCoins and additional NeuPass benefits are separate; category earning ceilings still apply."
      ],
      [
        "restaurant",
        "Restaurant Dining",
        "🍽️",
        "dining",
        [
          "hsbc-live-plus",
          "sbi-simplysave",
          "au-zenith"
        ],
        "Use restaurant MCC eligibility. Delivery-app tiers do not apply automatically to offline restaurants."
      ]
    ]
  ],
  [
    "travel",
    "Travel & Transport",
    "✈️",
    [
      [
        "makemytrip",
        "MakeMyTrip",
        "🔵",
        "travel",
        [
          "icici-mmt",
          "sbi-cashback"
        ],
        "MakeMyTrip hotels and flights have different myCash rates. Compare the cash checkout price and eligible redemption route."
      ],
      [
        "cleartrip",
        "Cleartrip",
        "🟣",
        "travel",
        [
          "axis-flipkart",
          "sbi-simplyclick",
          "sbi-cashback"
        ],
        "A travel aggregator is not a direct airline purchase. Atlas/Horizon direct-airline acceleration must not be assumed here."
      ],
      [
        "uber",
        "Uber / Ola",
        "🚕",
        "travel",
        [
          "sbi-cashback",
          "sc-ultimate"
        ],
        "Ride-hailing does not automatically qualify for an airline/hotel accelerated tier. Check online flags, exclusions and any named merchant offer."
      ],
      [
        "airlines",
        "Airlines",
        "🛫",
        "travel",
        [
          "axis-atlas",
          "axis-horizon",
          "sc-ultimate"
        ],
        "Direct airline, travel-portal and aggregator bookings are distinct routes. The highest advertised tier does not apply to all three."
      ]
    ]
  ],
  [
    "shopping",
    "Online Shopping",
    "🛒",
    [
      [
        "amazon",
        "Amazon",
        "📦",
        "online",
        [
          "amazon-icici",
          "sbi-cashback",
          "hdfc-millennia"
        ],
        "Prime status and eligible product exclusions affect Amazon earning. Utility bills, gift cards, travel and EMI need their own rules."
      ],
      [
        "flipkart",
        "Flipkart / Myntra",
        "🛍️",
        "online",
        [
          "axis-flipkart",
          "hdfc-millennia",
          "sbi-cashback"
        ],
        "Flipkart and Myntra have different co-brand tiers. Compare statement-quarter, calendar-month and statement-cycle caps separately."
      ],
      [
        "nykaa",
        "Nykaa / Ajio",
        "💄",
        "online",
        [
          "sbi-cashback",
          "hdfc-millennia"
        ],
        "A named partner on one site does not establish acceleration on another. Listed online MCCs and merchant exclusions apply."
      ],
      [
        "electronics",
        "Electronics / Apple",
        "🍎",
        "shopping",
        [
          "sc-ultimate",
          "sbi-cashback",
          "hdfc-moneyback-plus"
        ],
        "Offline retail, online purchases and merchant EMI use different reward rules. Sale discounts do not necessarily stack with card rewards."
      ]
    ]
  ],
  [
    "entertainment",
    "Entertainment",
    "🎬",
    [
      [
        "streaming",
        "Netflix / Hotstar / Spotify",
        "📺",
        "entertainment",
        [
          "sbi-cashback",
          "sc-ultimate"
        ],
        "Subscriptions are not movie-ticket purchases. Online processing, foreign billing and merchant exclusions can affect costs and rewards."
      ],
      [
        "movies",
        "BookMyShow / PVR",
        "🎬",
        "entertainment",
        [
          "sbi-simplysave",
          "axis-myzone",
          "icici-coral"
        ],
        "Ticket discounts require offer-specific booking, minimum purchase and frequency conditions. A discount is not a reward percentage on every entertainment purchase."
      ]
    ]
  ],
  [
    "utilities",
    "Bills & Insurance",
    "💡",
    [
      [
        "electricity",
        "Electricity / Gas / Water",
        "⚡",
        "utilities",
        [
          "axis-ace",
          "axis-airtel",
          "phonepe-sbi-select-black"
        ],
        "Bill-payment apps and direct card payments have different eligible routes. Utility earning may share a cap with telecom or other spending."
      ],
      [
        "mobile",
        "Mobile / Broadband / DTH",
        "📱",
        "utilities",
        [
          "axis-airtel",
          "phonepe-sbi-select-black",
          "axis-ace"
        ],
        "Airtel own-services, other telecom and ordinary utility payments must be distinguished. Named app and handset-platform conditions apply."
      ],
      [
        "insurance",
        "Insurance Premiums",
        "🛡️",
        "utilities",
        [
          "sc-ultimate",
          "phonepe-sbi-select-black",
          "hdfc-tata-neu-infinity"
        ],
        "Insurance is not the utilities calculator category. Use the exact insurance earning/ceiling and app route; no generic percentage is assigned by this tool."
      ]
    ]
  ],
  [
    "fuel",
    "Fuel & Tolls",
    "⛽",
    [
      [
        "petrol",
        "Petrol Pumps",
        "⛽",
        "fuel",
        [
          "sbi-bpcl-octane",
          "axis-iocl",
          "icici-hpcl-super-saver"
        ],
        "Match the station brand, qualifying transaction band, reward ceiling and surcharge waiver separately. Do not add a waiver to every purchase."
      ],
      [
        "fastag",
        "FASTag / Toll",
        "🛣️",
        "fuel",
        [
          "idfc-wow",
          "idfc-millennia"
        ],
        "FASTag and toll transactions are not petrol purchases. IDFC reduced 1X terms differ from its normal retail tier; other issuers may exclude these transactions."
      ]
    ]
  ]
];
export const MERCHANTS = Object.fromEntries(GROUPS.map(([id,label,icon,items])=>[id,{
  label,icon,items:items.map(([id,name,icon,cat,candidates,proTip])=>({
    id,name,icon,cat,proTip,tips:candidates.map(cardId=>CARDS.find(c=>c.id===cardId))
      .filter(c=>isSourceReviewed(c) && !['closed','discontinued','phasing-out'].includes(c.availability))
      .map(card=>({card:card.id,rate:'Eligible-route review',note:[card.pointsInfo,card.redemptionNote,card.rewardAssumptions?.default].filter(Boolean).join(' ')}))
  }))
}]));
