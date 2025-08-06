import { IconCloud } from "./ui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export function TechStack() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-950 dark:via-slate-900 dark:to-black overflow-hidden">
      {/* Background decoration matching hero */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 dark:opacity-3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-['Inter',_'system-ui',_sans-serif]">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto font-['Inter',_'system-ui',_sans-serif]">
            Technologies and tools I use to bring your ideas to life
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative flex w-full h-full max-w-4xl items-center justify-center overflow-hidden min-h-[500px]">
            <div className="scale-150 sm:scale-125 md:scale-150 lg:scale-175">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
