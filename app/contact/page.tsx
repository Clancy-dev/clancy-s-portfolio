import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { WhatsappIcon } from "@/components/WhatsappIcon"
import TelephoneNumbers from "@/components/TelephoneNumbers"


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green- mt-[72px]">
      
      <main className="container mx-auto px-4 py-8">
        <section className="relative h-64 mb-12">
          <Image src="/contact.jpg" alt="Contact Hero" layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          </div>
        </section>
        <div className="w-full h-[15vh] flex items-center justify-center flex-col bg-gray-700 text-gray-50 rounded-br-[15px] rounded-tl-[15px] border-b-1 border-white">
            <h1>Tel: +256 770983239</h1>
            <h1>Tel: +256 707013121</h1>
            <h1>Email: clancyro1000@gmail.com</h1>
            
          </div>

          <div className="w-full">
          <div className="w-full name-header text-gray-900 flex items-center justify-center p-[1rem] ">
            Please feel free to leave a message, i would really love to hear from you!
          </div>

        </div>
      
        

        <Card className="w-full max-w-2xl mx-auto mb-12">
        
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 name-header">Find Me</h2>
          <p className="mb-4">I am located at Kireka, Nakimbugwe Building, 1st Floor, Desishub Ltd.</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3590896938616!2d32.647460641681214!3d0.3463231551616998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db9faf2330611%3A0x8922b0d5569fed7d!2sDesishub!5e0!3m2!1sen!2sug!4v1737555744649!5m2!1sen!2sug"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
            ></iframe>
          </div>
        </section>
      </main>

      <WhatsappIcon />
    </div>
  )
}

