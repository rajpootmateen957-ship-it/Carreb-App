import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "I never thought a car decision could change my finances — but Carreb helped me save $2,000 and finally plan my next trip.",
    name: "Hannah Schmitt",
    location: "Sydney",
    date: "May 8, 2020",
    avatar: "https://carreb1.vercel.app/assets/Images/slider-avater1.png",
  },
  {
    id: 2,
    quote: "Amazing service — helped me choose the right car.",
    name: "John Doe",
    location: "Melbourne",
    date: "Jun 1, 2021",
    avatar: "https://carreb1.vercel.app/assets/Images/slider-avater1.png",
  },
  {
    id: 3,
    quote: "Great experience — recommend to everyone.",
    name: "Jane Smith",
    location: "Brisbane",
    date: "Aug 12, 2022",
    avatar: "https://carreb1.vercel.app/assets/Images/slider-avater1.png",
  },
];

export default function Users() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const { quote, name, location, date, avatar } = testimonials[current];

  const styles = {
    section: {
      width: "100%",
      padding: "60px 20px",
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "clamp(28px, 5vw, 42px)",
      fontWeight: "800",
      color: "#111111",
      margin: "0 0 12px 0",
      lineHeight: "1.2",
    },
    subheading: {
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 16px)",
      color: "#666666",
      margin: "0 0 40px 0",
    },
    sliderWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    arrowBtn: {
      flexShrink: 0,
      width: "48px",
      height: "48px",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
      backgroundColor: "#ffffff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      color: "#333333",
      transition: "background-color 0.2s",
    },
    card: {
      flex: "1",
      maxWidth: "860px",
      backgroundColor: "#ffffff",
      border: "1px solid #e8e8e8",
      borderRadius: "16px",
      padding: "clamp(24px, 4vw, 48px)",
      boxSizing: "border-box",
      minHeight: "180px",
    },
    quoteText: {
      fontSize: "clamp(16px, 2.5vw, 22px)",
      fontWeight: "400",
      color: "#111111",
      lineHeight: "1.55",
      margin: "0 0 28px 0",
    },
    authorRow: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    avatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      objectFit: "cover",
      flexShrink: 0,
    },
    authorName: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#111111",
      margin: "0 0 2px 0",
    },
    authorDate: {
      fontSize: "13px",
      color: "#999999",
      margin: 0,
    },
    dotsWrapper: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      marginTop: "28px",
    },
    dot: (active) => ({
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: active ? "#111111" : "#d0d0d0",
      border: "none",
      padding: 0,
      cursor: "pointer",
      transition: "background-color 0.2s",
    }),
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What Our Users Say</h2>
      <p style={styles.subheading}>
        Join thousands of smart car buyers who've made better decisions with
        Carreb.
      </p>

      <div style={styles.sliderWrapper}>
        {/* Left Arrow */}
        <button
          style={styles.arrowBtn}
          onClick={prev}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        {/* Card */}
        <div style={styles.card}>
          <p style={styles.quoteText}>"{quote}"</p>
          <div style={styles.authorRow}>
            <img src={avatar} alt={name} style={styles.avatar} />
            <div>
              <p style={styles.authorName}>
                {name}, {location}
              </p>
              <p style={styles.authorDate}>{date}</p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          style={styles.arrowBtn}
          onClick={next}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div style={styles.dotsWrapper}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            style={styles.dot(i === current)}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
