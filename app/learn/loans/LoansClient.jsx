"use client";
import Link from "next/link";

const GUIDES = [
  { n: "01", title: "Home loan true cost: what banks hide from you", desc: "Processing fees, mandatory insurance, prepayment penalties — calculated into your real effective APR.", time: "6 min", tag: "Guide", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/loans/home-loan-true-cost" },
  { n: "02", title: "Personal loan: advertised 10.5%, actual 13.1%", desc: "Origination fees, late charges, and foreclosure penalties turn a cheap loan expensive.", time: "5 min", tag: "Guide", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/loans/personal-loan-actual-apr" },
  { n: "03", title: "Fixed vs floating rate: which actually saves more?", desc: "10 years of RBI data. Floating saved ₹4.4L — but with volatility.", time: "7 min", tag: "Analysis", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/loans/fixed-vs-floating-rate" },
  { n: "04", title: "SBI vs HDFC vs ICICI home loan — honest comparison 2026", desc: "Fees, insurance, prepayment terms, and effective APR side by side.", time: "8 min", tag: "Compare", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)", href: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
  { n: "05", title: "Prepayment penalty trap: why no lock-in does not mean free", desc: "Banks say zero penalty but charge 2-4% if you switch. NBFCs are worse.", time: "5 min", tag: "Warning", tagColor: "#DC2626", tagBg: "rgba(220,38,38,0.08)", href: "/learn/loans/prepayment-penalty-trap" },
  { n: "06", title: "Education loan: real cost after moratorium interest", desc: "₹20L becomes ₹25.7L. Interest piling adds 15-25% to total repayment.", time: "6 min", tag: "Guide", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/loans/education-loan-real-cost" },
];

const BANKS = [
  { name: "SBI", adv: "8.50%", fee: "0.35% (max ₹10K)", honest: "~9.20%", extra: "₹3.8L" },
  { name: "HDFC Bank", adv: "8.75%", fee: "0.50% (up to ₹25K)", honest: "~9.45%", extra: "₹5.2L" },
  { name: "ICICI Bank", adv: "8.65%", fee: "0.50% (negotiable)", honest: "~9.35%", extra: "₹4.7L" },
  { name: "Axis Bank", adv: "8.70%", fee: "0.50%", honest: "~9.40%", extra: "₹4.9L" },
  { name: "Kotak", adv: "8.75%", fee: "0.50%", honest: "~9.50%", extra: "₹5.4L" },
];

const FAQS = [
  { q: "Is the advertised rate the true cost?", a: "No. Processing fees, insurance, and lock-in add 0.5-1.0% to your effective rate. On ₹50L, that is ₹3-5L extra over 20 years." },
  { q: "Can I prepay without penalty?", a: "Floating rate from banks: yes (RBI mandated). Fixed rate and NBFC loans: 2-4% penalty applies." },
  { q: "Which bank is cheapest?", a: "SBI at ~9.20% honest rate. ₹1.2L cheaper than HDFC over 20 years on ₹50L." },
  { q: "Fixed or floating?", a: "Floating wins over 10+ years. Saved ₹4.4L vs fixed in the last decade." },
];

const HERO_LOANS = [
  { icon: "🏠", iconBg: "rgba(96,165,250,0.15)", name: "Home loan", sub: "₹50L, 20 years", adv: "8.50%", real: "9.35%" },
  { icon: "💸", iconBg: "rgba(248,113,113,0.15)", name: "Personal loan", sub: "₹5L, 3 years", adv: "10.50%", real: "13.1%" },
  { icon: "🎓", iconBg: "rgba(250,204,21,0.15)", name: "Education loan", sub: "₹20L, 2yr course", adv: "₹20L", real: "₹25.7L" },
];

const QUICK_NAV = [
  { icon: "🧮", name: "Loan Calculator", desc: "Coming April 2026", href: "#" },
  { icon: "🏠", name: "Home Loan Guide", desc: "True cost breakdown", href: "/learn/loans/home-loan-true-cost" },
  { icon: "⚖️", name: "Bank Comparison", desc: "SBI vs HDFC vs ICICI", href: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
  { icon: "⚠️", name: "Prepayment Trap", desc: "Hidden penalties", href: "/learn/loans/prepayment-penalty-trap" },
];

const BREAKDOWN = [
  ["Advertised interest rate", "8.50%", false],
  ["+ Processing fee (₹15,000)", "+0.15%", true],
  ["+ Mandatory insurance (₹42,000)", "+0.42%", true],
  ["+ Prepayment lock-in (12 months)", "+0.18%", true],
  ["+ Documentation & legal charges", "+0.10%", true],
];

const EXPLORE = [
  { name: "Credit Cards", desc: "5% → 2.8% after caps", href: "/cards", color: "#7C3AED" },
  { name: "Insurance", desc: "₹10L → ₹4.2L coverage", href: "/learn/insurance", color: "#DB2777" },
  { name: "Savings & FDs", desc: "7.5% → 0.15% real return", href: "/learn/savings", color: "#D97706" },
  { name: "Tax Planning", desc: "Old vs new regime math", href: "/learn/tax", color: "#16A34A" },
];

export default function LoansClient() {
  return (
    <>
      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #0F2A5C, #1E40AF, #0F2A5C)", position: "relative", overflow: "hidden", padding: "48px 24px 56px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(96,165,250,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -30, width: 350, height: 350, background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 60%)", pointerEvents: "none" }} />
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-[2]" style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA" }} /> The honest number on loans
            </div>
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#F1F5F9", marginBottom: 12 }}>
              Your home loan is not <span style={{ color: "#60A5FA" }}>8.5%</span>.<br />It is probably <span style={{ color: "#F87171" }}>9.35%</span>.
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>
              Banks advertise the base rate. We calculate the true cost — after processing fees, insurance, lock-in, and fine print that adds ₹3-5L over your loan tenure.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[["6", "Honest guides"], ["5", "Banks compared"], ["₹0", "Always free"]].map(([n, l], i) => (
                <div key={i}><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>{n}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {HERO_LOANS.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: t.iconBg }}>{t.icon}</div>
                  <div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.sub}</div></div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>{t.adv}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#F87171" }}>{t.real}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QUICK NAV */}
      <div style={{ transform: "translateY(-28px)", position: "relative", zIndex: 3, padding: "0 24px", marginBottom: 16 }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ maxWidth: 1060, margin: "0 auto" }}>
          {QUICK_NAV.map((t, i) => (
            <Link key={i} href={t.href} className="no-underline" style={{ color: "inherit" }}>
              <div className="rounded-xl p-3.5 flex items-center gap-3 transition-all cursor-pointer"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: "var(--blue-bg)" }}>{t.icon}</div>
                <div><div className="text-xs font-bold" style={{ color: "var(--text)" }}>{t.name}</div><div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{t.desc}</div></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* Bank table */}
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Bank comparison — honest rates</h2>
        <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid var(--border)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--bg-card)" }}>
            <thead>
              <tr style={{ background: "var(--bg-muted)" }}>
                {["Bank", "Advertised", "Processing Fee", "Honest Rate", "Extra Cost (₹50L)"].map(h => (
                  <th key={h} style={{ textAlign: "left", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", color: "var(--text-faint)", borderBottom: "1px solid var(--border)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BANKS.map((b, i) => (
                <tr key={i}>
                  <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, borderBottom: i < BANKS.length - 1 ? "1px solid var(--border-light)" : "none", color: "var(--text)" }}>{b.name}</td>
                  <td style={{ padding: "12px 16px", fontSize: 13, borderBottom: i < BANKS.length - 1 ? "1px solid var(--border-light)" : "none", color: "var(--text-secondary)" }}>{b.adv}</td>
                  <td style={{ padding: "12px 16px", fontSize: 13, borderBottom: i < BANKS.length - 1 ? "1px solid var(--border-light)" : "none", color: "var(--text-secondary)" }}>{b.fee}</td>
                  <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, borderBottom: i < BANKS.length - 1 ? "1px solid var(--border-light)" : "none", color: "#DC2626" }}>{b.honest}</td>
                  <td style={{ padding: "12px 16px", fontSize: 13, borderBottom: i < BANKS.length - 1 ? "1px solid var(--border-light)" : "none", color: "var(--text-secondary)" }}>{b.extra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mb-8" style={{ color: "var(--text-faint)" }}>Rates as of March 2026. Includes processing fee, insurance, and lock-in.</p>

        {/* Breakdown */}
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>The math: ₹50L home loan breakdown</h2>
        <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
          {BREAKDOWN.map(([label, val, dim], i) => (
            <div key={i} className="flex justify-between items-center py-1.5">
              <span className="text-sm" style={{ color: dim ? "var(--text-muted)" : "var(--text-secondary)" }}>{label}</span>
              <span className="text-sm" style={{ color: dim ? "var(--text-muted)" : "var(--text)" }}>{val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-3" style={{ borderTop: "2px solid var(--border)" }}>
            <span className="text-sm font-extrabold" style={{ color: "var(--text)" }}>Your honest rate</span>
            <div style={{ textAlign: "right" }}>
              <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>9.35%</span>
              <div className="text-xs" style={{ color: "var(--text-faint)" }}>Extra cost over 20 years: ₹4,72,000</div>
            </div>
          </div>
        </div>

        {/* Tool CTA */}
        <div className="rounded-2xl p-6 mb-8 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <div className="text-2xl mb-2">🧮</div>
          <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Loan Truth Calculator</h3>
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>Input your loan amount, rate, and fees — get your honest effective APR + exact extra cost over tenure.</p>
          <div className="inline-block rounded-lg px-5 py-2.5 text-sm font-bold" style={{ background: "var(--bg-muted)", color: "var(--text-muted)" }}>Launching April 2026</div>
        </div>

        {/* Guides */}
        <h2 className="text-lg font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>Loan guides</h2>
        <div className="flex flex-col gap-2.5 mb-8">
          {GUIDES.map((g, i) => (
            <Link key={i} href={g.href} className="block no-underline" style={{ color: "inherit" }}>
              <div className="rounded-xl p-4 flex gap-4 items-start transition-all cursor-pointer"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold flex-shrink-0" style={{ background: "var(--blue-bg)", color: "var(--blue)" }}>{g.n}</div>
                <div style={{ flex: 1 }}>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: g.tagBg, color: g.tagColor }}>{g.tag} · {g.time}</span>
                  <div className="text-sm font-bold mt-1.5 mb-1" style={{ color: "var(--text)" }}>{g.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</div>
                </div>
                <span className="text-xs font-semibold flex-shrink-0 mt-1" style={{ color: "var(--blue)" }}>Read →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Frequently asked questions</h2>
        <div className="flex flex-col gap-2 mb-8">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="text-sm font-bold mb-1.5" style={{ color: "var(--text)" }}>{f.q}</div>
              <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.a}</div>
            </div>
          ))}
        </div>

        {/* Explore */}
        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-1" style={{ color: "var(--text)" }}>The honest number on every financial product</h2>
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Advertised vs actual across all categories.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {EXPLORE.map((cat, i) => (
              <Link key={i} href={cat.href} className="no-underline" style={{ color: "inherit" }}>
                <div className="rounded-xl p-4 cursor-pointer h-full" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="text-sm font-bold mb-1" style={{ color: cat.color }}>{cat.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{cat.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
