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

const projects: Project[] = [
  {
    title: "SEFBUY",
    description: "SEFBUY is an Ecommerce website designed to provide a seamless shopping experience for customers. It offers a wide range of products, from clothing and electronics to home goods, with an intuitive user interface that makes browsing and purchasing easy. ",
    image: "/project1.png?height=300&width=500",
    link: "https://sefbuy.com/"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=300&width=500",
    link: "/projects/2"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=300&width=500",
    link: "/projects/3"
  }
]

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

export default function LatestProjects() {
  return (
    <AnimatedSection className="relative overflow-hidden">
      <BreathingBackground />
      <div className="latest-container relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-4 text-gray-800 dark:text-white">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
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
        <div className="text-center mt-16">
          <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
            View All Projects
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

