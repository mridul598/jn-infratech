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
          J N Infratech & Solutions is a trusted real estate and construction
          company based in Kanpur. We specialize in residential, commercial,
          and industrial projects with a focus on quality, transparency,
          and long-term value.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          With strong market expertise and a reliable vendor network,
          we deliver projects on time while maintaining complete
          documentation and client trust.
        </p>

      </div>
    </div>
    </>
  )
}