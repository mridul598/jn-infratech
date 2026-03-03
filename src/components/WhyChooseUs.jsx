import { motion } from "framer-motion"
import { ShieldCheck, Clock, TrendingUp, Users } from "lucide-react"

export default function WhyChooseUs() {
  const points = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Transparent Documentation",
      text: "Complete legal clarity and secure transactions for every project.",
    },
    {
      icon: <Clock size={36} />,
      title: "On-Time Delivery",
      text: "We value deadlines and deliver projects as promised.",
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Market Expertise",
      text: "Strong local knowledge and strategic investment insights.",
    },
    {
      icon: <Users size={36} />,
      title: "Strong Vendor Network",
      text: "Reliable contractors and partners ensuring quality execution.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-teal-600 mb-4">
                {point.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}