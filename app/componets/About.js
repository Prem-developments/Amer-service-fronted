import Link from 'next/link'
import React from 'react'
import './Header.css'
const About = () => {
  return (
    <div className='md:py-20 py-10 lg:px-20 md:px-10 px-5   md:min-h-[80vh]   w-full flex justify-center items-center'>
      <div className='flex w-full lg:flex-row flex-col-reverse justify-between'>
        <div className='lg:w-[45%] w-full '>
        <img alt=" " loading="lazy" width="545" height="515" decoding="async" data-nimg="1" className=" w-3/4  mx-auto" style={{color:'transparent'}} src='/assets/about.svg'/>
        </div>
       <div className='lg:w-1/2 w-full flex items-center md:relative'>
        <div className='lg:space-y-5 space-y-4  py-10 w-full bg-white '>
            <div>
                <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl '>About Us</h1>
            </div>
            <div>
                <h1 className='md:border-l-[8px] border-l-[6px] border-black  text-grey1 font-[400] md:text-lg text-md lg:w-3/4  !border-0 text-[#4d4d4d]'>We understand the challenges that can come with paperwork, long queues, and confusing processes.</h1>
            </div>
            <div>
                <h1 className='md:border-l-[8px] border-l-[6px] border-black md:pl-10 pl-5 text-grey1 font-[400] md:text-lg text-md lg:w-5/6 text-[#4d4d4d]'>Provides services ranging from issuing entry permits, issuing and renewals of a residency visa, visa cancellation and other related services provided by other government institutions and departments.</h1>
            </div>
            <Link href='/about' >
            <div className='my-2'>
                <button className='flex gap-2 button-67 justify-between items-center btn text-white py-3 px-4 p-[24px]  hover:scale-105 transition-all duration-300 undefined'>
                Know more about Amer 247
                <div className='w-[6px] bg-white self-stretch min-h-[5px] undefined'></div>
                </button>
            </div>
            </Link>
        </div>
       </div>
      </div>
    </div>
  )
}

export default About
