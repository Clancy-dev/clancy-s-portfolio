"use client"

import type React from "react"

import { useState, useEffect, useTransition } from "react"
import { Settings, Lock, LogOut, Eye, EyeOff, User, Shield, Save, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { logoutAction, getSessionInfo } from "@/lib/actions/auth"

export function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [sessionInfo, setSessionInfo] = useState<{ user: { email: string; name?: string }; expiresAt: string } | null>(
    null,
  )
  const [isPendingPassword, startPasswordTransition] = useTransition()
  const [isPendingLogout, startLogoutTransition] = useTransition()

  // Get session information
  useEffect(() => {
    const loadSessionInfo = async () => {
      try {
        const info = await getSessionInfo()
        setSessionInfo(info)
      } catch (error) {
        console.error("Failed to get session info:", error)
      }
    }

    loadSessionInfo()
    const interval = setInterval(loadSessionInfo, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match")
      return
    }

    if (newPassword.length < 6) {
      setError("New password must be at least 6 characters long")
      return
    }

    // startPasswordTransition(async () => {
    //   const result = await changePasswordAction(currentPassword, newPassword)
    //   if (result.success) {
    //     setMessage(result.message || "Password changed successfully!")
    //     setCurrentPassword("")
    //     setNewPassword("")
    //     setConfirmPassword("")
    //     // Refresh session info
    //     const info = await getSessionInfo()
    //     setSessionInfo(info)
    //   } else {
    //     setError(result.error || "Failed to change password")
    //   }
    // })
  }

  const handleLogout = () => {
    startLogoutTransition(async () => {
      await logoutAction()
    })
  }

  const getTimeLeft = () => {
    if (!sessionInfo) return ""

    const expiresAt = new Date(sessionInfo.expiresAt)
    const now = new Date()
    const timeLeft = Math.max(0, expiresAt.getTime() - now.getTime())

    const hours = Math.floor(timeLeft / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))

    return `${hours}h ${minutes}m`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Settings
            </h1>
          </div>
          <p className="text-purple-600 dark:text-purple-400 text-lg">Manage your account preferences</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* User Info Card */}
          {sessionInfo && (
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-500/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <User className="h-5 w-5" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessionInfo.user.name && (
                    <div>
                      <Label className="text-slate-600 dark:text-slate-400">Full Name</Label>
                      <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{sessionInfo.user.name}</p>
                    </div>
                  )}
                  <div>
                    <Label className="text-slate-600 dark:text-slate-400">Email Address</Label>
                    <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{sessionInfo.user.email}</p>
                  </div>
                  <div>
                    <Label className="text-slate-600 dark:text-slate-400">Account Type</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Shield className="h-4 w-4 text-purple-500" />
                      <span className="text-lg font-medium text-slate-800 dark:text-slate-200">User</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Session Info Card */}
          {sessionInfo && (
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-500/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Clock className="h-5 w-5" />
                  Session Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-slate-600 dark:text-slate-400">Session Expires</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-lg font-medium text-slate-800 dark:text-slate-200">
                        {new Date(sessionInfo.expiresAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-slate-600 dark:text-slate-400">Time Remaining</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-lg font-medium text-green-600 dark:text-green-400">{getTimeLeft()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Change Password Card */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-500/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <Lock className="h-5 w-5" />
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-lg p-3">
                    <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {message && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg p-3">
                    <p className="text-green-600 dark:text-green-400 text-sm">{message}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-slate-700 dark:text-slate-300">
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      className="pr-10 bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 focus:border-purple-400 focus:ring-purple-400/20"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-slate-700 dark:text-slate-300">
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="pr-10 bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 focus:border-purple-400 focus:ring-purple-400/20"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-300">
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="pr-10 bg-white/70 dark:bg-slate-700/50 border-purple-200 dark:border-purple-500/30 focus:border-purple-400 focus:ring-purple-400/20"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isPendingPassword}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isPendingPassword ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Changing Password...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Change Password
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Logout Section */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-red-200 dark:border-red-500/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <LogOut className="h-5 w-5" />
                Sign Out
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Sign out of your account. You'll need to sign in again to access your projects.
              </p>
              <Button
                onClick={handleLogout}
                disabled={isPendingLogout}
                variant="destructive"
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isPendingLogout ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Signing Out...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
