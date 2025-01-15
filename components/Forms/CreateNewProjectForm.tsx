"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { createNewProject } from "@/actions/Project";
import Image from "next/image";
import { UploadButton } from "@/utils/uploadthing";

export type ProjectProps = {
    image :string;
    title: string;
    description: string;
    link:string;
    slug: string;
}

export default function CreateNewProjectForm() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectProps>();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const[imageUrl,setImageUrl] = useState("/emptyImage.png")
  const router = useRouter();

  async function saveData(data: ProjectProps) {
    data.slug = data.title.toLowerCase().split(" ").join("-");
    data.image = imageUrl;
    try {
      setLoading(true)
      await createNewProject(data) 
      toast.success("Project created successfully.")
      router.push("/project")
      router.refresh()
      reset()  
    } catch (error) {
      toast.error("Failed to create the project.")
      console.log(error) 
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="p-5 mt-[72px]">
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-500 to-blue-900 shadow-xl">
      <CardHeader className="text-white">
        <CardTitle className="text-2xl font-bold text-center mb-2">New Project</CardTitle>
      </CardHeader>
      <CardContent className="bg-white bg-opacity-90 rounded-b-lg">
        <form className="space-y-6" onSubmit={handleSubmit(saveData)}>
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700">Project Title</Label>
            <Input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              placeholder="Enter project title"
              className="bg-white"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700">Description</Label>
            <Textarea
              id="description"
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Enter a brief description of the project"
              className="bg-white"
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>

          {formError && <p className="text-sm text-red-500">{formError}</p>}

          <div className="space-y-2">
            <Label htmlFor="link" className="text-gray-700">Link for your Project</Label>
            <Input
              type="text"
              id="link"
              {...register("link", { required: "Link for your project is required" })}
              placeholder="Enter your Project link"
              className="bg-white"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.link?.message}</p>
            )}
          </div>
          <div className="space-y-2 ">
          <Label htmlFor="title" className="text-gray-700">Project Image</Label>
          <div className="w-full min-h-[40vh]  bg-slate-300 rounded-[10px]">
            <div className="w-full h-[30vh] flex items-center justify-center ">
              <Image
              src={imageUrl}
              width={512}
              height={512}
              alt="Image name"
              className="max-h-[100%] max-w-[40%]"
              
              />

            </div>
            <div className="w-full min h-[15vh] flex items-center justify-center ">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
          // Do something with the response
             console.log("Files: ", res);
             setImageUrl(res[0].url)
            //  alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

            </div>

          </div>

          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? "Creating New Project..." : "Create New Project"}
          </Button>
        </form>
      </CardContent>
    </Card>
    </section>
  );
}

