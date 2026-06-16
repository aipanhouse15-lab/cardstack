import Link from "next/link";

const COLS = [
  {
    title: "Tools",
    links: [
      { href: "/smart-swipe", label: "Smart Swipe" },
      { href: "/stack-builder", label: "Stack Builder" },
      { href: "/gap-finder", label: "Gap Finder" },
      { href: "/compare", label: "Compare" },
      { href: "/loan-calculator", label: "Loan Calculator" },
      { href: "/fd-calculator", label: "FD Calculator" },
      { href: "/tax-calculator", label: "Tax Calculator" },
      { href: "/insurance-calculator", label: "Insurance Calculator" },
      { href: "/sip-calculator", label: "SIP Calculator" },
    ],
  },
  {
    title: "Popular cards",
    links: [
      { href: "/cards/sbi-cashback", label: "SBI Cashback" },
      { href: "/cards/hdfc-regalia", label: "HDFC Regalia" },
      { href: "/cards/axis-ace", label: "Axis ACE" },
      { href: "/cards/amazon-pay-icici", label: "Amazon Pay ICICI" },
      { href: "/cards/hdfc-millennia", label: "HDFC Millennia" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/learn/loans", label: "Loan guides" },
      { href: "/learn/insurance", label: "Insurance guides" },
      { href: "/learn/savings", label: "Savings guides" },
      { href: "/learn/tax", label: "Tax planning" },
      { href: "/learn/mutual-funds", label: "Mutual funds" },
      { href: "/whats-changed", label: "What changed" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/editorial-policy", label: "Editorial policy" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          {/* Brand column */}
          <div className="f-brand">
            <Link href="/" className="brand">
              <span className="mark">Af</span>
              <span className="nm">Assure <i>Fintech</i></span>
            </Link>
            <p>The honest number on every financial product in India.</p>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title} className="f-col">
              <div className="k">{col.title}</div>
              {col.links.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="f-bot">
          <span>© 2026 ASSURE FINTECH · NOT FINANCIAL ADVICE</span>
          <span>WE MAY EARN AFFILIATE COMMISSIONS — AT NO COST TO YOU, AND NEVER AFFECTING THE MATH</span>
        </div>
      </div>
    </footer>
  );
}
