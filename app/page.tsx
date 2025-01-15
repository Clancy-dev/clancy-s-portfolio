'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import LatestProjects from '@/components/LatestProjects'
import { IconCloud } from '@/components/ui/icon-cloud'
import { TechStack } from '@/components/TechStack'
import ReviewSection from '@/components/ReviewSection'
import StatisticsSection from '@/components/StatisticsSection'
import LatestSection from '@/components/LatestSection'


const technologies = ['TypeScript', 'Node.js', 'React.js', 'Next.js', 'Tailwind CSS', 'Sass', 'JavaScript', 'HTML/CSS']

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    image: "/project1.jpg",
    link: "/projects/ecommerce"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team features.",
    image: "/project2.jpg",
    link: "/projects/taskmanager"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my skills and projects.",
    image: "/project3.jpg",
    link: "/projects/portfolio"
  }
]

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    content: "Clancy is an exceptional developer. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "Jane Smith",
    role: "Project Manager, Web Solutions",
    content: "Working with Clancy was a pleasure. He consistently delivered high-quality work on time."
  }
]

export default function Home() {
  return (
    <div>
      <AnimatedSection>
        <HeroSection/>
      </AnimatedSection>
      <AnimatedSection>
        <StatisticsSection/>
      </AnimatedSection>

      {/* <AnimatedSection>
        <SectionSlicedProjects/>
      </AnimatedSection> */}
      <AnimatedSection className='w-[100%] h-[50vh] bg-gray-100 flex items-center justify-center flex-col'>
      <h2 className="text-4xl font-semibold text-center mb-4 mt-3 text-gray-800 dark:text-white name-header">My Tech Stack</h2>
        <TechStack/>   
      </AnimatedSection>
      <AnimatedSection>
     
        <ReviewSection/>
      </AnimatedSection>

      {/* <AnimatedSection className=" bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 text-center"
              >
                {tech}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      {/* <AnimatedSection>
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      {/* <AnimatedSection className=" bg-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8">Let's work together to bring your ideas to life!</p>
          <Link href="/contact" className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded transition duration-300">
            Get in Touch
          </Link>
        </div>
      </AnimatedSection> */}
    </div>
  )
}

