import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { TrialBanner } from "@/components/trial-banner"
import { BlogsSection } from "@/components/blogs-section"
import ShowcaseSection from "@/components/showcase-section"
import { Fragment } from "react"

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ShowcaseSection />
      <TrialBanner />
      <BlogsSection />
    </Fragment>
  )
}
