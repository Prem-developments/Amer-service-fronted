import Faq from '@/app/componets/contact/Faq'
import Footer from '@/app/componets/Footer'
import Header from '@/app/componets/Header'
import Amerservice from '@/app/componets/price/online-service/Amerservice'
import Emirates from '@/app/componets/price/online-service/Emirates/Emirates'
import Example from '@/app/componets/price/online-service/Example'
import Firstbutton from '@/app/componets/price/online-service/Firstbutton'
import Osmain from '@/app/componets/price/online-service/Osmain'
import Pricemain from '@/app/componets/price/Pricemain'
import React from 'react'

const Onlineservice = () => {
  return (
    <div>
      <Header/>
      <div>
      <Osmain/>
       <Amerservice/>
       <Faq/>
       
      </div>
      <Footer/>
    </div>
  )
}

export default Onlineservice
