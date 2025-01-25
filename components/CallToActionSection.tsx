"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react"

export default function CallToActionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const contactOptions = [
    { icon: Mail, text: "Email", href: "mailto:clancyro1000@gmail.com" },
    { icon: Phone, text: "Call", href: "tel:+256 770983239" },
    { icon: Calendar, text: "Schedule a Meeting", href: "/contact" },
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 name-header"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-base md:text-lg mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Get in touch and let's create something exceptional together.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.text}
                href={option.href}
                className="group flex items-center space-x-2 bg-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-md border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredButton(option.text)}
                onMouseLeave={() => setHoveredButton(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <option.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{option.text}</span>
                <motion.div
                  className="overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredButton === option.text ? "auto" : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

