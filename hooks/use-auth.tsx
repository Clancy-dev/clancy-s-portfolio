"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

interface User {
  email: string
  id: string
}

interface AuthSession {
  user: User
  expiresAt: number
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo user credentials
const DEMO_USER = {
  email: "admin@example.com",
  password: "password123",
  id: "demo-user-1",
}

// Session duration: 1 day in milliseconds
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check session validity
  const isSessionValid = (session: AuthSession): boolean => {
    return Date.now() < session.expiresAt
  }

  // Create new session
  const createSession = (userData: User): AuthSession => {
    return {
      user: userData,
      expiresAt: Date.now() + SESSION_DURATION,
    }
  }

  // Save session to localStorage
  const saveSession = (session: AuthSession) => {
    localStorage.setItem("auth-session", JSON.stringify(session))
  }

  // Load session from localStorage
  const loadSession = (): AuthSession | null => {
    try {
      const storedSession = localStorage.getItem("auth-session")
      if (storedSession) {
        return JSON.parse(storedSession)
      }
    } catch (error) {
      console.error("Failed to load session:", error)
      localStorage.removeItem("auth-session")
    }
    return null
  }

  // Clear session
  const clearSession = () => {
    localStorage.removeItem("auth-session")
    localStorage.removeItem("auth-user") // Remove old format if exists
  }

  useEffect(() => {
    // Check for existing session on mount
    const session = loadSession()

    if (session && isSessionValid(session)) {
      setUser(session.user)
      setIsAuthenticated(true)
    } else if (session) {
      // Session expired, clear it
      clearSession()
    }

    setIsLoading(false)
  }, [])

  // Set up session expiry check
  useEffect(() => {
    if (!isAuthenticated) return

    const checkSessionExpiry = () => {
      const session = loadSession()
      if (!session || !isSessionValid(session)) {
        // Session expired, log out user
        setUser(null)
        setIsAuthenticated(false)
        clearSession()
      }
    }

    // Check session every minute
    const interval = setInterval(checkSessionExpiry, 60 * 1000)

    return () => clearInterval(interval)
  }, [isAuthenticated])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const userData = { email: DEMO_USER.email, id: DEMO_USER.id }
      const session = createSession(userData)

      setUser(userData)
      setIsAuthenticated(true)
      saveSession(session)

      return true
    }
    return false
  }

  const logout = async (): Promise<void> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    setUser(null)
    setIsAuthenticated(false)
    clearSession()
  }

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you'd verify the current password with the server
    if (currentPassword === DEMO_USER.password) {
      // In a real app, you'd update the password on the server
      DEMO_USER.password = newPassword

      // Extend session after password change
      if (user) {
        const session = createSession(user)
        saveSession(session)
      }

      return true
    }
    return false
  }

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    changePassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
