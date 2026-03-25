import Link from "next/link";

const TOOL_LINKS = [
  { href: "/smart-swipe", label: "Smart Swipe Guide" },
  { href: "/stack-builder", label: "Stack Builder" },
  { href: "/gap-finder", label: "Card Gap Finder" },
  { href: "/swipe-check", label: "Swipe Check" },
  { href: "/compare", label: "Compare Cards" },
  { href: "/cards", label: "All 75 Cards" },
];

const CARD_LINKS = [
  { href: "/cards/hdfc-regalia", label: "HDFC Regalia" },
  { href: "/cards/axis-ace", label: "Axis ACE" },
  { href: "/cards/amazon-icici", label: "Amazon Pay ICICI" },
  { href: "/cards/sbi-cashback", label: "SBI Cashback" },
  { href: "/cards/hdfc-millennia", label: "HDFC Millennia" },
];

const BEST_FOR_LINKS = [
  { href: "/best/credit-card-for-online-shopping", label: "Best for Online Shopping" },
  { href: "/best/credit-card-for-swiggy-zomato", label: "Best for Swiggy & Zomato" },
  { href: "/best/credit-card-for-amazon", label: "Best for Amazon" },
  { href: "/best/best-cashback-credit-card-no-annual-fee", label: "Best Free Cards" },
  { href: "/best/credit-card-for-travel", label: "Best for Travel" },
];

const EXPLORE_LINKS = [
  { href: "/learn/loans", label: "Loan Guides" },
  { href: "/learn/insurance", label: "Insurance Guides" },
  { href: "/learn/savings", label: "Savings Guides" },
  { href: "/learn/tax", label: "Tax Planning" },
  { href: "/whats-changed", label: "What Changed" },
  { href: "/blog", label: "Blog" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-we-earn", label: "How We Earn" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const linkClass = "block mb-2.5 text-sm no-underline transition-colors";

  return (
    <footer className="py-14 px-6" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}>
      <div className="max-w-[1060px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white text-[10px] font-extrabold shadow-sm">AF</div>
              <span className="text-lg font-bold" style={{ color: "var(--text)" }}>Assure Fintech</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: "var(--text-muted)" }}>
              The honest number on every financial product in India.
            </p>
          </div>

          {/* CC Tools */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>CC Tools</div>
            {TOOL_LINKS.map(l => (
              <Link key={l.href} href={l.href} className={linkClass} style={{ color: "var(--text-muted)" }}>{l.label}</Link>
            ))}
          </div>

          {/* Popular Cards */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Popular Cards</div>
            {CARD_LINKS.map(l => (
              <Link key={l.href} href={l.href} className={linkClass} style={{ color: "var(--text-muted)" }}>{l.label}</Link>
            ))}
          </div>

          {/* Best Cards */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Best Cards</div>
            {BEST_FOR_LINKS.map(l => (
              <Link key={l.href} href={l.href} className={linkClass} style={{ color: "var(--text-muted)" }}>{l.label}</Link>
            ))}
          </div>

          {/* Explore — NEW */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Explore</div>
            {EXPLORE_LINKS.map(l => (
              <Link key={l.href + l.label} href={l.href} className={linkClass} style={{ color: "var(--text-muted)" }}>{l.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Company</div>
            {COMPANY_LINKS.map(l => (
              <Link key={l.href} href={l.href} className={linkClass} style={{ color: "var(--text-muted)" }}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>© 2026 Assure Fintech. Not financial advice.</p>
          <p className="text-xs text-right max-w-[360px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
            We may earn commissions through affiliate links — at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
