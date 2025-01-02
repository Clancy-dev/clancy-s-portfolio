'use client'

import { useEffect, ReactNode } from 'react'
import { motion, useAnimation, Variant } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: ReactNode
  initial?: Variant
  animate?: Variant
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  className = '',
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start(animate)
    }
  }, [controls, inView, animate])

  return (
    <motion.div
      ref={ref}
      initial={initial as any}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
