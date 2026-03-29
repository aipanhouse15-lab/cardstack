"use client";
import Link from "next/link";

const HERO_ITEMS = [
  { icon: "❤️", iconBg: "rgba(244,114,182,0.15)", name: "Health insurance", sub: "₹10L policy", adv: "₹10,00,000", real: "₹4,20,000" },
  { icon: "🛡️", iconBg: "rgba(248,113,113,0.15)", name: "Term insurance", sub: "₹1Cr cover", adv: "₹1,00,00,000", real: "₹92,00,000" },
  { icon: "🏥", iconBg: "rgba(250,204,21,0.15)", name: "Room rent trap", sub: "₹5L surgery", adv: "₹5,00,000", real: "₹3,33,000" },
];

const QUICK_NAV = [
  { icon: "📊", name: "Coverage Breakdown", desc: "What your policy pays", href: "/learn/insurance/health-insurance-effective-coverage" },
  { icon: "🏆", name: "Claim Rankings", desc: "Which insurer pays", href: "/learn/insurance/claim-settlement-ratios-2026" },
  { icon: "🏥", name: "Room Rent Trap", desc: "Proportional reduction", href: "/learn/insurance/room-rent-trap" },
  { icon: "👨‍👩‍👧", name: "Insurance for Parents", desc: "60+ age guide", href: "/learn/insurance/health-insurance-for-parents" },
];

