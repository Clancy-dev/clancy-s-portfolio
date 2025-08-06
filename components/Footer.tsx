"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Mail, Twitter, Moon, Sun, PhoneIcon as WhatsApp, TypeIcon as type, LucideIcon } from 'lucide-react'

const quotes = [
  { text: "Building a mission and building a business go hand in hand.", author: "Mark Zuckerberg" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
  {
    text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
  },
]

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [showQuote, setShowQuote] = useState(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowQuote(false)
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
        setShowQuote(true)
      }, 500) // Wait for fade out before changing quote
    }, 5000) // Change quote every 5 seconds

    return () => clearInterval(intervalId)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-gray-300 dark:text-gray-200 py-16">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-800 dark:fill-gray-900"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Clancy Ssekisambu
              </span>
            </h3>
            <p className="text-sm mb-4">
              Full Stack Developer specializing in building high-performance websites and web applications.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Tel: +256 770983239
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Tel: +256 707013121
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Email: clancyro1000@gmail.com
              </p>
            </div>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <SocialIcon href="mailto:clancyro1000@gmail.com" icon={Mail} />
              <SocialIcon href="https://github.com/Clancy-dev" icon={GitHub} />
              <SocialIcon href="https://www.linkedin.com/in/clancy-developer-6444b3274/" icon={Linkedin} />
              <SocialIcon href="https://twitter.com/clancyssekisambu" icon={Twitter} />
              <SocialIcon href="https://wa.me/LCNUGI2T3PQYE1" icon={WhatsApp} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
              <span className="ml-2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 inline-block"></span>
            </h3>
            <ul className="space-y-2">
              {["Home", "About Me", "My Projects", "Blogs", "Contact Me", "Docs"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-purple-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Newsletter
              <span className="ml-2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 inline-block"></span>
            </h3>
            <p className="text-sm mb-4">Stay updated with my latest projects and tech insights.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-700 dark:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 text-white px-4 py-2 rounded-md transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Quotes Section - Restored */}
        <div className="mt-12 h-24 px-4">
          <div className={`transition-opacity duration-500 text-center ${showQuote ? "opacity-100" : "opacity-0"}`}>
            <p className="text-center italic text-base sm:text-lg max-w-4xl mx-auto">"{quotes[quoteIndex].text}"</p>
            <p className="text-center text-sm mt-2">
              - <span className="text-purple-400">{quotes[quoteIndex].author}</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-800 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Clancy Ssekisambu. All rights reserved.
            </p>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-800 text-gray-300 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200 hover:ring-2 hover:ring-purple-400/30"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

type SocialIconProps = {
  href: string
  icon: LucideIcon
}

const SocialIcon = ({ href, icon: Icon }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform transition-transform duration-300 hover:rotate-[360deg]"
  >
    <Icon size={24} className="text-gray-400 hover:text-purple-400" />
  </a>
)

export default Footer
