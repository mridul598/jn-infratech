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
  Our Projects
</h1>

<div className="grid md:grid-cols-3 gap-8">

  {/* Project Card 1 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden group">
    <div className="overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Residential Project"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5">
      <span className="text-xs uppercase tracking-wide text-teal-600">
        Residential
      </span>
      <h3 className="text-lg font-semibold mt-2">
        Modern Villa Development
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Premium residential construction project focused on durability and contemporary design.
      </p>
    </div>
  </div>

  {/* Project Card 2 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden group">
    <div className="overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        alt="Commercial Project"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5">
      <span className="text-xs uppercase tracking-wide text-teal-600">
        Commercial
      </span>
      <h3 className="text-lg font-semibold mt-2">
        Commercial Office Complex
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Strategically designed office infrastructure with long-term investment potential.
      </p>
    </div>
  </div>

  {/* Project Card 3 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden group">
    <div className="overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        alt="Industrial Project"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5">
      <span className="text-xs uppercase tracking-wide text-teal-600">
        Industrial
      </span>
      <h3 className="text-lg font-semibold mt-2">
        Warehouse Infrastructure
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Large-scale warehouse and industrial development executed with structural precision.
      </p>
    </div>
  </div>

</div>

      </div>
    </div>
    </>
  )
}