import BackHeader from '@/components/BackHeader'
import Footer from '@/components/Footer'
import React from 'react'

export default function Frontlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <BackHeader/>
      {children}
      <Footer/>
         
    </div>
  )
}
