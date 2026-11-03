import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import SoftAurora from './components/ui/SoftAurora'
import { ContactSection } from './features/contact/ContactSection'
import { FAQSection } from './features/landing/components/FAQSection'
import { FeaturesSection } from './features/landing/components/FeaturesSection'
import { HeroSection } from './features/landing/components/HeroSection'
import { PlatformSection } from './features/landing/components/PlatformSection'
import { WorkflowSection } from './features/landing/components/WorkflowSection'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <SoftAurora
        className="app-aurora"
        speed={0.6}
        scale={1.5}
        brightness={1}
        color1="#f7f7f7"
        color2="#00fdff"
        bandHeight={0.5}
        bandSpread={1}
        spectrum={0}
        lightMode
        enableMouseInteraction
        mouseInfluence={0.25}
      />
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
    </div>
  )
}

export default App
