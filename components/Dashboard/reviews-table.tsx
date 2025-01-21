"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Trash2 } from "lucide-react"

const initialReviews = [
  { id: 1, name: "Review A", title: "Great Product Experience" },
  { id: 2, name: "Review B", title: "Excellent Customer Service" },
  { id: 3, name: "Review C", title: "Room for Improvement" },
]

export function ReviewsTable() {
  const [reviews, setReviews] = useState(initialReviews)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReviews = reviews.filter(
    (review) =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id: number) => {
    console.log(`Edit review with id: ${id}`)
  }

  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }

  return (
    <div>
      <Input
        placeholder="Search reviews..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Review Name</TableHead>
            <TableHead>Review Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>{review.name}</TableCell>
              <TableCell>{review.title}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => handleEdit(review.id)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(review.id)}>
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

