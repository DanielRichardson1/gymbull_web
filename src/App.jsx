import { useState } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Components
import HeroSection from './components/HeroSection.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Footer from './components/Footer.jsx'

// Pages
import ContactUs from './pages/ContactUs.jsx' 
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CustomerSupport from './pages/CustomerSupport.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
