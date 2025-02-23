import { useState } from 'react'
import './index.css'
import HeroSection from './HeroSection.jsx'
import HowItWorks from './HowItWorks.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Footer />
    </>
  )
}

export default App
