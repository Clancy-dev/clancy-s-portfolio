import { fetchProject } from '@/actions/Project'
import LatestProjects from '@/components/LatestProjects'
import Link from 'next/link'

import React from 'react'

export default async function page() {
  const dbProjects = await fetchProject() || []
  return (
    <div className='p-5 mt-[72px]'>

      <div className='w-full p-3 flex'>
        <Link href="/project/new" className='px-3 py-4 bg-blue-500 text-white rounded-[10px] mt-4 font-bold'>
        Create New Project
        </Link>
        <Link href="/project/edit" className='px-3 py-4 bg-blue-500 text-white rounded-[10px] mt-4 font-bold'>
        Edit
        </Link>
        
      </div>
      <LatestProjects projectData={dbProjects}/>    
    </div>
  )
}
