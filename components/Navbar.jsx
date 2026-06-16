"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TICKER_ITEMS = [
  { text: "SBI Cashback monthly cap cut to ₹4,000", tag: "NERF", tagClass: "t-red", date: "JUN 2026" },
  { text: "Axis Airtel benefits downgraded", tag: "NERF", tagClass: "t-red" },
  { text: "HDFC Swiggy ORNGE card launched", tag: "NEW", tagClass: "t-grn" },
  { text: "SBI home loan revised to 7.25%", tag: "was 8.5%", tagClass: "t-grn" },
  { text: 'FD "7.5%" → real return 0.15% after TDS + inflation', tag: "", tagClass: "t-red" },
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
      </nav>
    </>
  );
}
