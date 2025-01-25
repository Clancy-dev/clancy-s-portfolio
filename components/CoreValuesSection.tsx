"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Shield, Target, Heart, Users, Zap } from "lucide-react"

const coreValues = [
  {
    title: "Creativity",
    description: "Bringing innovative solutions to every project",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Reliability",
    description: "Delivering high-quality work, on time, every time",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Excellence",
    description: "Striving for the best in everything I do",
    icon: <Target className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Passion",
    description: "Loving what I do and putting my heart into every project",
    icon: <Heart className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Collaboration",
    description: "Working effectively with clients and team members",
    icon: <Users className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Adaptability",
    description: "Quickly learning and adapting to new technologies",
    icon: <Zap className="w-8 h-8 text-purple-500" />,
  },
]

export default function CoreValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 name-header">My Core Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-700">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

