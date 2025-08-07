import CallToActionSection from "@/components/CallToActionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import EducationSection from "@/components/EducationSection";
import GreetingSection from "@/components/GreetingSection";
import JourneySection from "@/components/JourneySection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Clancy Ssekisambu | Full Stack Developer in Uganda",
  description: "Discover the story of Clancy Ssekisambu, a passionate full stack web developer from Uganda, building modern websites and powerful web apps using React.js, Next.js and Tailwind CSS.",
  keywords: "Clancy Ssekisambu, web developer in Uganda, website designer Uganda, full stack web developer Uganda, freelance web developer Uganda, React developer Uganda, Next.js developer Uganda, Tailwind CSS developer, web developer near me, website developer Kampala, web development Uganda, affordable website design Uganda, website design near me, hire a web developer Uganda, custom websites Uganda, professional web development Uganda, mobile-friendly websites Uganda, SEO-friendly websites Uganda"
};


export default function AboutPage() {
  return (
    <>
    <main className="min-h-screen bg-gray-50 mt-[72px]">
      <GreetingSection />
      <ServicesSection />
      <JourneySection />
      <EducationSection />
      <SkillsSection />
      <CoreValuesSection />
      <CallToActionSection />
    </main>
    </>
    
    
  )
}

