import '../styles/style.scss'

import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/theme-provider'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from './api/uploadthing/core'
import { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://clancy-s-portfolio-s.vercel.app/'),
  title: {
    default: "Clancy Ssekisambu | Full Stack Website Developer in Uganda",
    template: "%s | Clancy Ssekisambu | Full Stack Website Developer in Uganda"
  },
  description: 'Clancy Ssekisambu is a professional website developer in Uganda specializing in modern, responsive, and user-friendly web designs. Contact for affordable website development services at +256 770983239 or +256 707013121. ',
  applicationName: 'Clancy Ssekisambu Portfolio',
  keywords: [
    "Clancy",
    "Ssekisambu",
    "Clancy Ssekisambu",
    "Rogers Clancy Ssekisambu",
    "Clancy Rogers Ssekisambu",
    "Ssekisambu Rogers Clancy",
    "Rogers Clancy",
    "Ssekisambu Clancy",
    "Ssekisambu Rogers",
    "Website developer Uganda",
    "Web design services Kampala",
    "Affordable website development Uganda",
    "Full stack developer Uganda",
    "Freelance web developer Uganda",
    "Professional website designer Kampala",
    "E-commerce website development Uganda",
    "Custom website development Uganda",
    "SEO services Uganda",
    "Responsive web design Uganda",
    "Mobile-friendly websites Uganda",
    "Top web developers Uganda",
    "Business website design Kampala",
    "Portfolio website design Uganda",
    "Modern web design trends Uganda",
    "Hire web developer Uganda",
    "Best website developers Kampala",
    "Dynamic website solutions Uganda",
    "WordPress website development Uganda",
    "Frontend developer Kampala",
    "Backend developer Uganda",
    "JavaScript developer Uganda",
    "React developer Uganda",
    "Website maintenance services Uganda",
    "Custom web applications Uganda",
    "Web development company Uganda",
    "Top-rated website developers Uganda",
    "Online business solutions Kampala",
    "Creative website design Uganda",
    "Website redesign services Uganda",
    "Secure websites Uganda",
    "Fast-loading websites Uganda",
    "Tech-savvy web developer Uganda",
    "UI/UX design services Kampala",
    "Website hosting Uganda",
    "Domain registration Uganda",
    "Digital marketing services Uganda",
    "Web programming Uganda",
    "Affordable web solutions Kampala"
  ],
  authors: [{ name: 'Clancy Ssekisambu' }, { url: 'https://clancy-s-portfolio-s.vercel.app/' }],
  creator: 'Clancy Ssekisambu',
  publisher: 'Clancy Ssekisambu',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    }
  },
  openGraph: {
    title: 'Clancy Ssekisambu | Full Stack Website Developer in Uganda',
    description: 'Clancy Ssekisambu offers website development, SEO, and digital marketing services in Uganda. Specializing in responsive, modern web design for businesses and individuals.',
    url: 'https://clancy-s-portfolio-s.vercel.app/',
    siteName: 'Clancy Ssekisambu Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    title: 'Clancy Ssekisambu | Full Stack Website Developer in Uganda',
    description: 'Clancy Ssekisambu offers website development, SEO, and digital marketing services in Uganda. Specializing in responsive, modern web design for businesses and individuals.',
    site: 'Clancy Ssekisambu Portfolio',
  },
};


const structuredData = `
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://clancy-s-portfolio-s.vercel.app/",
  "name": "Clancy Ssekisambu Portfolio",
  "description": "Clancy Ssekisambu is a Full Stack Web Developer in Uganda offering modern, responsive, and professional website development services.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://clancy-s-portfolio-s.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "mainEntity": [
    {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/",
      "name": "Home"
    },
    {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/about",
      "name": "About"
    },
    {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/pricing",
      "name": "Pricing"
    },
    {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/project",
      "name": "Projects"
    },
     {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/blogs",
      "name": "Contact"
    },
    {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/contact",
      "name": "Contact Me"
    },
     {
      "@type": "WebPage",
      "@id": "https://clancy-s-portfolio-s.vercel.app/docs",
      "name": "Docs"
    }
  ]
}
`;



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body>
        
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        
          <Header />
          <main>{children}</main> 
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

