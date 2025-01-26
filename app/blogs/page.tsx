"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Why Does My Company Really Need a Website?",
    excerpt:
      "In the digital age, the question isn't whether your company needs a website—it's why you haven't built one already. Discover the essential reasons for having a website.",
    slug: "why-company-needs-website",
    image: "/blog1.jpg?height=200&width=400",
  },
  {
    id: 2,
    title: "The Cost of Not Having a Website: What Your Business Could Be Losing",
    excerpt:
      "Explore the hidden dangers and missed opportunities of operating without a website in today's digital era.",
    slug: "cost-of-not-having-website",
    image: "/blog2.jpg?height=200&width=400",
  },
  {
    id: 3,
    title: "Why Your Website Is the Best Marketing Investment You'll Ever Make",
    excerpt:
      "Learn why your website is more than just an online address; it's the heart of your marketing strategy and the ultimate marketing tool.",
    slug: "website-best-marketing-investment",
    image: "/blog3.jpg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="w-full min-h-[40vh] mt-[72px] pt-3 pb-0">
      <motion.h1
        className="text-4xl font-bold  mb-6 text-center text-gray-900 name-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Blog
      </motion.h1>
      <div className="actual-blog-container">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={`/blogs/${post.slug}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

