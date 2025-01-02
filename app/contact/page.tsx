'use client'

import { useState } from 'react'
import AnimatedSection from '../../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedSection initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </AnimatedSection>
        <AnimatedSection initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
          </p>
          <ul className="space-y-2">
            <li>Email: clancy@example.com</li>
            <li>LinkedIn: linkedin.com/in/clancyssekisambu</li>
            <li>GitHub: github.com/clancyssekisambu</li>
          </ul>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  )
}

