import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/dashboard/navigation"
import { requireAuth } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Project Dashboard",
  description: "Manage and showcase your amazing projects",
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This will redirect to login if not authenticated
  await requireAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Navigation />
      {children}
    </div>
  )
}
