"use client"

import { useState } from "react"
import { Check, Star, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const [currency, setCurrency] = useState<"UGX" | "USD">("UGX")
  const [darkMode, setDarkMode] = useState(false)

  const packages = [
    {
      name: "Basic",
      description: "Perfect for small businesses ready to establish their digital footprint",
      priceUGX: 800000,
      priceUSD: 216,
      popular: false,
      benefits: [
        "Establish a credible online presence that builds trust",
        "Professional design that reflects your brand values",
        "Mobile-optimized experience for all your customers",
        "Search engine visibility to help clients find you",
        "Fast loading speeds that keep visitors engaged",
        "Secure hosting and reliable uptime",
      ],
      outcome: "Transform your business from invisible to credible online",
    },
    {
      name: "Standard",
      description: "Ideal for growing businesses ready to attract and convert clients",
      priceUGX: 1600000,
      priceUSD: 432,
      popular: true,
      benefits: [
        "Attract and convert new clients with strategic design",
        "Advanced user experience that guides visitors to action",
        "Content management system for easy updates",
        "Analytics integration to track your success",
        "Social media integration to expand your reach",
        "Lead generation optimization",
        "Professional email setup with your domain",
      ],
      outcome: "Turn your website into a powerful client acquisition machine",
    },
    {
      name: "Pro",
      description: "For ambitious businesses ready to dominate their market online",
      priceUGX: 3200000,
      priceUSD: 865,
      popular: false,
      benefits: [
        "Position your business for growth, scale, and online dominance",
        "Advanced functionality tailored to your unique needs",
        "E-commerce capabilities to sell products/services online",
        "Custom integrations with your existing business tools",
        "Advanced SEO optimization for market leadership",
        "Comprehensive analytics and reporting dashboard",
        "Priority support and ongoing optimization",
        "Multi-language support for broader market reach",
      ],
      outcome: "Establish market leadership and scale your business exponentially",
    },
  ]

  const formatPrice = (priceUGX: number, priceUSD: number) => {
    if (currency === "UGX") {
      return `UGX ${priceUGX.toLocaleString()}`
    }
    return `$${priceUSD.toLocaleString()}`
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            {/* Dark Mode Toggle */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Invest in Your Digital Success
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Choose the perfect package to transform your business online. Each solution is crafted to deliver
              measurable results and drive real growth for your Uganda-based business.
            </p>

            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 px-4">
              <span
                className={`text-sm font-medium transition-colors ${currency === "UGX" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}
              >
                UGX
              </span>
              <button
                onClick={() => setCurrency(currency === "UGX" ? "USD" : "UGX")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 dark:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                aria-label="Toggle currency"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    currency === "USD" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${currency === "USD" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}
              >
                USD
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 lg:mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`relative transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl ${
                  pkg.popular
                    ? "border-blue-500 dark:border-blue-400 border-2 shadow-xl dark:shadow-2xl lg:scale-105 bg-white dark:bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 hover:shadow-lg bg-white dark:bg-gray-800"
                } ${index === 1 ? "lg:mt-0" : "lg:mt-4"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                    {pkg.description}
                  </CardDescription>
                  <div className="mt-4 sm:mt-6">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(pkg.priceUGX, pkg.priceUSD)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">one-time</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                    <p className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                      What You'll Achieve:
                    </p>
                    <p className="text-blue-700 dark:text-blue-200 text-sm sm:text-base">{pkg.outcome}</p>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <Button
                    className={`w-full py-2 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-2xl max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg px-4">
              Join hundreds of successful Uganda businesses who have already made the smart investment in their digital
              future. Let's discuss which package is perfect for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Trusted by businesses across Uganda</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 opacity-60">
              <div className="text-xs text-gray-400 dark:text-gray-500">✓ 100+ Projects Delivered</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">✓ 5-Star Client Reviews</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">✓ Local Uganda Team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


