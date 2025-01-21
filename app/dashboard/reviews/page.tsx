import { ReviewsTable } from "@/components/Dashboard/reviews-table";


export default function ReviewsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>
      <ReviewsTable />
    </div>
  )
}

