import { Helmet } from "react-helmet-async"
export default function Projects() {
  return (
    <>
    <Helmet>
  <title>Our Projects | J N Infratech Kanpur</title>
  <meta
    name="description"
    content="Learn more about J N Infratech & Solutions, a trusted construction and real estate company in Kanpur."
  />
</Helmet>
    <div className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Featured Projects
        </h1>

        <p className="text-gray-700">
          Our portfolio includes modern residential villas, commercial
          office complexes, and industrial warehouse developments across Kanpur.
        </p>

      </div>
    </div>
    </>
  )
}