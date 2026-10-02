"use client";
import { calcSIP, calcLumpsum } from "@/data/noncard-math.mjs";
import { useState, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";



// ============================================================
// Tier F — SIP Calculator
// URL: /calculators/sip-calculator
// Author: Ash · Updated: October 1, 2026
// ============================================================

const COLOR = "#7c3aed";
const UPDATED = "October 1, 2026";

function formatINR(n) {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + " L";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}


// Bar chart SVG for year-by-year growth
function GrowthChart({ monthly, rate, years }) {
  const points = [];
  for (let y = 1; y <= years; y++) {
    const { maturity, invested } = calcSIP(monthly, rate, y);
    points.push({ y, maturity, invested, gains: maturity - invested });
  }
  const maxVal = points[points.length - 1]?.maturity || 1;
  const chartH = 180;
  const chartW = 680;
  const barW = Math.max(4, Math.floor((chartW - 40) / years) - 3);

  return (
    <svg viewBox={`0 0 720 ${chartH + 60}`} role="img" aria-label={`SIP growth chart over ${years} years showing invested amount vs total corpus`} style={{ width: "100%", maxWidth: 760, margin: "20px 0" }}>
      <text x="20" y="18" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">CORPUS GROWTH YEAR BY YEAR · INVESTED vs GAINS</text>
      {points.map((p, i) => {
        const x = 20 + i * ((chartW - 20) / years);
        const totalH = (p.maturity / maxVal) * chartH;
        const investedH = (p.invested / maxVal) * chartH;
        const gainsH = totalH - investedH;
        return (
          <g key={i}>
            <rect x={x} y={chartH + 24 - investedH} width={barW} height={investedH} fill="var(--border)" />
            <rect x={x} y={chartH + 24 - totalH} width={barW} height={gainsH} fill={COLOR} opacity="0.85" />
            {(p.y === 1 || p.y % Math.max(1, Math.floor(years / 6)) === 0 || p.y === years) && (
              <text x={x + barW / 2} y={chartH + 38} fontFamily="system-ui" fontSize="9" textAnchor="middle" fill="var(--text-muted)">Y{p.y}</text>
            )}
          </g>
        );
      })}
      <rect x="20" y={chartH + 50} width="12" height="10" fill="var(--border)" />
      <text x="36" y={chartH + 59} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Invested</text>
      <rect x="110" y={chartH + 50} width="12" height="10" fill={COLOR} opacity="0.85" />
      <text x="126" y={chartH + 59} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">Gains</text>
    </svg>
  );
}

// Donut chart
function DonutChart({ invested, gains }) {
  const total = invested + gains;
  const investedPct = total > 0 ? (invested / total) * 100 : 50;
  const gainsPct = 100 - investedPct;
  const r = 70;
  const cx = 100, cy = 100;
  const circ = 2 * Math.PI * r;
  const investedDash = (investedPct / 100) * circ;
  const gainsDash = (gainsPct / 100) * circ;

  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={`Donut chart: ${investedPct.toFixed(0)}% invested, ${gainsPct.toFixed(0)}% gains`} style={{ width: 160, height: 160 }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border)" strokeWidth="28" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={COLOR} strokeWidth="28"
        strokeDasharray={`${gainsDash} ${circ}`}
        strokeDashoffset={-investedDash}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy - 8} textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="800" fill="var(--text)">{gainsPct.toFixed(0)}%</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="var(--text-muted)">GAINS</text>
    </svg>
  );
}

