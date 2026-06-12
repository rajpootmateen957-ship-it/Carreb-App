import { useState } from "react";

const tabs = [
  { id: "core", label: "This CORE™ Rating" },
  { id: "spotlights", label: "Carreb Spotlights™" },
  { id: "riderossian", label: "RideRossian™" },
];

const tabContent = {
  core: {
    eyebrow: "THE CORE™ RATING",
    heading: (
      <>
        One Number. Greater Clarity.
        <br />
        Every Vehicle. Every Buyer.
      </>
    ),
    body: (
      <>
        <strong>CORE™ Rating</strong> — Cost of Ownership and Responsible
        Emission, combines everything the sticker price leaves out — estimated
        fuel, servicing, insurance, registration, depreciation, and indicative
        CO₂ emissions — into a single 1–5 star score. Enter your current car and
        see the estimated annual cost difference against any new vehicle you're
        considering. One number. Instant clarity. Based on Australian Government
        data, applied independently.
      </>
    ),
    cta: "Get my free CORE™ Rating →",
    image: "https://carreb1.vercel.app/assets/Images/tabbox-img1.png",
  },
  spotlights: {
    eyebrow: "CARREB SPOTLIGHTS",
    heading: (
      <>
        Deep Dives on What Matters
        <br />
        Most.
      </>
    ),
    body: (
      <>
        Beyond the headline numbers. Carreb Spotlights gives you expert insight
        on EV charging infrastructure, real fuel efficiency comparisons,
        insurance band changes, and more.
      </>
    ),
    cta: "Explore Spotlights →",
    image: "https://carreb1.vercel.app/assets/Images/tabbox-img2.png",
  },
  riderossian: {
    eyebrow: "RIDEROSSIAN",
    heading: <>Your Personal Cost Comparison.</>,
    body: (
      <>
        Input your current vehicle details and select a new car. RideRossian
        compares the estimated total cost of ownership and shows the potential
        savings or costs over 5 years.
      </>
    ),
    cta: "Start comparing →",
    image: "https://carreb1.vercel.app/assets/Images/tabbox-img3.png",
  },
};

export default function Features() {
  const [activeTab, setActiveTab] = useState("core");
  const [imgError, setImgError] = useState({});
  const content = tabContent[activeTab];

  const handleImgError = (tabId) => {
    setImgError((prev) => ({ ...prev, [tabId]: true }));
  };

  return (
    <section
      style={{
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "2px",
            color: "#7ab648",
            textTransform: "uppercase",
            marginBottom: "16px",
            margin: "0 0 16px",
          }}
        >
          FEATURES
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: "800",
            color: "#1a2a1a",
            lineHeight: "1.2",
            margin: "0",
          }}
        >
          Every number that matters.{" "}
          <span style={{ color: "#7ab648", display: "block" }}>
            None that don't.
          </span>
        </h2>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "56px",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "14px 32px",
              borderRadius: "50px",
              border:
                activeTab === tab.id
                  ? "2px solid #7ab648"
                  : "1.5px solid #ddd",
              background: activeTab === tab.id ? "#c8e86b" : "#fff",
              color: "#1a2a1a",
              fontWeight: "700",
              fontSize: "15px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              outline: "none",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Left text */}
        <div style={{ flex: "1 1 320px", maxWidth: "520px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#7ab648",
              textTransform: "uppercase",
              marginBottom: "12px",
              margin: "0 0 12px",
            }}
          >
            {content.eyebrow}
          </p>
          <h3
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: "800",
              color: "#1a2a1a",
              lineHeight: "1.2",
              margin: "0 0 20px",
            }}
          >
            {content.heading}
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.7",
              margin: "0 0 32px",
            }}
          >
            {content.body}
          </p>
          <button
            style={{
              background: "#c8e86b",
              border: "none",
              borderRadius: "50px",
              padding: "16px 32px",
              fontWeight: "800",
              fontSize: "16px",
              color: "#1a2a1a",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#b5d45a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#c8e86b")
            }
          >
            {content.cta}
          </button>
        </div>

        {/* Right image */}
        <div
          style={{
            flex: "1 1 300px",
            maxWidth: "420px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#eef3f0",
              borderRadius: "24px",
              padding: "16px",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "320px",
            }}
          >
            {!imgError[activeTab] ? (
              <img
                key={activeTab}
                src={content.image}
                alt={content.eyebrow}
                onError={() => handleImgError(activeTab)}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                  display: "block",
                  objectFit: "contain",
                  maxHeight: "420px",
                  transition: "opacity 0.3s ease",
                }}
              />
            ) : (
              /* Fallback: inline SVG badge if image fails */
              <FallbackBadge />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FallbackBadge() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      {/* Arc */}
      <svg viewBox="0 0 260 150" width="260" height="150">
        <path
          d="M20,140 A110,110 0 0,1 240,140"
          fill="none"
          stroke="#f4b8c8"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M44,140 A86,86 0 0,1 216,140"
          fill="none"
          stroke="#c8e86b"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <text x="185" y="50" fontSize="13" fontWeight="600" fill="#333">
          $5,203/yr
        </text>
        <text x="168" y="90" fontSize="13" fontWeight="600" fill="#333">
          145kg/yr
        </text>
      </svg>
      <div
        style={{
          background: "linear-gradient(160deg,#4a7c3f,#2d5a27)",
          borderRadius: "16px",
          padding: "20px 32px",
          textAlign: "center",
          width: "80%",
          marginTop: "-20px",
        }}
      >
        <div style={{ color: "#fff", fontSize: "24px", fontWeight: "800" }}>
          CORE<sup>TM</sup>
        </div>
        <div
          style={{
            color: "#fff",
            fontSize: "18px",
            fontWeight: "700",
            marginTop: "4px",
          }}
        >
          3.5 ★★★★☆
        </div>
      </div>
      {[
        { label: "CORE Rating (1 - 5)", value: "3.5", bg: "#2d5a27", c: "#c8e86b", vc: "#fff" },
        { label: "CO₂ Emissions", value: "145 kg p.a", bg: "#c8e86b", c: "#2d5a27", vc: "#2d5a27" },
        { label: "Cost Of Ownership (COO)", value: "$5,203 p.a", bg: "#f4b8c8", c: "#c0376a", vc: "#c0376a" },
      ].map((r, i) => (
        <div
          key={i}
          style={{
            background: r.bg,
            borderRadius: "10px",
            padding: "10px 16px",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginTop: "8px",
            boxSizing: "border-box",
          }}
        >
          <span style={{ fontSize: "13px", color: r.c, fontWeight: "500" }}>
            {r.label}
          </span>
          <span style={{ fontSize: "13px", color: r.vc, fontWeight: "700" }}>
            {r.value}
          </span>
        </div>
      ))}
    </div>
  );
}