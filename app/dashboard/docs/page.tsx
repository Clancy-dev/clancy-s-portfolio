import { DocsTable } from "@/components/Dashboard/docs-table";


export default function DocsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Docs</h1>
      <DocsTable />
    </div>
  )
}