export default function SipCalcClient() {
  const [mode, setMode] = useState("sip"); // "sip" | "lumpsum"
  const [monthly, setMonthly] = useState(10000);
  const [lumpsum, setLumpsum] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const [showInflation, setShowInflation] = useState(false);
  const [inflation, setInflation] = useState(6);

  const sipResult = calcSIP(monthly, rate, years);
  const lumpsumResult = calcLumpsum(lumpsum, rate, years);
  const result = mode === "sip" ? sipResult : lumpsumResult;

  const realRate = ((1 + rate / 100) / (1 + inflation / 100) - 1) * 100;
  const realResult = { maturity: result.maturity / Math.pow(1 + inflation / 100, years) };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SIP and how does it work?",
        acceptedAnswer: { "@type": "Answer", text: "A SIP invests an amount at regular intervals. Each contribution buys units at the prevailing NAV. A lower NAV buys more units, but this does not guarantee a profit or better results than a lump sum." }
      },
      {
        "@type": "Question",
        name: "What rate of return should I use for SIP calculations?",
        acceptedAnswer: { "@type": "Answer", text: "Use several hypothetical scenarios, not one rate presented as expected performance. Enter a return after fund expenses; published NAV returns already include those expenses. No single rate suits every goal or fund." }
      },
      {
        "@type": "Question",
        name: "How is SIP return different from a lumpsum return?",
        acceptedAnswer: { "@type": "Answer", text: "A lump sum is invested at the start, while every SIP contribution has its own date. The model assumes start-of-month contributions and an effective annual return. Equal total contributions do not mean equal time in the market." }
      },
      {
        "@type": "Question",
        name: "What is the effect of inflation on SIP returns?",
        acceptedAnswer: { "@type": "Answer", text: "The ending corpus is divided by (1 + inflation rate) raised to the number of years to express today's purchasing power. Future nominal contributions are not revalued as though they were already invested today." }
      },
      {
        "@type": "Question",
        name: "Should I choose SIP or lumpsum?",
        acceptedAnswer: { "@type": "Answer", text: "Match contributions to available cash and your investment plan. A SIP spreads purchase dates but does not guarantee profit or remove market risk. This calculator does not identify market lows." }
      },
      {
        "@type": "Question",
        name: "Is the SIP return in this calculator before or after tax?",
        acceptedAnswer: { "@type": "Answer", text: "Before tax and exit loads. Treatment depends on scheme, acquisition and disposal dates, holding period and tax year. Subtracting an arbitrary percentage from an annual return is not a tax calculation." }
      },
      {
        "@type": "Question",
        name: "How do I choose between direct and regular plan SIPs?",
        acceptedAnswer: { "@type": "Answer", text: "Direct plans have lower expenses than regular plans of the same scheme because distributor commissions are excluded. Compare current disclosures and consider advice needs. NAV returns already reflect expenses." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SIP Calculator — Systematic Investment Plan Return Calculator India 2026",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: "Calculate SIP returns with inflation adjustment, year-by-year corpus growth, and lumpsum comparison. Hypothetical effective annual returns; no tax or exit-load calculation.",
    author: { "@type": "Person", name: "Ash" },
    publisher: { "@type": "Organization", name: "Assure Fintech" },
    dateModified: "2026-10-01",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://www.assurefintech.com/calculators/" },
      { "@type": "ListItem", position: 3, name: "SIP Calculator", item: "https://www.assurefintech.com/calculators/sip-calculator" },
    ],
  };

  const sliderStyle = {
    width: "100%",
    accentColor: COLOR,
    cursor: "pointer",
    height: 4,
    marginTop: 6,
  };

  const inputGroupStyle = {
    marginBottom: 22,
  };

  const labelStyle = {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--text-muted)",
    letterSpacing: 0.5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  };

  const valueStyle = {
    fontSize: 15,
    fontWeight: 700,
    color: COLOR,
  };

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <script id="ld-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>
        <Link href="/" style={{ color: "inherit" }}>Home</Link>
        {" / "}
        <Link href="/calculators" style={{ color: "inherit" }}>Calculators</Link>
        {" / "}SIP Calculator
      </nav>

      {/* Header */}
      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 10 }}>MUTUAL FUNDS · CALCULATOR</div>
      <h1 style={{ fontSize: 30, lineHeight: 1.2, fontWeight: 800, margin: "0 0 10px" }}>SIP Calculator</h1>
      <p style={{ fontSize: 16, color: "var(--text-muted)", margin: "0 0 6px" }}>Explore hypothetical investment growth and the ending corpus in today's purchasing power. Returns are assumptions, not predictions.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>Updated {UPDATED} · By Ash</div>

      {/* Mode toggle */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        {["sip", "lumpsum"].map(m => (
          <button key={m} onClick={() => setMode(m)} style={{
            padding: "8px 20px", borderRadius: 8, border: "1.5px solid",
            borderColor: mode === m ? COLOR : "var(--border)",
            background: mode === m ? COLOR : "transparent",
            color: mode === m ? "#fff" : "var(--text)",
            fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all 0.15s",
          }}>
            {m === "sip" ? "Monthly SIP" : "Lumpsum"}
          </button>
        ))}
      </div>

      {/* Calculator grid */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32, alignItems: "start" }}>

        {/* LEFT — Inputs */}
        <div style={{ background: "var(--raise)", borderRadius: 14, padding: "24px 22px", border: "1px solid var(--border)" }}>

          {mode === "sip" ? (
            <div style={inputGroupStyle}>
              <div style={labelStyle}>
                <span>Monthly Investment</span>
                <span style={valueStyle}>{formatINR(monthly)}</span>
              </div>
              <input aria-label="Monthly contribution" type="range" min={500} max={200000} step={500} value={monthly}
                onChange={e => setMonthly(+e.target.value)} style={sliderStyle} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                <span>₹500</span><span>₹2 L</span>
              </div>
            </div>
          ) : (
            <div style={inputGroupStyle}>
              <div style={labelStyle}>
                <span>Lumpsum Amount</span>
                <span style={valueStyle}>{formatINR(lumpsum)}</span>
              </div>
              <input aria-label="Lump-sum investment" type="range" min={10000} max={10000000} step={10000} value={lumpsum}
                onChange={e => setLumpsum(+e.target.value)} style={sliderStyle} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                <span>₹10K</span><span>₹1 Cr</span>
              </div>
            </div>
          )}

          <div style={inputGroupStyle}>
            <div style={labelStyle}>
              <span>Assumed effective annual return (after expenses, before tax)</span>
              <span style={valueStyle}>{rate}%</span>
            </div>
            <input aria-label="Assumed effective annual return" type="range" min={4} max={24} step={0.5} value={rate}
              onChange={e => setRate(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
              <span>4%</span><span>24%</span>
            </div>
          </div>

          <div style={inputGroupStyle}>
            <div style={labelStyle}>
              <span>Investment Period</span>
              <span style={valueStyle}>{years} yr{years > 1 ? "s" : ""}</span>
            </div>
            <input aria-label="Investment horizon in years" type="range" min={1} max={40} step={1} value={years}
              onChange={e => setYears(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
              <span>1 yr</span><span>40 yrs</span>
            </div>
          </div>

          {/* Inflation toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, marginBottom: showInflation ? 16 : 0 }}>
            <button type="button" aria-label="Show inflation-adjusted purchasing power" aria-pressed={showInflation} onClick={() => setShowInflation(!showInflation)} style={{
              width: 38, height: 20, borderRadius: 10, background: showInflation ? COLOR : "var(--border)",
              position: "relative", cursor: "pointer", transition: "background 0.2s", border: 0, padding: 0,
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%", background: "var(--raise)",
                position: "absolute", top: 2, left: showInflation ? 20 : 2, transition: "left 0.2s",
              }} />
            </button>
            <span style={{ fontSize: 13, color: "var(--text-muted)", cursor: "pointer" }} onClick={() => setShowInflation(!showInflation)}>
              Show inflation-adjusted returns
            </span>
          </div>

          {showInflation && (
            <div style={inputGroupStyle}>
              <div style={labelStyle}>
                <span>Inflation Rate</span>
                <span style={valueStyle}>{inflation}%</span>
              </div>
              <input aria-label="Assumed annual inflation" type="range" min={2} max={12} step={0.5} value={inflation}
                onChange={e => setInflation(+e.target.value)} style={sliderStyle} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                <span>2%</span><span>12%</span>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — Results */}
        <div>
          {/* Main result card */}
          <div style={{ background: COLOR, color: "#fff", borderRadius: 14, padding: "24px 22px", marginBottom: 14 }}>
            <div style={{ fontSize: 12, letterSpacing: 1.5, fontWeight: 700, opacity: 0.8, marginBottom: 6 }}>TOTAL CORPUS</div>
            <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>{formatINR(result.maturity)}</div>
            <div style={{ fontSize: 13, opacity: 0.85 }}>in {years} year{years > 1 ? "s" : ""} at {rate}% p.a.</div>
          </div>

          {/* Breakdown */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 4 }}>INVESTED</div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{formatINR(result.invested)}</div>
            </div>
            <div style={{ background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 4 }}>GAINS</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: COLOR }}>{formatINR(result.gains)}</div>
            </div>
          </div>

          {/* Donut */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, background: "var(--raise)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px", marginBottom: 14 }}>
            <DonutChart invested={result.invested} gains={result.gains} />
            <div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
                <span style={{ color: "var(--text)", fontWeight: 700 }}>{result.invested > 0 ? ((result.gains / result.invested) * 100).toFixed(0) : 0}%</span> simple gain on contributions (not annualized)
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Wealth ratio: <span style={{ color: COLOR, fontWeight: 700 }}>{result.invested > 0 ? (result.maturity / result.invested).toFixed(1) : "0"}x</span>
              </div>
            </div>
          </div>

          {/* Inflation adjusted */}
          {showInflation && (
            <div style={{ border: `1.5px solid ${COLOR}`, borderRadius: 10, padding: "14px 16px", background: "var(--raise)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 1, marginBottom: 6 }}>INFLATION-ADJUSTED (REAL TERMS)</div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>{formatINR(realResult.maturity)}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Real return: {realRate.toFixed(2)}% p.a. after {inflation}% inflation</div>
            </div>
          )}
        </div>
      </div>

      {/* Year-by-year chart */}
      {mode === "sip" && (
        <section style={{ marginTop: 36, marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Year-by-Year Corpus Growth</h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 12px" }}>The grey bars show contributions; the purple bars show projected gains. Their relationship depends on the return assumption and contribution dates, not a fixed crossover year.</p>
          <GrowthChart monthly={monthly} rate={rate} years={Math.min(years, 30)} />
        </section>
      )}

      {/* Comparison table */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px" }}>What ₹10,000/month SIP Becomes</h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 16px" }}>At different return rates and tenures — so you can set realistic targets.</p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "var(--raise)" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", borderBottom: "2px solid var(--border)", color: "var(--text-muted)", fontWeight: 700, fontSize: 12 }}>TENURE</th>
                {[8, 10, 12, 15].map(r => (
                  <th key={r} style={{ padding: "10px 14px", textAlign: "right", borderBottom: "2px solid var(--border)", color: r === 12 ? COLOR : "var(--text-muted)", fontWeight: 700, fontSize: 12 }}>
                    {r}% p.a.{r === 12 ? " ★" : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[5, 10, 15, 20, 25, 30].map((y, i) => (
                <tr key={y} style={{ background: i % 2 === 0 ? "transparent" : "var(--raise)" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid var(--border)", fontWeight: 700 }}>{y} years</td>
                  {[8, 10, 12, 15].map(r => {
                    const { maturity } = calcSIP(10000, r, y);
                    return (
                      <td key={r} style={{ padding: "10px 14px", textAlign: "right", borderBottom: "1px solid var(--border)", color: r === 12 ? COLOR : "var(--text)", fontWeight: r === 12 ? 700 : 400 }}>
                        {formatINR(maturity)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 10 }}>All return rates are hypothetical scenarios, not verified market averages or forecasts.</p>
      </section>

      {/* Honest take section */}
      <section style={{ background: "var(--raise)", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 10px 10px 0", padding: "20px 24px", marginBottom: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Keep expenses, tax and inflation separate</h2>
        <p style={{ fontSize: 15, margin: "0 0 10px" }}>
          Published NAV returns already reflect fund expenses. Do not subtract the expense ratio again from a NAV-based CAGR. Enter a hypothetical return after expenses; this calculator does not forecast any fund's performance.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 10px" }}>
          This projection is before tax and exit loads. Treatment depends on scheme, acquisition dates, holding periods, disposals and applicable year. Do not approximate it by subtracting a fixed percentage from annual returns.
        </p>
        <p style={{ fontSize: 15, margin: 0 }}>
          And inflation: at 6% inflation, ₹1 Cr in 20 years has the purchasing power of roughly ₹31L today. Use the inflation toggle above to see what your corpus is really worth.
        </p>
      </section>

      {/* How SIP works — editorial */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px" }}>How the SIP Math Works</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          SIP returns are calculated using the future value of an annuity formula. Each monthly instalment earns compound interest from its investment date until the end. The first instalment earns returns for all {years} years; the last instalment earns only 1 month.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Earlier contributions have more time to compound in a positive-return scenario. Starting earlier also means contributing more money; compare both the total contributions and ending corpus rather than attributing the entire difference to investment returns.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          Fixed contributions buy more units when NAV is lower and fewer when it is higher. They do not guarantee a lower purchase price or a better return than a lump sum; actual market paths and contribution dates determine that comparison.
        </p>
      </section>

      {/* Direct vs Regular callout */}
      <section style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px", marginBottom: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Direct and regular plans: compare actual expenses</h2>
        <p style={{ fontSize: 15, margin: "0 0 10px" }}>
          Direct plans exclude distributor commissions and have lower expenses than regular plans of the same scheme. The actual difference varies. Compare current disclosures for the same scheme and option; a fixed one-percentage-point difference is not universal.
        </p>
        <p style={{ fontSize: 15, margin: 0 }}>
          Read the <Link href="/learn/mutual-funds/direct-vs-regular" style={{ color: COLOR }}>direct-versus-regular guide</Link> and <a href="https://www.amfiindia.com/investor/knowledge-center-info?zoneName=DirectPlan" target="_blank" rel="noopener noreferrer">AMFI’s explanation</a>. Switching existing units can trigger tax or exit loads, unlike changing where new contributions go.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Frequently Asked Questions</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, listStyle: "none", display: "flex", justifyContent: "space-between" }}>
              {q.name}
              <span style={{ color: COLOR, fontWeight: 700, marginLeft: 8 }}>+</span>
            </summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.65 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      {/* Related links */}
      <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>
        Related:{" "}
        <Link href="/learn/mutual-funds" style={{ color: COLOR }}>Mutual Funds Guide</Link>
        {" · "}
        <Link href="/compare/direct-vs-regular" style={{ color: COLOR }}>Direct vs Regular Plans</Link>
        {" · "}
        <Link href="/learn/tax" style={{ color: COLOR }}>LTCG Tax on Mutual Funds</Link>
        {" · "}
        <Link href="/smart-swipe" style={{ color: COLOR }}>Smart Swipe Card Tool</Link>
      </p>

      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
        Returns shown are illustrative and not guaranteed. Past mutual fund performance is not indicative of future results. This calculator does not account for exit loads, STT, or SEBI-regulated expense ratio changes. Consult a SEBI-registered investment advisor before investing.
      </footer>
    </main>
  );
}
