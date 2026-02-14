"use client"

import { useState, useEffect } from "react"
import { Home, User, Network, PhoneCall, Menu, X, LayoutDashboard } from "lucide-react"
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
                  <span className="font-['Inter',_'system-ui',_sans-serif] font-medium">
                    {link.name}
                  </span>
                </Link>
              ))}

              {/* Dashboard */}
              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm",
                    pathname === "/dashboard"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                      : "text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105"
                  )}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="font-['Inter',_'system-ui',_sans-serif] font-medium">
                    Dashboard
                  </span>
                </Link>
              )}

              {/* Login / Logout */}
              {!isLoading && (
                !isAuthenticated ? (
                  <Link
                    href="/login"
                    className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-['Inter',_'system-ui',_sans-serif]"
                  >
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ) : (
                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:from-red-600 hover:to-pink-700 hover:scale-105 shadow-lg"
                  >
                    <span className="relative z-10">Logout</span>
                  </button>
                )
              )}

              <div className="mx-2">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-110 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative z-10">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowLogoutModal(false)}
          />
          <div className="relative z-10 w-[90%] max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-purple-200/30 dark:border-purple-500/30">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:scale-105 transition"
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
