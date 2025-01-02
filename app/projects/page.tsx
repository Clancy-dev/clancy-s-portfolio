import ProjectCard from '../../components/ProjectCard'
import AnimatedSection from '../../components/AnimatedSection'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://ecommerce-demo.example.com",
    githubLink: "https://github.com/clancyssekisambu/ecommerce-platform",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team features.",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
    demoLink: "https://taskmanager-demo.example.com",
    githubLink: "https://github.com/clancyssekisambu/task-manager",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ProjectCard {...project} />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  )
}

