"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Search, Home, Briefcase, FileText, Star, Notebook, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const links = [
  { name: "Dashboard", icon: <Home className="w-4 h-4" />, href: "/dashboard" },
  { name: "Projects", icon: <Briefcase className="w-4 h-4" />, href: "/dashboard/projects" },
  { name: "Docs", icon: <FileText className="w-4 h-4" />, href: "/dashboard/docs" },
  { name: "Blogs", icon: <FileText className="w-4 h-4" />, href: "/dashboard/blogs" },
  { name: "Reviews", icon: <Star className="w-4 h-4" />, href: "/dashboard/reviews" },
  { name: "Notes", icon: <Notebook className="w-4 h-4" />, href: "/dashboard/notes" },
]

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleTimeBasedTheme = () => {
      const currentHour = new Date().getHours()
      if (currentHour >= 6 && currentHour < 18) {
        setTheme("light")
      } else {
        setTheme("dark")
      }
    }

    handleTimeBasedTheme()
    const interval = setInterval(handleTimeBasedTheme, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [setTheme])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/profile.png" alt="Logo" width={60} height={60} className="w-auto h-10" />
          <h1 className="text-primary sm:text-[1.2rem] md:text-2xl lg:text-2xl font-bold">My Dashboard</h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 px-2 py-1 rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="justify-start px-2"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-2">Toggle theme</span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

