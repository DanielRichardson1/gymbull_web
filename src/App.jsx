import { useState } from 'react'
import './index.css'
import HeroSection from './HeroSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
    </>
  )
}

export default App
