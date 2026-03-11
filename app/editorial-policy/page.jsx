import Link from "next/link";

export const metadata = {
  title: "Editorial Policy — How We Review Cards | CardStack",
  description: "Our methodology for calculating effective cashback rates, verifying card data, handling caps, and ranking credit cards. Full transparency.",
};

export default function EditorialPolicyPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--blue-bg)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}>
        📋 Editorial Policy
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
        How We Review Cards
      </h1>

      <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          Every number on CardStack is calculated, not copied. This page explains exactly how we review cards, calculate rates, and make ranking decisions.
        </p>

        {/* Methodology */}
        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-3" style={{ color: "var(--text)" }}>Our cashback formula</h2>
          <div className="rounded-lg p-4 mb-3 font-mono text-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--accent-text)" }}>
            Effective Cashback % = (Reward Points × Point Value) ÷ Spend Requirement × 100
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Example: HDFC Regalia gives 4 points per ₹150. Point value = ₹0.20 (cashback). So: (4 × 0.20) ÷ 150 × 100 = <strong style={{ color: "var(--text)" }}>1.33%</strong> — not the "5x" that banks advertise.
          </p>
        </div>

        {/* Cap handling */}
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>How we handle cashback caps</h2>
        <p>
          Most comparison sites ignore caps entirely. We don't. When a card has a monthly or yearly cashback cap, our tools calculate your <strong style={{ color: "var(--text)" }}>actual effective rate at your spending level</strong>.
        </p>
        <div className="rounded-xl p-5" style={{ background: "var(--orange-bg)", border: "1px solid var(--orange-border)" }}>
          <div className="text-sm mb-2"><strong style={{ color: "var(--orange)" }}>Example: Axis ACE at ₹20,000/month utility spend</strong></div>
          <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Advertised: 5%. Cap: ₹500/month on accelerated categories.
            <br />First ₹10,000 at 5% = ₹500 (cap hit). Remaining ₹10,000 at 0% = ₹0.
            <br /><strong style={{ color: "var(--orange)" }}>Real effective rate: 2.5% — not 5%.</strong>
          </div>
        </div>

        {/* Redemption values */}
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>Redemption value transparency</h2>
        <p>
          Many cards have points worth different amounts depending on how you redeem them. HDFC Regalia points are worth ₹0.20 as cashback but ₹0.50 for travel via SmartBuy.
        </p>
        <p>
          We show the <strong style={{ color: "var(--text)" }}>cashback redemption value</strong> as the default rate (conservative estimate), and note the higher travel/SmartBuy value separately. Cards with variable redemption values have a "💡 Redemption matters" callout on their detail page.
        </p>

        {/* Data sources */}
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>Data verification</h2>
        <div className="flex flex-col gap-3">
          {[
            ["✅ Verified", "Data checked directly from the bank's official product page. Fee, reward rates, caps, and benefits confirmed."],
            ["⚠️ Unverified", "Data sourced from secondary sources or our initial research. May contain errors. Clearly labeled on card pages."],
            ["🔔 Upcoming changes", "When banks announce changes (like SBI Cashback's April 2026 cap reduction), we show them with date and impact analysis."],
          ].map(([badge, desc], i) => (
            <div key={i} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 font-bold" style={{ color: "var(--text)" }}>{badge}</span>
              <span>{desc}</span>
            </div>
          ))}
        </div>

        {/* Rankings */}
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>How we rank cards</h2>
        <p>
          Card rankings on our <Link href="/cards" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>/cards page</Link> are sorted by <strong style={{ color: "var(--text)" }}>effective cashback rate</strong> in each category. The card with the highest real rate wins. Period.
        </p>
        <p>
          We <strong style={{ color: "var(--text)" }}>never</strong> rank cards by affiliate commission. If we activate affiliate links in the future, rankings will remain based purely on value to the user. See our <Link href="/how-we-earn" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>How We Earn</Link> page for more.
        </p>

        {/* User reports */}
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>Community verification</h2>
        <p>
          Every card page has a "Report an update" button. Users can flag incorrect rates, cap changes, fee changes, or benefit modifications. All reports go to our review queue via Google Forms. We verify and update within 24 hours.
        </p>
        <p>
          Banks change rewards frequently — often without notice. Community reports help us stay accurate faster than any team could alone.
        </p>

        {/* Update frequency */}
        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-3" style={{ color: "var(--text)" }}>Update frequency</h2>
          <div className="flex flex-col gap-2 text-sm">
            {[
              "Card data reviewed monthly against bank product pages",
              "User-reported changes verified within 24 hours",
              "Homepage 'What Changed' section updated with every data change",
              "Upcoming changes section added as soon as banks announce them",
            ].map((item, i) => (
              <div key={i} className="flex gap-2">
                <span style={{ color: "var(--green)" }}>•</span>
                <span style={{ color: "var(--text-secondary)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm" style={{ color: "var(--text-faint)" }}>
          Last updated: March 2026. Questions? <Link href="/contact" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>Contact us</Link>.
        </p>
      </div>
    </section>
  );
}
