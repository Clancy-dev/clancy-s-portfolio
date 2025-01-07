"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createCode } from "@/app/actions/CodeSnippet";


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
    // console.log(data);
    //The CodeSnippetProps must be the same as those in the server actions and the form
    //Call the create function from the server action(the function called createCode)
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
    } finally{
      setLoading(false)
    }

  }

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(saveData)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Create New Code Snippet
        </h5>

        {/* Title Input */}
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Snippet Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter snippet title"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Code Input */}
        <div>
          <label
            htmlFor="code"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Code
          </label>
          <textarea
            id="code"
            rows={6}
            {...register("code", { required: "Code is required" })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your code here"
          />
          {errors.code && <p className="text-red-500">{errors.code.message}</p>}
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter a brief description of the code snippet"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Form Error */}
        {formError && <p className="text-red-500">{formError}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Creating Snippet..." : "Create Code Snippet"}
        </button>
      </form>
    </div>
  );
}
