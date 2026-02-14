import BackHeader from '@/components/BackHeader'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Frontlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header/>
      {/* <BackHeader/> */}
      {children}
      <Footer/>
         
    </div>
  )
}
