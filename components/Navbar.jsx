"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const NAV_CATEGORIES = [
  {
    label: "Credit cards",
    href: "/cards",
    color: "#7C3AED",
    sections: [
      {
        title: "Tools",
        links: [
          { href: "/smart-swipe", label: "Smart swipe guide" },
          { href: "/stack-builder", label: "Stack builder" },
          { href: "/gap-finder", label: "Gap finder" },
          { href: "/swipe-check", label: "Swipe check" },
          { href: "/compare", label: "Compare cards" },
        ],
      },
      {
        title: "Best cards for",
        links: [
          { href: "/best/credit-card-for-online-shopping", label: "Online shopping" },
          { href: "/best/credit-card-for-swiggy-zomato", label: "Swiggy & Zomato" },
          { href: "/best/credit-card-for-amazon", label: "Amazon" },
          { href: "/best/credit-card-for-travel", label: "Travel" },
          { href: "/best/best-cashback-credit-card-no-annual-fee", label: "No annual fee" },
        ],
      },
      {
        title: "Popular cards",
        links: [
          { href: "/cards/hdfc-regalia", label: "HDFC Regalia" },
          { href: "/cards/sbi-cashback", label: "SBI Cashback" },
          { href: "/cards/axis-ace", label: "Axis ACE" },
          { href: "/cards/amazon-icici", label: "Amazon Pay ICICI" },
          { href: "/cards", label: "All 75 cards →", bold: true },
        ],
      },
    ],
  },
  {
    label: "Loans",
    href: "/learn/loans",
    color: "#2563EB",
    sections: [
      {
        title: "Tools",
        links: [
          { href: "/learn/loans", label: "Loan truth calculator", badge: "Soon" },
        ],
      },
      {
        title: "Guides",
        links: [
          { href: "/learn/loans/home-loan-true-cost", label: "Home loan: true cost" },
          { href: "/learn/loans/personal-loan-actual-apr", label: "Personal loan traps" },
          { href: "/learn/loans/prepayment-penalty-trap", label: "Prepayment penalty math" },
        ],
      },
      {
        title: "Compare",
        links: [
          { href: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan", label: "SBI vs HDFC home loan" },
          { href: "/learn/loans/fixed-vs-floating-rate", label: "Fixed vs floating rate" },
          { href: "/learn/loans/education-loan-real-cost", label: "Education loan cost" },
        ],
      },
    ],
  },
  {
    label: "Insurance",
    href: "/learn/insurance",
    color: "#DB2777",
    sections: [
      {
        title: "Health insurance",
        links: [
          { href: "/learn/insurance/health-insurance-effective-coverage", label: "Effective coverage breakdown" },
          { href: "/learn/insurance/claim-settlement-ratios-2026", label: "Claim settlement rankings" },
          { href: "/learn/insurance/room-rent-trap", label: "Room rent trap explained" },
        ],
      },
      {
        title: "Term life",
        links: [
          { href: "/learn/insurance/term-insurance-real-value", label: "₹1Cr cover = ₹92L payout" },
          { href: "/learn/insurance/copay-vs-no-copay", label: "Co-pay vs no co-pay" },
        ],
      },
    ],
  },
  {
    label: "Savings",
    href: "/learn/savings",
    color: "#D97706",
    sections: [
      {
        title: "Guides",
        links: [
          { href: "/learn/savings/fd-real-return", label: "FD real return after tax" },
          { href: "/learn/savings/ppf-vs-fd-vs-debt-fund", label: "PPF vs FD vs debt fund" },
          { href: "/learn/savings/best-fd-rates-2026", label: "Best FD rates 2026" },
        ],
      },
    ],
  },
  {
    label: "Learn",
    href: "/blog",
    color: "#7C3AED",
    sections: [
      {
        title: "By category",
        links: [
          { href: "/blog", label: "Credit card guides" },
          { href: "/learn/loans", label: "Loan guides" },
          { href: "/learn/insurance", label: "Insurance guides" },
          { href: "/learn/savings", label: "Savings guides" },
          { href: "/learn/tax", label: "Tax planning" },
          { href: "/learn/mutual-funds", label: "Mutual funds" },
        ],
      },
      {
        title: "Popular",
        links: [
          { href: "/blog", label: "Your 5% card earns 2.8%" },
          { href: "/learn/loans/home-loan-true-cost", label: "Home loan hidden costs" },
          { href: "/learn/insurance/health-insurance-effective-coverage", label: "₹10L policy = ₹4.2L cover" },
          { href: "/whats-changed", label: "What changed →", bold: true },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const { mode, toggle } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const menuTimeout = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobOpen(false); setOpenMenu(null); }, [pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleMouseEnter = (idx) => {
    clearTimeout(menuTimeout.current);
    setOpenMenu(idx);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => setOpenMenu(null), 200);
  };

  const isActive = (cat) => {
    if (cat.href === "/cards") return pathname === "/" || pathname.startsWith("/cards") || pathname.startsWith("/smart-swipe") || pathname.startsWith("/stack-builder") || pathname.startsWith("/gap-finder") || pathname.startsWith("/swipe-check") || pathname.startsWith("/compare") || pathname.startsWith("/best");
    if (cat.href === "/blog") return pathname.startsWith("/blog");
    return pathname.startsWith(cat.href);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white text-[10px] font-extrabold shadow-sm">AF</div>
          <span className="text-[16px] font-bold tracking-tight" style={{ color: "var(--text)" }}>Assure Fintech</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={cat.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium no-underline transition-all flex items-center gap-1"
                style={{
                  background: isActive(cat) ? "var(--accent-light)" : openMenu === idx ? "var(--bg-muted)" : "transparent",
                  color: isActive(cat) ? "var(--accent-text)" : "var(--text-muted)",
                }}
              >
                {cat.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4, transition: "transform 0.2s", transform: openMenu === idx ? "rotate(180deg)" : "rotate(0)" }}>
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>

              {/* Mega menu dropdown */}
              {openMenu === idx && (
                <div
                  className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden"
                  style={{
                    background: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
                    minWidth: cat.sections.length > 2 ? 520 : cat.sections.length > 1 ? 380 : 220,
                    zIndex: 200,
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Colored top line */}
                  <div style={{ height: 3, background: cat.color }} />

                  <div className="p-4 flex gap-6">
                    {cat.sections.map((sec, si) => (
                      <div key={si} style={{ minWidth: sec.links.length > 3 ? 160 : 140 }}>
                        <div className="text-[10px] font-bold uppercase tracking-wider mb-2.5" style={{ color: "var(--text-faint)", letterSpacing: "0.08em" }}>
                          {sec.title}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          {sec.links.map((link, li) => (
                            <Link
                              key={li}
                              href={link.href}
                              className="text-[13px] no-underline rounded-md px-2.5 py-1.5 transition-all flex items-center gap-2"
                              style={{
                                color: link.bold ? cat.color : "var(--text-secondary)",
                                fontWeight: link.bold ? 600 : 400,
                              }}
                              onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-muted)"; e.currentTarget.style.color = "var(--text)"; }}
                              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = link.bold ? cat.color : "var(--text-secondary)"; }}
                            >
                              {link.label}
                              {link.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: `${cat.color}15`, color: cat.color }}>{link.badge}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="w-px h-5 mx-2" style={{ background: "var(--border)" }} />
          <button onClick={toggle} className="w-9 h-9 rounded-lg flex items-center justify-center text-base border-none cursor-pointer transition-all"
            style={{ background: mode === "light" ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)" }}>
            {mode === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggle} className="w-9 h-9 rounded-lg flex items-center justify-center text-base border-none cursor-pointer"
            style={{ background: mode === "light" ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)" }}>
            {mode === "light" ? "🌙" : "☀️"}
          </button>
          <button onClick={() => setMobOpen(!mobOpen)} className="text-xl border-none bg-transparent cursor-pointer p-1" style={{ color: "var(--text)" }}>
            {mobOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobOpen && (
        <div className="lg:hidden flex flex-col gap-1 pb-5 px-4 max-h-[80vh] overflow-y-auto" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
          {NAV_CATEGORIES.map((cat, idx) => (
            <div key={idx}>
              <div
                className="flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer"
                onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                style={{
                  background: isActive(cat) ? "var(--accent-light)" : "transparent",
                  color: isActive(cat) ? "var(--accent-text)" : "var(--text-secondary)",
                }}
              >
                <span className="text-sm font-semibold">{cat.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: openMenu === idx ? "rotate(180deg)" : "rotate(0)" }}>
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              {openMenu === idx && (
                <div className="ml-3 mb-2">
                  {cat.sections.map((sec, si) => (
                    <div key={si} className="mb-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider px-3 py-1" style={{ color: "var(--text-faint)" }}>{sec.title}</div>
                      {sec.links.map((link, li) => (
                        <Link key={li} href={link.href} className="block px-3 py-2 text-sm no-underline rounded-md" style={{ color: link.bold ? cat.color : "var(--text-muted)" }}>
                          {link.label}
                          {link.badge && <span className="text-[9px] font-bold ml-2 px-1.5 py-0.5 rounded" style={{ background: `${cat.color}15`, color: cat.color }}>{link.badge}</span>}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
