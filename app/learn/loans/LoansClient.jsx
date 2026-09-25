"use client";
import Link from "next/link";

const GUIDES = [
  { n: "01", title: "Home loan costs and charges", desc: "Understand interest, processing fees, optional add-ons and repayment terms.", time: "6 min", tag: "Guide", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/loans/home-loan-true-cost" },
  { n: "02", title: "Personal loan: compare the full cost", desc: "Review the repayment schedule, fees and prepayment conditions before accepting an offer.", time: "5 min", tag: "Guide", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/loans/personal-loan-actual-apr" },
  { n: "03", title: "Fixed vs floating rate: what to compare", desc: "Compare rate-reset terms, repayment scenarios and your ability to manage payment changes.", time: "7 min", tag: "Guide", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/loans/fixed-vs-floating-rate" },
  { n: "04", title: "Comparing home-loan offers", desc: "A checklist for comparing current written offers, fees and terms.", time: "8 min", tag: "Guide", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)", href: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
  { n: "05", title: "Loan prepayment: check the applicable rules", desc: "Charges and protections depend on the loan, lender, purpose and applicable directions.", time: "5 min", tag: "Guide", tagColor: "#DC2626", tagBg: "rgba(220,38,38,0.08)", href: "/learn/loans/prepayment-penalty-trap" },
  { n: "06", title: "Education loan: understand the repayment schedule", desc: "See how disbursements, moratorium-period interest and repayment choices affect cost.", time: "6 min", tag: "Guide", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/loans/education-loan-real-cost" },
];

const FAQS = [
  { q: "Does the advertised rate show the full cost?", a: "Not always. Compare the rate and repayment schedule alongside applicable processing and third-party charges, optional products, reset terms and prepayment conditions. Request a written breakdown from each lender." },
  { q: "Can I prepay without a charge?", a: "It depends on the loan terms and applicable RBI directions, including sanction or renewal date, rate type, borrower, loan purpose and lender. Check your agreement and ask the lender to confirm in writing." },
  { q: "Which lender is cheapest?", a: "There is no single answer for every borrower. Eligibility, negotiated rate, fees, tenure and loan terms vary. Compare current written offers for the same amount and tenure." },
  { q: "Fixed or floating?", a: "Compare the starting rate, reset rules, total-cost scenarios and whether your budget can handle a higher payment. Future rates and total savings cannot be guaranteed." },
];

const HERO_LOANS = [
  { icon: "🏠", iconBg: "rgba(96,165,250,0.15)", name: "Home loan", sub: "Compare rate, fees and reset terms" },
  { icon: "💸", iconBg: "rgba(248,113,113,0.15)", name: "Personal loan", sub: "Compare total repayment and fees" },
  { icon: "🎓", iconBg: "rgba(250,204,21,0.15)", name: "Education loan", sub: "Review moratorium and repayment" },
];

const QUICK_NAV = [
  { icon: "🧮", name: "Loan Calculator", desc: "Estimate EMI and upfront fees", href: "/loan-calculator" },
  { icon: "🏠", name: "Home Loan Guide", desc: "Rates, fees and terms", href: "/learn/loans/home-loan-true-cost" },
  { icon: "⚖️", name: "Compare Offers", desc: "A lender checklist", href: "/learn/loans/sbi-vs-hdfc-vs-icici-home-loan" },
  { icon: "⚠️", name: "Prepayment Guide", desc: "Check applicable rules", href: "/learn/loans/prepayment-penalty-trap" },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "Compare current card benefits", href: "/cards", color: "#7C3AED" },
  { name: "Insurance", desc: "Understand cover and exclusions", href: "/learn/insurance", color: "#DB2777" },
  { name: "Savings & FDs", desc: "Compare rates and real returns", href: "/learn/savings", color: "#D97706" },
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
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA" }} /> Loan guides and calculators
            </div>
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#F1F5F9", marginBottom: 12 }}>
              Understand the <span style={{ color: "#60A5FA" }}>full cost</span> of borrowing.
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>
              Compare the interest rate, repayment schedule, fees and terms in each written offer. Costs and eligibility vary by borrower and lender.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[["6", "Practical guides"], ["0", "Live rate rankings"], ["₹0", "Always free"]].map(([n, l], i) => (
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

        <div className="rounded-xl p-5 mb-8" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>How to compare loan offers</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Compare offers for the same amount and tenure. Ask for the applicable interest rate and reset terms, a repayment schedule, a written list of charges and any prepayment conditions. Do not assume optional insurance or other add-ons are mandatory; confirm the terms directly with the lender.</p>
        </div>

        {/* Tool CTA */}
        <div className="rounded-2xl p-6 mb-8 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <div className="text-2xl mb-2">🧮</div>
          <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>Loan Truth Calculator</h3>
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>Estimate monthly instalments and the effect of upfront charges using your own assumptions.</p>
          <Link href="/loan-calculator" className="inline-block rounded-lg px-5 py-2.5 text-sm font-bold no-underline" style={{ background: "linear-gradient(135deg, \#2563eb, \#1E40AF)", color: "\#fff" }}>Try Loan Calculator →</Link>
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
