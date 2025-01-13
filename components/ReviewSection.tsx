'use client'

import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { InteractiveGridPattern } from './ui/interactive-grid-pattern';
import { cn } from '@/lib/utils';

const reviews = [
    {
      id: 1,
      name: 'Nakiganda Daisy',
      image: './review images/daisy.jpg',
      text: 'General Mouldings (U) Ltd has redefined excellence in the plastics industry.',
    }
  ];
  

export default function ReviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
      }, 7500)

      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section ref={ref} className=' review-container'>
        <div className=" flex items-center justify-center flex-col w-[100%] h-[100% p-[1rem] second">
        
        <h2 className="text-4xl font-semibold text-center mb-4 mt-3 text-gray-100 name-header">Reviews</h2>
         <div className="inner-review-container">
           <AnimatePresence mode="wait">
             <motion.div
              key={currentReview}
               initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={{ duration: 1 }}
               className="bg-white p-6 rounded-tl-[15px] rounded-br-[15px] shadow-md"
             >
               <div className="flex items-center mb-4">
                 <img src={reviews[currentReview].image} alt={reviews[currentReview].name} className="w-12 h-12 rounded-full mr-4" />
                 <h3 className="font-semibold text-primary">{reviews[currentReview].name}</h3>
               </div>
               <p className="italic text-primary/80">"{reviews[currentReview].text}"</p>
             </motion.div>
           </AnimatePresence>
         </div>
       </div> 

    </section>
    // <section  className="review-container">
    //   
    // </section>
  )
}

