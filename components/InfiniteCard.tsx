import Image from "next/image"
import { motion } from "framer-motion"

interface InfiniteCardProps {
  image: string
}

export default function InfiniteCard({ image }: InfiniteCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[120px] h-[120px] rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-purple-200/20 dark:border-purple-500/20 p-4 group"
      whileHover={{ 
        scale: 1.1,
        rotateY: 10,
        rotateX: 5,
      }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="relative w-full h-full">
        {/* Gradient border on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                
        <div className="relative w-full h-full bg-white/90 dark:bg-white/95 rounded-xl p-2 flex items-center justify-center overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt="Brand Logo"
            width={100}
            height={100}
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  )
}
