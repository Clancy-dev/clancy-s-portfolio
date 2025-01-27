import Image from "next/image"
import { motion } from "framer-motion"

interface PortfolioCardProps {
  image: string
}

export default function PortfolioCard({ image }: PortfolioCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[200px] h-[200px] rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt="Project"
        width={200}
        height={200}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

