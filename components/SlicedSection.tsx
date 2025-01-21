'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

// const projects: Project[] = [
//   {
//     title: "Sefbuy",
//     description: "SEFBUY is an Ecommerce website designed to provide a seamless shopping experience for customers.",
//     image: "/project1.png?height=300&width=500",
//     link: "https://sefbuy.com/"
//   },
//   {
//     title: "Lamudi",
//     description: "Lamudi is a leading real estate platform connecting buyers and sellers across Uganda.",
//     image: "/project2.png?height=300&width=500",
//     link: "https://www.lamudi.co.ug/Lamudi/Index.aspx"
//   },
//   {
//     title: "Gaba Hope For Kids",
//     description: "This is a Charity Organization supporting unprivileged children with Education, Healthcare and Empowerment in Uganda.",
//     image: "/project3.png?height=300&width=500",
//     link: "https://www.gabahopeforkids.org/"
//   }
// ]

const BreathingBackground = () => (
  <div className="absolute inset-0 z-0">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
        </pattern>
      </defs>
      <motion.rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  </div>
)

const AnimatedSection = motion.section

export default function SlicedSection({sectionProjectData}: {sectionProjectData: Project[]}) {
 
    return (
    <AnimatedSection className="relative overflow-hidden">
      <BreathingBackground />
      <div className="latest-container-copy relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-4  text-gray-800 dark:text-white name-header">Latest Projects</h2>
        <div className="latest-card-container">
          {sectionProjectData.slice
          (0,3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-64 w-full image-container">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110 inner-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link href={project.link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="w-[100%] h-[10vh] mt-3 flex items-center justify-center">

          <button className='bg-blue-500  hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-sm'>
            <Link href="/projects">
            View All Projects  
            </Link>
          </button>
        </div>
      </div>
    </AnimatedSection>
  )
}

