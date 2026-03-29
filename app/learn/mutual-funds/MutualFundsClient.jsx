"use client";
import Link from "next/link";

const HERO_ITEMS = [
  { icon: "📈", iconBg: "rgba(96,165,250,0.15)", name: "Large-cap fund", sub: "₹10K SIP, 10 years", adv: "15.0% CAGR", real: "11.8%" },
  { icon: "💸", iconBg: "rgba(248,113,113,0.15)", name: "Regular vs direct", sub: "₹10K SIP, 20 years", adv: "₹91.2L", real: "₹1.03Cr" },
  { icon: "📊", iconBg: "rgba(74,222,128,0.15)", name: "SIP XIRR vs CAGR", sub: "Nifty 50, 10 years", adv: "13.5% CAGR", real: "11.2% XIRR" },
];

const QUICK_NAV = [
  { icon: "📈", name: "CAGR vs Actual", desc: "Net investor return", href: "/learn/mutual-funds/cagr-vs-actual-return" },
  { icon: "⚖️", name: "Direct vs Regular", desc: "₹12L difference", href: "/learn/mutual-funds/direct-vs-regular" },
  { icon: "📊", name: "SIP Real Returns", desc: "XIRR not CAGR", href: "/learn/mutual-funds/sip-advertised-vs-actual" },
];

const GUIDES = [
  { n: "01", title: "Your 15% CAGR fund gives 11.8% after expense ratio + LTCG", desc: "1.5% expense ratio + 12.5% LTCG tax silently eats your returns.", time: "5 min", tag: "Guide", tagColor: "#0891B2", tagBg: "rgba(8,145,178,0.08)", href: "/learn/mutual-funds/cagr-vs-actual-return" },
  { n: "02", title: "Direct vs regular: the 1% that costs you ₹12L over 20 years", desc: "Regular plans pay distributors 0.5-1.5% annually from your returns.", time: "6 min", tag: "Analysis", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/mutual-funds/direct-vs-regular" },
  { n: "03", title: "SIP returns: advertised vs actual after all charges", desc: "Use XIRR not CAGR. Actual SIP return is 2-3% lower than advertised.", time: "5 min", tag: "Guide", tagColor: "#0891B2", tagBg: "rgba(8,145,178,0.08)", href: "/learn/mutual-funds/sip-advertised-vs-actual" },
];

const FAQS = [
  { q: "Why is my SIP return lower than the fund return?", a: "Funds show CAGR (lump-sum return). SIPs earn XIRR (time-weighted). Recent SIPs have barely grown, pulling down the average. XIRR is always lower than CAGR for SIPs." },
  { q: "Should I switch from regular to direct?", a: "Yes. The 0.5-1.5% annual expense difference compounds to ₹8-12L on a ₹10K SIP over 20 years. Switch via Groww, Kuvera, or AMC website." },
  { q: "How much does LTCG tax reduce my returns?", a: "Equity LTCG above ₹1.25L gains is taxed at 12.5%. On a ₹12L investment growing to ₹28L, tax is ~₹1.8L. Effective return drops from 15% to ~12.5%." },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "5% → 2.8% after caps", href: "/cards", color: "#7C3AED" },
  { name: "Loans", desc: "8.5% → 9.35% after fees", href: "/learn/loans", color: "#2563EB" },
  { name: "Insurance", desc: "₹10L → ₹4.2L coverage", href: "/learn/insurance", color: "#DB2777" },
  { name: "Savings & FDs", desc: "7.5% → 0.15% real return", href: "/learn/savings", color: "#D97706" },
];

export default function MutualFundsClient() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #083344, #155E75, #083344)", position: "relative", overflow: "hidden", padding: "48px 24px 56px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(8,145,178,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -30, width: 350, height: 350, background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 60%)", pointerEvents: "none" }} />
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-[2]" style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22D3EE" }} /> The honest number on mutual funds</div>
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#F1F5F9", marginBottom: 12 }}>Your <span style={{ color: "#22D3EE" }}>15% CAGR</span> fund<br />gives you <span style={{ color: "#F87171" }}>11.8%</span> after charges.</h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>Fund houses show gross returns. You earn net returns — after expense ratio, exit load, and capital gains tax. The gap is bigger than you think.</p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>{[["3", "Honest guides"], ["₹0", "Always free"]].map(([n, l], i) => (<div key={i}><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>{n}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{l}</div></div>))}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {HERO_ITEMS.map((t, i) => (<div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 18px" }}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: t.iconBg }}>{t.icon}</div><div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.sub}</div></div></div><div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>{t.adv}</div><div style={{ fontSize: 18, fontWeight: 800, color: "#F87171" }}>{t.real}</div></div></div>))}
          </div>
        </div>
      </div>

      <div style={{ transform: "translateY(-28px)", position: "relative", zIndex: 3, padding: "0 24px", marginBottom: 16 }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" style={{ maxWidth: 1060, margin: "0 auto" }}>
          {QUICK_NAV.map((t, i) => (<Link key={i} href={t.href} className="no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-3.5 flex items-center gap-3 transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}><div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: "var(--cyan-bg)" }}>{t.icon}</div><div><div className="text-xs font-bold" style={{ color: "var(--text)" }}>{t.name}</div><div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{t.desc}</div></div></div></Link>))}
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Coming soon */}
        <div className="rounded-2xl p-6 mb-8 text-center" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>More mutual fund content coming soon</h3>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>Fund selection guides, SIP optimization, and tax-efficient withdrawal strategies.</p>
        </div>

        <h2 className="text-lg font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>Mutual fund guides</h2>
        <div className="flex flex-col gap-2.5 mb-8">
          {GUIDES.map((g, i) => (<Link key={i} href={g.href} className="block no-underline" style={{ color: "inherit" }}><div className="rounded-xl p-4 flex gap-4 items-start transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}><div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold flex-shrink-0" style={{ background: "var(--cyan-bg)", color: "var(--cyan)" }}>{g.n}</div><div style={{ flex: 1 }}><span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: g.tagBg, color: g.tagColor }}>{g.tag} · {g.time}</span><div className="text-sm font-bold mt-1.5 mb-1" style={{ color: "var(--text)" }}>{g.title}</div><div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</div></div><span className="text-xs font-semibold flex-shrink-0 mt-1" style={{ color: "var(--cyan)" }}>Read →</span></div></Link>))}
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
