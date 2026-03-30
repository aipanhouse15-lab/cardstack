"use client";
import Link from "next/link";

const HERO_ITEMS = [
  { icon: "📊", iconBg: "rgba(74,222,128,0.15)", name: "Old regime", sub: "₹15L CTC, ₹3.5L deductions", adv: "₹1,56,000 tax", real: "₹1,17,000" },
  { icon: "📋", iconBg: "rgba(96,165,250,0.15)", name: "New regime", sub: "₹15L CTC, std deduction only", adv: "Simpler", real: "₹1,45,600" },
  { icon: "💰", iconBg: "rgba(251,191,36,0.15)", name: "80C + NPS combo", sub: "Max ₹2L deduction", adv: "₹2,00,000", real: "₹62,400 saved" },
];

const QUICK_NAV = [
  { icon: "🧮", name: "Tax Regime Calculator", desc: "Old vs new — your number", href: "/tax-calculator" },
  { icon: "⚖️", name: "Old vs New Regime", desc: "Which saves more", href: "/learn/tax/old-vs-new-regime" },
  { icon: "💰", name: "80C Guide", desc: "Beyond the obvious", href: "/learn/tax/80c-beyond-the-obvious" },
  { icon: "🏠", name: "HRA Calculation", desc: "3-formula math", href: "/learn/tax/hra-calculation" },
  { icon: "💳", name: "CC Rewards Tax", desc: "Do you need to worry?", href: "/learn/tax/tax-on-credit-card-rewards" },
];

const GUIDES = [
  { n: "01", title: "Old vs new regime: which saves you more?", desc: "Breakeven at ~₹3.75L deductions. Below that, new regime wins.", time: "6 min", tag: "Guide", tagColor: "#16A34A", tagBg: "rgba(22,163,74,0.08)", href: "/learn/tax/old-vs-new-regime" },
  { n: "02", title: "80C beyond the obvious: NPS, ELSS, tuition fees ranked", desc: "NPS gives extra ₹50K deduction. ELSS beats FD. Life insurance is worst.", time: "7 min", tag: "Analysis", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/tax/80c-beyond-the-obvious" },
  { n: "03", title: "HRA calculation: what you actually save vs what you think", desc: "Minimum of three formulas — most people only check one.", time: "5 min", tag: "Guide", tagColor: "#16A34A", tagBg: "rgba(22,163,74,0.08)", href: "/learn/tax/hra-calculation" },
  { n: "04", title: "Tax on credit card rewards: do you need to worry?", desc: "Cashback is not taxable. Welcome bonuses technically are above ₹50K.", time: "4 min", tag: "Guide", tagColor: "#16A34A", tagBg: "rgba(22,163,74,0.08)", href: "/learn/tax/tax-on-credit-card-rewards" },
];

const FAQS = [
  { q: "Which tax regime should I choose?", a: "If your deductions (80C + HRA + 80D + home loan) exceed ~₹3.75L, old regime saves more. Below that, new regime is simpler and cheaper." },
  { q: "Is NPS worth it for tax saving?", a: "Yes — extra ₹50K deduction under 80CCD(1B) saves ₹15,600 at 30% bracket. Best tax-saving option after maxing 80C." },
  { q: "Are credit card rewards taxable?", a: "Cashback on purchases: no. Welcome bonuses and referral rewards above ₹50K aggregate: technically yes under Section 56(2)(x)." },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "5% → 2.8% after caps", href: "/cards", color: "#7C3AED" },
  { name: "Loans", desc: "8.5% → 9.35% after fees", href: "/learn/loans", color: "#2563EB" },
  { name: "Insurance", desc: "₹10L → ₹4.2L coverage", href: "/learn/insurance", color: "#DB2777" },
  { name: "Savings & FDs", desc: "7.5% → 0.15% real return", href: "/learn/savings", color: "#D97706" },
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
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>Old vs new is not a simple answer. It depends on HRA, 80C, NPS, and insurance deductions. We calculate the exact breakeven for your salary range.</p>
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
        {/* Old vs New comparison */}
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Old vs new regime — quick comparison</h2>
        <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid var(--border)" }}>
          <div className="grid grid-cols-2">
            <div className="p-5" style={{ background: "var(--bg-section-green)", borderRight: "1px solid var(--border)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--green)" }}>Old regime</h3>
              <div className="flex flex-col gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>✓ 80C up to ₹1.5L</span><span>✓ HRA exemption</span><span>✓ 80D health insurance</span><span>✓ NPS extra ₹50K</span><span>✓ Home loan ₹2L</span><span style={{ color: "var(--orange)" }}>✕ Higher slabs</span>
              </div>
            </div>
            <div className="p-5" style={{ background: "var(--bg-section-blue)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--blue)" }}>New regime</h3>
              <div className="flex flex-col gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>✓ Lower slabs</span><span>✓ Std deduction ₹75K</span><span>✓ Simpler, no paperwork</span><span>✓ NPS employer contribution</span><span style={{ color: "var(--orange)" }}>✕ No 80C, HRA, 80D</span><span style={{ color: "var(--orange)" }}>✕ No home loan interest</span>
              </div>
            </div>
          </div>
          <div className="p-4 text-center" style={{ background: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}><strong style={{ color: "var(--text)" }}>Rule of thumb:</strong> Deductions above ~₹3.75L → old regime. Below → new regime.</p>
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
