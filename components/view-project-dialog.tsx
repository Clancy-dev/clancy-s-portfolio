"use client"

import { ExternalLink, Calendar, Star, Code, Globe } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Project } from "@/lib/storage"
import { categoryConfig } from "@/lib/storage"

interface ViewProjectDialogProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ViewProjectDialog({ project, open, onOpenChange }: ViewProjectDialogProps) {
  if (!project) return null

  const categoryStyle = categoryConfig[project.category]
  const createdDate = new Date(project.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const updatedDate = new Date(project.updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-slate-800 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Project Details
            </DialogTitle>
            <Badge className={`${categoryStyle.badgeColor} font-semibold px-3 py-1`}>
              <Star className="w-4 h-4 mr-1" />
              {categoryStyle.label}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          {project.image && (
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${categoryStyle.gradient} opacity-20`} />
            </div>
          )}

          {/* Project Header */}
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold ${categoryStyle.textColor}`}>{project.name}</h1>

            {/* Live Project Button */}
            {project.liveUrl && (
              <Button
                asChild
                size="lg"
                className={`bg-gradient-to-r ${categoryStyle.gradient} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-200`}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5 mr-2" />
                  View Live Project
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            )}
          </div>

          <Separator className="bg-purple-200 dark:bg-purple-500/30" />

          {/* Project Description */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <div className={`w-1 h-6 bg-gradient-to-b ${categoryStyle.gradient} rounded-full`} />
              Description
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{project.description}</p>
          </div>

          <Separator className="bg-purple-200 dark:bg-purple-500/30" />

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${categoryStyle.badgeColor} text-sm px-3 py-1 shadow-sm hover:shadow-md transition-shadow duration-200`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="bg-purple-200 dark:bg-purple-500/30" />

          {/* Project Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Created
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{createdDate}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Last Updated
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{updatedDate}</p>
            </div>
          </div>

          {/* Project Stats */}
          <div
            className={`bg-gradient-to-r ${categoryStyle.bgGradient} rounded-xl p-6 border border-purple-200 dark:border-purple-500/30`}
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Project Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${categoryStyle.textColor}`}>{project.techStack.length}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${categoryStyle.textColor}`}>{categoryStyle.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Category</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${categoryStyle.textColor}`}>
                  {project.liveUrl ? "Live" : "Draft"}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Status</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${categoryStyle.textColor}`}>
                  {Math.ceil(project.description.length / 100)}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Complexity</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
