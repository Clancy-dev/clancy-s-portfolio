"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Briefcase, FileText, Star, Notebook } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: Briefcase,
  },
  {
    title: "Docs",
    href: "/dashboard/docs",
    icon: FileText,
  },
  {
    title: "Blogs",
    href: "/dashboard/blogs",
    icon: FileText,
  },
  {
    title: "Reviews",
    href: "/dashboard/reviews",
    icon: Star,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: Notebook,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:block border-r bg-background">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
          <ScrollArea className="h-[calc(100vh-8rem)] px-2">
            <div className="space-y-1">
              {sidebarNavItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </nav>
  )
}

