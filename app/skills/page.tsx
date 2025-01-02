import AnimatedSection from '../../components/AnimatedSection'

const skills = [
  { name: "TypeScript", proficiency: 90 },
  { name: "Node.js", proficiency: 85 },
  { name: "React.js", proficiency: 95 },
  { name: "Next.js", proficiency: 90 },
  { name: "Tailwind CSS", proficiency: 85 },
  { name: "Sass", proficiency: 80 },
  { name: "JavaScript", proficiency: 95 },
  { name: "HTML/CSS", proficiency: 90 },
]

export default function Skills() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <AnimatedSection
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <div className="flex justify-between mb-1">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  )
}

