import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { AuthProvider } from "@/hooks/use-auth"
import { ThemeProvider } from "@/components/theme-provider"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "./api/uploadthing/core"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import Head from "next/head"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clancy Ssekisambu",
  description: "Full-stack developer and creative professional",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
              <title>Clancy Ssekisambu | Full Stack Web Developer in Uganda</title>
              <meta name="description" content="I’m Clancy Ssekisambu, a full stack web developer based in Uganda. I build modern, responsive websites and web apps using React.js, Next.js, and Tailwind CSS to help businesses grow online." />
              <meta name="keywords" content="Clancy Ssekisambu, web developer in Uganda, website designer Uganda, full stack web developer Uganda, freelance web developer Uganda, React developer Uganda, Next.js developer Uganda, Tailwind CSS developer, web developer near me, website developer Kampala, web development Uganda, affordable website design Uganda, website design near me, hire a web developer Uganda, custom websites Uganda, professional web development Uganda, mobile-friendly websites Uganda, SEO-friendly websites Uganda" />
      </Head>
      <body className={inter.className}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
