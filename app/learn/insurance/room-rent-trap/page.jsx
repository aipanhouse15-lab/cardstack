import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "The Room Rent Trap: How a 1% Limit Turns Your 5L Claim Into a 1.8L Payout",
  description: "Room rent sub-limits proportionally reduce your entire claim. A 5L policy with 1% room rent limit pays 1.8L on a 5L bill. The math explained.",
  alternates: { canonical: "/learn/insurance/room-rent-trap" },
  openGraph: {
    title: "The Room Rent Trap: How a 1% Limit Turns Your 5L Claim Into a 1.8L Payout",
    description: "Room rent sub-limits proportionally reduce your entire claim. A 5L policy with 1% room rent limit pays 1.8L on a 5L bill. The math explained.",
    type: "article",
    siteName: "Assure Fintech",
  },
};


// /learn/insurance/room-rent-trap
// Template: Warning / trap article
// Color: #e11d48 | Updated: June 4, 2026

const COLOR = "#e11d48";
const UPDATED = "June 4, 2026";

const SvgProportionateDeduction = () => (
  <svg viewBox="0 0 720 294" role="img" aria-label="Room rent trap proportionate deduction calculation showing how choosing a room that costs 3000 per day when policy limit is 2000 per day results in 33 percent deduction on entire hospital bill not just room charges" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW PROPORTIONATE DEDUCTION WORKS · THE TRAP MOST POLICYHOLDERS NEVER ANTICIPATE</text>
    <rect x="20" y="40" width="680" height="50" fill="var(--raise)" stroke="var(--border)" strokeWidth="1" rx="4" />
    <text x="30" y="60" fontFamily="system-ui" fontSize="12" fill="var(--text)">Policy Room Rent Limit: <tspan fontWeight="700">1% of Sum Insured per day</tspan> = ₹2,000/day on ₹2L policy</text>
    <text x="30" y="78" fontFamily="system-ui" fontSize="12" fill="var(--text)">Meera chose: <tspan fontWeight="700" fill="#dc2626">Single AC room at ₹3,000/day</tspan> (she thought it was only ₹1,000 over limit)</text>
    <rect x="20" y="105" width="320" height="140" fill={COLOR} rx="8" opacity="0.25" stroke={COLOR} strokeWidth="1" />
    <text x="180" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill={COLOR}>TOTAL HOSPITAL BILL: ₹5,00,000</text>
    <text x="180" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Room charges (5 days): ₹15,000</text>
    <text x="180" y="165" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Surgery charges: ₹2,50,000</text>
    <text x="180" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Medicines: ₹80,000</text>
    <text x="180" y="199" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Doctor fees: ₹1,20,000</text>
    <text x="180" y="216" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Tests: ₹35,000</text>
    <rect x="380" y="105" width="320" height="140" fill="#dc2626" rx="8" opacity="0.25" stroke="#dc2626" strokeWidth="1" />
    <text x="540" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="#dc2626">WHAT INSURER PAYS: ₹3,35,000</text>
    <text x="540" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Deduction ratio: 2000/3000 = 66.7%</text>
    <text x="540" y="165" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#dc2626">Everything deducted by 33.3%</text>
    <text x="540" y="182" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Surgery paid: ₹1,66,750 (not ₹2.5L)</text>
    <text x="540" y="199" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Medicines paid: ₹53,360</text>
    <text x="540" y="216" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="var(--text)">Etc., all cut by 33%</text>
    <rect x="180" y="258" width="360" height="15" fill="#dc2626" rx="4" />
    <text x="360" y="270" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">Meera pays ₹1,65,000 out of pocket. Not because her policy was inadequate — because of the room she chose.</text>
  </svg>
);

