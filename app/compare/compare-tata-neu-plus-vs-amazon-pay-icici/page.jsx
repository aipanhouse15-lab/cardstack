import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tata Neu Plus HDFC vs Amazon Pay ICICI — pick your ecosystem in 2026",
  description: "Tata Neu Plus HDFC vs Amazon Pay ICICI — pick your ecosystem in 2026",
  alternates: { canonical: "/compare/compare-tata-neu-plus-vs-amazon-pay-icici" },
  openGraph: {
    title: "Tata Neu Plus HDFC vs Amazon Pay ICICI — pick your ecosystem in 2026",
    description: "Tata Neu Plus HDFC vs Amazon Pay ICICI — pick your ecosystem in 2026",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// Tier 3 Batch 3 · File 5/15 · Super-app vs e-com
// URL: /compare/tata-neu-plus-vs-amazon-pay-icici

const COLOR = "#7C3AED";
const UPDATED = "June 6, 2026";

const SvgFunnel = () => (
  <svg viewBox="0 0 520 200" role="img" aria-label="Earn rate funnel by purchase context" style={{ width: "100%" }}>
    <text x="10" y="18" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="var(--text-muted)">EARN RATE FUNNEL — TATA ECOSYSTEM VS AMAZON</text>
    {[
      { ctx: "Tata grocery (BigBasket / Star)", neu: 5.0, icici: 1.0 },
      { ctx: "Tata services (Air Vistara / Croma)", neu: 5.0, icici: 1.0 },
      { ctx: "Amazon Prime", neu: 1.5, icici: 5.0 },
      { ctx: "Other online merchants", neu: 1.5, icici: 1.0 }
    ].map((r, i) => (
      <g key={i} transform={`translate(0, ${36 + i * 36})`}>
        <text x="10" y="14" fontFamily="system-ui" fontSize="10" fill="var(--text)">{r.ctx}</text>
        <rect x="240" y="2" width={r.neu * 30} height="11" fill="#9ca3af" />
        <text x={245 + r.neu * 30} y="11" fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{r.neu.toFixed(1)}%</text>
        <rect x="240" y="16" width={r.icici * 30} height="11" fill={COLOR} />
        <text x={245 + r.icici * 30} y="25" fontFamily="system-ui" fontSize="10" fontWeight="700" fill={COLOR}>{r.icici.toFixed(1)}%</text>
      </g>
    ))}
  </svg>
);

export default function CompareTataNeuVsAmazonIcici() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How does Tata Neu Plus reward across the Tata ecosystem?", acceptedAnswer: { "@type": "Answer", text: "Tata Neu Plus pays 5% NeuCoins on spend within the Tata Neu app — covering BigBasket, 1mg, Croma, Tata CLiQ, IHCL hotels, Vistara flights, and Westside. Spend outside the Tata Neu app earns 1.5% NeuCoins. Each NeuCoin is worth ₹1 redeemed within the Tata ecosystem, so the 5% headline is a real 5% as long as you spend the rewards back into Tata properties." } },
      { "@type": "Question", name: "Is the joining fee a real cost?", acceptedAnswer: { "@type": "Answer", text: "Tata Neu Plus charges ₹499 + GST as joining and annual fee, waived from year two on ₹1L spend. Welcome benefit is 1,499 NeuCoins on first transaction. Net first-year cost is roughly ₹0 if you actually use the welcome bonus on a Tata property. Amazon Pay ICICI remains lifetime-free with no waiver gymnastics." } },
      { "@type": "Question", name: "Which has wider acceptance for non-platform spend?", acceptedAnswer: { "@type": "Answer", text: "Both run on Visa networks and are universally accepted. The acceptance question is really about ecosystem stickiness — if you redeem NeuCoins back at Tata, every spend earns at the 5%/1.5% schedule; if you ignore Tata redemption and try statement credit, the per-coin value drops below ₹1 and the headline rate misleads. Amazon ICICI returns Amazon Pay balance which is similarly bound, but Amazon's category breadth is larger than Tata's." } },
      { "@type": "Question", name: "Which has better fuel surcharge waiver?", acceptedAnswer: { "@type": "Answer", text: "Tata Neu Plus offers 1% fuel surcharge waiver capped at ₹500 per statement cycle on transactions of ₹500-₹4,000. Amazon Pay ICICI offers 1% fuel surcharge waiver capped at ₹400 per year. For a regular fuel buyer the Tata Neu Plus delivers materially more on this otherwise-overlooked perk." } }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://assurefintech.com/compare/" },
      { "@type": "ListItem", position: 3, name: "Tata Neu Plus vs Amazon Pay ICICI", item: "https://assurefintech.com/compare/tata-neu-plus-vs-amazon-pay-icici" }
    ]
  };

  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Tata Neu Plus vs Amazon Pay ICICI — pick your ecosystem in 2026",
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
        <Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/compare" style={{ color: "inherit" }}>Compare</Link> / Tata Neu vs Amazon ICICI
      </nav>

      <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: COLOR, marginBottom: 12 }}>CREDIT CARDS · COMPARE · ECOSYSTEM</div>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 800, margin: "0 0 16px" }}>
        Tata Neu Plus HDFC vs Amazon Pay ICICI — pick your ecosystem in 2026
      </h1>
      <p style={{ fontSize: 17, color: "var(--text-muted)", margin: "0 0 22px" }}>
        Both cards reward 5% — but the 5% only triggers inside their respective walled gardens. Your existing buying habits decide the winner before you ever apply, not the marketing.
      </p>

      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>Last updated {UPDATED}</span><span>·</span><span>By Ash K</span>
      </div>

      <section style={{ background: COLOR, color: "#fff", borderRadius: 16, padding: "22px 24px", marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, opacity: 0.85 }}>VERDICT</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "6px 0 10px" }}>Tata Neu Plus wins for grocery + flights households</h2>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.95 }}>
          BigBasket monthly groceries plus occasional Vistara/IHCL travel adds up fast at 5%. Amazon Pay ICICI wins if you are an Amazon Prime household with ₹15-20k+/mo on Amazon and minimal Tata-property spend. The decision is mostly determined by the grocery-app you already use.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Spec sheet, side by side</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--bg-soft)" }}>
              <tr><Th>Spec</Th><Th>Tata Neu Plus HDFC</Th><Th>Amazon Pay ICICI</Th></tr>
            </thead>
            <tbody>
              <tr><Td>Joining + annual fee</Td><Td>₹499 + GST (₹1L waiver)</Td><Td hi>Lifetime free</Td></tr>
              <tr><Td>Welcome bonus</Td><Td hi>1,499 NeuCoins</Td><Td>₹500–1,500 Amazon Pay credit</Td></tr>
              <tr><Td>In-ecosystem rate</Td><Td hi>5% NeuCoins</Td><Td>5% (Prime) / 3% (non-Prime) Amazon</Td></tr>
              <tr><Td>Out-of-ecosystem rate</Td><Td hi>1.5% NeuCoins</Td><Td>1%</Td></tr>
              <tr><Td>Reward redemption</Td><Td>NeuCoins at 1:1 in Tata Neu</Td><Td hi>Amazon Pay balance, broad category use</Td></tr>
              <tr><Td>Fuel surcharge waiver</Td><Td hi>1% (cap ₹500/cycle)</Td><Td>1% (cap ₹400/yr)</Td></tr>
              <tr><Td>Forex markup</Td><Td hi>2.0%</Td><Td>3.5%</Td></tr>
              <tr><Td>Min income</Td><Td>₹3L p.a.</Td><Td hi>₹2.4L p.a.</Td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>Note Tata Neu Plus's 2.0% forex markup is unusually low for a sub-₹500 card — useful for occasional international online purchases.</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>Earn rate by purchase context</h2>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 20, background: "var(--bg-soft)" }}>
          <SvgFunnel />
        </div>
      </section>

      <section style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: `2px solid ${COLOR}`, borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: COLOR }}>PICK TATA NEU PLUS HDFC IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>You order weekly groceries on BigBasket or Tata Neu.</li>
            <li style={{ marginBottom: 6 }}>You fly Vistara or stay at IHCL/Taj properties twice a year.</li>
            <li style={{ marginBottom: 6 }}>You shop Croma or Westside for electronics and apparel.</li>
            <li>You need a low-forex sub-₹500 card for occasional overseas spend.</li>
          </ul>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "18px 18px", background: "var(--bg-soft)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: "var(--text-muted)" }}>PICK AMAZON PAY ICICI IF</div>
          <ul style={{ fontSize: 14, marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
            <li style={{ marginBottom: 6 }}>Amazon is your default e-commerce destination, especially with Prime.</li>
            <li style={{ marginBottom: 6 }}>You want a permanently zero-fee secondary card.</li>
            <li style={{ marginBottom: 6 }}>You are early in your credit history — easier ICICI eligibility.</li>
            <li>You do not buy across Tata's specific brands.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>The grocery delta is what matters</h2>
        <p style={{ fontSize: 16, margin: "0 0 12px" }}>
          A household running ₹15k/mo on BigBasket earns ₹9,000/yr in NeuCoins on Tata Neu Plus versus ₹1,800 on Amazon Pay ICICI's 1% out-of-ecosystem rate. Stack that with a Vistara annual flight at ₹15k earning another ₹750 in NeuCoins, and the ecosystem spend justifies the small annual fee within the first 6-8 weeks of card use.
        </p>
        <p style={{ fontSize: 16, margin: 0 }}>
          Model your own profile in the <Link href="/tools/cashback-calculator" style={{ color: COLOR }}>cashback calculator</Link>; for the full ecosystem-card landscape see the <Link href="/learn/credit-cards" style={{ color: COLOR }}>credit-cards hub</Link>.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <footer style={{ fontSize: 12, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 18 }}>
        Editorial disclaimer — fees, NeuCoins schedule, and ecosystem partner list verified from issuer MITC on {UPDATED}. Co-brand schedules change; reconfirm before applying. Not financial advice.
      </footer>
    </main>
  );
}
