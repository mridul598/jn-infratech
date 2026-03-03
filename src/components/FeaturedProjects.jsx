import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Residential Villa",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Commercial Office Complex",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Industrial Warehouse Project",
      image:
        "https://plus.unsplash.com/premium_photo-1663091967607-2e15b89f4d6e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2FyZWhvdXNlfGVufDB8fDB8fHww",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/projects"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  )
}