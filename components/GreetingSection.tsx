"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Globe, Server } from "lucide-react"

export default function GreetingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="py-20 bg-cover bg-center relative w-full lg:h-90vh md:h-[80vh] sm:h-[60vh] min-h-[60vh] bg-gray-800 "
      style={{ backgroundImage: "url('/all-screens.png?height=1080&width=1920')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold mb-6 text-white">Welcome! I'm Clancy Ssekisambu</h1>
          <p className="text-2xl mb-8 text-gray-200 ">A Passionate Ugandan Web Developer</p>
          <div className="flex justify-center space-x-8 mb-12">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code className="w-12 h-12 mb-2" />
              <span>Clean Code</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Globe className="w-12 h-12 mb-2 " />
              <span>Global Perspective</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Server className="w-12 h-12 mb-2" />
              <span>Scalable Solutions</span>
            </motion.div>
          </div>
          <motion.p
            className="text-xl text-gray-200 about-words"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            With a blend of creativity and technical expertise, I bring your digital visions to life. My passion for web
            development, combined with my Ugandan roots, allows me to offer unique perspectives and innovative solutions
            to every project.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

