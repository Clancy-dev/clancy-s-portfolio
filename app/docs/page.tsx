import CodeLibrary from '@/components/CodeLibrary'
import AnimatedSection from '../../components/AnimatedSection'
import { fetchCode } from '../actions/CodeSnippet'

export default async function Docs() {
  const code = await fetchCode() || []
  // console.log(code)
  return (
    <AnimatedSection className="w-[100%] p-[0.5rem]">
      <h1 className=" font-bold mt-2 mb-2 text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl ">Documentation</h1>
      <AnimatedSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-4 lg:px-6 md:px-2 sm:px-2 px-2">
          Welcome to my documentation page. Here, you'll find reusable code snippets and explanations for various projects and technologies I work with.
        </p>
        
      </AnimatedSection>

      <AnimatedSection>
        <CodeLibrary codeData={code}/>
      </AnimatedSection>
    </AnimatedSection>
  )
}

