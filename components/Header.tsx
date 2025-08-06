"use client"

import { useState, useEffect } from "react"
import { Home, User, Tag, Network, PhoneCall, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./ModeToggle"

const links = [
  { name: "Home", icon: <Home className="w-4 h-4" />, href: "/" },
  { name: "About me", icon: <User className="w-4 h-4" />, href: "/about" },
  { name: "Pricing", icon: <Tag className="w-4 h-4" />, href: "/pricing" },
  { name: "My Projects", icon: <Network className="w-4 h-4" />, href: "/projects" },
  { name: "Contact Me", icon: <PhoneCall className="w-4 h-4" />, href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
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
                  alt="Clancy Ssekisambu Logo"
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
                      : "text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 hover:text-purple-700 dark:hover:text-purple-300",
                  )}
                >
                  {link.icon}
                  <span className="font-['Inter',_'system-ui',_sans-serif] font-medium">{link.name}</span>
                </Link>
              ))}
              <div className="mx-2">
                <ModeToggle />
              </div>
              {/* Login Button */}
              <Link
                href="/login"
                className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-['Inter',_'system-ui',_sans-serif]"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
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

      {/* Mobile Menu Overlay - Fully Responsive */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu Panel - Responsive */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-3 xs:p-4 sm:p-6">
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl xs:rounded-3xl shadow-2xl border border-purple-200/30 dark:border-purple-500/30 overflow-hidden max-h-[90vh] flex flex-col">
              {/* Header Section - Responsive */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 xs:p-5 sm:p-6 text-center flex-shrink-0">
                <div className="flex items-center justify-center space-x-2 xs:space-x-3 mb-1 xs:mb-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-sm"></div>
                    <Image
                      src="/logo.png"
                      alt="Clancy Logo"
                      width={40}
                      height={40}
                      className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/50"
                    />
                  </div>
                  <h2 className="text-white text-lg xs:text-xl font-bold font-['Inter',_'system-ui',_sans-serif]">
                    Clancy
                  </h2>
                </div>
                <p className="text-white/80 text-xs xs:text-sm font-medium">Navigation Menu</p>
              </div>

              {/* Navigation Links - Responsive with Scroll */}
              <div className="p-3 xs:p-4 sm:p-6 space-y-2 xs:space-y-3 flex-1 overflow-y-auto">
                {links.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 rounded-xl xs:rounded-2xl font-medium transition-all duration-300 text-sm xs:text-base group",
                      pathname === link.href
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                        : "text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? "slideInUp 0.3s ease-out forwards" : "none",
                    }}
                  >
                    <div
                      className={cn(
                        "flex-shrink-0 p-1.5 xs:p-2 rounded-lg xs:rounded-xl transition-all duration-300",
                        pathname === link.href
                          ? "bg-white/20"
                          : "bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40",
                      )}
                    >
                      <div className="w-3 h-3 xs:w-4 xs:h-4">{link.icon}</div>
                    </div>
                    <span className="font-['Inter',_'system-ui',_sans-serif] font-medium flex-1 text-left">
                      {link.name}
                    </span>
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Bottom Section - Responsive */}
              <div className="p-3 xs:p-4 sm:p-6 pt-0 space-y-3 xs:space-y-4 border-t border-purple-200/20 dark:border-purple-500/20 flex-shrink-0">
                {/* Mode Toggle */}
                <div className="flex justify-center">
                  <div className="p-2 xs:p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl xs:rounded-2xl">
                    <ModeToggle />
                  </div>
                </div>
                {/* Login Button */}
                <Link
                  href="/login"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 xs:px-6 py-3 xs:py-4 rounded-xl xs:rounded-2xl font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-['Inter',_'system-ui',_sans-serif] text-sm xs:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="hidden xs:inline">Login to Account</span>
                  <span className="xs:hidden">Login</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Close Button - Responsive */}
          <button
            className="absolute top-4 xs:top-5 sm:top-6 right-4 xs:right-5 sm:right-6 p-2 xs:p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-5 h-5 xs:w-6 xs:h-6" />
          </button>
        </div>
      )}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
