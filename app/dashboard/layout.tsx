// import { Header } from "@/components/dashboard/header"
// import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/Dashboard/header"
import { Sidebar } from "@/components/Dashboard/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex h-screen bg-background mt-[72px]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-4">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}

