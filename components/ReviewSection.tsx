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
    text: "Top-notch quality! Clancy’s work is exceptional and highly recommended.",
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
    text: "Thank you! I Couldn’t be happier!",
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
    text: "Clancy’s outstanding results and dedication ensured our project’s success.",
    rating: 5,
  },
  {
    id: 10,
    name: "Kasujja Davis",
    image: "/r-images/r10.jpg",
    text: "Clancy delivers perfection with passion. Highly recommend him for any project!",
    rating: 5,
  },
];


const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {/* <span className="text-sm text-primary/60 mr-1">Rating:</span> */}
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
    <section ref={ref} className="review-container dark:from-black dark:to-black bg-gradient-to-br from-green-700  to-green-500 dark:bg-black">
      <div className="inner-review-container mx-auto px-4 ">
      <h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-semibold text-center mb-4 mt-3 text-gray-100 name-header">Reviews</h2>
        <div className=" w-full p-2">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-yellow-300 dark:border-gray-400 border-b-4 border-l-4 rounded-tr-[50%] rounded-[2px] shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-4 ">
                  <div className="flex items-center mb-2 review-inside">
                    <img
                      src={reviews[currentReview].image || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      className="w-16 h-16 rounded-full border-4 border-primary mr-4 object-cover review-inside-1"
                    />

                 <h3 className="text-2xl font-semibold text-gray-900 review-inside-2">{reviews[currentReview].name}</h3>
                    
                  </div>
                  
                  <p className="text-lg italic text-gray-700">"{reviews[currentReview].text}"</p>
                  <div className="flex w-[100%]  gap-2">
                     <p className="text-gray-700 font-bold">Rating:</p>
                      <StarRating rating={reviews[currentReview].rating} />
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}













