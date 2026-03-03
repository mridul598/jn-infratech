import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-24 bg-teal-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Invest or Build With Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg mb-10 text-white/90"
        >
          Let’s discuss your project and help you make the right real estate decision.
        </motion.p>

        <Link
          to="/contact"
          className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us Today
        </Link>

      </div>
    </section>
  )
}