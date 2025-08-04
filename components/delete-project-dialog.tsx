"use client"

import { useState } from "react"
import { Trash2, AlertTriangle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { deleteProjectAction } from "@/lib/actions/projects"
import type { Project } from "@/lib/storage"

interface DeleteProjectDialogProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

export function DeleteProjectDialog({ project, open, onOpenChange, onSuccess }: DeleteProjectDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!project) return

    setIsDeleting(true)
    try {
      const result = await deleteProjectAction(project.id)
      if (result.success) {
        onSuccess()
        onOpenChange(false)
      } else {
        console.error("Failed to delete project:", result.error)
      }
    } catch (error) {
      console.error("Failed to delete project:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-slate-800 border-red-200 dark:border-red-500/30 text-slate-900 dark:text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertTriangle className="h-5 w-5" />
            Delete Project
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-purple-400/80">
            This action cannot be undone. This will permanently delete the project.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-slate-100 dark:bg-slate-700/50 rounded-lg p-4 my-4">
          <h4 className="font-medium text-slate-900 dark:text-white mb-2">Project to delete:</h4>
          <p className="text-purple-600 dark:text-purple-400 font-semibold">{project.name}</p>
          {project.description && (
            <p className="text-slate-600 dark:text-purple-400/70 text-sm mt-1">{project.description}</p>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
            className="border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10"
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} disabled={isDeleting} className="bg-red-600 hover:bg-red-700 text-white">
            {isDeleting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Deleting...
              </div>
            ) : (
              <div className="flex items-center">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Project
              </div>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
