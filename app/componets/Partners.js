import React from 'react'

const Partners = () => {
  return (
    <div className='md:py-20 py-5 lg:px-32 md:px-12  px-5  w-full flex flex-wrap justify-center  items-center '>
        <div>
            <h1 className='text-black md:font-bold font-semibold md:text-4xl text-2xl undefined'>
                Our Partners
            </h1>
        </div>
        <div className='flex justify-between flex-wrap items-center w-full py-10'>
        <img alt="img" loading="lazy" width="310" height="152" decoding="async" data-nimg="1" className="md:w-1/5 w-2/5 mt-[-20px]" style={{color:'transparent'}} src='/assets/partner1.svg'/>
        <img alt="img" loading="lazy" width="506" height="145" decoding="async" data-nimg="1" className="md:w-1/5 w-2/5" style={{color:'transparent'}} src='/assets/partner2.png' />
        <img alt="img" loading="lazy" width="600" height="161" decoding="async" data-nimg="1" className="md:w-1/5 w-2/5 mt-[6px]" style={{color:'transparent'}} src='/assets/partner3.png'/>
        <img alt="img" loading="lazy" width="233" height="229" decoding="async" data-nimg="1" className="md:w-1/5 w-2/5" style={{color:'transparent'}} src='/assets/partner4.webp' />
        </div>
      
    </div>
  )
}

export default Partners
