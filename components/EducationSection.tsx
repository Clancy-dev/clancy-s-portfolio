"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"

const educationData = [
  {
    level: "Primary",
    school: "Hillside Nursery and Primary School",
    logo: "/hillside-logo.jpg",
  },
  {
    level: "O Level",
    school: "Seeta High School",
    logo: "/seeta.jpg",
  },
  {
    level: "A Level",
    school: "Naalya Secondary School",
    logo: "/naalya-logo.png",
  },
  {
    level: "Higher Education",
    school: "Makerere University Business School",
    logo: "/mubs.jfif",
  },
]

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-gray-800 name-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Educational Journey
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.level}
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={edu.logo || "/placeholder.svg"}
                  alt={`${edu.school} logo`}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">{edu.level}</h3>
              <p className="text-gray-600 text-center">{edu.school}</p>
              <AnimatePresence>
                
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-4"
          >
            Download CV
            <Download className="ml-2 w-5 h-5" />
          </a>
          
        </motion.div>
      </div>
    </section>
  )
}

