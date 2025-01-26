"use client"

import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type BlogPost = {
  title: string;
  content: string;
  image: string;
};

type BlogParams = {
  slug: string;
};

const blogPosts: Record<string, BlogPost> = {
  "why-company-needs-website": {
    title: "Why Does My Company Really Need a Website?",
    content: `
      <h2 class="text-2xl font-bold mt-6 mb-4">Your Customers Expect It</h2>
      <p class="mb-4">In today's world, customers turn to Google before they make decisions. Imagine a potential customer searches for your product or service and doesn't find your company online. What happens? They move to your competitor.</p>
      <p class="mb-4">Having a website ensures that when someone is searching for what you offer, they find you first. It gives them the information they need to trust your business and take action.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">It Establishes Credibility</h2>
      <p class="mb-4">A well-designed website gives your business instant credibility. It's like a professional handshake in the digital world. Customers trust businesses with websites more than those without because a website shows you're established, serious, and ready to serve.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">It Works for You 24/7</h2>
      <p class="mb-4">Unlike a physical storefront, a website never sleeps. Whether it's 2 PM or 2 AM, your website is always available to share information, attract leads, and close sales.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">It's Cost-Effective Marketing</h2>
      <p class="mb-4">Think of your website as a billboard—but way smarter. For a fraction of what you'd spend on traditional advertising, your website can reach thousands of potential customers, showcase your products and services in detail, and run targeted campaigns with measurable results.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
      <p class="mb-4">In 2025, having a website isn't a luxury—it's a necessity. It's how customers find you, trust you, and connect with your business. Whether you're just starting out or looking to grow, a professional website is the key to staying relevant, competitive, and successful.</p>
    `,
    image: "/blog1.jpg?height=400&width=800",
  },
  "cost-of-not-having-website": {
    title: "The Cost of Not Having a Website: What Your Business Could Be Losing",
    content: `
      <h2 class="text-2xl font-bold mt-6 mb-4">Missed Opportunities to Attract Customers</h2>
      <p class="mb-4">A professional website acts as your digital storefront, accessible 24/7. Without one, potential customers searching for products or services online will turn to your competitors who have an online presence.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Loss of Credibility</h2>
      <p class="mb-4">In today's world, customers expect businesses to have a website. Not having one can make your business appear less legitimate or untrustworthy. A well-designed website with testimonials, case studies, and professional branding helps establish your credibility.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Limited Reach and Visibility</h2>
      <p class="mb-4">Without a website, your reach is confined to physical or local interactions. A website allows you to connect with a global audience, attract customers from different regions, and grow beyond geographical limitations.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Increased Dependence on Social Media</h2>
      <p class="mb-4">While social media platforms are great for marketing, they have limitations. You don't own your social media accounts—they can change algorithms, policies, or even suspend accounts, impacting your business. A website ensures you own your digital presence.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
      <p class="mb-4">Not having a website costs your business more than you think—lost customers, reduced credibility, missed revenue, and limited growth. Don't let your competitors outshine you online. Take the first step towards creating your website and watch your business thrive in the digital age.</p>
    `,
    image: "/blog2.jpg?height=400&width=800",
  },
  // Add other blog posts here...
};

export default function BlogPage({ params }: { params: BlogParams }) {
  const { slug } = params;
  const blogPost = blogPosts[slug];

  if (!blogPost) {
    notFound();
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      <Image src={blogPost.image} alt={blogPost.title} width={800} height={400} />
      <Button>Read More</Button>
    </div>
  );
}
 