"use client"

import { useState, useEffect, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { ViewProjectDialog } from "@/components/view-project-dialog"
import { Pagination } from "@/components/pagination"
import { getProjectsAction } from "@/lib/actions/projects"
import type { Project } from "@/lib/storage"
import { categoryConfig } from "@/lib/storage"
import { useMediaQuery } from "@/hooks/use-media-query"

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"basic" | "standard" | "pro">("basic")
  const [currentPages, setCurrentPages] = useState({
    basic: 1,
    standard: 1,
    pro: 1,
  })
  const [viewingProject, setViewingProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Responsive pagination
  const isLargeScreen = useMediaQuery("(min-width: 1024px)")
  const isMediumScreen = useMediaQuery("(min-width: 768px)")

  const getProjectsPerPage = () => {
    if (isLargeScreen) return 9 // 3x3 grid on large screens
    if (isMediumScreen) return 6 // 2x3 grid on medium screens
    return 5 // 5 projects on small screens as requested
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

  // Reset pages when screen size changes
  useEffect(() => {
    setCurrentPages({ basic: 1, standard: 1, pro: 1 })
  }, [isLargeScreen, isMediumScreen])

  const getFilteredProjects = (category: "basic" | "standard" | "pro") => {
    return projects.filter((project) => {
      const matchesCategory = project.category === category
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }

  const getPaginatedProjects = (category: "basic" | "standard" | "pro") => {
    const filtered = getFilteredProjects(category)
    const currentPage = currentPages[category]
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
    return {
      projects: filtered.slice(startIndex, startIndex + PROJECTS_PER_PAGE),
      totalPages: Math.ceil(filtered.length / PROJECTS_PER_PAGE),
      totalCount: filtered.length,
    }
  }

  const handlePageChange = (category: "basic" | "standard" | "pro", page: number) => {
    setCurrentPages((prev) => ({ ...prev, [category]: page }))
  }

  const handleView = (project: Project) => {
    setViewingProject(project)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    // Reset all pages when searching
    setCurrentPages({ basic: 1, standard: 1, pro: 1 })
  }

  const projectCounts = useMemo(() => {
    const counts = { basic: 0, standard: 0, pro: 0 }
    projects.forEach((project) => {
      counts[project.category]++
    })
    return counts
  }, [projects])

  const renderTabContent = (category: "basic" | "standard" | "pro") => {
    const { projects: paginatedProjects, totalPages, totalCount } = getPaginatedProjects(category)
    const currentPage = currentPages[category]
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE

    if (paginatedProjects.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            {searchQuery ? "No projects found" : `No ${categoryConfig[category].label.toLowerCase()} projects yet`}
          </h3>
          <p className="text-purple-500/70 dark:text-purple-400/70">
            {searchQuery
              ? "Try adjusting your search terms"
              : `Create your first ${categoryConfig[category].label.toLowerCase()} project to get started`}
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => {}} // No edit functionality on projects page
              onDelete={() => {}} // No delete functionality on projects page
              onView={handleView}
              showActions={false} // Hide edit/delete actions
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Showing {startIndex + 1}-{Math.min(startIndex + PROJECTS_PER_PAGE, totalCount)} of {totalCount}{" "}
              {categoryConfig[category].label.toLowerCase()} projects
            </p>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => handlePageChange(category, page)}
            />
          </div>
        )}
      </div>
    )
  }

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
            Projects Gallery
          </h1>
          <p className="text-purple-600 dark:text-purple-400 text-lg">Explore projects organized by category</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as "basic" | "standard" | "pro")}>
          <div className="max-w-3xl mx-auto mb-8">
            {/* Custom Tab Container */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-purple-200 dark:border-purple-500/30 rounded-2xl p-2 shadow-lg">
              <div className="grid grid-cols-3 gap-2">
                {/* Basic Tab */}
                <button
                  onClick={() => setActiveTab("basic")}
                  className={`relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "basic"
                      ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg transform scale-[0.98]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-teal-500" />
                  <span className="text-sm font-medium">Basic</span>
                  <span className="text-xs bg-white/20 dark:bg-slate-900/20 px-2 py-1 rounded-full min-w-[24px]">
                    {projectCounts.basic}
                  </span>
                </button>

                {/* Standard Tab */}
                <button
                  onClick={() => setActiveTab("standard")}
                  className={`relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "standard"
                      ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg transform scale-[0.98]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
                  <span className="text-sm font-medium">Standard</span>
                  <span className="text-xs bg-white/20 dark:bg-slate-900/20 px-2 py-1 rounded-full min-w-[24px]">
                    {projectCounts.standard}
                  </span>
                </button>

                {/* Pro Tab */}
                <button
                  onClick={() => setActiveTab("pro")}
                  className={`relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "pro"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg transform scale-[0.98]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600" />
                  <span className="text-sm font-medium">Pro</span>
                  <span className="text-xs bg-white/20 dark:bg-slate-900/20 px-2 py-1 rounded-full min-w-[24px]">
                    {projectCounts.pro}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <TabsContent value="basic" className="mt-8">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-400 h-4 w-4" />
                <Input
                  placeholder="Search basic projects..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 bg-white/70 dark:bg-slate-800/50 border-green-200 dark:border-green-500/30 text-slate-900 dark:text-white placeholder:text-green-500/70 dark:placeholder:text-green-400/70 focus:border-green-400 focus:ring-green-400/20"
                />
              </div>
            </div>
            {renderTabContent("basic")}
          </TabsContent>

          <TabsContent value="standard" className="mt-8">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 dark:text-blue-400 h-4 w-4" />
                <Input
                  placeholder="Search standard projects..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 bg-white/70 dark:bg-slate-800/50 border-blue-200 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder:text-blue-500/70 dark:placeholder:text-blue-400/70 focus:border-blue-400 focus:ring-blue-400/20"
                />
              </div>
            </div>
            {renderTabContent("standard")}
          </TabsContent>

          <TabsContent value="pro" className="mt-8">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 dark:text-purple-400 h-4 w-4" />
                <Input
                  placeholder="Search pro projects..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 bg-white/70 dark:bg-slate-800/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder:text-purple-500/70 dark:placeholder:text-purple-400/70 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
            </div>
            {renderTabContent("pro")}
          </TabsContent>
        </Tabs>

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
