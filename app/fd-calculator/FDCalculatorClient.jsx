"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const TAX_BRACKETS = [
  { label: "No tax (below ₹5L)", rate: 0 },
  { label: "5% (₹5-10L)", rate: 5 },
  { label: "20% (₹10-12.5L)", rate: 20 },
  { label: "30% (above ₹12.5L)", rate: 30 },
];

const POPULAR_FDS = [
  { bank: "SBI", rate: 6.8 },
  { bank: "HDFC Bank", rate: 7.0 },
  { bank: "ICICI Bank", rate: 7.0 },
  { bank: "IndusInd", rate: 7.75 },
  { bank: "Bajaj Finance", rate: 8.25 },
  { bank: "Unity SFB", rate: 9.0 },
];

export default function FDCalculatorClient() {
  const [fdRate, setFdRate] = useState(7.5);
  const [taxBracket, setTaxBracket] = useState(30);
  const [inflation, setInflation] = useState(5.1);
  const [amount, setAmount] = useState(1000000);
  const [tenure, setTenure] = useState(1);
  const [isSenior, setIsSenior] = useState(false);

  const result = useMemo(() => {
    const grossInterest = amount * fdRate / 100 * tenure;
    const seniorExemption = isSenior ? Math.min(grossInterest, 50000) : 0;
    const taxableInterest = Math.max(0, grossInterest - seniorExemption);
    const tds = taxableInterest * taxBracket / 100;
    const postTaxInterest = grossInterest - tds;
    const postTaxRate = (postTaxInterest / (amount * tenure)) * 100;
    const inflationLoss = amount * inflation / 100 * tenure;
    const realGain = postTaxInterest - inflationLoss;
    const realReturn = (realGain / (amount * tenure)) * 100;
    const maturityAmount = amount + postTaxInterest;
    const purchasingPower = amount + realGain;

    return {
      grossInterest: Math.round(grossInterest),
      tds: Math.round(tds),
      postTaxInterest: Math.round(postTaxInterest),
      postTaxRate: postTaxRate.toFixed(2),
      inflationLoss: Math.round(inflationLoss),
      realGain: Math.round(realGain),
      realReturn: realReturn.toFixed(2),
      maturityAmount: Math.round(maturityAmount),
      purchasingPower: Math.round(purchasingPower),
      seniorExemption: Math.round(seniorExemption),
    };
  }, [fdRate, taxBracket, inflation, amount, tenure, isSenior]);

  function formatINR(n) {
    if (Math.abs(n) >= 10000000) return `₹${(n / 10000000).toFixed(2)}Cr`;
    if (Math.abs(n) >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
    return `₹${n.toLocaleString("en-IN")}`;
  }

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #422006, #92400E, #422006)", position: "relative", overflow: "hidden", padding: "40px 24px 48px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(251,191,36,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FBBF24" }} /> Tool
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 8 }}>FD Real Return Calculator</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 500 }}>Your 7.5% FD does not give you 7.5%. Enter your details to see what you actually take home after TDS and inflation.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 80px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Inputs */}
          <div className="rounded-2xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h3 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>FD details</h3>

            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Deposit amount</label>
                <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{formatINR(amount)}</span>
              </div>
              <input type="range" min={50000} max={10000000} step={50000} value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full" style={{ accentColor: "#D97706" }} />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>FD interest rate (%)</label>
                <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{fdRate}%</span>
              </div>
              <input type="range" min={4} max={10} step={0.1} value={fdRate} onChange={e => setFdRate(Number(e.target.value))} className="w-full" style={{ accentColor: "#D97706" }} />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Tenure (years)</label>
                <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{tenure} {tenure === 1 ? "year" : "years"}</span>
              </div>
              <input type="range" min={1} max={10} step={1} value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full" style={{ accentColor: "#D97706" }} />
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold block mb-2" style={{ color: "var(--text-muted)" }}>Your tax bracket</label>
              <div className="flex gap-2 flex-wrap">
                {TAX_BRACKETS.map(b => (
                  <button key={b.rate} onClick={() => setTaxBracket(b.rate)}
                    className="rounded-lg px-3 py-2 text-xs font-semibold cursor-pointer border-none"
                    style={{ background: taxBracket === b.rate ? "#D97706" : "var(--bg-muted)", color: taxBracket === b.rate ? "#fff" : "var(--text-muted)" }}>
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Inflation rate (%)</label>
                <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{inflation}%</span>
              </div>
              <input type="range" min={3} max={8} step={0.1} value={inflation} onChange={e => setInflation(Number(e.target.value))} className="w-full" style={{ accentColor: "#DC2626" }} />
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <input type="checkbox" checked={isSenior} onChange={e => setIsSenior(e.target.checked)} id="senior" />
              <label htmlFor="senior" className="text-xs font-semibold cursor-pointer" style={{ color: "var(--text-muted)" }}>Senior citizen (₹50K interest exempt under 80TTB)</label>
            </div>

            {/* Quick pick */}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="text-xs font-bold mb-2" style={{ color: "var(--text-faint)" }}>Quick pick: popular FDs</div>
              <div className="flex gap-2 flex-wrap">
                {POPULAR_FDS.map(f => (
                  <button key={f.bank} onClick={() => setFdRate(f.rate)}
                    className="rounded-lg px-3 py-1.5 text-[11px] font-semibold cursor-pointer border-none"
                    style={{ background: fdRate === f.rate ? "#D97706" : "var(--bg-muted)", color: fdRate === f.rate ? "#fff" : "var(--text-muted)" }}>
                    {f.bank} ({f.rate}%)
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="rounded-2xl p-6 mb-4 text-center" style={{ background: "var(--bg-section-amber)", border: "1px solid var(--border-section-amber)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-faint)" }}>Your real return</div>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "var(--text-faint)", textDecoration: "line-through" }}>{fdRate}%</div>
                  <div className="text-[10px]" style={{ color: "var(--text-faint)" }}>Advertised</div>
                </div>
                <div style={{ fontSize: 18, color: "var(--text-faint)" }}>→</div>
                <div>
                  <div className="text-4xl font-extrabold" style={{ color: Number(result.realReturn) <= 0 ? "#DC2626" : "var(--green)" }}>{result.realReturn}%</div>
                  <div className="text-[10px]" style={{ color: Number(result.realReturn) <= 0 ? "#DC2626" : "var(--green)" }}>After tax + inflation</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 mb-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--text)" }}>Breakdown</h3>
              {[
                ["Gross interest earned", formatINR(result.grossInterest), false],
                ...(isSenior ? [["80TTB exemption", `-${formatINR(result.seniorExemption)}`, false]] : []),
                [`TDS (${taxBracket}% tax)`, `-${formatINR(result.tds)}`, true],
                ["Post-tax interest", formatINR(result.postTaxInterest), false],
                ["Post-tax rate", `${result.postTaxRate}%`, false],
                ["Inflation erosion", `-${formatINR(result.inflationLoss)}`, true],
              ].map(([label, val, isRed], i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span className="text-sm font-bold" style={{ color: isRed ? "#DC2626" : "var(--text)" }}>{val}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-2" style={{ borderTop: "2px solid var(--border)" }}>
                <span className="text-sm font-extrabold" style={{ color: "var(--text)" }}>Real gain (purchasing power)</span>
                <span className="text-xl font-extrabold" style={{ color: Number(result.realReturn) <= 0 ? "#DC2626" : "var(--green)" }}>{formatINR(result.realGain)}</span>
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: Number(result.realReturn) <= 0 ? "var(--orange-bg)" : "var(--green-bg)", border: `1px solid ${Number(result.realReturn) <= 0 ? "var(--orange-border)" : "var(--green-border)"}` }}>
              <div className="text-xs font-bold mb-1" style={{ color: Number(result.realReturn) <= 0 ? "var(--orange)" : "var(--green)" }}>
                {Number(result.realReturn) <= 0 ? "Your money is losing value" : "Positive real return"}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {Number(result.realReturn) <= 0
                  ? `Your ${formatINR(amount)} deposit will be worth ${formatINR(result.purchasingPower)} in purchasing power after ${tenure} year${tenure > 1 ? "s" : ""}. Consider PPF, debt funds, or small finance bank FDs for better real returns.`
                  : `Your ${formatINR(amount)} deposit will grow to ${formatINR(result.purchasingPower)} in real purchasing power after ${tenure} year${tenure > 1 ? "s" : ""}.`
                }
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/learn/savings" className="text-sm font-semibold no-underline" style={{ color: "var(--orange)" }}>← Read our savings guides for better alternatives</Link>
        </div>
      </div>
    </>
  );
}
