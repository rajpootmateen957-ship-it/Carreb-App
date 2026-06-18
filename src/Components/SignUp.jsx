import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()

  // Responsiveness state
  const [isMobile, setIsMobile] = useState(false)

  // Form states
  const [email, setEmail] = useState('')

  // Focus and Hover states for premium micro-interactions
  const [isBackHovered, setIsBackHovered] = useState(false)
  const [isLoginHovered, setIsLoginHovered] = useState(false)
  const [isSubmitHovered, setIsSubmitHovered] = useState(false)
  const [isGoogleHovered, setIsGoogleHovered] = useState(false)
  const [isAppleHovered, setIsAppleHovered] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleBack = () => {
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Signing up with: ${email}`)
  }

  // Premium Inline Styling System (matches Login.jsx exactly for visual consistency)
  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#ffffff',
      fontFamily: '"Outfit", "Inter", sans-serif',
      boxSizing: 'border-box',
    },
    leftPanel: {
      flex: isMobile ? '1' : '1.1',
      display: 'flex',
      flexDirection: 'column',
      padding: isMobile ? '32px 20px' : '40px 60px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
    },
    rightPanel: {
      display: isMobile ? 'none' : 'flex',
      flex: '0.9',
      padding: '16px 16px 16px 0',
      boxSizing: 'border-box',
      height: '100vh',
      position: 'sticky',
      top: 0,
    },
    illustrationWrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f3faf7',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
    },
    illustrationImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: isMobile ? '40px' : '60px',
    },
    backLink: {
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
      transition: 'transform 0.2s ease, opacity 0.2s ease',
      opacity: isBackHovered ? 0.7 : 1,
      transform: isBackHovered ? 'translateX(-3px)' : 'none',
    },
    switchText: {
      fontSize: '15px',
      color: '#496158',
      fontWeight: '500',
    },
    switchLink: {
      color: '#111E18',
      fontWeight: '700',
      textDecoration: 'underline',
      marginLeft: '4px',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      color: isLoginHovered ? '#90C121' : '#111E18',
    },
    formContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      maxWidth: '440px',
      margin: '0 auto',
    },
    title: {
      fontSize: isMobile ? '32px' : '40px',
      fontWeight: '800',
      color: '#111E18',
      marginBottom: '32px',
      letterSpacing: '-0.5px',
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    labelRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '700',
      color: '#111E18',
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
    },
    input: (isFocused) => ({
      width: '100%',
      padding: '16px 20px',
      borderRadius: '12px',
      border: isFocused ? '1.5px solid #244034' : '1px solid #E5E9E7',
      backgroundColor: '#FAFCFB',
      fontSize: '15px',
      color: '#111E18',
      outline: 'none',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      boxSizing: 'border-box',
      boxShadow: isFocused ? '0 0 0 4px rgba(36, 64, 52, 0.06)' : 'none',
    }),
    submitButton: {
      width: '100%',
      padding: '16px',
      backgroundColor: '#1C3127',
      color: '#ffffff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
      marginTop: '12px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(28, 49, 39, 0.15)',
      backgroundColor: isSubmitHovered ? '#12211A' : '#1C3127',
      transform: isSubmitHovered ? 'translateY(-1px)' : 'none',
    },
    separatorContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '24px 0',
    },
    separatorLine: {
      flex: 1,
      height: '1px',
      backgroundColor: '#E5E9E7',
    },
    separatorText: {
      margin: '0 16px',
      color: '#899E95',
      fontSize: '14px',
      fontWeight: '500',
    },
    oauthButton: (isHovered) => ({
      width: '100%',
      padding: '14px',
      backgroundColor: '#F0F5F2',
      color: '#1C3127',
      border: 'none',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '12px',
      boxSizing: 'border-box',
      backgroundColor: isHovered ? '#E4EDE9' : '#F0F5F2',
      transform: isHovered ? 'translateY(-1px)' : 'none',
    }),
  }

  return (
    <div style={styles.container}>
      {/* Left Column: Form */}
      <div style={styles.leftPanel}>
        <div style={styles.header}>
          <button 
            style={styles.backLink}
            onClick={handleBack}
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="#111E18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </button>
          
          <div style={styles.switchText}>
            Already have an account? 
            <span 
              style={styles.switchLink}
              onClick={() => navigate('/login')}
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
            >
              Log in
            </span>
          </div>
        </div>

        <div style={styles.formContent}>
          <h1 style={styles.title}>Sign up</h1>

          <form style={styles.form} onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={styles.inputGroup}>
              <div style={styles.labelRow}>
                <label style={styles.label}>Email address</label>
              </div>
              <div style={styles.inputContainer}>
                <input 
                  type="email" 
                  placeholder="Enter your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input(isEmailFocused)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              style={styles.submitButton}
              onMouseEnter={() => setIsSubmitHovered(true)}
              onMouseLeave={() => setIsSubmitHovered(false)}
            >
              Continue
            </button>
          </form>

          {/* Separator */}
          <div style={styles.separatorContainer}>
            <div style={styles.separatorLine} />
            <span style={styles.separatorText}>or</span>
            <div style={styles.separatorLine} />
          </div>

          {/* Google Button */}
          <button 
            style={styles.oauthButton(isGoogleHovered)}
            onMouseEnter={() => setIsGoogleHovered(true)}
            onMouseLeave={() => setIsGoogleHovered(false)}
            onClick={() => alert('Continue with Google clicked')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Apple Button */}
          <button 
            style={styles.oauthButton(isAppleHovered)}
            onMouseEnter={() => setIsAppleHovered(true)}
            onMouseLeave={() => setIsAppleHovered(false)}
            onClick={() => alert('Continue with Apple clicked')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.02 0-1.4-.61-2.58-.61-1.16 0-1.58.61-2.56.61-1.02 0-2.23-1.03-3.21-1.98C3.6 18.2 2 14.15 2 10.3c0-6.12 4.02-9.32 7.97-9.32 1.25 0 2.42.44 3.2 1.02.77-.58 1.95-1.02 3.27-1.02 4.15 0 7.56 3.32 7.56 7.4 0 1.2-.26 2.37-.73 3.48-1.02 2.43-2.9 5.86-5.27 8.42h.05zM12.03 3.25c.57-.75.98-1.74.88-2.73-.87.06-1.92.6-2.52 1.31-.54.63-.98 1.65-.85 2.62.98.08 1.94-.48 2.49-1.2h.01z" fill="#000000"/>
            </svg>
            Continue with Apple
          </button>
        </div>
      </div>

      {/* Right Column: Illustration Panel */}
      <div style={styles.rightPanel}>
        <div style={styles.illustrationWrapper}>
          <img 
            src="https://carreb1.vercel.app/assets/Images/signup.png" 
            alt="Carreb Sign Up Illustration" 
            style={styles.illustrationImg}
          />
        </div>
      </div>
    </div>
  )
}
