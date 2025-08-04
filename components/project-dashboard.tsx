"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, Plus, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProjectCard } from "@/components/project-card"
import { CreateProjectDialog } from "@/components/create-project-dialog"
import { EditProjectDialog } from "@/components/edit-project-dialog"
import { DeleteProjectDialog } from "@/components/delete-project-dialog"
import { ViewProjectDialog } from "@/components/view-project-dialog"
import { Pagination } from "@/components/pagination"
import { getProjectsAction } from "@/lib/actions/projects"
import type { Project } from "@/lib/storage"
import { categoryConfig } from "@/lib/storage"
import { useMediaQuery } from "@/hooks/use-media-query"

export function ProjectDashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [deletingProject, setDeletingProject] = useState<Project | null>(null)
  const [viewingProject, setViewingProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Responsive pagination
  const isLargeScreen = useMediaQuery("(min-width: 1024px)")
  const isMediumScreen = useMediaQuery("(min-width: 768px)")

  const getProjectsPerPage = () => {
    if (isLargeScreen) return 9 // 3x3 grid on large screens
    if (isMediumScreen) return 6 // 2x3 grid on medium screens
    return 4 // 1x4 grid on small screens
  }

  const PROJECTS_PER_PAGE = getProjectsPerPage()

  const loadProjects = async () => {
    setIsLoading(true)
    try {
      const projectsData = await getProjectsAction()
      setProjects(
        projectsData.map((project) => ({
          ...project,
          createdAt: project.createdAt.toISOString(),
          updatedAt: project.updatedAt.toISOString(),
          image: project.image ?? undefined,
          liveUrl: project.liveUrl ?? undefined,
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

  // Reset to page 1 when screen size changes
  useEffect(() => {
    setCurrentPage(1)
  }, [isLargeScreen, isMediumScreen])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = categoryFilter === "all" || project.category === categoryFilter

      return matchesSearch && matchesCategory
    })
  }, [projects, searchQuery, categoryFilter])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const handleProjectsUpdate = () => {
    loadProjects()
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
  }

  const handleDelete = (project: Project) => {
    setDeletingProject(project)
  }

  const handleView = (project: Project) => {
    setViewingProject(project)
  }

  const handleFilterChange = (value: string) => {
    setCategoryFilter(value)
    setCurrentPage(1)
  }

  // Get project counts by category
  const projectCounts = useMemo(() => {
    const counts = { all: projects.length, basic: 0, standard: 0, pro: 0 }
    projects.forEach((project) => {
      counts[project.category]++
    })
    return counts
  }, [projects])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-600 dark:text-purple-400">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            Project Dashboard
          </h1>
          <p className="text-purple-600 dark:text-purple-400 text-lg">Manage and showcase your amazing projects</p>
        </div>

        {/* Search, Filter and Create */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 dark:text-purple-400 h-4 w-4" />
            <Input
              placeholder="Search projects by name, description, or tech stack..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 bg-white/70 dark:bg-slate-800/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder:text-purple-500/70 dark:placeholder:text-purple-400/70 focus:border-purple-400 focus:ring-purple-400/20"
            />
          </div>

          <div className="flex gap-4">
            <Select value={categoryFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-48 bg-white/70 dark:bg-slate-800/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-800 border-purple-200 dark:border-purple-500/30">
                <SelectItem value="all" className="text-slate-900 dark:text-white">
                  All Projects ({projectCounts.all})
                </SelectItem>
                {Object.entries(categoryConfig).map(([key, config]) => (
                  <SelectItem key={key} value={key} className="text-slate-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.gradient}`} />
                      {config.label} ({projectCounts[key as keyof typeof projectCounts]})
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={() => setIsCreateOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Project
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {paginatedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onView={handleView}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Showing {startIndex + 1}-{Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)} of{" "}
                  {filteredProjects.length} projects
                </p>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
              {searchQuery || categoryFilter !== "all" ? "No projects found" : "No projects yet"}
            </h3>
            <p className="text-purple-500/70 dark:text-purple-400/70 mb-6">
              {searchQuery || categoryFilter !== "all"
                ? "Try adjusting your search terms or filters"
                : "Create your first project to get started"}
            </p>
            {!searchQuery && categoryFilter === "all" && (
              <Button
                onClick={() => setIsCreateOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Project
              </Button>
            )}
          </div>
        )}

        {/* Dialogs */}
        <CreateProjectDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} onSuccess={handleProjectsUpdate} />

        <EditProjectDialog
          project={editingProject}
          open={!!editingProject}
          onOpenChange={(open) => !open && setEditingProject(null)}
          onSuccess={handleProjectsUpdate}
        />

        <DeleteProjectDialog
          project={deletingProject}
          open={!!deletingProject}
          onOpenChange={(open) => !open && setDeletingProject(null)}
          onSuccess={handleProjectsUpdate}
        />

        <ViewProjectDialog
          project={viewingProject}
          open={!!viewingProject}
          onOpenChange={(open) => !open && setViewingProject(null)}
        />
      </div>
    </div>
  )
}
