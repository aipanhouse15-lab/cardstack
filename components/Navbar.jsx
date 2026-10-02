"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TICKER_ITEMS = [
  { text: "Worked examples added to loan, tax, insurance, savings and mutual-fund guides", tag: "PRACTICAL GUIDES", tagClass: "t-grn", date: "OCT 2026" },
  { text: "Cards without complete reward models are excluded from numerical rankings", tag: "DATA STATUS", tagClass: "t-gld", date: "OCT 2026" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cards", label: "Cards" },
  { href: "/learn/loans", label: "Loans" },
  { href: "/learn/insurance", label: "Insurance" },
  { href: "/learn/savings", label: "Savings" },
  { href: "/learn/tax", label: "Tax" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ═══ TICKER ═══ */}
      <div className="ticker" aria-hidden="true">
        <div className="marq-in">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i}>
              {item.date && <b className="t-gld">{item.date}</b>}
              {item.date && " · "}
              {item.text}{" "}
              {item.tag && <b className={item.tagClass}>{item.tag}</b>}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ NAV ═══ */}
      <nav>
        <div className="wrap nav-in">
          <Link href="/" className="brand">
            <span className="mark">Af</span>
            <span className="nm">Assure <i>Fintech</i></span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                style={isActive(link.href) ? { color: "var(--ivory)" } : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/smart-swipe" className="nav-cta">
            Find your card →
          </Link>
        </div>
        <div className="mobile-nav" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
