import CodeLibrary from '@/components/CodeLibrary'
import AnimatedSection from '../../components/AnimatedSection'

export default function Docs() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      <AnimatedSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-4">
          Welcome to my documentation page. Here, you'll find reusable code snippets and explanations for various projects and technologies I work with.
        </p>
        
      </AnimatedSection>

      <AnimatedSection>
        <CodeLibrary/>
      </AnimatedSection>
    </AnimatedSection>
  )
}

