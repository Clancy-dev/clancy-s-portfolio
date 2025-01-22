"use client"

import { useState, useRef, useEffect } from "react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, X } from "lucide-react"



const pricingPlans = [
  {
    title: "Basic",
    price: 1100000,
    features: [
      "Single landing page",
      "5 custom sections",
      "Responsive design",
      "Form submission to email",
      "Speed optimization",
      "Social media integration",
      "Basic SEO setup",
      "Custom domain setup",
    ],
    disabledFeatures: ["Database integration", "Content Management System"],
  },
  {
    title: "Standard",
    price: 2200000,
    features: [
      "Up to 5 custom pages",
      "Additional pages @ $30 each",
      "Responsive design",
      "Advanced SEO optimization",
      "Form submission to email",
      "Social media integration",
      "Speed optimization",
      "Analytics integration",
    ],
    disabledFeatures: ["Database integration", "Content Management System"],
  },
  {
    title: "Pro",
    price: 4400000,
    features: [
      "Unlimited pages",
      "Custom database integration",
      "Content Management System",
      "User authentication",
      "Admin dashboard",
      "Advanced SEO optimization",
      "Speed optimization",
      "Custom API development",
      "Real-time analytics",
      "Priority support",
    ],
    disabledFeatures: [],
  },
]

export default function PricingPage() {
  const [currentPlanIndex, setCurrentPlanIndex] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(3700) // 1 USD = 3700 UGX
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePlanChange = (index: number) => {
    setCurrentPlanIndex(index)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (carouselRef.current) {
        e.preventDefault()
        carouselRef.current.scrollLeft += e.deltaY
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 py-12 mt-[72px]">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Pricing Plans</h1>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory py-4 mb-8 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 transition-all duration-300 ease-in-out ${
                index === currentPlanIndex ? "scale-105 z-10" : "scale-95 opacity-70"
              }`}
              onClick={() => handlePlanChange(index)}
            >
              <Card className={`h-full ${index === currentPlanIndex ? "shadow-xl" : ""}`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-center mb-4">UGX {plan.price.toLocaleString()}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.disabledFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <X className="mr-2 h-4 w-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <Card className="w-full max-w-md mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Currency Converter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="ugx">UGX</Label>
                <Input
                  id="ugx"
                  type="number"
                  value={pricingPlans[currentPlanIndex].price}
                  onChange={(e) => setExchangeRate(3700 / Number.parseFloat(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="usd">USD</Label>
                <Input
                  id="usd"
                  type="number"
                  value={(pricingPlans[currentPlanIndex].price / exchangeRate).toFixed(2)}
                  onChange={(e) =>
                    setExchangeRate(pricingPlans[currentPlanIndex].price / Number.parseFloat(e.target.value))
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full max-w-md mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What's included in each plan?</AccordionTrigger>
            <AccordionContent>
              Each plan includes different features. The Basic plan is perfect for small businesses needing a
              professional online presence. The Standard plan is ideal for growing businesses requiring multiple pages.
              The Pro plan is a full-featured web application for enterprise needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade your plan at any time. We'll prorate the cost based on the remaining time in your
              current billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer custom solutions?</AccordionTrigger>
            <AccordionContent>
              If you have specific requirements that aren't covered by our standard plans, please contact us for a
              custom quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  )
}

