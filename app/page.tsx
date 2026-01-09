import NavigationBar from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FounderSection from "@/components/founder-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
