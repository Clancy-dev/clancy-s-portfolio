import Home from '@/components/Home'
import Head from 'next/head'
import React from 'react'

export default function page() {
  return (
    <div>
      <Head>
        <title>Clancy Ssekisambu | Full Stack Web Developer in Uganda</title>
        <meta name="description" content="I’m Clancy Ssekisambu, a full stack web developer based in Uganda. I build modern, responsive websites and web apps using React.js, Next.js, and Tailwind CSS to help businesses grow online." />
        <meta name="keywords" content="Clancy Ssekisambu, web developer in Uganda, website designer Uganda, full stack web developer Uganda, freelance web developer Uganda, React developer Uganda, Next.js developer Uganda, Tailwind CSS developer, web developer near me, website developer Kampala, web development Uganda, affordable website design Uganda, website design near me, hire a web developer Uganda, custom websites Uganda, professional web development Uganda, mobile-friendly websites Uganda, SEO-friendly websites Uganda" />
      </Head>
      <Home/>   
    </div>
  )
}
