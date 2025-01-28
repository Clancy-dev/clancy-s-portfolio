import Image from "next/image"
import { motion } from "framer-motion"

interface PortfolioCardProps {
  image: string
}

export default function PortfolioCard({ image }: PortfolioCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[80px] h-[80px] rounded-lg overflow-hidden "
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt="Project"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

