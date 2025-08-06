"use client"
import type React from "react"
import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { X, Plus, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock types for demonstration
type Project = {
  id?: string
  name: string
  description: string
  liveUrl?: string
  image?: string
  techStack: string[]
  category: Category
}

type ProjectFormData = Omit<Project, 'id'>

enum Category {
  basic = "basic",
  intermediate = "intermediate",
  advanced = "advanced"
}

const categoryConfig = {
  [Category.basic]: {
    label: "Basic",
    gradient: "from-green-400 to-blue-500",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
  },
  [Category.intermediate]: {
    label: "Intermediate", 
    gradient: "from-yellow-400 to-orange-500",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
  },
  [Category.advanced]: {
    label: "Advanced",
    gradient: "from-purple-400 to-pink-500", 
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
  }
}

// Mock upload component
// const UploadButtonSection = ({ onUploadComplete }: { onUploadComplete: (url: string) => void }) => (
//   <div className="border-2 border-dashed border-purple-200 dark:border-purple-500/30 rounded-lg p-4 text-center">
//     <Button type="button" variant="outline" onClick={() => onUploadComplete("/placeholder.svg?height=200&width=400")}>
//       Upload Image
//     </Button>
//   </div>
// )

// Replace with your actual UploadButton component
const UploadButton = ({ onUploadComplete }: { onUploadComplete: (url: string) => void }) => {
  // Replace this with your actual upload logic
  const handleUpload = () => {
    // Simulate an upload and return a placeholder URL
    onUploadComplete("/placeholder.svg?height=200&width=400");
  };

  return (
    <div className="border-2 border-dashed border-purple-200 dark:border-purple-500/30 rounded-lg p-4 text-center">
      <Button type="button" variant="outline" onClick={handleUpload}>
        Upload Image
      </Button>
    </div>
  );
};

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  liveUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  image: z.string().optional(),
  techStack: z.array(z.string()).min(1, "At least one technology is required"),
  category: z.nativeEnum(Category, {
    required_error: "Please select a category",
  }),
})

interface ProjectFormProps {
  initialData?: Project
  onSubmit: (data: ProjectFormData) => Promise<void>
  onCancel: () => void
  isSubmitting: boolean
  submitLabel: string
}

export function ProjectForm({ initialData, onSubmit, onCancel, isSubmitting, submitLabel }: ProjectFormProps) {
  const [newTech, setNewTech] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string>(initialData?.image || "")

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      liveUrl: initialData?.liveUrl || "",
      image: initialData?.image || "",
      techStack: initialData?.techStack || [],
      category: initialData?.category || Category.basic,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "techStack",
  })

  const handleSubmit = async (data: ProjectFormData) => {
    try {
      await onSubmit({ ...data, image: uploadedImage || data.image })
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const handleClear = () => {
    form.reset({
      name: "",
      description: "",
      liveUrl: "",
      image: "",
      techStack: [],
      category: Category.basic,
    })
    setNewTech("")
    setUploadedImage("")
  }

  const addTech = () => {
    const currentTechStack = form.watch("techStack")
    if (newTech.trim() && !currentTechStack.includes(newTech.trim())) {
      append(newTech.trim())
      setNewTech("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTech()
    }
  }

  const handleUploadComplete = (url: string) => {
    setUploadedImage(url)
    form.setValue("image", url)
  }

  const selectedCategory = form.watch("category")
  const categoryStyle = categoryConfig[selectedCategory]

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Project Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-purple-600 dark:text-purple-400">
            Project Name *
          </Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="Enter project name"
            className="bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-purple-400/70 focus:border-purple-400"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label className="text-purple-600 dark:text-purple-400">Project Category *</Label>
          <Select value={selectedCategory} onValueChange={(value: Category) => form.setValue("category", value)}>
            <SelectTrigger className="bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white focus:border-purple-400">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-800 border-purple-200 dark:border-purple-500/30">
              {Object.entries(categoryConfig).map(([key, config]) => (
                <SelectItem
                  key={key}
                  value={key}
                  className="text-slate-900 dark:text-white hover:bg-purple-50 dark:hover:bg-purple-500/10"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.gradient}`} />
                    {config.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.category && (
            <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.category.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-purple-600 dark:text-purple-400">
            Description *
          </Label>
          <Textarea
            id="description"
            {...form.register("description")}
            placeholder="Describe your project..."
            rows={4}
            className="bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-purple-400/70 focus:border-purple-400 resize-none"
          />
          {form.formState.errors.description && (
            <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.description.message}</p>
          )}
        </div>

        {/* Live URL */}
        <div className="space-y-2">
          <Label htmlFor="liveUrl" className="text-purple-600 dark:text-purple-400">
            Live Project URL
          </Label>
          <Input
            id="liveUrl"
            {...form.register("liveUrl")}
            placeholder="https://your-project.com"
            className="bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-purple-400/70 focus:border-purple-400"
          />
          {form.formState.errors.liveUrl && (
            <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.liveUrl.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <Label className="text-purple-600 dark:text-purple-400">Project Image (Optional)</Label>
          <div className="space-y-4">
            {(uploadedImage || form.watch("image")) && (
              <div className="relative">
                <img
                  src={uploadedImage || form.watch("image")}
                  alt="Project preview"
                  className="w-full h-48 object-cover rounded-lg border border-purple-200 dark:border-purple-500/30"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setUploadedImage("")
                    form.setValue("image", "")
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            <UploadButton onUploadComplete={handleUploadComplete} />
          </div>
        </div>

        {/* Tech Stack - FIXED SECTION */}
        <div className="space-y-2">
          <Label className="text-purple-600 dark:text-purple-400">Tech Stack *</Label>
          <div className="flex gap-2">
            <Input
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add technology (e.g., React, Node.js)"
              className="bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-purple-400/70 focus:border-purple-400"
            />
            <Button
              type="button"
              onClick={addTech}
              variant="outline"
              className="border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 bg-transparent"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {fields.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {fields.map((field, index) => {
                const techStackValues = form.watch("techStack")
                return (
                  <Badge key={field.id} variant="secondary" className={`${categoryStyle.badgeColor} pr-1`}>
                    {techStackValues[index]}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-1 ml-1 hover:bg-red-500/20"
                      onClick={() => remove(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              })}
            </div>
          )}
          {form.formState.errors.techStack && (
            <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.techStack.message}</p>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleClear}
            disabled={isSubmitting}
            className="border-cyan-400 dark:border-cyan-500/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 bg-transparent"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Clear Form
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
            className="border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 bg-transparent"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r ${categoryStyle.gradient} hover:opacity-90 text-white flex-1 transition-all duration-200`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                {submitLabel.includes("Create") ? "Creating..." : "Updating..."}
              </>
            ) : (
              submitLabel
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

// Demo component to show the form in action
export default function ProjectFormDemo() {
  const handleSubmit = async (data: ProjectFormData) => {
    console.log("Form submitted:", data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const handleCancel = () => {
    console.log("Form cancelled")
  }

  return (
    <ProjectForm
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      isSubmitting={false}
      submitLabel="Create Project"
    />
  )
}
