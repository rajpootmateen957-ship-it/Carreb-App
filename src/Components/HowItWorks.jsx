import React, { useState, useEffect } from 'react'

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth <= 990

  const items = [
    {
      title: 'Enter Your Criteria',
      description: 'Budget, fuel type, lifestyle — answer 5 simple questions. No account needed to start.',
      image: 'https://carreb1.vercel.app/assets/Images/box1-img1.png'
    },
    {
      title: 'Your CORE™ Rating',
      description: 'One view. Estimated Cost of Ownership + CO2 + estimated cost difference versus your selected current vehicle where available — all in one simple dial.',
      image: 'https://carreb1.vercel.app/assets/Images/box1-img2.png'
    },
    {
      title: 'See Your Estimated Cost Difference',
      description: 'Select your current vehicle and Carreb estimates the potential cost difference between that vehicle and a new vehicle you selected.',
      image: 'https://carreb1.vercel.app/assets/Images/box1-img3.png'
    },
    {
      title: 'Explore & Decide',
      description: 'Upgrade to explore up to 30 vehicles, unlock financing views, resale estimate projections, and quarterly intelligence reports.',
      image: 'https://carreb1.vercel.app/assets/Images/box1-img4.png'
    }
  ]

  const styles = {
    section: {
      backgroundColor: '#EBF2F0', // var(--color-darkgreen50)
      padding: windowWidth <= 768 ? '80px 0' : '128px 0',
      width: '100%',
      fontFamily: '"Outfit", "Inter", sans-serif',
      boxSizing: 'border-box',
    },
    top: {
      margin: windowWidth <= 600 ? '0 auto 16px' : '0 auto 64px',
      maxWidth: '920px',
      padding: '0 16px',
      textAlign: 'center',
      boxSizing: 'border-box',
    },
    eyebrow: {
      color: '#6E9A16', // var(--color-accent600)
      display: 'inline-block',
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '22px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    heading: {
      color: '#111E18', // var(--color-darkgreen950)
      fontSize: windowWidth <= 600 ? '28px' : (windowWidth <= 768 ? '36px' : '48px'),
      fontWeight: '800',
      lineHeight: windowWidth <= 600 ? '36px' : (windowWidth <= 768 ? '45px' : '56px'),
      marginBottom: '20px',
      margin: 0,
    },
    headingSpan: {
      color: '#6E9A16',
    },
    copy: {
      color: '#111E18',
      fontSize: '16px',
      lineHeight: '22px',
      margin: '0 auto 32px',
      maxWidth: '750px',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#C2E861', // var(--color-secondary)
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'inline-flex',
      fontSize: windowWidth <= 490 ? '16px' : '20px',
      fontWeight: '700',
      gap: '20px',
      lineHeight: '28px',
      padding: '4px 4px 4px 24px',
      color: '#111E18',
      border: 'none',
      textDecoration: 'none',
      justifyContent: windowWidth <= 490 ? 'space-between' : 'center',
      width: windowWidth <= 490 ? '100%' : 'auto',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 6px -1px rgba(194, 232, 97, 0.3)',
    },
    buttonSpan: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      padding: '12px',
    },
    buttonSvg: {
      fill: '#1c342d',
      height: '18px',
      width: '18px',
    },
    grid: {
      display: isMobile ? 'none' : 'flex',
      margin: '0 0 0 auto',
      maxWidth: '1505px',
      paddingLeft: '16px',
      boxSizing: 'border-box',
    },
    nav: {
      display: 'grid',
      margin: '70px 0',
      width: '35%',
      boxSizing: 'border-box',
      gap: '8px',
    },
    navItem: (isActive) => ({
      background: isActive ? '#ffffff' : 'transparent',
      border: 'none',
      borderRadius: '24px 0 0 24px',
      cursor: 'pointer',
      padding: '24px 32px',
      textAlign: 'left',
      transition: 'all 0.3s ease',
      width: '100%',
      outline: 'none',
    }),
    navItemStrong: {
      color: '#111E18',
      display: 'block',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '28px',
      marginBottom: '10px',
    },
    navItemSpan: {
      color: '#111E18',
      fontSize: '16px',
      lineHeight: '22px',
    },
    panel: {
      position: 'relative',
      width: '65%',
      boxSizing: 'border-box',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
    },
    panelCard: {
      alignItems: 'center',
      borderRadius: '24px',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    panelImage: {
      width: '100%',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
      borderRadius: '24px',
    },
    
    // Mobile Slider
    mobileSlider: {
      display: isMobile ? 'flex' : 'none',
      gap: '12px',
      marginLeft: '16px',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE
      paddingBottom: '24px',
    },
    mobileCard: {
      background: '#ffffff',
      borderRadius: '16px',
      flex: '0 0 min(320px, 90vw)',
      marginRight: '12px',
      padding: '16px 12px',
      scrollSnapAlign: 'start',
      width: 'min(320px, 90vw)',
      boxSizing: 'border-box',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    },
    mobileImage: {
      width: '100%',
      borderRadius: '16px',
      display: 'block',
      marginBottom: '16px',
    },
    mobileCopy: {
      textAlign: 'left',
    },
    mobileCardStrong: {
      color: '#111E18',
      display: 'block',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '22px',
      marginBottom: '4px',
    },
    mobileCardP: {
      color: '#68726E', // var(--color-outline600)
      fontSize: '14px',
      lineHeight: '20px',
      margin: 0,
    }
  }

  return (
    <section style={styles.section}>
      {/* Top Header */}
      <div style={styles.top}>
        <span style={styles.eyebrow}>How It Works</span>
        <h2 style={styles.heading}>
          From Confused to Confident <br />
          <span style={styles.headingSpan}>In 60 Seconds.</span>
        </h2>
        <p style={styles.copy}>
          No spreadsheets. No jargon. No PhD in mathematics required. Just answer a few questions and get your estimated CORE™ Rating — free, no credit card required.
        </p>
        <button style={styles.button} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          Find my car match
          <span style={styles.buttonSpan}>
            <svg viewBox="0 0 640 640" style={styles.buttonSvg} xmlns="http://www.w3.org/2000/svg">
              <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Desktop Grid Layout */}
      <div style={styles.grid}>
        {/* Navigation Sidebar */}
        <div style={styles.nav}>
          {items.map((item, index) => (
            <button
              key={index}
              style={styles.navItem(activeTab === index)}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setActiveTab(index)}
            >
              <strong style={styles.navItemStrong}>{item.title}</strong>
              <span style={styles.navItemSpan}>{item.description}</span>
            </button>
          ))}
        </div>

        {/* Panel Preview Card */}
        <div style={styles.panel}>
          <div style={styles.panelCard}>
            <img 
              style={styles.panelImage}
              src={items[activeTab].image} 
              alt={items[activeTab].title} 
            />
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Slider Layout */}
      <div style={styles.mobileSlider}>
        {items.map((item, index) => (
          <div key={index} style={styles.mobileCard}>
            <img 
              style={styles.mobileImage}
              src={item.image} 
              alt={item.title} 
            />
            <div style={styles.mobileCopy}>
              <strong style={styles.mobileCardStrong}>{item.title}</strong>
              <p style={styles.mobileCardP}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
