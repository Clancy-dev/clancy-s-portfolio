import ContactPage from '@/components/ContactPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Clancy Ssekisambu | Let's Push Your Business Online",
  description: "Get in touch with Clancy Ssekisambu, a full stack web developer in Uganda. Whether you have a project in mind or just want to connect, Clancy is ready to collaborate and bring your ideas to life. Tel:+256 707013121 / +256 770983239",
  keywords: "Clancy Ssekisambu, web developer in Uganda, website designer Uganda, full stack web developer Uganda, freelance web developer Uganda, React developer Uganda, Next.js developer Uganda, Tailwind CSS developer, web developer near me, website developer Kampala, web development Uganda, affordable website design Uganda, website design near me, hire a web developer Uganda, custom websites Uganda, professional web development Uganda, mobile-friendly websites Uganda, SEO-friendly websites Uganda"
};


export default function page() {
  return (
    <div>
      <ContactPage/>
    </div>
  )
}
