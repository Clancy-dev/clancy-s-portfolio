"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsappIcon() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-pulse"
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

