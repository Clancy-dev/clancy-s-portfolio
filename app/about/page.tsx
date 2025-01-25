import CallToActionSection from "@/components/CallToActionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import EducationSection from "@/components/EducationSection";
import GreetingSection from "@/components/GreetingSection";
import JourneySection from "@/components/JourneySection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 mt-[72px]">
      <GreetingSection />
      <ServicesSection />
      <JourneySection />
      <EducationSection />
      <SkillsSection />
      <CoreValuesSection />
      <CallToActionSection />
    </main>
  )
}

