"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

function formatINR(n) {
  if (Math.abs(n) >= 10000000) return `₹${(n / 10000000).toFixed(2)}Cr`;
  if (Math.abs(n) >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function InsuranceCalculatorClient() {
  const [sumInsured, setSumInsured] = useState(1000000);
  const [copay, setCopay] = useState(20);
  const [roomRentCap, setRoomRentCap] = useState(8000);
  const [diseaseSubLimit, setDiseaseSubLimit] = useState(50);
  const [waitingPeriod, setWaitingPeriod] = useState(3);
  const [consumablesExcluded, setConsumablesExcluded] = useState(true);
  const [isYear1, setIsYear1] = useState(true);

  const result = useMemo(() => {
    // Simulate a ₹5L hospitalization claim
    const claimAmount = Math.min(500000, sumInsured);

    // Room rent proportional reduction
    // If room rent cap is ₹8K but patient takes ₹12K room, proportional reduction = 8/12 = 66.7%
    const avgRoomCost = 12000;
    const roomRentRatio = roomRentCap >= avgRoomCost ? 1 : roomRentCap / avgRoomCost;
    const afterRoomRent = Math.round(claimAmount * roomRentRatio);

    // Disease sub-limit
    const afterDisease = Math.round(afterRoomRent * diseaseSubLimit / 100);

    // Co-pay deduction
    const copayAmount = Math.round(afterDisease * copay / 100);
    const afterCopay = afterDisease - copayAmount;

    // Consumables (typically 5-10% of claim)
    const consumablesCost = consumablesExcluded ? Math.round(claimAmount * 0.08) : 0;
    const afterConsumables = Math.max(0, afterCopay - consumablesCost);

    // Waiting period impact (pre-existing diseases)
    const waitingPenalty = isYear1 && waitingPeriod > 0 ? Math.round(afterConsumables * 0.15) : 0;
    const finalPayout = Math.max(0, afterConsumables - waitingPenalty);

    const effectiveCoverage = Math.round((finalPayout / claimAmount) * sumInsured);
    const lostPercent = Math.round((1 - finalPayout / claimAmount) * 100);

    return {
      claimAmount,
      roomRentLoss: claimAmount - afterRoomRent,
      diseaseLoss: afterRoomRent - afterDisease,
      copayAmount,
      consumablesCost,
      waitingPenalty,
      finalPayout,
      effectiveCoverage,
      lostPercent,
      coverageRatio: Math.round(finalPayout / claimAmount * 100),
    };
  }, [sumInsured, copay, roomRentCap, diseaseSubLimit, consumablesExcluded, waitingPeriod, isYear1]);

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #4A1942, #831843, #4A1942)", position: "relative", overflow: "hidden", padding: "40px 24px 48px", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, rgba(244,114,182,0.15), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F472B6" }} /> Tool
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 8 }}>Insurance Coverage Calculator</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 500 }}>Enter your policy details. See what your health insurance actually pays on a ₹5L hospitalization claim.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 80px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Inputs */}
          <div className="rounded-2xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h3 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>Policy details</h3>

            {[
              { label: "Sum insured", value: sumInsured, set: setSumInsured, min: 300000, max: 5000000, step: 100000, format: true, color: "#DB2777" },
              { label: "Co-pay (%)", value: copay, set: setCopay, min: 0, max: 50, step: 5, format: false, color: "#DC2626" },
              { label: "Room rent cap (₹/day)", value: roomRentCap, set: setRoomRentCap, min: 3000, max: 25000, step: 1000, format: true, color: "#DC2626" },
              { label: "Disease sub-limit (% of SI)", value: diseaseSubLimit, set: setDiseaseSubLimit, min: 25, max: 100, step: 5, format: false, color: "#DC2626" },
              { label: "Pre-existing waiting (years)", value: waitingPeriod, set: setWaitingPeriod, min: 0, max: 4, step: 1, format: false, color: "#DC2626" },
            ].map((f, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                  <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{f.format ? formatINR(f.value) : f.label.includes("%") ? `${f.value}%` : f.value}</span>
                </div>
                <input type="range" min={f.min} max={f.max} step={f.step} value={f.value} onChange={e => f.set(Number(e.target.value))} className="w-full" style={{ accentColor: f.color }} />
              </div>
            ))}

            <div className="flex flex-col gap-3 mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={consumablesExcluded} onChange={e => setConsumablesExcluded(e.target.checked)} id="consumables" />
                <label htmlFor="consumables" className="text-xs font-semibold cursor-pointer" style={{ color: "var(--text-muted)" }}>Consumables excluded (gloves, PPE, etc.)</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={isYear1} onChange={e => setIsYear1(e.target.checked)} id="year1" />
                <label htmlFor="year1" className="text-xs font-semibold cursor-pointer" style={{ color: "var(--text-muted)" }}>Claiming in year 1 (waiting period applies)</label>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="rounded-2xl p-6 mb-4 text-center" style={{ background: "var(--bg-section-pink)", border: "1px solid var(--border-section-pink)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-faint)" }}>On a ₹5L claim, your policy pays</div>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "var(--text-faint)", textDecoration: "line-through" }}>{formatINR(result.claimAmount)}</div>
                  <div className="text-[10px]" style={{ color: "var(--text-faint)" }}>Claimed</div>
                </div>
                <div style={{ fontSize: 18, color: "var(--text-faint)" }}>→</div>
                <div>
                  <div className="text-4xl font-extrabold" style={{ color: "#DC2626" }}>{formatINR(result.finalPayout)}</div>
                  <div className="text-[10px]" style={{ color: "#DC2626" }}>{result.lostPercent}% lost to fine print</div>
                </div>
              </div>

              {/* Visual bar */}
              <div className="flex rounded-lg overflow-hidden mt-4" style={{ height: 24 }}>
                <div className="flex items-center justify-center text-[10px] font-bold" style={{ width: `${result.coverageRatio}%`, background: "rgba(22,163,74,0.2)", color: "var(--green)" }}>{result.coverageRatio}% paid</div>
                <div className="flex items-center justify-center text-[10px] font-bold" style={{ width: `${result.lostPercent}%`, background: "rgba(220,38,38,0.1)", color: "#DC2626" }}>{result.lostPercent}% lost</div>
              </div>
            </div>

            <div className="rounded-2xl p-6 mb-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <h3 className="text-sm font-extrabold mb-3" style={{ color: "var(--text)" }}>Where your claim gets cut</h3>
              {[
                ["Claim amount", formatINR(result.claimAmount), false],
                ["Room rent reduction", `-${formatINR(result.roomRentLoss)}`, true],
                ["Disease sub-limit cut", `-${formatINR(result.diseaseLoss)}`, true],
                [`Co-pay (${copay}%)`, `-${formatINR(result.copayAmount)}`, true],
                ["Consumables excluded", `-${formatINR(result.consumablesCost)}`, true],
                ["Waiting period penalty", `-${formatINR(result.waitingPenalty)}`, true],
              ].map(([label, val, isRed], i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 5 ? "1px solid var(--border-light)" : "none" }}>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span className="text-sm font-bold" style={{ color: isRed ? "#DC2626" : "var(--text)" }}>{val}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-2" style={{ borderTop: "2px solid var(--border)" }}>
                <span className="text-sm font-extrabold" style={{ color: "var(--text)" }}>You pay from pocket</span>
                <span className="text-xl font-extrabold" style={{ color: "#DC2626" }}>{formatINR(result.claimAmount - result.finalPayout)}</span>
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
              <div className="text-xs font-bold mb-1" style={{ color: "var(--orange)" }}>Effective coverage of your {formatINR(sumInsured)} policy</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Based on these terms, your {formatINR(sumInsured)} policy effectively covers about <strong style={{ color: "var(--text)" }}>{formatINR(result.effectiveCoverage)}</strong>. Consider a no co-pay, no room rent limit policy for full coverage — or add a super top-up.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/learn/insurance" className="text-sm font-semibold no-underline" style={{ color: "var(--pink)" }}>← Read our insurance guides</Link>
        </div>
      </div>
    </>
  );
}
