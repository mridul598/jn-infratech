import { motion } from "framer-motion"
import { Building2, Landmark, Warehouse } from "lucide-react"

export default function ServicesPreview() {
  const services = [
    {
      icon: <Landmark size={40} />,
      title: "Real Estate Investment",
      description:
        "Strategic buying & selling of plots, flats, villas, and land for maximum long-term value.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Residential & Commercial Construction",
      description:
        "Premium construction solutions including homes, commercial spaces, and turnkey projects.",
    },
    {
      icon: <Warehouse size={40} />,
      title: "Industrial & Warehouse Projects",
      description:
        "End-to-end development of warehouses and industrial properties with strong execution.",
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
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition duration-300"
            >
              <div className="text-teal-600 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}