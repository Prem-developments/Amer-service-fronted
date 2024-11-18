import Link from 'next/link'
import React from 'react'
import Header from './componets/Header'
import Hero from './componets/Hero'
import Who from './componets/Who'
import About from './componets/About'
import Wedo from './componets/Wedo'
import Provide from './componets/Provide'
import Partners from './componets/Partners'
import Footer from './componets/Footer'

const Home = () => {
  return (
    <div>

      <Header/>
      <div>
        <Hero/>
        <Who/>
        <About/>
        <Wedo/>
        <Provide/>
        <Partners/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
