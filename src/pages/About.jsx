import { Helmet } from "react-helmet-async"

export default function About() {
  return (
    <>
    <Helmet>
  <title>About Us | J N Infratech & Solutions</title>
  <meta
    name="description"
    content="Learn more about J N Infratech & Solutions, a trusted construction and real estate company in Kanpur."
  />
</Helmet>
    <div className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold mb-10">
  About J N Infratech & Solutions
</h1>

<p className="text-gray-700 leading-relaxed mb-6">
  J N Infratech & Solutions was founded by <strong>Mridul Bhatt</strong> and <strong>Pratyaksha Bhatt</strong> with a focused vision to develop infrastructure and real estate assets built on integrity, structural strength, and long-term value.
</p>

<p className="text-gray-700 leading-relaxed mb-10">
  Operating as a government-registered contractor and professionally structured firm, we bring regulatory compliance, disciplined execution, and transparent project management to every development. Our work spans residential, commercial, and investment-oriented projects across Kanpur and surrounding regions.
</p>

<h2 className="text-2xl font-semibold mb-6">
  Leadership
</h2>

<div className="grid md:grid-cols-2 gap-10 mb-12">
  <div>
    <h3 className="text-lg font-semibold">Mridul Bhatt</h3>
    <p className="text-gray-600 mt-2">
      Director – Project Development  
      Leading strategic planning, regulatory coordination, and execution management across all projects.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-semibold">Pratyaksha Bhatt</h3>
    <p className="text-gray-600 mt-2">
      Director – Operations & Strategic Growth  
      Driving operational systems, client coordination, and long-term development initiatives.
    </p>
  </div>
</div>

<h2 className="text-2xl font-semibold mb-6">
  Our Core Principles
</h2>

<ul className="grid md:grid-cols-2 gap-4 text-gray-700">
  <li>• Government contractor credibility</li>
  <li>• Transparent pricing & documentation</li>
  <li>• Timely execution commitment</li>
  <li>• Structural quality assurance</li>
  <li>• Long-term asset value creation</li>
</ul>

<div className="mt-12">
  <a
    href="/contact"
    className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Enquire About Our Projects
  </a>
</div>
      </div>
    </div>
    </>
  )
}