"use client"

import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, StarHalf } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Aber Grace",
    image: "/r-images/r1.jpg",
    text: "Clancy your expertise brought our vision to life seamlessly. A true professional! Thank you!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Tumwesigye Dominic",
    image: "/r-images/r2.jpg",
    text: "Bro you exceeded my expectations with innovative solutions and unmatched attention to detail.",
    rating: 4,
  },
  {
    id: 3,
    name: "Nalubega Charlotte",
    image: "/r-images/r3.jpg",
    text: "Top-notch quality! Clancy's work is exceptional and highly recommended.",
    rating: 3.5,
  },
  {
    id: 4,
    name: "Arop Caleb",
    image: "/r-images/r4.jpg",
    text: "You transformed our ideas into something extraordinary. Creative and dedicated! Great work on our project",
    rating: 3,
  },
  {
    id: 5,
    name: "Ainomugisha Abigail",
    image: "/r-images/r5.jpg",
    text: "Exceptional service and incredible results! You is my go-to developer.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Okurut Ethan",
    image: "/r-images/r7.jpg",
    text: "Thank you! I Couldn't be happier!",
    rating: 5,
  },
  {
    id: 7,
    name: "Akello Vivian",
    image: "/r-images/r6.jpg",
    text: "Clancy is a problem-solver with remarkable creativity and work ethic.",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Lukwago Alexander",
    image: "/r-images/r9.jpg",
    text: "Clancy made everything easy and effective. A fantastic experience from start to finish!",
    rating: 5,
  },
  {
    id: 9,
    name: "Nakigudde Olivia",
    image: "/r-images/r8.jpg",
    text: "Clancy's outstanding results and dedication ensured our project's success.",
    rating: 5,
  },
  {
    id: 10,
    name: "Kasujja Davis",
    image: "/r-images/r10.jpg",
    text: "Clancy delivers perfection with passion. Highly recommend him for any project!",
    rating: 5,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          ) : star - 0.5 <= rating ? (
            <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
          ) : (
            <Star className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  )
}

export default function ReviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [currentReview, setCurrentReview] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (inView) {
      const cycleReviews = () => {
        setIsVisible(false)
        setTimeout(() => {
          setCurrentReview((prev) => (prev + 1) % reviews.length)
          setIsVisible(true)
        }, 500)
      }
      const interval = setInterval(cycleReviews, 6000)
      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section
      ref={ref}
      className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-950 dark:via-slate-900 dark:to-black overflow-hidden"
    >
      {/* Background decoration matching hero */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 dark:opacity-3"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 mt-3 font-['Inter',_'system-ui',_sans-serif]">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Client Reviews
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Decorative gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-200/30 dark:border-purple-500/30 overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-30"></div>
                        <img
                          src={reviews[currentReview].image || "/placeholder.svg"}
                          alt={reviews[currentReview].name}
                          className="relative w-20 h-20 rounded-full border-4 border-purple-400/30 mr-6 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 via-purple-700 to-slate-900 dark:from-slate-200 dark:via-purple-300 dark:to-slate-100 bg-clip-text text-transparent font-['Inter',_'system-ui',_sans-serif]">
                          {reviews[currentReview].name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-slate-600 dark:text-slate-400 font-medium">Rating:</p>
                          <StarRating rating={reviews[currentReview].rating} />
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-xl md:text-2xl italic text-slate-700 dark:text-slate-300 leading-relaxed font-['Inter',_'system-ui',_sans-serif]">
                      "{reviews[currentReview].text}"
                    </blockquote>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Review indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => {
                  setCurrentReview(index)
                  setIsVisible(true)
                }, 300)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-600/8 dark:to-pink-600/8 rounded-full"
            style={{
              width: `${Math.random() * 50 + 25}px`,
              height: `${Math.random() * 50 + 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${12 + Math.random() * 18}s infinite ease-in-out ${Math.random() * 12}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
