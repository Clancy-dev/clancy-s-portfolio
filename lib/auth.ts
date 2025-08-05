import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createSession(userId: string): Promise<string> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION)

  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresAt)
    .setIssuedAt()
    .sign(JWT_SECRET)

  await db.session.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  })

  const cookieStore = await cookies()
  cookieStore.set("dashboard-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  })

  return token
}

export async function getSession(): Promise<{ user: User; expiresAt: Date } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("dashboard-session")?.value

  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    const userId = payload.userId as string

    const session = await db.session.findUnique({
      where: { token },
      include: { user: true },
    })

    if (!session || session.expiresAt < new Date()) {
      await deleteSession(token)
      return null
    }

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
    await deleteSession(token)
    return null
  }
}

export async function deleteSession(token?: string): Promise<void> {
  // This function should only be called from server actions
  // Client-side logout will be handled by server actions
  if (typeof window !== "undefined") {
    throw new Error("deleteSession should not be called on the client side")
  }

  const cookieStore = await cookies()

  if (!token) {
    token = cookieStore.get("dashboard-session")?.value
  }

  if (token) {
    await db.session.deleteMany({
      where: { token },
    })
  }

  cookieStore.delete("dashboard-session")
}

export async function requireAuth(): Promise<{ user: User; expiresAt: Date }> {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return session
}
