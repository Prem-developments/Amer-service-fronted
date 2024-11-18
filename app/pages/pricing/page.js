import React from 'react'
import Header from '../../componets/Header'
import Footer from '@/app/componets/Footer'
import Pricemain from '@/app/componets/price/Pricemain'
import Whowedo from '@/app/componets/price/Whowedo'


const Pricing = () => {
  return (
    <div>
      <Header/>
      <div>
      <Pricemain/>
      <Whowedo/>
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing
