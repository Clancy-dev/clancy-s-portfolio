"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isNameVisible, setIsNameVisible] = useState(false)

  const texts = [
    "I make websites for businesses",
    "I make full stack web and mobile applications",
    "I do digital marketing",
    "I do graphics design ie logos,",
    "posters and much more!",
  ]

  useEffect(() => {
    // Trigger name animation on mount
    const timer = setTimeout(() => setIsNameVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 2000

    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-8">
              {/* Name with animation */}
              <div className="overflow-hidden">
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transform transition-all duration-1000 ease-out ${
                    isNameVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Clancy
                  </span>
                  <br />
                  <span className="text-white">Ssekisambu</span>
                </h1>
              </div>

              {/* Typewriter text */}
              <div className="h-20 sm:h-16 lg:h-20 flex items-center">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
                  <span className="text-purple-400">{currentText}</span>
                  <span className="animate-pulse text-cyan-400">|</span>
                </p>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm">
                  Get In Touch
                </button>
              </div>

              {/* Social indicators */}
              <div className="flex justify-center lg:justify-start space-x-6 pt-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm"></div>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-sm"></div>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow opacity-20 scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse opacity-30 scale-105"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/newprofilepic.png?height=450&width=450"
                  alt="Clancy Ssekisambu - Full Stack Developer"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce shadow-lg">
                <span>{"<dev/>"}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-pulse shadow-lg">
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