const SvgInsurerComparison = () => (
  <svg viewBox="0 0 720 249" role="img" aria-label="Comparison of room rent limit policies across major health insurers showing which have no room rent limits and which restrict to 1 percent or fixed daily amounts" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ROOM RENT LIMIT COMPARISON · MAJOR HEALTH INSURERS · JUNE 2026</text>
    {[{ h: "Insurer" }, { h: "Room Rent Limit" }, { h: "ICU Limit" }, { h: "Verdict" }].map(({ h }, i) => {
      const xs = [20, 180, 360, 520];
      return <rect key={h} x={xs[i]} y="35" width={[150, 170, 150, 200][i]} height="24" fill={COLOR}><text x={xs[i] + [150, 170, 150, 200][i] / 2} y="51" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#fff">{h}</text></rect>;
    })}
    {[
      ["Niva Bupa (Health Companion)", "No limit", "No limit", "Best for room rent — full coverage"],
      ["HDFC Ergo (Optima Restore)", "No limit", "No limit", "No room rent cap — excellent"],
      ["Star Health (Comprehensive)", "Single AC room", "Single AC + ICU", "OK — ask at network hospital"],
      ["Care Health (Supreme)", "No limit on new plans", "No limit", "Verify plan variant — older plans had limits"],
      ["New India (Mediclaim)", "1% of Sum Insured/day", "2% of SI/day", "OLD-STYLE limit — biggest trap risk"],
      ["United India (Individual)", "1% of SI/day", "2% of SI/day", "Similar trap to New India — watch out"],
    ].map((row, ri) => (
      <g key={row[0]}>
        <rect x="20" y={59 + ri * 25} width={700} height="25" fill={ri % 2 === 0 ? "var(--raise)" : "transparent"} />
        {row.map((cell, ci) => {
          const xs = [20, 180, 360, 520];
          const isGood = cell.includes("No limit") || cell.includes("Best") || cell.includes("excellent");
          const isBad = cell.includes("trap") || cell.includes("1% of SI");
          return <text key={ci} x={xs[ci] + 5} y={76 + ri * 25} fontFamily="system-ui" fontSize="10" fill={isGood ? "#16a34a" : isBad ? "#dc2626" : "var(--text)"}>{cell}</text>;
        })}
      </g>
    ))}
        <text x="20" y="215" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Data from policy wordings as of June 2026. Always read your specific plan's room rent clause in the policy document — not</text>
    <text x="20" y="229" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">the brochure, not the agent's verbal summary.</text>
  </svg>
);

const SvgBillComponent = () => (
  <svg viewBox="0 0 720 249" role="img" aria-label="Hospital bill components showing which charges are proportionately reduced when room rent limit is breached including surgery fees doctor fees medicines and tests" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">WHICH CHARGES GET PROPORTIONATELY CUT WHEN ROOM RENT LIMIT IS BREACHED</text>
    {[
      { item: "Surgeon / specialist fees", cut: "YES", reason: "Doctor charges are tied to room category in hospital tariff" },
      { item: "OT charges", cut: "YES", reason: "Operating theater rates vary by room category" },
      { item: "Medicines & consumables", cut: "YES", reason: "Dispensed at room-category rates per hospital policy" },
      { item: "Nursing charges", cut: "YES", reason: "Nurse-to-patient ratio varies by room type" },
      { item: "ICU charges", cut: "SOMETIMES", reason: "Depends on whether ICU follows room-rate proportionality" },
      { item: "Diagnostic tests (X-ray, MRI)", cut: "VARIES", reason: "Some policies exempt diagnostics from proportionate cut" },
      { item: "Room rent itself", cut: "YES", reason: "Only paid up to policy limit, balance borne by patient" },
    ].map(({ item, cut, reason }, i) => (
      <g key={item}>
        <rect x="20" y={35 + i * 26} width={700} height="22" fill={i % 2 === 0 ? "var(--raise)" : "transparent"} />
        <text x="26" y={51 + i * 26} fontFamily="system-ui" fontSize="11" fill="var(--text)">{item}</text>
        <rect x="360" y={37 + i * 26} width="70" height="18" fill={cut === "YES" ? "#dc2626" : cut === "SOMETIMES" ? "#f59e0b" : "#16a34a"} rx="3" />
        <text x="395" y={50 + i * 26} textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#fff">{cut}</text>
        <text x="440" y={51 + i * 26} fontFamily="system-ui" fontSize="10" fill="var(--text-muted)">{reason}</text>
      </g>
    ))}
        <text x="20" y="215" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Almost everything except blood and implants is proportionately reduced. The room rent limit doesn't just cap room charges</text>
    <text x="20" y="229" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">— it reduces the insurer's liability across the entire bill.</text>
  </svg>
);

