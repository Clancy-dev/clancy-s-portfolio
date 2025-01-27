"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import PortfolioCard from "./PortfolioCard"


const projects = [
    { id: 1, image: "/brand/brand1.png?height=200&width=200" },
  { id: 2, image: "/brand/brand2.jpg?height=200&width=200" },
  { id: 3, image: "/brand/brand3.png?height=200&width=200" },
  { id: 4, image: "/brand/brand4.png?height=200&width=200" },
  { id: 5, image: "/brand/brand5.jpg?height=200&width=200" },
  { id: 6, image: "/brand/brand6.png?height=200&width=200" },
  { id: 7, image: "/brand/brand7.jpg?height=200&width=200" },
  { id: 8, image: "/brand/brand8.jpg?height=200&width=200" },
  { id: 9, image: "/brand/brand9.png?height=200&width=200" },
  { id: 10, image: "/brand/brand10.png?height=200&width=200" },
  { id: 11, image: "/brand/brand11.jpg?height=200&width=200" },
  // Add more projects as needed
]

export default function PortfolioSection() {
  const [duplicatedProjects, setDuplicatedProjects] = useState(projects)
  const controls = useAnimationControls()

  useEffect(() => {
    setDuplicatedProjects([...projects, ...projects])
  }, [])

  useEffect(() => {
    const totalWidth = duplicatedProjects.length * 220 // 200px for image + 20px for gap
    const duration = totalWidth / 20 // Adjust this value to control speed (smaller = faster)

    controls.start({
      x: [0, -totalWidth / 2],
      transition: {
        duration,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    })
  }, [duplicatedProjects, controls])

  return (
    <section className="py-2 px-1 bg-gradient-to-r from-gray-50 to-gray-100 w-full" aria-label="Project Portfolio">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={controls}
            style={{ width: `${duplicatedProjects.length * 220}px` }}
          >
            {duplicatedProjects.map((project, index) => (
              <PortfolioCard key={`${project.id}-${index}`} {...project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

