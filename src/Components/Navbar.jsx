import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isGhostHovered, setIsGhostHovered] = useState(false)
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false)
  
  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 990
      setIsMobile(mobile)
      if (!mobile) {
        setIsOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { label: 'MyGarage', href: '#mygarage' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ]

  // Styles matching the live site CSS
  const styles = {
    header: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #EBF2F0',
      position: 'sticky', // Sticky positioning so it floats at the top as you scroll
      top: 0,
      width: '100%',
      zIndex: 100,
      fontFamily: '"Outfit", "Inter", sans-serif',
      boxSizing: 'border-box',
    },
    inner: {
      margin: '0 auto',
      maxWidth: '1445px',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
    },
    brand: {
      alignItems: 'center',
      display: 'flex',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    logo: {
      display: 'block',
      height: '36px',
      maxWidth: '160px',
      width: '100%',
      objectFit: 'contain',
    },
    menu: {
      display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '0px' : '16px',
      backgroundColor: isMobile ? '#ffffff' : 'transparent',
      borderBottom: isMobile ? '1px solid #EBF2F0' : 'none',
      flexDirection: isMobile ? 'column' : 'row',
      height: isMobile ? '100vh' : 'auto',
      padding: isMobile ? '16px' : '0px',
      position: isMobile ? 'absolute' : 'static',
      right: 0,
      top: '100%',
      width: isMobile ? '320px' : 'auto',
      zIndex: 30,
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
    },
    link: (isHovered) => ({
      color: isHovered ? '#90C121' : '#111E18',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '22px',
      padding: '8px',
      textDecoration: 'none',
      width: isMobile ? '100%' : 'auto',
      borderBottom: isMobile ? '1px solid #f3f4f6' : 'none',
      boxSizing: 'border-box',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    }),
    actions: {
      alignItems: isMobile ? 'stretch' : 'center',
      display: 'flex',
      gap: '16px',
      marginLeft: isMobile ? '0px' : 'auto',
      flexDirection: isMobile ? 'column' : 'row',
      width: isMobile ? '100%' : 'auto',
      paddingTop: isMobile ? '16px' : '0px',
      boxSizing: 'border-box',
    },
    button: {
      wordWrap: 'break-word',
      alignItems: 'center',
      background: 'transparent',
      borderRadius: '12px',
      display: 'flex',
      fontSize: '16px',
      fontWeight: '700',
      justifyContent: 'center',
      lineHeight: '24px',
      padding: '12px 24px',
      textDecoration: 'none',
      width: isMobile ? '100%' : 'auto',
      border: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease',
    },
    ghostButton: {
      color: '#244034',
      border: '1px solid #C3D8CB',
      backgroundColor: isGhostHovered ? 'rgba(195, 216, 203, 0.15)' : 'transparent',
      transform: isGhostHovered ? 'scale(1.02)' : 'none',
    },
    primaryButton: {
      backgroundColor: '#C2E861',
      color: '#111E18',
      gap: '20px',
      padding: '4px 4px 4px 24px',
      boxShadow: '0 4px 6px -1px rgba(194, 232, 97, 0.3)',
      transform: isPrimaryHovered ? 'scale(1.02)' : 'none',
    },
    primarySpan: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      padding: '12px',
      transition: 'transform 0.2s ease',
      transform: isPrimaryHovered ? 'translateX(2px)' : 'none',
    },
    primarySvg: {
      fill: '#111E18',
      height: '18px',
      width: '18px',
    },
    toggle: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: isMobile ? 'inline-flex' : 'none',
      marginLeft: '12px',
      padding: '8px',
      zIndex: 31,
    },
    navIcon: {
      fill: '#496158',
      display: 'block',
      height: '22px',
      width: '22px',
    },
    
    // Modals
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(17, 30, 24, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modalContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      width: '90%',
      maxWidth: '420px',
      padding: '40px 32px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      boxSizing: 'border-box',
    },
    modalCloseBtn: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '4px',
      transition: 'color 0.2s ease',
    },
    modalTitle: {
      fontSize: '1.75rem',
      fontWeight: '800',
      color: '#111E18',
      marginBottom: '8px',
      textAlign: 'center',
    },
    modalSubtitle: {
      fontSize: '0.95rem',
      color: '#496158',
      marginBottom: '32px',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      textAlign: 'left',
    },
    inputLabel: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#244034',
    },
    inputField: {
      padding: '12px 16px',
      borderRadius: '10px',
      border: '1px solid #C3D8CB',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'all 0.2s ease',
      color: '#111E18',
    },
    submitBtn: {
      backgroundColor: '#C2E861',
      color: '#111E18',
      border: 'none',
      width: '100%',
      padding: '14px',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.2s ease',
      boxShadow: '0 4px 6px -1px rgba(194, 232, 97, 0.2)',
    }
  }

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        {/* Logo Section */}
        <div style={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            style={styles.logo} 
            src="https://carreb1.vercel.app/assets/Images/logo.png" 
            alt="Carreb Logo" 
          />
        </div>

        {/* Navigation Menu (Desktop & Mobile Dropdown) */}
        <nav style={styles.menu}>
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={styles.link(hoveredLink === index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Action Buttons inside menu */}
          <div style={styles.actions}>
            <button
              style={{ ...styles.button, ...styles.ghostButton }}
              onMouseEnter={() => setIsGhostHovered(true)}
              onMouseLeave={() => setIsGhostHovered(false)}
              onClick={() => {
                setIsOpen(false)
                setIsLoginOpen(true)
              }}
            >
              Login
            </button>
            
            <button
              style={{ ...styles.button, ...styles.primaryButton }}
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              onClick={() => {
                setIsOpen(false)
                setIsSignUpOpen(true)
              }}
            >
              Sign Up
              <span style={styles.primarySpan} aria-hidden="true">
                <svg viewBox="0 0 640 640" style={styles.primarySvg} xmlns="http://www.w3.org/2000/svg">
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
                </svg>
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          style={styles.toggle} 
          type="button" 
          aria-label={isOpen ? "Close menu" : "Open menu"} 
          aria-expanded={isOpen} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={styles.navIcon}>
              <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.navIcon}>
              <path d="M4 9H20" stroke="#111E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 15H20" stroke="#111E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsLoginOpen(false)}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalCloseBtn} onClick={() => setIsLoginOpen(false)}>&times;</button>
            <h2 style={styles.modalTitle}>Welcome Back</h2>
            <p style={styles.modalSubtitle}>Login to manage your car garage.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Login Form Submitted!'); setIsLoginOpen(false); }}>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>Email Address</label>
                <input type="email" placeholder="name@example.com" required style={styles.inputField} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>Password</label>
                <input type="password" placeholder="••••••••" required style={styles.inputField} />
              </div>
              <button type="submit" style={styles.submitBtn}>
                Login to Carreb
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsSignUpOpen(false)}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalCloseBtn} onClick={() => setIsSignUpOpen(false)}>&times;</button>
            <h2 style={styles.modalTitle}>Get Started</h2>
            <p style={styles.modalSubtitle}>Create a free account and start today.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Sign Up Form Submitted!'); setIsSignUpOpen(false); }}>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>Full Name</label>
                <input type="text" placeholder="John Doe" required style={styles.inputField} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>Email Address</label>
                <input type="email" placeholder="name@example.com" required style={styles.inputField} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>Password</label>
                <input type="password" placeholder="••••••••" required style={styles.inputField} />
              </div>
              <button type="submit" style={styles.submitBtn}>
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
