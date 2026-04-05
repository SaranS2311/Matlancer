import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProcessSection from './components/ProcessSection'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQSection from './components/FAQSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useScrollTracking } from './hooks/useScrollTracking'
import { trackPageView } from './utils/tracking'

export default function App() {
  useScrollTracking()

  useEffect(() => {
    trackPageView('Home', window.location.href)
  }, [])

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProcessSection />
        <Pricing />
        <Testimonials />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
