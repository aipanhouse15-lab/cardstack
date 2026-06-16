import { CARDS, CATEGORIES } from "@/data/cards";
import { notFound } from "next/navigation";
import Link from "next/link";
import BankLogo from "@/components/BankLogo";
import { getEditorial } from "@/data/editorials";

/* ── Static generation ── */
export async function generateStaticParams() {
  return CARDS.map(card => ({ id: card.id }));
}

/* ── Metadata ── */
export async function generateMetadata({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) return { title: "Card Not Found" };
  const ed = card.editorial || getEditorial(card.id);
  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const maxRate = sorted[0]?.[1] || 0;
  const bestCat = sorted[0]?.[0] || "";
  const pageTitle = `${card.name} Review — Rewards, Fees, Caps & Best Combos (2026)`;
  const pageDesc = ed?.verdict?.headline
    ? `${card.name}: ${ed.verdict.headline} Full review with cap math, best uses, what to avoid, and ideal card pairings.`
    : `${card.name} by ${card.bank}: ${card.fee === 0 ? "Lifetime free" : `₹${card.fee}/year`}. Best for ${bestCat} at ${maxRate}%. Full review with pros, cons, and reward breakdown.`;
  return {
    title: pageTitle,
    description: pageDesc,
    alternates: { canonical: `/cards/${params.id}` },
    openGraph: { title: pageTitle, description: pageDesc, type: "article", siteName: "Assure Fintech" },
    twitter: { card: "summary", title: pageTitle, description: pageDesc },
  };
}

/* ── Honest Score — derived from card data ── */
function honestScore(card, maxRate) {
  let s = 5.0;
  s += Math.min(maxRate * 0.5, 2.5);                                       // reward quality (0–2.5)
  s += card.fee === 0 ? 1.5 : card.feeWaiver && card.feeWaiver !== "None" ? 0.5 : card.fee > 2000 ? -0.5 : 0; // fee
  s += card.lounge && card.lounge !== "None" && card.lounge !== "0" ? 0.5 : 0; // lounge
  s += Math.min((card.pros.length - card.cons.length) * 0.3, 1.0);         // sentiment
  if (card.caps?.monthlyCashback && card.caps.monthlyCashback <= 500) s -= 0.8; // harsh cap
  return Math.min(9.5, Math.max(2.0, Math.round(s * 10) / 10));
}

/* ── Score color ── */
function scoreColor(s) {
  if (s >= 7.5) return "var(--green)";
  if (s >= 5.5) return "var(--gold)";
  return "var(--red)";
}

/* ── TOC sections ── */
function tocSections(card) {
  const ed = card.editorial || getEditorial(card.id);
  const items = [
    { id: "verdict", label: "Verdict" },
    { id: "rewards", label: "Reward rates" },
  ];
  if (ed?.capMath || card.caps) items.push({ id: "caps", label: "Cap math" });
  if (card.partnerRates?.length) items.push({ id: "partners", label: "Partner rates" });
  items.push({ id: "proscons", label: "Pros & cons" });
  if (ed?.bestFor) items.push({ id: "bestfor", label: "Best used for" });
  if (ed?.avoidFor) items.push({ id: "avoidfor", label: "Switch for" });
  if (ed?.pairWith) items.push({ id: "combos", label: "Best combos" });
  if (ed?.faq) items.push({ id: "faq", label: "FAQ" });
  items.push({ id: "feemath", label: "Fee math" });
  return items;
}

/* ════════════════════════════════════════════════════════════
   CARD PAGE — THE GAP DESIGN
   ════════════════════════════════════════════════════════════ */
