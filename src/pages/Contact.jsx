import { useState, useRef } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Helmet } from "react-helmet-async"

export default function Contact() {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)
  setSuccess(false)

  emailjs
    .sendForm(
      "service_8f0nsvk",
      "template_85ns9qf",
      formRef.current,
      "q0hoOJSYI8o-TZHtR"
    )
    .then(
      () => {
        setLoading(false)
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      },
      () => {
        setLoading(false)
        alert("Something went wrong. Please try again.")
      }
    )
}

  return (
    <>
    <Helmet>
  <title>Contact J N Infratech | Kanpur</title>
  <meta
    name="description"
    content="Learn more about J N Infratech & Solutions, a trusted construction and real estate company in Kanpur."
  />
</Helmet>
        <div className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-teal-600" />
                +91 9555214282
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} className="text-teal-600" />
                info@jninfratech.com
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-teal-600" />
                Kanpur, Uttar Pradesh
              </p>
            </div>

            <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Kanpur,Uttar+Pradesh&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
                >
                {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
            <p className="text-green-600 text-center mt-4 font-medium">
            ✅ Message sent successfully!
            </p>
            )}

            </div>
          </form>

        </div>
      </div>
    </div>
    </>
  )
}