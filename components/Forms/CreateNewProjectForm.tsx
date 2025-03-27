"use client"

import { createNewProject } from "@/actions/Project"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export type ProjectProps = {
  image: string
  title: string
  description: string
  link: string
  slug: string
}

export default function CreateNewProjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProjectProps>()
  const [formError, setFormError] = useState("")
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState("/emptyImage.png")
  const [description, setDescription] = useState("")
  const router = useRouter()

  async function saveData(data: ProjectProps) {
    data.slug = data.title.toLowerCase().split(" ").join("-")
    data.image = imageUrl
    data.description = description // Use the description from rich text editor
    try {
      setLoading(true)
      await createNewProject(data)
      toast.success("Project created successfully.")
      router.push("/project")
      router.refresh()
      reset()
      setDescription("")
    } catch (error) {
      toast.error("Failed to create the project.")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="p-5 mt-[72px]">
      <Card className="w-full max-w-4xl mx-auto shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800">
          <CardTitle className="text-2xl font-bold text-center text-white">New Project</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6 bg-white">
          <form className="space-y-6" onSubmit={handleSubmit(saveData)}>
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-700 font-medium">
                Project Title
              </Label>
              <Input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter project title"
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700 font-medium">
                Description
              </Label>
             
              {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
            </div>

            {formError && <p className="text-sm text-red-500">{formError}</p>}

            <div className="space-y-2">
              <Label htmlFor="link" className="text-gray-700 font-medium">
                Project Link
              </Label>
              <Input
                type="text"
                id="link"
                {...register("link", { required: "Link for your project is required" })}
                placeholder="Enter your Project link"
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.link && <p className="text-sm text-red-500">{errors.link.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-gray-700 font-medium">
                Project Image
              </Label>
              <div className="bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <div className="p-4 flex flex-col items-center justify-center">
                  <div className="mb-4 w-48 h-48 relative">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt="Project preview"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setImageUrl(res[0].url)
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`Upload failed: ${error.message}`)
                    }}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating New Project...
                </span>
              ) : (
                "Create New Project"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

