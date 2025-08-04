"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ProjectForm } from "@/components/project-form"
import { updateProjectAction, type ProjectFormData } from "@/lib/actions/projects"
import type { Project } from "@/lib/storage"

interface EditProjectDialogProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

export function EditProjectDialog({ project, open, onOpenChange, onSuccess }: EditProjectDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: ProjectFormData) => {
    if (!project) return

    setIsSubmitting(true)
    try {
      const result = await updateProjectAction(project.id, data)
      if (result.success) {
        onSuccess()
        onOpenChange(false)
      } else {
        console.error("Failed to update project:", result.error)
      }
    } catch (error) {
      console.error("Failed to update project:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-slate-800 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Edit Project
          </DialogTitle>
        </DialogHeader>
        <ProjectForm
          initialData={project}
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
          isSubmitting={isSubmitting}
          submitLabel="Update Project"
        />
      </DialogContent>
    </Dialog>
  )
}
