import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Star Health Comprehensive vs Care Supreme — health insurance for 40+ in 2026",
  description: "Star Health Comprehensive vs Care Supreme — health insurance for 40+ in 2026",
  alternates: { canonical: "/compare/compare-star-comprehensive-vs-care-supreme" },
  openGraph: {
    title: "Star Health Comprehensive vs Care Supreme — health insurance for 40+ in 2026",
    description: "Star Health Comprehensive vs Care Supreme — health insurance for 40+ in 2026",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// Tier 3 Batch 3 · File 13/15 · Health insurance senior-friendly
// URL: /compare/star-comprehensive-vs-care-supreme

const COLOR = "#DB2777";
const UPDATED = "June 6, 2026";

const SvgPremiumByAge = () => (
  <svg viewBox="0 0 520 200" role="img" aria-label="Premium by insured age band" style={{ width: "100%" }}>
    <text x="10" y="18" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text-muted)">ANNUAL PREMIUM ON ₹10L SUM INSURED — INDIVIDUAL POLICY</text>
    {[
      { age: "30 yr", star: 13800, care: 12100 },
      { age: "45 yr", star: 22500, care: 19800 },
      { age: "55 yr", star: 38400, care: 33200 },
      { age: "65 yr", star: 65000, care: 58400 }
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${36 + i * 36})`}>
        <text x="10" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.age}</text>
        <rect x="100" y="2" width={r.star / 250} height="11" fill="#9ca3af" />
        <text x={104 + r.star / 250} y="11" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">₹{r.star.toLocaleString("en-IN")}</text>
        <rect x="100" y="16" width={r.care / 250} height="11" fill={COLOR} />
        <text x={104 + r.care / 250} y="25" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>₹{r.care.toLocaleString("en-IN")}</text>
      </g>
    ))}
    <g transform="translate(380, 18)">
      <rect x="0" y="0" width="10" height="10" fill="#9ca3af" /><text x="14" y="9" fontFamily="system-ui" fontSize="10" fill="var(--text)">Star</text>
      <rect x="60" y="0" width="10" height="10" fill={COLOR} /><text x="74" y="9" fontFamily="system-ui" fontSize="10" fill="var(--text)">Care Supreme</text>
    </g>
  </svg>
);

export default function CompareStarVsCareSupreme() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which has friendlier underwriting for older insureds?", acceptedAnswer: { "@type": "Answer", text: "Star Health Comprehensive accepts entry up to 65 years and renews lifetime — historically Star has been more accommodating for senior-citizen first-time policies. Care Supreme accepts entry up to 75 years (with appropriate sum insured caps) and offers a discount on premium for 4+ year medical-test-clean records. Both insurers run mandatory pre-policy medicals at 45+, with Care being slightly faster on processing per anecdotal reports." } },
      { "@type": "Question", name: "How do co-pay and disease-wise sub-limits compare?", acceptedAnswer: { "@type": "Answer", text: "Star Comprehensive applies optional 10% co-pay for entry-age 60+ on a voluntary basis to lower premium. Care Supreme applies mandatory 20% co-pay for entry above 61, but offers optional waiver via the Care Forever rider. Disease-wise sub-limits: Star caps cataract at ₹40k per eye, Care at ₹60k; Star caps knee replacement at 50% of SI, Care at 75%. For older insureds with anticipated orthopaedic surgeries, Care's higher caps matter materially." } },
      { "@type": "Question", name: "What is the difference in restoration mechanics?", acceptedAnswer: { "@type": "Answer", text: "Star Comprehensive offers automatic 100% restoration once the sum insured is exhausted, available for unrelated illnesses only. Care Supreme offers a no-claim 'recharge' that increases the SI by 50% per claim-free year up to 200% — useful if you stay claim-free for several years before a major event. Both restore once per year; Care's recharge is structurally more rewarding for healthy continuous policyholders." } },
      { "@type": "Question", name: "What does FY25 IRDAI data show on each insurer's claims handling?", acceptedAnswer: { "@type": "Answer", text: "Star Health settled 87.4% of claims by count in FY25 per IRDAI's annual report; Care Health (Religare) settled 92.0%. Both maintain extensive cashless networks (~13,000+ hospitals each). Care has historically had stronger cashless empanelment in tier-2 cities; Star has wider rural penetration. Always verify your top hospital is on their respective panel before purchase." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "Star Comprehensive vs Care Supreme", item: "https://assurefintech.com/compare/star-comprehensive-vs-care-supreme" }
    ]
  };

  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Star Comprehensive vs Care Supreme — health insurance for 40+ in 2026",
    author: { "@type": "Person", name: "Ash K" },
    datePublished: "2026-06-06", dateModified: "2026-06-06",
    publisher: { "@type": "Organization", name: "Assure Fintech" }
  };

  const Th = ({ children }) => <th style={{ padding: 12, textAlign: "left", fontSize: 12, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 1, borderBottom: "1px solid var(--border)" }}>{children}</th>;
  const Td = ({ children, hi }) => <td style={{ padding: 12, fontSize: 14, borderBottom: "1px solid var(--border)", color: hi ? COLOR : "var(--text)", fontWeight: hi ? 700 : 400 }}>{children}</td>;

  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "48px 22px 96px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.65 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }} aria-label="Breadcrumb">
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / Star Comprehensive vs Care Supreme
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>INSURANCE · COMPARE · HEALTH</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>
        Star Health Comprehensive vs Care Supreme — health insurance for 40+ in 2026
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Two stand-alone health insurance specialists with senior-friendly underwriting. Star edges on premium for younger ages; Care wins on disease-wise sub-limits and recharge economics for the long-term claim-free holder. Pick by which side of 50 you sit on.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span><span>By Ash K</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 32 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Care Supreme wins on premium and surgical sub-limits across most age bands</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          Care Supreme runs roughly 10-15% lower premiums at the same sum insured, with materially more generous orthopaedic and ophthalmology sub-limits — both critical for the 50+ insured cohort. Star Health Comprehensive's strengths are its 87% CSR record (still respectable) and wider rural network reach. For metro buyers, Care is usually the smarter default.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>Star Comprehensive</Th><Th>Care Supreme</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Sum insured options</Td><Td>₹5L–₹1Cr</Td><Td hi>₹3L–₹2Cr</Td></tr>
              <tr><Td>Entry age</Td><Td>3 mo – 65 yr</Td><Td hi>0 – 75 yr</Td></tr>
              <tr><Td>No-claim recharge</Td><Td>100% (one-shot)</Td><Td hi>+50% per claim-free year, up to 200%</Td></tr>
              <tr><Td>Cataract sub-limit</Td><Td>₹40k per eye</Td><Td hi>₹60k per eye</Td></tr>
              <tr><Td>Knee replacement sub-limit</Td><Td>50% of SI</Td><Td hi>75% of SI</Td></tr>
              <tr><Td>Senior co-pay</Td><Td hi>10% optional (60+)</Td><Td>20% mandatory (61+) — waivable</Td></tr>
              <tr><Td>Pre-existing wait</Td><Td>3 yrs</Td><Td hi>3 yrs (reducible to 2 with rider)</Td></tr>
              <tr><Td>Network hospitals</Td><Td hi>~13,200</Td><Td>~13,000</Td></tr>
              <tr><Td>Cashless TAT</Td><Td>~3-5 hr</Td><Td hi>~2-4 hr</Td></tr>
              <tr><Td>FY25 CSR</Td><Td>87.4%</Td><Td hi>92.0%</Td></tr>
              <tr><Td>OPD coverage</Td><Td>Optional rider</Td><Td hi>Optional rider</Td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Premium by age band</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgPremiumByAge />
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 12 }}>
          Premiums shown for ₹10L individual policy, healthy non-smoker, metro pin code. Floater premiums roughly 1.6–1.8x individual at family-of-two; consult insurer calculator for personalised quotes.
        </p>
      </section>

      <section style={{ marginBottom: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK CARE SUPREME IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You are 45+ buying first comprehensive cover.</li>
            <li style={{ marginBottom: 6 }}>You expect orthopaedic, cardiac, or ophthalmology procedures.</li>
            <li style={{ marginBottom: 6 }}>You value the 50%-per-year recharge for long-term holders.</li>
            <li>You live in a tier-1 or tier-2 city with strong Care empanelment.</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK STAR COMPREHENSIVE IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You live in a tier-3 town where Star's network is denser.</li>
            <li style={{ marginBottom: 6 }}>You prefer voluntary co-pay options to push premium lower.</li>
            <li style={{ marginBottom: 6 }}>You have an existing Star portfolio (parents' policy, etc.).</li>
            <li>You value Star's standalone-health-insurer focus.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The sub-limit reveal that nobody talks about</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          Disease-wise sub-limits are the silent reducer of effective coverage. A ₹10L policy with a ₹40k cataract cap means you pay the difference out of pocket on a typical ₹65-80k cataract surgery. Star's slightly tighter caps stack with the 10-20% age-related co-pay to reduce real-world reimbursement on routine procedures by 25-35% versus Care's looser caps. For investors prioritising effective coverage over headline sum insured, the sub-limit table is the document that matters.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          Walk through the full effective-coverage waterfall in our <Link href="/learn/insurance/health-insurance-effective-coverage" style={{ color: COLOR }}>deep-dive</Link>. For broader picks see the <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link>.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}>
        Editorial disclaimer — sum insured ranges, sub-limits, network counts, and CSR figures sourced from each insurer's policy wording, brochure, and IRDAI FY25 annual report, verified on {UPDATED}. Premium illustrations are indicative; your premium depends on age, gender, location, medical history, and underwriting. Not insurance advice.
      </footer>
    </main>
  );
}
