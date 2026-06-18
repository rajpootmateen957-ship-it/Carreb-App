import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Buying from './Components/Buying'
import HowItWorks from './Components/HowItWorks'
import BuyingSection from './Components/BuyingSection'
import Features from './Components/Features'
import Spotlights from './Components/Spotlights'
import Cost from './Components/Cost'
import Users from './Components/Users'
import Upgrade from './Components/Upgrade'
import Question from './Components/Question'
import Footer from './Components/Footer'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import FAQ from './Components/FAQ'
import Pricing from './Components/Pricing'

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <div>
            <Navbar />
            <Buying />
            <BuyingSection />
            <HowItWorks />
            <Features />
            <Spotlights />
            <Cost />
            <Users /> 
            <Upgrade />
            <Question />
            <Footer />
          </div>
        } 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  )
}

export default App
