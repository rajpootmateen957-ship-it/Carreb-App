import React, { useState, useEffect } from 'react'

export default function BuyingSection() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth <= 990 && windowWidth > 768

  const styles = {
    section: {
      overflow: 'hidden',
      padding: isMobile ? '80px 0' : '116px 0',
      position: 'relative',
      width: '100%',
      backgroundColor: '#ffffff',
      fontFamily: '"Outfit", "Inter", sans-serif',
      boxSizing: 'border-box',
    },
    buyingbg: {
      backgroundImage: isMobile 
        ? 'url("https://carreb1.vercel.app/static/media/buying-responsive.8d938478e49566e83e52.png")' 
        : 'url("https://carreb1.vercel.app/static/media/buying-bg.5a27406efec29e877ddc.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      inset: 0,
      margin: isMobile ? '0' : '128px 0',
      position: 'absolute',
      zIndex: 1,
    },
    inner: {
      gap: isMobile ? '64px' : '110px',
      display: 'grid',
      position: 'relative',
      zIndex: 2,
      maxWidth: '1445px',
      margin: '0 auto',
      padding: '0 16px',
      boxSizing: 'border-box',
    },
    header: {
      margin: '0 auto',
      maxWidth: '640px',
      textAlign: 'center',
    },
    eyebrow: {
      color: '#445D17', // var(--color-accent800)
      display: 'block',
      fontSize: windowWidth <= 600 ? '12px' : '14px',
      fontWeight: windowWidth <= 600 ? '400' : '600',
      lineHeight: windowWidth <= 600 ? '16px' : '22px',
      marginBottom: windowWidth <= 600 ? '8px' : '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    title: {
      color: '#111E18', // var(--color-darkgreen950)
      fontSize: windowWidth <= 600 ? '28px' : '48px',
      fontWeight: '800',
      lineHeight: windowWidth <= 600 ? '36px' : '56px',
      marginBottom: '20px',
    },
    titleSpan: {
      color: '#90C121', // var(--color-secondaryDark)
    },
    copy: {
      color: '#111E18',
      fontSize: '16px',
      lineHeight: '22px',
      margin: '0 auto',
    },
    layout: {
      margin: '0 auto',
      maxWidth: '1200px', // Restrict maximum layout width so cards align near the car
      minHeight: isMobile ? 'auto' : (isTablet ? '980px' : '760px'),
      position: 'relative',
      width: '100%',
      display: isMobile ? 'flex' : 'block',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'stretch',
      gap: isMobile ? '24px' : '0',
    },
    card: {
      background: windowWidth <= 600 ? '#ffffff' : '#FBFCEA', // var(--color-accent50)
      border: '1px solid #EBEDEB', // var(--color-outline100)
      borderRadius: '24px',
      boxShadow: '0 5px 11px rgba(39, 64, 52, 0.03), 0 20px 20px rgba(39, 64, 52, 0.03), 0 45px 27px rgba(39, 64, 52, 0.02)',
      padding: '24px',
      position: isMobile ? 'relative' : 'absolute',
      width: isMobile ? 'min(420px, 96%)' : 'min(360px, 100%)',
      boxSizing: 'border-box',
    },
    cardStrong: {
      display: 'block',
      fontSize: windowWidth <= 600 ? '24px' : '32px',
      lineHeight: windowWidth <= 600 ? '32px' : '38.4px',
      marginBottom: '16px',
      color: '#111E18',
      fontWeight: '800',
    },
    cardP: {
      color: '#111E18',
      fontSize: '16px',
      lineHeight: '22px',
      margin: 0,
    },
    carPanel: {
      alignItems: 'center',
      display: isMobile ? 'none' : 'flex',
      justifyContent: 'center',
      left: '50%',
      maxWidth: '420px',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
    },
    carImage: {
      display: 'block',
      width: '100%',
    }
  }

  // Card position styling overrides matching the exact CSS transforms
  const getCardStyle = (position) => {
    if (isMobile) {
      return {
        ...styles.card,
        top: position === 'left' ? '8%' : '0px',
        transform: 'none',
      }
    }

    if (position === 'left') {
      return {
        ...styles.card,
        left: 0,
        top: 0,
        transform: 'translate(25%, -30%) rotate(-2deg)',
      }
    }

    if (position === 'right') {
      return {
        ...styles.card,
        right: 0,
        top: isTablet ? '46%' : '6%',
        transform: 'rotate(2deg)',
      }
    }

    if (position === 'bottom') {
      return {
        ...styles.card,
        left: 0,
        bottom: isTablet ? 'auto' : '20%',
        top: isTablet ? '84%' : 'auto',
        transform: isTablet ? 'rotate(-2deg)' : 'translateY(10%) rotate(-2deg)',
      }
    }

    return styles.card
  }

  return (
    <section style={styles.section}>
      {/* Background Dashed Line (Road) */}
      <div style={styles.buyingbg} />

      <div style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.eyebrow}>What Carreb Exists</span>
          <h2 style={styles.title}>
            Buying a Car in 2026 <br />
            <span style={styles.titleSpan}>Shouldn't Feel Like This.</span>
          </h2>
          <p style={styles.copy}>
            3,000+ models, 90+ brands, 7 fuel types. A cost-of-living crisis. And most car research focused on features and driving experience — not what the car could cost you to own over 5 years.
          </p>
        </div>

        {/* Interactive Layout with Cards and Centered Car */}
        <div style={styles.layout}>
          {/* Card 1: Electrification Confusion */}
          <div style={getCardStyle('left')}>
            <strong style={styles.cardStrong}>Electrification Confusion</strong>
            <p style={styles.cardP}>
              EV, hybrid, PHEV, petrol, diesel — each with different estimated running costs, incentives, and expenses. No single source covers the full picture before you sign.
            </p>
          </div>

          {/* Centered Car Image (Hidden on Mobile) */}
          <div style={styles.carPanel}>
            <img 
              style={styles.carImage}
              src="https://carreb1.vercel.app/assets/Images/car.png" 
              alt="Car view from top" 
            />
          </div>

          {/* Card 2: The Often-Overlooked Cost Question */}
          <div style={getCardStyle('right')}>
            <strong style={styles.cardStrong}>The Often-Overlooked Cost Question</strong>
            <p style={styles.cardP}>
              The sticker price is just the beginning. Insurance, charging, registration, depreciation, and fuel add up. Your total ownership picture is only clear when you look beyond the cost to buy.
            </p>
          </div>

          {/* Card 3: Opinion. Not Numbers */}
          <div style={getCardStyle('bottom')}>
            <strong style={styles.cardStrong}>Opinion. Not Numbers</strong>
            <p style={styles.cardP}>
              We listen to real experts. Carreb delivers practical advice, built on data and independent analysis, so you can make a better-informed choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
