"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

// This is dummy data. In a real application, you would fetch this data from your backend.
const initialProjects = [
  { id: 1, name: "Project A", title: "Web Application" },
  { id: 2, name: "Project B", title: "Mobile App" },
  { id: 3, name: "Project C", title: "Desktop Software" },
]

export function ProjectsTable() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit project with id: ${id}`)
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  return (
    <div>
      <Input
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Project Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell className="flex">
                <Button variant="ghost" size="icon">
                <Link href="/project/new">
                <Plus className="h-4 w-4" />
                </Link>
                </Button>            
                <Button variant="ghost" size="icon" onClick={() => handleEdit(project.id)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
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

