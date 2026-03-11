// Bank logo component — styled initials with brand colors
// Used across card tiles, detail pages, and homepage

const BANK_STYLES = {
  "HDFC": { initials: "HDFC", bg: "#004b87", text: "#fff" },
  "SBI": { initials: "SBI", bg: "#2d2d8a", text: "#fff" },
  "ICICI": { initials: "ICICI", bg: "#f58220", text: "#fff" },
  "Axis": { initials: "AXIS", bg: "#97144d", text: "#fff" },
  "AU Bank": { initials: "AU", bg: "#ec6608", text: "#fff" },
  "IDFC": { initials: "IDFC", bg: "#9c1d26", text: "#fff" },
  "OneCard": { initials: "1", bg: "#000000", text: "#fff" },
  "BOB": { initials: "BOB", bg: "#f15a22", text: "#fff" },
  "Kotak": { initials: "K", bg: "#ed1c24", text: "#fff" },
  "IndusInd": { initials: "IIB", bg: "#6a1b4d", text: "#fff" },
  "YES Bank": { initials: "YES", bg: "#0066b3", text: "#fff" },
  "RBL": { initials: "RBL", bg: "#e31837", text: "#fff" },
};

export default function BankLogo({ bank, size = 40, rounded = 12, fontSize = 11 }) {
  const style = BANK_STYLES[bank] || { initials: bank?.slice(0, 2) || "??", bg: "#6b7280", text: "#fff" };

  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: rounded,
      background: style.bg,
      color: style.text,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: fontSize,
      fontWeight: 800,
      letterSpacing: style.initials.length > 3 ? "-0.05em" : "0.02em",
      flexShrink: 0,
      fontFamily: "system-ui, sans-serif",
    }}>
      {style.initials}
    </div>
  );
}
