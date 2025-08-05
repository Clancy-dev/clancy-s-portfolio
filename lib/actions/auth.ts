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

    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
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
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return { success: false, error: "Failed to create account. Please try again." }
  }
}

export async function loginAction(formData: FormData) {
  try {
    console.log("🚀 Starting login process...")

    const rawData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    console.log("📝 Login attempt for email:", rawData.email)

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

    return { success: false, error: "Login failed. Please try again." }
  }
}

export async function logoutAction() {
  try {
    await deleteSession()
  } catch (error) {
    console.error("Logout error:", error)
  }
  redirect("/")
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
