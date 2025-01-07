"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createCode } from "@/actions/CodeSnippet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export type CodeSnippetProps = {
  title: string;
  code: string;
  description: string;
  slug: string;
};

export default function CreateNewCodeSnippetForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CodeSnippetProps>();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function saveData(data: CodeSnippetProps) {
    data.slug = data.title.toLowerCase().split(" ").join("-");
    try {
      setLoading(true)
      await createCode(data)
      toast.success("Codesnippet created successfully.")
      router.push("/docs")
      router.refresh()
      reset()  
    } catch (error) {
      toast.error("Failed to create the code snippet.")
      console.log(error) 
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-500 to-blue-900 shadow-xl">
      <CardHeader className="text-white">
        <CardTitle className="text-2xl font-bold text-center mb-2">Create New Code Snippet</CardTitle>
      </CardHeader>
      <CardContent className="bg-white bg-opacity-90 rounded-b-lg">
        <form className="space-y-6" onSubmit={handleSubmit(saveData)}>
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700">Snippet Title</Label>
            <Input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              placeholder="Enter snippet title"
              className="bg-white"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="code" className="text-gray-700">Code</Label>
            <Textarea
              id="code"
              rows={6}
              {...register("code", { required: "Code is required" })}
              placeholder="Enter your code here"
              className="font-mono bg-white"
            />
            {errors.code && <p className="text-sm text-red-500">{errors.code.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700">Description</Label>
            <Textarea
              id="description"
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Enter a brief description of the code snippet"
              className="bg-white"
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>

          {formError && <p className="text-sm text-red-500">{formError}</p>}

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? "Creating Snippet..." : "Create Code Snippet"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

