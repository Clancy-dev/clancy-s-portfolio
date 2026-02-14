"use client"

import { useState, useEffect } from "react"
import { Home, User, Tag, Network, PhoneCall, Menu, X, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./ModeToggle"
import { useAuth } from "@/hooks/use-auth"

const links = [
  { name: "Home", icon: <Home className="w-4 h-4" />, href: "/" },
  { name: "About me", icon: <User className="w-4 h-4" />, href: "/about" },
  { name: "My Projects", icon: <Network className="w-4 h-4" />, href: "/projects" },
  { name: "Contact Me", icon: <PhoneCall className="w-4 h-4" />, href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, isLoading, logout } = useAuth()

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-purple-200/20 dark:border-purple-500/20">
        <nav className="w-full h-[72px] flex">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">

            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white blur-sm opacity-30"></div>
                <Image
                  src="/logo.png"
                  alt="Clancy Logo"
                  width={60}
                  height={60}
                  className="relative w-auto h-10 rounded-full border-2 border-purple-100/30"
                />
              </div>
              <h1 className="bg-gradient-to-r sacramento-regular from-slate-800 via-purple-700 to-slate-900 dark:from-slate-200 dark:via-purple-300 dark:to-slate-100 bg-clip-text text-transparent text-xl sm:text-2xl md:text-2xl lg:text-3xl tracking-tight">
                Clancy
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm",
                    pathname === link.href
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                      : "text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105",
                  )}
                >
                  {link.icon}
                  <span className="font-['Inter',_'system-ui',_sans-serif] font-medium">{link.name}</span>
                </Link>
              ))}

              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm",
                    pathname === "/dashboard"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                      : "text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105"
                  )}
                >
                  <div className={cn(
                    "flex-shrink-0 p-1.5 xs:p-2 rounded-lg xs:rounded-xl transition-all duration-300",
                    pathname === "/dashboard"
                      ? "bg-white/20"
                      : "bg-purple-100 dark:bg-purple-900/30"
                  )}>
                    <LayoutDashboard className="w-3 h-3 xs:w-4 xs:h-4" />
                  </div>
                  <span className="font-medium">Dashboard</span>
                </Link>
              )}

              {!isLoading && (
                !isAuthenticated ? (
                  <Link
                    href="/login"
                    className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 shadow-lg"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:from-red-600 hover:to-pink-700 hover:scale-105 shadow-lg"
                  >
                    Logout
                  </button>
                )
              )}

              <div className="mx-2">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden relative p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-300 hover:scale-110 shadow-lg"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">

          <div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Floating X */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:scale-110 transition-all duration-300 z-[101]"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-3">
            <div className="w-full max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-200/30 dark:border-purple-500/30 overflow-hidden flex flex-col">
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
                <h2 className="text-white text-xl font-bold">Clancy</h2>
                <p className="text-white/80 text-sm">Navigation Menu</p>
              </div>

              <div className="p-6 space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-xl font-medium hover:bg-purple-100 dark:hover:bg-purple-900/20"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowLogoutModal(false)}
          />

          <button
            onClick={() => setShowLogoutModal(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:scale-110 transition-all duration-300 z-[301]"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative z-10 w-[90%] max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-purple-200/30 dark:border-purple-500/30">
            <h3 className="text-lg font-semibold mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutModal(false)
                  logout()
                }}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-pink-600 text-white hover:scale-105 transition shadow-lg"
              >
                Yes, Log me out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
