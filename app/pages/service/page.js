import React from 'react'
import Header from '../../componets/Header'
import Footer from '@/app/componets/Footer'
import Servicemain from '@/app/componets/service/Servicemain'
import Whatwedo from '@/app/componets/service/Whatwedo'


const Service = () => {
  return (
    <div>
      <Header/>
      <div>
      <Servicemain/>
      <Whatwedo/>
      </div>
      <Footer/>
    </div>
  )
}

export default Service
