import type { Category } from "@prisma/client"

export interface Project {
  id: string
  name: string
  description: string
  liveUrl?: string
  image?: string
  techStack: string[]
  category: Category
  createdAt: string
  updatedAt: string
}

export interface ProjectFormData {
  name: string
  description: string
  liveUrl?: string
  image?: string
  techStack: string[]
  category: Category
}

export const categoryConfig = {
  basic: {
    label: "Basic",
    gradient: "from-green-400 to-teal-500",
    bgGradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    borderGradient: "from-green-300/60 to-teal-400/60 dark:from-green-500/30 dark:to-teal-500/30",
    textColor: "text-green-600 dark:text-green-400",
    badgeColor:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700/50",
  },
  standard: {
    label: "Standard",
    gradient: "from-blue-400 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    borderGradient: "from-blue-300/60 to-indigo-400/60 dark:from-blue-500/30 dark:to-indigo-500/30",
    textColor: "text-blue-600 dark:text-blue-400",
    badgeColor:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
  },
  pro: {
    label: "Pro",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    borderGradient: "from-purple-200 to-pink-300 dark:from-purple-500/30 dark:to-pink-500/30",
    textColor: "text-purple-700 dark:text-purple-400",
    badgeColor:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50",
  },
} as const
