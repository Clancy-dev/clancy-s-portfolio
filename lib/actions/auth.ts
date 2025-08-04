"use server"

import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { hashPassword, verifyPassword, createSession, deleteSession, getSession } from "@/lib/auth"
import { z } from "zod"

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be less than 100 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

export async function registerAction(formData: FormData) {
  try {
    console.log("🚀 Starting registration process...")

    // Check environment variables first
    if (!process.env.DATABASE_URL) {
      console.error("❌ DATABASE_URL is missing!")
      return { success: false, error: "Server configuration error: DATABASE_URL missing" }
    }

    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET is missing!")
      return { success: false, error: "Server configuration error: JWT_SECRET missing" }
    }

    console.log("✅ Environment variables check passed")

    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    }

    console.log("📝 Raw form data:", {
      name: rawData.name,
      email: rawData.email,
      password: rawData.password ? "***" : "missing",
      confirmPassword: rawData.confirmPassword ? "***" : "missing",
    })

    // Test database connection
    console.log("🔌 Testing database connection...")
    try {
      await db.$connect()
      console.log("✅ Database connection successful")
    } catch (dbError) {
      console.error("❌ Database connection failed:", dbError)
      return { success: false, error: "Database connection failed. Please check your DATABASE_URL." }
    }

    console.log("✅ Validating data with Zod...")
    const validatedData = registerSchema.parse(rawData)
    console.log("✅ Data validation successful")

    console.log("🔍 Checking for existing user...")
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: validatedData.email },
    })

    if (existingUser) {
      console.log("❌ User already exists")
      return { success: false, error: "An account with this email already exists" }
    }

    console.log("🔐 Hashing password...")
    // Create new user
    const hashedPassword = await hashPassword(validatedData.password)
    console.log("✅ Password hashed successfully")

    console.log("💾 Creating user in database...")
    const user = await db.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
      },
    })
    console.log("✅ User created successfully:", user.id)

    console.log("🎫 Creating session...")
    // Create session for the new user
    await createSession(user.id)
    console.log("✅ Session created successfully")

    console.log("🎉 Registration completed successfully!")
    return { success: true, message: "Account created successfully!" }
  } catch (error) {
    console.error("❌ Registration error:", error)

    if (error instanceof z.ZodError) {
      console.log("📋 Validation error:", error.errors)
      return { success: false, error: error.errors[0].message, field: error.errors[0].path[0] }
    }

    // Log the full error for debugging
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    // Return a more specific error message
    let errorMessage = "Failed to create account. Please try again."

    if (error instanceof Error) {
      if (error.message.includes("connect")) {
        errorMessage = "Database connection error. Please check your MongoDB connection."
      } else if (error.message.includes("JWT")) {
        errorMessage = "Authentication configuration error. Please check JWT_SECRET."
      } else if (error.message.includes("bcrypt")) {
        errorMessage = "Password hashing error. Please try again."
      }
    }

    return { success: false, error: errorMessage }
  }
}

export async function loginAction(formData: FormData) {
  try {
    console.log("🚀 Starting login process...")

    // Check environment variables first
    if (!process.env.DATABASE_URL) {
      console.error("❌ DATABASE_URL is missing!")
      return { success: false, error: "Server configuration error: DATABASE_URL missing" }
    }

    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET is missing!")
      return { success: false, error: "Server configuration error: JWT_SECRET missing" }
    }

    const rawData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    console.log("📝 Login attempt for email:", rawData.email)

    // Test database connection
    console.log("🔌 Testing database connection...")
    try {
      await db.$connect()
      console.log("✅ Database connection successful")
    } catch (dbError) {
      console.error("❌ Database connection failed:", dbError)
      return { success: false, error: "Database connection failed. Please check your DATABASE_URL." }
    }

    const validatedData = loginSchema.parse(rawData)
    console.log("✅ Login data validation successful")

    console.log("🔍 Looking up user...")
    const user = await db.user.findUnique({
      where: { email: validatedData.email },
    })

    if (!user) {
      console.log("❌ User not found")
      return { success: false, error: "Invalid email or password" }
    }

    console.log("🔐 Verifying password...")
    const passwordValid = await verifyPassword(validatedData.password, user.password)

    if (!passwordValid) {
      console.log("❌ Invalid password")
      return { success: false, error: "Invalid email or password" }
    }

    console.log("🎫 Creating session...")
    await createSession(user.id)
    console.log("✅ Login successful!")

    return { success: true }
  } catch (error) {
    console.error("❌ Login error:", error)

    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }

    // Log the full error for debugging
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    // Return a more specific error message
    let errorMessage = "Login failed. Please try again."

    if (error instanceof Error) {
      if (error.message.includes("connect")) {
        errorMessage = "Database connection error. Please check your MongoDB connection."
      } else if (error.message.includes("JWT")) {
        errorMessage = "Authentication configuration error. Please check JWT_SECRET."
      }
    }

    return { success: false, error: errorMessage }
  }
}

export async function logoutAction() {
  try {
    await deleteSession()
  } catch (error) {
    console.error("Logout error:", error)
  }
  redirect("/login")
}

export async function changePasswordAction(currentPassword: string, newPassword: string) {
  try {
    const session = await getSession()
    if (!session) {
      return { success: false, error: "Not authenticated" }
    }

    const user = await db.user.findUnique({
      where: { id: session.user.id },
    })

    if (!user || !(await verifyPassword(currentPassword, user.password))) {
      return { success: false, error: "Current password is incorrect" }
    }

    const hashedPassword = await hashPassword(newPassword)

    await db.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    })

    // Create new session to extend expiry
    await deleteSession()
    await createSession(user.id)

    return { success: true, message: "Password changed successfully! Session extended for 24 hours." }
  } catch (error) {
    console.error("Change password error:", error)
    return { success: false, error: "Failed to change password. Please try again." }
  }
}

export async function getSessionInfo() {
  try {
    const session = await getSession()
    if (!session) return null

    return {
      user: session.user,
      expiresAt: session.expiresAt.toISOString(),
    }
  } catch (error) {
    console.error("Get session info error:", error)
    return null
  }
}
