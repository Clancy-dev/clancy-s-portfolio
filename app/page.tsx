import { fetchProject } from '@/actions/Project'
import AnimatedSection from '@/components/AnimatedSection'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import ReviewSection from '@/components/ReviewSection'
import SlicedSection from '@/components/SlicedSection'
import StatisticsSection from '@/components/StatisticsSection'
import { TechStack } from '@/components/TechStack'  
import React from 'react'

 
export default async function Home() {
    const sectionProjects = await fetchProject() || []
  return (
    <div>
        {/* Hero Section */}
        <AnimatedSection>
        <HeroSection />
       </AnimatedSection>
       {/* Some Projects */}
        <AnimatedSection>
        <SlicedSection sectionProjectData={sectionProjects}/>
        </AnimatedSection>
        {/* Statistics Section */}
        <AnimatedSection>
        <StatisticsSection/>
        </AnimatedSection>
        {/* Tech Stack Section */}
        <AnimatedSection className='w-[100%] h-[50vh] bg-gray-100 dark:bg-black flex items-center justify-center flex-col'>
        <h2 className="text-4xl font-semibold text-center mb-4 mt-3 text-gray-800 dark:text-white name-header">My Tech Stack</h2>
        <TechStack/>   
        </AnimatedSection>
        {/* Review Section */}
        <AnimatedSection>
        <ReviewSection/>
        </AnimatedSection>
        <AnimatedSection>
        <PortfolioSection/>
        </AnimatedSection>  
    </div>
  )
}
