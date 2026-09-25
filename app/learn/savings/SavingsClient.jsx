"use client";
import Link from "next/link";

const HERO_ITEMS = [
  { icon: "🏦", iconBg: "rgba(251,191,36,0.15)", name: "Fixed deposit", sub: "Illustrative gross rate", adv: "Before tax", real: "Tax varies" },
  { icon: "📈", iconBg: "rgba(96,165,250,0.15)", name: "PPF", sub: "Rate notified periodically", adv: "Check current", real: "Tax rules apply" },
  { icon: "📊", iconBg: "rgba(22,163,74,0.15)", name: "Debt fund", sub: "Returns and tax vary", adv: "Market-linked", real: "No guarantee" },
];

const QUICK_NAV = [
  { icon: "🧮", name: "FD Return Calculator", desc: "See your real return", href: "/fd-calculator" },
  { icon: "🏦", name: "FD Real Return", desc: "After tax + inflation", href: "/learn/savings/fd-real-return" },
  { icon: "⚖️", name: "PPF vs FD vs Debt", desc: "Post-tax comparison", href: "/learn/savings/ppf-vs-fd-vs-debt-fund" },
  { icon: "🏆", name: "Compare FD offers", desc: "Checklist for issuer rates and terms", href: "/learn/savings/best-fd-rates-2026" },
];

