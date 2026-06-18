import { useState, useEffect } from "react";

const plans = [
  {
    id: 1,
    label: null,
    labelStyle: null,
    name: "STARTER ACCESS",
    price: "Free",
    priceSuffix: null,
    description: "Entry tier — designed to convert to paid.",
    btnText: "Start Free →",
    btnStyle: "outline",
    features: ["1 current vehicle", "5 matches", "CORE Pure Cost only"],
  },
  {
    id: 2,
    label: "ONE-TIME",
    labelStyle: "outline-green",
    name: "CAR BUYING SPRINT",
    price: "A$29.99",
    priceSuffix: "/one-time",
    description: "Built for buyers actively shopping right now.",
    btnText: "Get the Sprint →",
    btnStyle: "green",
    features: [
      "3 current vehicles · 15 matches",
      "All 4 CORE Modes",
      "All 5 Spotlights™ included",
      "1 RideReveal™ free, then A$4.99/vehicle",
    ],
  },
  {
    id: 3,
    label: "ANNUAL",
    labelStyle: "outline-green",
    name: "CORE ADVANTAGE",
    price: "A$143.90",
    priceSuffix: "/year",
    description: "Recurring buyers, fleet-curious, families.",
    btnText: "Go Annual →",
    btnStyle: "green",
    features: [
      "Unlimited matches",
      "All 4 CORE Modes",
      "All 5 Spotlights™ included",
      "4 RideReveals/yr then A$4.99/vehicle",
      "Quarterly Reports",
    ],
  },
  {
    id: 4,
    label: "PRO",
    labelStyle: "solid-dark",
    name: "FULL INSIGHT PRO",
    price: "A$335.90",
    priceSuffix: "/year",
    description: "Power users — the unlimited tier.",
    btnText: "Get Full Insight Pro →",
    btnStyle: "green",
    features: [
      "Everything in CORE Annual",
      "RideReveal™ unlimited included",
      "All 5 Spotlights™ included",
    ],
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

function PlanCard({ plan }) {
  const badge =
    plan.label === null ? null : plan.labelStyle === "solid-dark" ? (
      <span
        style={{
          backgroundColor: "#1e3a1e",
          borderRadius: "999px",
          padding: "5px 16px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#fff",
          letterSpacing: "0.5px",
          whiteSpace: "nowrap",
        }}
      >
        {plan.label}
      </span>
    ) : (
      <span
        style={{
          border: "1.5px solid #6aaa1e",
          borderRadius: "999px",
          padding: "4px 14px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#6aaa1e",
          backgroundColor: "transparent",
          letterSpacing: "0.5px",
          whiteSpace: "nowrap",
        }}
      >
        {plan.label}
      </span>
    );

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "28px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "13px", fontWeight: "800", color: "#1a1a1a", letterSpacing: "0.5px" }}>
          {plan.name}
        </span>
        {badge}
      </div>

      {/* Price */}
      <div style={{ fontSize: "42px", fontWeight: "800", color: "#1a1a1a", lineHeight: "1", marginBottom: "6px" }}>
        {plan.price}
        {plan.priceSuffix && (
          <span style={{ fontSize: "14px", fontWeight: "400", color: "#888" }}>
            {plan.priceSuffix}
          </span>
        )}
      </div>

      <p style={{ fontSize: "14px", color: "#555", margin: "0 0 24px", lineHeight: "1.5" }}>
        {plan.description}
      </p>

      {/* Button */}
      <button
        style={
          plan.btnStyle === "green"
            ? {
                width: "100%",
                padding: "16px",
                backgroundColor: "#8dc63f",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "800",
                color: "#1a1a1a",
                cursor: "pointer",
                marginBottom: "24px",
              }
            : {
                width: "100%",
                padding: "15px",
                backgroundColor: "transparent",
                border: "1.5px solid #1a1a1a",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "700",
                color: "#1a1a1a",
                cursor: "pointer",
                marginBottom: "24px",
              }
        }
      >
        {plan.btnText}
      </button>

      <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "0 0 20px" }} />

      {/* Features */}
      {plan.features.map((feat, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "7px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#6aaa1e", fontSize: "15px", flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: "14px", color: "#2a2a2a", lineHeight: "1.4" }}>{feat}</span>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              border: "1.5px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              color: "#aaa",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            ⓘ
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Upgrade() {
  const width = useWindowWidth();

  // Responsive columns
  const cols = width < 600 ? 1 : width < 960 ? 2 : 3;

  const row1 = plans.slice(0, 3);
  const row2 = plans.slice(3);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#eef2ee",
        padding: "80px 24px",
        boxSizing: "border-box",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Header Text */}
      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          color: "#5a8a2e",
          marginBottom: "16px",
          textTransform: "uppercase",
        }}
      >
        SIMPLE, TRANSPARENT PRICING
      </p>

      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(30px, 5vw, 52px)",
          fontWeight: "800",
          color: "#1a1a1a",
          lineHeight: "1.15",
          margin: "0 0 16px",
        }}
      >
        Start Free. Upgrade
        <br />
        <span style={{ color: "#6aaa1e" }}>When You're Ready.</span>
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          color: "#444",
          maxWidth: "560px",
          margin: "0 auto 56px",
          lineHeight: "1.6",
        }}
      >
        Researching a car? The Car Buying Sprint is one payment for full power
        across your entire car hunt — no subscription, no expiry.
      </p>

      {/* Row 1 — 3 cards */}
      <div style={{ ...gridStyle, marginBottom: "20px" }}>
        {row1.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Row 2 — 1 card aligned left (same column width) */}
      <div style={gridStyle}>
        {row2.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}