import React from "react";

export default function Buying() {
  return (
    <>
      <style>{`
        .buying-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 480px;
          background-color: #ffffff;
          overflow: hidden;
          padding: 60px 6vw;
          box-sizing: border-box;
          gap: 40px;
        }

        .buying-hero-left {
          flex: 1;
          max-width: 560px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .buying-hero-heading {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 900;
          line-height: 1.1;
          color: #1a1a1a;
          margin: 0;
        }

        .buying-hero-heading span {
          color: #8ab840;
          display: block;
        }

        .buying-hero-sub {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          color: #444444;
          line-height: 1.7;
          margin: 0;
          max-width: 480px;
        }

        .buying-hero-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .buying-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: #8ab840;
          color: #1a1a1a;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 20px 14px 24px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s;
        }

        .buying-btn-primary:hover {
          background-color: #79a332;
        }

        .buying-btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #1a1a1a;
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 16px;
          flex-shrink: 0;
        }

        .buying-btn-secondary {
          display: inline-flex;
          align-items: center;
          background-color: transparent;
          color: #1a1a1a;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 50px;
          border: 2px solid #1a1a1a;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s, color 0.2s;
        }

        .buying-btn-secondary:hover {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .buying-hero-right {
          flex: 1;
          max-width: 600px;
          min-width: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .buying-hero-img-wrapper {
          position: relative;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
        }

        .buying-hero-img-wrapper::before {
          content: '';
          position: absolute;
          top: -30px;
          left: -30px;
          width: 220px;
          height: 220px;
          background-color: #8ab840;
          border-radius: 50%;
          z-index: 0;
        }

        .buying-hero-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          border-radius: 24px;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .buying-hero {
            flex-direction: column;
            padding: 40px 20px 48px;
            gap: 32px;
            min-height: unset;
          }

          .buying-hero-left {
            max-width: 100%;
            order: 1;
          }

          .buying-hero-right {
            max-width: 100%;
            width: 100%;
            order: 0;
          }

          .buying-hero-img-wrapper::before {
            width: 140px;
            height: 140px;
            top: -20px;
            left: -20px;
          }
        }

        @media (max-width: 480px) {
          .buying-btn-primary,
          .buying-btn-secondary {
            font-size: 14px;
            padding: 12px 20px;
          }

          .buying-hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="buying-hero">
        {/* Left Content */}
        <div className="buying-hero-left">
          <h1 className="buying-hero-heading">
            Buying a car blind is
            <span>expensive<br />guessing.</span>
          </h1>

          <p className="buying-hero-sub">
            Carreb shows you the estimated 5-year cost of every new car in Australia — fuel,
            insurance, servicing, depreciation &amp; CO₂ — before you sign anything. 100%
            independent.
          </p>

          <div className="buying-hero-buttons">
            <a href="#" className="buying-btn-primary">
              Find my car match
              <span className="buying-btn-arrow">→</span>
            </a>
            <a href="#" className="buying-btn-secondary">
              See how it works
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="buying-hero-right">
          <div className="buying-hero-img-wrapper">
            <img
              src="https://carreb1.vercel.app/assets/Images/banner.png"
              alt="Couple in car with Sydney Opera House in background"
              className="buying-hero-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}