import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Building Assets.
          <br />
          Creating Trust.
          <br />
          Delivering Value.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Premium Real Estate & Construction Solutions in Kanpur
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="/projects"
            className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg font-medium transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Enquire Now
          </Link>
        </motion.div>

        <p className="mt-6 text-sm text-gray-300">
  Government Contractor | Transparent Documentation | Timely Execution
</p>

      </div>
    </section>
  )
}