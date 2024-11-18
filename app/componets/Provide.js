import React from 'react'
import './Header.css'
const Provide = () => {
  return (
    <div className='md:py-20 py-10 lg:px-24 md:px-12  px-5  w-full flex  items-center '>
      <div className='flex lg:flex-row flex-col-reverse justify-evenly items-center gap-5 w-full'>
        <div className='lg:w-[45%] w-full '>
        <img alt="" loading="lazy" width="1069" height="575" decoding="async" data-nimg="1" style={{color:'transparent'}} src='/assets/provide.webp'/>
        </div>
   
      <div className='lg:w-[50%] w-full space-y-7'>
        <div className=''>
            <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl '> Amer 247 provides documents pick up and drop off service</h1>

        </div>
        <div className='hello border-l-[8px] text-md md:text-lg border-[#ff512f] md:pl-10 pl-5 space-y-4'>
        <li> 
            The only Government services center operating 24 hours in the UAE.</li>
            <li>The only Government services center operating on Friday and public holidays.</li>
            <li>There are sufficient parking space available in the area.</li>
            <li>One stop shop (you can finish all your Government transactions at Amer 247)</li>
            <li>Our customer happiness consultants are well trained to cater to all your needs.</li>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Provide
