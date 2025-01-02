'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedTextProps {
  texts: string[]
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && isVisible) {
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].slice(0, displayText.length + 1))
        }, 100) // Adjust typing speed here
      } else {
        timeout = setTimeout(() => {
          setIsVisible(false)
        }, 2000) // Wait before fading out
      }
    } else if (!isVisible) {
      timeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setDisplayText('')
        setIsTyping(true)
        setIsVisible(true)
      }, 500) // Wait before starting next text
    }

    return () => clearTimeout(timeout)
  }, [texts, displayText, currentTextIndex, isTyping, isVisible])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.h1
          key={currentTextIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={className}
        >
          {displayText}
        </motion.h1>
      )}
    </AnimatePresence>
  )
}

export default AnimatedText

