import { useState } from 'react'
import './index.css'
import HeroSection from './HeroSection.jsx'
import HowItWorks from './HowItWorks.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <HowItWorks />
    </>
  )
}

export default App
