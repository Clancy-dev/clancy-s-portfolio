"use client"

import { useState } from "react"
import { Star, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



export default function PricingPage() {
  const [currency, setCurrency] = useState("UGX")
  const pricing = {
    Basic: 600000,
    Standard: 850000,
    Pro: 1700000,
  }

  const conversionRates: { [key: string]: number } = {
    UGX: 1,
    USD: 0.00027,
    EUR: 0.00025,
    GBP: 0.00022,
    KES: 0.036,
    TZS: 0.63,
    ZAR: 0.005,
    NGN: 0.2,
    CAD: 0.00036,
    AUD: 0.00038,
    JPY: 0.037,
    INR: 0.022,
    CNY: 0.0018,
  }

  const currencies = Object.keys(conversionRates)

  const handleCurrencyChange = (value: string) => {
    setCurrency(value)
  }

  const convertPrices = (basePrice: number, currency: string) => {
    const rate = conversionRates[currency] || 1
    return Math.round(basePrice * rate)
  }

  const plans = [
    {
      name: "Basic",
      price: convertPrices(pricing.Basic, currency),
      description: "Perfect for small businesses needing a professional online presence",
      features: [
        { name: "Domain Set-Up", included: true },
        { name: "Hosting", included: true },
        { name: "Basic SEO setup", included: true },
        { name: "Single-page website", included: true },
        { name: "Mobile-friendly design", included: true },
        { name: "Responsive design", included: true },
        { name: "Form submission to email", included: true },
        { name: "Speed optimization", included: true },
        { name: "Social media integration", included: true },
        { name: "Analytics Integration", included: false },
        { name: "Google My Business Set-Up", included: false },
        { name: "Database Integration", included: false },
        { name: "Content Management System", included: false },
      ],
    },
    {
      name: "Standard",
      price: convertPrices(pricing.Standard, currency),
      description: "Ideal for growing businesses requiring multiple pages",
      popular: true,
      features: [
        { name: "Domain Set-Up", included: true },
        { name: "Hosting", included: true },
        { name: "Advanced SEO Optimization", included: true },
        { name: "Up to 7 pages", included: true },
        { name: "Additional pages @ $10 each", included: true },
        { name: "Mobile-friendly design", included: true },
        { name: "Form Submission to Email", included: true },
        { name: "Social media integration", included: true },
        { name: "Speed Optimization", included: true },
        { name: "Analytics Integration", included: true },
        { name: "Google My Business Set-Up", included: true },
        { name: "Database Integration", included: false },
        { name: "Content Management System", included: false },
      ],
    },
    {
      name: "Pro",
      price: convertPrices(pricing.Pro, currency),
      description: "Full-featured web application for enterprise needs",
      features: [
        { name: "Domain Set-Up", included: true },
        { name: "Hosting", included: true },
        { name: "Advanced SEO Optimization", included: true },
        { name: "Unlimited Pages", included: true },
        { name: "Mobile-friendly design", included: true },
        { name: "Form Submission to Email", included: true },
        { name: "Social media integration", included: true },
        { name: "Speed Optimization", included: true },
        { name: "Analytics Integration", included: true },
        { name: "Google My Business Set-Up", included: true },
        { name: "Database Integration", included: true },
        { name: "Content Management System", included: true },
        { name: "Priority Support", included: true },
        { name: "Real time Analytics", included: true },
        { name: "User Authentication", included: true },
        { name: "Fully Customized User Dashboard", included: true },
        { name: "Custom API development", included: true },
      ],
    },
  ]

  const faqs = [
    {
      question: "How much will it cost?",
      answer: "The cost depends on the type of website, features, and customization you need. The pricing starts at UGX 600,000 for a basic plan, UGX 850,000 for a standard plan, and UGX 1,700,000 for advanced features. I'll work within your budget to deliver the best solution.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept mobile money, bank transfers, and PayPal.",
    },
    {
      question: "Will the website be mobile-friendly?",
      answer: "Yes, all my websites are fully responsive, meaning they will look and work perfectly on mobile devices, tablets, and desktops.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Absolutely! You can check out my projects, where i showcase some i have delivered for happy clients.",
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes, i provide user-friendly Content Management Systems (CMS) like custom admin dashboards, allowing you to easily make updates without technical skills.",
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, i do offer maintenance to ensure your website stays updated, secure, and functioning smoothly.",
    },
    {
      question: "What kind of security will the website have?",
      answer: "Your website will include SSL certificates for encryption, regular backups, and protection against malware. I also offer maintenance services to keep your website secure.",
    },
    {
      question: "Will I get training on how to use the website?",
      answer: "Yes, i will provide detailed training and support to help you manage your website confidently.",
    },
    {
      question: "What happens if the website breaks or has any unintended issues?",
      answer: "I will be available to provide ongoing support and troubleshooting. If you encounter any issues, i will be available to fix them promptly.",
    },
    {
      question: "Will I own the website once it’s built?",
      answer: "Yes, you will have full ownership of your website, including the domain, content, and design.",
    },
    {
      question: "Can I make changes to the design later?",
      answer: "Definitely! I design websites with scalability in mind, so you can easily make changes or add features as your business grows.",
    },
    {
      question: "Can you customize the website to match my brand?",
      answer: "Yes, i ensure your website aligns with your branding, including colors, fonts, logos, and overall design, to create a consistent identity.",
    },
    {
      question: "Will my website be fast?",
      answer: "Yes, i optimize all websites for speed, using fast hosting, image compression, and clean code to ensure quick load times and excellent performance.",
    },
    {
      question: "Is there a contract, receipt or proof of after payment details?",
      answer: "Yes, i provide a detailed agreement outlining the scope of work, timelines, payment terms, and other project details for transparency as well as a receipt for proof of payment for the service.",
    },
    {
      question: "Will my website bring in more customers?",
      answer: "Yes, i design websites optimized for conversions and customer engagement. Combined with proper marketing strategies, your website will help attract and retain more customers.",
    },
    {
      question: "How will I track the website's performance?",
      answer: "I integrate analytics tools like Google Analytics, allowing you to track traffic, user behavior, and other key metrics.",
    },
     
  ]

  return (
    <div className="min-h-screen bg-gray-100 lg:p-6 md:p-3 sm:p-2 p-1 mt-[72px] ">
      <div className="w-full">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900">Pricing Plans</h1>
        </div>

        <div className="py-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Currency</h2>
          <Select onValueChange={handleCurrencyChange} defaultValue={currency}>
            <SelectTrigger className="w-[180px] mx-auto bg-white">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currencyOption) => (
                <SelectItem key={currencyOption} value={currencyOption}>
                  {currencyOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1 mt-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-blue-500 border-2" : ""}`}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                {plan.popular && (
                  <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase">
                    Most Popular
                  </span>
                )}
                <CardDescription className="text-xl font-semibold">
                  {currency} {plan.price.toLocaleString()}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">What's included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        

        <div className="py-12 pb-0 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <Card className="lg:w-[80%] md:w-[100%] sm:w-[100%] w-full ">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="accordion-item">
                    <AccordionTrigger className="accordion-trigger">{faq.question}</AccordionTrigger>
                    <AccordionContent className="accordion-content">
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

