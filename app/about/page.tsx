import AnimatedSection from '../../components/AnimatedSection'

export default function About() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12 mt-[72px]">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedSection initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <p className="mb-4">
            I'm Clancy Ssekisambu, a passionate Full Stack Developer with years of experience in building robust and scalable web applications. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a fulfilling career where I get to create solutions that make a difference.
          </p>
          <p className="mb-4">
            I specialize in JavaScript technologies, with a focus on React.js for frontend development and Node.js for backend services. I'm also experienced in working with databases, API design, and system architecture.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, mentoring aspiring developers, or exploring the latest trends in web technologies.
          </p>
        </AnimatedSection>
        <AnimatedSection initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-2xl font-semibold mb-4">Career Highlights</h2>
          <ul className="space-y-4">
            <li>
              <strong>2021-Present:</strong> Senior Full Stack Developer at TechCorp, leading a team in developing enterprise-level web applications.
            </li>
            <li>
              <strong>2018-2021:</strong> Full Stack Developer at WebSolutions, where I honed my skills in React.js and Node.js.
            </li>
            <li>
              <strong>2016-2018:</strong> Junior Developer at StartupX, where I started my journey in web development.
            </li>
          </ul>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  )
}

