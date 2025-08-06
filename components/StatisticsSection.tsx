"use client"

import { useNumberTicker } from "@/hooks/UseNumberTicker"
import { useState, useEffect, useRef } from "react"

interface Statistic {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

const statistics: Statistic[] = [
  { value: 250, label: "Cross-Functional Synergies Realized", suffix: "+" },
  { value: 4, label: "Years of Multidisciplinary Paradigm Expertise", suffix: "+" },
  { value: 45000, label: "Quantum Units of Scalable Outputs Delivered", suffix: "+" },
  { value: 150, label: "Strategic Partnerships Cultivated", suffix: "+" },
  { value: 180, label: "Hyper-Niche Client Engagements Executed", suffix: "+" },
  { value: 96.8, label: "Empirical Optimization Index", suffix: "%" },
  { value: 20, label: "Open Source Contributions", suffix: "+" },
  { value: 97.5, label: "Client Retention Metric", suffix: "%" },
  { value: 15, label: "Hackathons Participated", suffix: "+" },
  { value: 65, label: "Neuro-Adaptive Process Iterations Orchestrated", suffix: "+" },
]

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-950 dark:via-slate-900 dark:to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 dark:opacity-3"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 mt-3 font-['Inter',_'system-ui',_sans-serif]">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent">
            My Milestones
          </span>
          <br />
          <span className="text-white dark:text-gray-100 text-3xl lg:text-4xl">At a Glance</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 200} />
          ))}
        </div>
      </div>

      <FloatingElements />
    </section>
  )
}

function StatCard({ stat, isVisible, delay }: { stat: Statistic; isVisible: boolean; delay: number }) {
  const count = useNumberTicker(isVisible ? stat.value : 0, 2000, delay)

  return (
    <div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-purple-200/20 dark:border-purple-500/20 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-lg hover:shadow-purple-500/25">
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>

      <div className="relative z-10">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 dark:from-purple-300 dark:to-cyan-300 bg-clip-text text-transparent">
          {stat.prefix}
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="text-sm md:text-base lg:text-lg text-gray-300 dark:text-gray-400 font-medium font-['Inter',_'system-ui',_sans-serif]">
          {stat.label}
        </div>
      </div>
    </div>
  )
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-600/15 dark:to-pink-600/15 rounded-lg transform rotate-45"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 12}s infinite ease-in-out ${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Additional decorative circles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute bg-gradient-to-r from-cyan-500/10 to-purple-500/10 dark:from-cyan-600/8 dark:to-purple-600/8 rounded-full"
          style={{
            width: `${Math.random() * 60 + 30}px`,
            height: `${Math.random() * 60 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 15}s infinite ease-in-out ${Math.random() * 10}s reverse`,
          }}
        />
      ))}
    </div>
  )
}
