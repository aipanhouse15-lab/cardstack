"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CARDS, CATEGORIES } from "@/data/cards";
import BankLogo from "@/components/BankLogo";

/* ════════════════════════════════════════════════════
   HOMEPAGE — "THE GAP" DESIGN
   Banks say one number. You take home another.
   ════════════════════════════════════════════════════ */

// ── DATA ──
const TOOLS = [
  { name: "Smart Swipe", desc: "Which card to use for every purchase", href: "/smart-swipe", tag: "MOST USED" },
  { name: "Gap Finder", desc: "Categories where you're losing rewards", href: "/gap-finder", tag: "REVENUE" },
  { name: "Stack Builder", desc: "Build an optimized multi-card combo", href: "/stack-builder" },
  { name: "Compare", desc: "Side-by-side with cap-adjusted rates", href: "/compare" },
  { name: "Swipe Check", desc: "Quick: is this card good for this spend?", href: "/swipe-check" },
];

const CALCS = [
  { name: "Loan Truth", desc: "Real cost after processing fees & GST", href: "/loan-calculator", color: "var(--c-loan)" },
  { name: "FD Real Return", desc: "Post-tax, post-inflation actual yield", href: "/fd-calculator", color: "var(--c-fd)" },
  { name: "Tax Regime", desc: "Old vs new — which saves more for you", href: "/tax-calculator", color: "var(--c-tax)" },
  { name: "Insurance Coverage", desc: "What your policy actually pays out", href: "/insurance-calculator", color: "var(--c-ins)" },
  { name: "SIP Calculator", desc: "Advertised vs actual SIP returns", href: "/sip-calculator", color: "var(--c-mf)" },
];

const CATS = [
  { name: "Credit Cards", desc: "Cap-adjusted reward math", honest: "5% advertised → 2.8% actual", href: "/cards", color: "var(--c-card)", count: `${CARDS.length} cards` },
  { name: "Loans", desc: "Hidden fee + real APR math", honest: "8.5% rate → 9.4% actual cost", href: "/learn/loans", color: "var(--c-loan)", count: "5 guides" },
  { name: "Insurance", desc: "Co-pay, sub-limit, claim truth", honest: "₹10L policy → ₹4.2L payout", href: "/learn/insurance", color: "var(--c-ins)", count: "5 guides" },
  { name: "Savings & FDs", desc: "Post-tax, post-inflation reality", honest: "7.5% FD → 0.15% real return", href: "/learn/savings", color: "var(--c-fd)", count: "4 guides" },
  { name: "Tax Planning", desc: "Beyond the obvious 80C list", honest: "Old vs new regime math", href: "/learn/tax", color: "var(--c-tax)", count: "3 guides" },
  { name: "Mutual Funds", desc: "CAGR vs actual investor return", honest: "18% CAGR → 11% XIRR", href: "/learn/mutual-funds", color: "var(--c-mf)", count: "3 guides" },
];

// Gap Ledger — flagship data: advertised vs actual
const GAP_DATA = [
  { card: "SBI Cashback", adv: "5%", actual: "3.1%", note: "₹4K/mo cap on ₹80K spend", id: "sbi-cashback" },
  { card: "HDFC Millennia", adv: "5%", actual: "2.3%", note: "₹1K/mo cap across all categories", id: "hdfc-millennia" },
  { card: "Axis ACE", adv: "5%", actual: "3.8%", note: "₹500/mo cap on bill payments", id: "axis-ace" },
  { card: "HDFC Regalia", adv: "1.33%", actual: "1.33%", note: "Cap at ₹18.75L/mo — effectively uncapped", id: "hdfc-regalia" },
  { card: "Amazon Pay ICICI", adv: "5%", actual: "5%", note: "No cap — one of the few honest rates", id: "amazon-pay-icici" },
];

const HOW_STEPS = [
  { n: "01", title: "Tell us your cards", desc: "Add the credit cards already in your wallet. Takes 30 seconds." },
  { n: "02", title: "We show the honest number", desc: "Cap-adjusted effective rates — what you actually take home after fine print." },
  { n: "03", title: "Swipe smarter", desc: "Know which card to use for every purchase. Fill gaps with the right card." },
];

// Get some popular cards for display
const POPULAR = CARDS.filter(c => ["sbi-cashback", "hdfc-regalia", "axis-ace", "amazon-pay-icici", "hdfc-millennia", "onecard", "au-zenith", "icici-sapphiro"].includes(c.id)).slice(0, 8);

