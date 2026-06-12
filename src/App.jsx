import React from 'react'
import Navbar from './Components/Navbar'
import Buying from './Components/Buying'
import HowItWorks from './Components/HowItWorks'
import BuyingSection from './Components/BuyingSection'
import Features from './Components/Features'
import Spotlights from './Components/Spotlights'
import Cost from './Components/Cost'

function App() {
  return (
    <div>
      <Navbar />
      <Buying />
      <BuyingSection />
        <HowItWorks />
        <Features />
        <Spotlights />
        <Cost />
    </div>
  )
}

export default App
