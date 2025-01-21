"use client"

import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, StarHalf } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Aber Grace",
    image: "./r-images/r1.png",
    text: "Clancy your expertise brought our vision to life seamlessly. A true professional! Thank you!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Tumwesigye Dominic",
    image: "./r-images/r2.png",
    text: "Bro you exceeded my expectations with innovative solutions and unmatched attention to detail.",
    rating: 4,
  },
  {
    id: 3,
    name: "Nalubega Charlotte",
    image: "./r-images/r3.png",
    text: "Top-notch quality! Clancy’s work is exceptional and highly recommended.",
    rating: 3.5,
  },
  {
    id: 4,
    name: "Arop Caleb",
    image: "./r-images/r4.png",
    text: "You transformed our ideas into something extraordinary. Creative and dedicated! Great work on our project",
    rating: 3,
  },
  {
    id: 5,
    name: "Ainomugisha Abigail",
    image: "./r-images/r5.png",
    text: "Exceptional service and incredible results! You is my go-to developer.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Okurut Ethan",
    image: "./r-images/r7.png",
    text: "Thank you! I Couldn’t be happier!",
    rating: 5,
  },
  {
    id: 7,
    name: "Akello Vivian",
    image: "./r-images/r6.png",
    text: "Clancy is a problem-solver with remarkable creativity and work ethic.",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Lukwago Alexander",
    image: "./r-images/r9.png",
    text: "Clancy made everything easy and effective. A fantastic experience from start to finish!",
    rating: 5,
  },
  {
    id: 9,
    name: "Nakigudde Olivia",
    image: "./r-images/r8.png",
    text: "Clancy’s outstanding results and dedication ensured our project’s success.",
    rating: 5,
  },
  {
    id: 10,
    name: "Kasujja Davis",
    image: "./r-images/r10.png",
    text: "Clancy delivers perfection with passion. Highly recommend him for any project!",
    rating: 5,
  },
];


const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      <span className="text-sm text-primary/60 mr-1">Rating:</span>
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
        }, 500) // Short delay for smooth transition
      }

      const interval = setInterval(cycleReviews, 6000)

      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section ref={ref} className="review-container">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold text-center mb-4 mt-3 text-gray-100 name-header">Reviews</h2>
        <div className="max-w-3xl mx-auto h-[300px]">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <img
                      src={reviews[currentReview].image || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      className="w-16 h-16 rounded-full border-4 border-primary mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-primary">{reviews[currentReview].name}</h3>
                      <StarRating rating={reviews[currentReview].rating} />
                    </div>
                  </div>
                  <p className="text-lg italic text-gray-700 leading-relaxed">"{reviews[currentReview].text}"</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}













