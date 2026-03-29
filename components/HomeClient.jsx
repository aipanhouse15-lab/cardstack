"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CARDS, CATEGORIES, calcReward } from "@/data/cards";
import BankLogo from "@/components/BankLogo";

/*
  REVAMPED HOMEPAGE — Financial Truth Platform
  1. Violet hero (split: tagline left, tool picker right)
  2. Category grid (6 categories, floating up from hero)
  3. What Changed banner
  4. Credit card tools (5 tools)
  5. Popular cards + best-for tags
  6. Latest guides (cross-category)
  7. Trust section
  8. Dark CTA
*/

// ─── DATA ───
const TOOL_PICKER = [
  { name: "Smart swipe guide", desc: "Which card to use for every purchase", href: "/smart-swipe", color: "#8B5CF6", iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", featured: true },
  { name: "Find my card gaps", desc: "Categories where you're losing rewards", href: "/gap-finder", color: "#8B5CF6", iconPath: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" },
  { name: "Compare cards", desc: "Side-by-side with honest rates", href: "/compare", color: "#8B5CF6", iconPath: "M16 3h5v5M8 3H3v5M3 16v5h5M21 16v5h-5" },
  { name: "Loan truth calculator", desc: "Real cost of your home or personal loan", href: "/learn/loans", color: "#60A5FA", iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6", badge: "NEW" },
  { name: "Insurance coverage check", desc: "What your policy actually covers", href: "/learn/insurance", color: "#F472B6", iconPath: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", badge: "SOON" },
];

const CATEGORIES_GRID = [
  { name: "Credit cards", desc: "Cap-adjusted reward math shows your real effective rate.", honest: "5% advertised → 2.8% actual", href: "/cards", cta: "5 tools · 75 cards", color: "#7C3AED", bg: "#EDE9FE", text: "#5B21B6", iconPath: "M1 4h22v16H1zM1 10h22", live: true },
  { name: "Loans", desc: "Your \"8.5%\" home loan costs 9.4% after hidden fees.", honest: "₹4.7L extra over 20 years", href: "/learn/loans", cta: "Guides + calculator", color: "#2563EB", bg: "#DBEAFE", text: "#1E40AF", iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" },
  { name: "Insurance", desc: "Your ₹10L policy pays out ~₹4.2L after fine print.", honest: "58% lost to co-pay & sub-limits", href: "/learn/insurance", cta: "Read the breakdown", color: "#DB2777", bg: "#FCE7F3", text: "#9D174D", iconPath: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" },
  { name: "Savings & FDs", desc: "Your 7.5% FD returns 0.15% after TDS and inflation.", honest: "Real return: almost zero", href: "/learn/savings", cta: "See the math", color: "#D97706", bg: "#FEF3C7", text: "#92400E", iconPath: "M2 6h20v12H2zM12 12a3 3 0 100-6 3 3 0 000 6z" },
  { name: "Tax planning", desc: "Old vs new regime — which actually saves more?", honest: "80C beyond the obvious", href: "/learn/tax", cta: "Compare regimes", color: "#16A34A", bg: "#DCFCE7", text: "#166534", iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
  { name: "Mutual funds", desc: "15% CAGR becomes 11.8% after expense ratio and tax.", honest: "Net investor return", href: "/learn/mutual-funds", cta: "Coming soon", color: "#0891B2", bg: "#CFFAFE", text: "#155E75", iconPath: "M22 12h-4l-3 9L9 3l-3 9H2" },
];

const CC_TOOLS = [
  { name: "Smart Swipe", desc: "Best card per purchase", href: "/smart-swipe", iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { name: "Stack Builder", desc: "Optimize your combo", href: "/stack-builder", iconPath: "M2 7h20v14H2zM16 7V5a4 4 0 00-8 0v2" },
  { name: "Gap Finder", desc: "Missing categories", href: "/gap-finder", iconPath: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" },
  { name: "Swipe Check", desc: "Verify your pick", href: "/swipe-check", iconPath: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" },
  { name: "Compare", desc: "Side by side", href: "/compare", iconPath: "M16 3h5v5M8 3H3v5M3 16v5h5M21 16v5h-5" },
];

const POP_CARDS_IDS = ["hdfc-regalia", "sbi-cashback", "axis-ace", "amazon-icici"];
const POP_CARDS_DATA = POP_CARDS_IDS.map(id => CARDS.find(c => c.id === id)).filter(Boolean);
const POP_CARD_GRADS = ["linear-gradient(135deg,#1e3a5f,#3b82f6)", "linear-gradient(135deg,#1a365d,#2563eb)", "linear-gradient(135deg,#5C3A0E,#C8820A)", "linear-gradient(135deg,#2E2E2E,#6B6B6B)"];

const BEST_FOR = [
  { label: "Online shopping", href: "/best/credit-card-for-online-shopping" },
  { label: "Swiggy & Zomato", href: "/best/credit-card-for-swiggy-zomato" },
  { label: "Amazon", href: "/best/credit-card-for-amazon" },
  { label: "Travel", href: "/best/credit-card-for-travel" },
  { label: "No annual fee", href: "/best/best-cashback-credit-card-no-annual-fee" },
  { label: "Groceries", href: "/best/credit-card-for-groceries" },
  { label: "Fuel", href: "/best/credit-card-for-fuel" },
];

const GUIDES = [
  { tag: "Credit cards", tagColor: "#7C3AED", tagBg: "#EDE9FE", title: "Your \"5% cashback\" card gives you 2.8%. Here's the exact math.", time: "8 min", date: "March 2026", href: "/blog" },
  { tag: "Loans", tagColor: "#1E40AF", tagBg: "#DBEAFE", title: "Home loan true cost: what banks hide from you", time: "6 min", date: "March 2026", href: "/learn/loans" },
  { tag: "Insurance", tagColor: "#9D174D", tagBg: "#FCE7F3", title: "Your ₹10L policy covers ₹4.2L. Here's why.", time: "7 min", date: "March 2026", href: "/learn/insurance" },
  { tag: "Savings", tagColor: "#92400E", tagBg: "#FEF3C7", title: "FD at 7.5%? Your real return is 0.15%.", time: "4 min", date: "March 2026", href: "/learn/savings" },
  { tag: "Loans", tagColor: "#1E40AF", tagBg: "#DBEAFE", title: "Personal loan: 10.5% advertised, 13.1% actual", time: "5 min", date: "March 2026", href: "/learn/loans" },
  { tag: "Credit cards", tagColor: "#7C3AED", tagBg: "#EDE9FE", title: "SBI Cashback cap cut — your new effective rate", time: "3 min", date: "April 2026", href: "/blog" },
];

const UPDATES = [
  { type: "nerf", text: "SBI Cashback monthly cap reduced to ₹4,000", cat: "Credit cards", catColor: "#7C3AED", catBg: "#EDE9FE" },
  { type: "nerf", text: "Axis Airtel card benefits downgraded", cat: "Credit cards", catColor: "#7C3AED", catBg: "#EDE9FE" },
  { type: "new", text: "HDFC launched Swiggy co-branded card", cat: "Credit cards", catColor: "#7C3AED", catBg: "#EDE9FE" },
  { type: "rate", text: "SBI home loan rate revised to 8.5% (was 8.7%)", cat: "Loans", catColor: "#1E40AF", catBg: "#DBEAFE" },
];

// ─── SVG Icon helper ───
function SvgIcon({ path, color = "currentColor", size = 22, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {path.split(/(?=[A-Z])/).length > 3
        ? <path d={path} />
        : path.includes("z") || path.includes("Z")
          ? <path d={path} />
          : <path d={path} />
      }
    </svg>
  );
}

// ─── MAIN COMPONENT ───
export default function HomeClient() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 150); }, []);

  const v = { // violet palette
    hero: "#1E1042", heroBdr: "rgba(255,255,255,0.08)", heroMuted: "rgba(255,255,255,0.4)",
    accent: "#8B5CF6", accentLight: "#A78BFA", accentBg: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.18)", accentText: "#7C3AED",
  };

  return (
    <div>
      {/* ═══ 1. HERO — Split: tagline left, tool picker right ═══ */}
      <section style={{
        background: `linear-gradient(135deg, ${v.hero}, #2A1557, ${v.hero})`,
        position: "relative", overflow: "hidden", marginTop: 64,
      }}>
        {/* Glow effects */}
        <div style={{ position: "absolute", top: -150, left: "50%", width: 700, height: 700, background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 65%)", pointerEvents: "none", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -40, width: 400, height: 400, background: "radial-gradient(circle, rgba(167,139,250,0.1), transparent 60%)", pointerEvents: "none" }} />

        <div className="max-w-[1060px] mx-auto px-6 py-14 md:py-16 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 items-center relative z-[2]">
          {/* Left: tagline */}
          <div style={{ transition: "all 0.6s", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(18px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.06)", border: `1px solid ${v.heroBdr}`, borderRadius: 50, padding: "5px 14px", marginBottom: 20, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: v.accentLight, animation: "pulse 2s infinite" }} />
              India's financial truth platform
            </div>
            <h1 style={{ fontSize: "clamp(28px,4.2vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", marginBottom: 14, color: "#F1F5F9" }}>
              The <span style={{ color: v.accentLight }}>honest number</span> on every financial product
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 28, maxWidth: 420 }}>
              Banks advertise one number. You take home another. We calculate the gap — across credit cards, loans, insurance, and savings.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[["75+", "Cards tracked"], ["5", "Live tools"], ["₹0", "Always free"]].map(([n, l], i) => (
                <div key={i}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#E2E8F0" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tool picker */}
          <div style={{ transition: "all 0.6s 0.2s", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(18px)" }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600, marginBottom: 8, letterSpacing: 0.5, textTransform: "uppercase" }}>
              What do you want to do?
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {TOOL_PICKER.map((t, i) => (
                <Link key={i} href={t.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 14,
                    background: t.featured ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${t.featured ? "rgba(139,92,246,0.25)" : v.heroBdr}`,
                    borderRadius: 12, padding: "12px 16px", cursor: "pointer",
                    transition: "all 0.2s", position: "relative",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = t.featured ? "rgba(139,92,246,0.25)" : "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = t.featured ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${t.color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <SvgIcon path={t.iconPath} color={t.color} size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 1 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.desc}</div>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 16 }}>→</span>
                    {t.badge && (
                      <span style={{ position: "absolute", top: 7, right: 10, fontSize: 9, background: t.badge === "NEW" ? v.accent : "rgba(255,255,255,0.1)", color: "#fff", padding: "2px 7px", borderRadius: 50, fontWeight: 700, letterSpacing: 0.3 }}>{t.badge}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. CATEGORY GRID — floating up from hero ═══ */}
      <section className="max-w-[1060px] mx-auto px-6" style={{ transform: "translateY(-32px)", position: "relative", zIndex: 3 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES_GRID.map((cat, i) => (
            <Link key={i} href={cat.href} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="rounded-2xl p-5 transition-all cursor-pointer relative overflow-hidden"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-hover)"; e.currentTarget.style.borderColor = cat.bg; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                {cat.live && <div style={{ position: "absolute", top: 12, right: 12, width: 8, height: 8, borderRadius: "50%", background: cat.color, boxShadow: `0 0 0 3px ${cat.color}25`, animation: "pulse 2s infinite" }} />}
                <div style={{ width: 48, height: 48, borderRadius: 12, background: cat.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <SvgIcon path={cat.iconPath} color={cat.color} size={24} />
                </div>
                <h3 className="text-base font-extrabold mb-1 tracking-tight" style={{ color: "var(--text)" }}>{cat.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-muted)", minHeight: 32 }}>{cat.desc}</p>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold mb-3" style={{ background: cat.bg, color: cat.text }}>{cat.honest}</div>
                <div className="text-xs font-semibold flex items-center gap-1" style={{ color: cat.color }}>
                  {cat.cta} <span className="transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* What Changed banner */}
        <div className="mt-3 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "var(--bg-section-violet)", border: "1px solid var(--border-section-violet)" }}
        >
          <div style={{ flex: 1 }}>
            <div className="text-sm font-extrabold mb-1" style={{ color: v.accentText }}>What changed — April 2026</div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>SBI Cashback cap cut · Axis Airtel downgraded · HDFC Swiggy card launched</div>
          </div>
          <Link href="/whats-changed" className="flex-shrink-0 no-underline">
            <div className="rounded-lg px-4 py-2 text-xs font-bold text-white cursor-pointer" style={{ background: v.accentText }}>View changelog →</div>
          </Link>
        </div>
      </section>

      {/* ═══ 2B. HOW IT WORKS ═══ */}
      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "16px 24px 48px" }}>
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>How Assure Fintech works</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto" }}>Three steps to see the number banks hide from you.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", icon: "🔍", title: "Pick a product", desc: "Credit card, home loan, FD, insurance — choose what you want the truth on." },
            { step: "2", icon: "🧮", title: "We do the math", desc: "Cap-adjusted cashback, effective APR, post-tax returns, real coverage — calculated automatically." },
            { step: "3", icon: "💡", title: "See the honest number", desc: "The actual number you take home. Not the one in the ad." },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-5">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-3.5 flex items-center justify-center text-2xl" style={{ background: "var(--accent-light)", border: "2px solid var(--accent-border)" }}>{s.icon}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest mb-1.5" style={{ color: v.accentText }}>Step {s.step}</div>
              <div className="text-base font-bold mb-1.5" style={{ color: "var(--text)" }}>{s.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 3. CREDIT CARD TOOLS ═══ */}
      <section style={{ maxWidth: 1060, margin: "24px auto 0", padding: "0 24px 48px" }}>
        <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>Credit card tools</h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Five tools that show you the real number behind every swipe.</p>
          </div>
          <Link href="/cards" className="text-sm font-semibold no-underline" style={{ color: v.accentText }}>All 75 cards →</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
          {CC_TOOLS.map((t, i) => (
            <Link key={i} href={t.href} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="rounded-xl p-4 text-center transition-all cursor-pointer"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-section-violet)"; e.currentTarget.style.borderColor = "var(--border-section-violet)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-card)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="w-10 h-10 rounded-xl mx-auto mb-2.5 flex items-center justify-center" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
                  <SvgIcon path={t.iconPath} color={v.accentText} size={18} />
                </div>
                <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{t.name}</div>
                <div className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>{t.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
          {POP_CARDS_DATA.map((c, i) => (
            <Link key={c.id} href={`/cards/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="rounded-xl p-4 transition-all cursor-pointer"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-hover)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <BankLogo bank={c.bank} cardId={c.id} size={36} rounded={8} fontSize={10} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>{c.name}</div>
                    <div className="text-[11px]" style={{ color: "var(--text-faint)" }}>{c.bank}</div>
                  </div>
                </div>
                <div className="flex gap-3 text-xs">
                  <div><span style={{ color: "var(--text-faint)" }}>Best </span><span className="font-bold" style={{ color: "var(--green)" }}>{Math.max(...Object.values(c.rewards))}%</span></div>
                  <div><span style={{ color: "var(--text-faint)" }}>Fee </span><span className="font-semibold" style={{ color: "var(--text)" }}>{c.fee === 0 ? "Free" : `₹${c.fee?.toLocaleString()}`}</span></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Best-for tags */}
        <div className="flex gap-2 flex-wrap">
          {BEST_FOR.map((b, i) => (
            <Link key={i} href={b.href} style={{ textDecoration: "none" }}>
              <div className="rounded-full px-4 py-2 text-xs font-medium cursor-pointer transition-all"
                style={{ background: "var(--accent-light)", color: "var(--accent-text)", border: "1px solid var(--accent-border)" }}
                onMouseEnter={e => { e.currentTarget.style.background = v.accentText; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = v.accentText; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent-light)"; e.currentTarget.style.color = "var(--accent-text)"; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
              >{b.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ 3B. ADVERTISED VS ACTUAL SHOWCASE ═══ */}
      <section style={{ background: "linear-gradient(135deg, #0F0F1A, #1A1A2E)", padding: "56px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -40, width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="text-center mb-9">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA" }} /> The gap is real
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#F1F5F9", letterSpacing: "-1px", marginBottom: 8 }}>What they advertise vs what you get</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", maxWidth: 460, margin: "0 auto" }}>Every financial product has a gap. We measure it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { cat: "Credit Cards", adv: "5.0%", advLabel: "Advertised cashback", real: "2.8%", realLabel: "After monthly caps", gap: "44% lost", color: "#A78BFA", href: "/cards" },
              { cat: "Home Loan", adv: "8.50%", advLabel: "Advertised rate", real: "9.35%", realLabel: "After all fees", gap: "₹4.7L extra", color: "#60A5FA", href: "/learn/loans" },
              { cat: "Health Insurance", adv: "₹10L", advLabel: "Sum insured", real: "₹4.2L", realLabel: "Effective coverage", gap: "58% lost", color: "#F472B6", href: "/learn/insurance" },
              { cat: "Fixed Deposit", adv: "7.50%", advLabel: "Bank rate", real: "0.15%", realLabel: "After tax + inflation", gap: "98% lost", color: "#FBBF24", href: "/learn/savings" },
            ].map((c, i) => (
              <Link key={i} href={c.href} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 24, transition: "all 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = ""; }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: c.color, marginBottom: 16 }}>{c.cat}</div>
                  <div className="flex items-center gap-4 mb-3">
                    <div>
                      <div style={{ fontSize: 28, fontWeight: 800, color: "rgba(255,255,255,0.15)", textDecoration: "line-through", textDecorationColor: "rgba(255,255,255,0.08)" }}>{c.adv}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>{c.advLabel}</div>
                    </div>
                    <div style={{ fontSize: 18, color: "rgba(255,255,255,0.1)" }}>→</div>
                    <div>
                      <div style={{ fontSize: 28, fontWeight: 800, color: "#F87171" }}>{c.real}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{c.realLabel}</div>
                    </div>
                  </div>
                  <div style={{ display: "inline-block", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#F87171" }}>{c.gap}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. LATEST GUIDES ═══ */}
      <section style={{ background: "var(--bg-section-slate)", borderTop: "1px solid var(--border-section-slate)", borderBottom: "1px solid var(--border-section-slate)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>Latest guides</h2>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>The honest number, explained — across every category.</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold no-underline" style={{ color: v.accentText }}>All guides →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GUIDES.map((g, i) => (
              <Link key={i} href={g.href} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="rounded-xl p-5 transition-all cursor-pointer h-full"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-hover)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
                >
                  <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3" style={{ background: g.tagBg, color: g.tagColor }}>{g.tag}</span>
                  <div className="text-sm font-bold leading-snug mb-2.5" style={{ color: "var(--text)", letterSpacing: "-0.2px" }}>{g.title}</div>
                  <div className="text-xs" style={{ color: "var(--text-faint)" }}>{g.time} · {g.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. WHAT CHANGED (detailed) ═══ */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
        <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>What changed</h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Banks change terms quietly. We catch it.</p>
          </div>
          <Link href="/whats-changed" className="text-sm font-semibold no-underline" style={{ color: v.accentText }}>Full changelog →</Link>
        </div>
        <div className="flex flex-col gap-2">
          {UPDATES.map((u, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all"
              style={{ background: "var(--bg-muted)" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--bg-input)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--bg-muted)"}
            >
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 text-center min-w-[42px]"
                style={{
                  background: u.type === "nerf" ? "#FEF2F2" : u.type === "new" ? "#DCFCE7" : "#DBEAFE",
                  color: u.type === "nerf" ? "#DC2626" : u.type === "new" ? "#16A34A" : "#2563EB",
                }}
              >{u.type === "nerf" ? "Nerf" : u.type === "new" ? "New" : "Rate"}</span>
              <span className="flex-1 text-sm" style={{ color: "var(--text-secondary)" }}>{u.text}</span>
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: u.catBg, color: u.catColor }}>{u.cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 6. TRUST ═══ */}
      <section style={{ background: "var(--bg-section-violet)", borderTop: "1px solid var(--border-section-violet)", borderBottom: "1px solid var(--border-section-violet)", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div className="grid grid-cols-4 gap-6 mb-5">
            {[["75", "Cards tracked"], ["25", "Verified"], ["5", "Live tools"], ["0", "Ads"]].map(([n, l], i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold" style={{ color: v.accentText, letterSpacing: -1 }}>{n}</div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{l}</div>
              </div>
            ))}
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Every number is manually verified against bank documents. No sponsored rankings. Just math.</p>
        </div>
      </section>

      {/* ═══ 6B. CREDIBILITY ═══ */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-light)", border: "1px solid var(--accent-border)", borderRadius: 50, padding: "6px 18px", fontSize: 12, fontWeight: 600, color: v.accentText, marginBottom: 20 }}>
          🔒 Independent. No ads. No affiliate bias.
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2.5" style={{ color: "var(--text)" }}>Built for people who read the fine print</h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>Every number on Assure Fintech is verified against bank terms and conditions. We do not accept sponsored placements or paid rankings. The math is the math.</p>
        <div className="flex justify-center gap-8 flex-wrap">
          {[
            { icon: "📄", label: "Source: bank T&C documents" },
            { icon: "🔄", label: "Updated within 48hrs of changes" },
            { icon: "🚫", label: "Zero sponsored content" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-base">{s.icon}</span>
              <span className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 7. DARK CTA ═══ */}
      <section style={{ background: `linear-gradient(135deg, ${v.hero}, #2A1557)`, padding: "64px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 500, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.1),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,34px)", fontWeight: 800, color: "#F1F5F9", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 14 }}>
            Stop guessing.<br />Start <span style={{ color: v.accentLight }}>knowing</span>.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginBottom: 28 }}>30 seconds. No sign-up. No tracking. Real math that banks don't show you.</p>
          <Link href="/smart-swipe" style={{ display: "inline-block", background: "#fff", color: "#111", borderRadius: 12, padding: "14px 36px", fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>Try Smart Swipe — it's free →</Link>
          <div style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Free forever · Works on mobile · No app needed</div>
        </div>
      </section>
    </div>
  );
}
