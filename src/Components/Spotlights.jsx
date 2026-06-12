const badges = [
  {
    id: 1,
    name: "Green & Lean",
    desc: "Low emissions. Lower cost",
    color: "#4caf50",
    bg: "#e8f5e9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34C3.29 20.12 3.5 21.18 4.28 21.71C5.06 22.24 6.12 22.03 6.65 21.25C6.65 21.25 8 19 12 19C18 19 21 14 21 8C21 8 20 8 17 8Z" fill="#4caf50"/>
        <circle cx="9" cy="14" r="2" fill="#2e7d32"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Range Kings",
    desc: "Go further for less, always",
    color: "#1565c0",
    bg: "#e3f2fd",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" fill="#1565c0"/>
        <path d="M5 19h14v2H5z" fill="#1565c0"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Category Sweep",
    desc: "Top ownership picks by class",
    color: "#e65100",
    bg: "#fff3e0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#e65100"/>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Unicorn Match",
    desc: "Beats your car in cost + value",
    color: "#7b1fa2",
    bg: "#f3e5f5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C12 3 7 7 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 7 12 3 12 3Z" fill="#7b1fa2"/>
        <path d="M12 3L15 8H9L12 3Z" fill="#ab47bc"/>
        <circle cx="10" cy="11" r="1" fill="white"/>
      </svg>
    ),
  },
];

const allStarBadge = {
  name: "CORE All-Stars",
  desc: "4★+ across all rating modes",
  color: "#1a237e",
  bg: "#e8eaf6",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1a237e" strokeWidth="2" fill="none"/>
    </svg>
  ),
};

function BadgeCard({ badge, style }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: badge.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {badge.icon}
      </div>
      <div>
        <div
          style={{
            fontWeight: "700",
            fontSize: "15px",
            color: badge.color,
            marginBottom: "2px",
          }}
        >
          {badge.name}
        </div>
        <div style={{ fontSize: "13px", color: "#666" }}>{badge.desc}</div>
      </div>
    </div>
  );
}

export default function Spotlights() {
  return (
    <>
      {/* ── SECTION 1: Carreb Spotlights ── */}
      <section
        style={{
          background: "#eef3f0",
          fontFamily: "'Inter','Segoe UI',Arial,sans-serif",
          padding: "72px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "56px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* LEFT — badge grid */}
          <div
            style={{
              flex: "1 1 340px",
              maxWidth: "520px",
              background: "#fff",
              borderRadius: "24px",
              padding: "32px 28px 28px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              boxSizing: "border-box",
            }}
          >
            {/* 2×2 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginBottom: "14px",
              }}
            >
              {badges.map((b) => (
                <BadgeCard key={b.id} badge={b} />
              ))}
            </div>
            {/* 5th centred */}
            <div
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BadgeCard
                badge={allStarBadge}
                style={{ width: "100%", maxWidth: "260px" }}
              />
            </div>
          </div>

          {/* RIGHT — text */}
          <div style={{ flex: "1 1 300px", maxWidth: "480px" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#7ab648",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              CARREB SPOTLIGHTS™
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "800",
                color: "#1a2a1a",
                lineHeight: "1.2",
                margin: "0 0 20px",
              }}
            >
              Five Badges. Every Buyer Motivation Covered.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.75",
                margin: "0 0 36px",
              }}
            >
              Every buyer has a different priority. Spotlights™ cut through the
              noise and surface the vehicles that win in the categories that
              matter to you — using independent CORE™ data, not manufacturer
              claims.
            </p>
            <button
              style={{
                background: "#c8e86b",
                border: "none",
                borderRadius: "50px",
                padding: "16px 36px",
                fontWeight: "800",
                fontSize: "16px",
                color: "#1a2a1a",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#b5d45a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c8e86b")
              }
            >
              Discover Spotlights™ →
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: RideReveal ── */}
      <section
        style={{
          background: "#fff",
          fontFamily: "'Inter','Segoe UI',Arial,sans-serif",
          padding: "80px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "56px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* LEFT — text */}
          <div style={{ flex: "1 1 300px", maxWidth: "480px" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#7ab648",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              RIDEREVEAL™
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "800",
                color: "#1a2a1a",
                lineHeight: "1.2",
                margin: "0 0 20px",
              }}
            >
              Your car says more about you than you think.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.75",
                margin: "0 0 16px",
              }}
            >
              Your car is more than transport. It's a statement about you,
              revealing:
            </p>
            <ul
              style={{
                margin: "0 0 20px 0",
                paddingLeft: "20px",
                fontSize: "16px",
                color: "#444",
                lineHeight: "2",
              }}
            >
              <li>How your choices reflect your personality.</li>
              <li>How others might see you.</li>
              <li>Insights to make a choice that feels truly you.</li>
            </ul>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.75",
                margin: "0 0 36px",
              }}
            >
              RideReveal uses psychographic modelling and behavioural science
              into a personality profile — from pragmatic minimalists to
              future-forward idealists.
            </p>
            <button
              style={{
                background: "#c8e86b",
                border: "none",
                borderRadius: "50px",
                padding: "16px 36px",
                fontWeight: "800",
                fontSize: "16px",
                color: "#1a2a1a",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#b5d45a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c8e86b")
              }
            >
              Try RideReveal →
            </button>
          </div>

          {/* RIGHT — photo */}
          <div
            style={{
              flex: "1 1 340px",
              maxWidth: "540px",
            }}
          >
            <img
              src="https://carreb1.vercel.app/assets/Images/homebox3img.png"
              alt="People enjoying RideReveal on a phone"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "24px",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}