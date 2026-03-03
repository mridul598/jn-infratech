import { Link } from "react-router-dom"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            J N Infratech & Solutions
          </h3>
          <p className="text-sm leading-relaxed">
            Trusted real estate and construction partner delivering
            long-term value through quality and transparency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
            <li><Link to="/services" className="hover:text-teal-400">Services</Link></li>
            <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Real Estate Investment</li>
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Warehouse Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 9555214282
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> jninfratechandsolutions@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Kanpur, Uttar Pradesh
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} J N Infratech & Solutions. All rights reserved.
      </div>
    </footer>
  )
}