import { motion } from "framer-motion"

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About J N Infratech & Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          We are a trusted real estate and construction partner in Kanpur,
          delivering transparent transactions, strategic investments,
          and high-quality residential and commercial projects.
          Our mission is to build long-term value and lasting trust.
        </motion.p>

      </div>
    </section>
  )
}