import { CARDS, CATEGORIES, isSourceReviewed, isEstimateReady } from "@/data/cards";
import { reviewedEditorial } from "@/data/reviewed-editorial";
import { notFound } from "next/navigation";
import Link from "next/link";
import PendingCardRecord from "@/components/PendingCardRecord";

/* ── Static generation ── */
export async function generateStaticParams() {
  return CARDS.map(card => ({ id: card.id }));
}

/* ── Metadata ── */
export async function generateMetadata({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) return { title: "Card Not Found" };
  if (!isSourceReviewed(card)) return {
    title: `${card.name} — Product Record`,
    description: `Historical catalogue reference for ${card.name}; current variant and product terms are being reconciled.`,
    alternates: { canonical: `/cards/${card.id}` },
    robots: { index: false, follow: true },
  };
  const ed = reviewedEditorial(card) || card.editorial || null;
  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const maxRate = sorted[0]?.[1] || 0;
  const bestCat = sorted[0]?.[0] || "";
  const pageTitle = `${card.name} Review — Earn Rules, Redemption, Fees & Caps (2026)`;
  const pageDesc = `Compare ${card.name} earn rules, redemption choices, renewal costs and exclusions. ${isEstimateReady(card) ? "Includes illustrative reward values and assumptions." : "Cash-value calculations are not available for this record."}`;
  return {
    title: pageTitle,
    description: pageDesc,
    alternates: { canonical: `/cards/${params.id}` },
    openGraph: { title: pageTitle, description: pageDesc, type: "article", siteName: "Assure Fintech" },
    twitter: { card: "summary", title: pageTitle, description: pageDesc },
  };
}

/* ── TOC sections ── */
function tocSections(card) {
  const ed = reviewedEditorial(card) || card.editorial || null;
  const items = [];
  if (ed?.verdict) items.push({ id: "verdict", label: "Verdict" });
  items.push({ id: "rewards", label: "Reward rates" });
  if (ed?.capMath) items.push({ id: "caps", label: "Cap terms" });
  if (card.partnerRates?.length) items.push({ id: "partners", label: "Partner rates" });
  items.push({ id: "proscons", label: "Pros & cons" });
  if (ed?.bestFor) items.push({ id: "bestfor", label: "Best used for" });
  if (ed?.avoidFor) items.push({ id: "avoidfor", label: "Switch for" });
  if (ed?.pairWith) items.push({ id: "combos", label: "Best combos" });
  if (ed?.faq) items.push({ id: "faq", label: "FAQ" });
  items.push({ id: "feemath", label: "Fees" });
  return items;
}

/* ════════════════════════════════════════════════════════════
   CARD PAGE — THE GAP DESIGN
   ════════════════════════════════════════════════════════════ */
