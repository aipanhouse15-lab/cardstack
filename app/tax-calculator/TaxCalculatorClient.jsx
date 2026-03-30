"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const OLD_SLABS = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250000, max: 500000, rate: 5 },
  { min: 500000, max: 1000000, rate: 20 },
  { min: 1000000, max: Infinity, rate: 30 },
];

const NEW_SLABS = [
  { min: 0, max: 400000, rate: 0 },
  { min: 400000, max: 800000, rate: 5 },
  { min: 800000, max: 1200000, rate: 10 },
  { min: 1200000, max: 1600000, rate: 15 },
  { min: 1600000, max: 2000000, rate: 20 },
  { min: 2000000, max: 2400000, rate: 25 },
  { min: 2400000, max: Infinity, rate: 30 },
];

function calcTax(income, slabs) {
  let tax = 0;
  for (const s of slabs) {
    if (income <= s.min) break;
    const taxable = Math.min(income, s.max) - s.min;
    tax += taxable * s.rate / 100;
  }
  return Math.round(tax);
}

function formatINR(n) {
  if (Math.abs(n) >= 10000000) return `₹${(n / 10000000).toFixed(2)}Cr`;
  if (Math.abs(n) >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function TaxCalculatorClient() {
  const [ctc, setCTC] = useState(1500000);
  const [hra, setHRA] = useState(120000);
  const [sec80c, setSec80c] = useState(150000);
  const [sec80d, setSec80d] = useState(25000);
  const [nps, setNPS] = useState(50000);
  const [homeLoan, setHomeLoan] = useState(0);

  const result = useMemo(() => {
    const stdDeductionOld = 50000;
    const stdDeductionNew = 75000;

    const totalDeductionsOld = stdDeductionOld + hra + Math.min(sec80c, 150000) + Math.min(sec80d, 75000) + Math.min(nps, 50000) + Math.min(homeLoan, 200000);
    const taxableOld = Math.max(0, ctc - totalDeductionsOld);
    const taxOld = calcTax(taxableOld, OLD_SLABS);
    const cessOld = Math.round(taxOld * 0.04);
    const totalTaxOld = taxOld + cessOld;

    const taxableNew = Math.max(0, ctc - stdDeductionNew);
    const taxNew = calcTax(taxableNew, NEW_SLABS);
    const cessNew = Math.round(taxNew * 0.04);
    const totalTaxNew = taxNew + cessNew;

    const savings = totalTaxNew - totalTaxOld;
    const winner = totalTaxOld < totalTaxNew ? "old" : totalTaxNew < totalTaxOld ? "new" : "same";
    const breakeven = totalDeductionsOld - stdDeductionOld;

    return { taxableOld, totalTaxOld, totalDeductionsOld, taxableNew, totalTaxNew, savings: Math.abs(savings), winner, breakeven };
  }, [ctc, hra, sec80c, sec80d, nps, homeLoan]);

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #052E16, #166534, #052E16)", position: "relative", overflow: "hidden", padding: "40px 24px 48px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(74,222,128,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} /> Tool
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 8 }}>Tax Regime Calculator</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 500 }}>Enter your salary and deductions. See exactly which tax regime saves you more — old or new.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 80px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Inputs */}
          <div className="rounded-2xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h3 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>Your income</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Annual CTC / Gross income</label>
                <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{formatINR(ctc)}</span>
              </div>
              <input type="range" min={300000} max={5000000} step={50000} value={ctc} onChange={e => setCTC(Number(e.target.value))} className="w-full" style={{ accentColor: "#16A34A" }} />
            </div>

            <h3 className="text-base font-extrabold mb-4 mt-6 pt-4" style={{ color: "var(--text)", borderTop: "1px solid var(--border)" }}>Deductions (old regime only)</h3>
            {[
              { label: "HRA exemption (annual)", value: hra, set: setHRA, max: 600000, step: 10000 },
              { label: "80C (PPF, ELSS, LIC, etc.)", value: sec80c, set: setSec80c, max: 150000, step: 10000 },
              { label: "80D (health insurance)", value: sec80d, set: setSec80d, max: 75000, step: 5000 },
              { label: "NPS 80CCD(1B) (extra)", value: nps, set: setNPS, max: 50000, step: 5000 },
              { label: "Home loan interest (80EEA/24b)", value: homeLoan, set: setHomeLoan, max: 200000, step: 10000 },
            ].map((f, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                  <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{formatINR(f.value)}</span>
                </div>
                <input type="range" min={0} max={f.max} step={f.step} value={f.value} onChange={e => f.set(Number(e.target.value))} className="w-full" style={{ accentColor: "#16A34A" }} />
              </div>
            ))}
            <div className="rounded-lg p-3 mt-2" style={{ background: "var(--bg-muted)" }}>
              <div className="text-xs font-bold" style={{ color: "var(--text-faint)" }}>Total deductions (old regime): <span style={{ color: "var(--green)" }}>{formatINR(result.totalDeductionsOld)}</span></div>
            </div>
          </div>

          {/* Results */}
          <div>
            {/* Winner banner */}
            <div className="rounded-2xl p-6 mb-4 text-center" style={{ background: result.winner === "old" ? "var(--bg-section-green)" : "var(--bg-section-blue)", border: `1px solid ${result.winner === "old" ? "var(--border-section-green)" : "var(--border-section-blue)"}` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-faint)" }}>Better regime for you</div>
              <div className="text-3xl font-extrabold mb-1" style={{ color: result.winner === "old" ? "var(--green)" : "var(--blue)" }}>
                {result.winner === "old" ? "Old Regime" : result.winner === "new" ? "New Regime" : "Both Equal"}
              </div>
              <div className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                You save <span style={{ color: result.winner === "old" ? "var(--green)" : "var(--blue)", fontWeight: 800 }}>{formatINR(result.savings)}</span> per year
              </div>
            </div>

            {/* Side by side */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl p-5" style={{ background: result.winner === "old" ? "var(--bg-section-green)" : "var(--bg-card)", border: `1px solid ${result.winner === "old" ? "var(--green)" : "var(--border)"}` }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: result.winner === "old" ? "var(--green)" : "var(--text-faint)" }}>Old regime {result.winner === "old" && "✓"}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Taxable income</div>
                <div className="text-base font-extrabold mb-3" style={{ color: "var(--text)" }}>{formatINR(result.taxableOld)}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Total tax + cess</div>
                <div className="text-xl font-extrabold" style={{ color: result.winner === "old" ? "var(--green)" : "#DC2626" }}>{formatINR(result.totalTaxOld)}</div>
              </div>
              <div className="rounded-xl p-5" style={{ background: result.winner === "new" ? "var(--bg-section-blue)" : "var(--bg-card)", border: `1px solid ${result.winner === "new" ? "var(--blue)" : "var(--border)"}` }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: result.winner === "new" ? "var(--blue)" : "var(--text-faint)" }}>New regime {result.winner === "new" && "✓"}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Taxable income</div>
                <div className="text-base font-extrabold mb-3" style={{ color: "var(--text)" }}>{formatINR(result.taxableNew)}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Total tax + cess</div>
                <div className="text-xl font-extrabold" style={{ color: result.winner === "new" ? "var(--blue)" : "#DC2626" }}>{formatINR(result.totalTaxNew)}</div>
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
              <div className="text-xs font-bold mb-1" style={{ color: "var(--text)" }}>Rule of thumb</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                With your current deductions of {formatINR(result.totalDeductionsOld)}, the {result.winner === "old" ? "old" : "new"} regime saves you {formatINR(result.savings)}. Generally, deductions above ~₹3.75L favor old regime, below that favor new regime.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/learn/tax" className="text-sm font-semibold no-underline" style={{ color: "var(--green)" }}>← Read our tax planning guides</Link>
        </div>
      </div>
    </>
  );
}
