import Faqs from '@/sections/Faqs'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Faqs/>
          <Footer />
    </div>
  )
}

export default page