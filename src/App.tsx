import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ContactSection } from './features/contact/ContactSection'
import { FAQSection } from './features/landing/components/FAQSection'
import { FeaturesSection } from './features/landing/components/FeaturesSection'
import { HeroSection } from './features/landing/components/HeroSection'
import { PlatformSection } from './features/landing/components/PlatformSection'
import { WorkflowSection } from './features/landing/components/WorkflowSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PlatformSection />
        <FeaturesSection />
        <WorkflowSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
