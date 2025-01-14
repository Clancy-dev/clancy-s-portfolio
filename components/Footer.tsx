'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GitlabIcon as GitHub, Linkedin, Mail, Twitter, Moon, Sun, type LucideIcon } from 'lucide-react'

const quotes = [
  { text: "Building a mission and building a business go hand in hand.", author: "Mark Zuckerberg" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
  { text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", author: "Mark Zuckerberg" }
]

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [showQuote, setShowQuote] = useState(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
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
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-gray-300 dark:text-gray-200 py-16">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-800 dark:fill-gray-900"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Clancy Ssekisambu</h3>
            <p className="text-sm">Full Stack Developer specializing in building high-performance websites and web applications.</p>
            <div className="mt-4 flex space-x-4">
              <SocialIcon href="mailto:clancy@example.com" icon={Mail} />
              <SocialIcon href="https://github.com/clancyssekisambu" icon={GitHub} />
              <SocialIcon href="https://linkedin.com/in/clancyssekisambu" icon={Linkedin} />
              <SocialIcon href="https://twitter.com/clancyssekisambu" icon={Twitter} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'My Projects', 'Blogs', 'Contact Me', 'Docs'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with my latest projects and tech insights.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 h-24"> {/* Fixed height to prevent layout shift */}
          <div className={`transition-opacity duration-500 ${showQuote ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-center italic text-lg">
              "{quotes[quoteIndex].text}"
            </p>
            <p className="text-center text-sm mt-2">
              - {quotes[quoteIndex].author}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-800 flex justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Clancy Ssekisambu. All rights reserved.</p>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 dark:bg-gray-800 text-gray-300 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </footer>
  )
}

type SocialIconProps = {
  href: string;
  icon: LucideIcon;
}

const SocialIcon = ({ href, icon: Icon }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform transition-transform duration-300 hover:rotate-[360deg]"
  >
    <Icon size={24} className="text-gray-400 hover:text-blue-400" />
  </a>
)

export default Footer