export default function HomeClient() {
  const [rvReady, setRvReady] = useState(false);
  useEffect(() => { setRvReady(true); }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{ padding: "120px 0 80px", textAlign: "center" }}>
        <div className="wrap">
          <div className="k accent" style={{ marginBottom: 24, letterSpacing: ".3em" }}>THE HONEST NUMBER PLATFORM</div>
          <h1 className="disp" style={{ fontSize: "clamp(38px, 6.5vw, 76px)", fontWeight: 380, lineHeight: 1.06, letterSpacing: "-.025em", marginBottom: 24 }}>
            Banks say one number.<br />
            <em style={{ fontStyle: "italic", color: "var(--green)" }}>You take home another.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--mut)", maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.7 }}>
            We calculate cap-adjusted effective rates for credit cards, loans, insurance, FDs, and taxes. 
            The number after all the fine print. Free forever.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/smart-swipe" className="btn btn-solid">Find your best card →</Link>
            <Link href="/cards" className="btn btn-line">Browse {CARDS.length} cards</Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <div className="stats">
        <div className="wrap">
          <div className="stats-in">
            {[
              { n: CARDS.length, sup: "+", l: "CARDS TRACKED" },
              { n: "6", sup: "", l: "CATEGORIES" },
              { n: "10", sup: "", l: "FREE TOOLS" },
              { n: "0", sup: "", l: "TRACKING" },
              { n: "∞", sup: "", l: "FREE FOREVER" },
            ].map((s, i) => (
              <div key={i} className="stat">
                <div className="n">{s.n}<span className="sup">{s.sup}</span></div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ GAP LEDGER — THE HERO DATA ═══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="k accent">THE GAP</div>
              <div className="sec-title">What they <em>advertise</em> vs what you <em style={{ color: "var(--green)", fontStyle: "italic" }}>actually earn</em></div>
            </div>
            <Link href="/cards" className="sec-link">See all {CARDS.length} cards →</Link>
          </div>

          <div className="gap-led">
            <div className="gl-row gl-head">
              <span className="k">Card</span>
              <span className="k">Advertised</span>
              <span className="k">Gap</span>
              <span className="k">Actual</span>
              <span className="k">Why</span>
            </div>
            {GAP_DATA.map((g, i) => (
              <Link key={i} href={`/cards/${g.id}`} className="gl-row" style={{ textDecoration: "none" }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{g.card}</span>
                <span className="gn a">{g.adv}</span>
                <span style={{ fontSize: 13, color: "var(--dim)" }}>→</span>
                <span className="gn b">{g.actual}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--dim)" }}>{g.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CREDIT CARD TOOLS ═══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="k accent">CREDIT CARD TOOLS</div>
              <div className="sec-title">Five tools. <em>Zero tracking.</em></div>
            </div>
          </div>
          <div className="acts">
            {TOOLS.map((t, i) => (
              <Link key={i} href={t.href} className="qa" style={{ textDecoration: "none" }}>
                {t.tag && <span className="mono" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".14em", position: "absolute", top: 14, right: 18 }}>{t.tag}</span>}
                <h4>{t.name}</h4>
                <p>{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALCULATORS ═══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="k accent">CALCULATORS</div>
              <div className="sec-title">The honest number on <em>every product</em></div>
            </div>
          </div>
          <div className="acts">
            {CALCS.map((c, i) => (
              <Link key={i} href={c.href} className="qa" style={{ textDecoration: "none", "--cc": c.color }}>
                <h4>{c.name}</h4>
                <p>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATEGORY GRID ═══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="k accent">EXPLORE BY CATEGORY</div>
              <div className="sec-title">Every category has <em>a gap</em></div>
            </div>
          </div>
          <div className="cats">
            {CATS.map((c, i) => (
              <Link key={i} href={c.href} className="cat" style={{ "--cc": c.color, textDecoration: "none" }}>
                <div className="k" style={{ color: c.color, marginBottom: 14 }}>{c.count}</div>
                <h3>{c.name}</h3>
                <p style={{ fontSize: 13.5, color: "var(--mut)", margin: "10px 0 18px", lineHeight: 1.6 }}>{c.desc}</p>
                <div className="mono" style={{ fontSize: 11, color: "var(--red)", letterSpacing: ".04em" }}>{c.honest}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="k accent">HOW IT WORKS</div>
              <div className="sec-title">Three steps to <em>the truth</em></div>
            </div>
          </div>
          <div className="how">
            {HOW_STEPS.map((s, i) => (
              <div key={i} className="step">
                <div className="sn">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POPULAR CARDS ═══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="k accent">POPULAR CARDS</div>
              <div className="sec-title">Reviewed with <em>honest math</em></div>
            </div>
            <Link href="/cards" className="sec-link">All cards →</Link>
          </div>
          <div className="pcards">
            {POPULAR.map(card => {
              const best = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
              const maxR = best[0]?.[1] || 0;
              return (
                <Link key={card.id} href={`/cards/${card.id}`} className="pc" style={{ textDecoration: "none" }}>
                  <div className="mini" style={{ background: `linear-gradient(135deg, ${card.color}dd, ${card.color}88)` }}>
                    <BankLogo bank={card.bank} cardId={card.id} size={32} rounded={7} fontSize={10} />
                    <div className="mono" style={{ position: "absolute", bottom: 12, right: 14, fontSize: 9, opacity: 0.6 }}>{card.network}</div>
                  </div>
                  <h5>{card.name}</h5>
                  <div className="meta">
                    <span className="r">{maxR}%</span>
                    <span className="f">{card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}`}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ MANIFESTO ═══ */}
      <section>
        <div className="wrap">
          <div className="mani">
            <div className="k accent" style={{ marginBottom: 28 }}>WHY WE BUILT THIS</div>
            <h2>
              Every financial product in India has <em>two numbers</em> — 
              the one in the advertisement and the one in your bank account. 
              We publish <em>the second one.</em>
            </h2>
            <p style={{ color: "var(--mut)", fontSize: 16, marginTop: 28, maxWidth: 640, lineHeight: 1.7 }}>
              No tracking. No login walls. No sponsored rankings. Every rate on this site is manually verified 
              against the product&apos;s MITC, terms, and fine print. If a bank changes its rewards, we publish 
              the change before they announce it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <div className="final">
        <div className="wrap">
          <h2 className="disp">
            Stop guessing.<br />
            Start with <em>the honest number.</em>
          </h2>
          <p>Free. No login. No tracking. Just math.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/smart-swipe" className="btn btn-solid">Find your best card →</Link>
            <Link href="/gap-finder" className="btn btn-line">Find your card gaps →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
