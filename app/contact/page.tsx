"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-950 dark:via-slate-900 dark:to-black pt-20">
      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="relative h-80 mb-12 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/contact.jpg" alt="Contact Hero" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold text-white tracking-wide">Get in Touch</h1>
          </div>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 border-0 dark:border dark:border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h2>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p>+256 770983239</p>
                    <p>+256 707013121</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p>clancyro1000@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p>Kireka, Nakimbugwe Building, 1st Floor, Desishub Ltd.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 overflow-hidden border-0 dark:border dark:border-gray-700">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3590896938616!2d32.647460641681214!3d0.3463231551616998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db9faf2330611%3A0x8922b0d5569fed7d!2sDesishub!5e0!3m2!1sen!2sug!4v1737555744649!5m2!1sen!2sug"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:opacity-90"
                ></iframe>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 border-0 dark:border dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send a Message</h2>
                {isFormSubmitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300">Your message has been sent successfully. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">
                        Name
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">
                        Email
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-200">
                        Message
                      </Label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message here..." 
                        className="mt-1 resize-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400" 
                        rows={5}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white border-0 dark:border dark:border-blue-600 dark:hover:border-blue-700 transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
