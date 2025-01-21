import { BlogsTable } from "@/components/Dashboard/blogs-table";


export default function BlogsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <BlogsTable />
    </div>
  )
}

