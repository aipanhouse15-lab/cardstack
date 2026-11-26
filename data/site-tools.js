export const TOOLS = [
  { name: "Smart Swipe", desc: "Which card to use for every purchase", href: "/smart-swipe", tag: "MOST USED" },
  { name: "Gap Finder", desc: "Categories where you're losing rewards", href: "/gap-finder", tag: "REVENUE" },
  { name: "Stack Builder", desc: "Build an optimized multi-card combo", href: "/stack-builder" },
  { name: "Compare", desc: "Side-by-side with cap-adjusted rates", href: "/compare" },
  { name: "Swipe Check", desc: "Quick: is this card good for this spend?", href: "/swipe-check" },
];

export const CALCS = [
  { name: "Loan Truth", desc: "Real cost after processing fees & GST", href: "/loan-calculator", color: "var(--c-loan)" },
  { name: "FD Real Return", desc: "Post-tax, post-inflation actual yield", href: "/fd-calculator", color: "var(--c-fd)" },
  { name: "Tax Regime", desc: "Old vs new — which saves more for you", href: "/tax-calculator", color: "var(--c-tax)" },
  { name: "Insurance Coverage", desc: "What your policy actually pays out", href: "/insurance-calculator", color: "var(--c-ins)" },
  { name: "SIP Calculator", desc: "Advertised vs actual SIP returns", href: "/sip-calculator", color: "var(--c-mf)" },
];
export const TOOL_COUNT = TOOLS.length + CALCS.length;
