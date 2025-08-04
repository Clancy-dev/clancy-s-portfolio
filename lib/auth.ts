import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"

const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
}

export async function hashPassword(password: string): Promise<string> {
  try {
    console.log("🔐 Hashing password...")
    const hash = await bcrypt.hash(password, 12)
    console.log("✅ Password hashed successfully")
    return hash
  } catch (error) {
    console.error("❌ Password hashing failed:", error)
    throw new Error("Password hashing failed")
  }
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    console.log("🔍 Verifying password...")
    const isValid = await bcrypt.compare(password, hashedPassword)
    console.log("✅ Password verification completed:", isValid ? "valid" : "invalid")
    return isValid
  } catch (error) {
    console.error("❌ Password verification failed:", error)
    throw new Error("Password verification failed")
  }
}

export async function createSession(userId: string): Promise<string> {
  try {
    console.log("🎫 Creating session for user:", userId)

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured")
    }

    const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
    const expiresAt = new Date(Date.now() + SESSION_DURATION)

    console.log("🔑 Signing JWT token...")
    const token = await new SignJWT({ userId })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(expiresAt)
      .setIssuedAt()
      .sign(JWT_SECRET)

    console.log("💾 Saving session to database...")
    await db.session.create({
      data: {
        userId,
        token,
        expiresAt,
      },
    })

    console.log("🍪 Setting session cookie...")
    const cookieStore = await cookies()
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: expiresAt,
    })

    console.log("✅ Session created successfully")
    return token
  } catch (error) {
    console.error("❌ Session creation failed:", error)
    throw new Error("Session creation failed")
  }
}

export async function getSession(): Promise<{ user: User; expiresAt: Date } | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("session")?.value

    if (!token) {
      console.log("🔍 No session token found")
      return null
    }

    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET is not configured")
      return null
    }

    const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

    console.log("🔍 Verifying JWT token...")
    const { payload } = await jwtVerify(token, JWT_SECRET)
    const userId = payload.userId as string

    console.log("🔍 Looking up session in database...")
    const session = await db.session.findUnique({
      where: { token },
      include: { user: true },
    })

    if (!session || session.expiresAt < new Date()) {
      console.log("❌ Session expired or not found")
      await deleteSession(token)
      return null
    }

    console.log("✅ Session found and valid")
    return {
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name || undefined,
        avatar: session.user.avatar || undefined,
      },
      expiresAt: session.expiresAt,
    }
  } catch (error) {
    console.error("❌ Session retrieval failed:", error)
    if (error instanceof Error && error.message.includes("JWTExpired")) {
      console.log("🕐 JWT token expired")
    }
    return null
  }
}

export async function deleteSession(token?: string): Promise<void> {
  try {
    const cookieStore = await cookies()

    if (!token) {
      token = cookieStore.get("session")?.value
    }

    if (token) {
      console.log("🗑️ Deleting session from database...")
      await db.session.deleteMany({
        where: { token },
      })
    }

    console.log("🍪 Clearing session cookie...")
    cookieStore.delete("session")
    console.log("✅ Session deleted successfully")
  } catch (error) {
    console.error("❌ Session deletion failed:", error)
  }
}

export async function requireAuth(): Promise<{ user: User; expiresAt: Date }> {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return session
}
