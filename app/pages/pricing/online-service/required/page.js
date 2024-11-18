import Faq from '@/app/componets/contact/Faq'
import Footer from '@/app/componets/Footer'
import Header from '@/app/componets/Header'
import Requiredform from '@/app/componets/required/Requiredform'

import React from 'react'

const Required = () => {
  return (
    <div>
      <Header/>
      <div>
        <Requiredform/>
        <Faq/>
      </div>
      <Footer/>
    </div>
  )
}

export default Required
