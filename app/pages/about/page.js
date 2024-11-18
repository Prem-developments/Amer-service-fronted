import React from 'react'
import Header from '../../componets/Header'
import Footer from '@/app/componets/Footer'
import Aboutmain from '@/app/componets/about/Aboutmain'
import Aboutprovide from '@/app/componets/about/Aboutprovide'

const About = () => {
  return (
    <div>
      <Header/>
      <div>
      <Aboutmain/>
      <Aboutprovide/>
      </div>
      <Footer/>
    </div>
  )
}

export default About
