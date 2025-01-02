'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'

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
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/hero.png"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <AnimatedSection className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <AnimatedText 
              texts={["Clancy Ssekisambu", "Ready to Work"]} 
              className="text-4xl md:text-5xl font-bold mb-4 text-white h-20" 
            />
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-300 mb-8">
              Specializing in building high-performance websites, web applications, and systems.
            </p>
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Get in Touch
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/profile.png"
                alt="Clancy Ssekisambu"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px] border-t-0 profile-box-shadow border-[2px] border-[rgb(5,226,2)]"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in building scalable web applications. 
            With a strong foundation in both front-end and back-end technologies, I create seamless user experiences and robust server-side solutions.
          </p>
          <div className="text-center">
            <Link href="/about" className="text-blue-500 hover:text-blue-600 font-semibold">
              Learn More About Me
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link href={project.link} className="text-blue-500 hover:text-blue-600 font-semibold">
                    View Project
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              View All Projects
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-800">
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
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
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
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8">Let's work together to bring your ideas to life!</p>
          <Link href="/contact" className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded transition duration-300">
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}

