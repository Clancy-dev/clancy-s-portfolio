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

     </div>
  )
}

