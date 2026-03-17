import Link from "next/link";

const TOOL_LINKS = [
  { href: "/smart-swipe", label: "Smart Swipe Guide" },
  { href: "/stack-builder", label: "Stack Builder" },
  { href: "/gap-finder", label: "Card Gap Finder" },
  { href: "/swipe-check", label: "Swipe Check" },
  { href: "/compare", label: "Compare Cards" },
  { href: "/blog", label: "Blog" },
];

const CARD_LINKS = [
  { href: "/cards/hdfc-millennia", label: "HDFC Millennia" },
  { href: "/cards/axis-ace", label: "Axis ACE" },
  { href: "/cards/amazon-icici", label: "Amazon Pay ICICI" },
  { href: "/cards/hdfc-regalia", label: "HDFC Regalia" },
  { href: "/cards/sbi-cashback", label: "SBI Cashback" },
];

const BEST_FOR_LINKS = [
  { href: "/best/credit-card-for-online-shopping", label: "Best for Online Shopping" },
  { href: "/best/credit-card-for-swiggy-zomato", label: "Best for Swiggy & Zomato" },
  { href: "/best/credit-card-for-amazon", label: "Best for Amazon" },
  { href: "/best/best-cashback-credit-card-no-annual-fee", label: "Best Free Cards" },
  { href: "/best/credit-card-for-travel", label: "Best for Travel" },
];

const COMPARE_LINKS = [
  { href: "/compare/hdfc-millennia-vs-axis-ace", label: "Millennia vs ACE" },
  { href: "/compare/hdfc-millennia-vs-amazon-pay-icici", label: "Millennia vs Amazon ICICI" },
  { href: "/compare/hdfc-regalia-vs-hdfc-diners-black", label: "Regalia vs Diners Black" },
  { href: "/compare/sbi-cashback-vs-amazon-pay-icici", label: "SBI Cashback vs Amazon ICICI" },
  { href: "/compare/axis-ace-vs-axis-flipkart", label: "ACE vs Flipkart" },
];

export default function Footer() {
  const linkClass = "block mb-2.5 text-sm no-underline transition-colors";

  return (
    <footer className="py-14 px-6" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}>
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-extrabold">AF</div>
              <span className="text-lg font-bold" style={{ color: "var(--text)" }}>Assure Fintech</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: "var(--text-muted)" }}>
              India's smartest credit card tool. 25+ cards, real savings, zero tracking.
            </p>
          </div>

          {/* Tools */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Tools</div>
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

          {/* Comparisons */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Comparisons</div>
            {COMPARE_LINKS.map(l => (
              <Link key={l.href} href={l.href} className={linkClass} style={{ color: "var(--text-muted)" }}>{l.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-faint)" }}>Company</div>
            {[
              { href: "/about", label: "About" },
              { href: "/whats-changed", label: "What Changed" },
              { href: "/how-we-earn", label: "How We Earn" },
              { href: "/editorial-policy", label: "Editorial Policy" },
              { href: "/contact", label: "Contact" },
            ].map(l => (
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
