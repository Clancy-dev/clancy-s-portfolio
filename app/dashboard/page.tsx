
import { StatisticsSection } from "@/components/Dashboard/statistics-section";
import { WelcomeSection } from "@/components/Dashboard/welcome-section";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <WelcomeSection />
      <StatisticsSection />
    </div>
  )
}

