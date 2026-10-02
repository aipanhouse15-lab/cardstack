"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

import { TAX_PERIODS, NEW_SLABS, salaryTaxComparison } from "@/data/tax-math.mjs";

function formatINR(n) {
  if (Math.abs(n) >= 10000000) return `₹${(n / 10000000).toFixed(2)}Cr`;
  if (Math.abs(n) >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function TaxCalculatorClient() {
  const [period, setPeriod] = useState("ty2026");
  const rules = TAX_PERIODS[period];
  const [ctc, setCTC] = useState(1500000);
  const [hra, setHRA] = useState(120000);
  const [sec80c, setSec80c] = useState(150000);
  const [sec80d, setSec80d] = useState(25000);
  const [nps, setNPS] = useState(50000);
  const [homeLoan, setHomeLoan] = useState(0);

  const result = useMemo(() => salaryTaxComparison({period, salary:ctc, hra, savings:sec80c, health:sec80d, nps, homeInterest:homeLoan}), [period, ctc, hra, sec80c, sec80d, nps, homeLoan]);

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #052E16, #166534, #052E16)", position: "relative", overflow: "hidden", padding: "40px 24px 48px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(74,222,128,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} /> Tool
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 8 }}>Old vs New Tax Regime Calculator · {rules.label}</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 680 }}>Compare salary-only estimates for a resident individual below age 60. Select when the income was earned; the calculation includes standard deduction, eligible entered claims, rebate and 4% cess.</p>
          <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.65)" }}>Calculator rules checked 1 October 2026 · By Ash</p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 80px" }}>
        <div className="rounded-xl p-4 mb-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <label htmlFor="tax-period" className="block text-sm font-bold mb-2">Income period</label>
          <select id="tax-period" value={period} onChange={e => setPeriod(e.target.value)} className="w-full rounded-lg p-3" style={{ background: "var(--bg-input)", color: "var(--text)", border: "1px solid var(--border)" }}>
            {Object.entries(TAX_PERIODS).map(([id, profile]) => <option key={id} value={id}>{profile.label}</option>)}
          </select>
          <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>{rules.incomePeriod} · {rules.act}. The basic salary-model rates match across these two periods; the law and section references differ.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Inputs */}
          <div className="rounded-2xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h3 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>Your income</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <label htmlFor="tax-salary" className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Gross salary before HRA exemption, standard deduction and these claims (not CTC)</label>
                <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{formatINR(ctc)}</span>
              </div>
              <input id="tax-salary" type="range" min={300000} max={5000000} step={50000} value={ctc} onChange={e => setCTC(Number(e.target.value))} className="w-full" style={{ accentColor: "#16A34A" }} />
            </div>

            <h3 className="text-base font-extrabold mb-2 mt-6 pt-4" style={{ color: "var(--text)", borderTop: "1px solid var(--border)" }}>Enter amounts you have confirmed are eligible under the old regime</h3>
            <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>Caps are simplified and do not check supporting conditions, age, income type or overlap. Do not enter total premiums, rent or loan interest unless you have verified the eligible claim for the applicable year.</p>
            <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>The health input combines the eligible family and parents claims. Each group has its own conditions and ₹25,000 or ₹50,000 limit; ₹1 lakh is an outer combined ceiling, not an automatic entitlement.</p>
            {[
              { label: "HRA exemption (annual)", value: hra, set: setHRA, max: 600000, step: 10000 },
              { label: rules.paymentLabel, value: sec80c, set: setSec80c, max: 150000, step: 10000 },
              { label: rules.healthLabel, value: sec80d, set: setSec80d, max: 100000, step: 5000 },
              { label: rules.npsLabel, value: nps, set: setNPS, max: 50000, step: 5000 },
              { label: rules.homeLabel, value: homeLoan, set: setHomeLoan, max: 200000, step: 10000 },
            ].map((f, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                  <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{formatINR(f.value)}</span>
                </div>
                <input aria-label={f.label} type="range" min={0} max={f.max} step={f.step} value={f.value} onChange={e => f.set(Number(e.target.value))} className="w-full" style={{ accentColor: "#16A34A" }} />
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
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-faint)" }}>Lower estimate in this simplified scenario</div>
              <div className="text-3xl font-extrabold mb-1" style={{ color: result.winner === "old" ? "var(--green)" : "var(--blue)" }}>
                {result.winner === "old" ? "Old Regime" : result.winner === "new" ? "New Regime" : "Both Equal"}
              </div>
              <div className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                Estimated difference: <span style={{ color: result.winner === "old" ? "var(--green)" : "var(--blue)", fontWeight: 800 }}>{formatINR(result.savings)}</span>
              </div>
            </div>

            {/* Side by side */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl p-5" style={{ background: result.winner === "old" ? "var(--bg-section-green)" : "var(--bg-card)", border: `1px solid ${result.winner === "old" ? "var(--green)" : "var(--border)"}` }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: result.winner === "old" ? "var(--green)" : "var(--text-faint)" }}>Old regime {result.winner === "old" && "✓"}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Taxable income</div>
                <div className="text-base font-extrabold mb-3" style={{ color: "var(--text)" }}>{formatINR(result.taxableOld)}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Total tax + cess</div>
                <div className="text-xl font-extrabold" style={{ color: result.winner === "old" ? "var(--green)" : "#DC2626" }}>₹{result.totalTaxOld.toLocaleString("en-IN")}</div>
              </div>
              <div className="rounded-xl p-5" style={{ background: result.winner === "new" ? "var(--bg-section-blue)" : "var(--bg-card)", border: `1px solid ${result.winner === "new" ? "var(--blue)" : "var(--border)"}` }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: result.winner === "new" ? "var(--blue)" : "var(--text-faint)" }}>New regime {result.winner === "new" && "✓"}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Taxable income</div>
                <div className="text-base font-extrabold mb-3" style={{ color: "var(--text)" }}>{formatINR(result.taxableNew)}</div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Total tax + cess</div>
                <div className="text-xl font-extrabold" style={{ color: result.winner === "new" ? "var(--blue)" : "#DC2626" }}>₹{result.totalTaxNew.toLocaleString("en-IN")}</div>
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
              <div className="text-xs font-bold mb-1" style={{ color: "var(--text)" }}>Scope and limitations</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                This model covers ordinary salary up to ₹50 lakh, a resident individual below age 60, and only the claims entered here. It excludes capital gains, other special-rate income, employer NPS contributions, agricultural income, arrears relief, TDS and filing adjustments. Deduction eligibility is not inferred from a slider amount. For filing, use the applicable official return computation; amounts here are indicative, rounded to whole rupees.
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-xl p-5 mt-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-bold mb-3">How this estimate is calculated</h2>
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>Salary standard deduction: up to ₹50,000 under the old regime and ₹75,000 under the new regime. Enter only eligible old-regime claims, without double-counting. The model uses section {rules.newRegimeSection} for the new regime and section {rules.rebateSection} for the resident rebate.</p>
          <h3 className="font-bold text-sm mb-2">New-regime marginal slab rates</h3>
          <ul className="text-sm space-y-1 mb-4" style={{ color: "var(--text-muted)" }}>
            {NEW_SLABS.map(slab => <li key={slab.min}>{slab.min === 0 ? "Up to ₹4 lakh" : slab.max === Infinity ? "Above ₹24 lakh" : `₹${slab.min / 100000}–${slab.max / 100000} lakh`}: {slab.rate}% on income within the band</li>)}
          </ul>
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>For this ordinary-income model, the new-regime rebate makes tax zero at taxable income up to ₹12 lakh. Above that threshold, marginal relief can limit pre-cess tax to the excess income. It is not a flat ₹60,000 deduction from every higher-income tax bill. Under the old regime, the rebate threshold is ₹5 lakh. Cess is then added.</p>
          <h3 className="font-bold text-sm mb-2">Official basis for {rules.label}</h3>
          <ul className="text-sm space-y-2">
            {rules.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--green)" }}>{source.label}</a></li>)}
            <li><a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" target="_blank" rel="noopener noreferrer" style={{ color: "var(--green)" }}>Why assessment year and tax year are different periods</a></li>
          </ul>
        </section>

        <div className="mt-8 text-center">
          <Link href="/learn/tax" className="text-sm font-semibold no-underline" style={{ color: "var(--green)" }}>← Read our tax planning guides</Link>
        </div>
      </div>
    </>
  );
}
