"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Trash2 } from "lucide-react"

const initialDocs = [
  { id: 1, name: "Doc A", title: "API Documentation" },
  { id: 2, name: "Doc B", title: "User Guide" },
  { id: 3, name: "Doc C", title: "Technical Specifications" },
]

export function DocsTable() {
  const [docs, setDocs] = useState(initialDocs)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDocs = docs.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id: number) => {
    console.log(`Edit doc with id: ${id}`)
  }

  const handleDelete = (id: number) => {
    setDocs(docs.filter((doc) => doc.id !== id))
  }

  return (
    <div>
      <Input
        placeholder="Search docs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Doc Name</TableHead>
            <TableHead>Doc Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDocs.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.title}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => handleEdit(doc.id)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(doc.id)}>
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

