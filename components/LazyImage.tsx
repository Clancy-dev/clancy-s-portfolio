"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"

interface LazyImageProps extends ImageProps {
  threshold?: number
}

export function LazyImage({ threshold = 0.5, ...props }: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [threshold])

  return <div ref={imgRef}>{isVisible && <Image {...props} />}</div>
}

