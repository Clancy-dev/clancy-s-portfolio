import { fetchSingleCode } from '@/actions/CodeSnippet'
import CreateNewCodeSnippetForm from '@/components/CreateNewCodeSnippetForm'
import React from 'react'

export default async function page({params}:{params:Promise<{slug:string}>}) {
    const slug = (await params).slug
       const codeData = await fetchSingleCode(slug)
 return (
    <div className='p-5 mt-[72px]'>
       <CreateNewCodeSnippetForm initialData ={codeData}/>
    </div>
  )
}
