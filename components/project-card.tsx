"use client"

import { useState } from "react"
import { ExternalLink, Edit, Trash2, ChevronDown, ChevronUp, MoreHorizontal, Star, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Project } from "@/lib/storage"
import { categoryConfig } from "@/lib/storage"

interface ProjectCardProps {
  project: Project
  onEdit?: (project: Project) => void
  onDelete?: (project: Project) => void
  onView: (project: Project) => void
  showActions?: boolean
}

export function ProjectCard({ project, onEdit, onDelete, onView, showActions = true }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const categoryStyle = categoryConfig[project.category]

  const truncateDescription = (text: string, lines = 2) => {
    const words = text.split(" ")
    const wordsPerLine = 15 // Approximate words per line
    const maxWords = lines * wordsPerLine

    if (words.length <= maxWords) return text
    return words.slice(0, maxWords).join(" ") + "..."
  }

  return (
    <Card
      className={`relative overflow-hidden bg-gradient-to-br ${categoryStyle.bgGradient} border-2 border-transparent bg-clip-padding transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group ${!showActions ? "cursor-pointer" : ""}`}
      onClick={!showActions ? () => onView(project) : undefined}
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge
          className={`bg-gradient-to-r ${categoryStyle.gradient} text-white font-semibold text-xs px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-200 border-0`}
        >
          <Star className="w-3 h-3 mr-1 fill-white" />
          {categoryStyle.label}
        </Badge>
      </div>

      <CardContent className="p-6">
        {/* Project Image */}
        {project.image && (
          <div className="mb-4 overflow-hidden rounded-lg shadow-md">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3
              className={`text-xl font-bold ${categoryStyle.textColor} group-hover:text-opacity-70 dark:group-hover:text-opacity-80 transition-all duration-200 ${showActions ? "flex-1 pr-2" : "w-full"}`}
            >
              {project.name}
            </h3>

            {/* Only show actions if showActions is true */}
            {showActions && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-slate-500 hover:text-slate-300 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-full transition-all duration-200"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-purple-200 dark:border-purple-500/30 shadow-lg"
                >
                  <DropdownMenuItem
                    onClick={() => onView(project)}
                    className="text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-500/10 cursor-pointer"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  {onEdit && (
                    <DropdownMenuItem
                      onClick={() => onEdit(project)}
                      className="text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-500/10 cursor-pointer"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Project
                    </DropdownMenuItem>
                  )}
                  {onDelete && (
                    <DropdownMenuItem
                      onClick={() => onDelete(project)}
                      className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Project
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-500 dark:group-hover:text-slate-200 text-sm leading-relaxed transition-colors duration-200">
            {truncateDescription(project.description)}
          </p>

          {/* Live Project Button */}
          {project.liveUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className={`w-full border-2 bg-gradient-to-r ${categoryStyle.gradient} text-white hover:opacity-90 hover:text-white/90 border-transparent shadow-md hover:shadow-lg transition-all duration-200`}
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live Project
              </a>
            </Button>
          )}

          {/* Tech Stack Accordion */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-between ${categoryStyle.textColor} group-hover:text-opacity-70 dark:group-hover:text-opacity-80 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200`}
              >
                <span className="font-medium">Tech Stack ({project.techStack.length})</span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pt-2">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={`${categoryStyle.badgeColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>

      {/* Decorative elements */}
      <div
        className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r ${categoryStyle.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      />
      <div
        className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r ${categoryStyle.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
      />
    </Card>
  )
}
