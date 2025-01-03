import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  title: string;
  code: string;
  keywords: string;
};

const CreateSnippetForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted Data:", data);
    alert(`Snippet added successfully: ${data.title}`);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Create New Code Snippet</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Snippet Title"
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="Code"
            {...register("code", { required: "Code is required" })}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
          {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Keywords (comma-separated)"
            {...register("keywords")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Add Code Snippet
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Live Data Preview:</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2">
          {JSON.stringify(watch(), null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default CreateSnippetForm;
