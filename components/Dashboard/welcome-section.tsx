"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function WelcomeSection() {
  const [greeting, setGreeting] = useState("")
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours()
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good morning")
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good afternoon")
      } else {
        setGreeting("Good evening")
      }
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">{greeting}, Clancy!</h2>
          <p className="text-muted-foreground">Welcome back to your dashboard. Here's what's happening today:</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => newDate && setDate(newDate)}
            className="rounded-md border"
            classNames={{
              day_today: "bg-primary text-primary-foreground font-bold",
            }}
          />
        </CardContent>
      </Card>
    </section>
  )
}

