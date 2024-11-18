import React from 'react'
import Header from '../../componets/Header'
import Footer from '@/app/componets/Footer'
import Contactmain from '@/app/componets/contact/Contactmain'
import Faq from '@/app/componets/contact/Faq'

const Contact = () => {
  return (
    <div>
      <Header/>
      <div>
     <Contactmain/>
     <Faq/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
