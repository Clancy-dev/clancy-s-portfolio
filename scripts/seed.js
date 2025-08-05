const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  // Clear existing data
  await prisma.project.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  console.log("✅ Database cleared!")
  console.log("🎉 Ready for new users to register!")

  // Create sample projects
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      liveUrl: "https://example-ecommerce.com",
      image: "/placeholder.svg?height=300&width=400",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "pro",
    },
    {
      name: "Weather App",
      description:
        "A responsive weather application that provides current weather conditions and forecasts using OpenWeatherMap API.",
      liveUrl: "https://example-weather.com",
      image: "/placeholder.svg?height=300&width=400",
      techStack: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      category: "basic",
    },
    {
      name: "Task Management System",
      description:
        "A comprehensive task management application with team collaboration features, built with modern web technologies.",
      liveUrl: "https://example-tasks.com",
      image: "/placeholder.svg?height=300&width=400",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
      category: "standard",
    },
    {
      name: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      liveUrl: "https://example-portfolio.com",
      image: "/placeholder.svg?height=300&width=400",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "standard",
    },
    {
      name: "Blog Platform",
      description:
        "A full-featured blogging platform with markdown support, comments, and admin dashboard for content management.",
      liveUrl: "https://example-blog.com",
      image: "/placeholder.svg?height=300&width=400",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Markdown"],
      category: "pro",
    },
    {
      name: "Calculator App",
      description:
        "A simple yet elegant calculator application with basic arithmetic operations and a clean user interface.",
      liveUrl: "https://example-calculator.com",
      image: "/placeholder.svg?height=300&width=400",
      techStack: ["HTML", "CSS", "JavaScript"],
      category: "basic",
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  console.log("✅ Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
