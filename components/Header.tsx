"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-20 w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              Clancy Ssekisambu
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</Link>
            <Link href="/skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
            <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Docs</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-10">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
          <div className="absolute top-16 left-0 bottom-0 w-full bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>About</Link>
              <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Projects</Link>
              <Link href="/skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Skills</Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Contact</Link>
              <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Docs</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
