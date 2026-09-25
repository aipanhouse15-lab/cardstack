"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const TAX_BRACKETS = [
  { label: "0% assumption", rate: 0 },
  { label: "5% assumption", rate: 5 },
  { label: "20% assumption", rate: 20 },
  { label: "30% assumption", rate: 30 },
];

const POPULAR_FDS = [
  { bank: "Illustration", rate: 6.5 },
  { bank: "Illustration", rate: 7.5 },
  { bank: "Illustration", rate: 8.5 },
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
    const estimatedTax = taxableInterest * taxBracket / 100;
    const postTaxInterest = grossInterest - estimatedTax;
    const postTaxRate = (postTaxInterest / (amount * tenure)) * 100;
    const inflationLoss = amount * inflation / 100 * tenure;
    const realGain = postTaxInterest - inflationLoss;
    const realReturn = (realGain / (amount * tenure)) * 100;
    const maturityAmount = amount + postTaxInterest;
    const purchasingPower = amount + realGain;

    return {
      grossInterest: Math.round(grossInterest),
      estimatedTax: Math.round(estimatedTax),
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
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 500 }}>Estimate an after-tax, inflation-adjusted return using your assumptions. This simplified tool does not calculate TDS, your final tax liability or a bank's compounding schedule.</p>
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
              <label className="text-xs font-semibold block mb-2" style={{ color: "var(--text-muted)" }}>Assumed marginal tax rate on interest</label>
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
              <label htmlFor="senior" className="text-xs font-semibold cursor-pointer" style={{ color: "var(--text-muted)" }}>Assume up to ₹50K eligible interest deduction (only if permitted for your tax year and regime)</label>
            </div>

            {/* Quick pick */}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="text-xs font-bold mb-2" style={{ color: "var(--text-faint)" }}>Illustrative rate assumptions (not bank quotes)</div>
              <div className="flex gap-2 flex-wrap">
                {POPULAR_FDS.map((f) => (
                  <button key={`${f.bank}-${f.rate}`} onClick={() => setFdRate(f.rate)}
                    className="rounded-lg px-3 py-1.5 text-[11px] font-semibold cursor-pointer border-none"
                    style={{ background: fdRate === f.rate ? "#D97706" : "var(--bg-muted)", color: fdRate === f.rate ? "#fff" : "var(--text-muted)" }}>
                    {f.rate}% scenario
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
                [`Estimated tax (${taxBracket}% assumption)`, `-${formatINR(result.estimatedTax)}`, true],
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
                  ? `Under these simplified assumptions, ${formatINR(amount)} has estimated purchasing power of ${formatINR(result.purchasingPower)} after ${tenure} year${tenure > 1 ? "s" : ""}. Actual outcomes depend on compounding, tax treatment and inflation.`
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
