import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/logo_gold.jpeg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-teal-600 font-semibold"
      : "hover:text-teal-500 transition"

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-black/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink to="/" className="flex items-center gap-3 group">
  <img
    src={logo}
    alt="JN Infratech Logo"
    className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-sm"
  />
  <div className="leading-tight">
    <span className="block text-lg font-semibold tracking-wide">
      J N Infratech
    </span>
    <span className="block text-xs tracking-[2px] uppercase text-gray-500">
      & Solutions
    </span>
  </div>
</NavLink> 

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/services" className={linkStyle}>Services</NavLink>
          <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-gray-800">
          <NavLink to="/" onClick={()=>setIsOpen(false)} className={linkStyle}>Home</NavLink>
          <NavLink to="/about" onClick={()=>setIsOpen(false)} className={linkStyle}>About</NavLink>
          <NavLink to="/services" onClick={()=>setIsOpen(false)} className={linkStyle}>Services</NavLink>
          <NavLink to="/projects" onClick={()=>setIsOpen(false)} className={linkStyle}>Projects</NavLink>
          <NavLink to="/contact" onClick={()=>setIsOpen(false)} className={linkStyle}>Contact</NavLink>
        </div>
      )}
    </nav>
  )
}