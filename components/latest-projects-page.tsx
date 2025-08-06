"use client"

import { useState, useEffect } from "react"
import { Clock, Sparkles } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { ViewProjectDialog } from "@/components/view-project-dialog"
import { getAllProjectsPublic } from "@/lib/actions/projects"
import type { Project } from "@/lib/storage"

export function LatestProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [viewingProject, setViewingProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadProjects = async () => {
    setIsLoading(true)
    try {
      const projectsData = await getAllProjectsPublic()
      setProjects(
        projectsData.map((project) => ({
          ...project,
          createdAt: project.createdAt.toISOString(),
          updatedAt: project.updatedAt.toISOString(),
          liveUrl: project.liveUrl ?? undefined,
          image: project.image ?? undefined,
        })),
      )
    } catch (error) {
      console.error("Failed to load projects:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  const handleView = (project: Project) => {
    setViewingProject(project)
  }

  // Get the latest 3 projects based on creation date
  const latestProjects = projects
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-600 dark:text-purple-400">Loading latest projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Latest Projects
            </h1>
            <Sparkles className="h-8 w-8 text-purple-500 dark:text-purple-400" />
          </div>
          <p className="text-purple-600 dark:text-purple-400 text-lg">Discover the most recently created projects</p>
        </div>

        {/* Latest Projects Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-6 w-6 text-purple-500 dark:text-purple-400" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Recently Added</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-300 to-transparent dark:from-purple-500/50"></div>
          </div>

          {latestProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  onView={handleView}
                  showActions={false}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">No projects yet</h3>
              <p className="text-purple-500/70 dark:text-purple-400/70 mb-6">
                Create your first project to see it featured here
              </p>
            </div>
          )}
        </div>

        {/* Stats Section */}
        {projects.length > 0 && (
          <div className="bg-white/70 dark:bg-slate-800/50 rounded-2xl p-8 border border-purple-200 dark:border-purple-500/30 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
              Project Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">
                  {projects.filter((p) => p.category === "basic").length}
                </div>
                <div className="text-slate-600 dark:text-slate-400">Basic Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {projects.filter((p) => p.category === "standard").length}
                </div>
                <div className="text-slate-600 dark:text-slate-400">Standard Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {projects.filter((p) => p.category === "pro").length}
                </div>
                <div className="text-slate-600 dark:text-slate-400">Pro Projects</div>
              </div>
            </div>
          </div>
        )}

        {/* View Dialog */}
        <ViewProjectDialog
          project={viewingProject}
          open={!!viewingProject}
          onOpenChange={(open) => !open && setViewingProject(null)}
        />
      </div>
    </div>
  )
}
