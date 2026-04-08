import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Assure Fintech — The Honest Number on Every Financial Product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1E1042, #2A1557, #1E1042)",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -100,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(139,92,246,0.25), transparent 65%)",
          }}
        />

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #7C3AED, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            AF
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#F1F5F9" }}>Assure Fintech</div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: "#F1F5F9",
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 28,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          The <span style={{ color: "#A78BFA" }}>honest number</span>&nbsp;on every financial product.
        </div>

        {/* Subtext */}
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.55)", lineHeight: 1.4, maxWidth: 900, marginBottom: 40 }}>
          Banks advertise one number. You take home another. We calculate the gap.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 60, marginTop: "auto" }}>
          {[
            ["75+", "Cards tracked"],
            ["9", "Live tools"],
            ["6", "Categories"],
            ["₹0", "Always free"],
          ].map(([n, l], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#F1F5F9" }}>{n}</div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.4)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
