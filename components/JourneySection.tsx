"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Rocket, Briefcase, Award, Users, Server, Monitor } from "lucide-react"

const journeySteps = [
  {
    title: "Coding Passion Ignited",
    description: "Discovered the magic of turning ideas into reality through code",
    icon: <Code className="w-8 h-8 text-blue-500" />,
    year: "2019",
  },
  {
    title: "Frontend Development",
    description: "My journey in front-end development has been a creative and rewarding experience. Starting with basic HTML and CSS, I quickly dove into advanced frameworks like React.js and Next.js, crafting interactive, user-friendly interfaces. ",
    icon: <Monitor className="w-8 h-8 text-green-500" />,
    year: "2020",
  },
  {
    title: "Backend Development",
    description: "My journey in backend development has been a deep dive into the world of logic, systems, and problem-solving. Starting with foundational programming languages, I’ve grown proficient in building robust APIs, managing databases, and ensuring seamless server-side functionality.",
    icon: <Server className="w-8 h-8 text-green-500" />,
    year: "2021",
  },
  {
    title: "Full Stack Development",
    description: "My journey in full-stack development has been an exciting blend of creativity and logic. Combining front-end flair with back-end precision, I’ve mastered the art of building complete, end-to-end solutions. From crafting dynamic, user-friendly interfaces to designing secure, scalable server-side systems.",
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    year: "2022",
  },
  {
    title: "Collaborations",
    description: "My journey in collaborations has been all about teamwork, communication, and shared goals. Working with diverse teams, I’ve learned the importance of bringing different perspectives together to create innovative solutions.",
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    year: "2023",
  },
]

export default function JourneySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-3 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white name-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Tech Journey
        </motion.h2>
        <div className="relative">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="mb-16 md:mb-24 flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center z-10 mb-4 md:mb-0">
                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.2 : 1,
                    rotate: activeStep === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              <motion.div
                className="md:ml-8 text-center md:text-left"
                animate={{
                  x: activeStep === index ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-yellow-200 mb-2">{step.description}</p>
                <span className="text-sm font-semibold text-blue-500">{step.year}</span>
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            className="absolute h-full w-1 bg-gradient-to-b from-blue-300 via-green-300 to-purple-300 left-10 top-0 transform -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl text-gray-700 dark:text-white leading-relaxed">
            My journey in tech has been a thrilling adventure of continuous learning and growth. From writing my first
            lines of code to leading innovative projects, each step has shaped me into the developer I am today. I'm
            excited to bring this wealth of experience and passion to your next project!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

