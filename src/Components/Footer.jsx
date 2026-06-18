export default function Footer() {
  return (
    <>
      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#1e3d2f",
          padding: "90px 24px",
          boxSizing: "border-box",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* TOP-LEFT corner concentric dashed arcs */}
        <svg
          style={{ position: "absolute", left: "-60px", top: "-60px", pointerEvents: "none" }}
          width="400" height="400" viewBox="0 0 400 400" fill="none"
        >
          <circle cx="400" cy="400" r="300" stroke="#3a6b50" strokeWidth="40" fill="none" strokeDasharray="100 60" strokeLinecap="round"/>
          <circle cx="400" cy="400" r="215" stroke="#3a6b50" strokeWidth="32" fill="none" strokeDasharray="80 52" strokeLinecap="round"/>
          <circle cx="400" cy="400" r="138" stroke="#3a6b50" strokeWidth="26" fill="none" strokeDasharray="62 46" strokeLinecap="round"/>
        </svg>

        {/* BOTTOM-RIGHT corner concentric dashed arcs */}
        <svg
          style={{ position: "absolute", right: "-60px", bottom: "-60px", pointerEvents: "none" }}
          width="400" height="400" viewBox="0 0 400 400" fill="none"
        >
          <circle cx="0" cy="0" r="300" stroke="#3a6b50" strokeWidth="40" fill="none" strokeDasharray="100 60" strokeLinecap="round"/>
          <circle cx="0" cy="0" r="215" stroke="#3a6b50" strokeWidth="32" fill="none" strokeDasharray="80 52" strokeLinecap="round"/>
          <circle cx="0" cy="0" r="138" stroke="#3a6b50" strokeWidth="26" fill="none" strokeDasharray="62 46" strokeLinecap="round"/>
        </svg>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "860px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 50px)",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: "1.2",
              margin: "0 0 6px",
            }}
          >
            Your next car is a big decision.
          </h2>
          <h2
            style={{
              fontSize: "clamp(22px, 3.8vw, 48px)",
              fontWeight: "800",
              color: "#8dc63f",
              lineHeight: "1.2",
              margin: "0 0 22px",
            }}
          >
            Make it with the numbers that actually matter.
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "#a8c8a8",
              maxWidth: "420px",
              margin: "0 auto 34px",
              lineHeight: "1.65",
            }}
          >
            Get your estimated CORE™ Rating in 60 seconds. Free to start. No
            credit card. No manufacturer ties.
          </p>

          {/* Split CTA button */}
          <div style={{ display: "inline-flex", borderRadius: "10px", overflow: "hidden" }}>
            <span
              style={{
                backgroundColor: "#8dc63f",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontWeight: "800",
                color: "#1a1a1a",
                padding: "16px 28px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Discover your car match
            </span>
            <span
              style={{
                backgroundColor: "#ffffff",
                padding: "16px 20px",
                fontSize: "16px",
                fontWeight: "700",
                color: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              →
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
      >
        {/* Top row: logo + tagline */}
        <div
          style={{
            padding: "48px 48px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <img
            src="https://carreb1.vercel.app/assets/Images/logo.png"
            alt="Carreb"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#888",
              margin: 0,
              lineHeight: "1.65",
              textAlign: "right",
            }}
          >
            Smarter choices, more savings — in 30 seconds.
            <br />
            100% independent.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "0 48px" }} />

        {/* Middle: nav columns + social */}
        <div
          style={{
            padding: "36px 48px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {/* Nav columns */}
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: "800", color: "#1a1a1a", margin: "0 0 18px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Platform
              </p>
              {["MyGarage", "About Us", "Pricing", "FAQ", "Contact Us"].map((item) => (
                <p key={item} style={{ margin: "0 0 14px" }}>
                  <a href="#" style={{ fontSize: "15px", color: "#333", textDecoration: "none" }}>{item}</a>
                </p>
              ))}
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: "800", color: "#1a1a1a", margin: "0 0 18px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Legal
              </p>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <p key={item} style={{ margin: "0 0 14px" }}>
                  <a href="#" style={{ fontSize: "15px", color: "#333", textDecoration: "none" }}>{item}</a>
                </p>
              ))}
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {/* Instagram */}
            <a href="#" style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#1e3d2f", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.3" fill="white"/>
              </svg>
            </a>
            {/* X */}
            <a href="#" style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#1e3d2f", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#1e3d2f", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "0 48px" }} />

        {/* Bottom: copyright + disclaimer */}
        <div style={{ padding: "28px 48px 40px" }}>
          <p style={{ fontSize: "13px", color: "#555", margin: "0 0 16px", lineHeight: "1.5" }}>
            © 2026 Carreb Pty Ltd · ABN 13 686 120 892
          </p>
          <p style={{ fontSize: "13px", color: "#888", margin: "0 0 12px", lineHeight: "1.75", maxWidth: "1100px" }}>
            Disclaimer: Carreb is an editorially independent vehicle cost and emissions information service. We do not sell cars, review cars, or receive commissions, referral fees, or any payments from dealers, manufacturers, insurers, or car sales platforms. No dealer, manufacturer, or advertiser influences our CORE™ Ratings, cost estimates, or emissions data.
          </p>
          <p style={{ fontSize: "13px", color: "#888", margin: "0 0 12px", lineHeight: "1.75", maxWidth: "1100px" }}>
            All cost, savings, and emissions figures are indicative estimates based on publicly available data, including Australian Government sources, and Carreb's proprietary methodology. They are not guarantees of specific costs or outcomes, not statements of vehicle quality or reliability, and not financial, purchasing, or investment advice. CO₂ and fuel consumption figures are based on standardised laboratory test results — individual on-road results will differ based on driving conditions, load, and maintenance.
          </p>
          <p style={{ fontSize: "13px", color: "#888", margin: 0, lineHeight: "1.75", maxWidth: "1100px" }}>
            You should not rely solely on Carreb's estimates when making a vehicle purchase decision. Individual running costs vary significantly based on your location, driving behaviour, insurance profile, vehicle condition, and market conditions. We recommend obtaining independent quotes for insurance, finance, and servicing, and conducting your own research before purchasing any vehicle. Carreb does not guarantee the precision, completeness, or timeliness of any estimate and accepts no liability for decisions made in reliance on this information.
          </p>
        </div>
      </footer>
    </>
  );
}