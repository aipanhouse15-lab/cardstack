"use client";
import Link from "next/link";

const HERO_ITEMS = [
  { icon: "📊", iconBg: "rgba(74,222,128,0.15)", name: "Old regime", sub: "Deductions subject to eligibility", adv: "Compare", real: "Your estimate" },
  { icon: "📋", iconBg: "rgba(96,165,250,0.15)", name: "New regime", sub: "Default regime; conditions apply", adv: "Compare", real: "Your estimate" },
  { icon: "💰", iconBg: "rgba(251,191,36,0.15)", name: "Tax-year rules", sub: "Rates and deductions can change", adv: "Check", real: "Official guidance" },
];

const QUICK_NAV = [
  { icon: "🧮", name: "Tax Regime Calculator", desc: "Old vs new — your number", href: "/tax-calculator" },
  { icon: "⚖️", name: "Old vs New Regime", desc: "Which saves more", href: "/learn/tax/old-vs-new-regime" },
  { icon: "💰", name: "80C Guide", desc: "Beyond the obvious", href: "/learn/tax/80c-beyond-the-obvious" },
  { icon: "🏠", name: "HRA Calculation", desc: "3-formula math", href: "/learn/tax/hra-calculation" },
  { icon: "💳", name: "CC Rewards Tax", desc: "Do you need to worry?", href: "/learn/tax/tax-on-credit-card-rewards" },
];

const GUIDES = [
  { n: "01", title: "Old vs new regime: compare your tax-year estimate", desc: "The result depends on income, eligible deductions, rebates and the applicable year’s rules.", time: "6 min", tag: "Guide", tagColor: "#16A34A", tagBg: "rgba(22,163,74,0.08)", href: "/learn/tax/old-vs-new-regime" },
  { n: "02", title: "Tax-saving investments: check eligibility first", desc: "Review the applicable regime, year, statutory conditions and product risks before relying on a deduction.", time: "7 min", tag: "Guide", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/tax/80c-beyond-the-obvious" },
  { n: "03", title: "HRA exemption: calculation and eligibility checklist", desc: "Understand the general calculation structure, regime eligibility and records to retain.", time: "5 min", tag: "Guide", tagColor: "#16A34A", tagBg: "rgba(22,163,74,0.08)", href: "/learn/tax/hra-calculation" },
  { n: "04", title: "Tax questions about credit-card rewards", desc: "Treatment can depend on how rewards relate to personal or business spending.", time: "4 min", tag: "Guide", tagColor: "#16A34A", tagBg: "rgba(22,163,74,0.08)", href: "/learn/tax/tax-on-credit-card-rewards" },
];

const FAQS = [
  { q: "Which tax regime should I choose?", a: "Compare both using your income details and eligible tax-year deductions, exemptions and rebates. A fixed deduction threshold is not reliable for everyone." },
  { q: "Is NPS worth it for tax saving?", a: "The tax treatment and eligibility depend on the applicable regime and tax year. Consider investment, withdrawal and lock-in terms as well as any potential deduction." },
  { q: "Are credit card rewards taxable?", a: "It depends on the circumstances, including whether rewards relate to business expenses. Seek current tax guidance for your situation." },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "Compare rewards after fees and caps", href: "/cards", color: "#7C3AED" },
  { name: "Loans", desc: "Compare rates, fees and total cost", href: "/learn/loans", color: "#2563EB" },
  { name: "Insurance", desc: "Policy terms and claims", href: "/learn/insurance", color: "#DB2777" },
  { name: "Savings & FDs", desc: "Returns after tax and inflation", href: "/learn/savings", color: "#D97706" },
];

export default function TaxClient() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #052E16, #166534, #052E16)", position: "relative", overflow: "hidden", padding: "48px 24px 56px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(74,222,128,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -30, width: 350, height: 350, background: "radial-gradient(circle, rgba(22,163,74,0.12), transparent 60%)", pointerEvents: "none" }} />
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-[2]" style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} /> The honest number on taxes</div>
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#F1F5F9", marginBottom: 12 }}>Which tax regime<br />actually saves you <span style={{ color: "#4ADE80" }}>more</span>?</h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>The better regime depends on your income, tax year, eligible deductions, rebates and personal circumstances. Use the guides as a starting point and verify the rules for your return.</p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>{[["4", "Honest guides"], ["2", "Regimes compared"], ["₹0", "Always free"]].map(([n, l], i) => (<div key={i}><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>{n}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{l}</div></div>))}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {HERO_ITEMS.map((t, i) => (<div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 18px" }}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: t.iconBg }}>{t.icon}</div><div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.sub}</div></div></div><div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{t.adv}</div><div style={{ fontSize: 18, fontWeight: 800, color: "#4ADE80" }}>{t.real}</div></div></div>))}
          </div>
        </div>
      </div>

      <div style={{ transform: "translateY(-28px)", position: "relative", zIndex: 3, padding: "0 24px", marginBottom: 16 }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ maxWidth: 1060, margin: "0 auto" }}>
          {QUICK_NAV.map((t, i) => (<Link key={i} href={t.href} className="no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-3.5 flex items-center gap-3 transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}><div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: "var(--green-bg)" }}>{t.icon}</div><div><div className="text-xs font-bold" style={{ color: "var(--text)" }}>{t.name}</div><div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{t.desc}</div></div></div></Link>))}
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Regime comparison framework */}
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Compare regimes for the correct tax year</h2>
        <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid var(--border)" }}>
          <div className="grid grid-cols-2">
            <div className="p-5" style={{ background: "var(--bg-section-green)", borderRight: "1px solid var(--border)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--green)" }}>Old regime</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>Some deductions and exemptions may be available if you meet the rules for the relevant year. Check which claims apply to your income and circumstances.</p>
            </div>
            <div className="p-5" style={{ background: "var(--bg-section-blue)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--blue)" }}>New regime</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>Rates, rebates and permitted deductions differ. Confirm the current year’s rules and your eligibility rather than reusing last year’s comparison.</p>
            </div>
          </div>
          <div className="p-4 text-center" style={{ background: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}><strong style={{ color: "var(--text)" }}>Compare, don’t assume:</strong> calculate both regimes using the rules and eligible tax items for the relevant tax year.</p>
          </div>
        </div>

        <h2 className="text-lg font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>Tax guides</h2>
        <div className="flex flex-col gap-2.5 mb-8">
          {GUIDES.map((g, i) => (<Link key={i} href={g.href} className="block no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-4 flex gap-4 items-start transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}><div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold flex-shrink-0" style={{ background: "var(--green-bg)", color: "var(--green)" }}>{g.n}</div><div style={{ flex: 1 }}><span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: g.tagBg, color: g.tagColor }}>{g.tag} · {g.time}</span><div className="text-sm font-bold mt-1.5 mb-1" style={{ color: "var(--text)" }}>{g.title}</div><div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</div></div><span className="text-xs font-semibold flex-shrink-0 mt-1" style={{ color: "var(--green)" }}>Read →</span></div></Link>))}
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
