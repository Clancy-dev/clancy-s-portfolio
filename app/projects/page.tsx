import LatestProjects from '@/components/LatestProjects'
import Link from 'next/link'

import React from 'react'

export default function page() {
  return (
    <div className='p-5 mt-[72px]'>

      <div className='w-full p-3'>
        <Link href="/projects/new" className='px-3 py-4 bg-blue-500 text-white rounded-[10px] mt-4 font-bold'>
        Create New Project
        </Link>
      </div>

      <LatestProjects/>
      
    </div>
  )
}
