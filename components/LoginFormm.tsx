"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ErrorMessage from "./ErrorMessage"


type FormData = {
  email: string
  password: string
}

export default function LoginFormm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [isUnauthorized, setIsUnauthorized] = useState(false)

  const onSubmit = (data: FormData) => {
    // Simulate login attempt
    console.log("Login attempt:", data)
    // Always set unauthorized error
    setIsUnauthorized(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>
      <Button type="submit" className="w-full dark:bg-black dark:text-white dark:border-l-[1px] dark:border-b-[1px] dark:border-white ">
        Log In
      </Button>
      {isUnauthorized && <ErrorMessage message="Unauthorized: Invalid email or password" />}
    </form>
  )
}

