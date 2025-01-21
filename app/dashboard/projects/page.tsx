import { ProjectsTable } from '@/components/Dashboard/projects-table'
import React from 'react'

export default function ProjectsPage() {
  return (
    <div>
      <div className="container mx-auto p-6">
       <h1 className="text-3xl font-bold mb-6">Projects</h1>
       <ProjectsTable />
     </div>
      
    </div>
  )
}