export default function CardPage({ params }) {
  const card = CARDS.find(c => c.id === params.id);
  if (!card) notFound();
  if (!isSourceReviewed(card)) return <PendingCardRecord card={card} />;
  const sourceReviewed = isSourceReviewed(card);
  const estimateReady = isEstimateReady(card);

  const sorted = Object.entries(card.rewards).filter(([k]) => k !== "default").sort((a, b) => b[1] - a[1]);
  const maxRate = sorted[0]?.[1] || 0;
  const bestCategory = sorted[0]?.[0] || "";
  const ed = reviewedEditorial(card) || card.editorial || null;
  const toc = tocSections(card);

  // Issuer caps use different categories and periods; a universal curve would
  // overstate rewards for cards whose accelerated rate needs a specific route.
  const feeWithGST = Math.round(card.fee * 1.18);

  /* ── JSON-LD ── */
  const cardSchema = {
    "@context": "https://schema.org", "@type": "FinancialProduct", name: card.name,
    description: `${card.name} by ${card.bank}. ${card.pointsInfo || card.highlights.join(". ")}.`,
    brand: { "@type": "Organization", name: card.bank }, category: "Credit Card",
    offers: { "@type": "Offer", price: card.firstYearAnnualFee === 0 ? card.joiningFee : card.fee, priceCurrency: "INR", description: `${card.feeScheduleNote || `Annual fee: ₹${card.fee}; joining fee ${card.joiningFee === undefined ? "subject to issuer offer" : `₹${card.joiningFee} ${card.joiningFeeIncludesTax ? "including GST" : "before tax"}`}.`} ${card.feeWaiver}` },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Card Type", value: card.type },
      { "@type": "PropertyValue", name: "Card Network", value: card.network },
      { "@type": "PropertyValue", name: "Lounge Access", value: card.lounge },
      ...(estimateReady ? sorted.map(([catId, rate]) => ({ "@type": "PropertyValue", name: `${catId} Illustrative Reward Value`, value: `${rate}%` })) : []),
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

      {card.availabilityStatus && (
        <div className="wrap" role="note">
          <div className="alert">
            <span style={{ fontSize: 18 }}>ℹ️</span>
            <div><b>Availability notice:</b>{" "}<span style={{ color: "var(--mut)" }}>{card.availabilityStatus}</span></div>
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
              {sourceReviewed
                ? <span className="cbadge cb-ver">✓ SOURCE-CHECKED · {card.reviewedAt.toUpperCase()}</span>
                : <span className="cbadge" style={{ color: "var(--gold)", border: "1px solid rgba(212,168,83,.4)" }}>SOURCE REVIEW PENDING</span>
              }
            </div>
            <h1 className="disp" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.08, letterSpacing: "-.02em", marginBottom: 14 }}>
              {card.name}
              {!/credit card/i.test(card.name) && <span style={{ color: "var(--dim)" }}> Credit Card</span>}
            </h1>
            <p style={{ color: "var(--mut)", fontSize: 16, lineHeight: 1.6, maxWidth: 480, marginBottom: 20 }}>
              {ed?.verdict?.headline || `${card.bank} ${card.type.toLowerCase()} card: compare earn rules, redemption choices and renewal costs.`}
            </p>
            <p className="mono" style={{ fontSize: 12, color: "var(--dim)", letterSpacing: ".06em" }}>
              By <span style={{ color: "var(--mut)" }}>Ash</span> · {sourceReviewed ? `Issuer source linked ${card.reviewedAt}` : "Issuer-source review pending"}
            </p>
          </div>

          {/* Right column — card visual */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="bigcard" style={{ background: `linear-gradient(140deg, ${card.color}cc 0%, ${card.color} 50%, ${card.color}99 115%)` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="mono" style={{ fontSize: 11, opacity: 0.7, letterSpacing: ".12em" }}>{card.bank}</span>
                <span className="mono" style={{ fontSize: 10, opacity: 0.6, letterSpacing: ".12em" }}>{card.network}</span>
              </div>
              <div style={{ position: "absolute", bottom: 26, left: 26 }}>
                <div className="disp" style={{ fontSize: 18, fontWeight: 500, opacity: 0.9 }}>{card.name}</div>
                <div className="mono" style={{ fontSize: 10, opacity: 0.5, marginTop: 4 }}>
                  {card.fee === 0 ? "NO ANNUAL FEE" : `₹${card.fee.toLocaleString()}/YR`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {card.sourceUrl && (
        <div className="wrap" style={{ marginTop: 20, marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", padding: "20px 24px", border: "1px solid rgba(212,168,83,.38)", borderRadius: 16, background: "rgba(212,168,83,.06)" }}>
            <div>
              <div className="k accent" style={{ marginBottom: 6 }}>ISSUER INFORMATION</div>
              <p style={{ color: "var(--mut)", margin: 0, fontSize: 14 }}>Check the issuer’s current card terms, availability and eligibility criteria.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10, flexWrap: "wrap" }}>
              <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "13px 20px", background: "var(--green)", color: "#07120c", fontWeight: 700, textDecoration: "none" }}>
                Card information <span aria-hidden="true">↗</span>
              </a>
              {card.rewardSourceUrl && <a href={card.rewardSourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 999, padding: "11px 15px", border: "1px solid var(--border)", color: "var(--text)", fontSize: 13, textDecoration: "none" }}>Reward terms ↗</a>}
              {card.feeSourceUrl && <a href={card.feeSourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 999, padding: "11px 15px", border: "1px solid var(--border)", color: "var(--text)", fontSize: 13, textDecoration: "none" }}>Fee schedule ↗</a>}
              {card.loungeSourceUrl && <a href={card.loungeSourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", borderRadius: 999, padding: "11px 15px", color: "var(--text)", fontSize: 13, textDecoration: "none" }}>Lounge programme ↗</a>}
            </div>
          </div>
        </div>
      )}

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
              <div className="v" style={{ color: "var(--green)" }}>{estimateReady ? `${maxRate}%` : "See earn rules"}</div>
              <div className="mono" style={{ fontSize: 10, color: "var(--dim)", marginTop: 2 }}>{estimateReady ? bestCategory : "Merchant and redemption conditions apply"}</div>
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
                    <circle cx="74" cy="74" r="58" fill="none" stroke="var(--green)" strokeWidth="5" />
                  </svg>
                  <span className="sn" style={{ color: "var(--green)", fontSize: 20 }}>Value<br />check</span>
                </div>
                <div>
                  <div className="k accent" style={{ marginBottom: 12 }}>VALUE FOR YOUR SPENDING</div>
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
            {card.availabilityNote && <aside style={{ marginBottom: 28, padding: 20, border: "1px solid var(--gold)", borderRadius: 13 }}><h2 style={{ fontSize: 18, marginBottom: 8 }}>Availability and migration</h2><p>{card.availabilityNote}</p><a href={card.availabilitySourceUrl || card.sourceUrl} target="_blank" rel="noopener noreferrer">Issuer availability source</a></aside>}
            <div id="rewards" style={{ marginBottom: 56 }}>
              <div className="k accent" style={{ marginBottom: 20 }}>{estimateReady ? "ILLUSTRATIVE REWARD VALUE BY CATEGORY" : "EARN AND REDEMPTION RULES"}</div>
              {estimateReady && card.rewardAssumptions?.default && <p style={{marginBottom:16,color:'var(--mut)'}}>{card.rewardAssumptions.default}</p>}
              {!estimateReady && card.estimateUnavailableReason && <p style={{ marginBottom: 16, color: "var(--mut)" }}>Why no automated estimate: {card.estimateUnavailableReason}</p>}
              {estimateReady && <div className="rgrid">
                {sorted.map(([catId, rate]) => {
                  const cat = CATEGORIES.find(c => c.id === catId);
                  return (
                    <div key={catId} className="rcell">
                      <span style={{ fontSize: 22 }}>{cat?.icon || "📋"}</span>
                      <div className="rp" style={rate === maxRate ? { color: "var(--green)" } : rate === 0 ? { color: "var(--red)" } : undefined}>
                        {rate}%
                      </div>
                      <div className="rc">{cat?.label || catId}</div>
                      {card.rewardAssumptions?.[catId] && <p style={{ fontSize: 12, color: "var(--mut)", lineHeight: 1.5, marginTop: 8 }}>{card.rewardAssumptions[catId]}</p>}
                    </div>
                  );
                })}
              </div>}
              {card.calculationSourceUrl && <p style={{ marginTop: 16, fontSize: 13 }}><a href={card.calculationSourceUrl} target="_blank" rel="noopener noreferrer">Issuer earning and redemption terms</a>. Category values assume eligible transactions; caps and redemption charges can reduce the final return.</p>}

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

            {/* ── CAP TERMS ── */}
            {ed?.capMath && (
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

            {/* ── FEES ── */}
            <div id="feemath" style={{ marginBottom: 56 }}>
              <div className="k accent" style={{ marginBottom: 20 }}>FEES AND WAIVER</div>
              <div className="receipt">
                <div className="rc-h">PUBLISHED FEE — {card.name.toUpperCase()}</div>
                <div className="rc-r"><span>{card.firstYearAnnualFee === 0 ? 'Renewal fee (year two onwards)' : 'Annual fee'}</span> <b>{card.fee === 0 ? "₹0" : `₹${card.fee.toLocaleString()}`}</b></div>
                {card.joiningFee !== undefined && <div className="rc-r"><span>Joining fee ({card.joiningFeeIncludesTax ? 'including GST' : 'before GST'})</span><b>₹{card.joiningFee.toLocaleString()}</b></div>}
                {card.firstYearAnnualFee !== undefined && <div className="rc-r"><span>Additional annual fee in year one</span><b>₹{card.firstYearAnnualFee.toLocaleString()}</b></div>}
                {card.firstYearAnnualFee === 0 && <div className="rc-r"><span>Year-one membership cost including GST</span><b>₹{Math.round(card.joiningFee * (card.joiningFeeIncludesTax ? 1 : 1.18)).toLocaleString('en-IN')}</b></div>}
                {card.fee > 0 && <div className="rc-r"><span>GST (18%)</span> <b className="minus">+₹{(feeWithGST - card.fee).toLocaleString()}</b></div>}
                {card.fee > 0 && <div className="rc-r"><span>Annual/renewal fee including GST</span> <b className="minus">₹{feeWithGST.toLocaleString()}</b></div>}
                {card.feeScheduleNote && <p style={{padding:'16px 0',lineHeight:1.7}}>{card.feeScheduleNote} <a href={card.feeSourceUrl} target="_blank" rel="noopener noreferrer">Issuer fee schedule</a></p>}
                {card.transactionFeeNote && <p style={{padding:'16px 0',lineHeight:1.7}}>{card.transactionFeeNote} <a href={card.transactionFeeSourceUrl} target="_blank" rel="noopener noreferrer">Issuer transaction charges</a></p>}
                <div className="rc-r"><span>Fee waiver</span> <b>{card.feeWaiver || "None"}</b></div>
                <div className="rc-r"><span>Reward value</span> <b>Depends on eligible spend, caps and redemption</b></div>
              </div>
            </div>

            {/* ── AFFILIATE SLOT ── */}
            <div className="aff">
              <span className="aff-tag">CARD INFORMATION</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Find current details for {card.name}</div>
                  <div className="aff-disc">OPENS THE CARD INFORMATION PAGE · APPROVAL AND AVAILABILITY ARE SET BY THE PROVIDER</div>
                </div>
                {card.sourceUrl ? (
                  <a
                    className="btn btn-solid"
                    href={card.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open card information for ${card.name}`}
                    style={{ fontSize: 13, padding: "11px 24px", whiteSpace: "nowrap", textDecoration: "none" }}
                  >
                    Open card page →
                  </a>
                ) : (
                  <span className="aff-disc" style={{ textAlign: "right" }}>Card link unavailable</span>
                )}
              </div>
            </div>

            {/* ── AUTHOR BOX ── */}
            <div className="author-box" style={{ marginTop: 40 }}>
              <div className="ava">A</div>
              <div>
                <h5>Ash</h5>
                <p>Founder of Assure Fintech. I focus on the gap between advertised rewards and what cardholders can actually earn. This review explains the card’s fees, reward rules, caps and exclusions so you can compare its value against your own spending.</p>
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
              <div className="row"><span>Modelled value</span> <b className="g">{estimateReady ? `${maxRate}%` : "See earn rules"}</b></div>
              <div className="row"><span>Network</span> <b>{card.network}</b></div>
              <div className="row"><span>Lounge</span> <b>{card.lounge || "None"}</b></div>
              <div className="row"><span>Status</span> <b className={sourceReviewed ? "g" : "r"}>{sourceReviewed ? `Reviewed ${card.reviewedAt}` : "Review pending"}</b></div>
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
            {card.fee === 0 ? "FREE" : `₹${card.fee.toLocaleString()}/yr`} · {estimateReady ? `${maxRate}% modelled value` : "Points / benefits"}
          </div>
        </div>
        {card.sourceUrl && (
          <a className="btn btn-solid" href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, padding: "10px 20px", textDecoration: "none" }}>
            Card page →
          </a>
        )}
      </div>
    </>
  );
}
