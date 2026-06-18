import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

export default function FAQ() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredBack, setHoveredBack] = useState(false)

  // Manage multiple expanded questions simultaneously
  // Start with all questions collapsed by default
  const [expandedIds, setExpandedIds] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleQuestion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(item => item !== id))
    } else {
      setExpandedIds([...expandedIds, id])
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  // FAQ Content Database
  const faqs = [
    {
      id: 1,
      question: "What is Carreb?",
      customContent: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: '#496158' }}>
            Carreb is a revolutionary AI-powered platform that reveals the true cost of owning a new car — financially and environmentally. It’s not a car review site, and it doesn’t sell vehicles. Instead, Carreb uses real-world data, smart modelling, and user inputs to help you make confident, cost-effective, and climate-conscious decisions.
          </p>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: '#496158' }}>
            Choosing a new car today is more confusing than ever! Over 200 new EV models are expected by 2026, and in Australia alone, buyers already face over 400 vehicle choices across 60 brands, spanning seven different fuel types. From petrol and diesel to plug-in hybrids and hydrogen, it’s a landscape flooded with incentives, marketing spin, and emissions claims that rarely match real-world outcomes.
          </p>
        </div>
      )
    },
    {
      id: 2,
      question: "Why Carreb? Simple. Trustworthy. Fast.",
      customContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: '32px',
          alignItems: 'flex-start',
          width: '100%'
        }}>
          {/* Left Column */}
          <div style={{ flex: '1.1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: '#496158' }}>
              <strong>Spend Less on Cars. Save More for Life.</strong> Buying a car today feels overwhelming—hundreds of models, complex costs, and too many conflicting opinions. Add cost-of-living pressures, and the wrong choice could set you back years on the things that matter most—your home deposit, holidays, or savings.
            </p>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: '#496158' }}>
              Carreb cuts through the chaos. We don’t just give you answers; we give you clarity you can trust, in seconds—not hours, not spreadsheets, and definitely not guesswork.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
              <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#111E18' }}>Here’s how Carreb puts you in control:</p>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px' }}>📊</span>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#111E18' }}>Cost of Ownership (COO)</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#496158', lineHeight: '1.5' }}>Total expected spend over time, including fuel or energy, servicing, insurance, and optional finance.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px' }}>🌱</span>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#111E18' }}>CO₂ Emissions</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#496158', lineHeight: '1.5' }}>Tailored to your location, vehicle type, and energy source — even home solar.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px' }}>💸</span>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#111E18' }}>Your Estimated Savings</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#496158', lineHeight: '1.5' }}>See how much you could potentially save compared to your current vehicle, annually or over five years.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px' }}>🎛️</span>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#111E18' }}>CORE Dial™</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#496158', lineHeight: '1.5' }}>An interactive tool that lets you prioritise what matters most to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Trust Advantage Table */}
          <div style={{ 
            flex: '0.9', 
            width: '100%', 
            border: '1px solid #C3D8CB', 
            borderRadius: '16px', 
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(36, 64, 52, 0.04)'
          }}>
            {/* Table Header Accent */}
            <div style={{ 
              backgroundColor: '#C2E861', 
              padding: '16px 20px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: '1px solid #C3D8CB'
            }}>
              <img 
                src="https://carreb1.vercel.app/assets/Images/logo.png" 
                alt="Carreb Logo" 
                style={{ height: '16px', objectFit: 'contain' }}
              />
              <span style={{ fontWeight: '800', color: '#111E18', fontSize: '14px', fontFamily: '"Outfit", sans-serif' }}>
                The Trust Advantage
              </span>
            </div>

            {/* Comparison Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #EBF2F0' }}>
                  <th style={{ padding: '12px 14px', fontSize: '12px', color: '#899E95', fontWeight: '700' }}>FEATURE</th>
                  <th style={{ padding: '12px 14px', fontSize: '12px', color: '#111E18', fontWeight: '700', textAlign: 'center' }}>🤖 Generic AI</th>
                  <th style={{ padding: '12px 14px', fontSize: '12px', color: '#111E18', fontWeight: '700', backgroundColor: '#F3FAF7', textAlign: 'center' }}>
                    <img 
                      src="https://carreb1.vercel.app/assets/Images/logo.png" 
                      alt="Carreb" 
                      style={{ height: '12px', verticalAlign: 'middle' }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #EBF2F0' }}>
                  <td style={{ padding: '14px', fontSize: '13px', fontWeight: '700', color: '#111E18', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#244034" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Source Reliability
                  </td>
                  <td style={{ padding: '14px', fontSize: '13px', color: '#496158', textAlign: 'center' }}>🤷 Unknown</td>
                  <td style={{ padding: '14px', fontSize: '13px', fontWeight: '700', color: '#1C3127', backgroundColor: '#F3FAF7' }}>
                    Verified Data<br/><span style={{ fontSize: '11px', color: '#899E95', fontWeight: '500' }}>(Govt. + Market)</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EBF2F0' }}>
                  <td style={{ padding: '14px', fontSize: '13px', fontWeight: '700', color: '#111E18', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#244034" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    Answer Consistency
                  </td>
                  <td style={{ padding: '14px', fontSize: '13px', color: '#496158', textAlign: 'center' }}>😵 Different answer every time</td>
                  <td style={{ padding: '14px', fontSize: '13px', fontWeight: '700', color: '#1C3127', backgroundColor: '#F3FAF7' }}>
                    100% Consistent
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '14px', fontSize: '13px', fontWeight: '700', color: '#111E18', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#244034" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                    Decision Tools
                  </td>
                  <td style={{ padding: '14px', fontSize: '13px', color: '#496158', textAlign: 'center' }}>😔 None</td>
                  <td style={{ padding: '14px', fontSize: '12px', color: '#1C3127', backgroundColor: '#F3FAF7', lineHeight: '1.4' }}>
                    <ul style={{ margin: 0, paddingLeft: '14px' }}>
                      <li>CORE Rating</li>
                      <li>CORE Dial</li>
                      <li>RideReveal</li>
                      <li>Cost of Ownership (COO)</li>
                      <li>CO₂ Impact & Cost</li>
                      <li>Monthly Savings</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 3,
      question: "What are the different cost views?",
      answer: "Carreb offers multiple cost views (e.g. annual, monthly, or 5-year costs) to help you see the complete picture of ownership including depreciation, fuel, servicing, and insurance, rather than just the purchase price."
    },
    {
      id: 4,
      question: "How many Vehicles can I compare?",
      answer: "You can compare multiple vehicles side-by-side to understand the relative difference in their long-term ownership costs and environmental impact."
    },
    {
      id: 5,
      question: "Do you single out specific brands or models?",
      answer: "No, Carreb is entirely brand-agnostic. We do not receive commissions from brands and present comparison data based strictly on official specifications, certification data, and objective modeling."
    },
    {
      id: 6,
      question: "Are you biased toward electric cars or trying to promote them?",
      answer: "We are not biased towards any fuel type. Our goal is to provide transparent data so you can compare electric, hybrid, petrol, and diesel vehicles side-by-side based on your actual driving habits and local utility rates."
    },
    {
      id: 7,
      question: "What if I disagree with your numbers?",
      answer: "You can fully customize all assumptions—including fuel prices, charging rates, insurance costs, and annual mileage—in MyGarage to make the results perfectly match your personal situation."
    },
    {
      id: 8,
      question: "Isn’t this making buying a car too complicated?",
      answer: "By consolidating multiple hidden costs into one simple, interactive dashboard, we actually make buying a car much simpler and protect you from unexpected expenses down the road."
    },
    {
      id: 9,
      question: "What is Spotlights?",
      answer: "Spotlights are badges awarded to vehicles that perform exceptionally well in specific categories, such as lowest running costs, highest fuel efficiency, or lowest environmental footprint."
    },
    {
      id: 10,
      question: "Is Carreb free?",
      answer: "Yes! Carreb is completely free for car buyers to search, compare, and model ownership costs."
    },
    {
      id: 11,
      question: "Are you sponsored or funded by brands?",
      answer: "No. We do not receive sponsorship, referral fees, or advertising revenue from vehicle manufacturers or dealerships. This ensures our ratings remain 100% unbiased."
    },
    {
      id: 12,
      question: "How does Carreb ensure fair and accurate vehicle comparisons for all brands?",
      answer: "We apply the exact same mathematical modeling and certified laboratory data to all vehicles, ensuring that all comparisons are fair, uniform, and based on objective criteria."
    },
    {
      id: 13,
      question: "What kind of data can manufacturers and dealers provide to improve Carreb’s comparisons?",
      answer: "Manufacturers and dealers can provide updated specification data, accurate local pricing details, and verified servicing schedules to make our cost estimates even more precise."
    },
    {
      id: 14,
      question: "How will Carreb use this data?",
      answer: "Any data provided by manufacturers or dealers is only used to populate vehicle profile details and ensure that our comparison engine has the most up-to-date and accurate specifications."
    }
  ]

  // Premium Inline Styling System
  const styles = {
    outer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#FAFCFB',
      fontFamily: '"Outfit", "Inter", sans-serif',
      boxSizing: 'border-box',
    },
    contentArea: {
      flex: 1,
      maxWidth: '1100px',
      width: '100%',
      margin: '0 auto',
      padding: isMobile ? '32px 16px 80px' : '48px 24px 100px',
      boxSizing: 'border-box',
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#111E18',
      fontSize: '15px',
      fontWeight: '700',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0,
      marginBottom: '32px',
      transition: 'opacity 0.2s ease, transform 0.2s ease',
      opacity: hoveredBack ? 0.7 : 1,
      transform: hoveredBack ? 'translateX(-3px)' : 'none',
    },
    titleSection: {
      textAlign: 'center',
      marginBottom: '48px',
    },
    title: {
      fontSize: isMobile ? '32px' : '44px',
      fontWeight: '800',
      color: '#111E18',
      letterSpacing: '-0.5px',
      marginBottom: '16px',
    },
    subtitle: {
      fontSize: '16px',
      color: '#496158',
      maxWidth: '650px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    accordionContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #EBF2F0',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    },
    accordionItem: (isLast) => ({
      borderBottom: isLast ? 'none' : '1px solid #EBF2F0',
      transition: 'background-color 0.2s ease',
    }),
    itemHeader: (isOpen) => ({
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 32px',
      backgroundColor: isOpen ? '#FAFCFB' : '#ffffff',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.2s ease',
    }),
    itemTitle: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '700',
      color: '#111E18',
      lineHeight: '1.4',
    },
    itemArrow: (isOpen) => ({
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      color: '#111E18',
      flexShrink: 0,
    }),
    itemBody: {
      padding: '0 32px 28px',
      backgroundColor: '#ffffff',
      fontSize: '15px',
      color: '#496158',
      lineHeight: '1.7',
    }
  }

  return (
    <div style={styles.outer}>
      <div style={styles.contentArea}>
        {/* Back Link */}
        <button 
          style={styles.backButton}
          onClick={handleBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to [home]
        </button>

        {/* Title Block */}
        <div style={styles.titleSection}>
          <h1 style={styles.title}>Frequently Asked Questions</h1>
          <p style={styles.subtitle}>
            Discover how our platform simplifies vehicle purchasing for everyone, making it accessible and straightforward.
          </p>
        </div>

        {/* Unified Accordion list */}
        <div style={styles.accordionContainer}>
          {faqs.map((faq, index) => {
            const isOpen = expandedIds.includes(faq.id)
            const isLast = index === faqs.length - 1

            return (
              <div key={faq.id} style={styles.accordionItem(isLast)}>
                <button 
                  style={styles.itemHeader(isOpen)} 
                  onClick={() => toggleQuestion(faq.id)}
                >
                  <span style={styles.itemTitle}>{faq.question}</span>
                  <div style={styles.itemArrow(isOpen)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div style={styles.itemBody}>
                    {faq.customContent ? (
                      faq.customContent
                    ) : (
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Render the standard footer at the bottom without CTA Banner */}
      <Footer showCta={false} />
    </div>
  )
}
