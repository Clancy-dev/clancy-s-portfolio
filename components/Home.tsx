
import AnimatedSection from '@/components/AnimatedSection'
import HeroSection from '@/components/HeroSection'
import { LatestProjectsPage } from '@/components/latest-projects-page'
import PortfolioSection from '@/components/InfiniteSection'
import ReviewSection from '@/components/ReviewSection'
import StatisticsSection from '@/components/StatisticsSection'
import { TechStack } from '@/components/TechStack'  
import React from 'react'

 
export default function Home() {
  
  return (
    <div>
        {/* Hero Section */}
        <AnimatedSection>
        <HeroSection />
       </AnimatedSection>
       {/* Some Projects */}
        <AnimatedSection>
        <LatestProjectsPage />
        </AnimatedSection>
        {/* Statistics Section */}
        <AnimatedSection>
        <StatisticsSection/>
        </AnimatedSection>
        {/* Tech Stack Section */}
        <AnimatedSection>
        <TechStack />
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
