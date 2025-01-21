"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Trash2 } from "lucide-react"

const initialBlogs = [
  { id: 1, name: "Blog A", title: "Introduction to React" },
  { id: 2, name: "Blog B", title: "Advanced TypeScript Techniques" },
  { id: 3, name: "Blog C", title: "Building Responsive Layouts with Tailwind CSS" },
]

export function BlogsTable() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id: number) => {
    console.log(`Edit blog with id: ${id}`)
  }

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  return (
    <div>
      <Input
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Blog Name</TableHead>
            <TableHead>Blog Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBlogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.name}</TableCell>
              <TableCell>{blog.title}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => handleEdit(blog.id)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(blog.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

