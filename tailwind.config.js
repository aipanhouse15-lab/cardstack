"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function HomeClient({ featured, updates, tip }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 100); }, []);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="flex flex-col items-center justify-center text-center pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute -top-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-[80px] animate-float" style={{ background: "radial-gradient(circle, var(--accent-light), transparent 70%)" }} />
        <div className="absolute -bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)", animation: "float 10s ease-in-out infinite reverse" }} />

        <div className="relative z-10 transition-all duration-700" style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)" }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            India's smartest credit card tool
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-3xl mx-auto mb-6 tracking-tight" style={{ color: "var(--text)" }}>
            Stop leaving{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">rewards</span>{" "}
            on the table
          </h1>

          <p className="text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Tell us which cards you have. We'll tell you exactly which one to swipe — for every purchase, every time.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/smart-swipe" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-xl px-9 py-4 text-base font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">
              Try Smart Swipe →
            </Link>
            <Link href="/gap-finder" className="rounded-xl px-9 py-4 text-base font-medium no-underline transition-all" style={{ background: "var(--bg-muted)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
              Find Card Gaps
            </Link>
          </div>
        </div>

        <div className="flex gap-12 flex-wrap justify-center mt-16 relative z-10 transition-all duration-700" style={{ opacity: vis ? 1 : 0, transitionDelay: "0.3s" }}>
          {[["25+", "Cards Analyzed"], ["8", "Spending Categories"], ["₹15K+", "Avg. Annual Savings"]].map(([n, l], i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>{n}</div>
              <div className="text-sm mt-1" style={{ color: "var(--text-faint)" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <SectionHeader badge="✨ Simple & Powerful" title="Three steps to maximize every swipe" subtitle="No sign-up needed. Select your cards and get instant recommendations." />
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[["01", "Select Your Cards", "Pick from 25+ popular Indian credit cards", "🃏"],
            ["02", "Enter Your Spending", "Tell us your monthly spend per category for real savings math", "🎯"],
            ["03", "Get Recommendations", "See the best card per swipe and discover cards to fill gaps", "💡"],
          ].map(([step, title, desc, icon], i) => (
            <div key={i} className="rounded-2xl p-7 text-left relative overflow-hidden transition-all hover:-translate-y-0.5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="absolute -top-5 -right-5 text-7xl font-black opacity-[0.04]" style={{ color: "var(--text)" }}>{step}</div>
              <div className="text-4xl mb-4">{icon}</div>
              <div className="text-xs font-bold font-mono mb-2" style={{ color: "var(--accent-text)" }}>STEP {step}</div>
              <div className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>{title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TOP PICKS ═══ */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <SectionHeader badge="🔥 Trending" badgeBg="var(--orange-bg)" badgeBorder="var(--orange-border)" badgeColor="var(--orange)" title="Top card picks for 2026" subtitle="Best value cards right now. Updated monthly." />
        <div className="flex flex-col gap-3">
          {featured.map(card => {
            const top = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1])[0];
            return (
              <Link key={card.id} href={`/cards/${card.id}`} className="no-underline rounded-2xl p-5 flex items-center gap-4 flex-wrap transition-all hover:shadow-lg"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${card.color}18` }}>{card.img}</div>
                <div className="flex-1 min-w-[140px]">
                  <div className="text-base font-bold" style={{ color: "var(--text)" }}>{card.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{card.fee === 0 ? "Free" : `₹${card.fee}/yr`} · {card.bank}</div>
                </div>
                <div className="text-center min-w-[70px]">
                  <div className="text-xs uppercase" style={{ color: "var(--text-faint)" }}>Best</div>
                  <div className="text-xl font-extrabold font-mono" style={{ color: "var(--green)" }}>{top[1]}%</div>
                  <div className="text-xs capitalize" style={{ color: "var(--green)" }}>{top[0]}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <SectionHeader badge="🛡️ Trust" badgeBg="var(--green-bg)" badgeBorder="var(--green-border)" badgeColor="var(--green)" title="Why people trust CardStack" subtitle="Not another ad-filled site. A tool built for you." />
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[["🔍","Transparent","No paid rankings. Best card = real best card."],
            ["🔒","No Data Collected","No name, email, phone. Zero tracking."],
            ["🧠","Smart, Not Salesy","Optimizes your rewards, not our commissions."],
            ["🇮🇳","Built for India","25 Indian cards, Indian spending patterns."],
            ["⚡","Real Savings Math","Your actual spending → accurate savings."],
            ["🆓","Free Forever","All tools free. We earn only through optional affiliate links."],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="text-3xl mb-3">{icon}</div>
              <div className="text-base font-bold mb-1.5" style={{ color: "var(--text)" }}>{title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <SectionHeader badge="💬 Users" badgeBg="var(--blue-bg)" badgeBorder="var(--blue-border)" badgeColor="var(--blue)" title="What our users say" />
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {[["Priya S.","Mumbai","Had no idea my Regalia was better for dining than my ICICI card. Saved months of wrong swipes!","👩‍💼"],
            ["Arjun M.","Bangalore","Gap Finder showed me OneCard gives 5% on fuel. Already saving ₹400/month from that one switch.","👨‍💻"],
            ["Sneha R.","Delhi","Clean, ad-free, and actually useful. I check CardStack before every big purchase now.","👩‍🎓"],
          ].map(([name, loc, text, avatar], i) => (
            <div key={i} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="text-base tracking-widest text-amber-500">★★★★★</div>
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "var(--text-secondary)" }}>"{text}"</p>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "var(--accent-light)" }}>{avatar}</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{name}</div>
                  <div className="text-xs" style={{ color: "var(--text-faint)" }}>{loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MONTHLY UPDATES ═══ */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <SectionHeader badge="📢 March 2026" badgeBg="var(--orange-bg)" badgeBorder="var(--orange-border)" badgeColor="var(--orange)" title="What changed this month" subtitle="We track reward changes so you don't have to." />
        <div className="flex flex-col gap-2.5">
          {updates.map(u => (
            <div key={u.id} className="rounded-xl p-4 flex items-start gap-3.5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${u.color}18` }}>{u.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{u.card}</span>
                  <span className="text-[11px] font-semibold uppercase rounded px-2 py-0.5"
                    style={{ color: u.type === "alert" ? "var(--orange)" : u.type === "new" ? "var(--green)" : u.type === "offer" ? "var(--blue)" : "var(--text-muted)", background: u.type === "alert" ? "var(--orange-bg)" : u.type === "new" ? "var(--green-bg)" : u.type === "offer" ? "var(--blue-bg)" : "var(--bg-muted)" }}>
                    {u.type}
                  </span>
                  <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{u.date}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DID YOU KNOW ═══ */}
      <section className="px-6 pb-20 max-w-[1000px] mx-auto">
        <div className="rounded-2xl p-6 flex items-start gap-4" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.08), rgba(251,191,36,0.02))", border: "1px solid rgba(251,191,36,0.2)" }}>
          <div className="text-3xl flex-shrink-0">{tip.icon}</div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "#d97706" }}>💡 Did you know?</div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tip.tip}</p>
            <p className="text-[11px] mt-2" style={{ color: "var(--text-faint)" }}>New tip every visit</p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl p-14 relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 relative z-10 tracking-tight">Ready to maximize your rewards?</h2>
          <p className="text-base text-white/80 max-w-md mx-auto mb-8 leading-relaxed relative z-10">30 seconds. No sign-up. 25 cards. Real savings.</p>
          <div className="flex gap-3 justify-center flex-wrap relative z-10">
            <Link href="/smart-swipe" className="bg-white text-indigo-600 no-underline rounded-xl px-8 py-4 text-base font-bold hover:-translate-y-0.5 transition-transform">Start Smart Swipe →</Link>
            <Link href="/gap-finder" className="bg-white/15 text-white border border-white/30 no-underline rounded-xl px-8 py-4 text-base font-semibold">Try Gap Finder</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
