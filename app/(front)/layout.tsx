import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Frontlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
      <div className='mt-[72px]'>
        {children}
      </div>
      <Footer/>    
    </div>
  )
}
