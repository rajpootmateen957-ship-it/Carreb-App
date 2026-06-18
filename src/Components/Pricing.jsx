import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

export default function Pricing() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  // Plan Selection State
  // When null, we display the pricing cards grid. 
  // When set to a plan object, we display the Checkout form.
  const [selectedPlan, setSelectedPlan] = useState(null)

  // Hover states for premium micro-interactions
  const [hoveredBack, setHoveredBack] = useState(false)
  const [hoveredCardId, setHoveredCardId] = useState(null)
  const [hoveredPayBtn, setHoveredPayBtn] = useState(false)

  // Checkout Form States
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardName, setCardName] = useState('')
  const [saveDetails, setSaveDetails] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(true)

  // Focus states
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleBackToHome = () => {
    navigate('/')
  }

  const handleBackToPricing = () => {
    setSelectedPlan(null)
  }

  const handlePay = (e) => {
    e.preventDefault()
    if (!agreeTerms) {
      alert('Please agree to the Terms of Service.')
      return
    }
    alert(`Payment of ${selectedPlan.priceText} for ${selectedPlan.title} successful!`)
    setSelectedPlan(null)
  }

  // Plans Database
  const plans = [
    {
      id: 1,
      title: "Starter Access",
      badgeText: null,
      priceText: "Free",
      priceSub: null,
      desc: "Entry tier — designed to convert to paid.",
      btnText: "Start Free",
      features: [
        { text: "1 current vehicle", info: "Start modeling costs for one car." },
        { text: "5 matches", info: "Match against 5 models." },
        { text: "CORE Pure Cost only", info: "View basic direct fuel and energy costs." }
      ]
    },
    {
      id: 2,
      title: "Car Buying Sprint",
      badgeText: "ONE-TIME",
      priceText: "A$29.99",
      priceSub: "/one-time",
      desc: "Built for buyers actively shopping right now.",
      btnText: "Get the Sprint",
      features: [
        { text: "3 current vehicles · 15 matches", info: "Compare up to 3 cars at once with 15 matches." },
        { text: "All 4 CORE Modes", info: "Unlock Cost, Ownership, Running, and Environmental modes." },
        { text: "All 5 Spotlights™ included", info: "Get full spotlights on safety, green performance, and costs." },
        { text: "1 RideReveal™ free, then A$4.99/vehicle", info: "Unlock 1 free psychographic profiling session." }
      ]
    },
    {
      id: 3,
      title: "Core Advantage",
      badgeText: "ANNUAL",
      priceText: "A$143.90",
      priceSub: "/year",
      desc: "Recurring buyers, fleet-curious, families.",
      btnText: "Go Annual",
      features: [
        { text: "Unlimited matches", info: "No limit on matching and search results." },
        { text: "All 4 CORE Modes", info: "Access all Core modes anytime." },
        { text: "All 5 Spotlights™ included", info: "Full access to all Spotlight category badges." },
        { text: "4 RideReveals/yr then A$4.99/vehicle", info: "Get 4 profile matches included each year." },
        { text: "Quarterly Reports", info: "Quarterly vehicle valuation and cost trend reviews." }
      ]
    },
    {
      id: 4,
      title: "Full Insight Pro",
      badgeText: "PRO",
      priceText: "A$335.90",
      priceSub: "/year",
      desc: "Power users — the unlimited tier.",
      btnText: "Get Full Insight Pro",
      features: [
        { text: "Everything in CORE Annual", info: "All Core Advantage features included." },
        { text: "RideReveal™ unlimited included", info: "Never pay extra for vehicle profile matches." },
        { text: "All 5 Spotlights™ included", info: "Full spotlights on all current categories." },
        { text: "Early access . all future Spotlight categories", info: "Be the first to see new features and parameters." }
      ]
    }
  ]

  // Styles System
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
      maxWidth: '1200px',
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
    // Plans View Styles
    titleSection: {
      textAlign: 'center',
      marginBottom: '48px',
    },
    tagline: {
      fontSize: '13px',
      fontWeight: '800',
      color: '#496158',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      marginBottom: '12px',
    },
    title: {
      fontSize: isMobile ? '32px' : '48px',
      fontWeight: '800',
      color: '#111E18',
      letterSpacing: '-0.5px',
      marginBottom: '16px',
    },
    titleAccent: {
      color: '#8dc63f',
    },
    subtitle: {
      fontSize: '16px',
      color: '#496158',
      maxWidth: '750px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '24px',
      marginTop: '16px',
    },
    card: (isHovered, isPro) => ({
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      border: isPro ? '2px solid #244034' : '1px solid #EBF2F0',
      padding: '32px 24px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: isHovered ? '0 15px 35px rgba(36, 64, 52, 0.08)' : '0 4px 12px rgba(36, 64, 52, 0.02)',
      transform: isHovered ? 'translateY(-4px)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
    }),
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    cardTitle: {
      fontSize: '13px',
      fontWeight: '800',
      color: '#111E18',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    badge: (isPro) => ({
      fontSize: '11px',
      fontWeight: '800',
      padding: '4px 10px',
      borderRadius: '20px',
      border: isPro ? 'none' : '1px solid #C3D8CB',
      backgroundColor: isPro ? '#244034' : 'transparent',
      color: isPro ? '#ffffff' : '#496158',
    }),
    priceContainer: {
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'baseline',
    },
    price: {
      fontSize: '36px',
      fontWeight: '800',
      color: '#111E18',
      fontFamily: '"Outfit", sans-serif',
    },
    priceSubText: {
      fontSize: '14px',
      color: '#899E95',
      fontWeight: '500',
      marginLeft: '4px',
    },
    desc: {
      fontSize: '14px',
      color: '#496158',
      lineHeight: '1.5',
      marginBottom: '28px',
      minHeight: '42px',
    },
    actionBtn: (planId, isHovered) => {
      const isStarter = planId === 1
      return {
        width: '100%',
        padding: '14px 20px',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: isStarter ? '1px solid #C3D8CB' : 'none',
        backgroundColor: isStarter 
          ? (isHovered ? '#FAFCFB' : '#ffffff') 
          : (isHovered ? '#7db235' : '#8dc63f'),
        color: '#111E18',
        boxShadow: (!isStarter && isHovered) ? '0 4px 14px rgba(141, 198, 63, 0.3)' : 'none',
        transform: isHovered ? 'translateY(-1px)' : 'none',
        marginBottom: '28px',
      }
    },
    featuresContainer: {
      marginTop: 'auto',
      borderTop: '1px solid #EBF2F0',
      paddingTop: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    featureRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    featureText: {
      fontSize: '14px',
      color: '#111E18',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    checkIcon: {
      color: '#8dc63f',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    infoIcon: {
      color: '#899E95',
      cursor: 'pointer',
      fontSize: '15px',
    },

    // Checkout View Styles
    checkoutContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '40px',
      alignItems: 'flex-start',
      marginTop: '16px',
    },
    leftCol: {
      flex: '1.2',
      width: '100%',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      border: '1px solid #EBF2F0',
      padding: isMobile ? '24px 16px' : '36px',
      boxSizing: 'border-box',
    },
    rightCol: {
      flex: '0.8',
      width: '100%',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      border: '1px solid #EBF2F0',
      padding: isMobile ? '24px 16px' : '32px',
      boxSizing: 'border-box',
      position: isMobile ? 'static' : 'sticky',
      top: '24px',
      boxShadow: '0 8px 24px rgba(36, 64, 52, 0.02)',
    },
    checkoutHeader: {
      marginBottom: '32px',
    },
    checkoutTitle: {
      fontSize: isMobile ? '28px' : '36px',
      fontWeight: '800',
      color: '#1C3127',
      marginBottom: '8px',
    },
    checkoutSubtitle: {
      fontSize: '15px',
      color: '#496158',
      lineHeight: '1.6',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '800',
      color: '#111E18',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardLogos: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
    },
    logoBadge: {
      border: '1px solid #E5E9E7',
      borderRadius: '4px',
      padding: '2px 6px',
      fontSize: '10px',
      fontWeight: '700',
      color: '#899E95',
      textTransform: 'uppercase',
    },
    inputGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    inputLabel: {
      fontSize: '14px',
      fontWeight: '700',
      color: '#111E18',
    },
    inputField: (isFocused) => ({
      padding: '16px 20px',
      borderRadius: '12px',
      border: isFocused ? '1.5px solid #244034' : '1px solid #E5E9E7',
      backgroundColor: '#FAFCFB',
      fontSize: '15px',
      color: '#111E18',
      outline: 'none',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      boxSizing: 'border-box',
      width: '100%',
      boxShadow: isFocused ? '0 0 0 4px rgba(36, 64, 52, 0.06)' : 'none',
    }),
    halfRow: {
      display: 'flex',
      gap: '16px',
    },
    toggleRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '28px',
      cursor: 'pointer',
    },
    toggleSwitch: (isActive) => ({
      width: '44px',
      height: '24px',
      borderRadius: '24px',
      backgroundColor: isActive ? '#8dc63f' : '#E5E9E7',
      position: 'relative',
      transition: 'background-color 0.2s ease',
      cursor: 'pointer',
    }),
    toggleCircle: (isActive) => ({
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      position: 'absolute',
      top: '3px',
      left: isActive ? '23px' : '3px',
      transition: 'left 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
    }),
    toggleLabel: {
      fontSize: '14px',
      fontWeight: '700',
      color: '#111E18',
      userSelect: 'none',
    },
    summaryHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px',
    },
    summaryTitle: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#111E18',
    },
    summaryDue: {
      fontSize: '12px',
      color: '#899E95',
      marginTop: '4px',
    },
    summaryPrice: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#111E18',
    },
    detailsBox: {
      border: '1px solid #EBF2F0',
      borderRadius: '12px',
      padding: '16px',
      backgroundColor: '#FAFCFB',
      marginBottom: '24px',
    },
    detailsHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
    detailsTitle: {
      fontSize: '14px',
      fontWeight: '700',
      color: '#111E18',
    },
    detailsContent: {
      marginTop: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      borderTop: '1px solid #EBF2F0',
      paddingTop: '12px',
    },
    detailsText: {
      fontSize: '13px',
      color: '#496158',
      lineHeight: '1.5',
      margin: 0,
    },
    termsRow: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      marginBottom: '24px',
      cursor: 'pointer',
    },
    checkbox: {
      marginTop: '3px',
      cursor: 'pointer',
    },
    termsLabel: {
      fontSize: '13px',
      color: '#496158',
      lineHeight: '1.4',
      userSelect: 'none',
    },
    termsLink: {
      color: '#111E18',
      textDecoration: 'underline',
      fontWeight: '600',
    },
    payBtn: {
      width: '100%',
      padding: '16px',
      backgroundColor: hoveredPayBtn ? '#7db235' : '#8dc63f',
      color: '#111E18',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: hoveredPayBtn ? '0 4px 14px rgba(141, 198, 63, 0.3)' : 'none',
      transform: hoveredPayBtn ? 'translateY(-1px)' : 'none',
    }
  }

  return (
    <div style={styles.outer}>
      <div style={styles.contentArea}>
        
        {/* Render Checkout View */}
        {selectedPlan ? (
          <div>
            {/* Back Button to Pricing */}
            <button 
              style={styles.backButton}
              onClick={handleBackToPricing}
              onMouseEnter={() => setHoveredBack(true)}
              onMouseLeave={() => setHoveredBack(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Pricing
            </button>

            {/* Title Section */}
            <div style={styles.checkoutHeader}>
              <h1 style={styles.checkoutTitle}>Upgrade to {selectedPlan.title}</h1>
              <p style={styles.checkoutSubtitle}>
                {selectedPlan.id === 2 
                  ? "Get all access for your entire car hunt — one payment, no subscription, no expiry." 
                  : "Get all access and an extra 20% off when you subscribe annually."
                }
              </p>
            </div>

            {/* Split Checkout Layout */}
            <form onSubmit={handlePay} style={styles.checkoutContainer}>
              {/* Left Column: Form Details */}
              <div style={styles.leftCol}>
                <h2 style={styles.sectionTitle}>
                  Payment Method
                  <div style={styles.cardLogos}>
                    <span style={styles.logoBadge}>Visa</span>
                    <span style={styles.logoBadge}>MC</span>
                    <span style={styles.logoBadge}>Paypal</span>
                  </div>
                </h2>

                <div style={styles.inputGroup}>
                  <label style={styles.inputLabel}>Card Number</label>
                  <input 
                    type="text" 
                    placeholder="Card Number"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    style={styles.inputField(focusedField === 'number')}
                    onFocus={() => setFocusedField('number')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div style={styles.halfRow}>
                  <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label style={styles.inputLabel}>Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM / YY"
                      required
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      style={styles.inputField(focusedField === 'expiry')}
                      onFocus={() => setFocusedField('expiry')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label style={styles.inputLabel}>CVV</label>
                    <input 
                      type="password" 
                      placeholder="CVV code"
                      maxLength="4"
                      required
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      style={styles.inputField(focusedField === 'cvv')}
                      onFocus={() => setFocusedField('cvv')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.inputLabel}>Name on card</label>
                  <input 
                    type="text" 
                    placeholder="Cardholder Name"
                    required
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    style={styles.inputField(focusedField === 'name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div style={styles.toggleRow} onClick={() => setSaveDetails(!saveDetails)}>
                  <div style={styles.toggleSwitch(saveDetails)}>
                    <div style={styles.toggleCircle(saveDetails)} />
                  </div>
                  <span style={styles.toggleLabel}>Save details for next payments</span>
                </div>
              </div>

              {/* Right Column: Checkout Pricing Summary */}
              <div style={styles.rightCol}>
                <div style={styles.summaryHeader}>
                  <div>
                    <div style={styles.summaryTitle}>{selectedPlan.title}</div>
                    <div style={styles.summaryDue}>Due Today</div>
                  </div>
                  <div style={styles.summaryPrice}>{selectedPlan.priceText}</div>
                </div>

                {/* Details Accordion */}
                <div style={styles.detailsBox}>
                  <div style={styles.detailsHeader} onClick={() => setIsDetailsOpen(!isDetailsOpen)}>
                    <span style={styles.detailsTitle}>Details</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#111E18" 
                      strokeWidth="2.5" 
                      style={{
                        transform: isDetailsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <path d="M6 9L12 15L18 9" />
                    </svg>
                  </div>
                  {isDetailsOpen && (
                    <div style={styles.detailsContent}>
                      <p style={styles.detailsText}>
                        Your plan begins today and renews automatically on June 23, 2026 until cancelled.
                      </p>
                      <p style={styles.detailsText}>
                        Your payment method will be charged {selectedPlan.priceText} (plus applicable taxes) {selectedPlan.id === 2 ? 'once' : 'each year'}.
                      </p>
                      {selectedPlan.id !== 2 && (
                        <p style={styles.detailsText}>
                          To avoid charges for the next year, cancel before June 23, 2025.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Terms and Conditions Checkbox */}
                <div style={styles.termsRow} onClick={() => setAgreeTerms(!agreeTerms)}>
                  <input 
                    type="checkbox" 
                    style={styles.checkbox}
                    checked={agreeTerms}
                    onChange={() => {}} // Controlled by row click
                  />
                  <span style={styles.termsLabel}>
                    I've read and agree to the <span style={styles.termsLink}>Terms of Service</span> and order details
                  </span>
                </div>

                {/* Submit Pay Button */}
                <button 
                  type="submit" 
                  style={styles.payBtn}
                  onMouseEnter={() => setHoveredPayBtn(true)}
                  onMouseLeave={() => setHoveredPayBtn(false)}
                >
                  Pay and Join
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Render Main Plans Cards View */
          <div>
            {/* Back Button to Home */}
            <button 
              style={styles.backButton}
              onClick={handleBackToHome}
              onMouseEnter={() => setHoveredBack(true)}
              onMouseLeave={() => setHoveredBack(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to [home]
            </button>

            {/* Header Titles */}
            <div style={styles.titleSection}>
              <div style={styles.tagline}>Simple, Transparent Pricing</div>
              <h1 style={styles.title}>
                Start Free. Upgrade <span style={styles.titleAccent}>When You're Ready.</span>
              </h1>
              <p style={styles.subtitle}>
                Researching a car? The Car Buying Sprint is one payment for full power across your entire car hunt — no subscription, no expiry.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div style={styles.grid}>
              {plans.map((plan) => {
                const isHovered = hoveredCardId === plan.id
                const isPro = plan.id === 4

                return (
                  <div 
                    key={plan.id}
                    style={styles.card(isHovered, isPro)}
                    onMouseEnter={() => setHoveredCardId(plan.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                  >
                    {/* Card Header & Badge */}
                    <div style={styles.cardHeader}>
                      <span style={styles.cardTitle}>{plan.title}</span>
                      {plan.badgeText && (
                        <span style={styles.badge(isPro)}>{plan.badgeText}</span>
                      )}
                    </div>

                    {/* Price Block */}
                    <div style={styles.priceContainer}>
                      <span style={styles.price}>{plan.priceText}</span>
                      {plan.priceSub && (
                        <span style={styles.priceSubText}>{plan.priceSub}</span>
                      )}
                    </div>

                    {/* Short Description */}
                    <p style={styles.desc}>{plan.desc}</p>

                    {/* CTA Button */}
                    <button 
                      style={styles.actionBtn(plan.id, isHovered)}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      {plan.btnText}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>

                    {/* Features list */}
                    <div style={styles.featuresContainer}>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} style={styles.featureRow}>
                          <div style={styles.featureText}>
                            <span style={styles.checkIcon}>✓</span>
                            <span>{feature.text}</span>
                          </div>
                          {/* Info Circle */}
                          <span 
                            style={styles.infoIcon}
                            title={feature.info}
                            onClick={() => alert(feature.info)}
                          >
                            ⓘ
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Render the standard footer without green CTA banner */}
      <Footer showCta={false} />
    </div>
  )
}
