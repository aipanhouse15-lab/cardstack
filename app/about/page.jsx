import Link from "next/link";
import { CARDS } from "@/data/cards";
import { CARD_COUNTS, REGALIA_EXAMPLE } from "@/data/site-facts";
import { TOOL_COUNT } from "@/data/site-tools";

const VERIFIED_CARD_COUNT = CARD_COUNTS.sourceReviewed;
const CAPPED_CARD_COUNT = CARD_COUNTS.capped;

export const metadata = {
  title: "About Assure Fintech — India's Honest Credit Card Tool",
  description: "Assure Fintech helps Indians maximize credit card rewards with real cashback math after caps. Built lean, built honest, built for India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[700px] mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)" }}>
        🏠 About
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
        About Assure Fintech
      </h1>

      <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          Assure Fintech started from a simple frustration: Indian credit card comparison sites can show a headline points multiplier as though it were the same as redeemable cash. They ignore reward caps, mix up point values, and rank cards by who pays them the most — not by what's best for you.
        </p>
        <p>
          We decided to fix that. Assure Fintech is a free tool that calculates <strong style={{ color: "var(--text)" }}>effective cashback after reward caps</strong> — the number banks don't advertise and other sites don't calculate. When you use our Smart Swipe Guide, the savings number you see is real. Not inflated. Not theoretical.
        </p>

        <div className="rounded-2xl p-6" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-extrabold mb-3" style={{ color: "var(--text)" }}>What makes us different</h2>
          <div className="flex flex-col gap-3 text-sm">
            {[
              ["📊", "Real math", `We convert eligible points into their actual redemption value. Regalia: ${REGALIA_EXAMPLE.points} points per ₹${REGALIA_EXAMPLE.spend} at up to ₹${REGALIA_EXAMPLE.pointValue.toFixed(2)} per point for cashback gives up to ${REGALIA_EXAMPLE.rate.toFixed(1)}%, before redemption charges.`],
              ["⚡", "Cap-aware", "For an eligible Axis ACE Google Pay bill-payment route, ₹20,000 in a statement cycle earns at most ₹500 from the shared accelerated bucket: 2.5% before any charges, assuming the cap was unused."],
              ["🔒", "No account required", "We don't ask for card numbers, banking credentials, or a user profile to use our tools."],
              ["✅", "Verified data", `${VERIFIED_CARD_COUNT} cards verified from bank product pages. Unverified cards are clearly marked.`],
              ["🆓", "Free forever", "All current tools are free. There are no active affiliate or referral links. Any future paid application link will be labelled alongside it. See How We Earn for the disclosure policy."],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-lg flex-shrink-0">{icon}</span>
                <div><strong style={{ color: "var(--text)" }}>{title}:</strong> {desc}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-lg font-extrabold mt-2" style={{ color: "var(--text)" }}>The numbers</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[[CARDS.length, "Cards listed"], [CAPPED_CARD_COUNT, "With recorded earning/redemption limits"], [TOOL_COUNT, "Free tools"] ].map(([n, l], i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "var(--bg-muted)", border: "1px solid var(--border)" }}>
              <div className="text-2xl font-extrabold" style={{ color: "var(--accent-text)" }}>{n}</div>
              <div className="text-xs mt-1" style={{ color: "var(--text-faint)" }}>{l}</div>
            </div>
          ))}
        </div>

        <p>Of {CARD_COUNTS.total} catalogue records, {CARD_COUNTS.sourceReviewed} have dated issuer-source reviews and {CARD_COUNTS.historical} are historical or unresolved. {CARD_COUNTS.estimateReady} have supported estimate models; {CARD_COUNTS.recommendable} are eligible for new-card recommendations after availability checks. Source review, model coverage and availability are separate.</p>
        <h2 className="text-lg font-extrabold mt-2" style={{ color: "var(--text)" }}>Who builds this?</h2>
        <p>
          Assure Fintech is founded and built by Ashutosh Khulbe in India. No VC funding. No team of 50. Just one person who got tired of misleading credit card comparison sites and decided to build something honest.
        </p>
        <p>Contact Ashutosh at <a href="mailto:ccardproject@gmail.com">ccardproject@gmail.com</a> for corrections and enquiries.</p>
        <p>
          We follow <Link href="/editorial-policy" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>strict editorial principles</Link> and are transparent about <Link href="/how-we-earn" className="font-semibold no-underline" style={{ color: "var(--accent-text)" }}>how we earn money</Link>.
        </p>

        <div className="rounded-2xl p-6 text-center mt-2" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>Want to try our tools?</p>
          <Link href="/smart-swipe" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-lg px-6 py-2.5 text-sm font-semibold">
            Start Smart Swipe →
          </Link>
        </div>
      </div>
    </section>
  );
}
