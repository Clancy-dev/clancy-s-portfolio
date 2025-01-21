import { fetchProject } from '@/actions/Project'
import LatestProjects from '@/components/LatestProjects'
import Link from 'next/link'

import React from 'react'

export default async function page() {
  const dbProjects = await fetchProject() || []
  return (
    <div className='mt-[72px]'>
      <LatestProjects projectData={dbProjects}/>    
    </div>
  )
}
