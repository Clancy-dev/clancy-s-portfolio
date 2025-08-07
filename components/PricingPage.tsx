"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"



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
      tier: "basic",
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
      tier: "standard",
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
      tier: "pro",
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

  const getCardStyles = (tier: string, popular: boolean) => {
    const baseStyles = "relative transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"

    switch (tier) {
      case "basic":
        return `${baseStyles} ${
          popular
            ? "border-green-500 dark:border-green-400 border-2 shadow-xl dark:shadow-2xl lg:scale-105 bg-white dark:bg-gray-800"
            : "border-green-200 dark:border-green-700 hover:shadow-lg bg-white dark:bg-gray-800 hover:border-green-300 dark:hover:border-green-600"
        }`
      case "standard":
        return `${baseStyles} ${
          popular
            ? "border-blue-500 dark:border-blue-400 border-2 shadow-xl dark:shadow-2xl lg:scale-105 bg-white dark:bg-gray-800"
            : "border-blue-200 dark:border-blue-700 hover:shadow-lg bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600"
        }`
      case "pro":
        return `${baseStyles} ${
          popular
            ? "border-purple-500 dark:border-purple-400 border-2 shadow-xl dark:shadow-2xl lg:scale-105 bg-white dark:bg-gray-800"
            : "border-purple-200 dark:border-purple-700 hover:shadow-lg bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-600"
        }`
      default:
        return baseStyles
    }
  }

  const getBadgeStyles = (tier: string) => {
    switch (tier) {
      case "basic":
        return "bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 text-white"
      case "standard":
        return "bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white"
      case "pro":
        return "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getButtonStyles = (tier: string, popular: boolean) => {
    const baseStyles = "w-full py-2 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-200"

    switch (tier) {
      case "basic":
        return `${baseStyles} ${
          popular
            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 dark:from-green-600 dark:to-emerald-700 dark:hover:from-green-700 dark:hover:to-emerald-800 text-white shadow-lg hover:shadow-xl"
            : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 dark:from-green-600 dark:to-emerald-700 dark:hover:from-green-700 dark:hover:to-emerald-800 text-white"
        }`
      case "standard":
        return `${baseStyles} ${
          popular
            ? "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 dark:from-blue-600 dark:to-cyan-700 dark:hover:from-blue-700 dark:hover:to-cyan-800 text-white shadow-lg hover:shadow-xl"
            : "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 dark:from-blue-600 dark:to-cyan-700 dark:hover:from-blue-700 dark:hover:to-cyan-800 text-white"
        }`
      case "pro":
        return `${baseStyles} ${
          popular
            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-700 dark:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 text-white shadow-lg hover:shadow-xl"
            : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-700 dark:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 text-white"
        }`
      default:
        return `${baseStyles} bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white`
    }
  }

  const getOutcomeStyles = (tier: string) => {
    switch (tier) {
      case "basic":
        return "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-l-4 border-green-500 dark:border-green-400"
      case "standard":
        return "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-l-4 border-blue-500 dark:border-blue-400"
      case "pro":
        return "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-l-4 border-purple-500 dark:border-purple-400"
      default:
        return "bg-gray-50 dark:bg-gray-900/30 border-l-4 border-gray-500"
    }
  }

  const getOutcomeTextStyles = (tier: string) => {
    switch (tier) {
      case "basic":
        return "text-green-800 dark:text-green-300"
      case "standard":
        return "text-blue-800 dark:text-blue-300"
      case "pro":
        return "text-purple-800 dark:text-purple-300"
      default:
        return "text-gray-800 dark:text-gray-300"
    }
  }

  const getOutcomeDescStyles = (tier: string) => {
    switch (tier) {
      case "basic":
        return "text-green-700 dark:text-green-200"
      case "standard":
        return "text-blue-700 dark:text-blue-200"
      case "pro":
        return "text-purple-700 dark:text-purple-200"
      default:
        return "text-gray-700 dark:text-gray-200"
    }
  }

  return (
    <>
    <div className={`min-h-screen mt-[72px] transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen pt-[2rem] sm:pt-0 sm:pb-0 pb-[2rem] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-950 dark:via-slate-900 dark:to-black relative overflow-hidden">
        {/* Background decoration matching hero */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 dark:opacity-3"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-['Inter',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Ready to push your business
              </span>
              <br />
              <span className="text-white dark:text-gray-100">online?</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 font-['Inter',_'system-ui',_sans-serif]">
              Choose the perfect website package to transform your business online. Each solution is crafted to deliver
              measurable results and drive real growth for your Uganda-based business.
            </p>

            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 px-4">
              <span
                className={`text-sm font-medium transition-colors ${currency === "UGX" ? "text-purple-400 dark:text-purple-300" : "text-gray-400 dark:text-gray-500"}`}
              >
                UGX
              </span>
              <button
                onClick={() => setCurrency(currency === "UGX" ? "USD" : "UGX")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                aria-label="Toggle currency"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    currency === "USD" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${currency === "USD" ? "text-purple-400 dark:text-purple-300" : "text-gray-400 dark:text-gray-500"}`}
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
                className={`${getCardStyles(pkg.tier, pkg.popular)} ${index === 1 ? "lg:mt-0" : "lg:mt-4"} backdrop-blur-sm bg-white/95 dark:bg-slate-900/95`}
              >
                {pkg.popular && (
                  <Badge
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${getBadgeStyles(pkg.tier)} px-3 sm:px-4 py-1 text-xs sm:text-sm`}
                  >
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-['Inter',_'system-ui',_sans-serif]">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base font-['Inter',_'system-ui',_sans-serif]">
                    {pkg.description}
                  </CardDescription>
                  <div className="mt-4 sm:mt-6">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 via-purple-700 to-slate-900 dark:from-slate-200 dark:via-purple-300 dark:to-slate-100 bg-clip-text text-transparent">
                      {formatPrice(pkg.priceUGX, pkg.priceUSD)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">one-time</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div className={`${getOutcomeStyles(pkg.tier)} p-3 sm:p-4 rounded-lg`}>
                    <p className={`text-xs sm:text-sm font-semibold ${getOutcomeTextStyles(pkg.tier)} mb-1`}>
                      What You'll Achieve:
                    </p>
                    <p
                      className={`${getOutcomeDescStyles(pkg.tier)} text-sm sm:text-base font-['Inter',_'system-ui',_sans-serif]`}
                    >
                      {pkg.outcome}
                    </p>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-['Inter',_'system-ui',_sans-serif]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <Button className={getButtonStyles(pkg.tier, pkg.popular)}>Get Started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto border border-purple-200/30 dark:border-purple-500/30">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Inter',_'system-ui',_sans-serif]">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Ready to Transform Your Business Online?
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg px-4 font-['Inter',_'system-ui',_sans-serif]">
              Join hundreds of successful Uganda businesses who have already made the smart investment in their digital
              future. Let's discuss which package is perfect for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-700 dark:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 font-['Inter',_'system-ui',_sans-serif]"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 font-['Inter',_'system-ui',_sans-serif]"
                >
                  View My Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 font-['Inter',_'system-ui',_sans-serif]">
              Trusted by businesses across Uganda
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 opacity-60">
              <div className="text-xs text-gray-400 dark:text-gray-500">✓ 100+ Projects Delivered</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">✓ 5-Star Client Reviews</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">✓ Local Uganda Team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
