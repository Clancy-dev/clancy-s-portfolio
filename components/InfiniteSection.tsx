"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import InfiniteCard from "./InfiniteCard"


const projects = [
  { id: 1, image: "/brand/brand1.png?height=100&width=100" },
  { id: 2, image: "/brand/brand2.jpg?height=100&width=100" },
  { id: 3, image: "/brand/brand3.png?height=100&width=100" },
  { id: 4, image: "/brand/brand4.png?height=100&width=100" },
  { id: 5, image: "/brand/brand5.jpg?height=100&width=100" },
  { id: 6, image: "/brand/brand6.png?height=100&width=100" },
  { id: 7, image: "/brand/brand7.jpg?height=100&width=100" },
  { id: 8, image: "/brand/brand8.jpg?height=100&width=100" },
  { id: 9, image: "/brand/gm.png?height=100&width=100" },
  { id: 10, image: "/brand/brand91.png?height=100&width=100" },
  { id: 11, image: "/brand/brand101.png?height=100&width=100" },
  { id: 12, image: "/brand/brand11.jpg?height=100&width=100" },
  { id: 13, image: "/brand/sena.jpg?height=100&width=100" },
  { id: 14, image: "/brand/brand12.png?height=100&width=100" },
  { id: 15, image: "/brand/brand13.png?height=100&width=100" },
]

export default function InfiniteSection() {
  const [isClient, setIsClient] = useState(false)
  const controls = useAnimationControls()
  
  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects]
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const cardWidth = 220 // 120px card + 100px gap (space-x-8 = 32px, but we need more for proper spacing)
    const totalWidth = projects.length * cardWidth
    const duration = totalWidth / 50 // Adjust speed here (lower = faster)

    const startAnimation = async () => {
      await controls.start({
        x: [-totalWidth, 0],
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      })
    }

    startAnimation()
  }, [isClient, controls])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-950 dark:via-slate-900 dark:to-black overflow-hidden" aria-label="Project Portfolio">
      {/* Background decoration - no bubbles, just subtle patterns */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 dark:opacity-3"></div>
            
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-['Inter',_'system-ui',_sans-serif]">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Trusted By
            </span>
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto font-['Inter',_'system-ui',_sans-serif]">
            Brands and companies that have trusted me with their digital presence
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 via-purple-900/50 to-transparent dark:from-gray-950 dark:via-slate-900/50 z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 via-purple-900/50 to-transparent dark:from-gray-950 dark:via-slate-900/50 z-10"></div>
                    
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={controls}
              style={{ 
                width: `${duplicatedProjects.length * 220}px`,
                willChange: 'transform'
              }}
            >
              {duplicatedProjects.map((project, index) => (
                <InfiniteCard key={`${project.id}-${index}`} {...project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements - minimal and elegant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-600/3 dark:to-pink-600/3 rounded-full"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 25}s infinite ease-in-out ${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  )
}
