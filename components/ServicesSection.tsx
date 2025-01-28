"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Code, Cloud, Bot, Search, Shield } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description: "Stunning, responsive websites that captivate your audience",
    icon: <Globe className="w-16 h-16 text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    title: "Web Applications",
    description: "Powerful, scalable apps that streamline your business",
    icon: <Code className="w-16 h-16 text-green-500" />,
    color: "bg-green-100",
  },
  {
    title: "API & Cloud Services",
    description: "Seamless integration and scalable cloud solutions",
    icon: <Cloud className="w-16 h-16 text-purple-500" />,
    color: "bg-purple-100",
  },
  {
    title: "AI & Chatbots",
    description: "Intelligent automation to enhance user experiences",
    icon: <Bot className="w-16 h-16 text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "SEO & Analytics",
    description: "Data-driven strategies to boost your online presence",
    icon: <Search className="w-16 h-16 text-yellow-500" />,
    color: "bg-yellow-100",
  },
  {
    title: "Cyber Security",
    description: "Robust protection for your digital assets and data",
    icon: <Shield className="w-16 h-16 text-indigo-500" />,
    color: "bg-indigo-100",
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  //
  return (
    <section ref={ref} className="py-2 pt-3 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-800"> 
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white name-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`${service.color} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all dark:bg-gray-950 duration-300 transform hover:-translate-y-2`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-white shadow-md">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 text-center text-lg dark:text-yellow-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
    
      </div>
    </section>
  )
}

