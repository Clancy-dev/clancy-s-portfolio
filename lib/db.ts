import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

let db: PrismaClient

try {
  console.log("🔌 Initializing Prisma client...")

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in environment variables")
  }

  console.log("📍 Database URL configured:", process.env.DATABASE_URL.replace(/\/\/.*@/, "//***:***@"))

  db =
    globalThis.prisma ||
    new PrismaClient({
      log: ["query", "info", "warn", "error"],
    })

  if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db
  }

  console.log("✅ Prisma client initialized successfully")
} catch (error) {
  console.error("❌ Failed to initialize Prisma client:", error)
  throw error
}

export { db }