const SvgRoomUpgradeImpact = () => (
  <svg viewBox="0 0 720 253" role="img" aria-label="Impact of room upgrade on health insurance payout showing that choosing a 4000 rupees per day room when limit is 2000 rupees cuts payout on a 5 lakh bill by 50 percent" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">ROOM CHOICE vs INSURANCE PAYOUT · ₹5L BILL · POLICY SI: ₹2L · LIMIT 1% = ₹2,000/DAY</text>
    {[
      { room: "General Ward (₹800/day)", ratio: "100%", payout: "₹5,00,000", color: "#16a34a" },
      { room: "Twin Sharing (₹1,500/day)", ratio: "100%", payout: "₹5,00,000", color: "#16a34a" },
      { room: "Single AC (₹2,000/day)", ratio: "100%", payout: "₹5,00,000", color: "#16a34a" },
      { room: "Single AC+ (₹3,000/day)", ratio: "66.7%", payout: "₹3,33,500", color: "#f97316" },
      { room: "Suite (₹5,000/day)", ratio: "40%", payout: "₹2,00,000", color: "#dc2626" },
    ].map(({ room, ratio, payout, color }, i) => (
      <g key={room}>
        <text x="210" y={52 + i * 30} textAnchor="end" fontFamily="system-ui" fontSize="11" fill="var(--text)">{room}</text>
        <rect x="218" y={38 + i * 30} width={parseInt(ratio) * 3.8} height="20" fill={color} rx="3" opacity="0.8" />
        <text x={226 + parseInt(ratio) * 3.8} y={53 + i * 30} fontFamily="system-ui" fontSize="12" fontWeight="700" fill={color}>{payout} ({ratio} paid)</text>
      </g>
    ))}
        <text x="20" y="195" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Choosing the ₹5,000/day suite room cuts your insurance payout by 60%. Your out-of-pocket goes from zero to ₹3L. One room</text>
    <text x="20" y="209" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">choice. Three lakh rupees difference.</text>
  </svg>
);

const SvgHowToAvoid = () => (
  <svg viewBox="0 0 720 356" role="img" aria-label="Three step guide to avoid room rent trap by checking policy limit before admission choosing appropriate room or getting insurer approval for upgrade" style={{ width: "100%", maxWidth: 760, margin: "24px 0" }}>
    <text x="20" y="22" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="var(--text-muted)">HOW TO AVOID THE ROOM RENT TRAP: 3-STEP PROTOCOL</text>
    {[
      { step: "1. Before buying policy", action: "Check policy wording for 'Room Rent' clause. 'No room rent sub-limit' = safe. '1% of SI/day' = danger zone.", color: COLOR },
      { step: "2. At hospital admission", action: "Tell admissions: 'My policy has a ₹X/day room limit. Show me rooms within that limit.' Don't upgrade without calling insurer.", color: "#f59e0b" },
      { step: "3. If forced to upgrade", action: "Call insurer immediately. Get written approval. In emergencies, tell them you had no choice — document the medical necessity.", color: "#16a34a" },
    ].map(({ step, action, color }, i) => (
      <g key={step}>
        <rect x="20" y={42 + i * 44} width={700} height="36" fill={color} rx="6" opacity="0.22" stroke={color} strokeWidth="1" />
        <text x="30" y={57 + i * 44} fontFamily="system-ui" fontSize="11" fontWeight="700" fill={color}>{step}</text>
        <text x="30" y={72 + i * 44} fontFamily="system-ui" fontSize="12" fill="var(--text)">{action}</text>
      </g>
    ))}
        <text x="20" y="175" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Emergency admissions: if you're admitted to ICU due to emergency, the proportionate deduction rule is typically waived.</text>
    <text x="20" y="189" fontSize="9" fontFamily="system-ui" fill="var(--text-muted)">Document the emergency admission clearly in your claim paperwork.</text>
  </svg>
);