export default function CardPage({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) notFound();

  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const maxRate = sorted[0]?.[1] || 0;
  const bestCategory = sorted[0]?.[0] || "";
  const ed = card.editorial || getEditorial(card.id);
  const score = honestScore(card, maxRate);
  const sColor = scoreColor(score);
  const toc = tocSections(card);

  // Compute cap curve rows (for cards with cap data)
  const capCurveRows = [];
  if (card.caps) {
    const c = card.caps;
    const spends = [5000, 10000, 25000, 50000, 100000];
    spends.forEach(spend => {
      const raw = spend * maxRate / 100;
      let effective = maxRate;
      let capped = false;
      if (c.monthlyCashback !== undefined && raw > c.monthlyCashback) {
        const maxSpend = c.monthlyCashback / (maxRate / 100);
        const overflow = spend - maxSpend;
        const fallback = c.fallbackRate || 0;
        const total = c.monthlyCashback + (overflow * fallback / 100);
        effective = parseFloat(((total / spend) * 100).toFixed(2));
        capped = true;
      } else if (c.monthlyPoints !== undefined) {
        const ptsEarned = (spend / (c.spendPer || 100)) * (c.pointsPer || 1);
        if (ptsEarned > c.monthlyPoints) {
          effective = parseFloat(((c.monthlyPoints * (c.pointValue || 0.25)) / spend * 100).toFixed(2));
          capped = true;
        }
      }
      capCurveRows.push({ spend, effective, capped });
    });
  }

  // Fee math
  const feeWithGST = Math.round(card.fee * 1.18);
  const annualReward = Math.round(maxRate / 100 * 60000 * 12); // rough: best rate × ₹60K/mo
  const netValue = annualReward - feeWithGST;

  /* ── JSON-LD ── */
  const cardSchema = {
    "@context": "https://schema.org", "@type": "FinancialProduct", name: card.name,
    description: `${card.name} by ${card.bank}. ${card.type} credit card with up to ${maxRate}% rewards on ${bestCategory}. ${card.fee === 0 ? "Lifetime free." : `Annual fee: ₹${card.fee}.`} ${card.highlights.join(". ")}.`,
    brand: { "@type": "Organization", name: card.bank }, category: "Credit Card",
    offers: { "@type": "Offer", price: card.fee, priceCurrency: "INR", description: card.fee === 0 ? "Lifetime free" : `Annual fee: ₹${card.fee}` },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Card Type", value: card.type },
      { "@type": "PropertyValue", name: "Card Network", value: card.network },
      { "@type": "PropertyValue", name: "Lounge Access", value: card.lounge },
      { "@type": "PropertyValue", name: "Best Reward Rate", value: `${maxRate}%` },
      ...sorted.map(([catId, rate]) => ({ "@type": "PropertyValue", name: `${catId.charAt(0).toUpperCase() + catId.slice(1)} Reward Rate`, value: `${rate}%` })),
    ],
    feesAndCommissionsSpecification: card.fee === 0 ? "No annual fee" : `Annual fee of ₹${card.fee}`,
    areaServed: { "@type": "Country", name: "India" },
  };
  const reviewSchema = {
    "@context": "https://schema.org", "@type": "Review",
    itemReviewed: { "@type": "FinancialProduct", name: card.name },
    author: { "@type": "Organization", name: "Assure Fintech" },
    reviewBody: ed?.verdict?.headline ? `${card.name}: ${ed.verdict.headline} ${ed.verdict.idealFor}` : `${card.name} review: ${card.pros.join(". ")}. Downsides: ${card.cons.join(". ")}.`,
    positiveNotes: { "@type": "ItemList", itemListElement: card.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })) },
    negativeNotes: { "@type": "ItemList", itemListElement: card.cons.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })) },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.assurefintech.com" },
      { "@type": "ListItem", position: 2, name: "Cards", item: "https://www.assurefintech.com/cards" },
      { "@type": "ListItem", position: 3, name: card.name, item: `https://www.assurefintech.com/cards/${card.id}` },
    ],
  };
  const faqSchema = ed?.faq ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: ed.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  /* ── Circumference for score ring ── */
  const R = 58, C = 2 * Math.PI * R, dash = (score / 10) * C;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cardSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* ═══ BREADCRUMB ═══ */}
      <div className="wrap crumb">
        <Link href="/">Home</Link> <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
        <Link href="/cards">Cards</Link> <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
        <span style={{ color: "var(--mut)" }}>{card.name}</span>
      </div>

      {/* ═══ DEVALUATION ALERT ═══ */}
      {card.upcoming && (
        <div className="wrap">
          <div className="alert">
            <span style={{ fontSize: 18 }}>⚠️</span>
            <div>
              <b>Upcoming change ({card.upcoming.date}):</b>{" "}
              <span style={{ color: "var(--mut)" }}>{card.upcoming.changes[0]}</span>
            </div>
          </div>
        </div>
      )}

      {/* ═══ CARD HERO ═══ */}
      <div className="wrap">
        <div className="chero">
          {/* Left column */}
          <div>
            <div className="cbadges">
              <span className="cbadge cb-bank">{card.bank}</span>
              <span className="cbadge" style={{ color: "var(--mut)", border: "1px solid var(--hair2)" }}>{card.type}</span>
              {card.verified
                ? <span className="cbadge cb-ver">✓ VERIFIED</span>
                : <span className="cbadge" style={{ color: "var(--gold)", border: "1px solid rgba(212,168,83,.4)" }}>UNVERIFIED</span>
              }
            </div>
            <h1 className="disp" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.08, letterSpacing: "-.02em", marginBottom: 14 }}>
              {card.name}
              {!/credit card/i.test(card.name) && <span style={{ color: "var(--dim)" }}> Credit Card</span>}
            </h1>
            <p style={{ color: "var(--mut)", fontSize: 16, lineHeight: 1.6, maxWidth: 480, marginBottom: 20 }}>
              {ed?.verdict?.headline || `${card.bank} ${card.type.toLowerCase()} card with up to ${maxRate}% rewards on ${bestCategory}.`}
            </p>
            <p className="mono" style={{ fontSize: 12, color: "var(--dim)", letterSpacing: ".06em" }}>
              By <span style={{ color: "var(--mut)" }}>Ashutosh</span> · Updated June 2026
            </p>
          </div>

          {/* Right column — card visual */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="bigcard" style={{ background: `linear-gradient(140deg, ${card.color}cc 0%, ${card.color} 50%, ${card.color}99 115%)` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <BankLogo bank={card.bank} cardId={card.id} size={48} rounded={10} fontSize={14} />
                <span className="mono" style={{ fontSize: 10, opacity: 0.6, letterSpacing: ".12em" }}>{card.network}</span>
              </div>
              <div style={{ position: "absolute", bottom: 26, left: 26 }}>
                <div className="disp" style={{ fontSize: 18, fontWeight: 500, opacity: 0.9 }}>{card.name}</div>
                <div className="mono" style={{ fontSize: 10, opacity: 0.5, marginTop: 4 }}>
                  {card.fee === 0 ? "LIFETIME FREE" : `₹${card.fee.toLocaleString()}/YR`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ QUICK FACTS ═══ */}
      <div className="qfacts">
        <div className="wrap">
          <div className="qf-in">
            <div className="qf">
              <div className="l">Annual Fee</div>
              <div className="v" style={card.fee === 0 ? { color: "var(--green)" } : undefined}>
                {card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}`}
              </div>
              {card.fee > 0 && <div className="mono" style={{ fontSize: 10, color: "var(--dim)", marginTop: 2 }}>+18% GST = ₹{feeWithGST.toLocaleString()}</div>}
            </div>
            <div className="qf">
              <div className="l">Fee Waiver</div>
              <div className="v" style={{ fontSize: 18 }}>{card.feeWaiver || "N/A"}</div>
            </div>
            <div className="qf">
              <div className="l">Best Rate</div>
              <div className="v" style={{ color: "var(--green)" }}>{maxRate}%</div>
              <div className="mono" style={{ fontSize: 10, color: "var(--dim)", marginTop: 2 }}>{bestCategory}</div>
            </div>
            <div className="qf">
              <div className="l">Lounge Access</div>
              <div className="v" style={{ fontSize: 18 }}>{card.lounge || "None"}</div>
            </div>
            <div className="qf">
              <div className="l">Network</div>
              <div className="v" style={{ fontSize: 18 }}>{card.network}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ ARTICLE LAYOUT ═══ */}
      <div className="wrap">
        <div className="art-layout">

          {/* ──── MAIN COLUMN ──── */}
          <div>

            {/* ── VERDICT ── */}
            {ed?.verdict && (
              <div id="verdict" className="verd" style={{ marginBottom: 56 }}>
                <div className="score">
                  <svg viewBox="0 0 148 148">
                    <circle cx="74" cy="74" r={R} fill="none" stroke="var(--hair)" strokeWidth="5" />
                    <circle cx="74" cy="74" r={R} fill="none" stroke={sColor} strokeWidth="5"
                      strokeDasharray={`${dash} ${C - dash}`} strokeLinecap="round"
                      style={{ transition: "stroke-dasharray 1s ease" }} />
                  </svg>
                  <span className="sn" style={{ color: sColor }}>{score}</span>
                  <span className="so">/ 10</span>
                </div>
                <div>
                  <div className="k accent" style={{ marginBottom: 12 }}>HONEST SCORE</div>
                  <div className="disp" style={{ fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.25, marginBottom: 16 }}>
                    {ed.verdict.headline}
                  </div>
                  {(ed.verdict.body || "").split("\n\n").map((para, i) => (
                    <p key={i} style={{ color: "var(--mut)", fontSize: 15, lineHeight: 1.75, marginBottom: 14 }}>{para}</p>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
                    <div style={{ background: "var(--green-dim)", border: "1px solid rgba(62,224,143,.25)", borderRadius: 13, padding: "16px 20px" }}>
                      <div className="k" style={{ color: "var(--green)", marginBottom: 8 }}>IDEAL FOR</div>
                      <p style={{ fontSize: 13.5, color: "var(--mut)", lineHeight: 1.6 }}>{ed.verdict.idealFor}</p>
                    </div>
                    <div style={{ background: "var(--red-dim)", border: "1px solid rgba(255,90,72,.25)", borderRadius: 13, padding: "16px 20px" }}>
                      <div className="k" style={{ color: "var(--red)", marginBottom: 8 }}>SKIP IF</div>
                      <p style={{ fontSize: 13.5, color: "var(--mut)", lineHeight: 1.6 }}>{ed.verdict.skipIf}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── REWARD RATES GRID ── */}
            <div id="rewards" style={{ marginBottom: 56 }}>
              <div className="k accent" style={{ marginBottom: 20 }}>REWARD RATES BY CATEGORY</div>
              <div className="rgrid">
                {sorted.map(([catId, rate]) => {
                  const cat = CATEGORIES.find(c => c.id === catId);
                  return (
                    <div key={catId} className="rcell">
                      <span style={{ fontSize: 22 }}>{cat?.icon || "📋"}</span>
                      <div className="rp" style={rate === maxRate ? { color: "var(--green)" } : rate === 0 ? { color: "var(--red)" } : undefined}>
                        {rate}%
                      </div>
                      <div className="rc">{cat?.label || catId}</div>
                    </div>
                  );
                })}
              </div>

              {/* Points info */}
              {card.pointsInfo && (
                <div style={{ marginTop: 16, background: "var(--raise)", border: "1px solid var(--hair)", borderRadius: 13, padding: "14px 20px", display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 16 }}>🔢</span>
                  <div>
                    <div className="k" style={{ marginBottom: 4 }}>POINT SYSTEM</div>
                    <p style={{ fontSize: 13.5, color: "var(--mut)" }}>{card.pointsInfo}</p>
                  </div>
                </div>
              )}

              {/* Redemption note */}
              {card.redemptionNote && (
                <div style={{ marginTop: 12, background: "rgba(94,177,255,.08)", border: "1px solid rgba(94,177,255,.2)", borderRadius: 13, padding: "14px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, marginTop: 2 }}>💡</span>
                  <div>
                    <div className="k" style={{ color: "var(--c-loan)", marginBottom: 4 }}>REDEMPTION MATTERS</div>
                    <p style={{ fontSize: 13.5, color: "var(--mut)", lineHeight: 1.6 }}>{card.redemptionNote}</p>
                  </div>
                </div>
              )}
            </div>

            {/* ── CAP CURVE ── */}
            {capCurveRows.length > 0 && (
              <div id="caps" style={{ marginBottom: 56 }}>
                <div className="k accent" style={{ marginBottom: 20 }}>
                  {ed?.capMath ? ed.capMath.title.toUpperCase() : "HOW CAPS AFFECT YOUR EFFECTIVE RATE"}
                </div>

                {ed?.capMath && (
                  <div className="prose" style={{ marginBottom: 24 }}>
                    {(ed.capMath.body || "").split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                <div className="curve">
                  <div className="cv-head">
                    <div className="cv-row" style={{ padding: 0, borderBottom: "none" }}>
                      <span className="k">Monthly Spend</span>
                      <span className="k">Effective Rate</span>
                      <span className="k">Status</span>
                      <span className="k">Cap Impact</span>
                    </div>
                  </div>
                  {capCurveRows.map((row, i) => {
                    const pct = (row.effective / maxRate) * 100;
                    const cls = row.effective >= maxRate * 0.8 ? "g" : row.effective >= maxRate * 0.5 ? "y" : "r";
                    return (
                      <div key={i} className="cv-row">
                        <span className="mono" style={{ fontSize: 13, color: "var(--mut)" }}>₹{row.spend.toLocaleString()}</span>
                        <span className={`er ${cls}`}>{row.effective}%</span>
                        <span className="mono" style={{ fontSize: 11, color: row.capped ? "var(--red)" : "var(--green)" }}>
                          {row.capped ? "CAPPED" : "FULL RATE"}
                        </span>
                        <div className="cv-bar">
                          <i style={{ width: `${Math.min(pct, 100)}%`, background: cls === "g" ? "var(--green)" : cls === "y" ? "var(--gold)" : "var(--red)" }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── PARTNER RATES ── */}
            {card.partnerRates && card.partnerRates.length > 0 && (
              <div id="partners" style={{ marginBottom: 56 }}>
                <div className="k accent" style={{ marginBottom: 20 }}>BOOSTED RATES — PARTNERS & SMARTBUY</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {card.partnerRates.map((pr, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "var(--raise)", border: "1px solid var(--hair)", borderRadius: 13,
                      padding: "16px 22px", transition: ".2s",
                    }}>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{pr.name}</span>
                      <span className="mono" style={{ fontSize: 13, fontWeight: 600, color: "var(--green)", background: "var(--green-dim)", padding: "5px 12px", borderRadius: 8 }}>
                        {pr.rate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── PROS & CONS (DECODE) ── */}
            <div id="proscons" style={{ marginBottom: 56 }}>
              <div className="k accent" style={{ marginBottom: 20 }}>THE DECODE</div>
              <div className="decode">
                <div className="dc good">
                  <h4>PROS</h4>
                  <ul>
                    {card.pros.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
                <div className="dc bad">
                  <h4>CONS</h4>
                  <ul>
                    {card.cons.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── BEST USED FOR ── */}
            {ed?.bestFor && (
              <div id="bestfor" style={{ marginBottom: 56 }}>
                <div className="k accent" style={{ marginBottom: 20 }}>BEST USED FOR</div>
                <div className="tldr">
                  <ul>
                    {ed.bestFor.map((item, i) => (
                      <li key={i}><b>{item.category}:</b> {item.reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* ── AVOID FOR ── */}
            {ed?.avoidFor && (
              <div id="avoidfor" style={{ marginBottom: 56 }}>
                <div className="k accent" style={{ marginBottom: 20 }}>SWITCH TO ANOTHER CARD FOR</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {ed.avoidFor.map((item, i) => {
                    const altCard = item.altCard ? CARDS.find(c => c.id === item.altCard) : null;
                    return (
                      <div key={i} style={{ background: "var(--red-dim)", border: "1px solid rgba(255,90,72,.25)", borderRadius: 14, padding: "18px 22px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ fontWeight: 600, fontSize: 14 }}>{item.category}</span>
                          {altCard && (
                            <Link href={`/cards/${altCard.id}`} className="mono" style={{ fontSize: 11, color: "var(--gold)", letterSpacing: ".04em" }}>
                              → {altCard.name}
                            </Link>
                          )}
                        </div>
                        <p style={{ fontSize: 13.5, color: "var(--mut)", lineHeight: 1.6 }}>{item.reason}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── BEST COMBOS ── */}
            {ed?.pairWith && (
              <div id="combos" style={{ marginBottom: 56 }}>
                <div className="k accent" style={{ marginBottom: 20 }}>BEST CARD COMBOS</div>
                <div className="combos">
                  {ed.pairWith.map((combo, i) => {
                    const paired = combo.cardId ? CARDS.find(c => c.id === combo.cardId) : null;
                    return (
                      <div key={i} className="combo">
                        <div className="k" style={{ color: "var(--c-card)", marginBottom: 10 }}>{combo.combo}</div>
                        <div className="mono" style={{ fontSize: 11, color: "var(--dim)", marginBottom: 12 }}>{combo.fee}</div>
                        <p style={{ fontSize: 13.5, color: "var(--mut)", lineHeight: 1.6 }}>{combo.reason}</p>
                        {paired && (
                          <Link href={`/cards/${paired.id}`} style={{ display: "inline-block", marginTop: 12, fontSize: 12, color: "var(--gold)", fontWeight: 500 }}>
                            View {paired.name} →
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div style={{ marginTop: 18, textAlign: "center" }}>
                  <Link href="/gap-finder" className="btn btn-line" style={{ fontSize: 13 }}>
                    Find your perfect card combo →
                  </Link>
                </div>
              </div>
            )}

            {/* ── UPCOMING CHANGES (detailed) ── */}
            {card.upcoming && (
              <div style={{ marginBottom: 56, background: "var(--red-dim)", border: "1px solid rgba(255,90,72,.3)", borderRadius: 17, padding: "24px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div className="k" style={{ color: "var(--red)" }}>UPCOMING CHANGES</div>
                  <span className="mono" style={{ fontSize: 11, color: "var(--red)", background: "rgba(255,90,72,.15)", padding: "4px 10px", borderRadius: 99 }}>{card.upcoming.date}</span>
                </div>
                {card.upcoming.changes.map((change, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: i < card.upcoming.changes.length - 1 ? "1px dashed var(--hair)" : "none" }}>
                    <span style={{ color: "var(--red)", fontWeight: 600 }}>→</span>
                    <span style={{ fontSize: 14, color: "var(--mut)" }}>{change}</span>
                  </div>
                ))}
                {card.upcoming.impact && (
                  <div style={{ marginTop: 16, background: "rgba(255,90,72,.08)", borderRadius: 10, padding: "14px 18px", fontSize: 13.5, color: "var(--mut)", lineHeight: 1.6 }}>
                    <b style={{ color: "var(--red)" }}>Impact:</b> {card.upcoming.impact}
                  </div>
                )}
              </div>
            )}

            {/* ── FAQ ── */}
            {ed?.faq && (
              <div id="faq" style={{ marginBottom: 56 }}>
                <div className="k accent" style={{ marginBottom: 20 }}>FREQUENTLY ASKED</div>
                <div className="faq">
                  {ed.faq.map((item, i) => (
                    <details key={i}>
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* ── FEE MATH RECEIPT ── */}
            <div id="feemath" style={{ marginBottom: 56 }}>
              <div className="k accent" style={{ marginBottom: 20 }}>IS THE FEE WORTH IT?</div>
              <div className="receipt">
                <div className="rc-h">ANNUAL FEE MATH — {card.name.toUpperCase()}</div>
                <div className="rc-r"><span>Annual fee</span> <b>{card.fee === 0 ? "₹0 (FREE)" : `₹${card.fee.toLocaleString()}`}</b></div>
                {card.fee > 0 && <div className="rc-r"><span>GST (18%)</span> <b className="minus">+₹{(feeWithGST - card.fee).toLocaleString()}</b></div>}
                {card.fee > 0 && <div className="rc-r"><span>Total cost</span> <b className="minus">₹{feeWithGST.toLocaleString()}</b></div>}
                <div className="rc-r"><span>Fee waiver</span> <b>{card.feeWaiver || "None"}</b></div>
                <div className="rc-r"><span>Est. annual rewards (₹60K/mo spend)</span> <b style={{ color: "var(--green)" }}>₹{annualReward.toLocaleString()}</b></div>
                <div className="rc-t">
                  <span>Net value</span>
                  <span style={{ color: netValue >= 0 ? "var(--green)" : "var(--red)" }}>
                    {netValue >= 0 ? "+" : ""}₹{netValue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* ── AFFILIATE SLOT ── */}
            <div className="aff">
              <span className="aff-tag">PARTNER LINK</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Apply for {card.name}</div>
                  <div className="aff-disc">WE MAY EARN A COMMISSION · AT NO COST TO YOU</div>
                </div>
                <button className="btn btn-solid" style={{ fontSize: 13, padding: "11px 24px", whiteSpace: "nowrap" }}>
                  Check eligibility →
                </button>
              </div>
            </div>

            {/* ── AUTHOR BOX ── */}
            <div className="author-box" style={{ marginTop: 40 }}>
              <div className="ava">A</div>
              <div>
                <h5>Ashutosh</h5>
                <p>Founder of Assure Fintech. Obsessed with the gap between advertised and actual financial returns. Every number on this page is manually verified against the card&apos;s MITC.</p>
              </div>
            </div>

            {/* ── REPORT + COMPARE ── */}
            <div className="endrow" style={{ marginTop: 36 }}>
              <Link href="/compare" className="endact" style={{ textDecoration: "none" }}>
                <div>
                  <div className="k" style={{ marginBottom: 6 }}>COMPARE</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>Stack this card against others</div>
                </div>
                <span style={{ fontSize: 20, color: "var(--gold)" }}>→</span>
              </Link>
              <a href={`https://docs.google.com/forms/d/e/1FAIpQLSdxSR9PYvavFrELzWEunMv5Y5MmWeKxwij0BnzFDuzO4_a2Ew/viewform?usp=pp_url&entry.278806340=${encodeURIComponent(card.name)}`}
                target="_blank" rel="noopener noreferrer" className="endact" style={{ textDecoration: "none" }}>
                <div>
                  <div className="k" style={{ marginBottom: 6 }}>REPORT AN UPDATE</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>See something wrong? Tell us</div>
                </div>
                <span style={{ fontSize: 20, color: "var(--gold)" }}>→</span>
              </a>
            </div>

          </div>

          {/* ──── SIDEBAR ──── */}
          <div className="sidebar">
            {/* Card summary box */}
            <div className="side-box side-sum">
              <div className="k" style={{ marginBottom: 16 }}>CARD SNAPSHOT</div>
              <div className="row"><span>Bank</span> <b>{card.bank}</b></div>
              <div className="row"><span>Type</span> <b>{card.type}</b></div>
              <div className="row"><span>Fee</span> <b>{card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}`}</b></div>
              <div className="row"><span>Best rate</span> <b className="g">{maxRate}%</b></div>
              <div className="row"><span>Network</span> <b>{card.network}</b></div>
              <div className="row"><span>Lounge</span> <b>{card.lounge || "None"}</b></div>
              <div className="row"><span>Status</span> <b className={card.verified ? "g" : "r"}>{card.verified ? "Verified" : "Unverified"}</b></div>
            </div>

            {/* TOC */}
            <div className="side-box">
              <div className="k" style={{ marginBottom: 16 }}>ON THIS PAGE</div>
              <div className="toc">
                {toc.map(t => (
                  <a key={t.id} href={`#${t.id}`}>{t.label}</a>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="side-box">
              <div className="k" style={{ marginBottom: 16 }}>KEY BENEFITS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {card.highlights.map((h, i) => (
                  <div key={i} style={{ fontSize: 13, color: "var(--mut)", paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>›</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══ MOBILE APPLY BAR ═══ */}
      <div className="mob-apply">
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{card.name}</div>
          <div className="mono" style={{ fontSize: 11, color: "var(--dim)" }}>
            {card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}/yr`} · {maxRate}% best
          </div>
        </div>
        <button className="btn btn-solid" style={{ fontSize: 13, padding: "10px 20px" }}>Apply →</button>
      </div>
    </>
  );
}
