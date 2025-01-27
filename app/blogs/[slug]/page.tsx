import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const blogPosts = {
 "why-company-needs-website": {
    "title": "Why Does My Business Really Need a Website?",
    "content": `
      <h2 class="text-2xl font-bold mt-6 mb-4">It’s Essential for Reaching Your Audience</h2>
      <p class="mb-4">In today’s world, your audience is searching for you online. Consider this: if a potential customer needs a product or service like yours, they’re likely Googling it—whether it's searching for "best mobile repair in Kampala" or "affordable event planners." Without a website, your business is missing out on this crucial opportunity to connect.</p>
      <p class="mb-4">Take a look at any successful business today—from local shops to global brands—they all have a strong online presence. This is your chance to make your business visible, accessible, and credible. It’s the first step in turning interest into sales.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">It Establishes Instant Credibility</h2>
      <p class="mb-4">Your website is like a digital handshake that welcomes visitors into your business. When customers come across your website, they immediately form an impression of your brand. A well-crafted website tells them you're serious, professional, and trustworthy.</p>
      <p class="mb-4">Look at companies like Jumia or Kikuubo Online: their websites are not just online catalogs—they build trust, showcase customer reviews, and offer easy ways to contact them. Without such credibility, customers might hesitate, questioning the legitimacy of your business.</p>
      <p class="mb-4">You're working tirelessly, but customers keep questioning your legitimacy. They Google your business, and—nothing. No website, no trace of your business online. How can they trust you? A website establishes your business as credible and trustworthy in the digital world.</p>
      <p class="mb-4">A website provides social proof, reviews, and detailed information that customers need to feel confident. Without it, you're missing the most powerful tool to show you’re serious and ready to serve.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Your Business Works for You 24/7</h2>
      <p class="mb-4">Imagine having a business partner that works non-stop, even when you're asleep. That’s what your website can do. Your business is open 24/7—whether it’s 10 PM and someone in need of your services is browsing on their phone, or it’s 2 AM and an international customer is exploring your offerings.</p>
      <p class="mb-4">Consider an example: a local restaurant gets a booking for a party at midnight simply because their website was easy to find and offered clear, detailed information. That’s extra revenue made without anyone lifting a finger!</p>
      <p class="mb-4">For those using general systems, there you are struggling with a "System Error" message or staring at a blank screen as your sales platform crashes. You're frustrated, wondering why your business is losing leads. You need a customised system or custom tailored website which works tirelessly while you sleep, ensuring your business is always open, always ready to engage with customers, even when your systems go down.</p>
      <p class="mb-4">Imagine your website running smoothly, bringing in new customers at all hours. Your site never crashes—it’s always up and working to attract leads, provide information, and even close deals.</p>


      <h2 class="text-2xl font-bold mt-6 mb-4">It’s the Most Cost-Effective Marketing Tool</h2>
      <p class="mb-4">Let’s talk about cost-effective marketing. A well-maintained website costs a fraction of what traditional advertising—like print media or billboards—does, but it offers something those don’t: measurable results. With analytics, you can track exactly how many visitors come to your site, where they come from, and which pages are most engaging.</p>
      <p class="mb-4">For instance, a small clothing boutique might spend money on print flyers. However, they could invest the same amount in a website that showcases their products online, reaches a larger audience, and allows customers to shop directly. Not only do they save on printing costs, but they’re also generating more sales leads.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Showcase Your Brand Like Never Before</h2>
      <p class="mb-4">A website isn’t just a tool to display your services; it’s a powerful platform to showcase your brand and tell your story. Imagine a local startup that designs handmade jewelry. On their website, they don’t just list their products—they tell the story behind each piece, the artisans involved, and the values that drive their brand.</p>
      <p class="mb-4">This is how you create a connection with your audience. Customers buy from businesses they feel aligned with. A website allows you to showcase your uniqueness in ways social media or print ads can't.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">It Helps You Stay Competitive</h2>
      <p class="mb-4">Without a website, your business is at a serious disadvantage. Competitors who do have websites are already gaining your potential customers’ trust, collecting their contact information, and even closing sales while you remain offline.</p>
      <p class="mb-4">Take a look at any industry: whether it's retail, real estate, or even food delivery—businesses with websites are thriving. While your competitors continue to scale and improve their online presence, you’ll be stuck wondering where all your leads are going.</p>
      <p class="mb-4">Another case: You’re spending all your marketing budget on billboards, flyers, and ads. Yet, you’re still stuck—no sales, no leads. Your business needs a marketing tool that works around the clock. A website does just that: it offers cost-effective advertising that brings measurable results. Unlike traditional methods, your website can reach a vast audience, even when you’re off the clock.</p>
      <p class="mb-4">Let’s say you’re investing the same amount in a website—now, you’re reaching hundreds, even thousands, of potential customers who are actively searching for your business. That’s a marketing tool that works when everything else has failed.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
      <p class="mb-4">If you're still considering whether you need a website for your business, the answer is simple: YES, you absolutely do. In 2025, it's not just a luxury; it’s a necessity. A professional website will help your business gain visibility, credibility, and ultimately, more sales. Whether you’re just starting out or aiming for growth, a website is the ultimate tool to unlock your full potential.</p>
    `,
    "image": "/blog1.jpg?height=400&width=800"
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
    image: "/blog3.jpg?height=400&width=800",
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
    <div className="container mx-auto w-full min-h-[40vh] py-6 px-4  mt-[72px]">
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold mb-8 text-center text-gray-900 name-header">{post.title}</h1>
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
          <a href="/blogs">Back to Blog</a>
        </Button>
      </div>
    </div>
  )
}

