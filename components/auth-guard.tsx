"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"


export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // if (!isLoading && !isAuthenticated && pathname !== "/") {
    //   router.push("/")
    // }
  }, [isAuthenticated, isLoading, pathname, router])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-600 dark:text-purple-400">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // if (!isAuthenticated && pathname !== "/") {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
  //         <p className="text-purple-600 dark:text-purple-400">Redirecting to login...</p>
  //       </div>
  //     </div>
  //   )
  // }

  return <>{children}</>
}


































// "use client"

// import type React from "react"

// import { useEffect } from "react"
// import { useRouter, usePathname } from "next/navigation"
// import { useAuth } from "@/hooks/use-auth"


// export function AuthGuard({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated, isLoading } = useAuth()
//   const router = useRouter()
//   const pathname = usePathname()

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated && pathname !== "/login") {
//       router.push("/login")
//     }
//   }, [isAuthenticated, isLoading, pathname, router])

//   // Show loading spinner while checking authentication
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
//           <p className="text-purple-600 dark:text-purple-400">Checking authentication...</p>
//         </div>
//       </div>
//     )
//   }

//   if (!isAuthenticated && pathname !== "/login") {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
//           <p className="text-purple-600 dark:text-purple-400">Redirecting to login...</p>
//         </div>
//       </div>
//     )
//   }

//   return <>{children}</>
// }
