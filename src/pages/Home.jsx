import Hero from "../components/Hero"
import AboutPreview from "../components/AboutPreview"
import ServicesPreview from "../components/ServicesPreview"
import WhyChooseUs from "../components/WhyChooseUs"
import FeaturedProjects from "../components/FeaturedProjects"

import CTASection from "../components/CTASection"
import { Helmet } from "react-helmet-async"

export default function Home() {
  return (
    <>
    <Helmet>
  <title>J N Infratech & Solutions | Construction Company in Kanpur</title>
  <meta
    name="description"
    content="Learn more about J N Infratech & Solutions, a trusted construction and real estate company in Kanpur."
  />
</Helmet>
    <div className="pt-20">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <CTASection />
    </div>
    </>
  )
}