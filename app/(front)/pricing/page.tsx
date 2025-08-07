import PricingPage from '@/components/PricingPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Pricing | Affordable Web Development in Uganda – Clancy Ssekisambu",
  description: "Explore transparent and affordable website pricing by Clancy Ssekisambu. Get high-quality web development services tailored to your business needs and budget in Uganda.",
  keywords: "Clancy Ssekisambu, web developer in Uganda, website designer Uganda, full stack web developer Uganda, freelance web developer Uganda, React developer Uganda, Next.js developer Uganda, Tailwind CSS developer, web developer near me, website developer Kampala, web development Uganda, affordable website design Uganda, website design near me, hire a web developer Uganda, custom websites Uganda, professional web development Uganda, mobile-friendly websites Uganda, SEO-friendly websites Uganda"
};

export default function page() {
  return (
    <div>
      <PricingPage/>
    </div>
  )
}
