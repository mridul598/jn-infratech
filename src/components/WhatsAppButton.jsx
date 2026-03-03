import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phoneNumber = "919876543210" // replace with real number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
                 w-14 h-14 
                 flex items-center justify-center
                 bg-green-500 hover:bg-green-600
                 text-white rounded-full
                 shadow-2xl transition duration-300"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}