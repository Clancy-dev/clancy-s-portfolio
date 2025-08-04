// "use server"

// import { redirect } from "next/navigation"
// import { db } from "@/lib/db"
// import { hashPassword, verifyPassword, createSession, deleteSession, getSession } from "@/lib/auth"
// import { z } from "zod"

// const registerSchema = z
//   .object({
//     name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
//     email: z.string().email("Please enter a valid email address"),
//     password: z
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .max(100, "Password must be less than 100 characters"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   })

// const loginSchema = z.object({
//   email: z.string().email("Please enter a valid email address"),
//   password: z.string().min(1, "Password is required"),
// })

// export async function registerAction(formData: FormData) {
//   try {
//     const rawData = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//       confirmPassword: formData.get("confirmPassword") as string,
//     }

//     const validatedData = registerSchema.parse(rawData)

//     // Check if user already exists
//     const existingUser = await db.user.findUnique({
//       where: { email: validatedData.email },
//     })

//     if (existingUser) {
//       return { success: false, error: "An account with this email already exists" }
//     }

//     // Create new user
//     const hashedPassword = await hashPassword(validatedData.password)

//     const user = await db.user.create({
//       data: {
//         name: validatedData.name,
//         email: validatedData.email,
//         password: hashedPassword,
//       },
//     })

//     // Create session for the new user
//     await createSession(user.id)

//     return { success: true, message: "Account created successfully!" }
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return { success: false, error: error.errors[0].message, field: error.errors[0].path[0] }
//     }

//     console.error("Registration error:", error)
//     return { success: false, error: "Failed to create account. Please try again." }
//   }
// }

// export async function loginAction(formData: FormData) {
//   try {
//     const rawData = {
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//     }

//     const validatedData = loginSchema.parse(rawData)

//     const user = await db.user.findUnique({
//       where: { email: validatedData.email },
//     })

//     if (!user || !(await verifyPassword(validatedData.password, user.password))) {
//       return { success: false, error: "Invalid email or password" }
//     }

//     await createSession(user.id)
//     return { success: true }
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return { success: false, error: error.errors[0].message }
//     }

//     console.error("Login error:", error)
//     return { success: false, error: "Login failed. Please try again." }
//   }
// }

// export async function logoutAction() {
//   try {
//     await deleteSession()
//   } catch (error) {
//     console.error("Logout error:", error)
//   }
//   redirect("/login")
// }

// export async function changePasswordAction(currentPassword: string, newPassword: string) {
//   try {
//     const session = await getSession()
//     if (!session) {
//       return { success: false, error: "Not authenticated" }
//     }

//     const user = await db.user.findUnique({
//       where: { id: session.user.id },
//     })

//     if (!user || !(await verifyPassword(currentPassword, user.password))) {
//       return { success: false, error: "Current password is incorrect" }
//     }

//     const hashedPassword = await hashPassword(newPassword)

//     await db.user.update({
//       where: { id: user.id },
//       data: { password: hashedPassword },
//     })

//     // Create new session to extend expiry
//     await deleteSession()
//     await createSession(user.id)

//     return { success: true, message: "Password changed successfully! Session extended for 24 hours." }
//   } catch (error) {
//     console.error("Change password error:", error)
//     return { success: false, error: "Failed to change password. Please try again." }
//   }
// }

// export async function getSessionInfo() {
//   try {
//     const session = await getSession()
//     if (!session) return null

//     return {
//       user: session.user,
//       expiresAt: session.expiresAt.toISOString(),
//     }
//   } catch (error) {
//     console.error("Get session info error:", error)
//     return null
//   }
// }
