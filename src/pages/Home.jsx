import Hero from "../components/Hero"
import AboutPreview from "../components/AboutPreview"
import ServicesPreview from "../components/ServicesPreview"
import WhyChooseUs from "../components/WhyChooseUs"
import FeaturedProjects from "../components/FeaturedProjects"

import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <CTASection />
    </div>
  )
}