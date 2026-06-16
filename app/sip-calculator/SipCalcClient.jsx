"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";



// ============================================================
// Tier F — SIP Calculator
// URL: /calculators/sip-calculator
// Author: Ash K · Updated: June 6, 2026
// ============================================================

const COLOR = "#7c3aed";
const UPDATED = "June 6, 2026";

function formatINR(n) {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + " L";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

function calcSIP(monthly, rate, years) {
  const n = years * 12;
  const r = rate / 100 / 12;
  if (r === 0) return { maturity: monthly * n, invested: monthly * n, gains: 0 };
  const maturity = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthly * n;
  return { maturity: Math.round(maturity), invested: Math.round(invested), gains: Math.round(maturity - invested) };
}

function calcLumpsum(principal, rate, years) {
  const maturity = principal * Math.pow(1 + rate / 100, years);
  return { maturity: Math.round(maturity), invested: principal, gains: Math.round(maturity - principal) };
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
  const realResult = mode === "sip"
    ? calcSIP(monthly, realRate, years)
    : calcLumpsum(lumpsum, realRate, years);

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SIP and how does it work?",
        acceptedAnswer: { "@type": "Answer", text: "SIP (Systematic Investment Plan) is a method of investing a fixed amount every month into a mutual fund. Each month, your money buys units at the prevailing NAV. Over time, you accumulate units — buying more when NAV is low, fewer when NAV is high. This averaging effect (called rupee cost averaging) reduces the impact of market volatility." }
      },
      {
        "@type": "Question",
        name: "What rate of return should I use for SIP calculations?",
        acceptedAnswer: { "@type": "Answer", text: "Equity mutual funds have historically delivered 10-15% CAGR over 10+ year periods in India. For conservative planning, use 10-11%. For aggressive funds (small cap, mid cap), some use 14-15%. Debt funds typically return 6-8%. Always use post-expense-ratio returns — a fund with 15% gross return and 1.5% expense ratio gives you only 13.5%." }
      },
      {
        "@type": "Question",
        name: "How is SIP return different from a lumpsum return?",
        acceptedAnswer: { "@type": "Answer", text: "Lumpsum computes using simple compound interest since all the money is invested from day one. SIP calculates differently because each instalment earns returns only from its investment date. A ₹10,000/month SIP at 12% for 15 years gives ₹1 Cr corpus, while ₹18L lumpsum at 12% for 15 years gives ₹98L. Same invested amount, roughly similar outcome — but SIP spreads risk over time." }
      },
      {
        "@type": "Question",
        name: "What is the effect of inflation on SIP returns?",
        acceptedAnswer: { "@type": "Answer", text: "If inflation is 6% and your fund returns 12%, your real return is only about 5.66%. A ₹1 Cr corpus in 15 years will have the purchasing power of roughly ₹40L in today's money. Use the 'Show inflation-adjusted' toggle above to see real returns. This is why targeting 12-14% returns matters — you need to stay well ahead of inflation." }
      },
      {
        "@type": "Question",
        name: "Should I choose SIP or lumpsum?",
        acceptedAnswer: { "@type": "Answer", text: "SIP is better for salaried investors who receive monthly income and want to invest regularly. Lumpsum is better when you have a large one-time amount (bonus, inheritance, maturity proceeds) and the market is near a multi-year low. In practice, most people combine both: a base SIP every month, with lumpsum additions when they get windfalls." }
      },
      {
        "@type": "Question",
        name: "Is the SIP return in this calculator before or after tax?",
        acceptedAnswer: { "@type": "Answer", text: "Before tax. Equity mutual fund gains are taxed as LTCG at 12.5% (above ₹1.25L/year) if held over 12 months (post July 2024 budget). Debt fund gains are taxed at your income slab rate. For post-tax planning, subtract approximately 1-2% from your effective return depending on your income slab and holding period." }
      },
      {
        "@type": "Question",
        name: "How do I choose between direct and regular plan SIPs?",
        acceptedAnswer: { "@type": "Answer", text: "Direct plans have lower expense ratios (typically 0.5-1% less than regular plans). On a ₹10,000/month SIP at 12% for 20 years: a 1% higher return (direct vs regular) adds approximately ₹12-15L to your final corpus. Use direct plans via SEBI-registered platforms like Zerodha Coin, Groww, or MFCentral if you don't need an advisor." }
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SIP Calculator — Systematic Investment Plan Return Calculator India 2026",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: "Calculate SIP returns with inflation adjustment, year-by-year corpus growth, and lumpsum comparison. Free SIP calculator for India with accurate 2026 tax and return assumptions.",
    author: { "@type": "Person", name: "Ash K" },
    publisher: { "@type": "Organization", name: "Assure Fintech" },
    dateModified: "2026-06-06",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://assurefintech.com/calculators/" },
      { "@type": "ListItem", position: 3, name: "SIP Calculator", item: "https://assurefintech.com/calculators/sip-calculator" },
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
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "44px 22px 88px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

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
      <p style={{ fontSize: 16, color: "var(--text-muted)", margin: "0 0 6px" }}>See exactly what your monthly investment will become — with inflation-adjusted real returns.</p>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 32 }}>Updated {UPDATED} · By Ash K</div>

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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

        {/* LEFT — Inputs */}
        <div style={{ background: "var(--surface, #f8fafc)", borderRadius: 14, padding: "24px 22px", border: "1px solid var(--border)" }}>

          {mode === "sip" ? (
            <div style={inputGroupStyle}>
              <div style={labelStyle}>
                <span>Monthly Investment</span>
                <span style={valueStyle}>{formatINR(monthly)}</span>
              </div>
              <input type="range" min={500} max={200000} step={500} value={monthly}
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
              <input type="range" min={10000} max={10000000} step={10000} value={lumpsum}
                onChange={e => setLumpsum(+e.target.value)} style={sliderStyle} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                <span>₹10K</span><span>₹1 Cr</span>
              </div>
            </div>
          )}

          <div style={inputGroupStyle}>
            <div style={labelStyle}>
              <span>Expected Return (p.a.)</span>
              <span style={valueStyle}>{rate}%</span>
            </div>
            <input type="range" min={4} max={24} step={0.5} value={rate}
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
            <input type="range" min={1} max={40} step={1} value={years}
              onChange={e => setYears(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
              <span>1 yr</span><span>40 yrs</span>
            </div>
          </div>

          {/* Inflation toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, marginBottom: showInflation ? 16 : 0 }}>
            <div onClick={() => setShowInflation(!showInflation)} style={{
              width: 38, height: 20, borderRadius: 10, background: showInflation ? COLOR : "var(--border)",
              position: "relative", cursor: "pointer", transition: "background 0.2s",
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%", background: "#fff",
                position: "absolute", top: 2, left: showInflation ? 20 : 2, transition: "left 0.2s",
              }} />
            </div>
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
              <input type="range" min={2} max={12} step={0.5} value={inflation}
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
            <div style={{ background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 4 }}>INVESTED</div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{formatINR(result.invested)}</div>
            </div>
            <div style={{ background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 4 }}>GAINS</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: COLOR }}>{formatINR(result.gains)}</div>
            </div>
          </div>

          {/* Donut */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, background: "var(--surface, #f8fafc)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px", marginBottom: 14 }}>
            <DonutChart invested={result.invested} gains={result.gains} />
            <div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
                <span style={{ color: "var(--text)", fontWeight: 700 }}>{result.invested > 0 ? ((result.gains / result.invested) * 100).toFixed(0) : 0}x</span> returns on invested amount
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Wealth ratio: <span style={{ color: COLOR, fontWeight: 700 }}>{result.invested > 0 ? (result.maturity / result.invested).toFixed(1) : "0"}x</span>
              </div>
            </div>
          </div>

          {/* Inflation adjusted */}
          {showInflation && (
            <div style={{ border: `1.5px solid ${COLOR}`, borderRadius: 10, padding: "14px 16px", background: "var(--surface, #f8fafc)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 1, marginBottom: 6 }}>INFLATION-ADJUSTED (REAL TERMS)</div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>{formatINR(realResult.maturity)}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Real return: {realRate.toFixed(2)}% p.a. after {inflation}% inflation</div>
            </div>
          )}
        </div>
      </div>

      {/* Year-by-year chart */}
      {mode === "sip" && (
        <section style={{ marginTop: 36, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Year-by-Year Corpus Growth</h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 12px" }}>The purple bars show your returns. The grey bars show money you put in. Notice how gains overtake invested amount after about Year {Math.round(years * 0.6)}.</p>
          <GrowthChart monthly={monthly} rate={rate} years={Math.min(years, 30)} />
        </section>
      )}

      {/* Comparison table */}
      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px" }}>What ₹10,000/month SIP Becomes</h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 16px" }}>At different return rates and tenures — so you can set realistic targets.</p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "var(--surface, #f8fafc)" }}>
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
                <tr key={y} style={{ background: i % 2 === 0 ? "transparent" : "var(--surface, #f8fafc)" }}>
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
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 10 }}>★ 12% p.a. is the long-run average for diversified equity mutual funds in India. Past returns do not guarantee future performance.</p>
      </section>

      {/* Honest take section */}
      <section style={{ background: "var(--surface, #f8fafc)", borderLeft: `4px solid ${COLOR}`, borderRadius: "0 10px 10px 0", padding: "20px 24px", marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>The Numbers Your AMC Won't Show You</h2>
        <p style={{ fontSize: 15, margin: "0 0 10px" }}>
          Fund fact sheets advertise CAGR — but your real return is lower. A fund with 15% CAGR and 1.5% expense ratio delivers 13.5% to you. At ₹10,000/month for 20 years, that 1.5% difference costs you approximately ₹28 L in final corpus.
        </p>
        <p style={{ fontSize: 15, margin: "0 0 10px" }}>
          Post-tax matters too. Equity LTCG above ₹1.25L/year is taxed at 12.5% (July 2024 budget). On a large corpus liquidation, your effective tax can be significant. Plan for it.
        </p>
        <p style={{ fontSize: 15, margin: 0 }}>
          And inflation: at 6% inflation, ₹1 Cr in 20 years has the purchasing power of roughly ₹31L today. Use the inflation toggle above to see what your corpus is really worth.
        </p>
      </section>

      {/* How SIP works — editorial */}
      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px" }}>How the SIP Math Works</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          SIP returns are calculated using the future value of an annuity formula. Each monthly instalment earns compound interest from its investment date until the end. The first instalment earns returns for all {years} years; the last instalment earns only 1 month.
        </p>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          This is why time is the most powerful lever. Starting a ₹5,000/month SIP at age 25 instead of 35 — same 10 years of extra investment — nearly triples the corpus at age 60. The early instalments have decades to compound.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          Rupee cost averaging means you buy more units when NAV is low and fewer when it is high. Over a market cycle, this reduces your average purchase price versus a lumpsum invested at a single point. It does not guarantee better returns — but it reduces the variance and the anxiety of market timing.
        </p>
      </section>

      {/* Direct vs Regular callout */}
      <section style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px", marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Direct Plan vs Regular Plan: The 1% That Costs ₹12L</h2>
        <p style={{ fontSize: 15, margin: "0 0 10px" }}>
          Regular plans pay 0.5-1% annual commission to your distributor. This reduces your effective return by the same amount. On ₹10,000/month SIP at 12% for 20 years: the corpus is ₹99.9L. At 11% (regular plan, 1% commission): ₹85.5L. Difference: ₹14.4L — just from paying commission.
        </p>
        <p style={{ fontSize: 15, margin: 0 }}>
          Invest in direct plans via <Link href="/learn/mutual-funds" style={{ color: COLOR }}>platforms like Zerodha Coin, Groww, or MFCentral</Link>. It is the same fund, same fund manager, just without the distributor cut.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: 36 }}>
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
