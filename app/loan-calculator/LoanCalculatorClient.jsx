"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const LOAN_TYPES = [
  { id: "home", label: "Home Loan", icon: "🏠", defaultRate: 8.5, defaultTenure: 20, defaultAmount: 5000000 },
  { id: "personal", label: "Personal Loan", icon: "💸", defaultRate: 10.5, defaultTenure: 3, defaultAmount: 500000 },
  { id: "education", label: "Education Loan", icon: "🎓", defaultRate: 8.0, defaultTenure: 7, defaultAmount: 2000000 },
];

function formatINR(n) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)}Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function calcEMI(principal, annualRate, tenureYears) {
  const r = annualRate / 100 / 12;
  const n = tenureYears * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export default function LoanCalculatorClient() {
  const [loanType, setLoanType] = useState("home");
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [processingPct, setProcessingPct] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [otherCharges, setOtherCharges] = useState(0);

  const selectLoanType = (id) => {
    const t = LOAN_TYPES.find(l => l.id === id);
    setLoanType(id);
    setAmount(t.defaultAmount);
    setRate(t.defaultRate);
    setTenure(t.defaultTenure);
    setProcessingPct(0);
    setInsurance(0);
    setOtherCharges(0);
  };

  const result = useMemo(() => {
    const processingFee = amount * processingPct / 100;
    const totalHiddenCost = processingFee + insurance + otherCharges;
    const emiAdvertised = calcEMI(amount, rate, tenure);
    const totalPayAdvertised = emiAdvertised * tenure * 12;
    const interestAdvertised = totalPayAdvertised - amount;

    // Illustrative annualized cost assumes all entered charges are deducted upfront.
    const netDisbursed = Math.max(1, amount - totalHiddenCost);
    const periods = tenure * 12;
    let low = 0;
    let high = 1;
    for (let i = 0; i < 80; i++) {
      const monthlyRate = (low + high) / 2;
      const presentValue = monthlyRate === 0
        ? emiAdvertised * periods
        : emiAdvertised * (1 - Math.pow(1 + monthlyRate, -periods)) / monthlyRate;
      if (presentValue > netDisbursed) low = monthlyRate;
      else high = monthlyRate;
    }
    const annualizedCostRate = (Math.pow(1 + (low + high) / 2, 12) - 1) * 100;
    const extraCost = totalHiddenCost;

    return {
      emiAdvertised: Math.round(emiAdvertised),
      totalPayAdvertised: Math.round(totalPayAdvertised),
      interestAdvertised: Math.round(interestAdvertised),
      effectiveRate: annualizedCostRate.toFixed(2),
      extraCost: Math.round(extraCost),
      processingFee: Math.round(processingFee),
      totalHiddenCost: Math.round(totalHiddenCost),
    };
  }, [amount, rate, tenure, processingPct, insurance, otherCharges]);

  return (
    <>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0F2A5C, #1E40AF, #0F2A5C)", position: "relative", overflow: "hidden", padding: "40px 24px 48px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(96,165,250,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA" }} /> Tool
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 8 }}>Loan Truth Calculator</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 500 }}>Estimate an annualized borrowing-cost illustration from your loan details and assumed upfront charges. Not a lender quotation or regulatory APR disclosure.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Loan type selector */}
        <div className="flex gap-2 mb-6">
          {LOAN_TYPES.map(t => (
            <button key={t.id} onClick={() => selectLoanType(t.id)}
              className="rounded-xl px-5 py-3 text-sm font-bold cursor-pointer border-none transition-all"
              style={{ background: loanType === t.id ? "var(--accent)" : "var(--bg-card)", color: loanType === t.id ? "#fff" : "var(--text-muted)", border: loanType === t.id ? "none" : "1px solid var(--border)" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Inputs */}
          <div className="rounded-2xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h3 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>Loan details</h3>
            {[
              { label: "Loan amount (₹)", value: amount, set: setAmount, min: 100000, max: 50000000, step: 100000 },
              { label: "Interest rate (%)", value: rate, set: setRate, min: 4, max: 25, step: 0.1 },
              { label: "Tenure (years)", value: tenure, set: setTenure, min: 1, max: 30, step: 1 },
            ].map((f, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                  <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{f.label.includes("₹") ? formatINR(f.value) : f.value}</span>
                </div>
                <input type="range" min={f.min} max={f.max} step={f.step} value={f.value} onChange={e => f.set(Number(e.target.value))}
                  className="w-full" style={{ accentColor: "var(--accent)" }} />
              </div>
            ))}

            <h3 className="text-base font-extrabold mb-4 mt-6 pt-4" style={{ color: "var(--text)", borderTop: "1px solid var(--border)" }}>Assumed upfront charges</h3>
            {[
              { label: "Processing fee (%)", value: processingPct, set: setProcessingPct, min: 0, max: 5, step: 0.1 },
              { label: "Insurance charges (₹)", value: insurance, set: setInsurance, min: 0, max: 200000, step: 1000 },
              { label: "Other charges (₹)", value: otherCharges, set: setOtherCharges, min: 0, max: 100000, step: 1000 },
            ].map((f, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                  <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{f.label.includes("₹") ? formatINR(f.value) : f.value}</span>
                </div>
                <input type="range" min={f.min} max={f.max} step={f.step} value={f.value} onChange={e => f.set(Number(e.target.value))}
                  className="w-full" style={{ accentColor: "#DC2626" }} />
              </div>
            ))}
          </div>

          {/* Results */}
          <div>
            {/* Big number */}
            <div className="rounded-2xl p-6 mb-4 text-center" style={{ background: "var(--bg-section-blue)", border: "1px solid var(--border-section-blue)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-faint)" }}>Illustrative annualized cost rate</div>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "var(--text-faint)", textDecoration: "line-through" }}>{rate}%</div>
                  <div className="text-[10px]" style={{ color: "var(--text-faint)" }}>Advertised</div>
                </div>
                <div style={{ fontSize: 18, color: "var(--text-faint)" }}>→</div>
                <div>
                  <div className="text-4xl font-extrabold" style={{ color: "#DC2626" }}>{result.effectiveRate}%</div>
                  <div className="text-[10px]" style={{ color: "#DC2626" }}>With assumed upfront charges</div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="rounded-2xl p-6 mb-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--text)" }}>Cost breakdown</h3>
              {[
                ["Estimated monthly EMI", formatINR(result.emiAdvertised), false],
                ["Estimated interest over tenure", formatINR(result.interestAdvertised), false],
                ["Assumed processing fee", formatINR(result.processingFee), true],
                ["Other assumed upfront charges", formatINR(insurance + otherCharges), true],
              ].map(([label, val, isRed], i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 5 ? "1px solid var(--border-light)" : "none" }}>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span className="text-sm font-bold" style={{ color: isRed ? "#DC2626" : "var(--text)" }}>{val}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-2" style={{ borderTop: "2px solid var(--border)" }}>
                <span className="text-sm font-extrabold" style={{ color: "var(--text)" }}>Total assumed upfront charges</span>
                <span className="text-xl font-extrabold" style={{ color: "#DC2626" }}>{formatINR(result.extraCost)}</span>
              </div>
            </div>

            {/* Warning */}
            <div className="rounded-xl p-4" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
              <div className="text-xs font-bold mb-1" style={{ color: "var(--orange)" }}>Illustration limits</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                This illustration assumes charges are deducted from the amount disbursed upfront. Actual timing, taxes, optional products and lender calculations can differ; verify your written offer.
              </div>
            </div>
          </div>
        </div>

        {/* Cross-link */}
        <div className="mt-8 text-center">
          <Link href="/learn/loans" className="text-sm font-semibold no-underline" style={{ color: "var(--blue)" }}>← Read our loan guides for more honest numbers</Link>
        </div>
      </div>
    </>
  );
}
