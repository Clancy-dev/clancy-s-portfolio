import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const blogPosts = {
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
    image: "/placeholder.svg?height=400&width=800",
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
    image: "/placeholder.svg?height=400&width=800",
  },
  "website-best-marketing-investment": {
    title: "Why Your Website Is the Best Marketing Investment You'll Ever Make",
    content: `
      <h2 class="text-2xl font-bold mt-6 mb-4">It's Available 24/7</h2>
      <p class="mb-4">Unlike other marketing channels, your website never sleeps. It provides information, answers questions, and generates leads even while you're off the clock. This constant availability builds trust and ensures customers can always reach you.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">A Hub for All Your Marketing Channels</h2>
      <p class="mb-4">Your website serves as the central hub for all your marketing efforts. Whether through social media, email campaigns, or search engine ads, everything should drive traffic back to your website, where potential customers can take action.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Cost-Effective Advertising</h2>
      <p class="mb-4">Compared to traditional advertising methods, maintaining a website is more affordable and offers a higher return on investment. With tools like SEO and Google Analytics, you can track your website's performance and continuously optimize for better results.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Builds Trust and Credibility</h2>
      <p class="mb-4">A professional website with a clean design, fast loading speed, and informative content immediately establishes trust. Adding customer testimonials, case studies, and certifications further strengthens your credibility.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
      <p class="mb-4">A website is not just a marketing tool; it's an investment in the future of your business. It's cost-effective, scalable, and delivers measurable results that other channels can't match. If you haven't already, now is the time to invest in a website that works for you.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
}

type BlogPost = {
  title: string
  content: string
  image: string
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  return { title: post.title }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts] as BlogPost | undefined

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center">{post.title}</h1>
      <div className="prose max-w-none">
        <Image
          src={post.image || "/placeholder.svg"}
          alt="Blog post header image"
          width={800}
          height={400}
          className="w-full rounded-lg mb-8 shadow-lg"
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div className="mt-12">
        <Button asChild>
          <a href="/blog">Back to Blog</a>
        </Button>
      </div>
    </div>
  )
}

