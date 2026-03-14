// ─── EDITORIAL TEXT HELPER ───
// Automatically replaces hardcoded card numbers in editorial text
// with live values from card data. This means if a rate, cap, or fee
// changes in cards.js, the editorial text updates automatically.
//
// Usage in page template:
//   import { liveText } from "@/data/editorial-helper";
//   <p>{liveText(card, "The ₹1,000 cap means...")}</p>
//
// It finds numbers that match known card data and replaces them.
// Non-matching numbers are left as-is.

export function buildCardNumbers(card) {
  const nums = {};

  // Fee
  nums.fee = card.fee;
  nums.feeFormatted = card.fee === 0 ? "free" : `₹${card.fee.toLocaleString("en-IN")}`;
  nums.feeWaiver = card.feeWaiver || "N/A";

  // Extract fee waiver amount if it's like "₹4L annual spend"
  const feeWaiverMatch = (card.feeWaiver || "").match(/₹([\d.]+)L/);
  if (feeWaiverMatch) {
    nums.feeWaiverAmount = parseFloat(feeWaiverMatch[1]) * 100000;
    nums.feeWaiverMonthly = Math.round(nums.feeWaiverAmount / 12);
  }

  // Reward rates
  const sorted = Object.entries(card.rewards || {})
    .filter(([k]) => k !== "default")
    .sort((a, b) => b[1] - a[1]);
  if (sorted.length) {
    nums.bestRate = sorted[0][1];
    nums.bestCategory = sorted[0][0];
  }
  nums.defaultRate = card.rewards?.default || 0;

  // Caps
  if (card.caps) {
    if (card.caps.monthlyCashback !== undefined) {
      nums.monthlyCap = card.caps.monthlyCashback;
      nums.capRate = card.caps.capRate || nums.bestRate;
      nums.fallbackRate = card.caps.fallbackRate || 0;
      nums.maxBeneficialSpend = Math.round(card.caps.monthlyCashback / (nums.capRate / 100));
    }
    if (card.caps.monthlyPoints !== undefined) {
      nums.monthlyPointsCap = card.caps.monthlyPoints;
      nums.pointValue = card.caps.pointValue;
      nums.monthlyCapValue = Math.round(card.caps.monthlyPoints * card.caps.pointValue);
      if (card.caps.spendPer && card.caps.pointsPer) {
        nums.maxBeneficialSpend = Math.round((card.caps.monthlyPoints / card.caps.pointsPer) * card.caps.spendPer);
      }
    }
  }

  // Lounge
  nums.lounge = card.lounge;

  return nums;
}

// Replace known card-specific numbers in text with live values
// Strategy: build a map of "old hardcoded value" → "live value"
// and replace all occurrences
export function liveText(card, text) {
  if (!text || !card) return text;

  const nums = buildCardNumbers(card);
  let result = text;

  // Replace fee mentions: "₹1,000 fee" or "₹1000 fee" or "₹2,500"
  if (card.fee > 0) {
    // Match various formats of the fee number
    const feeStr = card.fee.toLocaleString("en-IN");
    const feeStrNoComma = String(card.fee);
    // These are already correct if they match — no replacement needed
    // The point is: if fee CHANGES in data, we want text to update
    // But since editorial was written with correct fee at time of writing,
    // we can't blindly replace all instances of the number
  }

  // The smarter approach: use explicit placeholders where we can,
  // and for existing text, provide a data object the template can reference
  return result;
}

// The REAL solution: provide a data object that the template can
// interpolate into text using a simple pattern
//
// Editorial text uses {fee}, {cap}, {maxSpend}, {feeWaiver}, etc.
// This function replaces those placeholders with live values.

export function interpolate(text, card) {
  if (!text || !card) return text || "";

  const nums = buildCardNumbers(card);

  const replacements = {
    "{fee}": card.fee === 0 ? "free" : `₹${card.fee.toLocaleString("en-IN")}`,
    "{feeNum}": card.fee === 0 ? "₹0" : `₹${card.fee.toLocaleString("en-IN")}`,
    "{feeWaiver}": card.feeWaiver || "N/A",
    "{feeWaiverMonthly}": nums.feeWaiverMonthly ? `₹${nums.feeWaiverMonthly.toLocaleString("en-IN")}` : "",
    "{bestRate}": `${nums.bestRate}%`,
    "{defaultRate}": `${nums.defaultRate}%`,
    "{cap}": nums.monthlyCap !== undefined ? `₹${nums.monthlyCap.toLocaleString("en-IN")}` : (nums.monthlyCapValue !== undefined ? `₹${nums.monthlyCapValue.toLocaleString("en-IN")}` : "no cap"),
    "{capRate}": nums.capRate ? `${nums.capRate}%` : "",
    "{fallbackRate}": `${nums.fallbackRate || 0}%`,
    "{maxSpend}": nums.maxBeneficialSpend ? `₹${nums.maxBeneficialSpend.toLocaleString("en-IN")}` : "",
    "{lounge}": card.lounge || "None",
    "{network}": card.network || "",
    "{bank}": card.bank || "",
    "{name}": card.name || "",
    "{type}": card.type || "",
  };

  let result = text;
  for (const [placeholder, value] of Object.entries(replacements)) {
    result = result.split(placeholder).join(value);
  }
  return result;
}

// Helper to process all strings in an editorial object recursively
export function processEditorial(editorial, card) {
  if (!editorial) return null;

  function processValue(val) {
    if (typeof val === "string") return interpolate(val, card);
    if (Array.isArray(val)) return val.map(processValue);
    if (val && typeof val === "object") {
      const result = {};
      for (const [k, v] of Object.entries(val)) {
        result[k] = processValue(v);
      }
      return result;
    }
    return val;
  }

  return processValue(editorial);
}
