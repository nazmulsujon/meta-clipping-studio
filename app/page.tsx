import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { TrialBanner } from "@/components/trial-banner"
import { BlogsSection } from "@/components/blogs-section"
import { Footer } from "@/components/footer"
import ShowcaseSection from "@/components/showcase-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ShowcaseSection />
      <TrialBanner />
      {/* <BlogsSection />
      <Footer /> */}
    </main>
  )
}
