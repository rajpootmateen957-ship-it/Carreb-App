import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const fuelTypes = [
  {
    value: "petrol",
    label: "Petrol",
    baseCost: 3800,
    evSaving: 1800,
    groceryWeeks: 25,
    desc: "Average petrol vehicle",
  },
  {
    value: "diesel",
    label: "Diesel",
    baseCost: 4200,
    evSaving: 2000,
    groceryWeeks: 28,
    desc: "Average diesel vehicle",
  },
  {
    value: "hybrid",
    label: "Hybrid",
    baseCost: 2900,
    evSaving: 900,
    groceryWeeks: 19,
    desc: "Average hybrid vehicle",
  },
  {
    value: "phev",
    label: "Plug-in Hybrid (PHEV)",
    baseCost: 2600,
    evSaving: 600,
    groceryWeeks: 17,
    desc: "Average plug-in hybrid vehicle",
  },
  {
    value: "electric",
    label: "Electric (EV)",
    baseCost: 1800,
    evSaving: 0,
    groceryWeeks: 12,
    desc: "Average electric vehicle",
  },
  {
    value: "lpg",
    label: "LPG",
    baseCost: 3200,
    evSaving: 1200,
    groceryWeeks: 21,
    desc: "Average LPG vehicle",
  },
];

const kmOptions = [
  { value: "5000",  label: "Under 5,000 km",   multiplier: 0.55 },
  { value: "10000", label: "5,000 – 10,000 km", multiplier: 0.75 },
  { value: "15000", label: "10,000 – 15,000 km",multiplier: 0.90 },
  { value: "20000", label: "15,000 – 20,000 km",multiplier: 1.00 },
  { value: "25000", label: "20,000 – 25,000 km",multiplier: 1.15 },
  { value: "30000", label: "25,000 – 30,000 km",multiplier: 1.30 },
  { value: "30001", label: "30,000+ km",         multiplier: 1.50 },
];

// ── Chevron icon ──────────────────────────────────────────────────────────────
function ChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#c8e86b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Custom Select ─────────────────────────────────────────────────────────────
function CustomSelect({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen((p) => !p)}
        style={{
          background: "#2d5a27",
          border: "1.5px solid rgba(255,255,255,0.15)",
          borderRadius: "12px",
          padding: "16px 20px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
          transition: "border-color 0.2s",
        }}
      >
        <span style={{ color: selected ? "#fff" : "rgba(255,255,255,0.45)" }}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#1e3d1a",
            border: "1.5px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            zIndex: 999,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              style={{
                padding: "14px 20px",
                color: value === opt.value ? "#c8e86b" : "#fff",
                fontSize: "15px",
                cursor: "pointer",
                background:
                  value === opt.value
                    ? "rgba(200,232,107,0.12)"
                    : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "rgba(200,232,107,0.10)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  value === opt.value
                    ? "rgba(200,232,107,0.12)"
                    : "transparent")
              }
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function CostEstimator() {
  const [fuel, setFuel] = useState("diesel");
  const [km, setKm] = useState("20000");

  const fuelData = fuelTypes.find((f) => f.value === fuel) || fuelTypes[1];
  const kmData = kmOptions.find((k) => k.value === km) || kmOptions[3];

  const annualCost = Math.round(
    (fuelData.baseCost * kmData.multiplier) / 500
  ) * 500;

  const evSaving = Math.round((fuelData.evSaving * kmData.multiplier) / 100) * 100;
  const kmLabel =
    km === "30001"
      ? "30 000+ km/year"
      : `${parseInt(km).toLocaleString()} km/year`;

  const formattedCost = `$${annualCost.toLocaleString("en-AU")}`;

  return (
    <section
      style={{
        background: "#1e3d1a",
        borderRadius: "32px",
        margin: "0 auto",
        maxWidth: "100%",
        fontFamily: "'Inter','Segoe UI',Arial,sans-serif",
        padding: "72px 24px 80px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2.5px",
            color: "#c8e86b",
            textTransform: "uppercase",
            margin: "0 0 20px",
          }}
        >
          COST ESTIMATOR
        </p>

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 50px)",
            fontWeight: "800",
            lineHeight: "1.2",
            margin: "0 0 24px",
            color: "#fff",
          }}
        >
          What Could Your Car{" "}
          <span style={{ color: "#c8e86b", display: "block" }}>
            Be Costing You to Run?
          </span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: "1.75",
            maxWidth: "620px",
            margin: "0 auto 52px",
          }}
        >
          Select your vehicle type and typical annual kilometres for a rough
          estimate. All figures are indicative only — individual running costs
          vary based on driving style, location, insurer, and vehicle condition.
        </p>

        {/* Two dropdowns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                color: "#fff",
                fontWeight: "700",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Your current fuel type
            </label>
            <CustomSelect
              options={fuelTypes.map((f) => ({
                value: f.value,
                label: f.label,
              }))}
              value={fuel}
              onChange={setFuel}
              placeholder="Select fuel type"
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                color: "#fff",
                fontWeight: "700",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Annual kilometres driven
            </label>
            <CustomSelect
              options={kmOptions.map((k) => ({
                value: k.value,
                label: k.label,
              }))}
              value={km}
              onChange={setKm}
              placeholder="Select annual km"
            />
          </div>
        </div>

        {/* Result Card */}
        <div
          style={{
            border: "1.5px solid rgba(255,255,255,0.18)",
            borderRadius: "20px",
            padding: "44px 32px 40px",
            textAlign: "center",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            YOUR ESTIMATED ANNUAL RUNNING COST
          </p>

          <p
            style={{
              fontSize: "clamp(52px, 8vw, 88px)",
              fontWeight: "800",
              color: "#c8e86b",
              lineHeight: "1",
              margin: "0 0 24px",
              letterSpacing: "-2px",
            }}
          >
            {formattedCost}
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "1.8",
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            Estimate · {fuelData.desc} · {kmLabel} · Individual costs vary
            significantly
            {fuelData.value !== "electric" && evSaving > 0
              ? ` · Estimated potential saving against EV: ~$${evSaving.toLocaleString(
                  "en-AU"
                )}/yr`
              : ""}
            {` · That's roughly equivalent to ${fuelData.groceryWeeks} weeks of average grocery bills per year`}
          </p>

          <button
            style={{
              background: "#c8e86b",
              border: "none",
              borderRadius: "50px",
              padding: "18px 44px",
              fontWeight: "800",
              fontSize: "17px",
              color: "#1a2a1a",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#b5d45a";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c8e86b";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Cars &amp; Estimated Savings →
          </button>
        </div>
      </div>
    </section>
  );
}