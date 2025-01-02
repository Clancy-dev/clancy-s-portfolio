import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoLink: string
  githubLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, demoLink, githubLink }) => {
  return (
    <div className="border rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Technologies used:</h3>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm">{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <Link href={demoLink} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          View Demo
        </Link>
        <Link href={githubLink} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          GitHub Repo
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

