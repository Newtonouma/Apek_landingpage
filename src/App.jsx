import './App.css'
import Navbar from './components/sections/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero'
import Features from './components/sections/Features/Features'
import Benefits from './components/sections/Benefits/Benefits'
import HowItWorks from './components/sections/HowItWorks/HowItWorks'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Pricing from './components/sections/Pricing/Pricing'
import FAQ from './components/sections/FAQ/FAQ'
import CTA from './components/sections/CTA/CTA'
import Footer from './components/sections/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />      
      <Pricing />
      <CTA />
      <FAQ />      
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
