import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Is Carreb only for new cars?",
    answer:
      "Yes. At launch, Carreb focuses exclusively on new vehicles to ensure the most consistent and reliable outputs. Used vehicle support is in development.",
  },
  {
    id: 2,
    question: "What is the CORE™ Rating?",
    answer:
      "The CORE™ Rating is Carreb's proprietary scoring system that evaluates vehicles across Cost, Ownership, Running, and Environmental dimensions — giving you a single, comparable score to cut through the noise of specs and marketing.",
  },
  {
    id: 3,
    question: "Who is Carreb for?",
    answer: (
      <div>
        <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Anyone seeking clarity beyond traditional car reviews, dealer specifications, and feature-focused resources. Carreb is particularly useful if you are:
        </p>
        <ul style={{ margin: "0 0 16px", paddingLeft: "20px", fontSize: "15px", lineHeight: "2", color: "#222" }}>
          <li>A first-time buyer wanting confidence, simplicity, and clear cost estimates.</li>
          <li>A family budgeting carefully, balancing affordability, safety, and space.</li>
          <li>A commuter aiming to reduce ongoing fuel and running costs.</li>
          <li>A retiree focused on reliability, stress-free ownership, and low maintenance expenses.</li>
          <li>An environmentally conscious driver exploring hybrids and EVs, wanting estimated tailpipe emissions insights.</li>
          <li>A fleet manager or small business owner looking for transparent, detailed cost analysis over the life of vehicles.</li>
        </ul>
        <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Carreb does not replace car reviews or dealer conversations — it complements them by filling gaps around estimated ownership costs, estimated tailpipe emissions impact, and potential long-term savings.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question: "How accurate are Carreb's numbers?",
    answer: (
      <div>
        <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Carreb's estimates are anchored to publicly available Australian data: Government certification data for fuel and energy consumption and tailpipe CO₂, manufacturer-published specifications and pricing, state-set values for registration and CTP, current Australian fuel and electricity reference data, and Australian benchmark data for cost categories that vary by location and circumstance (insurance and servicing being the clearest examples).
        </p>
        <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Where the data we use is laboratory-tested rather than real-world (the standard for emissions and fuel consumption certification globally), we present those figures as the standardised, comparable basis they are — actual on-road outcomes will differ. Where the data is time-sensitive (fuel prices, electricity tariffs), we time-stamp it so you can judge whether it is current.
        </p>
        <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          For first-time visitors who haven't set a current vehicle, Carreb applies a reasonable category-specific annual kilometre default drawn from Australian Bureau of Statistics data. All results are estimates only and should not be relied upon as the sole basis for any purchasing decision.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "Where do you get your tailpipe emissions data?",
    answer: (
      <div>
        <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Tailpipe CO₂ figures used in Carreb come from Australian Government certification data — primarily the Green Vehicle Guide — and are produced under the standardised laboratory test cycles that all new passenger vehicles sold in Australia are required to undergo. These cycles follow internationally recognised standards adopted here. Laboratory results are consistent and comparable across vehicles; real-world emissions vary with driving conditions, load, and maintenance.
        </p>
        <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          For battery electric and plug-in hybrid vehicles, the emissions that matter are upstream — the CO₂ generated to produce the electricity used to charge the vehicle. Carreb estimates these using the most recent National Greenhouse Accounts Factors for the vehicle's home state, the vehicle's certified energy consumption, and a reasonable annual driving distance for the category.
        </p>
        <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          If you charge from home solar, a 100% renewable electricity plan, or a time-of-use tariff, you can override the default in MyGarage to reflect your actual setup. Grid-intensity values are not real-time unless expressly stated; they are refreshed when the underlying government factors are updated.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "Can I trust Carreb's finance and resale numbers?",
    answer: (
      <div>
        <p style={{ margin: "0 0 16px", fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Estimated resale values are based on careful, cautious estimates of how much vehicles tend to lose their value over time, built from automotive resale trend data. Actual resale outcomes may vary significantly depending on brand, condition, mileage, demand, market cycles, and other factors. Finance cost estimates use default assumptions based on average consumer loan rates and terms as disclosed near the metric. You can customise both in MyGarage to better reflect your own financing or resale expectations.
        </p>
        <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.7", color: "#222" }}>
          Resale value and finance estimates are approximate only. They are not valuations, trade-in offers, credit assessments, or financial advice. Always obtain independent advice and dealer appraisals before making financial decisions.
        </p>
      </div>
    ),
  },
];

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Question Row */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 24px",
          backgroundColor: isOpen ? "#fff" : "transparent",
          border: isOpen ? "1px solid #1a1a1a" : "none",
          borderRadius: isOpen ? "6px 6px 0 0" : "0",
          cursor: "pointer",
          textAlign: "left",
          outline: "none",
          margin: isOpen ? "0" : "0",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: "700",
            color: "#1a1a1a",
            lineHeight: "1.4",
            paddingRight: "16px",
          }}
        >
          {faq.question}
        </span>
        <span
          style={{
            fontSize: "18px",
            color: "#1a1a1a",
            flexShrink: 0,
            lineHeight: "1",
          }}
        >
          {isOpen ? "∧" : "∨"}
        </span>
      </button>

      {/* Answer */}
      {isOpen && (
        <div
          style={{
            padding: "4px 24px 28px",
            backgroundColor: "#fff",
            border: "1px solid #1a1a1a",
            borderTop: "none",
            borderRadius: "0 0 6px 6px",
            boxSizing: "border-box",
          }}
        >
          {typeof faq.answer === "string" ? (
            <p
              style={{
                fontSize: "15px",
                color: "#222",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {faq.answer}
            </p>
          ) : (
            faq.answer
          )}
        </div>
      )}
    </div>
  );
}

export default function Question() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "72px 24px 80px",
        boxSizing: "border-box",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(32px, 5vw, 54px)",
          fontWeight: "800",
          color: "#1a1a1a",
          lineHeight: "1.15",
          margin: "0 0 56px",
        }}
      >
        Everything You
        <br />
        <span style={{ color: "#6aaa1e" }}>Need to Know.</span>
      </h2>

      {/* Accordion Container */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "16px",
          border: "1px solid #e8e8e8",
          overflow: "hidden",
        }}
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => toggle(faq.id)}
          />
        ))}
      </div>
    </section>
  );
}