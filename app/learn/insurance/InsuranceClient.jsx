"use client";
import Link from "next/link";

const HERO_ITEMS = [
  { icon: "❤️", iconBg: "rgba(244,114,182,0.15)", name: "Health cover", sub: "Read policy limits", adv: "Room & ICU", real: "Check terms" },
  { icon: "🛡️", iconBg: "rgba(248,113,113,0.15)", name: "Term cover", sub: "Benefit per contract", adv: "Sum assured", real: "Exclusions apply" },
  { icon: "🏥", iconBg: "rgba(250,204,21,0.15)", name: "Claims", sub: "Policy-specific", adv: "Check CIS", real: "Know limits" },
];

const QUICK_NAV = [
  { icon: "🧮", name: "Coverage Calculator", desc: "What your claim pays", href: "/insurance-calculator" },
  { icon: "📊", name: "Coverage Breakdown", desc: "What your policy pays", href: "/learn/insurance/health-insurance-effective-coverage" },
  { icon: "🏆", name: "Claims Data", desc: "How to read insurer data", href: "/learn/insurance/claim-settlement-ratios-2026" },
  { icon: "🏥", name: "Room Rent Trap", desc: "Proportional reduction", href: "/learn/insurance/room-rent-trap" },
  { icon: "👨‍👩‍👧", name: "Insurance for Parents", desc: "60+ age guide", href: "/learn/insurance/health-insurance-for-parents" },
];

const GUIDES = [
  { n: "01", title: "How policy terms affect a health insurance claim", desc: "Understand co-pay, room and ICU limits, sub-limits, exclusions and waiting periods in your policy.", time: "7 min", tag: "Health", tagColor: "#DB2777", tagBg: "rgba(219,39,119,0.08)", href: "/learn/insurance/health-insurance-effective-coverage" },
  { n: "02", title: "Claim settlement ratios: what the data can and cannot tell you", desc: "Read insurer-level claim statistics with context; they do not predict an individual claim outcome.", time: "6 min", tag: "Data guide", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)", href: "/learn/insurance/claim-settlement-ratios-2026" },
  { n: "03", title: "Term insurance benefits and claim data", desc: "Why a claim ratio is not a forecast of the amount an individual beneficiary receives.", time: "5 min", tag: "Term life", tagColor: "#2563eb", tagBg: "rgba(37,99,235,0.08)", href: "/learn/insurance/term-insurance-real-value" },
  { n: "04", title: "Room-rent limits: check the wording and claim calculation", desc: "Some contracts may link room eligibility to other admissible expenses; terms differ by policy.", time: "5 min", tag: "Health", tagColor: "#DC2626", tagBg: "rgba(220,38,38,0.08)", href: "/learn/insurance/room-rent-trap" },
  { n: "05", title: "Health insurance for parents: what to check before buying", desc: "Compare underwriting, waiting periods, co-pay, hospital network and policy wording for the people you cover.", time: "6 min", tag: "Guide", tagColor: "#DB2777", tagBg: "rgba(219,39,119,0.08)", href: "/learn/insurance/health-insurance-for-parents" },
  { n: "06", title: "Co-pay vs no co-pay: compare the contract and premium", desc: "Understand the cost-sharing clause and model its effect using your own quote and claim scenario.", time: "5 min", tag: "Analysis", tagColor: "#ea580c", tagBg: "rgba(234,88,12,0.08)", href: "/learn/insurance/copay-vs-no-copay" },
];

const FAQS = [
  { q: "Does a ₹10 lakh policy always pay the full sum insured?", a: "Not necessarily, but there is no universal payout figure. The amount payable depends on admissible expenses, limits, co-payments, exclusions, waiting periods and the facts of the claim. Read the policy wording and Customer Information Sheet." },
  { q: "Which health insurer has the best claim settlement?", a: "No single claim ratio can establish which insurer is best or predict whether a particular claim will be paid. Compare current, consistently defined data alongside policy coverage, service, network and exclusions." },
  { q: "Should I take a policy with co-pay?", a: "Compare the premium and your possible share of an admissible claim under the actual contract. A co-pay may lower premium but increases your cost when a covered claim occurs; there is no one-size-fits-all answer." },
  { q: "What should I check when buying cover for parents?", a: "Review eligibility, premium, co-pay, room/ICU limits, pre-existing disease waiting periods, exclusions and nearby network hospitals. Availability and underwriting depend on the insurer and applicant." },
];

const EXPLORE = [
  { name: "Credit Cards", desc: "Compare rewards, fees and caps", href: "/cards", color: "#7C3AED" },
  { name: "Loans", desc: "Compare rates, fees and total cost", href: "/learn/loans", color: "#2563EB" },
  { name: "Savings & FDs", desc: "Returns after tax and inflation", href: "/learn/savings", color: "#D97706" },
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
              Understand what your<br /><span style={{ color: "#F472B6" }}>insurance policy covers.</span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 420, marginBottom: 20 }}>
              Coverage depends on the exact contract and claim. Learn how to check co-payments, sub-limits, exclusions, waiting periods and network conditions.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[["6", "Practical guides"], ["0", "Insurer rankings"], ["₹0", "Always free"]].map(([n, l], i) => (
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
        <div className="rounded-xl p-4 mb-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>Start with your policy documents</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>There is no typical payout percentage that applies across policies. Check the policy wording and Customer Information Sheet for room and ICU limits, co-payment, deductibles, disease sub-limits, exclusions, waiting periods and claim procedures. Ask the insurer to clarify anything you cannot interpret.</p>
        </div>

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
