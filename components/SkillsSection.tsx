"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Braces, FileType, Palette, Database, GitBranch } from "lucide-react"

const skills = [
  { name: "React.js", percentage: 90, icon: <Braces className="w-6 h-6 text-blue-500" /> },
  { name: "TypeScript", percentage: 85, icon: <FileType className="w-6 h-6 text-blue-600" /> },
  { name: "JavaScript", percentage: 80, icon: <Code2 className="w-6 h-6 text-yellow-500" /> },
  { name: "Next.js", percentage: 75, icon: <Code2 className="w-6 h-6 text-black" /> },
  { name: "HTML/CSS", percentage: 70, icon: <Palette className="w-6 h-6 text-orange-500" /> },
  { name: "Node.js", percentage: 65, icon: <Database className="w-6 h-6 text-green-600" /> },
  { name: "Git", percentage: 60, icon: <GitBranch className="w-6 h-6 text-red-500" /> },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 name-header">Proficiency Overview & Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {skill.icon}
                <span className="ml-2 text-lg font-semibold text-gray-700">{skill.name}</span>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <motion.div
                    style={{ width: `${skill.percentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