const GUIDES = [
  { n: "01", title: "Your ₹10L health policy covers ₹4.2L — the full breakdown", desc: "Co-pay, room rent sub-limits, disease caps, consumable exclusions, and waiting periods explained.", time: "7 min", tag: "Health", tagColor: "#DB2777", tagBg: "rgba(219,39,119,0.08)", href: "/learn/insurance/health-insurance-effective-coverage" },
  { n: "02", title: "Claim settlement ratios 2026: which insurer actually pays?", desc: "Every major insurer ranked by percentage of claims approved.", time: "6 min", tag: "Rankings", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)", href: "/learn/insurance/claim-settlement-ratios-2026" },
  { n: "03", title: "Term insurance: ₹1Cr cover is actually worth ₹92L", desc: "Claim settlement ratio x sum insured = what your family gets.", time: "5 min", tag: "Term life", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/insurance/term-insurance-real-value" },
  { n: "04", title: "Room rent trap: how ₹8K sub-limit turns ₹5L surgery into ₹3L", desc: "Proportional reduction applies to ALL charges, not just room cost.", time: "5 min", tag: "Warning", tagColor: "#DC2626", tagBg: "rgba(220,38,38,0.08)", href: "/learn/insurance/room-rent-trap" },
  { n: "05", title: "Health insurance for parents: what to check before buying", desc: "Pre-existing waiting, co-pay, and network hospitals for 55+ age group.", time: "6 min", tag: "Guide", tagColor: "#DB2777", tagBg: "rgba(219,39,119,0.08)", href: "/learn/insurance/health-insurance-for-parents" },
  { n: "06", title: "Co-pay vs no co-pay: is the premium difference worth it?", desc: "20% co-pay saves ₹3K/year but costs ₹1.6L in one hospitalization.", time: "5 min", tag: "Analysis", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/insurance/copay-vs-no-copay" },
];

const COVERAGE_BAR = [
  { label: "₹4.2L usable", pct: "42%", bg: "rgba(22,163,74,0.15)", color: "var(--green)" },
  { label: "₹5.8L lost to fine print", pct: "58%", bg: "rgba(220,38,38,0.1)", color: "#DC2626" },
];

const DEDUCTIONS = [
  ["20% co-pay on claims above ₹2L", "-₹1,60,000"],
  ["Room rent cap: ₹8,000/day (ICU ₹16K)", "-₹2,40,000"],
  ["Disease-specific sub-limits", "-₹80,000"],
  ["Consumables not covered", "-₹40,000"],
  ["Pre-existing: 3-year waiting period", "-₹60,000"],
];

const FAQS = [
  { q: "Does my ₹10L policy really only cover ₹4.2L?", a: "On average, yes. Co-pay, room rent sub-limits, disease caps, and waiting periods reduce your usable coverage to 40-50% of the headline sum insured in year 1." },
  { q: "Which health insurer has the best claim settlement?", a: "New India Assurance (95.2%), Star Health (89.4%), and HDFC Ergo (88.7%) consistently rank highest. Avoid insurers below 85%." },
  { q: "Should I take a policy with co-pay?", a: "Generally no. The ₹3-5K annual premium saving is wiped out by one hospitalization where you pay 20% from pocket (₹1-3L)." },
  { q: "How do I buy insurance for parents above 60?", a: "Buy early (55-58), choose no co-pay, check network hospitals in their city, and consider a base + super top-up combo to save 30-40% on premium." },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "5% → 2.8% after caps", href: "/cards", color: "#7C3AED" },
  { name: "Loans", desc: "8.5% → 9.35% after fees", href: "/learn/loans", color: "#2563EB" },
  { name: "Savings & FDs", desc: "7.5% → 0.15% real return", href: "/learn/savings", color: "#D97706" },
  { name: "Tax Planning", desc: "Old vs new regime math", href: "/learn/tax", color: "#16A34A" },
];

export default function InsuranceClient() {
  return (
    <>
      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #4A1942, #831843, #4A1942)", position: "relative", overflow: "hidden", padding: "48px 24px 56px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(244,114,182,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -30, width: 350, height: 350, background: "radial-gradient(circle, rgba(219,39,119,0.12), transparent 60%)", pointerEvents: "none" }} />
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-[2]" style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F472B6" }} /> The honest number on insurance
            </div>
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#F1F5F9", marginBottom: 12 }}>
              Your <span style={{ color: "#F472B6" }}>₹10L</span> health insurance<br />actually covers <span style={{ color: "#F87171" }}>₹4.2L</span>.
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>
              PolicyBazaar compares premiums. We compare what your policy actually pays. Co-pay, sub-limits, waiting periods — the full truth.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[["6", "Honest guides"], ["10+", "Insurers ranked"], ["₹0", "Always free"]].map(([n, l], i) => (
                <div key={i}><div style={{ fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>{n}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {HERO_ITEMS.map((t, i) => (
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
              <div className="rounded-xl p-3.5 flex items-center gap-3 transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: "var(--pink-bg)" }}>{t.icon}</div>
                <div><div className="text-xs font-bold" style={{ color: "var(--text)" }}>{t.name}</div><div className="text-[10px]" style={{ color: "var(--text-faint)" }}>{t.desc}</div></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Coverage breakdown */}
        <h2 className="text-lg font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>Typical ₹10L health policy — what you actually get</h2>
        <div className="rounded-2xl p-6 mb-3" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
          <div className="flex rounded-lg overflow-hidden mb-4" style={{ height: 28 }}>
            {COVERAGE_BAR.map((b, i) => (
              <div key={i} className="flex items-center justify-center text-[11px] font-bold" style={{ width: b.pct, background: b.bg, color: b.color }}>{b.label}</div>
            ))}
          </div>
          {DEDUCTIONS.map(([label, val], i) => (
            <div key={i} className="flex justify-between items-center py-1.5">
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
              <span className="text-sm font-semibold" style={{ color: "#DC2626" }}>{val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-3" style={{ borderTop: "2px solid var(--border)" }}>
            <span className="text-sm font-extrabold" style={{ color: "var(--text)" }}>Effective usable coverage (year 1)</span>
            <span className="text-2xl font-extrabold" style={{ color: "#DC2626" }}>₹4,20,000</span>
          </div>
        </div>
        <p className="text-xs mb-8" style={{ color: "var(--text-faint)" }}>Based on average policy terms across top 5 insurers.</p>

        {/* Guides */}
        <h2 className="text-lg font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>Insurance guides</h2>
        <div className="flex flex-col gap-2.5 mb-8">
          {GUIDES.map((g, i) => (
            <Link key={i} href={g.href} className="block no-underline" style={{ color: "inherit" }}>
              <div className="rounded-xl p-4 flex gap-4 items-start transition-all cursor-pointer" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold flex-shrink-0" style={{ background: "var(--pink-bg)", color: "var(--pink)" }}>{g.n}</div>
                <div style={{ flex: 1 }}>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: g.tagBg, color: g.tagColor }}>{g.tag} · {g.time}</span>
                  <div className="text-sm font-bold mt-1.5 mb-1" style={{ color: "var(--text)" }}>{g.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{g.desc}</div>
                </div>
                <span className="text-xs font-semibold flex-shrink-0 mt-1" style={{ color: "var(--pink)" }}>Read →</span>
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
