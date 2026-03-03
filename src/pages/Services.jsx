import { Helmet } from "react-helmet-async"
export default function Services() {
  return (
    <>
    <Helmet>
  <title>Construction & Real Estate Services in Kanpur</title>
  <meta
    name="description"
    content="Learn more about J N Infratech & Solutions, a trusted construction and real estate company in Kanpur."
  />
</Helmet>
    <div className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Real Estate Investment
            </h3>
            <p className="text-gray-700">
              Strategic buying & selling of plots, villas, and land for
              maximum long-term value.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Residential & Commercial Construction
            </h3>
            <p className="text-gray-700">
              Premium construction solutions including turnkey residential
              and commercial projects.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Industrial & Warehouse Projects
            </h3>
            <p className="text-gray-700">
              End-to-end warehouse and industrial infrastructure development.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}