export default function PageRoomRentTrap() {
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is the room rent trap in health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Health insurance policies with room rent sub-limits (typically 1% of sum insured per day) apply a proportionate deduction clause. This means if you choose a hospital room that costs more than the policy limit, the insurer doesn't just cap the room charge — it reduces all other charges (surgery, medicines, doctor fees) by the same ratio. So choosing a room 50% over the limit means 33% cut on your entire bill, not just the room charge." } },
      { "@type": "Question", "name": "Which health insurance policies have no room rent limits?", "acceptedAnswer": { "@type": "Answer", "text": "Niva Bupa Health Companion, HDFC Ergo Optima Restore, and Care Health Supreme (new plan variants from 2023 onwards) all have no room rent sub-limits. Star Health's Comprehensive plan limits you to single AC room but doesn't have a proportionate deduction clause. Old government insurer policies (New India, United India) are the biggest risk zones — they have 1% of SI daily limits and apply proportionate deductions strictly." } },
      { "@type": "Question", "name": "Does the room rent trap apply to ICU stays?", "acceptedAnswer": { "@type": "Answer", "text": "ICU stays are often handled separately. Most policies have a 2% of SI per day ICU limit versus 1% for normal rooms. Emergency ICU admissions are sometimes exempt from proportionate deduction clauses, especially when there was no choice in room selection. However, if you're transferred from ICU to a regular room and choose a room above the limit, proportionate deduction applies to that portion of the stay. Read your policy's specific ICU clause." } },
      { "@type": "Question", "name": "Can I avoid the room rent trap after I've already been admitted?", "acceptedAnswer": { "@type": "Answer", "text": "If you've already been admitted to a room above your policy limit, call your insurer's claims helpline immediately. Explain the situation and ask if a room change is possible without affecting your claim. Some insurers will approve the upgrade with written pre-authorization, especially for emergency cases. Without insurer approval, a room change after the fact doesn't retroactively fix the proportionate deduction on days already spent in the higher-priced room." } },
      { "@type": "Question", "name": "How do I calculate if my room is within the policy limit?", "acceptedAnswer": { "@type": "Answer", "text": "If your policy has a 1% of sum insured per day limit: Policy SI ₹5L × 1% = ₹5,000/day limit. For ₹3L SI: ₹3,000/day limit. Some policies have a fixed daily limit (eg ₹2,000/day) regardless of SI. Ask the hospital for a room rate card before admission. Compare to your policy limit. Choose the most comfortable room at or below the limit. Even ₹1 above the limit triggers proportionate deduction." } },
      { "@type": "Question", "name": "Is it worth paying more premium to get a no-room-rent-limit policy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, almost always. The premium difference between a policy with room rent limits and one without is typically ₹3,000-8,000 per year. A single hospitalization where you exceed the room rent limit can cost you ₹50,000-2,00,000 in proportionate deductions. The premium differential pays for itself in less than one claim. When comparing health insurance, specifically filter for 'no room rent sub-limit' as a non-negotiable feature." } },
    ],
  };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "The Room Rent Trap: How a 1% Limit Turns Your ₹5L Claim Into a ₹1.8L Payout", author: { "@type": "Person", name: "Ash K" }, datePublished: "2026-06-04", dateModified: "2026-06-04", publisher: { "@type": "Organization", name: "Assure Fintech" } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://assurefintech.com/" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://assurefintech.com/learn/" },
    { "@type": "ListItem", position: 3, name: "Insurance", item: "https://assurefintech.com/learn/insurance/" },
    { "@type": "ListItem", position: 4, name: "Room Rent Trap", item: "https://assurefintech.com/learn/insurance/room-rent-trap" },
  ]};

  return (
    <>
      {/* HERO BANNER */}
      <div style={{ background: "linear-gradient(135deg, #1D0309, #480917, #1D0309)", padding: "52px 32px 56px", position: "relative", overflow: "hidden", marginTop: 64 }}>
        <div style={{ position: "absolute", top: -100, right: -50, width: 500, height: 500, background: "radial-gradient(circle, #e11d4822, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR }} /> Insurance · Health Insurance · Claim Traps
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", color: "#F1F5F9", marginBottom: 14 }}>
            The Room Rent Trap: How a 1% Limit Turns Your ₹5L Claim Into a ₹1.8L Payout
          </h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Last updated {UPDATED} · By Ash K · 9 min read</div>
        </div>
      </div>
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 22px 48px", fontFamily: "system-ui, -apple-system, sans-serif", color: "var(--text)", lineHeight: 1.6 }}>
      <Script id="ld-art" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}><Link href="/" style={{ color: "inherit" }}>Home</Link> / <Link href="/learn" style={{ color: "inherit" }}>Learn</Link> / <Link href="/learn/insurance" style={{ color: "inherit" }}>Insurance</Link> / Room Rent Trap</nav>
      <p style={{ fontSize: 18, color: "var(--text-muted)", margin: "0 0 16px" }}>You have a ₹5 lakh health insurance policy. You're admitted to hospital. You choose a comfortable single AC room. Your insurer pays ₹1.8 lakh. The rest is on you. The room rent sub-limit clause is the most underdiscussed trap in health insurance.</p>
<section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Meera's Hospital Bill: A ₹1.65L Surprise</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Meera had a ₹2 lakh health insurance policy — one she'd been paying premiums on for 6 years. When she needed a knee surgery, she was admitted to a good network hospital in Pune, chose a single AC room (₹3,000/day), had a smooth 5-day stay, and came home relieved that insurance would cover most of it.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Her total bill was ₹5,00,000. The insurer settled ₹3,35,000. She owed ₹1,65,000 out of her own pocket. Her policy's sum insured was ₹5 lakh — more than the entire bill. She should have been covered in full. What happened?</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Her policy had a room rent sub-limit: 1% of sum insured per day = ₹2,000/day. She chose a ₹3,000/day room. The insurer applied proportionate deduction: 2000/3000 = 66.7% payable on every single line item. Not just on room charges. On everything.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>The Proportionate Deduction Clause: How It Actually Works</h2>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>This is the mechanism that makes room rent limits so dangerous. It's not intuitive and most policyholders discover it only at the time of claim.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>When you exceed the room rent limit, the insurer calculates what percentage of the actual room rent your limit covers. That same percentage applies to every other charge on your hospital bill. Room rent limit is ₹2,000 and you paid ₹3,000: insurer covers 66.7%. Your surgery cost ₹2,50,000: insurer pays ₹1,66,750. Your medicines cost ₹80,000: insurer pays ₹53,360. And so on.</p>
        <SvgProportionateDeduction />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The hospital tariff system is the underlying reason this rule exists. Hospitals structure their charges room-category-wise. A doctor's fee for operating on a patient in a suite room is literally higher than for the same procedure in a twin-sharing room — because the hospital bills differently. Insurers argue that if you upgrade your room, all associated charges increase, so they proportionately limit their liability.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Whether this is fair is debatable. What's not debatable: it's legal, it's in your policy document (usually on page 8 of 15 in 8-point font), and not knowing about it doesn't protect you from it.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Which Bill Components Get Cut</h2>
        <SvgBillComponent />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>Virtually everything except blood and implants (which are charged at fixed rates regardless of room category) gets proportionately reduced. This is why a seemingly minor room upgrade can devastate a claim — you're not just paying more for the room, you're reducing insurer liability across the entire hospitalization.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How Room Choice Changes Your Payout</h2>
        <SvgRoomUpgradeImpact />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The numbers are stark. On a ₹5L bill, choosing a room that's double the policy limit (₹4,000 when limit is ₹2,000) cuts the insurer's payment by 50% — from ₹5L to ₹2.5L. You're left with a ₹2.5L out-of-pocket payment despite having "₹5 lakh health insurance."</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The irony: a ₹5L policy with room rent limits often gives you worse effective coverage than a ₹3L policy with no room rent limits. The policy with limits looks better on the brochure and costs less in premium. The reality at the time of claim is very different.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>Which Insurers Have Room Rent Limits (And Which Don't)</h2>
        <SvgInsurerComparison />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The pattern is clear: newer, private health-focused insurers (Niva Bupa, HDFC Ergo, Care Health) have moved to no-room-rent-limit products because it's a selling point. Older general insurers (New India, United India, Oriental) and some older product variants still have 1% of SI limits with full proportionate deduction.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If you currently have a New India or United India policy: look at your policy wording specifically. If it says "room rent 1% of sum insured per day", you have this exposure. Consider upgrading to a no-limit policy at your next renewal — porting your policy preserves waiting period credits and IRDAI mandates that insurers accept portability requests.</p>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px" }}>How to Protect Yourself</h2>
        <SvgHowToAvoid />
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>The most powerful protection is buying the right policy to begin with. When comparing health insurance, add "no room rent sub-limit" as a filter requirement. This alone eliminates most of the bad-outcome risk.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>If you're already on a policy with room rent limits: keep a note of your limit (policy SI × 1% = daily limit). Store this in your phone along with your policy number and insurer helpline. When you or a family member is being admitted, share this limit with the hospital admissions team before room selection — not after.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>For planned procedures: call the insurer's pre-authorization helpline 48-72 hours before admission. Explain your policy limit, ask which rooms at the network hospital fall within that limit, and get written pre-authorization. This protects you even if you're admitted to a slightly higher-cost room in an emergency — documented pre-authorization gives you leverage.</p>
        <p style={{ fontSize: 16, margin: "0 0 14px" }}>See our full <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link>, our <Link href="/learn/insurance/copay-vs-no-copay" style={{ color: COLOR }}>copay vs no copay guide</Link>, and our <Link href="/learn/insurance/health-insurance-for-parents" style={{ color: COLOR }}>health insurance for parents</Link> guide for related coverage decisions.</p>
      </section>
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 16px" }}>FAQ</h2>
        {faq.mainEntity.map((q, i) => (
          <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
            <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{q.name}</summary>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Related: <Link href="/learn/insurance" style={{ color: COLOR }}>insurance hub</Link> · <Link href="/learn/insurance/copay-vs-no-copay" style={{ color: COLOR }}>copay vs no copay</Link> · <Link href="/learn/insurance/health-insurance-for-parents" style={{ color: COLOR }}>health insurance for parents</Link></p>
      <footer style={{ fontSize: 11, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 16 }}>Editorial disclaimer: insurer policy terms from policy wordings as of {UPDATED}. Proportionate deduction examples are illustrative based on standard 1% SI/day limit policies. Always read your specific policy document. Not financial advice.</footer>
    </main>
    </>
  );
}
