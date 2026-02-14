"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { loginAction, logoutAction, getSessionInfo } from "@/actions/auth"

interface User {
  id: string
  email: string
  name?: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load session from server
  const loadSession = async () => {
    try {
      const session = await getSessionInfo()
      if (session) {
        setUser(session.user)
        setIsAuthenticated(true)
      } else {
        setUser(null)
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.error("Failed to load session:", error)
      setUser(null)
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadSession()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await loginAction(new FormData(Object.entries({ email, password }) as any))
      if (result.success) {
        await loadSession() // reload user session after login
        return true
      }
      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await logoutAction()
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
