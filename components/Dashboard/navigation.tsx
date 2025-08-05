"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, FolderOpen, Clock, Menu, X, LogOut, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logoutAction, getSessionInfo } from "@/lib/actions/auth"
import { useEffect, useTransition } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [userInfo, setUserInfo] = useState<{ user: { email: string; name?: string } } | null>(null)
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const loadUserInfo = async () => {
      const info = await getSessionInfo()
      setUserInfo(info)
    }
    loadUserInfo()
  }, [])

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/projects",
      label: "Projects",
      icon: FolderOpen,
    },
    {
      href: "/dashboard/latest",
      label: "Latest",
      icon: Clock,
    },
  ]

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction()
      router.push("/")
      router.refresh()
    })
  }

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-purple-200 dark:border-purple-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Portfolio</span>
            </Link>
            <div className="h-6 w-px bg-purple-200 dark:bg-purple-500/30" />
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                ProjectHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-500/10"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              )
            })}

            {/* User Info & Logout */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-purple-200 dark:border-purple-500/30">
              {userInfo && (
                <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                  <User className="h-4 w-4" />
                  <span>{userInfo.user.name || userInfo.user.email}</span>
                </div>
              )}
              <Button
                onClick={handleLogout}
                disabled={isPending}
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 bg-transparent"
              >
                {isPending ? (
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-500 mr-2" />
                ) : (
                  <LogOut className="h-4 w-4 mr-2" />
                )}
                {isPending ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-200 dark:border-purple-500/30">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-500/10"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                )
              })}

              {/* Mobile User Info & Logout */}
              <div className="pt-4 mt-4 border-t border-purple-200 dark:border-purple-500/30 space-y-2">
                {userInfo && (
                  <div className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                    <User className="h-4 w-4" />
                    <span>{userInfo.user.name || userInfo.user.email}</span>
                  </div>
                )}
                <Button
                  onClick={handleLogout}
                  disabled={isPending}
                  variant="outline"
                  className="w-full justify-start border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 bg-transparent"
                >
                  {isPending ? (
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-500 mr-2" />
                  ) : (
                    <LogOut className="h-4 w-4 mr-2" />
                  )}
                  {isPending ? "Logging out..." : "Logout"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
