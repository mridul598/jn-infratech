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
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      Why Choose J N Infratech
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-3">
          Government Contractor Credibility
        </h3>
        <p className="text-gray-600 text-sm">
          Operated with structured compliance and disciplined project execution standards.
        </p>
      </div>

      <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-3">
          Transparent Documentation
        </h3>
        <p className="text-gray-600 text-sm">
          Clear pricing structure, legal clarity, and process-driven transactions.
        </p>
      </div>

      <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-3">
          On-Time Execution
        </h3>
        <p className="text-gray-600 text-sm">
          Timely delivery backed by disciplined planning and strong vendor coordination.
        </p>
      </div>

      <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-3">
          Strategic Investment Guidance
        </h3>
        <p className="text-gray-600 text-sm">
          Real estate solutions designed for long-term value creation.
        </p>
      </div>

      <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-3">
          Quality Construction Standards
        </h3>
        <p className="text-gray-600 text-sm">
          Structural integrity and material quality remain at the core of every project.
        </p>
      </div>

      <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-3">
          Client-Centric Approach
        </h3>
        <p className="text-gray-600 text-sm">
          Personalized consultation and transparent communication at every stage.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      What Our Clients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600 text-sm leading-relaxed">
          “Professional execution and transparent communication throughout the project. Highly reliable team.”
        </p>
        <div className="mt-4 font-semibold text-gray-800">
          – Residential Client
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600 text-sm leading-relaxed">
          “Timely delivery and structured documentation made the entire process smooth and stress-free.”
        </p>
        <div className="mt-4 font-semibold text-gray-800">
          – Commercial Investor
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600 text-sm leading-relaxed">
          “Strong project planning and quality construction standards. Excellent coordination.”
        </p>
        <div className="mt-4 font-semibold text-gray-800">
          – Industrial Client
        </div>
      </div>

    </div>

  </div>
</section>
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <CTASection />
    </div>
    </>
  )
}