const GUIDES = [
  { n: "01", title: "Fixed deposits: estimate returns after tax and inflation", desc: "See how deposit rate, applicable tax and inflation assumptions affect purchasing power.", time: "4 min", tag: "Guide", tagColor: "#D97706", tagBg: "rgba(217,119,6,0.08)", href: "/learn/savings/fd-real-return" },
  { n: "02", title: "PPF vs FD vs debt fund: compare rules, risk and access", desc: "Compare product rules, liquidity, risk, tax treatment and current terms for your own time horizon.", time: "7 min", tag: "Compare", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)", href: "/learn/savings/ppf-vs-fd-vs-debt-fund" },
  { n: "03", title: "FD rates: compare current bank offers and terms", desc: "Rates vary by tenure, customer category and date; verify with the institution before booking.", time: "6 min", tag: "Comparison", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/savings/best-fd-rates-2026" },
  { n: "04", title: "Senior citizen FD: compare terms before locking in", desc: "Check current eligible rates, premature-closure rules, tax treatment and deposit protection before booking.", time: "4 min", tag: "Guide", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/savings/senior-citizen-fd" },
  { n: "05", title: "Tax-saving FD vs ELSS vs PPF: compare lock-ins and rules", desc: "Eligibility, lock-in, risk and tax treatment differ. Check the current regime and scheme rules before investing.", time: "6 min", tag: "Compare", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)", href: "/learn/savings/tax-saving-fd-vs-elss-vs-ppf" },
];

const FD_RATES = [
  { bank: "Illustration: 6.5% gross", rate: "6.50%", real: "−0.43%", neg: true },
  { bank: "Illustration: 7.5% gross", rate: "7.50%", real: "+0.24%", neg: false },
  { bank: "Illustration: 8.5% gross", rate: "8.50%", real: "+0.90%", neg: false },
];

const FAQS = [
  { q: "Can an FD lose purchasing power?", a: "Yes. Compare its after-tax return with inflation using your own tax situation and the deposit's actual rate and compounding terms. TDS is a tax prepayment, not the final tax rate." },
  { q: "What is the best alternative to FDs?", a: "There is no universal best option. PPF has a long lock-in, debt funds are market-linked, and deposits have issuer-specific terms and risks. Match the product to your time horizon, liquidity needs and risk tolerance." },
  { q: "Are small finance bank FDs insured?", a: "Eligible deposits at DICGC-insured banks, including small finance banks, are covered up to ₹5 lakh per depositor per insured bank, including principal and interest, in the same right and capacity. Confirm the institution and product type; NBFC company deposits are not covered by DICGC." },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "Compare rewards after fees and caps", href: "/cards", color: "#7C3AED" },
  { name: "Loans", desc: "Compare rates, fees and total cost", href: "/learn/loans", color: "#2563EB" },
  { name: "Insurance", desc: "Policy terms and claims", href: "/learn/insurance", color: "#DB2777" },
  { name: "Tax Planning", desc: "Old vs new regime math", href: "/learn/tax", color: "#16A34A" },
];

export default function SavingsClient() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #422006, #92400E, #422006)", position: "relative", overflow: "hidden", padding: "48px 24px 56px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(251,191,36,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -30, width: 350, height: 350, background: "radial-gradient(circle, rgba(217,119,6,0.12), transparent 60%)", pointerEvents: "none" }} />
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-[2]" style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FBBF24" }} /> The honest number on savings</div>
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#F1F5F9", marginBottom: 12 }}>Compare savings<br /><span style={{ color: "#FBBF24" }}>after tax and inflation.</span></h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>Use clearly labelled assumptions to estimate purchasing-power changes. Your final tax depends on the tax year and personal circumstances; TDS is not the final tax liability.</p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>{[["5", "Practical guides"], ["0", "Live rate rankings"], ["₹0", "Always free"]].map(([n, l], i) => (<div key={i}><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>{n}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{l}</div></div>))}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {HERO_ITEMS.map((t, i) => (<div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 18px" }}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: t.iconBg }}>{t.icon}</div><div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.sub}</div></div></div><div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>{t.adv}</div><div style={{ fontSize: 18, fontWeight: 800, color: "#F87171" }}>{t.real}</div></div></div>))}
          </div>
        </div>
      </div>

      <div style={{ transform: "translateY(-28px)", position: "relative", zIndex: 3, padding: "0 24px", marginBottom: 16 }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ maxWidth: 1060, margin: "0 auto" }}>
          {QUICK_NAV.map((t, i) => (<Link key={i} href={t.href} className="no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-3.5 flex items-center gap-3 transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}><div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: "var(--orange-bg)" }}>{t.icon}</div><div><div className="text-xs font-bold" style={{ color: "var(--text)" }}>{t.name}</div><div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{t.desc}</div></div></div></Link>))}
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Illustrative FD return scenarios</h2>
        <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid var(--border)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-card)" }}>
            <thead><tr style={{ background: "var(--bg-muted)" }}>{["Scenario (not a bank quote)", "Gross rate", "Illustrative real return"].map(h => (<th key={h} style={{ textAlign: "left", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", color: "var(--text-faint)", borderBottom: "1px solid var(--border)" }}>{h}</th>))}</tr></thead>
            <tbody>{FD_RATES.map((b, i) => (<tr key={i}><td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, borderBottom: i < FD_RATES.length - 1 ? "1px solid var(--border-light)" : "none", color: "var(--text)" }}>{b.bank}</td><td style={{ padding: "12px 16px", fontSize: 13, borderBottom: i < FD_RATES.length - 1 ? "1px solid var(--border-light)" : "none", color: "var(--text-secondary)" }}>{b.rate}</td><td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, borderBottom: i < FD_RATES.length - 1 ? "1px solid var(--border-light)" : "none", color: b.neg ? "#DC2626" : "var(--green)" }}>{b.real}</td></tr>))}</tbody>
          </table>
        </div>
        <p className="text-xs mb-8" style={{ color: "var(--text-faint)" }}>Illustration assumes a 30% marginal tax rate on interest and 5.0% inflation, using (1 + after-tax nominal return) ÷ (1 + inflation) − 1. It is not a current bank-rate comparison or individual tax calculation.</p>

        <h2 className="text-lg font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>Savings guides</h2>
        <div className="flex flex-col gap-2.5 mb-8">
          {GUIDES.map((g, i) => (<Link key={i} href={g.href} className="block no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-4 flex gap-4 items-start transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}><div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold flex-shrink-0" style={{ background: "var(--orange-bg)", color: "var(--orange)" }}>{g.n}</div><div style={{ flex: 1 }}><span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: g.tagBg, color: g.tagColor }}>{g.tag} · {g.time}</span><div className="text-sm font-bold mt-1.5 mb-1" style={{ color: "var(--text)" }}>{g.title}</div><div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</div></div><span className="text-xs font-semibold flex-shrink-0 mt-1" style={{ color: "var(--orange)" }}>Read →</span></div></Link>))}
        </div>

        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Frequently asked questions</h2>
        <div className="flex flex-col gap-2 mb-8">{FAQS.map((f, i) => (<div key={i} className="rounded-xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}><div className="text-sm font-bold mb-1.5" style={{ color: "var(--text)" }}>{f.q}</div><div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.a}</div></div>))}</div>

        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-1" style={{ color: "var(--text)" }}>The honest number on every financial product</h2>
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Advertised vs actual across all categories.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">{EXPLORE.map((cat, i) => (<Link key={i} href={cat.href} className="no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-4 cursor-pointer h-full" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}><div className="text-sm font-bold mb-1" style={{ color: cat.color }}>{cat.name}</div><div className="text-xs" style={{ color: "var(--text-muted)" }}>{cat.desc}</div></div></Link>))}</div>
        </div>
      </div>
    </>
  );
}
